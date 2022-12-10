---
layout: post
title: "MCT Blog Sonified!"
date: 2022-12-09 22:35:00 +0200
categories: audio-programming
author: Ahmet Emin Memis
image: /assets/image/2022-12-09-ahmetem-mct-blog-sonified-cover.jpg
keywords: sonification, blog, python
excerpt: "Making sound out of this blog."
---

<figure style="float: none">
   <img src="/assets/image/2022-12-09-ahmetem-mct-blog-sonified-cover.jpg" alt="" title="Photo by Jimmy Chan" width="auto" />
</figure>

This blog has been held by students and alumni of the MCT program for the last four years. Today, it contains 370+ posts about topics ranging from audio programming to musical interaction, concerts, and experiences. According to wordstotime.com, to read this beautiful blog entirely, you would spend 286 hours. Don't worry! I have sonified it for you so that it takes only 15 minutes!

Before we dive into this, here are some fun facts about our blog!
- Amongst 2233883 words typed in the blog so far, the three most frequent words were _audio_, _sound_, and _music_.
- The word _We_ was used 1.43 times more than the word _I_.
- The longest word in the MCT blog is _multiinstrumentalist_ with 20 characters - if we don't count the word _reverberaaatioooooooon_ with 22 :)

To make a sound out of data, it should be in the shape we want it to be. Cleaning, arranging, and scaling are crucial at that point, especially in appropriately mapping the data to specific parameters. Then, we can do the science to define _sound_ based on the numbers at hand. To achieve this, I started by performing a data cleaning. I scaled the data afterward, depending on the concept I followed. Lastly, I mapped the values to specific sound parameters to make it something to listen to! Figure 1 shows the flow of this sonification process.

<figure style="float: none">
   <img src="/assets/image/2022-12-09-ahmetem-mct-blog-sonified-diagram-01.png" alt="Sonification Process" title="Sonification Process" width="auto" />
</figure>

## Gathering the Data
The MCT Blog runs on GitHub Pages with a GitHub repo in the background, which allowed me to get each  blog as a seperate file in markdown format. Each post has the same structure: a frontmatter with meta information (e.g., date, tags, authors), blog post content in markdown format with links to images, videos, and embedded elements. This structure made the data cleaning relatively more manageable.

I started the data cleaning by excluding the frontmatter from every file, which basically contains repetitive out-of-context words. Next, I scraped out markdown signs using BeautifulSoup. Then, I cleaned the data further using a set of regular expressions including lowercasing, removing punctuations, and cleaning white spaces.

```python
path = './posts'
files = os.listdir(path)

# iterate files, remove frontmatter and parse to get text
all = ''
for i, file in enumerate([s for s in files if s.endswith('.md')]):
    text = ''
    with open(os.path.join(path, file), encoding = 'utf-8') as f:
        md = f.read()
        md = re.sub("\n", " ", md)
        md = re.sub(r"---.*---", '', md)
        html = markdown.markdown(md)
        soup = BeautifulSoup(html, features='html.parser')
        text = soup.get_text()
        all += text

# clean text
cleaned = all.lower()
cleaned = re.sub("(\[.*\])", "", cleaned)
cleaned = re.sub("(http[s]?\://\S+)", "", cleaned)
cleaned = re.sub("[0-9]", "", cleaned)
cleaned = re.sub("\S*@\S*\s?", "", cleaned)
cleaned = re.sub("/\S+/\S+", "", cleaned)
cleaned = re.sub("\n", " ", cleaned)
cleaned = re.sub(r"[^\w\s]", "", cleaned)
cleaned = cleaned.translate(str.maketrans('', '', string.punctuation))
cleaned = re.sub("\s+", " ", cleaned)

words = cleaned.split(' ')

# save all words
with open('all_words.txt', 'w', encoding='utf-8') as f:
    f.write(cleaned)
```

The steps above resulted in having an array of cleaned words. Next, I cleaned the outliers, words such as "all", "and", "to", words that are too long, and words that are infrequent. 

```python
df_words = pd.DataFrame(words, columns = ['words'])

# remove unwanted words, remove extremes
unwanted_words = ['', 'the', 'to', 'and', 'of', 'a', 'in', 'is', 'for', 'with', 'that']
df_words = df_words[~df_words['words'].isin(unwanted_words)]
df_words['w_len'] = df_words['words'].str.len()
df_words = df_words[df_words['w_len'] < 20]

# calculate frequencies, remove less frequent
counts = Counter(df_words['words'])
df_freq = pd.DataFrame(counts.most_common(), columns=['words','freq'])
df_freq = df_freq[df_freq['freq'] > 10]
```


## Data Preprocessing and Mapping
After the first cleaning part, words' frequency of appearing in the entire blog gave me frequencies ranging from 11 to 2697. This seems like a good range of numbers to be used as pitches. I simply scaled it up by 2.5. Secondly, the lengths ranged from 1 to 17. I used the following formula to scale it up into a range of 11 to 1797 to be used as milliseconds of each audio piece.

x' = (x^2.5 * 1.5 + 10) / 1000

Finally, I 10-sample averaged the data, resulting in 6779 words to start sonification with!

```python
df = df_words.merge(df_freq, how='left')

# scaling
df['freq'] = df['freq']*2.5
df['w_len'] = (df['w_len']**2.5*1.5+10).astype(int)

# average the data
df_avg = pd.DataFrame()
roll = 10
step = 10
df_avg['f_mean'] = df['freq'].rolling(roll, step=step).mean().dropna().reset_index(drop=True)
df_avg['w_len'] = df['w_len'].rolling(roll, step=step).mean().dropna().reset_index(drop=True)
```

## Sonification
For every word, I generated short audio samples, which out together at the end to create a musical piece. I decided to map each word's frequency (i.e., how many times each word appeared on the website) to as the leading pitch. I used each word's length as the duration of each audio sample. This way, I expected to obtain a sound pattern that transmits the characteristics of the text (i.e., frequent words sound high-pitched, and longer words make longer sounds).

I ended up having 157.7 ms long audio pieces on average generated for each word. I applied hamming window to each and combined them one after another, to have a piece of music! Code below does the job.


```python
# sonify

sr = 48000
sr_ms = int(sr/1000)
signal = np.array([])
for i, row in df_avg.iterrows():
    # for every event create audio signal and append it to the main signal
    freq = row['f_mean']
    note_dur = row['w_len'] #ms
    start_sample = i*note_dur*sr_ms
    dur_sample = note_dur*sr_ms

    # sin wave
    f = freq
    A = 1 #vel/max_vel
    t = np.arange(0,note_dur/1000,1/sr)
    s = A*np.sin(2*np.pi*f*t)

    # window
    window = scipy.signal.windows.general_hamming(len(s), alpha=0.5)

    # append
    signal = np.concatenate((signal, s*window))

sf.write('mct_blog_sonified.wav', signal, sr)
```

## Please listen to the result here!

<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2022_12_09_ahmetem_mct_blog_sonified.wav" type="audio/mpeg">
    Alternate Text
  </audio>
  <figcaption></figcaption>
</figure>
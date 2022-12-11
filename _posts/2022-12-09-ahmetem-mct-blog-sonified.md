---
layout: post
title: "MCT Blog Sonified!"
date: 2022-12-09 22:35:00 +0200
categories: audio-programming
author: Emin Memis
image: /assets/image/2022_12_09_ahmetem_mct_blog_sonified_cover.jpg
keywords: sonification, blog, python
excerpt: "Making sound out of this blog."
---

<figure style="float: none">
   <img src="/assets/image/2022_12_09_ahmetem_mct_blog_sonified_banner.jpg" width="auto"  alt="" title="Photo by Jimmy Chan" width="auto" />
</figure>

This blog has been held by students and alumni of the MCT program for the last four years. Today, it contains 370+ posts about topics ranging from audio programming to musical interaction, concerts, and experiences. According to wordstotime.com, to read this beautiful blog entirely, you would spend 286 hours. But don't worry, you can listen to it!

Before we dive into this, here are some fun facts about our blog!
- Amongst **_2334573_** words typed in the blog so far.
- The three most frequent words were **_audio_**, **_sound_**, and **_music_**.
- The word **_We_** was used **_1.43_** times more than the word **_I_**.
- The longest word in the MCT blog is **_multiinstrumentalist_** with 20 characters - if we don't count the word _reverberaaatioooooooon_ with 22 :)

To make a sound out of data, it should be in the shape we want it to be. Cleaning, arranging, and scaling are crucial, especially in appropriately mapping the data to specific parameters. Then, we can create _sound_ based on the numbers at hand. For this data, I started off by excluding some parts of the texts, removing unwanted words and filtering. Then, I scaled it before mapping it to specific sound parameters. Finally, I generated sound based on this mapping. Diagram below shows this sonification process.

<figure style="float: none">
   <img src="/assets/image/2022_12_09_ahmetem_mct_blog_sonified_diagram_01.png" alt="Sonification Process" title="Sonification Process" width="auto" />
</figure>

## Gathering the Data
The MCT Blog runs on GitHub Pages with a GitHub repo in the background, which allowed me to get each blog as a seperate file in markdown format. Each post had the same structure: a frontmatter with meta information (e.g., date, tags, authors), blog post content in markdown format with links to images, videos, and embedded elements. This structure made the data cleaning relatively more manageable.

I started the cleaning the data by excluding the frontmatter from every file, which basically contains repetitive out-of-context words. Next, I scraped out markdown signs using BeautifulSoup. I cleaned the data further using a set of regular expressions including lowercasing, removing punctuations, and cleaning white spaces.

```python
path = './_posts'
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

# save all words
with open('all_words.txt', 'w', encoding='utf-8') as f:
    f.write(cleaned)

words = cleaned.split(' ')
df_words = pd.DataFrame(words, columns = ['words'])
```

The steps above resulted in having an array of cleaned words. Next, I cleaned the outliers, words such as "all", "and", "to", words that are too long, and words that are too much or less frequent. 

```python
# remove unwanted words, remove extremes
unwanted_words = ['', 'the', 'to', 'and', 'of', 'a', 'in', 'is', 'for', 'with', 'that']
df_words = df_words[~df_words['words'].isin(unwanted_words)]
df_words['w_len'] = df_words['words'].str.len()
df_words = df_words[(df_words['w_len'] > 1) & (df_words['w_len'] < 20)]

# calculate frequencies, remove less frequent
counts = Counter(df_words['words'])
df_freq = pd.DataFrame(counts.most_common(), columns=['words','freq'])
df_freq = df_freq[(df_freq['freq'] > 10) & (df_freq['freq'] < 1500)]

df = df_words.merge(df_freq, how='left')
df = df.dropna()
```

## Data Preprocessing and Mapping
After the first cleaning part, words' frequency of appearing in the entire blog gave me values ranging from 11 to 1323. I simply scaled it up by 10. Secondly, the lengths ranged from 1 to 15. I multiplied it by 2 to be used as milliseconds of each audio piece. However, this can be scaled globally in the final step using th _speed_ variable.

```python
# scaling
df['freq'] = df['freq']*10-90
df['w_len'] = df['w_len']*5
```

## Sonification
For every word, I generated short audio samples, which come together to create a musical piece. I decided to map each word's frequency (i.e., how many times each appeared on the website) as the leading pitch. I used each word's length as the duration of each audio sample. This way, I expected to obtain a sound pattern that reflects the characteristics of the text (i.e., frequent words sound high-pitched, and longer words make longer sound).

I ended up having 5.6 ms long audio pieces on average generated for each word. I applied hamming window to each and combined them one after another, to have a piece of music! Code below does the job.


```python
# sonify

sr = 48000
sr_ms = int(sr/1000)
signal = np.array([])
l = len(df.index)
speed = 0.5
for i, row in df[:2000].iterrows():
    freq = row['freq']
    note_dur = row['w_len']/speed #ms
    start_sample = i*note_dur*sr_ms
    dur_sample = note_dur*sr_ms

    # sin wave
    f = freq
    A = 1
    t = np.arange(0,note_dur/1000,1/sr)
    s = A*np.sin(2*np.pi*f*t)

    # window
    window = scipy.signal.windows.general_hamming(len(s), alpha=0.5)

    # append
    signal = np.concatenate((signal, s*window))

sf.write('mct_blog_sonified.wav', signal, sr)
```

## Here is the result!

<figure style="float: none">
  <audio controls>
    <source src="https://www.uio.no/english/studies/programmes/mct-master/blog/assets/audio/2022_12_09_ahmetem_mct_blog_sonified.wav" type="audio/mpeg">
    MCT Blog Sonified!
  </audio>
  <figcaption></figcaption>
</figure>
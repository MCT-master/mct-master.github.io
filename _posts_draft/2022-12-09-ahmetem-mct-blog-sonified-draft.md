# MCT Blog Sonified!

_Making sound out of this blog._

- (2022-12-09-ahmetem-mct-blog-sonified-cover.jpg)

This blog has been held by students and alumni of the MCT program for the last four years. Today, it contains 370+ posts about topics ranging from audio programming to musical interaction, concerts, and experiences. According to wordstotime.com, to read this beautiful blog entirely, you would spend 286 hours. Don't worry! I have sonified it for you so that it takes only 12 minutes!

Before we dive into this, here are some fun facts about our blog!
- Amongst 2233883 words typed in the blog so far, the three most frequent words were _audio_, _sound_, and _music_, followed by _used_, _some_ and _system_.
- The word _We_ was used 1.43 times more than the word _I_.
- The longest word in the MCT blog is _multiinstrumentalist_ with 20 characters - if we don't count the word _reverberaaatioooooooon_ with 20 :)

To make a sound out of data, it should be in the shape we want it to be. Cleaning, arranging, and scaling are crucial at that point, especially in appropriately mapping the data to specific parameters. Then, we can do the science to define _sound_ based on the numbers at hand. To achieve this, I started by performing a data cleaning. I scaled the data afterward, depending on the concept I followed. Lastly, I mapped the values to specific sound parameters to make it something to listen to! Figure 1 shows the entire flow of this sonification process.

- (2022-12-09-ahmetem-mct-blog-sonified-diagram-01)

## Gathering the Data
The MCT Blog runs on GitHub Pages with a GitHub repo in the background, which allowed me to get every single blog in markdown format. Each post has the same structure: a frontmatter with meta information (e.g., date, tags, authors), post content in markdown format with links to images, videos, and embedded elements. This structure made the data cleaning relatively more manageable.

I started the data cleaning by excluding the frontmatter from every file containing repetitive out-of-context words. Next, I scraped out markdown signs using BeautifulSoup. Then, I cleaned the data further using a set of regular expressions, which included lowercasing, removing punctuations, and cleaning white spaces.

```python
path = './posts'
files = os.listdir(path)

# iterate files, get text, remove frontmatter and parse to get text
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
```

The steps above resulted in having an array of cleaned words. Next, I cleaned the outliers, words such as "all", "and", "to", words that are too long, and words that are infrequent. Finally, I 25-sample averaged the data, resulting in 6779 words to start sonification with!

```python
words = cleaned.split(' ')
df_words = pd.DataFrame(words, columns = ['words'])

# remove unwanted words, create df
unwanted_words = ['', 'the', 'to', 'and', 'of', 'a', 'in', 'is', 'for', 'with', 'that']
df_words = df_words[~df_words['words'].isin(unwanted_words)]

# calculate frequencies
counts = Counter(words)
df_freq = pd.DataFrame(counts.most_common(), columns=['words','freq'])
```

```python
df = df_words.merge(df_freq, how='left')

# filter and scale the freq.
df = df[df['freq']>10]
df['freq'] = df['freq']*2.5

# create and scale word lengths data
df['w_len'] = df['words'].str.len()
df['w_len'] = (df['w_len']**2.5*1.5+10).astype(int)

df
```

## Sonification Concept
To represent the blog text, I decided to express each word's length
freq to pitch
length to duration
I decided to map each word's frequency (i.e., how many times each word appeared on the website) to the sound's leading pitch. 
Secondly, I used word lengths as duration.
This way, I expected to obtain a sound pattern that highly matches the text (frequent words sound high-pitched, and longer words make longer sounds). 


- (freq calc step somewhere)

## Data Preprocessing and Mapping
Words' frequency of appearing in the entire blog gave me frequencies ranging from 1??? to 3005. This seems like a good range of numbers to be used as pitches. I simply scaled it up by 2.5. Secondly, the lengths ranged from # to ##. I used the following formula to scale it up into a range of # ## to be used as milliseconds of each audio piece.

$$ x' = {x^2*1.5+10 \over 1000} $$

Here is the python code piece for data preprocessing and mapping

```python
# create averaged dataframe
df_avg = pd.DataFrame()
roll = 25
step = 25
df_avg['f_mean'] = df['freq'].rolling(roll, step=step).mean().dropna().reset_index(drop=True)
df_avg['w_len'] = df['w_len'].rolling(roll, step=step).mean().dropna().reset_index(drop=True)

df_avg
```

## Soundification

Iterating the words, I generated audio samples for each of them using their corresponding features, # ms long on average. I applied hamming window in order # for each piece and conjoined them to have a piece of music!

audio wavform
|   \
5 words' sample
| | |
5 words

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

for i in df_avg.index:
    start_sample = i*note_dur*sr_ms
    dur_sample = note_dur*sr_ms

sf.write('mct_blog_sonified.wav', signal, sr)
```

Please listen to the result here!

- (result in youtube)


const className = "waveform";
const waveformHeight = 64;
const colors = [
  "#ffa600",
  "#328d78",
  "#D93821",
  "#1869ca",
  "#D57EBE",
  "#BDBC45",
  "#56BBCC",
];

const initWaveforms = () => {
  // get all divs with class="waveform" in a post
  let waveFormDivs = document.getElementsByClassName(className);

  // if there are no waveform divs, we return;
  if (!waveFormDivs.length) return;

  // for each waveform div in a post.
  Object.values(waveFormDivs).forEach((container, index) => {
    let playButton;
    let waveSurfer;
    let containerId = "waveform-" + index;
    let path = container.getAttribute("path");

    // if no path, return
    if (!path) return console.log("No waveform path found/provided ...");

    container.id = containerId;

    // create play/pause button element.
    playButton = createPlayButton(index);

    // create wavesurfer instance and link it to our container.
    waveSurfer = createWaveSurfer(container);

    // load the audio into the wavesurfer
    waveSurfer.load(path);

    // when the audio is fully loaded,
    waveSurfer.once("ready", () => {
      // add the playButton underneath the waveform container
      container.appendChild(playButton);

      // initalize the playButton to start and stop the audioContenxt in the wavesurfer
      playButton.onclick = () => {
        waveSurfer.playPause();
        if (playButton.innerText.startsWith("Pause")) {
          playButton.innerText = "Play";
        } else if (playButton.innerText.startsWith("Play")) {
          playButton.innerText = "Pause";
        }
      };

      waveSurfer.once("finish", () => {
        playButton.innerText = "Play";
      });
    });
  });
};

const createPlayButton = (index) => {
  // this might cause some problems.. "button" html element has to be rendered in the browser.
  const playButton = document.createElement("button");
  playButton.id = "button-" + index;
  playButton.style.margin = "auto";
  playButton.classList = "ws-btn";
  playButton.innerText = "Play";

  return playButton;
};

const createWaveSurfer = (container, index) => {
  // if no color is specified, add a default color.
  let containerColor = container.getAttribute("color");
  let color = containerColor
    ? containerColor
    : colors[Math.floor(Math.random() * colors.length)];

  // if splitChannels attribute is preset, then show full stereo view.
  let containerChannels = container.getAttribute("splitChannels");
  let isStereo = containerChannels !== null ? true : false;

  // create the WaveSurfer audioContext
  let waveSurfer = WaveSurfer.create({
    container: "#" + container.id,
    mediaControls: true,
    height: 64,
    waveColor: color,
    splitChannels: isStereo,
    responsive: true,
  });

  waveSurfer.on("error", (error) => {
    return console.log(error);
  });

  return waveSurfer;
};

initWaveforms();

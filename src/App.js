import './App.css';
import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';

function App() {
  // For full options, see: https://docs.videojs.com/tutorial-options.html
  const videoJsOptionsForVideo = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [{
      src: 'https://firehose.cul.columbia.edu:8443/vod/_definst_/mp4:access/sample-blender-sintel-trailer.mp4/playlist.m3u8',
      // src: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8', // HLS stream with embedded captions and audio tracks
      type: 'application/x-mpegURL'
    }]
  };
  const handleVideoPlayerReady = () => { console.log('video player ready!'); }

  // For full options, see: https://docs.videojs.com/tutorial-options.html
  const videoJsOptionsForAudio = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [{
      src: 'https://firehose.cul.columbia.edu:8443/vod/_definst_/mp4:access/sample.m4a/playlist.m3u8',
      type: 'application/x-mpegURL'
    }]
  };
  const handleAudioPlayerReady = () => { console.log('audio player ready!'); }

  return (
    <div className="App">
      <div style={{ width: "700px" }}>
        <h1>Video Example</h1>
        <VideoPlayer options={videoJsOptionsForVideo} onReady={handleVideoPlayerReady} />
        <h1>Audio Example</h1>
        <AudioPlayer options={videoJsOptionsForAudio} onReady={handleAudioPlayerReady} />
      </div>
    </div>
  );
}

export default App;

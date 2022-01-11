import { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import audioPoster from './img/audio-poster.png'

// Component based on: https://docs.videojs.com/tutorial-react.html

function AudioPlayer(props) {
  const audioRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  // Set default audio poster if not already set
  options.poster ||= audioPoster;

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const audioElement = audioRef.current;
      if (!audioElement) return;

      const player = playerRef.current = videojs(audioElement, options, () => {
        // console.log("player is ready");
        onReady && onReady(player);
      });
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }

  }, [options, audioRef, onReady]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player className="AudioPlayer">
      <audio ref={audioRef} className="video-js vjs-big-play-centered" />
    </div>
  );
}

export default AudioPlayer;

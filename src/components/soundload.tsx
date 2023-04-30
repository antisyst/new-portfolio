import { useEffect } from 'react';

function PlaySoundOnLoad() {
  useEffect(() => {
    const audio = new Audio('/path/to/sound.mp3');
    audio.play();
  }, []);

  return null;
}

export default PlaySoundOnLoad;
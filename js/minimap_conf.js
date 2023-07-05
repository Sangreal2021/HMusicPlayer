var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'violet',
  progressColor: 'purple',
    plugins: [
      WaveSurfer.minimap.create({
        container: '#minimap',
        waveColor: '#ddd',
        progressColor: '#999',
        height: 30
      })
    ]
});

  wavesurfer.load('songs/Alone.mp3');

document.getElementById('play-btn').addEventListener('click', function() {
  wavesurfer.playPause();
});
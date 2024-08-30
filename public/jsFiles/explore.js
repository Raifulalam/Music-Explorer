// Get elements
const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const volumeSlider = document.getElementById('volumeSlider');
const trackInfo = document.getElementById('trackInfo');

// Play button click event
playBtn.addEventListener('click', () => {
    audio.play();
});

// Pause button click event
pauseBtn.addEventListener('click', () => {
    audio.pause();
});

// Volume slider change event
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

// Update track info
audio.addEventListener('loadedmetadata', () => {
    trackInfo.textContent = `Track: Your Song (${formatTime(audio.duration)})`;
});

// Helper function to format time (e.g., 2:30)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

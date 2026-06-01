document.addEventListener('DOMContentLoaded', () => {
  const playOverlay = document.getElementById('play-overlay');
  const videoPlayer = document.getElementById('video-player');
  const youtubeIframe = document.getElementById('youtube-iframe');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  // Play video
  playOverlay.addEventListener('click', () => {
    playOverlay.classList.add('hidden');
    videoPlayer.classList.remove('hidden');
    youtubeIframe.src += "?autoplay=1";
  });

  // Mobile menu
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuButton.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });
});

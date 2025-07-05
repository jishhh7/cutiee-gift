function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  if (!envelope.classList.contains('open')) {
    envelope.classList.add('open');
    
    const music = document.getElementById('bg-music');
    if (music) {
      music.play().catch(e => console.log("Autoplay blocked:", e));
    }
  }
}

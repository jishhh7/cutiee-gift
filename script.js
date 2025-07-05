function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  if (!envelope.classList.contains('open')) {
    envelope.classList.add('open');
    document.body.classList.add('opened'); // Makes background visible

    const music = document.getElementById('bg-music');
    if (music) {
      music.play().catch(() => {
        console.log("Autoplay blocked.");
      });
    }
  }
}

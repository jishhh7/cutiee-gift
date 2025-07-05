function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  document.getElementById('flap').style.transform = 'rotateX(-180deg)';
  document.getElementById('letter').style.transform = 'translateY(0)';
  document.getElementById('bgImage').style.opacity = 1;
  document.getElementById('bgm').play();

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

function openEnvelope() {
  document.getElementById('flap').style.transform = 'rotateX(-180deg)';
  document.getElementById('letter').style.transform = 'translateY(0)';
  document.getElementById('bgImage').style.opacity = 1;
  document.getElementById('bgm').play();
}

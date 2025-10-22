// Floating WhatsApp button
(function(){
  var a = document.createElement('a');
  a.href = 'https://wa.me/971568820885?text=Hello%2C%20I%27d%20like%20a%20quote%20for%20villa%20marble%20polishing%20in%20...';
  a.target = '_blank';
  a.className = 'floating-wa';
  a.innerText = 'واتساب';
  document.body.appendChild(a);
})();

// Filters & before-after slider
document.addEventListener('DOMContentLoaded',function(){
  var buttons = document.querySelectorAll('.filters button');
  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
      buttons.forEach(b=>b.classList.remove('active'));
      this.classList.add('active');
      var f = this.getAttribute('data-filter');
      document.querySelectorAll('.gallery-grid .card').forEach(function(card){
        if(f==='all' || card.getAttribute('data-cat')===f) card.style.display='block'; else card.style.display='none';
      });
    });
  });

  var slider = document.getElementById('slider');
  if(slider){
    slider.addEventListener('input', function(){
      var pct = this.value;
      var after = document.querySelector('.before-after .after');
      if(after) after.style.left = pct + '%';
    });
  }
});

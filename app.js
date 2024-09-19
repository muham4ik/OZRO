const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Mobil menyuni ochish uchun
menuBtn.addEventListener('click', () => {
    mobileMenu.style.right = '0';
    document.body.style.overflow = 'hidden';
});

// Mobil menyuni yopish uchun
closeBtn.addEventListener('click', () => {
    mobileMenu.style.right = '-100%';
    document.body.style.overflow = '';
});


// EmailJS'ni ishga tushurish
emailjs.init("0GIgXu_yoG6MLpnjd");

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  // EmailJS orqali yuboriladigan ma'lumotlarni yig'ish
  emailjs.sendForm('service_7m93yp2', 'template_wh90wgp', this)
    .then(response => {
      alert('Xabar yuborildi!');
      console.log('Success:', response);
    }, error => {
      alert('Xatolik yuz berdi.');
      console.error('Error:', error);
    });
});


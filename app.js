const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');


menuBtn.addEventListener('click', () => {
  mobileMenu.style.right = '0';
  document.body.style.overflow = 'hidden'; 
});


closeBtn.addEventListener('click', () => {
  mobileMenu.style.right = '-100%';
  document.body.style.overflow = ''; 
});




document.getElementById('supportForm').addEventListener('submit', function(e) {
    e.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('https://sizning-server-url/email-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Email muvaffaqiyatli yuborildi!');
    })
    .catch((error) => {
        console.error('Xatolik:', error);
    });
});

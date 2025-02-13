// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

 
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const nav = document.querySelector('nav');

  // Toggle the menu visibility
  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from propagating to document
    mobileMenu.classList.toggle('hidden');
  });

  // Hide the menu if clicked outside
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });

  // touchstart for touch devices
  document.addEventListener('touchstart', (event) => {
    if (!nav.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });




/*
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    fetch('http://localhost:3000/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById('responseMessage').innerText = result;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'Something went wrong. Please try again later.';
    });
});


*/

/*
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('/send_email', {
        method: 'POST',
        body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.success) {
            this.reset(); // Clear the form on successful submission
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the email.');
    });
});

*/


/*
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
  };

  fetch('http://localhost:3000/send', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(result => {
      document.getElementById('responseMessage').innerText = result;
  })
  .catch(error => {
      console.error('Error:', error);
      document.getElementById('responseMessage').innerText = 'Something went wrong. Please try again later.';
  });
});

*/
  
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      
      document.getElementById('successMessage').style.display = 'block';
    } else {
      alert('Please fill in all fields correctly.');
    }
  });
  
// function submitLogin() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     fetch('/api/auth', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password })
//     })
//     .then(response => response.json())
//     .then(data => {
//         document.getElementById('message').innerText = data.message;
//     })
//     .catch(error => console.error('Error:', error));
// }



// function call_REST_API_Hello() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     const url = (
//         'http://localhost:8080/hello?' +
//         new URLSearchParams({ myName: username, lastName: password}).toString()
//       );
    
//     fetch(url)
//     .then(response => response.text())
//     .then(text => {
//         document.getElementById('message').innerText = text;
//     })
//     .catch(error => console.error('Error:', error));
// }






const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();   


      const formData = new FormData(loginForm);   

      const requestBody = Object.fromEntries(formData);

      fetch('https://your-backend-api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      })
      .then(response => response.json())
      .then(data   
 => {
        if (data.success) {
          // Handle successful login (e.g., redirect to dashboard)
          window.location.href = 'dashboard.html';
        } else {
          // Handle login failure (e.g., display error message)
          alert(data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
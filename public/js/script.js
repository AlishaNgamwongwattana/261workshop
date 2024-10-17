function callApi() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const loginData = {};
    loginData.UserName = username;
    loginData.PassWord = password;
    var jsonData = JSON.stringify(loginData);
    //const apiUrl = 'https://restapi.tu.ac.th/api/v1/auth/Ad/verify'; 
    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify2', {
         method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TUa7110a94484554d8a529ad3eb1438f4d1b07d08b86946c3b8a07faa1c56efdc7061e2be45ca8c1d6380e08f1df7d135d'
        },
        body: jsonData,
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        if (data.status) {
            resultDiv.innerHTML = `
                <p><strong>Status:</strong> Success</p>
                <p><strong>Name :</strong> ${data.displayname_en || 'N/A'}</p>
                <p><strong>Username :</strong> ${data.username|| 'N/A'}</p>
            `;
        } else {
            resultDiv.innerHTML = `
                <p><strong>Status:</strong> Failed</p>
                <p><strong>Message:</strong> ${data.message || 'Unknown error'}</p>
            `;
        }

    })
    .catch(error => {
        console.error('Error fetching data:', error);
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '<p>Error fetching data. Please try again.</p>';
    });
}


function validateFields() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const messageDiv = document.getElementById('message');

    let missingFields = [];


    if (!username) {
        missingFields.push('username');
    } else if (username.length !== 10 || !/^\d+$/.test(username)) {
        missingFields.push('a correctly formatted username');
    }

    if (!password) {
        missingFields.push('password');
    }

    
    if (!role) {
        missingFields.push('role');
    }

    if (missingFields.length > 0) {
        messageDiv.innerHTML = `Please enter ${missingFields.join(', ')}`;
        return false; // Prevent calling the API
    } else {
        messageDiv.innerHTML = ''; // Clear message if all fields are correct
        return true; // Allow calling the API
    }
}

// Event listener for the login button click
document.getElementById('loginButton').addEventListener('click', function() {
    if (validateFields()) {
        callApi();
    }
});
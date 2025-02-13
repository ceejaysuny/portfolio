
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));


// Listen to the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


/*
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Route for form submission
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    console.log(`Received form submission: Name: ${name}, Email: ${email}, Message: ${message}`);

    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,  // Your email address
            pass: process.env.EMAIL_PASS   // Your email password
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,  // Your email address
        subject: `New message from ${name}`,
        text: message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Something went wrong.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully.');
        }
    });
});

// Listen to the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

*/
/*
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Route for form submission
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    console.log(`Received form submission: Name: ${name}, Email: ${email}, Message: ${message}`);

    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,  // Your email address from .env
            pass: process.env.EMAIL_PASS   // Your email password from .env
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,  // Your email address
        subject: `New message from ${name}`,
        text: message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Something went wrong.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully.');
        }
    });
});

// Listen to the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

*/
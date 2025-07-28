const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'prajwalgaonkar24@gmail.com', // Replace with your Gmail
        pass: 'jmbp ixdb rvni wgbt' // Replace with your Gmail app password
    }
});

// Route to handle anonymous messages
app.post('/api/send-anonymous-message', async (req, res) => {
    const { subject, message } = req.body;

    try {
        // Email options
        const mailOptions = {
            from: 'Anonymous Message', // Replace with your Gmail
            to: 'prajwalgaonkar24@gmail.com',
            subject: subject || 'New Anonymous Message',
            html: `
                <h2>You've received a new anonymous message</h2>
                ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
                <hr>
                <p><small>Sent from your portfolio website</small></p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send message' });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
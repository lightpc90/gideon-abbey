import emailjs from 'emailjs-com'

export const sendEmail = (formData) => {
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    console.log('inside sendEmail function')
    const templateParams = {
        to: 'gideonabbey.tech',
        from: `${formData.name} Email: ${formData.email}`,
        message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
        console.log('Email sent successfully:', response)
        return {message: 'Email sent successfully'};
        })
        .catch((error) => {
        console.error('Error sending email:', error);
        return {errorMessage: 'Message sending failed. Please try again or use other means to contact me'}
        });
    };
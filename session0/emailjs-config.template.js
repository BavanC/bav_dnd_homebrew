// EmailJS Configuration Template
// Copy these values to your index.html file after setting up EmailJS

// 1. Replace line ~620 in index.html:
// emailjs.init("YOUR_PUBLIC_KEY"); 
emailjs.init("YOUR_EMAILJS_PUBLIC_KEY_HERE");

// 2. Uncomment and replace the emailjs.send() call around line 1150-1160:
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    to_email: 'bc463@cantab.ac.uk',
    subject: subject,
    message: emailBody,
    from_name: formData[1]?.value?.split(/[.!?]/)[0] || 'Anonymous'
}).then(function(response) {
    showLoading(false);
    showNotification('Questionnaire submitted successfully! Thank you for your responses.', 'success');
    
    // Clear the form
    form.reset();
    formData = {};
    updateProgress();
    localStorage.removeItem('dnd_questionnaire_draft');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}).catch(function(error) {
    showLoading(false);
    showNotification('Failed to submit questionnaire. Please try again or contact the DM directly.', 'error');
    console.error('EmailJS error:', error);
});

/* 
SETUP CHECKLIST:
□ Create EmailJS account at https://www.emailjs.com/
□ Add email service (Gmail, Outlook, etc.)
□ Create email template with the following content:
  Subject: D&D Questionnaire Response - {{subject}}
  
  From: {{from_name}}
  To: bc463@cantab.ac.uk
  
  {{message}}
  
□ Get your Public Key from Account → General
□ Note your Service ID from Email Services
□ Note your Template ID from Email Templates
□ Replace the placeholders above with your actual values
□ Update index.html with the configuration
□ Test the form submission

TESTING:
1. Open index.html in a browser
2. Fill out a few questions
3. Click Submit
4. Check if email arrives at bc463@cantab.ac.uk
5. Verify all form data is included in the email

TROUBLESHOOTING:
- Check browser console for error messages
- Verify all IDs are correct (no typos)
- Ensure EmailJS service is active
- Check spam folder for test emails
- Try a different browser if issues persist
*/
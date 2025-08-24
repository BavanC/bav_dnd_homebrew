# D&D Player Questionnaire

A comprehensive, responsive web form for collecting D&D player preferences and game style information. Built with vanilla HTML, CSS, and JavaScript following the implementation plan.

## Features

### 🎲 Core Functionality
- **40 Dynamic Questions**: Automatically generated from structured data
- **3 Question Types**: Open text, single choice, and rating matrix questions
- **Real-time Progress Tracking**: Visual progress bar with completion percentage
- **Form Validation**: Client-side validation with helpful error messages
- **Auto-save**: Progress automatically saved to local storage
- **Email Submission**: Responses sent via EmailJS to bc463@cantab.ac.uk

### 🎨 Design & UX
- **Dark Fantasy Theme**: Professional design with gold/crimson accents
- **Fully Responsive**: Mobile-first design with touch-friendly inputs
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Smooth Animations**: Hover effects, progress transitions, and notifications
- **Custom Components**: Styled radio buttons, rating matrices, and form elements

### 🔧 Technical Features
- **Single-page Application**: All code embedded in one HTML file
- **No Dependencies**: Pure vanilla JavaScript (except EmailJS)
- **Local Storage**: Draft saving and restoration
- **Cross-browser Compatible**: Modern browser support with graceful degradation
- **Print Friendly**: Optimized for printing responses

## Quick Start

1. **Download**: Save `index.html` to your computer
2. **Configure Email** (see setup instructions below)
3. **Open**: Double-click `index.html` or serve via web server
4. **Share**: Send the file or host it online for players to access

## EmailJS Setup (Required for Email Submission)

To enable email submission, you'll need to configure EmailJS:

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow setup instructions and note your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: D&D Questionnaire Response - {{subject}}

From: {{from_name}}
To: bc463@cantab.ac.uk

{{message}}
```

4. Save and note your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update HTML File
Edit `index.html` and replace these placeholders:

```javascript
// Line ~620: Replace YOUR_PUBLIC_KEY
emailjs.init("your_actual_public_key_here");

// Lines ~1150-1160: Uncomment and configure
emailjs.send('your_service_id', 'your_template_id', {
    to_email: 'bc463@cantab.ac.uk',
    subject: subject,
    message: emailBody,
    from_name: formData[1]?.value?.split(/[.!?]/)[0] || 'Anonymous'
});
```

## Deployment Options

### Option 1: Local File
- Simply open `index.html` in any modern browser
- Works offline (except email submission)
- Good for testing and small groups

### Option 2: Web Server
- Upload `index.html` to any web hosting service
- Examples: GitHub Pages, Netlify, Vercel, or traditional web hosts
- Provides shareable URL for remote players

### Option 3: GitHub Pages (Free)
1. Create GitHub repository
2. Upload `index.html`
3. Enable GitHub Pages in repository settings
4. Share the generated URL

## File Structure

```
session0/
├── index.html              # Complete questionnaire application
├── README.md              # This documentation
├── implementation_plan.md # Detailed development plan
└── questions.md          # Source questions data
```

## Browser Compatibility

### Fully Supported
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Limited Support
- Internet Explorer: Not supported
- Older mobile browsers: Basic functionality only

## Features Breakdown

### Question Types

#### 1. Open Text (5 questions)
- Questions 1, 10, 33, 39, 40
- Auto-expanding textarea
- Character-friendly input
- Placeholder guidance

#### 2. Single Choice (30 questions)
- Questions 2-9, 11-12, 14-32, 35-37
- Custom styled radio buttons
- Hover effects for better UX
- Clickable labels

#### 3. Rating Matrix (3 questions)
- Questions 13, 34, 38
- Responsive table layout
- Multiple items per question
- 5-point rating scales

### Accessibility Features

- **ARIA Labels**: All form elements properly labeled
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Compatible with assistive technology
- **High Contrast**: Clear visual hierarchy
- **Focus Indicators**: Visible focus states
- **Semantic HTML**: Proper heading structure and landmarks

### Responsive Design

#### Desktop (1024px+)
- Full-width layout with optimal spacing
- Side-by-side elements where appropriate
- Hover effects and animations

#### Tablet (768px - 1023px)
- Adjusted spacing and font sizes
- Optimized table layouts
- Touch-friendly buttons

#### Mobile (< 768px)
- Stack layout for all elements
- Large touch targets
- Simplified rating tables
- Full-width buttons

## Customization

### Styling
The form uses CSS custom properties for easy theming:

```css
:root {
    --bg-primary: #1a1a2e;        /* Main background */
    --accent-gold: #ffd700;       /* Gold accent color */
    --accent-crimson: #dc143c;    /* Red accent color */
    --text-primary: #e0e0e0;      /* Main text color */
    /* ... more variables */
}
```

### Questions
To modify questions, update the `questionsData` array in the JavaScript section (starting around line 640).

### Email Format
Customize the email output by modifying the `formatFormDataForEmail()` function (around line 1080).

## Security Considerations

- **Input Sanitization**: Basic XSS prevention implemented
- **No Server**: Client-side only reduces attack surface
- **EmailJS**: Uses secure third-party service for email
- **Local Storage**: Data stays on user's device

## Performance Optimizations

- **Embedded Assets**: No external dependencies (except fonts/EmailJS)
- **Efficient DOM**: Minimal re-rendering
- **Lazy Loading**: Questions rendered once on page load
- **Debounced Auto-save**: Reduces localStorage writes

## Troubleshooting

### Email Not Sending
1. Check EmailJS configuration
2. Verify public key, service ID, and template ID
3. Check browser console for errors
4. Ensure internet connection

### Form Not Loading
1. Check browser console for JavaScript errors
2. Ensure modern browser (IE not supported)
3. Try disabling ad blockers

### Progress Not Saving
1. Check if localStorage is enabled
2. Clear browser cache and try again
3. Some browsers disable localStorage in private mode

### Mobile Display Issues
1. Ensure viewport meta tag is present
2. Check browser zoom level
3. Try refreshing the page

## Support

For technical issues or questions:
1. Check browser console for error messages
2. Verify EmailJS setup if emails aren't sending
3. Test in a different browser
4. Contact the DM directly at bc463@cantab.ac.uk

## License

This project is designed specifically for D&D campaign preparation. Feel free to adapt and modify for your own campaigns.

---

**Built with ❤️ for the D&D community**
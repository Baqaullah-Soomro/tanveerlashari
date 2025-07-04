# EmailJS Setup Guide

This project uses EmailJS to handle the contact form submissions without requiring a backend server. Follow these steps to set up your own EmailJS account and configure it for this project.

## Step 1: Create an EmailJS Account

1. Visit [EmailJS](https://www.emailjs.com/) and sign up for a free account.
2. Verify your email address.

## Step 2: Add an Email Service

1. In your EmailJS dashboard, navigate to "Email Services".
2. Click on "Add New Service".
3. Choose your email provider (Gmail, Outlook, etc.).
4. Connect your email account by following the prompts.
5. Name your service (e.g., "Contact Service") and set the Service ID to `service_ocoglhp` (or update the .env.local file with your custom ID).
6. Click "Create Service".

## Step 3: Create an Email Template

1. In your EmailJS dashboard, navigate to "Email Templates".
2. Click on "Create New Template".
3. Select the "Contact Us" template as a starting point.
4. Customize the template as needed. Make sure to include the following variables in your template:
   - `{{from_name}}` - The sender's name
   - `{{reply_to}}` - The sender's email (also set this as the Reply-To field)
   - `{{subject}}` - The subject of the message
   - `{{message}}` - The content of the message
5. **IMPORTANT**: In the template settings, set the "To Email" field to `tanveerlasharilibrarian@gmail.com` to ensure emails are sent to this address.
6. In the template settings, set the Template ID to `template_xbtx43m` (or update the .env.local file with your custom ID).
7. Save the template.

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, navigate to "Account".
2. Copy your Public Key.
3. Update the .env.local file with your Public Key.

## Step 5: Test the Contact Form

1. Run the application locally.
2. Fill out the contact form and submit it.
3. Check your email inbox to verify that you received the message.
4. If you don't see the email, check your spam folder.

## Troubleshooting

If emails are not being sent to the correct address:

1. Go to your EmailJS dashboard > Email Templates
2. Edit your template
3. Make sure the "To Email" field is set to `tanveerlasharilibrarian@gmail.com`
4. Save the template
5. Test the form again

## Environment Variables

The following environment variables are used for EmailJS configuration:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=jhi0sK4mpn5ccKDBL
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_ocoglhp
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xbtx43m
```

These variables are stored in the `.env.local` file, which is not tracked by Git for security reasons.
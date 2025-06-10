# Contact Form with JavaScript Validation and Popup Feedback

##  What the Form Does

This project is a simple, responsive contact form built using HTML, CSS, and JavaScript. 
It allows users to submit their name, email address, and a message. Upon submission, 
the form performs real-time validation and provides feedback through a modal-style popup, either indicating success or listing validation errors.

##  JavaScript Validation Used

The form includes client-side validation to ensure user input is valid before submission:

- **Name**: Required field. It must not be empty.
- **Email**: Must follow a valid email format (`example@domain.com`).
- **Message**: Must contain at least **10 characters**.

If any validation fails, the form prevents submission and shows a popup with specific error messages. If validation passes, a success popup is displayed.

##  How the Modal Interaction Works

- The popup modal (`.popup`) is hidden by default and appears only when triggered.
- When validation fails or succeeds, JavaScript updates the modal title and message.
- The popup is styled to clearly distinguish between error and success states.
- The user can close the popup using an "OK" button.

 

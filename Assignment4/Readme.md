# JavaScript Popup Interaction

This project demonstrates a simple and visually appealing popup interaction using HTML, CSS, and JavaScript. The interaction is triggered by a button click and displays a styled message box that provides availability information.

##  What the Popup Does

The popup appears at the center of the page with a thank-you message and a brief note about availability for projects. It is designed to smoothly animate into view and can be closed using a button within the popup.

#  What User Action Triggers It

The popup is triggered when the user clicks the **"Check My Availability and Holidays"** button. The message box then appears in the center of the screen with a smooth scaling and positioning transition.

##  Why I Chose This Interaction

I chose this interaction to:
- Practice and demonstrate basic DOM manipulation with JavaScript.
- Explore CSS transitions and scaling for creating smooth visual effects.
- Create an interactive way to share availability without navigating to another page.

##  Technologies Used

- **HTML** for structure
- **CSS** for styling and animations
- **JavaScript** for interactivity

  ##  Challenges and Decisions

- Initially, I had a small bug caused by using `Document.getElementById()` (capital "D"), which needed to be corrected to `document.getElementById()`.
- Managing the `transform` and `visibility` properties together required some testing to get the desired smooth animation effect.
- I chose to avoid default browser alerts to allow more creative control over the popup’s appearance and behavior.
- I also had vhallenges with running my javascript file in a separate folder as it didnt run as as expected.
- I had to use in-line script tags


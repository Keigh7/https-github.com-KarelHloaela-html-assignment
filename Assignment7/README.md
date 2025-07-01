# Vue Router Demo Project

This project is a basic demonstration of Vue.js with Vue Router, created as part of my Front-End Development coursework.

##  Vue Router Implementation

Vue Router was implemented by creating a separate routing configuration file located in `src/router/index.js`. The router is imported into the main application (`main.js`) 
and used via `app.use(router)` to enable client-side routing.

Each route is defined with a path, a name, and the component it should render. The `<router-view />` element in `App.vue` is used to display the active component, while `<router-link>` 
is used in the navigation menu for switching views.

##  Pages Created

The project includes the following pages:

- **Home.vue** — Displays a welcome message
- **About.vue** — Describes the purpose of the app or developer
- **Contact.vue** — Provides basic contact information

Each page is stored in the `src/views` folder as a separate `.vue` component. The navigation menu is implemented as a separate `NavBar.vue` component inside `src/components`, 
allowing users to switch between pages seamlessly.






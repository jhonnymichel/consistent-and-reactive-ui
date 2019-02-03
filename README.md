# A consistent and reactive user interface
This project is a demo for a talk of mine, called "Building Consistent, Reactive User Interfaces".

Check its repo linked above to learn more about what it is about. (soon)

## Running the demo
The demo is available at https://jhonnymichel.github.io/consistent-and-reactive-ui

You can open the browser console and play with the `window.networkConditions` object to check how the app behaves. You can toggle `offline` and `serverIntermitent` booleans (both defaulted to `false`) and set the `latency` (defaults to `400`)

## What is this about?

This is my personal take on how state management systems (such as Redux) and reactive views (such as React) can be used to provide good user experience, if the developer learns to pay attention to details, and make sure that:

- All possible errors are catched and presented in a helpful way to the user
- The user actions are always rewarded with proper feedback
- All of the stages of async actions, such as network requests are presented to the user in a non-frustating way

Feel free to extend the topic and suggest different/better approachs to the code implementation.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

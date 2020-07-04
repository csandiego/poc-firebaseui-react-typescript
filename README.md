A simple web app for trying out Firebase Authentication written using TypeScript and React.

## Setup

### 1. Create a Firebase project and register a web app

Instructions can be found [here](https://firebase.google.com/docs/web/setup). Only steps 1 and 2 are required, but take note of the Firebase config object.

### 2. Enable Password Authentication and Google Sign-In

In the **Auth** section of the [Firebase console](https://console.firebase.google.com/), under the **Sign in method** tab, enable the **Email/password** and **Google** sign in methods.

### 3. Get the code and add the Firebase config

In the project root directory, run `npm install`. Then create a `/src/config.ts` file that exports the Firebase config object as the default.

```
const firebaseConfig = {
    // ...
};

export default firebaseConfig;
```

### 4. Run `npm start`

After starting the dev server, a web browser will load `http://localhost:3000`.

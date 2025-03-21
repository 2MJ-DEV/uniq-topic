// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Uncomment the following line if you use analytics
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration (use environment variables)
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID, // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Uncomment the following line if you use analytics
// const analytics = getAnalytics(app);

export default app;
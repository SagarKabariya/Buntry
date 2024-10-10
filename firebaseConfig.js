import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvNJdZxVPF11f19C9ZeXpsJsxpbLaJruc",
  authDomain: "rsvp-a4edd.firebaseapp.com",
  projectId: "rsvp-a4edd",
  storageBucket: "rsvp-a4edd.appspot.com",
  messagingSenderId: "62941008363",
  appId: "1:62941008363:web:88df281ea876afba5809ae",
  measurementId: "G-PP0XP3R68L"
};

const app = initializeApp(firebaseConfig);

export { initializeApp, firebaseConfig, app };

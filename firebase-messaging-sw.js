importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAuhEsWzOuFWOLGYSkHjVnBsRi6UidsSEc",
  authDomain: "cuidados-hospitalarios.firebaseapp.com",
  projectId: "cuidados-hospitalarios",
  messagingSenderId: "252189446040",
  appId: "1:252189446040:web:68fef74e671d589b51a5ed"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: './icon-192.png'
  });
});
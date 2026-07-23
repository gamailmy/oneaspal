// File: firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC_Lp9IMTfC0D1pSFeDbjW2ugyg22tFfTc",
  authDomain: "oneaspalclub.firebaseapp.com",
  databaseURL: "https://oneaspalclub-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "oneaspalclub",
  storageBucket: "oneaspalclub.firebasestorage.app",
  messagingSenderId: "310756119151",
  appId: "1:310756119151:web:da5d0ccbc43dad23c5b39a"
});

const messaging = firebase.messaging();

// Handle pesan masuk saat aplikasi di background (tertutup)
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://i.postimg.cc/YCrpY1s3/e2e70242-703a-4a42-a314-b94ea4b1a0d4.png',
    vibrate: [200, 100, 200], // Pola getaran
    sound: 'default' // Suara notifikasi default HP
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

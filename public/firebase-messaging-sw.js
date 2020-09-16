importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
const firebaseConfig = {
    apiKey: "AIzaSyAUIyuvVemjBia0hxhLYIiXkfxUQ6OOXlU",
    authDomain: "framework-72feb.firebaseapp.com",
    databaseURL: "https://framework-72feb.firebaseio.com",
    projectId: "framework-72feb",
    storageBucket: "framework-72feb.appspot.com",
    messagingSenderId: "1073313556942",
    appId: "1:1073313556942:web:8ec636d034838fd9b8239f",
    measurementId: "G-LGJLEBJSSF"
  };
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
     const promiseChain = clients
          .matchAll({
               type: "window",
               includeUncontrolled: true,
          })
          .then((windowClients) => {
               for (let i = 0; i < windowClients.length; i++) {
                    const windowClient = windowClients[i];
                    windowClient.postMessage(payload);
               }
          })
          .then(() => {
               return registration.showNotification("my notification title");
          });
     return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
     console.log(event);
});
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: "AIzaSyAj6Py9YjezxIkJydvUXTbnktdqAYvsTQ0",
    authDomain: "music-project-7e5d2.firebaseapp.com",
    databaseURL: "https://music-project-7e5d2.firebaseio.com",
    projectId: "music-project-7e5d2",
    storageBucket: "music-project-7e5d2.appspot.com",
    messagingSenderId: "624403091251",
    appId: "1:624403091251:web:9267ed83b0d35295"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/6.2.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#reserved-urls -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>


// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }
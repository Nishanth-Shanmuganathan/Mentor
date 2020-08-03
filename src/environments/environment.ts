// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  server: 'http://localhost:3000',
  firebase: {
    apiKey: 'AIzaSyAQrnhY9QUf1EmrB0XHpKLOcy3zH7dlYKI',
    authDomain: 'nis-chatroom.firebaseapp.com',
    databaseURL: 'https://nis-chatroom.firebaseio.com',
    projectId: 'nis-chatroom',
    storageBucket: 'nis-chatroom.appspot.com',
    messagingSenderId: '268317516518',
    appId: '1:268317516518:web:dd9dd7d2528c61fb81d127'
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

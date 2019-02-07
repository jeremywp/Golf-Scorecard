// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCyCVrK0-6t3VFCyoVFgOOoJfh9s3Q3niw",
    authDomain: "golf-scorecard-app-58e2a.firebaseapp.com",
    databaseURL: "https://golf-scorecard-app-58e2a.firebaseio.com",
    projectId: "golf-scorecard-app-58e2a",
    storageBucket: "golf-scorecard-app-58e2a.appspot.com",
    messagingSenderId: "609721895559"
  },
  firebaseBaseUrl: 'https://golf-scorecard-app-58e2a.firebaseio.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

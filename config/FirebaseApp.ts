// Import the functions you need from the SDKs you need
import Firebase, { initializeApp, getApps } from 'firebase/app';
import { Analytics, isSupported, getAnalytics, logEvent } from 'firebase/analytics';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
const REACT_APP_AUTH_DOMAIN = process.env.REACT_APP_AUTH_DOMAIN;
const REACT_APP_PROJECT_ID = process.env.REACT_APP_PROJECT_ID;
const REACT_APP_STORAGE_BUCKET = process.env.REACT_APP_STORAGE_BUCKET;
const REACT_APP_SENDER_ID = process.env.REACT_APP_SENDER_ID;
const REACT_APP_APP_ID = process.env.REACT_APP_APP_ID;
const REACT_APP_MEASUREMENT_ID = process.env.REACT_APP_MEASUREMENT_ID;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
};

class FirebaseApp {
  private _app?: Firebase.FirebaseApp;
  private _analytics?: Analytics;

  // Initialize Firebase
  constructor() {
    console.log(firebaseConfig);
    const apps = getApps();

    if (apps.length > 0) {
      this._app = apps[0];
    } else if (REACT_APP_API_KEY !== undefined) {
      this._app = initializeApp(firebaseConfig);
    }

    isSupported().then((supported) => {
      console.log('supported', supported);

      if (supported === true && this._app !== undefined) {
        this._analytics = getAnalytics(this._app);
      }
    });
  }

  public analytics() {
    if (!this._analytics) {
      return {
        logEvent: (e: string) => console.warn('this._analytics not inialized'),
        screenView: (screen: string, className?: string) => console.warn('this._analytics not inialized'),
      };
    }

    return {
      logEvent: (e: string) => logEvent(this._analytics!, e),
      screenView: (screen: string, className?: string) =>
        logEvent(this._analytics!, 'screen_view', { firebase_screen: screen, firebase_screen_class: className || screen }),
    };
  }
}

const app = new FirebaseApp();

export default new FirebaseApp();

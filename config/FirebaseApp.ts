// Import the functions you need from the SDKs you need
import Firebase, { initializeApp, getApps } from 'firebase/app';
import { Analytics, isSupported, getAnalytics, logEvent } from 'firebase/analytics';

const NEXT_PUBLIC_API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const NEXT_PUBLIC_AUTH_DOMAIN = process.env.NEXT_PUBLIC_AUTH_DOMAIN;
const NEXT_PUBLIC_PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
const NEXT_PUBLIC_STORAGE_BUCKET = process.env.NEXT_PUBLIC_STORAGE_BUCKET;
const NEXT_PUBLIC_SENDER_ID = process.env.NEXT_PUBLIC_SENDER_ID;
const NEXT_PUBLIC_APP_ID = process.env.NEXT_PUBLIC_APP_ID;
const NEXT_PUBLIC_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: NEXT_PUBLIC_API_KEY,
  authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_SENDER_ID,
  appId: NEXT_PUBLIC_APP_ID,
  measurementId: NEXT_PUBLIC_MEASUREMENT_ID,
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
    } else if (NEXT_PUBLIC_API_KEY !== undefined) {
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

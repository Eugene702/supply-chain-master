import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChpmEAtaTh3kRnr-Ff0F-gu89-iLgsawQ",
  authDomain: "supply-chain-master-702.firebaseapp.com",
  projectId: "supply-chain-master-702",
  storageBucket: "supply-chain-master-702.appspot.com",
  messagingSenderId: "40091417722",
  appId: "1:40091417722:web:02e074ef3bfb6881520fc3",
  measurementId: "G-QP4K6TVGV2"
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window != 'undefined' ? getAnalytics(app) : null
const auth = getAuth(app);
export { app, analytics, auth }
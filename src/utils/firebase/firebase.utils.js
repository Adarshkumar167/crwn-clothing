import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBq2nqIHj-t4WMdf6iS-cFrTgN__NpP2us",
    authDomain: "crwn-clothing-db-60c56.firebaseapp.com",
    projectId: "crwn-clothing-db-60c56",
    storageBucket: "crwn-clothing-db-60c56.appspot.com",
    messagingSenderId: "653725801163",
    appId: "1:653725801163:web:916e825f7764326d9c994e"
};
  
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
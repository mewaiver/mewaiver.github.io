import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCnMVaXgZg5PswVqIbpU0oR7nVcY7kLILk",
  authDomain: "techchain-a069a.firebaseapp.com",
  projectId: "techchain-a069a",
  storageBucket: "techchain-a069a.firebasestorage.app",
  messagingSenderId: "538387004269",
  appId: "1:538387004269:web:b047969ea35c6c40f63864"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

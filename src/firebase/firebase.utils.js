import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBnZr15r7Olq0uA2qXP98ZUVEKlxBvj3A0",
    authDomain: "cs698-ce4ee.firebaseapp.com",
    databaseURL: "https://cs698-ce4ee.firebaseio.com",
    projectId: "cs698-ce4ee",
    storageBucket: "cs698-ce4ee.appspot.com",
    messagingSenderId: "216601259719",
    appId: "1:216601259719:web:bcaeceeaed7b9cb0d458e2",
    measurementId: "G-FWVJ5VXKGV"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Authentication Utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
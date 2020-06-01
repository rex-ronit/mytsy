import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyArPOJ34FZrj6OYaCBcMWevoT0MInIaqcc',
	authDomain: 'mytsy-db-24bae.firebaseapp.com',
	databaseURL: 'https://mytsy-db-24bae.firebaseio.com',
	projectId: 'mytsy-db-24bae',
	storageBucket: 'mytsy-db-24bae.appspot.com',
	messagingSenderId: '763258493285',
	appId: '1:763258493285:web:fa5a9cfec4393c0909a98c',
	measurementId: 'G-4HLTGS6ZH1'
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({ displayName, email, createdAt, ...additionalData });
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

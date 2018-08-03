import * as firebase from "firebase"

const config = {
	apiKey: "AIzaSyDtg-CAArD2KIVrZUF1s9TCztyPG5l4Rrk",
	authDomain: "pikkanode2nd.firebaseapp.com",
	databaseURL: "https://pikkanode2nd.firebaseio.com",
	projectId: "pikkanode2nd",
	storageBucket: "pikkanode2nd.appspot.com",
	messagingSenderId: "585160836207"
};
firebase.initializeApp(config);

export const database = firebase.database();
export const storage = firebase.storage();
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDXkHzAsyR6otij0VMCn_rQ5KdnnZ3TxkM",
    authDomain: "goal-coach-b3ddf.firebaseapp.com",
    databaseURL: "https://goal-coach-b3ddf.firebaseio.com",
    projectId: "goal-coach-b3ddf",
    storageBucket: "goal-coach-b3ddf.appspot.com",
    messagingSenderId: "257563343897"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');

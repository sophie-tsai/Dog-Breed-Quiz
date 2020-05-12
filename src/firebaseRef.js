import { firestore } from "./firebaseConfig";

const scoreRef = firestore.collection("high-scores");
export default scoreRef;

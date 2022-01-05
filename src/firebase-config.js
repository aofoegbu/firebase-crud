import { initializeApp } from "firebase/app";
import { getFireStore } from "@firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyD9ECQyxsq_xQlnWzUn1DK2YbdbQkG38gI",
    authDomain: "fir-crud-4a0ac.firebaseapp.com",
    projectId: "fir-crud-4a0ac",
    storageBucket: "fir-crud-4a0ac.appspot.com",
    messagingSenderId: "560271347240",
    appId: "1:560271347240:web:7f8081402c72aa1f69af1d",
    measurementId: "G-CW57HHWVGR"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFireStore(app);

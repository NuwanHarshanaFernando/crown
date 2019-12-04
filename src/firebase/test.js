import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('LhV6N4zPL4OabZIUrayG').collection('cartItems').doc('E2WWjxYHuNEwhgBSSojz');
firestore.doc('/users/LhV6N4zPL4OabZIUrayG/cartItems/E2WWjxYHuNEwhgBSSojz');
firestore.collection('/users/LhV6N4zPL4OabZIUrayG/cartItems');
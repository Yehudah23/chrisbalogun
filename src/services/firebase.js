import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes
} from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDuBx5rER7jm9wWOaDdgc2q3DeVe8TqPL0",
  authDomain: "royalsandnobles-546e7.firebaseapp.com",
  projectId: "royalsandnobles-546e7",
  storageBucket: "royalsandnobles-546e7.firebasestorage.app",
  messagingSenderId: "754069665291",
  appId: "1:754069665291:web:8f5256b748ad99b491790e",
  measurementId: "G-FMZMKM22QG"
};

const firebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId &&
  firebaseConfig.storageBucket &&
  firebaseConfig.appId
);
const firebaseApp = firebaseConfigured ? initializeApp(firebaseConfig) : null;
const auth = firebaseApp ? getAuth(firebaseApp) : null;
const db = firebaseApp ? getFirestore(firebaseApp) : null;
const storage = firebaseApp ? getStorage(firebaseApp) : null;

function requireFirebase() {
  if (!firebaseConfigured) {
    throw new Error('Firebase is not configured. Copy .env.development.local.example to .env.development.local and add your Firebase web app values.');
  }
}
export const authReady = new Promise(resolve => {
  if (!auth) {
    resolve(null);
    return;
  }
  const unsubscribe = onAuthStateChanged(auth, user => {
    unsubscribe();
    resolve(user);
  });
});

export async function isAdmin(user) {
  if (!user) return false;
  try {
    const profile = await getUserProfile(user);
    return Boolean(profile && profile.role === 'admin');
  } catch (error) {
    console.error('Unable to verify Firebase admin role:', error);
    return false;
  }
}

export async function adminStatus(user) {
  if (!user) return { allowed: false, reason: 'not-authenticated' };
  try {
    const profile = await getUserProfile(user);
    if (!profile) return { allowed: false, reason: 'missing-profile' };
    if (profile.role !== 'admin') return { allowed: false, reason: 'missing-role' };
    return { allowed: true, reason: 'admin' };
  } catch (error) {
    return { allowed: false, reason: 'profile-read-failed', error };
  }
}

export function watchAuth(callback) {
  if (!auth) return () => {};
  return onAuthStateChanged(auth, callback);
}

export async function login(email, password) {
  requireFirebase();
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
}

export async function register({ fullname, email, password, phone }) {
  requireFirebase();
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, 'users', result.user.uid), {
    fullname,
    email,
    phone,
    role: 'user',
    createdAt: serverTimestamp()
  });
  return result.user;
}

export function currentUser() {
  return auth ? auth.currentUser : null;
}

export function logout() {
  if (!auth) return Promise.resolve();
  return signOut(auth);
}

export async function getUserProfile(user) {
  requireFirebase();
  if (!user) return null;
  const profile = await getDoc(doc(db, 'users', user.uid));
  return profile.exists() ? profile.data() : null;
}

export async function listDocuments(type) {
  requireFirebase();
  const snapshot = await getDocs(collection(db, 'documents'));
  const acceptedTypes = type === 'cv'
    ? ['cv', 'CV', 'resume', 'Resume']
    : ['publication', 'Publication', 'publications', 'Publications'];
  return snapshot.docs
    .map(item => ({ id: item.id, ...item.data() }))
    .filter(item => acceptedTypes.includes(item.type))
    .sort((first, second) => {
      const firstTime = first.createdAt?.toMillis?.() || 0;
      const secondTime = second.createdAt?.toMillis?.() || 0;
      return secondTime - firstTime;
    });
}

export async function uploadDocument(file, title, type, userId) {
  requireFirebase();
  const storagePath = `documents/${userId}/${Date.now()}-${file.name}`;
  const fileRef = ref(storage, storagePath);
  await uploadBytes(fileRef, file, { contentType: file.type });
  const fileUrl = await getDownloadURL(fileRef);
  const documentRef = await addDoc(collection(db, 'documents'), {
    title: title || file.name,
    file_url: fileUrl,
    storagePath,
    type,
    ownerId: userId,
    createdAt: serverTimestamp()
  });
  return { id: documentRef.id, title: title || file.name, file_url: fileUrl, type };
}

export async function removeDocument(documentItem) {
  requireFirebase();
  await deleteDoc(doc(db, 'documents', documentItem.id));
  if (documentItem.storagePath) {
    await deleteObject(ref(storage, documentItem.storagePath));
  }
}
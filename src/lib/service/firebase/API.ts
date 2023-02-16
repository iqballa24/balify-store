import {
  collection,
  doc,
  DocumentData,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth, db } from '@/lib/service/firebase/config';
import { LoginTypes, RegisterTypes, UserTypes } from '@/lib/types';

const registerUser = async ({ email, password, name }: RegisterTypes) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(res.user, {
      displayName: name,
    });

    await setDoc(doc(db, 'users', res.user.uid), {
      uid: res.user.uid,
      name,
      email,
      phone: '',
      address: '',
    });

    return res;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error('Opss, something went wrong');
    }
  }
};

const loginUser = async ({ email, password }: LoginTypes) => {
  try {
    await setPersistence(auth, browserSessionPersistence);
    const res = await signInWithEmailAndPassword(auth, email, password);

    return res;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      console.log(err);
      throw new Error('Opss, something went wrong');
    }
  }
};

const getUserById = async (id: string) => {
  const data: DocumentData[] = [];

  try {
    const q = query(collection(db, 'users'), where('uid', '==', id));

    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      data.push(doc.data());
    });
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      console.log(err);
      throw new Error('Ops, something went wrong');
    }
  }

  return data;
};

const updateUser = async (uid: string, data: UserTypes) => {
  const user = auth.currentUser!;

  try {
    const res = await setDoc(doc(db, 'users', uid), data, { merge: true });

    if (data.name) {
      await updateProfile(user, {
        displayName: data.name,
      });
    }

    return res;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      console.log(err);
      throw new Error('Ops, something went wrong');
    }
  }
};

export { registerUser, loginUser, getUserById, updateUser };

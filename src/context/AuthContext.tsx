import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { onSnapshot, doc, setDoc, getDoc } from 'firebase/firestore';
// import { Navigate } from 'react-router-dom';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // const { user, loading } = useAuth();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //     setLoading(false);
  //   });

  //   return unsubscribe;
  // }, []);

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  },[]);

  // useEffect(() => {
  //   if (loading || !user) return; // Don't run if still loading or not logged in

  //   const timeout = setTimeout(()=> {
  //       const unsubscribe = onSnapshot(doc(db, 'users', user.uid), (docSnap) => {
  //         // console.log("User data:", docSnap.data());
  //         if(docSnap.exists()){
  //           console.log("User data: ",docSnap.data());
  //         }
  //         else{
  //           console.log("no user document found in Firestore.");
  //         }
  //       });

  //     return () => unsubscribe();
  //   },300);
  //   return () => clearTimeout(timeout);
  // }, [user, loading]);


  useEffect(() => {
    if (loading || !user) return;

    const userDocRef = doc(db, 'users', user.uid);

    let unsubscribeSnapshot: (() => void) | null = null;

    const setupSnapshotListener = async () => {
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        console.log('User data:', docSnap.data());

        unsubscribeSnapshot = onSnapshot(userDocRef, (snap) => {
          console.log('User doc updated:', snap.data());
        });
      } else {
        console.warn('⚠️ No user document found in Firestore.');
      }
    };

    setupSnapshotListener();

    return () => {
      if (unsubscribeSnapshot) unsubscribeSnapshot();
    };
  }, [user, loading]);


  // const signup = async (email: string, password: string) => {
  //   await createUserWithEmailAndPassword(auth, email, password);
  // };

//   const signup = async (email: string, password: string) => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//   } catch (error: any) {
//     console.error("Signup error:", error.message);
//     throw error;
//   }
// };

const signup = async (email: string, password: string) =>{
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // create a user doc in Firestore
    await setDoc(doc(db, 'users', user.uid),{
      uid: user.uid,
      email: user.email,
      createdAt: new Date().toISOString(),
    });
    console.log("User document crated in firestore.");
  }catch(error: any){
    console.log("Signup error: ", error.message);
    throw error;
  }
} 

  // const login = async (email: string, password: string) => {
  //   await signInWithEmailAndPassword(auth, email, password);
  // };


  const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    console.error("Login error:", error.message);
    throw error;
  }
};


  const logout = async () => {
    await signOut(auth);
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
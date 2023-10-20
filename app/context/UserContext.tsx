"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import { DocumentData } from "firebase/firestore/lite";
import { UserContextType, userDetailsType } from "../utils/types";
import useAuth from "../hooks/useAuth";
import useFirestore from "../hooks/useFirestore";

const UserContext = createContext<UserContextType>({
  user: null,
  userDetails: {
    name: "",
    points: 0,
    userName: "",
  },
  updateUserPoints: () => {},
  getUserDetails: () => {},
  signUp: () => Promise.resolve(""),
  signInWithPassword: () => {},
  googleSignIn: () => {},
  logOut: () => {},
});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [userDetails, setUserDetails] = useState<userDetailsType>({
    name: "",
    points: 0,
    userName: "",
  });
  const { signUp, signInWithPassword, googleSignIn, logOut } = useAuth({
    user,
    setUser,
  });
  const { getUserDetails, updateUserPoints } = useFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getUserDetails(user.uid).then((data: DocumentData | false) => {
          if (data !== false) {
            setUserDetails(data as userDetailsType);
          }
        });
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        userDetails,
        updateUserPoints,
        getUserDetails,
        signUp,
        signInWithPassword,
        googleSignIn,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(UserContext);
};

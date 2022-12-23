import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [userAuth, setUserAuth] = useState(undefined);
  const [userData, setUserData] = useState(undefined);

  return (
    <AuthContext.Provider
      value={{ userAuth, setUserAuth, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
import { useState, createContext, useContext, PropsWithChildren } from 'react';

interface AuthContextType {
  user: any;
  signin: (user: string) => void;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<any>(null);

  const signin = (newUser: string) => {
    setUser(newUser);
  };

  const signout = () => {
    setUser(null);
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}

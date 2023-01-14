import { useState, useMemo, useCallback, createContext, useContext, PropsWithChildren } from 'react';

type User = string | null;

interface AuthContextType {
  user: User;
  signin: (user: User) => void;
  signout: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const AuthContext = createContext<AuthContextType>({ user: null, signin: () => {}, signout: () => {} });

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>(null);

  const signin = useCallback((newUser: User) => {
    setUser(newUser);
  }, []);

  const signout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(() => ({ user, signin, signout }), [user, signin, signout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}

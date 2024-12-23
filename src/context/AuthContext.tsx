import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../config/firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  toggles: Record<string, boolean>;
  settings: Record<string, any>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [toggles, setToggles] = useState<Record<string, boolean>>({});
  const [settings, setSettings] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        try {
          const userPreferencesRef = doc(db, 'userPreferences', user.uid);
          const docSnap = await getDoc(userPreferencesRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setToggles(data.toggles || {});
            setSettings(data.settings || {});
          }
        } catch (error) {
          console.error('Error fetching user preferences:', error);
        }
      } else {
        setToggles({});
        setSettings({});
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    console.log("Updated state of toggles and settings ")
  }, [toggles, settings]);


  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const value = {
    currentUser,
    toggles,
    settings,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
 
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
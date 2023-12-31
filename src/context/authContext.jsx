import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest, verifyTokenRequest, getUserByIdRequest, updateRequest } from "../api/auth";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
      console.log("Error al crear el contexto.");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const login = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
      return(res.status)
    } catch (error) {
      
      setErrors(error.response.data.message);
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);

      clearTimeout(timer);
      return(error.response.status);
    }
  };

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      if (res.status === 200) {
        console.log(res);
        setUser(res);
        setIsAuthenticated(true);
      }
    } catch (error) {
      setErrors(error.response.data.message);
    }
  };

  const update = async (id, user) => {
    try {
      const res = await updateRequest(id, user);
      console.log(res);
    }catch (error) {
      console.log(error.response.data.message);
    }
  }

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  const getUserById = async (userId) => {
    try {
      const res = await getUserByIdRequest(userId);
      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error("Error: " + res.status);
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  const loginWithGoogle = async () => {
    const resGoogle = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, resGoogle);
    console.log(response.user.displayName);
    console.log(response.user.email);
    return response;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        login,
        logout,
        isAuthenticated,
        errors,
        loading,
        loginWithGoogle,
        getUserById,
        update
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
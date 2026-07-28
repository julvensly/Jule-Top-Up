import { createContext, useState } from "react"; export 
const AuthContext = createContext();
 function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState( 
    localStorage.getItem("isLoggedIn") === "true"
  ); const [role, setRole] = useState( 
    localStorage.getItem("role") || ""
  ); const [userId, setUserId] = useState( 
    localStorage.getItem("userId") || ""
  ); const [token, setToken] = useState( 
    localStorage.getItem("token") || ""
  ); const login = (id, userRole, userToken) => { 
    localStorage.setItem("isLoggedIn", "true"); 
    localStorage.setItem("role", userRole); 
    localStorage.setItem("userId", id); 
    localStorage.setItem("token", userToken); 
    setIsLoggedIn(true); setRole(userRole); 
    setUserId(id); setToken(userToken);
  };
  const logout = () => { 
    localStorage.removeItem("isLoggedIn"); 
    localStorage.removeItem("role"); 
    localStorage.removeItem("userId"); 
    localStorage.removeItem("token"); 
    setIsLoggedIn(false); setRole(""); setUserId(""); 
    setToken("");
  };
  return ( <AuthContext.Provider value={{ isLoggedIn, 
        role, userId, token, login, logout,
      }}
    >
      {children} </AuthContext.Provider> );
}
export default AuthProvider;

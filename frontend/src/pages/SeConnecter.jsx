import { useState, useContext } from "react";
 import { useNavigate } from "react-router-dom";
 import { AuthContext } from "../AuthContext";
 import api from "../services/api"; 
import {Mail, Lock, Eye, EyeOff, LogIn,
} from "lucide-react";
function SeConnecter() { const [email, setEmail] = 
  useState(""); const [password, setPassword] = useState(""); 
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate(); const { login } = 
  useContext(AuthContext); const handleSubmit = async (e) => {
    e.preventDefault(); try { const response = await api.post( 
        "/api/users/login", {
          email, password,
        }
      ); const { token, userId, role } = response.data; 
      login(userId, role, token); if (role === "admin") {
        navigate("/compte-admin");
      } else if (role === "semiadmin") {
        navigate("/compte-semi-admin");
      } else {
        navigate("/compte");
      }
    } catch (error) {
      console.log(error); alert( error.response?.data?.message 
        ||
          "Erreur connexion" );
    }
  };
  return ( <div className="auth-page"> <div 
      className="back-button">
        <button onClick={() => navigate(-1)}>‹</button> </div> 
      <div className="auth-card">
        <div className="auth-icon"> <LogIn size={32} /> </div> 
        <h1>Se connecter</h1> <p className="auth-subtitle">
          Connectez-vous à votre compte </p> <form 
        onSubmit={handleSubmit}>
          <div className="input-group"> <Mail size={20} /> 
            <input
              type="email" placeholder="Adresse e-mail" 
              value={email} onChange={(e) =>
                setEmail(e.target.value)
              }
              required /> </div> <div className="input-group"> 
            <Lock size={20} /> <input
              type={ showPassword ? "text"
                  : "password"
              }
              placeholder="Mot de passe" value={password} 
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required /> <button type="button" 
              className="password-button" onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? ( <EyeOff size={20} /> ) : ( <Eye 
                size={20} />
              )} </button> </div> <button type="submit" 
            className="auth-submit"
          >
            Se connecter </button> </form> </div> </div> );
}
export default SeConnecter;

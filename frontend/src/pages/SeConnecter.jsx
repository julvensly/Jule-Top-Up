import { useState, useContext }from "react";
 import { useNavigate } from "react-router-dom";
 import { AuthContext } from "../AuthContext"; 
import api from "../services/api";
 function SeConnecter() {
  const [email, setEmail] =   useState("");
 const [password, setPassword] = useState("");
 const   [showPassword, setShowPassword] =  useState(false);
 const navigate =   useNavigate();
 const { login } =   useContext(AuthContext);
 const   handleSubmit = async (e) => {
    e.preventDefault(); try {
 const  response = await api.post(
        "/api/users/login", 
        {
          email, password,
        }
      ); const { token, userId, role } 
      = response.data; login(userId, 
      role, token);
 if (role === "admin") {
        navigate("/compte-admin");
      } else if (role === "semiadmin") 
{navigate("/compte-semi-admin");
}
 else {
        navigate("/compte");
      }
    } catch (error) {
      console.log(error); alert( 
        error.response?.data?.message 
        || "Erreur connexion"
      );
    }
  };
  return ( <div> <h1>Se connecter</h1> 
      <form onSubmit={handleSubmit}>
        <input type="email" 
          placeholder="Adresse e-mail" 
          value={email} onChange={(e)  => setEmail(e.target.value)} 
          required
        /> <br /><br /> <input 
          type={showPassword ? "text" : 
          "password"} placeholder="Mot de passe" value={password} 
          onChange={(e) => 
          setPassword(e.target.value)} 
          required
        /> <button type="button" 
          onClick={() => 
          setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁️"} 
        </button> <br /><br /> <button 
        type="submit">
          Se connecter </button> 
      </form>
    </div> );
}
export default SeConnecter;

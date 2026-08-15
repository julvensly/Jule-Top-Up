import { useState } from "react";
 import api from "../services/api";
 import { useNavigate } from "react-router-dom";
 import { User, Mail, Lock, Eye, EyeOff, Check, X,
} from "lucide-react";
import Button from "../components/Button";
function Inscrit() {
 const [form, setForm] = useState({ nom: 
    "", email: "", password: "",
  });
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();
 const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value,
    });
  };
  const password = form.password;
 const passwordRules = { 
    length: password.length >= 8, upper: 
    /[A-Z]/.test(password), lower: /[a-z]/.test(password), 
    number: /[0-9]/.test(password), special: 
    /[@#$!%*?&]/.test(password),
  };
  const handleSubmit = async (e) => { e.preventDefault(); try { 
      await api.post("/api/users/register", form); 
      alert("Inscription réussie !"); navigate("/connexion");
    } catch (error) {
      alert( error.response?.data?.message || "Erreur inscription"
      );
    }
  };
 
const [loading, setLoading] = useState(false);
 return (
 <div className="auth-page"> <div  className="back-button">
        <button onClick={() => navigate(-1)}>‹</button> </div> 
      <div className="auth-card">
        <div className="auth-icon"> <User size={32} /> </div> 
        <h1>Créer un compte</h1> <p className="auth-subtitle">
          Inscrivez-vous pour continuer </p> <form 
        onSubmit={handleSubmit}>
          <div className="input-group"> <User size={20} /> 
            <input
              type="text"
              name="nom"
              placeholder="Nom complet" 
              value={form.nom}
 onChange={handleChange}
autoComplete="name"
 required
            /> </div> <div className="input-group"> <Mail 
            size={20} />
 <input
              type="email"
 name="email"
 placeholder="Adresse e-mail"
 value={form.email} 
              onChange={handleChange}
autoComplete="email"
 required
            /> </div>
 <div className="input-group"> <Lock 
            size={20} />
 <input
             type={showPassword ? "text" : "password"} 
              name="password" placeholder="Mot de passe" 
              value={form.password}
 onChange={handleChange} 
autoComplete="new-password"              
required
            /> <button type="button" 
              className="password-button" onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? ( <EyeOff size={20} /> ) : ( <Eye 
                size={20} />
              )} </button> </div> <div 
          className="password-rules">
            <p> {passwordRules.length ? ( <Check size={16} /> ) 
              : (
                <X size={16} /> )} 8 caractères minimum </p> 
            <p>
              {passwordRules.upper ? ( <Check size={16} /> ) : 
              (
                <X size={16} /> )} Une lettre majuscule </p> 
            <p>
              {passwordRules.lower ? ( <Check size={16} /> ) : 
              (
                <X size={16} /> )} Une lettre minuscule </p> 
            <p>
              {passwordRules.number ? ( <Check size={16} /> ) : 
              (
                <X size={16} /> )} Un chiffre </p> <p> 
              {passwordRules.special ? (
                <Check size={16} /> ) : ( <X size={16} /> )} Un 
              caractère spécial
            </p> </div> <button type="submit" 
loading={loading}           
 className="auth-submit"
          >
            Créer mon compte </button> </form> </div> </div> );
}
export default Inscrit;

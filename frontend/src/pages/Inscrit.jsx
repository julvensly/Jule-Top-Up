import { useState } from "react";
 import api from "../services/api";
 import { useNavigate } from "react-router-dom"; 
function Inscrit() {
  const [form, setForm] = useState({ nom: "", email: "", 
    password: "",
  });
  const [showPassword, setShowPassword] = 
  useState(false); const navigate = useNavigate(); const 
  handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value,
    });
  };
  const password = form.password; const passwordRules = 
  {
    length: password.length >= 8, upper: 
    /[A-Z]/.test(password), lower: 
    /[a-z]/.test(password), number: 
    /[0-9]/.test(password), special: 
    /[@#$!%*?&]/.test(password),
  };
  const handleSubmit = async (e) => { 
    e.preventDefault(); try {
      await api.post( 
        "/api/users/register", form
      ); alert("Inscription réussie !"); 
      navigate("/connexion");
    } catch (error) {
      alert( error.response?.data?.message || "Erreur inscription"
      );
    }
  };
  return ( <div> <h1>S'inscrire</h1> <form 
      onSubmit={handleSubmit}>
        <input type="text" name="nom" placeholder="Nom complet" onChange={handleChange} required
        /> <br /><br /> <input type="email" name="email" 
          placeholder="Adresse e-mail" 
          onChange={handleChange} required
        /> <br /><br /> <input type={showPassword ? 
          "text" : "password"} name="password" 
          placeholder="Mot de passe" 
          value={form.password} onChange={handleChange} 
          required
        /> <button type="button" onClick={() => 
          setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁️ "} 
        </button> <div>
          <p>{passwordRules.length ? "✅" : "❌"} 8 
          caractères minimum</p> <p>{passwordRules.upper 
          ? "✅" : "❌"} Une lettre majuscule</p> 
          <p>{passwordRules.lower ? "✅" : "❌"} Une 
          lettre minuscule</p> <p>{passwordRules.number 
          ? "✅" : "❌"} Un chiffre</p> 
          <p>{passwordRules.special ? "✅" : "❌"} Un 
          caractère spécial (@#$!...) </p>
        </div> <br /> <button type="submit"> S'inscrire 
        </button>
      </form> </div> );
}
export default Inscrit;

import { useState } from "react";
 import { useLocation, useNavigate } from "react-router-dom";
 import api from "../services/api";
import { Send, Gamepad2, CreditCard, Hash,} from "lucide-react";
 function OrderForm() {
  const location = useLocation();
 const navigate =   useNavigate();
 const selected = location.state || {};
 const  communityId =
    selected.communityId || 
    localStorage.getItem("communityId");
  const [formData, setFormData] = useState({ service: 
    selected.service || "",
 plan: selected.plan || "",
 price:  selected.price || "",
 playerId: "",
 paymentMethod: "", 
    transactionId: "",
 communityId: communityId || "",
  });
  const handleChange = (e) => {
 const { name, value } = 
    e.target; setFormData((prev) => ({ ...prev, [name]: value,
    }));
  };
  const handleSubmit = async (e) => { e.preventDefault();
 try { 
      const response = await api.post("/api/orders", formData); 
      alert(response.data.message); navigate(-1);
    } catch (error) {
      console.error(error); alert( 
        error.response?.data?.message ||
          "Erreur lors de l'envoi de la commande." );
    }
  };
  return (
<div>
 <div className="auth-page">
 <div className="back-button"> <button onClick={() => navigate(-1)}>‹</button>
  </div>
 <div className="auth-card"> <div className="auth-icon"> <Send size={30} />
    </div>
 <h1>Faire une commande</h1>
 <p className="auth-subtitle">  Remplissez les informations de votre commande</p>
 <form onSubmit={handleSubmit}>
 <div className="input-group"> 
        <Gamepad2 size={20} />
 <input type="text" name="playerId" placeholder="ID du joueur" 
          value={formData.playerId} onChange={handleChange} required
        />
 </div>
 <div className="input-group"> <CreditCard size={20} 
        /> <select
          name="paymentMethod" value={formData.paymentMethod} 
          onChange={handleChange} required
        >
          <option value=""> Choisir un mode de paiement </option> 
          <option value="MonCash">MonCash</option> <option 
          value="NatCash">NatCash</option>
        </select> </div> <div className="input-group"> <Hash size={20} 
        /> <input
          type="text" name="transactionId" placeholder="Numéro de 
          transaction" value={formData.transactionId} 
          onChange={handleChange} required
        /> </div> <button type="submit" className="auth-submit"
      >
        Envoyer la commande </button> </form> </div>
</div>
</div>
);
}
export default OrderForm;

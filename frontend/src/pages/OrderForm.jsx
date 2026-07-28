import { useState } from "react";
 import { useLocation } from "react-router-dom";
 import api from "../services/api";
 function OrderForm() {
  const location = useLocation();
 const selected = location.state || {};
 const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: selected.service || "", 
    plan: selected.plan || "", price: selected.price || "", 
    paymentMethod: "", transactionId: "", playerId: "",
  });
  const handleChange = (e) => { const { name, value } = e.target; 
    setFormData({
      ...formData, [name]: value,
    });
  };
  const handleSubmit = async (e) => { e.preventDefault(); try {
 const  response = await api.post(
        "/api/orders", formData ); 
      alert(response.data.message); setFormData({
        name: "", email: "", phone: "", service: "", plan: "", price: 
        "", paymentMethod: "", transactionId: "", playerId: "",
      });
    } catch (error) {
      alert("Erreur lors de l'envoi de la commande."); 
      console.log(error);
    }
  };
  return ( <div> <h1>Faire une commande</h1> <form 
      onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom" 
          value={formData.name} onChange={handleChange} required
        /> <br /><br /> <input type="email" name="email" 
          placeholder="Email" value={formData.email} 
          onChange={handleChange} required
        /> <br /><br /> <input type="text" name="phone" 
          placeholder="Téléphone" value={formData.phone} 
          onChange={handleChange} required
        /> <br /><br /> <h3> Service : {formData.service} </h3> <h3> 
          Plan : {formData.plan}
        </h3> <h3> Prix : {formData.price} </h3> {(formData.service  === "FreeFire" ||
          formData.service === "PUBG") && ( <> <input type="text" 
              name="playerId" placeholder="ID du joueur" 
              value={formData.playerId} onChange={handleChange} 
              required
            /> <br /><br /> </> )} <select name="paymentMethod" 
          value={formData.paymentMethod} onChange={handleChange} 
          required
        >
          <option value=""> Choisir un mode de paiement </option> 
          <option value="MonCash">
            MonCash </option> <option value="NatCash"> NatCash 
          </option>
        </select> <br /><br /> <input type="text" name="transactionId" 
          placeholder="Numéro de transaction" 
          value={formData.transactionId} onChange={handleChange} 
          required
        /> <br /><br /> <button type="submit"> Envoyer la commande 
        </button>
      </form> </div> );
}
export default OrderForm;

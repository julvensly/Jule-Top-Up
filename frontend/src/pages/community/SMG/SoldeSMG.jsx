import { useEffect, useState } from "react";
 import { useNavigate } from "react-router-dom";
 import { ArrowLeft, Wallet, Hash, RefreshCw } from 
"lucide-react";
 import api from "../../../services/api"; 
function SoldeSMG() {
  const navigate = useNavigate();
  const [solde,  setSolde] = useState(0);
 const [commandes,  setCommandes] = useState(0);
 const [quantite, setQuantite] = useState("");
 const [erreur, setErreur]  = useState("");
 const [message, setMessage] =  useState("");
 const [loading, setLoading] =  useState(true);
 const [exchangeLoading,  setExchangeLoading] = useState(false);
 const  communityId = localStorage.getItem("communityId");
  // =========================
  // CHARGE COMMUNITY 
  // =========================
  const getCommunity = async () => {
 try {
 const  response = await api.get(
        `/api/communities/${communityId}` ); 
      setSolde(response.data.balance || 0); 
      setCommandes(
        response.data.validatedOrdersCount || 0 );
    } catch (error) {
      console.error(error); setErreur( 
        error.response?.data?.message ||
 "Impossible de récupérer les informations."
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => { if (communityId) { getCommunity();
    } else {
      setErreur("Community ID pa jwenn."); 
      setLoading(false);
    }
  }, [communityId]);
  // =========================
  // CHANGEMENT INPUT 
  // =========================
  const handleQuantiteChange = (e) => {
 const value = e.target.value; setQuantite(value); setErreur(""); 
    setMessage(""); if (value === "") {
      return;
    }
    const nombre = Number(value); if (nombre < 50) { 
      setErreur(
        "Minimum échange : 50 commandes." ); return;
    }
    if (nombre > commandes) {
 setErreur( `Vous avez seulement ${commandes} commandes disponibles.`
      );
    }
  };
  // =========================
  // EXCHANGE 
  // =========================
  const handleExchange = async (e) => { 
    e.preventDefault(); setErreur(""); setMessage(""); 
    const nombre = Number(quantite); if 
    (!Number.isInteger(nombre)) {
      setErreur( "Veuillez entrer un nombre entier." ); 
      return;
    }
    if (nombre < 50) {
 setErreur( "Minimum échange : 50 commandes."
      ); return;
    }
    if (nombre > commandes) { setErreur( `Vous avez 
        seulement ${commandes} commandes disponibles.`
      ); return;
    }
    try { setExchangeLoading(true); const response = 
      await api.post(
        "/api/orders/community-exchange", { communityId, 
          ordersToExchange: nombre,
        }
      ); setMessage( response.data.message ); 
      setQuantite("");
      // Recharge les données depuis backend
      await getCommunity();
    } catch (error) {
      console.error(error); setErreur( 
        error.response?.data?.message ||
 "Erreur pendant l'échange."
      );
    } finally {
      setExchangeLoading(false);
    }
  };
  // =========================
  // LOADING 
  // =========================
  if (loading) {
 return (
 <div className="auth-page"> 
        <div className="auth-card">
          <p>Chargement du solde...</p>
 </div>
 </div>
 );
  }
  // =========================
  // PAGE 
  // =========================
  return (
 <div className="auth-page">
 <div className="back-button">
        <button onClick={() => navigate(-1)}>
 <ArrowLeft size={22} />
        </button>
 </div>
 <div className="auth-card">
 {/* ICON */}
 <div className="auth-icon">
          <Wallet size={30} />
 </div>
 <h1>Solde SMG</h1> 
        <p className="auth-subtitle">
          Gérez le solde et les échanges de votre Community
        </p> {/* SOLDE */}
 <div className="balance-box"> 
          <Wallet size={22} />
 <div>
            <span>Solde disponible</span> 
            <strong>{solde} HTG</strong>
          </div>
   </div> {/* COMMANDES */} <div className="balance-box">
          <Hash size={22} />
 <div> <span>Commandes disponibles</span> 
            <strong>{commandes}</strong>
          </div>
 </div>
 {/* EXCHANGE */} 
        <h2>Échange</h2>
 <p className="auth-subtitle">
          1 commande = 1 HTG </p>
 <form onSubmit={handleExchange}>
          <div className="input-bar">
 <Hash size={20} /> 
            <input type="number" min="0"
 placeholder="Nombre de commandes" value={quantite} 
              onChange={handleQuantiteChange}
            />
 </div> {/* PREVIEW */} {quantite !== "" 
          &&
            Number(quantite) >= 50 &&
            Number(quantite) <= commandes &&
 ( <p> {quantite} commandes = {quantite} HTG 
              </p>
            )
          }
          {/* ERREUR */} {erreur && (
 <p className="form-error">
              {erreur} </p> )} {/* SUCCESS */} {message 
          && (
            <p className="form-success"> {message} </p> 
          )}
 <button type="submit" className="auth-submit" 
            disabled={exchangeLoading}
          >
            <RefreshCw size={18} /> {exchangeLoading ? 
              "Échange en cours..."
              : "Échanger"
            }
          </button>
 </form>
 </div>
 </div>
 );
}
export default SoldeSMG;

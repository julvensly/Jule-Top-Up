import { Link, useNavigate } from "react-router-dom"; 
import { useEffect, useState } from "react";
 import {
  Wallet,
 ShoppingBag,
 MessageCircle,
 Settings, 
  ArrowLeft,
 Users,
} from "lucide-react";
import api from "../../../services/api";
 function CompteSMG() {
  const navigate = useNavigate();
 const [community, setCommunity] = useState(null);
 const [loading, setLoading] = useState(true);
 const [erreur,  setErreur] = useState(""); useEffect(() => {
    const communityId = 
    localStorage.getItem("communityId");
 if 
    (!communityId) {
      setErreur("Aucune Community sélectionnée."); 
      setLoading(false); return;
    }
    const chargerCommunity = async () => {
 try {
 const  response = await api.get(`/api/community/${communityId}` ); 
        setCommunity(response.data.community);
      } catch (error) {
        console.error("Erreur Community:", error); 
        setErreur(
 error.response?.data?.message || "Impossible de charger la Community."
        );
      } finally {
        setLoading(false);
      }
    };
    chargerCommunity();
  }, []);
  if (loading) {
 return (
 <div className="auth-page"> 
        <p>Chargement de la Community...</p>
      </div> );
  }
  if (erreur) {
 return (
 <div className="auth-page"> 
        <div className="back-button">
          <button onClick={() => navigate(-1)}> 
            <ArrowLeft size={22} />
          </button>
 </div>
 <div className="auth-card"> 
          <Users size={40} />
        <h1>Community</h1>
 <p className="form-error">
            {erreur} </p>
 </div>
 </div>
 );
  }
  return (
 <div>
 <div className="back-button">
 <button onClick={() => navigate(-1)}>
          <ArrowLeft size={22} />
 </button>
 </div> 
      <h1>Compte {community.name}</h1>
 <p>Bienvenue dans votre Community {community.name}.  </p>
 <p> Community ID : {community.communityId} </p>
 <div className="galerie-deux">
        <div className="deux-colonnes">
 <Link to="/community/SMG/SoldeSMG" className="menu-link">
            <Wallet size={50} />
 <span>Solde</span> 
          </Link>
        </div>
 <div className="deux-colonnes">
 <Link to="/community/SMG/CommandesSMG" className="menu-link">
            <ShoppingBag size={50} /> 
            <span>Commandes</span>
          </Link>
 </div>
 <div className="deux-colonnes"> 
 <Link to="/community/SMG/MessagesSMG" className="menu-link">
            <MessageCircle size={50} /> 
            <span>Messages</span>
          </Link>
 </div>
 <div className="deux-colonnes"> 
<Link to="/community/SMG/SettingsSMG" className="menu-link">
            <Settings size={50} />
 <span>Settings</span> 
          </Link>
        </div>
 </div>
 </div> 
);
}
export default CompteSMG;

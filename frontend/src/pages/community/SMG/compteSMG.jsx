import { Link, useNavigate } from "react-router-dom"; 
import {
  Wallet, ShoppingBag, MessageCircle, Settings,
ArrowLeft,} from "lucide-react";
function CompteSMG() {
 const navigate = useNavigate(); 
  return (
    <div>
<div className="back-button"> <button onClick={() => 
        navigate(-1)}>
 <ArrowLeft size={22} />  </button>
  </div>
 <h1>Compte SMG</h1>
 <p>Bienvenue dans votre Community SMG.</p>
 <div className="galerie-deux">
        <div className="deux-colonnes">
 <Link to="/community/SMG/SoldeSMG" className="menu-link">
            <Wallet size={50} /> <span>Solde</span> 
          </Link>
        </div>
 <div className="deux-colonnes">
 <Link to="/community/SMG/CommanseSMG" className="menu-link">
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
            <Settings size={50} /> <span>Settings</span> 
          </Link>
        </div>
 </div>
 </div>
 );
}
export default CompteSMG;

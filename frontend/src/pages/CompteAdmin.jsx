import { Link, useNavigate } from "react-router-dom";
 import {  Wallet, MessageCircle, Users,
} from "lucide-react";
function CompteAdmin() {
 const navigate = useNavigate();
 return (
    <div>
 <div className="back-button"> <button onClick={() =>  navigate(-1)}>‹</button>
      </div>
 <h1>Compte Administrateur</h1>
 <p>Bienvenue, Administrateur.</p>
 <div className="galerie-deux">
        <div className="deux-colonnes">
 <Link to="/soldeadmin" 
          className="menu-link">
            <Wallet size={50} /> <span>Solde</span> </Link> 
</div>
<div className="deux-colonnes">          
<Link to="/admin-messages" className="menu-link">
            <MessageCircle size={50} /> <span>Messages</span> 
          </Link>
</div>
<div className="deux-colonnes">
 <Link to="/utilisateurs" 
          className="menu-link">
            <Users size={50} /> <span>Utilisateurs</span> 
          </Link>
        </div> </div> </div> );
}
export default CompteAdmin;

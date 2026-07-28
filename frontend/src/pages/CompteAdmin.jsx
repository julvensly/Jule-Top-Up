import { Link, useNavigate } from "react-router-dom";
 function CompteAdmin() {
  const navigate = useNavigate();
 const deconnexion = () => { localStorage.removeItem("isLoggedIn"); 
    localStorage.removeItem("role"); navigate("/connexion");
  };
  return (
 <div>
 <h1>Compte Administrateur</h1>
 <p>Bienvenue,  Administrateur.</p>
 <Link to="/solde">
        <button>Solde</button>
 </Link>
 <br /><br />
 <Link  to="/gestion-commandes">
        <button>Gérer commandes</button>
 </Link>
 <br /><br /> 
      <Link to="/admin-messages">
        <button>Messages</button>
 </Link>
 <br /><br />
 <Link  to="/utilisateurs">
        <button>Utilisateurs</button>
 </Link>
 </div>
 );
}
export default CompteAdmin;

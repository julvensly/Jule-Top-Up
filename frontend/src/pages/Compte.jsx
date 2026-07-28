import { Link, useNavigate } from 
"react-router-dom"; 
function Compte() {
  const navigate = useNavigate();
 const  deconnexion = () => {
    localStorage.removeItem("isLoggedIn"); 
    localStorage.removeItem("role"); 
    navigate("/connexion");
  };
  return (
 <div>
 <h1>Mon Compte</h1> 
      <p>Bienvenue sur votre compte.</p>

 <Link to="/orders">
        <button>Mes commandes</button>
 </Link> 
      <br /><br />
 <Link to="/paiement">
        <button>Paiement</button>
 </Link>
 <br  /><br />
 <Link to="/messages">
        <button>Messages</button>
 </Link>
 </div>
 );
}
export default Compte;

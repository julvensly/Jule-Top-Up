import { useContext } from "react";
 import { AuthContext } from "../AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom"; 
function Navbar() {
  const { isLoggedIn, role, logout } = useContext(AuthContext);
 const navigate =  useNavigate();
const location = useLocation(); 
const deconnexion = () => { logout(); navigate("/connexion");
};
const siteName =
 location.pathname === "pages/community/SMG/smg" ||
location.pathname === "/freefire"
? "SMG OFICIEL"
: "JULE community"; 
  return (
 <nav>
 <h2>{siteName}</h2>
 <div>
 <Link  to="/">Accueil</Link>{" | "}
 {isLoggedIn ? ( role === "admin" ? ( <>
 <Link  to="/compte-admin">Admin</Link>{" | "} 
              <button onClick={deconnexion}>
                Déconnexion </button>
 </>
 ) : role === 
          "semiadmin" ? (
            <> <Link to="/compte-semi-admin">Semiadmin
              </Link>{" | "}
 <button onClick={deconnexion}>
                Déconnexion </button> </>
 ) : (
 <>
 <Link to="/compte">compte</Link>{" | "} 
              <button onClick={deconnexion}>
                Déconnexion </button>
 </>
 )
 ) : (
 <> 
            <Link to="/inscrit">S'inscrire</Link>{" | "} 
            <Link to="/connexion">connecter</Link>
          </>
 )}
 </div>
 </nav>
 );
}
export default Navbar;

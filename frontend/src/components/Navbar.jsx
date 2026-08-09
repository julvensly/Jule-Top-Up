import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Link, useNavigate } from 
"react-router-dom";
 
 function Navbar() {
  const { isLoggedIn, role, logout } =
useContext(AuthContext);
 const navigate = useNavigate();
 const deconnexion = () => {
 logout();
navigate("/connexion");
  };
  return (
 <nav>
 <h2>Jule Top Up</h2>
 <div>
        <Link to="/">Accueil</Link>{" | "}
 {isLoggedIn ? (role === "admin" ? (
 <> 
              <Link to="/compte-admin">👤 Admin</Link>{" | "} 
              <button 
              onClick={deconnexion}>
                Déconnexion 
              </button>
            </>
 ) : (
 <>
 <Link to="/compte">👤 Mon  compte</Link>{" | "}
 <button  onClick={deconnexion}>
                Déconnexion 
              </button>
            </>
  ) : ( 
<>
<Link to="/compte-semi-admin">👤 semiadmin</Link>{" | "}
<button onClick={deconnexion}> Deconnexion</button>
</>
)
) : (
<> 
<Link to="/inscrit">S'inscrire</Link>{" | "}
            <Link to="/connexion"> connecter</Link>
          </>
 )} 
</div>
 </nav> 
);
}
export default Navbar;

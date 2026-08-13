import { useEffect, useState } from "react";
 import { useNavigate } from "react-router-dom";
 import api from "../services/api";
 function SoldeAdmin() {
  const [solde, setSolde] = useState(null);
 const [loading,  setLoading] = useState(true);
 const [erreur, setErreur] = useState("");
 const navigate = useNavigate(); useEffect(() => 
  {
    const getSolde = async () => {
 try {
 const response = await 
        api.get("/api/users/my-balance"); 
        setSolde(response.data.balance);
      } catch (error) {
        console.error(error); setErreur( 
          error.response?.data?.message ||
            "Impossible de récupérer le solde." );
      } finally {
        setLoading(false);
      }
    };
    getSolde();
  }, []);
  if (loading) { return <p>Chargement du solde...</p>;
  }
  if (erreur) { return <p>{erreur}</p>;
  }
  return ( <div>
 <div className="back-button"> <button 
        onClick={() => navigate(-1)}>‹</button>
      </div>
 <h1>Solde Admin</h1>
 <h2>Solde disponible</h2> 
      <p>{solde} HTG</p>
    </div> );
}
export default SoldeAdmin;

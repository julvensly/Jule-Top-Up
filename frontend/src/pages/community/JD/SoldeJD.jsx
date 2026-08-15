import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 import api from "../../../services/api";
 function SoldeJD() {
  const [solde, setSolde] = useState(null);
 const [loading,  setLoading] = useState(true);
 const [erreur, setErreur] =  useState("");
const navigate = useNavigate(); 
const communityId = localStorage.getItem("communityId"); useEffect(() => {
    const getSolde = async () => {
 try {
 const response = await  api.get(`/api/communities/${communityId}` ); 
        setSolde(response.data.balance);
      } catch (error) {
        console.error(error); setErreur("Impossible de récupérer le solde.");
      } finally {
        setLoading(false);
      }
    };
    if (communityId) { getSolde();
    } else {
      setErreur("Community ID pa jwenn."); setLoading(false);
    }
  }, [communityId]);
  if (loading) { return <p>Chargement du solde...</p>;
  }
  if (erreur) { return <p>{erreur}</p>;
  }
  return (
 <div>
<div className="back-button">  
<button onClick={() => navigate(-1)}>‹</button>
</div>
<h1>Solde SMG</h1>
 <h2>Solde disponible</h2> 
      <p>{solde} HTG</p>
    </div> );
}
export default SoldeJD;

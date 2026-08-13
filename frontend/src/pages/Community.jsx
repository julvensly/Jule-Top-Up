import { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import api from "../services/api";
 function Community() {
  const [communityId, setCommunityId] = useState("");
 const  [community, setCommunity] = useState(null);
 const [erreur, setErreur] = useState("");
 const navigate = useNavigate();
 const rechercherCommunity = async () => {
    if (!communityId.trim()) { setErreur("Antre Community ID a."); 
      return;
    }
    try { setErreur("");
 const response = await api.get( `/api/communities/${communityId.trim()}`
      ); setCommunity(response.data);
    } catch (error) {
      console.error(error); setCommunity(null); setErreur("ce Community n'existe pas");
    }
  };
  return (
 <div>
 <div className="back-button">
<button onClick={() => navigate(-1)}>‹</button>     
 </div>
 <h1>Community</h1>
 <input type="text" placeholder="Antre Community ID" value={communityId} onChange={(e) => 
        setCommunityId(e.target.value)}
      /> <button onClick={rechercherCommunity}> Rechercher </button> 
      {erreur && <p>{erreur}</p>} {community && (
        <div>
 <h2>{community.name}</h2>
 <p>Community ID: {community.communityId}</p>
 <button>Ouvri Community </button>
 </div>
 )}
 </div>
 );
}
export default Community;

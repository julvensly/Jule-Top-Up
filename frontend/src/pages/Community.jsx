import { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import {
  Search, Users, ArrowLeft, ArrowRight,
} from "lucide-react";
import api from "../services/api";
 function Community() 
{
  const [communityId, setCommunityId] = useState(""); 
  const [community, setCommunity] = useState(null); 
  const [erreur, setErreur] = useState("");
 const [loading, setLoading] = useState(false);
 const  navigate = useNavigate();
 const rechercherCommunity =  async () => {
    const id = communityId.trim(); if (!id) { 
      setErreur("Antre Community ID a."); 
      setCommunity(null); return;
    }
    try { setLoading(true); setErreur(""); 
      setCommunity(null);
 const response = await 
      api.get(`/api/community/${id}`); setCommunity({
        ...response.data.community, page: 
        response.data.page,
      });
    } catch (error) {
      console.error(error); setCommunity(null); 
      setErreur(
  error.response?.data?.message || "Ce Community n'existe pas."
      );
    } finally {
      setLoading(false);
    }
  };
  const ouvrirCommunity = () => { if (!community) 
    return; localStorage.setItem(
      "communityId", community.communityId ); if 
    (!community.page) {
setErreur( "Aucune page configurée pour cette Community."
      ); return;
    }
    navigate(community.page);
  };
  return (
 <div className="auth-page">
 <div className="back-button">
        <button onClick={() => navigate(-1)}>
 <ArrowLeft size={22} />
        </button>
 </div>
 <div className="auth-card"> 
        <div className="auth-icon">
          <Users size={30} />
 </div>
 <h1>Community</h1> 
        <p className="auth-subtitle">
          Entrez l'identifiant de votre Community </p> 
        <div className="input-group">
          <Search size={20} />
 <input type="text" placeholder="Community ID" 
            value={communityId}
  onChange={(e) => {
              setCommunityId(e.target.value); 
              setErreur("");
            }}
            onKeyDown={(e) => { if (e.key === "Enter") { 
                rechercherCommunity();
              }
            }}
          />
 </div>
 <button type="button" className="auth-submit" 
          onClick={rechercherCommunity} 
          disabled={loading}
        >
          <Search size={18} />
 {loading ? "Recherche..." : "Rechercher"}
        </button>
 {erreur && ( <p className="form-error">
            {erreur} </p> )}
 {community && ( <div className="community-result">
            <Users size={24} /> 
            <h2>{community.name}</h2> <p>
              Community ID : {community.communityId} 
            </p> <button type="button" className="auth-submit" 
              onClick={ouvrirCommunity}
            >
              Ouvrir Community <ArrowRight size={18} /> 
            </button>
          </div>
 )}
 </div>
 </div>
 );
}
export default Community;

import { useEffect, useState } from "react";
 import { useNavigate } from "react-router-dom";
 import api from "../../../services/api";
 function CommandesSMG() {
  const navigate = useNavigate();
 const [orders, setOrders] = useState([]);
 const [loading, setLoading] = useState(true); 
  const [erreur, setErreur] = useState("");
 const communityId =  localStorage.getItem("communityId"); useEffect(() => {
    const getOrders = async () => { try { const response = 
        await api.get(
          `/api/communities/${communityId}/orders` ); 
        setOrders(response.data.orders || []);
      } catch (error) {
        console.error(error); setErreur("Impossible de récupérer les commandes.");
      } finally {
        setLoading(false);
      }
    };
    if (communityId) { getOrders();
    } else {
      setErreur("Community ID pa jwenn."); setLoading(false);
    }
  }, [communityId]);
  if (loading) { return <p>Chargement des commandes...</p>;
  }
  if (erreur) { return <p>{erreur}</p>;
  }
  return ( <div> <div className="back-button"> <button 
        onClick={() => navigate(-1)}>‹</button>
      </div> <h1>Commandes SMG</h1> {orders.length === 0 ? ( 
        <p>Aucune commande pour cette Community.</p>
      ) : ( <div> {orders.map((order) => ( <div 
            key={order._id}>
              <h3>{order.service}</h3> <p> <strong>Plan 
                :</strong> {order.plan}
              </p>
 <p> <strong>ID joueur :</strong> {order.playerId || "—"}
              </p>
 <p> <strong>Prix :</strong> {order.price} HTG
              </p>
 <p> <strong>Moyen de paiement :</strong>{" "} {order.paymentMethod || "—"}
              </p> <p> <strong>Transaction :</strong>{" "} 
                {order.transactionId || "—"}
              </p> <p> <strong>Statut :</strong> {order.status} 
              </p> <hr />
            </div> ))} </div> )} </div> );
}
export default CommandesSMG;

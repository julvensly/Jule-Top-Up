import { useNavigate } from "react-router-dom";
 function Spotify() { 
  const navigate = useNavigate();
 const plans = [
    { name: "Spotify Premium 1 mwa", price: "300 HTG" },
 { name: "Spotify Premium 3 mwa", price: "800 HTG" },
{ name: "Spotify Premium 12 mwa", price: "3000 HTG" }
  ]; return ( <div> <img src="/Spotify.jpg" alt="Spotify" style={{ 
        width: "375px", height: "300px" }}
      /> <h2>Veuillez choisir votre abonnement</h2> <div 
      className="galerie-deux">
        {plans.map((plan, index) => ( <div key={index}> <img 
              className="deux-colonnes" src="/Spotify2.jpg" 
              alt="Spotify"
            /> <h3>{plan.name}</h3> <p>Pri: {plan.price}</p> <button 
              onClick={() =>
                navigate("/order", { state: { service: "Spotify Premium",
 plan: plan.name, price: plan.price
                  }
                })
              }
            >
              Achete </button> </div> ))} </div> </div> );
}
export default Spotify;

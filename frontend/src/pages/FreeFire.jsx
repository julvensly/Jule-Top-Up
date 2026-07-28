import { useNavigate } from "react-router-dom";
 function FreeFire() { 
  const navigate = useNavigate(); const plans = [
    { name: "110 💎", price: "150 HTG" }, { name: "310 💎", price:  "400 HTG" },
 { name: "572 💎", price: "740 HTG" }, { name: "2000   💎", price: "2580 HTG" },
 { name: "4960 💎", price: "6400 HTG" }, 
    { name: "Weekly Membership (1 semèn)", price: "250 HTG" }, { name: 
    "Monthly Membership (1 mwa)", price: "900 HTG" },
 { name: "Booyah   Pass", price: "500 HTG" },
  ]; return ( <div> <img src="/Freefire.jpg" alt="Free Fire" style={{ 
        width: "375px", height: "300px" }}
      /> <h2>Veuillez choisir la quantité désirée</h2> <div 
      className="galerie-deux">
        {plans.map((plan, index) => ( <div key={index}> <img 
              className="deux-colonnes" src="/Freefire2.jpg" alt="Free  Fire"
            /> <h3>{plan.name}</h3> <p>Pri: {plan.price}</p> <button 
              onClick={() =>
                navigate("/order", { state: { service: "FreeFire", 
                    plan: plan.name, price: plan.price
                  }
                })
              }
            >
              Achete </button> </div> ))} </div> </div> );
}
export default FreeFire;

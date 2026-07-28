import { useNavigate } from "react-router-dom";
 function HBOMax() { 
  const navigate = useNavigate();
 const plans = [
    { name: "HBO Max 1 mwa", price: "300 HTG" },
 { name: "HBO Max 3  mwa", price: "800 HTG" },
 { name: "HBO Max 12 mwa", price: "3000  HTG" }
  ]; return ( <div> <img src="/hbomax.jpg" alt="HBO Max" style={{ 
        width: "375px", height: "300px" }}
      /> <h2>Veuillez choisir votre abonnement</h2> <div 
      className="galerie-deux">
        {plans.map((plan, index) => ( <div key={index}> <img 
              className="deux-colonnes" src="/hbomax2.jpg" alt="HBOMax"
            /> <h3>{plan.name}</h3> <p>Pri: {plan.price}</p> <button 
              onClick={() =>
                navigate("/order", { state: { service: "HBO Max", 
                    plan: plan.name, price: plan.price
                  }
                })
              }
            >
              Achete </button> </div> ))} </div> </div> );
}
export default HBOMax;

import { useNavigate } from "react-router-dom";
 function YouTube() { 
  const navigate = useNavigate();
 const plans = [
    { name: "YouTube Premium 1 mwa", price: "300 HTG" },
 { name:  "YouTube Premium 3 mwa", price: "800 HTG" },
 { name: "YouTube   Premium 12 mwa", price: "3000 HTG" }
  ]; return ( <div> <img src="/Youtube.jpg" alt="YouTube Premium" 
        style={{ width: "375px", height: "300px" }}
      /> <h2>Veuillez choisir votre abonnement</h2> <div 
      className="galerie-deux">
        {plans.map((plan, index) => ( <div key={index}> <img 
              className="deux-colonnes" src="/Youtube2.jpg" 
              alt="YouTube Premium"
            /> <h3>{plan.name}</h3> <p>Pri: {plan.price}</p> <button 
              onClick={() =>
                navigate("/order", { state: { service: "YouTube Premium", plan: plan.name, price: plan.price
                  }
                })
              }
            >
              Achete </button> </div> ))} </div> </div> );
}
export default YouTube;

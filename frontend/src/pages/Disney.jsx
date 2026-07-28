import { useNavigate } from "react-router-dom";
 function Disney() { 
  const navigate = useNavigate();
 const plans = [
    { name: "Disney+ 1 mwa", price: "400 HTG" },
 { name: "Disney+ 3  mwa", price: "1000 HTG" },
 { name: "Disney+ 12 mwa", price: "3500   HTG" }
  ]; return ( <div> <img src="/disney.jpg" alt="Disney+" style={{ 
        width: "375px", height: "300px" }}
      /> <h2>Veuillez choisir votre abonnement</h2> <div 
      className="galerie-deux">
        {plans.map((plan, index) => ( <div key={index}> <img 
              className="deux-colonnes" src="/disney2.jpg" 
              alt="Disney+"
            /> <h3>{plan.name}</h3> <p>Pri: {plan.price}</p> <button 
              onClick={() =>
                navigate("/order", { state: { service: "Disney+", 
                    plan: plan.name, price: plan.price
                  }
                })
              }
            >
              Achete </button> </div> ))} </div> </div> );
}
export default Disney;

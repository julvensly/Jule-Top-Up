import { useNavigate } from "react-router-dom";
 function Netflix() { 
  const navigate = useNavigate();
 const plans = [
    { name: "1 mwa", price: "500 HTG" }, { name: "3 mwa", price: "1200  HTG" },
 { name: "6 mwa", price: "2200 HTG" }, { name: "12 mwa",  price: "4000 HTG" }
  ]; return (
 <div>
 <img src="/netflix.jpg" alt="Netflix" style={{ 
        width: "375px", height: "300px" }}
      />
 <h2>Veuillez choisir votre abonnement</h2>
 <div 
      className="galerie-deux">
        {plans.map((plan, index) => (
 <div key={index}> <img 
              className="deux-colonnes" src="/netflix2.jpg" 
              alt="Netflix"
            />
 <h3>{plan.name}</h3>
 <p>{plan.price}</p> <button 
              onClick={() =>
                navigate("/order", { state: { service: "Netflix", 
                    plan: plan.name, price: plan.price
                  }
                })
              }
            >
              Achte </button>
 </div>
 ))}
 </div>
 </div>
 );
}
export default Netflix;

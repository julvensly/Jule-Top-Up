import { useNavigate } from "react-router-dom";
 function AmazonPrime() 
{
  const navigate = useNavigate();
 const plans = [ { name: "1 mwa",  price: "400 HTG" },
 { name: "3 mwa", price: "1000 HTG" },
 { name:  "12 mwa", price: "3500 HTG" }
  ]; return (
 <div> <img src="/amazonprime.jpg" alt="Amazon Prime" 
        style={{ width: "375px", height: "300px" }}
      /> <h2>Veuillez choisir votre abonnement</h2> <div 
      className="galerie-deux">
        {plans.map((plan, index) => ( <div key={index}> <img 
              className="deux-colonnes" src="/amazonprime2.jpg" 
              alt="Amazon Prime"
            /> <h3>{plan.name}</h3> <p>Pri: {plan.price}</p> <button 
              onClick={() =>
                navigate("/order", { state: { service: "Amazon Prime", 
                    plan: plan.name, price: plan.price
                  }
                })
              }
            >
              Achete </button> </div> ))} </div> </div> );
}
export default AmazonPrime;

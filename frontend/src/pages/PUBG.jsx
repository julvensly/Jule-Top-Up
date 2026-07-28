import { useNavigate } from "react-router-dom";
 function PUBG() { 
  const navigate = useNavigate(); const plans = [
    { name: "PUBG Mobile 60 UC", price: "100 HTG" },
 { name: "PUBG  Mobile 325 UC", price: "500 HTG" },
 { name: "PUBG Mobile 660 UC",  price: "900 HTG" },
 { name: "PUBG Mobile 1800 UC", price: "2500    HTG" }
  ]; return (
 <div>
 <img src="/pubg.jpg" alt="PUBG Mobile" style={{ 
        width: "375px", height: "300px" }}
      />
 <h2>Veuillez choisir la quantité désirée</h2> <div 
      className="galerie-deux">
        {plans.map((plan, index) => ( <div key={index}> <img 
              className="deux-colonnes" src="/pubg2.jpg" alt="PUBG  Mobile"
            /> <h3>{plan.name}</h3> <p>Prix : {plan.price}</p> <button 
              onClick={() =>
                navigate("/order", { state: { service: "PUBG Mobile", 
                    plan: plan.name, price: plan.price
                  }
                })
              }
            >
              Achte </button> </div> ))} </div> </div> );
}
export default PUBG;

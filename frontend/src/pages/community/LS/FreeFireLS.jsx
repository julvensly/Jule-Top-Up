import { useNavigate } from "react-router-dom";
 function FreeFire() { 
  const navigate = useNavigate();
 const plans = [
 { name: "110 ", price: "150 HTG" },
 {name: "210 ", price: "300 HTG"},
 { name: "310 ", price: "470 HTG" },
 { name: "520 ", price: "700 HTG" },
 {name:"530 ", price:"750 HTG"},
 { name: "1060 ", price: "1350 HTG" },
 { name:"2180 ", price: "3000 HTG" },
 { name: "5600 ", price: "6500 HTG" },
 { name:"11500 ", price: "13000 HTG"},
 { name: "Weekly Membership", price: "399 HTG" },
 { name: "Monthly Membership", price: "2,295 HTG" }, ];
 const  choisirPlan = (plan) => { const communityId =
    localStorage.getItem("communityId"); navigate("/order", { state: { 
      service: "FreeFire", plan: plan.name, price:
        plan.price, communityId: communityId,
      },
    });
  };
  return (
 <div>
 <div className="back-button">
 <button onClick={() =>  navigate(-1)}>‹</button>
      </div> <img src="/Freefire.jpg" alt="Free Fire" style={{ width: 
          "375px", height: "300px", objectFit: "cover",
        }}
      /> 
 <div  className="galerie-deux">
        {plans.map((plan, index) => ( <div key={index} 
            className="deux-colonnes" onClick={() => 
            choisirPlan(plan)}
          >
            <img src="/Freefire2.jpg" alt="Free Fire" /> 
            <h3>{plan.name}</h3> <p>Pri: {plan.price}</p>
          </div>
 ))}
 </div>
 </div>
 );
}
export default FreeFireLS;

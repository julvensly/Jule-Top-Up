import { useNavigate } from "react-router-dom";
 function FreeFire() {
  const navigate = useNavigate();
 const plans = [
 { name: "100+10 💎", price: "150 HTG" },
 { name: "310+31 💎", price: "519 HTG" },
 { name: "520+52 💎", price: "829 HTG" },
    { name: "1060+106 💎", price: "1499 HTG" },
 { name:"2180+218 💎", price: "3499 HTG" },
 { name: "5600+560 💎", price: "8390 HTG" },
 { name: "Weekly Membership", price: "399 HTG" },
 { name: "Monthly Membership", price: "2,295  HTG" },
  ];
 const choisirPlan = (plan) => {
 const communityId = 
    localStorage.getItem("communityId"); navigate("/order", {
      state: { service: "FreeFire", plan: plan.name, price: 
        plan.price, communityId: communityId,
      },
    });
  };
  return (
 <div>
 <div className="back-button"> <button  onClick={() => navigate(-1)}>‹</button>
      </div>
 <img src="/Freefire.jpg" alt="Free Fire" style={{ 
          width: "375px", height: "300px", objectFit: "cover",
        }}
      />
 <h2>Veuillez choisir la quantité désirée</h2>
 <div className="galerie-deux">
        {plans.map((plan, index) => ( <div key={index} 
            className="deux-colonnes" onClick={() => 
            choisirPlan(plan)}
          >
            <img src="/Freefire2.jpg" alt="Free Fire" /> 
            <h3>{plan.name}</h3> <p>Pri: {plan.price}</p>
          </div> ))} </div> </div> );
}
export default FreeFire;

import { useNavigate } from "react-router-dom";
 function PUBGJD() { 
  const navigate = useNavigate(); const plans = [
    { name: "PUBG Mobile 60 UC", price: "100 HTG" },
 { name: "PUBG  Mobile 325 UC", price: "500 HTG" },
 { name: "PUBG Mobile 660 UC",  price: "900 HTG" },
 { name: "PUBG Mobile 1800 UC", price: "2500    HTG" }
  ];


 const choisirPlan = (plan) => {
 const communityId = localStorage.getItem("communityId");
 navigate("/order", { state:
 { service: "FreeFire", plan: plan.name, price:
        plan.price, communityId: communityId,
},
});
};
return (
 <div>
 <div className="back-button">
 <button onClick={()  => navigate(-1)}>‹</button>
      </div>
<img src="/pubg.jpg" alt="PUBG Mobile" style={{ 
        width: "375px", height: "300px" }}
      />
<div className="galerie-deux">
 {plans.map((plan, index) => (
 <div key={index}
            className="deux-colonnes" onClick={() => choisirPlan(plan)}
          >
          <img src="/pubg2.jpg" alt="PUBG Mobile" /> 
            <h3>{plan.name}</h3> <p>Pri: {plan.price}</p>
          </div> 
))}
</div>
  </div>
 );
}
export default PUBGJD;

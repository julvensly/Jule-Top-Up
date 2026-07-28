import { useEffect, useState } from "react";
 import axios from "axios";
 function Orders() {
  const [orders, setOrders] = useState([]);
 useEffect(()  => {
    axios.get("http://localhost:5000/api/orders") 
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => { console.log(error);
      });
  }, []);
  return (
 <div>
 <h1>Mes commandes</h1>
 {orders.length  === 0 ? (
        <p>Aucune commande.</p>
 ) : (
 orders.map((order, 
        index) => (
          <div key={index}>
 <h3>{order.service}</h3> 
            <p>Nom : {order.name}</p>
 <p>Email :  {order.email}</p>
 <p>Téléphone :  {order.phone}</p>
 <p>Plan : {order.plan}</p> 
            <p>Prix : {order.price} HTG</p>
 <p>Paiement : {order.paymentMethod}</p>
            <p>Transaction : {order.transactionId}</p> 
            <p>Statut : {order.status || "An atant"}</p> 
            <hr />
          </div>
 ))
 )}
 </div>
 );
}
export default Orders;

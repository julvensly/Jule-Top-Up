import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Navbar from "./components/Navbar";
 import Footer from "./components/Footer";
 import Home from "./pages/Home";
import SMG from "./pages/community/SMG/SMG";
 import Orders from "./pages/Orders";
 import Contact from "./pages/Contact";
 import OrderForm from "./pages/OrderForm";
import FreeFire from "./pages/community/SMG/FreeFire";
import PUBG from "./pages/PUBG";
import "./App.css"; 
import Inscrit from "./pages/Inscrit"; 
import SeConnecter from "./pages/SeConnecter";
 import Compte from "./pages/Compte";
import CompteAdmin from "./pages/CompteAdmin";
import Paiement from "./pages/Paiement";
import Messages from "./pages/Messages";

import SoldeAdmin from "./pages/SoldeAdmin";
import Utilisateurs from "./pages/Utilisateurs";
import ChatBox from "./pages/ChatBox";
import AdminMessages from "./pages/AdminMessages";
import Community from "./pages/Community"; 

function App() {
  return (
 <BrowserRouter> 
<Navbar /> 
<Routes> 
<Route path="/" element={<Home />} />
<Route path="/community/SMG/SMG" element={<SMG />} /> 
<Route path="/orders"  element={<Orders />} />
 <Route path="/contact" element={<Contact />} /> 
        <Route path="/order" element={<OrderForm />} />
<Route path="/community/SMG/freefire" element={<FreeFire />} />
<Route path="/pubg" element={<PUBG />} />
<Route path="/inscrit" element={<Inscrit />} />
 <Route path="/connexion" element={<SeConnecter />} />
 <Route path="/compte" element={<Compte />} />
<Route path="/compte-admin" element={<CompteAdmin />} />
<Route path="/paiement" element={<Paiement />} />
<Route path="/messages" element={<Messages />} />
<Route path="/admin-messages" element={<AdminMessages />} />
<Route path="/solde-Admin" element={<SoldeAdmin />} />
<Route path="/utilisateurs" element={<Utilisateurs />} />
<Route path="/chatbox" element={<ChatBox />} />
<Route path="/community" element={<Community />} />
























 </Routes>
 <Footer />
 </BrowserRouter> );
}
export default App;

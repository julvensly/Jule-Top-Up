import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Navbar from "./components/Navbar";
 import Footer from "./components/Footer";
 import Home from "./pages/Home";
 import Orders from "./pages/Orders";
 import Contact from "./pages/Contact";
 import OrderForm from "./pages/OrderForm";
import Netflix from "./pages/Netflix";
import Disney from "./pages/Disney";
import AmazonPrime from "./pages/AmazonPrime";
import HBOMax from "./pages/HBOMax";
import Spotify from "./pages/Spotify";
import YouTube from "./pages/YouTube";
import FreeFire from "./pages/FreeFire";
import PUBG from "./pages/PUBG";
import "./App.css"; 

import Inscrit from "./pages/Inscrit"; 
import SeConnecter from "./pages/SeConnecter";
 import Compte from "./pages/Compte";
import CompteAdmin from "./pages/CompteAdmin";

 function App() {
  return (
 <BrowserRouter> 
<Navbar /> 
<Routes> 
<Route path="/" element={<Home />} />
 <Route path="/orders"  element={<Orders />} />
 <Route path="/contact" element={<Contact />} /> 
        <Route path="/order" element={<OrderForm />} />
<Route path="/netflix" element={<Netflix />} />
<Route path="/disney" element={<Disney />} />
<Route path="/amazonprime" element={<AmazonPrime />} />
<Route path="/hbomax" element={<HBOMax />} />
<Route path="/spotify" element={<Spotify />} /> 
<Route path="/youtube" element={<YouTube />} />
<Route path="/freefire" element={<FreeFire />} />
<Route path="/pubg" element={<PUBG />} />

<Route path="/inscrit" element={<Inscrit />} />
 <Route path="/connexion" element={<SeConnecter />} />
 <Route path="/compte" element={<Compte />} />
<Route path="/compte-admin" element={<CompteAdmin />} />

 </Routes>
 <Footer />
 </BrowserRouter> );
}
export default App;

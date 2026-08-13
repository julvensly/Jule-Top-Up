import { Link, useNavigate } from "react-router-dom";
function Contact() {
const navigate = useNavigate();
 return (
 <div>
<div className="back-button">
<button onClick={() => navigate(-1)}>‹</button>
</div> 
<h1>Pour nou contacter</h1> <p> Si ou gen kestyon sou yon kòmand, kontakte ekip Jule Top Up.
      </p> <p> WhatsApp: +509 33860948 </p> <p> Email: support@juletopup.com 
      </p>
    </div> );
}
export default Contact;

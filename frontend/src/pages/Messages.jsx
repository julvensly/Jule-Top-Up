import { useState, useEffect } from "react";
 import api from "../services/api";
import { Link, useNavigate } from "react-router-dom";
 function Messages() {
  const [message, setMessage] = useState("");
 const  [messages, setMessages] = useState([]);
 const userId =   localStorage.getItem("userId");
 const loadMessages =   async () => {
    try {
 const res = await api.get( `/api/messages/${userId}`
);
 setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => { loadMessages();
  }, []);
  const envoyerMessage = async (e) => { 
    e.preventDefault(); if (!message.trim()) return; try 
    {
      

await api.post("/api/messages", { userId, sender: "client", receiver: 
  "admin", text: message,
});
 setMessage(""); loadMessages();
    } catch (error) {
      console.log(error);
    }
  };
const navigate = useNavigate();  
return (
 <div>
<div className="back-button">
<button onClick={() => navigate(-1)}>‹</button>
</div> 
<h1>Messages</h1>
 <div> 
        {messages.map((msg) => (
          <p key={msg._id}> <strong> {msg.sender === 
              "admin" ? "Admin" : "Ou"}:
            </strong>{" "} {msg.text} </p>
 ))}
 </div> 
      <form onSubmit={envoyerMessage}>
        <textarea placeholder="Écrivez votre message..." 
          value={message} onChange={(e) => 
          setMessage(e.target.value)}
        />
 <br />
 <br />
 <button type="submit">Envoyer</button>
      </form>
 </div>
 );
}
export default Messages;

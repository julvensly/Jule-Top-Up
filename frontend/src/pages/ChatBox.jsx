import { useState } from "react";
 function ChatBox() { 
  const [message, setMessage] = useState("");
 const [messages, setMessages] = useState([]);
 const sendMessage = () => {
    if (message.trim() === "") return; setMessages([ 
      ...messages, {
        text: message, sender: "user"
      }
    ]); setMessage("");
  };
  return (
 <div className="chatbox">
 <h2>Message  Admin</h2>
 <div className="messages">
  {messages.map((msg, index) => (
 <p key={index}> 
            {msg.sender === "user" ? "Ou: " : "Admin: "} 
            {msg.text}
          </p>
 ))}
 </div>
 <input type="text" 
        placeholder="Ekri mesaj..." value={message} 
        onChange={(e) => setMessage(e.target.value)}
      />
 <button onClick={sendMessage}> Voye </button> 
    </div>
  );
}
export default ChatBox;

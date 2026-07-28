import { useEffect, useState } from "react";
 import api from "../services/api";
 function AdminMessages() {
  const [conversations, setConversations] =  useState([]);
 const [messages, setMessages] =   useState([]);
 const [selectedUser, setSelectedUser] = useState("");
 const [selectedName, setSelectedName] =   useState("");
 const [reply, setReply] = useState(""); 
  const loadConversations = async () => {
    try { const res = await api.get( "/api/messages/conversations"
      ); setConversations(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const loadMessages = async (userId, nom) => { try { 
      const res = await api.get(
        `/api/messages/${userId}` 
      ); setMessages(res.data); setSelectedUser(userId); 
      setSelectedName(nom);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => { loadConversations();
  }, []);
  const sendReply = async () => { if (!reply.trim() || 
    !selectedUser) return;
    try { await api.post( 
        `/api/messages`, {
          userId: selectedUser, sender: "admin", 
          receiver: "client", text: reply,
        }
      ); setReply(""); loadMessages(selectedUser, 
      selectedName);
    } catch (err) {
      console.log(err);
    }
  };
  return ( <div> <h1>Messages des clients</h1> 
      <h2>Clients</h2> {conversations.map((conv) => (
        <div key={conv.userId}> <button onClick={() => 
              loadMessages(conv.userId, conv.nom)
            }
          >
            {conv.nom} </button> <p> Dernier message : 
            {conv.lastMessage}
          </p> <hr /> </div> ))} {selectedUser && ( 
        <div>
          <h2> Conversation avec {selectedName} </h2> 
          {messages.map((msg) => (
            <p key={msg._id}> <strong> {msg.sender === 
                "admin"
                  ? "Admin"
                  : selectedName}
                :
              </strong>{" "} {msg.text} </p> ))} 
          <textarea
            placeholder="Votre réponse..." value={reply} 
            onChange={(e) =>
              setReply(e.target.value)
            }
          /> <br /> <br /> <button onClick={sendReply}> 
            Envoyer
          </button> </div> )} </div> );
}
export default AdminMessages;

import { useState } from 'react'
import './App.css'
import CreateMessage from './components/CreateMessage.jsx';
import MessageList from './components/MessageList.jsx';

function App() {

  const [message, setMessage] = useState([]);

  const addMessage = (newMessage) => {
    setMessage([...message, newMessage]); 
  };

  let name = "Jo";

  return (
    <>
    <h1>Twitter</h1>
      <CreateMessage addMessage={addMessage} />   
      <MessageList name={name} message={message}/>
    </>
  );
}

export default App;

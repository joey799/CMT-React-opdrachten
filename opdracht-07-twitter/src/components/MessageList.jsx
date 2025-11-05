const MessageList = ({ name, message }) => {
  return (
    <div>
      {message.map((msg, index) => (
        <p key={index}><strong>{name}:</strong> {msg}</p>
      ))}
    </div>
  );
};

export default MessageList;

import { useState } from "react";

const CreateMessage = ({ addMessage }) => {
  const [textInput, setTextInput] = useState("");

  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitMessageHandler = (e) => {
    e.preventDefault();
    addMessage(textInput);   
    setTextInput("");
  };

  return (
    <form onSubmit={submitMessageHandler}>
      <textarea
        value={textInput}
        cols="50"
        rows="5"
        onChange={userInputHandler}
      ></textarea>

      <button type="submit">Toevoegen</button>
    </form>
  );
};

export default CreateMessage;

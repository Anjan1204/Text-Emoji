import { useState } from "react";
import "./App.css"; // Make sure this CSS is in your App.css

const EmojiWithText = () => {
  const emojis = ['❤️', '🔥', '💡', '🎯', '😊', '🚀', '😎', '✨'];
  const [text, setText] = useState("");

  const addEmoji = (emoji) => {
    setText(text + emoji);
  };

  return (
    <div className="emoji-container">
      <h2>Emoji With Text Picker</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        className="emoji-input"
      />
      <div className="emoji-buttons">
        {emojis.map((emoji, i) => (
          <button key={i} onClick={() => addEmoji(emoji)} className="emoji-btn">
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiWithText;

import { useState } from "react";
import { marked } from "marked";

function App() {
  const [text, setText] = useState("");
  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  const renderHtml = () => {
    const result = marked(text);
    return { __html: result };
  };
  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={handleChange}
        value={text}
        placeholder="enter text here"
        style={{ width: 400, height: 300 }}
      />

      <div id="preview" dangerouslySetInnerHTML={renderHtml()} />
    </div>
  );
}

export default App;

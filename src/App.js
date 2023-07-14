import Codeeditor from "./components/Codeeditor";
import { useState } from "react";

function App() {
  let [html, seHtml] = useState('');
  let [css, setCss] = useState('');
  let [javascript, setJavascript] = useState('');

  return (
    <>
      <div className="pane top-pane">
        <Codeeditor title="HTML" language="xml" value={html} onChange={seHtml} />
        <Codeeditor title="CSS" language="css" value={css} onChange={setCss} />
        <Codeeditor title="Javascript" language="javascript" value={javascript} onChange={setJavascript} />
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div >
    </>
  );
}

export default App;

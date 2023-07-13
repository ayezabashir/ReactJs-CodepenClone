import Codeeditor from "./components/Codeeditor";

function App() {
  return (
    <>
      <div className="pane top-pane">
        <Codeeditor />
        <Codeeditor />
        <Codeeditor />

      </div>
      <div className="pane bottom-pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;

import './App.css';
import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
      <h1>Tooltip Demo</h1>
      <Tooltip position="top" text="Tooltip on top">
        <button>Hover me (top)</button>
      </Tooltip>
      <Tooltip position="bottom" text="Tooltip on bottom">
        <button>Hover me (bottom)</button>
      </Tooltip>
      <Tooltip position="left" text="Tooltip on left">
        <button>Hover me (left)</button>
      </Tooltip>
      <Tooltip position="right" text="Tooltip on right">
        <button>Hover me (right)</button>
      </Tooltip>
    </div>
  );
}

export default App;

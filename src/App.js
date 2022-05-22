import { AppUsingReact } from "./nonredux/AppUsingReact";
import { AppUsingRedux } from "./redux/AppUsingRedux";

function App() {
  return (
    <div>
      <p>This demonstrates a simlpe todo list, with an editable header using vanilla react and also using react with redux.</p>
      <p>The numbers are counters for the renders.</p>
      <p>Note, that with redux, changes to the header input do not cause components "subscribed" to the todos array to re-render.</p>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <h1>App Using React/Redux</h1>
          <AppUsingRedux />
        </div>

        <div>
          <h1>App Using React</h1>
          <AppUsingReact />
        </div>
      </div>
    </div>
  );
}

export default App;

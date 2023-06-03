import "./App.css";
import Account from "./Account";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-body">
            <Header title="Fox Bank ATM" />
            <Account />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

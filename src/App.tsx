import Navbar from "./components/Navbar";
import RecipePanels from "./components/RecipePanels";

function App() {
  return (
    <div>
      <Navbar />{" "}
      <div
        style={{
          justifySelf: "center",
          width: "100%",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <RecipePanels />
      </div>
    </div>
  );
}

export default App;

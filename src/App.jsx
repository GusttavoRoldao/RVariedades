import Contato from "./components/Contato";
import Header from "./components/Header";
import Home from "./components/Home";
import Produtos from "./components/Produtos";
import "./index.css";

function App() {
  return (
    <div>
      <Home />
      <Header />
      <Produtos />
      <Contato />
    </div>
  );
}

export default App;

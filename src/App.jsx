import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import OurRecipes from "./components/OurRecipes/OurRecipes";

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
    </div>
  );
}

export default App;

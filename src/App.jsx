import "./App.css";
import Banner from "./assets/components/Banner/Banner";
import Header from "./assets/components/Header/Header";
import OurRecipes from "./assets/components/OurRecipes/OurRecipes";

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

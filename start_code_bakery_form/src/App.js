import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Search from "./components/Search";
import CakeForm from "./components/CakeForm";
import RecipeContainer from "./containers/RecipeContainer";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <RecipeContainer />
      </main>
    </>
  );
}

export default App;

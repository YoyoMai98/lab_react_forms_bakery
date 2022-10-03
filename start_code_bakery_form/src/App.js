import NavBar from "./components/NavBar";
import Title from "./components/Title";
import RecipeList from "./components/RecipeList";
import Search from "./components/Search";
import CakeForm from "./components/CakeForm";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <RecipeList />
        <Search />
        <CakeForm />
      </main>
    </>
  );
}

export default App;

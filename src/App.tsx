import "./App.css";
import Button from "./components/Button";
import PlayList from "./components/PlayList";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <main>
      <header>
        <h1>Title</h1>
      </header>
      <section>
        <SearchBar />
        <Button />
      </section>
      <section className="content-container">
        <article className="search-results-container">
          <SearchResults />
        </article>
        <aside className="playlist-container">
          <PlayList />
        </aside>
      </section>
    </main>
  );
}

export default App;

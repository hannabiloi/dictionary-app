import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="pug" />
        </main>
        <footer className="App-footer">
          <span>
            Coded by Hanna Biloi, open-sourced on{" "}
            <a
              href="https://github.com/hannabiloi/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            <i className="fa-brands fa-github"></i>
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;

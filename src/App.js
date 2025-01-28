import Main from "./Main";
import Header from "./Header";
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

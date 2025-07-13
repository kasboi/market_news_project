import Header from "./Header";
import "./LoadingState.css";

const LoadingState = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <h1 className="title">NEWS</h1>
        <div className="loading">Loading...</div>
      </main>
    </div>
  );
};

export default LoadingState;

import "./ErrorState.css";
import Header from "./Header"

interface ErrorStateProps {
  error: string;
}

const ErrorState = ({ error }: ErrorStateProps) => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <h1 className="title">NEWS</h1>
        <div className="error">{error}</div>
      </main>
    </div>
  );
};

export default ErrorState;

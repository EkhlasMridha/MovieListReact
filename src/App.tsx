import { ToastContainer } from 'react-toastify';
import './App.css';
import { PublicRouter } from './router/router';

function App() {
  return (
    <>
      <ToastContainer />
      <PublicRouter />
    </>
  );
}

export default App;

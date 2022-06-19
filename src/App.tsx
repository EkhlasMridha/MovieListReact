import { ToastContainer } from 'react-toastify';
import './App.css';
import { PublicRouter } from './router/router';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <PublicRouter />
    </>
  );
}

export default App;

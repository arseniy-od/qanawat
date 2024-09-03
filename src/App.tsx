import './App.css';
import Sidebar from './components/Sidebar';
import Page from './components/Page';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="min-h-screen min-w-screen bg-white flex justify-start font-sans text-gray-800">
            <Sidebar />
            <Page />
            <ToastContainer />
        </div>
    );
}

export default App;

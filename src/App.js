import './App.css';
import Main from './components/main';
import Experience from "./components/experience";
import { hot } from 'react-hot-loader';

const App = () => {
    return (
        <div className="app">
        	<Main />
        	{/*<Experience />*/}
        </div>
    );
};

export default hot(module)(App);

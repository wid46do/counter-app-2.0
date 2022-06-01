import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from "./store/store";
import Counter from './pages/Counter';

function App() {
  return (
    <Provider store={store}>
      <Counter max={100} min={0} step={1}/>
    </Provider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import 'moment/locale/tr';

function App() {
  return (
    <div className="App">
     <p>Hello React!</p>
     <h2>Tarih: </h2>
      <p> {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  );
}

export default App;

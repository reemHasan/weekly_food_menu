import logo from './logo.svg';
import './App.css';
import WeekMenu from './components/WeekMenu.js';
import DayMenu from './components/DayMenu';
import Example from './components/example'

function App() {
  return(
    <>
    <div className="App">
      <header className="App-header">
        <WeekMenu title="Food menu for the week">
       </WeekMenu>
      {/*<DayMenu></DayMenu>*/}
      </header>
    </div>
    </>
  );
}

export default App;

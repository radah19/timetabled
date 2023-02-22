import './App.css';
import './components/Calendar';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Weekly Work Calendar</h1>
      <h2>My entire work life boiled down into 1 week</h2>
      <Calendar/>
    </div>
  )
}

export default App
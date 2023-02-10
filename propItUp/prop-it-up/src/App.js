import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Kelsey"} lastName={"Bowen"} age={30} hairColor={"Auburn"}/>
      <PersonCard firstName={"David"} lastName={"Bowen"} age={31} hairColor={"Brown"}/>
      <PersonCard firstName={"Maisy"} lastName={"Bowen"} age={6} hairColor={"Blonde"}/>
      <PersonCard firstName={"Rhys"} lastName={"Bowen"} age={4} hairColor={"Blonde"}/>
    </div>
  );
}

export default App;

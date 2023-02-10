import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Kelsey"} lastName={"Bowen"} initialAge={30} hairColor={"Auburn"}/>
      <PersonCard firstName={"David"} lastName={"Bowen"} initialAge={31} hairColor={"Brown"}/>
      <PersonCard firstName={"Maisy"} lastName={"Bowen"} initialAge={6} hairColor={"Blonde"}/>
      <PersonCard firstName={"Rhys"} lastName={"Bowen"} initialAge={4} hairColor={"Blonde"}/>
    </div>
  );
}

export default App;

import Person from "./person";
import './App.css';

function App() {
  return(
    <div className='App'>
      <Person
           name={"Doe"} lastname={"Jane"}
           age={"45"}
           color={"Black"}
           initialAge={45} />
           <Person
           name={"Smith"} lastname={"John"}
           age={"88"}
           color={"Brown"}
           initialAge={88} />
           <Person
           name={"Fillmore"} lastname={"Millard"}
           age={"50"}
           color={"Brown"}
           initialAge={50} />
           <Person
           name={"Smith"} lastname={"Maria"}
           age={"62"}
           color={"Brown"}
           initialAge={62} />
    </div>
  )
}

export default App;
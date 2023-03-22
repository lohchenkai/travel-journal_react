// --component import
import Nav from './components/Nav'
import Destination from './components/Destination'
// --data import
import travelData from './data'
// --style import
import './styles/App.css'

function App() {
  const destinationElement = travelData.map((place, index) => <Destination key={index} {...place}/>)
  return (
    <div className="App">
      <Nav />
      {destinationElement}
    </div>
  )
}

export default App

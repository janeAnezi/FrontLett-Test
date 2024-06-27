import CoFound from "./Components/CoFound"
import Concept from "./Components/Concept"
import Focus from "./Components/Focus"
import Landing from "./Components/Landing"
import NavBar from "./Components/NavBar"
import Network from "./Components/Network"
import Quote from "./Components/Quote"
import ServiceModel from "./Components/ServiceModel"
import Studio from "./Components/Studio"

function App() {
  
  return (
    <>
      <div>
        <NavBar />
        <Landing />
        <Quote />
        <Network />
        <Focus />
        <Concept />
        <ServiceModel />
        <Studio />
        <CoFound />
      </div>
    </>
  )
}

export default App

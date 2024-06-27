import Blog from "./Components/Blog"
import CoFound from "./Components/CoFound"
import Concept from "./Components/Concept"
import Enterpreneur from "./Components/Enterpreneur"
import Equity from "./Components/Equity"
import Feature from "./Components/Feature"
import Focus from "./Components/Focus"
import InvestorNetwork from "./Components/InvestorNetwork"
import Landing from "./Components/Landing"
import LetsBuild from "./Components/LetsBuild"
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
        <Enterpreneur />
        <InvestorNetwork />
        <Equity />
        <Blog />
        <Feature />
        <LetsBuild />
      </div>
    </>
  )
}

export default App

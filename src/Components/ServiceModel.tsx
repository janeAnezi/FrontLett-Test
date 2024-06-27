import Card from "./Card"
import polygon1 from "../assets/icons/Polygon-1.jpg"
import polygon2 from "../assets/icons/Polygon-2.jpg"
import polygon3 from "../assets/icons/Polygon-3.jpg"
import rightarrow from "../assets/icons/down-right-1.jpg"

function ServiceModel() {
  return (
    <div className="bg-slate-50 text-center pb-20">
        <h3 className="font-bold text-4xl pb-3 pt-10">Our Service Incubation Model</h3>
        <p className="w-3/4 m-auto">The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.</p>
        <div className="text-left mt-10 pl-20">
            <h4 className="font-semibold text-2xl">Hypothesis</h4>
            <p>Just a few reasons we know its time for this model within the ecosystem</p>
        </div>
        <div className="flex mt-10 mx-20 text-left"> 
            <Card title="">
                <img src={polygon1} alt="polygon image" className="pb-4" />
                <p>A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP.</p>
            </Card>
            <Card title="">
                <img src={polygon2} alt="polygon image" className="pb-4" />
                <p>A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource.</p>
            </Card>
            <Card title="">
                <img src={polygon3} alt="polygon image" className="pb-4"/>
                <p>A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice.</p>
            </Card>
        </div>
        <div className="text-left mt-10 pl-20">
            <h4 className="font-semibold text-2xl">Case Study</h4>
            <p>See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</p>
        </div>
        <div className="flex ml-20 mt-5">
            <button className="border bg-white px-4 py-1 rounded-full mr-2">Service Incubator Equity</button>
            <button className="border bg-white px-4 py-1 rounded-full mr-2">SEEQ Maths Equation</button>
            <button className="border bg-white px-4 py-1 rounded-full mr-2">Value of my Equity Over Time</button>
        </div>
        <p className="flex hover:text-primary mt-6 justify-center items-center"><a href="http://" className="underline font-semibold mr-2 ">Become A Service Incubator</a> <img className="pt-1" src={rightarrow} alt="right arrow" /></p>
    </div>
  )
}

export default ServiceModel

import Card from "./Card"

function Concept() {
  return (
    <div className="bg-slate-50 text-center pb-20">
        <h3 className="font-bold text-4xl pb-3">Our Concept Innovations</h3>
        <p className="w-2/4 m-auto">We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success</p>

        <div className="flex mt-10 mx-20"> 
            <Card title="Service Incubator">
                <p>A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP.</p>
            </Card>
            <Card title="Virtualting">
                <p>A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource.</p>
            </Card>
            <Card title="Diiming">
                <p>A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice.</p>
            </Card>
        </div>
    </div>
  )
}

export default Concept

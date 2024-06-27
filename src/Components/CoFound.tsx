import Card from "./Card"

function CoFound() {
  return (
    <div className="bg-slate-50 text-center pb-20">
        <h3 className="font-bold text-4xl pb-3 pt-10">Co-found With Us</h3>
        <p className="w-3/4 m-auto">We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed.</p>
      
        <div className="flex mt-10 mx-20 text-left"> 
            <Card title="">
                <p className="bg-secondary inline-block text-white px-3 py-1 rounded-full">1</p>
                <p className="font-bold py-4 text-xl">We Ideate</p>
                <p>We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.</p>
            </Card>
            <Card title="">
                <p className="bg-orange-400 inline-block text-white px-3 py-1 rounded-full">2</p>
                <p className="font-bold py-4 text-xl">You Validate</p>
                <p>You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions.</p>
            </Card>
            <Card title="">
                <p className="bg-pink-500 inline-block text-white px-3 py-1 rounded-full">3</p>
                <p className="font-bold py-4 text-xl">You Co-own</p>
                <p>After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.</p>
            </Card>
        </div>
    </div>
  )
}

export default CoFound

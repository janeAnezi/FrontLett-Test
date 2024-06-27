import vid1 from "../assets/images/vid1.jpg"
import vid2 from "../assets/images/vid2.jpg"
import fly1 from "../assets/images/fly1.jpg"
import fly2 from "../assets/images/fly2.jpg"
import fly3 from "../assets/images/fly3.png"


function Blog() {
  return (
    <div className="bg-slate-50 text-center pb-20">
        <h3 className="font-bold text-4xl pb-3 pt-10">Blogs & Resources</h3>
        <div className="flex mx-20 mt-10 py-10">
            <div className="mr-4">
                <img src={vid1} alt="video image" />
                <div className="flex mt-6">
                    <div className="text-left mr-2">
                        <p className="font-semibold my-2">Top Ten Most Powerful Startup</p>
                        <p className="text-sm">Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</p>
                    </div>
                    <img className="py-2" src={fly1} alt="ccompany logo" />
                </div>
            </div>
            <div className="mr-4">
                <img src={vid2} alt="video image" />
                <div className="flex mt-6">
                    <div className="text-left">
                        <p className="font-semibold my-2">Top Ten Most Powerful Startup</p>
                        <p className="text-sm">Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</p>
                    </div>
                    <img className="py-2" src={fly2} alt="ccompany logo" />
                </div>
            </div>
            <div className="">
                <img src={vid2} alt="video image" />
                <div className="flex mt-6">
                    <div className="text-left">
                        <p className="font-semibold my-2">Top Ten Most Powerful Startup</p>
                        <p className="text-sm">Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup</p>
                    </div>
                    <img className="py-2" src={fly3} alt="ccompany logo" />
                </div>
            </div>
        </div>

        <p className="flex hover:text-primary mt-20 justify-center items-center"><a href="http://" className="underline font-semibold mr-2 ">See More Blogs & Resources</a></p>
    </div>
  )
}

export default Blog

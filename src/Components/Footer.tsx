import FooterCard from "./FooterCard"
import footersc from "../assets/images/footersc.png"
import whatsapp from "../assets/images/whatsapp.png"
import footersc2 from "../assets/images/footersc2.png"

function Footer() {
  return (
    <div className="bg-slate-800 text-white pb-20">
        <div className="mx-20">
          <h3 className="font-bold text-4xl pb-3 pt-10">Newsletter</h3>
          <p className="text-sm ">Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>

          <div className="border inline-block rounded-full pl-2 mt-10">
            <input className="bg-transparent outline-none pl-5 pr-4 py-2 mr-10" type="email" placeholder="Enter Your Email Address"/>
            <input className="bg-white px-4 py-2 text-slate-900 rounded-full" type="button" value="subscribe" />
          </div>
          <div className="flex mt-10 py-4 border-t border-b">
            <FooterCard title="">
              <p>
                <span className="text-3xl tracking-widest border">SINC</span><span className=" block">PARTNERS</span> 
              </p>
              <p className="py-4 text-sm">SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)</p> 
            </FooterCard>
            <FooterCard title="">
              <p className="font-semibold">Platforms</p>
              <ul className="py-4 text-sm">
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
              </ul> 
            </FooterCard>
            <FooterCard title="">
              <p className="font-semibold">Platforms</p>
              <ul className="py-4 text-sm">
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
              </ul> 
            </FooterCard>
            <FooterCard title="">
              <p className="font-semibold">Platforms</p>
              <ul className="py-4 text-sm">
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
              </ul> 
            </FooterCard>
            <FooterCard title="">
              <p className="font-semibold">Platforms</p>
              <ul className="py-4 text-sm">
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
              </ul> 
            </FooterCard>
            <FooterCard title="">
              <p className="font-semibold">Platforms</p>
              <ul className="py-4 text-sm">
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
              </ul> 
            </FooterCard>
            <FooterCard title="">
              <p className="font-semibold">Platforms</p>
              <ul className="py-4 text-sm">
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
                <li>Kofoundme</li>
              </ul> 
            </FooterCard>
            <div className="border-l">
              <FooterCard title="">
                <p className="font-semibold">Platforms</p>
                <ul className="py-4 text-sm">
                  <li>Kofoundme</li>
                  <li>Kofoundme</li>
                  <li>Kofoundme</li>
                </ul> 
                <div className="flex">
                  <img src={footersc} alt="footer sticker" />
                  <p></p>
                  <img className="w-6 h-6 mt-3 ml-2" src={whatsapp} alt="whatsapp icon" />
                  <p></p>
                </div>
                
              </FooterCard>
            </div>
            
          </div>
          <div className="flex">
            <p className="text-sm">Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in early and SINC your guaranty!</p>
            <div className="flex">
              <img src={footersc2} alt="company logo" />
              <p>We are a business built on the <br /> foundation of Christian values and belief</p>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Footer

import sinclogo from '../assets/images/sinclogo_black.jpg'

function NavBar(): JSX.Element {
  return (
    <div className="bg-slate-50 flex justify-between py-3 px-28">
        <div className="flex">
            <img src={sinclogo} alt="Frontlett logo"/>
            <ul className="flex px-2 text-lg font-semibold items-center ml-2">
                <li className="cursor-pointer hover:text-primary">About</li>
                <li className="px-3 cursor-pointer hover:text-primary">SIP</li>
                <li className="cursor-pointer hover:text-primary">Studio</li>
                <li className="px-3 cursor-pointer hover:text-primary">SEEQ</li>
                <li className="cursor-pointer hover:text-primary">Platforms</li>
                <li className="px-3 cursor-pointer hover:text-primary">Initiatives</li>
                <li className="cursor-pointer hover:text-primary">More</li>
            </ul>
        </div>
        <div>
            <button className="bg-primary text-white px-3 rounded-3xl py-2 font-semibold">SINC With Us</button>
            <button className="ml-4 bg-secondary text-white px-3 rounded-3xl py-2 font-semibold">Apply to SIP 1.0</button>
        </div>
    </div>
  );
}

export default NavBar;

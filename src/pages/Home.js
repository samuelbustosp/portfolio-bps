import About from "../components/home/About";
import Navbar from "../components/Navbar";
import Person from "../components/home/Person";
import SocialMedia from "../components/home/SocialMedia";

const Home = () => {
    return ( 
        <div className="pt-4 bg-gradient-to-t from-slate-900 to-green-800 min-h-screen">
            <Navbar/>
            <Person/>
            
        </div>
     );
}
 
export default Home;
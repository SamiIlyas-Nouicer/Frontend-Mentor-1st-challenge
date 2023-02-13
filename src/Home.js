import { useState } from "react";
import { ReactComponent as Logo } from './logo.svg';
import image from './images/image.png';
import { ReactComponent as Facebook } from './facebook.svg';
import {ReactComponent as Instagram} from './instagram.svg';
import {ReactComponent as Twitter} from './twitter.svg';


const Home = () => {

    const [title, setTitle] = useState('your email Adress .....');

    return ( 

        <div className="content">

            <div className="logo">
                <Logo></Logo>
            </div>

        <div className="header"> <h1> We are Launching <span>Soon!</span> </h1>

         <h4>Subscribe and get notified</h4>
        </div>
        
            <div className="search">
                <input
                type='text'
                required
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
                > 
                </input>
                <div className="button"><a  href='/'>Notify me</a></div>

               
            </div>
            <container>
                    <img src= {image} alt='image' height={400} width={600}>

                    </img>
                </container>
                
                <div className="social">
                    <div className="facebook"><Facebook></Facebook>
                    facebbok    
                    </div>
                    <div className="instagram"><Instagram></Instagram>
                    instagram</div>
                    <div className="twitter"><Twitter></Twitter>
                    twitter</div>
                    
                </div>
                
                <footer>
                <p class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                     Coded by <a href="#">Nouicer Sami Ilyas</a>.
                     </p>
                </footer>

         </div>
     );
}
 
export default Home;
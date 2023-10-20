import './index.scss'
import stl from '../../../assets/images/saint-louis.jpeg';
import rolla from "../../../assets/images/rolla.jpeg";
import utp from "../../../assets/images/utp.jpeg";
import dallas from "../../../assets/images/dallas.jpeg";
import calw from "../../../assets/images/calw.jpeg";

export default function Slideshow() {

    return (

        <div className="slides">

            <div className="slide slide-1">
                <img src={stl} alt='stl' />
            </div>

            <div className="slide slide-2">
                <img src={rolla} alt='rolla' />
            </div>

            <div className="slide slide-3">
                <img src={utp} alt='malaysia' />
            </div>

            <div className="slide slide-4">
                <img src={dallas} alt='dallas' />
            </div>

            <div className="slide slide-5">
                <img src={calw} alt='calw' />
            </div>

        </div>
    )
}
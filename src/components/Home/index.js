import LogoTitle from '../../assets/images/logo-a.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import Slideshow from './Slideshow/index';

export default function Home() {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = 'lexander,'.split('');
    const jobArray = 'Engineer &  Web Developer.'.split('');
    
    const myFunction = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    };

    useEffect(() => {
        myFunction();
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className='text-zone' >
                    <div className='desktop-h1-title'>
                        <h1>
                            <span className={letterClass}>H</span>
                            <span className={`${letterClass} _12`}>i,</span>
                            <br />
                            <span className={`${letterClass} _13`}>I</span>
                            <span className={`${letterClass} _14`}>'m</span>
                            <img src={LogoTitle} alt='developer' />
                            <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                            <br />
                            <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={-10} />
                        </h1>
                    </div>
                    <div className='mobile-h1-title'>
                        <h1>
                            Alexander Brooks
                        </h1>
                    </div>
                    <div className='h2-container'>    
                        <h2>Engineer & Developer</h2>
                    </div>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <div className='slideshow'>
                    <Slideshow />
                </div>
            </div>
            <Loader type='ball-scale-multiple' />
        </>
    );
}
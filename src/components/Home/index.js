import LogoTitle from '../../assets/images/logo-a.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
// import Logo from './Logo/index';


export default function Home() {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = 'lexander'.split('');
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
                <div className='text-zone'>
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
                    <h2>Engineering Graduate/ Beginner Frontend Developer/ Aspiring Full Stack Developer</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                {/* <Logo /> */}
            </div>
            <Loader type='ball-scale-multiple' />
        </>
    );
}
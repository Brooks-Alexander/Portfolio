import { useEffect, useState, } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';
import { 
    faAngular, 
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact
 } from '@fortawesome/free-brands-svg-icons';

export default function About() {

    const [letterClass, setLetterClass] = useState('text-animate');

    const myFunction = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    };

    useEffect(() => {
        myFunction();
    }, [])

    return (
        <>
            <div className='container about-page'>

                <div className='text-zone'>

                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'About me'.split('')}
                            idx={15}
                        />
                    </h1>

                    <p>
                        I'm an exceptionally ambitious amateur front-end developer
                        seeking a position with a well-established IT company that 
                        offers the chance to engage with cutting-edge technologies 
                        and tackle diverse and challenging projects.
                    </p>
                    <p>
                        I'm a confident and naturally curious individual, continuously 
                        enhancing my tech skillset by tackling one problem at a time.
                    </p>
                    <p>
                        Summarizing myself in one sentence, I would describe myself as a
                        family-oriented, adventurous traveler, innovative thinker, 
                        and tech enthusiast!
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                    </div>
                </div>

            </div>
            <Loader type='ball-scale-multiple' />
        </>
    )
}
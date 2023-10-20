import LogoTitle from '../../assets/images/logo-a.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import Slideshow from './Slideshow/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faYoutube, faWordpress } from '@fortawesome/free-brands-svg-icons';

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
                <div className='text-zone'>
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
                            Hi,
                            <br />
                            I'm Alexander,
                            <br />
                            Engineer & Web Developer.
                        </h1>
                    </div>
                    <div className='h2-container'>    
                        <h2>Engineering Graduate/ Frontend Developer/ Aspiring Full Stack Developer</h2>
                    </div>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Slideshow />
            </div>
            <Loader type='ball-scale-multiple' />
            <footer className='mobile-footer'>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/alexander-brooks-number-one/'>
                        <FontAwesomeIcon className='anchor-icon' icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Brooks-Alexander'>
                    <FontAwesomeIcon className='anchor-icon' icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UC1OjfYlzSXYI1ifRA91q7jg'>
                    <FontAwesomeIcon className='anchor-icon' icon={faYoutube} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://knowwhereusa.blog/'>
                    <FontAwesomeIcon className='anchor-icon' icon={faWordpress} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
            </footer>
        </>
    );
}
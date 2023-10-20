import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoA from '../../assets/images/logo-a.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faYoutube, faWordpress } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar () {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoA} alt='logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='alex' />
            </Link>
            <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' 
            to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='portfolio-link'
            to='/portfolio'>
                <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link'
            to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
            </nav>
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
        </div>
    )
}

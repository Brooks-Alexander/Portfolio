import './index.scss';
import LogoA from '../../../assets/images/logo-a.png';
import MySVG from '../../../assets/images/logo-a-lines.svg';
import { useRef } from 'react';

export default function Logo () {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoA} alt='A' />
            <svg
                width='100%'
                height='100%'
                version='1.0'
                viewBox='0 0 559 897'
                xmlns='http://www.w3.org/2000/svg'
            >
                <g
                    className='svg-container'
                    //transform='translate(0 457) scale(.1 -.1)'
                    fill='none'
    >
                    <image 
                        xlinkHref={MySVG}
                        width='100%'
                        height='100%' />
                </g>
            </svg> 
        </div>
    )
}
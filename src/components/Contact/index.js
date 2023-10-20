import { useState, useEffect, useRef } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet';
import AnimatedLetters from '../AnimatedLetters/index';
import emailjs from '@emailjs/browser';
import "leaflet/dist/leaflet.css";
import './index.scss';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


export default function Contact() {

    const [letterClass, setLetterClass] = useState('text-animate');
    
    const myFunction = async () => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    };

    useEffect(() => {
        myFunction();
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_agcg4kh',
                'template_rkn1r7o',
                form.current,
                '8_wUeoAzf7XPYoASP'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message. Please try again.')
                }
            );

    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={'Contact me'.split('')} 
                            idx={15}
                        />
                    </h1>
                    <p>I am interested in internship and junior opportunities. However, if you have other
                        requests or questions, don't hesitate to contact me using the below form.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Alexander Brooks,
                    <br />
                    Calw, Germany
                    <br />
                    <span>Brooks.Alexander.R@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[48.716667, 8.733333]} zoom={15}>
                        <TileLayer 
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                        />
                        <Marker position={[48.716667, 8.733333]}>
                            <Popup className='popup'>
                                I live in the area. 
                                <br />
                                Let's get coffee!
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='ball-scale-multiple' />
        </>
    )
}
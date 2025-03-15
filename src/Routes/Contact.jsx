import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { handleRouteClick, turnScreenOn } from '../utils/screenTransitions';
import '../CSS/Contact.css';
import '../CSS/ScreenEffects.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../components/Reducer';

export default function Contact() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { formData } = useSelector(state => state.shop);
    
    useEffect(() => {
        // Petit délai pour s'assurer que le DOM est prêt
        const timeout = setTimeout(() => turnScreenOn(false), 2);
        return () => clearTimeout(timeout);
    }, []);

    const handleSubmit = () => {
        if (!formData.email || !formData.subject || !formData.message) {
            alert('Veuillez remplir tous les champs');
            return;
        }
        alert('Message envoyé');
        dispatch(setFormData({
            email: '',
            subject: '',
            message: '',
            sendTo: ''
        }));
    };

    return (
        <div className='contact-bg'>
            <div className='awge-stars'></div>
            <img 
                src="/buttons/return-button.gif" 
                alt="return" 
                className='return-button-contact' 
                onClick={() => handleRouteClick(navigate, '/home')}
            />
        <div className='contact-container'>
                <div className='contact-navbar'>
                    CONTACT
                </div>
                <div className='contact-content'>
                    <div className='email-container'>
                        <div className='label'>EMAIL</div>
                        <textarea name="email" className='email' value={formData.email} onChange={(e) => dispatch(setFormData({ ...formData, email: e.target.value }))}></textarea>
                    </div>
                    <div className='subject-container'>
                        <div className='label'>SUBJECT</div>
                        <textarea name="subject" className='subject' value={formData.subject} onChange={(e) => dispatch(setFormData({ ...formData, subject: e.target.value }))}></textarea>
                    </div>
                    <div className='message-container'>
                        <div className='message-label'>MESSAGE</div>
                        <textarea name="message" className='message' value={formData.message} onChange={(e) => dispatch(setFormData({ ...formData, message: e.target.value }))}></textarea>
                    </div>
                </div>
                <div className='contact-footer'>
                        <button type="submit" className="submit-button" onClick={() => { dispatch(setFormData({ ...formData, sendTo: 'awge' })); handleSubmit() }}>SEND TO <br />AWGE</button>
                        <button type="reset" className="submit-button" onClick={() => { dispatch(setFormData({ ...formData, sendTo: 'customer-support' })); handleSubmit() }}>SEND TO ORDER <br /> SUPPORT</button>
                </div>
            </div>
        </div>
    );
}
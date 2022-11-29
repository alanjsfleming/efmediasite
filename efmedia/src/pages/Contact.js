import { SocialIcon } from 'react-social-icons'
import EnquiryForm from './components/EnquiryForm'

const Contact = () => {
    return (
        <>
        <div class="fadeInAnimation">
            <div class="empty-space"></div>
                <div class="contact-panel row">
                    <div class="contact-list col">
                    <h5>Contact</h5>
                        <ul class="contact-list--list">
                            <li><SocialIcon className="social-icon" url="mailto:info@efmedia.co" /> info@efmedia.co</li>
                            <li><SocialIcon className="social-icon" url="https://www.instagram.com/efmedia.co/" /> @efmedia.co</li>
                            <li><SocialIcon className="social-icon" url="https://twitter.com/EFMediaco"/> @EFMediaco</li>
                            <li><SocialIcon className="social-icon" url="https://linkedin.com/in/ef-mediaco-a54b73257/" /> EF Mediaco</li>
                            <li><SocialIcon className="social-icon" url=""/> Facebook</li>
                        </ul>
                    </div>
                    <div class="contact-list col">
                        <h5>Let us know how we can help</h5>
                        <EnquiryForm/>
                    </div> 
                
            </div>
        </div>
        </>


    )
  };
  
  export default Contact;
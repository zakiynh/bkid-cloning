import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-block">
      <div className="footer-content">
        <div className="information">
          <div className="title">BURGER KING® DELIVERY</div>
          <div >
            <FaPhoneAlt size={15} className="me-1"/> 
            <span style={{marginRight: '35px'}} className="title-footer">15000 25</span> 
            <FaEnvelope size={15} className="me-1" />
            <span style={{marginRight: '35px'}}>guestservice@burgerking.co.id</span>
            <Link to={`https://www.facebook.com/burgerkingindonesia/`} className="text-decoration-none" style={{ color: 'inherit' }}> <FaFacebookF size={15} className="me-1" /> </Link>
            <Link to={`https://www.instagram.com/burgerking.id/`} className="text-decoration-none" style={{ color: 'inherit' }}> <FaInstagram size={15} className="me-1" /> </Link>
            <Link to={`https://twitter.com/burgerking_id`} className="text-decoration-none" style={{ color: 'inherit' }}> <FaTwitter size={15} className="me-1" /> </Link>
            <Link to={`https://www.youtube.com/channel/UC-F_fh9CRDwhJrY_ibHae-g`} className="text-decoration-none" style={{ color: 'inherit' }}> <FaYoutube size={15} className="me-1" /> </Link>
          </div>
          <div className="title-footer-end">
            <span>About Us | </span> 
            <span>Kebijakan Privasi | </span> 
            <span>Syarat dan Ketentuan | </span> 
            <span>TM & 2024 Burger King Corporation. Used Under License. All rights reserved</span> 
          </div>
        </div>
      </div>
    </div>
  );
}

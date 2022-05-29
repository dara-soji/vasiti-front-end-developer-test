import React from 'react'
import './Footer.scss'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="footer app__flex" >
        <div className="footer__top ">
            <div className="footer__top-image"></div>
            <div className="footer__top-content">
                <h3>Be a  member<br />of our community 🎉</h3>

                <p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>

                <div className="footer__top-subscribe app__flex">
                    <input type="email" placeholder="enter your email address"/>
                    <button>subscribe</button>
                </div>
            </div>
        </div>
        <div className="footer__bottom app__flex">
            <div className="footer__bottom-company">
                <h3>Company</h3>
                <ul className="footer__bottom-company-list app__flex">
            {['about us', 'Term of Use', 'Privacy Policy', 'Press & Media'].map((item) =>(
                <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#`}>{item}</a>
                </li>
            ))}
          </ul>
            </div>
            <div className="footer__bottom-product">
            <h3>Products</h3>
                <ul className="footer__bottom-company-list app__flex">
            {['Marketplace', 'Magazine', 'Seller', 'Wholesale', 'services'].map((item) =>(
                <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#`}>{item}</a>
                </li>
            ))}
          </ul>
            </div>
            <div className="footer__bottom-career">
            <h3>Careers</h3>
                <ul className="footer__bottom-company-list app__flex">
            {['Become a Campus Rep', 'Become a Vasiti Influencer', 'Become a Campus writer', 'Become an Affiliate'].map((item) =>(
                <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#`}>{item}</a>
                </li>
            ))}
          </ul>
            </div>
            <div className="footer__bottom-touch">
            <h3>Get In Touch</h3>
                <ul className="footer__bottom-company-list app__flex">
            {['Contact us', 'Partner with us', 'Advertise with us', 'Help/FAQs'].map((item) =>(
                <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#`}>{item}</a>
                </li>
            ))}
          </ul>
            </div>
            <div className="footer__bottom-community">
            <h3>Join Our Community</h3>
                <ul className="footer__bottom-community-list app__flex">
            {[<FacebookOutlinedIcon/>, <TwitterIcon />, <InstagramIcon />, <LinkedInIcon/>].map((item) =>(
                <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                {item}
                </li>
            ))}
          </ul>

          <p>Email Newsletter</p>
            </div>

        </div>
      
    </div>
  )
}

export default Footer

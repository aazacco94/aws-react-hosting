import React from 'react';
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              AZ Technology
            </SocialLogo>
            <WebsiteRights>Alex Arthur Zacco © 2022 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink 
                href='//www.facebook.com/alex.zacco.7' 
                target='_blank' 
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              {/* <SocialIconLink 
                href='/' 
                target='_blank' 
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink> */}
              <SocialIconLink
                href='//www.youtube.com/channel/UCo_-5H-1CV07KYpecxK_y3w'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='//www.twitter.com/ZaccoA94'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink 
                href='//www.linkedin.com/in/alex-zacco-779036203/' 
                target='_blank' 
                aria-label='Linkedin'
                >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { Button } from '../Shared/ButtonElements';

import {
  BannerContainer,
  BannerBg,
  VideoBg,
  BannerContent,
  BannerH1,
  BannerP,
  BannerBtnWrapper,
  ArrowForward,
  ArrowRight
} from './BannerElements';

const BannerSection = props => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <BannerContainer id={props.id}>
        <BannerBg>
          <VideoBg playsInline autoPlay loop muted src={props.videolink} type='video/mp4' />
        </BannerBg>
        <BannerContent>
            <BannerH1>{props.header}</BannerH1>
          <BannerP>
            {props.desc1}
          </BannerP>
          <BannerP>
            {props.desc2}
          </BannerP>
          <BannerBtnWrapper>
            <Button
              to={props.buttonLink}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              primary='true'
              dark='true'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              {props.buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </BannerBtnWrapper>
        </BannerContent>
      </BannerContainer>
    </>
  );
};

export default BannerSection;

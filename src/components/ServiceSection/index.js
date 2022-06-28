import React from 'react';
import { ButtonLink } from '../Shared/ButtonElements';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  BtnWrap
} from './ServicesElements';
import ServiceElement from './ServiceElement';

const Services = props => {

  return (
    <ServicesContainer lightBg={props.lightBg} id={props.id}>
      <ServicesH1 lightText={props.lightText}>{props.topLine}</ServicesH1>
      <ServicesWrapper>
        {props.services.map(service => {
          return ServiceElement(service, props.lightBg, props.lightText);
        })}
      </ServicesWrapper>
      <br></br>
      <BtnWrap>
        <ButtonLink
          href={props.buttonLink}
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}
          primary={props.primary ? 1 : 0}
          dark={props.dark ? 1 : 0}
          dark2={props.dark2 ? 1 : 0}
        >
          {props.buttonLabel}
        </ButtonLink>
      </BtnWrap>
    </ServicesContainer>
  );
};

export default Services;

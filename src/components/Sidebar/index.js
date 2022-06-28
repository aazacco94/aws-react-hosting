import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink
} from './SidebarElements';

const Sidebar = props => {
  return (
    <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink
              to='about'
              onClick={props.toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              About
            </SidebarLink>
            <SidebarLink
              to='projects'
              onClick={props.toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Projects
            </SidebarLink>
            <SidebarLink
              to='certifications'
              onClick={props.toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Certifications
            </SidebarLink>
            <SidebarLink
              to='gameplay'
              onClick={props.toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Gameplay
            </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

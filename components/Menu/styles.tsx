import styled, { css } from 'styled-components';
import { font__menuLink, font__menuLink_tabletUp } from '../../styles/styleguide/typography';
import media from '../../styles/media';

interface MenuNavProps {
  visible: boolean
}
export const MenuNav = styled.nav<MenuNavProps>`
  background-color: black;
  overflow: hidden;
  height: 100%;
  max-height: 100vh;
  width: ${(props: any) => props.visible ? '100%' : '0'};

  position: fixed;
  top: 0;
  right: 0;
  // transition: all 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  p {
    color: white;
    text-align: right;
    padding: 1rem 2.5rem;
    font-size: 0.7rem;
  }

  ${media.tablet`
    background: none;
    display: block;
    position: relative;

    width: auto
    height: auto;
    max-height: 100%;

    margin-top: 1.5rem;
    padding-left: 1rem;
  `};
`;

export const MenuNav__List = styled.ul`
  padding: 0 1rem;
  margin: 0 auto;

  li {
    list-style: none;
    text-align: right;
    position: relative;
  }

  a {
    ${font__menuLink};
    color: currentColor;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ${media.tablet`
    padding: 0;

    li {
      text-align: left;
    }
    a {
      ${font__menuLink_tabletUp};
    }
  `};
`;

export const Button = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  background: none;
  &:hover {
    cursor: pointer;
  }
  z-index: 101;

  ${media.tablet`
    display: none;
  `};
`;

type IconProps = { active: boolean; };
export const Icon = styled.div<IconProps>`
  width: 35px;
  height: 35px;
  position: relative;

  span {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 0;
    height: 3px;
    position: absolute;
    right: 0;
    transition: all .3s cubic-bezier(.58,.3,.005,1);
    width: 100%;

    &:first-child {
      top: 25%;
      width: 30px;

      ${props => props.active && css`
        top: 50%;
        transform: rotate(-45deg);
        background-color: ${props => props.theme.colors.white};
      `};
    }
    
    &:nth-child(2) {
      top: 50%;
      opacity: 1;

      ${props => props.active && css`
        opacity: 0;
      `};
    }
    
    &:last-child {
      top: 75%;
      width: 30px;
      
      ${props => props.active && css`
        top: 50%;
        transform: rotate(45deg);
        background-color: ${props => props.theme.colors.white};
      `};
    }
  }
`;
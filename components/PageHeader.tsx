import styled from 'styled-components';

export default styled.header`
  background-color: ${props => props.theme.colors.menubar};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  padding: 0 2.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  z-index: 100;
`;

// <Header>
//   <JumpToMainLink href="#main-content" id="skip-to-main-content">Jump to main content</JumpToMainLink>
//   <img src="/static/images/logo_transparency.png" />
//   <HamburgerButton />
//   <Menu />
// </Header>
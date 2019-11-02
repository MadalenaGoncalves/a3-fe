import styled from 'styled-components';

export default styled.footer`
  padding: 2.5rem ${props => props.theme.spacing.pageLayoutMargin};
  background-color: ${props => props.theme.colors.footerBg};
  margin-top: 2.5rem;
`;
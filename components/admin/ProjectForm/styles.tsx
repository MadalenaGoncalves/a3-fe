import styled from 'styled-components';

export const TabContent = styled.div`
  padding: 1rem 1.5rem;
  position: relative;
`;

export const TabContentFlex = styled(TabContent)`
  flex: 1 0 auto;
  display: flex;

  form {
    flex: 1;
  }
  form > div {
    margin-bottom: 2rem;
    display: flex;
  }
`;

export const LightP = styled.p`
  // color: ${props => props.theme.colors.lightgray};
  color: rgba(0, 0, 0, 0.54);
`;
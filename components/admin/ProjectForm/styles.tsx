import styled from 'styled-components';

export const TabContent = styled.div`
  padding-top: ${props => props.theme.spacing._16};
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
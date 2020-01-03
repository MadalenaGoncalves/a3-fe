import styled from 'styled-components';

export const MainContentWrapper = styled.div`
  flex: 1 0 auto;
  display: flex;
  padding: 2rem 1.5rem;
`;

export const FormSection = styled.div`
  flex: 1;

  form > div {
    margin-bottom: 2rem;
    display: flex;
  }
  
  .MuiFormControl-root {
    margin-right: 1rem;
  }
`;

export const AvatarSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

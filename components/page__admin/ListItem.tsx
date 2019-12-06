import styled from 'styled-components';

export default styled.li`
  padding: 15px 1.5rem; // 1.5rem = padding add contact button
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  
  display: flex;
  
  div:last-child {
    margin-left: auto;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;
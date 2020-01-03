import styled from 'styled-components';

export const List = styled.ul`
  flex: 1 1 auto;
`;

export const ListItem = styled.li`
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

export const Thumbnail = styled.img`
  display: inline-block;
  width: 50px;
  height: auto;
  margin-right: 1.5rem;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  a {
    padding: 0 1.5rem;
    display: inline-block;
    &:last-child {
      padding-right: 0;
    }
  }
`;
export const SmallIcon = styled.img`
  width: auto;
  height: 25px;
`;


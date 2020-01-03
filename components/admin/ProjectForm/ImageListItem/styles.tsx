import styled from 'styled-components';

export const ListItem = styled.li`
  margin: 0 -1.5rem;
  // background: rgba(0,0,0,.04);
  border-bottom: 1px solid rgba(0,0,0,0.1);
  &:last-child {
    border-bottom: none;
  }

  display: flex;
  flex-flow: row no-wrap;
  align-items: flex-start;
  justify-Wrapper: flex-start;
`;

export const ItemToolbar = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

export const Content = styled.div`
  display: flex;
  // border-left: 1px solid rgba(0,0,0,0.1);
  padding: 1rem;

  > * {
    margin-right: 1rem;
  }
`;

export const Img = styled.img`
  width: 250px;
  height: auto;
`;
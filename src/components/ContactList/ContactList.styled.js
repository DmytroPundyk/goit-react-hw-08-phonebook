import styled from 'styled-components';

export const List = styled.ol`
  border: 2px solid #000;
  border-radius: 8px;
  padding: 20px 20px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 7px;
  padding-left: 10px;
`;
export const DeleteButton = styled.button`
  border: 1px solid #000;
  background-color: #cd5c5c;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
`;
export const Total = styled.h2`
  text-align: center;
  border: 1px solid #000;
  background-color: greenyellow;
  border-radius: 5px;
`;

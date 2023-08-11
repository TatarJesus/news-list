import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
`;

const Manager = styled.div`
  width: 100%;
  height: 50px;
`;

const ButtonUpdateData = styled.button`
  width: 120px;
  height: 30px;
  background-color: #747bff;
  border: none;
  border-radius: 5px;
`;

const List = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 20px;
`;
export { Container, Manager, ButtonUpdateData, List };

import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Replie = styled.div<{ $level: number }>`
  margin: 10px 0px 10px ${(props) => props.$level * 35 + "px"};
  width: 700px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: #313131;
`;

const AllReplies = styled.span`
  transition: 0.3s;
  color: #0f00df;
  &&:hover {
    transition: 0.3s;
    cursor: pointer;
    color: #493fdb;
  }
`;

export { Container, Replie, AllReplies };

import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
`;

const TitleNews = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0px;
`;

const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

const ButtonUpdateComments = styled.button`
  width: 120px;
  height: 30px;
  background-color: #747bff;
  border: none;
  border-radius: 5px;
`;

const Comments = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export { Container, TitleNews, OtherInfo, ButtonUpdateComments, Comments };

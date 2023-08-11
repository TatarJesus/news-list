import { styled } from "styled-components";

const Container = styled.div`
  width: 440px;
  height: 150px;
  display: flex;
  border-radius: 10px;
  margin: 5px 0px;
  background-color: #575757;
  &&:hover {
    background-color: #1e319c;
    cursor: pointer;
  }
`;

const IndexNews = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: #000000;
    font-weight: 900;
    border-bottom: 2px solid #fff;
  }
`;

const InfoNews = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
`;

const TitleNews = styled.div`
  width: 260px;
  padding: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const OtherInfo = styled.div`
  width: 140px;
  padding-right: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 12px;
  span {
    color: #0f0f0f;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
`;

const TitleOtherInfo = styled.span`
  font-weight: 600;
  white-space: pre;
`;

export {
  Container,
  IndexNews,
  InfoNews,
  TitleNews,
  OtherInfo,
  InfoWrapper,
  TitleOtherInfo,
};

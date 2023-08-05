import { Link } from "react-router-dom";
import format from "date-fns/format";
import { OptionsMapElemNews } from "../interface/interface";

import {
  Container,
  IndexNews,
  InfoNews,
  TitleNews,
  OtherInfo,
  InfoWrapper,
  TitleOtherInfo,
} from "../styles/components/ElemListNews";

export const ElemListNews = (props: OptionsMapElemNews) => {
  const dateNews = format(new Date(props.time * 1000), "dd.MM.yy HH:mm");

  return (
    <Link style={{ textDecoration: "none" }} to={`/news/${props.id}`}>
      <Container>
        <IndexNews>
          <span>{props.index + 1}</span>
        </IndexNews>
        <InfoNews>
          <TitleNews>{props.title}</TitleNews>
          <OtherInfo>
            <InfoWrapper>
              <TitleOtherInfo>Points: </TitleOtherInfo>
              <span>{props.points}</span>
            </InfoWrapper>
            <InfoWrapper>
              <TitleOtherInfo>Date: </TitleOtherInfo>
              <span>{dateNews}</span>
            </InfoWrapper>
            <InfoWrapper>
              <TitleOtherInfo>Author: </TitleOtherInfo>
              <span style={{ wordBreak: "break-all" }}>{props.user}</span>
            </InfoWrapper>
          </OtherInfo>
        </InfoNews>
      </Container>
    </Link>
  );
};

import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { RootState } from "../stores/store";
import { setDefault, updateNews } from "../stores/CurrentNews";
import { Comment } from "../components/Comment";
import { format } from "date-fns";
import { BackToNews } from "../assets/IconsSVG";
import { Loader } from "../components/Loader";
import { OptionsElemComment } from "../interface/interface";
import {
  Container,
  TitleNews,
  OtherInfo,
  ButtonUpdateComments,
  Comments,
} from "../styles/stylePages/News";

export const News = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const currentNews = useSelector((state: RootState) => state.currentNews.data);

  const dateNews = format(new Date(currentNews.time * 1000), "dd.MM.yy HH:mm");

  const getComments = async () => {
    await axios
      .get(`https://api.hnpwa.com/v0/item/${params.id}.json`)
      .then(({ data }) => {
        data !== null && dispatch(updateNews(data));
      });
  };

  useEffect(() => {
    getComments();
    const timer = setInterval(() => {
      getComments();
    }, 60000);
    return () => {
      clearInterval(timer);
      dispatch(setDefault());
    };
  }, []);

  return currentNews.id === -1 ? (
    <Container>
      <Link to="/">
        <BackToNews />
      </Link>
      <TitleNews>
        <h1>The news is not relevant or there is no such news</h1>
      </TitleNews>
    </Container>
  ) : currentNews.id !== -1 ? (
    <Container>
      <Link to="/">
        <BackToNews />
      </Link>
      <TitleNews>
        <h1>{currentNews.title}</h1>
      </TitleNews>
      <OtherInfo>
        <span>
          Link to news: <a href={currentNews.url}>{currentNews.url}</a>
        </span>
        <span>Author: {currentNews.user}</span>
        <span>Date publish: {dateNews}</span>
        <span>Comments: {currentNews.comments_count}</span>
      </OtherInfo>
      <ButtonUpdateComments onClick={getComments}>
        Update comments
      </ButtonUpdateComments>
      <Comments>
        {currentNews.comments.map((comment: OptionsElemComment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            level={comment.level}
            user={comment.user}
            content={comment.content}
            comments_count={comment.comments_count}
            comments={comment.comments}
          />
        ))}
      </Comments>
    </Container>
  ) : (
    <Loader />
  );
};

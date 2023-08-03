import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import axios from "axios";

import { RootState } from "../stores/store";
import { setDefault, updateNews } from "../stores/CurrentNews";
import { Comment } from "../components/Comment";
import { format } from "date-fns";
import { BackToNews } from "../assets/IconsSVG";
import { Loader } from "../components/Loader";

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

const Comments = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

interface OptionsElemComment {
  comments_count: number;
  content: string;
  id: number;
  level: number;
  time?: number;
  time_ago?: string;
  type?: string;
  url?: string;
  user: string;
  comments: OptionsElemComment[];
}

export const News = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const dataNews = useSelector((state: RootState) => state.dataNews.data);
  const currentNews = useSelector((state: RootState) => state.currentNews.data);

  const getComments = async () => {
    await axios
      .get(`https://api.hnpwa.com/v0/item/${params.id}.json`)
      .then((response) => {
        dispatch(updateNews(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getComments();
    return () => {
      dispatch(setDefault());
    };
  }, []);

  return dataNews.length === 0 ? (
    <Container>
      <Link to="/">
        <BackToNews />
      </Link>
      <TitleNews>
        <h1>The news is not relevant or there is no such news</h1>
      </TitleNews>
    </Container>
  ) : currentNews.id !== 0 ? (
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
        <span>
          Date publish:{" "}
          {format(new Date(currentNews.time * 1000), "dd.MM.yy HH:mm")}
        </span>
        <span>Comments: {currentNews.comments_count}</span>
      </OtherInfo>
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

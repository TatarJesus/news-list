import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";

import { RootState } from "../stores/store";
import { addDataNews, delDataNews } from "../stores/DataNews";
import { ElemListNews } from "../components/ElemListNews";
import { Loader } from "../components/Loader";

interface OptionsElemNews {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

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

export const ListNews = () => {
  const dispatch = useDispatch();
  const dataNews = useSelector((state: RootState) => state.dataNews.data);

  const query = async () => {
    let listNews: OptionsElemNews[] = [];
    for (let i = 1; i < 5; i++) {
      const queryNews = await axios.post(
        `https://api.hnpwa.com/v0/news/${i}.json`
      );
      listNews = listNews.concat(
        i !== 4 ? queryNews.data : queryNews.data.slice(0, 10)
      );
    }
    const sorted = listNews.sort((x: OptionsElemNews, y: OptionsElemNews) =>
      x.time * 1000 < y.time * 1000 ? 1 : -1
    );
    dispatch(addDataNews(sorted));
  };

  const getNewNews = () => {
    dispatch(delDataNews());
    query();
  };

  useEffect(() => {
    getNewNews();
    const timer = setInterval(() => {
      getNewNews();
    }, 60000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <Manager>
        <ButtonUpdateData onClick={getNewNews}>Update news</ButtonUpdateData>
      </Manager>
      <List>
        {dataNews.length === 100 ? (
          dataNews.map((news: OptionsElemNews, index) => (
            <ElemListNews
              key={news.id}
              index={index}
              id={news.id}
              title={news.title}
              time={news.time}
              user={news.user}
              time_ago={news.time_ago}
              comments_count={news.comments_count}
              points={news.points}
              type={news.type}
            />
          ))
        ) : (
          <Loader />
        )}
      </List>
    </Container>
  );
};

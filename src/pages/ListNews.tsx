import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../stores/store";
import { addDataNews, delDataNews } from "../stores/DataNews";
import { ElemListNews } from "../components/ElemListNews";
import { Loader } from "../components/Loader";
import { OptionsElemNews } from "../interface/interface";
import {
  Container,
  Manager,
  ButtonUpdateData,
  List,
} from "../styles/stylePages/ListNews";

export const ListNews = () => {
  const dispatch = useDispatch();
  const dataNews = useSelector((state: RootState) => state.dataNews.data);

  const query = async () => {
    const listNews: OptionsElemNews[] = [];
    for (let i = 1; i < 5; i++) {
      const queryNews = await axios.get(
        `https://api.hnpwa.com/v0/newest/${i}.json`
      );
      i !== 4
        ? listNews.push(...queryNews.data)
        : listNews.push(...queryNews.data.slice(0, 10));
    }
    const sorted = listNews.sort((x, y) =>
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
              points={news.points}
            />
          ))
        ) : (
          <Loader />
        )}
      </List>
    </Container>
  );
};

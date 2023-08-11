import axios from "axios";
import { useEffect, useState } from "react";
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
import { baseUrl } from "../consts";

export const ListNews = () => {
  const dispatch = useDispatch();
  const dataNews = useSelector((state: RootState) => state.dataNews.data);
  const [errorQuery, setErrorQuery] = useState("");

  const getNewNews = () => {
    dispatch(delDataNews());
    [0, 0, 0, 0].map(async (_, i) => {
      await axios
        .get(`${baseUrl}newest/${i + 1}.json`)
        .then(({ data }) => {
          if (typeof data === "string") {
            setErrorQuery(data);
          } else {
            i !== 3
              ? dispatch(addDataNews(data))
              : dispatch(addDataNews(data.slice(0, 10)));
          }
        })
        .catch(({ error }) => {
          setErrorQuery(error);
        });
    });
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
        {dataNews.length === 100 &&
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
          ))}
        {errorQuery !== "" && <span>{errorQuery}</span>}
        {dataNews.length === 0 && errorQuery === "" && <Loader />}
      </List>
    </Container>
  );
};

import { routes } from "./ConstRoutes";
import { ListNews, News } from "../pages";

export const publicRoutes = [
  {
    path: routes.LIST_NEWS_ROUTE,
    element: ListNews,
    name: "List News",
  },
  {
    path: routes.NEWS_ROUTE,
    element: News,
    name: "News",
  },
];

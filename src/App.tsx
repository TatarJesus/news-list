import { Header } from "./components/Header";
import { AppRouter } from "./routes/AppRoutes";
import { Container } from "./styles/App";

export const App = () => {
  return (
    <Container>
      <Header />
      <AppRouter />
    </Container>
  );
};

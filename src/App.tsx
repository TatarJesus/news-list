import { styled } from "styled-components";
import { Header } from "./components/Header";
import { AppRouter } from "./routes/AppRoutes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  return (
    <Container>
      <Header />
      <AppRouter />
    </Container>
  );
};

import { styled } from "styled-components";

const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  padding: 5px 20px;
  display: flex;
  align-items: center;
`;

const Heading = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Heading>Hacker News</Heading>
    </StyledHeader>
  );
};

import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Button from "./ui/Button";

export default function App() {
  const H1 = styled.h1`
    font-size: 30px;
    font-weight: 600;
  `;

  const Input = styled.input`
    border: 1px solid var(--color-grey-300);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
    padding: 0.8rem 1.2rem;
    box-shadow: var(--shadow-sm);
  `;

  const StyledApp = styled.div`
    background-color: orangered;
    padding: 20px;
  `;

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button>My Button</Button>
        <Button>My Button</Button>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

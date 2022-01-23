import { ThemeProvider } from "styled-components";
import { Container, theme } from "./components/styles/Global.styled";
import Header from "./components/Header";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <Header />
    <Container>
      <h1>Hello World</h1>
    </Container>
    </>

    </ThemeProvider>
  );
}

export default App;

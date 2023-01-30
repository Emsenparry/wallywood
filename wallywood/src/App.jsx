import { ContainerStyle }from "./components/styled/Container.style";
import Header from "./components/partials/Header";
import AppRouter from "./components/app/approuter/AppRouter";

const App = () => {
  return (
    <ContainerStyle maxwidth="1024">
        <Header />
        <AppRouter />
    </ContainerStyle>
      
  );
}

export default App;

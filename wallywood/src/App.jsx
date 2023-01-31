import { ContainerStyle }from "./components/styled/Container.style";
import Header from "./components/partials/Header";
import AppRouter from "./components/app/approuter/AppRouter";
import Footer from "./components/partials/Footer";

const App = () => {
  return (
    <ContainerStyle maxwidth="1024">
        <Header />
        <AppRouter />
        <Footer />
    </ContainerStyle>
      
  );
}

export default App;

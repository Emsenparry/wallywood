import { ContainerStyle } from "./components/styled/Container.style";
import Header from "./components/partials/Header";
import AppRouter from "./components/app/approuter/AppRouter";
import Footer from "./components/partials/Footer";
import Posters from "./Pages/Posters/Posters";

const App = () => {
  return (
    <ContainerStyle maxwidth="1024">
        <Header />
        <Posters />
        <AppRouter />
        
        <Footer />
    </ContainerStyle>
      
  );
}

export default App;

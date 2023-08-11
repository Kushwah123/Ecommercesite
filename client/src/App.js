import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NotFound } from './Components/default';
import Header from './Components/Header/Header';
import DetailView from './Components/ItemDetails/DetailView';
import TemplateProvider from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import Cart from './Components/Cart/Cart';
import { Box } from '@material-ui/core'

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
        
          <Header />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route exact path= '/' element={<Home/>} />
              <Route exact path= '/cart' element={<Cart/>} />
              {/* <Route exact path= '/product/:id' element={Product} /> */}
              <Route exact path= '/product/:id' element={<DetailView/>} />
              <Route element={NotFound} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;

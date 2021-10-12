import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


import './App.css';

import Home from "./components/static/pages/Home";
import Error404 from "./components/static/errors/Error404";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
//import BoardList from "./components/trello/boardList";
import NpContainer from "./components/novaposhta/npContainer";
//import Auth from "./components/auth/Auth";



function App() {
  return (
      <Router>
          <Header />
         {/* <Auth></Auth>*/}
          <main>
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route exact path="/trello">
                     {/* <BoardList />*/}
                  </Route>
                  <Route path="/np">
                      <NpContainer />
                  </Route>
                  <Route path="*">
                      <Error404 />
                  </Route>
              </Switch>
          </main>
        <Footer />
      </Router>

  );
}

export default App;

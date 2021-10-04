import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import NovaPoshta from "./componets/NovaPoshta";
import Home from "./componets/static/pages/Home";
import Error404 from "./componets/static/errors/Error404";
import Header from "./componets/layout/header";
import Footer from "./componets/layout/footer";

function App() {
    return (
        <Router>
            <Header/>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/np">
                        <NovaPoshta/>
                    </Route>
                    <Route path="*">
                        <Error404/>
                    </Route>
                </Switch>
            </main>
            <Footer>

            </Footer>
        </Router>
    );
}

export default App;

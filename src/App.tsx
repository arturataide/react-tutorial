import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Characters from './Views/Characters';

const App: React.FC = (): React.ReactElement => {
    return (
        <div>
            <Router>
                <Header/>
                <div className="p-3">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/characters">
                            <Characters/>
                        </Route>

                        <Route path="/about">
                            <About/>
                        </Route>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;

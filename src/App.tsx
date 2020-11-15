import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Characters from './Views/Characters';
import Character from './Views/Character';

const App: React.FC = (): React.ReactElement => {
    return (
        <div className="relative pb-10 min-h-screen">
            <Router>
                <Header/>
                <div className="p-3">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/characters" component={Characters}/>
                        <Route exact path="/characters/:id" component={Character}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;

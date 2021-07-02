import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'
import Navbar from './components/Navbar/Navbar'
import { Home, Drinks, Contact, Events } from './components/index'

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Drinks" exact component={Drinks} />
          <Route path="/Events" exact component={Events} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </Router>

    </>
  );
}

export default App;

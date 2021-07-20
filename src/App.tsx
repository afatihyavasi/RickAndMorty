import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterInfo from './components/CharacterInfo';

const App = (): JSX.Element => {
   return (
      <Router>
         <Switch>
            <Route exact path='/' component={CharacterList} />
            <Route path='/character/:id' component={CharacterInfo} />
         </Switch>
      </Router>
   );
};

export default App;

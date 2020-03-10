
import React from 'react';
import Splash from './components/Splash';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path ='/' component={Splash}/>
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;

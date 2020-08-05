import React from 'react';
import { Switch, Route } from "react-router-dom";
import Employee from './employee';


class Content extends React.Component {
  
    render() { 
        return ( 
            <div>
                <Switch>
                <Route path="/employee" component={Employee}></Route>

                </Switch>
            </div>
         );
    }
}
 
export default Content;
import React from "react";
import { Switch, Route} from "react-router-dom";

import GraphqlClient from "./components/graphqlClient";
import GraphQlClientMutation from "./components/graphqlClientMutation";


const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={GraphqlClient} />
            <Route exact path="/mutation" component={GraphQlClientMutation} />
          
        </Switch>
    </div>    
) 

export default Routes;
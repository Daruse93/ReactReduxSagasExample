import React from 'react';

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import PostList from "../../pages/PostList";
import UserList from "../../pages/UserList";

const App = () => (
    <div className="App">
        <HashRouter>
            <Switch>
                <Route exact path="/" component={PostList}/>
                <Route exact path="/users" component={UserList}/>
            </Switch>
        </HashRouter>
    </div>
);

export default App;

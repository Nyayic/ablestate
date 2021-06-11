import React from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import 
const CustomRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
            </Switch>
            
        </Router>
    )
}



export default CustomRouter

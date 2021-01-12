import React,{Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Magazines from './MagazinesComponent';
import Videos from './VideosComponent';
import Subscriptions from './SubscriptionsComponent';
import {Switch, Route , Redirect,withRouter} from 'react-router-dom';
class Main extends Component{
    render(){
            return(   
                <div>
                    <Header />
                    <div>
                    <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/videos' component={Videos} /> 
                    <Route exact path='/magazines' component={Magazines} />
                    <Route exact path='/subscriptions' component={Subscriptions} />
                    <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
                </div>
      );
}
}

export default withRouter(Main);
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header'
import Newlist from './news_list'
import JSON from './db.json'

class App extends React.Component{
    constructor(props){
        super(props);

        this.state={
            news:JSON
    }
}

    render(){

        return(
            <div>
                <Header/>
                <Newlist news = {this.state.news}/>
            </div>

        )
    }
}



ReactDOM.render(<App/>, document.querySelector('#root'))
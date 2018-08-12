import React,{Component} from 'react';


class Header extends Component{

    constructor(props){
        super(props);

        this.state = {
            title:"Hello React from Ayush",
            keywords:''
        }
    }
   
    inputChange(event){
        this.setState({keywords:event.target.value})
    }
   
   
    render(){

        return(
            <header>
                <div
                onClick={()=>console.log('clicked')} ><h1> Logo</h1></div>
                <input
                onChange={this.inputChange.bind(this)}/>
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
            </header>
        )
    }
}

export default Header
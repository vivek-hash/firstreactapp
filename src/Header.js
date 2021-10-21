import react from "react";
import './Header.css' ;
//for class component
import React, { Component } from 'react';
 
const Header = function(props){
    
    const headerStyle = {
        textAlign: 'center',
        padding: 20,
        background: '#000',
        color: '#fff',
        textTransform: 'uppercase'
     };


     return(
        
        <div className="header">
            {props.heading}
        </div>
    )
 }
 

//class component no need of header as class component because static content
// class Header extends Component{
//     render(){
//         return(
//             <div className="header">
//             Phone Directory
//                {this.props.heading}

//             </div>
//         )
//     }
// }


export default Header;
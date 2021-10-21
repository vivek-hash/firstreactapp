
import React ,{ Component } from "react";
import Header from "./Header";
import './ShowSubscribers.css';
import './common/common.css'
import {Link} from 'react-router-dom';

  //   let subscribers=[
  //     {
  //       id: 1,
  //       name: "Shilpa bhatt",
  //       phone: "9999999999"
  
  //     },
  //     {
  //       id: 2,
  //       name:"Shristi",
  //       phone: "8888888888"
  //     }
  // ]

class ShowSubscribers extends Component{
  // constructor(){
  //   super()
  //   this.state={
  //     subscriberListToShow:[]
  //   }
  //   console.log('constructor called');
  // }

  // componentDidMount(){
  //   let newSubscriber={
  //     id:1,
  //     name:'vivek jha',
  //     phone: '8000000'
  //   }
  //   let subscriberList=this.state.subscriberListToShow;
  //   subscriberList.push(newSubscriber);
  //   this.setState({subscriberListToShow : subscriberList});
  //  console.log('component Did mount called');
  //  console.log("state" ,this.state)
  // }

  // clickHandler(message){
  //   alert(message)
  // }
  
  onDeletedClick=(susbscriberId)=>{
this.props.deleteSubscriberHandler(susbscriberId);
  }

  render() {
    console.log('render called')

  return (
      <div className="component-container">
      <Header heading="Phone Directory" /*instructor="Vivek Jha"*/ />
    <div className="component-body-container">
    
       <Link to ="/add"><button className="custom-btn add-btn">Add</button> </Link>
          <div className="grid-container header-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div> 
     </div>

    {
      this.props.subscriberList.map(sub=>{
        return <div key={sub.id} className="grid-container">
          <span className="grid-item">{sub.name}</span>
          <span className="grid-item">{sub.phone}</span>
          <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(sub.id)} /*onClick={this.clickHandler.bind(this, "delete Handler clicked")}*/>Delete</button>
          </div>
      })

    }

     {/* <div className="grid-container">
       <span className="grid-item">Shilpa</span>
       <span className="grid-item">888888888</span>
     </div>
     <div className="grid-container">
       <span className="grid-item">Srishti</span>
       <span className="grid-item">99999999</span>
     </div> */}

     </div>
    
//   {/* <label htmlFor="username">Username: </label>
//   <br/>
//   <input id="username" type="text"/><br/>
//   <br/>
//   <label htmlFor="password">Password: </label>
//   <br/>
//   <input id="password" type="password"/><br/>, */}

//   {/* <div id="modules">
//     <p>ReactJs</p>
//     </div> */}

// React.createElement(element_name, element_properties, children);
//React.createElement("div",{id :"module"},React.createElement("p",null,"ReactJs"))

);

}
}
export default ShowSubscribers;
//this.deleteHandler.bind(this, "Delete Clicked");
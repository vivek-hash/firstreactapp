import React,{Component} from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class PhoneDirectory extends Component{


    constructor(){
        super();
        this.state = {
            susbscribersList :
            [
                {
                    id:1,
                    name:'Vivek',
                    phone:999999
                    },
            {
                id:2,
                name:'Shristi',
                phone:8888888888
            }]
        }
    }


    deleteSubscriberHandler=(subscriberId)=>{
        let subscriberList=this.state.susbscribersList;
        let subscriberIndex=0;
        subscriberList.forEach(function(subscriber,index){
            if(subscriber.id===subscriberId){
                subscriberIndex=index;
            }
        } ,this);
        let newSubscriber=subscriberList;
        newSubscriber.splice(subscriberIndex,1);
        this.setState({subscriber :newSubscriber})
    }


    addSubscriberHandler =(newSubscriber)=>{
        
        let subscriberList = this.state.susbscribersList
        
        if(subscriberList.length >0)
        {
            newSubscriber.id = subscriberList[subscriberList.length-1].id +1

        }else{
            newSubscriber.id=1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList :subscriberList })
       // console.log("Phone Directory")
       // console.log(this.state.susbscribersList)
    }

    render(){
        return(
           // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
           //<ShowSubscribers subscriberList={this.state.susbscribersList}/>
           
           <div className='main-container'>
           <Router>
            <div className="main-container">
           <Route exact path='/' render={(props)=> <ShowSubscribers {...props} subscriberList={this.state.subscriberList} deleteSubscriberHandler={this.deleteSubscriberHandler} />}/> 
            <Route exact path='/add' render={({history} ,props)=> <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler}/>} />
           </div>
           </Router>
           </div>
        )
    }
}
export default PhoneDirectory;
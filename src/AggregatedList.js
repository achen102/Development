import React from 'react';
import {Button} from '@material-ui/core';



export default class AggregatedList extends React.Component {
    constructor(props){
        super(props);
            
    }



 render(){
     return(
         
        <div class = "card-columns">
                    {this.props.newlist.map((item) => 
                    <div class = "card" color = "primary" style = {{width: "400px"}}>
                       
                        <img class="card-img-top" alt="Card image cap" src = {item.image}/> 
                        <div class="card-body">
                            <h5 class="card-title" align= "center" >{item.name}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" align= "center">{item.topic}, {item.year}{</li>
                        </ul>
                        <div class = "card-body" align= "center">
                        <Button onClick={(item)=> this.props.addtoAggregator(item)}  variant = "outline-primary" >Add</Button>{' '}
                        <Button onClick={(item)=> this.props.removefromAggregator(item)}  variant = "outline-primary" >Remove</Button>{' '}
                        </div> 

                    </div>
            
                    )}

                </div>
        
     )
 }
}
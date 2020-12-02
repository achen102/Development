import React from 'react';
import {Button} from '@material-ui/core';
import './DisplayList.css';
import {Card} from '@material-ui/core';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import SpaIcon from '@material-ui/icons/Spa';
import FaceIcon from '@material-ui/icons/Face';

export default class DisplayList extends React.Component {
    constructor(props){
        super(props);
        this.addtoAggregator = this.addtoAggregator.bind(this);
        this.removefromAggregator = this.removefromAggregator.bind(this);
        this.state= {
            aggregatedList:[],
            topicList:[],
            nameList:[],
            popup:""
        }
    }

    //method that adds item to the aggregatedList, the item's topic to the topicList, and the item's name to the nameList; does not add item to aggregatedList if it already contains the item 
    addtoAggregator = (item) => {
        if (this.state.nameList.includes(item.name)===false){
        this.setState({aggregatedList:[...this.state.aggregatedList, item]})
        this.setState({topicList:[...this.state.topicList, item.topic]})
        this.setState({nameList:[...this.state.nameList, item.name]})
        }else{
        }
    }

    //method that removes item from the aggregatedList, the item's topic from the topicList, and the item's name from the nameList
    removefromAggregator = (item) =>{
        this.setState({aggregatedList: this.state.aggregatedList.filter(function(ele){
            return ele !== item;
        })});
        this.setState({topicList: this.state.topicList.filter(function(ele){
            return ele !== item.topic;
        })});
        this.setState({nameList: this.state.nameList.filter(function(ele){
            return ele !== item.name;
        })});
       
    }

    //checks if the topicList includes the topic combination, and determines the text (popup state) that pops up with each combo of topics 
    checkTopic = () =>{
        if (this.state.topicList.includes("biology")){
            if (this.state.topicList.includes("design")){
                if (this.state.topicList.includes("psychology")){
                    this.setState({popup: "Within the intersection of biology, design, and psychology, I'm really interested in sustainable design, as well as biodesign and biomimicry."})
                }else{
                    this.setState({popup: "Within the intersection of biology and design, I'm really interested in sustainable design, as well as biodesign and biomimicry in the context of sustainable systems and space systems design."})
                }
            }else if (this.state.topicList.includes("psychology")){
                this.setState({popup: "Within the intersection of biology and psychology, I'm really interested in the psychology & mindset of sustainability, and how that can be translated through design"})
            }else {
                this.setState({popup:"add 2 or more symbols to see the connections!"})
            }
        }
        else if (this.state.topicList.includes("design")){
            if (this.state.topicList.includes("psychology")){
                this.setState({popup: "Within the intersection of design and psychology, I'm really interested in designing with humans in mind--whether that be user experience design, the process-oriented design process, or the application of heuristics & decision-making to design research."})
            }else {
                this.setState({popup:"add 2 or more symbols to see the connections!"})
            }
        }
        else if (this.state.topicList.includes("psychology")){
            this.setState({popup: "Add 2 or more to see the connections!"})
        
        }else{
            this.setState({popup:"Add 2 or more items to see the connections!"})
        }
    }

    render(){
        return(
            <div class = "rows">
                <Card style = {{width: "700px"}}>
                    <div class = "gridwrap">
                        {this.props.list.map((item) => 
                        <div class = "cardwrap">
                            <Card style = {{width: "200px"}} >
                                <img class="card-img-top" src = {item.image}/> 
                                <div class="card-body">
                                    <h5 class="card-title" align= "center" >{item.name}</h5>
                                </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" align= "center">{item.topic}, {item.year}</li>
                                
                            </ul>
                            <div class = "card-body" align= "center">
                            <Button onClick={()=> this.addtoAggregator(item) }  variant = "contained" color = "primary">Add</Button>{' '}
                            
                            </div> 
                             </Card>
                        </div>
                       
                        )}
                    </div>
                </Card>
                
                <Card class = "bigcard" style = {{width: 500}}>
                    <div class = "gridwrap">
                        
                        {this.state.aggregatedList.map((item) => 
                        <div class = "cardwrap">
                        <Card style = {{width: "200px"}}>
                            <img class="card-img-top" src = {item.image}/> 
                            <h5 class="card-title" align= "center" >{item.name}</h5>
                            <div class = "card-body" align= "center">
                            <Button onClick={()=> this.removefromAggregator(item) }  variant = "outlined" color = "secondary">Remove</Button>{' '}
                            </div>

                        </Card>
                        </div>
                        )}
                    </div>
                    <div class = "aggregator-total">
                    <Card style = {{margin: "auto"}}>
                        <div class= "symbolcard" style = {{height: 200}}>
                        <h2>a world of ideas...</h2>
                        {this.state.aggregatedList.map((item)=>

                        {if (item.topic === "biology"){
                            return <SpaIcon fontSize= "large" style= {{margin: "auto"}}/>
                        } else if (item.topic === "psychology"){
                            return <FaceIcon fontSize= "large" style= {{margin: "auto"}}/>
                        } else if (item.topic === "design"){
                            return <ColorLensIcon fontSize= "large" style= {{margin: "auto"}}/>
                        } else {
                        }
                        
                        })}
                        </div>
                    </Card>
                    <Button onClick={()=> this.checkTopic()}  variant = "contained" >Look for Connections!</Button>{' '}
                    <Card>
                    <h5 class="card-title" align= "center" >{this.state.popup}</h5>
                    </Card>
                    </div>
                    
                </Card>
            </div>
                
        )
    }
}
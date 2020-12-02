import React from 'react';
import {Button} from '@material-ui/core';
import DisplayList from './DisplayList';

export default class FilteredList extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                topic: "All",
                year: "All",
            };
            
    }
    
    //sets state of year to the specific year selected
    onSelectFilterTopic = (event) => {
        this.setState({
            topic: event,
        })
    };

    //method is used to check if each item in the productList matches both filters
    matchesFilterItems = (item) => {
        if (this.state.topic ==="All" && this.state.year ==="All") {
            return true
        } else if (this.state.topic === item.topic && this.state.year ==="All"){
            return true
        } else if (this.state.topic === "All" && this.state.year ===item.year){
            return true  
        } else if (this.state.topic === item.topic && this.state.year ===item.year){
            return true
        } else {
            return false
        }

    }

    //sets state of year to the specific year selected
    onSelectFilterYear = (event) => {
        this.setState({
            year: event
        })
    };

    
    //renders filtering buttons for topic & year
    render(){
        return(
            
            <div>
                <Button onClick={()=> this.onSelectFilterTopic("All")} variant = "contained" color = "primary" size= "large">All</Button>{' '}
                <Button onClick={()=> this.onSelectFilterTopic("design")} variant = "contained"  color = "primary" size= "large">Design</Button>{' '}
                <Button onClick={()=> this.onSelectFilterTopic("psychology")} variant = "contained"  color = "primary" size= "large">Psychology</Button>{' '}
                <Button onClick={()=> this.onSelectFilterTopic("biology")} variant = "contained" color = "primary"size= "large">Biology</Button>{' '}
                <br></br>
                <br></br>
                <Button onClick={()=> this.onSelectFilterYear("All")} variant = "contained" color= {"primary"}>All</Button>{'  '}
                <Button onClick={()=> this.onSelectFilterYear("2018")} variant = "contained" color= {"primary"}>2018</Button>{'  '}
                <Button onClick={()=> this.onSelectFilterYear("2019")} variant = "contained" color= {"primary"}>2019</Button>{'  '}
                <Button onClick={()=> this.onSelectFilterYear("2020")} variant = "contained" color= {"primary"}>2020</Button>{'  '} 
                <br></br>
                <br></br>
                <DisplayList list={this.props.list.filter(this.matchesFilterItems)} />
            </div>
            
        )
    }
   
}
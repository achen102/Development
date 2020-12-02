import React from 'react';
import './App.css';
import FilteredList from './FilteredList'
import Nasa from './nasa.gif';
import Metal from './metal.jpg';
import Coralogy from './coralogy.jpg';
import Tilly from './tilly.jpg';
import Block from './block.jpg';
import Connections from './connections.jpg';
import Coffee from './coffee.jpg';
import Mouse from './mouse.jpg';
import Responsive from './responsive.jpg';
import Iterative from './iterative.jpg';
import Ab from './ab.jpg';
import Personas from './personas.png';
import {MenuItem} from '@material-ui/core';
import {FormControl} from '@material-ui/core';
import {Select} from '@material-ui/core';



 const productList= [

  { name: "Nasa", topic: "biology", year: "2020", order: 1, image: Nasa},
  { name: "Metal", topic: "design", year: "2019", order: 11, image: Metal},
  { name: "Coralogy", topic: "psychology", year: "2019", order:10, image: Coralogy},
  { name: "Tilly", topic: "biology", year: "2019", order: 9, image: Tilly},
  { name: "Block", topic: "design", year: "2018", order: 12, image: Block},
  { name: "Connections", topic: "design", year: "2019", order: 8, image: Connections},
  { name: "Coffee", topic: "design", year: "2020", order: 2, image: Coffee},
  { name: "Mouse", topic: "design", year: "2020", order: 7, image: Mouse},
  { name: "Responsive", topic: "psychology", year: "2020", order: 5, image:Responsive},
  { name: "Iterative", topic: "design", year: "2020", order: 3, image: Iterative},
  { name: "AB", topic: "design", year: "2020", order: 4, image: Ab},
  { name: "Personas", topic: "psychology", year: "2020", order: 6, image:Personas},
  ];

//new ArrayList is a copy of productList; it's used to call the sort method on (so that productList can store original order)
const sortedproductList = productList.slice();
  

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sorted: false,
      value : 1 
    };
  }
  //sets state of sorted to true, value to 2 (for the menuitem)
  setSortedTrue() { 
    this.setState({sorted: true});
    this.setState({value:2});
  }
  //sets sorted state to false, value to 1 (for the menuitem)
  setSortedFalse() { 
    this.setState({sorted: false});
    this.setState({value:1});
  }


  render() {
    return (
      <div class = "App" >
        <FormControl class= "Selectbutton" style = {{width: "200px"}} >
          <Select value = {this.state.value}>
            <MenuItem value = {1} onClick={()=> this.setSortedFalse()}>Sort</MenuItem>
            <MenuItem value = {2} onClick={()=> this.setSortedTrue()}>Most Recent</MenuItem>
          </Select>
        </FormControl>
       
       {/* passes a sorted list (sortedproductList) into Filteredlist if the sorted state is true (which means that the "most recent" menu item was clicked) */}
        { this.state.sorted ? (

          <FilteredList list = {
            sortedproductList.sort(function (a, b) {
              return a.order- b.order;
            })
          }/>
        /* passes the original list (productList) into FilteredList if the sorted state is false (which means that the "sort" or default menu item was clicked) */
        ): (
          <FilteredList list={
            productList
          } />
        ) } 
		    
	    </div>

    )
  }
}




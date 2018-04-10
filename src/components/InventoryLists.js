import React, {Component} from 'react';
import InventoryList from './InventoryList'; 
import AddInventory from './AddInventory';
class InventoryLists extends Component{
  state = {
    userInput:[]
  }

  handleDelete=(position)=>{
    this.state.userInput.splice(position, 1)
    this.setState({
      userInput:this.state.userInput
    });
  }


  handleClick= (id,name,quantity,price)=>{
  let lists = this.state.userInput;
  let date = new Date();
  lists.push({
id: id,    
name: name,
quantity: quantity,
price: price,
date: date
  });
  this.setState({ userInput:lists
  })
  
 }
// using position to  edit name and quantity and price 
 handleEdit=(position, name, quantity, price)=>{
let items = this.state.userInput;
items[position].name= name;
items[position].quantity= quantity;
items[position].price= price;
this.setState({
  userInput: items
}) 

}



  render(){
    return(
      <div className='Inventory-Lists'>
       <AddInventory handleAdd={this.handleClick} />
       
       <table>

         <thead>
         <th> Id</th>
         <th> Item</th>
         <th> Quantity</th>
         <th> Price</th>
         <th> Time</th>
         <th> Action</th>

         </thead>
        <tbody>
              {
            this.state.userInput.map((item, i)=>{

              return <InventoryList
              handleDelete= {this.handleDelete} 
              handleEdit= {this.handleEdit}
              key = {'item-'+i} item= {item} index={i} />
            })

 
            
            }
          </tbody>
         </table>
      </div>

    )
  }
}



export default InventoryLists;

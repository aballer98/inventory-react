import React,{Component} from 'react';
import './style.css';

const randomId = function() {
  let randNum;
  let randNumberGenerator = '';
  let numbersLetters = '0123456789abcdefghijklmnopqrstvw'.split('');
  for (let i = 0; i < 6; i++) {
    randNum = Math.floor(Math.random() * numbersLetters.length);
    randNumberGenerator += numbersLetters[randNum];
  }
  return  randNumberGenerator;
}

class AddInventory extends Component{
  handleSubmit=(e)=>{

     e.preventDefault();

     if (this.refs.name.value ==='' || this.refs.quantity.value ==='' || this.refs.price.value === '') {
      alert('please, fill the boxes ')
    } else{

    let itemName = e.target.elements.itemName.value;
    let itemQuantity = e.target.elements.itemQuantity.value;
    let itemPrice = e.target.elements.itemPrice.value;
    let id = randomId();
   
      console.log(itemName.length,itemQuantity.length,itemPrice.length);
      
      this.props.handleAdd(id, itemName, itemQuantity, itemPrice);
    

e.target.elements.itemName.value ='';
e.target.elements.itemQuantity.value= '';
e.target.elements.itemPrice.value= '';
  }
  }
  render(){
    return (
<form onSubmit={this.handleSubmit}>
<input type = 'text' ref='name' name='itemName' placeholder = 'Add Name' />
<input type = 'text' ref='quantity' name='itemQuantity' placeholder = 'Add Quantity' />
<input type = 'text' ref='price' name='itemPrice' placeholder= 'Add Price' />
<button><i   class="far fa-plus-square"></i></button>


</form>

    )
  }
}

export default AddInventory;

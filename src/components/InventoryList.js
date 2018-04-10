import React,{Component} from 'react';
import ReactDOM from 'react-dom';



class InventoryList extends Component{
  constructor(props){
    super(props);
    this.state = {
      editing:false //this does not allows you to edit.
    }
  this.handleCancel= this.handleCancel.bind(this);
  this.handleEdit= this.handleEdit.bind(this);
  this.handleDelete= this.handleDelete.bind(this);
  this.handleSave= this.handleSave.bind(this);

  }



// It allows you to edit it 
  handleEdit(){
    this.setState({
      editing:true
    })
  }
handleDelete=()=>{
  this.props.handleDelete(this.props.index);
  

}

// this form will appear once you press Edit
editingForm(){
  const{id, name, quantity, price, date} = this.props.item;
     
  return(
    <tr>
      <td> {id}</td>
      <td><input type='text' name='name' ref='name' defaultValue={this.props.item.name} />  </td>
      <td><input type='text' name='quantity' ref='quantity' defaultValue={this.props.item.quantity} /> </td>
      <td><input type='text' name='price' ref='price' defaultValue={this.props.item.price} /> </td>
      <td>{date.getFullYear()} </td>
      <td><button onClick={this.handleSave}>Save </button>  <button onClick={this.handleCancel}>Cancel </button></td>
       </tr>
  )
  
  }

  
  //this will be a normal form once you cancel or save
  normalForm(){
    const {id, name, quantity, price, date}= this.props.item;
  
    return (
      
    <tr>

        <td> {id}</td>
        <td> {name}</td>
        <td> {quantity}</td>
        <td> {price}</td>
        <td>{date.getFullYear()} </td>
      <td> <button onClick={this.handleEdit}> Edit</button> <button onClick={this.handleDelete}>Delete </button> </td>
    </tr>
  );


}

handleCancel(){
this.setState({
  editing:false

})
}

handleSave(){

  let name=this.refs.name.value;
  let quantity=this.refs.quantity.value;
  let price=this.refs.price.value;
//this comes from inventory lists component 
  this.props.handleEdit(this.props.index, name, quantity, price);

  this.setState({
    editing: false
  })
}

  render(){
  if(this.state.editing){
    return this.editingForm()
  }
    else{
      return this.normalForm()
    }
  }  
  
}
export default InventoryList;

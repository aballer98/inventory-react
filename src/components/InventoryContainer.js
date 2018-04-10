import React, {Component} from 'react';
import InventoryLists from './InventoryLists';
import './style.css';
class InventoryContainer extends Component{
  render(){
    return (<div className='Inventory-container'>
    
            <InventoryLists />
          </div>
        )
  }
}

export default InventoryContainer;

import React, { Component } from 'react';
import * as message from './../constants/Message';

class CartItem extends Component {

    
    showSubTotal = (price,quantity) => {
        return price*quantity;
      }
    deleteProductInCart = (item) => {
        this.props.deleteProductInCart(item);
        this.props.changeMessage(message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }
    onUpdateQuantity = (product,quantity) => {
        if(quantity>0){
            this.props.updateProductInCart(product,quantity);
            this.props.changeMessage(message.MSG_UPDATE_CART);
        }
    }
        
    
  render() {
      var {item} = this.props;
      var {quantity}= item;
    
    return (
      
                                <tr>
                                    <th scope="row">
                                        <img src={item.product.img}
                                            alt={item.product.name} className="img-fluid z-depth-0" />
                                    </th>
                                    <td>
                                        <h5>
                                            <strong>{item.product.name}</strong>
                                        </h5>
                                    </td>
                                    <td>{item.product.price}$</td>
                                    <td className="center-on-small-only">
                                        <span className="qty"> {quantity} </span>
                                        <div className="btn-group radio-group" data-toggle="buttons">
                                            <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                                                onClick={()=> this.onUpdateQuantity(item.product,item.quantity-1)}
                                                >
                                                <a>—</a>
                                            </label>
                                            <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                                                onClick={()=> this.onUpdateQuantity(item.product,item.quantity+1)}
                                                >
                                                <a>+</a>
                                            </label>
                                        </div>
                                    </td>
                                    <td>{this.showSubTotal(item.product.price,item.quantity)}$</td>
                                    <td>
                                        <button type="button" 
                                                className="btn btn-sm btn-primary waves-effect waves-light" 
                                                data-toggle="tooltip" 
                                                data-placement="top"
                                                title="" 
                                                data-original-title="Remove item"
                                                onClick={()=> this.deleteProductInCart(item)}
                                                >
                                            X
                                        </button>
                                    </td>
                                </tr>         
           
    );
  };
}

export default CartItem;

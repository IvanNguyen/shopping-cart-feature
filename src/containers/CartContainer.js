import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from './../components/Cart';
import PropTypes from 'prop-types';
import * as types from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from '../components/CartResult';
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from '../actions';


class CartContainer extends Component {
  
  render() {
    var {cart} = this.props;
    var emptyCart = '';
    if(cart.length <= 0){
        emptyCart = types.MSG_CART_EMPTY;
    } 
    return (     
      
      <Cart cart={cart} emptyCart={emptyCart}>
        {this.showCartItem(cart)}
        {this.showSubTotal(cart)} 
    </Cart>
    );
  };

  showCartItem = cart => {
      var result = null;
      if(cart.length > 0){
        result = cart.map((item,index) => {
            return (
                <CartItem 
                item={item}
                index={index}
                key={index}
                deleteProductInCart={this.props.deleteProductInCart}
                changeMessage={this.props.changeMessage}
                updateProductInCart={this.props.updateProductInCart}
                />
            );
        });
      }  
      return result;
  }
  showSubTotal = cart => {
      var result = null;
      if(cart.length > 0){
          return <CartResult 
            cart={cart}
          />
      }
      return result;
  }
  
}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    img: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                    price: PropTypes.number.isRequired,
                    inventory: PropTypes.number.isRequired,
                    rating: PropTypes.number.isRequired
                }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        deleteProductInCart : (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        changeMessage : (message) => {
            dispatch(actChangeMessage(message));
          },
        updateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product,quantity));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);

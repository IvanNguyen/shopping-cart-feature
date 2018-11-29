import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import {actAddToCart, actChangeMessage} from './../actions/index';


class ProductsContainer extends Component {
  
  render() {
    var {products}=this.props;
    return (
      <Products products={products}>
        {this.showProducts(products)}
      </Products>
    );
  };
  showProducts(products) {
    var result = null;
    if(products.length > 0){
      result = products.map((product,index) => {
        return <Product 
                  key={index}
                  product={product}
                  addToCart={this.props.addToCart}
                  changeMessage={this.props.changeMessage}
               />
      });
    }
    return result;
  }
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    changeMessage : PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    products : state.products
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return{
    addToCart: (product) => {
      dispatch(actAddToCart(product,1));
    },
    changeMessage : (message) => {
      dispatch(actChangeMessage(message));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);

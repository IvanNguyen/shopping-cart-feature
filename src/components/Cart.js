import React, { Component } from 'react';



class Cart extends Component {
  render() {
    return (
       <div>
         {/* Cart */}
         <section className="section">
                    <div className="table-responsive">
                      <table className="table product-table">
                        <thead>
                          <tr>
                            <th style={{fontSize:25,fontWeight:'bold',color:'red'}}>{this.props.emptyCart}</th>
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>{this.props.children}</tbody>
                      </table>
                    </div>
                  </section>
       </div>         
    );
  };
}

export default Cart;

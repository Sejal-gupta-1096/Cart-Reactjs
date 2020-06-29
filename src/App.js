import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products : [
            {
                price : 10000,
                title : 'Phone',
                qty : 20,
                img : "",
                id : 1
            } , 
            {
                price : 2000,
                title : 'Wath',
                qty : 50,
                img : "",
                id : 2
            } , 
            {
                price : 60000,
                title : 'Laptop',
                qty : 10,
                img : "",
                id : 3
            }
        ]
    }
}

  handleIncreaseQuantity = (product) => {
      let {products} = this.state;
      let index = products.indexOf(product);

      products[index].qty = product.qty + 1;

      this.setState({
          products : products
      });
  }

  handleDecreaseQuantity = (product) => {
      let {products} = this.state;
      let index = products.indexOf(product);

      if(products[index].qty > 0){
          products[index].qty = product.qty - 1;
      }
      
      this.setState({
          products : products
      });
  }

  handleDeleteProduct = (id) => {
      let {products} = this.state;
      let items = products.filter((item) => {
          return item.id !== id
      });
      
      this.setState({
          products : items
      });
  }

  getCount = () => {
    let {products} = this.state;
    let count = 0;

    products.forEach( (item) => {
      count = count + item.qty;
    })

    return count;
  }

  render(){
    const {products} = this.state
    return (
      <div className="App">
        <Navbar count={this.getCount()} />
        <Cart 
          products={products}
          handleIncreaseQuantity={this.handleIncreaseQuantity} 
          handleDecreaseQuantity={this.handleDecreaseQuantity} 
          handleDeleteProduct={this.handleDeleteProduct} 
        />
      </div>
    );
  }
  
}

export default App;

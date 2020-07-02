import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar'
import * as firebase from 'firebase';
import 'firebase/firestore';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products : [],
        loading : true
    }

    this.db = firebase.firestore()
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

  getTotal = () => {
    let {products} = this.state;
    let total = 0;

    products.forEach( (item) => {
      total = total + (item.qty * item.price);
    })

    return total;
  }

  componentDidMount = () => {

    this.db
    .collection('products')
    .onSnapshot( (snapshot) => {
      console.log(snapshot);
      const products = snapshot.docs.map( (doc) => {
        let data = doc.data();
        data['id'] = doc.id;
        return data;
      })

      this.setState({
        products : products,
        loading : false
      })
    }) 
  }

  addProduct = () => {

    this.db
    .collection('products')
    .add({
      img : '',
      price : 50000,
      title : 'Laptop',
      qty : 10
    })
    .then( (docRef) => {
      console.log(docRef);
    })
    .catch( (error) => {
      console.log('Error' , error);
    })
  }

  render(){
    const {products , loading} = this.state
    return (
      <div className="App">
        <Navbar count={this.getCount()} />
        <div onClick={this.addProduct}>Add Product</div>
        <Cart 
          products={products}
          handleIncreaseQuantity={this.handleIncreaseQuantity} 
          handleDecreaseQuantity={this.handleDecreaseQuantity} 
          handleDeleteProduct={this.handleDeleteProduct} 
        />
        <div style={{fontSize:"25px" , padding:"20px"}}>TOTAL PRICE : {this.getTotal()}</div>
        {loading && <h1>Loading Products...</h1>}
      </div>
    );
  }
  
}

export default App;

import React from 'react';
import './index.css';

const Navbar = (props) => {
        
        return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/777/777205.svg" />
                    <span style={styles.cartCount}>{props.count}</span>
                </div>
            </div>
        );
}


const styles = {
    cartIcon: {
      height: 45,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'pink',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 8,
      bottom: 30
    }
  };
  

export default Navbar
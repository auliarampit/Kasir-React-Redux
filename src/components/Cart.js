import React, { Component } from 'react'
import '../styles/Cart.css'

class Cart extends Component {

    renderCart = ()=> {
        let jsx = this.props.cartList.map((item,key) => {
            return (
                <div className='row mt-5'>
                <div className='col-6 text-right' style={{paddingRight: '0px'}}>
                    <img style={{
                        width: '130px',
                        height: '130px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                    }}
                    src={item.image}/>
                </div>
                <div className='col-6'>
                    <div className='row  justify-content-center text-center'>
                        <h6>{item.name}</h6>
                    </div>
                    <div className='row  justify-content-center text-center'>
                        <p>{item.price * this.props.jumlah[key]}</p>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-2'>
                            <input type='button' className="btn btn-outline-dark btn-sm"
                                style={{ width: "27px" }} value='-'
                                onClick={() => this.props.kurang(key)}
                            />
                        </div>
                        <div className='col-4'>
                            <input type='text' className='text-center' disabled value={this.props.jumlah[key]}
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "15px",
                              borderColor: "#DEE2E6",
                              marginLeft: "2px",
                              marginRight: "2px",
                              backgroundColor: "white",
                              border: 'none'
                            }} />
                        </div>
                        <div className='col-2' style={{padding: '0px'}}>
                        <input type='button' className="btn btn-outline-dark btn-sm"
                            style={{ width: "27px", }} value='+'
                            onClick={() => this.props.tambah(key)} />
                        </div>
                    </div>
                </div>
            </div>
            )
        })
        return jsx
    }

    render() {
        // console.log(this.props.tambah);
        
        return (
            this.props.cartList.length > 0 
            ?
            this.renderCart()            
            :
            <div className='containerCart'>
                <img className='imgFood' src= {require('../assets/images/food.png')} />
                <p className='text1'>You cart is empety</p>
                <p className='text2'>please add some items from the menu</p>
            </div>
        )
    }
}
export default Cart

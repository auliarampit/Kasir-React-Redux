import React, { Component } from 'react'
import '../styles/Menu.css'

class Menu extends Component {

    addCart = (item) => {
        this.props.addCart(item)
    }

    renderMenu = () => {
        let jsx = this.props.menuList.map(item => {
            return (
                this.props.cartList.indexOf(item) !== -1 ?
                <div className='col-sm-3 mt-4'  onClick={this.props.cartList.indexOf(item) !== -1 ? '' : () => this.addCart(item)}>
                    <div className="card cardContainer" >
                        <img className='imgMenu'
                            src={item.image} style={{
                                    opacity:[this.props.cartList.indexOf(item) !== -1 ? 0.3 : 1]
                                }}/>
                            <div className='middle' style={{
                                    opacity:[this.props.cartList.indexOf(item) !== -1 ? 1 : 0]
                                }}>                
                                 <i className="fa fa-check fa-2x textCentang" aria-hidden="true" /> 
                            </div>
                        <div className="card-body">
                            <p>{item.name}</p>
                            <p className="card-text">{item.price}</p>
                        </div>
                    </div>
                </div>
                :
                <div className='col-sm-3 mt-4'  onClick={this.props.cartList.indexOf(item) !== -1 ? '' : () => this.addCart(item)}>
                <div className="card cardContainer" >
                    <img className='imgMenu'
                        src={item.image}/>
                        <div className='middle'>                
                            <i class="fa fa-cart-plus fa-3x textCentang" aria-hidden="true"></i>
                        </div>
                    <div className="card-body">
                        <p>{item.name}</p>
                        <p className="card-text">{item.price}</p>
                    </div>
                </div>
                </div>
            )
        })
        return jsx
    }
    render() {
        console.log(this.props.menuList, 'ini menu');

        return (
            <div className='row justify-content-center'>
                {this.renderMenu()}
            </div>
        )
    }
}

export default Menu
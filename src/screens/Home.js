import React, { Component } from 'react'
import Sidebar from '../components/sidebar'
import Menu from '../components/Menu'
import { connect } from 'react-redux'
import { getMenu } from '../configs/Actions/menu'
import Cart from '../components/Cart'


class Home extends Component {
    state = {
        menuList: [],
        cartList: [],
        jumlah: [],
        total: 0,
    }
    componentDidMount= async() => {
        await this.getAllMenu()
    }

    getAllMenu = async()=> {
        await this.props.dispatch(getMenu())
        this.setState({
            menuList: this.props.menu
        })
    }
    
    addCart = (item) => {
        this.state.jumlah.push(1)
        this.state.cartList.push(item)
        this.setState({
            cartList: this.state.cartList,
        })
    }

    tambah = (key) => {
        this.state.jumlah[key]++
        this.setState({
            jumlah: this.state.jumlah
        })

    }

    kurang = (key) => {
        console.log(key);
        
        if (
            this.state.jumlah[key] > 1
        ) {
            this.state.jumlah[key]--
        } else {
            this.state.cartList.splice(key, 1)
            this.state.jumlah.splice(key, 1)
        }
            
            this.setState({
                    jumlah: this.state.jumlah
                })
        }

    render() {
        // console.log(this.state.menuList);
        
        return (
            <div className='row' style={{height: '100vh', marginRight: '0px'}}>
                <div className='col-1 text-center'>
                    <Sidebar/>
                </div>
                <div className='col-8' style={{background: 'rgba(190, 195, 202, 0.3)'}}>
                    <Menu 
                        menuList={this.state.menuList} 
                        addCart={this.addCart} 
                        cartList={this.state.cartList}
                    />
                </div>
                <div className='col-3'>
                    <Cart 
                        cartList={this.state.cartList}
                        jumlah={this.state.jumlah}
                        tambah={this.tambah}
                        kurang={this.kurang}
                        // total={this.total}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu.menu
    }
}

export default connect(mapStateToProps)(Home)
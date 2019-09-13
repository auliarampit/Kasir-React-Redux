import React, { Component, Fragment } from 'react'
import '../styles/Sidebar.css'
import ModalAdd from './ModalAdd'

export default class Sidebar extends Component {
    render() {
        return (
            <Fragment>
                <div className='row text-center'>
                    <div className='col-12'>
                        <img className='fork' src={require('../assets/images/fork.png')} />
                    </div>
                </div>
                <div className='row' style={{textAlign:'center'}}>
                    <div className='col-12'>
                        <img className='clipboard' src={require('../assets/images/clipboard.png')} />
                    </div>
                </div>
                <div className='row' style={{textAlign:'center'}}>
                    <div className='col-12'>
                        <ModalAdd />
                    </div>
                </div>
            </Fragment>
        )
    }
}
import React from 'react';
import { 
    Button, 
    Modal,
    Label,
    Form, 
    FormGroup,
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    CustomInput,
} from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="white" onClick={this.toggle}><img className='add' src={require('../assets/images/add.png')} />{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add Menu</ModalHeader>
          <ModalBody>
            <Form>
                <Label>Item Name</Label>
                <input type='text' className='form-control' id='name' />
                <FormGroup className='mt-3'>
                    <Label for='img'> File Browser </Label>
                    <CustomInput type='file' id='img' name='customFile' />
                </FormGroup>
                <FormGroup className='mt-3'>
                    <Label> Category </Label>
                    <select id={'category'} className='form-control'>
                        <option value=''>=PILIH=</option>
                        <option value='1'>Drink</option>
                        <option value='2'>Food</option>
                    </select>
                </FormGroup>
                <div className='row'>
                    <div className='col-12'>
                        <Label className='mt-2'> Price </Label>
                        <input type='number' className='form-control' id='price'
                            placeholder='Rp. ' style={{width: '200px'}} />
                    </div>
                </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Add</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
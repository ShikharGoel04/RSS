import React,{Component}from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

  constructor(props){
    super(props);
    this.state={
        isModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
}
toggleModal() {
  this.setState({
    isModalOpen: !this.state.isModalOpen
  });
}


handleLogin(event) {
  event.preventDefault();
  alert(this.phone.value);
  
  const phone=this.phone.value;
  
  this.props.sendOTP(phone);
 
  
}
 

    render(){
            return(
              
              <>
                 <div className="jumbotron text-center">
              <img src="https://www.organiser.org//Encyc/2019/2/7/organiser-logo.png"></img>
            </div>
                  <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                   
                <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input type="text" id="phone" name="phone"
                                    innerRef={(input) => this.phone = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Send OTP</Button>
                        </Form>
                </ModalBody>
            </Modal>
            
               <Navbar dark expand="md">
                             <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand href="">RSS</NavbarBrand>
          <Nav Navbar>
          <NavItem><NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span>Home</NavLink></NavItem>
          <NavItem><NavLink className="nav-link" to="/videos"><span className="fa fa-video-camera fa-lg"></span>Videos</NavLink></NavItem>
          <NavItem><NavLink className="nav-link" to="/magazines"><span className="fa fa-info fa-lg"></span>Magazines</NavLink></NavItem>
          <NavItem><NavLink className="nav-link" to="/subscriptions"><span className="fa fa-info fa-lg"></span>Subscriptions</NavLink></NavItem>
          <NavItem>
          
                           <Nav className="ml-auto navbar"><Button onClick={this.toggleModal} outline><span className="fa fa-sign-in fa-lg"></span> Login</Button></Nav>
                                
          </NavItem>
          </Nav>
         
      </Navbar>
      
</>

            );



    }


}

export default Header;
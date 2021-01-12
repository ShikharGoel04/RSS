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
}
toggleModal() {
  this.setState({
    isModalOpen: !this.state.isModalOpen
  });
}
    render(){
            return(
              <div class="container">
                  <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                   
                <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                </ModalBody>
            </Modal>
               <Navbar dark expand="md">
                             <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand href="">RSS</NavbarBrand>
          <Nav Navbar>
          <NavItem><NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span>Home</NavLink></NavItem>
          <NavItem><NavLink className="nav-link" to="/videos"><span className="fa fa-info fa-lg"></span>Videos</NavLink></NavItem>
          <NavItem><NavLink className="nav-link" to="/magazines"><span className="fa fa-info fa-lg"></span>Magazines</NavLink></NavItem>
          <NavItem><NavLink className="nav-link" to="/subscriptions"><span className="fa fa-info fa-lg"></span>Subscriptions</NavLink></NavItem>
          <NavItem>
          
                           <Nav className="ml-auto navbar"><Button onClick={this.toggleModal} outline><span className="fa fa-sign-in fa-lg"></span> Login</Button></Nav>
                                
          </NavItem>
          </Nav>
         
      </Navbar>
      
</div>

            );



    }


}

export default Header;
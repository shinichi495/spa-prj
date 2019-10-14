import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Login_Image from '../../../Images/Login_Image.jpg'
import {Redirect} from 'react-router-dom';
// import { url } from 'inspector';
const styles ={
  backgroundImage: {
    backgroundImage:`url(${Login_Image})`,
    height: "100%",
  backgroundPosition: "center",
  }}
 
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tk : ''
    }
    this.onChangeTK = this.updateInput.bind(this);
  }
  login = (e)=>{
    e.preventDefault();
    let roles = 0;
    if (this.state.tk == 'admin') {
      roles = 1
    } 
    this.props.history.push({
      pathname : '/addGuest',
      state : {role : roles}
    });
  } 
  

  updateInput (e) {
    this.setState({
      tk : e.target.value
    })
  }
  render() {
    return (
      <div className="app flex-row align-items-center" style={styles.backgroundImage}>
        <Container >
          <Row className="justify-content-center" >
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Đăng Nhập</h1>
                      <p className="text-muted">Đăng Nhập Vào Tài Khoản Của Bạn</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Tài Khoản" autoComplete="username" onChange={this.onChangeTK}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Mật Khẩu" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="button" onClick={(e)=>this.login(e)} color="primary" className="px-4">Đăng Nhập</Button>
                        </Col>
                        {/* <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Quên Mật Khẩu?</Button>
                        </Col> */}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Giới Thiệu Spa</h2>
                      <p>AYA Spa & Skin care – nơi bạn đến sẽ yêu, đi sẽ nhớ!.</p>                     
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>  
        </div>       
    );
  }
}

export default Login;

import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Admin_Login from '../../../Images/Hinh1.jpg'
// import { url } from 'inspector';
const styles ={
  backgroundImage: {
    backgroundImage:`url(${Admin_Login})`,
    height: "100%",
    backgroundPosition: "center",
 
 
  }}
class AdminLogin extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center" style={styles.backgroundImage} >
        <Container >
          <Row className="justify-content-center" >
            <Col md="6">
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
                        <Input type="text" placeholder="Tài Khoản" autoComplete="username" />
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
                          <Button color="primary" className="px-4">Đăng Nhập</Button>
                        </Col>
                        {/* <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Quên Mật Khẩu?</Button>
                        </Col> */}
                      </Row>
                    </Form>
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

export default AdminLogin;

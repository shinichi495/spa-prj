import React, { Component } from 'react';
import { Button, Card, CardBody,Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Image_Guest from '../../../Images/Image_Guest.jpg'
const styles ={
  backgroundImage: {
    backgroundImage:`url(${Image_Guest})`,
    height: "100%",
  backgroundPosition: "center",
  backgroundSize:"cover"
 
 
  }}
class Register_Guest extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center"  style={styles.backgroundImage}>
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Đăng Kí</h1>
                    <p className="text-muted">Thêm Khách Hàng</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Tên Khách Hàng" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="cui-phone icons"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Số Điện Thoại" autoComplete="email" />
                    </InputGroup>     
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="cui-home icons"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Địa Chỉ" autoComplete="email" />
                    </InputGroup>                               
                    <Button color="success" block>Thêm Khách Hàng</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register_Guest;

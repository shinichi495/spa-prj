import React, { Component } from 'react';
import { Input, Label, FormGroup, CardBody, Container, Card, CardHeader, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import listGuest from '../../../Images/AdminLogin.jpg'
const styles = {
  backgroundImage: {
    backgroundImage: `url(${listGuest})`,
    height: "auto",
    backgroundPosition: "center",


  }}
class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
    }
  }

  toggle = () => {
    this.setState({
      large: !this.state.large,
    });
  }
  toggleLarge = () => {
    this.setState({
      large: !this.state.large,
    });
  }
  render() {
    return (
      <div className="animated fadeIn" >
        <Row className="justify-content-center" >
          <Col xs="12" sm="3" lg="8">
            <Card className="mt-3" >
              <CardHeader className="pb-0 ">
                <Row className="justify-content-center" >
                  <h1 >Danh Sách Nhân Viên</h1>
                </Row>
              </CardHeader  >
              <Table className="table table-responsive-xl  table-striped border-black table-bordered" >
                <thead>
                  <tr>
                    <th>Tên Nhân Viên</th>
                    <th>Số Điện Thoại</th>
                    <th>Bộ Phận</th>
                    <th>Chi Tiết</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hoàng Bảo Vy</td>
                    <td>0936789499</td>
                    <td>Tư Vấn Viên</td>
                    <td>
                      <button type="button" className="btn btn-brand btn-dribbble" onClick={this.toggleLarge}>Xem Chi Tiết</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Hoàng Bảo Vy</td>
                    <td>0936789499</td>
                    <td>Tư Vấn Viên</td>
                    <td>
                      <button type="button" className="btn btn-brand btn-dribbble" onClick={this.toggleLarge}>Xem Chi Tiết</button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
        <Modal isOpen={this.state.large} toggle={this.toggleLarge} className={"modal-lg " + this.props.className}>
          <ModalHeader toggle={this.toggleLarge}>Thông Tin Chi Tiết</ModalHeader>
          <ModalBody>
            <Container>
              <Row>
                <Col xs='6'>
                  <Card>
                    <CardHeader>
                      <strong>Hoàng Bảo Vy</strong>
                    </CardHeader>
                    <CardBody>
                      <FormGroup>
                        <Label htmlFor="street">Lương Cố Định</Label>
                        <Input type="text" id="street" placeholder="5.000.000đ" />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="vat">Thưởng Phục Vụ</Label>
                        <Input type="text" id="vat" />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="company">Hoa Hồng</Label>
                        <Input type="text" id="company" />
                      </FormGroup>
                      <FormGroup>                          
                            <Label htmlFor="city">Ngày Làm Việc</Label>
                            <Input type="text" id="city" />                          
                      </FormGroup>
                      <FormGroup>
                        <button type="button" className="btn btn-primary">Xác Nhận</button>
                      </FormGroup>
                    </CardBody>
                  </Card>
                </Col >
                <Col xs='6'>
                  < Table className="table table-responsive-xl  table-striped border-black table-bordered" >
                    <thead>
                      <tr>
                        <th>Lương Tháng</th>
                        <th>Thưởng</th>
                        <th>Hoa Hồng</th>
                        <th>Tổng Lương</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>5.000.000đ</td>
                        <td>1.000.000đ</td>
                        <td>2.000.000đ</td>
                        <td>8.000.000đ</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col >
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>

    );
  }
}

export default Employee;

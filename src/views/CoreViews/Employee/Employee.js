import React, { Component } from 'react';
import { Button, Card, Container, CardBody, CardHeader, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
class Employee extends Component {
  render() {
    return (
      <div className="animated fadeIn">
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
      </div>

    );
  }
}

export default Employee;

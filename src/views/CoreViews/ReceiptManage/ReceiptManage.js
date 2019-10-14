import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Table, CardFooter, Label, FormGroup, Badge, FormText, CardHeader, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';



export default class ReceiptManage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
            <Row>
              <Col xs="3">
                <label><b>Khách Hàng</b></label>
                <Input type="text" id="text-input" name="text-input" />
              </Col>
              <Col xs="3">
                <label><b>Người Lập</b></label>
                <Input type="text" id="text-input" name="text-input" />
              </Col>
              <Col xs="3">
                <label><b>Trạng Thái</b></label>
                <Input type="text" id="text-input" name="text-input" />
              </Col>
              <Col xs="3">
              <label></label>
              <Button className="mt-3" type="submit" size="lg" color="primary" style={{float:"right"}}>Tìm Kiếm</Button>
              </Col>
            </Row>
            <Card className="mt-2">
              <CardBody>
            <Table className="table table-responsive-xl table-bordered " >
                    <thead>
                      <tr>
                        <th style={{width:"25%"}}>Khách Hàng</th>
                        <th style={{width:"25%"}}>Người Tạo</th>
                        <th style={{width:"15%"}}>Ngày Lập</th>
                        <th style={{width:"10%"}}>Số Tiền</th>
                        <th style={{width:"15%"}}>Còn Nợ</th>
                        <th style={{width:"10%"}}>Trạng Thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Hoàng Thái Trinh</td>
                        <td>Nguyễn Thị Lan</td>
                        <td>14/10/2019</td>
                        <td style={{color:"red"}}>350.000đ</td>
                        <td style={{color:"red"}}>0đ</td>
                        <td><Badge color="success">Hoàn Thành</Badge></td>
                      </tr>
                      <tr>
                        <td>Nguyễn Thị Trúc Mai</td>
                        <td>Nguyễn Thị Lan</td>
                        <td>14/10/2019</td>
                        <td style={{color:"red"}}>1.350.000đ</td>
                        <td style={{color:"red"}}>500.000đ</td>
                        <td><Badge color="warning">Chưa Hoàn Thành</Badge></td>
                      </tr>
                    </tbody>
                  </Table>
                  </CardBody>
                  </Card>
          </Form>
        </Container>
      </div>
    );
  }
}



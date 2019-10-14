import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Table, CardFooter, Label, FormGroup, Badge, FormText, CardHeader, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import listGuest from '../../../Images/AdminLogin.jpg'
import Hinh1 from '../../../Images/tanmobung.jpg'
import Hinh2 from '../../../Images/trimunlung.jpg'
import Hinh3 from '../../../Images/tanbody.jpeg'


export default class Services extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="4">
              <Card className="mt-2">
                <CardHeader>
                  <strong>Thêm Liệu Trình</strong>
                </CardHeader>
                <CardBody>
                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <FormGroup row>
                      <Col md="3">
                        <Label>Tên</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="email-input">Dịch Vụ</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="select" id="select">
                          <option value="0">Tan Mỡ Bụng RF</option>
                          <option value="1">Tan Body</option>
                          <option value="2">Trị Mụn Lưng</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="email-input">Dịch Vụ</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="select" id="select">
                          <option value="0">Tan Mỡ Bụng RF</option>
                          <option value="1">Tan Body</option>
                          <option value="2">Trị Mụn Lưng</option>
                        </Input>
                      </Col>
                      <Col xs="7"></Col>
                      <Col xs="5"><a href="url">Thêm Dịch Vụ</a></Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Giá</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="email-input">Mô Tả</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="textarea" id="email-input" name="email-input" />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="file-multiple-input">Chọn Hình</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="file-multiple-input" name="file-multiple-input" multiple />
                      </Col>
                    </FormGroup>
                    <FormGroup row hidden>
                      <Col md="3">
                        <Label className="custom-file" htmlFor="custom-file-input">Chọn Hình</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Label className="custom-file">
                          <Input className="custom-file" type="file" id="custom-file-input" name="file-input" />
                          <span className="custom-file-control"></span>
                        </Label>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button style={{float:"right"}} type="submit" size="lg" color="primary">Thêm</Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xs="8">
              <Card className="mt-2">
                <CardHeader>
                  <strong>Danh Sách Dịch Vụ</strong>
                </CardHeader>
                <CardBody>
                  <Table className="table table-responsive-xl  table-striped border-black table-bordered" >
                    <thead>
                      <tr>
                        <th></th>
                        <th style={{ width: "25%" }}>Tên Dịch Vụ</th>
                        <th style={{ width: "15%" }}>Giá</th>
                        <th style={{ width: "20%" }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><img style={{ width: "80%" }} src={Hinh1}></img></td>
                        <td>Tan Mỡ Bụng RF</td>
                        <td style={{ color: "red" }}>350.000đ</td>
                        <td>
                          <button type="button" className="btn btn-primary mr-1" onClick={this.toggleLarge}>Sửa</button>
                          <button type="button" className="btn btn-danger" onClick={this.toggleLarge}>Xóa</button>
                        </td>
                      </tr>
                      <tr>
                        <td><img style={{ width: "80%" }} src={Hinh3}></img></td>
                        <td>Tan Body RF</td>
                        <td style={{ color: "red" }}>450.000đ</td>
                        <td >
                          <button type="button" className="btn btn-primary mr-1" onClick={this.toggleLarge}>Sửa</button>
                          <button type="button" className="btn btn-danger" onClick={this.toggleLarge}>Xóa</button>
                        </td>
                      </tr>
                      <tr>
                        <td><img style={{ width: "80%" }} src={Hinh2}></img></td>
                        <td>Trị Mụn Lưng</td>
                        <td style={{ color: "red" }}>200.000đ</td>
                        <td >
                          <button type="button" className="btn btn-primary mr-1" onClick={this.toggleLarge}>Sửa</button>
                          <button type="button" className="btn btn-danger" onClick={this.toggleLarge}>Xóa</button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <button style={{ float: "right" }} type="button" className="btn btn-primary" onClick={this.toggleLarge}>Thêm Dịch Vụ</button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



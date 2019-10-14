import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Table, CardFooter, Label, FormGroup, Badge, FormText, CardHeader, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import listGuest from '../../../Images/AdminLogin.jpg'
import MatNa from '../../../Images/MatNa.png'
import Muoi from '../../../Images/Muoi.png'
import TamTrang from '../../../Images/TamTrang.jpg'


export default class Product extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="4">
              <Card className="mt-2">
                <CardHeader>
                  <strong>Thêm Sản Phẩm </strong>
                </CardHeader>
                <CardBody>
                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="select">Danh Mục</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="select" id="select">
                          <option value="0">Sữa Tắm</option>
                          <option value="1">Kem</option>
                          <option value="1">Tinh Dầu</option>
                        </Input>
                      </Col>
                    </FormGroup>
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
                  <Button type="submit" size="lg" color="primary" style={{float:"right"}}>Thêm</Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xs="8">
              <Card className="mt-2">
                <CardHeader>
                  <strong>Danh Sách Sản Phẩm </strong>
                </CardHeader>
                <CardBody>
                  <Table className="table table-responsive-xl  table-striped border-black table-bordered" >
                    <thead>
                      <tr>
                        <th></th>
                        <th style={{width:"25%"}}>Tên Sản Phẩm</th>
                        <th style={{width:"15%"}}>Giá</th>
                        <th style={{width:"20%"}}></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><img style={{width:"80%"}} src={TamTrang}></img></td>
                        <td>Kem Tắm Trắng</td>
                        <td style={{color:"red"}}>350.000đ</td>
                        <td>
                          <button type="button" className="btn btn-primary mr-1" onClick={this.toggleLarge}>Sửa</button>
                          <button type="button" className="btn btn-danger" onClick={this.toggleLarge}>Xóa</button>
                        </td>
                      </tr>
                      <tr>
                        <td><img style={{width:"80%"}} src={Muoi}></img></td>
                        <td>Muối Epsom Trà xanh Tẩy tế bào chết</td>
                        <td style={{color:"red"}}>450.000đ</td>
                        <td >
                          <button type="button" className="btn btn-primary mr-1" onClick={this.toggleLarge}>Sửa</button>
                          <button type="button" className="btn btn-danger" onClick={this.toggleLarge}>Xóa</button>
                        </td>
                      </tr>
                      <tr>
                        <td><img style={{width:"80%"}} src={MatNa}></img></td>
                        <td>Mặt nạ thanh tẩy, trắng da gel CO2 Dr.Select</td>
                        <td style={{color:"red"}}>200.000đ</td>
                        <td >
                          <button type="button" className="btn btn-primary mr-1" onClick={this.toggleLarge}>Sửa</button>
                          <button type="button" className="btn btn-danger" onClick={this.toggleLarge}>Xóa</button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



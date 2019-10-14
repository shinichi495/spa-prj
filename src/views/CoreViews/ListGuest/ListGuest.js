import React, { Component } from 'react';
import { Button, Card, Container, CardBody, CardHeader, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import listGuest from '../../../Images/Hinh1.jpg'
const styles = {
  backgroundImage: {
    backgroundImage: `url(${listGuest})`,
    height: "100%",
    backgroundPosition: "center",


  },
  color: {
    color: "#e5101d",
    fontWeight: "500",
    fontSize: "1rem",
  },
  border: {
    borderRight: ".05rem dotted black"
  },
  Total: {
    color: "#e5101d",
    fontWeight: "500",
    fontSize: "1rem",
    float: "right"
  },
  Position: {
    display: "flex",
    justifyContent: "center"
  },
  Position1: {
    display: "flex",
    alignTtems: "center",
    alignContent: "center",
    justifyContent: "flex-end",
    flexGrow: "1"
  }
}
class ListGuest extends Component {
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
      <div className="animated fadeIn" style={styles.backgroundImage} >
        <Row className="justify-content-center" >
          <Col xs="12" sm="3" lg="8">
            <Card className=" bg-white mt-3">
              <CardHeader className="pb-0 ">
                <Row className="justify-content-center" >
                  <h1 >Danh Sách Khách Hàng</h1>
                </Row>
              </CardHeader  >
              <CardBody className="pb-0">
                <Table className="table table-responsive-xl  table-striped border-black table-bordered" >
                  <thead>
                    <tr>
                      <th>Tên Khách Hàng</th>
                      <th>Số Điện Thoại</th>
                      <th style={{ width: "25%" }}>Thông Tin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hoàng Bảo Vy</td>
                      <td>0936789499</td>
                      <td>
                        <button type="button" className="btn btn-brand btn-dribbble" onClick={this.toggleLarge}>Xem Chi Tiết</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nguyễn Cát Tường</td>
                      <td>034456789</td>
                      <td >
                        <button type="button" className="btn btn-brand btn-dribbble">Xem Chi Tiết</button>
                      </td>
                    </tr>

                    <tr>
                      <td>Trần Gia Hân</td>
                      <td>0931267849</td>
                      <td>
                        <button type="button" className="btn btn-brand btn-dribbble">Xem Chi Tiết</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Lâm Khánh Chi</td>
                      <td>0383453738</td>
                      <td>
                        <button type="button" className="btn btn-brand btn-dribbble">Xem Chi Tiết</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Phạm Ngọc Phương Thư</td>
                      <td>03794755555</td>
                      <td>
                        <button type="button" className="btn btn-brand btn-dribbble">Xem Chi Tiết</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Phạm Ngọc Phương Thư</td>
                      <td>03794755555</td>
                      <td>
                        <button type="button" className="btn btn-brand btn-dribbble">Xem Chi Tiết</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Phạm Ngọc Phương Thư</td>
                      <td>03794755555</td>
                      <td>
                        <button type="button" className="btn btn-brand btn-dribbble">Xem Chi Tiết</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Phạm Ngọc Phương Thư</td>
                      <td>03794755555</td>
                      <td>
                        <button type="button" className="btn btn-brand btn-dribbble">Xem Chi Tiết</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Phạm Ngọc Phương Thư</td>
                      <td>03794755555</td>
                      <td>
                        <button type="button" className="btn btn-brand btn-dribbble">Xem Chi Tiết</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Phạm Ngọc Phương Thư</td>
                      <td>03794755555</td>
                      <td>
                        <button type="button" className="btn btn-brand btn-dribbble">Xem Chi Tiết</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Phạm Ngọc Phương Thư</td>
                      <td>03794755555</td>
                      <td>
                      <button type="button" className="btn btn-brand btn-dribbble">
                    <i class="fa fa-female"></i><span>Chi Tiết</span>
                  </button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal isOpen={this.state.large} toggle={this.toggleLarge} className={"modal-lg " + this.props.className}>
          <ModalHeader toggle={this.toggleLarge}>Hoàng Bảo Vy</ModalHeader>
          <ModalBody>
            {/* <Alert className="my-2" color="primary">
              <Row style={styles.Position}>
              <Col xs="8">
                <h5 className="text-muted">Tan mỡ bụng Rf</h5>
                </Col>
                <Col xs="4" style={styles.cost}>
                <p className="lead" style={styles.color}>3.400.000đ</p>
                </Col>
              </Row>
            </Alert>
            <Alert className="my-2">
              <Row>
              <Col xs="8"  >
                <h5 className="text-muted">Trị mụn lưng Cryocell</h5>
                </Col>
                <Col xs="4" style={styles.cost} >
                <p className="lead" style={styles.color}>3.400.000đ</p>
                </Col>
              </Row>
            </Alert> */}
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Sản Phẩm & Dịch Vụ</th>
                  <th scope="col" >Số Lượng</th>
                  <th scope="col" className="pl-4" >Nhân Viên</th>
                  <th scope="col">Thành Tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trị mụn lưng Cryocell</td>
                  <td style={styles.color} className="pl-4">1</td>
                  <td >Nguyễn Thị Liễu</td>
                  <td style={styles.color}>700.000đ</td>

                </tr>
                <tr>
                  <td>Liệu trình massage Body bằng tinh dầu thiên nhiên</td>
                  <td style={styles.color} className="pl-4" >1</td>
                  <td>Nguyễn Thị Liễu</td>
                  <td style={styles.color}>399.000đ</td>

                </tr>
              </tbody>
            </table>

          </ModalBody>
          <ModalFooter>
            <Container>
              <Row >
                <Col xs="4" className=""  >
                  <h5 style={{ color: "#20a8d8" }}>Tổng Tiền</h5>
                </Col>
                <Col xs="8">
                  <p className="lead" style={styles.Total}>1.099.000đ</p>
                </Col>
              </Row>
              <Row>
                <Col xs="4" className=""  >
                  <h5>Trả Trước</h5>
                </Col>
                <Col xs="8">
                  <p className="lead" style={styles.Total}>400.000đ</p>
                </Col>
              </Row>
              <Row>
                <Col xs="4" className=""  >
                  <h5>Còn Lại</h5>
                </Col>
                <Col xs="8">
                  <p className="lead" style={styles.Total}>3.400.000đ</p>
                </Col>
              </Row>
              <Row>
                <Col xs="9" className=""  >
                  <button type="button" className="btn btn-brand btn-reddit">
                    <i class="fa fa-trash"></i><span>Huy</span>
                  </button>
                </Col>
                <Col xs="3" className=""  >
                  <button type="button" className="btn btn-brand btn-dropbox" style={{float:"right"}}>
                    <i class="fa fa-print"></i><span>In Hóa Đơn</span>
                  </button>
                </Col>
              </Row>
            </Container>
          </ModalFooter>
        </Modal>
      </div>

    );
  }
}

export default ListGuest;

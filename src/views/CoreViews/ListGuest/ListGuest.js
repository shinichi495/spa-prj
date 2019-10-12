import React, { Component } from 'react';
import { Badge,Container, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import listGuest from '../../../Images/listGuest.jpg'
const styles ={
  backgroundImage: {
    backgroundImage:`url(${listGuest})`,
    height: "100%",
    backgroundPosition: "center",
 
 
  }}
class ListGuest extends Component {
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
                    <th>Thông Tin Khách Hàng</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Hoàng Bảo Vy</td>
                    <td>0936789499</td>                  
                    <td style={{width:"25%"}}>                                           
                        <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>                                    
                    </td>
                  </tr>
                  <tr>
                    <td>Nguyễn Cát Tường</td>
                    <td>034456789</td>                
                    <td >
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  
                  <tr>
                    <td>Trần Gia Hân</td>
                    <td>0931267849</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  <tr>
                    <td>Lâm Khánh Chi</td>
                    <td>0383453738</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  <tr>
                    <td>Phạm Ngọc Phương Thư</td>
                    <td>03794755555</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  <tr>
                    <td>Phạm Ngọc Phương Thư</td>
                    <td>03794755555</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  <tr>
                    <td>Phạm Ngọc Phương Thư</td>
                    <td>03794755555</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  <tr>
                    <td>Phạm Ngọc Phương Thư</td>
                    <td>03794755555</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  <tr>
                    <td>Phạm Ngọc Phương Thư</td>
                    <td>03794755555</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  <tr>
                    <td>Phạm Ngọc Phương Thư</td>
                    <td>03794755555</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  <tr>
                    <td>Phạm Ngọc Phương Thư</td>
                    <td>03794755555</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  <tr>
                    <td>Phạm Ngọc Phương Thư</td>
                    <td>03794755555</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  <tr>
                    <td>Phạm Ngọc Phương Thư</td>
                    <td>03794755555</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  <tr>
                    <td>Phạm Ngọc Phương Thư</td>
                    <td>03794755555</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  <tr>
                    <td>Phạm Ngọc Phương Thư</td>
                    <td>03794755555</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  <tr>
                    <td>Phạm Ngọc Phương Thư</td>
                    <td>03794755555</td>
                    <td>
                    <button type="button" class="btn btn-brand btn-dribbble ml-4">Xem Chi Tiết</button>   
                    </td>
                  </tr>
                  </tbody>
                </Table>
                </CardBody>
                </Card>
          </Col>
        </Row>  
          
      </div>

    );
  }
}

export default ListGuest;

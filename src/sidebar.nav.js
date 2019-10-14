const letan = {
    items: [
        {
            name: 'Thêm Khách Hàng',
            url: '/addGuest',
            icon: 'icon-star',
        },
        {
            name: 'List Khách Hàng',
            url: '/listGuest',
            icon: 'icon-star',
        }
    ]
}
const admin = {
    items : [
        {
            name: 'Quản Lí Nhân Viên',
            url: '/base/Employee',
            icon: 'icon-puzzle',
        },
        {
            name: 'Thêm Sản Phẩm',
            url: '/Product',
            icon: 'icon-puzzle',
        },
        {
            name: 'Thêm Liệu Trình',
            url: '/Services',
            icon: 'icon-puzzle',
        },
        {
            name: 'Quản Lý Hóa Đơn',
            url: '/ReceiptManage',
            icon: 'icon-puzzle',
        }              
    ]
}
const nav = {
    letan : letan,
    admin : admin
}
export default nav
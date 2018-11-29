var initialState = [
    {
        id: 1,
        img:'https://www.euronics.ee/UserFiles/Products/Images/158907-iphone-7-plus-red.png',
        name: 'Iphone 7 Plus',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        img: 'https://cdn.dwidigitalcameras.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s9-g960fd-dual-sim-4g-64gb-rhceux.jpg',
        name: 'Samsung Galaxy s9',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        img: 'https://image2.geekbuying.com/ggo_pic/2018-07-16/OPPO-Find-X-6-42-Inch-8GB-128GB-Smartphone-Blue-688447-.jpg',
        name: 'Oppo Find X',
        description: 'Sản phẩm do Oppo sản xuất',
        price: 600,
        inventory: 5,
        rating: 5
    }
];

const products =(state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    } 
}

export default products;
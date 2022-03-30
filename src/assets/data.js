
const productData = 
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    products: [
        {
            productType: 'Type1',
            productName: "Name1",
            productModel: "123",
            productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec viverra dui. Nunc vel imperdiet ex. Quisque ut dapibus massa. Pellentesque sollicitudin ipsum et elit iaculis, ultricies egestas quam gravida. Sed quis enim leo. Aliquam iaculis sollicitudin ipsum, ut vestibulum arcu tristique id. Praesent pretium eros leo.",
            productImage: [
                "https://via.placeholder.com/700x700/00ffFF/808080?text=product+photo1",
                "https://via.placeholder.com/700x700/ff00FF/808080?text=product+photo2",
                "https://via.placeholder.com/700x700/000000/808080?text=product+photo3",
                "https://via.placeholder.com/700x700/00aabb/808080?text=product+photo4",
                "https://via.placeholder.com/700x700/ffaabb/808080?text=product+photo5",
                "https://via.placeholder.com/700x700/00ffbb/808080?text=product+photo6",
                "https://via.placeholder.com/700x700/00aaff/808080?text=product+photo7",
                "https://via.placeholder.com/700x700/00dddd/808080?text=product+photo8",
                "https://via.placeholder.com/700x700/00bbbb/808080?text=product+photo9"
            ]
        },
        {
            productType: 'Type2',
            productName: "Name2",
            productModel: "456",
            productDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut dapibus massa. Pellentesque sollicitudin ipsum et elit iaculis, ultricies egestas quam gravida. Sed quis enim leo. Aliquam iaculis sollicitudin ipsum, ut vestibulum arcu tristique id. Praesent pretium eros leo.",
            productImage: [
                "https://via.placeholder.com/700x700/0000FF/808080?text=product+photo10",
                "https://via.placeholder.com/700x700/bbbbbb/808080?text=product+photo11"
            ]
        },
        {
            productType: 'Type3',
            productName: "Name3",
            productModel: "678",
            productDesc: "In nec viverra dui. Nunc vel imperdiet ex. Quisque ut dapibus massa. Pellentesque sollicitudin ipsum et elit iaculis, ultricies egestas quam gravida. Sed quis enim leo. Aliquam iaculis sollicitudin ipsum, ut vestibulum arcu tristique id. Praesent pretium eros leo.",
            productImage: [
                "https://via.placeholder.com/700x700/123456/808080?text=product+photo12",
                "https://via.placeholder.com/700x700/8943df/808080?text=product+photo13",
                "https://via.placeholder.com/700x700/ccddee/808080?text=product+photo14",
                "https://via.placeholder.com/700x700/ff0011/808080?text=product+photo15",
                "https://via.placeholder.com/700x700/098765/808080?text=product+photo16",
                "https://via.placeholder.com/700x700/121212/808080?text=product+photo17"
            ]
        }
    ]
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  

  export default productData
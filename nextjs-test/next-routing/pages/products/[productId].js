//dynamic routes
import { useRouter } from "next/router";

const ProductDetail = () => {
	//accessing id in route (http://localhost:3000/products/2)that can be used in fetching data from api
	const router = useRouter();
	const productId = router.query.productId;
  return <h1>Details about product {productId}</h1>;
};

export default ProductDetail;

//if 2.js file exists, it will render that contents instead of this file contents
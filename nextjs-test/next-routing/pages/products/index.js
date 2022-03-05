import Link from "next/link";

const ProductList = () => {
  return (
		<>
		<h2>
		<Link href = '/'>
			<a>Home</a>
		</Link>
		<br/>
		<Link href = '/products/1'>
			<a> Product1</a>
		</Link>
		

		<Link href = '/products/2'>
			<a> Product2</a>
		</Link>
		<Link href = '/products/3'>
			<a> Product3</a>
		</Link>
		</h2>
		</>
	)
};

export default ProductList;
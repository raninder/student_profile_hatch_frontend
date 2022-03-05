// import Link from "next/link";

// const Home = () => {
//   return (
//     <>
//     <h1> Home Page</h1>
//     <h3>
//   <Link href='\blog'>
//     <a>Blog</a>
//   </Link>
//   &emsp;  &emsp;
//   <Link href='\products'>
//   <a>Products</a>
// </Link>
// </h3>
//   </>
//   );
// };

// export default Home;

import Head from 'next/head'
import SimpleLayout from '../components/layout/simple'

export default function Home(initialData) {
  return (
    <SimpleLayout>
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Subscribe to GyanBlog</h1>
          <p className="lead text-muted">
            Learn and Share
          </p>
        </div>
      </section>

      <div className="row">
        <h1>Hey People</h1>
        <p>
          For understanding of this project, see: 
        </p>
      </div>
    </SimpleLayout>
  )
}
import "../App.css";
import Header from "../components/Header";
import Layout from "../Components/Layout";
import BookList from "../Components/BookList";


function Home() {
  return (
    <>
      <Header /> 
      <Layout>
     
        <BookList />
      </Layout>
    </>
  );
}

export default Home;

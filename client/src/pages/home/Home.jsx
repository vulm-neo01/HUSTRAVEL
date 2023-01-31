import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Tìm kiếm bằng thể loại</h1>
        <PropertyList />
        <h1 className="homeTitle">Những chỗ nghỉ được yêu thích</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home
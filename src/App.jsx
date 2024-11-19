import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Usercard from "./components/UserCard/UserCard.jsx";
import imgJoao from "./assets/joao.jpg"
import imgMaria from "./assets/maria.jpg"
import Post from "./components/Post/Post.jsx";


function App() {
    return (
    <>
      <Header />
      <Post />
      <Usercard avatar = {imgMaria} nome = "Maria" idade ={25}  />
      <Usercard avatar = {imgJoao} nome = "João" idade = {30} ocup = "Afastado "/>
      <Footer />
    </>
  );
}
export default App;

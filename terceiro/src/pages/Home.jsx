import Button from "react-bootstrap/Button";
import MyCard from "../components/MyCard";

const Home = () => {

  return (
    <div>
      <h1>Home</h1>
      <Button variant="primary" size="lg">CADASTRAR</Button>
      <Button variant="outline-success">Success</Button>
      <MyCard 
        titulo="G.O.A.T" 
        img="https://upload.wikimedia.org/wikipedia/commons/3/35/Juice_WRLD_-_Les_Ardentes_2019_%28cropped%29.jpg" 
        desc="O melhor"
      />
    </div>
  );
};

export default Home;

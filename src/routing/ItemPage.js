import { useParams } from "react-router-dom";
import Card from "../components/Card";

const ItemPage = ({ item }) => {
  const { id } = useParams();
  const nb = parseInt(id);

  return (
    <>
      <Card name={item[nb].name} img={item[nb].imgsrc} type={item[nb].type}/>
    </>
  );
};

export default ItemPage;

import { useParams } from "react-router-dom";

const ItemPage = ({item}) => {
  const { id } = useParams();
  const nb = parseInt(id);
  console.log(item[nb].imgsrc)

  return (
    <>
      <p>{item[nb].name}</p>
      <img src={item[nb].imgsrc}></img>
    </>
  );
};

export default ItemPage;

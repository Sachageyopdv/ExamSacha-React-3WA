import { useParams } from "react-router-dom";

const ItemPage = ({item}) => {
  const { id } = useParams();
  const nb = parseInt(id);

  return (
    <>
      <p>Instrument: {item[nb].name}</p>
    </>
  );
};

export default ItemPage;

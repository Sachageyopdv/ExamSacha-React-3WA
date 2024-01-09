import { useParams } from "react-router-dom";

const ItemPage = ({ item }) => {
  const { id } = useParams();
  const selected = item.find((item) => item.id === id);

  return (
    <>
      <p>Instrument: {selected.name}</p>
    </>
  );
};

export default ItemPage;

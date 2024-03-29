import { Link } from "react-router-dom";

const HomePage = ({data}) => {
  return (
    <>
      {data.map((item) => (
        <div className="navbar-start" key={item.id}>
          <Link className="navbar-item" to={`/${item.id}`}>
            {item.name}
          </Link>
        </div>
      ))}
    </>
  );
};

export default HomePage;

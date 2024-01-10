const Card = ({ img, name, type }) => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure>
            <img
              src={img}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">Instrument à {type}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

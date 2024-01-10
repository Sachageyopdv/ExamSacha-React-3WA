const Card = ({ img, name, type }) => {
  return (
    <>
      <div class="card">
        <div class="card-image">
          <figure>
            <img
              src={img}
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{name}</p>
              <p class="subtitle is-6">Instrument à {type}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

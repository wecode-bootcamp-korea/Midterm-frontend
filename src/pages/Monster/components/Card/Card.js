import './Card.scss';

const Card = ({
  id,
  name,
  email,
  company,
  address,
  city,
  clickedCardId,
  setClickedCardId,
}) => {
  return (
    <div
      className={`cardBox ${clickedCardId === id ? 'active' : 'default'}`}
      onClick={() => {
        setClickedCardId(id);
      }}
    >
      <img
        className="cardImage"
        src={`https://robohash.org/${id}?set=set1&size=180x180`}
        alt="monstert"
      />
      <span className="cardName">{name}</span>
      <span>{email}</span>
      {company.name ? (
        <>
          <span>{company.name}</span>
          <span>{address.city}</span>
        </>
      ) : (
        <>
          <span>{company}</span>
          <span>{city}</span>
        </>
      )}
    </div>
  );
};

export default Card;

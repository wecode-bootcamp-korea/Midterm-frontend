import styled from "styled-components";
import "./Card.scss";

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
    <CardColor
      condition={clickedCardId === id}
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
    </CardColor>
  );
};

export default Card;

const CardColor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border: ${(props) =>
    props.condition ? props.theme.active : props.theme.default};
  .img {
    margin-bottom: 20px;
    border-radius: 100%;
  }

  .span {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
  }
`;

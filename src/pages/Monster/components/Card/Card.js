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
    <CardBox
      selected={clickedCardId === id}
      onClick={() => {
        setClickedCardId(id);
      }}
    >
      <img
        className="cardImage"
        src={`https://robohash.org/${id}?set=set1&size=180x180`}
        alt="monsters"
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
    </CardBox>
  );
};

export default Card;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 2px solid ${(props) => (props.selected ? "blue" : "black")};
  border-radius: 10px;
`;

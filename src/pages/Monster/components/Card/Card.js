import "./Card.scss";
import styled from "styled-components";

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
    <CardBox // 변경된 코드
      seleted={clickedCardId === id}
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
    </CardBox>
  );
};

export default Card;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 2px solid ${(props) => (props.seleted ? "coral" : "black")};
  border-radius: 10px;
`;

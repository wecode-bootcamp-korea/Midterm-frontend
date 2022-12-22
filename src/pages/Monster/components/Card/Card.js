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
    <CardBox
      selected={clickedCardId === id}
      onClick={() => {
        setClickedCardId(id);
      }}
    >
      <CardImage
        src={`https://robohash.org/${id}?set=set1&size=180x180`}
        alt="monstert"
      />
      <CardName>{name}</CardName>
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
  border-radius: 10px;
  border: 2px solid ${(props) => (props.selected ? "coral" : "black")};
`;

const CardImage = styled.img`
  margin-bottom: 20px;
  border-radius: 100%;
`;

const CardName = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
`;

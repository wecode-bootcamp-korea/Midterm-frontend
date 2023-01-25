import { click } from "@testing-library/user-event/dist/click";
import * as C from "./Card.styles";

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
    <C.CardBox
      isActive={clickedCardId === id}
      onClick={() => {
        setClickedCardId(id);
      }}
    >
      <C.CardImage
        className="cardImage"
        src={`https://robohash.org/${id}?set=set1&size=180x180`}
        alt="monstert"
      />
      <C.CardName className="cardName">{name}</C.CardName>
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
    </C.CardBox>
  );
};

export default Card;

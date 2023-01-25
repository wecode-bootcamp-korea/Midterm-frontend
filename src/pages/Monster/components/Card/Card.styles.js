import styled from "styled-components";

export const CardBox = styled.div`
  ${(props) => props.theme.variables.flex("column", "", "center")};
  border: ${(props) =>
    props.isActive ? "2px solid coral" : "2px solid black"};
  padding: 10px;
  border-radius: 10px;
`;

export const CardImage = styled.img`
  margin-bottom: 20px;
  border-radius: 100%;
`;

export const CardName = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
`;

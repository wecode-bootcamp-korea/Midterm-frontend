import styled from "styled-components";

export const Container = styled.section`
  ${(props) => props.theme.variables.flex("column", "", "center")};
  padding: 20px;
  height: 100vh;
`;

export const Title = styled.h1`
  margin: 20px 0;
  font-size: 40px;
  font-weight: 900;
`;

export const SearchWrap = styled.div`
  display: flex;
  gap: 20px;

  .searchInput {
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 5px;
    outline: none;
  }

  .createBtn {
    padding: 5px;
    width: 100px;
    border-radius: 5px;
    background-color: skyblue;
    color: white;
    cursor: pointer;
  }
`;

export const CardWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  margin-top: 40px;
`;

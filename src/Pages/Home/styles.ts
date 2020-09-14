import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25vh;
  button {
    width: 350px;
  }

  a {
    margin-top: 25px;
  }

  span {
    width: 250px;
    text-align: center;
    margin-top: 20px;
  }
`;

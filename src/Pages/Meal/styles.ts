import styled from "styled-components";

export const Container = styled.div`
 h2 {
  margin-top: 10px;
}
`;


export const Header = styled.div`
  display: flex;
  justify-content: stretch;

  @media (max-width: 465px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

`;


export const Ingredients = styled.div`
  margin-left: 4%;

  ul{
    margin-top: 20px;
  }

  li { 
    list-style: none;
    margin-bottom: 3px;
  }

`

export const Title = styled.div`

div { 
  img {
  margin-top: 20px;
  width: 400px;
  border: 4px solid;
  border-image-source: linear-gradient(
    45deg,
    rgb(189, 147, 249),
    rgb(255, 85, 85)
  );
  border-image-slice: 1;
  object-fit: cover;

  @media (max-width: 465px) {
    width: 350px;
  }
}
}

`

export const Youtube = styled.div`
  margin-top: 20px;
  h2 {
    margin-bottom: 20px;
  }

  iframe {
    width: 400px;
    height: 315px;

    @media (max-width: 465px) {
    width: 350px;
    height: 315px;
  }
  }
`
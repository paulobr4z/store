import styled from "styled-components";

interface ButtonsProductProps{
  isTop: boolean;
  isPopular: boolean;
  isMostSold: boolean;
}

export const ButtonsProducts = styled.div(({ isTop, isPopular, isMostSold }: ButtonsProductProps) => (
  `
  margin-top: 30px;

  display: flex;
  align-items: center;

  h1{
    font-weight: 500;
    font-size: 1.2rem;
    color: #fff;
  }
  button{
    padding: 0 25px;
    height: 35px;
    margin-left: 20px;

    border-radius: 30px;
    border: 2px solid var(--dark-100);

    font-size: .80rem;
    color: #fff;

    :hover{
      transition: .2s;
      border-color: var(--purple-primary) !important;
      background-color: var(--purple-primary) !important;
    }
    :focus{
      outline: 2px solid var(--purple-primary);
      outline-offset: 2px;
    }

    :nth-of-type(1){
      border-color: ${ isTop ? "transparent" : "var(--dark-100)" };
      background-color: ${ isTop ? "var(--purple-primary)" : "transparent" };
    }
    :nth-of-type(2){
      border-color: ${ isPopular ? "transparent" : "var(--dark-100)" };
      background-color: ${ isPopular ? "var(--purple-primary)" : "transparent" };
    }
    :nth-of-type(3){
      border-color: ${ isMostSold ? "transparent" : "var(--dark-100)" };
      background-color: ${ isMostSold ? "var(--purple-primary)" : "transparent" };
    }
  }
`
));
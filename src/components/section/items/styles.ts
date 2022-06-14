import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

export const Item = styled.div`
  width: 100%;
  max-width: 240px;
  height: 280px;
  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: .2s;

  border-radius: 5px;
  background-color: var(--dark-300);

  img{
    width: 100%;
    max-width: 130px;
  }
  button{
    padding: 5px;
    margin-top: 10px;
 
    color: #fff;
    font-size: .70rem;
    text-transform: uppercase;
    
    display: flex;
    align-items: center;

    border-radius: 5px;

    :focus{
      outline: 2px solid var(--purple-primary);
    }
  }
  :hover{
    transform: scale(1.05);
  }
`;

export const InfoProduct = styled.div`
  text-align: center;

  h1{
    font-weight: 500;
    font-size: .80rem;
    color: #fff;
  }
  h2{
    margin-top: 10px;

    font-size: .80rem;
    color: var(--dark-100);
  }
  h3{
    margin-top: 10px;

    font-size: .90rem;
    font-weight: 500;
    color: var(--purple-primary);
  }
`;
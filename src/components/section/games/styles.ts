import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;

  > h1{
    font-weight: 500;
    font-size: 1.2rem;
    color: #fff;
  }
`;

export const ListGames = styled.div`
  margin-top: 20px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

export const Game = styled.div`
  width: 100%;
  max-width: 240px;

  border-radius: 5px;
  background-color: var(--dark-300);

  transition: .2s;

  img{
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  a{
    position: relative;

    span{
      padding: 5px;

      position: absolute;
      top: 10px;
      left: 10px;

      border-radius: 5px;
      background-color: var(--purple-primary);

      font-weight: 500;
      font-size: .70rem;
      color: #fff;
    }
  }
  :hover{
    transform: scale(1.05);
  }
`;

export const InfoGame = styled.div`
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`

  h1{
    font-weight: 500;
    font-size: .90rem;
    color: #fff;
  }
  h2{
    font-size: .80rem;
    color: var(--dark-100);
  }
`;
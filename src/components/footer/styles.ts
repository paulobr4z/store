import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 50px;
  padding: 0 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--dark-300);
`;

export const Logo = styled.div`
  img{
    width: 100%;
    max-width: 80px;
  }
`;

export const Title = styled.h1`
  font-size: .80rem;
  color: var(--dark-100);
`;

export const Social = styled.div`
  display: flex;
  align-items: center;

  a{
    width: 50px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
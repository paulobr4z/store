import styled from "styled-components";

export const Header = styled.div`
  width: calc(100% - 250px);
  height: 70px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;

  background-color: var(--dark-400);
`;

export const SearchBox = styled.div`
  width: 100%;
  max-width: 300px;
  height: 30px;

  position: relative;

  display: flex;
  align-items: center;

  border-radius: 5px;
  background-color: var(--dark-200);

  input{
    width: 100%; 
    height: 100%;
    padding: 0 10px 0 30px;

    outline: none;

    background-color: transparent;

    color: #fff;
    font-size: .80rem;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const UserBox = styled.div`
  button{
    display: flex;
    align-items: center;

    font-size: .80rem;
    color: var(--dark-100);
  }
`;

export const NotifyCart = styled.div`
  margin-left: 15px;

  display: flex;
  align-items: center;

  button{
    width: 30px;
    height: 30px;
    margin-right: 10px;

    position: relative;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;

    span{
      min-width: 15px;
      height: 15px;
      padding: 0 2px;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: -5px;
      right: -5px;

      border-radius: 50%;
      background-color: var(--purple-primary);

      font-size: .70rem;
      color: #fff;
    }
  }
`;

export const HeaderPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    font-size: 1.1;
    font-weight: 500;
    color: #fff;
  }
`;

export const BoxNotification = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  h1{
    text-align: center;

    font-weight: 500;
    font-size: .90rem;
    color: var(--dark-100);
  }
`;

export const ListItems = styled.div`
  width: 100%;

  > button{
    width: 100%;
    height: 40px;
    margin-top: 15px;

    border-radius: 5px;
    background-color: var(--purple-primary);

    color: #fff;
    font-size: .90rem;

    :focus{
      outline: 2px solid var(--purple-primary);
      outline-offset: 2px;
    }
  }
`;

export const Item = styled.div`
  a{
    width: 100%;
    height: 85px;
    margin-top: 20px;
    padding: 10px;

    display: flex;
    align-items: flex-start;

    border-radius: 5px;
    background-color: var(--dark-200);

    img{
      height: 100%;
      border-radius: 5px;
    }

    :focus{
      outline: 2px solid var(--purple-primary);
      outline-offset: 2px;
    }
  }
`;

export const InfoItem = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 10px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  p{
    font-size: .70rem;
    color: #fff;
  }
`;

export const ButtonsItem = styled.div`
  flex: 1;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  button{
    margin: 0;
  }
  p{
    text-decoration: underline;
    font-size: .70rem;
    color: #fff;
  }
`;

export const NameItem = styled.div`
  h1, h2, h3{
    width: 100%;
    max-width: 200px;
  }
  h1{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: .80rem;
    color: #fff;
  }
  h2{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: .70rem;
    color: var(--dark-100);
  }
  h3{
    margin-top: 5px;

    font-size: .80rem;
    color: #fff;
  }
`;
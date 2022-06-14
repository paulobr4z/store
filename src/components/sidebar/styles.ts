import styled from "styled-components";

interface ListCategoryProps {
  done: boolean;
}

export const Sidebar = styled.div`
  width: 250px;
  height: 100%;
  padding: 20px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  overflow-y: auto;

  background-color: var(--dark-500);

  ::-webkit-scrollbar{
    width: 5px;
  }
  ::-webkit-scrollbar-thumb{
    width: 5px;
    background-color: var(--dark-300);
  }
`;

export const Logo = styled.div`
  width: 100%;
  max-width: 85px;
  margin: 0 auto;

  img{
    width: 100%;
  }
`;

export const ButtonCatalog = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  
  button{
    flex: 1;
    height: 40px;
    
    border: 2px solid transparent;
    border-radius: 5px;
    background-color: var(--purple-primary);
    
    transition: .2s;

    color: #fff;
    font-size: .90rem;

    :hover{
      background-color: var(--purple-secundary);
    }
    :focus{
      outline: 2px solid var(--purple-primary);
      outline-offset: 2px;
    }
  }
`;

export const LinksBox = styled.div`
  width: 100%;

  h1{
    text-transform: uppercase;
    font-size: .70rem;
    color: #fff;
  }
  a{
    flex: 1;
    height: 40px;
  
    display: flex;
    align-items: center;
  
    outline: none;

    border: 2px solid transparent;
    border-radius: 5px;
    color: var(--dark-100);

    transition: .2s;
  
    :first-of-type{
      margin-top: 5px;
    }
    :hover{
      padding: 0 10px;
      background-color: var(--dark-400);
    }
    :focus{
      padding: 0 10px;
      border-color: var(--dark-100);
    }
  }
`;

export const Menu = styled.div`
  margin-top: 30px; 
`;

export const Title = styled.div`
  margin-left: 10px;

  font-weight: 500;
  font-size: .90rem;
`;

export const ListCategory = styled.div(({ done }: ListCategoryProps) => (
`
  height: ${ done ? "100%" : "0"};
  
  overflow: ${ done ? "auto" : "hidden" };
  transition: .2s;
`
));

export const Category = styled.div`
  margin-top: 10px;

  button{
    width: 100%;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;
    font-size: .70rem;
    color: #fff;

    transition: .2s;
    border-radius: 5px;

    span{
      width: 20px;
      height: 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 3px;
      background-color: var(--dark-300);
    }
    :focus{
      padding: 0 10px;
      outline: 2px solid var(--dark-100);
    }
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;

  a{
    display: flex;
    align-items: center;
    justify-content: center; 

    :hover{
      padding: 0;
    }
  }
`;
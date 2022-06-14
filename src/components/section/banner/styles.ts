import styled from "styled-components";

import banner from '../../../assets/banner-razer.png';

export const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 350px;

  border-radius: 5px;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;

  button{
    padding: 0 10px;
    height: 35px;

    border-radius: 5px;
    background-color: var(--purple-primary);

    position: relative;
    top: 70%;
    left: 35%;

    color: #fff;
    font-weight: 500;
  }
`;
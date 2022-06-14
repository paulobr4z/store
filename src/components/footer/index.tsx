import * as C from './styles'

import logo from '../../assets/logotipo.png';
import { GithubLogo, InstagramLogo, LinkedinLogo, TelegramLogo } from 'phosphor-react';

export default () => {
  return(
    <C.Footer>
      <C.Logo>
        <a href="#">
          <img src={logo} />
        </a>
      </C.Logo>

      <C.Title>
        Todos os direitos reservados 2022&copy;
      </C.Title>

      <C.Social>
        <a href="#">
          <InstagramLogo
            color="var(--purple-primary)"
            className="w-6 h-6"
          />
        </a>

        <a href="#">
          <GithubLogo
            color="var(--purple-primary)"
            className="w-6 h-6"
          />
        </a>

        <a href="#">
          <LinkedinLogo
            color="var(--purple-primary)"
            className="w-6 h-6"
          />
        </a>

        <a href="#">
          <TelegramLogo
            color="var(--purple-primary)"
            className="w-6 h-6"
          />
        </a>
      </C.Social>
    </C.Footer>
  );
}
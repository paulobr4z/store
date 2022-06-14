import * as C from './styles';
import { PlusCircle } from 'phosphor-react';

import gtaV from '../../../assets/capa-gta.png';
import gow from '../../../assets/capa-gow.jpg';

export default () => {
  return(
    <C.Container>
      <h1>Jogos</h1>

      <C.ListGames>
        <C.Game>
          <a href="#">
            <img src={gow} />
            <span>R$499,00</span>
          </a>
            <C.InfoGame>
              <C.Info>
                <h1>God Of War 4</h1>
                <h2>PS4</h2>
              </C.Info>
              <button>
                <PlusCircle
                  color="var(--purple-primary)"
                  className="w-7 h-7"
                />
              </button>
            </C.InfoGame>
        </C.Game>

        <C.Game>
          <a href="#">
            <img src={gtaV} />
            <span>R$499,00</span>
          </a>
            <C.InfoGame>
              <C.Info>
                <h1>GTA V</h1>
                <h2>PC Game</h2>
              </C.Info>
              <button>
                <PlusCircle
                  color="var(--purple-primary)"
                  className="w-7 h-7"
                />
              </button>
            </C.InfoGame>
        </C.Game>

        <C.Game>
          <a href="#">
            <img src={gtaV} />
            <span>R$499,00</span>
          </a>
            <C.InfoGame>
              <C.Info>
                <h1>GTA V</h1>
                <h2>PC Game</h2>
              </C.Info>
              <button>
                <PlusCircle
                  color="var(--purple-primary)"
                  className="w-7 h-7"
                />
              </button>
            </C.InfoGame>
        </C.Game>

        <C.Game>
          <a href="#">
            <img src={gtaV} />
            <span>R$499,00</span>
          </a>
            <C.InfoGame>
              <C.Info>
                <h1>GTA V</h1>
                <h2>PC Game</h2>
              </C.Info>
              <button>
                <PlusCircle
                  color="var(--purple-primary)"
                  className="w-7 h-7"
                />
              </button>
            </C.InfoGame>
        </C.Game>

        <C.Game>
          <a href="#">
            <img src={gtaV} />
            <span>R$499,00</span>
          </a>
            <C.InfoGame>
              <C.Info>
                <h1>GTA V</h1>
                <h2>PC Game</h2>
              </C.Info>
              <button>
                <PlusCircle
                  color="var(--purple-primary)"
                  className="w-7 h-7"
                />
              </button>
            </C.InfoGame>
        </C.Game>
      </C.ListGames>
    </C.Container>
  );
} 
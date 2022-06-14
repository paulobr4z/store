import * as C from './styles';
import { CaretDown, 
  Gear, 
  Heart, 
  MagnifyingGlass, 
  User,
  MouseSimple,
  Headset,
  GameController,
  Keyboard,
  ComputerTower,
  FinnTheHuman,
  House,
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
  TelegramLogo
} from 'phosphor-react';

import logo from '../../assets/logotipo.png';
import { useState } from 'react';

export default () => {

  const [isCategory, setIsCategory] = useState<boolean>(true);

  const handleCadegory = () => {
    setIsCategory(!isCategory);
  }

  return(
    <C.Sidebar>
      <C.Logo>
        <a href="#">
          <img src={logo} alt="Capacete de gladiador"/>
        </a>
      </C.Logo>

      <C.ButtonCatalog>
        <button>Catálogo</button>
      </C.ButtonCatalog>

      <C.LinksBox>
        <C.Menu>
          <h1>Menu</h1>
          <a href="#">
            <House 
              weight="bold"
              color="var(--dark-100)"
              className="w-4 h-4" 
            />
            <C.Title>
              Home
            </C.Title>
          </a>
          <a href="#">
            <User 
              weight="bold"
              color="var(--dark-100)"
              className="w-4 h-4" 
            />
            <C.Title>
              Perfil
            </C.Title>
          </a>
          <a href="#">
            <MagnifyingGlass 
              weight="bold"
              color="var(--dark-100)"
              className="w-4 h-4" 
            />
            <C.Title>
              Pesquisar
            </C.Title>
          </a>
          <a href="#">
            <Heart 
              weight="bold"
              color="var(--dark-100)"
              className="w-4 h-4" 
            />
            <C.Title>
              Favoritos
            </C.Title>
          </a>
          <a href="#">
            <Gear 
              weight="bold"
              color="var(--dark-100)"
              className="w-4 h-4" 
            />
            <C.Title>
              Configurações
            </C.Title>
          </a>
        </C.Menu>

        <C.Category>
          <button onClick={handleCadegory}>
            Categorias
            <span>
              <CaretDown 
                weight="bold"
                color="var(--dark-100)"
                className={`w-4 h-4 transition-all ${ isCategory ? "rotate-180" : "rotate-0" }`} 
              />
            </span>
          </button>
          <C.ListCategory done={isCategory}>
            <a href="#">
              <MouseSimple 
                weight="bold"
                color="var(--dark-100)"
                className="w-4 h-4" 
              />
              <C.Title>
                Mouse
              </C.Title>
            </a>
            <a href="#">
              <Headset 
                weight="bold"
                color="var(--dark-100)"
                className="w-4 h-4" 
              />
              <C.Title>
                Headset
              </C.Title>
            </a>
            <a href="#">
              <GameController 
                weight="bold"
                color="var(--dark-100)"
                className="w-4 h-4" 
              />
              <C.Title>
                Controle
              </C.Title>
            </a>
            <a href="#">
              <Keyboard 
                weight="bold"
                color="var(--dark-100)"
                className="w-4 h-4" 
              />
              <C.Title>
                Teclado
              </C.Title>
            </a>
            <a href="#">
              <ComputerTower 
                weight="bold"
                color="var(--dark-100)"
                className="w-4 h-4" 
              />
              <C.Title>
                Computador
              </C.Title>
            </a>
            <a href="#">
              <FinnTheHuman 
                weight="bold"
                color="var(--dark-100)"
                className="w-4 h-4" 
              />
              <C.Title>
                Jogos
              </C.Title>
            </a>
          </C.ListCategory>
        </C.Category>

        <C.Social>
          <a href="#">
            <InstagramLogo 
              weight="bold"
              color="var(--dark-100)"
              className="w-5 h-5" 
            />
          </a>

          <a href="#">
            <GithubLogo 
              weight="bold"
              color="var(--dark-100)"
              className="w-5 h-5" 
            />
          </a>

          <a href="#">
            <LinkedinLogo 
              weight="bold"
              color="var(--dark-100)"
              className="w-5 h-5" 
            />
          </a>

          <a href="#">
            <TelegramLogo 
              weight="bold"
              color="var(--dark-100)"
              className="w-5 h-5" 
            />
          </a>
        </C.Social>
      </C.LinksBox>
    </C.Sidebar>
  );
}
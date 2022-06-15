import * as C from './styles';
import { useContext } from 'react';
import { CartContext } from '../../context/ItemsContext';
import { Popover, Transition } from '@headlessui/react';
import { IProducts } from '../../types';
import { 
  Bell, 
  Handbag, 
  MagnifyingGlass, 
  Trash, 
  User, 
  X
} from 'phosphor-react';


export default () => {
  const { cart, removeProductCart } = useContext(CartContext);
  return(
    <C.Header>
      <C.SearchBox>
        <MagnifyingGlass
          weight="bold"
          color="var(--dark-100)"
          className="w-4 h-4 absolute top-1/4 left-2" 
        />
        <input type="text" placeholder="Pesquise aqui..."/>
      </C.SearchBox>

      <C.InfoHeader>
        <C.UserBox>
          <button>
            Pedro Lucas
            <User
              weight="bold"
              color="var(--dark-100)"
              className="w-5 h-5 ml-2" 
            />
          </button>
        </C.UserBox>
        <C.NotifyCart>
          <Popover className="relative">
            <Popover.Panel
              className="w-full max-w-xs p-5 h-screen bg-[#28282a] fixed right-0 top-0 z-10"
            >
              <C.HeaderPanel>
                <h1>Notificações</h1>
                <Popover.Button 
                  className="w-4 h-4 bg-[#363638] flex items-center justify-center rounded-sm"
                >
                  <X
                    weight="bold"
                    className="w-4 h-4 text-white" 
                  />
                </Popover.Button>
              </C.HeaderPanel>

              <C.BoxNotification>
                <h1>Você não possui <br></br> nenhuma notificação</h1>
              </C.BoxNotification>

            </Popover.Panel>              

            <Popover.Button>
              <Bell 
                weight="bold"
                color="var(--dark-100)"
                className="w-5 h-5" 
              />
              <span>0</span>
            </Popover.Button>
          </Popover>

          <Popover className="relative">
            <Popover.Panel
              className="w-full max-w-sm p-4 h-full bg-[#28282a] fixed right-0 top-0 z-10 overflow-y-auto"
            >
              <C.HeaderPanel>
                <h1>Sacola de itens</h1>
                <Popover.Button 
                  className="w-4 h-4 bg-[#363638] flex items-center justify-center rounded-sm"
                >
                  <X
                    weight="bold"
                    className="w-4 h-4 text-white" 
                  />
                </Popover.Button>
              </C.HeaderPanel>

              <C.ListItems>

                {cart.map(product => (
                  <C.Item key={product.id}>
                    <a href="#">
                      <img src={product.data.image} alt="Headset razer preto"/>
                      <C.InfoItem>
                        <C.NameItem>
                          <h1>{product.data.name}</h1>
                          <h2>{product.data.category}</h2>
                          <h3>{product.data.price}</h3>
                        </C.NameItem>
                        <C.ButtonsItem>
                          <button title="Remover item" 
                            onClick={() =>removeProductCart(product.id)}
                          >
                            <Trash
                              weight="bold"
                              className="w-4 h-4 text-white" 
                            />
                          </button>
                          <p>Ver item</p>
                        </C.ButtonsItem>
                      </C.InfoItem>
                    </a>
                  </C.Item>
                ))}


                <button>Finalizar compra</button>
              </C.ListItems>
            </Popover.Panel>

            <Popover.Button>
              <Handbag 
                weight="bold"
                color="var(--dark-100)"
                className="w-5 h-5" 
              />
              <span>{cart.length}</span>
            </Popover.Button>
          </Popover>
        </C.NotifyCart>
      </C.InfoHeader>
    </C.Header>
  );
}
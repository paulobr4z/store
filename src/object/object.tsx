import headsetCorsair from '../assets/headset-corsair.png';
import headsetRazer from '../assets/headset-razer.png';
import mouseFortrek from '../assets/mouse-fortrek.png';
import mouseLogitech from '../assets/mouse-logitech.png';
import tecladoHyperx from '../assets/teclado-hyperx.png';

export const items = [{
    id: 1,
    brand: "hyperx",
    emphasis: "SOLD",
    data: {
      name: "HyperX Alloy RGB",
      image: tecladoHyperx,
      price: "R$5.499,00",
      category: "Teclado Gamer", 
    }
  },
  {
    id: 2,
    brand: "razer",
    emphasis: "POPULAR",
    data: {
      name: "Razer Kraken",
      image: headsetRazer,
      price: "R$5.499,00",
      category: "Headset Gamer", 
    }
  },
  {
    id: 3,
    brand: "logitech",
    emphasis: "SOLD",
    data: {
      name: "Logitech G903 Lightspeed",
      image: mouseLogitech,
      price: "R$5.499,00",
      category: "Mouse Gamer", 
    }
  },
  {
    id: 4,
    brand: "corsair",
    emphasis: "TOP",
    data: {
      name: "Corsair HS35 STEREO",
      image: headsetCorsair,
      price: "R$5.499,00",
      category: "Headset Gamer", 
    }
  },
  {
    id: 5,
    brand: "fortrek",
    emphasis: "SOLD",
    data: {
      name: "Fortrek Vickers",
      image: mouseFortrek,
      price: "R$5.499,00",
      category: "Mouse Gamer", 
    }
  }
]
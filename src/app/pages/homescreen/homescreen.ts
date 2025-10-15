import { Component, OnInit, OnDestroy, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Banner {
  src: string;
  alt: string;
}

interface Produto {
  imagem: string;
  nome: string;
  preco: number;
  estoque: number;
  desconto?: string;
  precoOriginal?: number;
}

interface Categoria {
  imagem: string;
  nome: string;
  link: string;
}

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.html',
  styleUrls: ['./homescreen.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class Homescreen implements OnInit, AfterViewInit, OnDestroy {
  //  CARROSSEL AUTOMÁTICO 
  currentSlide = 0;
  private slideInterval: any;
  
  banners: Banner[] = [
    { src: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/themes/toluca/2-slide-1757375772546-5821906789-a93dec1366c030e213846d844942c5c81757375935-1920-1920.webp?152329209', alt: 'Banner 1' },
    { src: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/themes/toluca/2-slide-1757375772546-5544835435-7837a6b0f5f9286cd61c8f4f9d6fcfe01757375936-1920-1920.webp?152329209', alt: 'Banner 2' }
  ];

  //  DADOS DOS PRODUTOS 
  produtosDestaques: Produto[] = [
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/17-9bed0e03340f8043e617578967007693-240-0.webp', 
      nome: 'Chaveiro de Pelúcia Ursinho - Pochacco - 12cm', 
      preco: 49.90, 
      estoque: 3 
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Borracha Hello Kitty - Leo&Leo', 
      preco: 5.00, 
      estoque: 15,
      desconto: '-17% OFF',
      precoOriginal: 6.00
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/16-877e30dafb755a4d8617578971359082-240-0.webp', 
      nome: 'Chaveiro de Pelúcia Gatinho Sanrio – Pompompurin – 12 cm', 
      preco: 49.90, 
      estoque: 1 
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Garrafa Sanrio Com Canudo E Alça Personalizada 430ml', 
      preco: 109.90, 
      estoque: 5 
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Garrafa Térmica Com Sensor De Temperatura Fosca 500ML', 
      preco: 59.90, 
      estoque: 2 
    }
  ];

  categorias: Categoria[] = [
    { imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/themes/toluca/2-slide-1757376731934-8140406724-08bf290c4a2451769625a7e54edb62a61757376895-640-0.webp?152329209', nome: 'Stitch', link: '/colecao/stitch' },
    { imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/themes/toluca/2-slide-1757377216758-2629707369-44a9e9468cd711658a0ebac378ca3f761757377380-640-0.webp?152329209', nome: 'Sanrio', link: '/colecao/sanrio' }
  ];

  produtosMaisVendidos: Produto[] = [
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Chaveiro de Pelúcia Stitch – 12 cm', 
      preco: 49.90, 
      estoque: 2 
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Caneta Pílula Colorida', 
      preco: 6.00, 
      estoque: 28 
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Caneta Marca Texto Tons Pastel', 
      preco: 5.00, 
      estoque: 11 
    }
  ];

  produtosLancamentos: Produto[] = [
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Meias Kuromi - Cano Alto', 
      preco: 21.30, 
      estoque: 1 
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Botton Pompompurin – Arte Exclusiva (44mm)', 
      preco: 5.00, 
      estoque: 4 
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Botton Kuromi – Arte Exclusiva (44mm)', 
      preco: 5.00, 
      estoque: 3 
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Botton Keroppi – Arte Exclusiva (44mm)', 
      preco: 5.00, 
      estoque: 5 
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Botton Cinnamoroll – Arte Exclusiva (44mm)', 
      preco: 5.00, 
      estoque: 4 
    }
  ];

  produtosOfertas: Produto[] = [
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Fone de Ouvido Hello Kitty com Fio e Microfone', 
      preco: 54.90, 
      estoque: 3,
      desconto: '-35% OFF',
      precoOriginal: 81.90
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Caneta Hidrocor Mentos | COMPACTOR', 
      preco: 24.60, 
      estoque: 3,
      desconto: '-26% OFF',
      precoOriginal: 33.30
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Kit c/ 2 Canetas Mentos | COMPACTOR', 
      preco: 7.80, 
      estoque: 5,
      desconto: '-32% OFF',
      precoOriginal: 11.50
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Kit c/ 4 Canetas Mentos | COMPACTOR', 
      preco: 11.50, 
      estoque: 5,
      desconto: '-42% OFF',
      precoOriginal: 19.90
    },
    { 
      imagem: 'https://dcdn-us.mitiendanube.com/stores/004/410/719/products/25-6edd64aa4a8f521fc817570947746213-240-0.webp', 
      nome: 'Giz de Cera Caneta Troca Ponta Hello Kitty – 20 Cores Mágicas!', 
      preco: 8.20, 
      estoque: 5,
      desconto: '-54% OFF',
      precoOriginal: 18.00
    }
  ];

  // Referências para os carrosséis
  @ViewChildren('carouselTrack') carouselTracks!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngAfterViewInit(): void {
    // Qualquer inicialização adicional dos carrosséis pode ser feita aqui
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  //  CARROSSEL AUTOMÁTICO 
  private startCarousel(): void {
    if (this.banners.length > 0) {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000); // Muda a cada 5 segundos (pode mudar o valor)
    }
  }

  private stopCarousel(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  private nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.banners.length;
  }

  //  CARROSSÉIS MANUAIS (teste)
  scrollCarousel(carouselType: string, direction: 'prev' | 'next'): void {
    // Encontra o track do carrossel específico
    const tracks = this.carouselTracks.toArray();
    let trackIndex = -1;

    // Determina qual carrossel basedo no tipo
    switch (carouselType) {
      case 'destaques':
        trackIndex = 0;
        break;
      case 'maisVendidos':
        trackIndex = 1;
        break;
      case 'lancamentos':
        trackIndex = 2;
        break;
      case 'ofertas':
        trackIndex = 3;
        break;
    }

    if (trackIndex >= 0 && tracks[trackIndex]) {
      const scrollAmount = 250;
      const scrollOptions: ScrollToOptions = {
        left: direction === 'prev' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      };

      tracks[trackIndex].nativeElement.scrollBy(scrollOptions);
    }
  }

  // Métodos específicos para cada carrossel (teste) 
  prevCarousel(carouselType: string): void {
    this.scrollCarousel(carouselType, 'prev');
  }

  nextCarousel(carouselType: string): void {
    this.scrollCarousel(carouselType, 'next');
  }
}

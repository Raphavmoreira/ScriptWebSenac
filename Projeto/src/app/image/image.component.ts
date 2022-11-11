import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Showcase } from './image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  ngOnInit(): void {
  }

  catalogoShow: Showcase[] = [];
  
  constructor(private fotos: HttpClient) 
  { 
    fotos.get<Showcase[]>('http://localhost:3000/Showcase').subscribe(caixa => this.catalogoShow = caixa)    
  }

  Pares: boolean = true;
  button = 'Mostrar Pares';
  clicar() {
    if (this.Pares) {
      this.Pares = !this.Pares;
      this.button = 'Mostrar Todas as fotos';
    } else {
      this.Pares = !this.Pares;
      this.button = 'Mostrar Pares';
    }
  }
}

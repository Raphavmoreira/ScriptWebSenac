import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Showcase } from './image';
import { DatabaseService } from '../service/database.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private database: DatabaseService) {}

  catalogoShow: Showcase[] = [];

  ngOnInit() {
    this.database.getFoto().subscribe(caixa => this.catalogoShow = caixa);
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  titulo = "PORTFOLIO";

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

  deletar(id:number){
    alert("Deletado com sucesso");
    this.database.delFoto(id).subscribe();
  }

}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Showcase } from '../image/image';
import { DatabaseService } from '../service/database.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  imagens: Showcase = {
    id: 0,
    img: "",
    titulo: "",
    descricao: ""
  };
  submitted = false;

  constructor(
    private formBuilder: FormBuilder, 
    private database: DatabaseService
    ) { }
    
    ngOnInit(): void {
      this.validaForm();
    }

    formulario!: FormGroup;

    validaForm(){
      this.formulario = this.formBuilder.group({
        img: ['', [Validators.required]],
        titulo: ['', [Validators.required]],
        descricao: ['', [Validators.required]]
      });
    }
  
    cadastro(): void{
      const data = {
        img: this.imagens.img,
        titulo: this.imagens.titulo,
        descricao: this.imagens.descricao
      };
      this.database.postFoto(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    }
}

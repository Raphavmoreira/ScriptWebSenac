

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Foto } from './shared/foto';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  formulario!: FormGroup;

  imagens: Foto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.validaForm();
  }

  validaForm() {
    this.formulario = this.formBuilder.group({
      img: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descricao: ['', [Validators.required]]
    });
  }

  cadastro() {
    alert("Cadastrado com sucesso");
    this.http.post('http://localhost:3000/Showcase/', JSON.stringify(this.formulario.value), this.httpOptions).subscribe();
  }



}

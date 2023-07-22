import { Component } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      conteudo: [
        '', 
        Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])
      ],
      
      autoria: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],

      modelo: ['modelo2'],

      favorito: false
    })
  }

  createThoughts() {
    if (this.form.valid) {
      this.service.criar(this.form.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancel() {
    this.router.navigate(['/listarPensamento'])
  }

  enableButton(): string {
    if (this.form.valid)
      return 'botao'
    else
      return 'botao__desabilitado'
  }

  modelos = [
    {
      id: 'modelo1',
      nome: 'Modelo 1',
      imgSrc: '../../../../assets/imagens/modelo1.png',
    },
    {
      id: 'modelo2',
      nome: 'Modelo 2',
      imgSrc: '../../../../assets/imagens/modelo2.png',
    },
    {
      id: 'modelo3',
      nome: 'Modelo 3',
      imgSrc: '../../../../assets/imagens/modelo3.png',
    },
  ];
}

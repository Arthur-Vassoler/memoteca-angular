import { Component } from '@angular/core';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thoughts',
  templateUrl: './edit-thoughts.component.html',
  styleUrls: ['./edit-thoughts.component.css']
})
export class EditThoughtsComponent {
  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.form = this.formBuilder.group({
        id: [pensamento.id],

        conteudo: [
          pensamento.conteudo,
          Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])
        ],

        autoria: [
          pensamento.autoria,
          Validators.compose([Validators.required, Validators.minLength(3)])
        ],

        modelo: [pensamento.modelo],

        favorito: [pensamento.favorito]
      });
    });
  }

  editThought() {
    if (this.form.valid) {
      this.service.editar(this.form.value).subscribe(() => {
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

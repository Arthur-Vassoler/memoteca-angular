import { Component } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent {
  thought: Thought = {
    conteudo: '',
    autoria: '',
    modelo: '',
  }

  constructor(
    private service: ThoughtService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createThoughts() {
    console.log(this.thought)
    this.service.criar(this.thought).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancel() {
    this.router.navigate(['/listarPensamento'])
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

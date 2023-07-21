import { Component } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thoughts',
  templateUrl: './edit-thoughts.component.html',
  styleUrls: ['./edit-thoughts.component.css']
})
export class EditThoughtsComponent {

  thought: Thought = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((thought) => {
      this.thought = thought
    })
  }

  editThought() {
    this.service.editar(this.thought).subscribe(() => {
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

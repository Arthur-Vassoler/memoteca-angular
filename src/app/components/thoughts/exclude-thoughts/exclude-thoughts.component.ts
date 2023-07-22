import { Component } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exclude-thoughts',
  templateUrl: './exclude-thoughts.component.html',
  styleUrls: ['./exclude-thoughts.component.css']
})
export class ExcludeThoughtsComponent {
  thoughts: Thought = {
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    
    this.service.buscarPorId(parseInt(id!)).subscribe((thoughts) => {
      this.thoughts = thoughts
    })
  }

  excludeThoughts() {
    if(this.thoughts.id) {
      this.service.excluir(this.thoughts.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancel() {
    this.router.navigate(['/listarPensamento'])
  }
}

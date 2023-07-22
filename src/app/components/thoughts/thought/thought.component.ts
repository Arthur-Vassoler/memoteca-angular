import { Component, Input } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {
  constructor(private service: ThoughtService) { }

  @Input() thought: Thought = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false
  }

  @Input() listaFavoritos: Thought[] = [];

  larguraThought(): string {
    if(this.thought.conteudo.length >= 256)
      return 'thought-g'
    
    return 'thought-p'
  }

  mudarIconeFavorito(): string {
    if(this.thought.favorito == false)
      return 'inativo'

    return 'ativo'
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.thought).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.thought), 1)
    });
  }
}

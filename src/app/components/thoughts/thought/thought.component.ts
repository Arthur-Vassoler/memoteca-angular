import { Component, Input } from '@angular/core';
import { Thought } from '../thoughts';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {
  @Input() thought: Thought = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  larguraThought(): string {
    if(this.thought.conteudo.length >= 256)
      return 'thought-g'
    
    return 'thought-p'
  }
}

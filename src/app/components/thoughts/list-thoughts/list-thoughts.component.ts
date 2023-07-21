import { Component } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent {
  listThoughts: Thought[] = [];

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    })
  }
}

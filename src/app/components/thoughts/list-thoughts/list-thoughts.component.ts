import { Component } from '@angular/core';
import { Thought } from '../thoughts';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent {
  listThoughts: Thought[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = ''
  favoritos: boolean = false;
  listaFavoritos: Thought[] = []
  titulo: string = 'Meu Mural'

  constructor(
    private service: ThoughtService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listThoughts) => {
      this.listThoughts = listThoughts
    })
  }

  searchPensamentos() {
    this.haMaisPensamentos = true
    this.paginaAtual = 1;
    
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentos => {
        this.listThoughts = listaPensamentos
      })
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listThoughts => {
        this.listThoughts.push(...listThoughts);

        if(!listThoughts.length)
          this.haMaisPensamentos = false
      })
  }

  recarregarComponente() {
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  listarFavoritos() {
    this.titulo = 'Meus Favoritos'
    this.favoritos = true
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaPensamentosFavoritos => {
        this.listThoughts = listaPensamentosFavoritos
        this.listaFavoritos = listaPensamentosFavoritos
      })
  }
}

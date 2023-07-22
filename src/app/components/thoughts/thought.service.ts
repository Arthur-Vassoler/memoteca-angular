import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thought } from './thoughts';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Thought[]> {
    const itensPorPagina = 6;

    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPorPagina)

    if (filtro.trim().length > 2)
      params = params.set("q", filtro)

    if (favoritos)
      params = params.set("favorito", true)

    return this.http.get<Thought[]>(this.API, { params})
  }

  criar(Thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, Thought)
  }

  editar(Thought: Thought): Observable<Thought> {
    const url = `${this.API}/${Thought.id}`

    return this.http.put<Thought>(url, Thought)
  }

  excluir(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`

    return this.http.delete<Thought>(url)
  }

  buscarPorId(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`
    
    return this.http.get<Thought>(url)
  }

  mudarFavorito(thought: Thought): Observable<Thought> {
    thought.favorito = !thought.favorito
    
    return this.editar(thought)
  }
}

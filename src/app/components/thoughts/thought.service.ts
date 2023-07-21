import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thought } from './thoughts';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API)
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
}

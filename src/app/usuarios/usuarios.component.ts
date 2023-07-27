import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
 //declaramos variables
 usuarios: any;

  constructor(private http:HttpClient ) { }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/comments").subscribe(
      resultado =>{
        this.usuarios = resultado;
      }
    )


  }

}

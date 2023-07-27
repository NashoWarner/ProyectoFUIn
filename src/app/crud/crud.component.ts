import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  ReporterosCod = {codigo_reportero:0, NomReportero:"", cargo:""}
  Reportero = [{codigo_reportero:1, NomReportero:"Juan perez", cargo: "Buscador"},
  {codigo_reportero:2, NomReportero:"Ignacio Covarrubias", cargo: "Escritor"},
  {codigo_reportero:3, NomReportero:"Renato Cielo", cargo: "Escritor"},
  {codigo_reportero:4, NomReportero:"Samira Fonzeca", cargo: "Buscador"},
  {codigo_reportero:5, NomReportero:"David Salasar", cargo: "Escritor"}];
  
  hayReportero(){
    return this.Reportero.length > 0;
  }
  borrarReportero(codigo_reportero:number){
    for (let index = 0; index < this.Reportero.length; index++){
      if (this.Reportero[index].codigo_reportero == codigo_reportero) {
        this.Reportero.splice(index, 1);
        return;
      }
    } 
  }
  agregarReporterosCod(){
    if (this.ReporterosCod.codigo_reportero == 0) {
      alert("Debe ingresar un codigo_reportero distinto");
    }
    for (let index = 0; index < this.Reportero.length; index++)
    if (this.Reportero[index].codigo_reportero == this.ReporterosCod.codigo_reportero) {
      alert("ya existe");
      return
    }
    this.Reportero.push({codigo_reportero:this.ReporterosCod.codigo_reportero,
    NomReportero:this.ReporterosCod.NomReportero,
    cargo:this.ReporterosCod.cargo})
    this.ReporterosCod.codigo_reportero = 0;
    this.ReporterosCod.NomReportero = "";
    this.ReporterosCod.cargo = "";
  }
  seleccionarReporterosCod(ReporterosCod:{codigo_reportero:number;NomReportero:string;cargo:string}){
    this.ReporterosCod.codigo_reportero=ReporterosCod.codigo_reportero;
    this.ReporterosCod.NomReportero=ReporterosCod.NomReportero;
    this.ReporterosCod.cargo=ReporterosCod.cargo;
  }
  modificarReporterosCod(){
    for (let index = 0; index < this.Reportero.length; index++)
    if (this.Reportero[index].codigo_reportero==this.ReporterosCod.codigo_reportero)
    {
      this.Reportero[index].NomReportero=this.ReporterosCod.NomReportero;
      this.Reportero[index].cargo=this.ReporterosCod.cargo;
      return;
    }
    alert("No existe el codigo_reportero del ReporterosCod ingresado")
  }
  
}

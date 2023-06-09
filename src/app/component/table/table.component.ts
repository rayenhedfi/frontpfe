import { HttpErrorResponse } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project } from './project';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html'
})
export class TableComponent implements  OnInit{
  /*public project = new Project() ;
  public projects: Project[] | undefined;
  */
 listProject:any;
 project!: Project;

  constructor(private projectService: ProjectService) { }
     ngOnInit(): void {
    this.getProjects()
    this.project = {

    id: null,
    name: null,
    description: null,
    visibility:  null,
    token:  null,
    gitlabProjectId: null,
    }
  }


getProjects(){
  this.projectService.getAllProject().subscribe(res=>this.listProject=res)
}

addProject(p:any){
  this.projectService.addProject(p).subscribe(()=>{
    this.getProjects();
  })

}

 /* public addProject(){
    this.projectService.addProject(this.project).subscribe(
     data =>{
       alert("successfully project is added");
       console.log(this.project);
     }, error => {
     alert("sorry project not added"); 
     console.log(error);
   });
   console.log(this.project) ;
  }*/

  /*public getProjects(): void {
    this.projectService.getProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
        console.log(this.projects);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
      */
    


  //nav
  currentJustify = 'start';

  active=1;
  activev= "top";

  activeKeep=1;

  activeSelected=1;
  disabled = true;

  
  tabs = [1, 2, 3, 4, 5];
  counter = this.tabs.length + 1;
  activeDynamic=1;

  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
    if (this.disabled) {
      this.activeSelected = 1;
    }
  }


  close(event: MouseEvent, toRemove: number) {
    this.tabs = this.tabs.filter(id => id !== toRemove);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  add(event: MouseEvent) {
    this.tabs.push(this.counter++);
    event.preventDefault();
  }
  //
}

import { debounceTime } from 'rxjs/operators';
import { Input, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { BrancheService } from './branche.service';
import { Branche } from './branche';
import { ProjectService } from '../table/project.service';
import { Project } from '../table/project';
@Component({
  selector: 'app-ngbd-alert',
  templateUrl: 'alert.component.html',
  styles: [`
    .alert-custom {
      color: #cc4dd5;
      background-color: #f0c4f3;
      border-color: #f0c4f3;
    }
  `]
})
export class NgbdAlertBasicComponent implements OnInit {
  // this is for the Closeable Alert

  
    listBranches:any;
    listProject:any;
    branche!: Branche;
    project! : Project;
    idp: any;
    
    
      constructor(private brancheService: BrancheService,private projectService: ProjectService ) { }
      ngOnInit(): void {
        this.getBranche();
        this.getProjects();
        this.branche ={
        brancheid: null,
        brancheNom: null,
        brancheRef: null,
        }
      }
 
    
      getBranche(){
        this.brancheService.getAllBranche().subscribe(res=>this.listBranches=res)
      }
      addBranche(b:any){
        this.brancheService.saveBranche(b).subscribe(()=>{
          this.getBranche();
        })
      }
        getProjects(){
          this.projectService.getAllProject().subscribe(res=>this.listProject=res)
        }
        addbranchtoProject(b: any, id:Project){
          this.projectService.affecterbrancheToProject(b,id).subscribe(()=>{
            this.getBranche();
          })
      }

  // End the Closeable Alert
  // This is for the self closing alert

  

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
  
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

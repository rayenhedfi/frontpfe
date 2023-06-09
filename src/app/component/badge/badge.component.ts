import { Component, OnInit } from "@angular/core";
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
@Component({
  templateUrl: "badge.component.html",
  })
export class BadgeComponent {
  
  //
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
/*
listBranches:any;
branche!: Branche;


  constructor(private brancheService: BrancheService  ) { }
  ngOnInit(): void {
    this.getBranche();
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
  */
}

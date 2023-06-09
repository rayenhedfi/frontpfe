import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project';
import { environment } from './../../../environments/environment';
import { Branche } from '../alert/branche';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectService  {
  private api_url = environment.api_url + 'Project';
  constructor(private http: HttpClient) { }
  
  /*public getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(`${this.api_url}/retrieve-all-projects`);

  }*/
  public getAllProject() {
    return this.http.get(this.api_url + '/retrieve-all-projects')
  }

  /*public addProject(project: Project): Observable<Project[]>{
     return this.http.post<Project[]>(`${this.api_url}/add-project`, project);
  }*/
  public addProject(project: Project) {
    return this.http.post(this.api_url + '/add-project', project)
  }
  public affecterbrancheToProject(branche: Branche, id: Project) {
    return this.http.put(this.api_url + '/assignbrancheToProject/' +id, branche)
  }


}

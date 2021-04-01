import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { TodayComponent } from './today/today.component';



@Injectable({
  providedIn: 'root'
})
export class TaskService  {
  url="http://localhost:3000/infos"
  url1="http://localhost:3000/infos/upcoming"
  constructor(private http:HttpClient) { }

  getTask(b:boolean){
   return this.http.get(this.url+"/"+b);
  }
  // getTaskUp(){
  //   return this.http.get(this.url1);
  // }

  saveTask(data:any)
  {
  // console.warn(data);
   
     this.http.post(this.url,data).subscribe((result)=>{
       console.warn("service");
       
     });
  // return this.http.post(this.url,)
  //this.http.post(this.url)
  
  }
  deleteTask(id:string){
    console.warn(this.url);
    

    this.http.delete(this.url+"/"+id).subscribe((result)=>{
      console.warn("deleted");
      
    });

  }
  deleteTaskUp(id:string){
    console.warn(this.url1);
    
    this.http.delete(this.url+"/"+id).subscribe((result)=>{
      //console.warn("deleted");
    });

  }

  deleteTaskOneByOne(arr:any){
    for (var i in arr) {
      //console.log(arr[i]);
      this.deleteTask(arr[i])
   }
   location.reload()


  }


  updateTask(id:string,data:any){
    
    return this.http.put(`${this.url}/${id}`,data).subscribe((result)=>{
      console.warn("Upcoming method called1"+id)
      
    })

  }
  updateTaskUpcoming(id:string,data:any){
    return this.http.put(`${this.url}/${id}`,data).subscribe((result)=>{
      console.warn("Upcoming method called2"+result)
      
    })
  }
  getCurrentTask(id:string,b:boolean){
    return this.http.get(`${this.url}/${id}/${b}`)

  }
 /* getCurrentTaskUp(id:string){
    return this.http.get(`${this.url}/${id}`)

  }*/
}

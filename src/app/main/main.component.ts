import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {FormGroup,FormControl} from '@angular/forms'
import { ObjectUnsubscribedError } from 'rxjs';
import {TaskService} from '../task.service'
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { TodayComponent } from '../today/today.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private task:TaskService) {}

  

  add:any=new FormGroup({
    task:new FormControl('shubham'),
    date:new FormControl('')
  })
  tempId:any;
  b:boolean=true
  some:String='';
date2:String='';
alert:boolean=false
alert2:boolean=false
arry:any=[]

ngOnInit(): void {
  this.task.getTask(this.b).subscribe(result=>{
    
    console.warn(result);
   // this.collection=result
      
   this.arry=result;
  // console.warn(this.arry)
  })
  
}



  collectTask(){
    //console.warn(this.add.value)
    this.task.saveTask(this.add.value)
   // this.alert=true;
  // this.task.saveTask(var)
  }


  addTask(dadd:string,date3:string){
    this.alert=true;
    
    if(dadd!=null || date3!=null ){
      this.arry.push({task:dadd,date:date3});
  
      
      // this.arry.push({date:dadd});
    }
    
    location.reload()
    this.alert=false
   
    
  
  }
  



  getValueOfTask(id:any){
    this.tempId=id;
   // this.hide=true
    this.task.getCurrentTask(id,this.b).subscribe((task:any)=>{
      this.add=new FormGroup({
        task:new FormControl(task.task)
        

      })
    });
   
    
    console.warn("edit"+id);
  
  }

  updatedCollection(){
    console.warn(this.add.value);
    this.task.updateTask(this.tempId,this.add.value);
    
    location.reload()
    

  }
  task1: any;
  object:any=[];
  search() {
    if (this.task1 == "") {
     this.ngOnInit()
    }
    else {
      this.arry = this.arry.filter((res: any) => {
        return res.task.toLocaleLowerCase().match(this.task1.toLocaleLowerCase())
       
       
      });
    }
  
  }


}

import { BoundTextAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { ObjectUnsubscribedError } from 'rxjs';
import { AppComponent } from '../app.component';
import { MainComponent } from '../main/main.component';
import {TaskService} from '../task.service'
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs/operators';


@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

alert:boolean=false
alert2:boolean=false
hide:boolean=false
tempId:any;
imagePath:string="/assets/image/noData1.svg";
value:any=''
task:any='';
  showsearch:boolean=true;
  //search 
  searchId:boolean=false;

  //paginator
  totalrecord:string=''
  page1:number=1
  pageSize =10;

 add:any=new FormGroup({
  task:new FormControl(''),
  date:new FormControl('')
})



some:String='';
date2:String='';

 arry:any=[]

showme: boolean = false;
  showdivmodel: boolean = true;

  showdiv() {
    this.showme = true;
    this.showdivmodel = false;
    this.showsearch=true;
  }

  hidediv() {
    this.showme = false;
    this.showdivmodel = true;

  }



addTask(task:string,date3:string){
  
  
  if(task!=null || date3!=null ){
    // this.arry.push({task:dadd,date:date3});
    this.arry.push({task:task,date:date3});
    // this.arry.push({date:dadd});
    this.isZero=true;
  }
 
 // location.reload()
 
 // this.alert=false
  
 
  

}





remove(dadd:string,date3:string){
  // this.arry.splice(0,2.1);
  this.arry.splice(0,2.1);

 

}

 
  today: number = Date.now();    




ListName:any="";

today2:any="";

task1:any="";

// todayFun()
// {
// this.task1;  
// alert("insertd" +" " +  this.task1);

// }

// Exit()
// {
//   this.today2="";
//   this.task1="";
// }

// print1:any="";
// box:any="";
// Fun1(evt:any)
// {
// this.box.value;
// console.log(this.print1);
// }





  constructor( private taskService:TaskService,private toastr:ToastrService) {
    
    
   }


b:boolean=true;
isZero:boolean=false;

  ngOnInit(): void {
    this.taskService.getTask(this.b).subscribe(result=>{
      
      console.warn(result);
     // this.collection=result
        
    //  this.arry=result;
   this.arry=result;
     //console.warn("Array Length"+this.arry.length)

     if(this.arry.length==0){

      this.isZero=false;
      this.showsearch=false;
     }else{
      this.isZero=true;
     }
    })
    
  }
  selectedArray:any=[]

  getIdChecked(e:any,id:any){
    if(e.target.checked){

      console.warn("Selected"+id);
      this.selectedArray.push(id);
    }else{

      console.warn("UnSelected"+id);
      console.warn(this.selectedArray.indexOf(id));
      this.selectedArray.splice(this.selectedArray.indexOf(id),1);
    }
    console.warn("Array Element-"+this.selectedArray)

  }

  deleteSelectedTask(){
   // this.deleteSelectedTask(this.selectedArray);
this.taskService.deleteTaskOneByOne(this.selectedArray);
  }



  selectedItem(id:any){
   this.selectedArray.push(id)

  }
  displaySelectedTask(){
    console.warn("Task Id"+this.selectedArray[0])
  }

  collectTask(){
    //console.warn(this.add.value)
    this.taskService.saveTask(this.add.value)
    //this.alert=true;
  // this.task.saveTask(var)
  }
  // closeAlert(){
  //   this.alert=false;
  // }
  
  closeFun(id:any){
    //this.alert=false
console.warn("alert"+id)


setTimeout(()=>{
 // console.warn("3 sec completed");
  
  this.alert2=true;
    this.taskService.deleteTask(id)
    this.arry.splice(id,1)
  
    
    location.reload()
    this.alert2=false

},2000);
    
  
  }

id:any;
sendId(id:any){
  this.id=id;
  console.warn("send Id "+this.id)

}

  getValueOfTask(id:any){
    this.tempId=id;
    this.hide=true
    this.taskService.getCurrentTask(id,this.b).subscribe((task:any)=>{
      this.add=new FormGroup({
        task:new FormControl(task.task)
        

      })
    });
   
    
    console.warn("edit"+id);
  
  }
  
  updatedCollection(){
    console.warn(this.add.value);
    this.taskService.updateTask(this.tempId,this.add.value);
    
    location.reload()
    

  }

  
  search() {
    if (this.task == "") {
      this.ngOnInit()
    }
    else {
      this.arry = this.arry.filter((res: any) => {
        return res.task.toLocaleLowerCase().match(this.task.toLocaleLowerCase())
      });
    }
  }

  //alerts

  taskAddToastr()
  {
    this.toastr.success("Task Added !!! ")     //error() warning() info() 
    console.warn("click");

    setTimeout(()=>{
     
    location.reload()
    
    },2000);

    
    
  }

  taskDeleteToastr()
  {
    this.toastr.warning("Task Deleted !!!")
  }
  
  taskUpdateToastr()
  {
    this.toastr.info("Task updated !!!")
  }

  
 }
    



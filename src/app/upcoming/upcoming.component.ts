import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service'
import {FormGroup,FormControl} from '@angular/forms'
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  constructor(private taskService:TaskService,private toastr:ToastrService) { }

upArry:any=[]
tempId:any
hide:boolean=false
//paginator
totalrecord:string=''
page1:number=1
pageSize =10;

add:any=new FormGroup({
  task:new FormControl(''),
  date:new FormControl('')
})


b:boolean=false
isZero:boolean=true;
imagePath:string="/assets/image/noData1.svg";

  ngOnInit(): void {

    this.taskService.getTask(this.b).subscribe(result=>{
      
      console.warn(result);
     // this.collection=result
        
     this.upArry=result;
    // console.warn(this.arry)
    if(this.upArry==0){

        this.isZero=true;
    }else{
      this.isZero=false;
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


  refresh(){
    

  }
  id:any;
sendId(id:any){
  this.id=id;
}

  deleteTask(id:any){
    this.taskService.deleteTaskUp(id)
    this.upArry.splice(id,1)
    location.reload()
  }

  getValueOfTask(id:any){
    this.tempId=id;
    console.warn(this.tempId);
    
    this.taskService.getCurrentTask(id,this.b).subscribe((task:any)=>{
      this.add=new FormGroup({
        task:new FormControl(task.task),
        
        
        // new Date(task.date.setUTCHours(0, 0, 0, 0)).toISOString()

      })
      
    });
    console.warn("Upcoming page");
    

  }
  
  updatedCollection(){
    console.warn(this.add.value);
    //this.upArry.updatedCollection(this.add.value)
    this.taskService.updateTask(this.tempId,this.add.value)
    location.reload()
    
  }

  value:any=''
task:any='';
showsearch:boolean=true;
  search() {
    if (this.task == "") {
      this.ngOnInit()
    }
    else {
      this.upArry = this.upArry.filter((res: any) => {
        return res.task.toLocaleLowerCase().match(this.task.toLocaleLowerCase())
      });
    }
  }

  //alerts

  taskAddToastr()
  {
    this.toastr.success("Task Added !!! ")     //error() warning() info() 
    console.warn("click");
    
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

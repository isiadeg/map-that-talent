import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import {FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import{debounceTime} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';





import {
  Chart,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  
  Tooltip,
  
} from 'chart.js';


import { initializeApp } from 'firebase/app';
import {getDatabase, set, ref, get, push} from 'firebase/database';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyCbTSACPUh6FhU-nO7bH-0C9QvB-vMTzt8",
  authDomain: "map-that-talent.firebaseapp.com",
  databaseURL: "https://map-that-talent-default-rtdb.firebaseio.com",
  projectId: "map-that-talent",
  storageBucket: "map-that-talent.appspot.com",
  messagingSenderId: "957443488779",
  appId: "1:957443488779:web:2eadc67d1c6e7578e4db0e",
  measurementId: "G-8MVM5L29DX"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();

@Component({
  selector: 'app-feedback',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['../connect/connect.component.css', '../child/child.component.css', './updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
errorMessages:any={};
pickerror:any ={
  required: "This Field is Required",
  email:"Please, Enter a Valid Email ",
  minlength: "Password cannot be less than 6 characters"
}
submitted:boolean = false;
submiterror:string;
id:any;
showpass:boolean = false;
labelUp:any={};
clicksubmit:boolean=false;
displaydropdown:boolean =false;
resolvedData:any;
largearr:any[] = [];
sublargearr:any[] =[];
valuesubmit:boolean =false;
updatemessage:boolean= false;
  constructor(private fb:FormBuilder,private route:ActivatedRoute,
              private loginservice:LoginService, private router:Router) { }
youtubeform: FormGroup;
options:any[];
optionss:any[];
openthis:any[]=[];
largeObject:any={
  fashion:['Wall Design', 'MakeUp Artistry', 'Portrait Design', 'Fashion Designer', 'Shoe Designer', 'Seamstress'],
  gaming: ['Games Designer', 'Games Artist', 'Professional Games', 'Games Play Tester'],
  others:[],
  tech:['Software Development', 'Data Analysis', 'Cloud Data Engineering', 'Mobile Application Development',
  'Mobile Applications Development', 'Graphics Design', 'Mechanical and Electrical Design', 'Software Testing'],
}
pieChartLabels:any[];
pieChartData:any;
  pieChartType:any;
  loginerror:any;
  showupdatepassword:any;
  ngOnInit(): void {

   
   /*this.resolvedData.forEach(element => {
      if(this.largeObject[this.id].find((ele)=>{
          if(ele.toLowerCase().trim() == element.toLowerCase().trim()){
            console.log(ele+" "+element)
            return true;
          }else{
            return false;
          }
      } )==undefined){
        console.log("undefined");
        this.largeObject[this.id].push(element);
      }else{
        console.log("found "+element)
      }
    });
    console.log(this.largeObject[this.id])*/
    
    this.youtubeform= this.fb.group({
     
      password:['', [Validators.required, Validators.minLength(6)]]
     
    })
    

   
    let password = this.youtubeform.get('password');
    password.valueChanges.pipe((debounceTime(1000))).subscribe((value)=>{
      this.seterror(password, 'password');
    })
   
    
    /*email.statusChanges.subscribe(()=>{
      this.labelupfunction(email, 'email');
    })*/
    
    let label = document.getElementsByTagName("input");
    for(let i=0; i<label.length;i++){
      label[i].addEventListener('focus', ()=>{
        document.getElementsByTagName("label")[i].className += " labelup"
      })
    label[i].addEventListener
      
      label[i].addEventListener('blur', ()=>{
        if(label[i].value == ""){
        document.getElementsByTagName("label")[i].className = document.getElementsByTagName("label")[i].className.replace(/labelup/gi, "");
        }
      })
    }
      
      
    
    
      }
      seterror(c:AbstractControl, label:string):void{
        this.errorMessages[label]="";
        if(c.errors && c.dirty){
          this.errorMessages[label] = Object.keys(c.errors).map((e,i)=>{
            console.log(e); return this.pickerror[e];
          });
          console.log(this.errorMessages[label]);
      
        }
      }
    




  


  
  

  async save(){
    this.clicksubmit=true;
    this.valuesubmit = true;
    console.log(this.youtubeform.value);
    console.log({
     
      password: this.youtubeform.value.password
    })
  let bbool = await this.loginservice.changepassword(this.youtubeform.value.password);
  console.log(bbool);
   if(bbool){
    this.loginerror ="";
    this.updatemessage = true;
    this.valuesubmit = false;
   setTimeout(()=>{ this.router.navigate([`/admin`]);}, 2000);
   }else{
     this.loginerror = true;
     console.log(this.loginerror);
     this.valuesubmit = false;
     this.updatemessage = true;
   }
  }
closeaarinfn(){
  this.updatemessage = false;
}


labelupfunction( label:string):void{
  
  this.labelUp[label]=true;
}
labeldownfunction( label:string):void{

  this.labelUp[label]=false;
}
hideandshow(){
 }
updatepassword(){
}
showpp(){
  this.showpass = !this.showpass;
}

}

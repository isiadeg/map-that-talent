import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import {FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import{debounceTime} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
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
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
errorMessages:any={};
pickerror:any ={
  required: "This Field is Required",
  email:"Please, Enter a Valid Email "
}
submitted:boolean = false;
submiterror:string;
id:any;
labelUp:any={};
clicksubmit:boolean=false;
displaydropdown:boolean =false;
resolvedData:any;
largearr:any[] = [];
sublargearr:any[] =[];
valuesubmit:boolean =false;
  constructor(private fb:FormBuilder,private route:ActivatedRoute) { }
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
      email:''
     
    })
    

    




  


  }
  

  save(){
    this.clicksubmit=true;
    this.valuesubmit = true;
    console.log(this.youtubeform.value);
    console.log({
     
      email: this.youtubeform.value.email
    })

    let usersref = ref(db, "feedback" );
    

    
    const pushusers = push(usersref);

    
      set(pushusers, {
     
        email: this.youtubeform.value.email
        
      }).then(()=>{
       // alert("Thank you for leaving feedback")
       this.valuesubmit =  false;
       this.submitted = true;
       document.getElementsByTagName("textarea")[0].value = "";
      }).catch((e)=>{
      this.submiterror = "An error occured"
    })
  }
closeaarinfn(){
  this.submitted = false;
}

  

}

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
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
errorMessages:any={};
pickerror:any ={
  required: "This Field is Required",
  email:"Please, Enter a Valid Email "
}
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
  whattosay:string="";

  ngOnInit(): void {

    let numberofopen = document.getElementsByClassName("eachperson").length;
    for(let i=0; i<numberofopen; i++){
      this.openthis[i] = false;
    }
    console.log(this.openthis);
    this.route.paramMap.subscribe((params)=>{
      this.id=params.get('id');
      console.log(this.id);

    this.resolvedData =  this.route.snapshot.data['connect'];
    console.log(this.resolvedData);
   let aftereverything = this.resolvedData.filter(element => {
      let found=false;
      this.largeObject[this.id].forEach(elementsec => {
        if(elementsec.toLowerCase().trim()==element.toLowerCase().trim()){
          found = true;
        }
      });
      if(found == false){
        this.largeObject[this.id].push(element);
        return element;
      }
    });
    console.log(this.largeObject[this.id])
    
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
    console.log(aftereverything);
      
      this.options=this.largeObject[this.id];
    if(this.options){
      this.optionss = this.options;
    }

    })
    this.youtubeform= this.fb.group({
      
      youtubeUsername: ['', Validators.required],

      specificTalent:['', Validators.required]
    })
    

    




let youtubeUsername = this.youtubeform.get('youtubeUsername');
youtubeUsername.valueChanges.pipe((debounceTime(1000))).subscribe((value)=>{
  this.seterror(youtubeUsername, 'youtubeUsername');
})


let specificTalent = this.youtubeform.get('specificTalent');
specificTalent.valueChanges.pipe((debounceTime(2500))).subscribe((value)=>{
  this.seterror(specificTalent, 'specificTalent');
})
specificTalent.valueChanges.subscribe((value)=>{
  this.changearray(specificTalent, 'specificTalent');
})

/*email.statusChanges.subscribe(()=>{
  this.labelupfunction(email, 'email');
})*/

let label = document.getElementsByTagName("input");
for(let i=0; i<label.length;i++){
  label[i].addEventListener('focus', ()=>{
    document.getElementsByTagName("label")[i].className += " labelup"
    if(i == 1){
      document.getElementsByTagName("label")[i].className += " labelup2"
    }
  })
label[i].addEventListener
  
  label[i].addEventListener('blur', ()=>{
    if(label[i].value == ""){
    document.getElementsByTagName("label")[i].className = document.getElementsByTagName("label")[i].className.replace(/labelup/gi, "");
  
    if(i == 1){
    document.getElementsByTagName("label")[i].className = document.getElementsByTagName("label")[i].className.replace(/labelup2/gi, "");
 
    }  
  }

  })
}
  document.getElementById("specifictalent").
  addEventListener('focus',
  ()=>{
    this.displaydropdown = true;
  })
  


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
   
  changearray(c:AbstractControl, label:string):void{
    if(c.value == ""){
      this.optionss= this.options; 
    }else{
    this.optionss = this.options.filter((e)=>{
      if(e.toLowerCase().trim().includes(c.value.toLowerCase().trim())){
        return e;
      }
    });}
    console.log(this.optionss);
  }


 
    labelupfunction( label:string):void{
  
    this.labelUp[label]=true;
  }
  labeldownfunction( label:string):void{
  
    this.labelUp[label]=false;
  }
  insertvalue(value):void{
    this.youtubeform.get('specificTalent').setValue(value);
    this.youtubeform.updateValueAndValidity();
    console.log(this.youtubeform.value);
    document.getElementsByTagName("label")[0].className += " labelup"
    this.displaydropdown = false;
  }

  save(){
    this.clicksubmit=true;
    this.valuesubmit = true;
    console.log(this.youtubeform.value);
    console.log({
      category: this.id,
      subcategory: this.youtubeform.value.specificTalent,
   
      youtubeUsername: this.youtubeform.value.youtubeUsername
    })

    let usersref = ref(db, "users" );
    let categoryref = ref(db, "category/"+this.id);

    const pushcat = push(categoryref);
    const pushusers = push(usersref);

    set(pushcat, this.youtubeform.get('specificTalent').value )
    .then(()=>{
      set(pushusers, {
        category: this.id,
        subcategory: this.youtubeform.value.specificTalent,
        email: '',
        fullname: '',
        youtubeUsername: this.youtubeform.value.youtubeUsername
      }).then(()=>{
        get(usersref).then((snapshot)=>{
          console.log(snapshot.val())
          
          for(let eachuser in snapshot.val()){

            console.log(eachuser);
            if(snapshot.val()[eachuser].subcategory== this.youtubeform.value.specificTalent){
            this.largearr.push(snapshot.val()[eachuser]);}
            console.log(this.largearr);


          }

          this.valuesubmit = false;
          if(this.largearr.length>1){
            let subscribersi = "";
              if(this.largearr.length == 2 ){
                for(let i=0; i<this.largearr.length; i++){
                  if(this.largearr[i].youtubeUsername != this.youtubeform.value.youtubeUsername){
                    subscribersi = `Subscriber ${this.largearr[i].youtubeUsername}`
                  }
               
                }
              }
              else {
                for(let i=0; i<2; i++){
                  if(this.largearr[i].youtubeUsername != this.youtubeform.value.youtubeUsername){
                    subscribersi += `Subscriber ${this.largearr[i].youtubeUsername}, `
                  }
               
                }
                subscribersi += `and ${this.largearr.length-3} others`;

              }
            
            this.whattosay = `You share the same Talent with ${subscribersi}`;
          }else{
          this.whattosay = "We are yet to have other subscribers who share the same talent with you"}
          window.scrollTo({
            top:0,
            left:0
          })
          



        })
      })
    }).catch((e)=>{
      this.submiterror = "An error occured"
    })
  }


  yes():void{

    document.getElementsByClassName("yesorno")[0].className += " nodisplay";
    console.log( document.getElementsByClassName("yesorno")[0].className)
    document.getElementsByClassName("isestart")[0].className = document.getElementsByClassName("isestart")[0].className.replace(/nodisplay/gi, "display");
  }
  no():void{
    document.getElementsByClassName("fromtop")[0].className += " nodisplay"
  }

  openorclose(number):void{
    console.log(this.openthis[number])
    console.log(document.getElementsByClassName("eachpersonheader")[number].getElementsByClassName("icon")[0].className)
    if(this.openthis[number] == true){
      this.openthis[number] = false;
      if(document.getElementsByClassName("eachpersonheader")[number].getElementsByClassName("icon")[0].className.includes("rotatedown")){
      document
      .getElementsByClassName("eachpersonheader")[number]
      .getElementsByClassName("icon")[0].className = document
      .getElementsByClassName("eachpersonheader")[number]
      .getElementsByClassName("icon")[0].className
      .replace(/rotatedown/gi, "rotateup");
   
      }else{
   
      document.getElementsByClassName("eachpersonheader")[number].getElementsByClassName("icon")[0].className += " rotateup";
       } console.log(document.getElementsByClassName("eachpersonheader")[number].getElementsByClassName("icon")[0].className)
   
    }else{
      this.openthis[number] = true;
      console.log(this.openthis[number])
      if( document.getElementsByClassName("eachpersonheader")[number].getElementsByClassName("icon")[0].className.includes("rotateup")
      ){
      document.getElementsByClassName("eachpersonheader")[number].getElementsByClassName("icon")[0].className = document.getElementsByClassName("eachpersonheader")[number].getElementsByClassName("icon")[0].className.replace(/rotateup/gi, "rotatedown")
    }else{
      document.getElementsByClassName("eachpersonheader")[number].getElementsByClassName("icon")[0].className += " rotatedown"
   
    }console.log(document.getElementsByClassName("eachpersonheader")[number].getElementsByClassName("icon")[0].className)
   
    }
  }

}

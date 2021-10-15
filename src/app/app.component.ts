import { Component } from '@angular/core';
import {ConnectresolveService} from './connectresolve.service'
import  {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'youtubesubs';
  opennavbool:boolean = false;
  id;
  constructor(private resol:ConnectresolveService){
  
  }

  ngOnInit(){
    setInterval(()=>{
      this.id =this.resol.id
      
    , 3000})
  }
  opennav():void{
    this.opennavbool = true;
  }
  closenav():void{
    this.opennavbool =false;
  }




}

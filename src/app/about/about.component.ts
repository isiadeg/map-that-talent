import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
openthis:any[]=[];
  constructor() { }

  ngOnInit(): void {
    let numberofopen = document.getElementsByClassName("eachperson").length;
    for(let i=0; i<numberofopen; i++){
      this.openthis[i] = false;
    }
    console.log(this.openthis)
  }




  


}

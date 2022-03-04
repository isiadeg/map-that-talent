import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    feedback:any;
    submitted:boolean = false;
  constructor(private route:ActivatedRoute, private router:Router,
              private loginservice:LoginService) { }

  ngOnInit(): void {
    this.feedback = this.route.snapshot.data['feedback'];
    
    console.log(this.feedback);
    if(this.feedback.error){
      this.submitted = true;
    }else{
      if(this.feedback.length == 0){
        this.submitted = true;
      }
      this.feedback.reverse();
    }

  }

  async logout(){
    let bboo = await this.loginservice.logout();
    if(bboo){
      this.router.navigate(['/login']);
    }else{
        alert(this.loginservice.logouterror);
    }
  }

  closeaarinfn(){
    this.submitted = false;
  }
  

}


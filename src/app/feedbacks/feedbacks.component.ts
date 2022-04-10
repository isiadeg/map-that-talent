import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['../admin/admin.component.css','./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
    @Input() feedback:any;
    submitted:boolean = false;
  constructor(private route:ActivatedRoute, private router:Router,
              private loginservice:LoginService) { }

  ngOnInit(): void {
    
    
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


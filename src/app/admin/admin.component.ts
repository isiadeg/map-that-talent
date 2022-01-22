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
  constructor(private route:ActivatedRoute, private router:Router,
              private loginservice:LoginService) { }

  ngOnInit(): void {
    this.feedback = this.route.snapshot.data['feedback'];
    this.feedback.reverse();
    console.log(this.feedback);

  }

  async logout(){
    let bboo = await this.loginservice.logout();
    if(bboo){
      this.router.navigate(['/login']);
    }else{
        alert(this.loginservice.logouterror);
    }
  }

}

import { Injectable } from '@angular/core';
import{Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs';

import { initializeApp } from 'firebase/app';
import {getDatabase, ref, get} from 'firebase/database';


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
const db= getDatabase();

@Injectable({
  providedIn: 'root'
})
export class AdminresolverService implements Resolve<any>{
id:any;


  constructor(private routi:ActivatedRoute) {
  
   }
  resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
  
  //this.id = route.paramMap.get('id');
   // console.log(this.id)
    let refi = ref(db, 'feedback' )
  return get(refi).then((snapshot)=>{
    if(snapshot.val()){
      let returnedarray=[];
        for(let eyo in snapshot.val()){
          returnedarray.push(snapshot.val()[eyo]);
        }
        console.log(returnedarray);
      return returnedarray;
    }else{
    return [];
    }
  })
  }

  idi():Observable<string>{
    return this.id as Observable<string>;
  }
}

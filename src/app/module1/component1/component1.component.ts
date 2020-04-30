import { Component, OnInit } from '@angular/core';
import { Service1 } from '../service1.esrvice';
import { Service2 } from 'src/app/service2.service';

@Component({
  selector: 'app-component1',
  //providers: [ Service1 ],
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  num = 0;
  text = "";

  constructor(
    private myService1: Service1,
    private myService2: Service2) { }

  ngOnInit(): void {
    this.num = this.myService1.num;
    this.text = this.myService2.text;
  }
}

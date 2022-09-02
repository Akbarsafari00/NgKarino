import { Component, OnInit } from '@angular/core';
import {animate, group, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations:[
    trigger('slideInOut', [
      state('in', style({
        'max-height': '*', 'opacity': '1', 'visibility': 'visible'
      })),
      state('out', style({
        'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('in => out', [group([
          animate('600ms ease-in-out', style({
            'max-height': '0px'
          })),
          animate('700ms ease-in-out', style({
            'visibility': 'hidden'
          }))
        ]
      )]),
      transition('out => in', [group([
          animate('1ms ease-in-out', style({
            'visibility': 'visible'
          })),
          animate('600ms ease-in-out', style({
            'max-height': '*'
          })),
        ]
      )])
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  menuState = 'out';

  constructor() { }

  ngOnInit(): void {
    if (window.outerWidth < 770){
      this.menuState = 'out';
    }else{
      this.menuState = 'in';
    }
  }


  toggleMenu($event: MouseEvent) {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
      console.log(this.menuState)

  }
}

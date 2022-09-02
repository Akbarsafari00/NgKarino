import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-square-card',
  templateUrl: './profile-square-card.component.html',
  styleUrls: ['./profile-square-card.component.css']
})
export class ProfileSquareCardComponent implements OnInit {

  @Input() image = "";
  @Input() name = "";
  @Input() position = "";

  constructor() { }

  ngOnInit(): void {
  }

}

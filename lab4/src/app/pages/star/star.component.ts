import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number = 0;
  startwidth: number = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.startwidth = (this.rating * 90) / 5;
  }
  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}

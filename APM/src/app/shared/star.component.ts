import { Component, OnChanges } from "@angular/core";


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  starWidth: number;
  rating: number;
  
  ngOnChanges(): void {
    this.starWidth = this.rating * 86/5;
  }
}
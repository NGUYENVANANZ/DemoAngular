import {Component, OnInit} from '@angular/core';
import {TuorService} from "../../service/tuor.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  constructor(public service: TuorService) {
  }

  ngOnInit(): void {
  }

}

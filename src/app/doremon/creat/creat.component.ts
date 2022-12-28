import {Component, OnInit} from '@angular/core';
import {TuorService} from "../../service/tuor.service";

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.css']
})
export class CreatComponent implements OnInit{
  constructor(public service : TuorService) {
  }

  ngOnInit(): void {
  }
}

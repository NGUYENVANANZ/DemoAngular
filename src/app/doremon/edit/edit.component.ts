import {Component, OnInit} from '@angular/core';
import {TuorService} from "../../service/tuor.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  constructor(public service : TuorService) {
  }

  ngOnInit(): void {
  }


}

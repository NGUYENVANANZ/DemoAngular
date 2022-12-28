import {Injectable} from '@angular/core';
import {Tuor} from "../Model/Tuor";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TuorService {
  index: number = -1;

  tuor: Tuor = new Tuor("", 0, "");

  list: Tuor[] = [
    {name: 'HaNoi', price: 50000, describe: 'xxxxxxx'},
    {name: 'HoChiMinh', price: 1000000, describe: 'yyyyyyyy'}
  ]

  constructor(private router : Router) {
  }

  show(index: number, tuor: Tuor): void {
    this.index = index;
    this.tuor = new Tuor(tuor.name, tuor.price, tuor.describe)
  }

  cancel() {
    this.index = -1;
    this.tuor = new Tuor("", 0, "");
  }

  delete(i : number) {
    if (confirm("Bạn có chắc là muốn xóa không ?")) {
      this.list.splice(i, 1)
    }
  }

  edit(tuor: Tuor) {
    if (confirm("Bạn có chắc là muốn sửa không ?")) {
      let index = this.index;
      this.list[index] = tuor;
    }
    this.cancel();
    this.router.navigate(["/"]);
  }

  creat(tuor: Tuor) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].name == tuor.name) {
        if (confirm("Trùng tên rồi, bạn muốn tiếp tục không")) {
          this.list[i] = tuor;
          return;
        }
      }
    }
    this.list.push(tuor);
    this.cancel();
    this.router.navigate(["/"]);
  }
}

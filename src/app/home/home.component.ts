import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  btnTxt: string = 'Add an item';
  goalTxt: string = 'My first life goal';
  goals = [];


  constructor(private _data: DataService) { }

  ngOnInit() {

    this.itemCount = this.goals.length;
    this._data.goal.subscribe(res =>this.goals = res);
    this._data.changeGoal(this.goals);
  }
  addItem()
  {
    this.goals.push(this.goalTxt);
    this.goalTxt='';    
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;
  }

  removeItem(i)
  {
    this.goals.splice(i,1);
    this._data.changeGoal(this.goals);
    this.itemCount = this.goals.length;
  }

}

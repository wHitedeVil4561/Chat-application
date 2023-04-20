import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor() {}
  mode: string = '';
  ngOnInit(): void {}
  onChangeMode(value: string) {
    this.mode == value ? (this.mode = '') : (this.mode = value);
  }
}

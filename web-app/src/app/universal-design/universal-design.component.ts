import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-universal-design',
  templateUrl: './universal-design.component.html',
  styleUrls: ['./universal-design.component.scss']
})
export class UniversalDesignComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Universal Design Theory');
  }

}

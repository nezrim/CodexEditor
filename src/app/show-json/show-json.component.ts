import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-json',
  templateUrl: './show-json.component.html',
  styleUrls: ['./show-json.component.css']
})
export class ShowJsonComponent implements OnInit {

  json;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.json = this.router.getCurrentNavigation().extras.state.json;
      }
    });
  }

  ngOnInit() {
  }

}

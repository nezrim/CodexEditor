import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-codex-details',
  templateUrl: './codex-details.component.html',
  styleUrls: ['./codex-details.component.css']
})
export class CodexDetailsComponent implements OnInit {

  codex;
  initial;
  toShow;

  constructor(public activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.codex = this.router.getCurrentNavigation().extras.state;
        this.initial = this.codex.content[0];
        this.toShow = this.codex.content.substring(1);
      }
    });
  }

  ngOnInit() {
  }

}

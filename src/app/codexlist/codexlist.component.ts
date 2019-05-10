import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-codexlist',
  templateUrl: './codexlist.component.html',
  styleUrls: ['./codexlist.component.css']
})
export class CodexlistComponent implements OnInit {

  codexes;

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.queryCodexes().subscribe();

    setTimeout(() => {
      this.db.getCodexes().subscribe( (data) => {
        this.codexes = data;
      });
      // console.log(this.codexes);
    }, 500);
  }



}

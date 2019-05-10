import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcodex',
  templateUrl: './addcodex.component.html',
  styleUrls: ['./addcodex.component.css']
})
export class AddcodexComponent implements OnInit {

  title: string;
  author: string;
  content: string;

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit() {
  }

  addCodex() {
    this.content = this.content.charAt(0).toUpperCase() + this.content.slice(1);
    const codex = {
      title: this.title,
      author: this.author,
      content: this.content
    };
    this.db.addCodex(codex);
    this.router.navigateByUrl('/codexlist');

  }

}

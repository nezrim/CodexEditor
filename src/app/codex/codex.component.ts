import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DatabaseService } from '../database.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-codex',
  templateUrl: './codex.component.html',
  styleUrls: ['./codex.component.css']
})
export class CodexComponent implements OnInit {

  @Input() codex;
  // tslint:disable-next-line:max-line-length
  downloadJsonHref;

  constructor(private router: Router, private db: DatabaseService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.generateDownloadJsonUri();
  }

  toDetails() {
    const data = {
      state: {
        title: this.codex.data.title,
        author: this.codex.data.author,
        content: this.codex.data.content
      }
    };
    this.router.navigate(['/codexdetails'], data);
  }

  delete() {
    this.db.deleteCodex(this.codex.id);
  }

  generateDownloadJsonUri() {
    const downloadJSON = JSON.stringify(this.codex.data);
    console.log(downloadJSON);
    const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(downloadJSON));
    this.downloadJsonHref = uri;
  }

  toJSON() {
    const data = {
      state: {
        json: JSON.stringify(this.codex.data, null, 4)
      }
    };
    this.router.navigate(['showJSON'], data);
  }

}

import { Component } from '@angular/core';
import { TestService } from './test.service';
import { Request } from './request';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular_https';
  public list: any = [];
  public request: Request = { id: 1 };

  constructor(private Test: TestService) {}
  ngOnInit(): void {
    this.getData();
    this.postData();
  }

  public getData() {
    this.Test.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (answer) => {
        this.list = answer;
        //console.log(answer);
      }
    );
  }

  postData() {
    this.Test.post(
      'https://jsonplaceholder.typicode.com/posts',
      this.request
    ).subscribe((data) => {
      this.request = data;
      console.log(data);
    });
  }
}

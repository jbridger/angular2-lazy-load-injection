import { Component, OnInit, Injector } from "@angular/core";
import { CrisisDetailResolver } from "./crisis-detail-resolver.service";

@Component({
  template: `Error component - This is the error message:<b>{{errorMessage}}</b>`
})
export class ErrorComponent implements OnInit {

  public errorMessage: string;

  constructor(private crisisDetailResolver: CrisisDetailResolver,
              injector: Injector) {
    console.log('Instantiating ErrorComponent');
    console.log(injector);
  }

  ngOnInit() {
    this.errorMessage = this.crisisDetailResolver.errorMessage;
  }
}

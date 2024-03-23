import { Location } from "@angular/common";
import { Injectable, Injector, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable()
export abstract class AbstractComponent implements OnDestroy {

  protected formGroup!: FormGroup;
  protected location: Location;
  protected router: Router;
  protected route: ActivatedRoute;
  protected formBuilder: FormBuilder;


  constructor(injector: Injector) {
    this.location = injector.get(Location);
    this.formBuilder = injector.get(FormBuilder);
    this.router = injector.get(Router);
    this.route = injector.get(ActivatedRoute);
  }

  ngOnDestroy() {
  }


}
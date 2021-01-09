import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public isLoading = false;

  constructor() {}
  changeLoading(value: boolean) {
    this.isLoading = value;
  }
}

import {EventEmitter, Injectable} from '@angular/core';

/**
 * TODO Check if this service is necessary
 * Simple service to handle search events
 */
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private onSearch_: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  emitSearch(query: string) {
    this.onSearch_.emit(query);
  }

  searchSubscription() {
    return this.onSearch_;
  }

}

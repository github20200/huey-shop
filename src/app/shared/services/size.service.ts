import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class SizeService {

  constructor(private db: AngularFireDatabase) { }
  
  getSize() {
    return this.db.list('/size', {
      query: {
        orderByChild: 'size'
      }
    });
  }
}

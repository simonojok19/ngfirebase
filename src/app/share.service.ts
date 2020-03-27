import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  private basePath = '/shares';
  public items: any;
  public item: any;

  constructor(private db: AngularFireDatabase) { }

  addShare(data) {
    const obj = this.db.database.ref(this.basePath);
    obj.push(data).then((data) => console.log(data)).catch(e => console.log(e));
    console.log('Success')
  }
}

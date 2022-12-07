import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
providedIn: 'root'
})
export class Service {
constructor(private db: AngularFirestore) { }

getAllData() {
    return new Promise<any>((resolve)=> {
    this.db.collection('requests').valueChanges({ idField: 'id' }).subscribe(data => resolve(data));
    })
    }

addRequest(_newId:any, data:object) {
        this.db.collection('requests').doc(_newId).set(data);
        }
}
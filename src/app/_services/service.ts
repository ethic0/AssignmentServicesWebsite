import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from '../FileUpload';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
providedIn: 'root'
})
export class Service {
    randomId = (Math.random() + 1).toString(36).substring(3).toUpperCase();
    private basePath = this.randomId;
constructor(private dbs: AngularFirestore, private db: AngularFireDatabase, private storage: AngularFireStorage) { }

addRequest(fileUpload: FileUpload, data:object) {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    uploadTask.snapshotChanges().pipe(
        finalize(() => {
           storageRef.getDownloadURL().subscribe(downloadURL => {
            fileUpload.url = downloadURL;
            fileUpload.name = fileUpload.file.name;
            // this.saveFileData(fileUpload);
            let dataToSave = data;
            dataToSave["brief"]= Object.assign({name:fileUpload.name, url:fileUpload.url});
            // console.log('dataToSave', dataToSave);
            this.dbs.collection('requests').doc(this.randomId).set(dataToSave)
            // console.log('url:', downloadURL);
          });
        })
      ).subscribe();
}
private saveFileData(fileUpload: FileUpload): void {
    this.db.list(this.basePath).push(fileUpload);
}



getFiles(numberItems: number): AngularFireList<FileUpload> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }

getAllData() {
    return new Promise<any>((resolve)=> {
    this.dbs.collection('requests').valueChanges({ idField: 'id' }).subscribe(data => resolve(data));
    })
    }


}
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
@Injectable({
  providedIn: 'root'
})
export class SettingService {

  public config = {
    arg_dlb:320,
    arg_dlo:175,
    chl_dol:888,
    chl: 370
  };

  constructor(private storage: Storage) {

  }
  async ngOnInit() {
    this.storage.create();
  }

  async save(config: any) {
    this.config = config;
    await this.storage.set('config', JSON.stringify(this.config));
  }
  async get() {
    await this.storage.get('config').then((data) => {
      if(data){
        this.config=JSON.parse(data);
      }
    })
  }

}

import { Component } from '@angular/core';
import {formatNumber, registerLocaleData} from "@angular/common";
import localeEsAr from '@angular/common/locales/es-AR';
registerLocaleData(localeEsAr, 'es-Ar');
import {SettingService} from "../db/setting.service";
import {Storage} from "@ionic/storage-angular";
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  public form:any={
    'arg_dlb':'',
    'arg_dlo':'',
    'chl_dol':'',
  };
  constructor(public service:SettingService,private storage: Storage,private toastController: ToastController) { }

  async ngOnInit(){
    await this.storage.create();
    this.load();
  }

  save(){
    this.service.save({
      'arg_dlb': this.form.arg_dlb,
      'arg_dlo': this.form.arg_dlo,
      'chl_dol': this.form.chl_dol
    }).then(async r => {
      const toast = await this.toastController.create({
        message: 'Datos guardados',
        duration: 1500,
        position: 'middle'
      });
      await toast.present();
    })
  }

  load() {
    this.service.get().then(() => this.form=this.service.config);
  }

}

import { Component } from '@angular/core';
import {formatNumber, registerLocaleData} from "@angular/common";
import localeEsAr from '@angular/common/locales/es-AR';
registerLocaleData(localeEsAr, 'es-Ar');
import {SettingService} from "../db/setting.service";
import {Storage} from "@ionic/storage-angular";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public input_dol:any='';

  public arb:String='';
  public aro:String='';
  public chl:String='';

  constructor(public service:SettingService,private storage: Storage) {}

  async ngOnInit(){
    await this.storage.create();
    this.changeInput();
    this.service.get();
  }

  public changeInput(){
    this.arb = formatNumber(this.input_dol * this.service.config.arg_dlb,'es-AR','1.2-2');
    this.aro = formatNumber(this.input_dol * this.service.config.arg_dlo,'es-AR','1.2-2');
    this.chl = formatNumber(this.input_dol * this.service.config.chl_dol,'es-AR','1.2-2');

  }

}

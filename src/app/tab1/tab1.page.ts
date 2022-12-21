import { Component } from '@angular/core';
import {formatNumber, registerLocaleData} from "@angular/common";
import localeEsAr from '@angular/common/locales/es-AR';
import {SettingService} from "../db/setting.service";
import {Storage} from "@ionic/storage-angular";

registerLocaleData(localeEsAr, 'es-Ar');
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public input_chl:any='';
  public aro:String='';
  public arb:String='';
  public dol:String='';

  constructor(public service:SettingService,private storage: Storage) {}

  async ngOnInit(){
    await this.storage.create();
    this.changeInput();
    this.service.get();
  }
  BsGm2486
  Mauri602
  BsGm2486

  public changeInput(){
    this.arb = formatNumber(this.input_chl * (1/this.service.config.chl_dol) * this.service.config.arg_dlb,'es-AR','1.2-2');
    this.aro = formatNumber(this.input_chl * (1/this.service.config.chl_dol) * this.service.config.arg_dlo,'es-AR','1.2-2');
    this.dol = formatNumber(this.input_chl * (1/this.service.config.chl_dol),'es-AR','1.2-2');
  }

}

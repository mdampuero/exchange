import { Component } from '@angular/core';
import {formatNumber, registerLocaleData} from "@angular/common";
import localeEsAr from '@angular/common/locales/es-AR';
registerLocaleData(localeEsAr, 'es-Ar');
import {SettingService} from "../db/setting.service";
import {Storage} from "@ionic/storage-angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public input_arg:any='';

  public cho:String='';
  public chl:String='';
  public chb:String='';
  public dlb:String='';
  constructor(public service:SettingService,private storage: Storage) {}

  async ngOnInit(){
    await this.storage.create();
    this.changeInput();
    this.service.get();
  }

  public changeInput(){
    this.dlb = formatNumber(this.input_arg / this.service.config.arg_dlb,'es-AR','1.2-2');
    this.cho = formatNumber(this.input_arg / this.service.config.arg_dlo * this.service.config.chl_dol,'es-AR','1.2-2');
    this.chb = formatNumber(this.input_arg / this.service.config.arg_dlb * this.service.config.chl_dol,'es-AR','1.2-2');
    this.chl = formatNumber(this.input_arg / this.service.config.chl * 1000,'es-AR','1.2-2');

  }

}

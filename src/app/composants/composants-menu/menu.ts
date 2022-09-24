export interface Menu{
  // tslint:disable-next-line:ban-types
  id?: String;
  // tslint:disable-next-line:ban-types
  titre?: String;
  icon?: string;
  url?: string;
  sousMenu?: Array<Menu>;
}

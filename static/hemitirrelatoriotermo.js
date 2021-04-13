/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:18:40.50
*/
gx.evt.autoSkip = false;
gx.define('hemitirrelatoriotermo', false, function () {
   this.ServerClass =  "hemitirrelatoriotermo" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV23BemCodigo=gx.fn.getIntegerValue("vBEMCODIGO",'.') ;
      this.AV22BemSubgrupo=gx.fn.getIntegerValue("vBEMSUBGRUPO",'.') ;
      this.AV21BemVlrAquisicao=gx.fn.getDecimalValue("vBEMVLRAQUISICAO",'.',',') ;
      this.AV18Data=gx.fn.getDateValue("vDATA") ;
   };
   this.e121dh2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e131dh2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151dh2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5];
   this.GXLastCtrlId =5;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK9", format:0,grid:0};
   this.AV23BemCodigo = 0 ;
   this.AV22BemSubgrupo = 0 ;
   this.AV21BemVlrAquisicao = 0 ;
   this.AV18Data = gx.date.nullDate() ;
   this.Events = {"e121dh2_client": ["ENTER", true] ,"e131dh2_client": ["'FECHAR'", true] ,"e151dh2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV27Pgmname',fld:'vPGMNAME'},{av:'AV23BemCodigo',fld:'vBEMCODIGO'},{av:'AV22BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV21BemVlrAquisicao',fld:'vBEMVLRAQUISICAO'},{av:'AV18Data',fld:'vDATA'},{av:'AV15QtdPagGeradas',fld:'vQTDPAGGERADAS'}],[{av:'AV14NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV13NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV15QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV18Data',fld:'vDATA'},{av:'AV21BemVlrAquisicao',fld:'vBEMVLRAQUISICAO'},{av:'AV22BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV23BemCodigo',fld:'vBEMCODIGO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV18Data',fld:'vDATA'},{av:'AV21BemVlrAquisicao',fld:'vBEMVLRAQUISICAO'},{av:'AV22BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV23BemCodigo',fld:'vBEMCODIGO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV23BemCodigo", "vBEMCODIGO", 0, "int");
   this.setVCMap("AV22BemSubgrupo", "vBEMSUBGRUPO", 0, "int");
   this.setVCMap("AV21BemVlrAquisicao", "vBEMVLRAQUISICAO", 0, "decimal");
   this.setVCMap("AV18Data", "vDATA", 0, "date");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hemitirrelatoriotermo());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:58:57.98
*/
gx.evt.autoSkip = false;
gx.define('hregistrarvaloratributo', false, function () {
   this.ServerClass =  "hregistrarvaloratributo" ;
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
      this.AV15EsquemaCodigo=gx.fn.getIntegerValue("vESQUEMACODIGO",'.') ;
      this.AV16AtributoEsquemaCodigo=gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO",'.') ;
   };
   this.e1227z2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1327z2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1527z2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15];
   this.GXLastCtrlId =15;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOINICIAL",gxz:"ZV17CodigoInicial",gxold:"OV17CodigoInicial",gxvar:"AV17CodigoInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17CodigoInicial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17CodigoInicial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOINICIAL",gx.O.AV17CodigoInicial,0)},c2v:function(){gx.O.AV17CodigoInicial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOINICIAL",'.')},nac:gx.falseFn};
   GXValidFnc[13]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOFINAL",gxz:"ZV18CodigoFinal",gxold:"OV18CodigoFinal",gxvar:"AV18CodigoFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18CodigoFinal=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18CodigoFinal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOFINAL",gx.O.AV18CodigoFinal,0)},c2v:function(){gx.O.AV18CodigoFinal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOFINAL",'.')},nac:gx.falseFn};
   this.AV17CodigoInicial = 0 ;
   this.ZV17CodigoInicial = 0 ;
   this.OV17CodigoInicial = 0 ;
   this.AV18CodigoFinal = 0 ;
   this.ZV18CodigoFinal = 0 ;
   this.OV18CodigoFinal = 0 ;
   this.AV17CodigoInicial = 0 ;
   this.AV18CodigoFinal = 0 ;
   this.AV15EsquemaCodigo = 0 ;
   this.AV16AtributoEsquemaCodigo = 0 ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.Events = {"e1227z2_client": ["ENTER", true] ,"e1327z2_client": ["'FECHAR'", true] ,"e1527z2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV17CodigoInicial',fld:'vCODIGOINICIAL'},{av:'AV18CodigoFinal',fld:'vCODIGOFINAL'},{av:'A2941ValorAtributoCodigo',fld:'VALORATRIBUTOCODIGO'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV15EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'A2921AtributoEsquemaCodigo',fld:'ATRIBUTOESQUEMACODIGO'},{av:'AV16AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'}],[{av:'AV19Qtde',fld:'vQTDE'},{av:'AV20ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'AV18CodigoFinal',fld:'vCODIGOFINAL'},{av:'AV17CodigoInicial',fld:'vCODIGOINICIAL'},{av:'AV16AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV15EsquemaCodigo',fld:'vESQUEMACODIGO'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15EsquemaCodigo", "vESQUEMACODIGO", 0, "int");
   this.setVCMap("AV16AtributoEsquemaCodigo", "vATRIBUTOESQUEMACODIGO", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarvaloratributo());

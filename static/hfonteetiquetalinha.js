/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:36:55.11
*/
gx.evt.autoSkip = false;
gx.define('hfonteetiquetalinha', false, function () {
   this.ServerClass =  "hfonteetiquetalinha" ;
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
      this.AV13EmpresaEtiquetaEmpresaId=gx.fn.getControlValue("vEMPRESAETIQUETAEMPRESAID") ;
   };
   this.Validv_Etiquetacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Etiquetatamfonte=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETATAMFONTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Etiquetatipoimpressao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vETIQUETATIPOIMPRESSAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11g82_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12g82_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15g82_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,25,27,30,32,35,37,45];
   this.GXLastCtrlId =45;
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE5",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Etiquetacodigo,isvalid:null,rgrid:[],fld:"vETIQUETACODIGO",gxz:"ZV14EtiquetaCodigo",gxold:"OV14EtiquetaCodigo",gxvar:"AV14EtiquetaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14EtiquetaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14EtiquetaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETACODIGO",gx.O.AV14EtiquetaCodigo,0)},c2v:function(){gx.O.AV14EtiquetaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETADESCRICAO",gxz:"ZV15EtiquetaDescricao",gxold:"OV15EtiquetaDescricao",gxvar:"AV15EtiquetaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15EtiquetaDescricao=Value},v2z:function(Value){gx.O.ZV15EtiquetaDescricao=Value},v2c:function(){gx.fn.setControlValue("vETIQUETADESCRICAO",gx.O.AV15EtiquetaDescricao,0)},c2v:function(){gx.O.AV15EtiquetaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetatamfonte,isvalid:null,rgrid:[],fld:"vETIQUETATAMFONTE",gxz:"ZV17EtiquetaTamFonte",gxold:"OV17EtiquetaTamFonte",gxvar:"AV17EtiquetaTamFonte",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17EtiquetaTamFonte=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17EtiquetaTamFonte=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vETIQUETATAMFONTE",gx.O.AV17EtiquetaTamFonte)},c2v:function(){gx.O.AV17EtiquetaTamFonte=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETATAMFONTE",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETALINHAMARGESQ",gxz:"ZV18EtiquetaLinhaMargEsq",gxold:"OV18EtiquetaLinhaMargEsq",gxvar:"AV18EtiquetaLinhaMargEsq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18EtiquetaLinhaMargEsq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18EtiquetaLinhaMargEsq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETALINHAMARGESQ",gx.O.AV18EtiquetaLinhaMargEsq,0)},c2v:function(){gx.O.AV18EtiquetaLinhaMargEsq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETALINHAMARGESQ",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETALINHAENTRECOL",gxz:"ZV19EtiquetaLinhaEntreCol",gxold:"OV19EtiquetaLinhaEntreCol",gxvar:"AV19EtiquetaLinhaEntreCol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19EtiquetaLinhaEntreCol=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19EtiquetaLinhaEntreCol=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETALINHAENTRECOL",gx.O.AV19EtiquetaLinhaEntreCol,0)},c2v:function(){gx.O.AV19EtiquetaLinhaEntreCol=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETALINHAENTRECOL",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vETIQUETALINHAQTDCAR",gxz:"ZV20EtiquetaLinhaQtdCar",gxold:"OV20EtiquetaLinhaQtdCar",gxvar:"AV20EtiquetaLinhaQtdCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20EtiquetaLinhaQtdCar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20EtiquetaLinhaQtdCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vETIQUETALINHAQTDCAR",gx.O.AV20EtiquetaLinhaQtdCar,0)},c2v:function(){gx.O.AV20EtiquetaLinhaQtdCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vETIQUETALINHAQTDCAR",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Etiquetatipoimpressao,isvalid:null,rgrid:[],fld:"vETIQUETATIPOIMPRESSAO",gxz:"ZV16EtiquetaTipoImpressao",gxold:"OV16EtiquetaTipoImpressao",gxvar:"AV16EtiquetaTipoImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16EtiquetaTipoImpressao=Value},v2z:function(Value){gx.O.ZV16EtiquetaTipoImpressao=Value},v2c:function(){gx.fn.setComboBoxValue("vETIQUETATIPOIMPRESSAO",gx.O.AV16EtiquetaTipoImpressao)},c2v:function(){gx.O.AV16EtiquetaTipoImpressao=this.val()},val:function(){return gx.fn.getControlValue("vETIQUETATIPOIMPRESSAO")},nac:gx.falseFn};
   this.AV14EtiquetaCodigo = 0 ;
   this.ZV14EtiquetaCodigo = 0 ;
   this.OV14EtiquetaCodigo = 0 ;
   this.AV15EtiquetaDescricao = "" ;
   this.ZV15EtiquetaDescricao = "" ;
   this.OV15EtiquetaDescricao = "" ;
   this.AV17EtiquetaTamFonte = 0 ;
   this.ZV17EtiquetaTamFonte = 0 ;
   this.OV17EtiquetaTamFonte = 0 ;
   this.AV18EtiquetaLinhaMargEsq = 0 ;
   this.ZV18EtiquetaLinhaMargEsq = 0 ;
   this.OV18EtiquetaLinhaMargEsq = 0 ;
   this.AV19EtiquetaLinhaEntreCol = 0 ;
   this.ZV19EtiquetaLinhaEntreCol = 0 ;
   this.OV19EtiquetaLinhaEntreCol = 0 ;
   this.AV20EtiquetaLinhaQtdCar = 0 ;
   this.ZV20EtiquetaLinhaQtdCar = 0 ;
   this.OV20EtiquetaLinhaQtdCar = 0 ;
   this.AV16EtiquetaTipoImpressao = "" ;
   this.ZV16EtiquetaTipoImpressao = "" ;
   this.OV16EtiquetaTipoImpressao = "" ;
   this.AV14EtiquetaCodigo = 0 ;
   this.AV15EtiquetaDescricao = "" ;
   this.AV17EtiquetaTamFonte = 0 ;
   this.AV18EtiquetaLinhaMargEsq = 0 ;
   this.AV19EtiquetaLinhaEntreCol = 0 ;
   this.AV20EtiquetaLinhaQtdCar = 0 ;
   this.AV16EtiquetaTipoImpressao = "" ;
   this.AV13EmpresaEtiquetaEmpresaId = "" ;
   this.A241EtiquetaCodigo = 0 ;
   this.A240EmpresaEtiquetaEmpresaId = "" ;
   this.A235EtiquetaDescricao = "" ;
   this.A743EtiquetaTipoImpressao = "" ;
   this.Events = {"e11g82_client": ["ENTER", true] ,"e12g82_client": ["'CANCELAR'", true] ,"e15g82_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV17EtiquetaTamFonte',fld:'vETIQUETATAMFONTE'},{av:'AV18EtiquetaLinhaMargEsq',fld:'vETIQUETALINHAMARGESQ'},{av:'AV19EtiquetaLinhaEntreCol',fld:'vETIQUETALINHAENTRECOL'},{av:'AV20EtiquetaLinhaQtdCar',fld:'vETIQUETALINHAQTDCAR'},{av:'AV16EtiquetaTipoImpressao',fld:'vETIQUETATIPOIMPRESSAO'},{av:'AV13EmpresaEtiquetaEmpresaId',fld:'vEMPRESAETIQUETAEMPRESAID',hsh:true},{av:'AV14EtiquetaCodigo',fld:'vETIQUETACODIGO',hsh:true}],[{av:'AV10SnErro',fld:'vSNERRO'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV13EmpresaEtiquetaEmpresaId", "vEMPRESAETIQUETAEMPRESAID", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfonteetiquetalinha());

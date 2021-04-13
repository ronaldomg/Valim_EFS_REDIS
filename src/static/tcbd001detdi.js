/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:28.61
*/
gx.evt.autoSkip = false;
gx.define('tcbd001detdi', false, function () {
   this.ServerClass =  "tcbd001detdi" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A10390CBD001DETDICbdTpViaTransp=gx.fn.getIntegerValue("CBD001DETDICBDTPVIATRANSP",'.') ;
      this.A10392CBD001DETDICbdvAFRMM=gx.fn.getDecimalValue("CBD001DETDICBDVAFRMM",'.',',') ;
      this.A10389CBD001DETDICbdTpIntermedio=gx.fn.getIntegerValue("CBD001DETDICBDTPINTERMEDIO",'.') ;
      this.A10388CBD001DETDICbdCNPJ_adq=gx.fn.getControlValue("CBD001DETDICBDCNPJ_ADQ") ;
      this.A10391CBD001DETDICbdUFTerceiro=gx.fn.getControlValue("CBD001DETDICBDUFTERCEIRO") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Cbd001detdicbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETDICBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detdicbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETDICBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detdicbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETDICBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detdicbdnitem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETDICBDNITEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detdicbdndi=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001detdicbdndi",["gx.O.A7062CBD001DETDICbdEmpCodigo", "gx.O.A7066CBD001DETDICbdNtfSerie", "gx.O.A7065CBD001DETDICbdNtfNumero", "gx.O.A7064CBD001DETDICbdnItem", "gx.O.A7063CBD001DETDICbdnDI", 'gx.date.urlDate(gx.O.A7061CBD001DETDICbddDi,"DMY4")', "gx.O.A7068CBD001DETDICbdxLocDesemb", "gx.O.A7067CBD001DETDICbdUFDesemb", "gx.O.A7059CBD001DETDICbdcExportador", 'gx.date.urlDate(gx.O.A7060CBD001DETDICbddDesemb,"DMY4")', "gx.O.A10390CBD001DETDICbdTpViaTransp", "gx.num.urlDecimal(gx.O.A10392CBD001DETDICbdvAFRMM,\'.\',\',\')", "gx.O.A10389CBD001DETDICbdTpIntermedio", "gx.O.A10388CBD001DETDICbdCNPJ_adq", "gx.O.A10391CBD001DETDICbdUFTerceiro"],["A7061CBD001DETDICbddDi", "A7068CBD001DETDICbdxLocDesemb", "A7067CBD001DETDICbdUFDesemb", "A7059CBD001DETDICbdcExportador", "A7060CBD001DETDICbddDesemb", "A10390CBD001DETDICbdTpViaTransp", "A10392CBD001DETDICbdvAFRMM", "A10389CBD001DETDICbdTpIntermedio", "A10388CBD001DETDICbdCNPJ_adq", "A10391CBD001DETDICbdUFTerceiro", "Gx_mode", "Z7062CBD001DETDICbdEmpCodigo", "Z7066CBD001DETDICbdNtfSerie", "Z7065CBD001DETDICbdNtfNumero", "Z7064CBD001DETDICbdnItem", "Z7063CBD001DETDICbdnDI", "Z7061CBD001DETDICbddDi", "Z7068CBD001DETDICbdxLocDesemb", "Z7067CBD001DETDICbdUFDesemb", "Z7059CBD001DETDICbdcExportador", "Z7060CBD001DETDICbddDesemb", "Z10390CBD001DETDICbdTpViaTransp", "Z10392CBD001DETDICbdvAFRMM", "Z10389CBD001DETDICbdTpIntermedio", "Z10388CBD001DETDICbdCNPJ_adq", "Z10391CBD001DETDICbdUFTerceiro", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11aa550_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12aa550_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40,44,46,49,51,54,56,59,61,64,66];
   this.GXLastCtrlId =66;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detdicbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001DETDICBDEMPCODIGO",gxz:"Z7062CBD001DETDICbdEmpCodigo",gxold:"O7062CBD001DETDICbdEmpCodigo",gxvar:"A7062CBD001DETDICbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7062CBD001DETDICbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7062CBD001DETDICbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETDICBDEMPCODIGO",gx.O.A7062CBD001DETDICbdEmpCodigo,0)},c2v:function(){gx.O.A7062CBD001DETDICbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETDICBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detdicbdntfserie,isvalid:null,rgrid:[],fld:"CBD001DETDICBDNTFSERIE",gxz:"Z7066CBD001DETDICbdNtfSerie",gxold:"O7066CBD001DETDICbdNtfSerie",gxvar:"A7066CBD001DETDICbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7066CBD001DETDICbdNtfSerie=Value},v2z:function(Value){gx.O.Z7066CBD001DETDICbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001DETDICBDNTFSERIE",gx.O.A7066CBD001DETDICbdNtfSerie,0)},c2v:function(){gx.O.A7066CBD001DETDICbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETDICBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detdicbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001DETDICBDNTFNUMERO",gxz:"Z7065CBD001DETDICbdNtfNumero",gxold:"O7065CBD001DETDICbdNtfNumero",gxvar:"A7065CBD001DETDICbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7065CBD001DETDICbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7065CBD001DETDICbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETDICBDNTFNUMERO",gx.O.A7065CBD001DETDICbdNtfNumero,0)},c2v:function(){gx.O.A7065CBD001DETDICbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETDICBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detdicbdnitem,isvalid:null,rgrid:[],fld:"CBD001DETDICBDNITEM",gxz:"Z7064CBD001DETDICbdnItem",gxold:"O7064CBD001DETDICbdnItem",gxvar:"A7064CBD001DETDICbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7064CBD001DETDICbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7064CBD001DETDICbdnItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETDICBDNITEM",gx.O.A7064CBD001DETDICbdnItem,0)},c2v:function(){gx.O.A7064CBD001DETDICbdnItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETDICBDNITEM",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:12,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detdicbdndi,isvalid:null,rgrid:[],fld:"CBD001DETDICBDNDI",gxz:"Z7063CBD001DETDICbdnDI",gxold:"O7063CBD001DETDICbdnDI",gxvar:"A7063CBD001DETDICbdnDI",ucs:[],op:[66,61,56,51,46],ip:[66,61,56,51,46,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7063CBD001DETDICbdnDI=Value},v2z:function(Value){gx.O.Z7063CBD001DETDICbdnDI=Value},v2c:function(){gx.fn.setControlValue("CBD001DETDICBDNDI",gx.O.A7063CBD001DETDICbdnDI,0)},c2v:function(){gx.O.A7063CBD001DETDICbdnDI=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETDICBDNDI")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETDICBDDDI",gxz:"Z7061CBD001DETDICbddDi",gxold:"O7061CBD001DETDICbddDi",gxvar:"A7061CBD001DETDICbddDi",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7061CBD001DETDICbddDi=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7061CBD001DETDICbddDi=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETDICBDDDI",gx.O.A7061CBD001DETDICbddDi,0)},c2v:function(){gx.O.A7061CBD001DETDICbddDi=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CBD001DETDICBDDDI")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETDICBDXLOCDESEMB",gxz:"Z7068CBD001DETDICbdxLocDesemb",gxold:"O7068CBD001DETDICbdxLocDesemb",gxvar:"A7068CBD001DETDICbdxLocDesemb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7068CBD001DETDICbdxLocDesemb=Value},v2z:function(Value){gx.O.Z7068CBD001DETDICbdxLocDesemb=Value},v2c:function(){gx.fn.setControlValue("CBD001DETDICBDXLOCDESEMB",gx.O.A7068CBD001DETDICbdxLocDesemb,0)},c2v:function(){gx.O.A7068CBD001DETDICbdxLocDesemb=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETDICBDXLOCDESEMB")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETDICBDUFDESEMB",gxz:"Z7067CBD001DETDICbdUFDesemb",gxold:"O7067CBD001DETDICbdUFDesemb",gxvar:"A7067CBD001DETDICbdUFDesemb",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7067CBD001DETDICbdUFDesemb=Value},v2z:function(Value){gx.O.Z7067CBD001DETDICbdUFDesemb=Value},v2c:function(){gx.fn.setControlValue("CBD001DETDICBDUFDESEMB",gx.O.A7067CBD001DETDICbdUFDesemb,0)},c2v:function(){gx.O.A7067CBD001DETDICbdUFDesemb=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETDICBDUFDESEMB")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETDICBDCEXPORTADOR",gxz:"Z7059CBD001DETDICbdcExportador",gxold:"O7059CBD001DETDICbdcExportador",gxvar:"A7059CBD001DETDICbdcExportador",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7059CBD001DETDICbdcExportador=Value},v2z:function(Value){gx.O.Z7059CBD001DETDICbdcExportador=Value},v2c:function(){gx.fn.setControlValue("CBD001DETDICBDCEXPORTADOR",gx.O.A7059CBD001DETDICbdcExportador,0)},c2v:function(){gx.O.A7059CBD001DETDICbdcExportador=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETDICBDCEXPORTADOR")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETDICBDDDESEMB",gxz:"Z7060CBD001DETDICbddDesemb",gxold:"O7060CBD001DETDICbddDesemb",gxvar:"A7060CBD001DETDICbddDesemb",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7060CBD001DETDICbddDesemb=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7060CBD001DETDICbddDesemb=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETDICBDDDESEMB",gx.O.A7060CBD001DETDICbddDesemb,0)},c2v:function(){gx.O.A7060CBD001DETDICbddDesemb=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CBD001DETDICBDDDESEMB")},nac:gx.falseFn};
   this.A7062CBD001DETDICbdEmpCodigo = 0 ;
   this.Z7062CBD001DETDICbdEmpCodigo = 0 ;
   this.O7062CBD001DETDICbdEmpCodigo = 0 ;
   this.A7066CBD001DETDICbdNtfSerie = "" ;
   this.Z7066CBD001DETDICbdNtfSerie = "" ;
   this.O7066CBD001DETDICbdNtfSerie = "" ;
   this.A7065CBD001DETDICbdNtfNumero = 0 ;
   this.Z7065CBD001DETDICbdNtfNumero = 0 ;
   this.O7065CBD001DETDICbdNtfNumero = 0 ;
   this.A7064CBD001DETDICbdnItem = 0 ;
   this.Z7064CBD001DETDICbdnItem = 0 ;
   this.O7064CBD001DETDICbdnItem = 0 ;
   this.A7063CBD001DETDICbdnDI = "" ;
   this.Z7063CBD001DETDICbdnDI = "" ;
   this.O7063CBD001DETDICbdnDI = "" ;
   this.A7061CBD001DETDICbddDi = gx.date.nullDate() ;
   this.Z7061CBD001DETDICbddDi = gx.date.nullDate() ;
   this.O7061CBD001DETDICbddDi = gx.date.nullDate() ;
   this.A7068CBD001DETDICbdxLocDesemb = "" ;
   this.Z7068CBD001DETDICbdxLocDesemb = "" ;
   this.O7068CBD001DETDICbdxLocDesemb = "" ;
   this.A7067CBD001DETDICbdUFDesemb = "" ;
   this.Z7067CBD001DETDICbdUFDesemb = "" ;
   this.O7067CBD001DETDICbdUFDesemb = "" ;
   this.A7059CBD001DETDICbdcExportador = "" ;
   this.Z7059CBD001DETDICbdcExportador = "" ;
   this.O7059CBD001DETDICbdcExportador = "" ;
   this.A7060CBD001DETDICbddDesemb = gx.date.nullDate() ;
   this.Z7060CBD001DETDICbddDesemb = gx.date.nullDate() ;
   this.O7060CBD001DETDICbddDesemb = gx.date.nullDate() ;
   this.A7062CBD001DETDICbdEmpCodigo = 0 ;
   this.A7066CBD001DETDICbdNtfSerie = "" ;
   this.A7065CBD001DETDICbdNtfNumero = 0 ;
   this.A7064CBD001DETDICbdnItem = 0 ;
   this.A7063CBD001DETDICbdnDI = "" ;
   this.A7061CBD001DETDICbddDi = gx.date.nullDate() ;
   this.A7068CBD001DETDICbdxLocDesemb = "" ;
   this.A7067CBD001DETDICbdUFDesemb = "" ;
   this.A7059CBD001DETDICbdcExportador = "" ;
   this.A7060CBD001DETDICbddDesemb = gx.date.nullDate() ;
   this.A10390CBD001DETDICbdTpViaTransp = 0 ;
   this.A10392CBD001DETDICbdvAFRMM = 0 ;
   this.A10389CBD001DETDICbdTpIntermedio = 0 ;
   this.A10388CBD001DETDICbdCNPJ_adq = "" ;
   this.A10391CBD001DETDICbdUFTerceiro = "" ;
   this.Events = {"e11aa550_client": ["ENTER", true] ,"e12aa550_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("A10390CBD001DETDICbdTpViaTransp", "CBD001DETDICBDTPVIATRANSP", 0, "int");
   this.setVCMap("A10392CBD001DETDICbdvAFRMM", "CBD001DETDICBDVAFRMM", 0, "decimal");
   this.setVCMap("A10389CBD001DETDICbdTpIntermedio", "CBD001DETDICBDTPINTERMEDIO", 0, "int");
   this.setVCMap("A10388CBD001DETDICbdCNPJ_adq", "CBD001DETDICBDCNPJ_ADQ", 0, "svchar");
   this.setVCMap("A10391CBD001DETDICbdUFTerceiro", "CBD001DETDICBDUFTERCEIRO", 0, "svchar");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001detdi());

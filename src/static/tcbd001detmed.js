/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:18.77
*/
gx.evt.autoSkip = false;
gx.define('tcbd001detmed', false, function () {
   this.ServerClass =  "tcbd001detmed" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Cbd001detmedcbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETMEDCBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detmedcbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETMEDCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detmedcbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETMEDCBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detmedcbdnitem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETMEDCBDNITEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detmedcbdnlote=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001detmedcbdnlote",["gx.O.A7107CBD001DETMEDCbdEmpCodigo", "gx.O.A7111CBD001DETMEDCbdNtfSerie", "gx.O.A7110CBD001DETMEDCbdNtfNumero", "gx.O.A7108CBD001DETMEDCbdnItem", "gx.O.A7109CBD001DETMEDCbdnLote", "gx.num.urlDecimal(gx.O.A7112CBD001DETMEDCbdqLote,\'.\',\',\')", 'gx.date.urlDate(gx.O.A7105CBD001DETMEDCbddFab,"DMY4")', 'gx.date.urlDate(gx.O.A7106CBD001DETMEDCbddVal,"DMY4")', "gx.num.urlDecimal(gx.O.A7113CBD001DETMEDCbdvPMC,\'.\',\',\')"],["A7112CBD001DETMEDCbdqLote", "A7105CBD001DETMEDCbddFab", "A7106CBD001DETMEDCbddVal", "A7113CBD001DETMEDCbdvPMC", "Gx_mode", "Z7107CBD001DETMEDCbdEmpCodigo", "Z7111CBD001DETMEDCbdNtfSerie", "Z7110CBD001DETMEDCbdNtfNumero", "Z7108CBD001DETMEDCbdnItem", "Z7109CBD001DETMEDCbdnLote", "Z7112CBD001DETMEDCbdqLote", "Z7105CBD001DETMEDCbddFab", "Z7106CBD001DETMEDCbddVal", "Z7113CBD001DETMEDCbdvPMC", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11a7547_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12a7547_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,15,18,20,23,25,28,30,33,35,38,40,44,46,49,51,54,56,59,61];
   this.GXLastCtrlId =61;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[15]={fld:"TABLE2",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detmedcbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001DETMEDCBDEMPCODIGO",gxz:"Z7107CBD001DETMEDCbdEmpCodigo",gxold:"O7107CBD001DETMEDCbdEmpCodigo",gxvar:"A7107CBD001DETMEDCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7107CBD001DETMEDCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7107CBD001DETMEDCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETMEDCBDEMPCODIGO",gx.O.A7107CBD001DETMEDCbdEmpCodigo,0)},c2v:function(){gx.O.A7107CBD001DETMEDCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETMEDCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detmedcbdntfserie,isvalid:null,rgrid:[],fld:"CBD001DETMEDCBDNTFSERIE",gxz:"Z7111CBD001DETMEDCbdNtfSerie",gxold:"O7111CBD001DETMEDCbdNtfSerie",gxvar:"A7111CBD001DETMEDCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7111CBD001DETMEDCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7111CBD001DETMEDCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001DETMEDCBDNTFSERIE",gx.O.A7111CBD001DETMEDCbdNtfSerie,0)},c2v:function(){gx.O.A7111CBD001DETMEDCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETMEDCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detmedcbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001DETMEDCBDNTFNUMERO",gxz:"Z7110CBD001DETMEDCbdNtfNumero",gxold:"O7110CBD001DETMEDCbdNtfNumero",gxvar:"A7110CBD001DETMEDCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7110CBD001DETMEDCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7110CBD001DETMEDCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETMEDCBDNTFNUMERO",gx.O.A7110CBD001DETMEDCbdNtfNumero,0)},c2v:function(){gx.O.A7110CBD001DETMEDCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETMEDCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detmedcbdnitem,isvalid:null,rgrid:[],fld:"CBD001DETMEDCBDNITEM",gxz:"Z7108CBD001DETMEDCbdnItem",gxold:"O7108CBD001DETMEDCbdnItem",gxvar:"A7108CBD001DETMEDCbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7108CBD001DETMEDCbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7108CBD001DETMEDCbdnItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETMEDCBDNITEM",gx.O.A7108CBD001DETMEDCbdnItem,0)},c2v:function(){gx.O.A7108CBD001DETMEDCbdnItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETMEDCBDNITEM",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detmedcbdnlote,isvalid:null,rgrid:[],fld:"CBD001DETMEDCBDNLOTE",gxz:"Z7109CBD001DETMEDCbdnLote",gxold:"O7109CBD001DETMEDCbdnLote",gxvar:"A7109CBD001DETMEDCbdnLote",ucs:[],op:[61,56,51,46],ip:[61,56,51,46,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7109CBD001DETMEDCbdnLote=Value},v2z:function(Value){gx.O.Z7109CBD001DETMEDCbdnLote=Value},v2c:function(){gx.fn.setControlValue("CBD001DETMEDCBDNLOTE",gx.O.A7109CBD001DETMEDCbdnLote,0)},c2v:function(){gx.O.A7109CBD001DETMEDCbdnLote=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETMEDCBDNLOTE")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"decimal",len:11,dec:3,sign:false,pic:"ZZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETMEDCBDQLOTE",gxz:"Z7112CBD001DETMEDCbdqLote",gxold:"O7112CBD001DETMEDCbdqLote",gxvar:"A7112CBD001DETMEDCbdqLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7112CBD001DETMEDCbdqLote=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7112CBD001DETMEDCbdqLote=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETMEDCBDQLOTE",gx.O.A7112CBD001DETMEDCbdqLote,3,',')},c2v:function(){gx.O.A7112CBD001DETMEDCbdqLote=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETMEDCBDQLOTE",'.',',')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETMEDCBDDFAB",gxz:"Z7105CBD001DETMEDCbddFab",gxold:"O7105CBD001DETMEDCbddFab",gxvar:"A7105CBD001DETMEDCbddFab",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7105CBD001DETMEDCbddFab=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7105CBD001DETMEDCbddFab=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETMEDCBDDFAB",gx.O.A7105CBD001DETMEDCbddFab,0)},c2v:function(){gx.O.A7105CBD001DETMEDCbddFab=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CBD001DETMEDCBDDFAB")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETMEDCBDDVAL",gxz:"Z7106CBD001DETMEDCbddVal",gxold:"O7106CBD001DETMEDCbddVal",gxvar:"A7106CBD001DETMEDCbddVal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7106CBD001DETMEDCbddVal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7106CBD001DETMEDCbddVal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETMEDCBDDVAL",gx.O.A7106CBD001DETMEDCbddVal,0)},c2v:function(){gx.O.A7106CBD001DETMEDCbddVal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CBD001DETMEDCBDDVAL")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETMEDCBDVPMC",gxz:"Z7113CBD001DETMEDCbdvPMC",gxold:"O7113CBD001DETMEDCbdvPMC",gxvar:"A7113CBD001DETMEDCbdvPMC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7113CBD001DETMEDCbdvPMC=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7113CBD001DETMEDCbdvPMC=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETMEDCBDVPMC",gx.O.A7113CBD001DETMEDCbdvPMC,2,',')},c2v:function(){gx.O.A7113CBD001DETMEDCbdvPMC=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETMEDCBDVPMC",'.',',')},nac:gx.falseFn};
   this.A7107CBD001DETMEDCbdEmpCodigo = 0 ;
   this.Z7107CBD001DETMEDCbdEmpCodigo = 0 ;
   this.O7107CBD001DETMEDCbdEmpCodigo = 0 ;
   this.A7111CBD001DETMEDCbdNtfSerie = "" ;
   this.Z7111CBD001DETMEDCbdNtfSerie = "" ;
   this.O7111CBD001DETMEDCbdNtfSerie = "" ;
   this.A7110CBD001DETMEDCbdNtfNumero = 0 ;
   this.Z7110CBD001DETMEDCbdNtfNumero = 0 ;
   this.O7110CBD001DETMEDCbdNtfNumero = 0 ;
   this.A7108CBD001DETMEDCbdnItem = 0 ;
   this.Z7108CBD001DETMEDCbdnItem = 0 ;
   this.O7108CBD001DETMEDCbdnItem = 0 ;
   this.A7109CBD001DETMEDCbdnLote = "" ;
   this.Z7109CBD001DETMEDCbdnLote = "" ;
   this.O7109CBD001DETMEDCbdnLote = "" ;
   this.A7112CBD001DETMEDCbdqLote = 0 ;
   this.Z7112CBD001DETMEDCbdqLote = 0 ;
   this.O7112CBD001DETMEDCbdqLote = 0 ;
   this.A7105CBD001DETMEDCbddFab = gx.date.nullDate() ;
   this.Z7105CBD001DETMEDCbddFab = gx.date.nullDate() ;
   this.O7105CBD001DETMEDCbddFab = gx.date.nullDate() ;
   this.A7106CBD001DETMEDCbddVal = gx.date.nullDate() ;
   this.Z7106CBD001DETMEDCbddVal = gx.date.nullDate() ;
   this.O7106CBD001DETMEDCbddVal = gx.date.nullDate() ;
   this.A7113CBD001DETMEDCbdvPMC = 0 ;
   this.Z7113CBD001DETMEDCbdvPMC = 0 ;
   this.O7113CBD001DETMEDCbdvPMC = 0 ;
   this.A7107CBD001DETMEDCbdEmpCodigo = 0 ;
   this.A7111CBD001DETMEDCbdNtfSerie = "" ;
   this.A7110CBD001DETMEDCbdNtfNumero = 0 ;
   this.A7108CBD001DETMEDCbdnItem = 0 ;
   this.A7109CBD001DETMEDCbdnLote = "" ;
   this.A7112CBD001DETMEDCbdqLote = 0 ;
   this.A7105CBD001DETMEDCbddFab = gx.date.nullDate() ;
   this.A7106CBD001DETMEDCbddVal = gx.date.nullDate() ;
   this.A7113CBD001DETMEDCbdvPMC = 0 ;
   this.Events = {"e11a7547_client": ["ENTER", true] ,"e12a7547_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001detmed());

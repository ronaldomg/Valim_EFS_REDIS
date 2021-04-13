/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:17.5
*/
gx.evt.autoSkip = false;
gx.define('tcbd001detpis', false, function () {
   this.ServerClass =  "tcbd001detpis" ;
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
   this.Valid_Cbd001detpiscbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETPISCBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detpiscbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETPISCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detpiscbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETPISCBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detpiscbdnitem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETPISCBDNITEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detpiscbdcst_pis=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001detpiscbdcst_pis",["gx.O.A7115CBD001DETPISCbdEmpCodigo", "gx.O.A7118CBD001DETPISCbdNtfSerie", "gx.O.A7117CBD001DETPISCbdNtfNumero", "gx.O.A7116CBD001DETPISCbdnItem", "gx.O.A7114CBD001DETPISCbdCST_pis", "gx.num.urlDecimal(gx.O.A7122CBD001DETPISCbdvBC_pis,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7119CBD001DETPISCbdpPIS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7123CBD001DETPISCbdvPIS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7120CBD001DETPISCbdqBCprod_pis,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7121CBD001DETPISCbdvAliqProd_pis,\'.\',\',\')"],["A7122CBD001DETPISCbdvBC_pis", "A7119CBD001DETPISCbdpPIS", "A7123CBD001DETPISCbdvPIS", "A7120CBD001DETPISCbdqBCprod_pis", "A7121CBD001DETPISCbdvAliqProd_pis", "Gx_mode", "Z7115CBD001DETPISCbdEmpCodigo", "Z7118CBD001DETPISCbdNtfSerie", "Z7117CBD001DETPISCbdNtfNumero", "Z7116CBD001DETPISCbdnItem", "Z7114CBD001DETPISCbdCST_pis", "Z7122CBD001DETPISCbdvBC_pis", "Z7119CBD001DETPISCbdpPIS", "Z7123CBD001DETPISCbdvPIS", "Z7120CBD001DETPISCbdqBCprod_pis", "Z7121CBD001DETPISCbdvAliqProd_pis", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11a6546_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12a6546_client=function()
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
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detpiscbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001DETPISCBDEMPCODIGO",gxz:"Z7115CBD001DETPISCbdEmpCodigo",gxold:"O7115CBD001DETPISCbdEmpCodigo",gxvar:"A7115CBD001DETPISCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7115CBD001DETPISCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7115CBD001DETPISCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETPISCBDEMPCODIGO",gx.O.A7115CBD001DETPISCbdEmpCodigo,0)},c2v:function(){gx.O.A7115CBD001DETPISCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETPISCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detpiscbdntfserie,isvalid:null,rgrid:[],fld:"CBD001DETPISCBDNTFSERIE",gxz:"Z7118CBD001DETPISCbdNtfSerie",gxold:"O7118CBD001DETPISCbdNtfSerie",gxvar:"A7118CBD001DETPISCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7118CBD001DETPISCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7118CBD001DETPISCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001DETPISCBDNTFSERIE",gx.O.A7118CBD001DETPISCbdNtfSerie,0)},c2v:function(){gx.O.A7118CBD001DETPISCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETPISCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detpiscbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001DETPISCBDNTFNUMERO",gxz:"Z7117CBD001DETPISCbdNtfNumero",gxold:"O7117CBD001DETPISCbdNtfNumero",gxvar:"A7117CBD001DETPISCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7117CBD001DETPISCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7117CBD001DETPISCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETPISCBDNTFNUMERO",gx.O.A7117CBD001DETPISCbdNtfNumero,0)},c2v:function(){gx.O.A7117CBD001DETPISCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETPISCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detpiscbdnitem,isvalid:null,rgrid:[],fld:"CBD001DETPISCBDNITEM",gxz:"Z7116CBD001DETPISCbdnItem",gxold:"O7116CBD001DETPISCbdnItem",gxvar:"A7116CBD001DETPISCbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7116CBD001DETPISCbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7116CBD001DETPISCbdnItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETPISCBDNITEM",gx.O.A7116CBD001DETPISCbdnItem,0)},c2v:function(){gx.O.A7116CBD001DETPISCbdnItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETPISCBDNITEM",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detpiscbdcst_pis,isvalid:null,rgrid:[],fld:"CBD001DETPISCBDCST_PIS",gxz:"Z7114CBD001DETPISCbdCST_pis",gxold:"O7114CBD001DETPISCbdCST_pis",gxvar:"A7114CBD001DETPISCbdCST_pis",ucs:[],op:[66,61,56,51,46],ip:[66,61,56,51,46,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7114CBD001DETPISCbdCST_pis=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7114CBD001DETPISCbdCST_pis=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETPISCBDCST_PIS",gx.O.A7114CBD001DETPISCbdCST_pis,0)},c2v:function(){gx.O.A7114CBD001DETPISCbdCST_pis=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETPISCBDCST_PIS",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETPISCBDVBC_PIS",gxz:"Z7122CBD001DETPISCbdvBC_pis",gxold:"O7122CBD001DETPISCbdvBC_pis",gxvar:"A7122CBD001DETPISCbdvBC_pis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7122CBD001DETPISCbdvBC_pis=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7122CBD001DETPISCbdvBC_pis=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETPISCBDVBC_PIS",gx.O.A7122CBD001DETPISCbdvBC_pis,2,',')},c2v:function(){gx.O.A7122CBD001DETPISCbdvBC_pis=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETPISCBDVBC_PIS",'.',',')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETPISCBDPPIS",gxz:"Z7119CBD001DETPISCbdpPIS",gxold:"O7119CBD001DETPISCbdpPIS",gxvar:"A7119CBD001DETPISCbdpPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7119CBD001DETPISCbdpPIS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7119CBD001DETPISCbdpPIS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETPISCBDPPIS",gx.O.A7119CBD001DETPISCbdpPIS,2,',')},c2v:function(){gx.O.A7119CBD001DETPISCbdpPIS=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETPISCBDPPIS",'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETPISCBDVPIS",gxz:"Z7123CBD001DETPISCbdvPIS",gxold:"O7123CBD001DETPISCbdvPIS",gxvar:"A7123CBD001DETPISCbdvPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7123CBD001DETPISCbdvPIS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7123CBD001DETPISCbdvPIS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETPISCBDVPIS",gx.O.A7123CBD001DETPISCbdvPIS,2,',')},c2v:function(){gx.O.A7123CBD001DETPISCbdvPIS=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETPISCBDVPIS",'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"decimal",len:16,dec:4,sign:false,pic:"ZZZZZZZZZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETPISCBDQBCPROD_PIS",gxz:"Z7120CBD001DETPISCbdqBCprod_pis",gxold:"O7120CBD001DETPISCbdqBCprod_pis",gxvar:"A7120CBD001DETPISCbdqBCprod_pis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7120CBD001DETPISCbdqBCprod_pis=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7120CBD001DETPISCbdqBCprod_pis=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETPISCBDQBCPROD_PIS",gx.O.A7120CBD001DETPISCbdqBCprod_pis,4,',')},c2v:function(){gx.O.A7120CBD001DETPISCbdqBCprod_pis=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETPISCBDQBCPROD_PIS",'.',',')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"decimal",len:15,dec:4,sign:false,pic:"ZZZZZZZZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETPISCBDVALIQPROD_PIS",gxz:"Z7121CBD001DETPISCbdvAliqProd_pis",gxold:"O7121CBD001DETPISCbdvAliqProd_pis",gxvar:"A7121CBD001DETPISCbdvAliqProd_pis",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7121CBD001DETPISCbdvAliqProd_pis=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7121CBD001DETPISCbdvAliqProd_pis=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETPISCBDVALIQPROD_PIS",gx.O.A7121CBD001DETPISCbdvAliqProd_pis,4,',')},c2v:function(){gx.O.A7121CBD001DETPISCbdvAliqProd_pis=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETPISCBDVALIQPROD_PIS",'.',',')},nac:gx.falseFn};
   this.A7115CBD001DETPISCbdEmpCodigo = 0 ;
   this.Z7115CBD001DETPISCbdEmpCodigo = 0 ;
   this.O7115CBD001DETPISCbdEmpCodigo = 0 ;
   this.A7118CBD001DETPISCbdNtfSerie = "" ;
   this.Z7118CBD001DETPISCbdNtfSerie = "" ;
   this.O7118CBD001DETPISCbdNtfSerie = "" ;
   this.A7117CBD001DETPISCbdNtfNumero = 0 ;
   this.Z7117CBD001DETPISCbdNtfNumero = 0 ;
   this.O7117CBD001DETPISCbdNtfNumero = 0 ;
   this.A7116CBD001DETPISCbdnItem = 0 ;
   this.Z7116CBD001DETPISCbdnItem = 0 ;
   this.O7116CBD001DETPISCbdnItem = 0 ;
   this.A7114CBD001DETPISCbdCST_pis = 0 ;
   this.Z7114CBD001DETPISCbdCST_pis = 0 ;
   this.O7114CBD001DETPISCbdCST_pis = 0 ;
   this.A7122CBD001DETPISCbdvBC_pis = 0 ;
   this.Z7122CBD001DETPISCbdvBC_pis = 0 ;
   this.O7122CBD001DETPISCbdvBC_pis = 0 ;
   this.A7119CBD001DETPISCbdpPIS = 0 ;
   this.Z7119CBD001DETPISCbdpPIS = 0 ;
   this.O7119CBD001DETPISCbdpPIS = 0 ;
   this.A7123CBD001DETPISCbdvPIS = 0 ;
   this.Z7123CBD001DETPISCbdvPIS = 0 ;
   this.O7123CBD001DETPISCbdvPIS = 0 ;
   this.A7120CBD001DETPISCbdqBCprod_pis = 0 ;
   this.Z7120CBD001DETPISCbdqBCprod_pis = 0 ;
   this.O7120CBD001DETPISCbdqBCprod_pis = 0 ;
   this.A7121CBD001DETPISCbdvAliqProd_pis = 0 ;
   this.Z7121CBD001DETPISCbdvAliqProd_pis = 0 ;
   this.O7121CBD001DETPISCbdvAliqProd_pis = 0 ;
   this.A7115CBD001DETPISCbdEmpCodigo = 0 ;
   this.A7118CBD001DETPISCbdNtfSerie = "" ;
   this.A7117CBD001DETPISCbdNtfNumero = 0 ;
   this.A7116CBD001DETPISCbdnItem = 0 ;
   this.A7114CBD001DETPISCbdCST_pis = 0 ;
   this.A7122CBD001DETPISCbdvBC_pis = 0 ;
   this.A7119CBD001DETPISCbdpPIS = 0 ;
   this.A7123CBD001DETPISCbdvPIS = 0 ;
   this.A7120CBD001DETPISCbdqBCprod_pis = 0 ;
   this.A7121CBD001DETPISCbdvAliqProd_pis = 0 ;
   this.Events = {"e11a6546_client": ["ENTER", true] ,"e12a6546_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001detpis());

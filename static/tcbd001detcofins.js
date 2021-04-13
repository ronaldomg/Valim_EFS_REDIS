/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:19:30.81
*/
gx.evt.autoSkip = false;
gx.define('tcbd001detcofins', false, function () {
   this.ServerClass =  "tcbd001detcofins" ;
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
   this.Valid_Cbd001detcofinscbdempcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETCOFINSCBDEMPCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detcofinscbdntfserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETCOFINSCBDNTFSERIE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detcofinscbdntfnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETCOFINSCBDNTFNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detcofinscbdnitem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CBD001DETCOFINSCBDNITEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cbd001detcofinscbdcst_cofins=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cbd001detcofinscbdcst_cofins",["gx.O.A7050CBD001DETCOFINSCbdEmpCodigo", "gx.O.A7053CBD001DETCOFINSCbdNtfSerie", "gx.O.A7052CBD001DETCOFINSCbdNtfNumero", "gx.O.A7051CBD001DETCOFINSCbdnItem", "gx.O.A7049CBD001DETCOFINSCbdCST_cofins", "gx.num.urlDecimal(gx.O.A7057CBD001DETCOFINSCbdvBC_cofins,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7054CBD001DETCOFINSCbdpCOFINS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7058CBD001DETCOFINSCbdvCOFINS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7055CBD001DETCOFINSCbdqBCProd_cofi,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A7056CBD001DETCOFINSCbdvAliqProd_co,\'.\',\',\')"],["A7057CBD001DETCOFINSCbdvBC_cofins", "A7054CBD001DETCOFINSCbdpCOFINS", "A7058CBD001DETCOFINSCbdvCOFINS", "A7055CBD001DETCOFINSCbdqBCProd_cofi", "A7056CBD001DETCOFINSCbdvAliqProd_co", "Gx_mode", "Z7050CBD001DETCOFINSCbdEmpCodigo", "Z7053CBD001DETCOFINSCbdNtfSerie", "Z7052CBD001DETCOFINSCbdNtfNumero", "Z7051CBD001DETCOFINSCbdnItem", "Z7049CBD001DETCOFINSCbdCST_cofins", "Z7057CBD001DETCOFINSCbdvBC_cofins", "Z7054CBD001DETCOFINSCbdpCOFINS", "Z7058CBD001DETCOFINSCbdvCOFINS", "Z7055CBD001DETCOFINSCbdqBCProd_cofi", "Z7056CBD001DETCOFINSCbdvAliqProd_co", ["BTN_GET","Enabled"], ["BTN_DELETE","Enabled"], ["BTN_ENTER","Enabled"], ["BTN_CHECK","Enabled"]]);
      return true;
   }
   this.e11ab551_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ab551_client=function()
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
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detcofinscbdempcodigo,isvalid:null,rgrid:[],fld:"CBD001DETCOFINSCBDEMPCODIGO",gxz:"Z7050CBD001DETCOFINSCbdEmpCodigo",gxold:"O7050CBD001DETCOFINSCbdEmpCodigo",gxvar:"A7050CBD001DETCOFINSCbdEmpCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7050CBD001DETCOFINSCbdEmpCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7050CBD001DETCOFINSCbdEmpCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETCOFINSCBDEMPCODIGO",gx.O.A7050CBD001DETCOFINSCbdEmpCodigo,0)},c2v:function(){gx.O.A7050CBD001DETCOFINSCbdEmpCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETCOFINSCBDEMPCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detcofinscbdntfserie,isvalid:null,rgrid:[],fld:"CBD001DETCOFINSCBDNTFSERIE",gxz:"Z7053CBD001DETCOFINSCbdNtfSerie",gxold:"O7053CBD001DETCOFINSCbdNtfSerie",gxvar:"A7053CBD001DETCOFINSCbdNtfSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7053CBD001DETCOFINSCbdNtfSerie=Value},v2z:function(Value){gx.O.Z7053CBD001DETCOFINSCbdNtfSerie=Value},v2c:function(){gx.fn.setControlValue("CBD001DETCOFINSCBDNTFSERIE",gx.O.A7053CBD001DETCOFINSCbdNtfSerie,0)},c2v:function(){gx.O.A7053CBD001DETCOFINSCbdNtfSerie=this.val()},val:function(){return gx.fn.getControlValue("CBD001DETCOFINSCBDNTFSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detcofinscbdntfnumero,isvalid:null,rgrid:[],fld:"CBD001DETCOFINSCBDNTFNUMERO",gxz:"Z7052CBD001DETCOFINSCbdNtfNumero",gxold:"O7052CBD001DETCOFINSCbdNtfNumero",gxvar:"A7052CBD001DETCOFINSCbdNtfNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7052CBD001DETCOFINSCbdNtfNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7052CBD001DETCOFINSCbdNtfNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETCOFINSCBDNTFNUMERO",gx.O.A7052CBD001DETCOFINSCbdNtfNumero,0)},c2v:function(){gx.O.A7052CBD001DETCOFINSCbdNtfNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETCOFINSCBDNTFNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detcofinscbdnitem,isvalid:null,rgrid:[],fld:"CBD001DETCOFINSCBDNITEM",gxz:"Z7051CBD001DETCOFINSCbdnItem",gxold:"O7051CBD001DETCOFINSCbdnItem",gxvar:"A7051CBD001DETCOFINSCbdnItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7051CBD001DETCOFINSCbdnItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7051CBD001DETCOFINSCbdnItem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETCOFINSCBDNITEM",gx.O.A7051CBD001DETCOFINSCbdnItem,0)},c2v:function(){gx.O.A7051CBD001DETCOFINSCbdnItem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETCOFINSCBDNITEM",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cbd001detcofinscbdcst_cofins,isvalid:null,rgrid:[],fld:"CBD001DETCOFINSCBDCST_COFINS",gxz:"Z7049CBD001DETCOFINSCbdCST_cofins",gxold:"O7049CBD001DETCOFINSCbdCST_cofins",gxvar:"A7049CBD001DETCOFINSCbdCST_cofins",ucs:[],op:[66,61,56,51,46],ip:[66,61,56,51,46,40,35,30,25,20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7049CBD001DETCOFINSCbdCST_cofins=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7049CBD001DETCOFINSCbdCST_cofins=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CBD001DETCOFINSCBDCST_COFINS",gx.O.A7049CBD001DETCOFINSCbdCST_cofins,0)},c2v:function(){gx.O.A7049CBD001DETCOFINSCbdCST_cofins=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CBD001DETCOFINSCBDCST_COFINS",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETCOFINSCBDVBC_COFINS",gxz:"Z7057CBD001DETCOFINSCbdvBC_cofins",gxold:"O7057CBD001DETCOFINSCbdvBC_cofins",gxvar:"A7057CBD001DETCOFINSCbdvBC_cofins",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7057CBD001DETCOFINSCbdvBC_cofins=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7057CBD001DETCOFINSCbdvBC_cofins=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETCOFINSCBDVBC_COFINS",gx.O.A7057CBD001DETCOFINSCbdvBC_cofins,2,',')},c2v:function(){gx.O.A7057CBD001DETCOFINSCbdvBC_cofins=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETCOFINSCBDVBC_COFINS",'.',',')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETCOFINSCBDPCOFINS",gxz:"Z7054CBD001DETCOFINSCbdpCOFINS",gxold:"O7054CBD001DETCOFINSCbdpCOFINS",gxvar:"A7054CBD001DETCOFINSCbdpCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7054CBD001DETCOFINSCbdpCOFINS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7054CBD001DETCOFINSCbdpCOFINS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETCOFINSCBDPCOFINS",gx.O.A7054CBD001DETCOFINSCbdpCOFINS,2,',')},c2v:function(){gx.O.A7054CBD001DETCOFINSCbdpCOFINS=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETCOFINSCBDPCOFINS",'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETCOFINSCBDVCOFINS",gxz:"Z7058CBD001DETCOFINSCbdvCOFINS",gxold:"O7058CBD001DETCOFINSCbdvCOFINS",gxvar:"A7058CBD001DETCOFINSCbdvCOFINS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7058CBD001DETCOFINSCbdvCOFINS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7058CBD001DETCOFINSCbdvCOFINS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETCOFINSCBDVCOFINS",gx.O.A7058CBD001DETCOFINSCbdvCOFINS,2,',')},c2v:function(){gx.O.A7058CBD001DETCOFINSCbdvCOFINS=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETCOFINSCBDVCOFINS",'.',',')},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"decimal",len:16,dec:4,sign:false,pic:"ZZZZZZZZZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETCOFINSCBDQBCPROD_COFI",gxz:"Z7055CBD001DETCOFINSCbdqBCProd_cofi",gxold:"O7055CBD001DETCOFINSCbdqBCProd_cofi",gxvar:"A7055CBD001DETCOFINSCbdqBCProd_cofi",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7055CBD001DETCOFINSCbdqBCProd_cofi=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7055CBD001DETCOFINSCbdqBCProd_cofi=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETCOFINSCBDQBCPROD_COFI",gx.O.A7055CBD001DETCOFINSCbdqBCProd_cofi,4,',')},c2v:function(){gx.O.A7055CBD001DETCOFINSCbdqBCProd_cofi=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETCOFINSCBDQBCPROD_COFI",'.',',')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"decimal",len:15,dec:4,sign:false,pic:"ZZZZZZZZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CBD001DETCOFINSCBDVALIQPROD_CO",gxz:"Z7056CBD001DETCOFINSCbdvAliqProd_co",gxold:"O7056CBD001DETCOFINSCbdvAliqProd_co",gxvar:"A7056CBD001DETCOFINSCbdvAliqProd_co",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7056CBD001DETCOFINSCbdvAliqProd_co=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7056CBD001DETCOFINSCbdvAliqProd_co=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CBD001DETCOFINSCBDVALIQPROD_CO",gx.O.A7056CBD001DETCOFINSCbdvAliqProd_co,4,',')},c2v:function(){gx.O.A7056CBD001DETCOFINSCbdvAliqProd_co=this.val()},val:function(){return gx.fn.getDecimalValue("CBD001DETCOFINSCBDVALIQPROD_CO",'.',',')},nac:gx.falseFn};
   this.A7050CBD001DETCOFINSCbdEmpCodigo = 0 ;
   this.Z7050CBD001DETCOFINSCbdEmpCodigo = 0 ;
   this.O7050CBD001DETCOFINSCbdEmpCodigo = 0 ;
   this.A7053CBD001DETCOFINSCbdNtfSerie = "" ;
   this.Z7053CBD001DETCOFINSCbdNtfSerie = "" ;
   this.O7053CBD001DETCOFINSCbdNtfSerie = "" ;
   this.A7052CBD001DETCOFINSCbdNtfNumero = 0 ;
   this.Z7052CBD001DETCOFINSCbdNtfNumero = 0 ;
   this.O7052CBD001DETCOFINSCbdNtfNumero = 0 ;
   this.A7051CBD001DETCOFINSCbdnItem = 0 ;
   this.Z7051CBD001DETCOFINSCbdnItem = 0 ;
   this.O7051CBD001DETCOFINSCbdnItem = 0 ;
   this.A7049CBD001DETCOFINSCbdCST_cofins = 0 ;
   this.Z7049CBD001DETCOFINSCbdCST_cofins = 0 ;
   this.O7049CBD001DETCOFINSCbdCST_cofins = 0 ;
   this.A7057CBD001DETCOFINSCbdvBC_cofins = 0 ;
   this.Z7057CBD001DETCOFINSCbdvBC_cofins = 0 ;
   this.O7057CBD001DETCOFINSCbdvBC_cofins = 0 ;
   this.A7054CBD001DETCOFINSCbdpCOFINS = 0 ;
   this.Z7054CBD001DETCOFINSCbdpCOFINS = 0 ;
   this.O7054CBD001DETCOFINSCbdpCOFINS = 0 ;
   this.A7058CBD001DETCOFINSCbdvCOFINS = 0 ;
   this.Z7058CBD001DETCOFINSCbdvCOFINS = 0 ;
   this.O7058CBD001DETCOFINSCbdvCOFINS = 0 ;
   this.A7055CBD001DETCOFINSCbdqBCProd_cofi = 0 ;
   this.Z7055CBD001DETCOFINSCbdqBCProd_cofi = 0 ;
   this.O7055CBD001DETCOFINSCbdqBCProd_cofi = 0 ;
   this.A7056CBD001DETCOFINSCbdvAliqProd_co = 0 ;
   this.Z7056CBD001DETCOFINSCbdvAliqProd_co = 0 ;
   this.O7056CBD001DETCOFINSCbdvAliqProd_co = 0 ;
   this.A7050CBD001DETCOFINSCbdEmpCodigo = 0 ;
   this.A7053CBD001DETCOFINSCbdNtfSerie = "" ;
   this.A7052CBD001DETCOFINSCbdNtfNumero = 0 ;
   this.A7051CBD001DETCOFINSCbdnItem = 0 ;
   this.A7049CBD001DETCOFINSCbdCST_cofins = 0 ;
   this.A7057CBD001DETCOFINSCbdvBC_cofins = 0 ;
   this.A7054CBD001DETCOFINSCbdpCOFINS = 0 ;
   this.A7058CBD001DETCOFINSCbdvCOFINS = 0 ;
   this.A7055CBD001DETCOFINSCbdqBCProd_cofi = 0 ;
   this.A7056CBD001DETCOFINSCbdvAliqProd_co = 0 ;
   this.Events = {"e11ab551_client": ["ENTER", true] ,"e12ab551_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER"];
   this.CheckCtrl = ["BTN_CHECK"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcbd001detcofins());

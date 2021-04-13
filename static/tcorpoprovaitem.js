/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:37:56.20
*/
gx.evt.autoSkip = false;
gx.define('tcorpoprovaitem', false, function () {
   this.ServerClass =  "tcorpoprovaitem" ;
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
   this.Valid_Pedidocpcempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocpcano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pedidocpcnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PEDIDOCPCNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Corpoprovaserie=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Corpoprovaserie",["gx.O.A11450PedidoCPCEmpresaId", "gx.O.A11340PedidoCPCNumero", "gx.O.A11339PedidoCPCAno", "gx.O.A11350CorpoProvaSerie"],[]);
      return true;
   }
   this.Valid_Corpoprovaitemnocorpo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Corpoprovaitemnocorpo",["gx.O.A11450PedidoCPCEmpresaId", "gx.O.A11339PedidoCPCAno", "gx.O.A11340PedidoCPCNumero", "gx.O.A11350CorpoProvaSerie", "gx.O.A11352CorpoProvaItemNoCorpo", "gx.O.A11448CorpoProvaItemHoraRomp", "gx.num.urlDecimal(gx.O.A11445CorpoProvaItemQtAbatimento,\'.\',\',\')", 'gx.date.urlDate(gx.O.A11446CorpoProvaItemDataRomp,"DMY4")', "gx.num.urlDecimal(gx.O.A11447CorpoProvaItemQtResistencia,\'.\',\',\')", "gx.O.A11661CorpoProvaItemIdade"],["A11448CorpoProvaItemHoraRomp", "A11445CorpoProvaItemQtAbatimento", "A11446CorpoProvaItemDataRomp", "A11447CorpoProvaItemQtResistencia", "A11661CorpoProvaItemIdade", "Gx_mode", "Z11450PedidoCPCEmpresaId", "Z11339PedidoCPCAno", "Z11340PedidoCPCNumero", "Z11350CorpoProvaSerie", "Z11352CorpoProvaItemNoCorpo", "Z11448CorpoProvaItemHoraRomp", "Z11445CorpoProvaItemQtAbatimento", "Z11446CorpoProvaItemDataRomp", "Z11447CorpoProvaItemQtResistencia", "Z11661CorpoProvaItemIdade", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11gj844_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12gj844_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,90];
   this.GXLastCtrlId =90;
   GXValidFnc[2]={fld:"TABLEMAIN",grid:0};
   GXValidFnc[5]={fld:"TABLETOOLBAR",grid:0};
   GXValidFnc[8]={fld:"SECTIONTOOLBAR",grid:0};
   GXValidFnc[9]={fld:"BTN_FIRST",grid:0};
   GXValidFnc[10]={fld:"BTN_FIRST_SEPARATOR",grid:0};
   GXValidFnc[11]={fld:"BTN_PREVIOUS",grid:0};
   GXValidFnc[12]={fld:"BTN_PREVIOUS_SEPARATOR",grid:0};
   GXValidFnc[13]={fld:"BTN_NEXT",grid:0};
   GXValidFnc[14]={fld:"BTN_NEXT_SEPARATOR",grid:0};
   GXValidFnc[15]={fld:"BTN_LAST",grid:0};
   GXValidFnc[16]={fld:"BTN_LAST_SEPARATOR",grid:0};
   GXValidFnc[17]={fld:"BTN_SELECT",grid:0};
   GXValidFnc[18]={fld:"BTN_SELECT_SEPARATOR",grid:0};
   GXValidFnc[19]={fld:"BTN_ENTER2",grid:0};
   GXValidFnc[20]={fld:"BTN_ENTER2_SEPARATOR",grid:0};
   GXValidFnc[21]={fld:"BTN_CANCEL2",grid:0};
   GXValidFnc[22]={fld:"BTN_CANCEL2_SEPARATOR",grid:0};
   GXValidFnc[23]={fld:"BTN_DELETE2",grid:0};
   GXValidFnc[24]={fld:"BTN_DELETE2_SEPARATOR",grid:0};
   GXValidFnc[27]={fld:"GROUPDATA",grid:0};
   GXValidFnc[28]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"TABLE2",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCKPEDIDOCPCEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcempresaid,isvalid:null,rgrid:[],fld:"PEDIDOCPCEMPRESAID",gxz:"Z11450PedidoCPCEmpresaId",gxold:"O11450PedidoCPCEmpresaId",gxvar:"A11450PedidoCPCEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11450PedidoCPCEmpresaId=Value},v2z:function(Value){gx.O.Z11450PedidoCPCEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PEDIDOCPCEMPRESAID",gx.O.A11450PedidoCPCEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11450PedidoCPCEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOCPCEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKPEDIDOCPCANO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcano,isvalid:null,rgrid:[],fld:"PEDIDOCPCANO",gxz:"Z11339PedidoCPCAno",gxold:"O11339PedidoCPCAno",gxvar:"A11339PedidoCPCAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11339PedidoCPCAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11339PedidoCPCAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCANO",gx.O.A11339PedidoCPCAno,0)},c2v:function(){gx.O.A11339PedidoCPCAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCANO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKPEDIDOCPCNUMERO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidocpcnumero,isvalid:null,rgrid:[],fld:"PEDIDOCPCNUMERO",gxz:"Z11340PedidoCPCNumero",gxold:"O11340PedidoCPCNumero",gxvar:"A11340PedidoCPCNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11340PedidoCPCNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11340PedidoCPCNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PEDIDOCPCNUMERO",gx.O.A11340PedidoCPCNumero,0)},c2v:function(){gx.O.A11340PedidoCPCNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOCPCNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKCORPOPROVASERIE", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Corpoprovaserie,isvalid:null,rgrid:[],fld:"CORPOPROVASERIE",gxz:"Z11350CorpoProvaSerie",gxold:"O11350CorpoProvaSerie",gxvar:"A11350CorpoProvaSerie",ucs:[],op:[],ip:[54,44,49,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11350CorpoProvaSerie=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11350CorpoProvaSerie=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CORPOPROVASERIE",gx.O.A11350CorpoProvaSerie,0)},c2v:function(){gx.O.A11350CorpoProvaSerie=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CORPOPROVASERIE",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKCORPOPROVAITEMNOCORPO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Corpoprovaitemnocorpo,isvalid:null,rgrid:[],fld:"CORPOPROVAITEMNOCORPO",gxz:"Z11352CorpoProvaItemNoCorpo",gxold:"O11352CorpoProvaItemNoCorpo",gxvar:"A11352CorpoProvaItemNoCorpo",ucs:[],op:[84,79,74,69,64],ip:[84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11352CorpoProvaItemNoCorpo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11352CorpoProvaItemNoCorpo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CORPOPROVAITEMNOCORPO",gx.O.A11352CorpoProvaItemNoCorpo,0)},c2v:function(){gx.O.A11352CorpoProvaItemNoCorpo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CORPOPROVAITEMNOCORPO",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKCORPOPROVAITEMHORAROMP", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CORPOPROVAITEMHORAROMP",gxz:"Z11448CorpoProvaItemHoraRomp",gxold:"O11448CorpoProvaItemHoraRomp",gxvar:"A11448CorpoProvaItemHoraRomp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11448CorpoProvaItemHoraRomp=Value},v2z:function(Value){gx.O.Z11448CorpoProvaItemHoraRomp=Value},v2c:function(){gx.fn.setControlValue("CORPOPROVAITEMHORAROMP",gx.O.A11448CorpoProvaItemHoraRomp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11448CorpoProvaItemHoraRomp=this.val()},val:function(){return gx.fn.getControlValue("CORPOPROVAITEMHORAROMP")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCKCORPOPROVAITEMQTABATIMENTO", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"decimal",len:5,dec:1,sign:false,pic:"ZZ9.9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CORPOPROVAITEMQTABATIMENTO",gxz:"Z11445CorpoProvaItemQtAbatimento",gxold:"O11445CorpoProvaItemQtAbatimento",gxvar:"A11445CorpoProvaItemQtAbatimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11445CorpoProvaItemQtAbatimento=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11445CorpoProvaItemQtAbatimento=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CORPOPROVAITEMQTABATIMENTO",gx.O.A11445CorpoProvaItemQtAbatimento,1,',')},c2v:function(){gx.O.A11445CorpoProvaItemQtAbatimento=this.val()},val:function(){return gx.fn.getDecimalValue("CORPOPROVAITEMQTABATIMENTO",'.',',')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKCORPOPROVAITEMDATAROMP", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CORPOPROVAITEMDATAROMP",gxz:"Z11446CorpoProvaItemDataRomp",gxold:"O11446CorpoProvaItemDataRomp",gxvar:"A11446CorpoProvaItemDataRomp",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11446CorpoProvaItemDataRomp=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11446CorpoProvaItemDataRomp=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CORPOPROVAITEMDATAROMP",gx.O.A11446CorpoProvaItemDataRomp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11446CorpoProvaItemDataRomp=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CORPOPROVAITEMDATAROMP")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[77]={fld:"TEXTBLOCKCORPOPROVAITEMQTRESISTENCIA", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CORPOPROVAITEMQTRESISTENCIA",gxz:"Z11447CorpoProvaItemQtResistencia",gxold:"O11447CorpoProvaItemQtResistencia",gxvar:"A11447CorpoProvaItemQtResistencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11447CorpoProvaItemQtResistencia=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11447CorpoProvaItemQtResistencia=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CORPOPROVAITEMQTRESISTENCIA",gx.O.A11447CorpoProvaItemQtResistencia,2,',')},c2v:function(){gx.O.A11447CorpoProvaItemQtResistencia=this.val()},val:function(){return gx.fn.getDecimalValue("CORPOPROVAITEMQTRESISTENCIA",'.',',')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCKCORPOPROVAITEMIDADE", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CORPOPROVAITEMIDADE",gxz:"Z11661CorpoProvaItemIdade",gxold:"O11661CorpoProvaItemIdade",gxvar:"A11661CorpoProvaItemIdade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11661CorpoProvaItemIdade=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11661CorpoProvaItemIdade=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CORPOPROVAITEMIDADE",gx.O.A11661CorpoProvaItemIdade,0)},c2v:function(){gx.O.A11661CorpoProvaItemIdade=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CORPOPROVAITEMIDADE",'.')},nac:gx.falseFn};
   GXValidFnc[90]={fld:"PROMPT_11450_11339_11340_11350",grid:844};
   this.A11450PedidoCPCEmpresaId = "" ;
   this.Z11450PedidoCPCEmpresaId = "" ;
   this.O11450PedidoCPCEmpresaId = "" ;
   this.A11339PedidoCPCAno = 0 ;
   this.Z11339PedidoCPCAno = 0 ;
   this.O11339PedidoCPCAno = 0 ;
   this.A11340PedidoCPCNumero = 0 ;
   this.Z11340PedidoCPCNumero = 0 ;
   this.O11340PedidoCPCNumero = 0 ;
   this.A11350CorpoProvaSerie = 0 ;
   this.Z11350CorpoProvaSerie = 0 ;
   this.O11350CorpoProvaSerie = 0 ;
   this.A11352CorpoProvaItemNoCorpo = 0 ;
   this.Z11352CorpoProvaItemNoCorpo = 0 ;
   this.O11352CorpoProvaItemNoCorpo = 0 ;
   this.A11448CorpoProvaItemHoraRomp = "" ;
   this.Z11448CorpoProvaItemHoraRomp = "" ;
   this.O11448CorpoProvaItemHoraRomp = "" ;
   this.A11445CorpoProvaItemQtAbatimento = 0 ;
   this.Z11445CorpoProvaItemQtAbatimento = 0 ;
   this.O11445CorpoProvaItemQtAbatimento = 0 ;
   this.A11446CorpoProvaItemDataRomp = gx.date.nullDate() ;
   this.Z11446CorpoProvaItemDataRomp = gx.date.nullDate() ;
   this.O11446CorpoProvaItemDataRomp = gx.date.nullDate() ;
   this.A11447CorpoProvaItemQtResistencia = 0 ;
   this.Z11447CorpoProvaItemQtResistencia = 0 ;
   this.O11447CorpoProvaItemQtResistencia = 0 ;
   this.A11661CorpoProvaItemIdade = 0 ;
   this.Z11661CorpoProvaItemIdade = 0 ;
   this.O11661CorpoProvaItemIdade = 0 ;
   this.A11450PedidoCPCEmpresaId = "" ;
   this.A11339PedidoCPCAno = 0 ;
   this.A11340PedidoCPCNumero = 0 ;
   this.A11350CorpoProvaSerie = 0 ;
   this.A11352CorpoProvaItemNoCorpo = 0 ;
   this.A11448CorpoProvaItemHoraRomp = "" ;
   this.A11445CorpoProvaItemQtAbatimento = 0 ;
   this.A11446CorpoProvaItemDataRomp = gx.date.nullDate() ;
   this.A11447CorpoProvaItemQtResistencia = 0 ;
   this.A11661CorpoProvaItemIdade = 0 ;
   this.Events = {"e11gj844_client": ["ENTER", true] ,"e12gj844_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_11450_11339_11340_11350", [39,44,49,54]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcorpoprovaitem());

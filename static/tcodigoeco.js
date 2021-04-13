/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:47:23.99
*/
gx.evt.autoSkip = false;
gx.define('tcodigoeco', false, function () {
   this.ServerClass =  "tcodigoeco" ;
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
   this.Valid_Codigoecotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CODIGOECOTIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Codigoecotabela=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CODIGOECOTABELA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Codigoecoexterno=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Codigoecoexterno",["gx.O.A11692CodigoEcoTipo", "gx.O.A11693CodigoEcoTabela", "gx.num.urlDecimal(gx.O.A11694CodigoEcoExterno,\'.\',\',\')", "gx.O.A11698CodigoEcoInterno"],["A11698CodigoEcoInterno", "Gx_mode", "Z11692CodigoEcoTipo", "Z11693CodigoEcoTabela", "Z11694CodigoEcoExterno", "Z11698CodigoEcoInterno", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11h5866_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12h5866_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54];
   this.GXLastCtrlId =54;
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
   GXValidFnc[37]={fld:"TEXTBLOCKCODIGOECOTIPO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codigoecotipo,isvalid:null,rgrid:[],fld:"CODIGOECOTIPO",gxz:"Z11692CodigoEcoTipo",gxold:"O11692CodigoEcoTipo",gxvar:"A11692CodigoEcoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11692CodigoEcoTipo=Value},v2z:function(Value){gx.O.Z11692CodigoEcoTipo=Value},v2c:function(){gx.fn.setControlValue("CODIGOECOTIPO",gx.O.A11692CodigoEcoTipo,0)},c2v:function(){gx.O.A11692CodigoEcoTipo=this.val()},val:function(){return gx.fn.getControlValue("CODIGOECOTIPO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCODIGOECOTABELA", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codigoecotabela,isvalid:null,rgrid:[],fld:"CODIGOECOTABELA",gxz:"Z11693CodigoEcoTabela",gxold:"O11693CodigoEcoTabela",gxvar:"A11693CodigoEcoTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11693CodigoEcoTabela=Value},v2z:function(Value){gx.O.Z11693CodigoEcoTabela=Value},v2c:function(){gx.fn.setControlValue("CODIGOECOTABELA",gx.O.A11693CodigoEcoTabela,0)},c2v:function(){gx.O.A11693CodigoEcoTabela=this.val()},val:function(){return gx.fn.getControlValue("CODIGOECOTABELA")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKCODIGOECOEXTERNO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Codigoecoexterno,isvalid:null,rgrid:[],fld:"CODIGOECOEXTERNO",gxz:"Z11694CodigoEcoExterno",gxold:"O11694CodigoEcoExterno",gxvar:"A11694CodigoEcoExterno",ucs:[],op:[54],ip:[54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11694CodigoEcoExterno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11694CodigoEcoExterno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CODIGOECOEXTERNO",gx.O.A11694CodigoEcoExterno,0)},c2v:function(){gx.O.A11694CodigoEcoExterno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CODIGOECOEXTERNO",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKCODIGOECOINTERNO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CODIGOECOINTERNO",gxz:"Z11698CodigoEcoInterno",gxold:"O11698CodigoEcoInterno",gxvar:"A11698CodigoEcoInterno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11698CodigoEcoInterno=Value},v2z:function(Value){gx.O.Z11698CodigoEcoInterno=Value},v2c:function(){gx.fn.setControlValue("CODIGOECOINTERNO",gx.O.A11698CodigoEcoInterno,0)},c2v:function(){gx.O.A11698CodigoEcoInterno=this.val()},val:function(){return gx.fn.getControlValue("CODIGOECOINTERNO")},nac:gx.falseFn};
   this.A11692CodigoEcoTipo = "" ;
   this.Z11692CodigoEcoTipo = "" ;
   this.O11692CodigoEcoTipo = "" ;
   this.A11693CodigoEcoTabela = "" ;
   this.Z11693CodigoEcoTabela = "" ;
   this.O11693CodigoEcoTabela = "" ;
   this.A11694CodigoEcoExterno = 0 ;
   this.Z11694CodigoEcoExterno = 0 ;
   this.O11694CodigoEcoExterno = 0 ;
   this.A11698CodigoEcoInterno = "" ;
   this.Z11698CodigoEcoInterno = "" ;
   this.O11698CodigoEcoInterno = "" ;
   this.A11692CodigoEcoTipo = "" ;
   this.A11693CodigoEcoTabela = "" ;
   this.A11694CodigoEcoExterno = 0 ;
   this.A11698CodigoEcoInterno = "" ;
   this.Events = {"e11h5866_client": ["ENTER", true] ,"e12h5866_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcodigoeco());

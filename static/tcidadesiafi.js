/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:41:36.50
*/
gx.evt.autoSkip = false;
gx.define('tcidadesiafi', false, function () {
   this.ServerClass =  "tcidadesiafi" ;
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
   this.Valid_Cidadescodibge=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CIDADESCODIBGE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cidadescodsiafi=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cidadescodsiafi",["gx.O.A158CidadesCodIbge", "gx.O.A11674CidadesCodSIAFI"],["Gx_mode", "Z158CidadesCodIbge", "Z11674CidadesCodSIAFI", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11gv867_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12gv867_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44];
   this.GXLastCtrlId =44;
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
   GXValidFnc[37]={fld:"TEXTBLOCKCIDADESCODIBGE", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cidadescodibge,isvalid:null,rgrid:[],fld:"CIDADESCODIBGE",gxz:"Z158CidadesCodIbge",gxold:"O158CidadesCodIbge",gxvar:"A158CidadesCodIbge",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A158CidadesCodIbge=gx.num.intval(Value)},v2z:function(Value){gx.O.Z158CidadesCodIbge=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CIDADESCODIBGE",gx.O.A158CidadesCodIbge,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A158CidadesCodIbge=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CIDADESCODIBGE",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKCIDADESCODSIAFI", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:7,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cidadescodsiafi,isvalid:null,rgrid:[],fld:"CIDADESCODSIAFI",gxz:"Z11674CidadesCodSIAFI",gxold:"O11674CidadesCodSIAFI",gxvar:"A11674CidadesCodSIAFI",ucs:[],op:[],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11674CidadesCodSIAFI=Value},v2z:function(Value){gx.O.Z11674CidadesCodSIAFI=Value},v2c:function(){gx.fn.setControlValue("CIDADESCODSIAFI",gx.O.A11674CidadesCodSIAFI,0)},c2v:function(){gx.O.A11674CidadesCodSIAFI=this.val()},val:function(){return gx.fn.getControlValue("CIDADESCODSIAFI")},nac:gx.falseFn};
   this.A158CidadesCodIbge = 0 ;
   this.Z158CidadesCodIbge = 0 ;
   this.O158CidadesCodIbge = 0 ;
   this.A11674CidadesCodSIAFI = "" ;
   this.Z11674CidadesCodSIAFI = "" ;
   this.O11674CidadesCodSIAFI = "" ;
   this.A158CidadesCodIbge = 0 ;
   this.A11674CidadesCodSIAFI = "" ;
   this.Events = {"e11gv867_client": ["ENTER", true] ,"e12gv867_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tcidadesiafi());

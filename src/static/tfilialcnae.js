/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:36:32.66
*/
gx.evt.autoSkip = false;
gx.define('tfilialcnae', false, function () {
   this.ServerClass =  "tfilialcnae" ;
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
   this.Valid_Cnae=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cnae",["gx.O.A11183CNAE", "gx.O.A11184CNAEDescricao", "gx.O.A11185CNAERotulo"],["A11184CNAEDescricao", "A11185CNAERotulo"]);
      return true;
   }
   this.Valid_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Filialempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Filialempresaid",["gx.O.A11183CNAE", "gx.O.A1156FilialId", "gx.O.A1228FilialEmpresaId"],["A11184CNAEDescricao", "A11185CNAERotulo", "Gx_mode", "Z11183CNAE", "Z1156FilialId", "Z1228FilialEmpresaId", "Z11184CNAEDescricao", "Z11185CNAERotulo", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Cnaedescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CNAEDESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11g4821_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12g4821_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,65];
   this.GXLastCtrlId =65;
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
   GXValidFnc[37]={fld:"TEXTBLOCKCNAE", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cnae,isvalid:null,rgrid:[],fld:"CNAE",gxz:"Z11183CNAE",gxold:"O11183CNAE",gxvar:"A11183CNAE",ucs:[],op:[49,44],ip:[49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11183CNAE=Value},v2z:function(Value){gx.O.Z11183CNAE=Value},v2c:function(){gx.fn.setControlValue("CNAE",gx.O.A11183CNAE,0)},c2v:function(){gx.O.A11183CNAE=this.val()},val:function(){return gx.fn.getControlValue("CNAE")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCNAEDESCRICAO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cnaedescricao,isvalid:null,rgrid:[],fld:"CNAEDESCRICAO",gxz:"Z11184CNAEDescricao",gxold:"O11184CNAEDescricao",gxvar:"A11184CNAEDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11184CNAEDescricao=Value},v2z:function(Value){gx.O.Z11184CNAEDescricao=Value},v2c:function(){gx.fn.setControlValue("CNAEDESCRICAO",gx.O.A11184CNAEDescricao,0)},c2v:function(){gx.O.A11184CNAEDescricao=this.val()},val:function(){return gx.fn.getControlValue("CNAEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKCNAEROTULO", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:110,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CNAEROTULO",gxz:"Z11185CNAERotulo",gxold:"O11185CNAERotulo",gxvar:"A11185CNAERotulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11185CNAERotulo=Value},v2z:function(Value){gx.O.Z11185CNAERotulo=Value},v2c:function(){gx.fn.setControlValue("CNAEROTULO",gx.O.A11185CNAERotulo,0)},c2v:function(){gx.O.A11185CNAERotulo=this.val()},val:function(){return gx.fn.getControlValue("CNAEROTULO")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKFILIALID", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Filialid,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FILIALID",gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKFILIALEMPRESAID", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Filialempresaid,isvalid:null,rgrid:[],fld:"FILIALEMPRESAID",gxz:"Z1228FilialEmpresaId",gxold:"O1228FilialEmpresaId",gxvar:"A1228FilialEmpresaId",ucs:[],op:[],ip:[59,54,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1228FilialEmpresaId=Value},v2z:function(Value){gx.O.Z1228FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("FILIALEMPRESAID",gx.O.A1228FilialEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1228FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("FILIALEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[65]={fld:"PROMPT_11183",grid:821};
   this.A11183CNAE = "" ;
   this.Z11183CNAE = "" ;
   this.O11183CNAE = "" ;
   this.A11184CNAEDescricao = "" ;
   this.Z11184CNAEDescricao = "" ;
   this.O11184CNAEDescricao = "" ;
   this.A11185CNAERotulo = "" ;
   this.Z11185CNAERotulo = "" ;
   this.O11185CNAERotulo = "" ;
   this.A1156FilialId = 0 ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.Z1228FilialEmpresaId = "" ;
   this.O1228FilialEmpresaId = "" ;
   this.A11183CNAE = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A11185CNAERotulo = "" ;
   this.A11184CNAEDescricao = "" ;
   this.Events = {"e11g4821_client": ["ENTER", true] ,"e12g4821_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_11183", [39]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tfilialcnae());

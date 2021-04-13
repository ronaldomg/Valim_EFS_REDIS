/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:32:16.4
*/
gx.evt.autoSkip = false;
gx.define('timpressoraip', false, function () {
   this.ServerClass =  "timpressoraip" ;
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
   this.Valid_Impressoraipid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("IMPRESSORAIPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Impressoraipsequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Impressoraipsequencia",["gx.O.A9922ImpressoraIPId", "gx.O.A9934ImpressoraIPSequencia", "gx.O.A9923ImpressoraIPNome"],["A9923ImpressoraIPNome", "Gx_mode", "Z9922ImpressoraIPId", "Z9934ImpressoraIPSequencia", "Z9923ImpressoraIPNome", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11eg744_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12eg744_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49];
   this.GXLastCtrlId =49;
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
   GXValidFnc[37]={fld:"TEXTBLOCKIMPRESSORAIPID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Impressoraipid,isvalid:null,rgrid:[],fld:"IMPRESSORAIPID",gxz:"Z9922ImpressoraIPId",gxold:"O9922ImpressoraIPId",gxvar:"A9922ImpressoraIPId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9922ImpressoraIPId=Value},v2z:function(Value){gx.O.Z9922ImpressoraIPId=Value},v2c:function(){gx.fn.setControlValue("IMPRESSORAIPID",gx.O.A9922ImpressoraIPId,0)},c2v:function(){gx.O.A9922ImpressoraIPId=this.val()},val:function(){return gx.fn.getControlValue("IMPRESSORAIPID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKIMPRESSORAIPSEQUENCIA", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Impressoraipsequencia,isvalid:null,rgrid:[],fld:"IMPRESSORAIPSEQUENCIA",gxz:"Z9934ImpressoraIPSequencia",gxold:"O9934ImpressoraIPSequencia",gxvar:"A9934ImpressoraIPSequencia",ucs:[],op:[49],ip:[49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9934ImpressoraIPSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9934ImpressoraIPSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("IMPRESSORAIPSEQUENCIA",gx.O.A9934ImpressoraIPSequencia,0)},c2v:function(){gx.O.A9934ImpressoraIPSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("IMPRESSORAIPSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKIMPRESSORAIPNOME", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAIPNOME",gxz:"Z9923ImpressoraIPNome",gxold:"O9923ImpressoraIPNome",gxvar:"A9923ImpressoraIPNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9923ImpressoraIPNome=Value},v2z:function(Value){gx.O.Z9923ImpressoraIPNome=Value},v2c:function(){gx.fn.setControlValue("IMPRESSORAIPNOME",gx.O.A9923ImpressoraIPNome,0)},c2v:function(){gx.O.A9923ImpressoraIPNome=this.val()},val:function(){return gx.fn.getControlValue("IMPRESSORAIPNOME")},nac:gx.falseFn};
   this.A9922ImpressoraIPId = "" ;
   this.Z9922ImpressoraIPId = "" ;
   this.O9922ImpressoraIPId = "" ;
   this.A9934ImpressoraIPSequencia = 0 ;
   this.Z9934ImpressoraIPSequencia = 0 ;
   this.O9934ImpressoraIPSequencia = 0 ;
   this.A9923ImpressoraIPNome = "" ;
   this.Z9923ImpressoraIPNome = "" ;
   this.O9923ImpressoraIPNome = "" ;
   this.A9922ImpressoraIPId = "" ;
   this.A9934ImpressoraIPSequencia = 0 ;
   this.A9923ImpressoraIPNome = "" ;
   this.Events = {"e11eg744_client": ["ENTER", true] ,"e12eg744_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new timpressoraip());

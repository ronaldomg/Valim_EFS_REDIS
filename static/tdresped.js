/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:57:43.59
*/
gx.evt.autoSkip = false;
gx.define('tdresped', false, function () {
   this.ServerClass =  "tdresped" ;
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
   this.Valid_Drespeddata=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DRESPEDDATA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Drespedgrupoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Drespedgrupoid",['gx.date.urlDate(gx.O.A4211DRESpedData,"DMY4")', "gx.O.A4212DRESpedGrupoId", "gx.O.A4208DRESpedGrupoDescricao", "gx.O.A4209DRESpedNivel", "gx.num.urlDecimal(gx.O.A4210DRESpedValor,\'.\',\',\')"],["A4208DRESpedGrupoDescricao", "A4209DRESpedNivel", "A4210DRESpedValor", "Gx_mode", "Z4211DRESpedData", "Z4212DRESpedGrupoId", "Z4208DRESpedGrupoDescricao", "Z4209DRESpedNivel", "Z4210DRESpedValor", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e117u429_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e127u429_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e137u429_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,36,46];
   this.GXLastCtrlId =46;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Drespeddata,isvalid:null,rgrid:[],fld:"DRESPEDDATA",gxz:"Z4211DRESpedData",gxold:"O4211DRESpedData",gxvar:"A4211DRESpedData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4211DRESpedData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4211DRESpedData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DRESPEDDATA",gx.O.A4211DRESpedData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4211DRESpedData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("DRESPEDDATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Drespedgrupoid,isvalid:null,rgrid:[],fld:"DRESPEDGRUPOID",gxz:"Z4212DRESpedGrupoId",gxold:"O4212DRESpedGrupoId",gxvar:"A4212DRESpedGrupoId",ucs:[],op:[35,30,25],ip:[35,30,25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4212DRESpedGrupoId=Value},v2z:function(Value){gx.O.Z4212DRESpedGrupoId=Value},v2c:function(){gx.fn.setControlValue("DRESPEDGRUPOID",gx.O.A4212DRESpedGrupoId,0)},c2v:function(){gx.O.A4212DRESpedGrupoId=this.val()},val:function(){return gx.fn.getControlValue("DRESPEDGRUPOID")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DRESPEDGRUPODESCRICAO",gxz:"Z4208DRESpedGrupoDescricao",gxold:"O4208DRESpedGrupoDescricao",gxvar:"A4208DRESpedGrupoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4208DRESpedGrupoDescricao=Value},v2z:function(Value){gx.O.Z4208DRESpedGrupoDescricao=Value},v2c:function(){gx.fn.setControlValue("DRESPEDGRUPODESCRICAO",gx.O.A4208DRESpedGrupoDescricao,0)},c2v:function(){gx.O.A4208DRESpedGrupoDescricao=this.val()},val:function(){return gx.fn.getControlValue("DRESPEDGRUPODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:13,dec:0,sign:false,pic:"ZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DRESPEDNIVEL",gxz:"Z4209DRESpedNivel",gxold:"O4209DRESpedNivel",gxvar:"A4209DRESpedNivel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4209DRESpedNivel=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4209DRESpedNivel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DRESPEDNIVEL",gx.O.A4209DRESpedNivel,0)},c2v:function(){gx.O.A4209DRESpedNivel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DRESPEDNIVEL",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DRESPEDVALOR",gxz:"Z4210DRESpedValor",gxold:"O4210DRESpedValor",gxvar:"A4210DRESpedValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4210DRESpedValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4210DRESpedValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DRESPEDVALOR",gx.O.A4210DRESpedValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4210DRESpedValor=this.val()},val:function(){return gx.fn.getDecimalValue("DRESPEDVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[36]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.A4211DRESpedData = gx.date.nullDate() ;
   this.Z4211DRESpedData = gx.date.nullDate() ;
   this.O4211DRESpedData = gx.date.nullDate() ;
   this.A4212DRESpedGrupoId = "" ;
   this.Z4212DRESpedGrupoId = "" ;
   this.O4212DRESpedGrupoId = "" ;
   this.A4208DRESpedGrupoDescricao = "" ;
   this.Z4208DRESpedGrupoDescricao = "" ;
   this.O4208DRESpedGrupoDescricao = "" ;
   this.A4209DRESpedNivel = 0 ;
   this.Z4209DRESpedNivel = 0 ;
   this.O4209DRESpedNivel = 0 ;
   this.A4210DRESpedValor = 0 ;
   this.Z4210DRESpedValor = 0 ;
   this.O4210DRESpedValor = 0 ;
   this.AV8Logon = {} ;
   this.A4211DRESpedData = gx.date.nullDate() ;
   this.A4212DRESpedGrupoId = "" ;
   this.A4208DRESpedGrupoDescricao = "" ;
   this.A4209DRESpedNivel = 0 ;
   this.A4210DRESpedValor = 0 ;
   this.Events = {"e127u429_client": ["ENTER", true] ,"e137u429_client": ["CANCEL", true] ,"e117u429_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tdresped());

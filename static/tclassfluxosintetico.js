/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:7:24.37
*/
gx.evt.autoSkip = false;
gx.define('tclassfluxosintetico', false, function () {
   this.ServerClass =  "tclassfluxosintetico" ;
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
   this.Valid_Classfluxosinteticousuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSINTETICOUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxosinteticofilialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSINTETICOFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxosinteticoclassid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSFLUXOSINTETICOCLASSID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Classfluxosinteticocodimpressa=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classfluxosinteticocodimpressa",["gx.O.A4945ClassFluxoSinteticoUsuarioId", "gx.O.A4946ClassFluxoSinteticoFilialId", "gx.O.A4947ClassFluxoSinteticoClassId", "gx.O.A4948ClassFluxoSinteticoCodImpressa", "gx.O.A4942ClassFluxoSinteticoDesImpressa", "gx.O.A4943ClassFluxoSinteticoTpFluxo", "gx.num.urlDecimal(gx.O.A4944ClassFluxoSinteticoValor,\'.\',\',\')"],["A4942ClassFluxoSinteticoDesImpressa", "A4943ClassFluxoSinteticoTpFluxo", "A4944ClassFluxoSinteticoValor", "Gx_mode", "Z4945ClassFluxoSinteticoUsuarioId", "Z4946ClassFluxoSinteticoFilialId", "Z4947ClassFluxoSinteticoClassId", "Z4948ClassFluxoSinteticoCodImpressa", "Z4942ClassFluxoSinteticoDesImpressa", "Z4943ClassFluxoSinteticoTpFluxo", "Z4944ClassFluxoSinteticoValor", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e1188449_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e1288449_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1388449_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,33,35,38,40,43,45,46,55,57];
   this.GXLastCtrlId =57;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxosinteticousuarioid,isvalid:null,rgrid:[],fld:"CLASSFLUXOSINTETICOUSUARIOID",gxz:"Z4945ClassFluxoSinteticoUsuarioId",gxold:"O4945ClassFluxoSinteticoUsuarioId",gxvar:"A4945ClassFluxoSinteticoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4945ClassFluxoSinteticoUsuarioId=Value},v2z:function(Value){gx.O.Z4945ClassFluxoSinteticoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSINTETICOUSUARIOID",gx.O.A4945ClassFluxoSinteticoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4945ClassFluxoSinteticoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSINTETICOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxosinteticofilialid,isvalid:null,rgrid:[],fld:"CLASSFLUXOSINTETICOFILIALID",gxz:"Z4946ClassFluxoSinteticoFilialId",gxold:"O4946ClassFluxoSinteticoFilialId",gxvar:"A4946ClassFluxoSinteticoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4946ClassFluxoSinteticoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4946ClassFluxoSinteticoFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSINTETICOFILIALID",gx.O.A4946ClassFluxoSinteticoFilialId,0)},c2v:function(){gx.O.A4946ClassFluxoSinteticoFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CLASSFLUXOSINTETICOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxosinteticoclassid,isvalid:null,rgrid:[],fld:"CLASSFLUXOSINTETICOCLASSID",gxz:"Z4947ClassFluxoSinteticoClassId",gxold:"O4947ClassFluxoSinteticoClassId",gxvar:"A4947ClassFluxoSinteticoClassId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4947ClassFluxoSinteticoClassId=Value},v2z:function(Value){gx.O.Z4947ClassFluxoSinteticoClassId=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSINTETICOCLASSID",gx.O.A4947ClassFluxoSinteticoClassId,0)},c2v:function(){gx.O.A4947ClassFluxoSinteticoClassId=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSINTETICOCLASSID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classfluxosinteticocodimpressa,isvalid:null,rgrid:[],fld:"CLASSFLUXOSINTETICOCODIMPRESSA",gxz:"Z4948ClassFluxoSinteticoCodImpressa",gxold:"O4948ClassFluxoSinteticoCodImpressa",gxvar:"A4948ClassFluxoSinteticoCodImpressa",ucs:[],op:[45,40,35],ip:[45,40,35,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4948ClassFluxoSinteticoCodImpressa=Value},v2z:function(Value){gx.O.Z4948ClassFluxoSinteticoCodImpressa=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSINTETICOCODIMPRESSA",gx.O.A4948ClassFluxoSinteticoCodImpressa,0)},c2v:function(){gx.O.A4948ClassFluxoSinteticoCodImpressa=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSINTETICOCODIMPRESSA")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSINTETICODESIMPRESSA",gxz:"Z4942ClassFluxoSinteticoDesImpressa",gxold:"O4942ClassFluxoSinteticoDesImpressa",gxvar:"A4942ClassFluxoSinteticoDesImpressa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4942ClassFluxoSinteticoDesImpressa=Value},v2z:function(Value){gx.O.Z4942ClassFluxoSinteticoDesImpressa=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSINTETICODESIMPRESSA",gx.O.A4942ClassFluxoSinteticoDesImpressa,0)},c2v:function(){gx.O.A4942ClassFluxoSinteticoDesImpressa=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSINTETICODESIMPRESSA")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSINTETICOTPFLUXO",gxz:"Z4943ClassFluxoSinteticoTpFluxo",gxold:"O4943ClassFluxoSinteticoTpFluxo",gxvar:"A4943ClassFluxoSinteticoTpFluxo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4943ClassFluxoSinteticoTpFluxo=Value},v2z:function(Value){gx.O.Z4943ClassFluxoSinteticoTpFluxo=Value},v2c:function(){gx.fn.setControlValue("CLASSFLUXOSINTETICOTPFLUXO",gx.O.A4943ClassFluxoSinteticoTpFluxo,0)},c2v:function(){gx.O.A4943ClassFluxoSinteticoTpFluxo=this.val()},val:function(){return gx.fn.getControlValue("CLASSFLUXOSINTETICOTPFLUXO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSFLUXOSINTETICOVALOR",gxz:"Z4944ClassFluxoSinteticoValor",gxold:"O4944ClassFluxoSinteticoValor",gxvar:"A4944ClassFluxoSinteticoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4944ClassFluxoSinteticoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4944ClassFluxoSinteticoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("CLASSFLUXOSINTETICOVALOR",gx.O.A4944ClassFluxoSinteticoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4944ClassFluxoSinteticoValor=this.val()},val:function(){return gx.fn.getDecimalValue("CLASSFLUXOSINTETICOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"BTNHELP",grid:0};
   this.A4945ClassFluxoSinteticoUsuarioId = "" ;
   this.Z4945ClassFluxoSinteticoUsuarioId = "" ;
   this.O4945ClassFluxoSinteticoUsuarioId = "" ;
   this.A4946ClassFluxoSinteticoFilialId = 0 ;
   this.Z4946ClassFluxoSinteticoFilialId = 0 ;
   this.O4946ClassFluxoSinteticoFilialId = 0 ;
   this.A4947ClassFluxoSinteticoClassId = "" ;
   this.Z4947ClassFluxoSinteticoClassId = "" ;
   this.O4947ClassFluxoSinteticoClassId = "" ;
   this.A4948ClassFluxoSinteticoCodImpressa = "" ;
   this.Z4948ClassFluxoSinteticoCodImpressa = "" ;
   this.O4948ClassFluxoSinteticoCodImpressa = "" ;
   this.A4942ClassFluxoSinteticoDesImpressa = "" ;
   this.Z4942ClassFluxoSinteticoDesImpressa = "" ;
   this.O4942ClassFluxoSinteticoDesImpressa = "" ;
   this.A4943ClassFluxoSinteticoTpFluxo = "" ;
   this.Z4943ClassFluxoSinteticoTpFluxo = "" ;
   this.O4943ClassFluxoSinteticoTpFluxo = "" ;
   this.A4944ClassFluxoSinteticoValor = 0 ;
   this.Z4944ClassFluxoSinteticoValor = 0 ;
   this.O4944ClassFluxoSinteticoValor = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A4945ClassFluxoSinteticoUsuarioId = "" ;
   this.A4946ClassFluxoSinteticoFilialId = 0 ;
   this.A4947ClassFluxoSinteticoClassId = "" ;
   this.A4948ClassFluxoSinteticoCodImpressa = "" ;
   this.A4942ClassFluxoSinteticoDesImpressa = "" ;
   this.A4943ClassFluxoSinteticoTpFluxo = "" ;
   this.A4944ClassFluxoSinteticoValor = 0 ;
   this.Events = {"e1288449_client": ["ENTER", true] ,"e1388449_client": ["CANCEL", true] ,"e1188449_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tclassfluxosintetico());

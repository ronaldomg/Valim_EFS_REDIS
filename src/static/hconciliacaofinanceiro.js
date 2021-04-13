/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:46:1.15
*/
gx.evt.autoSkip = false;
gx.define('hconciliacaofinanceiro', false, function () {
   this.ServerClass =  "hconciliacaofinanceiro" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Conciliacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONCILIACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresaconciliacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESACONCILIACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11jl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13jl2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15jl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,27,29,30,39,40,42,44];
   this.GXLastCtrlId =44;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE4",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLERANGEPERIODO",grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAINI",gxz:"ZV20DataIni",gxold:"OV20DataIni",gxvar:"AV20DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV20DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV20DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAFIM",gxz:"ZV21DataFim",gxold:"OV21DataFim",gxvar:"AV21DataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIM",gx.O.AV21DataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21DataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Conciliacaoid,isvalid:null,rgrid:[],fld:"vCONCILIACAOID",gxz:"ZV22ConciliacaoId",gxold:"OV22ConciliacaoId",gxvar:"AV22ConciliacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ConciliacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22ConciliacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONCILIACAOID",gx.O.AV22ConciliacaoId,0)},c2v:function(){gx.O.AV22ConciliacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONCILIACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONCILIACAODESCRICAO",gxz:"ZV23ConciliacaoDescricao",gxold:"OV23ConciliacaoDescricao",gxvar:"AV23ConciliacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ConciliacaoDescricao=Value},v2z:function(Value){gx.O.ZV23ConciliacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONCILIACAODESCRICAO",gx.O.AV23ConciliacaoDescricao,0)},c2v:function(){gx.O.AV23ConciliacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONCILIACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaconciliacao,isvalid:null,rgrid:[],fld:"vEMPRESACONCILIACAO",gxz:"ZV24EmpresaConciliacao",gxold:"OV24EmpresaConciliacao",gxvar:"AV24EmpresaConciliacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24EmpresaConciliacao=Value},v2z:function(Value){gx.O.ZV24EmpresaConciliacao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACONCILIACAO",gx.O.AV24EmpresaConciliacao,0)},c2v:function(){gx.O.AV24EmpresaConciliacao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACONCILIACAO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"JS", format:2,grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"PROMPT_CONCILIACAOID",grid:0};
   this.AV20DataIni = gx.date.nullDate() ;
   this.ZV20DataIni = gx.date.nullDate() ;
   this.OV20DataIni = gx.date.nullDate() ;
   this.AV21DataFim = gx.date.nullDate() ;
   this.ZV21DataFim = gx.date.nullDate() ;
   this.OV21DataFim = gx.date.nullDate() ;
   this.AV22ConciliacaoId = 0 ;
   this.ZV22ConciliacaoId = 0 ;
   this.OV22ConciliacaoId = 0 ;
   this.AV23ConciliacaoDescricao = "" ;
   this.ZV23ConciliacaoDescricao = "" ;
   this.OV23ConciliacaoDescricao = "" ;
   this.AV24EmpresaConciliacao = "" ;
   this.ZV24EmpresaConciliacao = "" ;
   this.OV24EmpresaConciliacao = "" ;
   this.AV20DataIni = gx.date.nullDate() ;
   this.AV21DataFim = gx.date.nullDate() ;
   this.AV22ConciliacaoId = 0 ;
   this.AV23ConciliacaoDescricao = "" ;
   this.AV24EmpresaConciliacao = "" ;
   this.A1498ConciliacaoId = 0 ;
   this.A1497ConciliacaoEmpresaId = "" ;
   this.A1492ConciliacaoDescricao = "" ;
   this.Events = {"e11jl2_client": ["'FECHAR'", true] ,"e13jl2_client": ["ENTER", true] ,"e15jl2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV51Pgmname',fld:'vPGMNAME'},{av:'AV13Ordenacao',fld:'vORDENACAO'},{av:'AV12OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV20DataIni',fld:'vDATAINI'},{av:'AV21DataFim',fld:'vDATAFIM'},{av:'AV22ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV23ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV52Pgmdesc',fld:'vPGMDESC'},{av:'A1497ConciliacaoEmpresaId',fld:'CONCILIACAOEMPRESAID'},{av:'AV24EmpresaConciliacao',fld:'vEMPRESACONCILIACAO'},{av:'A1498ConciliacaoId',fld:'CONCILIACAOID'},{av:'A1492ConciliacaoDescricao',fld:'CONCILIACAODESCRICAO'}],[{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV23ConciliacaoDescricao',fld:'vCONCILIACAODESCRICAO'},{av:'AV22ConciliacaoId',fld:'vCONCILIACAOID'},{av:'AV21DataFim',fld:'vDATAFIM'},{av:'AV20DataIni',fld:'vDATAINI'},{av:'AV17QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV12OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19TpErro',fld:'vTPERRO'},{av:'AV53GXLvl98',fld:'vGXLVL98'}]];
   this.setPrompt("PROMPT_CONCILIACAOID", [29]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconciliacaofinanceiro());

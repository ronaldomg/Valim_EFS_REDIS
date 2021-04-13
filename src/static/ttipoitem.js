/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:24:45.64
*/
gx.evt.autoSkip = false;
gx.define('ttipoitem', false, function () {
   this.ServerClass =  "ttipoitem" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
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
      this.AV14TipoItemId=gx.fn.getIntegerValue("vTIPOITEMID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A3080TipoItemEmpresaId=gx.fn.getControlValue("TIPOITEMEMPRESAID") ;
      this.AV22Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV21Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tipoitemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOITEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipoitemdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOITEMDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A45TipoItemDescricao) )
         {
            try {
               gxballoon.setError("Informe o Tipo do Item");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipoitemqtdediasdevolucao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOITEMQTDEDIASDEVOLUCAO");
         this.AnyError  = 0;
         if ( (0==this.A554TipoItemQtdeDiasDevolucao) )
         {
            try {
               gxballoon.setError("Informe a quantidade de dias para devolução");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipoitemvalormultadia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOITEMVALORMULTADIA");
         this.AnyError  = 0;
         if ( (0.0==this.A555TipoItemValorMultaDia) )
         {
            try {
               gxballoon.setError("Informe o valor da multa ao dia");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e121e2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e131e2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141e333_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151e333_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,37,38];
   this.GXLastCtrlId =38;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tipoitemid,isvalid:null,rgrid:[],fld:"TIPOITEMID",gxz:"Z120TipoItemId",gxold:"O120TipoItemId",gxvar:"A120TipoItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A120TipoItemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z120TipoItemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOITEMID",gx.O.A120TipoItemId,0)},c2v:function(){gx.O.A120TipoItemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOITEMID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoitemdescricao,isvalid:null,rgrid:[],fld:"TIPOITEMDESCRICAO",gxz:"Z45TipoItemDescricao",gxold:"O45TipoItemDescricao",gxvar:"A45TipoItemDescricao",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A45TipoItemDescricao=Value},v2z:function(Value){gx.O.Z45TipoItemDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOITEMDESCRICAO",gx.O.A45TipoItemDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A45TipoItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOITEMDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoitemqtdediasdevolucao,isvalid:null,rgrid:[],fld:"TIPOITEMQTDEDIASDEVOLUCAO",gxz:"Z554TipoItemQtdeDiasDevolucao",gxold:"O554TipoItemQtdeDiasDevolucao",gxvar:"A554TipoItemQtdeDiasDevolucao",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A554TipoItemQtdeDiasDevolucao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z554TipoItemQtdeDiasDevolucao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOITEMQTDEDIASDEVOLUCAO",gx.O.A554TipoItemQtdeDiasDevolucao,0)},c2v:function(){gx.O.A554TipoItemQtdeDiasDevolucao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOITEMQTDEDIASDEVOLUCAO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"decimal",len:5,dec:2,sign:false,pic:"Z9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipoitemvalormultadia,isvalid:null,rgrid:[],fld:"TIPOITEMVALORMULTADIA",gxz:"Z555TipoItemValorMultaDia",gxold:"O555TipoItemValorMultaDia",gxvar:"A555TipoItemValorMultaDia",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A555TipoItemValorMultaDia=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z555TipoItemValorMultaDia=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("TIPOITEMVALORMULTADIA",gx.O.A555TipoItemValorMultaDia,2,',')},c2v:function(){gx.O.A555TipoItemValorMultaDia=this.val()},val:function(){return gx.fn.getDecimalValue("TIPOITEMVALORMULTADIA",'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"JSVAL", format:2,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   this.A120TipoItemId = 0 ;
   this.Z120TipoItemId = 0 ;
   this.O120TipoItemId = 0 ;
   this.A45TipoItemDescricao = "" ;
   this.Z45TipoItemDescricao = "" ;
   this.O45TipoItemDescricao = "" ;
   this.A554TipoItemQtdeDiasDevolucao = 0 ;
   this.Z554TipoItemQtdeDiasDevolucao = 0 ;
   this.O554TipoItemQtdeDiasDevolucao = 0 ;
   this.A555TipoItemValorMultaDia = 0 ;
   this.Z555TipoItemValorMultaDia = 0 ;
   this.O555TipoItemValorMultaDia = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV21Pgmname = "" ;
   this.AV22Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV16Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV14TipoItemId = 0 ;
   this.A3080TipoItemEmpresaId = "" ;
   this.A120TipoItemId = 0 ;
   this.A45TipoItemDescricao = "" ;
   this.A554TipoItemQtdeDiasDevolucao = 0 ;
   this.A555TipoItemValorMultaDia = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e121e2_client": ["'FECHAR'", true] ,"e131e2_client": ["AFTER TRN", true] ,"e141e333_client": ["ENTER", true] ,"e151e333_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV14TipoItemId',fld:'vTIPOITEMID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14TipoItemId", "vTIPOITEMID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A3080TipoItemEmpresaId", "TIPOITEMEMPRESAID", 0, "char");
   this.setVCMap("AV22Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV21Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new ttipoitem());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:44:18.54
*/
gx.evt.autoSkip = false;
gx.define('tsaidareboque', false, function () {
   this.ServerClass =  "tsaidareboque" ;
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
   this.Valid_Saidaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidaid",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId"],[]);
      return true;
   }
   this.Valid_Saidareboqueseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidareboqueseq",["gx.O.A4306SaidaEmpresaId", "gx.O.A4307SaidaId", "gx.O.A6312SaidaReboqueSeq", "gx.O.A6295SaidaReboqueUFVeiculo", "gx.O.A6296SaidaReboquePlacaVeiculo", "gx.O.A6297SaidaReboqueRNTC", "gx.O.A6298SaidaReboqueUsuarioAlt", 'gx.date.urlDateTime(gx.O.A6299SaidaReboqueDataHoraAlt,"DMY4")'],["A6295SaidaReboqueUFVeiculo", "A6296SaidaReboquePlacaVeiculo", "A6297SaidaReboqueRNTC", "A6298SaidaReboqueUsuarioAlt", "A6299SaidaReboqueDataHoraAlt", "Gx_mode", "Z4306SaidaEmpresaId", "Z4307SaidaId", "Z6312SaidaReboqueSeq", "Z6295SaidaReboqueUFVeiculo", "Z6296SaidaReboquePlacaVeiculo", "Z6297SaidaReboqueRNTC", "Z6298SaidaReboqueUsuarioAlt", "Z6299SaidaReboqueDataHoraAlt", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Saidareboqueufveiculo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDAREBOQUEUFVEICULO");
         this.AnyError  = 0;
         if ( ! ( this.A6295SaidaReboqueUFVeiculo == "" || this.A6295SaidaReboqueUFVeiculo == "AC" || this.A6295SaidaReboqueUFVeiculo == "AL" || this.A6295SaidaReboqueUFVeiculo == "AP" || this.A6295SaidaReboqueUFVeiculo == "AM" || this.A6295SaidaReboqueUFVeiculo == "BA" || this.A6295SaidaReboqueUFVeiculo == "CE" || this.A6295SaidaReboqueUFVeiculo == "DF" || this.A6295SaidaReboqueUFVeiculo == "ES" || this.A6295SaidaReboqueUFVeiculo == "GO" || this.A6295SaidaReboqueUFVeiculo == "MA" || this.A6295SaidaReboqueUFVeiculo == "MT" || this.A6295SaidaReboqueUFVeiculo == "MS" || this.A6295SaidaReboqueUFVeiculo == "MG" || this.A6295SaidaReboqueUFVeiculo == "PA" || this.A6295SaidaReboqueUFVeiculo == "PB" || this.A6295SaidaReboqueUFVeiculo == "PR" || this.A6295SaidaReboqueUFVeiculo == "PE" || this.A6295SaidaReboqueUFVeiculo == "PI" || this.A6295SaidaReboqueUFVeiculo == "RJ" || this.A6295SaidaReboqueUFVeiculo == "RN" || this.A6295SaidaReboqueUFVeiculo == "RS" || this.A6295SaidaReboqueUFVeiculo == "RO" || this.A6295SaidaReboqueUFVeiculo == "RR" || this.A6295SaidaReboqueUFVeiculo == "SC" || this.A6295SaidaReboqueUFVeiculo == "SP" || this.A6295SaidaReboqueUFVeiculo == "SE" || this.A6295SaidaReboqueUFVeiculo == "TO" || this.A6295SaidaReboqueUFVeiculo == "EX" ) )
         {
            try {
               gxballoon.setError("Campo UF do veículo fora do intervalo");
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
   this.e11gz860_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12gz860_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,80];
   this.GXLastCtrlId =80;
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
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDAEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaempresaid,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("SAIDAEMPRESAID",gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("SAIDAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKSAIDAID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidaid,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAID",gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKSAIDAREBOQUESEQ", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidareboqueseq,isvalid:null,rgrid:[],fld:"SAIDAREBOQUESEQ",gxz:"Z6312SaidaReboqueSeq",gxold:"O6312SaidaReboqueSeq",gxvar:"A6312SaidaReboqueSeq",ucs:[],op:[74,69,64,59,54],ip:[74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6312SaidaReboqueSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6312SaidaReboqueSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDAREBOQUESEQ",gx.O.A6312SaidaReboqueSeq,0)},c2v:function(){gx.O.A6312SaidaReboqueSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDAREBOQUESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKSAIDAREBOQUEUFVEICULO", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidareboqueufveiculo,isvalid:null,rgrid:[],fld:"SAIDAREBOQUEUFVEICULO",gxz:"Z6295SaidaReboqueUFVeiculo",gxold:"O6295SaidaReboqueUFVeiculo",gxvar:"A6295SaidaReboqueUFVeiculo",ucs:[],op:[54],ip:[54],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A6295SaidaReboqueUFVeiculo=Value},v2z:function(Value){gx.O.Z6295SaidaReboqueUFVeiculo=Value},v2c:function(){gx.fn.setComboBoxValue("SAIDAREBOQUEUFVEICULO",gx.O.A6295SaidaReboqueUFVeiculo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6295SaidaReboqueUFVeiculo=this.val()},val:function(){return gx.fn.getControlValue("SAIDAREBOQUEUFVEICULO")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCKSAIDAREBOQUEPLACAVEICULO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAREBOQUEPLACAVEICULO",gxz:"Z6296SaidaReboquePlacaVeiculo",gxold:"O6296SaidaReboquePlacaVeiculo",gxvar:"A6296SaidaReboquePlacaVeiculo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6296SaidaReboquePlacaVeiculo=Value},v2z:function(Value){gx.O.Z6296SaidaReboquePlacaVeiculo=Value},v2c:function(){gx.fn.setControlValue("SAIDAREBOQUEPLACAVEICULO",gx.O.A6296SaidaReboquePlacaVeiculo,0)},c2v:function(){gx.O.A6296SaidaReboquePlacaVeiculo=this.val()},val:function(){return gx.fn.getControlValue("SAIDAREBOQUEPLACAVEICULO")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKSAIDAREBOQUERNTC", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAREBOQUERNTC",gxz:"Z6297SaidaReboqueRNTC",gxold:"O6297SaidaReboqueRNTC",gxvar:"A6297SaidaReboqueRNTC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6297SaidaReboqueRNTC=Value},v2z:function(Value){gx.O.Z6297SaidaReboqueRNTC=Value},v2c:function(){gx.fn.setControlValue("SAIDAREBOQUERNTC",gx.O.A6297SaidaReboqueRNTC,0)},c2v:function(){gx.O.A6297SaidaReboqueRNTC=this.val()},val:function(){return gx.fn.getControlValue("SAIDAREBOQUERNTC")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKSAIDAREBOQUEUSUARIOALT", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAREBOQUEUSUARIOALT",gxz:"Z6298SaidaReboqueUsuarioAlt",gxold:"O6298SaidaReboqueUsuarioAlt",gxvar:"A6298SaidaReboqueUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6298SaidaReboqueUsuarioAlt=Value},v2z:function(Value){gx.O.Z6298SaidaReboqueUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SAIDAREBOQUEUSUARIOALT",gx.O.A6298SaidaReboqueUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6298SaidaReboqueUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SAIDAREBOQUEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCKSAIDAREBOQUEDATAHORAALT", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAREBOQUEDATAHORAALT",gxz:"Z6299SaidaReboqueDataHoraAlt",gxold:"O6299SaidaReboqueDataHoraAlt",gxvar:"A6299SaidaReboqueDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6299SaidaReboqueDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6299SaidaReboqueDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDAREBOQUEDATAHORAALT",gx.O.A6299SaidaReboqueDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6299SaidaReboqueDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SAIDAREBOQUEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[80]={fld:"PROMPT_4306_4307",grid:860};
   this.A4306SaidaEmpresaId = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.A6312SaidaReboqueSeq = 0 ;
   this.Z6312SaidaReboqueSeq = 0 ;
   this.O6312SaidaReboqueSeq = 0 ;
   this.A6295SaidaReboqueUFVeiculo = "" ;
   this.Z6295SaidaReboqueUFVeiculo = "" ;
   this.O6295SaidaReboqueUFVeiculo = "" ;
   this.A6296SaidaReboquePlacaVeiculo = "" ;
   this.Z6296SaidaReboquePlacaVeiculo = "" ;
   this.O6296SaidaReboquePlacaVeiculo = "" ;
   this.A6297SaidaReboqueRNTC = "" ;
   this.Z6297SaidaReboqueRNTC = "" ;
   this.O6297SaidaReboqueRNTC = "" ;
   this.A6298SaidaReboqueUsuarioAlt = "" ;
   this.Z6298SaidaReboqueUsuarioAlt = "" ;
   this.O6298SaidaReboqueUsuarioAlt = "" ;
   this.A6299SaidaReboqueDataHoraAlt = gx.date.nullDate() ;
   this.Z6299SaidaReboqueDataHoraAlt = gx.date.nullDate() ;
   this.O6299SaidaReboqueDataHoraAlt = gx.date.nullDate() ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A6312SaidaReboqueSeq = 0 ;
   this.A6295SaidaReboqueUFVeiculo = "" ;
   this.A6296SaidaReboquePlacaVeiculo = "" ;
   this.A6297SaidaReboqueRNTC = "" ;
   this.A6298SaidaReboqueUsuarioAlt = "" ;
   this.A6299SaidaReboqueDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e11gz860_client": ["ENTER", true] ,"e12gz860_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_4306_4307", [39,44]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidareboque());

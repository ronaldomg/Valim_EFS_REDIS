/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:31:35.37
*/
gx.evt.autoSkip = false;
gx.define('tnfse', false, function () {
   this.ServerClass =  "tnfse" ;
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
   this.Valid_Nfseid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Nfseid",["gx.O.A9736NFSEId", "gx.num.urlDecimal(gx.O.A9739NfseLote,\'.\',\',\')", "gx.O.A9740NfseStatus", 'gx.date.urlDateTime(gx.O.A9745NfseDataStatus,"DMY4")', "gx.O.A9741NfseProtocolo", "gx.O.A9748NfseRPS", "gx.O.A9746NfseCodigoVerificacao", "gx.num.urlDecimal(gx.O.A9747NfseNumero,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A9749NfseValorCredito,\'.\',\',\')", "gx.O.A9737NfseOrdemServicoEmpresaId", "gx.O.A9738NfseOrdemServicoId", "gx.O.A11121NfseNotaServicoSeq"],["A9739NfseLote", "A9740NfseStatus", "A9745NfseDataStatus", "A9741NfseProtocolo", "A9748NfseRPS", "A9746NfseCodigoVerificacao", "A9747NfseNumero", "A9749NfseValorCredito", "A9738NfseOrdemServicoId", "A9737NfseOrdemServicoEmpresaId", "A11121NfseNotaServicoSeq", "A9742NfseOrdemServicoFilialId", "Gx_mode", "Z9736NFSEId", "Z9739NfseLote", "Z9740NfseStatus", "Z9745NfseDataStatus", "Z9741NfseProtocolo", "Z9748NfseRPS", "Z9746NfseCodigoVerificacao", "Z9747NfseNumero", "Z9749NfseValorCredito", "Z9738NfseOrdemServicoId", "Z9737NfseOrdemServicoEmpresaId", "Z11121NfseNotaServicoSeq", "Z9742NfseOrdemServicoFilialId", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.Valid_Nfseordemservicoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NFSEORDEMSERVICOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nfseordemservicoempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Nfseordemservicoempresaid",["gx.O.A9737NfseOrdemServicoEmpresaId", "gx.O.A9738NfseOrdemServicoId", "gx.O.A9742NfseOrdemServicoFilialId"],["A9742NfseOrdemServicoFilialId"]);
      return true;
   }
   this.Valid_Nfsenotaservicoseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Nfsenotaservicoseq",["gx.O.A11121NfseNotaServicoSeq"],[]);
      return true;
   }
   this.e11dw720_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12dw720_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,105];
   this.GXLastCtrlId =105;
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
   GXValidFnc[37]={fld:"TEXTBLOCKNFSEID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfseid,isvalid:null,rgrid:[],fld:"NFSEID",gxz:"Z9736NFSEId",gxold:"O9736NFSEId",gxvar:"A9736NFSEId",ucs:[],op:[99,84,94,79,74,69,64,59,54,49,44],ip:[99,84,94,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9736NFSEId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9736NFSEId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFSEID",gx.O.A9736NFSEId,0)},c2v:function(){gx.O.A9736NFSEId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFSEID",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKNFSELOTE", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFSELOTE",gxz:"Z9739NfseLote",gxold:"O9739NfseLote",gxvar:"A9739NfseLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9739NfseLote=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9739NfseLote=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFSELOTE",gx.O.A9739NfseLote,0)},c2v:function(){gx.O.A9739NfseLote=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFSELOTE",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCKNFSESTATUS", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFSESTATUS",gxz:"Z9740NfseStatus",gxold:"O9740NfseStatus",gxvar:"A9740NfseStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9740NfseStatus=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9740NfseStatus=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFSESTATUS",gx.O.A9740NfseStatus,0)},c2v:function(){gx.O.A9740NfseStatus=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFSESTATUS",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKNFSEDATASTATUS", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"dtime",len:8,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFSEDATASTATUS",gxz:"Z9745NfseDataStatus",gxold:"O9745NfseDataStatus",gxvar:"A9745NfseDataStatus",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9745NfseDataStatus=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9745NfseDataStatus=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NFSEDATASTATUS",gx.O.A9745NfseDataStatus,0)},c2v:function(){gx.O.A9745NfseDataStatus=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NFSEDATASTATUS")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKNFSEPROTOCOLO", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:9999,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFSEPROTOCOLO",gxz:"Z9741NfseProtocolo",gxold:"O9741NfseProtocolo",gxvar:"A9741NfseProtocolo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9741NfseProtocolo=Value},v2z:function(Value){gx.O.Z9741NfseProtocolo=Value},v2c:function(){gx.fn.setControlValue("NFSEPROTOCOLO",gx.O.A9741NfseProtocolo,0)},c2v:function(){gx.O.A9741NfseProtocolo=this.val()},val:function(){return gx.fn.getControlValue("NFSEPROTOCOLO")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKNFSERPS", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:9999,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFSERPS",gxz:"Z9748NfseRPS",gxold:"O9748NfseRPS",gxvar:"A9748NfseRPS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9748NfseRPS=Value},v2z:function(Value){gx.O.Z9748NfseRPS=Value},v2c:function(){gx.fn.setControlValue("NFSERPS",gx.O.A9748NfseRPS,0)},c2v:function(){gx.O.A9748NfseRPS=this.val()},val:function(){return gx.fn.getControlValue("NFSERPS")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKNFSECODIGOVERIFICACAO", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:9999,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFSECODIGOVERIFICACAO",gxz:"Z9746NfseCodigoVerificacao",gxold:"O9746NfseCodigoVerificacao",gxvar:"A9746NfseCodigoVerificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9746NfseCodigoVerificacao=Value},v2z:function(Value){gx.O.Z9746NfseCodigoVerificacao=Value},v2c:function(){gx.fn.setControlValue("NFSECODIGOVERIFICACAO",gx.O.A9746NfseCodigoVerificacao,0)},c2v:function(){gx.O.A9746NfseCodigoVerificacao=this.val()},val:function(){return gx.fn.getControlValue("NFSECODIGOVERIFICACAO")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCKNFSENUMERO", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFSENUMERO",gxz:"Z9747NfseNumero",gxold:"O9747NfseNumero",gxvar:"A9747NfseNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9747NfseNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9747NfseNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFSENUMERO",gx.O.A9747NfseNumero,0)},c2v:function(){gx.O.A9747NfseNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFSENUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKNFSEVALORCREDITO", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"decimal",len:4,dec:2,sign:false,pic:"9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFSEVALORCREDITO",gxz:"Z9749NfseValorCredito",gxold:"O9749NfseValorCredito",gxvar:"A9749NfseValorCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9749NfseValorCredito=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9749NfseValorCredito=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("NFSEVALORCREDITO",gx.O.A9749NfseValorCredito,2,',')},c2v:function(){gx.O.A9749NfseValorCredito=this.val()},val:function(){return gx.fn.getDecimalValue("NFSEVALORCREDITO",'.',',')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCKNFSEORDEMSERVICOID", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfseordemservicoid,isvalid:null,rgrid:[],fld:"NFSEORDEMSERVICOID",gxz:"Z9738NfseOrdemServicoId",gxold:"O9738NfseOrdemServicoId",gxvar:"A9738NfseOrdemServicoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9738NfseOrdemServicoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9738NfseOrdemServicoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFSEORDEMSERVICOID",gx.O.A9738NfseOrdemServicoId,0)},c2v:function(){gx.O.A9738NfseOrdemServicoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFSEORDEMSERVICOID",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKNFSEORDEMSERVICOFILIALID", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NFSEORDEMSERVICOFILIALID",gxz:"Z9742NfseOrdemServicoFilialId",gxold:"O9742NfseOrdemServicoFilialId",gxvar:"A9742NfseOrdemServicoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9742NfseOrdemServicoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9742NfseOrdemServicoFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFSEORDEMSERVICOFILIALID",gx.O.A9742NfseOrdemServicoFilialId,0)},c2v:function(){gx.O.A9742NfseOrdemServicoFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFSEORDEMSERVICOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCKNFSEORDEMSERVICOEMPRESAID", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfseordemservicoempresaid,isvalid:null,rgrid:[],fld:"NFSEORDEMSERVICOEMPRESAID",gxz:"Z9737NfseOrdemServicoEmpresaId",gxold:"O9737NfseOrdemServicoEmpresaId",gxvar:"A9737NfseOrdemServicoEmpresaId",ucs:[],op:[89],ip:[89,84,94],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9737NfseOrdemServicoEmpresaId=Value},v2z:function(Value){gx.O.Z9737NfseOrdemServicoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("NFSEORDEMSERVICOEMPRESAID",gx.O.A9737NfseOrdemServicoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9737NfseOrdemServicoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("NFSEORDEMSERVICOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[97]={fld:"TEXTBLOCKNFSENOTASERVICOSEQ", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nfsenotaservicoseq,isvalid:null,rgrid:[],fld:"NFSENOTASERVICOSEQ",gxz:"Z11121NfseNotaServicoSeq",gxold:"O11121NfseNotaServicoSeq",gxvar:"A11121NfseNotaServicoSeq",ucs:[],op:[],ip:[99],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11121NfseNotaServicoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11121NfseNotaServicoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NFSENOTASERVICOSEQ",gx.O.A11121NfseNotaServicoSeq,0)},c2v:function(){gx.O.A11121NfseNotaServicoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NFSENOTASERVICOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[105]={fld:"PROMPT_11121",grid:720};
   this.A9736NFSEId = 0 ;
   this.Z9736NFSEId = 0 ;
   this.O9736NFSEId = 0 ;
   this.A9739NfseLote = 0 ;
   this.Z9739NfseLote = 0 ;
   this.O9739NfseLote = 0 ;
   this.A9740NfseStatus = 0 ;
   this.Z9740NfseStatus = 0 ;
   this.O9740NfseStatus = 0 ;
   this.A9745NfseDataStatus = gx.date.nullDate() ;
   this.Z9745NfseDataStatus = gx.date.nullDate() ;
   this.O9745NfseDataStatus = gx.date.nullDate() ;
   this.A9741NfseProtocolo = "" ;
   this.Z9741NfseProtocolo = "" ;
   this.O9741NfseProtocolo = "" ;
   this.A9748NfseRPS = "" ;
   this.Z9748NfseRPS = "" ;
   this.O9748NfseRPS = "" ;
   this.A9746NfseCodigoVerificacao = "" ;
   this.Z9746NfseCodigoVerificacao = "" ;
   this.O9746NfseCodigoVerificacao = "" ;
   this.A9747NfseNumero = 0 ;
   this.Z9747NfseNumero = 0 ;
   this.O9747NfseNumero = 0 ;
   this.A9749NfseValorCredito = 0 ;
   this.Z9749NfseValorCredito = 0 ;
   this.O9749NfseValorCredito = 0 ;
   this.A9738NfseOrdemServicoId = 0 ;
   this.Z9738NfseOrdemServicoId = 0 ;
   this.O9738NfseOrdemServicoId = 0 ;
   this.A9742NfseOrdemServicoFilialId = 0 ;
   this.Z9742NfseOrdemServicoFilialId = 0 ;
   this.O9742NfseOrdemServicoFilialId = 0 ;
   this.A9737NfseOrdemServicoEmpresaId = "" ;
   this.Z9737NfseOrdemServicoEmpresaId = "" ;
   this.O9737NfseOrdemServicoEmpresaId = "" ;
   this.A11121NfseNotaServicoSeq = 0 ;
   this.Z11121NfseNotaServicoSeq = 0 ;
   this.O11121NfseNotaServicoSeq = 0 ;
   this.A9736NFSEId = 0 ;
   this.A9739NfseLote = 0 ;
   this.A9740NfseStatus = 0 ;
   this.A9745NfseDataStatus = gx.date.nullDate() ;
   this.A9741NfseProtocolo = "" ;
   this.A9748NfseRPS = "" ;
   this.A9746NfseCodigoVerificacao = "" ;
   this.A9747NfseNumero = 0 ;
   this.A9749NfseValorCredito = 0 ;
   this.A9738NfseOrdemServicoId = 0 ;
   this.A9742NfseOrdemServicoFilialId = 0 ;
   this.A9737NfseOrdemServicoEmpresaId = "" ;
   this.A11121NfseNotaServicoSeq = 0 ;
   this.Events = {"e11dw720_client": ["ENTER", true] ,"e12dw720_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.setPrompt("PROMPT_11121", [99]);
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tnfse());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:7:55.80
*/
gx.evt.autoSkip = false;
gx.define('hrelacaolancamentocaixa', false, function () {
   this.ServerClass =  "hrelacaolancamentocaixa" ;
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
   this.Validv_Historicofcxid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOFCXID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Historicofcxempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOFCXEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11q62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13q62_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15q62_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,25,28,30,33,35,37,40,42,43,46,48,51,53,55,58,60,63,65,67,70,72,73,76,78,87,88,89,91,93,94];
   this.GXLastCtrlId =94;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV20Tipo",gxold:"OV20Tipo",gxvar:"AV20Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20Tipo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20Tipo=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vTIPO",gx.O.AV20Tipo)},c2v:function(){gx.O.AV20Tipo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPO",'.')},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLERDTLANCAMENTO",grid:0};
   GXValidFnc[33]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDT_INI",gxz:"ZV21Dt_ini",gxold:"OV21Dt_ini",gxvar:"AV21Dt_ini",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21Dt_ini=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21Dt_ini=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDT_INI",gx.O.AV21Dt_ini,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV21Dt_ini=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDT_INI")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDT_FIM",gxz:"ZV22Dt_fim",gxold:"OV22Dt_fim",gxvar:"AV22Dt_fim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22Dt_fim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22Dt_fim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDT_FIM",gx.O.AV22Dt_fim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV22Dt_fim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDT_FIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOID",gxz:"ZV23UsuarioId",gxold:"OV23UsuarioId",gxvar:"AV23UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23UsuarioId=Value},v2z:function(Value){gx.O.ZV23UsuarioId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOID",gx.O.AV23UsuarioId,0)},c2v:function(){gx.O.AV23UsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIONOME",gxz:"ZV24UsuarioNome",gxold:"OV24UsuarioNome",gxvar:"AV24UsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24UsuarioNome=Value},v2z:function(Value){gx.O.ZV24UsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vUSUARIONOME",gx.O.AV24UsuarioNome,0)},c2v:function(){gx.O.AV24UsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[48]={fld:"TABLERDTABERTURA",grid:0};
   GXValidFnc[51]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vABERT_INI",gxz:"ZV28Abert_ini",gxold:"OV28Abert_ini",gxvar:"AV28Abert_ini",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Abert_ini=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28Abert_ini=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vABERT_INI",gx.O.AV28Abert_ini,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28Abert_ini=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vABERT_INI")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vABERT_FIM",gxz:"ZV29Abert_fim",gxold:"OV29Abert_fim",gxvar:"AV29Abert_fim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29Abert_fim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29Abert_fim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vABERT_FIM",gx.O.AV29Abert_fim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29Abert_fim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vABERT_FIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[60]={fld:"TABLERDTFECHAMENTO",grid:0};
   GXValidFnc[63]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFECH_INI",gxz:"ZV27Fech_ini",gxold:"OV27Fech_ini",gxvar:"AV27Fech_ini",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Fech_ini=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV27Fech_ini=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vFECH_INI",gx.O.AV27Fech_ini,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV27Fech_ini=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vFECH_INI")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[65]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFECH_FIM",gxz:"ZV30Fech_fim",gxold:"OV30Fech_fim",gxvar:"AV30Fech_fim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30Fech_fim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30Fech_fim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vFECH_FIM",gx.O.AV30Fech_fim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30Fech_fim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vFECH_FIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[70]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Historicofcxid,isvalid:null,rgrid:[],fld:"vHISTORICOFCXID",gxz:"ZV25HistoricoFcxId",gxold:"OV25HistoricoFcxId",gxvar:"AV25HistoricoFcxId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25HistoricoFcxId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25HistoricoFcxId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOFCXID",gx.O.AV25HistoricoFcxId,0)},c2v:function(){gx.O.AV25HistoricoFcxId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOFCXID",'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOFCXDESCRICAO",gxz:"ZV26HistoricoFcxDescricao",gxold:"OV26HistoricoFcxDescricao",gxvar:"AV26HistoricoFcxDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26HistoricoFcxDescricao=Value},v2z:function(Value){gx.O.ZV26HistoricoFcxDescricao=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOFCXDESCRICAO",gx.O.AV26HistoricoFcxDescricao,0)},c2v:function(){gx.O.AV26HistoricoFcxDescricao=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOFCXDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPCAIXA",gxz:"ZV37TpCaixa",gxold:"OV37TpCaixa",gxvar:"AV37TpCaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV37TpCaixa=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37TpCaixa=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vTPCAIXA",gx.O.AV37TpCaixa)},c2v:function(){gx.O.AV37TpCaixa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPCAIXA",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"JS", format:2,grid:0};
   GXValidFnc[88]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vERRO",gxz:"ZV31Erro",gxold:"OV31Erro",gxvar:"AV31Erro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Erro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31Erro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vERRO",gx.O.AV31Erro,0)},c2v:function(){gx.O.AV31Erro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vERRO",'.')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Historicofcxempresaid,isvalid:null,rgrid:[],fld:"vHISTORICOFCXEMPRESAID",gxz:"ZV34HistoricoFcxEmpresaId",gxold:"OV34HistoricoFcxEmpresaId",gxvar:"AV34HistoricoFcxEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34HistoricoFcxEmpresaId=Value},v2z:function(Value){gx.O.ZV34HistoricoFcxEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOFCXEMPRESAID",gx.O.AV34HistoricoFcxEmpresaId,0)},c2v:function(){gx.O.AV34HistoricoFcxEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOFCXEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[91]={fld:"BTNHELP",grid:0};
   GXValidFnc[93]={fld:"PROMPT_USUARIOID",grid:0};
   GXValidFnc[94]={fld:"PROMPT_HISTORICOFCXID",grid:0};
   this.AV20Tipo = 0 ;
   this.ZV20Tipo = 0 ;
   this.OV20Tipo = 0 ;
   this.AV21Dt_ini = gx.date.nullDate() ;
   this.ZV21Dt_ini = gx.date.nullDate() ;
   this.OV21Dt_ini = gx.date.nullDate() ;
   this.AV22Dt_fim = gx.date.nullDate() ;
   this.ZV22Dt_fim = gx.date.nullDate() ;
   this.OV22Dt_fim = gx.date.nullDate() ;
   this.AV23UsuarioId = "" ;
   this.ZV23UsuarioId = "" ;
   this.OV23UsuarioId = "" ;
   this.AV24UsuarioNome = "" ;
   this.ZV24UsuarioNome = "" ;
   this.OV24UsuarioNome = "" ;
   this.AV28Abert_ini = gx.date.nullDate() ;
   this.ZV28Abert_ini = gx.date.nullDate() ;
   this.OV28Abert_ini = gx.date.nullDate() ;
   this.AV29Abert_fim = gx.date.nullDate() ;
   this.ZV29Abert_fim = gx.date.nullDate() ;
   this.OV29Abert_fim = gx.date.nullDate() ;
   this.AV27Fech_ini = gx.date.nullDate() ;
   this.ZV27Fech_ini = gx.date.nullDate() ;
   this.OV27Fech_ini = gx.date.nullDate() ;
   this.AV30Fech_fim = gx.date.nullDate() ;
   this.ZV30Fech_fim = gx.date.nullDate() ;
   this.OV30Fech_fim = gx.date.nullDate() ;
   this.AV25HistoricoFcxId = 0 ;
   this.ZV25HistoricoFcxId = 0 ;
   this.OV25HistoricoFcxId = 0 ;
   this.AV26HistoricoFcxDescricao = "" ;
   this.ZV26HistoricoFcxDescricao = "" ;
   this.OV26HistoricoFcxDescricao = "" ;
   this.AV37TpCaixa = 0 ;
   this.ZV37TpCaixa = 0 ;
   this.OV37TpCaixa = 0 ;
   this.AV31Erro = 0 ;
   this.ZV31Erro = 0 ;
   this.OV31Erro = 0 ;
   this.AV34HistoricoFcxEmpresaId = "" ;
   this.ZV34HistoricoFcxEmpresaId = "" ;
   this.OV34HistoricoFcxEmpresaId = "" ;
   this.AV20Tipo = 0 ;
   this.AV21Dt_ini = gx.date.nullDate() ;
   this.AV22Dt_fim = gx.date.nullDate() ;
   this.AV23UsuarioId = "" ;
   this.AV24UsuarioNome = "" ;
   this.AV28Abert_ini = gx.date.nullDate() ;
   this.AV29Abert_fim = gx.date.nullDate() ;
   this.AV27Fech_ini = gx.date.nullDate() ;
   this.AV30Fech_fim = gx.date.nullDate() ;
   this.AV25HistoricoFcxId = 0 ;
   this.AV26HistoricoFcxDescricao = "" ;
   this.AV37TpCaixa = 0 ;
   this.AV31Erro = 0 ;
   this.AV34HistoricoFcxEmpresaId = "" ;
   this.A3549HistoricoFcxEmpresaID = "" ;
   this.A3550HistoricoFcxId = 0 ;
   this.A75UsuarioId = "" ;
   this.Events = {"e11q62_client": ["'FECHAR'", true] ,"e13q62_client": ["ENTER", true] ,"e15q62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV20Tipo',fld:'vTIPO'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV21Dt_ini',fld:'vDT_INI'},{av:'AV22Dt_fim',fld:'vDT_FIM'},{av:'AV28Abert_ini',fld:'vABERT_INI'},{av:'AV29Abert_fim',fld:'vABERT_FIM'},{av:'AV27Fech_ini',fld:'vFECH_INI'},{av:'AV30Fech_fim',fld:'vFECH_FIM'},{av:'AV23UsuarioId',fld:'vUSUARIOID'},{av:'AV25HistoricoFcxId',fld:'vHISTORICOFCXID'},{av:'AV37TpCaixa',fld:'vTPCAIXA'},{av:'AV42Pgmdesc',fld:'vPGMDESC'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV31Erro',fld:'vERRO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A3550HistoricoFcxId',fld:'HISTORICOFCXID'},{av:'A3549HistoricoFcxEmpresaID',fld:'HISTORICOFCXEMPRESAID'},{av:'AV34HistoricoFcxEmpresaId',fld:'vHISTORICOFCXEMPRESAID'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV31Erro',fld:'vERRO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37TpCaixa',fld:'vTPCAIXA'},{av:'AV25HistoricoFcxId',fld:'vHISTORICOFCXID'},{av:'AV23UsuarioId',fld:'vUSUARIOID'},{av:'AV30Fech_fim',fld:'vFECH_FIM'},{av:'AV27Fech_ini',fld:'vFECH_INI'},{av:'AV29Abert_fim',fld:'vABERT_FIM'},{av:'AV28Abert_ini',fld:'vABERT_INI'},{av:'AV22Dt_fim',fld:'vDT_FIM'},{av:'AV21Dt_ini',fld:'vDT_INI'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV43GXLvl118',fld:'vGXLVL118'},{av:'AV44GXLvl175',fld:'vGXLVL175'}]];
   this.setPrompt("PROMPT_USUARIOID", [42]);
   this.setPrompt("PROMPT_HISTORICOFCXID", [72]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaolancamentocaixa());

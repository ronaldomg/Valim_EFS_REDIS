/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:18:17.88
*/
gx.evt.autoSkip = false;
gx.define('tmovimentacao', false, function () {
   this.ServerClass =  "tmovimentacao" ;
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
      this.A554TipoItemQtdeDiasDevolucao=gx.fn.getIntegerValue("TIPOITEMQTDEDIASDEVOLUCAO",'.') ;
      this.A390MovimentacaoValorDias=gx.fn.getDateValue("MOVIMENTACAOVALORDIAS") ;
      this.A391MovimentacaoDiasMulta=gx.fn.getIntegerValue("MOVIMENTACAODIASMULTA",'.') ;
      this.A555TipoItemValorMultaDia=gx.fn.getDecimalValue("TIPOITEMVALORMULTADIA",'.',',') ;
      this.A392MovimentacaoValorTotalMulta=gx.fn.getDecimalValue("MOVIMENTACAOVALORTOTALMULTA",'.',',') ;
      this.AV14MovimentacaoId=gx.fn.getIntegerValue("vMOVIMENTACAOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A621MovimentacaoEmpresaId=gx.fn.getControlValue("MOVIMENTACAOEMPRESAID") ;
      this.AV23AcervoEmpresaId=gx.fn.getControlValue("vACERVOEMPRESAID") ;
      this.A3082AcervoEmpresaId=gx.fn.getControlValue("ACERVOEMPRESAID") ;
      this.AV21EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.A389MovimentacaoNumOrdem=gx.fn.getIntegerValue("MOVIMENTACAONUMORDEM",'.') ;
      this.A3080TipoItemEmpresaId=gx.fn.getControlValue("TIPOITEMEMPRESAID") ;
      this.A120TipoItemId=gx.fn.getIntegerValue("TIPOITEMID",'.') ;
      this.AV28Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV19Sim=gx.fn.getControlValue("vSIM") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Movimentacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVIMENTACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movimentacaodataemprestimo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVIMENTACAODATAEMPRESTIMO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movimentacaoprevisaodevolucao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MOVIMENTACAOPREVISAODEVOLUCAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Movimentacaodatadevolucao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Movimentacaodatadevolucao",['gx.date.urlDate(gx.O.A106MovimentacaoPrevisaoDevolucao,"DMY4")', 'gx.date.urlDate(gx.O.A107MovimentacaoDataDevolucao,"DMY4")', "gx.O.A391MovimentacaoDiasMulta"],["A391MovimentacaoDiasMulta"]);
      return true;
   }
   this.Valid_Acervoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ACERVOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e120u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e130u2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e140u332_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e150u332_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,35,38,40,41,44,46,54,55,58,59];
   this.GXLastCtrlId =59;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Movimentacaoid,isvalid:null,rgrid:[],fld:"MOVIMENTACAOID",gxz:"Z104MovimentacaoId",gxold:"O104MovimentacaoId",gxvar:"A104MovimentacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A104MovimentacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z104MovimentacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOID",gx.O.A104MovimentacaoId,0)},c2v:function(){gx.O.A104MovimentacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MOVIMENTACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Movimentacaodataemprestimo,isvalid:null,rgrid:[],fld:"MOVIMENTACAODATAEMPRESTIMO",gxz:"Z105MovimentacaoDataEmprestimo",gxold:"O105MovimentacaoDataEmprestimo",gxvar:"A105MovimentacaoDataEmprestimo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAODATAEMPRESTIMO",gx.O.A105MovimentacaoDataEmprestimo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A105MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("MOVIMENTACAODATAEMPRESTIMO")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Movimentacaoprevisaodevolucao,isvalid:null,rgrid:[],fld:"MOVIMENTACAOPREVISAODEVOLUCAO",gxz:"Z106MovimentacaoPrevisaoDevolucao",gxold:"O106MovimentacaoPrevisaoDevolucao",gxvar:"A106MovimentacaoPrevisaoDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAOPREVISAODEVOLUCAO",gx.O.A106MovimentacaoPrevisaoDevolucao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A106MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("MOVIMENTACAOPREVISAODEVOLUCAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Movimentacaodatadevolucao,isvalid:null,rgrid:[],fld:"MOVIMENTACAODATADEVOLUCAO",gxz:"Z107MovimentacaoDataDevolucao",gxold:"O107MovimentacaoDataDevolucao",gxvar:"A107MovimentacaoDataDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[29,24],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A107MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z107MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MOVIMENTACAODATADEVOLUCAO",gx.O.A107MovimentacaoDataDevolucao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A107MovimentacaoDataDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("MOVIMENTACAODATADEVOLUCAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Acervoid,isvalid:null,rgrid:[],fld:"ACERVOID",gxz:"Z39AcervoId",gxold:"O39AcervoId",gxvar:"A39AcervoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A39AcervoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z39AcervoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ACERVOID",gx.O.A39AcervoId,0)},c2v:function(){gx.O.A39AcervoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ACERVOID",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ACERVOTITULO",gxz:"Z40AcervoTitulo",gxold:"O40AcervoTitulo",gxvar:"A40AcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A40AcervoTitulo=Value},v2z:function(Value){gx.O.Z40AcervoTitulo=Value},v2c:function(){gx.fn.setControlValue("ACERVOTITULO",gx.O.A40AcervoTitulo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A40AcervoTitulo=this.val()},val:function(){return gx.fn.getControlValue("ACERVOTITULO")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAID",gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("PESSOAFANTASIA",gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("PESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MOVIMENTACAOTIPO",gxz:"Z108MovimentacaoTipo",gxold:"O108MovimentacaoTipo",gxvar:"A108MovimentacaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.A108MovimentacaoTipo=Value},v2z:function(Value){gx.O.Z108MovimentacaoTipo=Value},v2c:function(){gx.fn.setRadioValue("MOVIMENTACAOTIPO",gx.O.A108MovimentacaoTipo)},c2v:function(){gx.O.A108MovimentacaoTipo=this.val()},val:function(){return gx.fn.getControlValue("MOVIMENTACAOTIPO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"PROMPT_39",grid:332};
   GXValidFnc[59]={fld:"PROMPT_69",grid:332};
   this.A104MovimentacaoId = 0 ;
   this.Z104MovimentacaoId = 0 ;
   this.O104MovimentacaoId = 0 ;
   this.A105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.Z105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.O105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.A106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.Z106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.O106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.A107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.Z107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.O107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.A39AcervoId = 0 ;
   this.Z39AcervoId = 0 ;
   this.O39AcervoId = 0 ;
   this.A40AcervoTitulo = "" ;
   this.Z40AcervoTitulo = "" ;
   this.O40AcervoTitulo = "" ;
   this.A69PessoaId = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.A108MovimentacaoTipo = "" ;
   this.Z108MovimentacaoTipo = "" ;
   this.O108MovimentacaoTipo = "" ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.ZV20AcessoSistemaSequencia = 0 ;
   this.OV20AcessoSistemaSequencia = 0 ;
   this.A120TipoItemId = 0 ;
   this.A3080TipoItemEmpresaId = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV27Pgmname = "" ;
   this.AV28Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.AV18Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV23AcervoEmpresaId = "" ;
   this.AV21EmpresaPessoasEmpresaId = "" ;
   this.AV19Sim = "" ;
   this.AV17Nao = "" ;
   this.AV14MovimentacaoId = 0 ;
   this.A621MovimentacaoEmpresaId = "" ;
   this.A104MovimentacaoId = 0 ;
   this.A3082AcervoEmpresaId = "" ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A392MovimentacaoValorTotalMulta = 0 ;
   this.A391MovimentacaoDiasMulta = 0 ;
   this.A390MovimentacaoValorDias = gx.date.nullDate() ;
   this.A105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.A106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.A107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.A108MovimentacaoTipo = "" ;
   this.A39AcervoId = 0 ;
   this.A40AcervoTitulo = "" ;
   this.A69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A389MovimentacaoNumOrdem = 0 ;
   this.A554TipoItemQtdeDiasDevolucao = 0 ;
   this.A555TipoItemValorMultaDia = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e120u2_client": ["'FECHAR'", true] ,"e130u2_client": ["AFTER TRN", true] ,"e140u332_client": ["ENTER", true] ,"e150u332_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV14MovimentacaoId',fld:'vMOVIMENTACAOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_39", [34]);
   this.setPrompt("PROMPT_69", [40]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A554TipoItemQtdeDiasDevolucao", "TIPOITEMQTDEDIASDEVOLUCAO", 0, "int");
   this.setVCMap("A390MovimentacaoValorDias", "MOVIMENTACAOVALORDIAS", 0, "date");
   this.setVCMap("A391MovimentacaoDiasMulta", "MOVIMENTACAODIASMULTA", 0, "int");
   this.setVCMap("A555TipoItemValorMultaDia", "TIPOITEMVALORMULTADIA", 0, "decimal");
   this.setVCMap("A392MovimentacaoValorTotalMulta", "MOVIMENTACAOVALORTOTALMULTA", 0, "decimal");
   this.setVCMap("AV14MovimentacaoId", "vMOVIMENTACAOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A621MovimentacaoEmpresaId", "MOVIMENTACAOEMPRESAID", 0, "char");
   this.setVCMap("AV23AcervoEmpresaId", "vACERVOEMPRESAID", 0, "char");
   this.setVCMap("A3082AcervoEmpresaId", "ACERVOEMPRESAID", 0, "char");
   this.setVCMap("AV21EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A389MovimentacaoNumOrdem", "MOVIMENTACAONUMORDEM", 0, "int");
   this.setVCMap("A3080TipoItemEmpresaId", "TIPOITEMEMPRESAID", 0, "char");
   this.setVCMap("A120TipoItemId", "TIPOITEMID", 0, "int");
   this.setVCMap("AV28Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV27Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV19Sim", "vSIM", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tmovimentacao());

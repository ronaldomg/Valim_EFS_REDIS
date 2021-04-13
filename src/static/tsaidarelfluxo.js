/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:33:25.10
*/
gx.evt.autoSkip = false;
gx.define('tsaidarelfluxo', false, function () {
   this.ServerClass =  "tsaidarelfluxo" ;
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
   this.Valid_Saidarelfluxousuario=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDARELFLUXOUSUARIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidarelfluxoemp=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDARELFLUXOEMP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidarelfluxosaidaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SAIDARELFLUXOSAIDAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Saidarelfluxoseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Saidarelfluxoseq",["gx.O.A10212SaidaRelFluxoUsuario", "gx.O.A10213SaidaRelFluxoEmp", "gx.O.A10214SaidaRelFluxoSaidaId", "gx.O.A10215SaidaRelFluxoSeq", "gx.O.A10276SaidaRelFluxoProdutoId", "gx.O.A10275SaidaRelFluxoFilialId", 'gx.date.urlDate(gx.O.A10270SaidaRelFluxoData,"DMY4")', "gx.O.A10272SaidaRelFluxoFamiliaId", "gx.O.A10271SaidaRelFluxoFamiliaDesc", "gx.O.A10266SaidaRelFluxoClassificacao", "gx.O.A10267SaidaRelFluxoClassificacaoDesc", "gx.O.A10268SaidaRelFluxoClassPrincipal", "gx.O.A10269SaidaRelFluxoClassPrincipalDes", "gx.O.A10273SaidaRelFluxoTipoDispendio", "gx.O.A10274SaidaRelFluxoTipoDispendioDesc", "gx.O.A10263SaidaRelFluxoSubGrupo", "gx.O.A10264SaidaRelFluxoSubGrupoDesc", "gx.O.A10261SaidaRelFluxoTpImpressao", "gx.O.A10259SaidaRelFluxoSelecaoTipo", "gx.O.A10258SaidaRelFluxoPrecoId", "gx.O.A10260SaidaRelFluxoSnEstorno", "gx.O.A10257SaidaRelFluxoEntradaSaida", "gx.O.A10256SaidaRelFluxoClassFluxoId", "gx.O.A10255SaidaRelFluxoClassFluxoDesc", "gx.O.A10254SaidaRelFluxoTpFluxo", "gx.O.A10246SaidaRelFluxoFilialNota", "gx.O.A10253SaidaRelFluxoSerie", "gx.O.A10252SaidaRelFluxoNoDocumento", "gx.num.urlDecimal(gx.O.A10262SaidaRelFluxoQtde,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A10250SaidaRelFluxoValor,\'.\',\',\')", 'gx.date.urlDate(gx.O.A10251SaidaRelFluxoDtLancmto,"DMY4")', "gx.O.A10249SaidaRelFluxoNoColuna", "gx.O.A10248SaidaRelFluxoCodImpressao", "gx.O.A10247SaidaRelFluxoDesImpressao"],["A10276SaidaRelFluxoProdutoId", "A10275SaidaRelFluxoFilialId", "A10270SaidaRelFluxoData", "A10272SaidaRelFluxoFamiliaId", "A10271SaidaRelFluxoFamiliaDesc", "A10266SaidaRelFluxoClassificacao", "A10267SaidaRelFluxoClassificacaoDesc", "A10268SaidaRelFluxoClassPrincipal", "A10269SaidaRelFluxoClassPrincipalDes", "A10273SaidaRelFluxoTipoDispendio", "A10274SaidaRelFluxoTipoDispendioDesc", "A10263SaidaRelFluxoSubGrupo", "A10264SaidaRelFluxoSubGrupoDesc", "A10261SaidaRelFluxoTpImpressao", "A10259SaidaRelFluxoSelecaoTipo", "A10258SaidaRelFluxoPrecoId", "A10260SaidaRelFluxoSnEstorno", "A10257SaidaRelFluxoEntradaSaida", "A10256SaidaRelFluxoClassFluxoId", "A10255SaidaRelFluxoClassFluxoDesc", "A10254SaidaRelFluxoTpFluxo", "A10246SaidaRelFluxoFilialNota", "A10253SaidaRelFluxoSerie", "A10252SaidaRelFluxoNoDocumento", "A10262SaidaRelFluxoQtde", "A10250SaidaRelFluxoValor", "A10251SaidaRelFluxoDtLancmto", "A10249SaidaRelFluxoNoColuna", "A10248SaidaRelFluxoCodImpressao", "A10247SaidaRelFluxoDesImpressao", "Gx_mode", "Z10212SaidaRelFluxoUsuario", "Z10213SaidaRelFluxoEmp", "Z10214SaidaRelFluxoSaidaId", "Z10215SaidaRelFluxoSeq", "Z10276SaidaRelFluxoProdutoId", "Z10275SaidaRelFluxoFilialId", "Z10270SaidaRelFluxoData", "Z10272SaidaRelFluxoFamiliaId", "Z10271SaidaRelFluxoFamiliaDesc", "Z10266SaidaRelFluxoClassificacao", "Z10267SaidaRelFluxoClassificacaoDesc", "Z10268SaidaRelFluxoClassPrincipal", "Z10269SaidaRelFluxoClassPrincipalDes", "Z10273SaidaRelFluxoTipoDispendio", "Z10274SaidaRelFluxoTipoDispendioDesc", "Z10263SaidaRelFluxoSubGrupo", "Z10264SaidaRelFluxoSubGrupoDesc", "Z10261SaidaRelFluxoTpImpressao", "Z10259SaidaRelFluxoSelecaoTipo", "Z10258SaidaRelFluxoPrecoId", "Z10260SaidaRelFluxoSnEstorno", "Z10257SaidaRelFluxoEntradaSaida", "Z10256SaidaRelFluxoClassFluxoId", "Z10255SaidaRelFluxoClassFluxoDesc", "Z10254SaidaRelFluxoTpFluxo", "Z10246SaidaRelFluxoFilialNota", "Z10253SaidaRelFluxoSerie", "Z10252SaidaRelFluxoNoDocumento", "Z10262SaidaRelFluxoQtde", "Z10250SaidaRelFluxoValor", "Z10251SaidaRelFluxoDtLancmto", "Z10249SaidaRelFluxoNoColuna", "Z10248SaidaRelFluxoCodImpressao", "Z10247SaidaRelFluxoDesImpressao", ["BTN_DELETE2","Enabled"], ["BTN_ENTER2","Enabled"]]);
      return true;
   }
   this.e11ez769_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ez769_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27,28,34,37,39,42,44,47,49,52,54,57,59,62,64,67,69,72,74,77,79,82,84,87,89,92,94,97,99,102,104,107,109,112,114,117,119,122,124,127,129,132,134,137,139,142,144,147,149,152,154,157,159,162,164,167,169,172,174,177,179,182,184,187,189,192,194,197,199,202,204];
   this.GXLastCtrlId =204;
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
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDARELFLUXOUSUARIO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidarelfluxousuario,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOUSUARIO",gxz:"Z10212SaidaRelFluxoUsuario",gxold:"O10212SaidaRelFluxoUsuario",gxvar:"A10212SaidaRelFluxoUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10212SaidaRelFluxoUsuario=Value},v2z:function(Value){gx.O.Z10212SaidaRelFluxoUsuario=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOUSUARIO",gx.O.A10212SaidaRelFluxoUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10212SaidaRelFluxoUsuario=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOUSUARIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCKSAIDARELFLUXOEMP", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidarelfluxoemp,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOEMP",gxz:"Z10213SaidaRelFluxoEmp",gxold:"O10213SaidaRelFluxoEmp",gxvar:"A10213SaidaRelFluxoEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10213SaidaRelFluxoEmp=Value},v2z:function(Value){gx.O.Z10213SaidaRelFluxoEmp=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOEMP",gx.O.A10213SaidaRelFluxoEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10213SaidaRelFluxoEmp=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOEMP")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCKSAIDARELFLUXOSAIDAID", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidarelfluxosaidaid,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOSAIDAID",gxz:"Z10214SaidaRelFluxoSaidaId",gxold:"O10214SaidaRelFluxoSaidaId",gxvar:"A10214SaidaRelFluxoSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10214SaidaRelFluxoSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10214SaidaRelFluxoSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOSAIDAID",gx.O.A10214SaidaRelFluxoSaidaId,0)},c2v:function(){gx.O.A10214SaidaRelFluxoSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDARELFLUXOSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCKSAIDARELFLUXOSEQ", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Saidarelfluxoseq,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOSEQ",gxz:"Z10215SaidaRelFluxoSeq",gxold:"O10215SaidaRelFluxoSeq",gxvar:"A10215SaidaRelFluxoSeq",ucs:[],op:[204,199,194,189,184,179,174,169,164,159,154,149,144,139,134,129,124,119,114,109,104,99,94,89,84,79,74,69,64,59],ip:[204,199,194,189,184,179,174,169,164,159,154,149,144,139,134,129,124,119,114,109,104,99,94,89,84,79,74,69,64,59,54,49,44,39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10215SaidaRelFluxoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10215SaidaRelFluxoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOSEQ",gx.O.A10215SaidaRelFluxoSeq,0)},c2v:function(){gx.O.A10215SaidaRelFluxoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDARELFLUXOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCKSAIDARELFLUXOPRODUTOID", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOPRODUTOID",gxz:"Z10276SaidaRelFluxoProdutoId",gxold:"O10276SaidaRelFluxoProdutoId",gxvar:"A10276SaidaRelFluxoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10276SaidaRelFluxoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10276SaidaRelFluxoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOPRODUTOID",gx.O.A10276SaidaRelFluxoProdutoId,0)},c2v:function(){gx.O.A10276SaidaRelFluxoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDARELFLUXOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCKSAIDARELFLUXOFILIALID", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOFILIALID",gxz:"Z10275SaidaRelFluxoFilialId",gxold:"O10275SaidaRelFluxoFilialId",gxvar:"A10275SaidaRelFluxoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10275SaidaRelFluxoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10275SaidaRelFluxoFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOFILIALID",gx.O.A10275SaidaRelFluxoFilialId,0)},c2v:function(){gx.O.A10275SaidaRelFluxoFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDARELFLUXOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCKSAIDARELFLUXODATA", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXODATA",gxz:"Z10270SaidaRelFluxoData",gxold:"O10270SaidaRelFluxoData",gxvar:"A10270SaidaRelFluxoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10270SaidaRelFluxoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10270SaidaRelFluxoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXODATA",gx.O.A10270SaidaRelFluxoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10270SaidaRelFluxoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SAIDARELFLUXODATA")},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCKSAIDARELFLUXOFAMILIAID", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOFAMILIAID",gxz:"Z10272SaidaRelFluxoFamiliaId",gxold:"O10272SaidaRelFluxoFamiliaId",gxvar:"A10272SaidaRelFluxoFamiliaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10272SaidaRelFluxoFamiliaId=Value},v2z:function(Value){gx.O.Z10272SaidaRelFluxoFamiliaId=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOFAMILIAID",gx.O.A10272SaidaRelFluxoFamiliaId,0)},c2v:function(){gx.O.A10272SaidaRelFluxoFamiliaId=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOFAMILIAID")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCKSAIDARELFLUXOFAMILIADESC", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOFAMILIADESC",gxz:"Z10271SaidaRelFluxoFamiliaDesc",gxold:"O10271SaidaRelFluxoFamiliaDesc",gxvar:"A10271SaidaRelFluxoFamiliaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10271SaidaRelFluxoFamiliaDesc=Value},v2z:function(Value){gx.O.Z10271SaidaRelFluxoFamiliaDesc=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOFAMILIADESC",gx.O.A10271SaidaRelFluxoFamiliaDesc,0)},c2v:function(){gx.O.A10271SaidaRelFluxoFamiliaDesc=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOFAMILIADESC")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"TEXTBLOCKSAIDARELFLUXOCLASSIFICACAO", format:0,grid:0};
   GXValidFnc[84]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOCLASSIFICACAO",gxz:"Z10266SaidaRelFluxoClassificacao",gxold:"O10266SaidaRelFluxoClassificacao",gxvar:"A10266SaidaRelFluxoClassificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10266SaidaRelFluxoClassificacao=Value},v2z:function(Value){gx.O.Z10266SaidaRelFluxoClassificacao=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOCLASSIFICACAO",gx.O.A10266SaidaRelFluxoClassificacao,0)},c2v:function(){gx.O.A10266SaidaRelFluxoClassificacao=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOCLASSIFICACAO")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"TEXTBLOCKSAIDARELFLUXOCLASSIFICACAODESC", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOCLASSIFICACAODESC",gxz:"Z10267SaidaRelFluxoClassificacaoDesc",gxold:"O10267SaidaRelFluxoClassificacaoDesc",gxvar:"A10267SaidaRelFluxoClassificacaoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10267SaidaRelFluxoClassificacaoDesc=Value},v2z:function(Value){gx.O.Z10267SaidaRelFluxoClassificacaoDesc=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOCLASSIFICACAODESC",gx.O.A10267SaidaRelFluxoClassificacaoDesc,0)},c2v:function(){gx.O.A10267SaidaRelFluxoClassificacaoDesc=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOCLASSIFICACAODESC")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCKSAIDARELFLUXOCLASSPRINCIPAL", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOCLASSPRINCIPAL",gxz:"Z10268SaidaRelFluxoClassPrincipal",gxold:"O10268SaidaRelFluxoClassPrincipal",gxvar:"A10268SaidaRelFluxoClassPrincipal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10268SaidaRelFluxoClassPrincipal=Value},v2z:function(Value){gx.O.Z10268SaidaRelFluxoClassPrincipal=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOCLASSPRINCIPAL",gx.O.A10268SaidaRelFluxoClassPrincipal,0)},c2v:function(){gx.O.A10268SaidaRelFluxoClassPrincipal=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOCLASSPRINCIPAL")},nac:gx.falseFn};
   GXValidFnc[97]={fld:"TEXTBLOCKSAIDARELFLUXOCLASSPRINCIPALDESC", format:0,grid:0};
   GXValidFnc[99]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOCLASSPRINCIPALDES",gxz:"Z10269SaidaRelFluxoClassPrincipalDes",gxold:"O10269SaidaRelFluxoClassPrincipalDes",gxvar:"A10269SaidaRelFluxoClassPrincipalDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10269SaidaRelFluxoClassPrincipalDes=Value},v2z:function(Value){gx.O.Z10269SaidaRelFluxoClassPrincipalDes=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOCLASSPRINCIPALDES",gx.O.A10269SaidaRelFluxoClassPrincipalDes,0)},c2v:function(){gx.O.A10269SaidaRelFluxoClassPrincipalDes=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOCLASSPRINCIPALDES")},nac:gx.falseFn};
   GXValidFnc[102]={fld:"TEXTBLOCKSAIDARELFLUXOTIPODISPENDIO", format:0,grid:0};
   GXValidFnc[104]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOTIPODISPENDIO",gxz:"Z10273SaidaRelFluxoTipoDispendio",gxold:"O10273SaidaRelFluxoTipoDispendio",gxvar:"A10273SaidaRelFluxoTipoDispendio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10273SaidaRelFluxoTipoDispendio=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10273SaidaRelFluxoTipoDispendio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOTIPODISPENDIO",gx.O.A10273SaidaRelFluxoTipoDispendio,0)},c2v:function(){gx.O.A10273SaidaRelFluxoTipoDispendio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDARELFLUXOTIPODISPENDIO",'.')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"TEXTBLOCKSAIDARELFLUXOTIPODISPENDIODESC", format:0,grid:0};
   GXValidFnc[109]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOTIPODISPENDIODESC",gxz:"Z10274SaidaRelFluxoTipoDispendioDesc",gxold:"O10274SaidaRelFluxoTipoDispendioDesc",gxvar:"A10274SaidaRelFluxoTipoDispendioDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10274SaidaRelFluxoTipoDispendioDesc=Value},v2z:function(Value){gx.O.Z10274SaidaRelFluxoTipoDispendioDesc=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOTIPODISPENDIODESC",gx.O.A10274SaidaRelFluxoTipoDispendioDesc,0)},c2v:function(){gx.O.A10274SaidaRelFluxoTipoDispendioDesc=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOTIPODISPENDIODESC")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCKSAIDARELFLUXOSUBGRUPO", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOSUBGRUPO",gxz:"Z10263SaidaRelFluxoSubGrupo",gxold:"O10263SaidaRelFluxoSubGrupo",gxvar:"A10263SaidaRelFluxoSubGrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10263SaidaRelFluxoSubGrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10263SaidaRelFluxoSubGrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOSUBGRUPO",gx.O.A10263SaidaRelFluxoSubGrupo,0)},c2v:function(){gx.O.A10263SaidaRelFluxoSubGrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDARELFLUXOSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCKSAIDARELFLUXOSUBGRUPODESC", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOSUBGRUPODESC",gxz:"Z10264SaidaRelFluxoSubGrupoDesc",gxold:"O10264SaidaRelFluxoSubGrupoDesc",gxvar:"A10264SaidaRelFluxoSubGrupoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10264SaidaRelFluxoSubGrupoDesc=Value},v2z:function(Value){gx.O.Z10264SaidaRelFluxoSubGrupoDesc=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOSUBGRUPODESC",gx.O.A10264SaidaRelFluxoSubGrupoDesc,0)},c2v:function(){gx.O.A10264SaidaRelFluxoSubGrupoDesc=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOSUBGRUPODESC")},nac:gx.falseFn};
   GXValidFnc[122]={fld:"TEXTBLOCKSAIDARELFLUXOTPIMPRESSAO", format:0,grid:0};
   GXValidFnc[124]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOTPIMPRESSAO",gxz:"Z10261SaidaRelFluxoTpImpressao",gxold:"O10261SaidaRelFluxoTpImpressao",gxvar:"A10261SaidaRelFluxoTpImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10261SaidaRelFluxoTpImpressao=Value},v2z:function(Value){gx.O.Z10261SaidaRelFluxoTpImpressao=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOTPIMPRESSAO",gx.O.A10261SaidaRelFluxoTpImpressao,0)},c2v:function(){gx.O.A10261SaidaRelFluxoTpImpressao=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOTPIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[127]={fld:"TEXTBLOCKSAIDARELFLUXOSELECAOTIPO", format:0,grid:0};
   GXValidFnc[129]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOSELECAOTIPO",gxz:"Z10259SaidaRelFluxoSelecaoTipo",gxold:"O10259SaidaRelFluxoSelecaoTipo",gxvar:"A10259SaidaRelFluxoSelecaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10259SaidaRelFluxoSelecaoTipo=Value},v2z:function(Value){gx.O.Z10259SaidaRelFluxoSelecaoTipo=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOSELECAOTIPO",gx.O.A10259SaidaRelFluxoSelecaoTipo,0)},c2v:function(){gx.O.A10259SaidaRelFluxoSelecaoTipo=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOSELECAOTIPO")},nac:gx.falseFn};
   GXValidFnc[132]={fld:"TEXTBLOCKSAIDARELFLUXOPRECOID", format:0,grid:0};
   GXValidFnc[134]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOPRECOID",gxz:"Z10258SaidaRelFluxoPrecoId",gxold:"O10258SaidaRelFluxoPrecoId",gxvar:"A10258SaidaRelFluxoPrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10258SaidaRelFluxoPrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10258SaidaRelFluxoPrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOPRECOID",gx.O.A10258SaidaRelFluxoPrecoId,0)},c2v:function(){gx.O.A10258SaidaRelFluxoPrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDARELFLUXOPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[137]={fld:"TEXTBLOCKSAIDARELFLUXOSNESTORNO", format:0,grid:0};
   GXValidFnc[139]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOSNESTORNO",gxz:"Z10260SaidaRelFluxoSnEstorno",gxold:"O10260SaidaRelFluxoSnEstorno",gxvar:"A10260SaidaRelFluxoSnEstorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10260SaidaRelFluxoSnEstorno=Value},v2z:function(Value){gx.O.Z10260SaidaRelFluxoSnEstorno=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOSNESTORNO",gx.O.A10260SaidaRelFluxoSnEstorno,0)},c2v:function(){gx.O.A10260SaidaRelFluxoSnEstorno=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOSNESTORNO")},nac:gx.falseFn};
   GXValidFnc[142]={fld:"TEXTBLOCKSAIDARELFLUXOENTRADASAIDA", format:0,grid:0};
   GXValidFnc[144]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOENTRADASAIDA",gxz:"Z10257SaidaRelFluxoEntradaSaida",gxold:"O10257SaidaRelFluxoEntradaSaida",gxvar:"A10257SaidaRelFluxoEntradaSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10257SaidaRelFluxoEntradaSaida=Value},v2z:function(Value){gx.O.Z10257SaidaRelFluxoEntradaSaida=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOENTRADASAIDA",gx.O.A10257SaidaRelFluxoEntradaSaida,0)},c2v:function(){gx.O.A10257SaidaRelFluxoEntradaSaida=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOENTRADASAIDA")},nac:gx.falseFn};
   GXValidFnc[147]={fld:"TEXTBLOCKSAIDARELFLUXOCLASSFLUXOID", format:0,grid:0};
   GXValidFnc[149]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOCLASSFLUXOID",gxz:"Z10256SaidaRelFluxoClassFluxoId",gxold:"O10256SaidaRelFluxoClassFluxoId",gxvar:"A10256SaidaRelFluxoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10256SaidaRelFluxoClassFluxoId=Value},v2z:function(Value){gx.O.Z10256SaidaRelFluxoClassFluxoId=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOCLASSFLUXOID",gx.O.A10256SaidaRelFluxoClassFluxoId,0)},c2v:function(){gx.O.A10256SaidaRelFluxoClassFluxoId=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOCLASSFLUXOID")},nac:gx.falseFn};
   GXValidFnc[152]={fld:"TEXTBLOCKSAIDARELFLUXOCLASSFLUXODESC", format:0,grid:0};
   GXValidFnc[154]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOCLASSFLUXODESC",gxz:"Z10255SaidaRelFluxoClassFluxoDesc",gxold:"O10255SaidaRelFluxoClassFluxoDesc",gxvar:"A10255SaidaRelFluxoClassFluxoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10255SaidaRelFluxoClassFluxoDesc=Value},v2z:function(Value){gx.O.Z10255SaidaRelFluxoClassFluxoDesc=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOCLASSFLUXODESC",gx.O.A10255SaidaRelFluxoClassFluxoDesc,0)},c2v:function(){gx.O.A10255SaidaRelFluxoClassFluxoDesc=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOCLASSFLUXODESC")},nac:gx.falseFn};
   GXValidFnc[157]={fld:"TEXTBLOCKSAIDARELFLUXOTPFLUXO", format:0,grid:0};
   GXValidFnc[159]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOTPFLUXO",gxz:"Z10254SaidaRelFluxoTpFluxo",gxold:"O10254SaidaRelFluxoTpFluxo",gxvar:"A10254SaidaRelFluxoTpFluxo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10254SaidaRelFluxoTpFluxo=Value},v2z:function(Value){gx.O.Z10254SaidaRelFluxoTpFluxo=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOTPFLUXO",gx.O.A10254SaidaRelFluxoTpFluxo,0)},c2v:function(){gx.O.A10254SaidaRelFluxoTpFluxo=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOTPFLUXO")},nac:gx.falseFn};
   GXValidFnc[162]={fld:"TEXTBLOCKSAIDARELFLUXOFILIALNOTA", format:0,grid:0};
   GXValidFnc[164]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOFILIALNOTA",gxz:"Z10246SaidaRelFluxoFilialNota",gxold:"O10246SaidaRelFluxoFilialNota",gxvar:"A10246SaidaRelFluxoFilialNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10246SaidaRelFluxoFilialNota=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10246SaidaRelFluxoFilialNota=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOFILIALNOTA",gx.O.A10246SaidaRelFluxoFilialNota,0)},c2v:function(){gx.O.A10246SaidaRelFluxoFilialNota=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDARELFLUXOFILIALNOTA",'.')},nac:gx.falseFn};
   GXValidFnc[167]={fld:"TEXTBLOCKSAIDARELFLUXOSERIE", format:0,grid:0};
   GXValidFnc[169]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOSERIE",gxz:"Z10253SaidaRelFluxoSerie",gxold:"O10253SaidaRelFluxoSerie",gxvar:"A10253SaidaRelFluxoSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10253SaidaRelFluxoSerie=Value},v2z:function(Value){gx.O.Z10253SaidaRelFluxoSerie=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOSERIE",gx.O.A10253SaidaRelFluxoSerie,0)},c2v:function(){gx.O.A10253SaidaRelFluxoSerie=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOSERIE")},nac:gx.falseFn};
   GXValidFnc[172]={fld:"TEXTBLOCKSAIDARELFLUXONODOCUMENTO", format:0,grid:0};
   GXValidFnc[174]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXONODOCUMENTO",gxz:"Z10252SaidaRelFluxoNoDocumento",gxold:"O10252SaidaRelFluxoNoDocumento",gxvar:"A10252SaidaRelFluxoNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10252SaidaRelFluxoNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10252SaidaRelFluxoNoDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXONODOCUMENTO",gx.O.A10252SaidaRelFluxoNoDocumento,0)},c2v:function(){gx.O.A10252SaidaRelFluxoNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDARELFLUXONODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[177]={fld:"TEXTBLOCKSAIDARELFLUXOQTDE", format:0,grid:0};
   GXValidFnc[179]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOQTDE",gxz:"Z10262SaidaRelFluxoQtde",gxold:"O10262SaidaRelFluxoQtde",gxvar:"A10262SaidaRelFluxoQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10262SaidaRelFluxoQtde=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10262SaidaRelFluxoQtde=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDARELFLUXOQTDE",gx.O.A10262SaidaRelFluxoQtde,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10262SaidaRelFluxoQtde=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDARELFLUXOQTDE",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 179 , function() {
   });
   GXValidFnc[182]={fld:"TEXTBLOCKSAIDARELFLUXOVALOR", format:0,grid:0};
   GXValidFnc[184]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOVALOR",gxz:"Z10250SaidaRelFluxoValor",gxold:"O10250SaidaRelFluxoValor",gxvar:"A10250SaidaRelFluxoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10250SaidaRelFluxoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10250SaidaRelFluxoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("SAIDARELFLUXOVALOR",gx.O.A10250SaidaRelFluxoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10250SaidaRelFluxoValor=this.val()},val:function(){return gx.fn.getDecimalValue("SAIDARELFLUXOVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 184 , function() {
   });
   GXValidFnc[187]={fld:"TEXTBLOCKSAIDARELFLUXODTLANCMTO", format:0,grid:0};
   GXValidFnc[189]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXODTLANCMTO",gxz:"Z10251SaidaRelFluxoDtLancmto",gxold:"O10251SaidaRelFluxoDtLancmto",gxvar:"A10251SaidaRelFluxoDtLancmto",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10251SaidaRelFluxoDtLancmto=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10251SaidaRelFluxoDtLancmto=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXODTLANCMTO",gx.O.A10251SaidaRelFluxoDtLancmto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10251SaidaRelFluxoDtLancmto=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("SAIDARELFLUXODTLANCMTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 189 , function() {
   });
   GXValidFnc[192]={fld:"TEXTBLOCKSAIDARELFLUXONOCOLUNA", format:0,grid:0};
   GXValidFnc[194]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXONOCOLUNA",gxz:"Z10249SaidaRelFluxoNoColuna",gxold:"O10249SaidaRelFluxoNoColuna",gxvar:"A10249SaidaRelFluxoNoColuna",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10249SaidaRelFluxoNoColuna=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10249SaidaRelFluxoNoColuna=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXONOCOLUNA",gx.O.A10249SaidaRelFluxoNoColuna,0)},c2v:function(){gx.O.A10249SaidaRelFluxoNoColuna=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SAIDARELFLUXONOCOLUNA",'.')},nac:gx.falseFn};
   GXValidFnc[197]={fld:"TEXTBLOCKSAIDARELFLUXOCODIMPRESSAO", format:0,grid:0};
   GXValidFnc[199]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXOCODIMPRESSAO",gxz:"Z10248SaidaRelFluxoCodImpressao",gxold:"O10248SaidaRelFluxoCodImpressao",gxvar:"A10248SaidaRelFluxoCodImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10248SaidaRelFluxoCodImpressao=Value},v2z:function(Value){gx.O.Z10248SaidaRelFluxoCodImpressao=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXOCODIMPRESSAO",gx.O.A10248SaidaRelFluxoCodImpressao,0)},c2v:function(){gx.O.A10248SaidaRelFluxoCodImpressao=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXOCODIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[202]={fld:"TEXTBLOCKSAIDARELFLUXODESIMPRESSAO", format:0,grid:0};
   GXValidFnc[204]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SAIDARELFLUXODESIMPRESSAO",gxz:"Z10247SaidaRelFluxoDesImpressao",gxold:"O10247SaidaRelFluxoDesImpressao",gxvar:"A10247SaidaRelFluxoDesImpressao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10247SaidaRelFluxoDesImpressao=Value},v2z:function(Value){gx.O.Z10247SaidaRelFluxoDesImpressao=Value},v2c:function(){gx.fn.setControlValue("SAIDARELFLUXODESIMPRESSAO",gx.O.A10247SaidaRelFluxoDesImpressao,0)},c2v:function(){gx.O.A10247SaidaRelFluxoDesImpressao=this.val()},val:function(){return gx.fn.getControlValue("SAIDARELFLUXODESIMPRESSAO")},nac:gx.falseFn};
   this.A10212SaidaRelFluxoUsuario = "" ;
   this.Z10212SaidaRelFluxoUsuario = "" ;
   this.O10212SaidaRelFluxoUsuario = "" ;
   this.A10213SaidaRelFluxoEmp = "" ;
   this.Z10213SaidaRelFluxoEmp = "" ;
   this.O10213SaidaRelFluxoEmp = "" ;
   this.A10214SaidaRelFluxoSaidaId = 0 ;
   this.Z10214SaidaRelFluxoSaidaId = 0 ;
   this.O10214SaidaRelFluxoSaidaId = 0 ;
   this.A10215SaidaRelFluxoSeq = 0 ;
   this.Z10215SaidaRelFluxoSeq = 0 ;
   this.O10215SaidaRelFluxoSeq = 0 ;
   this.A10276SaidaRelFluxoProdutoId = 0 ;
   this.Z10276SaidaRelFluxoProdutoId = 0 ;
   this.O10276SaidaRelFluxoProdutoId = 0 ;
   this.A10275SaidaRelFluxoFilialId = 0 ;
   this.Z10275SaidaRelFluxoFilialId = 0 ;
   this.O10275SaidaRelFluxoFilialId = 0 ;
   this.A10270SaidaRelFluxoData = gx.date.nullDate() ;
   this.Z10270SaidaRelFluxoData = gx.date.nullDate() ;
   this.O10270SaidaRelFluxoData = gx.date.nullDate() ;
   this.A10272SaidaRelFluxoFamiliaId = "" ;
   this.Z10272SaidaRelFluxoFamiliaId = "" ;
   this.O10272SaidaRelFluxoFamiliaId = "" ;
   this.A10271SaidaRelFluxoFamiliaDesc = "" ;
   this.Z10271SaidaRelFluxoFamiliaDesc = "" ;
   this.O10271SaidaRelFluxoFamiliaDesc = "" ;
   this.A10266SaidaRelFluxoClassificacao = "" ;
   this.Z10266SaidaRelFluxoClassificacao = "" ;
   this.O10266SaidaRelFluxoClassificacao = "" ;
   this.A10267SaidaRelFluxoClassificacaoDesc = "" ;
   this.Z10267SaidaRelFluxoClassificacaoDesc = "" ;
   this.O10267SaidaRelFluxoClassificacaoDesc = "" ;
   this.A10268SaidaRelFluxoClassPrincipal = "" ;
   this.Z10268SaidaRelFluxoClassPrincipal = "" ;
   this.O10268SaidaRelFluxoClassPrincipal = "" ;
   this.A10269SaidaRelFluxoClassPrincipalDes = "" ;
   this.Z10269SaidaRelFluxoClassPrincipalDes = "" ;
   this.O10269SaidaRelFluxoClassPrincipalDes = "" ;
   this.A10273SaidaRelFluxoTipoDispendio = 0 ;
   this.Z10273SaidaRelFluxoTipoDispendio = 0 ;
   this.O10273SaidaRelFluxoTipoDispendio = 0 ;
   this.A10274SaidaRelFluxoTipoDispendioDesc = "" ;
   this.Z10274SaidaRelFluxoTipoDispendioDesc = "" ;
   this.O10274SaidaRelFluxoTipoDispendioDesc = "" ;
   this.A10263SaidaRelFluxoSubGrupo = 0 ;
   this.Z10263SaidaRelFluxoSubGrupo = 0 ;
   this.O10263SaidaRelFluxoSubGrupo = 0 ;
   this.A10264SaidaRelFluxoSubGrupoDesc = "" ;
   this.Z10264SaidaRelFluxoSubGrupoDesc = "" ;
   this.O10264SaidaRelFluxoSubGrupoDesc = "" ;
   this.A10261SaidaRelFluxoTpImpressao = "" ;
   this.Z10261SaidaRelFluxoTpImpressao = "" ;
   this.O10261SaidaRelFluxoTpImpressao = "" ;
   this.A10259SaidaRelFluxoSelecaoTipo = "" ;
   this.Z10259SaidaRelFluxoSelecaoTipo = "" ;
   this.O10259SaidaRelFluxoSelecaoTipo = "" ;
   this.A10258SaidaRelFluxoPrecoId = 0 ;
   this.Z10258SaidaRelFluxoPrecoId = 0 ;
   this.O10258SaidaRelFluxoPrecoId = 0 ;
   this.A10260SaidaRelFluxoSnEstorno = "" ;
   this.Z10260SaidaRelFluxoSnEstorno = "" ;
   this.O10260SaidaRelFluxoSnEstorno = "" ;
   this.A10257SaidaRelFluxoEntradaSaida = "" ;
   this.Z10257SaidaRelFluxoEntradaSaida = "" ;
   this.O10257SaidaRelFluxoEntradaSaida = "" ;
   this.A10256SaidaRelFluxoClassFluxoId = "" ;
   this.Z10256SaidaRelFluxoClassFluxoId = "" ;
   this.O10256SaidaRelFluxoClassFluxoId = "" ;
   this.A10255SaidaRelFluxoClassFluxoDesc = "" ;
   this.Z10255SaidaRelFluxoClassFluxoDesc = "" ;
   this.O10255SaidaRelFluxoClassFluxoDesc = "" ;
   this.A10254SaidaRelFluxoTpFluxo = "" ;
   this.Z10254SaidaRelFluxoTpFluxo = "" ;
   this.O10254SaidaRelFluxoTpFluxo = "" ;
   this.A10246SaidaRelFluxoFilialNota = 0 ;
   this.Z10246SaidaRelFluxoFilialNota = 0 ;
   this.O10246SaidaRelFluxoFilialNota = 0 ;
   this.A10253SaidaRelFluxoSerie = "" ;
   this.Z10253SaidaRelFluxoSerie = "" ;
   this.O10253SaidaRelFluxoSerie = "" ;
   this.A10252SaidaRelFluxoNoDocumento = 0 ;
   this.Z10252SaidaRelFluxoNoDocumento = 0 ;
   this.O10252SaidaRelFluxoNoDocumento = 0 ;
   this.A10262SaidaRelFluxoQtde = 0 ;
   this.Z10262SaidaRelFluxoQtde = 0 ;
   this.O10262SaidaRelFluxoQtde = 0 ;
   this.A10250SaidaRelFluxoValor = 0 ;
   this.Z10250SaidaRelFluxoValor = 0 ;
   this.O10250SaidaRelFluxoValor = 0 ;
   this.A10251SaidaRelFluxoDtLancmto = gx.date.nullDate() ;
   this.Z10251SaidaRelFluxoDtLancmto = gx.date.nullDate() ;
   this.O10251SaidaRelFluxoDtLancmto = gx.date.nullDate() ;
   this.A10249SaidaRelFluxoNoColuna = 0 ;
   this.Z10249SaidaRelFluxoNoColuna = 0 ;
   this.O10249SaidaRelFluxoNoColuna = 0 ;
   this.A10248SaidaRelFluxoCodImpressao = "" ;
   this.Z10248SaidaRelFluxoCodImpressao = "" ;
   this.O10248SaidaRelFluxoCodImpressao = "" ;
   this.A10247SaidaRelFluxoDesImpressao = "" ;
   this.Z10247SaidaRelFluxoDesImpressao = "" ;
   this.O10247SaidaRelFluxoDesImpressao = "" ;
   this.A10212SaidaRelFluxoUsuario = "" ;
   this.A10213SaidaRelFluxoEmp = "" ;
   this.A10214SaidaRelFluxoSaidaId = 0 ;
   this.A10215SaidaRelFluxoSeq = 0 ;
   this.A10276SaidaRelFluxoProdutoId = 0 ;
   this.A10275SaidaRelFluxoFilialId = 0 ;
   this.A10270SaidaRelFluxoData = gx.date.nullDate() ;
   this.A10272SaidaRelFluxoFamiliaId = "" ;
   this.A10271SaidaRelFluxoFamiliaDesc = "" ;
   this.A10266SaidaRelFluxoClassificacao = "" ;
   this.A10267SaidaRelFluxoClassificacaoDesc = "" ;
   this.A10268SaidaRelFluxoClassPrincipal = "" ;
   this.A10269SaidaRelFluxoClassPrincipalDes = "" ;
   this.A10273SaidaRelFluxoTipoDispendio = 0 ;
   this.A10274SaidaRelFluxoTipoDispendioDesc = "" ;
   this.A10263SaidaRelFluxoSubGrupo = 0 ;
   this.A10264SaidaRelFluxoSubGrupoDesc = "" ;
   this.A10261SaidaRelFluxoTpImpressao = "" ;
   this.A10259SaidaRelFluxoSelecaoTipo = "" ;
   this.A10258SaidaRelFluxoPrecoId = 0 ;
   this.A10260SaidaRelFluxoSnEstorno = "" ;
   this.A10257SaidaRelFluxoEntradaSaida = "" ;
   this.A10256SaidaRelFluxoClassFluxoId = "" ;
   this.A10255SaidaRelFluxoClassFluxoDesc = "" ;
   this.A10254SaidaRelFluxoTpFluxo = "" ;
   this.A10246SaidaRelFluxoFilialNota = 0 ;
   this.A10253SaidaRelFluxoSerie = "" ;
   this.A10252SaidaRelFluxoNoDocumento = 0 ;
   this.A10262SaidaRelFluxoQtde = 0 ;
   this.A10250SaidaRelFluxoValor = 0 ;
   this.A10251SaidaRelFluxoDtLancmto = gx.date.nullDate() ;
   this.A10249SaidaRelFluxoNoColuna = 0 ;
   this.A10248SaidaRelFluxoCodImpressao = "" ;
   this.A10247SaidaRelFluxoDesImpressao = "" ;
   this.Events = {"e11ez769_client": ["ENTER", true] ,"e12ez769_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EnterCtrl = ["BTN_ENTER2" ,"BTN_ENTER2_SEPARATOR" ,"BTN_ENTER"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tsaidarelfluxo());

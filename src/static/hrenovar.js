/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:54:45.62
*/
gx.evt.autoSkip = false;
gx.define('hrenovar', false, function () {
   this.ServerClass =  "hrenovar" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV32SnRenovar=gx.fn.getControlValue("vSNRENOVAR") ;
   };
   this.Validv_Movimentacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vMOVIMENTACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      if ( new gx.date.gxdate( this.AV25MovimentacaoPrevisaoDevolucao ).compare( this.Gx_date ) < 0 )
      {
         if ( this.AV32SnRenovar == "N" )
         {
            this.addMessage("Situação da Reserva Vencida");
         }
         else
         {
            this.addMessage("Situação Empréstimo Atrasado");
         }
         gx.fn.setCtrlProperty("vMOVIMENTACAOPREVISAODEVOLUCAO","Enabled", 0 );
         gx.fn.setCtrlProperty("vMOVIMENTACAOTIPO","Enabled", 0 );
         gx.fn.setCtrlProperty("TABLEDETALHES","Visible", 0 );
         gx.fn.setCtrlProperty("BTCONFIRMAR","Enabled", 0 );
         gx.fn.setCtrlProperty("BTCONFIRMAR","Visible", 0 );
         this.AV39snEfetuarMovimentacao =  "N"  ;
      }
   };
   this.e143x2_client=function()
   {
      this.executeServerEvent("'AVANCAR'", false, null, false, false);
   };
   this.e113x2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e163x2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e173x2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,13,15,18,20,22,25,27,30,32,35,37,39,42,44,47,49,52,54,60,61,62,63,64,65];
   this.GXLastCtrlId =65;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE7",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[15]={fld:"TABLE3",grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACERVOID",gxz:"ZV22Acervoid",gxold:"OV22Acervoid",gxvar:"AV22Acervoid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22Acervoid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22Acervoid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACERVOID",gx.O.AV22Acervoid,0)},c2v:function(){gx.O.AV22Acervoid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACERVOID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACERVOTITULO",gxz:"ZV23AcervoTitulo",gxold:"OV23AcervoTitulo",gxvar:"AV23AcervoTitulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23AcervoTitulo=Value},v2z:function(Value){gx.O.ZV23AcervoTitulo=Value},v2c:function(){gx.fn.setControlValue("vACERVOTITULO",gx.O.AV23AcervoTitulo,0)},c2v:function(){gx.O.AV23AcervoTitulo=this.val()},val:function(){return gx.fn.getControlValue("vACERVOTITULO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVIMENTACAODATAEMPRESTIMO",gxz:"ZV24MovimentacaoDataEmprestimo",gxold:"OV24MovimentacaoDataEmprestimo",gxvar:"AV24MovimentacaoDataEmprestimo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAODATAEMPRESTIMO",gx.O.AV24MovimentacaoDataEmprestimo,0)},c2v:function(){gx.O.AV24MovimentacaoDataEmprestimo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMOVIMENTACAODATAEMPRESTIMO")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVIMENTACAOPREVISAODEVOLUCAO",gxz:"ZV25MovimentacaoPrevisaoDevolucao",gxold:"OV25MovimentacaoPrevisaoDevolucao",gxvar:"AV25MovimentacaoPrevisaoDevolucao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAOPREVISAODEVOLUCAO",gx.O.AV25MovimentacaoPrevisaoDevolucao,0)},c2v:function(){gx.O.AV25MovimentacaoPrevisaoDevolucao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vMOVIMENTACAOPREVISAODEVOLUCAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVIMENTACAOTIPO",gxz:"ZV26MovimentacaoTipo",gxold:"OV26MovimentacaoTipo",gxvar:"AV26MovimentacaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",v2v:function(Value){gx.O.AV26MovimentacaoTipo=Value},v2z:function(Value){gx.O.ZV26MovimentacaoTipo=Value},v2c:function(){gx.fn.setRadioValue("vMOVIMENTACAOTIPO",gx.O.AV26MovimentacaoTipo)},c2v:function(){gx.O.AV26MovimentacaoTipo=this.val()},val:function(){return gx.fn.getControlValue("vMOVIMENTACAOTIPO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLEDETALHES",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATADISPONIVEL",gxz:"ZV29DataDisponivel",gxold:"OV29DataDisponivel",gxvar:"AV29DataDisponivel",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DataDisponivel=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29DataDisponivel=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATADISPONIVEL",gx.O.AV29DataDisponivel,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29DataDisponivel=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATADISPONIVEL")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDERESERVA",gxz:"ZV30QtdeReserva",gxold:"OV30QtdeReserva",gxvar:"AV30QtdeReserva",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30QtdeReserva=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30QtdeReserva=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDERESERVA",gx.O.AV30QtdeReserva,0)},c2v:function(){gx.O.AV30QtdeReserva=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDERESERVA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSALDO",gxz:"ZV31Saldo",gxold:"OV31Saldo",gxvar:"AV31Saldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Saldo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31Saldo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSALDO",gx.O.AV31Saldo,0)},c2v:function(){gx.O.AV31Saldo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSALDO",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAVANCAR",gxz:"ZV42SnAvancar",gxold:"OV42SnAvancar",gxvar:"AV42SnAvancar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42SnAvancar=Value},v2z:function(Value){gx.O.ZV42SnAvancar=Value},v2c:function(){gx.fn.setControlValue("vSNAVANCAR",gx.O.AV42SnAvancar,0)},c2v:function(){gx.O.AV42SnAvancar=this.val()},val:function(){return gx.fn.getControlValue("vSNAVANCAR")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAPREVANT",gxz:"ZV40DataPrevAnt",gxold:"OV40DataPrevAnt",gxvar:"AV40DataPrevAnt",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40DataPrevAnt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV40DataPrevAnt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAPREVANT",gx.O.AV40DataPrevAnt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV40DataPrevAnt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAPREVANT")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[62]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV21PessoaId",gxold:"OV21PessoaId",gxvar:"AV21PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV21PessoaId,0)},c2v:function(){gx.O.AV21PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Movimentacaoid,isvalid:null,rgrid:[],fld:"vMOVIMENTACAOID",gxz:"ZV44MovimentacaoId",gxold:"OV44MovimentacaoId",gxvar:"AV44MovimentacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44MovimentacaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44MovimentacaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAOID",gx.O.AV44MovimentacaoId,0)},c2v:function(){gx.O.AV44MovimentacaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVIMENTACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOVIMENTACAONUMORDEM",gxz:"ZV35MovimentacaoNumOrdem",gxold:"OV35MovimentacaoNumOrdem",gxvar:"AV35MovimentacaoNumOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35MovimentacaoNumOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35MovimentacaoNumOrdem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMOVIMENTACAONUMORDEM",gx.O.AV35MovimentacaoNumOrdem,0)},c2v:function(){gx.O.AV35MovimentacaoNumOrdem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMOVIMENTACAONUMORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[65]={fld:"JS", format:2,grid:0};
   this.AV22Acervoid = 0 ;
   this.ZV22Acervoid = 0 ;
   this.OV22Acervoid = 0 ;
   this.AV23AcervoTitulo = "" ;
   this.ZV23AcervoTitulo = "" ;
   this.OV23AcervoTitulo = "" ;
   this.AV24MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.ZV24MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.OV24MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.AV25MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.ZV25MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.OV25MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.AV26MovimentacaoTipo = "" ;
   this.ZV26MovimentacaoTipo = "" ;
   this.OV26MovimentacaoTipo = "" ;
   this.AV29DataDisponivel = gx.date.nullDate() ;
   this.ZV29DataDisponivel = gx.date.nullDate() ;
   this.OV29DataDisponivel = gx.date.nullDate() ;
   this.AV30QtdeReserva = 0 ;
   this.ZV30QtdeReserva = 0 ;
   this.OV30QtdeReserva = 0 ;
   this.AV31Saldo = 0 ;
   this.ZV31Saldo = 0 ;
   this.OV31Saldo = 0 ;
   this.AV42SnAvancar = "" ;
   this.ZV42SnAvancar = "" ;
   this.OV42SnAvancar = "" ;
   this.AV40DataPrevAnt = gx.date.nullDate() ;
   this.ZV40DataPrevAnt = gx.date.nullDate() ;
   this.OV40DataPrevAnt = gx.date.nullDate() ;
   this.AV21PessoaId = 0 ;
   this.ZV21PessoaId = 0 ;
   this.OV21PessoaId = 0 ;
   this.AV44MovimentacaoId = 0 ;
   this.ZV44MovimentacaoId = 0 ;
   this.OV44MovimentacaoId = 0 ;
   this.AV35MovimentacaoNumOrdem = 0 ;
   this.ZV35MovimentacaoNumOrdem = 0 ;
   this.OV35MovimentacaoNumOrdem = 0 ;
   this.AV22Acervoid = 0 ;
   this.AV23AcervoTitulo = "" ;
   this.AV24MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.AV25MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.AV26MovimentacaoTipo = "" ;
   this.AV29DataDisponivel = gx.date.nullDate() ;
   this.AV30QtdeReserva = 0 ;
   this.AV31Saldo = 0 ;
   this.AV42SnAvancar = "" ;
   this.AV40DataPrevAnt = gx.date.nullDate() ;
   this.AV21PessoaId = 0 ;
   this.AV44MovimentacaoId = 0 ;
   this.AV35MovimentacaoNumOrdem = 0 ;
   this.AV32SnRenovar = "" ;
   this.A39AcervoId = 0 ;
   this.A69PessoaId = 0 ;
   this.A621MovimentacaoEmpresaId = "" ;
   this.A104MovimentacaoId = 0 ;
   this.A40AcervoTitulo = "" ;
   this.A107MovimentacaoDataDevolucao = gx.date.nullDate() ;
   this.A105MovimentacaoDataEmprestimo = gx.date.nullDate() ;
   this.A389MovimentacaoNumOrdem = 0 ;
   this.A106MovimentacaoPrevisaoDevolucao = gx.date.nullDate() ;
   this.A108MovimentacaoTipo = "" ;
   this.A554TipoItemQtdeDiasDevolucao = 0 ;
   this.A3082AcervoEmpresaId = "" ;
   this.A3080TipoItemEmpresaId = "" ;
   this.A120TipoItemId = 0 ;
   this.AV39snEfetuarMovimentacao = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.Events = {"e143x2_client": ["'AVANCAR'", true] ,"e113x2_client": ["'FECHAR'", true] ,"e163x2_client": ["ENTER", true] ,"e173x2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV25MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{av:'AV42SnAvancar',fld:'vSNAVANCAR'},{av:'AV39snEfetuarMovimentacao',fld:'vSNEFETUARMOVIMENTACAO'},{av:'AV22Acervoid',fld:'vACERVOID'},{av:'A3082AcervoEmpresaId',fld:'ACERVOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A39AcervoId',fld:'ACERVOID'},{av:'A120TipoItemId',fld:'TIPOITEMID'},{av:'A3080TipoItemEmpresaId',fld:'TIPOITEMEMPRESAID'},{av:'AV46TipoItemEmpresaId',fld:'vTIPOITEMEMPRESAID'},{av:'A554TipoItemQtdeDiasDevolucao',fld:'TIPOITEMQTDEDIASDEVOLUCAO'},{av:'AV24MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'Gx_date',fld:'vTODAY'},{av:'AV32SnRenovar',fld:'vSNRENOVAR',hsh:true},{av:'AV44MovimentacaoId',fld:'vMOVIMENTACAOID',hsh:true},{av:'AV21PessoaId',fld:'vPESSOAID'},{av:'AV43DataDevolucaoAux',fld:'vDATADEVOLUCAOAUX'},{av:'AV38DataPrevisao',fld:'vDATAPREVISAO'},{av:'AV37date',fld:'vDATE'},{av:'AV41flag',fld:'vFLAG'},{av:'AV33MovimentacaoId2',fld:'vMOVIMENTACAOID2'},{av:'AV30QtdeReserva',fld:'vQTDERESERVA'},{av:'AV31Saldo',fld:'vSALDO'}],[{av:'AV41flag',fld:'vFLAG'},{av:'AV40DataPrevAnt',fld:'vDATAPREVANT'},{av:'AV47AcervoidAux',fld:'vACERVOIDAUX'},{av:'AV48TipoItemId',fld:'vTIPOITEMID'},{av:'AV49TipoItemQtdeDiasDevolucao',fld:'vTIPOITEMQTDEDIASDEVOLUCAO'},{av:'AV24MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'gx.fn.getCtrlProperty("vMOVIMENTACAOPREVISAODEVOLUCAO","Enabled")',ctrl:'vMOVIMENTACAOPREVISAODEVOLUCAO',prop:'Enabled'},{av:'AV25MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{ctrl:'vMOVIMENTACAOTIPO'},{av:'gx.fn.getCtrlProperty("TABLEDETALHES","Visible")',ctrl:'TABLEDETALHES',prop:'Visible'},{ctrl:'BTCONFIRMAR',prop:'Enabled'},{ctrl:'BTCONFIRMAR',prop:'Visible'},{av:'AV39snEfetuarMovimentacao',fld:'vSNEFETUARMOVIMENTACAO'},{av:'AV33MovimentacaoId2',fld:'vMOVIMENTACAOID2'},{av:'AV37date',fld:'vDATE'},{av:'AV38DataPrevisao',fld:'vDATAPREVISAO'},{av:'AV44MovimentacaoId',fld:'vMOVIMENTACAOID',hsh:true},{av:'AV43DataDevolucaoAux',fld:'vDATADEVOLUCAOAUX'},{av:'AV29DataDisponivel',fld:'vDATADISPONIVEL'},{av:'AV30QtdeReserva',fld:'vQTDERESERVA'},{av:'AV31Saldo',fld:'vSALDO'},{av:'AV42SnAvancar',fld:'vSNAVANCAR'}]];
   this.EvtParms["'AVANCAR'"] = [[{av:'AV25MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{av:'AV24MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'AV49TipoItemQtdeDiasDevolucao',fld:'vTIPOITEMQTDEDIASDEVOLUCAO'},{av:'AV40DataPrevAnt',fld:'vDATAPREVANT'},{av:'AV32SnRenovar',fld:'vSNRENOVAR',hsh:true},{av:'AV42SnAvancar',fld:'vSNAVANCAR'},{av:'AV41flag',fld:'vFLAG'},{av:'AV33MovimentacaoId2',fld:'vMOVIMENTACAOID2'},{av:'A39AcervoId',fld:'ACERVOID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV44MovimentacaoId',fld:'vMOVIMENTACAOID',hsh:true},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV35MovimentacaoNumOrdem',fld:'vMOVIMENTACAONUMORDEM'},{av:'AV36MovimentacaoDataDevolucao',fld:'vMOVIMENTACAODATADEVOLUCAO'},{av:'AV26MovimentacaoTipo',fld:'vMOVIMENTACAOTIPO'},{av:'AV31Saldo',fld:'vSALDO'},{av:'AV38DataPrevisao',fld:'vDATAPREVISAO'},{av:'AV39snEfetuarMovimentacao',fld:'vSNEFETUARMOVIMENTACAO'},{av:'AV22Acervoid',fld:'vACERVOID'},{av:'AV21PessoaId',fld:'vPESSOAID'},{av:'AV43DataDevolucaoAux',fld:'vDATADEVOLUCAOAUX'},{av:'AV37date',fld:'vDATE'},{av:'AV30QtdeReserva',fld:'vQTDERESERVA'}],[{av:'AV25MovimentacaoPrevisaoDevolucao',fld:'vMOVIMENTACAOPREVISAODEVOLUCAO'},{av:'AV42SnAvancar',fld:'vSNAVANCAR'},{av:'AV41flag',fld:'vFLAG'},{av:'AV40DataPrevAnt',fld:'vDATAPREVANT'},{ctrl:'BTCONFIRMAR',prop:'Enabled'},{av:'AV22Acervoid',fld:'vACERVOID'},{av:'AV21PessoaId',fld:'vPESSOAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV44MovimentacaoId',fld:'vMOVIMENTACAOID',hsh:true},{av:'AV35MovimentacaoNumOrdem',fld:'vMOVIMENTACAONUMORDEM'},{av:'AV26MovimentacaoTipo',fld:'vMOVIMENTACAOTIPO'},{av:'AV36MovimentacaoDataDevolucao',fld:'vMOVIMENTACAODATADEVOLUCAO'},{av:'AV24MovimentacaoDataEmprestimo',fld:'vMOVIMENTACAODATAEMPRESTIMO'},{av:'gx.fn.getCtrlProperty("vDATADISPONIVEL","Visible")',ctrl:'vDATADISPONIVEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vQTDERESERVA","Visible")',ctrl:'vQTDERESERVA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vSALDO","Visible")',ctrl:'vSALDO',prop:'Visible'},{ctrl:'vMOVIMENTACAOTIPO'},{av:'AV33MovimentacaoId2',fld:'vMOVIMENTACAOID2'},{av:'AV37date',fld:'vDATE'},{av:'AV38DataPrevisao',fld:'vDATAPREVISAO'},{av:'AV43DataDevolucaoAux',fld:'vDATADEVOLUCAOAUX'},{av:'AV29DataDisponivel',fld:'vDATADISPONIVEL'},{av:'AV30QtdeReserva',fld:'vQTDERESERVA'},{av:'AV31Saldo',fld:'vSALDO'},{ctrl:'BTCONFIRMAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vMOVIMENTACAOPREVISAODEVOLUCAO","Enabled")',ctrl:'vMOVIMENTACAOPREVISAODEVOLUCAO',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setVCMap("AV32SnRenovar", "vSNRENOVAR", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrenovar());

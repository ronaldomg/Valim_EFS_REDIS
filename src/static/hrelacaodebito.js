/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:47:42.48
*/
gx.evt.autoSkip = false;
gx.define('hrelacaodebito', false, function () {
   this.ServerClass =  "hrelacaodebito" ;
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
   this.s112_client=function()
   {
      if ( ( (""==this.AV20tpOrdenacao) ) && ( this.AV29SnErro == "N" ) )
      {
         this.addMessage("Informe a forma de ordenação");
         this.AV29SnErro =  "S"  ;
      }
      if ( ( this.AV27PessoaId1 > this.AV28PessoaId2 ) && ( this.AV29SnErro == "N" ) )
      {
         this.addMessage("O titular inicial não pode ser maior que o final");
         this.AV29SnErro =  "S"  ;
      }
      if ( ( ( ! (0==this.AV33MesReferencia1) && (0==this.AV35AnoReferencia1) ) || ( (0==this.AV33MesReferencia1) && ! (0==this.AV35AnoReferencia1) ) || ( ! (0==this.AV34MesReferencia2) && (0==this.AV36AnoReferencia2) ) || ( (0==this.AV34MesReferencia2) && ! (0==this.AV36AnoReferencia2) ) ) && ( this.AV29SnErro == "N" ) )
      {
         this.addMessage("Informe a referência completa");
         this.AV29SnErro =  "S"  ;
      }
      if ( ( ! (0==this.AV33MesReferencia1) ) && ( ( this.AV33MesReferencia1 > 12 ) || ( this.AV33MesReferencia1 < 1 ) ) && ( this.AV29SnErro == "N" ) )
      {
         this.addMessage("Informe um mês válido");
         this.AV29SnErro =  "S"  ;
      }
      if ( ( ! (0==this.AV34MesReferencia2) ) && ( ( this.AV34MesReferencia2 > 12 ) || ( this.AV34MesReferencia2 < 1 ) ) && ( this.AV29SnErro == "N" ) )
      {
         this.addMessage("Informe um mês válido");
         this.AV29SnErro =  "S"  ;
      }
      if ( ( new gx.date.gxdate( this.AV23DtAdmissao1 ).compare( this.AV25DtAdmissao2 ) > 0 ) && ( this.AV29SnErro == "N" ) )
      {
         this.addMessage("A data de admissão inicial não pode ser maior que a final");
         this.AV29SnErro =  "S"  ;
      }
      if ( ( ( this.AV33MesReferencia1 > this.AV34MesReferencia2 ) || ( this.AV35AnoReferencia1 > this.AV36AnoReferencia2 ) ) && ( this.AV29SnErro == "N" ) )
      {
         this.addMessage("A data de referência inicial não pode ser maior que a final");
         this.AV29SnErro =  "S"  ;
      }
   };
   this.s122_client=function()
   {
      if ( ! (0==this.AV33MesReferencia1) && ! (0==this.AV35AnoReferencia1) )
      {
         this.AV41ReferenciaTxt =  "01/" + gx.text.trim( gx.num.str( this.AV33MesReferencia1, 2, 0)) + "/" + gx.text.trim( gx.num.str( this.AV35AnoReferencia1, 4, 0))  ;
         this.AV24DtReferencia1 =  gx.date.ctod( this.AV41ReferenciaTxt, "DMY4")  ;
      }
      if ( ! (0==this.AV34MesReferencia2) && ! (0==this.AV36AnoReferencia2) )
      {
         this.AV41ReferenciaTxt =  "01/" + gx.text.trim( gx.num.str( this.AV34MesReferencia2, 2, 0)) + "/" + gx.text.trim( gx.num.str( this.AV36AnoReferencia2, 4, 0))  ;
         this.AV26DtReferencia2 =  gx.date.eom( gx.date.ctod( this.AV41ReferenciaTxt, "DMY4"))  ;
      }
   };
   this.e11kd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13kd2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15kd2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,25,28,30,33,35,37,40,42,45,47,49,52,54,57,59,61,63,65,68,70,73,75,85,87,88];
   this.GXLastCtrlId =88;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPORDENACAO",gxz:"ZV20tpOrdenacao",gxold:"OV20tpOrdenacao",gxvar:"AV20tpOrdenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20tpOrdenacao=Value},v2z:function(Value){gx.O.ZV20tpOrdenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vTPORDENACAO",gx.O.AV20tpOrdenacao)},c2v:function(){gx.O.AV20tpOrdenacao=this.val()},val:function(){return gx.fn.getControlValue("vTPORDENACAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLERTITULAR",grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID1",gxz:"ZV27PessoaId1",gxold:"OV27PessoaId1",gxvar:"AV27PessoaId1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PessoaId1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PessoaId1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID1",gx.O.AV27PessoaId1,0)},c2v:function(){gx.O.AV27PessoaId1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID1",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID2",gxz:"ZV28PessoaId2",gxold:"OV28PessoaId2",gxvar:"AV28PessoaId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PessoaId2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PessoaId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID2",gx.O.AV28PessoaId2,0)},c2v:function(){gx.O.AV28PessoaId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID2",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLERDTADMISSAO",grid:0};
   GXValidFnc[45]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTADMISSAO1",gxz:"ZV23DtAdmissao1",gxold:"OV23DtAdmissao1",gxvar:"AV23DtAdmissao1",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DtAdmissao1=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23DtAdmissao1=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTADMISSAO1",gx.O.AV23DtAdmissao1,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23DtAdmissao1=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTADMISSAO1")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[47]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTADMISSAO2",gxz:"ZV25DtAdmissao2",gxold:"OV25DtAdmissao2",gxvar:"AV25DtAdmissao2",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DtAdmissao2=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DtAdmissao2=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTADMISSAO2",gx.O.AV25DtAdmissao2,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DtAdmissao2=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTADMISSAO2")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[54]={fld:"TABLERMESANOREF",grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREFERENCIA1",gxz:"ZV33MesReferencia1",gxold:"OV33MesReferencia1",gxvar:"AV33MesReferencia1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33MesReferencia1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33MesReferencia1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREFERENCIA1",gx.O.AV33MesReferencia1,0)},c2v:function(){gx.O.AV33MesReferencia1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREFERENCIA1",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREFERENCIA1",gxz:"ZV35AnoReferencia1",gxold:"OV35AnoReferencia1",gxvar:"AV35AnoReferencia1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35AnoReferencia1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35AnoReferencia1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREFERENCIA1",gx.O.AV35AnoReferencia1,0)},c2v:function(){gx.O.AV35AnoReferencia1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREFERENCIA1",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREFERENCIA2",gxz:"ZV34MesReferencia2",gxold:"OV34MesReferencia2",gxvar:"AV34MesReferencia2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34MesReferencia2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34MesReferencia2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREFERENCIA2",gx.O.AV34MesReferencia2,0)},c2v:function(){gx.O.AV34MesReferencia2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREFERENCIA2",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREFERENCIA2",gxz:"ZV36AnoReferencia2",gxold:"OV36AnoReferencia2",gxvar:"AV36AnoReferencia2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36AnoReferencia2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36AnoReferencia2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREFERENCIA2",gx.O.AV36AnoReferencia2,0)},c2v:function(){gx.O.AV36AnoReferencia2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREFERENCIA2",'.')},nac:gx.falseFn};
   GXValidFnc[68]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEBITOTIPO",gxz:"ZV21DebitoTipo",gxold:"OV21DebitoTipo",gxvar:"AV21DebitoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21DebitoTipo=Value},v2z:function(Value){gx.O.ZV21DebitoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vDEBITOTIPO",gx.O.AV21DebitoTipo)},c2v:function(){gx.O.AV21DebitoTipo=this.val()},val:function(){return gx.fn.getControlValue("vDEBITOTIPO")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEBITOCREDITO",gxz:"ZV22DebitoCredito",gxold:"OV22DebitoCredito",gxvar:"AV22DebitoCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22DebitoCredito=Value},v2z:function(Value){gx.O.ZV22DebitoCredito=Value},v2c:function(){gx.fn.setComboBoxValue("vDEBITOCREDITO",gx.O.AV22DebitoCredito)},c2v:function(){gx.O.AV22DebitoCredito=this.val()},val:function(){return gx.fn.getControlValue("vDEBITOCREDITO")},nac:gx.falseFn};
   GXValidFnc[85]={fld:"BTNHELP",grid:0};
   GXValidFnc[87]={fld:"PROMPT_PESSOAID1",grid:0};
   GXValidFnc[88]={fld:"PROMPT_PESSOAID2",grid:0};
   this.AV20tpOrdenacao = "" ;
   this.ZV20tpOrdenacao = "" ;
   this.OV20tpOrdenacao = "" ;
   this.AV27PessoaId1 = 0 ;
   this.ZV27PessoaId1 = 0 ;
   this.OV27PessoaId1 = 0 ;
   this.AV28PessoaId2 = 0 ;
   this.ZV28PessoaId2 = 0 ;
   this.OV28PessoaId2 = 0 ;
   this.AV23DtAdmissao1 = gx.date.nullDate() ;
   this.ZV23DtAdmissao1 = gx.date.nullDate() ;
   this.OV23DtAdmissao1 = gx.date.nullDate() ;
   this.AV25DtAdmissao2 = gx.date.nullDate() ;
   this.ZV25DtAdmissao2 = gx.date.nullDate() ;
   this.OV25DtAdmissao2 = gx.date.nullDate() ;
   this.AV33MesReferencia1 = 0 ;
   this.ZV33MesReferencia1 = 0 ;
   this.OV33MesReferencia1 = 0 ;
   this.AV35AnoReferencia1 = 0 ;
   this.ZV35AnoReferencia1 = 0 ;
   this.OV35AnoReferencia1 = 0 ;
   this.AV34MesReferencia2 = 0 ;
   this.ZV34MesReferencia2 = 0 ;
   this.OV34MesReferencia2 = 0 ;
   this.AV36AnoReferencia2 = 0 ;
   this.ZV36AnoReferencia2 = 0 ;
   this.OV36AnoReferencia2 = 0 ;
   this.AV21DebitoTipo = "" ;
   this.ZV21DebitoTipo = "" ;
   this.OV21DebitoTipo = "" ;
   this.AV22DebitoCredito = "" ;
   this.ZV22DebitoCredito = "" ;
   this.OV22DebitoCredito = "" ;
   this.AV20tpOrdenacao = "" ;
   this.AV27PessoaId1 = 0 ;
   this.AV28PessoaId2 = 0 ;
   this.AV23DtAdmissao1 = gx.date.nullDate() ;
   this.AV25DtAdmissao2 = gx.date.nullDate() ;
   this.AV33MesReferencia1 = 0 ;
   this.AV35AnoReferencia1 = 0 ;
   this.AV34MesReferencia2 = 0 ;
   this.AV36AnoReferencia2 = 0 ;
   this.AV21DebitoTipo = "" ;
   this.AV22DebitoCredito = "" ;
   this.AV29SnErro = "" ;
   this.AV26DtReferencia2 = gx.date.nullDate() ;
   this.AV24DtReferencia1 = gx.date.nullDate() ;
   this.AV41ReferenciaTxt = "" ;
   this.Events = {"e11kd2_client": ["'FECHAR'", true] ,"e13kd2_client": ["ENTER", true] ,"e15kd2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20tpOrdenacao',fld:'vTPORDENACAO'},{av:'AV67Pgmname',fld:'vPGMNAME'},{av:'AV27PessoaId1',fld:'vPESSOAID1'},{av:'AV28PessoaId2',fld:'vPESSOAID2'},{av:'AV23DtAdmissao1',fld:'vDTADMISSAO1'},{av:'AV25DtAdmissao2',fld:'vDTADMISSAO2'},{av:'AV24DtReferencia1',fld:'vDTREFERENCIA1'},{av:'AV26DtReferencia2',fld:'vDTREFERENCIA2'},{av:'AV21DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV22DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV68Pgmdesc',fld:'vPGMDESC'},{av:'AV29SnErro',fld:'vSNERRO'},{av:'AV33MesReferencia1',fld:'vMESREFERENCIA1'},{av:'AV35AnoReferencia1',fld:'vANOREFERENCIA1'},{av:'AV34MesReferencia2',fld:'vMESREFERENCIA2'},{av:'AV36AnoReferencia2',fld:'vANOREFERENCIA2'}],[{av:'AV29SnErro',fld:'vSNERRO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV22DebitoCredito',fld:'vDEBITOCREDITO'},{av:'AV21DebitoTipo',fld:'vDEBITOTIPO'},{av:'AV26DtReferencia2',fld:'vDTREFERENCIA2'},{av:'AV24DtReferencia1',fld:'vDTREFERENCIA1'},{av:'AV25DtAdmissao2',fld:'vDTADMISSAO2'},{av:'AV23DtAdmissao1',fld:'vDTADMISSAO1'},{av:'AV28PessoaId2',fld:'vPESSOAID2'},{av:'AV27PessoaId1',fld:'vPESSOAID1'},{av:'AV41ReferenciaTxt',fld:'vREFERENCIATXT'}]];
   this.setPrompt("PROMPT_PESSOAID1", [33]);
   this.setPrompt("PROMPT_PESSOAID2", [37]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaodebito());

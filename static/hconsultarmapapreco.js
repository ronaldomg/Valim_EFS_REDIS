/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:34.78
*/
gx.evt.autoSkip = false;
gx.define('hconsultarmapapreco', false, function () {
   this.ServerClass =  "hconsultarmapapreco" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("6", "'PRIMEIRO'");
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("9", "'ULTIMO'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV66DescSolicitacao=gx.fn.getControlValue("vDESCSOLICITACAO") ;
   };
   this.s122_client=function()
   {
      this.AV31tpErro = gx.num.trunc( 0 ,0) ;
      if ( (new gx.date.gxdate("").compare(this.AV68DataEmissaoIni)==0) && (new gx.date.gxdate("").compare(this.AV69DataEmissaoFim)==0) )
      {
         this.addMessage("Informe o intervalo de data de emissão");
         gx.fn.usrSetFocus("vDATAEMISSAOINI") ;
         this.AV31tpErro = gx.num.trunc( 1 ,0) ;
      }
      if ( new gx.date.gxdate( this.AV68DataEmissaoIni ).compare( this.AV69DataEmissaoFim ) > 0 && this.AV31tpErro == 0 )
      {
         this.addMessage("A Data de Emissão inicial deve ser menor ou igual a final");
         gx.fn.usrSetFocus("vDATAEMISSAOINI") ;
         this.AV31tpErro = gx.num.trunc( 1 ,0) ;
      }
      else
      {
         this.AV80DataEmissaoIniAux =  this.AV68DataEmissaoIni  ;
         this.AV79DataAux =  gx.date.dtoc( this.AV69DataEmissaoFim, "DMY4", "/") + " 23:59:59"  ;
         this.AV81DataEmissaoFimAux =  gx.date.ctot( this.AV79DataAux, "DMY4")  ;
      }
   };
   this.e16nn2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11nn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e19nn2_client=function()
   {
      this.executeServerEvent("'DETALHAR'", true, arguments[0], false, false);
   };
   this.e20nn2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, arguments[0], false, false);
   };
   this.e21nn2_client=function()
   {
      this.executeServerEvent("'EXCLUIRMP'", true, arguments[0], false, false);
   };
   this.e12nn2_client=function()
   {
      this.executeServerEvent("'PRIMEIRO'", true, null, false, false);
   };
   this.e13nn2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e14nn2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e15nn2_client=function()
   {
      this.executeServerEvent("'ULTIMO'", true, null, false, false);
   };
   this.e22nn2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24nn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,25,33,34,35,36,37,38,39,40,46,50,53,55,57,59,61,62,63,64,65,66,67,68,70,71];
   this.GXLastCtrlId =71;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",32,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultarmapapreco",[],false,1,true,true,0,false,false,false,"CollSdtConsultarMapaPreco.SdtConsultarMapaPrecoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV86SdtConsultarMapaPreco",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV10X",33,"CTLSOLICITACAONUMERO","","","SolicitacaoNumero","int",0,"px",7,7,"right",null,[],"GXV10X","GXV10X",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10Y",34,"CTLMAPAPRECONUMERO","Nº Mapa","","MapaPrecoNumero","int",0,"px",2,2,"right",null,[],"GXV10Y","GXV10Y",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10Z",35,"CTLMAPAPRECODATAHORAALT","","","MapaPrecoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],"GXV10Z","GXV10Z",true,5,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV110",36,"CTLUSUARIONOME","Usuário","","UsuarioNome","svchar",0,"px",35,35,"left",null,[],"GXV110","GXV110",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox("GXV111",37,"CTLMAPAPRECOTIPOPRECO","Tipo do Preço","MapaPrecoTipoPreco","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpdet","vBMPDET",38,0,"px",17,"px","e19nn2_client","","Detalhar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpimp","vBMPIMP",39,0,"px",17,"px","e20nn2_client","","Imprimir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",40,0,"px",17,"px","e21nn2_client","","Excluir","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE5",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSOLICITACAONUMEROFILTRO",gxz:"ZV70SolicitacaoNumeroFiltro",gxold:"OV70SolicitacaoNumeroFiltro",gxvar:"AV70SolicitacaoNumeroFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70SolicitacaoNumeroFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70SolicitacaoNumeroFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITACAONUMEROFILTRO",gx.O.AV70SolicitacaoNumeroFiltro,0)},c2v:function(){gx.O.AV70SolicitacaoNumeroFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITACAONUMEROFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE10",grid:0};
   GXValidFnc[21]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOINI",gxz:"ZV68DataEmissaoIni",gxold:"OV68DataEmissaoIni",gxvar:"AV68DataEmissaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68DataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV68DataEmissaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOINI",gx.O.AV68DataEmissaoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV68DataEmissaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOFIM",gxz:"ZV69DataEmissaoFim",gxold:"OV69DataEmissaoFim",gxvar:"AV69DataEmissaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV69DataEmissaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV69DataEmissaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOFIM",gx.O.AV69DataEmissaoFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV69DataEmissaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAEMISSAOFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[33]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"9999999",ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSOLICITACAONUMERO",gxz:"ZV97GXV10X",gxold:"OV97GXV10X",gxvar:"GXV10X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10X=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV97GXV10X=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSOLICITACAONUMERO",row || gx.fn.currentGridRowImpl(32),gx.O.GXV10X,0)},c2v:function(){gx.O.GXV10X=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSOLICITACAONUMERO",row || gx.fn.currentGridRowImpl(32),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLMAPAPRECONUMERO",gxz:"ZV98GXV10Y",gxold:"OV98GXV10Y",gxvar:"GXV10Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10Y=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV98GXV10Y=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLMAPAPRECONUMERO",row || gx.fn.currentGridRowImpl(32),gx.O.GXV10Y,0)},c2v:function(){gx.O.GXV10Y=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLMAPAPRECONUMERO",row || gx.fn.currentGridRowImpl(32),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLMAPAPRECODATAHORAALT",gxz:"ZV99GXV10Z",gxold:"OV99GXV10Z",gxvar:"GXV10Z",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10Z=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV99GXV10Z=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLMAPAPRECODATAHORAALT",row || gx.fn.currentGridRowImpl(32),gx.O.GXV10Z,0)},c2v:function(){gx.O.GXV10Z=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLMAPAPRECODATAHORAALT",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLUSUARIONOME",gxz:"ZV100GXV110",gxold:"OV100GXV110",gxvar:"GXV110",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV110=Value},v2z:function(Value){gx.O.ZV100GXV110=Value},v2c:function(row){gx.fn.setGridControlValue("CTLUSUARIONOME",row || gx.fn.currentGridRowImpl(32),gx.O.GXV110,0)},c2v:function(){gx.O.GXV110=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLUSUARIONOME",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLMAPAPRECOTIPOPRECO",gxz:"ZV101GXV111",gxold:"OV101GXV111",gxvar:"GXV111",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.GXV111=Value},v2z:function(Value){gx.O.ZV101GXV111=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CTLMAPAPRECOTIPOPRECO",row || gx.fn.currentGridRowImpl(32),gx.O.GXV111)},c2v:function(){gx.O.GXV111=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLMAPAPRECOTIPOPRECO",row || gx.fn.currentGridRowImpl(32))},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDET",gxz:"ZV76bmpDet",gxold:"OV76bmpDet",gxvar:"AV76bmpDet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV76bmpDet=Value},v2z:function(Value){gx.O.ZV76bmpDet=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDET",row || gx.fn.currentGridRowImpl(32),gx.O.AV76bmpDet,gx.O.AV104Bmpdet_GXI)},c2v:function(){gx.O.AV104Bmpdet_GXI=this.val_GXI();gx.O.AV76bmpDet=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDET",row || gx.fn.currentGridRowImpl(32))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDET_GXI",row || gx.fn.currentGridRowImpl(32))}, gxvar_GXI:'AV104Bmpdet_GXI',nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPIMP",gxz:"ZV77bmpImp",gxold:"OV77bmpImp",gxvar:"AV77bmpImp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV77bmpImp=Value},v2z:function(Value){gx.O.ZV77bmpImp=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPIMP",row || gx.fn.currentGridRowImpl(32),gx.O.AV77bmpImp,gx.O.AV105Bmpimp_GXI)},c2v:function(){gx.O.AV105Bmpimp_GXI=this.val_GXI();gx.O.AV77bmpImp=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPIMP",row || gx.fn.currentGridRowImpl(32))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPIMP_GXI",row || gx.fn.currentGridRowImpl(32))}, gxvar_GXI:'AV105Bmpimp_GXI',nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:32,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV7bmpExc",gxold:"OV7bmpExc",gxvar:"AV7bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpExc=Value},v2z:function(Value){gx.O.ZV7bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(32),gx.O.AV7bmpExc,gx.O.AV108Bmpexc_GXI)},c2v:function(){gx.O.AV108Bmpexc_GXI=this.val_GXI();gx.O.AV7bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(32))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(32))}, gxvar_GXI:'AV108Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[46]={fld:"TABLE6",grid:0};
   GXValidFnc[50]={fld:"TABLE7",grid:0};
   GXValidFnc[53]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[55]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[57]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[59]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[61]={fld:"IMAGE5",grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV10OrderedBy",gxold:"OV10OrderedBy",gxvar:"AV10OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV10OrderedBy,0)},c2v:function(){gx.O.AV10OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV5Pagina,0)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEPAG",gxz:"ZV91QtdePag",gxold:"OV91QtdePag",gxvar:"AV91QtdePag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91QtdePag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV91QtdePag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEPAG",gx.O.AV91QtdePag,0)},c2v:function(){gx.O.AV91QtdePag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEPAG",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPERRO",gxz:"ZV31tpErro",gxold:"OV31tpErro",gxvar:"AV31tpErro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31tpErro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31tpErro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPERRO",gx.O.AV31tpErro,0)},c2v:function(){gx.O.AV31tpErro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPERRO",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"dtime",len:8,dec:8,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOFIMAUX",gxz:"ZV81DataEmissaoFimAux",gxold:"OV81DataEmissaoFimAux",gxvar:"AV81DataEmissaoFimAux",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81DataEmissaoFimAux=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV81DataEmissaoFimAux=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOFIMAUX",gx.O.AV81DataEmissaoFimAux,0)},c2v:function(){gx.O.AV81DataEmissaoFimAux=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAEMISSAOFIMAUX")},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"dtime",len:8,dec:8,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAEMISSAOINIAUX",gxz:"ZV80DataEmissaoIniAux",gxold:"OV80DataEmissaoIniAux",gxvar:"AV80DataEmissaoIniAux",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/99 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80DataEmissaoIniAux=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV80DataEmissaoIniAux=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAEMISSAOINIAUX",gx.O.AV80DataEmissaoIniAux,0)},c2v:function(){gx.O.AV80DataEmissaoIniAux=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vDATAEMISSAOINIAUX")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"JS", format:2,grid:0};
   GXValidFnc[70]={fld:"BTNHELP",grid:0};
   GXValidFnc[71]={fld:"PROMPT_SOLICITACAONUMEROFILTRO",grid:0};
   this.AV70SolicitacaoNumeroFiltro = 0 ;
   this.ZV70SolicitacaoNumeroFiltro = 0 ;
   this.OV70SolicitacaoNumeroFiltro = 0 ;
   this.AV68DataEmissaoIni = gx.date.nullDate() ;
   this.ZV68DataEmissaoIni = gx.date.nullDate() ;
   this.OV68DataEmissaoIni = gx.date.nullDate() ;
   this.AV69DataEmissaoFim = gx.date.nullDate() ;
   this.ZV69DataEmissaoFim = gx.date.nullDate() ;
   this.OV69DataEmissaoFim = gx.date.nullDate() ;
   this.ZV97GXV10X = 0 ;
   this.OV97GXV10X = 0 ;
   this.ZV98GXV10Y = 0 ;
   this.OV98GXV10Y = 0 ;
   this.ZV99GXV10Z = gx.date.nullDate() ;
   this.OV99GXV10Z = gx.date.nullDate() ;
   this.ZV100GXV110 = "" ;
   this.OV100GXV110 = "" ;
   this.ZV101GXV111 = "" ;
   this.OV101GXV111 = "" ;
   this.ZV76bmpDet = "" ;
   this.OV76bmpDet = "" ;
   this.ZV77bmpImp = "" ;
   this.OV77bmpImp = "" ;
   this.ZV7bmpExc = "" ;
   this.OV7bmpExc = "" ;
   this.AV10OrderedBy = 0 ;
   this.ZV10OrderedBy = 0 ;
   this.OV10OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV91QtdePag = 0 ;
   this.ZV91QtdePag = 0 ;
   this.OV91QtdePag = 0 ;
   this.AV31tpErro = 0 ;
   this.ZV31tpErro = 0 ;
   this.OV31tpErro = 0 ;
   this.AV81DataEmissaoFimAux = gx.date.nullDate() ;
   this.ZV81DataEmissaoFimAux = gx.date.nullDate() ;
   this.OV81DataEmissaoFimAux = gx.date.nullDate() ;
   this.AV80DataEmissaoIniAux = gx.date.nullDate() ;
   this.ZV80DataEmissaoIniAux = gx.date.nullDate() ;
   this.OV80DataEmissaoIniAux = gx.date.nullDate() ;
   this.AV70SolicitacaoNumeroFiltro = 0 ;
   this.AV68DataEmissaoIni = gx.date.nullDate() ;
   this.AV69DataEmissaoFim = gx.date.nullDate() ;
   this.AV10OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV91QtdePag = 0 ;
   this.AV31tpErro = 0 ;
   this.AV81DataEmissaoFimAux = gx.date.nullDate() ;
   this.AV80DataEmissaoIniAux = gx.date.nullDate() ;
   this.GXV10X = 0 ;
   this.GXV10Y = 0 ;
   this.GXV10Z = gx.date.nullDate() ;
   this.GXV110 = "" ;
   this.GXV111 = "" ;
   this.AV76bmpDet = "" ;
   this.AV77bmpImp = "" ;
   this.AV7bmpExc = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A3406MapaPrecoDataHoraAlt = gx.date.nullDate() ;
   this.A3371SolicitacaoNumero = 0 ;
   this.A3370SolicitacaoEmpresaId = "" ;
   this.A3675MapaPrecoUsuarioAlt = "" ;
   this.A3407MapaPrecoTipoPreco = "" ;
   this.A3405MapaPrecoNumero = 0 ;
   this.A507ProgramaUsuarioSnExclusao = "" ;
   this.A498ProgramaLink = "" ;
   this.A140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.A604UsuarioPrivilegio = "" ;
   this.AV66DescSolicitacao = "" ;
   this.AV79DataAux = "" ;
   this.Events = {"e16nn2_client": ["ENTER", true] ,"e11nn2_client": ["'FECHAR'", true] ,"e19nn2_client": ["'DETALHAR'", true] ,"e20nn2_client": ["'IMPRIMIR'", true] ,"e21nn2_client": ["'EXCLUIRMP'", true] ,"e12nn2_client": ["'PRIMEIRO'", true] ,"e13nn2_client": ["'ANTERIOR'", true] ,"e14nn2_client": ["'PROXIMO'", true] ,"e15nn2_client": ["'ULTIMO'", true] ,"e22nn2_client": ["'ATUALIZAPAGINA'", true] ,"e24nn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV86SdtConsultarMapaPreco',fld:'vSDTCONSULTARMAPAPRECO',grid:32},{av:'subGrid_Rows'},{av:'AV76bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV77bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV66DescSolicitacao',fld:'vDESCSOLICITACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV91QtdePag',fld:'vQTDEPAG'}],[{ctrl:'CTLSOLICITACAONUMERO',prop:'Titleformat'},{ctrl:'CTLSOLICITACAONUMERO',prop:'Title'},{av:'AV11Imagem',fld:'vIMAGEM'},{ctrl:'CTLMAPAPRECODATAHORAALT',prop:'Titleformat'},{ctrl:'CTLMAPAPRECODATAHORAALT',prop:'Title'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV86SdtConsultarMapaPreco',fld:'vSDTCONSULTARMAPAPRECO',grid:32},{av:'subGrid_Rows'},{av:'AV76bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV77bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV66DescSolicitacao',fld:'vDESCSOLICITACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV91QtdePag',fld:'vQTDEPAG'},{av:'AV70SolicitacaoNumeroFiltro',fld:'vSOLICITACAONUMEROFILTRO'},{av:'AV69DataEmissaoFim',fld:'vDATAEMISSAOFIM'},{av:'AV31tpErro',fld:'vTPERRO'},{av:'AV68DataEmissaoIni',fld:'vDATAEMISSAOINI'},{av:'A3406MapaPrecoDataHoraAlt',fld:'MAPAPRECODATAHORAALT'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3405MapaPrecoNumero',fld:'MAPAPRECONUMERO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV75SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'AV80DataEmissaoIniAux',fld:'vDATAEMISSAOINIAUX'},{av:'AV81DataEmissaoFimAux',fld:'vDATAEMISSAOFIMAUX'},{av:'AV73MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'AV67SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A3675MapaPrecoUsuarioAlt',fld:'MAPAPRECOUSUARIOALT'},{av:'AV72UsuarioNome',fld:'vUSUARIONOME'},{av:'A3407MapaPrecoTipoPreco',fld:'MAPAPRECOTIPOPRECO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV78MapaPrecoUsuarioAlt',fld:'vMAPAPRECOUSUARIOALT'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV86SdtConsultarMapaPreco',fld:'vSDTCONSULTARMAPAPRECO',grid:32},{av:'AV31tpErro',fld:'vTPERRO'},{av:'AV80DataEmissaoIniAux',fld:'vDATAEMISSAOINIAUX'},{av:'AV79DataAux',fld:'vDATAAUX'},{av:'AV81DataEmissaoFimAux',fld:'vDATAEMISSAOFIMAUX'},{av:'AV67SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV73MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'AV78MapaPrecoUsuarioAlt',fld:'vMAPAPRECOUSUARIOALT'},{av:'AV87SdtConsultarMapaPrecoItem',fld:'vSDTCONSULTARMAPAPRECOITEM'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV110GXLvl231',fld:'vGXLVL231'},{av:'AV72UsuarioNome',fld:'vUSUARIONOME'},{av:'AV93QtdeLinGrid',fld:'vQTDELINGRID'},{av:'AV88Res',fld:'vRES'},{av:'AV89ResInt',fld:'vRESINT'},{av:'AV91QtdePag',fld:'vQTDEPAG'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'DETALHAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV86SdtConsultarMapaPreco',fld:'vSDTCONSULTARMAPAPRECO',grid:32},{av:'subGrid_Rows'},{av:'AV76bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV77bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV66DescSolicitacao',fld:'vDESCSOLICITACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV91QtdePag',fld:'vQTDEPAG'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV102Pgmname',fld:'vPGMNAME'},{av:'AV86SdtConsultarMapaPreco',fld:'vSDTCONSULTARMAPAPRECO',grid:32},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV76bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV77bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV66DescSolicitacao',fld:'vDESCSOLICITACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV91QtdePag',fld:'vQTDEPAG'}],[{av:'AV18NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV17NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV83QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV86SdtConsultarMapaPreco',fld:'vSDTCONSULTARMAPAPRECO',grid:32}]];
   this.EvtParms["'EXCLUIRMP'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV86SdtConsultarMapaPreco',fld:'vSDTCONSULTARMAPAPRECO',grid:32},{av:'subGrid_Rows'},{av:'AV76bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV77bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV66DescSolicitacao',fld:'vDESCSOLICITACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV91QtdePag',fld:'vQTDEPAG'},{av:'AV90SnPossuiPermissao',fld:'vSNPOSSUIPERMISSAO'},{av:'AV75SolicitacaoEmpresaId',fld:'vSOLICITACAOEMPRESAID'},{av:'A3406MapaPrecoDataHoraAlt',fld:'MAPAPRECODATAHORAALT'},{av:'A3371SolicitacaoNumero',fld:'SOLICITACAONUMERO'},{av:'A3405MapaPrecoNumero',fld:'MAPAPRECONUMERO'},{av:'A3370SolicitacaoEmpresaId',fld:'SOLICITACAOEMPRESAID'},{av:'AV70SolicitacaoNumeroFiltro',fld:'vSOLICITACAONUMEROFILTRO'},{av:'AV68DataEmissaoIni',fld:'vDATAEMISSAOINI'},{av:'AV80DataEmissaoIniAux',fld:'vDATAEMISSAOINIAUX'},{av:'AV69DataEmissaoFim',fld:'vDATAEMISSAOFIM'},{av:'AV81DataEmissaoFimAux',fld:'vDATAEMISSAOFIMAUX'},{av:'AV73MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'AV67SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'A3675MapaPrecoUsuarioAlt',fld:'MAPAPRECOUSUARIOALT'},{av:'AV72UsuarioNome',fld:'vUSUARIONOME'},{av:'A3407MapaPrecoTipoPreco',fld:'MAPAPRECOTIPOPRECO'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV78MapaPrecoUsuarioAlt',fld:'vMAPAPRECOUSUARIOALT'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV86SdtConsultarMapaPreco',fld:'vSDTCONSULTARMAPAPRECO',grid:32},{av:'AV67SolicitacaoNumero',fld:'vSOLICITACAONUMERO'},{av:'AV73MapaPrecoNumero',fld:'vMAPAPRECONUMERO'},{av:'AV78MapaPrecoUsuarioAlt',fld:'vMAPAPRECOUSUARIOALT'},{av:'AV87SdtConsultarMapaPrecoItem',fld:'vSDTCONSULTARMAPAPRECOITEM'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV110GXLvl231',fld:'vGXLVL231'},{av:'AV72UsuarioNome',fld:'vUSUARIONOME'},{av:'AV93QtdeLinGrid',fld:'vQTDELINGRID'},{av:'AV88Res',fld:'vRES'},{av:'AV89ResInt',fld:'vRESINT'},{av:'AV91QtdePag',fld:'vQTDEPAG'}]];
   this.EvtParms["'PRIMEIRO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV86SdtConsultarMapaPreco',fld:'vSDTCONSULTARMAPAPRECO',grid:32},{av:'subGrid_Rows'},{av:'AV76bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV77bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV66DescSolicitacao',fld:'vDESCSOLICITACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV91QtdePag',fld:'vQTDEPAG'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV86SdtConsultarMapaPreco',fld:'vSDTCONSULTARMAPAPRECO',grid:32},{av:'subGrid_Rows'},{av:'AV76bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV77bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV66DescSolicitacao',fld:'vDESCSOLICITACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV91QtdePag',fld:'vQTDEPAG'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV86SdtConsultarMapaPreco',fld:'vSDTCONSULTARMAPAPRECO',grid:32},{av:'subGrid_Rows'},{av:'AV76bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV77bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV66DescSolicitacao',fld:'vDESCSOLICITACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV91QtdePag',fld:'vQTDEPAG'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ULTIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV86SdtConsultarMapaPreco',fld:'vSDTCONSULTARMAPAPRECO',grid:32},{av:'subGrid_Rows'},{av:'AV76bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV77bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV66DescSolicitacao',fld:'vDESCSOLICITACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV91QtdePag',fld:'vQTDEPAG'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV86SdtConsultarMapaPreco',fld:'vSDTCONSULTARMAPAPRECO',grid:32},{av:'subGrid_Rows'},{av:'AV76bmpDet',fld:'vBMPDET'},{av:'gx.fn.getCtrlProperty("vBMPDET","Tooltiptext")',ctrl:'vBMPDET',prop:'Tooltiptext'},{av:'AV77bmpImp',fld:'vBMPIMP'},{av:'gx.fn.getCtrlProperty("vBMPIMP","Tooltiptext")',ctrl:'vBMPIMP',prop:'Tooltiptext'},{av:'AV7bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV10OrderedBy',fld:'vORDEREDBY'},{av:'AV66DescSolicitacao',fld:'vDESCSOLICITACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV91QtdePag',fld:'vQTDEPAG'}],[]];
   this.setPrompt("PROMPT_SOLICITACAONUMEROFILTRO", [13]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV66DescSolicitacao", "vDESCSOLICITACAO", 0, "svchar");
   this.setVCMap("AV66DescSolicitacao", "vDESCSOLICITACAO", 0, "svchar");
   GridContainer.addRefreshingVar({rfrVar:"AV76bmpDet", rfrProp:"Value", gxAttId:"Bmpdet"});
   GridContainer.addRefreshingVar({rfrVar:"AV76bmpDet", rfrProp:"Tooltiptext", gxAttId:"Bmpdet"});
   GridContainer.addRefreshingVar({rfrVar:"AV77bmpImp", rfrProp:"Value", gxAttId:"Bmpimp"});
   GridContainer.addRefreshingVar({rfrVar:"AV77bmpImp", rfrProp:"Tooltiptext", gxAttId:"Bmpimp"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar({rfrVar:"AV66DescSolicitacao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   this.addGridBCProperty("Sdtconsultarmapapreco", ["SolicitacaoNumero"], this.GXValidFnc[33], "AV86SdtConsultarMapaPreco");
   this.addGridBCProperty("Sdtconsultarmapapreco", ["MapaPrecoNumero"], this.GXValidFnc[34], "AV86SdtConsultarMapaPreco");
   this.addGridBCProperty("Sdtconsultarmapapreco", ["MapaPrecoDataHoraAlt"], this.GXValidFnc[35], "AV86SdtConsultarMapaPreco");
   this.addGridBCProperty("Sdtconsultarmapapreco", ["UsuarioNome"], this.GXValidFnc[36], "AV86SdtConsultarMapaPreco");
   this.addGridBCProperty("Sdtconsultarmapapreco", ["MapaPrecoTipoPreco"], this.GXValidFnc[37], "AV86SdtConsultarMapaPreco");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarmapapreco());

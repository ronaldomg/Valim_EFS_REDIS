/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 16:34:0.23
*/
gx.evt.autoSkip = false;
gx.define('hmodalselecionafilial', false, function () {
   this.ServerClass =  "hmodalselecionafilial" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A3227ParametroConsultaEmpresaId=gx.fn.getControlValue("PARAMETROCONSULTAEMPRESAID") ;
      this.AV26ParametroConsultaEmpresaId=gx.fn.getControlValue("vPARAMETROCONSULTAEMPRESAID") ;
      this.A3228ParametroConsultaCodigo=gx.fn.getIntegerValue("PARAMETROCONSULTACODIGO",'.') ;
      this.AV25ParametroConsultaCodigo=gx.fn.getIntegerValue("vPARAMETROCONSULTACODIGO",'.') ;
      this.A3234ParametroConsultaCampoUsuAlt=gx.fn.getControlValue("PARAMETROCONSULTACAMPOUSUALT") ;
      this.A3230ParametroConsultaCampoCod=gx.fn.getControlValue("PARAMETROCONSULTACAMPOCOD") ;
      this.AV24SNMarcado=gx.fn.getControlValue("vSNMARCADO") ;
      this.AV13SdtFiliais=gx.fn.getControlValue("vSDTFILIAIS") ;
      this.AV23FilialSelec=gx.fn.getIntegerValue("vFILIALSELEC",'.') ;
      this.AV20Tela=gx.fn.getControlValue("vTELA") ;
      this.AV30TipoSaldo=gx.fn.getControlValue("vTIPOSALDO") ;
      this.AV32SnInventarioLote=gx.fn.getControlValue("vSNINVENTARIOLOTE") ;
   };
   this.e1112o2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1212o2_client=function()
   {
      this.executeServerEvent("VFILTRARQTDEFILIAL.CLICK", true, null, false, true);
   };
   this.e1312o2_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e1412o2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e2012o2_client=function()
   {
      this.executeServerEvent("CTLATUALP.CLICK", true, arguments[0], false, false);
   };
   this.e2112o2_client=function()
   {
      this.executeServerEvent("CTLATUALN.CLICK", true, arguments[0], false, false);
   };
   this.e2212o2_client=function()
   {
      this.executeServerEvent("CTLATUALZ.CLICK", true, arguments[0], false, false);
   };
   this.e2312o2_client=function()
   {
      this.executeServerEvent("CTLINVP.CLICK", true, arguments[0], false, false);
   };
   this.e2412o2_client=function()
   {
      this.executeServerEvent("CTLINVN.CLICK", true, arguments[0], false, false);
   };
   this.e2512o2_client=function()
   {
      this.executeServerEvent("CTLINVZ.CLICK", true, arguments[0], false, false);
   };
   this.e2612o2_client=function()
   {
      this.executeServerEvent("CTLSALDOP.CLICK", true, arguments[0], false, false);
   };
   this.e2712o2_client=function()
   {
      this.executeServerEvent("CTLSALDON.CLICK", true, arguments[0], false, false);
   };
   this.e2812o2_client=function()
   {
      this.executeServerEvent("CTLSALDOZ.CLICK", true, arguments[0], false, false);
   };
   this.e1512o2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1612o2_client=function()
   {
      this.executeServerEvent("VSNAGRUPAR.CLICK", true, null, false, true);
   };
   this.e3012o2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,24,26,27,28,29,30,31,32,33,34,35,36,37,38,49];
   this.GXLastCtrlId =49;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",25,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hmodalselecionafilial",[],false,1,true,true,0,false,false,false,"CollSdtFiliais.SdtFiliaisItem",0,"px","Novo registro",false,false,true,null,null,false,"AV13SdtFiliais",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addCheckBox("GXV10Q",26,"CTLSNMARCADO","","","SNMarcado","char","S","N",null,true,false,0,"px","GridColumnImage");
   Grid1Container.addSingleLineEdit("GXV10R",27,"CTLFILIALID","Filial","","FilialId","int",0,"px",7,7,"right",null,[],"GXV10R","GXV10R",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10S",28,"CTLFILIALNOME","Nome","","FilialNome","svchar",0,"px",100,80,"left",null,[],"GXV10S","GXV10S",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addCheckBox("GXV10T",29,"CTLATUALP","Atual P","","AtualP","char","S","N","e2012o2_client",true,false,0,"px","GridColumnImageQuebra");
   Grid1Container.addCheckBox("GXV10U",30,"CTLATUALZ","Atual Z","","AtualZ","char","S","N","e2212o2_client",true,false,0,"px","GridColumnImageQuebra");
   Grid1Container.addCheckBox("GXV10V",31,"CTLATUALN","Atual N","","AtualN","char","S","N","e2112o2_client",true,false,0,"px","GridColumnImageQuebra");
   Grid1Container.addCheckBox("GXV10W",32,"CTLINVP","Inv P","","InvP","char","S","N","e2312o2_client",true,false,0,"px","GridColumnImageQuebra");
   Grid1Container.addCheckBox("GXV10X",33,"CTLINVZ","Inv Z","","InvZ","char","S","N","e2512o2_client",true,false,0,"px","GridColumnImageQuebra");
   Grid1Container.addCheckBox("GXV10Y",34,"CTLINVN","Inv N","","InvN","char","S","N","e2412o2_client",true,false,0,"px","GridColumnImageQuebra");
   Grid1Container.addCheckBox("GXV10Z",35,"CTLSALDOP","Saldo P","","SaldoP","char","S","N","e2612o2_client",true,false,0,"px","GridColumnImageQuebra");
   Grid1Container.addCheckBox("GXV110",36,"CTLSALDOZ","Saldo Z","","SaldoZ","char","S","N","e2812o2_client",true,false,0,"px","GridColumnImageQuebra");
   Grid1Container.addCheckBox("GXV111",37,"CTLSALDON","Saldo N","","SaldoN","char","S","N","e2712o2_client",true,false,0,"px","GridColumnImageQuebra");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNAGRUPAR",gxz:"ZV15SNAgrupar",gxold:"OV15SNAgrupar",gxvar:"AV15SNAgrupar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15SNAgrupar=Value},v2z:function(Value){gx.O.ZV15SNAgrupar=Value},v2c:function(){gx.fn.setComboBoxValue("vSNAGRUPAR",gx.O.AV15SNAgrupar)},c2v:function(){gx.O.AV15SNAgrupar=this.val()},val:function(){return gx.fn.getControlValue("vSNAGRUPAR")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TABLE4",grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILTRARQTDEFILIAL",gxz:"ZV21FiltrarQtdeFilial",gxold:"OV21FiltrarQtdeFilial",gxvar:"AV21FiltrarQtdeFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21FiltrarQtdeFilial=Value},v2z:function(Value){gx.O.ZV21FiltrarQtdeFilial=Value},v2c:function(){gx.fn.setCheckBoxValue("vFILTRARQTDEFILIAL",gx.O.AV21FiltrarQtdeFilial,"S")},c2v:function(){gx.O.AV21FiltrarQtdeFilial=this.val()},val:function(){return gx.fn.getControlValue("vFILTRARQTDEFILIAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[24]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[26]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNMARCADO",gxz:"ZV40GXV10Q",gxold:"OV40GXV10Q",gxvar:"GXV10Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10Q=Value},v2z:function(Value){gx.O.ZV40GXV10Q=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNMARCADO",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10Q,"S")},c2v:function(){gx.O.GXV10Q=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNMARCADO",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[27]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFILIALID",gxz:"ZV41GXV10R",gxold:"OV41GXV10R",gxvar:"GXV10R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10R=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41GXV10R=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLFILIALID",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10R,0)},c2v:function(){gx.O.GXV10R=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLFILIALID",row || gx.fn.currentGridRowImpl(25),'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLFILIALNOME",gxz:"ZV42GXV10S",gxold:"OV42GXV10S",gxvar:"GXV10S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10S=Value},v2z:function(Value){gx.O.ZV42GXV10S=Value},v2c:function(row){gx.fn.setGridControlValue("CTLFILIALNOME",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10S,0)},c2v:function(){gx.O.GXV10S=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLFILIALNOME",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLATUALP",gxz:"ZV43GXV10T",gxold:"OV43GXV10T",gxvar:"GXV10T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10T=Value},v2z:function(Value){gx.O.ZV43GXV10T=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLATUALP",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10T,"S")},c2v:function(){gx.O.GXV10T=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLATUALP",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[30]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLATUALZ",gxz:"ZV44GXV10U",gxold:"OV44GXV10U",gxvar:"GXV10U",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10U=Value},v2z:function(Value){gx.O.ZV44GXV10U=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLATUALZ",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10U,"S")},c2v:function(){gx.O.GXV10U=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLATUALZ",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLATUALN",gxz:"ZV45GXV10V",gxold:"OV45GXV10V",gxvar:"GXV10V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10V=Value},v2z:function(Value){gx.O.ZV45GXV10V=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLATUALN",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10V,"S")},c2v:function(){gx.O.GXV10V=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLATUALN",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[32]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLINVP",gxz:"ZV46GXV10W",gxold:"OV46GXV10W",gxvar:"GXV10W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10W=Value},v2z:function(Value){gx.O.ZV46GXV10W=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLINVP",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10W,"S")},c2v:function(){gx.O.GXV10W=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLINVP",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[33]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLINVZ",gxz:"ZV47GXV10X",gxold:"OV47GXV10X",gxvar:"GXV10X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10X=Value},v2z:function(Value){gx.O.ZV47GXV10X=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLINVZ",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10X,"S")},c2v:function(){gx.O.GXV10X=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLINVZ",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[34]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLINVN",gxz:"ZV48GXV10Y",gxold:"OV48GXV10Y",gxvar:"GXV10Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10Y=Value},v2z:function(Value){gx.O.ZV48GXV10Y=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLINVN",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10Y,"S")},c2v:function(){gx.O.GXV10Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLINVN",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[35]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSALDOP",gxz:"ZV49GXV10Z",gxold:"OV49GXV10Z",gxvar:"GXV10Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10Z=Value},v2z:function(Value){gx.O.ZV49GXV10Z=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSALDOP",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10Z,"S")},c2v:function(){gx.O.GXV10Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSALDOP",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[36]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSALDOZ",gxz:"ZV50GXV110",gxold:"OV50GXV110",gxvar:"GXV110",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV110=Value},v2z:function(Value){gx.O.ZV50GXV110=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSALDOZ",row || gx.fn.currentGridRowImpl(25),gx.O.GXV110,"S")},c2v:function(){gx.O.GXV110=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSALDOZ",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[37]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSALDON",gxz:"ZV51GXV111",gxold:"OV51GXV111",gxvar:"GXV111",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV111=Value},v2z:function(Value){gx.O.ZV51GXV111=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSALDON",row || gx.fn.currentGridRowImpl(25),gx.O.GXV111,"S")},c2v:function(){gx.O.GXV111=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSALDON",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[38]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNREFRESH",gxz:"ZV36SNRefresh",gxold:"OV36SNRefresh",gxvar:"AV36SNRefresh",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36SNRefresh=Value},v2z:function(Value){gx.O.ZV36SNRefresh=Value},v2c:function(){gx.fn.setControlValue("vSNREFRESH",gx.O.AV36SNRefresh,0)},c2v:function(){gx.O.AV36SNRefresh=this.val()},val:function(){return gx.fn.getControlValue("vSNREFRESH")},nac:gx.falseFn};
   this.AV15SNAgrupar = "" ;
   this.ZV15SNAgrupar = "" ;
   this.OV15SNAgrupar = "" ;
   this.AV21FiltrarQtdeFilial = "" ;
   this.ZV21FiltrarQtdeFilial = "" ;
   this.OV21FiltrarQtdeFilial = "" ;
   this.ZV40GXV10Q = "" ;
   this.OV40GXV10Q = "" ;
   this.ZV41GXV10R = 0 ;
   this.OV41GXV10R = 0 ;
   this.ZV42GXV10S = "" ;
   this.OV42GXV10S = "" ;
   this.ZV43GXV10T = "" ;
   this.OV43GXV10T = "" ;
   this.ZV44GXV10U = "" ;
   this.OV44GXV10U = "" ;
   this.ZV45GXV10V = "" ;
   this.OV45GXV10V = "" ;
   this.ZV46GXV10W = "" ;
   this.OV46GXV10W = "" ;
   this.ZV47GXV10X = "" ;
   this.OV47GXV10X = "" ;
   this.ZV48GXV10Y = "" ;
   this.OV48GXV10Y = "" ;
   this.ZV49GXV10Z = "" ;
   this.OV49GXV10Z = "" ;
   this.ZV50GXV110 = "" ;
   this.OV50GXV110 = "" ;
   this.ZV51GXV111 = "" ;
   this.OV51GXV111 = "" ;
   this.AV36SNRefresh = "" ;
   this.ZV36SNRefresh = "" ;
   this.OV36SNRefresh = "" ;
   this.AV15SNAgrupar = "" ;
   this.AV21FiltrarQtdeFilial = "" ;
   this.AV36SNRefresh = "" ;
   this.AV20Tela = "" ;
   this.AV25ParametroConsultaCodigo = 0 ;
   this.AV30TipoSaldo = "" ;
   this.AV32SnInventarioLote = "" ;
   this.GXV10Q = "" ;
   this.GXV10R = 0 ;
   this.GXV10S = "" ;
   this.GXV10T = "" ;
   this.GXV10U = "" ;
   this.GXV10V = "" ;
   this.GXV10W = "" ;
   this.GXV10X = "" ;
   this.GXV10Y = "" ;
   this.GXV10Z = "" ;
   this.GXV110 = "" ;
   this.GXV111 = "" ;
   this.A3228ParametroConsultaCodigo = 0 ;
   this.A3227ParametroConsultaEmpresaId = "" ;
   this.A3234ParametroConsultaCampoUsuAlt = "" ;
   this.A3230ParametroConsultaCampoCod = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A1156FilialId = 0 ;
   this.AV26ParametroConsultaEmpresaId = "" ;
   this.AV24SNMarcado = "" ;
   this.AV13SdtFiliais = [ ] ;
   this.AV23FilialSelec = 0 ;
   this.Events = {"e1112o2_client": ["ENTER", true] ,"e1212o2_client": ["VFILTRARQTDEFILIAL.CLICK", true] ,"e1312o2_client": ["'MARCARTODOS'", true] ,"e1412o2_client": ["'DESMARCARTODOS'", true] ,"e2012o2_client": ["CTLATUALP.CLICK", true] ,"e2112o2_client": ["CTLATUALN.CLICK", true] ,"e2212o2_client": ["CTLATUALZ.CLICK", true] ,"e2312o2_client": ["CTLINVP.CLICK", true] ,"e2412o2_client": ["CTLINVN.CLICK", true] ,"e2512o2_client": ["CTLINVZ.CLICK", true] ,"e2612o2_client": ["CTLSALDOP.CLICK", true] ,"e2712o2_client": ["CTLSALDON.CLICK", true] ,"e2812o2_client": ["CTLSALDOZ.CLICK", true] ,"e1512o2_client": ["'FECHAR'", true] ,"e1612o2_client": ["VSNAGRUPAR.CLICK", true] ,"e3012o2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV36SNRefresh',fld:'vSNREFRESH'},{av:'AV24SNMarcado',fld:'vSNMARCADO'},{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25},{av:'AV23FilialSelec',fld:'vFILIALSELEC'},{av:'AV15SNAgrupar',fld:'vSNAGRUPAR'},{av:'AV21FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV26ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV25ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO',hsh:true},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'}],[{av:'gx.fn.getCtrlProperty("vFILTRARQTDEFILIAL","Visible")',ctrl:'vFILTRARQTDEFILIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFILTRARQTDEFILIAL","Enabled")',ctrl:'vFILTRARQTDEFILIAL',prop:'Enabled'},{av:'AV28SNQtdeSaldo',fld:'vSNQTDESALDO'},{av:'AV29SNValidaInv',fld:'vSNVALIDAINV'},{av:'AV27SNObrQtde',fld:'vSNOBRQTDE'},{ctrl:'CTLATUALP',prop:'Visible'},{ctrl:'CTLATUALZ',prop:'Visible'},{ctrl:'CTLATUALN',prop:'Visible'},{ctrl:'CTLATUALP',prop:'Enabled'},{ctrl:'CTLATUALZ',prop:'Enabled'},{ctrl:'CTLATUALN',prop:'Enabled'},{ctrl:'CTLINVP',prop:'Visible'},{ctrl:'CTLINVZ',prop:'Visible'},{ctrl:'CTLINVN',prop:'Visible'},{ctrl:'CTLINVP',prop:'Enabled'},{ctrl:'CTLINVZ',prop:'Enabled'},{ctrl:'CTLINVN',prop:'Enabled'},{ctrl:'CTLSALDOP',prop:'Visible'},{ctrl:'CTLSALDOZ',prop:'Visible'},{ctrl:'CTLSALDON',prop:'Visible'},{ctrl:'CTLSALDOP',prop:'Enabled'},{ctrl:'CTLSALDOZ',prop:'Enabled'},{ctrl:'CTLSALDON',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'AV20Tela',fld:'vTELA',hsh:true},{av:'AV18SNErro',fld:'vSNERRO'},{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25},{av:'AV15SNAgrupar',fld:'vSNAGRUPAR'},{av:'AV21FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'},{av:'AV25ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO',hsh:true},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV26ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'},{av:'AV28SNQtdeSaldo',fld:'vSNQTDESALDO'},{av:'AV29SNValidaInv',fld:'vSNVALIDAINV'},{av:'AV27SNObrQtde',fld:'vSNOBRQTDE'},{av:'AV30TipoSaldo',fld:'vTIPOSALDO',hsh:true},{av:'AV19SNErroFilial',fld:'vSNERROFILIAL'}],[{av:'AV19SNErroFilial',fld:'vSNERROFILIAL'},{av:'AV18SNErro',fld:'vSNERRO'},{av:'AV22SNQtde',fld:'vSNQTDE'},{av:'AV31QtdeFilial',fld:'vQTDEFILIAL'},{av:'AV57GXLvl187',fld:'vGXLVL187'},{av:'AV28SNQtdeSaldo',fld:'vSNQTDESALDO'},{av:'AV29SNValidaInv',fld:'vSNVALIDAINV'},{av:'AV27SNObrQtde',fld:'vSNOBRQTDE'},{av:'AV59GXV3',fld:'vGXV3'},{av:'AV14SdtFiliaisItem',fld:'vSDTFILIAISITEM'}]];
   this.EvtParms["VFILTRARQTDEFILIAL.CLICK"] = [[{av:'AV21FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV26ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV25ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO',hsh:true},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'}],[{av:'AV28SNQtdeSaldo',fld:'vSNQTDESALDO'},{av:'AV29SNValidaInv',fld:'vSNVALIDAINV'},{av:'AV27SNObrQtde',fld:'vSNOBRQTDE'},{ctrl:'CTLATUALP',prop:'Visible'},{ctrl:'CTLATUALZ',prop:'Visible'},{ctrl:'CTLATUALN',prop:'Visible'},{ctrl:'CTLATUALP',prop:'Enabled'},{ctrl:'CTLATUALZ',prop:'Enabled'},{ctrl:'CTLATUALN',prop:'Enabled'},{ctrl:'CTLINVP',prop:'Visible'},{ctrl:'CTLINVZ',prop:'Visible'},{ctrl:'CTLINVN',prop:'Visible'},{ctrl:'CTLINVP',prop:'Enabled'},{ctrl:'CTLINVZ',prop:'Enabled'},{ctrl:'CTLINVN',prop:'Enabled'},{ctrl:'CTLSALDOP',prop:'Visible'},{ctrl:'CTLSALDOZ',prop:'Visible'},{ctrl:'CTLSALDON',prop:'Visible'},{ctrl:'CTLSALDOP',prop:'Enabled'},{ctrl:'CTLSALDOZ',prop:'Enabled'},{ctrl:'CTLSALDON',prop:'Enabled'}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV15SNAgrupar',fld:'vSNAGRUPAR'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV26ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV25ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO',hsh:true},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'},{av:'AV21FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'},{av:'AV36SNRefresh',fld:'vSNREFRESH'},{av:'AV24SNMarcado',fld:'vSNMARCADO'},{av:'AV23FilialSelec',fld:'vFILIALSELEC'}],[{av:'AV24SNMarcado',fld:'vSNMARCADO'},{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV15SNAgrupar',fld:'vSNAGRUPAR'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV26ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV25ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO',hsh:true},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'},{av:'AV21FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'},{av:'AV36SNRefresh',fld:'vSNREFRESH'},{av:'AV24SNMarcado',fld:'vSNMARCADO'},{av:'AV23FilialSelec',fld:'vFILIALSELEC'}],[{av:'AV24SNMarcado',fld:'vSNMARCADO'},{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25}]];
   this.EvtParms["GRID1.REFRESH"] = [[{av:'AV21FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'},{av:'AV36SNRefresh',fld:'vSNREFRESH'},{av:'AV24SNMarcado',fld:'vSNMARCADO'},{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV15SNAgrupar',fld:'vSNAGRUPAR'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV26ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV25ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO',hsh:true},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'},{av:'AV23FilialSelec',fld:'vFILIALSELEC'}],[{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25},{av:'AV23FilialSelec',fld:'vFILIALSELEC'},{av:'AV36SNRefresh',fld:'vSNREFRESH'},{av:'AV24SNMarcado',fld:'vSNMARCADO'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV15SNAgrupar',fld:'vSNAGRUPAR'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV26ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV25ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO',hsh:true},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'},{av:'AV21FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'}],[{av:'AV36SNRefresh',fld:'vSNREFRESH'},{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25}]];
   this.EvtParms["CTLATUALP.CLICK"] = [[{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25}],[{av:'AV23FilialSelec',fld:'vFILIALSELEC'}]];
   this.EvtParms["CTLATUALN.CLICK"] = [[{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25}],[{av:'AV23FilialSelec',fld:'vFILIALSELEC'}]];
   this.EvtParms["CTLATUALZ.CLICK"] = [[{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25}],[{av:'AV23FilialSelec',fld:'vFILIALSELEC'}]];
   this.EvtParms["CTLINVP.CLICK"] = [[{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25}],[{av:'AV23FilialSelec',fld:'vFILIALSELEC'}]];
   this.EvtParms["CTLINVN.CLICK"] = [[{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25}],[{av:'AV23FilialSelec',fld:'vFILIALSELEC'}]];
   this.EvtParms["CTLINVZ.CLICK"] = [[{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25}],[{av:'AV23FilialSelec',fld:'vFILIALSELEC'}]];
   this.EvtParms["CTLSALDOP.CLICK"] = [[{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25}],[{av:'AV23FilialSelec',fld:'vFILIALSELEC'}]];
   this.EvtParms["CTLSALDON.CLICK"] = [[{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25}],[{av:'AV23FilialSelec',fld:'vFILIALSELEC'}]];
   this.EvtParms["CTLSALDOZ.CLICK"] = [[{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25}],[{av:'AV23FilialSelec',fld:'vFILIALSELEC'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20Tela',fld:'vTELA',hsh:true},{av:'AV18SNErro',fld:'vSNERRO'},{av:'AV13SdtFiliais',fld:'vSDTFILIAIS',grid:25},{av:'AV15SNAgrupar',fld:'vSNAGRUPAR'},{av:'AV21FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'},{av:'AV19SNErroFilial',fld:'vSNERROFILIAL'},{av:'AV25ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO',hsh:true},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV26ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'},{av:'AV28SNQtdeSaldo',fld:'vSNQTDESALDO'},{av:'AV29SNValidaInv',fld:'vSNVALIDAINV'},{av:'AV27SNObrQtde',fld:'vSNOBRQTDE'},{av:'AV30TipoSaldo',fld:'vTIPOSALDO',hsh:true}],[{av:'AV19SNErroFilial',fld:'vSNERROFILIAL'},{av:'AV18SNErro',fld:'vSNERRO'},{av:'AV22SNQtde',fld:'vSNQTDE'},{av:'AV31QtdeFilial',fld:'vQTDEFILIAL'},{av:'AV57GXLvl187',fld:'vGXLVL187'},{av:'AV28SNQtdeSaldo',fld:'vSNQTDESALDO'},{av:'AV29SNValidaInv',fld:'vSNVALIDAINV'},{av:'AV27SNObrQtde',fld:'vSNOBRQTDE'},{av:'AV59GXV3',fld:'vGXV3'},{av:'AV14SdtFiliaisItem',fld:'vSDTFILIAISITEM'}]];
   this.EvtParms["VSNAGRUPAR.CLICK"] = [[{av:'AV15SNAgrupar',fld:'vSNAGRUPAR'},{av:'AV21FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'},{av:'A3227ParametroConsultaEmpresaId',fld:'PARAMETROCONSULTAEMPRESAID'},{av:'AV26ParametroConsultaEmpresaId',fld:'vPARAMETROCONSULTAEMPRESAID'},{av:'A3228ParametroConsultaCodigo',fld:'PARAMETROCONSULTACODIGO'},{av:'AV25ParametroConsultaCodigo',fld:'vPARAMETROCONSULTACODIGO',hsh:true},{av:'A3234ParametroConsultaCampoUsuAlt',fld:'PARAMETROCONSULTACAMPOUSUALT'},{av:'A3230ParametroConsultaCampoCod',fld:'PARAMETROCONSULTACAMPOCOD'}],[{av:'AV21FiltrarQtdeFilial',fld:'vFILTRARQTDEFILIAL'},{av:'gx.fn.getCtrlProperty("vFILTRARQTDEFILIAL","Visible")',ctrl:'vFILTRARQTDEFILIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vFILTRARQTDEFILIAL","Enabled")',ctrl:'vFILTRARQTDEFILIAL',prop:'Enabled'},{av:'AV36SNRefresh',fld:'vSNREFRESH'},{av:'AV28SNQtdeSaldo',fld:'vSNQTDESALDO'},{av:'AV29SNValidaInv',fld:'vSNVALIDAINV'},{av:'AV27SNObrQtde',fld:'vSNOBRQTDE'},{ctrl:'CTLATUALP',prop:'Visible'},{ctrl:'CTLATUALZ',prop:'Visible'},{ctrl:'CTLATUALN',prop:'Visible'},{ctrl:'CTLATUALP',prop:'Enabled'},{ctrl:'CTLATUALZ',prop:'Enabled'},{ctrl:'CTLATUALN',prop:'Enabled'},{ctrl:'CTLINVP',prop:'Visible'},{ctrl:'CTLINVZ',prop:'Visible'},{ctrl:'CTLINVN',prop:'Visible'},{ctrl:'CTLINVP',prop:'Enabled'},{ctrl:'CTLINVZ',prop:'Enabled'},{ctrl:'CTLINVN',prop:'Enabled'},{ctrl:'CTLSALDOP',prop:'Visible'},{ctrl:'CTLSALDOZ',prop:'Visible'},{ctrl:'CTLSALDON',prop:'Visible'},{ctrl:'CTLSALDOP',prop:'Enabled'},{ctrl:'CTLSALDOZ',prop:'Enabled'},{ctrl:'CTLSALDON',prop:'Enabled'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A3227ParametroConsultaEmpresaId", "PARAMETROCONSULTAEMPRESAID", 0, "char");
   this.setVCMap("AV26ParametroConsultaEmpresaId", "vPARAMETROCONSULTAEMPRESAID", 0, "char");
   this.setVCMap("A3228ParametroConsultaCodigo", "PARAMETROCONSULTACODIGO", 0, "int");
   this.setVCMap("AV25ParametroConsultaCodigo", "vPARAMETROCONSULTACODIGO", 0, "int");
   this.setVCMap("A3234ParametroConsultaCampoUsuAlt", "PARAMETROCONSULTACAMPOUSUALT", 0, "char");
   this.setVCMap("A3230ParametroConsultaCampoCod", "PARAMETROCONSULTACAMPOCOD", 0, "char");
   this.setVCMap("AV24SNMarcado", "vSNMARCADO", 0, "char");
   this.setVCMap("AV13SdtFiliais", "vSDTFILIAIS", 0, "CollSdtFiliais.SdtFiliaisItem");
   this.setVCMap("AV23FilialSelec", "vFILIALSELEC", 0, "int");
   this.setVCMap("AV20Tela", "vTELA", 0, "char");
   this.setVCMap("AV30TipoSaldo", "vTIPOSALDO", 0, "char");
   this.setVCMap("AV32SnInventarioLote", "vSNINVENTARIOLOTE", 0, "char");
   this.setVCMap("A3227ParametroConsultaEmpresaId", "PARAMETROCONSULTAEMPRESAID", 0, "char");
   this.setVCMap("AV26ParametroConsultaEmpresaId", "vPARAMETROCONSULTAEMPRESAID", 0, "char");
   this.setVCMap("A3228ParametroConsultaCodigo", "PARAMETROCONSULTACODIGO", 0, "int");
   this.setVCMap("AV25ParametroConsultaCodigo", "vPARAMETROCONSULTACODIGO", 0, "int");
   this.setVCMap("A3234ParametroConsultaCampoUsuAlt", "PARAMETROCONSULTACAMPOUSUALT", 0, "char");
   this.setVCMap("A3230ParametroConsultaCampoCod", "PARAMETROCONSULTACAMPOCOD", 0, "char");
   this.setVCMap("AV24SNMarcado", "vSNMARCADO", 0, "char");
   this.setVCMap("AV13SdtFiliais", "vSDTFILIAIS", 0, "CollSdtFiliais.SdtFiliaisItem");
   this.setVCMap("AV23FilialSelec", "vFILIALSELEC", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar({rfrVar:"A3227ParametroConsultaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV26ParametroConsultaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A3228ParametroConsultaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"AV25ParametroConsultaCodigo"});
   Grid1Container.addRefreshingVar({rfrVar:"A3234ParametroConsultaCampoUsuAlt"});
   Grid1Container.addRefreshingVar({rfrVar:"A3230ParametroConsultaCampoCod"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[18]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[49]);
   Grid1Container.addRefreshingVar({rfrVar:"AV24SNMarcado"});
   Grid1Container.addRefreshingVar({rfrVar:"AV13SdtFiliais"});
   Grid1Container.addRefreshingVar({rfrVar:"AV23FilialSelec"});
   this.addGridBCProperty("Sdtfiliais", ["SNMarcado"], this.GXValidFnc[26], "AV13SdtFiliais");
   this.addGridBCProperty("Sdtfiliais", ["FilialId"], this.GXValidFnc[27], "AV13SdtFiliais");
   this.addGridBCProperty("Sdtfiliais", ["FilialNome"], this.GXValidFnc[28], "AV13SdtFiliais");
   this.addGridBCProperty("Sdtfiliais", ["AtualP"], this.GXValidFnc[29], "AV13SdtFiliais");
   this.addGridBCProperty("Sdtfiliais", ["AtualZ"], this.GXValidFnc[30], "AV13SdtFiliais");
   this.addGridBCProperty("Sdtfiliais", ["AtualN"], this.GXValidFnc[31], "AV13SdtFiliais");
   this.addGridBCProperty("Sdtfiliais", ["InvP"], this.GXValidFnc[32], "AV13SdtFiliais");
   this.addGridBCProperty("Sdtfiliais", ["InvZ"], this.GXValidFnc[33], "AV13SdtFiliais");
   this.addGridBCProperty("Sdtfiliais", ["InvN"], this.GXValidFnc[34], "AV13SdtFiliais");
   this.addGridBCProperty("Sdtfiliais", ["SaldoP"], this.GXValidFnc[35], "AV13SdtFiliais");
   this.addGridBCProperty("Sdtfiliais", ["SaldoZ"], this.GXValidFnc[36], "AV13SdtFiliais");
   this.addGridBCProperty("Sdtfiliais", ["SaldoN"], this.GXValidFnc[37], "AV13SdtFiliais");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalselecionafilial());

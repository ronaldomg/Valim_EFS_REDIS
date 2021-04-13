/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:37.75
*/
gx.evt.autoSkip = false;
gx.define('hcontacontabil', false, function () {
   this.ServerClass =  "hcontacontabil" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV49SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A64ContaContabilTradutor=gx.fn.getIntegerValue("CONTACONTABILTRADUTOR",'.') ;
      this.AV43Cont=gx.fn.getIntegerValue("vCONT",'.') ;
      this.A65ContaContabilSituacao=gx.fn.getControlValue("CONTACONTABILSITUACAO") ;
   };
   this.e161n2_client=function()
   {
      this.executeServerEvent("'CONSULTALOGGERAL'", true, null, false, false);
   };
   this.e111n2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121n2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e211n2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e221n2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e231n2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e241n2_client=function()
   {
      this.executeServerEvent("'CONSULTALOG'", true, arguments[0], false, false);
   };
   this.e171n2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131n2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141n2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151n2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e251n2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e261n2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e271n2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,19,21,23,25,28,30,37,40,43,45,47,49,51,53,56,58,59,63,64,65,66,67,68,69,70,71,72,73,79,80,82,83];
   this.GXLastCtrlId =83;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",62,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcontacontabil",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(62,63,"CONTACONTABILID","","","ContaContabilId","svchar",0,"px",30,30,"left",null,[],62,"ContaContabilId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(63,64,"CONTACONTABILNOME","","","ContaContabilNome","svchar",0,"px",45,45,"left",null,[],63,"ContaContabilNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Contacontabiltradutor",65,"vCONTACONTABILTRADUTOR","Tradutor","","ContaContabilTradutor","char",0,"px",7,7,"left",null,[],"Contacontabiltradutor","ContaContabilTradutor",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(166,66,"CONTACONTABILNATUREZA","","ContaContabilNatureza","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(168,67,"CONTACONTABILTIPOCONTA","","ContaContabilTipoConta","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpsituacao","vBMPSITUACAO",68,0,"px",17,"px",null,"","Situação","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmplog","vBMPLOG",69,0,"px",17,"px","e241n2_client","","Log","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",70,0,"px",17,"px","e211n2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",71,0,"px",17,"px","e221n2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",72,0,"px",17,"px","e231n2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(176,73,"EMPRESACONTACONTABILEMPRESAID","Código Empresa Conta Contabil","","EmpresaContaContabilEmpresaId","char",0,"px",10,10,"left",null,[],176,"EmpresaContaContabilEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE4",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONTACONTABILSITUACAO",gxz:"ZV21ContaContabilSituacao",gxold:"OV21ContaContabilSituacao",gxvar:"AV21ContaContabilSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21ContaContabilSituacao=Value},v2z:function(Value){gx.O.ZV21ContaContabilSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTACONTABILSITUACAO",gx.O.AV21ContaContabilSituacao)},c2v:function(){gx.O.AV21ContaContabilSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILSITUACAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV26ContaContabilId",gxold:"OV26ContaContabilId",gxvar:"AV26ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ContaContabilId=Value},v2z:function(Value){gx.O.ZV26ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV26ContaContabilId,0)},c2v:function(){gx.O.AV26ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORSEL",gxz:"ZV36TradutorSel",gxold:"OV36TradutorSel",gxvar:"AV36TradutorSel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36TradutorSel=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36TradutorSel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTORSEL",gx.O.AV36TradutorSel,0)},c2v:function(){gx.O.AV36TradutorSel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTORSEL",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONTACONTABILNOME",gxz:"ZV27ContaContabilNome",gxold:"OV27ContaContabilNome",gxvar:"AV27ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ContaContabilNome=Value},v2z:function(Value){gx.O.ZV27ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV27ContaContabilNome,0)},c2v:function(){gx.O.AV27ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLE2",grid:0};
   GXValidFnc[40]={fld:"TABLE3",grid:0};
   GXValidFnc[43]={fld:"IMAGE2",grid:0};
   GXValidFnc[45]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[47]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   GXValidFnc[51]={fld:"BTNLOG",grid:0};
   GXValidFnc[53]={fld:"TABLE5",grid:0};
   GXValidFnc[56]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTOTPAG",gxz:"ZV50TotPag",gxold:"OV50TotPag",gxvar:"AV50TotPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50TotPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50TotPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTOTPAG",gx.O.AV50TotPag,0)},c2v:function(){gx.O.AV50TotPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTOTPAG",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILID",gxz:"Z62ContaContabilId",gxold:"O62ContaContabilId",gxvar:"A62ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A62ContaContabilId=Value},v2z:function(Value){gx.O.Z62ContaContabilId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(62),gx.O.A62ContaContabilId,0)},c2v:function(){gx.O.A62ContaContabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILID",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILNOME",gxz:"Z63ContaContabilNome",gxold:"O63ContaContabilNome",gxvar:"A63ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A63ContaContabilNome=Value},v2z:function(Value){gx.O.Z63ContaContabilNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(62),gx.O.A63ContaContabilNome,0)},c2v:function(){gx.O.A63ContaContabilNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILNOME",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:0,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV35ContaContabilTradutor",gxold:"OV35ContaContabilTradutor",gxvar:"AV35ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV35ContaContabilTradutor=Value},v2z:function(Value){gx.O.ZV35ContaContabilTradutor=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(62),gx.O.AV35ContaContabilTradutor,0)},c2v:function(){gx.O.AV35ContaContabilTradutor=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILNATUREZA",gxz:"Z166ContaContabilNatureza",gxold:"O166ContaContabilNatureza",gxvar:"A166ContaContabilNatureza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A166ContaContabilNatureza=Value},v2z:function(Value){gx.O.Z166ContaContabilNatureza=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTACONTABILNATUREZA",row || gx.fn.currentGridRowImpl(62),gx.O.A166ContaContabilNatureza);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A166ContaContabilNatureza=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILNATUREZA",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILTIPOCONTA",gxz:"Z168ContaContabilTipoConta",gxold:"O168ContaContabilTipoConta",gxvar:"A168ContaContabilTipoConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A168ContaContabilTipoConta=Value},v2z:function(Value){gx.O.Z168ContaContabilTipoConta=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTACONTABILTIPOCONTA",row || gx.fn.currentGridRowImpl(62),gx.O.A168ContaContabilTipoConta);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A168ContaContabilTipoConta=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILTIPOCONTA",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSITUACAO",gxz:"ZV23bmpSituacao",gxold:"OV23bmpSituacao",gxvar:"AV23bmpSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23bmpSituacao=Value},v2z:function(Value){gx.O.ZV23bmpSituacao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSITUACAO",row || gx.fn.currentGridRowImpl(62),gx.O.AV23bmpSituacao,gx.O.AV58Bmpsituacao_GXI)},c2v:function(){gx.O.AV58Bmpsituacao_GXI=this.val_GXI();gx.O.AV23bmpSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSITUACAO",row || gx.fn.currentGridRowImpl(62))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSITUACAO_GXI",row || gx.fn.currentGridRowImpl(62))}, gxvar_GXI:'AV58Bmpsituacao_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLOG",gxz:"ZV42bmpLog",gxold:"OV42bmpLog",gxvar:"AV42bmpLog",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV42bmpLog=Value},v2z:function(Value){gx.O.ZV42bmpLog=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLOG",row || gx.fn.currentGridRowImpl(62),gx.O.AV42bmpLog,gx.O.AV59Bmplog_GXI)},c2v:function(){gx.O.AV59Bmplog_GXI=this.val_GXI();gx.O.AV42bmpLog=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLOG",row || gx.fn.currentGridRowImpl(62))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLOG_GXI",row || gx.fn.currentGridRowImpl(62))}, gxvar_GXI:'AV59Bmplog_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(62),gx.O.AV7bmpAlt,gx.O.AV55Bmpalt_GXI)},c2v:function(){gx.O.AV55Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(62))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(62))}, gxvar_GXI:'AV55Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(62),gx.O.AV8bmpExc,gx.O.AV56Bmpexc_GXI)},c2v:function(){gx.O.AV56Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(62))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(62))}, gxvar_GXI:'AV56Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(62),gx.O.AV16bmpCon,gx.O.AV57Bmpcon_GXI)},c2v:function(){gx.O.AV57Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(62))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(62))}, gxvar_GXI:'AV57Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESACONTACONTABILEMPRESAID",gxz:"Z176EmpresaContaContabilEmpresaId",gxold:"O176EmpresaContaContabilEmpresaId",gxvar:"A176EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A176EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.Z176EmpresaContaContabilEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(62),gx.O.A176EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.A176EmpresaContaContabilEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESACONTACONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONTACONTABILIDFILTRO",gxz:"ZV46ContaContabilIdFiltro",gxold:"OV46ContaContabilIdFiltro",gxvar:"AV46ContaContabilIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46ContaContabilIdFiltro=Value},v2z:function(Value){gx.O.ZV46ContaContabilIdFiltro=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDFILTRO",gx.O.AV46ContaContabilIdFiltro,0)},c2v:function(){gx.O.AV46ContaContabilIdFiltro=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDFILTRO")},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV32ChamaOnBlurMascara",gxold:"OV32ChamaOnBlurMascara",gxvar:"AV32ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV32ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV32ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV32ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"JS", format:2,grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV21ContaContabilSituacao = "" ;
   this.ZV21ContaContabilSituacao = "" ;
   this.OV21ContaContabilSituacao = "" ;
   this.AV26ContaContabilId = "" ;
   this.ZV26ContaContabilId = "" ;
   this.OV26ContaContabilId = "" ;
   this.AV36TradutorSel = 0 ;
   this.ZV36TradutorSel = 0 ;
   this.OV36TradutorSel = 0 ;
   this.AV27ContaContabilNome = "" ;
   this.ZV27ContaContabilNome = "" ;
   this.OV27ContaContabilNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV50TotPag = 0 ;
   this.ZV50TotPag = 0 ;
   this.OV50TotPag = 0 ;
   this.Z62ContaContabilId = "" ;
   this.O62ContaContabilId = "" ;
   this.Z63ContaContabilNome = "" ;
   this.O63ContaContabilNome = "" ;
   this.ZV35ContaContabilTradutor = "" ;
   this.OV35ContaContabilTradutor = "" ;
   this.Z166ContaContabilNatureza = "" ;
   this.O166ContaContabilNatureza = "" ;
   this.Z168ContaContabilTipoConta = "" ;
   this.O168ContaContabilTipoConta = "" ;
   this.ZV23bmpSituacao = "" ;
   this.OV23bmpSituacao = "" ;
   this.ZV42bmpLog = "" ;
   this.OV42bmpLog = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z176EmpresaContaContabilEmpresaId = "" ;
   this.O176EmpresaContaContabilEmpresaId = "" ;
   this.AV46ContaContabilIdFiltro = "" ;
   this.ZV46ContaContabilIdFiltro = "" ;
   this.OV46ContaContabilIdFiltro = "" ;
   this.AV32ChamaOnBlurMascara = "" ;
   this.ZV32ChamaOnBlurMascara = "" ;
   this.OV32ChamaOnBlurMascara = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV21ContaContabilSituacao = "" ;
   this.AV26ContaContabilId = "" ;
   this.AV36TradutorSel = 0 ;
   this.AV27ContaContabilNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV50TotPag = 0 ;
   this.AV46ContaContabilIdFiltro = "" ;
   this.AV32ChamaOnBlurMascara = "" ;
   this.AV11OrderedBy = 0 ;
   this.A64ContaContabilTradutor = 0 ;
   this.A165ContaContabilSuperior = "" ;
   this.A65ContaContabilSituacao = "" ;
   this.A62ContaContabilId = "" ;
   this.A63ContaContabilNome = "" ;
   this.AV35ContaContabilTradutor = "" ;
   this.A166ContaContabilNatureza = "" ;
   this.A168ContaContabilTipoConta = "" ;
   this.AV23bmpSituacao = "" ;
   this.AV42bmpLog = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV49SnRecuperaFiltro = "" ;
   this.AV43Cont = 0 ;
   this.Events = {"e161n2_client": ["'CONSULTALOGGERAL'", true] ,"e111n2_client": ["'ANTERIOR'", true] ,"e121n2_client": ["'PROXIMO'", true] ,"e211n2_client": ["'ALTERAR'", true] ,"e221n2_client": ["'EXCLUIR'", true] ,"e231n2_client": ["'CONSULTAR'", true] ,"e241n2_client": ["'CONSULTALOG'", true] ,"e171n2_client": ["VPAGINA.CLICK", true] ,"e131n2_client": ["'NOVO'", true] ,"e141n2_client": ["'FECHAR'", true] ,"e151n2_client": ["'PROCURAR'", true] ,"e251n2_client": ["'ATUALIZAPAGINA'", true] ,"e261n2_client": ["ENTER", true] ,"e271n2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21ContaContabilSituacao',fld:'vCONTACONTABILSITUACAO'},{av:'AV27ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV46ContaContabilIdFiltro',fld:'vCONTACONTABILIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV26ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV36TradutorSel',fld:'vTRADUTORSEL'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'AV43Cont',fld:'vCONT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'}],[]];
   this.EvtParms["'CONSULTALOGGERAL'"] = [[],[{av:'AV48Log',fld:'vLOG'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21ContaContabilSituacao',fld:'vCONTACONTABILSITUACAO'},{av:'AV27ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV46ContaContabilIdFiltro',fld:'vCONTACONTABILIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV26ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV36TradutorSel',fld:'vTRADUTORSEL'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'AV43Cont',fld:'vCONT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'}],[{ctrl:'CONTACONTABILID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTACONTABILID","Title")',ctrl:'CONTACONTABILID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CONTACONTABILNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONTACONTABILNOME","Title")',ctrl:'CONTACONTABILNOME',prop:'Title'},{ctrl:'CONTACONTABILNATUREZA'},{ctrl:'CONTACONTABILTIPOCONTA'},{av:'AV50TotPag',fld:'vTOTPAG'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV28filtros',fld:'vFILTROS'},{av:'AV47PaginaFiltro',fld:'vPAGINAFILTRO'},{av:'AV21ContaContabilSituacao',fld:'vCONTACONTABILSITUACAO'},{av:'AV26ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV46ContaContabilIdFiltro',fld:'vCONTACONTABILIDFILTRO'},{av:'AV27ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV36TradutorSel',fld:'vTRADUTORSEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38ErrDsc',fld:'vERRDSC'},{av:'AV44ContaContabilIdAux',fld:'vCONTACONTABILIDAUX'},{av:'AV43Cont',fld:'vCONT'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21ContaContabilSituacao',fld:'vCONTACONTABILSITUACAO'},{av:'AV27ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV46ContaContabilIdFiltro',fld:'vCONTACONTABILIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV26ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV36TradutorSel',fld:'vTRADUTORSEL'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'AV43Cont',fld:'vCONT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21ContaContabilSituacao',fld:'vCONTACONTABILSITUACAO'},{av:'AV27ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV46ContaContabilIdFiltro',fld:'vCONTACONTABILIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV26ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV36TradutorSel',fld:'vTRADUTORSEL'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'AV43Cont',fld:'vCONT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'},{av:'AV50TotPag',fld:'vTOTPAG'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV37Digito',fld:'vDIGITO'},{av:'AV35ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV23bmpSituacao',fld:'vBMPSITUACAO'},{av:'gx.fn.getCtrlProperty("vBMPSITUACAO","Tooltiptext")',ctrl:'vBMPSITUACAO',prop:'Tooltiptext'},{av:'AV42bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A165ContaContabilSuperior',fld:'CONTACONTABILSUPERIOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV21ContaContabilSituacao',fld:'vCONTACONTABILSITUACAO'},{av:'AV26ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV27ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV36TradutorSel',fld:'vTRADUTORSEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A165ContaContabilSuperior',fld:'CONTACONTABILSUPERIOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A165ContaContabilSuperior',fld:'CONTACONTABILSUPERIOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV21ContaContabilSituacao',fld:'vCONTACONTABILSITUACAO'},{av:'AV26ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV27ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV36TradutorSel',fld:'vTRADUTORSEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A165ContaContabilSuperior',fld:'CONTACONTABILSUPERIOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A165ContaContabilSuperior',fld:'CONTACONTABILSUPERIOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV21ContaContabilSituacao',fld:'vCONTACONTABILSITUACAO'},{av:'AV26ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV27ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV36TradutorSel',fld:'vTRADUTORSEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A165ContaContabilSuperior',fld:'CONTACONTABILSUPERIOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTALOG'"] = [[{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'}],[{av:'AV48Log',fld:'vLOG'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21ContaContabilSituacao',fld:'vCONTACONTABILSITUACAO'},{av:'AV27ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV46ContaContabilIdFiltro',fld:'vCONTACONTABILIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV26ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV36TradutorSel',fld:'vTRADUTORSEL'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'AV43Cont',fld:'vCONT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV21ContaContabilSituacao',fld:'vCONTACONTABILSITUACAO'},{av:'AV26ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV27ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV36TradutorSel',fld:'vTRADUTORSEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21ContaContabilSituacao',fld:'vCONTACONTABILSITUACAO'},{av:'AV27ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV46ContaContabilIdFiltro',fld:'vCONTACONTABILIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV26ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV36TradutorSel',fld:'vTRADUTORSEL'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'AV43Cont',fld:'vCONT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'}],[{av:'AV38ErrDsc',fld:'vERRDSC'},{av:'AV44ContaContabilIdAux',fld:'vCONTACONTABILIDAUX'},{av:'AV43Cont',fld:'vCONT'},{av:'AV46ContaContabilIdFiltro',fld:'vCONTACONTABILIDFILTRO'},{av:'AV26ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV21ContaContabilSituacao',fld:'vCONTACONTABILSITUACAO'},{av:'AV27ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV46ContaContabilIdFiltro',fld:'vCONTACONTABILIDFILTRO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV26ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV36TradutorSel',fld:'vTRADUTORSEL'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'AV43Cont',fld:'vCONT'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV49SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A64ContaContabilTradutor", "CONTACONTABILTRADUTOR", 0, "int");
   this.setVCMap("AV43Cont", "vCONT", 0, "int");
   this.setVCMap("A65ContaContabilSituacao", "CONTACONTABILSITUACAO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV49SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A64ContaContabilTradutor", "CONTACONTABILTRADUTOR", 0, "int");
   this.setVCMap("AV43Cont", "vCONT", 0, "int");
   this.setVCMap("A65ContaContabilSituacao", "CONTACONTABILSITUACAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[83]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV49SnRecuperaFiltro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar({rfrVar:"A62ContaContabilId", rfrProp:"Value", gxAttId:"62"});
   GridContainer.addRefreshingVar({rfrVar:"A176EmpresaContaContabilEmpresaId", rfrProp:"Value", gxAttId:"176"});
   GridContainer.addRefreshingVar({rfrVar:"A64ContaContabilTradutor"});
   GridContainer.addRefreshingVar({rfrVar:"AV43Cont"});
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar({rfrVar:"A65ContaContabilSituacao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcontacontabil());

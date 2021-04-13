/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:46.20
*/
gx.evt.autoSkip = false;
gx.define('hcaixabanco', false, function () {
   this.ServerClass =  "hcaixabanco" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e118m2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e128m2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e218m2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e228m2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e238m2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e178m2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e138m2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e148m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e158m2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e168m2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e248m2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e258m2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e268m2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,70];
   this.GXLastCtrlId =70;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcaixabanco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1015,49,"CAIXABANCOID","","","CaixaBancoId","int",0,"px",5,5,"right",null,[],1015,"CaixaBancoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1017,50,"CAIXABANCODESCRICAO","","","CaixaBancoDescricao","svchar",0,"px",25,25,"left",null,[],1017,"CaixaBancoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1021,51,"CAIXABANCONUMEROCONTA","Número Conta Bancária","","CaixaBancoNumeroConta","svchar",0,"px",15,15,"left",null,[],1021,"CaixaBancoNumeroConta",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Banconome",52,"vBANCONOME","Banco","","BancoNome","svchar",0,"px",25,25,"left",null,[],"Banconome","BancoNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Descsnativo",53,"vDESCSNATIVO","Ativo","","DescSnAtivo","char",0,"px",10,10,"left",null,[],"Descsnativo","DescSnAtivo",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",54,0,"px",17,"px","e218m2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",55,0,"px",17,"px","e228m2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",56,0,"px",17,"px","e238m2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1014,57,"CAIXABANCOEMPRESAID","Empresa","","CaixaBancoEmpresaId","char",0,"px",10,10,"left",null,[],1014,"CaixaBancoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1037,58,"CONTACONTABILCXBCOEMPRESAID","Empresa Conta Contábil","","ContaContabilCxBcoEmpresaId","char",0,"px",10,10,"left",null,[],1037,"ContaContabilCxBcoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1019,59,"CAIXABANCOSNATIVO","Caixa/Banco Ativo","","CaixaBancoSnAtivo","char",0,"px",1,1,"left",null,[],1019,"CaixaBancoSnAtivo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1020,60,"CAIXABANCOSNFLUXO","Apresentar Fluxo de Caixa","","CaixaBancoSnFluxo","char",0,"px",1,1,"left",null,[],1020,"CaixaBancoSnFluxo",false,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(1016,61,"CAIXABANCOTIPO","Tipo Caixa/Banco","CaixaBancoTipo","char",null,0,false,false,0,"px","");
   GridContainer.addSingleLineEdit(950,62,"BANCOEMPRESAID","Empresa","","BancoEmpresaId","char",0,"px",10,10,"left",null,[],950,"BancoEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(947,63,"BANCOID","Código do Banco","","BancoId","int",0,"px",3,3,"right",null,[],947,"BancoId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXABANCOID",gxz:"ZV27CaixaBancoId",gxold:"OV27CaixaBancoId",gxvar:"AV27CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV27CaixaBancoId,0)},c2v:function(){gx.O.AV27CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXABANCODESCRICAO",gxz:"ZV28CaixaBancoDescricao",gxold:"OV28CaixaBancoDescricao",gxvar:"AV28CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV28CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV28CaixaBancoDescricao,0)},c2v:function(){gx.O.AV28CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE8",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOID",gxz:"Z1015CaixaBancoId",gxold:"O1015CaixaBancoId",gxvar:"A1015CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1015CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1015CaixaBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOID",row || gx.fn.currentGridRowImpl(48),gx.O.A1015CaixaBancoId,0)},c2v:function(){gx.O.A1015CaixaBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXABANCOID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCODESCRICAO",gxz:"Z1017CaixaBancoDescricao",gxold:"O1017CaixaBancoDescricao",gxvar:"A1017CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1017CaixaBancoDescricao=Value},v2z:function(Value){gx.O.Z1017CaixaBancoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCODESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A1017CaixaBancoDescricao,0)},c2v:function(){gx.O.A1017CaixaBancoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCODESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCONUMEROCONTA",gxz:"Z1021CaixaBancoNumeroConta",gxold:"O1021CaixaBancoNumeroConta",gxvar:"A1021CaixaBancoNumeroConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1021CaixaBancoNumeroConta=Value},v2z:function(Value){gx.O.Z1021CaixaBancoNumeroConta=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCONUMEROCONTA",row || gx.fn.currentGridRowImpl(48),gx.O.A1021CaixaBancoNumeroConta,0)},c2v:function(){gx.O.A1021CaixaBancoNumeroConta=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCONUMEROCONTA",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBANCONOME",gxz:"ZV30BancoNome",gxold:"OV30BancoNome",gxvar:"AV30BancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30BancoNome=Value},v2z:function(Value){gx.O.ZV30BancoNome=Value},v2c:function(row){gx.fn.setGridControlValue("vBANCONOME",row || gx.fn.currentGridRowImpl(48),gx.O.AV30BancoNome,0)},c2v:function(){gx.O.AV30BancoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("vBANCONOME",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCSNATIVO",gxz:"ZV29DescSnAtivo",gxold:"OV29DescSnAtivo",gxvar:"AV29DescSnAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29DescSnAtivo=Value},v2z:function(Value){gx.O.ZV29DescSnAtivo=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCSNATIVO",row || gx.fn.currentGridRowImpl(48),gx.O.AV29DescSnAtivo,0)},c2v:function(){gx.O.AV29DescSnAtivo=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCSNATIVO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOEMPRESAID",gxz:"Z1014CaixaBancoEmpresaId",gxold:"O1014CaixaBancoEmpresaId",gxvar:"A1014CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1014CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.Z1014CaixaBancoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOEMPRESAID",row || gx.fn.currentGridRowImpl(48),gx.O.A1014CaixaBancoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1014CaixaBancoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCOEMPRESAID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONTACONTABILCXBCOEMPRESAID",gxz:"Z1037ContaContabilCxBcoEmpresaId",gxold:"O1037ContaContabilCxBcoEmpresaId",gxvar:"A1037ContaContabilCxBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1037ContaContabilCxBcoEmpresaId=Value},v2z:function(Value){gx.O.Z1037ContaContabilCxBcoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTACONTABILCXBCOEMPRESAID",row || gx.fn.currentGridRowImpl(48),gx.O.A1037ContaContabilCxBcoEmpresaId,0)},c2v:function(){gx.O.A1037ContaContabilCxBcoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTACONTABILCXBCOEMPRESAID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOSNATIVO",gxz:"Z1019CaixaBancoSnAtivo",gxold:"O1019CaixaBancoSnAtivo",gxvar:"A1019CaixaBancoSnAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1019CaixaBancoSnAtivo=Value},v2z:function(Value){gx.O.Z1019CaixaBancoSnAtivo=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOSNATIVO",row || gx.fn.currentGridRowImpl(48),gx.O.A1019CaixaBancoSnAtivo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1019CaixaBancoSnAtivo=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCOSNATIVO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOSNFLUXO",gxz:"Z1020CaixaBancoSnFluxo",gxold:"O1020CaixaBancoSnFluxo",gxvar:"A1020CaixaBancoSnFluxo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1020CaixaBancoSnFluxo=Value},v2z:function(Value){gx.O.Z1020CaixaBancoSnFluxo=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXABANCOSNFLUXO",row || gx.fn.currentGridRowImpl(48),gx.O.A1020CaixaBancoSnFluxo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1020CaixaBancoSnFluxo=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCOSNFLUXO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXABANCOTIPO",gxz:"Z1016CaixaBancoTipo",gxold:"O1016CaixaBancoTipo",gxvar:"A1016CaixaBancoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1016CaixaBancoTipo=Value},v2z:function(Value){gx.O.Z1016CaixaBancoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CAIXABANCOTIPO",row || gx.fn.currentGridRowImpl(48),gx.O.A1016CaixaBancoTipo)},c2v:function(){gx.O.A1016CaixaBancoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXABANCOTIPO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BANCOEMPRESAID",gxz:"Z950BancoEmpresaId",gxold:"O950BancoEmpresaId",gxvar:"A950BancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A950BancoEmpresaId=Value},v2z:function(Value){gx.O.Z950BancoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("BANCOEMPRESAID",row || gx.fn.currentGridRowImpl(48),gx.O.A950BancoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A950BancoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("BANCOEMPRESAID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BANCOID",gxz:"Z947BancoId",gxold:"O947BancoId",gxvar:"A947BancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A947BancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z947BancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOID",row || gx.fn.currentGridRowImpl(48),gx.O.A947BancoId,0)},c2v:function(){gx.O.A947BancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27CaixaBancoId = 0 ;
   this.ZV27CaixaBancoId = 0 ;
   this.OV27CaixaBancoId = 0 ;
   this.AV28CaixaBancoDescricao = "" ;
   this.ZV28CaixaBancoDescricao = "" ;
   this.OV28CaixaBancoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1015CaixaBancoId = 0 ;
   this.O1015CaixaBancoId = 0 ;
   this.Z1017CaixaBancoDescricao = "" ;
   this.O1017CaixaBancoDescricao = "" ;
   this.Z1021CaixaBancoNumeroConta = "" ;
   this.O1021CaixaBancoNumeroConta = "" ;
   this.ZV30BancoNome = "" ;
   this.OV30BancoNome = "" ;
   this.ZV29DescSnAtivo = "" ;
   this.OV29DescSnAtivo = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1014CaixaBancoEmpresaId = "" ;
   this.O1014CaixaBancoEmpresaId = "" ;
   this.Z1037ContaContabilCxBcoEmpresaId = "" ;
   this.O1037ContaContabilCxBcoEmpresaId = "" ;
   this.Z1019CaixaBancoSnAtivo = "" ;
   this.O1019CaixaBancoSnAtivo = "" ;
   this.Z1020CaixaBancoSnFluxo = "" ;
   this.O1020CaixaBancoSnFluxo = "" ;
   this.Z1016CaixaBancoTipo = "" ;
   this.O1016CaixaBancoTipo = "" ;
   this.Z950BancoEmpresaId = "" ;
   this.O950BancoEmpresaId = "" ;
   this.Z947BancoId = 0 ;
   this.O947BancoId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27CaixaBancoId = 0 ;
   this.AV28CaixaBancoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A1015CaixaBancoId = 0 ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A1021CaixaBancoNumeroConta = "" ;
   this.AV30BancoNome = "" ;
   this.AV29DescSnAtivo = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1037ContaContabilCxBcoEmpresaId = "" ;
   this.A1019CaixaBancoSnAtivo = "" ;
   this.A1020CaixaBancoSnFluxo = "" ;
   this.A1016CaixaBancoTipo = "" ;
   this.A950BancoEmpresaId = "" ;
   this.A947BancoId = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.Events = {"e118m2_client": ["'ANTERIOR'", true] ,"e128m2_client": ["'PROXIMO'", true] ,"e218m2_client": ["'ALTERAR'", true] ,"e228m2_client": ["'EXCLUIR'", true] ,"e238m2_client": ["'CONSULTAR'", true] ,"e178m2_client": ["VPAGINA.CLICK", true] ,"e138m2_client": ["'NOVO'", true] ,"e148m2_client": ["'FECHAR'", true] ,"e158m2_client": ["'IMPRIMIR'", true] ,"e168m2_client": ["'PROCURAR'", true] ,"e248m2_client": ["'ATUALIZAPAGINA'", true] ,"e258m2_client": ["ENTER", true] ,"e268m2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV28CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'},{av:'A947BancoId',fld:'BANCOID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV28CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'},{av:'A947BancoId',fld:'BANCOID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'}],[{ctrl:'CAIXABANCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXABANCOID","Title")',ctrl:'CAIXABANCOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CAIXABANCODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CAIXABANCODESCRICAO","Title")',ctrl:'CAIXABANCODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV28CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV28CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'},{av:'A947BancoId',fld:'BANCOID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV28CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'},{av:'A947BancoId',fld:'BANCOID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'},{av:'A947BancoId',fld:'BANCOID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Link")',ctrl:'vBMPALT',prop:'Link'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Link")',ctrl:'vBMPEXC',prop:'Link'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:'vBMPCON',prop:'Link'},{av:'AV29DescSnAtivo',fld:'vDESCSNATIVO'},{av:'AV30BancoNome',fld:'vBANCONOME'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV28CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV28CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV28CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV28CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'},{av:'A947BancoId',fld:'BANCOID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV36Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV32QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV28CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'},{av:'A947BancoId',fld:'BANCOID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV28CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'},{av:'A947BancoId',fld:'BANCOID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1015CaixaBancoId", rfrProp:"Value", gxAttId:"1015"});
   GridContainer.addRefreshingVar({rfrVar:"A1019CaixaBancoSnAtivo", rfrProp:"Value", gxAttId:"1019"});
   GridContainer.addRefreshingVar({rfrVar:"A947BancoId", rfrProp:"Value", gxAttId:"947"});
   GridContainer.addRefreshingVar({rfrVar:"A950BancoEmpresaId", rfrProp:"Value", gxAttId:"950"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcaixabanco());

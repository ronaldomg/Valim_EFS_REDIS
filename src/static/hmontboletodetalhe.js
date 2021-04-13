/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:44:7.71
*/
gx.evt.autoSkip = false;
gx.define('hmontboletodetalhe', false, function () {
   this.ServerClass =  "hmontboletodetalhe" ;
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
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11j72_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12j72_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16j72_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13j72_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14j72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15j72_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19j72_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20j72_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21j72_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22j72_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e23j72_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e24j72_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26j72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27j72_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,18,20,25,28,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,57,58,59,60,61,62,69];
   this.GXLastCtrlId =69;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmontboletodetalhe",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2832,49,"MONTBOLETODETALHEORDEM","","","MontBoletoDetalheOrdem","int",0,"px",4,4,"right",null,[],2832,"MontBoletoDetalheOrdem",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(2833,50,"MONTBOLETODETALHETIPOCAMPO","","MontBoletoDetalheTipoCampo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2834,51,"MONTBOLETODETALHECAMPOFIXO","Campo Fixo","","MontBoletoDetalheCampoFixo","svchar",0,"px",20,20,"left",null,[],2834,"MontBoletoDetalheCampoFixo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2835,52,"MONTBOLETODETALHETABELA","Tabela","MontBoletoDetalheTabela","svchar",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2836,53,"MONTBOLETODETALHECAMPOTABELA","Campo","","MontBoletoDetalheCampoTabela","svchar",0,"px",20,20,"left",null,[],2836,"MontBoletoDetalheCampoTabela",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2837,54,"MONTBOLETODETALHECAMPOPOSINI","Posição Inicial","","MontBoletoDetalheCampoPosIni","int",0,"px",4,4,"right",null,[],2837,"MontBoletoDetalheCampoPosIni",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2838,55,"MONTBOLETODETALHECAMPOPOSFIN","Posição Final","","MontBoletoDetalheCampoPosFin","int",0,"px",4,4,"right",null,[],2838,"MontBoletoDetalheCampoPosFin",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2820,56,"MONTBARRASBOLETOID","Código da Montagem","","MontBarrasBoletoId","int",0,"px",4,4,"right",null,[],2820,"MontBarrasBoletoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2831,57,"MONTBOLETODETALHEMONTAGEM","Tipo da Montagem","","MontBoletoDetalheMontagem","char",0,"px",1,1,"left",null,[],2831,"MontBoletoDetalheMontagem",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",58,0,"px",17,"px","e19j72_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",59,0,"px",17,"px","e20j72_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",60,0,"px",17,"px","e21j72_client","","Consultar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpsobe","vBMPSOBE",61,0,"px",17,"px","e22j72_client","","Sobe","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdesc","vBMPDESC",62,0,"px",17,"px","e23j72_client","","Desce","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMONTBARRASBOLETOID",gxz:"ZV28MontBarrasBoletoId",gxold:"OV28MontBarrasBoletoId",gxvar:"AV28MontBarrasBoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28MontBarrasBoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28MontBarrasBoletoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMONTBARRASBOLETOID",gx.O.AV28MontBarrasBoletoId,0)},c2v:function(){gx.O.AV28MontBarrasBoletoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMONTBARRASBOLETOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMONTBARRASBOLETOTIPO",gxz:"ZV30MontBarrasBoletoTipo",gxold:"OV30MontBarrasBoletoTipo",gxvar:"AV30MontBarrasBoletoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30MontBarrasBoletoTipo=Value},v2z:function(Value){gx.O.ZV30MontBarrasBoletoTipo=Value},v2c:function(){gx.fn.setControlValue("vMONTBARRASBOLETOTIPO",gx.O.AV30MontBarrasBoletoTipo,0)},c2v:function(){gx.O.AV30MontBarrasBoletoTipo=this.val()},val:function(){return gx.fn.getControlValue("vMONTBARRASBOLETOTIPO")},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMONTBOLETODETALHEMONTAGEM",gxz:"ZV27MontBoletoDetalheMontagem",gxold:"OV27MontBoletoDetalheMontagem",gxvar:"AV27MontBoletoDetalheMontagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27MontBoletoDetalheMontagem=Value},v2z:function(Value){gx.O.ZV27MontBoletoDetalheMontagem=Value},v2c:function(){gx.fn.setComboBoxValue("vMONTBOLETODETALHEMONTAGEM",gx.O.AV27MontBoletoDetalheMontagem)},c2v:function(){gx.O.AV27MontBoletoDetalheMontagem=this.val()},val:function(){return gx.fn.getControlValue("vMONTBOLETODETALHEMONTAGEM")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TABLE4",grid:0};
   GXValidFnc[28]={fld:"TABLE8",grid:0};
   GXValidFnc[31]={fld:"IMAGE2",grid:0};
   GXValidFnc[33]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[35]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHEORDEM",gxz:"Z2832MontBoletoDetalheOrdem",gxold:"O2832MontBoletoDetalheOrdem",gxvar:"A2832MontBoletoDetalheOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2832MontBoletoDetalheOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2832MontBoletoDetalheOrdem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBOLETODETALHEORDEM",row || gx.fn.currentGridRowImpl(48),gx.O.A2832MontBoletoDetalheOrdem,0)},c2v:function(){gx.O.A2832MontBoletoDetalheOrdem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MONTBOLETODETALHEORDEM",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHETIPOCAMPO",gxz:"Z2833MontBoletoDetalheTipoCampo",gxold:"O2833MontBoletoDetalheTipoCampo",gxvar:"A2833MontBoletoDetalheTipoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2833MontBoletoDetalheTipoCampo=Value},v2z:function(Value){gx.O.Z2833MontBoletoDetalheTipoCampo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MONTBOLETODETALHETIPOCAMPO",row || gx.fn.currentGridRowImpl(48),gx.O.A2833MontBoletoDetalheTipoCampo)},c2v:function(){gx.O.A2833MontBoletoDetalheTipoCampo=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBOLETODETALHETIPOCAMPO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHECAMPOFIXO",gxz:"Z2834MontBoletoDetalheCampoFixo",gxold:"O2834MontBoletoDetalheCampoFixo",gxvar:"A2834MontBoletoDetalheCampoFixo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2834MontBoletoDetalheCampoFixo=Value},v2z:function(Value){gx.O.Z2834MontBoletoDetalheCampoFixo=Value},v2c:function(row){gx.fn.setGridControlValue("MONTBOLETODETALHECAMPOFIXO",row || gx.fn.currentGridRowImpl(48),gx.O.A2834MontBoletoDetalheCampoFixo,0)},c2v:function(){gx.O.A2834MontBoletoDetalheCampoFixo=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBOLETODETALHECAMPOFIXO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHETABELA",gxz:"Z2835MontBoletoDetalheTabela",gxold:"O2835MontBoletoDetalheTabela",gxvar:"A2835MontBoletoDetalheTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2835MontBoletoDetalheTabela=Value},v2z:function(Value){gx.O.Z2835MontBoletoDetalheTabela=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MONTBOLETODETALHETABELA",row || gx.fn.currentGridRowImpl(48),gx.O.A2835MontBoletoDetalheTabela)},c2v:function(){gx.O.A2835MontBoletoDetalheTabela=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBOLETODETALHETABELA",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHECAMPOTABELA",gxz:"Z2836MontBoletoDetalheCampoTabela",gxold:"O2836MontBoletoDetalheCampoTabela",gxvar:"A2836MontBoletoDetalheCampoTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2836MontBoletoDetalheCampoTabela=Value},v2z:function(Value){gx.O.Z2836MontBoletoDetalheCampoTabela=Value},v2c:function(row){gx.fn.setGridControlValue("MONTBOLETODETALHECAMPOTABELA",row || gx.fn.currentGridRowImpl(48),gx.O.A2836MontBoletoDetalheCampoTabela,0)},c2v:function(){gx.O.A2836MontBoletoDetalheCampoTabela=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBOLETODETALHECAMPOTABELA",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHECAMPOPOSINI",gxz:"Z2837MontBoletoDetalheCampoPosIni",gxold:"O2837MontBoletoDetalheCampoPosIni",gxvar:"A2837MontBoletoDetalheCampoPosIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2837MontBoletoDetalheCampoPosIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2837MontBoletoDetalheCampoPosIni=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBOLETODETALHECAMPOPOSINI",row || gx.fn.currentGridRowImpl(48),gx.O.A2837MontBoletoDetalheCampoPosIni,0)},c2v:function(){gx.O.A2837MontBoletoDetalheCampoPosIni=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MONTBOLETODETALHECAMPOPOSINI",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHECAMPOPOSFIN",gxz:"Z2838MontBoletoDetalheCampoPosFin",gxold:"O2838MontBoletoDetalheCampoPosFin",gxvar:"A2838MontBoletoDetalheCampoPosFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2838MontBoletoDetalheCampoPosFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2838MontBoletoDetalheCampoPosFin=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBOLETODETALHECAMPOPOSFIN",row || gx.fn.currentGridRowImpl(48),gx.O.A2838MontBoletoDetalheCampoPosFin,0)},c2v:function(){gx.O.A2838MontBoletoDetalheCampoPosFin=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MONTBOLETODETALHECAMPOPOSFIN",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOID",gxz:"Z2820MontBarrasBoletoId",gxold:"O2820MontBarrasBoletoId",gxvar:"A2820MontBarrasBoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2820MontBarrasBoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2820MontBarrasBoletoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MONTBARRASBOLETOID",row || gx.fn.currentGridRowImpl(48),gx.O.A2820MontBarrasBoletoId,0)},c2v:function(){gx.O.A2820MontBarrasBoletoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MONTBARRASBOLETOID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MONTBOLETODETALHEMONTAGEM",gxz:"Z2831MontBoletoDetalheMontagem",gxold:"O2831MontBoletoDetalheMontagem",gxvar:"A2831MontBoletoDetalheMontagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2831MontBoletoDetalheMontagem=Value},v2z:function(Value){gx.O.Z2831MontBoletoDetalheMontagem=Value},v2c:function(row){gx.fn.setGridControlValue("MONTBOLETODETALHEMONTAGEM",row || gx.fn.currentGridRowImpl(48),gx.O.A2831MontBoletoDetalheMontagem,0)},c2v:function(){gx.O.A2831MontBoletoDetalheMontagem=this.val()},val:function(row){return gx.fn.getGridControlValue("MONTBOLETODETALHEMONTAGEM",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV38Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSOBE",gxz:"ZV31bmpSobe",gxold:"OV31bmpSobe",gxvar:"AV31bmpSobe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpSobe=Value},v2z:function(Value){gx.O.ZV31bmpSobe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(48),gx.O.AV31bmpSobe,gx.O.AV41Bmpsobe_GXI)},c2v:function(){gx.O.AV41Bmpsobe_GXI=this.val_GXI();gx.O.AV31bmpSobe=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSOBE",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSOBE_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV41Bmpsobe_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESC",gxz:"ZV32bmpDesc",gxold:"OV32bmpDesc",gxvar:"AV32bmpDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32bmpDesc=Value},v2z:function(Value){gx.O.ZV32bmpDesc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESC",row || gx.fn.currentGridRowImpl(48),gx.O.AV32bmpDesc,gx.O.AV42Bmpdesc_GXI)},c2v:function(){gx.O.AV42Bmpdesc_GXI=this.val_GXI();gx.O.AV32bmpDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV42Bmpdesc_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV28MontBarrasBoletoId = 0 ;
   this.ZV28MontBarrasBoletoId = 0 ;
   this.OV28MontBarrasBoletoId = 0 ;
   this.AV30MontBarrasBoletoTipo = "" ;
   this.ZV30MontBarrasBoletoTipo = "" ;
   this.OV30MontBarrasBoletoTipo = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV27MontBoletoDetalheMontagem = "" ;
   this.ZV27MontBoletoDetalheMontagem = "" ;
   this.OV27MontBoletoDetalheMontagem = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2832MontBoletoDetalheOrdem = 0 ;
   this.O2832MontBoletoDetalheOrdem = 0 ;
   this.Z2833MontBoletoDetalheTipoCampo = "" ;
   this.O2833MontBoletoDetalheTipoCampo = "" ;
   this.Z2834MontBoletoDetalheCampoFixo = "" ;
   this.O2834MontBoletoDetalheCampoFixo = "" ;
   this.Z2835MontBoletoDetalheTabela = "" ;
   this.O2835MontBoletoDetalheTabela = "" ;
   this.Z2836MontBoletoDetalheCampoTabela = "" ;
   this.O2836MontBoletoDetalheCampoTabela = "" ;
   this.Z2837MontBoletoDetalheCampoPosIni = 0 ;
   this.O2837MontBoletoDetalheCampoPosIni = 0 ;
   this.Z2838MontBoletoDetalheCampoPosFin = 0 ;
   this.O2838MontBoletoDetalheCampoPosFin = 0 ;
   this.Z2820MontBarrasBoletoId = 0 ;
   this.O2820MontBarrasBoletoId = 0 ;
   this.Z2831MontBoletoDetalheMontagem = "" ;
   this.O2831MontBoletoDetalheMontagem = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.ZV31bmpSobe = "" ;
   this.OV31bmpSobe = "" ;
   this.ZV32bmpDesc = "" ;
   this.OV32bmpDesc = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV28MontBarrasBoletoId = 0 ;
   this.AV30MontBarrasBoletoTipo = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV27MontBoletoDetalheMontagem = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2819MontBarrasBoletoEmpresaId = "" ;
   this.A2832MontBoletoDetalheOrdem = 0 ;
   this.A2833MontBoletoDetalheTipoCampo = "" ;
   this.A2834MontBoletoDetalheCampoFixo = "" ;
   this.A2835MontBoletoDetalheTabela = "" ;
   this.A2836MontBoletoDetalheCampoTabela = "" ;
   this.A2837MontBoletoDetalheCampoPosIni = 0 ;
   this.A2838MontBoletoDetalheCampoPosFin = 0 ;
   this.A2820MontBarrasBoletoId = 0 ;
   this.A2831MontBoletoDetalheMontagem = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV31bmpSobe = "" ;
   this.AV32bmpDesc = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.Events = {"e11j72_client": ["'ANTERIOR'", true] ,"e12j72_client": ["'PROXIMO'", true] ,"e16j72_client": ["VPAGINA.CLICK", true] ,"e13j72_client": ["'NOVO'", true] ,"e14j72_client": ["'FECHAR'", true] ,"e15j72_client": ["'PROCURAR'", true] ,"e19j72_client": ["'ALTERAR'", true] ,"e20j72_client": ["'EXCLUIR'", true] ,"e21j72_client": ["'CONSULTAR'", true] ,"e22j72_client": ["'SUBIR'", true] ,"e23j72_client": ["'DESCER'", true] ,"e24j72_client": ["'ATUALIZAPAGINA'", true] ,"e26j72_client": ["ENTER", true] ,"e27j72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV32bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV32bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'}],[{ctrl:'MONTBOLETODETALHEORDEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MONTBOLETODETALHEORDEM","Title")',ctrl:'MONTBOLETODETALHEORDEM',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MONTBOLETODETALHETIPOCAMPO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{ctrl:'vMONTBOLETODETALHEMONTAGEM'},{ctrl:'BUTTON2',prop:'Visible'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV32bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV32bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV32bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV32bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'A2831MontBoletoDetalheMontagem',fld:'MONTBOLETODETALHEMONTAGEM'},{av:'A2832MontBoletoDetalheOrdem',fld:'MONTBOLETODETALHEORDEM'},{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'A2832MontBoletoDetalheOrdem',fld:'MONTBOLETODETALHEORDEM'},{av:'A2831MontBoletoDetalheMontagem',fld:'MONTBOLETODETALHEMONTAGEM'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'A2831MontBoletoDetalheMontagem',fld:'MONTBOLETODETALHEMONTAGEM'},{av:'A2832MontBoletoDetalheOrdem',fld:'MONTBOLETODETALHEORDEM'},{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'A2832MontBoletoDetalheOrdem',fld:'MONTBOLETODETALHEORDEM'},{av:'A2831MontBoletoDetalheMontagem',fld:'MONTBOLETODETALHEMONTAGEM'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'A2831MontBoletoDetalheMontagem',fld:'MONTBOLETODETALHEMONTAGEM'},{av:'A2832MontBoletoDetalheOrdem',fld:'MONTBOLETODETALHEORDEM'},{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'},{av:'A2832MontBoletoDetalheOrdem',fld:'MONTBOLETODETALHEORDEM'},{av:'A2831MontBoletoDetalheMontagem',fld:'MONTBOLETODETALHEMONTAGEM'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SUBIR'"] = [[{av:'A2832MontBoletoDetalheOrdem',fld:'MONTBOLETODETALHEORDEM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'}],[]];
   this.EvtParms["'DESCER'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'A2832MontBoletoDetalheOrdem',fld:'MONTBOLETODETALHEORDEM'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27MontBoletoDetalheMontagem',fld:'vMONTBOLETODETALHEMONTAGEM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpSobe',fld:'vBMPSOBE'},{av:'gx.fn.getCtrlProperty("vBMPSOBE","Tooltiptext")',ctrl:'vBMPSOBE',prop:'Tooltiptext'},{av:'AV32bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV30MontBarrasBoletoTipo',fld:'vMONTBARRASBOLETOTIPO'}],[]];
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[15]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpSobe", rfrProp:"Value", gxAttId:"Bmpsobe"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpSobe", rfrProp:"Tooltiptext", gxAttId:"Bmpsobe"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpDesc", rfrProp:"Value", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV32bmpDesc", rfrProp:"Tooltiptext", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[14]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmontboletodetalhe());

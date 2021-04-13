/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:49:44.29
*/
gx.evt.autoSkip = false;
gx.define('hmanutencao', false, function () {
   this.ServerClass =  "hmanutencao" ;
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
      this.AV27ManutencaoEmpresaId=gx.fn.getControlValue("vMANUTENCAOEMPRESAID") ;
      this.AV38SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV42Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.s132_client=function()
   {
      if ( this.AV11OrderedBy == 1 || this.AV11OrderedBy == 2 )
      {
         this.AV37DescricaoOrdenacao =  "CÓDIGO"  ;
      }
      if ( this.AV11OrderedBy == 3 || this.AV11OrderedBy == 4 )
      {
         this.AV37DescricaoOrdenacao =  "QUANTIDADE DE MÓDULOS"  ;
      }
      if ( this.AV11OrderedBy == 5 || this.AV11OrderedBy == 6 )
      {
         this.AV37DescricaoOrdenacao =  "PERIODICIDADE"  ;
      }
      if ( this.AV11OrderedBy == 7 || this.AV11OrderedBy == 8 )
      {
         this.AV37DescricaoOrdenacao =  "FATOR"  ;
      }
      if ( this.AV11OrderedBy == 9 || this.AV11OrderedBy == 10 )
      {
         this.AV37DescricaoOrdenacao =  "BÔNUS"  ;
      }
      if ( this.AV11OrderedBy == 11 || this.AV11OrderedBy == 12 )
      {
         this.AV37DescricaoOrdenacao =  "VALOR"  ;
      }
   };
   this.e111452_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121452_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e171452_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131452_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141452_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151452_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e161452_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201452_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e211452_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e221452_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e231452_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e251452_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e261452_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,19,21,23,25,28,30,32,34,39,42,45,47,49,51,53,55,58,60,61,65,66,67,68,69,70,71,72,73,76];
   this.GXLastCtrlId =76;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",64,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmanutencao",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8289,65,"MANUTENCAOID","","","ManutencaoId","int",0,"px",6,6,"right",null,[],8289,"ManutencaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8282,66,"MANUTENCAOQUANTIDADEMODULO","","","ManutencaoQuantidadeModulo","int",0,"px",6,6,"right",null,[],8282,"ManutencaoQuantidadeModulo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8283,67,"MANUTENCAOPERIODICIDADE","","","ManutencaoPeriodicidade","svchar",0,"px",40,40,"left",null,[],8283,"ManutencaoPeriodicidade",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(8285,68,"MANUTENCAOFATORSALARIOMINIMO","","ManutencaoFatorSalarioMinimo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(8286,69,"MANUTENCAOBONUS","","","ManutencaoBonus","int",0,"px",6,6,"right",null,[],8286,"ManutencaoBonus",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8284,70,"MANUTENCAOVALOR","","","ManutencaoValor","decimal",0,"px",22,22,"right",null,[],8284,"ManutencaoValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",71,0,"px",17,"px","e201452_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",72,0,"px",17,"px","e211452_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",73,0,"px",17,"px","e221452_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCODIGOMANUTENCAO",gxz:"ZV34CodigoManutencao",gxold:"OV34CodigoManutencao",gxvar:"AV34CodigoManutencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34CodigoManutencao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34CodigoManutencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOMANUTENCAO",gx.O.AV34CodigoManutencao,0)},c2v:function(){gx.O.AV34CodigoManutencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOMANUTENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[19]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMANUTENCAOQUANTIDADEMODULO",gxz:"ZV29ManutencaoQuantidadeModulo",gxold:"OV29ManutencaoQuantidadeModulo",gxvar:"AV29ManutencaoQuantidadeModulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ManutencaoQuantidadeModulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ManutencaoQuantidadeModulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANUTENCAOQUANTIDADEMODULO",gx.O.AV29ManutencaoQuantidadeModulo,0)},c2v:function(){gx.O.AV29ManutencaoQuantidadeModulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANUTENCAOQUANTIDADEMODULO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMANUTENCAOFATORSALARIOMINIMO",gxz:"ZV35ManutencaoFatorSalarioMinimo",gxold:"OV35ManutencaoFatorSalarioMinimo",gxvar:"AV35ManutencaoFatorSalarioMinimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV35ManutencaoFatorSalarioMinimo=Value},v2z:function(Value){gx.O.ZV35ManutencaoFatorSalarioMinimo=Value},v2c:function(){gx.fn.setComboBoxValue("vMANUTENCAOFATORSALARIOMINIMO",gx.O.AV35ManutencaoFatorSalarioMinimo)},c2v:function(){gx.O.AV35ManutencaoFatorSalarioMinimo=this.val()},val:function(){return gx.fn.getControlValue("vMANUTENCAOFATORSALARIOMINIMO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMANUTENCAOBONUS",gxz:"ZV30ManutencaoBonus",gxold:"OV30ManutencaoBonus",gxvar:"AV30ManutencaoBonus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ManutencaoBonus=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30ManutencaoBonus=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANUTENCAOBONUS",gx.O.AV30ManutencaoBonus,0)},c2v:function(){gx.O.AV30ManutencaoBonus=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANUTENCAOBONUS",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMANUTENCAOVALOR",gxz:"ZV33ManutencaoValor",gxold:"OV33ManutencaoValor",gxvar:"AV33ManutencaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ManutencaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV33ManutencaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vMANUTENCAOVALOR",gx.O.AV33ManutencaoValor,2,',')},c2v:function(){gx.O.AV33ManutencaoValor=this.val()},val:function(){return gx.fn.getDecimalValue("vMANUTENCAOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE4",grid:0};
   GXValidFnc[42]={fld:"TABLE6",grid:0};
   GXValidFnc[45]={fld:"IMAGE2",grid:0};
   GXValidFnc[47]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[49]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[51]={fld:"IMAGE1",grid:0};
   GXValidFnc[53]={fld:"BTNHELP",grid:0};
   GXValidFnc[55]={fld:"TABLE5",grid:0};
   GXValidFnc[58]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAOID",gxz:"Z8289ManutencaoId",gxold:"O8289ManutencaoId",gxvar:"A8289ManutencaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8289ManutencaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8289ManutencaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MANUTENCAOID",row || gx.fn.currentGridRowImpl(64),gx.O.A8289ManutencaoId,0)},c2v:function(){gx.O.A8289ManutencaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MANUTENCAOID",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAOQUANTIDADEMODULO",gxz:"Z8282ManutencaoQuantidadeModulo",gxold:"O8282ManutencaoQuantidadeModulo",gxvar:"A8282ManutencaoQuantidadeModulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8282ManutencaoQuantidadeModulo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8282ManutencaoQuantidadeModulo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MANUTENCAOQUANTIDADEMODULO",row || gx.fn.currentGridRowImpl(64),gx.O.A8282ManutencaoQuantidadeModulo,0)},c2v:function(){gx.O.A8282ManutencaoQuantidadeModulo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MANUTENCAOQUANTIDADEMODULO",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAOPERIODICIDADE",gxz:"Z8283ManutencaoPeriodicidade",gxold:"O8283ManutencaoPeriodicidade",gxvar:"A8283ManutencaoPeriodicidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8283ManutencaoPeriodicidade=Value},v2z:function(Value){gx.O.Z8283ManutencaoPeriodicidade=Value},v2c:function(row){gx.fn.setGridControlValue("MANUTENCAOPERIODICIDADE",row || gx.fn.currentGridRowImpl(64),gx.O.A8283ManutencaoPeriodicidade,0)},c2v:function(){gx.O.A8283ManutencaoPeriodicidade=this.val()},val:function(row){return gx.fn.getGridControlValue("MANUTENCAOPERIODICIDADE",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAOFATORSALARIOMINIMO",gxz:"Z8285ManutencaoFatorSalarioMinimo",gxold:"O8285ManutencaoFatorSalarioMinimo",gxvar:"A8285ManutencaoFatorSalarioMinimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A8285ManutencaoFatorSalarioMinimo=Value},v2z:function(Value){gx.O.Z8285ManutencaoFatorSalarioMinimo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MANUTENCAOFATORSALARIOMINIMO",row || gx.fn.currentGridRowImpl(64),gx.O.A8285ManutencaoFatorSalarioMinimo)},c2v:function(){gx.O.A8285ManutencaoFatorSalarioMinimo=this.val()},val:function(row){return gx.fn.getGridControlValue("MANUTENCAOFATORSALARIOMINIMO",row || gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAOBONUS",gxz:"Z8286ManutencaoBonus",gxold:"O8286ManutencaoBonus",gxvar:"A8286ManutencaoBonus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8286ManutencaoBonus=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8286ManutencaoBonus=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MANUTENCAOBONUS",row || gx.fn.currentGridRowImpl(64),gx.O.A8286ManutencaoBonus,0)},c2v:function(){gx.O.A8286ManutencaoBonus=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MANUTENCAOBONUS",row || gx.fn.currentGridRowImpl(64),'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAOVALOR",gxz:"Z8284ManutencaoValor",gxold:"O8284ManutencaoValor",gxvar:"A8284ManutencaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8284ManutencaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8284ManutencaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MANUTENCAOVALOR",row || gx.fn.currentGridRowImpl(64),gx.O.A8284ManutencaoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8284ManutencaoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MANUTENCAOVALOR",row || gx.fn.currentGridRowImpl(64),'.',',')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(64),gx.O.AV7bmpAlt,gx.O.AV44Bmpalt_GXI)},c2v:function(){gx.O.AV44Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(64))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(64))}, gxvar_GXI:'AV44Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(64),gx.O.AV8bmpExc,gx.O.AV45Bmpexc_GXI)},c2v:function(){gx.O.AV45Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(64))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(64))}, gxvar_GXI:'AV45Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:64,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(64),gx.O.AV16bmpCon,gx.O.AV46Bmpcon_GXI)},c2v:function(){gx.O.AV46Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(64))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(64))}, gxvar_GXI:'AV46Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV34CodigoManutencao = 0 ;
   this.ZV34CodigoManutencao = 0 ;
   this.OV34CodigoManutencao = 0 ;
   this.AV29ManutencaoQuantidadeModulo = 0 ;
   this.ZV29ManutencaoQuantidadeModulo = 0 ;
   this.OV29ManutencaoQuantidadeModulo = 0 ;
   this.AV35ManutencaoFatorSalarioMinimo = "" ;
   this.ZV35ManutencaoFatorSalarioMinimo = "" ;
   this.OV35ManutencaoFatorSalarioMinimo = "" ;
   this.AV30ManutencaoBonus = 0 ;
   this.ZV30ManutencaoBonus = 0 ;
   this.OV30ManutencaoBonus = 0 ;
   this.AV33ManutencaoValor = 0 ;
   this.ZV33ManutencaoValor = 0 ;
   this.OV33ManutencaoValor = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8289ManutencaoId = 0 ;
   this.O8289ManutencaoId = 0 ;
   this.Z8282ManutencaoQuantidadeModulo = 0 ;
   this.O8282ManutencaoQuantidadeModulo = 0 ;
   this.Z8283ManutencaoPeriodicidade = "" ;
   this.O8283ManutencaoPeriodicidade = "" ;
   this.Z8285ManutencaoFatorSalarioMinimo = "" ;
   this.O8285ManutencaoFatorSalarioMinimo = "" ;
   this.Z8286ManutencaoBonus = 0 ;
   this.O8286ManutencaoBonus = 0 ;
   this.Z8284ManutencaoValor = 0 ;
   this.O8284ManutencaoValor = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV34CodigoManutencao = 0 ;
   this.AV29ManutencaoQuantidadeModulo = 0 ;
   this.AV35ManutencaoFatorSalarioMinimo = "" ;
   this.AV30ManutencaoBonus = 0 ;
   this.AV33ManutencaoValor = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A8290ManutencaoEmpresaId = "" ;
   this.A8289ManutencaoId = 0 ;
   this.A8282ManutencaoQuantidadeModulo = 0 ;
   this.A8283ManutencaoPeriodicidade = "" ;
   this.A8285ManutencaoFatorSalarioMinimo = "" ;
   this.A8286ManutencaoBonus = 0 ;
   this.A8284ManutencaoValor = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV27ManutencaoEmpresaId = "" ;
   this.AV38SnRecuperaFiltro = "" ;
   this.AV42Pgmname = "" ;
   this.AV37DescricaoOrdenacao = "" ;
   this.Events = {"e111452_client": ["'ANTERIOR'", true] ,"e121452_client": ["'PROXIMO'", true] ,"e171452_client": ["VPAGINA.CLICK", true] ,"e131452_client": ["'NOVO'", true] ,"e141452_client": ["'FECHAR'", true] ,"e151452_client": ["'IMPRIMIR'", true] ,"e161452_client": ["'PROCURAR'", true] ,"e201452_client": ["'ALTERAR'", true] ,"e211452_client": ["'EXCLUIR'", true] ,"e221452_client": ["'CONSULTAR'", true] ,"e231452_client": ["'ATUALIZAPAGINA'", true] ,"e251452_client": ["ENTER", true] ,"e261452_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{ctrl:'MANUTENCAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MANUTENCAOID","Title")',ctrl:'MANUTENCAOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MANUTENCAOQUANTIDADEMODULO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MANUTENCAOQUANTIDADEMODULO","Title")',ctrl:'MANUTENCAOQUANTIDADEMODULO',prop:'Title'},{ctrl:'MANUTENCAOPERIODICIDADE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MANUTENCAOPERIODICIDADE","Title")',ctrl:'MANUTENCAOPERIODICIDADE',prop:'Title'},{ctrl:'MANUTENCAOFATORSALARIOMINIMO'},{ctrl:'MANUTENCAOBONUS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MANUTENCAOBONUS","Title")',ctrl:'MANUTENCAOBONUS',prop:'Title'},{ctrl:'MANUTENCAOVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MANUTENCAOVALOR","Title")',ctrl:'MANUTENCAOVALOR',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV31ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV36SistemaNome',fld:'vSISTEMANOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV36SistemaNome',fld:'vSISTEMANOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV31ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV36SistemaNome',fld:'vSISTEMANOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV36SistemaNome',fld:'vSISTEMANOME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV31ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV36SistemaNome',fld:'vSISTEMANOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV42Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV27ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'},{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV31ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV43Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV39QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37DescricaoOrdenacao',fld:'vDESCRICAOORDENACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV31ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV27ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV36SistemaNome',fld:'vSISTEMANOME'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'},{av:'AV31ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV36SistemaNome',fld:'vSISTEMANOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8289ManutencaoId',fld:'MANUTENCAOID'},{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV31ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV36SistemaNome',fld:'vSISTEMANOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A8289ManutencaoId',fld:'MANUTENCAOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8289ManutencaoId',fld:'MANUTENCAOID'},{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV31ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV36SistemaNome',fld:'vSISTEMANOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A8289ManutencaoId',fld:'MANUTENCAOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8289ManutencaoId',fld:'MANUTENCAOID'},{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV31ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV36SistemaNome',fld:'vSISTEMANOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[{av:'A8289ManutencaoId',fld:'MANUTENCAOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV29ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV35ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV30ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV33ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV42Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV27ManutencaoEmpresaId", "vMANUTENCAOEMPRESAID", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV27ManutencaoEmpresaId", "vMANUTENCAOEMPRESAID", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV42Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[34]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar({rfrVar:"AV27ManutencaoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV38SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV42Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmanutencao());

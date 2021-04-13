/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:49:18.46
*/
gx.evt.autoSkip = false;
gx.define('hconsultamanutencao', false, function () {
   this.ServerClass =  "hconsultamanutencao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV26ManutencaoEmpresaId=gx.fn.getControlValue("vMANUTENCAOEMPRESAID") ;
      this.AV19ManutencaoId=gx.fn.getIntegerValue("vMANUTENCAOID",'.') ;
   };
   this.e1713y2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1113y2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1213y2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1313y2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1413y2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e1513y2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1913y2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2113y1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,29,31,33,35,41,42,43,44,45,46,52,55,57,59,61,63,64,65,66];
   this.GXLastCtrlId =66;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",40,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultamanutencao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8289,41,"MANUTENCAOID","","","ManutencaoId","int",0,"px",6,6,"right",null,[],8289,"ManutencaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8282,42,"MANUTENCAOQUANTIDADEMODULO","","","ManutencaoQuantidadeModulo","int",0,"px",6,6,"right",null,[],8282,"ManutencaoQuantidadeModulo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8283,43,"MANUTENCAOPERIODICIDADE","","","ManutencaoPeriodicidade","svchar",0,"px",40,40,"left",null,[],8283,"ManutencaoPeriodicidade",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8285,44,"MANUTENCAOFATORSALARIOMINIMO","","","ManutencaoFatorSalarioMinimo","char",0,"px",1,1,"left",null,[],8285,"ManutencaoFatorSalarioMinimo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8286,45,"MANUTENCAOBONUS","","","ManutencaoBonus","int",0,"px",6,6,"right",null,[],8286,"ManutencaoBonus",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8284,46,"MANUTENCAOVALOR","","","ManutencaoValor","decimal",0,"px",22,22,"right",null,[],8284,"ManutencaoValor",true,2,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCODIGOMANUTENCAO",gxz:"ZV20CodigoManutencao",gxold:"OV20CodigoManutencao",gxvar:"AV20CodigoManutencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20CodigoManutencao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20CodigoManutencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOMANUTENCAO",gx.O.AV20CodigoManutencao,0)},c2v:function(){gx.O.AV20CodigoManutencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOMANUTENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMANUTENCAOFATORSALARIOMINIMO",gxz:"ZV23ManutencaoFatorSalarioMinimo",gxold:"OV23ManutencaoFatorSalarioMinimo",gxvar:"AV23ManutencaoFatorSalarioMinimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ManutencaoFatorSalarioMinimo=Value},v2z:function(Value){gx.O.ZV23ManutencaoFatorSalarioMinimo=Value},v2c:function(){gx.fn.setControlValue("vMANUTENCAOFATORSALARIOMINIMO",gx.O.AV23ManutencaoFatorSalarioMinimo,0)},c2v:function(){gx.O.AV23ManutencaoFatorSalarioMinimo=this.val()},val:function(){return gx.fn.getControlValue("vMANUTENCAOFATORSALARIOMINIMO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMANUTENCAOQUANTIDADEMODULO",gxz:"ZV21ManutencaoQuantidadeModulo",gxold:"OV21ManutencaoQuantidadeModulo",gxvar:"AV21ManutencaoQuantidadeModulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ManutencaoQuantidadeModulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21ManutencaoQuantidadeModulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANUTENCAOQUANTIDADEMODULO",gx.O.AV21ManutencaoQuantidadeModulo,0)},c2v:function(){gx.O.AV21ManutencaoQuantidadeModulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANUTENCAOQUANTIDADEMODULO",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMANUTENCAOBONUS",gxz:"ZV24ManutencaoBonus",gxold:"OV24ManutencaoBonus",gxvar:"AV24ManutencaoBonus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ManutencaoBonus=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24ManutencaoBonus=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANUTENCAOBONUS",gx.O.AV24ManutencaoBonus,0)},c2v:function(){gx.O.AV24ManutencaoBonus=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANUTENCAOBONUS",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMANUTENCAOPERIODICIDADE",gxz:"ZV22ManutencaoPeriodicidade",gxold:"OV22ManutencaoPeriodicidade",gxvar:"AV22ManutencaoPeriodicidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22ManutencaoPeriodicidade=Value},v2z:function(Value){gx.O.ZV22ManutencaoPeriodicidade=Value},v2c:function(){gx.fn.setComboBoxValue("vMANUTENCAOPERIODICIDADE",gx.O.AV22ManutencaoPeriodicidade)},c2v:function(){gx.O.AV22ManutencaoPeriodicidade=this.val()},val:function(){return gx.fn.getControlValue("vMANUTENCAOPERIODICIDADE")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMANUTENCAOVALOR",gxz:"ZV25ManutencaoValor",gxold:"OV25ManutencaoValor",gxvar:"AV25ManutencaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ManutencaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV25ManutencaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vMANUTENCAOVALOR",gx.O.AV25ManutencaoValor,2,',')},c2v:function(){gx.O.AV25ManutencaoValor=this.val()},val:function(){return gx.fn.getDecimalValue("vMANUTENCAOVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAOID",gxz:"Z8289ManutencaoId",gxold:"O8289ManutencaoId",gxvar:"A8289ManutencaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8289ManutencaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8289ManutencaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MANUTENCAOID",row || gx.fn.currentGridRowImpl(40),gx.O.A8289ManutencaoId,0)},c2v:function(){gx.O.A8289ManutencaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MANUTENCAOID",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAOQUANTIDADEMODULO",gxz:"Z8282ManutencaoQuantidadeModulo",gxold:"O8282ManutencaoQuantidadeModulo",gxvar:"A8282ManutencaoQuantidadeModulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8282ManutencaoQuantidadeModulo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8282ManutencaoQuantidadeModulo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MANUTENCAOQUANTIDADEMODULO",row || gx.fn.currentGridRowImpl(40),gx.O.A8282ManutencaoQuantidadeModulo,0)},c2v:function(){gx.O.A8282ManutencaoQuantidadeModulo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MANUTENCAOQUANTIDADEMODULO",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAOPERIODICIDADE",gxz:"Z8283ManutencaoPeriodicidade",gxold:"O8283ManutencaoPeriodicidade",gxvar:"A8283ManutencaoPeriodicidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8283ManutencaoPeriodicidade=Value},v2z:function(Value){gx.O.Z8283ManutencaoPeriodicidade=Value},v2c:function(row){gx.fn.setGridControlValue("MANUTENCAOPERIODICIDADE",row || gx.fn.currentGridRowImpl(40),gx.O.A8283ManutencaoPeriodicidade,0)},c2v:function(){gx.O.A8283ManutencaoPeriodicidade=this.val()},val:function(row){return gx.fn.getGridControlValue("MANUTENCAOPERIODICIDADE",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAOFATORSALARIOMINIMO",gxz:"Z8285ManutencaoFatorSalarioMinimo",gxold:"O8285ManutencaoFatorSalarioMinimo",gxvar:"A8285ManutencaoFatorSalarioMinimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8285ManutencaoFatorSalarioMinimo=Value},v2z:function(Value){gx.O.Z8285ManutencaoFatorSalarioMinimo=Value},v2c:function(row){gx.fn.setGridControlValue("MANUTENCAOFATORSALARIOMINIMO",row || gx.fn.currentGridRowImpl(40),gx.O.A8285ManutencaoFatorSalarioMinimo,0)},c2v:function(){gx.O.A8285ManutencaoFatorSalarioMinimo=this.val()},val:function(row){return gx.fn.getGridControlValue("MANUTENCAOFATORSALARIOMINIMO",row || gx.fn.currentGridRowImpl(40))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAOBONUS",gxz:"Z8286ManutencaoBonus",gxold:"O8286ManutencaoBonus",gxvar:"A8286ManutencaoBonus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8286ManutencaoBonus=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8286ManutencaoBonus=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MANUTENCAOBONUS",row || gx.fn.currentGridRowImpl(40),gx.O.A8286ManutencaoBonus,0)},c2v:function(){gx.O.A8286ManutencaoBonus=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MANUTENCAOBONUS",row || gx.fn.currentGridRowImpl(40),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:40,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MANUTENCAOVALOR",gxz:"Z8284ManutencaoValor",gxold:"O8284ManutencaoValor",gxvar:"A8284ManutencaoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8284ManutencaoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8284ManutencaoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MANUTENCAOVALOR",row || gx.fn.currentGridRowImpl(40),gx.O.A8284ManutencaoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8284ManutencaoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MANUTENCAOVALOR",row || gx.fn.currentGridRowImpl(40),'.',',')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABLENAV",grid:0};
   GXValidFnc[55]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[57]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[59]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[61]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[63]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV16Pagina)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV20CodigoManutencao = 0 ;
   this.ZV20CodigoManutencao = 0 ;
   this.OV20CodigoManutencao = 0 ;
   this.AV23ManutencaoFatorSalarioMinimo = "" ;
   this.ZV23ManutencaoFatorSalarioMinimo = "" ;
   this.OV23ManutencaoFatorSalarioMinimo = "" ;
   this.AV21ManutencaoQuantidadeModulo = 0 ;
   this.ZV21ManutencaoQuantidadeModulo = 0 ;
   this.OV21ManutencaoQuantidadeModulo = 0 ;
   this.AV24ManutencaoBonus = 0 ;
   this.ZV24ManutencaoBonus = 0 ;
   this.OV24ManutencaoBonus = 0 ;
   this.AV22ManutencaoPeriodicidade = "" ;
   this.ZV22ManutencaoPeriodicidade = "" ;
   this.OV22ManutencaoPeriodicidade = "" ;
   this.AV25ManutencaoValor = 0 ;
   this.ZV25ManutencaoValor = 0 ;
   this.OV25ManutencaoValor = 0 ;
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
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV20CodigoManutencao = 0 ;
   this.AV23ManutencaoFatorSalarioMinimo = "" ;
   this.AV21ManutencaoQuantidadeModulo = 0 ;
   this.AV24ManutencaoBonus = 0 ;
   this.AV22ManutencaoPeriodicidade = "" ;
   this.AV25ManutencaoValor = 0 ;
   this.AV17PaginaAux = 0 ;
   this.AV16Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV19ManutencaoId = 0 ;
   this.A8290ManutencaoEmpresaId = "" ;
   this.A8289ManutencaoId = 0 ;
   this.A8282ManutencaoQuantidadeModulo = 0 ;
   this.A8283ManutencaoPeriodicidade = "" ;
   this.A8285ManutencaoFatorSalarioMinimo = "" ;
   this.A8286ManutencaoBonus = 0 ;
   this.A8284ManutencaoValor = 0 ;
   this.AV26ManutencaoEmpresaId = "" ;
   this.Events = {"e1713y2_client": ["ENTER", true] ,"e1113y2_client": ["'GXM_FIRST'", true] ,"e1213y2_client": ["'GXM_PREVIOUS'", true] ,"e1313y2_client": ["'GXM_NEXT'", true] ,"e1413y2_client": ["'GXM_LAST'", true] ,"e1513y2_client": ["'PROCURAR'", true] ,"e1913y2_client": ["'ATUALIZAPAGINA'", true] ,"e2113y1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV23ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV21ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV24ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV22ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV25ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV26ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'MANUTENCAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MANUTENCAOID","Title")',ctrl:'MANUTENCAOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'MANUTENCAOQUANTIDADEMODULO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MANUTENCAOQUANTIDADEMODULO","Title")',ctrl:'MANUTENCAOQUANTIDADEMODULO',prop:'Title'},{ctrl:'MANUTENCAOPERIODICIDADE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MANUTENCAOPERIODICIDADE","Title")',ctrl:'MANUTENCAOPERIODICIDADE',prop:'Title'},{ctrl:'MANUTENCAOFATORSALARIOMINIMO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MANUTENCAOFATORSALARIOMINIMO","Title")',ctrl:'MANUTENCAOFATORSALARIOMINIMO',prop:'Title'},{ctrl:'MANUTENCAOBONUS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MANUTENCAOBONUS","Title")',ctrl:'MANUTENCAOBONUS',prop:'Title'},{ctrl:'MANUTENCAOVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MANUTENCAOVALOR","Title")',ctrl:'MANUTENCAOVALOR',prop:'Title'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV18NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8289ManutencaoId',fld:'MANUTENCAOID'}],[{av:'AV19ManutencaoId',fld:'vMANUTENCAOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV23ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV21ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV24ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV22ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV25ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV26ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV23ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV21ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV24ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV22ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV25ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV26ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'},{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV23ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV21ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV24ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV22ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV25ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV26ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV23ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV21ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV24ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV22ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV25ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV26ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV23ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV21ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV24ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV22ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV25ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV26ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20CodigoManutencao',fld:'vCODIGOMANUTENCAO'},{av:'AV23ManutencaoFatorSalarioMinimo',fld:'vMANUTENCAOFATORSALARIOMINIMO'},{av:'AV21ManutencaoQuantidadeModulo',fld:'vMANUTENCAOQUANTIDADEMODULO'},{av:'AV24ManutencaoBonus',fld:'vMANUTENCAOBONUS'},{av:'AV22ManutencaoPeriodicidade',fld:'vMANUTENCAOPERIODICIDADE'},{av:'AV25ManutencaoValor',fld:'vMANUTENCAOVALOR'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV26ManutencaoEmpresaId',fld:'vMANUTENCAOEMPRESAID'}],[]];
   this.setVCMap("AV26ManutencaoEmpresaId", "vMANUTENCAOEMPRESAID", 0, "char");
   this.setVCMap("AV19ManutencaoId", "vMANUTENCAOID", 0, "int");
   this.setVCMap("AV26ManutencaoEmpresaId", "vMANUTENCAOEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar({rfrVar:"AV26ManutencaoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultamanutencao());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:55:0.28
*/
gx.evt.autoSkip = false;
gx.define('htipodemonstracao', false, function () {
   this.ServerClass =  "htipodemonstracao" ;
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
      this.AV33SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11452_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12452_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e21452_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22452_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23452_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e17452_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13452_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14452_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15452_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16452_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e24452_client=function()
   {
      this.executeServerEvent("'COPIAR'", true, arguments[0], false, false);
   };
   this.e25452_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26452_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27452_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,57,64];
   this.GXLastCtrlId =64;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htipodemonstracao",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(271,49,"TIPODEMONSTRACAOID","","","TipoDemonstracaoId","int",0,"px",3,3,"right",null,[],271,"TipoDemonstracaoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(550,50,"TIPODEMONSTRACAODESCRICAO","","","TipoDemonstracaoDescricao","svchar",0,"px",40,40,"left",null,[],550,"TipoDemonstracaoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(280,51,"TIPODEMONSTRACAOESTRUTURA","","","TipoDemonstracaoEstrutura","svchar",0,"px",10,10,"left",null,[],280,"TipoDemonstracaoEstrutura",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(553,52,"TIPODEMONSTRACAOIDENTVALOR","Iden. Valor Devedor","","TipoDemonstracaoIdentValor","char",0,"px",1,1,"left",null,[],553,"TipoDemonstracaoIdentValor",false,0,false,false,"ApenasLeitura",1,"");
   GridContainer.addBitmap("&Bmpitemtipodemo","vBMPITEMTIPODEMO",53,0,"px",17,"px",null,"","Itens","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcopiar","vBMPCOPIAR",54,0,"px",17,"px","e24452_client","","Copiar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",55,0,"px",17,"px","e21452_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",56,0,"px",17,"px","e22452_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",57,0,"px",17,"px","e23452_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"CODIGOTIPODEMONSTRACAO", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPODEMONSTRACAOID",gxz:"ZV26TipoDemonstracaoId",gxold:"OV26TipoDemonstracaoId",gxvar:"AV26TipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPODEMONSTRACAOID",gx.O.AV26TipoDemonstracaoId,0)},c2v:function(){gx.O.AV26TipoDemonstracaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPODEMONSTRACAOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"DESCRICAO", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPODEMONSTRACAODESCRICAO",gxz:"ZV24TipoDemonstracaoDescricao",gxold:"OV24TipoDemonstracaoDescricao",gxvar:"AV24TipoDemonstracaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TipoDemonstracaoDescricao=Value},v2z:function(Value){gx.O.ZV24TipoDemonstracaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPODEMONSTRACAODESCRICAO",gx.O.AV24TipoDemonstracaoDescricao,0)},c2v:function(){gx.O.AV24TipoDemonstracaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPODEMONSTRACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE7",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOID",gxz:"Z271TipoDemonstracaoId",gxold:"O271TipoDemonstracaoId",gxvar:"A271TipoDemonstracaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A271TipoDemonstracaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z271TipoDemonstracaoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(48),gx.O.A271TipoDemonstracaoId,0)},c2v:function(){gx.O.A271TipoDemonstracaoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPODEMONSTRACAOID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAODESCRICAO",gxz:"Z550TipoDemonstracaoDescricao",gxold:"O550TipoDemonstracaoDescricao",gxvar:"A550TipoDemonstracaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A550TipoDemonstracaoDescricao=Value},v2z:function(Value){gx.O.Z550TipoDemonstracaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAODESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A550TipoDemonstracaoDescricao,0)},c2v:function(){gx.O.A550TipoDemonstracaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODEMONSTRACAODESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:10,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOESTRUTURA",gxz:"Z280TipoDemonstracaoEstrutura",gxold:"O280TipoDemonstracaoEstrutura",gxvar:"A280TipoDemonstracaoEstrutura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A280TipoDemonstracaoEstrutura=Value},v2z:function(Value){gx.O.Z280TipoDemonstracaoEstrutura=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOESTRUTURA",row || gx.fn.currentGridRowImpl(48),gx.O.A280TipoDemonstracaoEstrutura,0)},c2v:function(){gx.O.A280TipoDemonstracaoEstrutura=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODEMONSTRACAOESTRUTURA",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPODEMONSTRACAOIDENTVALOR",gxz:"Z553TipoDemonstracaoIdentValor",gxold:"O553TipoDemonstracaoIdentValor",gxvar:"A553TipoDemonstracaoIdentValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A553TipoDemonstracaoIdentValor=Value},v2z:function(Value){gx.O.Z553TipoDemonstracaoIdentValor=Value},v2c:function(row){gx.fn.setGridControlValue("TIPODEMONSTRACAOIDENTVALOR",row || gx.fn.currentGridRowImpl(48),gx.O.A553TipoDemonstracaoIdentValor,0)},c2v:function(){gx.O.A553TipoDemonstracaoIdentValor=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPODEMONSTRACAOIDENTVALOR",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPITEMTIPODEMO",gxz:"ZV27bmpItemTipoDemo",gxold:"OV27bmpItemTipoDemo",gxvar:"AV27bmpItemTipoDemo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27bmpItemTipoDemo=Value},v2z:function(Value){gx.O.ZV27bmpItemTipoDemo=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPITEMTIPODEMO",row || gx.fn.currentGridRowImpl(48),gx.O.AV27bmpItemTipoDemo,gx.O.AV41Bmpitemtipodemo_GXI)},c2v:function(){gx.O.AV41Bmpitemtipodemo_GXI=this.val_GXI();gx.O.AV27bmpItemTipoDemo=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPITEMTIPODEMO",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPITEMTIPODEMO_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV41Bmpitemtipodemo_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCOPIAR",gxz:"ZV28bmpCopiar",gxold:"OV28bmpCopiar",gxvar:"AV28bmpCopiar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28bmpCopiar=Value},v2z:function(Value){gx.O.ZV28bmpCopiar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCOPIAR",row || gx.fn.currentGridRowImpl(48),gx.O.AV28bmpCopiar,gx.O.AV42Bmpcopiar_GXI)},c2v:function(){gx.O.AV42Bmpcopiar_GXI=this.val_GXI();gx.O.AV28bmpCopiar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCOPIAR",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCOPIAR_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV42Bmpcopiar_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV38Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV26TipoDemonstracaoId = 0 ;
   this.ZV26TipoDemonstracaoId = 0 ;
   this.OV26TipoDemonstracaoId = 0 ;
   this.AV24TipoDemonstracaoDescricao = "" ;
   this.ZV24TipoDemonstracaoDescricao = "" ;
   this.OV24TipoDemonstracaoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z271TipoDemonstracaoId = 0 ;
   this.O271TipoDemonstracaoId = 0 ;
   this.Z550TipoDemonstracaoDescricao = "" ;
   this.O550TipoDemonstracaoDescricao = "" ;
   this.Z280TipoDemonstracaoEstrutura = "" ;
   this.O280TipoDemonstracaoEstrutura = "" ;
   this.Z553TipoDemonstracaoIdentValor = "" ;
   this.O553TipoDemonstracaoIdentValor = "" ;
   this.ZV27bmpItemTipoDemo = "" ;
   this.OV27bmpItemTipoDemo = "" ;
   this.ZV28bmpCopiar = "" ;
   this.OV28bmpCopiar = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV26TipoDemonstracaoId = 0 ;
   this.AV24TipoDemonstracaoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A270TipoDemonstracaoEmpresaId = "" ;
   this.A271TipoDemonstracaoId = 0 ;
   this.A550TipoDemonstracaoDescricao = "" ;
   this.A280TipoDemonstracaoEstrutura = "" ;
   this.A553TipoDemonstracaoIdentValor = "" ;
   this.AV27bmpItemTipoDemo = "" ;
   this.AV28bmpCopiar = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.Events = {"e11452_client": ["'ANTERIOR'", true] ,"e12452_client": ["'PROXIMO'", true] ,"e21452_client": ["'ALTERAR'", true] ,"e22452_client": ["'EXCLUIR'", true] ,"e23452_client": ["'CONSULTAR'", true] ,"e17452_client": ["VPAGINA.CLICK", true] ,"e13452_client": ["'NOVO'", true] ,"e14452_client": ["'FECHAR'", true] ,"e15452_client": ["'IMPRIMIR'", true] ,"e16452_client": ["'PROCURAR'", true] ,"e24452_client": ["'COPIAR'", true] ,"e25452_client": ["'ATUALIZAPAGINA'", true] ,"e26452_client": ["ENTER", true] ,"e27452_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV24TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'A550TipoDemonstracaoDescricao',fld:'TIPODEMONSTRACAODESCRICAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV24TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'A550TipoDemonstracaoDescricao',fld:'TIPODEMONSTRACAODESCRICAO'}],[{ctrl:'TIPODEMONSTRACAOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPODEMONSTRACAOID","Title")',ctrl:'TIPODEMONSTRACAOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPODEMONSTRACAODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPODEMONSTRACAODESCRICAO","Title")',ctrl:'TIPODEMONSTRACAODESCRICAO',prop:'Title'},{ctrl:'TIPODEMONSTRACAOESTRUTURA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPODEMONSTRACAOESTRUTURA","Title")',ctrl:'TIPODEMONSTRACAOESTRUTURA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV29filtros',fld:'vFILTROS'},{av:'AV23TipoLocalizar',fld:'vTIPOLOCALIZAR'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV24TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV25TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV24TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'A550TipoDemonstracaoDescricao',fld:'TIPODEMONSTRACAODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23TipoLocalizar',fld:'vTIPOLOCALIZAR'},{av:'AV25TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV24TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'A550TipoDemonstracaoDescricao',fld:'TIPODEMONSTRACAODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV23TipoLocalizar',fld:'vTIPOLOCALIZAR'},{av:'AV25TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A550TipoDemonstracaoDescricao',fld:'TIPODEMONSTRACAODESCRICAO'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Link")',ctrl:'vBMPALT',prop:'Link'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Link")',ctrl:'vBMPEXC',prop:'Link'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:'vBMPCON',prop:'Link'},{av:'AV27bmpItemTipoDemo',fld:'vBMPITEMTIPODEMO'},{av:'gx.fn.getCtrlProperty("vBMPITEMTIPODEMO","Tooltiptext")',ctrl:'vBMPITEMTIPODEMO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPITEMTIPODEMO","Link")',ctrl:'vBMPITEMTIPODEMO',prop:'Link'},{av:'AV28bmpCopiar',fld:'vBMPCOPIAR'},{av:'gx.fn.getCtrlProperty("vBMPCOPIAR","Tooltiptext")',ctrl:'vBMPCOPIAR',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23TipoLocalizar',fld:'vTIPOLOCALIZAR'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV24TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV25TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23TipoLocalizar',fld:'vTIPOLOCALIZAR'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV24TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV25TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23TipoLocalizar',fld:'vTIPOLOCALIZAR'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV24TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV25TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV24TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'A550TipoDemonstracaoDescricao',fld:'TIPODEMONSTRACAODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23TipoLocalizar',fld:'vTIPOLOCALIZAR'},{av:'AV25TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'}],[{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV37Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV43Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV24TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'A550TipoDemonstracaoDescricao',fld:'TIPODEMONSTRACAODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23TipoLocalizar',fld:'vTIPOLOCALIZAR'},{av:'AV25TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'COPIAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV24TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'A550TipoDemonstracaoDescricao',fld:'TIPODEMONSTRACAODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23TipoLocalizar',fld:'vTIPOLOCALIZAR'},{av:'AV25TipoDemonstracaoEstrutura',fld:'vTIPODEMONSTRACAOESTRUTURA'}],[{av:'AV29filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26TipoDemonstracaoId',fld:'vTIPODEMONSTRACAOID'},{av:'AV24TipoDemonstracaoDescricao',fld:'vTIPODEMONSTRACAODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A271TipoDemonstracaoId',fld:'TIPODEMONSTRACAOID'},{av:'A550TipoDemonstracaoDescricao',fld:'TIPODEMONSTRACAODESCRICAO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A271TipoDemonstracaoId", rfrProp:"Value", gxAttId:"271"});
   GridContainer.addRefreshingVar({rfrVar:"A550TipoDemonstracaoDescricao", rfrProp:"Value", gxAttId:"550"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htipodemonstracao());

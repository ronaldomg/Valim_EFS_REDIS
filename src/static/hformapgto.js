/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:59:11.25
*/
gx.evt.autoSkip = false;
gx.define('hformapgto', false, function () {
   this.ServerClass =  "hformapgto" ;
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
      this.AV36SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV40Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A3490FormaPgtoTipo=gx.fn.getControlValue("FORMAPGTOTIPO") ;
      this.A3492FormaPgtoTipoCliente=gx.fn.getControlValue("FORMAPGTOTIPOCLIENTE") ;
      this.A3501FormaPgtoSnLimiteCredito=gx.fn.getControlValue("FORMAPGTOSNLIMITECREDITO") ;
   };
   this.e11o72_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12o72_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17o72_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13o72_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14o72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15o72_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16o72_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20o72_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21o72_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22o72_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24o72_client=function()
   {
      this.executeServerEvent("'TPCOBR'", true, arguments[0], false, false);
   };
   this.e25o72_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26o72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27o72_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,27,29,36,39,42,44,46,48,50,52,55,57,58,62,63,64,65,66,67,68,69,70,71,78];
   this.GXLastCtrlId =78;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",61,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hformapgto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3376,62,"FORMAPGTOID","","","FormaPgtoId","int",0,"px",3,3,"right",null,[],3376,"FormaPgtoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3489,63,"FORMAPGTODESCRICAO","","","FormaPgtoDescricao","svchar",0,"px",20,20,"left",null,[],3489,"FormaPgtoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tipo",64,"vTIPO","Tipo","","Tipo","char",0,"px",15,15,"left",null,[],"Tipo","Tipo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tpcliente",65,"vTPCLIENTE","Tipo Cliente","","TpCliente","char",0,"px",40,40,"left",null,[],"Tpcliente","TpCliente",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3502,66,"FORMAPGTOQTDEMAXPARCELA","","","FormaPgtoQtdeMaxParcela","int",0,"px",3,3,"right",null,[],3502,"FormaPgtoQtdeMaxParcela",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Snlimitecredito",67,"vSNLIMITECREDITO","Limite Crédito","","SnLimiteCredito","char",0,"px",4,4,"left",null,[],"Snlimitecredito","SnLimiteCredito",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmptpcobr","vBMPTPCOBR",68,0,"px",17,"px","e24o72_client","","Tp Cobrança","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",69,0,"px",17,"px","e20o72_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",70,0,"px",17,"px","e21o72_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",71,0,"px",17,"px","e22o72_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"ORDEREDTEXT3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFORMAPGTOID",gxz:"ZV27FormaPgtoId",gxold:"OV27FormaPgtoId",gxvar:"AV27FormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27FormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27FormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORMAPGTOID",gx.O.AV27FormaPgtoId,0)},c2v:function(){gx.O.AV27FormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"ORDEREDTEXT", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFORMAPGTOTIPOCLIENTE",gxz:"ZV30FormaPgtoTipoCliente",gxold:"OV30FormaPgtoTipoCliente",gxvar:"AV30FormaPgtoTipoCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV30FormaPgtoTipoCliente=Value},v2z:function(Value){gx.O.ZV30FormaPgtoTipoCliente=Value},v2c:function(){gx.fn.setComboBoxValue("vFORMAPGTOTIPOCLIENTE",gx.O.AV30FormaPgtoTipoCliente)},c2v:function(){gx.O.AV30FormaPgtoTipoCliente=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTOTIPOCLIENTE")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"ORDEREDTEXT2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFORMAPGTODESCRICAO",gxz:"ZV28FormaPgtoDescricao",gxold:"OV28FormaPgtoDescricao",gxvar:"AV28FormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28FormaPgtoDescricao=Value},v2z:function(Value){gx.O.ZV28FormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("vFORMAPGTODESCRICAO",gx.O.AV28FormaPgtoDescricao,0)},c2v:function(){gx.O.AV28FormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"ORDEREDTEXT1", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vFORMAPGTOTIPO",gxz:"ZV29FormaPgtoTipo",gxold:"OV29FormaPgtoTipo",gxvar:"AV29FormaPgtoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV29FormaPgtoTipo=Value},v2z:function(Value){gx.O.ZV29FormaPgtoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vFORMAPGTOTIPO",gx.O.AV29FormaPgtoTipo)},c2v:function(){gx.O.AV29FormaPgtoTipo=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTOTIPO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLE4",grid:0};
   GXValidFnc[39]={fld:"TABLE1",grid:0};
   GXValidFnc[42]={fld:"IMAGE2",grid:0};
   GXValidFnc[44]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[46]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[48]={fld:"IMAGE1",grid:0};
   GXValidFnc[50]={fld:"BTNHELP",grid:0};
   GXValidFnc[52]={fld:"TABLE5",grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTOID",gxz:"Z3376FormaPgtoId",gxold:"O3376FormaPgtoId",gxvar:"A3376FormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3376FormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3376FormaPgtoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTOID",row || gx.fn.currentGridRowImpl(61),gx.O.A3376FormaPgtoId,0)},c2v:function(){gx.O.A3376FormaPgtoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FORMAPGTOID",row || gx.fn.currentGridRowImpl(61),'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTODESCRICAO",gxz:"Z3489FormaPgtoDescricao",gxold:"O3489FormaPgtoDescricao",gxvar:"A3489FormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3489FormaPgtoDescricao=Value},v2z:function(Value){gx.O.Z3489FormaPgtoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(61),gx.O.A3489FormaPgtoDescricao,0)},c2v:function(){gx.O.A3489FormaPgtoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("FORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:0,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV33Tipo",gxold:"OV33Tipo",gxvar:"AV33Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV33Tipo=Value},v2z:function(Value){gx.O.ZV33Tipo=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPO",row || gx.fn.currentGridRowImpl(61),gx.O.AV33Tipo,0)},c2v:function(){gx.O.AV33Tipo=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:40,dec:0,sign:false,ro:0,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTPCLIENTE",gxz:"ZV34TpCliente",gxold:"OV34TpCliente",gxvar:"AV34TpCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV34TpCliente=Value},v2z:function(Value){gx.O.ZV34TpCliente=Value},v2c:function(row){gx.fn.setGridControlValue("vTPCLIENTE",row || gx.fn.currentGridRowImpl(61),gx.O.AV34TpCliente,0)},c2v:function(){gx.O.AV34TpCliente=this.val()},val:function(row){return gx.fn.getGridControlValue("vTPCLIENTE",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTOQTDEMAXPARCELA",gxz:"Z3502FormaPgtoQtdeMaxParcela",gxold:"O3502FormaPgtoQtdeMaxParcela",gxvar:"A3502FormaPgtoQtdeMaxParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3502FormaPgtoQtdeMaxParcela=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3502FormaPgtoQtdeMaxParcela=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTOQTDEMAXPARCELA",row || gx.fn.currentGridRowImpl(61),gx.O.A3502FormaPgtoQtdeMaxParcela,0)},c2v:function(){gx.O.A3502FormaPgtoQtdeMaxParcela=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FORMAPGTOQTDEMAXPARCELA",row || gx.fn.currentGridRowImpl(61),'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:0,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNLIMITECREDITO",gxz:"ZV32SnLimiteCredito",gxold:"OV32SnLimiteCredito",gxvar:"AV32SnLimiteCredito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV32SnLimiteCredito=Value},v2z:function(Value){gx.O.ZV32SnLimiteCredito=Value},v2c:function(row){gx.fn.setGridControlValue("vSNLIMITECREDITO",row || gx.fn.currentGridRowImpl(61),gx.O.AV32SnLimiteCredito,0)},c2v:function(){gx.O.AV32SnLimiteCredito=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNLIMITECREDITO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPTPCOBR",gxz:"ZV35bmpTpCobr",gxold:"OV35bmpTpCobr",gxvar:"AV35bmpTpCobr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV35bmpTpCobr=Value},v2z:function(Value){gx.O.ZV35bmpTpCobr=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPTPCOBR",row || gx.fn.currentGridRowImpl(61),gx.O.AV35bmpTpCobr,gx.O.AV45Bmptpcobr_GXI)},c2v:function(){gx.O.AV45Bmptpcobr_GXI=this.val_GXI();gx.O.AV35bmpTpCobr=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPTPCOBR",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPTPCOBR_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV45Bmptpcobr_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(61),gx.O.AV7bmpAlt,gx.O.AV42Bmpalt_GXI)},c2v:function(){gx.O.AV42Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV42Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61),gx.O.AV8bmpExc,gx.O.AV43Bmpexc_GXI)},c2v:function(){gx.O.AV43Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV43Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(61),gx.O.AV16bmpCon,gx.O.AV44Bmpcon_GXI)},c2v:function(){gx.O.AV44Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV44Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27FormaPgtoId = 0 ;
   this.ZV27FormaPgtoId = 0 ;
   this.OV27FormaPgtoId = 0 ;
   this.AV30FormaPgtoTipoCliente = "" ;
   this.ZV30FormaPgtoTipoCliente = "" ;
   this.OV30FormaPgtoTipoCliente = "" ;
   this.AV28FormaPgtoDescricao = "" ;
   this.ZV28FormaPgtoDescricao = "" ;
   this.OV28FormaPgtoDescricao = "" ;
   this.AV29FormaPgtoTipo = "" ;
   this.ZV29FormaPgtoTipo = "" ;
   this.OV29FormaPgtoTipo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3376FormaPgtoId = 0 ;
   this.O3376FormaPgtoId = 0 ;
   this.Z3489FormaPgtoDescricao = "" ;
   this.O3489FormaPgtoDescricao = "" ;
   this.ZV33Tipo = "" ;
   this.OV33Tipo = "" ;
   this.ZV34TpCliente = "" ;
   this.OV34TpCliente = "" ;
   this.Z3502FormaPgtoQtdeMaxParcela = 0 ;
   this.O3502FormaPgtoQtdeMaxParcela = 0 ;
   this.ZV32SnLimiteCredito = "" ;
   this.OV32SnLimiteCredito = "" ;
   this.ZV35bmpTpCobr = "" ;
   this.OV35bmpTpCobr = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27FormaPgtoId = 0 ;
   this.AV30FormaPgtoTipoCliente = "" ;
   this.AV28FormaPgtoDescricao = "" ;
   this.AV29FormaPgtoTipo = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A3501FormaPgtoSnLimiteCredito = "" ;
   this.A3492FormaPgtoTipoCliente = "" ;
   this.A3490FormaPgtoTipo = "" ;
   this.A3375FormaPgtoEmpresaId = "" ;
   this.A3376FormaPgtoId = 0 ;
   this.A3489FormaPgtoDescricao = "" ;
   this.AV33Tipo = "" ;
   this.AV34TpCliente = "" ;
   this.A3502FormaPgtoQtdeMaxParcela = 0 ;
   this.AV32SnLimiteCredito = "" ;
   this.AV35bmpTpCobr = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV36SnRecuperaFiltro = "" ;
   this.AV40Pgmname = "" ;
   this.Events = {"e11o72_client": ["'ANTERIOR'", true] ,"e12o72_client": ["'PROXIMO'", true] ,"e17o72_client": ["VPAGINA.CLICK", true] ,"e13o72_client": ["'NOVO'", true] ,"e14o72_client": ["'FECHAR'", true] ,"e15o72_client": ["'IMPRIMIR'", true] ,"e16o72_client": ["'PROCURAR'", true] ,"e20o72_client": ["'ALTERAR'", true] ,"e21o72_client": ["'EXCLUIR'", true] ,"e22o72_client": ["'CONSULTAR'", true] ,"e24o72_client": ["'TPCOBR'", true] ,"e25o72_client": ["'ATUALIZAPAGINA'", true] ,"e26o72_client": ["ENTER", true] ,"e27o72_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV30FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV28FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV29FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpTpCobr',fld:'vBMPTPCOBR'},{av:'gx.fn.getCtrlProperty("vBMPTPCOBR","Tooltiptext")',ctrl:'vBMPTPCOBR',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'},{av:'A3501FormaPgtoSnLimiteCredito',fld:'FORMAPGTOSNLIMITECREDITO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV30FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV28FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV29FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpTpCobr',fld:'vBMPTPCOBR'},{av:'gx.fn.getCtrlProperty("vBMPTPCOBR","Tooltiptext")',ctrl:'vBMPTPCOBR',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'},{av:'A3501FormaPgtoSnLimiteCredito',fld:'FORMAPGTOSNLIMITECREDITO'}],[{ctrl:'FORMAPGTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FORMAPGTOID","Title")',ctrl:'FORMAPGTOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'FORMAPGTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FORMAPGTODESCRICAO","Title")',ctrl:'FORMAPGTODESCRICAO',prop:'Title'},{ctrl:'FORMAPGTOQTDEMAXPARCELA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FORMAPGTOQTDEMAXPARCELA","Title")',ctrl:'FORMAPGTOQTDEMAXPARCELA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV28FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV29FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV30FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV30FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV28FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV29FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpTpCobr',fld:'vBMPTPCOBR'},{av:'gx.fn.getCtrlProperty("vBMPTPCOBR","Tooltiptext")',ctrl:'vBMPTPCOBR',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'},{av:'A3501FormaPgtoSnLimiteCredito',fld:'FORMAPGTOSNLIMITECREDITO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV30FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV28FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV29FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpTpCobr',fld:'vBMPTPCOBR'},{av:'gx.fn.getCtrlProperty("vBMPTPCOBR","Tooltiptext")',ctrl:'vBMPTPCOBR',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'},{av:'A3501FormaPgtoSnLimiteCredito',fld:'FORMAPGTOSNLIMITECREDITO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV30FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV28FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV29FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpTpCobr',fld:'vBMPTPCOBR'},{av:'gx.fn.getCtrlProperty("vBMPTPCOBR","Tooltiptext")',ctrl:'vBMPTPCOBR',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'},{av:'A3501FormaPgtoSnLimiteCredito',fld:'FORMAPGTOSNLIMITECREDITO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV28FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV29FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV30FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV40Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'AV41Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV37QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV30FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV28FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV29FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpTpCobr',fld:'vBMPTPCOBR'},{av:'gx.fn.getCtrlProperty("vBMPTPCOBR","Tooltiptext")',ctrl:'vBMPTPCOBR',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'},{av:'A3501FormaPgtoSnLimiteCredito',fld:'FORMAPGTOSNLIMITECREDITO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV28FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV29FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV30FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV28FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV29FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV30FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV28FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV29FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV30FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["LOAD"] = [[{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'},{av:'A3501FormaPgtoSnLimiteCredito',fld:'FORMAPGTOSNLIMITECREDITO'}],[{av:'AV33Tipo',fld:'vTIPO'},{av:'AV34TpCliente',fld:'vTPCLIENTE'},{av:'AV32SnLimiteCredito',fld:'vSNLIMITECREDITO'}]];
   this.EvtParms["'TPCOBR'"] = [[{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV28FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV29FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV30FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV40Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV30FormaPgtoTipoCliente',fld:'vFORMAPGTOTIPOCLIENTE'},{av:'AV28FormaPgtoDescricao',fld:'vFORMAPGTODESCRICAO'},{av:'AV29FormaPgtoTipo',fld:'vFORMAPGTOTIPO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV35bmpTpCobr',fld:'vBMPTPCOBR'},{av:'gx.fn.getCtrlProperty("vBMPTPCOBR","Tooltiptext")',ctrl:'vBMPTPCOBR',prop:'Tooltiptext'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV40Pgmname',fld:'vPGMNAME'},{av:'A3490FormaPgtoTipo',fld:'FORMAPGTOTIPO'},{av:'A3492FormaPgtoTipoCliente',fld:'FORMAPGTOTIPOCLIENTE'},{av:'A3501FormaPgtoSnLimiteCredito',fld:'FORMAPGTOSNLIMITECREDITO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV36SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV40Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A3490FormaPgtoTipo", "FORMAPGTOTIPO", 0, "char");
   this.setVCMap("A3492FormaPgtoTipoCliente", "FORMAPGTOTIPOCLIENTE", 0, "char");
   this.setVCMap("A3501FormaPgtoSnLimiteCredito", "FORMAPGTOSNLIMITECREDITO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV36SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV40Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A3490FormaPgtoTipo", "FORMAPGTOTIPO", 0, "char");
   this.setVCMap("A3492FormaPgtoTipoCliente", "FORMAPGTOTIPOCLIENTE", 0, "char");
   this.setVCMap("A3501FormaPgtoSnLimiteCredito", "FORMAPGTOSNLIMITECREDITO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV35bmpTpCobr", rfrProp:"Value", gxAttId:"Bmptpcobr"});
   GridContainer.addRefreshingVar({rfrVar:"AV35bmpTpCobr", rfrProp:"Tooltiptext", gxAttId:"Bmptpcobr"});
   GridContainer.addRefreshingVar({rfrVar:"AV36SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV40Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A3490FormaPgtoTipo"});
   GridContainer.addRefreshingVar({rfrVar:"A3492FormaPgtoTipoCliente"});
   GridContainer.addRefreshingVar({rfrVar:"A3501FormaPgtoSnLimiteCredito"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hformapgto());

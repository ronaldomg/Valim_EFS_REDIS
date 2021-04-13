/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:56:38.82
*/
gx.evt.autoSkip = false;
gx.define('htipoclassfluxo', false, function () {
   this.ServerClass =  "htipoclassfluxo" ;
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
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e112662_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e122662_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e162662_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e132662_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e142662_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152662_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e192662_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e202662_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e212662_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e222662_client=function()
   {
      this.executeServerEvent("'SELECAO'", true, arguments[0], false, false);
   };
   this.e232662_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e242662_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e262662_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e272662_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,27,30,33,35,37,39,41,44,46,47,51,52,53,54,55,56,57,58,59,66,67,68];
   this.GXLastCtrlId =68;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",50,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htipoclassfluxo",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(10199,51,"TIPOCLASSFLUXOID","","","TipoClassFluxoId","int",0,"px",4,4,"right",null,[],10199,"TipoClassFluxoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(10345,52,"TIPOCLASSFLUXODESCRICAO","","","TipoClassFluxoDescricao","svchar",0,"px",40,40,"left",null,[],10345,"TipoClassFluxoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(10346,53,"TIPOCLASSFLUXOTIPO","","TipoClassFluxoTipo","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpselecao","vBMPSELECAO",54,0,"px",17,"px","e222662_client","","Itens","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpduplicar","vBMPDUPLICAR",55,0,"px",17,"px","e242662_client","","Dup","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",56,0,"px",17,"px","e192662_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",57,0,"px",17,"px","e202662_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",58,0,"px",17,"px","e212662_client","","Cons","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(10198,59,"TIPOCLASSFLUXOEMPRESAID","Tipo Class Fluxo Empresa Id","","TipoClassFluxoEmpresaId","char",0,"px",10,10,"left",null,[],10198,"TipoClassFluxoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE8",grid:0};
   GXValidFnc[12]={fld:"TABLE9",grid:0};
   GXValidFnc[15]={fld:"TXT1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCLASSFLUXOID",gxz:"ZV36TipoClassFluxoId",gxold:"OV36TipoClassFluxoId",gxvar:"AV36TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36TipoClassFluxoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXOID",gx.O.AV36TipoClassFluxoId,0)},c2v:function(){gx.O.AV36TipoClassFluxoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCLASSFLUXOID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCLASSFLUXODESCRICAO",gxz:"ZV37TipoClassFluxoDescricao",gxold:"OV37TipoClassFluxoDescricao",gxvar:"AV37TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.ZV37TipoClassFluxoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCLASSFLUXODESCRICAO",gx.O.AV37TipoClassFluxoDescricao,0)},c2v:function(){gx.O.AV37TipoClassFluxoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCLASSFLUXODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={fld:"TABLE6",grid:0};
   GXValidFnc[33]={fld:"IMAGE2",grid:0};
   GXValidFnc[35]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[37]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[39]={fld:"BTNHELP",grid:0};
   GXValidFnc[41]={fld:"TABLE5",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXOID",gxz:"Z10199TipoClassFluxoId",gxold:"O10199TipoClassFluxoId",gxvar:"A10199TipoClassFluxoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10199TipoClassFluxoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10199TipoClassFluxoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOCLASSFLUXOID",row || gx.fn.currentGridRowImpl(50),gx.O.A10199TipoClassFluxoId,0)},c2v:function(){gx.O.A10199TipoClassFluxoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOCLASSFLUXOID",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXODESCRICAO",gxz:"Z10345TipoClassFluxoDescricao",gxold:"O10345TipoClassFluxoDescricao",gxvar:"A10345TipoClassFluxoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10345TipoClassFluxoDescricao=Value},v2z:function(Value){gx.O.Z10345TipoClassFluxoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCLASSFLUXODESCRICAO",row || gx.fn.currentGridRowImpl(50),gx.O.A10345TipoClassFluxoDescricao,0)},c2v:function(){gx.O.A10345TipoClassFluxoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCLASSFLUXODESCRICAO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXOTIPO",gxz:"Z10346TipoClassFluxoTipo",gxold:"O10346TipoClassFluxoTipo",gxvar:"A10346TipoClassFluxoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A10346TipoClassFluxoTipo=Value},v2z:function(Value){gx.O.Z10346TipoClassFluxoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOCLASSFLUXOTIPO",row || gx.fn.currentGridRowImpl(50),gx.O.A10346TipoClassFluxoTipo)},c2v:function(){gx.O.A10346TipoClassFluxoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCLASSFLUXOTIPO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSELECAO",gxz:"ZV34bmpSelecao",gxold:"OV34bmpSelecao",gxvar:"AV34bmpSelecao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34bmpSelecao=Value},v2z:function(Value){gx.O.ZV34bmpSelecao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSELECAO",row || gx.fn.currentGridRowImpl(50),gx.O.AV34bmpSelecao,gx.O.AV47Bmpselecao_GXI)},c2v:function(){gx.O.AV47Bmpselecao_GXI=this.val_GXI();gx.O.AV34bmpSelecao=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSELECAO",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSELECAO_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV47Bmpselecao_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDUPLICAR",gxz:"ZV38bmpDuplicar",gxold:"OV38bmpDuplicar",gxvar:"AV38bmpDuplicar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV38bmpDuplicar=Value},v2z:function(Value){gx.O.ZV38bmpDuplicar=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDUPLICAR",row || gx.fn.currentGridRowImpl(50),gx.O.AV38bmpDuplicar,gx.O.AV46Bmpduplicar_GXI)},c2v:function(){gx.O.AV46Bmpduplicar_GXI=this.val_GXI();gx.O.AV38bmpDuplicar=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDUPLICAR",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDUPLICAR_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV46Bmpduplicar_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(50),gx.O.AV7bmpAlt,gx.O.AV43Bmpalt_GXI)},c2v:function(){gx.O.AV43Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV43Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(50),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCLASSFLUXOEMPRESAID",gxz:"Z10198TipoClassFluxoEmpresaId",gxold:"O10198TipoClassFluxoEmpresaId",gxvar:"A10198TipoClassFluxoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10198TipoClassFluxoEmpresaId=Value},v2z:function(Value){gx.O.Z10198TipoClassFluxoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCLASSFLUXOEMPRESAID",row || gx.fn.currentGridRowImpl(50),gx.O.A10198TipoClassFluxoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10198TipoClassFluxoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCLASSFLUXOEMPRESAID",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNRECUPERAFILTRO",gxz:"ZV35SnRecuperaFiltro",gxold:"OV35SnRecuperaFiltro",gxvar:"AV35SnRecuperaFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35SnRecuperaFiltro=Value},v2z:function(Value){gx.O.ZV35SnRecuperaFiltro=Value},v2c:function(){gx.fn.setControlValue("vSNRECUPERAFILTRO",gx.O.AV35SnRecuperaFiltro,0)},c2v:function(){gx.O.AV35SnRecuperaFiltro=this.val()},val:function(){return gx.fn.getControlValue("vSNRECUPERAFILTRO")},nac:gx.falseFn};
   this.AV36TipoClassFluxoId = 0 ;
   this.ZV36TipoClassFluxoId = 0 ;
   this.OV36TipoClassFluxoId = 0 ;
   this.AV37TipoClassFluxoDescricao = "" ;
   this.ZV37TipoClassFluxoDescricao = "" ;
   this.OV37TipoClassFluxoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z10199TipoClassFluxoId = 0 ;
   this.O10199TipoClassFluxoId = 0 ;
   this.Z10345TipoClassFluxoDescricao = "" ;
   this.O10345TipoClassFluxoDescricao = "" ;
   this.Z10346TipoClassFluxoTipo = "" ;
   this.O10346TipoClassFluxoTipo = "" ;
   this.ZV34bmpSelecao = "" ;
   this.OV34bmpSelecao = "" ;
   this.ZV38bmpDuplicar = "" ;
   this.OV38bmpDuplicar = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z10198TipoClassFluxoEmpresaId = "" ;
   this.O10198TipoClassFluxoEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV35SnRecuperaFiltro = "" ;
   this.ZV35SnRecuperaFiltro = "" ;
   this.OV35SnRecuperaFiltro = "" ;
   this.AV36TipoClassFluxoId = 0 ;
   this.AV37TipoClassFluxoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV35SnRecuperaFiltro = "" ;
   this.A10199TipoClassFluxoId = 0 ;
   this.A10345TipoClassFluxoDescricao = "" ;
   this.A10346TipoClassFluxoTipo = "" ;
   this.AV34bmpSelecao = "" ;
   this.AV38bmpDuplicar = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A10198TipoClassFluxoEmpresaId = "" ;
   this.AV41Pgmname = "" ;
   this.Events = {"e112662_client": ["'ANTERIOR'", true] ,"e122662_client": ["'PROXIMO'", true] ,"e162662_client": ["VPAGINA.CLICK", true] ,"e132662_client": ["'NOVO'", true] ,"e142662_client": ["'FECHAR'", true] ,"e152662_client": ["'PROCURAR'", true] ,"e192662_client": ["'ALTERAR'", true] ,"e202662_client": ["'EXCLUIR'", true] ,"e212662_client": ["'CONSULTAR'", true] ,"e222662_client": ["'SELECAO'", true] ,"e232662_client": ["'ATUALIZAPAGINA'", true] ,"e242662_client": ["'DUPLICAR'", true] ,"e262662_client": ["ENTER", true] ,"e272662_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{ctrl:'TIPOCLASSFLUXOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCLASSFLUXOID","Title")',ctrl:'TIPOCLASSFLUXOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPOCLASSFLUXODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCLASSFLUXODESCRICAO","Title")',ctrl:'TIPOCLASSFLUXODESCRICAO',prop:'Title'},{ctrl:'TIPOCLASSFLUXOTIPO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV41Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A10199TipoClassFluxoId',fld:'TIPOCLASSFLUXOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A10199TipoClassFluxoId',fld:'TIPOCLASSFLUXOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A10199TipoClassFluxoId',fld:'TIPOCLASSFLUXOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A10199TipoClassFluxoId',fld:'TIPOCLASSFLUXOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[{av:'A10199TipoClassFluxoId',fld:'TIPOCLASSFLUXOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SELECAO'"] = [[{av:'A10198TipoClassFluxoEmpresaId',fld:'TIPOCLASSFLUXOEMPRESAID'},{av:'A10199TipoClassFluxoId',fld:'TIPOCLASSFLUXOID'},{av:'A10345TipoClassFluxoDescricao',fld:'TIPOCLASSFLUXODESCRICAO'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36TipoClassFluxoId',fld:'vTIPOCLASSFLUXOID'},{av:'AV37TipoClassFluxoDescricao',fld:'vTIPOCLASSFLUXODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38bmpDuplicar',fld:'vBMPDUPLICAR'},{av:'gx.fn.getCtrlProperty("vBMPDUPLICAR","Tooltiptext")',ctrl:'vBMPDUPLICAR',prop:'Tooltiptext'},{av:'AV34bmpSelecao',fld:'vBMPSELECAO'},{av:'gx.fn.getCtrlProperty("vBMPSELECAO","Tooltiptext")',ctrl:'vBMPSELECAO',prop:'Tooltiptext'},{av:'AV35SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'A10199TipoClassFluxoId',fld:'TIPOCLASSFLUXOID'},{av:'A10345TipoClassFluxoDescricao',fld:'TIPOCLASSFLUXODESCRICAO'}],[{av:'A10345TipoClassFluxoDescricao',fld:'TIPOCLASSFLUXODESCRICAO'},{av:'A10199TipoClassFluxoId',fld:'TIPOCLASSFLUXOID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV38bmpDuplicar", rfrProp:"Value", gxAttId:"Bmpduplicar"});
   GridContainer.addRefreshingVar({rfrVar:"AV38bmpDuplicar", rfrProp:"Tooltiptext", gxAttId:"Bmpduplicar"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpSelecao", rfrProp:"Value", gxAttId:"Bmpselecao"});
   GridContainer.addRefreshingVar({rfrVar:"AV34bmpSelecao", rfrProp:"Tooltiptext", gxAttId:"Bmpselecao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar({rfrVar:"AV41Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htipoclassfluxo());

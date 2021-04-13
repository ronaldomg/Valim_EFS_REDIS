/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:15:27.21
*/
gx.evt.autoSkip = false;
gx.define('hmodeloprevenda', false, function () {
   this.ServerClass =  "hmodeloprevenda" ;
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
      this.AV36SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV39Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.s142_client=function()
   {
      this.AV30SnErro =  "N"  ;
      if ( (""==this.AV27ModeloPreVendaTipo) && this.AV30SnErro == "N" )
      {
         this.addMessage("Informe o Tipo de Impressão");
         gx.fn.usrSetFocus("vMODELOPREVENDATIPO") ;
         this.AV30SnErro =  "S"  ;
      }
   };
   this.e1110r2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1210r2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1610r2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1310r2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1410r2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1510r2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e1910r2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2010r2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2110r2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e2210r2_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e2310r2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2510r2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2610r2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,22,24,27,29,30,35,38,41,43,45,47,49,52,54,55,59,60,61,62,63,64,65,66,73,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodeloprevenda",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8946,59,"MODELOPREVENDACODIGO","","","ModeloPreVendaCodigo","int",0,"px",3,3,"right",null,[],8946,"ModeloPreVendaCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(7266,60,"MODELOPREVENDATIPO","","ModeloPreVendaTipo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(7234,61,"MODELOPREVENDADESCRICAO","","","ModeloPreVendaDescricao","svchar",0,"px",25,25,"left",null,[],7234,"ModeloPreVendaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpcop","vBMPCOP",62,0,"px",17,"px","e2210r2_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",63,0,"px",17,"px","e1910r2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",64,0,"px",17,"px","e2010r2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",65,0,"px",17,"px","e2110r2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(8945,66,"MODELOPREVENDAEMPRESAID","Empresa","","ModeloPrevendaEmpresaId","char",0,"px",10,10,"left",null,[],8945,"ModeloPrevendaEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPREVENDATIPO",gxz:"ZV27ModeloPreVendaTipo",gxold:"OV27ModeloPreVendaTipo",gxvar:"AV27ModeloPreVendaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27ModeloPreVendaTipo=Value},v2z:function(Value){gx.O.ZV27ModeloPreVendaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELOPREVENDATIPO",gx.O.AV27ModeloPreVendaTipo)},c2v:function(){gx.O.AV27ModeloPreVendaTipo=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPREVENDATIPO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={fld:"TABLE10",grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPREVENDACODIGO",gxz:"ZV32ModeloPreVendaCodigo",gxold:"OV32ModeloPreVendaCodigo",gxvar:"AV32ModeloPreVendaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ModeloPreVendaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32ModeloPreVendaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMODELOPREVENDACODIGO",gx.O.AV32ModeloPreVendaCodigo,0)},c2v:function(){gx.O.AV32ModeloPreVendaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMODELOPREVENDACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"IMGPROMPT",grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELOPREVENDADESCRICAO",gxz:"ZV34ModeloPreVendaDescricao",gxold:"OV34ModeloPreVendaDescricao",gxvar:"AV34ModeloPreVendaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ModeloPreVendaDescricao=Value},v2z:function(Value){gx.O.ZV34ModeloPreVendaDescricao=Value},v2c:function(){gx.fn.setControlValue("vMODELOPREVENDADESCRICAO",gx.O.AV34ModeloPreVendaDescricao,0)},c2v:function(){gx.O.AV34ModeloPreVendaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPREVENDADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPREVENDADESCRICAOFILTRO",gxz:"ZV35ModeloPrevendaDescricaoFiltro",gxold:"OV35ModeloPrevendaDescricaoFiltro",gxvar:"AV35ModeloPrevendaDescricaoFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ModeloPrevendaDescricaoFiltro=Value},v2z:function(Value){gx.O.ZV35ModeloPrevendaDescricaoFiltro=Value},v2c:function(){gx.fn.setControlValue("vMODELOPREVENDADESCRICAOFILTRO",gx.O.AV35ModeloPrevendaDescricaoFiltro,0)},c2v:function(){gx.O.AV35ModeloPrevendaDescricaoFiltro=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPREVENDADESCRICAOFILTRO")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vMODELOPREVENDAEMPRESAID",gxz:"ZV33ModeloPrevendaEmpresaId",gxold:"OV33ModeloPrevendaEmpresaId",gxvar:"AV33ModeloPrevendaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ModeloPrevendaEmpresaId=Value},v2z:function(Value){gx.O.ZV33ModeloPrevendaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vMODELOPREVENDAEMPRESAID",gx.O.AV33ModeloPrevendaEmpresaId,0)},c2v:function(){gx.O.AV33ModeloPrevendaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vMODELOPREVENDAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TABLE6",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPREVENDACODIGO",gxz:"Z8946ModeloPreVendaCodigo",gxold:"O8946ModeloPreVendaCodigo",gxvar:"A8946ModeloPreVendaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8946ModeloPreVendaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8946ModeloPreVendaCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELOPREVENDACODIGO",row || gx.fn.currentGridRowImpl(58),gx.O.A8946ModeloPreVendaCodigo,0)},c2v:function(){gx.O.A8946ModeloPreVendaCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELOPREVENDACODIGO",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPREVENDATIPO",gxz:"Z7266ModeloPreVendaTipo",gxold:"O7266ModeloPreVendaTipo",gxvar:"A7266ModeloPreVendaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A7266ModeloPreVendaTipo=Value},v2z:function(Value){gx.O.Z7266ModeloPreVendaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MODELOPREVENDATIPO",row || gx.fn.currentGridRowImpl(58),gx.O.A7266ModeloPreVendaTipo)},c2v:function(){gx.O.A7266ModeloPreVendaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOPREVENDATIPO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPREVENDADESCRICAO",gxz:"Z7234ModeloPreVendaDescricao",gxold:"O7234ModeloPreVendaDescricao",gxvar:"A7234ModeloPreVendaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7234ModeloPreVendaDescricao=Value},v2z:function(Value){gx.O.Z7234ModeloPreVendaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOPREVENDADESCRICAO",row || gx.fn.currentGridRowImpl(58),gx.O.A7234ModeloPreVendaDescricao,0)},c2v:function(){gx.O.A7234ModeloPreVendaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOPREVENDADESCRICAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCOP",gxz:"ZV31bmpCop",gxold:"OV31bmpCop",gxvar:"AV31bmpCop",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpCop=Value},v2z:function(Value){gx.O.ZV31bmpCop=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCOP",row || gx.fn.currentGridRowImpl(58),gx.O.AV31bmpCop,gx.O.AV44Bmpcop_GXI)},c2v:function(){gx.O.AV44Bmpcop_GXI=this.val_GXI();gx.O.AV31bmpCop=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCOP",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCOP_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV44Bmpcop_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV41Bmpalt_GXI)},c2v:function(){gx.O.AV41Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV41Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV42Bmpexc_GXI)},c2v:function(){gx.O.AV42Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV42Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV43Bmpcon_GXI)},c2v:function(){gx.O.AV43Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV43Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELOPREVENDAEMPRESAID",gxz:"Z8945ModeloPrevendaEmpresaId",gxold:"O8945ModeloPrevendaEmpresaId",gxvar:"A8945ModeloPrevendaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8945ModeloPrevendaEmpresaId=Value},v2z:function(Value){gx.O.Z8945ModeloPrevendaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("MODELOPREVENDAEMPRESAID",row || gx.fn.currentGridRowImpl(58),gx.O.A8945ModeloPrevendaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8945ModeloPrevendaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("MODELOPREVENDAEMPRESAID",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[73]={fld:"JS", format:2,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27ModeloPreVendaTipo = "" ;
   this.ZV27ModeloPreVendaTipo = "" ;
   this.OV27ModeloPreVendaTipo = "" ;
   this.AV32ModeloPreVendaCodigo = 0 ;
   this.ZV32ModeloPreVendaCodigo = 0 ;
   this.OV32ModeloPreVendaCodigo = 0 ;
   this.AV34ModeloPreVendaDescricao = "" ;
   this.ZV34ModeloPreVendaDescricao = "" ;
   this.OV34ModeloPreVendaDescricao = "" ;
   this.AV35ModeloPrevendaDescricaoFiltro = "" ;
   this.ZV35ModeloPrevendaDescricaoFiltro = "" ;
   this.OV35ModeloPrevendaDescricaoFiltro = "" ;
   this.AV33ModeloPrevendaEmpresaId = "" ;
   this.ZV33ModeloPrevendaEmpresaId = "" ;
   this.OV33ModeloPrevendaEmpresaId = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8946ModeloPreVendaCodigo = 0 ;
   this.O8946ModeloPreVendaCodigo = 0 ;
   this.Z7266ModeloPreVendaTipo = "" ;
   this.O7266ModeloPreVendaTipo = "" ;
   this.Z7234ModeloPreVendaDescricao = "" ;
   this.O7234ModeloPreVendaDescricao = "" ;
   this.ZV31bmpCop = "" ;
   this.OV31bmpCop = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z8945ModeloPrevendaEmpresaId = "" ;
   this.O8945ModeloPrevendaEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27ModeloPreVendaTipo = "" ;
   this.AV32ModeloPreVendaCodigo = 0 ;
   this.AV34ModeloPreVendaDescricao = "" ;
   this.AV35ModeloPrevendaDescricaoFiltro = "" ;
   this.AV33ModeloPrevendaEmpresaId = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A8946ModeloPreVendaCodigo = 0 ;
   this.A7266ModeloPreVendaTipo = "" ;
   this.A7234ModeloPreVendaDescricao = "" ;
   this.AV31bmpCop = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A8945ModeloPrevendaEmpresaId = "" ;
   this.AV36SnRecuperaFiltro = "" ;
   this.AV39Pgmname = "" ;
   this.AV30SnErro = "" ;
   this.Events = {"e1110r2_client": ["'ANTERIOR'", true] ,"e1210r2_client": ["'PROXIMO'", true] ,"e1610r2_client": ["VPAGINA.CLICK", true] ,"e1310r2_client": ["'NOVO'", true] ,"e1410r2_client": ["'FECHAR'", true] ,"e1510r2_client": ["'PROCURAR'", true] ,"e1910r2_client": ["'ALTERAR'", true] ,"e2010r2_client": ["'EXCLUIR'", true] ,"e2110r2_client": ["'CONSULTAR'", true] ,"e2210r2_client": ["'DUPLICAR'", true] ,"e2310r2_client": ["'ATUALIZAPAGINA'", true] ,"e2510r2_client": ["ENTER", true] ,"e2610r2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV32ModeloPreVendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV35ModeloPrevendaDescricaoFiltro',fld:'vMODELOPREVENDADESCRICAOFILTRO'},{av:'AV33ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpCop',fld:'vBMPCOP'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV32ModeloPreVendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV35ModeloPrevendaDescricaoFiltro',fld:'vMODELOPREVENDADESCRICAOFILTRO'},{av:'AV33ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpCop',fld:'vBMPCOP'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{ctrl:'MODELOPREVENDATIPO'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'MODELOPREVENDACODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELOPREVENDACODIGO","Title")',ctrl:'MODELOPREVENDACODIGO',prop:'Title'},{ctrl:'MODELOPREVENDADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MODELOPREVENDADESCRICAO","Title")',ctrl:'MODELOPREVENDADESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV32ModeloPreVendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV34ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'},{av:'AV35ModeloPrevendaDescricaoFiltro',fld:'vMODELOPREVENDADESCRICAOFILTRO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV32ModeloPreVendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV35ModeloPrevendaDescricaoFiltro',fld:'vMODELOPREVENDADESCRICAOFILTRO'},{av:'AV33ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpCop',fld:'vBMPCOP'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV34ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV32ModeloPreVendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV35ModeloPrevendaDescricaoFiltro',fld:'vMODELOPREVENDADESCRICAOFILTRO'},{av:'AV33ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpCop',fld:'vBMPCOP'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV34ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV32ModeloPreVendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV35ModeloPrevendaDescricaoFiltro',fld:'vMODELOPREVENDADESCRICAOFILTRO'},{av:'AV33ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpCop',fld:'vBMPCOP'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV34ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV30SnErro',fld:'vSNERRO'},{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ModeloPreVendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV34ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'},{av:'AV35ModeloPrevendaDescricaoFiltro',fld:'vMODELOPREVENDADESCRICAOFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV30SnErro',fld:'vSNERRO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV39Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV32ModeloPreVendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV35ModeloPrevendaDescricaoFiltro',fld:'vMODELOPREVENDADESCRICAOFILTRO'},{av:'AV33ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpCop',fld:'vBMPCOP'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV34ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8946ModeloPreVendaCodigo',fld:'MODELOPREVENDACODIGO'},{av:'A7266ModeloPreVendaTipo',fld:'MODELOPREVENDATIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV32ModeloPreVendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV34ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'},{av:'AV35ModeloPrevendaDescricaoFiltro',fld:'vMODELOPREVENDADESCRICAOFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A7266ModeloPreVendaTipo',fld:'MODELOPREVENDATIPO'},{av:'A8946ModeloPreVendaCodigo',fld:'MODELOPREVENDACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8946ModeloPreVendaCodigo',fld:'MODELOPREVENDACODIGO'},{av:'A7266ModeloPreVendaTipo',fld:'MODELOPREVENDATIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV32ModeloPreVendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV34ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'},{av:'AV35ModeloPrevendaDescricaoFiltro',fld:'vMODELOPREVENDADESCRICAOFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A7266ModeloPreVendaTipo',fld:'MODELOPREVENDATIPO'},{av:'A8946ModeloPreVendaCodigo',fld:'MODELOPREVENDACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8946ModeloPreVendaCodigo',fld:'MODELOPREVENDACODIGO'},{av:'A7266ModeloPreVendaTipo',fld:'MODELOPREVENDATIPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV32ModeloPreVendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV34ModeloPreVendaDescricao',fld:'vMODELOPREVENDADESCRICAO'},{av:'AV35ModeloPrevendaDescricaoFiltro',fld:'vMODELOPREVENDADESCRICAOFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[{av:'A7266ModeloPreVendaTipo',fld:'MODELOPREVENDATIPO'},{av:'A8946ModeloPreVendaCodigo',fld:'MODELOPREVENDACODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV32ModeloPreVendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV35ModeloPrevendaDescricaoFiltro',fld:'vMODELOPREVENDADESCRICAOFILTRO'},{av:'AV33ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpCop',fld:'vBMPCOP'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'},{av:'A8946ModeloPreVendaCodigo',fld:'MODELOPREVENDACODIGO'},{av:'A7266ModeloPreVendaTipo',fld:'MODELOPREVENDATIPO'}],[{av:'A7266ModeloPreVendaTipo',fld:'MODELOPREVENDATIPO'},{av:'A8946ModeloPreVendaCodigo',fld:'MODELOPREVENDACODIGO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ModeloPreVendaTipo',fld:'vMODELOPREVENDATIPO'},{av:'AV32ModeloPreVendaCodigo',fld:'vMODELOPREVENDACODIGO'},{av:'AV35ModeloPrevendaDescricaoFiltro',fld:'vMODELOPREVENDADESCRICAOFILTRO'},{av:'AV33ModeloPrevendaEmpresaId',fld:'vMODELOPREVENDAEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31bmpCop',fld:'vBMPCOP'},{av:'AV36SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV39Pgmname',fld:'vPGMNAME'}],[]];
   this.setPrompt("IMGPROMPT", [21,13]);
   this.setVCMap("AV36SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV39Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV36SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV39Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpCop", rfrProp:"Value", gxAttId:"Bmpcop"});
   GridContainer.addRefreshingVar({rfrVar:"AV36SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV39Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodeloprevenda());

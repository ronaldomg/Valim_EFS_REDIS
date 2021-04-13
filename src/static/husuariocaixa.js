/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 6:4:17.77
*/
gx.evt.autoSkip = false;
gx.define('husuariocaixa', false, function () {
   this.ServerClass =  "husuariocaixa" ;
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
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11qp2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12qp2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17qp2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13qp2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14qp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15qp2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16qp2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e22qp2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e23qp2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e24qp2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e25qp2_client=function()
   {
      this.executeServerEvent("'ETIQUETAUSUARIO'", true, arguments[0], false, false);
   };
   this.e18qp2_client=function()
   {
      this.executeServerEvent("'ETIQUETA'", true, null, false, false);
   };
   this.e26qp2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e27qp2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e28qp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,18,21,24,26,28,30,32,34,36,39,41,42,46,47,48,49,50,51,52,53,60,61];
   this.GXLastCtrlId =61;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",45,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"husuariocaixa",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3439,46,"USUARIOCAIXAID","","","UsuarioCaixaId","char",0,"px",12,12,"left",null,[],3439,"UsuarioCaixaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpsnsupervisor","vBMPSNSUPERVISOR",47,0,"px",17,"px",null,"","Supervisor","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(4169,48,"USUARIOCAIXACAIXABANCODESCRICA","","","UsuarioCaixaCaixaBancoDescrica","svchar",0,"px",25,25,"left",null,[],4169,"UsuarioCaixaCaixaBancoDescrica",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpetq","vBMPETQ",49,0,"px",17,"px","e25qp2_client","","Etiqueta","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",50,0,"px",17,"px","e22qp2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",51,0,"px",17,"px","e23qp2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",52,0,"px",17,"px","e24qp2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(4163,53,"USUARIOCAIXASNSUPERVISOR","Supervisor","","UsuarioCaixaSnSupervisor","char",0,"px",1,1,"left",null,[],4163,"UsuarioCaixaSnSupervisor",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vUSUARIOCAIXAID",gxz:"ZV27UsuarioCaixaId",gxold:"OV27UsuarioCaixaId",gxvar:"AV27UsuarioCaixaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27UsuarioCaixaId=Value},v2z:function(Value){gx.O.ZV27UsuarioCaixaId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOCAIXAID",gx.O.AV27UsuarioCaixaId,0)},c2v:function(){gx.O.AV27UsuarioCaixaId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOCAIXAID")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TABLE4",grid:0};
   GXValidFnc[21]={fld:"TABLE6",grid:0};
   GXValidFnc[24]={fld:"IMAGE2",grid:0};
   GXValidFnc[26]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[28]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[30]={fld:"IMGETQ",grid:0};
   GXValidFnc[32]={fld:"IMAGE1",grid:0};
   GXValidFnc[34]={fld:"BTNHELP",grid:0};
   GXValidFnc[36]={fld:"TABLE5",grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCAIXAID",gxz:"Z3439UsuarioCaixaId",gxold:"O3439UsuarioCaixaId",gxvar:"A3439UsuarioCaixaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3439UsuarioCaixaId=Value},v2z:function(Value){gx.O.Z3439UsuarioCaixaId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOCAIXAID",row || gx.fn.currentGridRowImpl(45),gx.O.A3439UsuarioCaixaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3439UsuarioCaixaId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOCAIXAID",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSNSUPERVISOR",gxz:"ZV29bmpSnSupervisor",gxold:"OV29bmpSnSupervisor",gxvar:"AV29bmpSnSupervisor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpSnSupervisor=Value},v2z:function(Value){gx.O.ZV29bmpSnSupervisor=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSNSUPERVISOR",row || gx.fn.currentGridRowImpl(45),gx.O.AV29bmpSnSupervisor,gx.O.AV40Bmpsnsupervisor_GXI)},c2v:function(){gx.O.AV40Bmpsnsupervisor_GXI=this.val_GXI();gx.O.AV29bmpSnSupervisor=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSNSUPERVISOR",row || gx.fn.currentGridRowImpl(45))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSNSUPERVISOR_GXI",row || gx.fn.currentGridRowImpl(45))}, gxvar_GXI:'AV40Bmpsnsupervisor_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCAIXACAIXABANCODESCRICA",gxz:"Z4169UsuarioCaixaCaixaBancoDescrica",gxold:"O4169UsuarioCaixaCaixaBancoDescrica",gxvar:"A4169UsuarioCaixaCaixaBancoDescrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4169UsuarioCaixaCaixaBancoDescrica=Value},v2z:function(Value){gx.O.Z4169UsuarioCaixaCaixaBancoDescrica=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOCAIXACAIXABANCODESCRICA",row || gx.fn.currentGridRowImpl(45),gx.O.A4169UsuarioCaixaCaixaBancoDescrica,0)},c2v:function(){gx.O.A4169UsuarioCaixaCaixaBancoDescrica=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOCAIXACAIXABANCODESCRICA",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPETQ",gxz:"ZV30bmpEtq",gxold:"OV30bmpEtq",gxvar:"AV30bmpEtq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpEtq=Value},v2z:function(Value){gx.O.ZV30bmpEtq=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPETQ",row || gx.fn.currentGridRowImpl(45),gx.O.AV30bmpEtq,gx.O.AV39Bmpetq_GXI)},c2v:function(){gx.O.AV39Bmpetq_GXI=this.val_GXI();gx.O.AV30bmpEtq=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPETQ",row || gx.fn.currentGridRowImpl(45))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPETQ_GXI",row || gx.fn.currentGridRowImpl(45))}, gxvar_GXI:'AV39Bmpetq_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(45),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(45))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(45))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(45),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(45))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(45))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(45),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(45))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(45))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:45,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCAIXASNSUPERVISOR",gxz:"Z4163UsuarioCaixaSnSupervisor",gxold:"O4163UsuarioCaixaSnSupervisor",gxvar:"A4163UsuarioCaixaSnSupervisor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4163UsuarioCaixaSnSupervisor=Value},v2z:function(Value){gx.O.Z4163UsuarioCaixaSnSupervisor=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOCAIXASNSUPERVISOR",row || gx.fn.currentGridRowImpl(45),gx.O.A4163UsuarioCaixaSnSupervisor,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4163UsuarioCaixaSnSupervisor=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOCAIXASNSUPERVISOR",row || gx.fn.currentGridRowImpl(45))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"PROMPT_USUARIOCAIXAID",grid:0};
   this.AV27UsuarioCaixaId = "" ;
   this.ZV27UsuarioCaixaId = "" ;
   this.OV27UsuarioCaixaId = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3439UsuarioCaixaId = "" ;
   this.O3439UsuarioCaixaId = "" ;
   this.ZV29bmpSnSupervisor = "" ;
   this.OV29bmpSnSupervisor = "" ;
   this.Z4169UsuarioCaixaCaixaBancoDescrica = "" ;
   this.O4169UsuarioCaixaCaixaBancoDescrica = "" ;
   this.ZV30bmpEtq = "" ;
   this.OV30bmpEtq = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z4163UsuarioCaixaSnSupervisor = "" ;
   this.O4163UsuarioCaixaSnSupervisor = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27UsuarioCaixaId = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A4167UsuarioCaixaCaixaBancoEmpId = "" ;
   this.A4168UsuarioCaixaCaixaBancoId = 0 ;
   this.A3439UsuarioCaixaId = "" ;
   this.AV29bmpSnSupervisor = "" ;
   this.A4169UsuarioCaixaCaixaBancoDescrica = "" ;
   this.AV30bmpEtq = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A4163UsuarioCaixaSnSupervisor = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.AV34Pgmname = "" ;
   this.Events = {"e11qp2_client": ["'ANTERIOR'", true] ,"e12qp2_client": ["'PROXIMO'", true] ,"e17qp2_client": ["VPAGINA.CLICK", true] ,"e13qp2_client": ["'NOVO'", true] ,"e14qp2_client": ["'FECHAR'", true] ,"e15qp2_client": ["'IMPRIMIR'", true] ,"e16qp2_client": ["'PROCURAR'", true] ,"e22qp2_client": ["'ALTERAR'", true] ,"e23qp2_client": ["'EXCLUIR'", true] ,"e24qp2_client": ["'CONSULTAR'", true] ,"e25qp2_client": ["'ETIQUETAUSUARIO'", true] ,"e18qp2_client": ["'ETIQUETA'", true] ,"e26qp2_client": ["'ATUALIZAPAGINA'", true] ,"e27qp2_client": ["ENTER", true] ,"e28qp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'}],[{ctrl:'USUARIOCAIXAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOCAIXAID","Title")',ctrl:'USUARIOCAIXAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'USUARIOCAIXACAIXABANCODESCRICA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOCAIXACAIXABANCODESCRICA","Title")',ctrl:'USUARIOCAIXACAIXABANCODESCRICA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'}],[{av:'AV29bmpSnSupervisor',fld:'vBMPSNSUPERVISOR'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV35Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV41Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV28SnErro',fld:'vSNERRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3439UsuarioCaixaId',fld:'USUARIOCAIXAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A3439UsuarioCaixaId',fld:'USUARIOCAIXAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3439UsuarioCaixaId',fld:'USUARIOCAIXAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A3439UsuarioCaixaId',fld:'USUARIOCAIXAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3439UsuarioCaixaId',fld:'USUARIOCAIXAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV34Pgmname',fld:'vPGMNAME'}],[{av:'A3439UsuarioCaixaId',fld:'USUARIOCAIXAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ETIQUETAUSUARIO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'},{av:'A3439UsuarioCaixaId',fld:'USUARIOCAIXAID'}],[]];
   this.EvtParms["'ETIQUETA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27UsuarioCaixaId',fld:'vUSUARIOCAIXAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV30bmpEtq',fld:'vBMPETQ'},{av:'gx.fn.getCtrlProperty("vBMPETQ","Tooltiptext")',ctrl:'vBMPETQ',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'A4163UsuarioCaixaSnSupervisor',fld:'USUARIOCAIXASNSUPERVISOR'}],[]];
   this.setPrompt("PROMPT_USUARIOCAIXAID", [13]);
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpEtq", rfrProp:"Value", gxAttId:"Bmpetq"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpEtq", rfrProp:"Tooltiptext", gxAttId:"Bmpetq"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV34Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A4163UsuarioCaixaSnSupervisor", rfrProp:"Value", gxAttId:"4163"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new husuariocaixa());

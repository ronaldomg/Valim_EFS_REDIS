/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:59.67
*/
gx.evt.autoSkip = false;
gx.define('hdeptocompras', false, function () {
   this.ServerClass =  "hdeptocompras" ;
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
      this.AV35Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11o12_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12o12_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17o12_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13o12_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14o12_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15o12_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16o12_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20o12_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21o12_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22o12_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23o12_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25o12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26o12_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,44,47,49,50,54,55,56,57,58,59,66,67];
   this.GXLastCtrlId =67;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdeptocompras",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3488,54,"DEPTOCOMPRASCODIGO","","","DeptoComprasCodigo","svchar",0,"px",15,15,"left",null,[],3488,"DeptoComprasCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3483,55,"DEPTOCOMPRASNOME","","","DeptoComprasNome","svchar",0,"px",40,40,"left",null,[],3483,"DeptoComprasNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3484,56,"DEPTOCOMPRASRESPONSAVEL","","","DeptoComprasResponsavel","svchar",0,"px",40,40,"left",null,[],3484,"DeptoComprasResponsavel",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",57,0,"px",17,"px","e20o12_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",58,0,"px",17,"px","e21o12_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",59,0,"px",17,"px","e22o12_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPTOCOMPRASCODIGO",gxz:"ZV27DeptoComprasCodigo",gxold:"OV27DeptoComprasCodigo",gxvar:"AV27DeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27DeptoComprasCodigo=Value},v2z:function(Value){gx.O.ZV27DeptoComprasCodigo=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASCODIGO",gx.O.AV27DeptoComprasCodigo,0)},c2v:function(){gx.O.AV27DeptoComprasCodigo=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASCODIGO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPTOCOMPRASNOME",gxz:"ZV28DeptoComprasNome",gxold:"OV28DeptoComprasNome",gxvar:"AV28DeptoComprasNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DeptoComprasNome=Value},v2z:function(Value){gx.O.ZV28DeptoComprasNome=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASNOME",gx.O.AV28DeptoComprasNome,0)},c2v:function(){gx.O.AV28DeptoComprasNome=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASNOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDEPTOCOMPRASRESPONSAVEL",gxz:"ZV29DeptoComprasResponsavel",gxold:"OV29DeptoComprasResponsavel",gxvar:"AV29DeptoComprasResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DeptoComprasResponsavel=Value},v2z:function(Value){gx.O.ZV29DeptoComprasResponsavel=Value},v2c:function(){gx.fn.setControlValue("vDEPTOCOMPRASRESPONSAVEL",gx.O.AV29DeptoComprasResponsavel,0)},c2v:function(){gx.O.AV29DeptoComprasResponsavel=this.val()},val:function(){return gx.fn.getControlValue("vDEPTOCOMPRASRESPONSAVEL")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE1",grid:0};
   GXValidFnc[34]={fld:"IMAGE2",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"IMAGE1",grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASCODIGO",gxz:"Z3488DeptoComprasCodigo",gxold:"O3488DeptoComprasCodigo",gxvar:"A3488DeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3488DeptoComprasCodigo=Value},v2z:function(Value){gx.O.Z3488DeptoComprasCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("DEPTOCOMPRASCODIGO",row || gx.fn.currentGridRowImpl(53),gx.O.A3488DeptoComprasCodigo,0)},c2v:function(){gx.O.A3488DeptoComprasCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPTOCOMPRASCODIGO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASNOME",gxz:"Z3483DeptoComprasNome",gxold:"O3483DeptoComprasNome",gxvar:"A3483DeptoComprasNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3483DeptoComprasNome=Value},v2z:function(Value){gx.O.Z3483DeptoComprasNome=Value},v2c:function(row){gx.fn.setGridControlValue("DEPTOCOMPRASNOME",row || gx.fn.currentGridRowImpl(53),gx.O.A3483DeptoComprasNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3483DeptoComprasNome=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPTOCOMPRASNOME",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASRESPONSAVEL",gxz:"Z3484DeptoComprasResponsavel",gxold:"O3484DeptoComprasResponsavel",gxvar:"A3484DeptoComprasResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3484DeptoComprasResponsavel=Value},v2z:function(Value){gx.O.Z3484DeptoComprasResponsavel=Value},v2c:function(row){gx.fn.setGridControlValue("DEPTOCOMPRASRESPONSAVEL",row || gx.fn.currentGridRowImpl(53),gx.O.A3484DeptoComprasResponsavel,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3484DeptoComprasResponsavel=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPTOCOMPRASRESPONSAVEL",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(53),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(53),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"JS", format:2,grid:0};
   this.AV27DeptoComprasCodigo = "" ;
   this.ZV27DeptoComprasCodigo = "" ;
   this.OV27DeptoComprasCodigo = "" ;
   this.AV28DeptoComprasNome = "" ;
   this.ZV28DeptoComprasNome = "" ;
   this.OV28DeptoComprasNome = "" ;
   this.AV29DeptoComprasResponsavel = "" ;
   this.ZV29DeptoComprasResponsavel = "" ;
   this.OV29DeptoComprasResponsavel = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3488DeptoComprasCodigo = "" ;
   this.O3488DeptoComprasCodigo = "" ;
   this.Z3483DeptoComprasNome = "" ;
   this.O3483DeptoComprasNome = "" ;
   this.Z3484DeptoComprasResponsavel = "" ;
   this.O3484DeptoComprasResponsavel = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27DeptoComprasCodigo = "" ;
   this.AV28DeptoComprasNome = "" ;
   this.AV29DeptoComprasResponsavel = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A3487DeptoComprasEmpresaId = "" ;
   this.A3488DeptoComprasCodigo = "" ;
   this.A3483DeptoComprasNome = "" ;
   this.A3484DeptoComprasResponsavel = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.AV35Pgmname = "" ;
   this.Events = {"e11o12_client": ["'ANTERIOR'", true] ,"e12o12_client": ["'PROXIMO'", true] ,"e17o12_client": ["VPAGINA.CLICK", true] ,"e13o12_client": ["'NOVO'", true] ,"e14o12_client": ["'FECHAR'", true] ,"e15o12_client": ["'IMPRIMIR'", true] ,"e16o12_client": ["'PROCURAR'", true] ,"e20o12_client": ["'ALTERAR'", true] ,"e21o12_client": ["'EXCLUIR'", true] ,"e22o12_client": ["'CONSULTAR'", true] ,"e23o12_client": ["'ATUALIZAPAGINA'", true] ,"e25o12_client": ["ENTER", true] ,"e26o12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV28DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV29DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV28DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV29DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[{ctrl:'DEPTOCOMPRASCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPTOCOMPRASCODIGO","Title")',ctrl:'DEPTOCOMPRASCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'DEPTOCOMPRASNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPTOCOMPRASNOME","Title")',ctrl:'DEPTOCOMPRASNOME',prop:'Title'},{ctrl:'DEPTOCOMPRASRESPONSAVEL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DEPTOCOMPRASRESPONSAVEL","Title")',ctrl:'DEPTOCOMPRASRESPONSAVEL',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV28DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV29DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV28DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV29DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV28DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV29DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV28DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV29DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV28DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV29DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'}],[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV36Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV32QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV28DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV29DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV28DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV29DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'}],[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV28DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV29DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'}],[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'},{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV28DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV29DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'}],[{av:'AV35Pgmname',fld:'vPGMNAME'},{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27DeptoComprasCodigo',fld:'vDEPTOCOMPRASCODIGO'},{av:'AV28DeptoComprasNome',fld:'vDEPTOCOMPRASNOME'},{av:'AV29DeptoComprasResponsavel',fld:'vDEPTOCOMPRASRESPONSAVEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'gx.fn.getCtrlProperty("vBMPALT","Visible")',ctrl:'vBMPALT',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV35Pgmname',fld:'vPGMNAME'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV35Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Visible", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Visible", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV35Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdeptocompras());

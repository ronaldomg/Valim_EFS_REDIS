/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:59:2.29
*/
gx.evt.autoSkip = false;
gx.define('htrndesc', false, function () {
   this.ServerClass =  "htrndesc" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV30SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e118u2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e128u2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e168u2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e138u2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e148u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e158u2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e208u2_client=function()
   {
      this.executeServerEvent("'DUPLICAR'", true, arguments[0], false, false);
   };
   this.e218u2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e228u2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e238u2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,40,42,43,47,48,49,50,51,52,53,54,61];
   this.GXLastCtrlId =61;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htrndesc",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1363,47,"TRNDESCSIGLA","","","TrnDescSigla","char",0,"px",8,8,"left",null,[],1363,"TrnDescSigla",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1303,48,"TRNDESCDESCRICAO","","","TrnDescDescricao","svchar",0,"px",40,40,"left",null,[],1303,"TrnDescDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmptrndesc","vBMPTRNDESC",49,0,"px",17,"px","e208u2_client","","Duplicar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",50,0,"px",17,"px",null,"","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",51,0,"px",17,"px",null,"","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",52,0,"px",17,"px",null,"","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1362,53,"TRNDESCEMPRESAID","Empresa","","TrnDescEmpresaId","char",0,"px",10,10,"left",null,[],1362,"TrnDescEmpresaId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1362,53,"TRNDESCEMPRESAID","Empresa","","TrnDescEmpresaId","char",0,"px",10,10,"left",null,[],1362,"TrnDescEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRNDESCSIGLA",gxz:"ZV27TrnDescSigla",gxold:"OV27TrnDescSigla",gxvar:"AV27TrnDescSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TrnDescSigla=Value},v2z:function(Value){gx.O.ZV27TrnDescSigla=Value},v2c:function(){gx.fn.setControlValue("vTRNDESCSIGLA",gx.O.AV27TrnDescSigla,0)},c2v:function(){gx.O.AV27TrnDescSigla=this.val()},val:function(){return gx.fn.getControlValue("vTRNDESCSIGLA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTRNDESCDESCRICAO",gxz:"ZV28TrnDescDescricao",gxold:"OV28TrnDescDescricao",gxvar:"AV28TrnDescDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TrnDescDescricao=Value},v2z:function(Value){gx.O.ZV28TrnDescDescricao=Value},v2c:function(){gx.fn.setControlValue("vTRNDESCDESCRICAO",gx.O.AV28TrnDescDescricao,0)},c2v:function(){gx.O.AV28TrnDescDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTRNDESCDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE8",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   GXValidFnc[37]={fld:"TABLE5",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCSIGLA",gxz:"Z1363TrnDescSigla",gxold:"O1363TrnDescSigla",gxvar:"A1363TrnDescSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1363TrnDescSigla=Value},v2z:function(Value){gx.O.Z1363TrnDescSigla=Value},v2c:function(row){gx.fn.setGridControlValue("TRNDESCSIGLA",row || gx.fn.currentGridRowImpl(46),gx.O.A1363TrnDescSigla,0)},c2v:function(){gx.O.A1363TrnDescSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNDESCSIGLA",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCDESCRICAO",gxz:"Z1303TrnDescDescricao",gxold:"O1303TrnDescDescricao",gxvar:"A1303TrnDescDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1303TrnDescDescricao=Value},v2z:function(Value){gx.O.Z1303TrnDescDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRNDESCDESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A1303TrnDescDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1303TrnDescDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNDESCDESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPTRNDESC",gxz:"ZV29bmpTrnDesc",gxold:"OV29bmpTrnDesc",gxvar:"AV29bmpTrnDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpTrnDesc=Value},v2z:function(Value){gx.O.ZV29bmpTrnDesc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPTRNDESC",row || gx.fn.currentGridRowImpl(46),gx.O.AV29bmpTrnDesc,gx.O.AV38Bmptrndesc_GXI)},c2v:function(){gx.O.AV38Bmptrndesc_GXI=this.val_GXI();gx.O.AV29bmpTrnDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPTRNDESC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPTRNDESC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV38Bmptrndesc_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(46),gx.O.AV7bmpAlt,gx.O.AV35Bmpalt_GXI)},c2v:function(){gx.O.AV35Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV35Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46),gx.O.AV8bmpExc,gx.O.AV36Bmpexc_GXI)},c2v:function(){gx.O.AV36Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV36Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(46),gx.O.AV16bmpCon,gx.O.AV37Bmpcon_GXI)},c2v:function(){gx.O.AV37Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV37Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCEMPRESAID",gxz:"Z1362TrnDescEmpresaId",gxold:"O1362TrnDescEmpresaId",gxvar:"A1362TrnDescEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1362TrnDescEmpresaId=Value},v2z:function(Value){gx.O.Z1362TrnDescEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRNDESCEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A1362TrnDescEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1362TrnDescEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNDESCEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TRNDESCEMPRESAID",gxz:"Z1362TrnDescEmpresaId",gxold:"O1362TrnDescEmpresaId",gxvar:"A1362TrnDescEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1362TrnDescEmpresaId=Value},v2z:function(Value){gx.O.Z1362TrnDescEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRNDESCEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A1362TrnDescEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1362TrnDescEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRNDESCEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27TrnDescSigla = "" ;
   this.ZV27TrnDescSigla = "" ;
   this.OV27TrnDescSigla = "" ;
   this.AV28TrnDescDescricao = "" ;
   this.ZV28TrnDescDescricao = "" ;
   this.OV28TrnDescDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1363TrnDescSigla = "" ;
   this.O1363TrnDescSigla = "" ;
   this.Z1303TrnDescDescricao = "" ;
   this.O1303TrnDescDescricao = "" ;
   this.ZV29bmpTrnDesc = "" ;
   this.OV29bmpTrnDesc = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1362TrnDescEmpresaId = "" ;
   this.O1362TrnDescEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TrnDescSigla = "" ;
   this.AV28TrnDescDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A1363TrnDescSigla = "" ;
   this.A1303TrnDescDescricao = "" ;
   this.AV29bmpTrnDesc = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1362TrnDescEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV30SnRecuperaFiltro = "" ;
   this.Events = {"e118u2_client": ["'ANTERIOR'", true] ,"e128u2_client": ["'PROXIMO'", true] ,"e168u2_client": ["VPAGINA.CLICK", true] ,"e138u2_client": ["'NOVO'", true] ,"e148u2_client": ["'FECHAR'", true] ,"e158u2_client": ["'PROCURAR'", true] ,"e208u2_client": ["'DUPLICAR'", true] ,"e218u2_client": ["'ATUALIZAPAGINA'", true] ,"e228u2_client": ["ENTER", true] ,"e238u2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV28TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1363TrnDescSigla',fld:'TRNDESCSIGLA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV28TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1363TrnDescSigla',fld:'TRNDESCSIGLA'}],[{ctrl:'TRNDESCSIGLA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRNDESCSIGLA","Title")',ctrl:'TRNDESCSIGLA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TRNDESCDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TRNDESCDESCRICAO","Title")',ctrl:'TRNDESCDESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV27TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV28TrnDescDescricao',fld:'vTRNDESCDESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV28TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1363TrnDescSigla',fld:'TRNDESCSIGLA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV28TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1363TrnDescSigla',fld:'TRNDESCSIGLA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1363TrnDescSigla',fld:'TRNDESCSIGLA'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Link")',ctrl:'vBMPALT',prop:'Link'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Link")',ctrl:'vBMPEXC',prop:'Link'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:'vBMPCON',prop:'Link'},{av:'AV29bmpTrnDesc',fld:'vBMPTRNDESC'},{av:'gx.fn.getCtrlProperty("vBMPTRNDESC","Tooltiptext")',ctrl:'vBMPTRNDESC',prop:'Tooltiptext'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV28TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1363TrnDescSigla',fld:'TRNDESCSIGLA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV28TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1363TrnDescSigla',fld:'TRNDESCSIGLA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'DUPLICAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV28TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1363TrnDescSigla',fld:'TRNDESCSIGLA'},{av:'A1362TrnDescEmpresaId',fld:'TRNDESCEMPRESAID'},{av:'A1303TrnDescDescricao',fld:'TRNDESCDESCRICAO'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TrnDescSigla',fld:'vTRNDESCSIGLA'},{av:'AV28TrnDescDescricao',fld:'vTRNDESCDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV30SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'A1363TrnDescSigla',fld:'TRNDESCSIGLA'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV30SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV30SnRecuperaFiltro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar({rfrVar:"A1363TrnDescSigla", rfrProp:"Value", gxAttId:"1363"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htrndesc());

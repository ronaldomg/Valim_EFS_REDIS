/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:59:4.29
*/
gx.evt.autoSkip = false;
gx.define('hlayoutdocumento', false, function () {
   this.ServerClass =  "hlayoutdocumento" ;
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
      this.AV28ModeloDocumentoId=gx.fn.getIntegerValue("vMODELODOCUMENTOID",'.') ;
      this.AV32SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A1278LayoutDocumentoConteudo=gx.fn.getControlValue("LAYOUTDOCUMENTOCONTEUDO") ;
      this.AV27ModeloDocumentoEmpresaId=gx.fn.getControlValue("vMODELODOCUMENTOEMPRESAID") ;
   };
   this.e118x2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e128x2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e208x2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e218x2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e228x2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e168x2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e138x2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e148x2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e158x2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e238x2_client=function()
   {
      this.executeServerEvent("'SUBIR'", true, arguments[0], false, false);
   };
   this.e248x2_client=function()
   {
      this.executeServerEvent("'DESCER'", true, arguments[0], false, false);
   };
   this.e258x2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e268x2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e278x2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,22,24,25,29,30,31,32,33,34,35,36,37,38,44];
   this.GXLastCtrlId =44;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hlayoutdocumento",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Descricao",29,"vDESCRICAO","","","Descricao","svchar",0,"px",80,80,"left",null,[],"Descricao","Descricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1279,30,"LAYOUTDOCUMENTOLINHAINI","","","LayoutDocumentoLinhaIni","int",0,"px",4,4,"right",null,[],1279,"LayoutDocumentoLinhaIni",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1280,31,"LAYOUTDOCUMENTOCOLUNAINI","","","LayoutDocumentoColunaIni","int",0,"px",4,4,"right",null,[],1280,"LayoutDocumentoColunaIni",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",32,0,"px",17,"px","e208x2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",33,0,"px",17,"px","e218x2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",34,0,"px",17,"px","e228x2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1284,35,"LAYOUTDOCUMENTOSEQ","Sequência","","LayoutDocumentoSeq","int",0,"px",4,4,"right",null,[],1284,"LayoutDocumentoSeq",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpasc","vBMPASC",36,0,"px",17,"px","e238x2_client","","Sobe","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpdesc","vBMPDESC",37,0,"px",17,"px","e248x2_client","","Desce","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1286,38,"MODELODOCUMENTOQTDELINHAS","Quantidade de Linhas","","ModeloDocumentoQtdeLinhas","int",0,"px",4,4,"right",null,[],1286,"ModeloDocumentoQtdeLinhas",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"TABLE5",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:0,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV29Descricao",gxold:"OV29Descricao",gxvar:"AV29Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29Descricao=Value},v2z:function(Value){gx.O.ZV29Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(28),gx.O.AV29Descricao,0)},c2v:function(){gx.O.AV29Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOLINHAINI",gxz:"Z1279LayoutDocumentoLinhaIni",gxold:"O1279LayoutDocumentoLinhaIni",gxvar:"A1279LayoutDocumentoLinhaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1279LayoutDocumentoLinhaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1279LayoutDocumentoLinhaIni=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LAYOUTDOCUMENTOLINHAINI",row || gx.fn.currentGridRowImpl(28),gx.O.A1279LayoutDocumentoLinhaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1279LayoutDocumentoLinhaIni=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LAYOUTDOCUMENTOLINHAINI",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOCOLUNAINI",gxz:"Z1280LayoutDocumentoColunaIni",gxold:"O1280LayoutDocumentoColunaIni",gxvar:"A1280LayoutDocumentoColunaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1280LayoutDocumentoColunaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1280LayoutDocumentoColunaIni=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LAYOUTDOCUMENTOCOLUNAINI",row || gx.fn.currentGridRowImpl(28),gx.O.A1280LayoutDocumentoColunaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1280LayoutDocumentoColunaIni=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LAYOUTDOCUMENTOCOLUNAINI",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(28),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LAYOUTDOCUMENTOSEQ",gxz:"Z1284LayoutDocumentoSeq",gxold:"O1284LayoutDocumentoSeq",gxvar:"A1284LayoutDocumentoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1284LayoutDocumentoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1284LayoutDocumentoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LAYOUTDOCUMENTOSEQ",row || gx.fn.currentGridRowImpl(28),gx.O.A1284LayoutDocumentoSeq,0)},c2v:function(){gx.O.A1284LayoutDocumentoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LAYOUTDOCUMENTOSEQ",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPASC",gxz:"ZV30bmpAsc",gxold:"OV30bmpAsc",gxvar:"AV30bmpAsc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpAsc=Value},v2z:function(Value){gx.O.ZV30bmpAsc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPASC",row || gx.fn.currentGridRowImpl(28),gx.O.AV30bmpAsc,gx.O.AV37Bmpasc_GXI)},c2v:function(){gx.O.AV37Bmpasc_GXI=this.val_GXI();gx.O.AV30bmpAsc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPASC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPASC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV37Bmpasc_GXI',nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDESC",gxz:"ZV31bmpDesc",gxold:"OV31bmpDesc",gxvar:"AV31bmpDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31bmpDesc=Value},v2z:function(Value){gx.O.ZV31bmpDesc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDESC",row || gx.fn.currentGridRowImpl(28),gx.O.AV31bmpDesc,gx.O.AV38Bmpdesc_GXI)},c2v:function(){gx.O.AV38Bmpdesc_GXI=this.val_GXI();gx.O.AV31bmpDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDESC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDESC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV38Bmpdesc_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCUMENTOQTDELINHAS",gxz:"Z1286ModeloDocumentoQtdeLinhas",gxold:"O1286ModeloDocumentoQtdeLinhas",gxvar:"A1286ModeloDocumentoQtdeLinhas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1286ModeloDocumentoQtdeLinhas=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1286ModeloDocumentoQtdeLinhas=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MODELODOCUMENTOQTDELINHAS",row || gx.fn.currentGridRowImpl(28),gx.O.A1286ModeloDocumentoQtdeLinhas,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1286ModeloDocumentoQtdeLinhas=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MODELODOCUMENTOQTDELINHAS",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.ZV29Descricao = "" ;
   this.OV29Descricao = "" ;
   this.Z1279LayoutDocumentoLinhaIni = 0 ;
   this.O1279LayoutDocumentoLinhaIni = 0 ;
   this.Z1280LayoutDocumentoColunaIni = 0 ;
   this.O1280LayoutDocumentoColunaIni = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1284LayoutDocumentoSeq = 0 ;
   this.O1284LayoutDocumentoSeq = 0 ;
   this.ZV30bmpAsc = "" ;
   this.OV30bmpAsc = "" ;
   this.ZV31bmpDesc = "" ;
   this.OV31bmpDesc = "" ;
   this.Z1286ModeloDocumentoQtdeLinhas = 0 ;
   this.O1286ModeloDocumentoQtdeLinhas = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV27ModeloDocumentoEmpresaId = "" ;
   this.AV28ModeloDocumentoId = 0 ;
   this.A1278LayoutDocumentoConteudo = "" ;
   this.A1024ModeloDocumentoId = 0 ;
   this.A1023ModeloDocumentoEmpresaId = "" ;
   this.AV29Descricao = "" ;
   this.A1279LayoutDocumentoLinhaIni = 0 ;
   this.A1280LayoutDocumentoColunaIni = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A1284LayoutDocumentoSeq = 0 ;
   this.AV30bmpAsc = "" ;
   this.AV31bmpDesc = "" ;
   this.A1286ModeloDocumentoQtdeLinhas = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV32SnRecuperaFiltro = "" ;
   this.Events = {"e118x2_client": ["'ANTERIOR'", true] ,"e128x2_client": ["'PROXIMO'", true] ,"e208x2_client": ["'ALTERAR'", true] ,"e218x2_client": ["'EXCLUIR'", true] ,"e228x2_client": ["'CONSULTAR'", true] ,"e168x2_client": ["VPAGINA.CLICK", true] ,"e138x2_client": ["'NOVO'", true] ,"e148x2_client": ["'FECHAR'", true] ,"e158x2_client": ["'PROCURAR'", true] ,"e238x2_client": ["'SUBIR'", true] ,"e248x2_client": ["'DESCER'", true] ,"e258x2_client": ["'ATUALIZAPAGINA'", true] ,"e268x2_client": ["ENTER", true] ,"e278x2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'AV30bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1278LayoutDocumentoConteudo',fld:'LAYOUTDOCUMENTOCONTEUDO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'AV30bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1278LayoutDocumentoConteudo',fld:'LAYOUTDOCUMENTOCONTEUDO'}],[{ctrl:'vDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDESCRICAO","Title")',ctrl:'vDESCRICAO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'LAYOUTDOCUMENTOLINHAINI',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LAYOUTDOCUMENTOLINHAINI","Title")',ctrl:'LAYOUTDOCUMENTOLINHAINI',prop:'Title'},{ctrl:'LAYOUTDOCUMENTOCOLUNAINI',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LAYOUTDOCUMENTOCOLUNAINI","Title")',ctrl:'LAYOUTDOCUMENTOCOLUNAINI',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'AV30bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1278LayoutDocumentoConteudo',fld:'LAYOUTDOCUMENTOCONTEUDO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'AV30bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1278LayoutDocumentoConteudo',fld:'LAYOUTDOCUMENTOCONTEUDO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1278LayoutDocumentoConteudo',fld:'LAYOUTDOCUMENTOCONTEUDO'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29Descricao',fld:'vDESCRICAO'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV27ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID',hsh:true},{av:'AV28ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'A1284LayoutDocumentoSeq',fld:'LAYOUTDOCUMENTOSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV27ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID',hsh:true},{av:'AV28ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'A1284LayoutDocumentoSeq',fld:'LAYOUTDOCUMENTOSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV27ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID',hsh:true},{av:'AV28ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'A1284LayoutDocumentoSeq',fld:'LAYOUTDOCUMENTOSEQ'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'AV30bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1278LayoutDocumentoConteudo',fld:'LAYOUTDOCUMENTOCONTEUDO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID',hsh:true},{av:'AV28ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'AV30bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1278LayoutDocumentoConteudo',fld:'LAYOUTDOCUMENTOCONTEUDO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'SUBIR'"] = [[{av:'AV27ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID',hsh:true},{av:'AV28ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'A1284LayoutDocumentoSeq',fld:'LAYOUTDOCUMENTOSEQ'},{av:'A1279LayoutDocumentoLinhaIni',fld:'LAYOUTDOCUMENTOLINHAINI'},{av:'A1286ModeloDocumentoQtdeLinhas',fld:'MODELODOCUMENTOQTDELINHAS'}],[]];
   this.EvtParms["'DESCER'"] = [[{av:'AV27ModeloDocumentoEmpresaId',fld:'vMODELODOCUMENTOEMPRESAID',hsh:true},{av:'AV28ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'A1284LayoutDocumentoSeq',fld:'LAYOUTDOCUMENTOSEQ'},{av:'A1279LayoutDocumentoLinhaIni',fld:'LAYOUTDOCUMENTOLINHAINI'},{av:'A1286ModeloDocumentoQtdeLinhas',fld:'MODELODOCUMENTOQTDELINHAS'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV28ModeloDocumentoId',fld:'vMODELODOCUMENTOID',hsh:true},{av:'AV30bmpAsc',fld:'vBMPASC'},{av:'gx.fn.getCtrlProperty("vBMPASC","Tooltiptext")',ctrl:'vBMPASC',prop:'Tooltiptext'},{av:'AV31bmpDesc',fld:'vBMPDESC'},{av:'gx.fn.getCtrlProperty("vBMPDESC","Tooltiptext")',ctrl:'vBMPDESC',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1278LayoutDocumentoConteudo',fld:'LAYOUTDOCUMENTOCONTEUDO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV28ModeloDocumentoId", "vMODELODOCUMENTOID", 0, "int");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1278LayoutDocumentoConteudo", "LAYOUTDOCUMENTOCONTEUDO", 0, "svchar");
   this.setVCMap("AV27ModeloDocumentoEmpresaId", "vMODELODOCUMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV28ModeloDocumentoId", "vMODELODOCUMENTOID", 0, "int");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A1278LayoutDocumentoConteudo", "LAYOUTDOCUMENTOCONTEUDO", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV28ModeloDocumentoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpAsc", rfrProp:"Value", gxAttId:"Bmpasc"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpAsc", rfrProp:"Tooltiptext", gxAttId:"Bmpasc"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpDesc", rfrProp:"Value", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV31bmpDesc", rfrProp:"Tooltiptext", gxAttId:"Bmpdesc"});
   GridContainer.addRefreshingVar({rfrVar:"AV32SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1278LayoutDocumentoConteudo"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlayoutdocumento());

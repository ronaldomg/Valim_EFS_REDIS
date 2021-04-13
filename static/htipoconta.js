/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:2.22
*/
gx.evt.autoSkip = false;
gx.define('htipoconta', false, function () {
   this.ServerClass =  "htipoconta" ;
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
   };
   this.e117t2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e127t2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e217t2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e227t2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e237t2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e177t2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e137t2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e147t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e157t2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e167t2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e247t2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e257t2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e267t2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,63];
   this.GXLastCtrlId =63;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htipoconta",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(942,49,"TIPOCONTAID","","","TipoContaId","int",0,"px",3,3,"right",null,[],942,"TipoContaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(943,50,"TIPOCONTADESCRICAO","","","TipoContaDescricao","svchar",0,"px",25,25,"left",null,[],943,"TipoContaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Descricaotipocontabil",51,"vDESCRICAOTIPOCONTABIL","Tipo Contábil","","DescricaoTipoContabil","svchar",0,"px",40,40,"left",null,[],"Descricaotipocontabil","DescricaoTipoContabil",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(945,52,"TIPOCONTATIPOCONTABIL","Tipo Contábil","TipoContaTipoContabil","char",null,0,false,false,0,"px","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",53,0,"px",17,"px","e217t2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",54,0,"px",17,"px","e227t2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",55,0,"px",17,"px","e237t2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(941,56,"TIPOCONTAEMPRESAID","Empresa","","TipoContaEmpresaId","char",0,"px",10,10,"left",null,[],941,"TipoContaEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCONTADESCRICAO",gxz:"ZV27TipoContaDescricao",gxold:"OV27TipoContaDescricao",gxvar:"AV27TipoContaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TipoContaDescricao=Value},v2z:function(Value){gx.O.ZV27TipoContaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONTADESCRICAO",gx.O.AV27TipoContaDescricao,0)},c2v:function(){gx.O.AV27TipoContaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCONTATIPOCONTABIL",gxz:"ZV28TipoContaTipoContabil",gxold:"OV28TipoContaTipoContabil",gxvar:"AV28TipoContaTipoContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28TipoContaTipoContabil=Value},v2z:function(Value){gx.O.ZV28TipoContaTipoContabil=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCONTATIPOCONTABIL",gx.O.AV28TipoContaTipoContabil)},c2v:function(){gx.O.AV28TipoContaTipoContabil=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTATIPOCONTABIL")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE8",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONTAID",gxz:"Z942TipoContaId",gxold:"O942TipoContaId",gxvar:"A942TipoContaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A942TipoContaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z942TipoContaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOCONTAID",row || gx.fn.currentGridRowImpl(48),gx.O.A942TipoContaId,0)},c2v:function(){gx.O.A942TipoContaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOCONTAID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONTADESCRICAO",gxz:"Z943TipoContaDescricao",gxold:"O943TipoContaDescricao",gxvar:"A943TipoContaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A943TipoContaDescricao=Value},v2z:function(Value){gx.O.Z943TipoContaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCONTADESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.A943TipoContaDescricao,0)},c2v:function(){gx.O.A943TipoContaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCONTADESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAOTIPOCONTABIL",gxz:"ZV29DescricaoTipoContabil",gxold:"OV29DescricaoTipoContabil",gxvar:"AV29DescricaoTipoContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29DescricaoTipoContabil=Value},v2z:function(Value){gx.O.ZV29DescricaoTipoContabil=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAOTIPOCONTABIL",row || gx.fn.currentGridRowImpl(48),gx.O.AV29DescricaoTipoContabil,0)},c2v:function(){gx.O.AV29DescricaoTipoContabil=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAOTIPOCONTABIL",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONTATIPOCONTABIL",gxz:"Z945TipoContaTipoContabil",gxold:"O945TipoContaTipoContabil",gxvar:"A945TipoContaTipoContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A945TipoContaTipoContabil=Value},v2z:function(Value){gx.O.Z945TipoContaTipoContabil=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOCONTATIPOCONTABIL",row || gx.fn.currentGridRowImpl(48),gx.O.A945TipoContaTipoContabil)},c2v:function(){gx.O.A945TipoContaTipoContabil=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCONTATIPOCONTABIL",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCONTAEMPRESAID",gxz:"Z941TipoContaEmpresaId",gxold:"O941TipoContaEmpresaId",gxvar:"A941TipoContaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A941TipoContaEmpresaId=Value},v2z:function(Value){gx.O.Z941TipoContaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCONTAEMPRESAID",row || gx.fn.currentGridRowImpl(48),gx.O.A941TipoContaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A941TipoContaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCONTAEMPRESAID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27TipoContaDescricao = "" ;
   this.ZV27TipoContaDescricao = "" ;
   this.OV27TipoContaDescricao = "" ;
   this.AV28TipoContaTipoContabil = "" ;
   this.ZV28TipoContaTipoContabil = "" ;
   this.OV28TipoContaTipoContabil = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z942TipoContaId = 0 ;
   this.O942TipoContaId = 0 ;
   this.Z943TipoContaDescricao = "" ;
   this.O943TipoContaDescricao = "" ;
   this.ZV29DescricaoTipoContabil = "" ;
   this.OV29DescricaoTipoContabil = "" ;
   this.Z945TipoContaTipoContabil = "" ;
   this.O945TipoContaTipoContabil = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z941TipoContaEmpresaId = "" ;
   this.O941TipoContaEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TipoContaDescricao = "" ;
   this.AV28TipoContaTipoContabil = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A942TipoContaId = 0 ;
   this.A943TipoContaDescricao = "" ;
   this.AV29DescricaoTipoContabil = "" ;
   this.A945TipoContaTipoContabil = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A941TipoContaEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.Events = {"e117t2_client": ["'ANTERIOR'", true] ,"e127t2_client": ["'PROXIMO'", true] ,"e217t2_client": ["'ALTERAR'", true] ,"e227t2_client": ["'EXCLUIR'", true] ,"e237t2_client": ["'CONSULTAR'", true] ,"e177t2_client": ["VPAGINA.CLICK", true] ,"e137t2_client": ["'NOVO'", true] ,"e147t2_client": ["'FECHAR'", true] ,"e157t2_client": ["'IMPRIMIR'", true] ,"e167t2_client": ["'PROCURAR'", true] ,"e247t2_client": ["'ATUALIZAPAGINA'", true] ,"e257t2_client": ["ENTER", true] ,"e267t2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV28TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A945TipoContaTipoContabil',fld:'TIPOCONTATIPOCONTABIL'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV28TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A945TipoContaTipoContabil',fld:'TIPOCONTATIPOCONTABIL'}],[{ctrl:'TIPOCONTAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCONTAID","Title")',ctrl:'TIPOCONTAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPOCONTADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOCONTADESCRICAO","Title")',ctrl:'TIPOCONTADESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV27TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV28TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV28TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A945TipoContaTipoContabil',fld:'TIPOCONTATIPOCONTABIL'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV28TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A945TipoContaTipoContabil',fld:'TIPOCONTATIPOCONTABIL'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A945TipoContaTipoContabil',fld:'TIPOCONTATIPOCONTABIL'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29DescricaoTipoContabil',fld:'vDESCRICAOTIPOCONTABIL'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A942TipoContaId',fld:'TIPOCONTAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV28TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A942TipoContaId',fld:'TIPOCONTAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A942TipoContaId',fld:'TIPOCONTAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV28TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A942TipoContaId',fld:'TIPOCONTAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A942TipoContaId',fld:'TIPOCONTAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV27TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV28TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A942TipoContaId',fld:'TIPOCONTAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV28TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A945TipoContaTipoContabil',fld:'TIPOCONTATIPOCONTABIL'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV34Pgmname',fld:'vPGMNAME'},{av:'AV35Pgmdesc',fld:'vPGMDESC'}],[{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV39Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV28TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A945TipoContaTipoContabil',fld:'TIPOCONTATIPOCONTABIL'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV28TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A945TipoContaTipoContabil',fld:'TIPOCONTATIPOCONTABIL'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A945TipoContaTipoContabil", rfrProp:"Value", gxAttId:"945"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htipoconta());

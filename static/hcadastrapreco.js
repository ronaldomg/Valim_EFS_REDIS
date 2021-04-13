/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:55:26.48
*/
gx.evt.autoSkip = false;
gx.define('hcadastrapreco', false, function () {
   this.ServerClass =  "hcadastrapreco" ;
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
      this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e1114g2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e1214g2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e1714g2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e1314g2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e1414g2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1514g2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e1614g2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e2114g2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e2214g2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e2314g2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e2414g2_client=function()
   {
      this.executeServerEvent("'REGISTRAPRECOPRODUTO'", true, arguments[0], false, false);
   };
   this.e2514g2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e2614g2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2714g2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,28,31,34,36,38,40,42,44,47,49,50,54,55,56,57,58,59,60,61,68];
   this.GXLastCtrlId =68;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",53,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcadastrapreco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(710,54,"PRECOID","","","PrecoId","int",0,"px",2,2,"right",null,[],710,"PrecoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(711,55,"PRECODESCRICAO","","","PrecoDescricao","svchar",0,"px",30,30,"left",null,[],711,"PrecoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(722,56,"PRECOTIPO","Tipo","PrecoTipo","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpprepro","vBMPPREPRO",57,0,"px",17,"px","e2414g2_client","","Parâmetros","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",58,0,"px",17,"px","e2114g2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",59,0,"px",17,"px","e2214g2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",60,0,"px",17,"px","e2314g2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(4343,61,"PRECOSNCALCULARSISTEMA","Cálculo automático pelo sistema","","PrecoSnCalcularSistema","char",0,"px",1,1,"left",null,[],4343,"PrecoSnCalcularSistema",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPRECOID",gxz:"ZV23PrecoId",gxold:"OV23PrecoId",gxvar:"AV23PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV23PrecoId,0)},c2v:function(){gx.O.AV23PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPRECODESCRICAO",gxz:"ZV24PrecoDescricao",gxold:"OV24PrecoDescricao",gxvar:"AV24PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PrecoDescricao=Value},v2z:function(Value){gx.O.ZV24PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV24PrecoDescricao,0)},c2v:function(){gx.O.AV24PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOPRECO",gxz:"ZV27TipoPreco",gxold:"OV27TipoPreco",gxvar:"AV27TipoPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27TipoPreco=Value},v2z:function(Value){gx.O.ZV27TipoPreco=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOPRECO",gx.O.AV27TipoPreco)},c2v:function(){gx.O.AV27TipoPreco=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPRECO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TABLE6",grid:0};
   GXValidFnc[34]={fld:"IMAGE2",grid:0};
   GXValidFnc[36]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[38]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[40]={fld:"IMAGE1",grid:0};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   GXValidFnc[44]={fld:"TABLE5",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PRECOID",gxz:"Z710PrecoId",gxold:"O710PrecoId",gxvar:"A710PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A710PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z710PrecoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PRECOID",row || gx.fn.currentGridRowImpl(53),gx.O.A710PrecoId,0)},c2v:function(){gx.O.A710PrecoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PRECOID",row || gx.fn.currentGridRowImpl(53),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PRECODESCRICAO",gxz:"Z711PrecoDescricao",gxold:"O711PrecoDescricao",gxvar:"A711PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A711PrecoDescricao=Value},v2z:function(Value){gx.O.Z711PrecoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("PRECODESCRICAO",row || gx.fn.currentGridRowImpl(53),gx.O.A711PrecoDescricao,0)},c2v:function(){gx.O.A711PrecoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("PRECODESCRICAO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PRECOTIPO",gxz:"Z722PrecoTipo",gxold:"O722PrecoTipo",gxvar:"A722PrecoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A722PrecoTipo=Value},v2z:function(Value){gx.O.Z722PrecoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PRECOTIPO",row || gx.fn.currentGridRowImpl(53),gx.O.A722PrecoTipo)},c2v:function(){gx.O.A722PrecoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("PRECOTIPO",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPREPRO",gxz:"ZV29bmpPrePro",gxold:"OV29bmpPrePro",gxvar:"AV29bmpPrePro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpPrePro=Value},v2z:function(Value){gx.O.ZV29bmpPrePro=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPREPRO",row || gx.fn.currentGridRowImpl(53),gx.O.AV29bmpPrePro,gx.O.AV38Bmpprepro_GXI)},c2v:function(){gx.O.AV38Bmpprepro_GXI=this.val_GXI();gx.O.AV29bmpPrePro=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPREPRO",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPREPRO_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV38Bmpprepro_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(53),gx.O.AV7bmpAlt,gx.O.AV39Bmpalt_GXI)},c2v:function(){gx.O.AV39Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV39Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53),gx.O.AV8bmpExc,gx.O.AV40Bmpexc_GXI)},c2v:function(){gx.O.AV40Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV40Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(53),gx.O.AV16bmpCon,gx.O.AV41Bmpcon_GXI)},c2v:function(){gx.O.AV41Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(53))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(53))}, gxvar_GXI:'AV41Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:53,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PRECOSNCALCULARSISTEMA",gxz:"Z4343PrecoSnCalcularSistema",gxold:"O4343PrecoSnCalcularSistema",gxvar:"A4343PrecoSnCalcularSistema",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4343PrecoSnCalcularSistema=Value},v2z:function(Value){gx.O.Z4343PrecoSnCalcularSistema=Value},v2c:function(row){gx.fn.setGridControlValue("PRECOSNCALCULARSISTEMA",row || gx.fn.currentGridRowImpl(53),gx.O.A4343PrecoSnCalcularSistema,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4343PrecoSnCalcularSistema=this.val()},val:function(row){return gx.fn.getGridControlValue("PRECOSNCALCULARSISTEMA",row || gx.fn.currentGridRowImpl(53))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV23PrecoId = 0 ;
   this.ZV23PrecoId = 0 ;
   this.OV23PrecoId = 0 ;
   this.AV24PrecoDescricao = "" ;
   this.ZV24PrecoDescricao = "" ;
   this.OV24PrecoDescricao = "" ;
   this.AV27TipoPreco = "" ;
   this.ZV27TipoPreco = "" ;
   this.OV27TipoPreco = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z710PrecoId = 0 ;
   this.O710PrecoId = 0 ;
   this.Z711PrecoDescricao = "" ;
   this.O711PrecoDescricao = "" ;
   this.Z722PrecoTipo = "" ;
   this.O722PrecoTipo = "" ;
   this.ZV29bmpPrePro = "" ;
   this.OV29bmpPrePro = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z4343PrecoSnCalcularSistema = "" ;
   this.O4343PrecoSnCalcularSistema = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV23PrecoId = 0 ;
   this.AV24PrecoDescricao = "" ;
   this.AV27TipoPreco = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A710PrecoId = 0 ;
   this.A711PrecoDescricao = "" ;
   this.A722PrecoTipo = "" ;
   this.AV29bmpPrePro = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A4343PrecoSnCalcularSistema = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.AV36Pgmname = "" ;
   this.Events = {"e1114g2_client": ["'ANTERIOR'", true] ,"e1214g2_client": ["'PROXIMO'", true] ,"e1714g2_client": ["VPAGINA.CLICK", true] ,"e1314g2_client": ["'NOVO'", true] ,"e1414g2_client": ["'FECHAR'", true] ,"e1514g2_client": ["'IMPRIMIR'", true] ,"e1614g2_client": ["'PROCURAR'", true] ,"e2114g2_client": ["'ALTERAR'", true] ,"e2214g2_client": ["'EXCLUIR'", true] ,"e2314g2_client": ["'CONSULTAR'", true] ,"e2414g2_client": ["'REGISTRAPRECOPRODUTO'", true] ,"e2514g2_client": ["'ATUALIZAPAGINA'", true] ,"e2614g2_client": ["ENTER", true] ,"e2714g2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23PrecoId',fld:'vPRECOID'},{av:'AV24PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV27TipoPreco',fld:'vTIPOPRECO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpPrePro',fld:'vBMPPREPRO'},{av:'gx.fn.getCtrlProperty("vBMPPREPRO","Tooltiptext")',ctrl:'vBMPPREPRO',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A710PrecoId',fld:'PRECOID'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23PrecoId',fld:'vPRECOID'},{av:'AV24PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV27TipoPreco',fld:'vTIPOPRECO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpPrePro',fld:'vBMPPREPRO'},{av:'gx.fn.getCtrlProperty("vBMPPREPRO","Tooltiptext")',ctrl:'vBMPPREPRO',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A710PrecoId',fld:'PRECOID'}],[{ctrl:'PRECOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PRECOID","Title")',ctrl:'PRECOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'PRECODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PRECODESCRICAO","Title")',ctrl:'PRECODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV25filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23PrecoId',fld:'vPRECOID'},{av:'AV27TipoPreco',fld:'vTIPOPRECO'},{av:'AV24PrecoDescricao',fld:'vPRECODESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23PrecoId',fld:'vPRECOID'},{av:'AV24PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV27TipoPreco',fld:'vTIPOPRECO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpPrePro',fld:'vBMPPREPRO'},{av:'gx.fn.getCtrlProperty("vBMPPREPRO","Tooltiptext")',ctrl:'vBMPPREPRO',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV25filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23PrecoId',fld:'vPRECOID'},{av:'AV24PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV27TipoPreco',fld:'vTIPOPRECO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpPrePro',fld:'vBMPPREPRO'},{av:'gx.fn.getCtrlProperty("vBMPPREPRO","Tooltiptext")',ctrl:'vBMPPREPRO',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV25filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A710PrecoId',fld:'PRECOID'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPALT","Link")',ctrl:'vBMPALT',prop:'Link'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Link")',ctrl:'vBMPEXC',prop:'Link'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPCON","Link")',ctrl:'vBMPCON',prop:'Link'},{av:'AV29bmpPrePro',fld:'vBMPPREPRO'},{av:'gx.fn.getCtrlProperty("vBMPPREPRO","Tooltiptext")',ctrl:'vBMPPREPRO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPPREPRO","Link")',ctrl:'vBMPPREPRO',prop:'Link'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23PrecoId',fld:'vPRECOID'},{av:'AV24PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV27TipoPreco',fld:'vTIPOPRECO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpPrePro',fld:'vBMPPREPRO'},{av:'gx.fn.getCtrlProperty("vBMPPREPRO","Tooltiptext")',ctrl:'vBMPPREPRO',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV25filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27TipoPreco',fld:'vTIPOPRECO'},{av:'AV31PrecoIdAux',fld:'vPRECOIDAUX'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23PrecoId',fld:'vPRECOID'},{av:'AV24PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'AV32SnCustoMedio',fld:'vSNCUSTOMEDIO'},{av:'AV25filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV37Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV42Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23PrecoId',fld:'vPRECOID'},{av:'AV24PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV27TipoPreco',fld:'vTIPOPRECO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpPrePro',fld:'vBMPPREPRO'},{av:'gx.fn.getCtrlProperty("vBMPPREPRO","Tooltiptext")',ctrl:'vBMPPREPRO',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV25filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A722PrecoTipo',fld:'PRECOTIPO'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23PrecoId',fld:'vPRECOID'},{av:'AV27TipoPreco',fld:'vTIPOPRECO'},{av:'AV24PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'AV25filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A722PrecoTipo',fld:'PRECOTIPO'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23PrecoId',fld:'vPRECOID'},{av:'AV27TipoPreco',fld:'vTIPOPRECO'},{av:'AV24PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'AV25filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A722PrecoTipo',fld:'PRECOTIPO'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23PrecoId',fld:'vPRECOID'},{av:'AV27TipoPreco',fld:'vTIPOPRECO'},{av:'AV24PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'AV25filtros',fld:'vFILTROS'}]];
   this.EvtParms["'REGISTRAPRECOPRODUTO'"] = [[{av:'A722PrecoTipo',fld:'PRECOTIPO'},{av:'A710PrecoId',fld:'PRECOID'},{av:'AV23PrecoId',fld:'vPRECOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoPreco',fld:'vTIPOPRECO'},{av:'AV24PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'A710PrecoId',fld:'PRECOID'},{av:'AV25filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23PrecoId',fld:'vPRECOID'},{av:'AV24PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'AV27TipoPreco',fld:'vTIPOPRECO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpPrePro',fld:'vBMPPREPRO'},{av:'gx.fn.getCtrlProperty("vBMPPREPRO","Tooltiptext")',ctrl:'vBMPPREPRO',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A710PrecoId',fld:'PRECOID'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpPrePro", rfrProp:"Value", gxAttId:"Bmpprepro"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpPrePro", rfrProp:"Tooltiptext", gxAttId:"Bmpprepro"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV36Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A710PrecoId", rfrProp:"Value", gxAttId:"710"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcadastrapreco());

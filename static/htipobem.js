/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:15:5.73
*/
gx.evt.autoSkip = false;
gx.define('htipobem', false, function () {
   this.ServerClass =  "htipobem" ;
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
      this.A2036TipoBemSnImobilizado=gx.fn.getControlValue("TIPOBEMSNIMOBILIZADO") ;
   };
   this.e25c61_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmtipobem",[]), []);
      this.refreshOutputs([]);
   };
   this.e11c62_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12c62_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17c62_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13c62_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14c62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15c62_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16c62_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20c62_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21c62_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22c62_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24c62_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26c62_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27c62_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,41,44,46,47,51,52,53,54,55,56,57,58,59,66];
   this.GXLastCtrlId =66;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",50,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"htipobem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2034,51,"TIPOBEMID","","","TipoBemId","int",0,"px",4,4,"right",null,[],2034,"TipoBemId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2035,52,"TIPOBEMDESCRICAO","","","TipoBemDescricao","svchar",0,"px",40,40,"left",null,[],2035,"TipoBemDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Snimobilizado",53,"vSNIMOBILIZADO","","","SnImobilizado","char",0,"px",3,3,"left",null,[],"Snimobilizado","SnImobilizado",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(2033,54,"TIPOBEMTPREDUCAO","","TipoBemTpReducao","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2040,55,"TIPOBEMVIDAMINIMA","","","TipoBemVidaMinima","decimal",0,"px",5,5,"right",null,[],2040,"TipoBemVidaMinima",true,1,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2041,56,"TIPOBEMVIDAMAXIMA","","","TipoBemVidaMaxima","decimal",0,"px",5,5,"right",null,[],2041,"TipoBemVidaMaxima",true,1,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",57,0,"px",17,"px","e20c62_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",58,0,"px",17,"px","e21c62_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",59,0,"px",17,"px","e22c62_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOBEMID",gxz:"ZV27TipoBemId",gxold:"OV27TipoBemId",gxvar:"AV27TipoBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27TipoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27TipoBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMID",gx.O.AV27TipoBemId,0)},c2v:function(){gx.O.AV27TipoBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOBEMDESCRICAO",gxz:"ZV28TipoBemDescricao",gxold:"OV28TipoBemDescricao",gxvar:"AV28TipoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28TipoBemDescricao=Value},v2z:function(Value){gx.O.ZV28TipoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOBEMDESCRICAO",gx.O.AV28TipoBemDescricao,0)},c2v:function(){gx.O.AV28TipoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE6",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"BTNPARM",grid:0};
   GXValidFnc[41]={fld:"TABLE5",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMID",gxz:"Z2034TipoBemId",gxold:"O2034TipoBemId",gxvar:"A2034TipoBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2034TipoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2034TipoBemId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOBEMID",row || gx.fn.currentGridRowImpl(50),gx.O.A2034TipoBemId,0)},c2v:function(){gx.O.A2034TipoBemId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOBEMID",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMDESCRICAO",gxz:"Z2035TipoBemDescricao",gxold:"O2035TipoBemDescricao",gxvar:"A2035TipoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2035TipoBemDescricao=Value},v2z:function(Value){gx.O.Z2035TipoBemDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBEMDESCRICAO",row || gx.fn.currentGridRowImpl(50),gx.O.A2035TipoBemDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2035TipoBemDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBEMDESCRICAO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMOBILIZADO",gxz:"ZV29SnImobilizado",gxold:"OV29SnImobilizado",gxvar:"AV29SnImobilizado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29SnImobilizado=Value},v2z:function(Value){gx.O.ZV29SnImobilizado=Value},v2c:function(row){gx.fn.setGridControlValue("vSNIMOBILIZADO",row || gx.fn.currentGridRowImpl(50),gx.O.AV29SnImobilizado,0)},c2v:function(){gx.O.AV29SnImobilizado=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNIMOBILIZADO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMTPREDUCAO",gxz:"Z2033TipoBemTpReducao",gxold:"O2033TipoBemTpReducao",gxvar:"A2033TipoBemTpReducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2033TipoBemTpReducao=Value},v2z:function(Value){gx.O.Z2033TipoBemTpReducao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOBEMTPREDUCAO",row || gx.fn.currentGridRowImpl(50),gx.O.A2033TipoBemTpReducao)},c2v:function(){gx.O.A2033TipoBemTpReducao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBEMTPREDUCAO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"decimal",len:5,dec:1,sign:false,pic:"ZZ9.9",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMVIDAMINIMA",gxz:"Z2040TipoBemVidaMinima",gxold:"O2040TipoBemVidaMinima",gxvar:"A2040TipoBemVidaMinima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2040TipoBemVidaMinima=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2040TipoBemVidaMinima=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("TIPOBEMVIDAMINIMA",row || gx.fn.currentGridRowImpl(50),gx.O.A2040TipoBemVidaMinima,1,',')},c2v:function(){gx.O.A2040TipoBemVidaMinima=this.val()},val:function(row){return gx.fn.getGridDecimalValue("TIPOBEMVIDAMINIMA",row || gx.fn.currentGridRowImpl(50),'.',',')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"decimal",len:5,dec:1,sign:false,pic:"ZZ9.9",ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMVIDAMAXIMA",gxz:"Z2041TipoBemVidaMaxima",gxold:"O2041TipoBemVidaMaxima",gxvar:"A2041TipoBemVidaMaxima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2041TipoBemVidaMaxima=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2041TipoBemVidaMaxima=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("TIPOBEMVIDAMAXIMA",row || gx.fn.currentGridRowImpl(50),gx.O.A2041TipoBemVidaMaxima,1,',')},c2v:function(){gx.O.A2041TipoBemVidaMaxima=this.val()},val:function(row){return gx.fn.getGridDecimalValue("TIPOBEMVIDAMAXIMA",row || gx.fn.currentGridRowImpl(50),'.',',')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(50),gx.O.AV7bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV38Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(50),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27TipoBemId = 0 ;
   this.ZV27TipoBemId = 0 ;
   this.OV27TipoBemId = 0 ;
   this.AV28TipoBemDescricao = "" ;
   this.ZV28TipoBemDescricao = "" ;
   this.OV28TipoBemDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2034TipoBemId = 0 ;
   this.O2034TipoBemId = 0 ;
   this.Z2035TipoBemDescricao = "" ;
   this.O2035TipoBemDescricao = "" ;
   this.ZV29SnImobilizado = "" ;
   this.OV29SnImobilizado = "" ;
   this.Z2033TipoBemTpReducao = "" ;
   this.O2033TipoBemTpReducao = "" ;
   this.Z2040TipoBemVidaMinima = 0 ;
   this.O2040TipoBemVidaMinima = 0 ;
   this.Z2041TipoBemVidaMaxima = 0 ;
   this.O2041TipoBemVidaMaxima = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27TipoBemId = 0 ;
   this.AV28TipoBemDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2036TipoBemSnImobilizado = "" ;
   this.A2072TipoBemEmpresaId = "" ;
   this.A2034TipoBemId = 0 ;
   this.A2035TipoBemDescricao = "" ;
   this.AV29SnImobilizado = "" ;
   this.A2033TipoBemTpReducao = "" ;
   this.A2040TipoBemVidaMinima = 0 ;
   this.A2041TipoBemVidaMaxima = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV33SnRecuperaFiltro = "" ;
   this.Events = {"e11c62_client": ["'ANTERIOR'", true] ,"e12c62_client": ["'PROXIMO'", true] ,"e17c62_client": ["VPAGINA.CLICK", true] ,"e13c62_client": ["'NOVO'", true] ,"e14c62_client": ["'FECHAR'", true] ,"e15c62_client": ["'IMPRIMIR'", true] ,"e16c62_client": ["'PROCURAR'", true] ,"e20c62_client": ["'ALTERAR'", true] ,"e21c62_client": ["'EXCLUIR'", true] ,"e22c62_client": ["'CONSULTAR'", true] ,"e24c62_client": ["'ATUALIZAPAGINA'", true] ,"e26c62_client": ["ENTER", true] ,"e27c62_client": ["CANCEL", true] ,"e25c61_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBemId',fld:'vTIPOBEMID'},{av:'AV28TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBemId',fld:'vTIPOBEMID'},{av:'AV28TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'}],[{ctrl:'TIPOBEMID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBEMID","Title")',ctrl:'TIPOBEMID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'TIPOBEMDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBEMDESCRICAO","Title")',ctrl:'TIPOBEMDESCRICAO',prop:'Title'},{ctrl:'vSNIMOBILIZADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vSNIMOBILIZADO","Title")',ctrl:'vSNIMOBILIZADO',prop:'Title'},{ctrl:'TIPOBEMTPREDUCAO'},{ctrl:'TIPOBEMVIDAMINIMA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBEMVIDAMINIMA","Title")',ctrl:'TIPOBEMVIDAMINIMA',prop:'Title'},{ctrl:'TIPOBEMVIDAMAXIMA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBEMVIDAMAXIMA","Title")',ctrl:'TIPOBEMVIDAMAXIMA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoBemId',fld:'vTIPOBEMID'},{av:'AV28TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBemId',fld:'vTIPOBEMID'},{av:'AV28TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBemId',fld:'vTIPOBEMID'},{av:'AV28TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBemId',fld:'vTIPOBEMID'},{av:'AV28TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoBemId',fld:'vTIPOBEMID'},{av:'AV28TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV37Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV30QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBemId',fld:'vTIPOBEMID'},{av:'AV28TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoBemId',fld:'vTIPOBEMID'},{av:'AV28TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'}],[{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoBemId',fld:'vTIPOBEMID'},{av:'AV28TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'}],[{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27TipoBemId',fld:'vTIPOBEMID'},{av:'AV28TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'}],[{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["LOAD"] = [[{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'}],[{av:'AV29SnImobilizado',fld:'vSNIMOBILIZADO'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27TipoBemId',fld:'vTIPOBEMID'},{av:'AV28TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV33SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2036TipoBemSnImobilizado", "TIPOBEMSNIMOBILIZADO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV33SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2036TipoBemSnImobilizado", "TIPOBEMSNIMOBILIZADO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV33SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2036TipoBemSnImobilizado"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new htipobem());

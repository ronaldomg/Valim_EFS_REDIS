/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:52:23.13
*/
gx.evt.autoSkip = false;
gx.define('hparametrosistema', false, function () {
   this.ServerClass =  "hparametrosistema" ;
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
      this.AV39SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11382_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12382_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16382_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13382_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e22382_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e23382_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e24382_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e14382_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15382_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e17382_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e18382_client=function()
   {
      this.executeServerEvent("'EXCLUIRTODOS'", true, null, false, false);
   };
   this.e25382_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26382_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27382_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,33,36,39,41,43,45,47,49,51,54,56,57,61,62,63,64,65,66,67,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",60,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hparametrosistema",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(419,61,"PARAMETROSISTEMACAMPO","","","ParametroSistemaCampo","char",0,"px",15,15,"left",null,[],419,"ParametroSistemaCampo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(416,62,"PARAMETROSISTEMADESCRICAO","","","ParametroSistemaDescricao","svchar",0,"px",50,50,"left",null,[],416,"ParametroSistemaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(417,63,"PARAMETROSISTEMAVALOR","","","ParametroSistemaValor","svchar",0,"px",150,80,"left",null,[],417,"ParametroSistemaValor",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Parametrosistemavalor",64,"vPARAMETROSISTEMAVALOR","Valor","","ParametroSistemaValor","svchar",0,"px",150,80,"left",null,[],"Parametrosistemavalor","ParametroSistemaValor",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",65,0,"px",17,"px","e22382_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",66,0,"px",17,"px","e23382_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",67,0,"px",17,"px","e24382_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSISTEMAID",gxz:"ZV21SistemaId",gxold:"OV21SistemaId",gxvar:"AV21SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21SistemaId=Value},v2z:function(Value){gx.O.ZV21SistemaId=Value},v2c:function(){gx.fn.setControlValue("vSISTEMAID",gx.O.AV21SistemaId,0)},c2v:function(){gx.O.AV21SistemaId=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPARAMETROSISTEMACAMPO",gxz:"ZV32ParametroSistemaCampo",gxold:"OV32ParametroSistemaCampo",gxvar:"AV32ParametroSistemaCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ParametroSistemaCampo=Value},v2z:function(Value){gx.O.ZV32ParametroSistemaCampo=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROSISTEMACAMPO",gx.O.AV32ParametroSistemaCampo,0)},c2v:function(){gx.O.AV32ParametroSistemaCampo=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROSISTEMACAMPO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPARAMETROSISTEMADESCRICAO",gxz:"ZV33ParametroSistemaDescricao",gxold:"OV33ParametroSistemaDescricao",gxvar:"AV33ParametroSistemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33ParametroSistemaDescricao=Value},v2z:function(Value){gx.O.ZV33ParametroSistemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROSISTEMADESCRICAO",gx.O.AV33ParametroSistemaDescricao,0)},c2v:function(){gx.O.AV33ParametroSistemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROSISTEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESASEL",gxz:"ZV28EmpresaSel",gxold:"OV28EmpresaSel",gxvar:"AV28EmpresaSel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(Value){gx.O.AV28EmpresaSel=Value},v2z:function(Value){gx.O.ZV28EmpresaSel=Value},v2c:function(){gx.fn.setComboBoxValue("vEMPRESASEL",gx.O.AV28EmpresaSel)},c2v:function(){gx.O.AV28EmpresaSel=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESASEL")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TABLE3",grid:0};
   GXValidFnc[39]={fld:"IMAGE2",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"IMAGE3",grid:0};
   GXValidFnc[47]={fld:"BTNEXCTDS",grid:0};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   GXValidFnc[51]={fld:"TABLE5",grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROSISTEMACAMPO",gxz:"Z419ParametroSistemaCampo",gxold:"O419ParametroSistemaCampo",gxvar:"A419ParametroSistemaCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A419ParametroSistemaCampo=Value},v2z:function(Value){gx.O.Z419ParametroSistemaCampo=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROSISTEMACAMPO",row || gx.fn.currentGridRowImpl(60),gx.O.A419ParametroSistemaCampo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A419ParametroSistemaCampo=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROSISTEMACAMPO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROSISTEMADESCRICAO",gxz:"Z416ParametroSistemaDescricao",gxold:"O416ParametroSistemaDescricao",gxvar:"A416ParametroSistemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A416ParametroSistemaDescricao=Value},v2z:function(Value){gx.O.Z416ParametroSistemaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROSISTEMADESCRICAO",row || gx.fn.currentGridRowImpl(60),gx.O.A416ParametroSistemaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A416ParametroSistemaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROSISTEMADESCRICAO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:150,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PARAMETROSISTEMAVALOR",gxz:"Z417ParametroSistemaValor",gxold:"O417ParametroSistemaValor",gxvar:"A417ParametroSistemaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A417ParametroSistemaValor=Value},v2z:function(Value){gx.O.Z417ParametroSistemaValor=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROSISTEMAVALOR",row || gx.fn.currentGridRowImpl(60),gx.O.A417ParametroSistemaValor,0)},c2v:function(){gx.O.A417ParametroSistemaValor=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROSISTEMAVALOR",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:150,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROSISTEMAVALOR",gxz:"ZV41ParametroSistemaValor",gxold:"OV41ParametroSistemaValor",gxvar:"AV41ParametroSistemaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV41ParametroSistemaValor=Value},v2z:function(Value){gx.O.ZV41ParametroSistemaValor=Value},v2c:function(row){gx.fn.setGridControlValue("vPARAMETROSISTEMAVALOR",row || gx.fn.currentGridRowImpl(60),gx.O.AV41ParametroSistemaValor,0)},c2v:function(){gx.O.AV41ParametroSistemaValor=this.val()},val:function(row){return gx.fn.getGridControlValue("vPARAMETROSISTEMAVALOR",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(60),gx.O.AV7bmpAlt,gx.O.AV46Bmpalt_GXI)},c2v:function(){gx.O.AV46Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV46Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60),gx.O.AV8bmpExc,gx.O.AV47Bmpexc_GXI)},c2v:function(){gx.O.AV47Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV47Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(60),gx.O.AV16bmpCon,gx.O.AV48Bmpcon_GXI)},c2v:function(){gx.O.AV48Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV48Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV21SistemaId = "" ;
   this.ZV21SistemaId = "" ;
   this.OV21SistemaId = "" ;
   this.AV32ParametroSistemaCampo = "" ;
   this.ZV32ParametroSistemaCampo = "" ;
   this.OV32ParametroSistemaCampo = "" ;
   this.AV33ParametroSistemaDescricao = "" ;
   this.ZV33ParametroSistemaDescricao = "" ;
   this.OV33ParametroSistemaDescricao = "" ;
   this.AV28EmpresaSel = "" ;
   this.ZV28EmpresaSel = "" ;
   this.OV28EmpresaSel = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z419ParametroSistemaCampo = "" ;
   this.O419ParametroSistemaCampo = "" ;
   this.Z416ParametroSistemaDescricao = "" ;
   this.O416ParametroSistemaDescricao = "" ;
   this.Z417ParametroSistemaValor = "" ;
   this.O417ParametroSistemaValor = "" ;
   this.ZV41ParametroSistemaValor = "" ;
   this.OV41ParametroSistemaValor = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV21SistemaId = "" ;
   this.AV32ParametroSistemaCampo = "" ;
   this.AV33ParametroSistemaDescricao = "" ;
   this.AV28EmpresaSel = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A138EmpresaId = "" ;
   this.A140SistemaId = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.A416ParametroSistemaDescricao = "" ;
   this.A417ParametroSistemaValor = "" ;
   this.AV41ParametroSistemaValor = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV39SnRecuperaFiltro = "" ;
   this.Events = {"e11382_client": ["'ANTERIOR'", true] ,"e12382_client": ["'PROXIMO'", true] ,"e16382_client": ["VPAGINA.CLICK", true] ,"e13382_client": ["'NOVO'", true] ,"e22382_client": ["'ALTERAR'", true] ,"e23382_client": ["'EXCLUIR'", true] ,"e24382_client": ["'CONSULTAR'", true] ,"e14382_client": ["'FECHAR'", true] ,"e15382_client": ["'PROCURAR'", true] ,"e17382_client": ["'IMPRIMIR'", true] ,"e18382_client": ["'EXCLUIRTODOS'", true] ,"e25382_client": ["'ATUALIZAPAGINA'", true] ,"e26382_client": ["ENTER", true] ,"e27382_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32ParametroSistemaCampo',fld:'vPARAMETROSISTEMACAMPO'},{av:'AV33ParametroSistemaDescricao',fld:'vPARAMETROSISTEMADESCRICAO'},{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'A417ParametroSistemaValor',fld:'PARAMETROSISTEMAVALOR'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32ParametroSistemaCampo',fld:'vPARAMETROSISTEMACAMPO'},{av:'AV33ParametroSistemaDescricao',fld:'vPARAMETROSISTEMADESCRICAO'},{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'A417ParametroSistemaValor',fld:'PARAMETROSISTEMAVALOR'}],[{ctrl:'PARAMETROSISTEMACAMPO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROSISTEMACAMPO","Title")',ctrl:'PARAMETROSISTEMACAMPO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'PARAMETROSISTEMADESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROSISTEMADESCRICAO","Title")',ctrl:'PARAMETROSISTEMADESCRICAO',prop:'Title'},{ctrl:'PARAMETROSISTEMAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROSISTEMAVALOR","Title")',ctrl:'PARAMETROSISTEMAVALOR',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV31filtros',fld:'vFILTROS'},{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV32ParametroSistemaCampo',fld:'vPARAMETROSISTEMACAMPO'},{av:'AV33ParametroSistemaDescricao',fld:'vPARAMETROSISTEMADESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32ParametroSistemaCampo',fld:'vPARAMETROSISTEMACAMPO'},{av:'AV33ParametroSistemaDescricao',fld:'vPARAMETROSISTEMADESCRICAO'},{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'A417ParametroSistemaValor',fld:'PARAMETROSISTEMAVALOR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32ParametroSistemaCampo',fld:'vPARAMETROSISTEMACAMPO'},{av:'AV33ParametroSistemaDescricao',fld:'vPARAMETROSISTEMADESCRICAO'},{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'A417ParametroSistemaValor',fld:'PARAMETROSISTEMAVALOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'A417ParametroSistemaValor',fld:'PARAMETROSISTEMAVALOR'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32ParametroSistemaCampo',fld:'vPARAMETROSISTEMACAMPO'},{av:'AV33ParametroSistemaDescricao',fld:'vPARAMETROSISTEMADESCRICAO'},{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'A417ParametroSistemaValor',fld:'PARAMETROSISTEMAVALOR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV31filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV21SistemaId',fld:'vSISTEMAID'}],[{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV21SistemaId',fld:'vSISTEMAID'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'}],[{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'AV21SistemaId',fld:'vSISTEMAID'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'}],[{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'AV21SistemaId',fld:'vSISTEMAID'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'}],[{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'AV21SistemaId',fld:'vSISTEMAID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32ParametroSistemaCampo',fld:'vPARAMETROSISTEMACAMPO'},{av:'AV33ParametroSistemaDescricao',fld:'vPARAMETROSISTEMADESCRICAO'},{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'A417ParametroSistemaValor',fld:'PARAMETROSISTEMAVALOR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31filtros',fld:'vFILTROS'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV44Pgmname',fld:'vPGMNAME'},{av:'AV36Ordenacao',fld:'vORDENACAO'},{av:'AV37OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV45Pgmdesc',fld:'vPGMDESC'}],[{av:'AV35NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV34NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV38QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'AV37OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}]];
   this.EvtParms["'EXCLUIRTODOS'"] = [[{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV21SistemaId',fld:'vSISTEMAID'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32ParametroSistemaCampo',fld:'vPARAMETROSISTEMACAMPO'},{av:'AV33ParametroSistemaDescricao',fld:'vPARAMETROSISTEMADESCRICAO'},{av:'AV28EmpresaSel',fld:'vEMPRESASEL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:'vBMPEXC',prop:'Visible'},{av:'AV39SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'A417ParametroSistemaValor',fld:'PARAMETROSISTEMAVALOR'}],[]];
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV39SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Visible", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV39SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A419ParametroSistemaCampo", rfrProp:"Value", gxAttId:"419"});
   GridContainer.addRefreshingVar({rfrVar:"A417ParametroSistemaValor", rfrProp:"Value", gxAttId:"417"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hparametrosistema());

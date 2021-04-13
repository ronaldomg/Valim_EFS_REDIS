/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:58:16.33
*/
gx.evt.autoSkip = false;
gx.define('hfilial', false, function () {
   this.ServerClass =  "hfilial" ;
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
      this.AV29SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e117z2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e127z2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e207z2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e217z2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e227z2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e237z2_client=function()
   {
      this.executeServerEvent("'FILIALST'", true, arguments[0], false, false);
   };
   this.e167z2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e137z2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e147z2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e157z2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", true, arguments[0], false, false);
   };
   this.e247z2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e257z2_client=function()
   {
      this.executeServerEvent("'DANFE'", true, arguments[0], false, false);
   };
   this.e267z2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e277z2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,19,22,24,25,29,30,31,32,33,34,35,36,37,38,39,46];
   this.GXLastCtrlId =46;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hfilial",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1156,29,"FILIALID","","","FilialId","int",0,"px",7,7,"right",null,[],1156,"FilialId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Nomefilial",30,"vNOMEFILIAL","Nome da Filial","","NomeFilial","svchar",0,"px",63,63,"left",null,[],"Nomefilial","NomeFilial",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1136,31,"FILIALNOME","","","FilialNome","svchar",0,"px",100,80,"left",null,[],1136,"FilialNome",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1201,32,"FILIALTELEFONE","","","FilialTelefone","svchar",0,"px",15,15,"left",null,[],1201,"FilialTelefone",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpfilialst","vBMPFILIALST",33,0,"px",17,"px","e237z2_client","","Insc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",34,0,"px",17,"px","e207z2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpnfe","vBMPNFE",35,0,"px",17,"px","e257z2_client","","DANFE","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",36,0,"px",17,"px","e217z2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",37,0,"px",17,"px","e227z2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(11179,38,"FILIALTIPONFE","Tipo de integração Nfe","","FilialTipoNfe","char",0,"px",1,1,"left",null,[],11179,"FilialTipoNfe",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1228,39,"FILIALEMPRESAID","Empresa da Filial","","FilialEmpresaId","char",0,"px",10,10,"left",null,[],1228,"FilialEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"IMAGE2",grid:0};
   GXValidFnc[13]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[15]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[17]={fld:"BTNHELP",grid:0};
   GXValidFnc[19]={fld:"TABLE5",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALID",row || gx.fn.currentGridRowImpl(28),gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:63,dec:0,sign:false,ro:0,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEFILIAL",gxz:"ZV28NomeFilial",gxold:"OV28NomeFilial",gxvar:"AV28NomeFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28NomeFilial=Value},v2z:function(Value){gx.O.ZV28NomeFilial=Value},v2c:function(row){gx.fn.setGridControlValue("vNOMEFILIAL",row || gx.fn.currentGridRowImpl(28),gx.O.AV28NomeFilial,0)},c2v:function(){gx.O.AV28NomeFilial=this.val()},val:function(row){return gx.fn.getGridControlValue("vNOMEFILIAL",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALNOME",gxz:"Z1136FilialNome",gxold:"O1136FilialNome",gxvar:"A1136FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1136FilialNome=Value},v2z:function(Value){gx.O.Z1136FilialNome=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALNOME",row || gx.fn.currentGridRowImpl(28),gx.O.A1136FilialNome,0)},c2v:function(){gx.O.A1136FilialNome=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALNOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALTELEFONE",gxz:"Z1201FilialTelefone",gxold:"O1201FilialTelefone",gxvar:"A1201FilialTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1201FilialTelefone=Value},v2z:function(Value){gx.O.Z1201FilialTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALTELEFONE",row || gx.fn.currentGridRowImpl(28),gx.O.A1201FilialTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1201FilialTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALTELEFONE",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFILIALST",gxz:"ZV27BmpFilialST",gxold:"OV27BmpFilialST",gxvar:"AV27BmpFilialST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27BmpFilialST=Value},v2z:function(Value){gx.O.ZV27BmpFilialST=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPFILIALST",row || gx.fn.currentGridRowImpl(28),gx.O.AV27BmpFilialST,gx.O.AV39Bmpfilialst_GXI)},c2v:function(){gx.O.AV39Bmpfilialst_GXI=this.val_GXI();gx.O.AV27BmpFilialST=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPFILIALST",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPFILIALST_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV39Bmpfilialst_GXI',nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(28),gx.O.AV7bmpAlt,gx.O.AV35Bmpalt_GXI)},c2v:function(){gx.O.AV35Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV35Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPNFE",gxz:"ZV30bmpNfe",gxold:"OV30bmpNfe",gxvar:"AV30bmpNfe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpNfe=Value},v2z:function(Value){gx.O.ZV30bmpNfe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPNFE",row || gx.fn.currentGridRowImpl(28),gx.O.AV30bmpNfe,gx.O.AV36Bmpnfe_GXI)},c2v:function(){gx.O.AV36Bmpnfe_GXI=this.val_GXI();gx.O.AV30bmpNfe=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPNFE",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPNFE_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV36Bmpnfe_GXI',nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28),gx.O.AV8bmpExc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(28),gx.O.AV16bmpCon,gx.O.AV38Bmpcon_GXI)},c2v:function(){gx.O.AV38Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(28))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(28))}, gxvar_GXI:'AV38Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALTIPONFE",gxz:"Z11179FilialTipoNfe",gxold:"O11179FilialTipoNfe",gxvar:"A11179FilialTipoNfe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11179FilialTipoNfe=Value},v2z:function(Value){gx.O.Z11179FilialTipoNfe=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALTIPONFE",row || gx.fn.currentGridRowImpl(28),gx.O.A11179FilialTipoNfe,0)},c2v:function(){gx.O.A11179FilialTipoNfe=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALTIPONFE",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"FILIALEMPRESAID",gxz:"Z1228FilialEmpresaId",gxold:"O1228FilialEmpresaId",gxvar:"A1228FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1228FilialEmpresaId=Value},v2z:function(Value){gx.O.Z1228FilialEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(28),gx.O.A1228FilialEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1228FilialEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.ZV28NomeFilial = "" ;
   this.OV28NomeFilial = "" ;
   this.Z1136FilialNome = "" ;
   this.O1136FilialNome = "" ;
   this.Z1201FilialTelefone = "" ;
   this.O1201FilialTelefone = "" ;
   this.ZV27BmpFilialST = "" ;
   this.OV27BmpFilialST = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV30bmpNfe = "" ;
   this.OV30bmpNfe = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z11179FilialTipoNfe = "" ;
   this.O11179FilialTipoNfe = "" ;
   this.Z1228FilialEmpresaId = "" ;
   this.O1228FilialEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A1156FilialId = 0 ;
   this.AV28NomeFilial = "" ;
   this.A1136FilialNome = "" ;
   this.A1201FilialTelefone = "" ;
   this.AV27BmpFilialST = "" ;
   this.AV7bmpAlt = "" ;
   this.AV30bmpNfe = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A11179FilialTipoNfe = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV29SnRecuperaFiltro = "" ;
   this.Events = {"e117z2_client": ["'ANTERIOR'", true] ,"e127z2_client": ["'PROXIMO'", true] ,"e207z2_client": ["'ALTERAR'", true] ,"e217z2_client": ["'EXCLUIR'", true] ,"e227z2_client": ["'CONSULTAR'", true] ,"e237z2_client": ["'FILIALST'", true] ,"e167z2_client": ["VPAGINA.CLICK", true] ,"e137z2_client": ["'NOVO'", true] ,"e147z2_client": ["'FECHAR'", true] ,"e157z2_client": ["'PROCURAR'", true] ,"e247z2_client": ["'ATUALIZAPAGINA'", true] ,"e257z2_client": ["'DANFE'", true] ,"e267z2_client": ["ENTER", true] ,"e277z2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A11179FilialTipoNfe',fld:'FILIALTIPONFE'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A11179FilialTipoNfe',fld:'FILIALTIPONFE'}],[{ctrl:'FILIALID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FILIALID","Title")',ctrl:'FILIALID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'FILIALNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FILIALNOME","Title")',ctrl:'FILIALNOME',prop:'Title'},{ctrl:'FILIALTELEFONE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("FILIALTELEFONE","Title")',ctrl:'FILIALTELEFONE',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A11179FilialTipoNfe',fld:'FILIALTIPONFE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A11179FilialTipoNfe',fld:'FILIALTIPONFE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A11179FilialTipoNfe',fld:'FILIALTIPONFE'}],[{av:'AV28NomeFilial',fld:'vNOMEFILIAL'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV30bmpNfe',fld:'vBMPNFE'},{av:'gx.fn.getCtrlProperty("vBMPNFE","Enabled")',ctrl:'vBMPNFE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPNFE","Tooltiptext")',ctrl:'vBMPNFE',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV27BmpFilialST',fld:'vBMPFILIALST'},{av:'gx.fn.getCtrlProperty("vBMPFILIALST","Tooltiptext")',ctrl:'vBMPFILIALST',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}],[{av:'A1156FilialId',fld:'FILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}],[{av:'A1156FilialId',fld:'FILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}],[{av:'A1156FilialId',fld:'FILIALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FILIALST'"] = [[{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A11179FilialTipoNfe',fld:'FILIALTIPONFE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A11179FilialTipoNfe',fld:'FILIALTIPONFE'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A11179FilialTipoNfe',fld:'FILIALTIPONFE'}],[]];
   this.EvtParms["'DANFE'"] = [[{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV29SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A1136FilialNome", rfrProp:"Value", gxAttId:"1136"});
   GridContainer.addRefreshingVar({rfrVar:"A11179FilialTipoNfe", rfrProp:"Value", gxAttId:"11179"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hfilial());

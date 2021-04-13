/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:37:18.62
*/
gx.evt.autoSkip = false;
gx.define('hcategoria', false, function () {
   this.ServerClass =  "hcategoria" ;
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
      this.AV31CategoriaEmpresaId=gx.fn.getControlValue("vCATEGORIAEMPRESAID") ;
      this.AV38SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11gl2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12gl2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17gl2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13gl2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14gl2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15gl2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16gl2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20gl2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21gl2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22gl2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23gl2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25gl2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26gl2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,27,28,33,36,39,41,43,45,47,49,52,54,55,59,60,61,62,63,64,65,66,73,74,75];
   this.GXLastCtrlId =75;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",58,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcategoria",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2622,59,"CATEGORIAID","","","CategoriaId","int",0,"px",3,3,"right",null,[],2622,"CategoriaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2596,60,"CATEGORIADESCABREVIADA","","","CategoriaDescAbreviada","svchar",0,"px",20,20,"left",null,[],2596,"CategoriaDescAbreviada",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2597,61,"CATEGORIATIPOCOBRANCA","Tipo Cobrança","CategoriaTipoCobranca","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2623,62,"TIPOCATEGORIADESCRICAO","Tipo Categoria","","TipoCategoriaDescricao","svchar",0,"px",20,20,"left",null,[],2623,"TipoCategoriaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2604,63,"CATEGORIASNCADDEPENDENTE","Cadastra Dependente","CategoriaSnCadDependente","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",64,0,"px",17,"px","e20gl2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",65,0,"px",17,"px","e21gl2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",66,0,"px",17,"px","e22gl2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCATEGORIAID",gxz:"ZV27CategoriaId",gxold:"OV27CategoriaId",gxvar:"AV27CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27CategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27CategoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCATEGORIAID",gx.O.AV27CategoriaId,0)},c2v:function(){gx.O.AV27CategoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCATEGORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCATEGORIATIPOCOBRANCA",gxz:"ZV28CategoriaTipoCobranca",gxold:"OV28CategoriaTipoCobranca",gxvar:"AV28CategoriaTipoCobranca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28CategoriaTipoCobranca=Value},v2z:function(Value){gx.O.ZV28CategoriaTipoCobranca=Value},v2c:function(){gx.fn.setComboBoxValue("vCATEGORIATIPOCOBRANCA",gx.O.AV28CategoriaTipoCobranca)},c2v:function(){gx.O.AV28CategoriaTipoCobranca=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIATIPOCOBRANCA")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCATEGORIADESCABREVIADA",gxz:"ZV30CategoriaDescAbreviada",gxold:"OV30CategoriaDescAbreviada",gxvar:"AV30CategoriaDescAbreviada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30CategoriaDescAbreviada=Value},v2z:function(Value){gx.O.ZV30CategoriaDescAbreviada=Value},v2c:function(){gx.fn.setControlValue("vCATEGORIADESCABREVIADA",gx.O.AV30CategoriaDescAbreviada,0)},c2v:function(){gx.O.AV30CategoriaDescAbreviada=this.val()},val:function(){return gx.fn.getControlValue("vCATEGORIADESCABREVIADA")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOCATEGORIAID",gxz:"ZV29TipoCategoriaId",gxold:"OV29TipoCategoriaId",gxvar:"AV29TipoCategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29TipoCategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29TipoCategoriaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOCATEGORIAID",gx.O.AV29TipoCategoriaId,0)},c2v:function(){gx.O.AV29TipoCategoriaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOCATEGORIAID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCATEGORIAEMPRESAID",gxz:"ZV34TipoCategoriaEmpresaId",gxold:"OV34TipoCategoriaEmpresaId",gxvar:"AV34TipoCategoriaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TipoCategoriaEmpresaId=Value},v2z:function(Value){gx.O.ZV34TipoCategoriaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vTIPOCATEGORIAEMPRESAID",gx.O.AV34TipoCategoriaEmpresaId,0)},c2v:function(){gx.O.AV34TipoCategoriaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCATEGORIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCATEGORIADESCRICAO",gxz:"ZV33TipoCategoriaDescricao",gxold:"OV33TipoCategoriaDescricao",gxvar:"AV33TipoCategoriaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33TipoCategoriaDescricao=Value},v2z:function(Value){gx.O.ZV33TipoCategoriaDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOCATEGORIADESCRICAO",gx.O.AV33TipoCategoriaDescricao,0)},c2v:function(){gx.O.AV33TipoCategoriaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCATEGORIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"TABLE6",grid:0};
   GXValidFnc[39]={fld:"IMAGE2",grid:0};
   GXValidFnc[41]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[43]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[45]={fld:"IMAGE1",grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"TABLE5",grid:0};
   GXValidFnc[52]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIAID",gxz:"Z2622CategoriaId",gxold:"O2622CategoriaId",gxvar:"A2622CategoriaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2622CategoriaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2622CategoriaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CATEGORIAID",row || gx.fn.currentGridRowImpl(58),gx.O.A2622CategoriaId,0)},c2v:function(){gx.O.A2622CategoriaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CATEGORIAID",row || gx.fn.currentGridRowImpl(58),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIADESCABREVIADA",gxz:"Z2596CategoriaDescAbreviada",gxold:"O2596CategoriaDescAbreviada",gxvar:"A2596CategoriaDescAbreviada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2596CategoriaDescAbreviada=Value},v2z:function(Value){gx.O.Z2596CategoriaDescAbreviada=Value},v2c:function(row){gx.fn.setGridControlValue("CATEGORIADESCABREVIADA",row || gx.fn.currentGridRowImpl(58),gx.O.A2596CategoriaDescAbreviada,0)},c2v:function(){gx.O.A2596CategoriaDescAbreviada=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIADESCABREVIADA",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIATIPOCOBRANCA",gxz:"Z2597CategoriaTipoCobranca",gxold:"O2597CategoriaTipoCobranca",gxvar:"A2597CategoriaTipoCobranca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2597CategoriaTipoCobranca=Value},v2z:function(Value){gx.O.Z2597CategoriaTipoCobranca=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CATEGORIATIPOCOBRANCA",row || gx.fn.currentGridRowImpl(58),gx.O.A2597CategoriaTipoCobranca)},c2v:function(){gx.O.A2597CategoriaTipoCobranca=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIATIPOCOBRANCA",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCATEGORIADESCRICAO",gxz:"Z2623TipoCategoriaDescricao",gxold:"O2623TipoCategoriaDescricao",gxvar:"A2623TipoCategoriaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2623TipoCategoriaDescricao=Value},v2z:function(Value){gx.O.Z2623TipoCategoriaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCATEGORIADESCRICAO",row || gx.fn.currentGridRowImpl(58),gx.O.A2623TipoCategoriaDescricao,0)},c2v:function(){gx.O.A2623TipoCategoriaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCATEGORIADESCRICAO",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CATEGORIASNCADDEPENDENTE",gxz:"Z2604CategoriaSnCadDependente",gxold:"O2604CategoriaSnCadDependente",gxvar:"A2604CategoriaSnCadDependente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2604CategoriaSnCadDependente=Value},v2z:function(Value){gx.O.Z2604CategoriaSnCadDependente=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CATEGORIASNCADDEPENDENTE",row || gx.fn.currentGridRowImpl(58),gx.O.A2604CategoriaSnCadDependente)},c2v:function(){gx.O.A2604CategoriaSnCadDependente=this.val()},val:function(row){return gx.fn.getGridControlValue("CATEGORIASNCADDEPENDENTE",row || gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(58),gx.O.AV7bmpAlt,gx.O.AV43Bmpalt_GXI)},c2v:function(){gx.O.AV43Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV43Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58),gx.O.AV8bmpExc,gx.O.AV44Bmpexc_GXI)},c2v:function(){gx.O.AV44Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV44Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:58,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(58),gx.O.AV16bmpCon,gx.O.AV45Bmpcon_GXI)},c2v:function(){gx.O.AV45Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(58))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(58))}, gxvar_GXI:'AV45Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[73]={fld:"JS", format:2,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"PROMPT_TIPOCATEGORIAID",grid:0};
   this.AV27CategoriaId = 0 ;
   this.ZV27CategoriaId = 0 ;
   this.OV27CategoriaId = 0 ;
   this.AV28CategoriaTipoCobranca = "" ;
   this.ZV28CategoriaTipoCobranca = "" ;
   this.OV28CategoriaTipoCobranca = "" ;
   this.AV30CategoriaDescAbreviada = "" ;
   this.ZV30CategoriaDescAbreviada = "" ;
   this.OV30CategoriaDescAbreviada = "" ;
   this.AV29TipoCategoriaId = 0 ;
   this.ZV29TipoCategoriaId = 0 ;
   this.OV29TipoCategoriaId = 0 ;
   this.AV34TipoCategoriaEmpresaId = "" ;
   this.ZV34TipoCategoriaEmpresaId = "" ;
   this.OV34TipoCategoriaEmpresaId = "" ;
   this.AV33TipoCategoriaDescricao = "" ;
   this.ZV33TipoCategoriaDescricao = "" ;
   this.OV33TipoCategoriaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2622CategoriaId = 0 ;
   this.O2622CategoriaId = 0 ;
   this.Z2596CategoriaDescAbreviada = "" ;
   this.O2596CategoriaDescAbreviada = "" ;
   this.Z2597CategoriaTipoCobranca = "" ;
   this.O2597CategoriaTipoCobranca = "" ;
   this.Z2623TipoCategoriaDescricao = "" ;
   this.O2623TipoCategoriaDescricao = "" ;
   this.Z2604CategoriaSnCadDependente = "" ;
   this.O2604CategoriaSnCadDependente = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27CategoriaId = 0 ;
   this.AV28CategoriaTipoCobranca = "" ;
   this.AV30CategoriaDescAbreviada = "" ;
   this.AV29TipoCategoriaId = 0 ;
   this.AV34TipoCategoriaEmpresaId = "" ;
   this.AV33TipoCategoriaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2603TipoCategoriaId = 0 ;
   this.A2621CategoriaEmpresaId = "" ;
   this.A2602TipoCategoriaEmpresaId = "" ;
   this.A2622CategoriaId = 0 ;
   this.A2596CategoriaDescAbreviada = "" ;
   this.A2597CategoriaTipoCobranca = "" ;
   this.A2623TipoCategoriaDescricao = "" ;
   this.A2604CategoriaSnCadDependente = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV31CategoriaEmpresaId = "" ;
   this.AV38SnRecuperaFiltro = "" ;
   this.Events = {"e11gl2_client": ["'ANTERIOR'", true] ,"e12gl2_client": ["'PROXIMO'", true] ,"e17gl2_client": ["VPAGINA.CLICK", true] ,"e13gl2_client": ["'NOVO'", true] ,"e14gl2_client": ["'FECHAR'", true] ,"e15gl2_client": ["'IMPRIMIR'", true] ,"e16gl2_client": ["'PROCURAR'", true] ,"e20gl2_client": ["'ALTERAR'", true] ,"e21gl2_client": ["'EXCLUIR'", true] ,"e22gl2_client": ["'CONSULTAR'", true] ,"e23gl2_client": ["'ATUALIZAPAGINA'", true] ,"e25gl2_client": ["ENTER", true] ,"e26gl2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CategoriaId',fld:'vCATEGORIAID'},{av:'AV28CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV30CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV29TipoCategoriaId',fld:'vTIPOCATEGORIAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CategoriaId',fld:'vCATEGORIAID'},{av:'AV28CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV30CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV29TipoCategoriaId',fld:'vTIPOCATEGORIAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'CATEGORIAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CATEGORIAID","Title")',ctrl:'CATEGORIAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CATEGORIADESCABREVIADA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CATEGORIADESCABREVIADA","Title")',ctrl:'CATEGORIADESCABREVIADA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27CategoriaId',fld:'vCATEGORIAID'},{av:'AV30CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV28CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV29TipoCategoriaId',fld:'vTIPOCATEGORIAID'},{av:'AV33TipoCategoriaDescricao',fld:'vTIPOCATEGORIADESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CategoriaId',fld:'vCATEGORIAID'},{av:'AV28CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV30CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV29TipoCategoriaId',fld:'vTIPOCATEGORIAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33TipoCategoriaDescricao',fld:'vTIPOCATEGORIADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CategoriaId',fld:'vCATEGORIAID'},{av:'AV28CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV30CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV29TipoCategoriaId',fld:'vTIPOCATEGORIAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV33TipoCategoriaDescricao',fld:'vTIPOCATEGORIADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CategoriaId',fld:'vCATEGORIAID'},{av:'AV28CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV30CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV29TipoCategoriaId',fld:'vTIPOCATEGORIAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33TipoCategoriaDescricao',fld:'vTIPOCATEGORIADESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27CategoriaId',fld:'vCATEGORIAID'},{av:'AV30CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV28CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV29TipoCategoriaId',fld:'vTIPOCATEGORIAID'},{av:'AV33TipoCategoriaDescricao',fld:'vTIPOCATEGORIADESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV41Pgmname',fld:'vPGMNAME'},{av:'AV42Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV46Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CategoriaId',fld:'vCATEGORIAID'},{av:'AV28CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV30CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV29TipoCategoriaId',fld:'vTIPOCATEGORIAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33TipoCategoriaDescricao',fld:'vTIPOCATEGORIADESCRICAO'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27CategoriaId',fld:'vCATEGORIAID'},{av:'AV30CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV28CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV29TipoCategoriaId',fld:'vTIPOCATEGORIAID'},{av:'AV33TipoCategoriaDescricao',fld:'vTIPOCATEGORIADESCRICAO'}],[{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27CategoriaId',fld:'vCATEGORIAID'},{av:'AV30CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV28CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV29TipoCategoriaId',fld:'vTIPOCATEGORIAID'},{av:'AV33TipoCategoriaDescricao',fld:'vTIPOCATEGORIADESCRICAO'}],[{av:'AV37SnEmUso',fld:'vSNEMUSO'},{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27CategoriaId',fld:'vCATEGORIAID'},{av:'AV30CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV28CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV29TipoCategoriaId',fld:'vTIPOCATEGORIAID'},{av:'AV33TipoCategoriaDescricao',fld:'vTIPOCATEGORIADESCRICAO'}],[{av:'A2622CategoriaId',fld:'CATEGORIAID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CategoriaId',fld:'vCATEGORIAID'},{av:'AV28CategoriaTipoCobranca',fld:'vCATEGORIATIPOCOBRANCA'},{av:'AV30CategoriaDescAbreviada',fld:'vCATEGORIADESCABREVIADA'},{av:'AV29TipoCategoriaId',fld:'vTIPOCATEGORIAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV31CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setPrompt("PROMPT_TIPOCATEGORIAID", [26]);
   this.setVCMap("AV31CategoriaEmpresaId", "vCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV31CategoriaEmpresaId", "vCATEGORIAEMPRESAID", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar({rfrVar:"AV31CategoriaEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV38SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcategoria());

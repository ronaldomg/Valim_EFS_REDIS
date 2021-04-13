/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:34:34.12
*/
gx.evt.autoSkip = false;
gx.define('hgrauparentesco', false, function () {
   this.ServerClass =  "hgrauparentesco" ;
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
      this.AV29SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11gm2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12gm2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17gm2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13gm2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14gm2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15gm2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16gm2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20gm2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21gm2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22gm2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23gm2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25gm2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26gm2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,22,25,28,30,32,34,36,38,41,43,44,48,49,50,51,52,53,54,55,56,63];
   this.GXLastCtrlId =63;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",47,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hgrauparentesco",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2647,48,"GRAUPARENTESCOID","","","GrauParentescoId","int",0,"px",2,2,"right",null,[],2647,"GrauParentescoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2654,49,"GRAUPARENTESCODESCRICAO","","","GrauParentescoDescricao","svchar",0,"px",20,20,"left",null,[],2654,"GrauParentescoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2655,50,"GRAUPARENTESCOIDADEMAXIMA","Idade Máxima","","GrauParentescoIdadeMaxima","int",0,"px",3,3,"right",null,[],2655,"GrauParentescoIdadeMaxima",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2657,51,"GRAUPARENTESCOIDADEMINIMA","Idade Mínima","","GrauParentescoIdadeMinima","int",0,"px",3,3,"right",null,[],2657,"GrauParentescoIdadeMinima",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2659,52,"GRAUPARENTESCOIDADEMINIMADESC","Parentesco","","GrauParentescoIdadeMinimaDesc","svchar",0,"px",20,20,"left",null,[],2659,"GrauParentescoIdadeMinimaDesc",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2656,53,"GRAUPARENTESCOSNCANESTCIV","Cancela Quando Casado","GrauParentescoSnCanEstCiv","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",54,0,"px",17,"px","e20gm2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",55,0,"px",17,"px","e21gm2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",56,0,"px",17,"px","e22gm2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE8",grid:0};
   GXValidFnc[12]={fld:"TABLE9",grid:0};
   GXValidFnc[15]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vGRAUPARENTESCODESCRICAO",gxz:"ZV27GrauParentescoDescricao",gxold:"OV27GrauParentescoDescricao",gxvar:"AV27GrauParentescoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27GrauParentescoDescricao=Value},v2z:function(Value){gx.O.ZV27GrauParentescoDescricao=Value},v2c:function(){gx.fn.setControlValue("vGRAUPARENTESCODESCRICAO",gx.O.AV27GrauParentescoDescricao,0)},c2v:function(){gx.O.AV27GrauParentescoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGRAUPARENTESCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TABLE4",grid:0};
   GXValidFnc[25]={fld:"TABLE6",grid:0};
   GXValidFnc[28]={fld:"IMAGE2",grid:0};
   GXValidFnc[30]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[32]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[34]={fld:"IMAGE1",grid:0};
   GXValidFnc[36]={fld:"BTNHELP",grid:0};
   GXValidFnc[38]={fld:"TABLE5",grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOID",gxz:"Z2647GrauParentescoId",gxold:"O2647GrauParentescoId",gxvar:"A2647GrauParentescoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2647GrauParentescoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2647GrauParentescoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRAUPARENTESCOID",row || gx.fn.currentGridRowImpl(47),gx.O.A2647GrauParentescoId,0)},c2v:function(){gx.O.A2647GrauParentescoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRAUPARENTESCOID",row || gx.fn.currentGridRowImpl(47),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCODESCRICAO",gxz:"Z2654GrauParentescoDescricao",gxold:"O2654GrauParentescoDescricao",gxvar:"A2654GrauParentescoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2654GrauParentescoDescricao=Value},v2z:function(Value){gx.O.Z2654GrauParentescoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("GRAUPARENTESCODESCRICAO",row || gx.fn.currentGridRowImpl(47),gx.O.A2654GrauParentescoDescricao,0)},c2v:function(){gx.O.A2654GrauParentescoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("GRAUPARENTESCODESCRICAO",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOIDADEMAXIMA",gxz:"Z2655GrauParentescoIdadeMaxima",gxold:"O2655GrauParentescoIdadeMaxima",gxvar:"A2655GrauParentescoIdadeMaxima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2655GrauParentescoIdadeMaxima=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2655GrauParentescoIdadeMaxima=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRAUPARENTESCOIDADEMAXIMA",row || gx.fn.currentGridRowImpl(47),gx.O.A2655GrauParentescoIdadeMaxima,0)},c2v:function(){gx.O.A2655GrauParentescoIdadeMaxima=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRAUPARENTESCOIDADEMAXIMA",row || gx.fn.currentGridRowImpl(47),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOIDADEMINIMA",gxz:"Z2657GrauParentescoIdadeMinima",gxold:"O2657GrauParentescoIdadeMinima",gxvar:"A2657GrauParentescoIdadeMinima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2657GrauParentescoIdadeMinima=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2657GrauParentescoIdadeMinima=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRAUPARENTESCOIDADEMINIMA",row || gx.fn.currentGridRowImpl(47),gx.O.A2657GrauParentescoIdadeMinima,0)},c2v:function(){gx.O.A2657GrauParentescoIdadeMinima=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRAUPARENTESCOIDADEMINIMA",row || gx.fn.currentGridRowImpl(47),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOIDADEMINIMADESC",gxz:"Z2659GrauParentescoIdadeMinimaDesc",gxold:"O2659GrauParentescoIdadeMinimaDesc",gxvar:"A2659GrauParentescoIdadeMinimaDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2659GrauParentescoIdadeMinimaDesc=Value},v2z:function(Value){gx.O.Z2659GrauParentescoIdadeMinimaDesc=Value},v2c:function(row){gx.fn.setGridControlValue("GRAUPARENTESCOIDADEMINIMADESC",row || gx.fn.currentGridRowImpl(47),gx.O.A2659GrauParentescoIdadeMinimaDesc,0)},c2v:function(){gx.O.A2659GrauParentescoIdadeMinimaDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("GRAUPARENTESCOIDADEMINIMADESC",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"GRAUPARENTESCOSNCANESTCIV",gxz:"Z2656GrauParentescoSnCanEstCiv",gxold:"O2656GrauParentescoSnCanEstCiv",gxvar:"A2656GrauParentescoSnCanEstCiv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2656GrauParentescoSnCanEstCiv=Value},v2z:function(Value){gx.O.Z2656GrauParentescoSnCanEstCiv=Value},v2c:function(row){gx.fn.setGridComboBoxValue("GRAUPARENTESCOSNCANESTCIV",row || gx.fn.currentGridRowImpl(47),gx.O.A2656GrauParentescoSnCanEstCiv)},c2v:function(){gx.O.A2656GrauParentescoSnCanEstCiv=this.val()},val:function(row){return gx.fn.getGridControlValue("GRAUPARENTESCOSNCANESTCIV",row || gx.fn.currentGridRowImpl(47))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(47),gx.O.AV7bmpAlt,gx.O.AV34Bmpalt_GXI)},c2v:function(){gx.O.AV34Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV34Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(47),gx.O.AV8bmpExc,gx.O.AV35Bmpexc_GXI)},c2v:function(){gx.O.AV35Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV35Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:47,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(47),gx.O.AV16bmpCon,gx.O.AV36Bmpcon_GXI)},c2v:function(){gx.O.AV36Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(47))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(47))}, gxvar_GXI:'AV36Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27GrauParentescoDescricao = "" ;
   this.ZV27GrauParentescoDescricao = "" ;
   this.OV27GrauParentescoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2647GrauParentescoId = 0 ;
   this.O2647GrauParentescoId = 0 ;
   this.Z2654GrauParentescoDescricao = "" ;
   this.O2654GrauParentescoDescricao = "" ;
   this.Z2655GrauParentescoIdadeMaxima = 0 ;
   this.O2655GrauParentescoIdadeMaxima = 0 ;
   this.Z2657GrauParentescoIdadeMinima = 0 ;
   this.O2657GrauParentescoIdadeMinima = 0 ;
   this.Z2659GrauParentescoIdadeMinimaDesc = "" ;
   this.O2659GrauParentescoIdadeMinimaDesc = "" ;
   this.Z2656GrauParentescoSnCanEstCiv = "" ;
   this.O2656GrauParentescoSnCanEstCiv = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27GrauParentescoDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2658GrauParentescoIdadeMinimaCod = 0 ;
   this.A2647GrauParentescoId = 0 ;
   this.A2654GrauParentescoDescricao = "" ;
   this.A2655GrauParentescoIdadeMaxima = 0 ;
   this.A2657GrauParentescoIdadeMinima = 0 ;
   this.A2659GrauParentescoIdadeMinimaDesc = "" ;
   this.A2656GrauParentescoSnCanEstCiv = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV29SnRecuperaFiltro = "" ;
   this.Events = {"e11gm2_client": ["'ANTERIOR'", true] ,"e12gm2_client": ["'PROXIMO'", true] ,"e17gm2_client": ["VPAGINA.CLICK", true] ,"e13gm2_client": ["'NOVO'", true] ,"e14gm2_client": ["'FECHAR'", true] ,"e15gm2_client": ["'IMPRIMIR'", true] ,"e16gm2_client": ["'PROCURAR'", true] ,"e20gm2_client": ["'ALTERAR'", true] ,"e21gm2_client": ["'EXCLUIR'", true] ,"e22gm2_client": ["'CONSULTAR'", true] ,"e23gm2_client": ["'ATUALIZAPAGINA'", true] ,"e25gm2_client": ["ENTER", true] ,"e26gm2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'GRAUPARENTESCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRAUPARENTESCOID","Title")',ctrl:'GRAUPARENTESCOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'GRAUPARENTESCODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("GRAUPARENTESCODESCRICAO","Title")',ctrl:'GRAUPARENTESCODESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV32Pgmname',fld:'vPGMNAME'},{av:'AV28QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV33Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV28QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2647GrauParentescoId',fld:'GRAUPARENTESCOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'}],[{av:'A2647GrauParentescoId',fld:'GRAUPARENTESCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2647GrauParentescoId',fld:'GRAUPARENTESCOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'}],[{av:'A2647GrauParentescoId',fld:'GRAUPARENTESCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2647GrauParentescoId',fld:'GRAUPARENTESCOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'}],[{av:'A2647GrauParentescoId',fld:'GRAUPARENTESCOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27GrauParentescoDescricao',fld:'vGRAUPARENTESCODESCRICAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV29SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV29SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV29SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgrauparentesco());

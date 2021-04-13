/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:14:16.5
*/
gx.evt.autoSkip = false;
gx.define('hdialog', false, function () {
   this.ServerClass =  "hdialog" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'CANCELAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV23SNAtualizar=gx.fn.getControlValue("vSNATUALIZAR") ;
      this.AV5ArqDir=gx.fn.getControlValue("vARQDIR") ;
      this.AV14SdtBuscaArqDir=gx.fn.getControlValue("vSDTBUSCAARQDIR") ;
      this.AV6Busca=gx.fn.getControlValue("vBUSCA") ;
      this.AV21DiretorioRetorno=gx.fn.getControlValue("vDIRETORIORETORNO") ;
   };
   this.e13bp2_client=function()
   {
      this.executeServerEvent("'VOLTARNIVEL'", false, null, false, false);
   };
   this.e17bp2_client=function()
   {
      this.executeServerEvent("'SELECIONADIRETORIO'", true, arguments[0], false, false);
   };
   this.e18bp2_client=function()
   {
      this.executeServerEvent("'SUBPASTA'", true, arguments[0], false, false);
   };
   this.e11bp2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e14bp2_client=function()
   {
      this.executeServerEvent("VEXTENSAO.CLICK", true, null, false, true);
   };
   this.e19bp2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e20bp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,10,11,12,13,14,17,20,22,25,27,30,32,36,37,38];
   this.GXLastCtrlId =38;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",9,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hdialog",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addBitmap("&Bmpseleciona","vBMPSELECIONA",10,0,"px",17,"px","e17bp2_client","","","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmppasta","vBMPPASTA",11,0,"px",17,"px","e18bp2_client","","","Image","GridColumnImage");
   GridContainer.addSingleLineEdit("Pasta",12,"vPASTA","","","Pasta","svchar",410,"px",200,80,"left",null,[],"Pasta","Pasta",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Arqdirgrid",13,"vARQDIRGRID","","","ArqDirGrid","int",0,"px",1,1,"right",null,[],"Arqdirgrid","ArqDirGrid",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[10]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:9,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSELECIONA",gxz:"ZV15bmpSeleciona",gxold:"OV15bmpSeleciona",gxvar:"AV15bmpSeleciona",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15bmpSeleciona=Value},v2z:function(Value){gx.O.ZV15bmpSeleciona=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSELECIONA",row || gx.fn.currentGridRowImpl(9),gx.O.AV15bmpSeleciona,gx.O.AV35Bmpseleciona_GXI)},c2v:function(){gx.O.AV35Bmpseleciona_GXI=this.val_GXI();gx.O.AV15bmpSeleciona=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSELECIONA",row || gx.fn.currentGridRowImpl(9))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSELECIONA_GXI",row || gx.fn.currentGridRowImpl(9))}, gxvar_GXI:'AV35Bmpseleciona_GXI',nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:9,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPASTA",gxz:"ZV16bmpPasta",gxold:"OV16bmpPasta",gxvar:"AV16bmpPasta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpPasta=Value},v2z:function(Value){gx.O.ZV16bmpPasta=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPASTA",row || gx.fn.currentGridRowImpl(9),gx.O.AV16bmpPasta,gx.O.AV33Bmppasta_GXI)},c2v:function(){gx.O.AV33Bmppasta_GXI=this.val_GXI();gx.O.AV16bmpPasta=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPASTA",row || gx.fn.currentGridRowImpl(9))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPASTA_GXI",row || gx.fn.currentGridRowImpl(9))}, gxvar_GXI:'AV33Bmppasta_GXI',nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"svchar",len:200,dec:0,sign:false,ro:0,isacc:0,grid:9,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPASTA",gxz:"ZV17Pasta",gxold:"OV17Pasta",gxvar:"AV17Pasta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV17Pasta=Value},v2z:function(Value){gx.O.ZV17Pasta=Value},v2c:function(row){gx.fn.setGridControlValue("vPASTA",row || gx.fn.currentGridRowImpl(9),gx.O.AV17Pasta,0)},c2v:function(){gx.O.AV17Pasta=this.val()},val:function(row){return gx.fn.getGridControlValue("vPASTA",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,isacc:0,grid:9,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vARQDIRGRID",gxz:"ZV18ArqDirGrid",gxold:"OV18ArqDirGrid",gxvar:"AV18ArqDirGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV18ArqDirGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18ArqDirGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vARQDIRGRID",row || gx.fn.currentGridRowImpl(9),gx.O.AV18ArqDirGrid,0)},c2v:function(){gx.O.AV18ArqDirGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vARQDIRGRID",row || gx.fn.currentGridRowImpl(9),'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[17]={fld:"TABLE5",grid:0};
   GXValidFnc[20]={fld:"TXTEXTENSAO", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXTENSAO",gxz:"ZV22Extensao",gxold:"OV22Extensao",gxvar:"AV22Extensao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22Extensao=Value},v2z:function(Value){gx.O.ZV22Extensao=Value},v2c:function(){gx.fn.setComboBoxValue("vEXTENSAO",gx.O.AV22Extensao)},c2v:function(){gx.O.AV22Extensao=this.val()},val:function(){return gx.fn.getControlValue("vEXTENSAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"NOME", format:0,grid:0};
   GXValidFnc[27]={fld:"TABLE6",grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:33,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESQUISANOME",gxz:"ZV24PesquisaNome",gxold:"OV24PesquisaNome",gxvar:"AV24PesquisaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PesquisaNome=Value},v2z:function(Value){gx.O.ZV24PesquisaNome=Value},v2c:function(){gx.fn.setControlValue("vPESQUISANOME",gx.O.AV24PesquisaNome,0)},c2v:function(){gx.O.AV24PesquisaNome=this.val()},val:function(){return gx.fn.getControlValue("vPESQUISANOME")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPESQUISAR",gxz:"ZV25bmpPesquisar",gxold:"OV25bmpPesquisar",gxvar:"AV25bmpPesquisar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25bmpPesquisar=Value},v2z:function(Value){gx.O.ZV25bmpPesquisar=Value},v2c:function(){gx.fn.setMultimediaValue("vBMPPESQUISAR",gx.O.AV25bmpPesquisar,gx.O.AV36Bmppesquisar_GXI)},c2v:function(){gx.O.AV36Bmppesquisar_GXI=this.val_GXI();gx.O.AV25bmpPesquisar=this.val()},val:function(){return gx.fn.getBlobValue("vBMPPESQUISAR")},val_GXI:function(){return gx.fn.getControlValue("vBMPPESQUISAR_GXI")}, gxvar_GXI:'AV36Bmppesquisar_GXI',nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVOLTAR",gxz:"ZV9Voltar",gxold:"OV9Voltar",gxvar:"AV9Voltar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9Voltar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9Voltar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVOLTAR",gx.O.AV9Voltar,0)},c2v:function(){gx.O.AV9Voltar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVOLTAR",'.')},nac:gx.falseFn};
   GXValidFnc[37]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV11Diretorio",gxold:"OV11Diretorio",gxvar:"AV11Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11Diretorio=Value},v2z:function(Value){gx.O.ZV11Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV11Diretorio,0)},c2v:function(){gx.O.AV11Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAMPO",gxz:"ZV7Campo",gxold:"OV7Campo",gxvar:"AV7Campo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7Campo=Value},v2z:function(Value){gx.O.ZV7Campo=Value},v2c:function(){gx.fn.setControlValue("vCAMPO",gx.O.AV7Campo,0)},c2v:function(){gx.O.AV7Campo=this.val()},val:function(){return gx.fn.getControlValue("vCAMPO")},nac:gx.falseFn};
   this.ZV15bmpSeleciona = "" ;
   this.OV15bmpSeleciona = "" ;
   this.ZV16bmpPasta = "" ;
   this.OV16bmpPasta = "" ;
   this.ZV17Pasta = "" ;
   this.OV17Pasta = "" ;
   this.ZV18ArqDirGrid = 0 ;
   this.OV18ArqDirGrid = 0 ;
   this.AV22Extensao = "" ;
   this.ZV22Extensao = "" ;
   this.OV22Extensao = "" ;
   this.AV24PesquisaNome = "" ;
   this.ZV24PesquisaNome = "" ;
   this.OV24PesquisaNome = "" ;
   this.AV36Bmppesquisar_GXI = "" ;
   this.AV25bmpPesquisar = "" ;
   this.ZV25bmpPesquisar = "" ;
   this.OV25bmpPesquisar = "" ;
   this.AV9Voltar = 0 ;
   this.ZV9Voltar = 0 ;
   this.OV9Voltar = 0 ;
   this.AV11Diretorio = "" ;
   this.ZV11Diretorio = "" ;
   this.OV11Diretorio = "" ;
   this.AV7Campo = "" ;
   this.ZV7Campo = "" ;
   this.OV7Campo = "" ;
   this.AV22Extensao = "" ;
   this.AV24PesquisaNome = "" ;
   this.AV25bmpPesquisar = "" ;
   this.AV9Voltar = 0 ;
   this.AV11Diretorio = "" ;
   this.AV7Campo = "" ;
   this.AV5ArqDir = "" ;
   this.AV6Busca = "" ;
   this.AV21DiretorioRetorno = "" ;
   this.AV15bmpSeleciona = "" ;
   this.AV16bmpPasta = "" ;
   this.AV17Pasta = "" ;
   this.AV18ArqDirGrid = 0 ;
   this.AV23SNAtualizar = "" ;
   this.AV14SdtBuscaArqDir = [ ] ;
   this.Events = {"e13bp2_client": ["'VOLTARNIVEL'", true] ,"e17bp2_client": ["'SELECIONADIRETORIO'", true] ,"e18bp2_client": ["'SUBPASTA'", true] ,"e11bp2_client": ["'CANCELAR'", true] ,"e14bp2_client": ["VEXTENSAO.CLICK", true] ,"e19bp2_client": ["ENTER", true] ,"e20bp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV15bmpSeleciona',fld:'vBMPSELECIONA'},{av:'AV23SNAtualizar',fld:'vSNATUALIZAR'},{av:'AV9Voltar',fld:'vVOLTAR'},{av:'AV5ArqDir',fld:'vARQDIR',hsh:true},{av:'AV11Diretorio',fld:'vDIRETORIO'},{av:'AV22Extensao',fld:'vEXTENSAO'},{av:'AV14SdtBuscaArqDir',fld:'vSDTBUSCAARQDIR'},{av:'AV24PesquisaNome',fld:'vPESQUISANOME'}],[{ctrl:'BTNVOLTARNIVEL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPPESQUISAR","Visible")',ctrl:'vBMPPESQUISAR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPPESQUISAR","Tooltiptext")',ctrl:'vBMPPESQUISAR',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPPESQUISAR","Enabled")',ctrl:'vBMPPESQUISAR',prop:'Enabled'},{av:'AV25bmpPesquisar',fld:'vBMPPESQUISAR'},{av:'gx.fn.getCtrlProperty("TXTEXTENSAO","Visible")',ctrl:'TXTEXTENSAO',prop:'Visible'},{ctrl:'vEXTENSAO'},{av:'gx.fn.getCtrlProperty("NOME","Visible")',ctrl:'NOME',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vPESQUISANOME","Visible")',ctrl:'vPESQUISANOME',prop:'Visible'},{av:'AV27ArqDirParm',fld:'vARQDIRPARM'},{av:'AV24PesquisaNome',fld:'vPESQUISANOME'},{av:'AV14SdtBuscaArqDir',fld:'vSDTBUSCAARQDIR'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV14SdtBuscaArqDir',fld:'vSDTBUSCAARQDIR'}],[{av:'AV32GXV1',fld:'vGXV1'},{av:'AV13SdtBuscaArqDirItem',fld:'vSDTBUSCAARQDIRITEM'},{av:'gx.fn.getCtrlProperty("vBMPSELECIONA","Tooltiptext")',ctrl:'vBMPSELECIONA',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPPASTA","Enabled")',ctrl:'vBMPPASTA',prop:'Enabled'},{av:'AV16bmpPasta',fld:'vBMPPASTA'},{av:'AV17Pasta',fld:'vPASTA'},{av:'AV18ArqDirGrid',fld:'vARQDIRGRID'}]];
   this.EvtParms["'VOLTARNIVEL'"] = [[{av:'AV9Voltar',fld:'vVOLTAR'}],[{av:'AV19SdtBuscaArqDirAux',fld:'vSDTBUSCAARQDIRAUX'},{av:'AV34GXV2',fld:'vGXV2'},{av:'AV20SdtBuscaArqDirAuxItem',fld:'vSDTBUSCAARQDIRAUXITEM'},{av:'AV11Diretorio',fld:'vDIRETORIO'},{av:'AV9Voltar',fld:'vVOLTAR'}]];
   this.EvtParms["'SELECIONADIRETORIO'"] = [[{av:'AV11Diretorio',fld:'vDIRETORIO'},{av:'AV17Pasta',fld:'vPASTA'},{av:'AV5ArqDir',fld:'vARQDIR',hsh:true},{av:'AV18ArqDirGrid',fld:'vARQDIRGRID'},{av:'AV21DiretorioRetorno',fld:'vDIRETORIORETORNO'}],[{av:'AV23SNAtualizar',fld:'vSNATUALIZAR'},{av:'AV21DiretorioRetorno',fld:'vDIRETORIORETORNO'},{av:'AV28Data',fld:'vDATA'},{av:'AV29DataStr',fld:'vDATASTR'}]];
   this.EvtParms["'SUBPASTA'"] = [[{av:'AV9Voltar',fld:'vVOLTAR'},{av:'AV11Diretorio',fld:'vDIRETORIO'},{av:'AV17Pasta',fld:'vPASTA'}],[{av:'AV9Voltar',fld:'vVOLTAR'},{av:'AV19SdtBuscaArqDirAux',fld:'vSDTBUSCAARQDIRAUX'},{av:'AV20SdtBuscaArqDirAuxItem',fld:'vSDTBUSCAARQDIRAUXITEM'},{av:'AV11Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["VEXTENSAO.CLICK"] = [[],[]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV21DiretorioRetorno',fld:'vDIRETORIORETORNO'}],[{av:'AV23SNAtualizar',fld:'vSNATUALIZAR'},{av:'AV21DiretorioRetorno',fld:'vDIRETORIORETORNO'}]];
   this.setVCMap("AV23SNAtualizar", "vSNATUALIZAR", 0, "char");
   this.setVCMap("AV5ArqDir", "vARQDIR", 0, "char");
   this.setVCMap("AV14SdtBuscaArqDir", "vSDTBUSCAARQDIR", 0, "CollSdtBuscaArqDir.SdtBuscaArqDirItem");
   this.setVCMap("AV6Busca", "vBUSCA", 0, "char");
   this.setVCMap("AV21DiretorioRetorno", "vDIRETORIORETORNO", 0, "svchar");
   this.setVCMap("AV23SNAtualizar", "vSNATUALIZAR", 0, "char");
   this.setVCMap("AV5ArqDir", "vARQDIR", 0, "char");
   this.setVCMap("AV14SdtBuscaArqDir", "vSDTBUSCAARQDIR", 0, "CollSdtBuscaArqDir.SdtBuscaArqDirItem");
   GridContainer.addRefreshingVar({rfrVar:"AV15bmpSeleciona", rfrProp:"Value", gxAttId:"Bmpseleciona"});
   GridContainer.addRefreshingVar({rfrVar:"AV23SNAtualizar"});
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar({rfrVar:"AV5ArqDir"});
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar({rfrVar:"AV14SdtBuscaArqDir"});
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdialog());

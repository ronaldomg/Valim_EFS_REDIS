/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:15:31.21
*/
gx.evt.autoSkip = false;
gx.define('hmodalparmfaturarvendasfam', false, function () {
   this.ServerClass =  "hmodalparmfaturarvendasfam" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.e112f42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e152f42_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e162f42_client=function()
   {
      this.executeServerEvent("CTLPRODUTOFAMILIAID.ISVALID", true, arguments[0], false, false);
   };
   this.e122f42_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e132f42_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e182f42_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,12,13,14,15,17];
   this.GXLastCtrlId =17;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",9,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hmodalparmfaturarvendasfam",[],false,1,false,true,0,false,false,false,"CollSdtFamiliaRelProduto.SdtFamiliaRelProdutoItem",0,"px","Novo registro",false,false,false,null,null,false,"AV11SdtFamiliaRelProduto",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("GXV10A",10,"CTLSEQUENCIA","Sequencia","","Sequencia","int",0,"px",4,4,"right",null,[],"GXV10A","GXV10A",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("GXV10B",11,"CTLPRODUTOFAMILIAID","Família","","ProdutoFamiliaId","char",0,"px",15,15,"left",null,[],"GXV10B","GXV10B",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpfam","vBMPFAM",12,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit("GXV10D",13,"CTLPRODUTOFAMILIADESCRICAO","Descrição","","ProdutoFamiliaDescricao","svchar",200,"px",30,30,"left",null,[],"GXV10D","GXV10D",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("&Bmpexcfam","vBMPEXCFAM",14,0,"px",17,"px","e152f42_client","","Exc","Image","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[10]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLSEQUENCIA",gxz:"ZV21GXV10A",gxold:"OV21GXV10A",gxvar:"GXV10A",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10A=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21GXV10A=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSEQUENCIA",row || gx.fn.currentGridRowImpl(9),gx.O.GXV10A,0)},c2v:function(){gx.O.GXV10A=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSEQUENCIA",row || gx.fn.currentGridRowImpl(9),'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:'e162f42_client',rgrid:[],fld:"CTLPRODUTOFAMILIAID",gxz:"ZV22GXV10B",gxold:"OV22GXV10B",gxvar:"GXV10B",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10B=Value},v2z:function(Value){gx.O.ZV22GXV10B=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOFAMILIAID",row || gx.fn.currentGridRowImpl(9),gx.O.GXV10B,0)},c2v:function(){gx.O.GXV10B=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOFAMILIAID",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPFAM",gxz:"ZV14BmpFam",gxold:"OV14BmpFam",gxvar:"AV14BmpFam",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV14BmpFam=Value},v2z:function(Value){gx.O.ZV14BmpFam=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPFAM",row || gx.fn.currentGridRowImpl(9),gx.O.AV14BmpFam,gx.O.AV24Bmpfam_GXI)},c2v:function(){gx.O.AV24Bmpfam_GXI=this.val_GXI();gx.O.AV14BmpFam=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPFAM",row || gx.fn.currentGridRowImpl(9))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPFAM_GXI",row || gx.fn.currentGridRowImpl(9))}, gxvar_GXI:'AV24Bmpfam_GXI',nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLPRODUTOFAMILIADESCRICAO",gxz:"ZV23GXV10D",gxold:"OV23GXV10D",gxvar:"GXV10D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10D=Value},v2z:function(Value){gx.O.ZV23GXV10D=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPRODUTOFAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(9),gx.O.GXV10D,0)},c2v:function(){gx.O.GXV10D=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPRODUTOFAMILIADESCRICAO",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[14]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCFAM",gxz:"ZV15bmpExcFam",gxold:"OV15bmpExcFam",gxvar:"AV15bmpExcFam",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15bmpExcFam=Value},v2z:function(Value){gx.O.ZV15bmpExcFam=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCFAM",row || gx.fn.currentGridRowImpl(9),gx.O.AV15bmpExcFam,gx.O.AV25Bmpexcfam_GXI)},c2v:function(){gx.O.AV25Bmpexcfam_GXI=this.val_GXI();gx.O.AV15bmpExcFam=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCFAM",row || gx.fn.currentGridRowImpl(9))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCFAM_GXI",row || gx.fn.currentGridRowImpl(9))}, gxvar_GXI:'AV25Bmpexcfam_GXI',nac:gx.falseFn};
   GXValidFnc[15]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[17]={fld:"IMAGE2",grid:0};
   this.ZV21GXV10A = 0 ;
   this.OV21GXV10A = 0 ;
   this.ZV22GXV10B = "" ;
   this.OV22GXV10B = "" ;
   this.ZV14BmpFam = "" ;
   this.OV14BmpFam = "" ;
   this.ZV23GXV10D = "" ;
   this.OV23GXV10D = "" ;
   this.ZV15bmpExcFam = "" ;
   this.OV15bmpExcFam = "" ;
   this.GXV10A = 0 ;
   this.GXV10B = "" ;
   this.AV14BmpFam = "" ;
   this.GXV10D = "" ;
   this.AV15bmpExcFam = "" ;
   this.A2957FamiliaId = "" ;
   this.A2956FamiliaEmpresaId = "" ;
   this.Events = {"e112f42_client": ["'FECHAR'", true] ,"e152f42_client": ["'EXCLUIR'", true] ,"e162f42_client": ["CTLPRODUTOFAMILIAID.ISVALID", true] ,"e122f42_client": ["'NOVO'", true] ,"e132f42_client": ["ENTER", true] ,"e182f42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV11SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO',grid:9},{av:'AV14BmpFam',fld:'vBMPFAM'},{av:'AV15bmpExcFam',fld:'vBMPEXCFAM'},{av:'gx.fn.getCtrlProperty("vBMPEXCFAM","Tooltiptext")',ctrl:'vBMPEXCFAM',prop:'Tooltiptext'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV11SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO',grid:9},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV14BmpFam',fld:'vBMPFAM'},{av:'AV15bmpExcFam',fld:'vBMPEXCFAM'},{av:'gx.fn.getCtrlProperty("vBMPEXCFAM","Tooltiptext")',ctrl:'vBMPEXCFAM',prop:'Tooltiptext'}],[{av:'AV11SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO',grid:9}]];
   this.EvtParms["CTLPRODUTOFAMILIAID.ISVALID"] = [[{av:'AV5FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'AV11SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO',grid:9},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV14BmpFam',fld:'vBMPFAM'},{av:'AV15bmpExcFam',fld:'vBMPEXCFAM'},{av:'gx.fn.getCtrlProperty("vBMPEXCFAM","Tooltiptext")',ctrl:'vBMPEXCFAM',prop:'Tooltiptext'}],[{av:'AV11SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO',grid:9}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV11SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO',grid:9},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV14BmpFam',fld:'vBMPFAM'},{av:'AV15bmpExcFam',fld:'vBMPEXCFAM'},{av:'gx.fn.getCtrlProperty("vBMPEXCFAM","Tooltiptext")',ctrl:'vBMPEXCFAM',prop:'Tooltiptext'}],[{av:'AV12SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV11SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO',grid:9}]];
   this.EvtParms["ENTER"] = [[{av:'AV11SdtFamiliaRelProduto',fld:'vSDTFAMILIARELPRODUTO',grid:9},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV5FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'}],[{av:'AV17hasErro',fld:'vHASERRO'},{av:'AV27GXV3',fld:'vGXV3'},{av:'AV12SdtFamiliaRelProdutoItem',fld:'vSDTFAMILIARELPRODUTOITEM'},{av:'AV28GXLvl68',fld:'vGXLVL68'},{av:'AV16ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'AV29GXV4',fld:'vGXV4'}]];
   this.EnterCtrl = ["BUTTON1"];
   Grid1Container.addRefreshingVar({rfrVar:"AV14BmpFam", rfrProp:"Value", gxAttId:"Bmpfam"});
   Grid1Container.addRefreshingVar({rfrVar:"AV15bmpExcFam", rfrProp:"Value", gxAttId:"Bmpexcfam"});
   Grid1Container.addRefreshingVar({rfrVar:"AV15bmpExcFam", rfrProp:"Tooltiptext", gxAttId:"Bmpexcfam"});
   this.addGridBCProperty("Sdtfamiliarelproduto", ["Sequencia"], this.GXValidFnc[10], "AV11SdtFamiliaRelProduto");
   this.addGridBCProperty("Sdtfamiliarelproduto", ["ProdutoFamiliaId"], this.GXValidFnc[11], "AV11SdtFamiliaRelProduto");
   this.addGridBCProperty("Sdtfamiliarelproduto", ["ProdutoFamiliaDescricao"], this.GXValidFnc[13], "AV11SdtFamiliaRelProduto");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalparmfaturarvendasfam());

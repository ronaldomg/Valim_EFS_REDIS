/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 17:47:7.92
*/
gx.evt.autoSkip=!1;gx.define("hmodalassociadoramoatividade",!1,function(){var n,t;this.ServerClass="hmodalassociadoramoatividade";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.refreshAndEnter=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV26SdtAssociadoRamoAtividade=gx.fn.getControlValue("vSDTASSOCIADORAMOATIVIDADE");this.A10019RamoAtividadeEmpresaId=gx.fn.getControlValue("RAMOATIVIDADEEMPRESAID");this.AV25RamoAtividadeEmpresaId=gx.fn.getControlValue("vRAMOATIVIDADEEMPRESAID");this.A10020RamoAtividadeCodigo=gx.fn.getIntegerValue("RAMOATIVIDADECODIGO",".");this.A10105RamoAtividadeDescricao=gx.fn.getControlValue("RAMOATIVIDADEDESCRICAO");this.AV5AssociadoPessoaFantasia=gx.fn.getControlValue("vASSOCIADOPESSOAFANTASIA")};this.Validv_Associadoramoatividaderamgrid=function(){try{var n=gx.util.balloon.getNew("vASSOCIADORAMOATIVIDADERAMGRID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e1124r2_client=function(){this.executeServerEvent("'CANCELAR'",!1,null,!1,!1)};this.e1224r2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1524r2_client=function(){this.executeServerEvent("VASSOCIADORAMOATIVIDADERAMGRID.ISVALID",!0,arguments[0],!1,!1)};this.e1724r2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,13,15,20,22,23,24,25,26,27];this.GXLastCtrlId=27;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",21,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodalassociadoramoatividade",[],!1,1,!0,!0,0,!0,!1,!1,"CollSDTAssociadoRamoAtividade.SDTAssociadoRamoAtividadeItem",0,"px","Novo registro",!0,!1,!0,null,null,!1,"AV26SdtAssociadoRamoAtividade",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit("Associadoramoatividaderamgrid",22,"vASSOCIADORAMOATIVIDADERAMGRID","Ramo Atividade","","AssociadoRamoAtividadeRamGrid","int",0,"px",12,12,"right",null,[],"Associadoramoatividaderamgrid","AssociadoRamoAtividadeRamGrid",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("&Bmprativ","vBMPRATIV",23,0,"px",17,"px",null,"","","GridColumnImage","");t.addSingleLineEdit("Ramoatividaderamdescgrid",24,"vRAMOATIVIDADERAMDESCGRID","Descrição","","ramoatividaderamdescgrid","svchar",0,"px",100,80,"left",null,[],"Ramoatividaderamdescgrid","ramoatividaderamdescgrid",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV10P",25,"CTLASSOCIADORAMOATIVIDADERAMID","Ramo de Atividade","","AssociadoRamoAtividadeRamId","int",0,"px",12,12,"right",null,[],"GXV10P","GXV10P",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV10Q",26,"CTLASSOCIADORAMOATIVIDADERAMDESC","Descrição","","AssociadoRamoAtividadeRamDesc","svchar",0,"px",100,80,"left",null,[],"GXV10Q","GXV10Q",!1,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE3",grid:0};n[8]={fld:"TEXTBLOCK1",format:0,grid:0};n[10]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSOCIADORAMOATIVIDADEASSID",gxz:"ZV8AssociadoRamoAtividadeAssId",gxold:"OV8AssociadoRamoAtividadeAssId",gxvar:"AV8AssociadoRamoAtividadeAssId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8AssociadoRamoAtividadeAssId=gx.num.intval(n)},v2z:function(n){gx.O.ZV8AssociadoRamoAtividadeAssId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vASSOCIADORAMOATIVIDADEASSID",gx.O.AV8AssociadoRamoAtividadeAssId,0)},c2v:function(){gx.O.AV8AssociadoRamoAtividadeAssId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vASSOCIADORAMOATIVIDADEASSID",".")},nac:gx.falseFn};n[13]={fld:"TEXTBLOCK2",format:0,grid:0};n[15]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSOCIADOPESSOARAZAOSOCIAL",gxz:"ZV6AssociadoPessoaRazaoSocial",gxold:"OV6AssociadoPessoaRazaoSocial",gxvar:"AV6AssociadoPessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6AssociadoPessoaRazaoSocial=n},v2z:function(n){gx.O.ZV6AssociadoPessoaRazaoSocial=n},v2c:function(){gx.fn.setControlValue("vASSOCIADOPESSOARAZAOSOCIAL",gx.O.AV6AssociadoPessoaRazaoSocial,0)},c2v:function(){gx.O.AV6AssociadoPessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vASSOCIADOPESSOARAZAOSOCIAL")},nac:gx.falseFn};n[20]={fld:"DIV1",format:2,grid:0};n[22]={lvl:2,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZZ",ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:this.Validv_Associadoramoatividaderamgrid,isvalid:"e1524r2_client",rgrid:[],fld:"vASSOCIADORAMOATIVIDADERAMGRID",gxz:"ZV37AssociadoRamoAtividadeRamGrid",gxold:"OV37AssociadoRamoAtividadeRamGrid",gxvar:"AV37AssociadoRamoAtividadeRamGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV37AssociadoRamoAtividadeRamGrid=gx.num.intval(n)},v2z:function(n){gx.O.ZV37AssociadoRamoAtividadeRamGrid=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vASSOCIADORAMOATIVIDADERAMGRID",n||gx.fn.currentGridRowImpl(21),gx.O.AV37AssociadoRamoAtividadeRamGrid,0)},c2v:function(){gx.O.AV37AssociadoRamoAtividadeRamGrid=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vASSOCIADORAMOATIVIDADERAMGRID",n||gx.fn.currentGridRowImpl(21),".")},nac:gx.falseFn};n[23]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPRATIV",gxz:"ZV13BmpRAtiv",gxold:"OV13BmpRAtiv",gxvar:"AV13BmpRAtiv",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV13BmpRAtiv=n},v2z:function(n){gx.O.ZV13BmpRAtiv=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPRATIV",n||gx.fn.currentGridRowImpl(21),gx.O.AV13BmpRAtiv,gx.O.AV52Bmprativ_GXI)},c2v:function(){gx.O.AV52Bmprativ_GXI=this.val_GXI();gx.O.AV13BmpRAtiv=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPRATIV",n||gx.fn.currentGridRowImpl(21))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPRATIV_GXI",n||gx.fn.currentGridRowImpl(21))},gxvar_GXI:"AV52Bmprativ_GXI",nac:gx.falseFn};n[24]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vRAMOATIVIDADERAMDESCGRID",gxz:"ZV38ramoatividaderamdescgrid",gxold:"OV38ramoatividaderamdescgrid",gxvar:"AV38ramoatividaderamdescgrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV38ramoatividaderamdescgrid=n},v2z:function(n){gx.O.ZV38ramoatividaderamdescgrid=n},v2c:function(n){gx.fn.setGridControlValue("vRAMOATIVIDADERAMDESCGRID",n||gx.fn.currentGridRowImpl(21),gx.O.AV38ramoatividaderamdescgrid,0)},c2v:function(){gx.O.AV38ramoatividaderamdescgrid=this.val()},val:function(n){return gx.fn.getGridControlValue("vRAMOATIVIDADERAMDESCGRID",n||gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};n[25]={lvl:2,type:"int",len:12,dec:0,sign:!1,pic:"ZZZZZZZZZZZZ",ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLASSOCIADORAMOATIVIDADERAMID",gxz:"ZV45GXV10P",gxold:"OV45GXV10P",gxvar:"GXV10P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV10P=gx.num.intval(n)},v2z:function(n){gx.O.ZV45GXV10P=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLASSOCIADORAMOATIVIDADERAMID",n||gx.fn.currentGridRowImpl(21),gx.O.GXV10P,0)},c2v:function(){gx.O.GXV10P=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLASSOCIADORAMOATIVIDADERAMID",n||gx.fn.currentGridRowImpl(21),".")},nac:gx.falseFn};n[26]={lvl:2,type:"svchar",len:100,dec:0,sign:!1,ro:0,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLASSOCIADORAMOATIVIDADERAMDESC",gxz:"ZV46GXV10Q",gxold:"OV46GXV10Q",gxvar:"GXV10Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV10Q=n},v2z:function(n){gx.O.ZV46GXV10Q=n},v2c:function(n){gx.fn.setGridControlValue("CTLASSOCIADORAMOATIVIDADERAMDESC",n||gx.fn.currentGridRowImpl(21),gx.O.GXV10Q,0)},c2v:function(){gx.O.GXV10Q=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLASSOCIADORAMOATIVIDADERAMDESC",n||gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};n[27]={fld:"DIV2",format:2,grid:0};this.AV8AssociadoRamoAtividadeAssId=0;this.ZV8AssociadoRamoAtividadeAssId=0;this.OV8AssociadoRamoAtividadeAssId=0;this.AV6AssociadoPessoaRazaoSocial="";this.ZV6AssociadoPessoaRazaoSocial="";this.OV6AssociadoPessoaRazaoSocial="";this.ZV37AssociadoRamoAtividadeRamGrid=0;this.OV37AssociadoRamoAtividadeRamGrid=0;this.ZV13BmpRAtiv="";this.OV13BmpRAtiv="";this.ZV38ramoatividaderamdescgrid="";this.OV38ramoatividaderamdescgrid="";this.ZV45GXV10P=0;this.OV45GXV10P=0;this.ZV46GXV10Q="";this.OV46GXV10Q="";this.AV8AssociadoRamoAtividadeAssId=0;this.AV6AssociadoPessoaRazaoSocial="";this.AV5AssociadoPessoaFantasia="";this.AV37AssociadoRamoAtividadeRamGrid=0;this.AV13BmpRAtiv="";this.AV38ramoatividaderamdescgrid="";this.GXV10P=0;this.GXV10Q="";this.A10020RamoAtividadeCodigo=0;this.A10019RamoAtividadeEmpresaId="";this.A10105RamoAtividadeDescricao="";this.A9999AssociadoRamoAtividadeAssEmpId="";this.A10000AssociadoRamoAtividadeAssId=0;this.A10067AssociadoRamoAtividadeRamDesc="";this.A10002AssociadoRamoAtividadeRamId=0;this.A10001AssociadoRamoAtividadeRamEmpId="";this.AV26SdtAssociadoRamoAtividade=[];this.AV25RamoAtividadeEmpresaId="";this.Events={e1124r2_client:["'CANCELAR'",!0],e1224r2_client:["ENTER",!0],e1524r2_client:["VASSOCIADORAMOATIVIDADERAMGRID.ISVALID",!0],e1724r2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV26SdtAssociadoRamoAtividade",fld:"vSDTASSOCIADORAMOATIVIDADE",grid:21},{av:"AV37AssociadoRamoAtividadeRamGrid",fld:"vASSOCIADORAMOATIVIDADERAMGRID",grid:21},{av:"A10019RamoAtividadeEmpresaId",fld:"RAMOATIVIDADEEMPRESAID"},{av:"AV25RamoAtividadeEmpresaId",fld:"vRAMOATIVIDADEEMPRESAID"},{av:"A10020RamoAtividadeCodigo",fld:"RAMOATIVIDADECODIGO"},{av:"A10105RamoAtividadeDescricao",fld:"RAMOATIVIDADEDESCRICAO"}],[{av:"AV40ContGrid",fld:"vCONTGRID"},{av:"AV39ContSdt",fld:"vCONTSDT"},{av:"AV54GXV2",fld:"vGXV2"},{av:"AV27SdtAssociadoRamoAtividadeItem",fld:"vSDTASSOCIADORAMOATIVIDADEITEM"}]];this.EvtParms["'CANCELAR'"]=[[{av:"AV26SdtAssociadoRamoAtividade",fld:"vSDTASSOCIADORAMOATIVIDADE",grid:21},{av:"AV5AssociadoPessoaFantasia",fld:"vASSOCIADOPESSOAFANTASIA"},{av:"AV6AssociadoPessoaRazaoSocial",fld:"vASSOCIADOPESSOARAZAOSOCIAL"},{av:"AV8AssociadoRamoAtividadeAssId",fld:"vASSOCIADORAMOATIVIDADEASSID"}],[{av:"AV28SnBranco",fld:"vSNBRANCO"},{av:"AV11AssociadoRamoAtividadeRamId",fld:"vASSOCIADORAMOATIVIDADERAMID"}]];this.EvtParms.ENTER=[[{av:"AV8AssociadoRamoAtividadeAssId",fld:"vASSOCIADORAMOATIVIDADEASSID"},{av:"AV26SdtAssociadoRamoAtividade",fld:"vSDTASSOCIADORAMOATIVIDADE",grid:21},{av:"AV37AssociadoRamoAtividadeRamGrid",fld:"vASSOCIADORAMOATIVIDADERAMGRID",grid:21},{av:"A10019RamoAtividadeEmpresaId",fld:"RAMOATIVIDADEEMPRESAID"},{av:"AV25RamoAtividadeEmpresaId",fld:"vRAMOATIVIDADEEMPRESAID"},{av:"A10020RamoAtividadeCodigo",fld:"RAMOATIVIDADECODIGO"},{av:"A10105RamoAtividadeDescricao",fld:"RAMOATIVIDADEDESCRICAO"},{av:"AV5AssociadoPessoaFantasia",fld:"vASSOCIADOPESSOAFANTASIA"},{av:"AV6AssociadoPessoaRazaoSocial",fld:"vASSOCIADOPESSOARAZAOSOCIAL"}],[{av:"AV28SnBranco",fld:"vSNBRANCO"},{av:"AV8AssociadoRamoAtividadeAssId",fld:"vASSOCIADORAMOATIVIDADEASSID"},{av:"AV11AssociadoRamoAtividadeRamId",fld:"vASSOCIADORAMOATIVIDADERAMID"},{av:"AV40ContGrid",fld:"vCONTGRID"},{av:"AV39ContSdt",fld:"vCONTSDT"},{av:"AV54GXV2",fld:"vGXV2"},{av:"AV27SdtAssociadoRamoAtividadeItem",fld:"vSDTASSOCIADORAMOATIVIDADEITEM"}]];this.EvtParms["GRID.LOAD"]=[[{av:"AV26SdtAssociadoRamoAtividade",fld:"vSDTASSOCIADORAMOATIVIDADE",grid:21}],[{av:"AV13BmpRAtiv",fld:"vBMPRATIV"},{av:"AV37AssociadoRamoAtividadeRamGrid",fld:"vASSOCIADORAMOATIVIDADERAMGRID"},{av:"AV38ramoatividaderamdescgrid",fld:"vRAMOATIVIDADERAMDESCGRID"}]];this.EvtParms["VASSOCIADORAMOATIVIDADERAMGRID.ISVALID"]=[[{av:"AV25RamoAtividadeEmpresaId",fld:"vRAMOATIVIDADEEMPRESAID"},{av:"AV37AssociadoRamoAtividadeRamGrid",fld:"vASSOCIADORAMOATIVIDADERAMGRID"}],[{av:"AV38ramoatividaderamdescgrid",fld:"vRAMOATIVIDADERAMDESCGRID"}]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV37AssociadoRamoAtividadeRamGrid",fld:"vASSOCIADORAMOATIVIDADERAMGRID",grid:21},{av:"A10019RamoAtividadeEmpresaId",fld:"RAMOATIVIDADEEMPRESAID"},{av:"AV25RamoAtividadeEmpresaId",fld:"vRAMOATIVIDADEEMPRESAID"},{av:"A10020RamoAtividadeCodigo",fld:"RAMOATIVIDADECODIGO"},{av:"A10105RamoAtividadeDescricao",fld:"RAMOATIVIDADEDESCRICAO"},{av:"AV26SdtAssociadoRamoAtividade",fld:"vSDTASSOCIADORAMOATIVIDADE",grid:21}],[{av:"AV40ContGrid",fld:"vCONTGRID"},{av:"AV39ContSdt",fld:"vCONTSDT"},{av:"AV54GXV2",fld:"vGXV2"},{av:"AV27SdtAssociadoRamoAtividadeItem",fld:"vSDTASSOCIADORAMOATIVIDADEITEM"}]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV37AssociadoRamoAtividadeRamGrid",fld:"vASSOCIADORAMOATIVIDADERAMGRID",grid:21},{av:"A10019RamoAtividadeEmpresaId",fld:"RAMOATIVIDADEEMPRESAID"},{av:"AV25RamoAtividadeEmpresaId",fld:"vRAMOATIVIDADEEMPRESAID"},{av:"A10020RamoAtividadeCodigo",fld:"RAMOATIVIDADECODIGO"},{av:"A10105RamoAtividadeDescricao",fld:"RAMOATIVIDADEDESCRICAO"},{av:"AV26SdtAssociadoRamoAtividade",fld:"vSDTASSOCIADORAMOATIVIDADE",grid:21}],[{av:"AV40ContGrid",fld:"vCONTGRID"},{av:"AV39ContSdt",fld:"vCONTSDT"},{av:"AV54GXV2",fld:"vGXV2"},{av:"AV27SdtAssociadoRamoAtividadeItem",fld:"vSDTASSOCIADORAMOATIVIDADEITEM"}]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV37AssociadoRamoAtividadeRamGrid",fld:"vASSOCIADORAMOATIVIDADERAMGRID",grid:21},{av:"A10019RamoAtividadeEmpresaId",fld:"RAMOATIVIDADEEMPRESAID"},{av:"AV25RamoAtividadeEmpresaId",fld:"vRAMOATIVIDADEEMPRESAID"},{av:"A10020RamoAtividadeCodigo",fld:"RAMOATIVIDADECODIGO"},{av:"A10105RamoAtividadeDescricao",fld:"RAMOATIVIDADEDESCRICAO"},{av:"AV26SdtAssociadoRamoAtividade",fld:"vSDTASSOCIADORAMOATIVIDADE",grid:21}],[{av:"AV40ContGrid",fld:"vCONTGRID"},{av:"AV39ContSdt",fld:"vCONTSDT"},{av:"AV54GXV2",fld:"vGXV2"},{av:"AV27SdtAssociadoRamoAtividadeItem",fld:"vSDTASSOCIADORAMOATIVIDADEITEM"}]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV37AssociadoRamoAtividadeRamGrid",fld:"vASSOCIADORAMOATIVIDADERAMGRID",grid:21},{av:"A10019RamoAtividadeEmpresaId",fld:"RAMOATIVIDADEEMPRESAID"},{av:"AV25RamoAtividadeEmpresaId",fld:"vRAMOATIVIDADEEMPRESAID"},{av:"A10020RamoAtividadeCodigo",fld:"RAMOATIVIDADECODIGO"},{av:"A10105RamoAtividadeDescricao",fld:"RAMOATIVIDADEDESCRICAO"},{av:"AV26SdtAssociadoRamoAtividade",fld:"vSDTASSOCIADORAMOATIVIDADE",grid:21}],[{av:"AV40ContGrid",fld:"vCONTGRID"},{av:"AV39ContSdt",fld:"vCONTSDT"},{av:"AV54GXV2",fld:"vGXV2"},{av:"AV27SdtAssociadoRamoAtividadeItem",fld:"vSDTASSOCIADORAMOATIVIDADEITEM"}]];this.setPrompt("&BMPRATIV",[22]);this.EnterCtrl=["BUTTON1"];this.setVCMap("AV26SdtAssociadoRamoAtividade","vSDTASSOCIADORAMOATIVIDADE",0,"CollSDTAssociadoRamoAtividade.SDTAssociadoRamoAtividadeItem");this.setVCMap("A10019RamoAtividadeEmpresaId","RAMOATIVIDADEEMPRESAID",0,"char");this.setVCMap("AV25RamoAtividadeEmpresaId","vRAMOATIVIDADEEMPRESAID",0,"char");this.setVCMap("A10020RamoAtividadeCodigo","RAMOATIVIDADECODIGO",0,"int");this.setVCMap("A10105RamoAtividadeDescricao","RAMOATIVIDADEDESCRICAO",0,"svchar");this.setVCMap("AV5AssociadoPessoaFantasia","vASSOCIADOPESSOAFANTASIA",0,"svchar");this.setVCMap("AV26SdtAssociadoRamoAtividade","vSDTASSOCIADORAMOATIVIDADE",0,"CollSDTAssociadoRamoAtividade.SDTAssociadoRamoAtividadeItem");this.setVCMap("A10019RamoAtividadeEmpresaId","RAMOATIVIDADEEMPRESAID",0,"char");this.setVCMap("AV25RamoAtividadeEmpresaId","vRAMOATIVIDADEEMPRESAID",0,"char");this.setVCMap("A10020RamoAtividadeCodigo","RAMOATIVIDADECODIGO",0,"int");this.setVCMap("A10105RamoAtividadeDescricao","RAMOATIVIDADEDESCRICAO",0,"svchar");t.addRefreshingVar({rfrVar:"AV26SdtAssociadoRamoAtividade"});t.addRefreshingVar({rfrVar:"AV37AssociadoRamoAtividadeRamGrid",rfrProp:"Value",gxAttId:"Associadoramoatividaderamgrid"});t.addRefreshingVar({rfrVar:"A10019RamoAtividadeEmpresaId"});t.addRefreshingVar({rfrVar:"AV25RamoAtividadeEmpresaId"});t.addRefreshingVar({rfrVar:"A10020RamoAtividadeCodigo"});t.addRefreshingVar({rfrVar:"A10105RamoAtividadeDescricao"});this.addGridBCProperty("Sdtassociadoramoatividade",["AssociadoRamoAtividadeRamId"],this.GXValidFnc[25],"AV26SdtAssociadoRamoAtividade");this.addGridBCProperty("Sdtassociadoramoatividade",["AssociadoRamoAtividadeRamDesc"],this.GXValidFnc[26],"AV26SdtAssociadoRamoAtividade");this.InitStandaloneVars()});gx.setParentObj(new hmodalassociadoramoatividade)
/**@preserve  GeneXus Java 10_3_12-110051 on February 12, 2020 13:18:23.6
*/
gx.evt.autoSkip=!1;gx.define("gx0ji0",!1,function(){var n,t;this.ServerClass="gx0ji0";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV13pNotaServicoParametroEmpresaId=gx.fn.getControlValue("vPNOTASERVICOPARAMETROEMPRESAID")};this.e131wt2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e141wt1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];this.GXLastCtrlId=61;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ji0",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");t.addSingleLineEdit(9384,53,"NOTASERVICOPARAMETROEMPRESAID","Codigo da Empresa","","NotaServicoParametroEmpresaId","char",0,"px",10,10,"left",null,[],9384,"NotaServicoParametroEmpresaId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9375,54,"NOTASERVICOPARAMETRONATOPE","Natureza da operacao","Selecionar","NotaServicoParametroNatOpe","int",0,"px",2,2,"right",null,[],9375,"NotaServicoParametroNatOpe",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9376,55,"NOTASERVICOPARAMETROREGESPTRIB","Regime Especial Tributacao","","NotaServicoParametroRegEspTrib","int",0,"px",2,2,"right",null,[],9376,"NotaServicoParametroRegEspTrib",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9378,56,"NOTASERVICOPARAMETROOPSIMNAC","Optante pelo simples nacional","","NotaServicoParametroOpSimNac","int",0,"px",1,1,"right",null,[],9378,"NotaServicoParametroOpSimNac",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9377,57,"NOTASERVICOPARAMETROINCULTURAL","Incentivador cultural","","NotaServicoParametroInCultural","int",0,"px",1,1,"right",null,[],9377,"NotaServicoParametroInCultural",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9370,58,"NOTASERVICOPARAMETROTIPORPS","Tipo da RPS","","NotaServicoParametroTipoRps","int",0,"px",1,1,"right",null,[],9370,"NotaServicoParametroTipoRps",!0,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE1",grid:0};n[8]={fld:"GROUP1",grid:0};n[9]={fld:"TABLE2",grid:0};n[12]={fld:"TEXTBLOCKNOTASERVICOPARAMETROEMPRESAID",format:0,grid:0};n[14]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNOTASERVICOPARAMETROEMPRESAID",gxz:"ZV6cNotaServicoParametroEmpresaId",gxold:"OV6cNotaServicoParametroEmpresaId",gxvar:"AV6cNotaServicoParametroEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cNotaServicoParametroEmpresaId=n},v2z:function(n){gx.O.ZV6cNotaServicoParametroEmpresaId=n},v2c:function(){gx.fn.setControlValue("vCNOTASERVICOPARAMETROEMPRESAID",gx.O.AV6cNotaServicoParametroEmpresaId,0)},c2v:function(){gx.O.AV6cNotaServicoParametroEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCNOTASERVICOPARAMETROEMPRESAID")},nac:gx.falseFn};n[17]={fld:"TEXTBLOCKNOTASERVICOPARAMETRONATOPE",format:0,grid:0};n[19]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNOTASERVICOPARAMETRONATOPE",gxz:"ZV7cNotaServicoParametroNatOpe",gxold:"OV7cNotaServicoParametroNatOpe",gxvar:"AV7cNotaServicoParametroNatOpe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cNotaServicoParametroNatOpe=gx.num.intval(n)},v2z:function(n){gx.O.ZV7cNotaServicoParametroNatOpe=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCNOTASERVICOPARAMETRONATOPE",gx.O.AV7cNotaServicoParametroNatOpe,0)},c2v:function(){gx.O.AV7cNotaServicoParametroNatOpe=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNOTASERVICOPARAMETRONATOPE",".")},nac:gx.falseFn};n[22]={fld:"TEXTBLOCKNOTASERVICOPARAMETROREGESPTRIB",format:0,grid:0};n[24]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNOTASERVICOPARAMETROREGESPTRIB",gxz:"ZV8cNotaServicoParametroRegEspTrib",gxold:"OV8cNotaServicoParametroRegEspTrib",gxvar:"AV8cNotaServicoParametroRegEspTrib",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cNotaServicoParametroRegEspTrib=gx.num.intval(n)},v2z:function(n){gx.O.ZV8cNotaServicoParametroRegEspTrib=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCNOTASERVICOPARAMETROREGESPTRIB",gx.O.AV8cNotaServicoParametroRegEspTrib,0)},c2v:function(){gx.O.AV8cNotaServicoParametroRegEspTrib=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNOTASERVICOPARAMETROREGESPTRIB",".")},nac:gx.falseFn};n[27]={fld:"TEXTBLOCKNOTASERVICOPARAMETROOPSIMNAC",format:0,grid:0};n[29]={lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNOTASERVICOPARAMETROOPSIMNAC",gxz:"ZV9cNotaServicoParametroOpSimNac",gxold:"OV9cNotaServicoParametroOpSimNac",gxvar:"AV9cNotaServicoParametroOpSimNac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9cNotaServicoParametroOpSimNac=gx.num.intval(n)},v2z:function(n){gx.O.ZV9cNotaServicoParametroOpSimNac=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCNOTASERVICOPARAMETROOPSIMNAC",gx.O.AV9cNotaServicoParametroOpSimNac,0)},c2v:function(){gx.O.AV9cNotaServicoParametroOpSimNac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNOTASERVICOPARAMETROOPSIMNAC",".")},nac:gx.falseFn};n[32]={fld:"TEXTBLOCKNOTASERVICOPARAMETROINCULTURAL",format:0,grid:0};n[34]={lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNOTASERVICOPARAMETROINCULTURAL",gxz:"ZV10cNotaServicoParametroInCultural",gxold:"OV10cNotaServicoParametroInCultural",gxvar:"AV10cNotaServicoParametroInCultural",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10cNotaServicoParametroInCultural=gx.num.intval(n)},v2z:function(n){gx.O.ZV10cNotaServicoParametroInCultural=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCNOTASERVICOPARAMETROINCULTURAL",gx.O.AV10cNotaServicoParametroInCultural,0)},c2v:function(){gx.O.AV10cNotaServicoParametroInCultural=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNOTASERVICOPARAMETROINCULTURAL",".")},nac:gx.falseFn};n[37]={fld:"TEXTBLOCKNOTASERVICOPARAMETROSERIERPS",format:0,grid:0};n[39]={lvl:0,type:"char",len:5,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNOTASERVICOPARAMETROSERIERPS",gxz:"ZV11cNotaServicoParametroSerieRps",gxold:"OV11cNotaServicoParametroSerieRps",gxvar:"AV11cNotaServicoParametroSerieRps",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11cNotaServicoParametroSerieRps=n},v2z:function(n){gx.O.ZV11cNotaServicoParametroSerieRps=n},v2c:function(){gx.fn.setControlValue("vCNOTASERVICOPARAMETROSERIERPS",gx.O.AV11cNotaServicoParametroSerieRps,0)},c2v:function(){gx.O.AV11cNotaServicoParametroSerieRps=this.val()},val:function(){return gx.fn.getControlValue("vCNOTASERVICOPARAMETROSERIERPS")},nac:gx.falseFn};n[42]={fld:"TEXTBLOCKNOTASERVICOPARAMETROTIPORPS",format:0,grid:0};n[44]={lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCNOTASERVICOPARAMETROTIPORPS",gxz:"ZV12cNotaServicoParametroTipoRps",gxold:"OV12cNotaServicoParametroTipoRps",gxvar:"AV12cNotaServicoParametroTipoRps",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12cNotaServicoParametroTipoRps=gx.num.intval(n)},v2z:function(n){gx.O.ZV12cNotaServicoParametroTipoRps=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCNOTASERVICOPARAMETROTIPORPS",gx.O.AV12cNotaServicoParametroTipoRps,0)},c2v:function(){gx.O.AV12cNotaServicoParametroTipoRps=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCNOTASERVICOPARAMETROTIPORPS",".")},nac:gx.falseFn};n[47]={fld:"GROUP2",grid:0};n[48]={fld:"TABLE3",grid:0};n[52]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(51))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(51))},gxvar_GXI:"AV16Linkselection_GXI",nac:gx.falseFn};n[53]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARAMETROEMPRESAID",gxz:"Z9384NotaServicoParametroEmpresaId",gxold:"O9384NotaServicoParametroEmpresaId",gxvar:"A9384NotaServicoParametroEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A9384NotaServicoParametroEmpresaId=n},v2z:function(n){gx.O.Z9384NotaServicoParametroEmpresaId=n},v2c:function(n){gx.fn.setGridControlValue("NOTASERVICOPARAMETROEMPRESAID",n||gx.fn.currentGridRowImpl(51),gx.O.A9384NotaServicoParametroEmpresaId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A9384NotaServicoParametroEmpresaId=this.val()},val:function(n){return gx.fn.getGridControlValue("NOTASERVICOPARAMETROEMPRESAID",n||gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};n[54]={lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARAMETRONATOPE",gxz:"Z9375NotaServicoParametroNatOpe",gxold:"O9375NotaServicoParametroNatOpe",gxvar:"A9375NotaServicoParametroNatOpe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A9375NotaServicoParametroNatOpe=gx.num.intval(n)},v2z:function(n){gx.O.Z9375NotaServicoParametroNatOpe=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("NOTASERVICOPARAMETRONATOPE",n||gx.fn.currentGridRowImpl(51),gx.O.A9375NotaServicoParametroNatOpe,0)},c2v:function(){gx.O.A9375NotaServicoParametroNatOpe=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("NOTASERVICOPARAMETRONATOPE",n||gx.fn.currentGridRowImpl(51),".")},nac:gx.falseFn};n[55]={lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARAMETROREGESPTRIB",gxz:"Z9376NotaServicoParametroRegEspTrib",gxold:"O9376NotaServicoParametroRegEspTrib",gxvar:"A9376NotaServicoParametroRegEspTrib",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A9376NotaServicoParametroRegEspTrib=gx.num.intval(n)},v2z:function(n){gx.O.Z9376NotaServicoParametroRegEspTrib=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("NOTASERVICOPARAMETROREGESPTRIB",n||gx.fn.currentGridRowImpl(51),gx.O.A9376NotaServicoParametroRegEspTrib,0)},c2v:function(){gx.O.A9376NotaServicoParametroRegEspTrib=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("NOTASERVICOPARAMETROREGESPTRIB",n||gx.fn.currentGridRowImpl(51),".")},nac:gx.falseFn};n[56]={lvl:2,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARAMETROOPSIMNAC",gxz:"Z9378NotaServicoParametroOpSimNac",gxold:"O9378NotaServicoParametroOpSimNac",gxvar:"A9378NotaServicoParametroOpSimNac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A9378NotaServicoParametroOpSimNac=gx.num.intval(n)},v2z:function(n){gx.O.Z9378NotaServicoParametroOpSimNac=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("NOTASERVICOPARAMETROOPSIMNAC",n||gx.fn.currentGridRowImpl(51),gx.O.A9378NotaServicoParametroOpSimNac,0)},c2v:function(){gx.O.A9378NotaServicoParametroOpSimNac=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("NOTASERVICOPARAMETROOPSIMNAC",n||gx.fn.currentGridRowImpl(51),".")},nac:gx.falseFn};n[57]={lvl:2,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARAMETROINCULTURAL",gxz:"Z9377NotaServicoParametroInCultural",gxold:"O9377NotaServicoParametroInCultural",gxvar:"A9377NotaServicoParametroInCultural",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A9377NotaServicoParametroInCultural=gx.num.intval(n)},v2z:function(n){gx.O.Z9377NotaServicoParametroInCultural=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("NOTASERVICOPARAMETROINCULTURAL",n||gx.fn.currentGridRowImpl(51),gx.O.A9377NotaServicoParametroInCultural,0)},c2v:function(){gx.O.A9377NotaServicoParametroInCultural=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("NOTASERVICOPARAMETROINCULTURAL",n||gx.fn.currentGridRowImpl(51),".")},nac:gx.falseFn};n[58]={lvl:2,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NOTASERVICOPARAMETROTIPORPS",gxz:"Z9370NotaServicoParametroTipoRps",gxold:"O9370NotaServicoParametroTipoRps",gxvar:"A9370NotaServicoParametroTipoRps",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A9370NotaServicoParametroTipoRps=gx.num.intval(n)},v2z:function(n){gx.O.Z9370NotaServicoParametroTipoRps=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("NOTASERVICOPARAMETROTIPORPS",n||gx.fn.currentGridRowImpl(51),gx.O.A9370NotaServicoParametroTipoRps,0)},c2v:function(){gx.O.A9370NotaServicoParametroTipoRps=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("NOTASERVICOPARAMETROTIPORPS",n||gx.fn.currentGridRowImpl(51),".")},nac:gx.falseFn};n[61]={fld:"TABLE4",grid:0};this.AV6cNotaServicoParametroEmpresaId="";this.ZV6cNotaServicoParametroEmpresaId="";this.OV6cNotaServicoParametroEmpresaId="";this.AV7cNotaServicoParametroNatOpe=0;this.ZV7cNotaServicoParametroNatOpe=0;this.OV7cNotaServicoParametroNatOpe=0;this.AV8cNotaServicoParametroRegEspTrib=0;this.ZV8cNotaServicoParametroRegEspTrib=0;this.OV8cNotaServicoParametroRegEspTrib=0;this.AV9cNotaServicoParametroOpSimNac=0;this.ZV9cNotaServicoParametroOpSimNac=0;this.OV9cNotaServicoParametroOpSimNac=0;this.AV10cNotaServicoParametroInCultural=0;this.ZV10cNotaServicoParametroInCultural=0;this.OV10cNotaServicoParametroInCultural=0;this.AV11cNotaServicoParametroSerieRps="";this.ZV11cNotaServicoParametroSerieRps="";this.OV11cNotaServicoParametroSerieRps="";this.AV12cNotaServicoParametroTipoRps=0;this.ZV12cNotaServicoParametroTipoRps=0;this.OV12cNotaServicoParametroTipoRps=0;this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z9384NotaServicoParametroEmpresaId="";this.O9384NotaServicoParametroEmpresaId="";this.Z9375NotaServicoParametroNatOpe=0;this.O9375NotaServicoParametroNatOpe=0;this.Z9376NotaServicoParametroRegEspTrib=0;this.O9376NotaServicoParametroRegEspTrib=0;this.Z9378NotaServicoParametroOpSimNac=0;this.O9378NotaServicoParametroOpSimNac=0;this.Z9377NotaServicoParametroInCultural=0;this.O9377NotaServicoParametroInCultural=0;this.Z9370NotaServicoParametroTipoRps=0;this.O9370NotaServicoParametroTipoRps=0;this.AV6cNotaServicoParametroEmpresaId="";this.AV7cNotaServicoParametroNatOpe=0;this.AV8cNotaServicoParametroRegEspTrib=0;this.AV9cNotaServicoParametroOpSimNac=0;this.AV10cNotaServicoParametroInCultural=0;this.AV11cNotaServicoParametroSerieRps="";this.AV12cNotaServicoParametroTipoRps=0;this.AV13pNotaServicoParametroEmpresaId="";this.A9381NotaServicoParametroSerieRps="";this.AV5LinkSelection="";this.A9384NotaServicoParametroEmpresaId="";this.A9375NotaServicoParametroNatOpe=0;this.A9376NotaServicoParametroRegEspTrib=0;this.A9378NotaServicoParametroOpSimNac=0;this.A9377NotaServicoParametroInCultural=0;this.A9370NotaServicoParametroTipoRps=0;this.Events={e131wt2_client:["ENTER",!0],e141wt1_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cNotaServicoParametroEmpresaId",fld:"vCNOTASERVICOPARAMETROEMPRESAID"},{av:"AV7cNotaServicoParametroNatOpe",fld:"vCNOTASERVICOPARAMETRONATOPE"},{av:"AV8cNotaServicoParametroRegEspTrib",fld:"vCNOTASERVICOPARAMETROREGESPTRIB"},{av:"AV9cNotaServicoParametroOpSimNac",fld:"vCNOTASERVICOPARAMETROOPSIMNAC"},{av:"AV10cNotaServicoParametroInCultural",fld:"vCNOTASERVICOPARAMETROINCULTURAL"},{av:"AV11cNotaServicoParametroSerieRps",fld:"vCNOTASERVICOPARAMETROSERIERPS"},{av:"AV12cNotaServicoParametroTipoRps",fld:"vCNOTASERVICOPARAMETROTIPORPS"}],[]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A9384NotaServicoParametroEmpresaId",fld:"NOTASERVICOPARAMETROEMPRESAID"}],[{av:"AV13pNotaServicoParametroEmpresaId",fld:"vPNOTASERVICOPARAMETROEMPRESAID"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cNotaServicoParametroEmpresaId",fld:"vCNOTASERVICOPARAMETROEMPRESAID"},{av:"AV7cNotaServicoParametroNatOpe",fld:"vCNOTASERVICOPARAMETRONATOPE"},{av:"AV8cNotaServicoParametroRegEspTrib",fld:"vCNOTASERVICOPARAMETROREGESPTRIB"},{av:"AV9cNotaServicoParametroOpSimNac",fld:"vCNOTASERVICOPARAMETROOPSIMNAC"},{av:"AV10cNotaServicoParametroInCultural",fld:"vCNOTASERVICOPARAMETROINCULTURAL"},{av:"AV11cNotaServicoParametroSerieRps",fld:"vCNOTASERVICOPARAMETROSERIERPS"},{av:"AV12cNotaServicoParametroTipoRps",fld:"vCNOTASERVICOPARAMETROTIPORPS"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cNotaServicoParametroEmpresaId",fld:"vCNOTASERVICOPARAMETROEMPRESAID"},{av:"AV7cNotaServicoParametroNatOpe",fld:"vCNOTASERVICOPARAMETRONATOPE"},{av:"AV8cNotaServicoParametroRegEspTrib",fld:"vCNOTASERVICOPARAMETROREGESPTRIB"},{av:"AV9cNotaServicoParametroOpSimNac",fld:"vCNOTASERVICOPARAMETROOPSIMNAC"},{av:"AV10cNotaServicoParametroInCultural",fld:"vCNOTASERVICOPARAMETROINCULTURAL"},{av:"AV11cNotaServicoParametroSerieRps",fld:"vCNOTASERVICOPARAMETROSERIERPS"},{av:"AV12cNotaServicoParametroTipoRps",fld:"vCNOTASERVICOPARAMETROTIPORPS"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cNotaServicoParametroEmpresaId",fld:"vCNOTASERVICOPARAMETROEMPRESAID"},{av:"AV7cNotaServicoParametroNatOpe",fld:"vCNOTASERVICOPARAMETRONATOPE"},{av:"AV8cNotaServicoParametroRegEspTrib",fld:"vCNOTASERVICOPARAMETROREGESPTRIB"},{av:"AV9cNotaServicoParametroOpSimNac",fld:"vCNOTASERVICOPARAMETROOPSIMNAC"},{av:"AV10cNotaServicoParametroInCultural",fld:"vCNOTASERVICOPARAMETROINCULTURAL"},{av:"AV11cNotaServicoParametroSerieRps",fld:"vCNOTASERVICOPARAMETROSERIERPS"},{av:"AV12cNotaServicoParametroTipoRps",fld:"vCNOTASERVICOPARAMETROTIPORPS"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cNotaServicoParametroEmpresaId",fld:"vCNOTASERVICOPARAMETROEMPRESAID"},{av:"AV7cNotaServicoParametroNatOpe",fld:"vCNOTASERVICOPARAMETRONATOPE"},{av:"AV8cNotaServicoParametroRegEspTrib",fld:"vCNOTASERVICOPARAMETROREGESPTRIB"},{av:"AV9cNotaServicoParametroOpSimNac",fld:"vCNOTASERVICOPARAMETROOPSIMNAC"},{av:"AV10cNotaServicoParametroInCultural",fld:"vCNOTASERVICOPARAMETROINCULTURAL"},{av:"AV11cNotaServicoParametroSerieRps",fld:"vCNOTASERVICOPARAMETROSERIERPS"},{av:"AV12cNotaServicoParametroTipoRps",fld:"vCNOTASERVICOPARAMETROTIPORPS"}],[]];this.setVCMap("AV13pNotaServicoParametroEmpresaId","vPNOTASERVICOPARAMETROEMPRESAID",0,"char");t.addRefreshingVar(this.GXValidFnc[14]);t.addRefreshingVar(this.GXValidFnc[19]);t.addRefreshingVar(this.GXValidFnc[24]);t.addRefreshingVar(this.GXValidFnc[29]);t.addRefreshingVar(this.GXValidFnc[34]);t.addRefreshingVar(this.GXValidFnc[39]);t.addRefreshingVar(this.GXValidFnc[44]);this.InitStandaloneVars()});gx.setParentObj(new gx0ji0)
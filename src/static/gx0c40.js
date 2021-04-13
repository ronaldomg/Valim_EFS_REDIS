/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:36:0.68
*/
gx.evt.autoSkip = false;
gx.define('gx0c40', false, function () {
   this.ServerClass =  "gx0c40" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV9pChavePrimariaTabela=gx.fn.getControlValue("vPCHAVEPRIMARIATABELA") ;
      this.AV10pChavePrimariaEmpresaId=gx.fn.getControlValue("vPCHAVEPRIMARIAEMPRESAID") ;
   };
   this.e131qj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141qj1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0c40",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4300,33,"CHAVEPRIMARIATABELA","Tabela de Cálculo","","ChavePrimariaTabela","svchar",0,"px",30,30,"left",null,[],4300,"ChavePrimariaTabela",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4301,34,"CHAVEPRIMARIAEMPRESAID","Empresa da Chave Primária","","ChavePrimariaEmpresaId","char",0,"px",10,10,"left",null,[],4301,"ChavePrimariaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4299,35,"CHAVEPRIMARIAID","Código da Chave Primária","Selecionar","ChavePrimariaId","int",0,"px",10,10,"right",null,[],4299,"ChavePrimariaId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCHAVEPRIMARIATABELA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:30,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCHAVEPRIMARIATABELA",gxz:"ZV6cChavePrimariaTabela",gxold:"OV6cChavePrimariaTabela",gxvar:"AV6cChavePrimariaTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cChavePrimariaTabela=Value},v2z:function(Value){gx.O.ZV6cChavePrimariaTabela=Value},v2c:function(){gx.fn.setControlValue("vCCHAVEPRIMARIATABELA",gx.O.AV6cChavePrimariaTabela,0)},c2v:function(){gx.O.AV6cChavePrimariaTabela=this.val()},val:function(){return gx.fn.getControlValue("vCCHAVEPRIMARIATABELA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCHAVEPRIMARIAEMPRESAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCHAVEPRIMARIAEMPRESAID",gxz:"ZV7cChavePrimariaEmpresaId",gxold:"OV7cChavePrimariaEmpresaId",gxvar:"AV7cChavePrimariaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cChavePrimariaEmpresaId=Value},v2z:function(Value){gx.O.ZV7cChavePrimariaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCHAVEPRIMARIAEMPRESAID",gx.O.AV7cChavePrimariaEmpresaId,0)},c2v:function(){gx.O.AV7cChavePrimariaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCHAVEPRIMARIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCHAVEPRIMARIAID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCHAVEPRIMARIAID",gxz:"ZV8cChavePrimariaId",gxold:"OV8cChavePrimariaId",gxvar:"AV8cChavePrimariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cChavePrimariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cChavePrimariaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCHAVEPRIMARIAID",gx.O.AV8cChavePrimariaId,0)},c2v:function(){gx.O.AV8cChavePrimariaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCHAVEPRIMARIAID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(){gx.O.AV13Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV13Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:30,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CHAVEPRIMARIATABELA",gxz:"Z4300ChavePrimariaTabela",gxold:"O4300ChavePrimariaTabela",gxvar:"A4300ChavePrimariaTabela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4300ChavePrimariaTabela=Value},v2z:function(Value){gx.O.Z4300ChavePrimariaTabela=Value},v2c:function(row){gx.fn.setGridControlValue("CHAVEPRIMARIATABELA",row || gx.fn.currentGridRowImpl(31),gx.O.A4300ChavePrimariaTabela,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4300ChavePrimariaTabela=this.val()},val:function(row){return gx.fn.getGridControlValue("CHAVEPRIMARIATABELA",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CHAVEPRIMARIAEMPRESAID",gxz:"Z4301ChavePrimariaEmpresaId",gxold:"O4301ChavePrimariaEmpresaId",gxvar:"A4301ChavePrimariaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4301ChavePrimariaEmpresaId=Value},v2z:function(Value){gx.O.Z4301ChavePrimariaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CHAVEPRIMARIAEMPRESAID",row || gx.fn.currentGridRowImpl(31),gx.O.A4301ChavePrimariaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4301ChavePrimariaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CHAVEPRIMARIAEMPRESAID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CHAVEPRIMARIAID",gxz:"Z4299ChavePrimariaId",gxold:"O4299ChavePrimariaId",gxvar:"A4299ChavePrimariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4299ChavePrimariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4299ChavePrimariaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CHAVEPRIMARIAID",row || gx.fn.currentGridRowImpl(31),gx.O.A4299ChavePrimariaId,0)},c2v:function(){gx.O.A4299ChavePrimariaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CHAVEPRIMARIAID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cChavePrimariaTabela = "" ;
   this.ZV6cChavePrimariaTabela = "" ;
   this.OV6cChavePrimariaTabela = "" ;
   this.AV7cChavePrimariaEmpresaId = "" ;
   this.ZV7cChavePrimariaEmpresaId = "" ;
   this.OV7cChavePrimariaEmpresaId = "" ;
   this.AV8cChavePrimariaId = 0 ;
   this.ZV8cChavePrimariaId = 0 ;
   this.OV8cChavePrimariaId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z4300ChavePrimariaTabela = "" ;
   this.O4300ChavePrimariaTabela = "" ;
   this.Z4301ChavePrimariaEmpresaId = "" ;
   this.O4301ChavePrimariaEmpresaId = "" ;
   this.Z4299ChavePrimariaId = 0 ;
   this.O4299ChavePrimariaId = 0 ;
   this.AV6cChavePrimariaTabela = "" ;
   this.AV7cChavePrimariaEmpresaId = "" ;
   this.AV8cChavePrimariaId = 0 ;
   this.AV9pChavePrimariaTabela = "" ;
   this.AV10pChavePrimariaEmpresaId = "" ;
   this.AV5LinkSelection = "" ;
   this.A4300ChavePrimariaTabela = "" ;
   this.A4301ChavePrimariaEmpresaId = "" ;
   this.A4299ChavePrimariaId = 0 ;
   this.Events = {"e131qj2_client": ["ENTER", true] ,"e141qj1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cChavePrimariaTabela',fld:'vCCHAVEPRIMARIATABELA'},{av:'AV7cChavePrimariaEmpresaId',fld:'vCCHAVEPRIMARIAEMPRESAID'},{av:'AV8cChavePrimariaId',fld:'vCCHAVEPRIMARIAID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4300ChavePrimariaTabela',fld:'CHAVEPRIMARIATABELA'},{av:'A4301ChavePrimariaEmpresaId',fld:'CHAVEPRIMARIAEMPRESAID'}],[{av:'AV9pChavePrimariaTabela',fld:'vPCHAVEPRIMARIATABELA'},{av:'AV10pChavePrimariaEmpresaId',fld:'vPCHAVEPRIMARIAEMPRESAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cChavePrimariaTabela',fld:'vCCHAVEPRIMARIATABELA'},{av:'AV7cChavePrimariaEmpresaId',fld:'vCCHAVEPRIMARIAEMPRESAID'},{av:'AV8cChavePrimariaId',fld:'vCCHAVEPRIMARIAID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cChavePrimariaTabela',fld:'vCCHAVEPRIMARIATABELA'},{av:'AV7cChavePrimariaEmpresaId',fld:'vCCHAVEPRIMARIAEMPRESAID'},{av:'AV8cChavePrimariaId',fld:'vCCHAVEPRIMARIAID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cChavePrimariaTabela',fld:'vCCHAVEPRIMARIATABELA'},{av:'AV7cChavePrimariaEmpresaId',fld:'vCCHAVEPRIMARIAEMPRESAID'},{av:'AV8cChavePrimariaId',fld:'vCCHAVEPRIMARIAID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cChavePrimariaTabela',fld:'vCCHAVEPRIMARIATABELA'},{av:'AV7cChavePrimariaEmpresaId',fld:'vCCHAVEPRIMARIAEMPRESAID'},{av:'AV8cChavePrimariaId',fld:'vCCHAVEPRIMARIAID'}],[]];
   this.setVCMap("AV9pChavePrimariaTabela", "vPCHAVEPRIMARIATABELA", 0, "svchar");
   this.setVCMap("AV10pChavePrimariaEmpresaId", "vPCHAVEPRIMARIAEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0c40());

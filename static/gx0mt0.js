/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:47:40.24
*/
gx.evt.autoSkip = false;
gx.define('gx0mt0', false, function () {
   this.ServerClass =  "gx0mt0" ;
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
      this.AV9pCNAE=gx.fn.getControlValue("vPCNAE") ;
      this.AV10pFilialId=gx.fn.getIntegerValue("vPFILIALID",'.') ;
      this.AV11pFilialEmpresaId=gx.fn.getControlValue("vPFILIALEMPRESAID") ;
   };
   this.e132du2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142du1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0mt0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11183,33,"CNAE","CNAE","","CNAE","char",0,"px",10,10,"left",null,[],11183,"CNAE",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1156,34,"FILIALID","Código da Filial","","FilialId","int",0,"px",7,7,"right",null,[],1156,"FilialId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1228,35,"FILIALEMPRESAID","Empresa da Filial","Selecionar","FilialEmpresaId","char",0,"px",10,10,"left",null,[],1228,"FilialEmpresaId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCNAE", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCNAE",gxz:"ZV6cCNAE",gxold:"OV6cCNAE",gxvar:"AV6cCNAE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCNAE=Value},v2z:function(Value){gx.O.ZV6cCNAE=Value},v2c:function(){gx.fn.setControlValue("vCCNAE",gx.O.AV6cCNAE,0)},c2v:function(){gx.O.AV6cCNAE=this.val()},val:function(){return gx.fn.getControlValue("vCCNAE")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKFILIALID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALID",gxz:"ZV7cFilialId",gxold:"OV7cFilialId",gxvar:"AV7cFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFILIALID",gx.O.AV7cFilialId,0)},c2v:function(){gx.O.AV7cFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKFILIALEMPRESAID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALEMPRESAID",gxz:"ZV8cFilialEmpresaId",gxold:"OV8cFilialEmpresaId",gxvar:"AV8cFilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cFilialEmpresaId=Value},v2z:function(Value){gx.O.ZV8cFilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCFILIALEMPRESAID",gx.O.AV8cFilialEmpresaId,0)},c2v:function(){gx.O.AV8cFilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CNAE",gxz:"Z11183CNAE",gxold:"O11183CNAE",gxvar:"A11183CNAE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11183CNAE=Value},v2z:function(Value){gx.O.Z11183CNAE=Value},v2c:function(row){gx.fn.setGridControlValue("CNAE",row || gx.fn.currentGridRowImpl(31),gx.O.A11183CNAE,0)},c2v:function(){gx.O.A11183CNAE=this.val()},val:function(row){return gx.fn.getGridControlValue("CNAE",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALID",gxz:"Z1156FilialId",gxold:"O1156FilialId",gxvar:"A1156FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1156FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1156FilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALID",row || gx.fn.currentGridRowImpl(31),gx.O.A1156FilialId,0)},c2v:function(){gx.O.A1156FilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALEMPRESAID",gxz:"Z1228FilialEmpresaId",gxold:"O1228FilialEmpresaId",gxvar:"A1228FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1228FilialEmpresaId=Value},v2z:function(Value){gx.O.Z1228FilialEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(31),gx.O.A1228FilialEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1228FilialEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALEMPRESAID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cCNAE = "" ;
   this.ZV6cCNAE = "" ;
   this.OV6cCNAE = "" ;
   this.AV7cFilialId = 0 ;
   this.ZV7cFilialId = 0 ;
   this.OV7cFilialId = 0 ;
   this.AV8cFilialEmpresaId = "" ;
   this.ZV8cFilialEmpresaId = "" ;
   this.OV8cFilialEmpresaId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11183CNAE = "" ;
   this.O11183CNAE = "" ;
   this.Z1156FilialId = 0 ;
   this.O1156FilialId = 0 ;
   this.Z1228FilialEmpresaId = "" ;
   this.O1228FilialEmpresaId = "" ;
   this.AV6cCNAE = "" ;
   this.AV7cFilialId = 0 ;
   this.AV8cFilialEmpresaId = "" ;
   this.AV9pCNAE = "" ;
   this.AV10pFilialId = 0 ;
   this.AV11pFilialEmpresaId = "" ;
   this.AV5LinkSelection = "" ;
   this.A11183CNAE = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.Events = {"e132du2_client": ["ENTER", true] ,"e142du1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cFilialEmpresaId',fld:'vCFILIALEMPRESAID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11183CNAE',fld:'CNAE'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'}],[{av:'AV9pCNAE',fld:'vPCNAE'},{av:'AV10pFilialId',fld:'vPFILIALID'},{av:'AV11pFilialEmpresaId',fld:'vPFILIALEMPRESAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cFilialEmpresaId',fld:'vCFILIALEMPRESAID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cFilialEmpresaId',fld:'vCFILIALEMPRESAID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cFilialEmpresaId',fld:'vCFILIALEMPRESAID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cFilialId',fld:'vCFILIALID'},{av:'AV8cFilialEmpresaId',fld:'vCFILIALEMPRESAID'}],[]];
   this.setVCMap("AV9pCNAE", "vPCNAE", 0, "char");
   this.setVCMap("AV10pFilialId", "vPFILIALID", 0, "int");
   this.setVCMap("AV11pFilialEmpresaId", "vPFILIALEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0mt0());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:48:39.25
*/
gx.evt.autoSkip = false;
gx.define('gx0o30', false, function () {
   this.ServerClass =  "gx0o30" ;
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
      this.AV8pCidadesCodIbge=gx.fn.getIntegerValue("vPCIDADESCODIBGE",'.') ;
      this.AV9pCidadesCodSIAFI=gx.fn.getControlValue("vPCIDADESCODSIAFI") ;
   };
   this.e132gt2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142gt1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,28,29,32];
   this.GXLastCtrlId =32;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0o30",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(158,28,"CIDADESCODIBGE","Código Ibge","","CidadesCodIbge","int",0,"px",7,7,"right",null,[],158,"CidadesCodIbge",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11674,29,"CIDADESCODSIAFI","Cod SIAFI","Selecionar","CidadesCodSIAFI","svchar",0,"px",7,7,"left",null,[],11674,"CidadesCodSIAFI",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCIDADESCODIBGE", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESCODIBGE",gxz:"ZV6cCidadesCodIbge",gxold:"OV6cCidadesCodIbge",gxvar:"AV6cCidadesCodIbge",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCidadesCodIbge=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cCidadesCodIbge=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCIDADESCODIBGE",gx.O.AV6cCidadesCodIbge,0)},c2v:function(){gx.O.AV6cCidadesCodIbge=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCIDADESCODIBGE",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCIDADESCODSIAFI", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:7,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESCODSIAFI",gxz:"ZV7cCidadesCodSIAFI",gxold:"OV7cCidadesCodSIAFI",gxvar:"AV7cCidadesCodSIAFI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCidadesCodSIAFI=Value},v2z:function(Value){gx.O.ZV7cCidadesCodSIAFI=Value},v2c:function(){gx.fn.setControlValue("vCCIDADESCODSIAFI",gx.O.AV7cCidadesCodSIAFI,0)},c2v:function(){gx.O.AV7cCidadesCodSIAFI=this.val()},val:function(){return gx.fn.getControlValue("vCCIDADESCODSIAFI")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"GROUP2",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV12Linkselection_GXI)},c2v:function(){gx.O.AV12Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(26))}, gxvar_GXI:'AV12Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESCODIBGE",gxz:"Z158CidadesCodIbge",gxold:"O158CidadesCodIbge",gxvar:"A158CidadesCodIbge",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A158CidadesCodIbge=gx.num.intval(Value)},v2z:function(Value){gx.O.Z158CidadesCodIbge=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CIDADESCODIBGE",row || gx.fn.currentGridRowImpl(26),gx.O.A158CidadesCodIbge,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A158CidadesCodIbge=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CIDADESCODIBGE",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:7,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESCODSIAFI",gxz:"Z11674CidadesCodSIAFI",gxold:"O11674CidadesCodSIAFI",gxvar:"A11674CidadesCodSIAFI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11674CidadesCodSIAFI=Value},v2z:function(Value){gx.O.Z11674CidadesCodSIAFI=Value},v2c:function(row){gx.fn.setGridControlValue("CIDADESCODSIAFI",row || gx.fn.currentGridRowImpl(26),gx.O.A11674CidadesCodSIAFI,0)},c2v:function(){gx.O.A11674CidadesCodSIAFI=this.val()},val:function(row){return gx.fn.getGridControlValue("CIDADESCODSIAFI",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   this.AV6cCidadesCodIbge = 0 ;
   this.ZV6cCidadesCodIbge = 0 ;
   this.OV6cCidadesCodIbge = 0 ;
   this.AV7cCidadesCodSIAFI = "" ;
   this.ZV7cCidadesCodSIAFI = "" ;
   this.OV7cCidadesCodSIAFI = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z158CidadesCodIbge = 0 ;
   this.O158CidadesCodIbge = 0 ;
   this.Z11674CidadesCodSIAFI = "" ;
   this.O11674CidadesCodSIAFI = "" ;
   this.AV6cCidadesCodIbge = 0 ;
   this.AV7cCidadesCodSIAFI = "" ;
   this.AV8pCidadesCodIbge = 0 ;
   this.AV9pCidadesCodSIAFI = "" ;
   this.AV5LinkSelection = "" ;
   this.A158CidadesCodIbge = 0 ;
   this.A11674CidadesCodSIAFI = "" ;
   this.Events = {"e132gt2_client": ["ENTER", true] ,"e142gt1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCidadesCodIbge',fld:'vCCIDADESCODIBGE'},{av:'AV7cCidadesCodSIAFI',fld:'vCCIDADESCODSIAFI'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A158CidadesCodIbge',fld:'CIDADESCODIBGE'},{av:'A11674CidadesCodSIAFI',fld:'CIDADESCODSIAFI'}],[{av:'AV8pCidadesCodIbge',fld:'vPCIDADESCODIBGE'},{av:'AV9pCidadesCodSIAFI',fld:'vPCIDADESCODSIAFI'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCidadesCodIbge',fld:'vCCIDADESCODIBGE'},{av:'AV7cCidadesCodSIAFI',fld:'vCCIDADESCODSIAFI'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCidadesCodIbge',fld:'vCCIDADESCODIBGE'},{av:'AV7cCidadesCodSIAFI',fld:'vCCIDADESCODSIAFI'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCidadesCodIbge',fld:'vCCIDADESCODIBGE'},{av:'AV7cCidadesCodSIAFI',fld:'vCCIDADESCODSIAFI'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCidadesCodIbge',fld:'vCCIDADESCODIBGE'},{av:'AV7cCidadesCodSIAFI',fld:'vCCIDADESCODSIAFI'}],[]];
   this.setVCMap("AV8pCidadesCodIbge", "vPCIDADESCODIBGE", 0, "int");
   this.setVCMap("AV9pCidadesCodSIAFI", "vPCIDADESCODSIAFI", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0o30());

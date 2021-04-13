/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:48:37.0
*/
gx.evt.autoSkip = false;
gx.define('gx0o10', false, function () {
   this.ServerClass =  "gx0o10" ;
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
      this.AV11pFormaPgtoEcoId=gx.fn.getControlValue("vPFORMAPGTOECOID") ;
   };
   this.e132go2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142go1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,47];
   this.GXLastCtrlId =47;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0o10",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11691,43,"FORMAPGTOECOID","Eco Id","","FormaPgtoEcoId","svchar",0,"px",40,40,"left",null,[],11691,"FormaPgtoEcoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11696,44,"FORMAPGTOECODESC","Eco Desc","Selecionar","FormaPgtoEcoDesc","svchar",0,"px",60,60,"left",null,[],11696,"FormaPgtoEcoDesc",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKFORMAPGTOECOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFORMAPGTOECOID",gxz:"ZV6cFormaPgtoEcoId",gxold:"OV6cFormaPgtoEcoId",gxvar:"AV6cFormaPgtoEcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cFormaPgtoEcoId=Value},v2z:function(Value){gx.O.ZV6cFormaPgtoEcoId=Value},v2c:function(){gx.fn.setControlValue("vCFORMAPGTOECOID",gx.O.AV6cFormaPgtoEcoId,0)},c2v:function(){gx.O.AV6cFormaPgtoEcoId=this.val()},val:function(){return gx.fn.getControlValue("vCFORMAPGTOECOID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKFORMAPGTOECODESC", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFORMAPGTOECODESC",gxz:"ZV7cFormaPgtoEcoDesc",gxold:"OV7cFormaPgtoEcoDesc",gxvar:"AV7cFormaPgtoEcoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cFormaPgtoEcoDesc=Value},v2z:function(Value){gx.O.ZV7cFormaPgtoEcoDesc=Value},v2c:function(){gx.fn.setControlValue("vCFORMAPGTOECODESC",gx.O.AV7cFormaPgtoEcoDesc,0)},c2v:function(){gx.O.AV7cFormaPgtoEcoDesc=this.val()},val:function(){return gx.fn.getControlValue("vCFORMAPGTOECODESC")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKFORMAPGTOEMPRESAID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFORMAPGTOEMPRESAID",gxz:"ZV8cFormaPgtoEmpresaId",gxold:"OV8cFormaPgtoEmpresaId",gxvar:"AV8cFormaPgtoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cFormaPgtoEmpresaId=Value},v2z:function(Value){gx.O.ZV8cFormaPgtoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCFORMAPGTOEMPRESAID",gx.O.AV8cFormaPgtoEmpresaId,0)},c2v:function(){gx.O.AV8cFormaPgtoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCFORMAPGTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKFORMAPGTOID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFORMAPGTOID",gxz:"ZV9cFormaPgtoId",gxold:"OV9cFormaPgtoId",gxvar:"AV9cFormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cFormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cFormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFORMAPGTOID",gx.O.AV9cFormaPgtoId,0)},c2v:function(){gx.O.AV9cFormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTPCOBRFORMAPGTOID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTPCOBRFORMAPGTOID",gxz:"ZV10cTpCobrFormaPgtoId",gxold:"OV10cTpCobrFormaPgtoId",gxvar:"AV10cTpCobrFormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTpCobrFormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cTpCobrFormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTPCOBRFORMAPGTOID",gx.O.AV10cTpCobrFormaPgtoId,0)},c2v:function(){gx.O.AV10cTpCobrFormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTPCOBRFORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTOECOID",gxz:"Z11691FormaPgtoEcoId",gxold:"O11691FormaPgtoEcoId",gxvar:"A11691FormaPgtoEcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11691FormaPgtoEcoId=Value},v2z:function(Value){gx.O.Z11691FormaPgtoEcoId=Value},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTOECOID",row || gx.fn.currentGridRowImpl(41),gx.O.A11691FormaPgtoEcoId,0)},c2v:function(){gx.O.A11691FormaPgtoEcoId=this.val()},val:function(row){return gx.fn.getGridControlValue("FORMAPGTOECOID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTOECODESC",gxz:"Z11696FormaPgtoEcoDesc",gxold:"O11696FormaPgtoEcoDesc",gxvar:"A11696FormaPgtoEcoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11696FormaPgtoEcoDesc=Value},v2z:function(Value){gx.O.Z11696FormaPgtoEcoDesc=Value},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTOECODESC",row || gx.fn.currentGridRowImpl(41),gx.O.A11696FormaPgtoEcoDesc,0)},c2v:function(){gx.O.A11696FormaPgtoEcoDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("FORMAPGTOECODESC",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLE4",grid:0};
   this.AV6cFormaPgtoEcoId = "" ;
   this.ZV6cFormaPgtoEcoId = "" ;
   this.OV6cFormaPgtoEcoId = "" ;
   this.AV7cFormaPgtoEcoDesc = "" ;
   this.ZV7cFormaPgtoEcoDesc = "" ;
   this.OV7cFormaPgtoEcoDesc = "" ;
   this.AV8cFormaPgtoEmpresaId = "" ;
   this.ZV8cFormaPgtoEmpresaId = "" ;
   this.OV8cFormaPgtoEmpresaId = "" ;
   this.AV9cFormaPgtoId = 0 ;
   this.ZV9cFormaPgtoId = 0 ;
   this.OV9cFormaPgtoId = 0 ;
   this.AV10cTpCobrFormaPgtoId = 0 ;
   this.ZV10cTpCobrFormaPgtoId = 0 ;
   this.OV10cTpCobrFormaPgtoId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11691FormaPgtoEcoId = "" ;
   this.O11691FormaPgtoEcoId = "" ;
   this.Z11696FormaPgtoEcoDesc = "" ;
   this.O11696FormaPgtoEcoDesc = "" ;
   this.AV6cFormaPgtoEcoId = "" ;
   this.AV7cFormaPgtoEcoDesc = "" ;
   this.AV8cFormaPgtoEmpresaId = "" ;
   this.AV9cFormaPgtoId = 0 ;
   this.AV10cTpCobrFormaPgtoId = 0 ;
   this.AV11pFormaPgtoEcoId = "" ;
   this.A3377TpCobrFormaPgtoId = 0 ;
   this.A3376FormaPgtoId = 0 ;
   this.A3375FormaPgtoEmpresaId = "" ;
   this.AV5LinkSelection = "" ;
   this.A11691FormaPgtoEcoId = "" ;
   this.A11696FormaPgtoEcoDesc = "" ;
   this.Events = {"e132go2_client": ["ENTER", true] ,"e142go1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFormaPgtoEcoId',fld:'vCFORMAPGTOECOID'},{av:'AV7cFormaPgtoEcoDesc',fld:'vCFORMAPGTOECODESC'},{av:'AV8cFormaPgtoEmpresaId',fld:'vCFORMAPGTOEMPRESAID'},{av:'AV9cFormaPgtoId',fld:'vCFORMAPGTOID'},{av:'AV10cTpCobrFormaPgtoId',fld:'vCTPCOBRFORMAPGTOID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11691FormaPgtoEcoId',fld:'FORMAPGTOECOID'}],[{av:'AV11pFormaPgtoEcoId',fld:'vPFORMAPGTOECOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFormaPgtoEcoId',fld:'vCFORMAPGTOECOID'},{av:'AV7cFormaPgtoEcoDesc',fld:'vCFORMAPGTOECODESC'},{av:'AV8cFormaPgtoEmpresaId',fld:'vCFORMAPGTOEMPRESAID'},{av:'AV9cFormaPgtoId',fld:'vCFORMAPGTOID'},{av:'AV10cTpCobrFormaPgtoId',fld:'vCTPCOBRFORMAPGTOID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFormaPgtoEcoId',fld:'vCFORMAPGTOECOID'},{av:'AV7cFormaPgtoEcoDesc',fld:'vCFORMAPGTOECODESC'},{av:'AV8cFormaPgtoEmpresaId',fld:'vCFORMAPGTOEMPRESAID'},{av:'AV9cFormaPgtoId',fld:'vCFORMAPGTOID'},{av:'AV10cTpCobrFormaPgtoId',fld:'vCTPCOBRFORMAPGTOID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFormaPgtoEcoId',fld:'vCFORMAPGTOECOID'},{av:'AV7cFormaPgtoEcoDesc',fld:'vCFORMAPGTOECODESC'},{av:'AV8cFormaPgtoEmpresaId',fld:'vCFORMAPGTOEMPRESAID'},{av:'AV9cFormaPgtoId',fld:'vCFORMAPGTOID'},{av:'AV10cTpCobrFormaPgtoId',fld:'vCTPCOBRFORMAPGTOID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFormaPgtoEcoId',fld:'vCFORMAPGTOECOID'},{av:'AV7cFormaPgtoEcoDesc',fld:'vCFORMAPGTOECODESC'},{av:'AV8cFormaPgtoEmpresaId',fld:'vCFORMAPGTOEMPRESAID'},{av:'AV9cFormaPgtoId',fld:'vCFORMAPGTOID'},{av:'AV10cTpCobrFormaPgtoId',fld:'vCTPCOBRFORMAPGTOID'}],[]];
   this.setVCMap("AV11pFormaPgtoEcoId", "vPFORMAPGTOECOID", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0o10());

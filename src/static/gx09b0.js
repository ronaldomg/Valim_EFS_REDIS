/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:23:55.35
*/
gx.evt.autoSkip = false;
gx.define('gx09b0', false, function () {
   this.ServerClass =  "gx09b0" ;
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
      this.AV8pAutorId=gx.fn.getIntegerValue("vPAUTORID",'.') ;
   };
   this.e131hf2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141hf1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,28,29,32];
   this.GXLastCtrlId =32;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx09b0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(49,28,"AUTORID","Código do Autor","","AutorId","int",0,"px",7,7,"right",null,[],49,"AutorId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(50,29,"AUTORNOME","Nome do Autor","Selecionar","AutorNome","svchar",0,"px",40,40,"left",null,[],50,"AutorNome",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKAUTORID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAUTORID",gxz:"ZV6cAutorId",gxold:"OV6cAutorId",gxvar:"AV6cAutorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cAutorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cAutorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAUTORID",gx.O.AV6cAutorId,0)},c2v:function(){gx.O.AV6cAutorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAUTORID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKAUTORNOME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAUTORNOME",gxz:"ZV7cAutorNome",gxold:"OV7cAutorNome",gxvar:"AV7cAutorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cAutorNome=Value},v2z:function(Value){gx.O.ZV7cAutorNome=Value},v2c:function(){gx.fn.setControlValue("vCAUTORNOME",gx.O.AV7cAutorNome,0)},c2v:function(){gx.O.AV7cAutorNome=this.val()},val:function(){return gx.fn.getControlValue("vCAUTORNOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"GROUP2",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV11Linkselection_GXI)},c2v:function(){gx.O.AV11Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(26))}, gxvar_GXI:'AV11Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AUTORID",gxz:"Z49AutorId",gxold:"O49AutorId",gxvar:"A49AutorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A49AutorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z49AutorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("AUTORID",row || gx.fn.currentGridRowImpl(26),gx.O.A49AutorId,0)},c2v:function(){gx.O.A49AutorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("AUTORID",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AUTORNOME",gxz:"Z50AutorNome",gxold:"O50AutorNome",gxvar:"A50AutorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A50AutorNome=Value},v2z:function(Value){gx.O.Z50AutorNome=Value},v2c:function(row){gx.fn.setGridControlValue("AUTORNOME",row || gx.fn.currentGridRowImpl(26),gx.O.A50AutorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A50AutorNome=this.val()},val:function(row){return gx.fn.getGridControlValue("AUTORNOME",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   this.AV6cAutorId = 0 ;
   this.ZV6cAutorId = 0 ;
   this.OV6cAutorId = 0 ;
   this.AV7cAutorNome = "" ;
   this.ZV7cAutorNome = "" ;
   this.OV7cAutorNome = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z49AutorId = 0 ;
   this.O49AutorId = 0 ;
   this.Z50AutorNome = "" ;
   this.O50AutorNome = "" ;
   this.AV6cAutorId = 0 ;
   this.AV7cAutorNome = "" ;
   this.AV8pAutorId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A49AutorId = 0 ;
   this.A50AutorNome = "" ;
   this.Events = {"e131hf2_client": ["ENTER", true] ,"e141hf1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAutorId',fld:'vCAUTORID'},{av:'AV7cAutorNome',fld:'vCAUTORNOME'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A49AutorId',fld:'AUTORID'}],[{av:'AV8pAutorId',fld:'vPAUTORID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAutorId',fld:'vCAUTORID'},{av:'AV7cAutorNome',fld:'vCAUTORNOME'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAutorId',fld:'vCAUTORID'},{av:'AV7cAutorNome',fld:'vCAUTORNOME'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAutorId',fld:'vCAUTORID'},{av:'AV7cAutorNome',fld:'vCAUTORNOME'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAutorId',fld:'vCAUTORID'},{av:'AV7cAutorNome',fld:'vCAUTORNOME'}],[]];
   this.setVCMap("AV8pAutorId", "vPAUTORID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx09b0());

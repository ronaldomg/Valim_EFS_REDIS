/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:23:56.84
*/
gx.evt.autoSkip = false;
gx.define('gx0070', false, function () {
   this.ServerClass =  "gx0070" ;
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
      this.AV9pBairroId=gx.fn.getIntegerValue("vPBAIRROID",'.') ;
   };
   this.e131hg2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141hg1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0070",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(148,33,"BAIRROID","Código","","BairroId","int",0,"px",7,7,"right",null,[],148,"BairroId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(146,34,"BAIRRONOME","Nome","Selecionar","BairroNome","svchar",0,"px",40,40,"left",null,[],146,"BairroNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(147,35,"CIDADESID","Cidade","","CidadesId","int",0,"px",8,8,"right",null,[],147,"CidadesId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKBAIRROID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBAIRROID",gxz:"ZV6cBairroId",gxold:"OV6cBairroId",gxvar:"AV6cBairroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cBairroId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cBairroId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBAIRROID",gx.O.AV6cBairroId,0)},c2v:function(){gx.O.AV6cBairroId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBAIRROID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKBAIRRONOME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBAIRRONOME",gxz:"ZV7cBairroNome",gxold:"OV7cBairroNome",gxvar:"AV7cBairroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cBairroNome=Value},v2z:function(Value){gx.O.ZV7cBairroNome=Value},v2c:function(){gx.fn.setControlValue("vCBAIRRONOME",gx.O.AV7cBairroNome,0)},c2v:function(){gx.O.AV7cBairroNome=this.val()},val:function(){return gx.fn.getControlValue("vCBAIRRONOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCIDADESID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESID",gxz:"ZV8cCidadesId",gxold:"OV8cCidadesId",gxvar:"AV8cCidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cCidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCIDADESID",gx.O.AV8cCidadesId,0)},c2v:function(){gx.O.AV8cCidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV12Linkselection_GXI)},c2v:function(){gx.O.AV12Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV12Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BAIRROID",gxz:"Z148BairroId",gxold:"O148BairroId",gxvar:"A148BairroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A148BairroId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z148BairroId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BAIRROID",row || gx.fn.currentGridRowImpl(31),gx.O.A148BairroId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A148BairroId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BAIRROID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BAIRRONOME",gxz:"Z146BairroNome",gxold:"O146BairroNome",gxvar:"A146BairroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A146BairroNome=Value},v2z:function(Value){gx.O.Z146BairroNome=Value},v2c:function(row){gx.fn.setGridControlValue("BAIRRONOME",row || gx.fn.currentGridRowImpl(31),gx.O.A146BairroNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A146BairroNome=this.val()},val:function(row){return gx.fn.getGridControlValue("BAIRRONOME",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z147CidadesId",gxold:"O147CidadesId",gxvar:"A147CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A147CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z147CidadesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CIDADESID",row || gx.fn.currentGridRowImpl(31),gx.O.A147CidadesId,0)},c2v:function(){gx.O.A147CidadesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CIDADESID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cBairroId = 0 ;
   this.ZV6cBairroId = 0 ;
   this.OV6cBairroId = 0 ;
   this.AV7cBairroNome = "" ;
   this.ZV7cBairroNome = "" ;
   this.OV7cBairroNome = "" ;
   this.AV8cCidadesId = 0 ;
   this.ZV8cCidadesId = 0 ;
   this.OV8cCidadesId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z148BairroId = 0 ;
   this.O148BairroId = 0 ;
   this.Z146BairroNome = "" ;
   this.O146BairroNome = "" ;
   this.Z147CidadesId = 0 ;
   this.O147CidadesId = 0 ;
   this.AV6cBairroId = 0 ;
   this.AV7cBairroNome = "" ;
   this.AV8cCidadesId = 0 ;
   this.AV9pBairroId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A148BairroId = 0 ;
   this.A146BairroNome = "" ;
   this.A147CidadesId = 0 ;
   this.Events = {"e131hg2_client": ["ENTER", true] ,"e141hg1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBairroId',fld:'vCBAIRROID'},{av:'AV7cBairroNome',fld:'vCBAIRRONOME'},{av:'AV8cCidadesId',fld:'vCCIDADESID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A148BairroId',fld:'BAIRROID'}],[{av:'AV9pBairroId',fld:'vPBAIRROID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBairroId',fld:'vCBAIRROID'},{av:'AV7cBairroNome',fld:'vCBAIRRONOME'},{av:'AV8cCidadesId',fld:'vCCIDADESID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBairroId',fld:'vCBAIRROID'},{av:'AV7cBairroNome',fld:'vCBAIRRONOME'},{av:'AV8cCidadesId',fld:'vCCIDADESID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBairroId',fld:'vCBAIRROID'},{av:'AV7cBairroNome',fld:'vCBAIRRONOME'},{av:'AV8cCidadesId',fld:'vCCIDADESID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBairroId',fld:'vCBAIRROID'},{av:'AV7cBairroNome',fld:'vCBAIRRONOME'},{av:'AV8cCidadesId',fld:'vCCIDADESID'}],[]];
   this.setVCMap("AV9pBairroId", "vPBAIRROID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0070());

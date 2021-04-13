/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:44:53.72
*/
gx.evt.autoSkip = false;
gx.define('gx0ko0', false, function () {
   this.ServerClass =  "gx0ko0" ;
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
      this.AV9pImpressoraIPId=gx.fn.getControlValue("vPIMPRESSORAIPID") ;
      this.AV10pImpressoraIPSequencia=gx.fn.getIntegerValue("vPIMPRESSORAIPSEQUENCIA",'.') ;
   };
   this.e1323v2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1423v1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,37];
   this.GXLastCtrlId =37;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ko0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9922,33,"IMPRESSORAIPID","IP","","ImpressoraIPId","svchar",0,"px",40,40,"left",null,[],9922,"ImpressoraIPId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9934,34,"IMPRESSORAIPSEQUENCIA","Sequência","","ImpressoraIPSequencia","int",0,"px",4,4,"right",null,[],9934,"ImpressoraIPSequencia",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKIMPRESSORAIPID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCIMPRESSORAIPID",gxz:"ZV6cImpressoraIPId",gxold:"OV6cImpressoraIPId",gxvar:"AV6cImpressoraIPId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cImpressoraIPId=Value},v2z:function(Value){gx.O.ZV6cImpressoraIPId=Value},v2c:function(){gx.fn.setControlValue("vCIMPRESSORAIPID",gx.O.AV6cImpressoraIPId,0)},c2v:function(){gx.O.AV6cImpressoraIPId=this.val()},val:function(){return gx.fn.getControlValue("vCIMPRESSORAIPID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKIMPRESSORAIPSEQUENCIA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCIMPRESSORAIPSEQUENCIA",gxz:"ZV7cImpressoraIPSequencia",gxold:"OV7cImpressoraIPSequencia",gxvar:"AV7cImpressoraIPSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cImpressoraIPSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cImpressoraIPSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIMPRESSORAIPSEQUENCIA",gx.O.AV7cImpressoraIPSequencia,0)},c2v:function(){gx.O.AV7cImpressoraIPSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIMPRESSORAIPSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKIMPRESSORAIPNOME", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCIMPRESSORAIPNOME",gxz:"ZV8cImpressoraIPNome",gxold:"OV8cImpressoraIPNome",gxvar:"AV8cImpressoraIPNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cImpressoraIPNome=Value},v2z:function(Value){gx.O.ZV8cImpressoraIPNome=Value},v2c:function(){gx.fn.setControlValue("vCIMPRESSORAIPNOME",gx.O.AV8cImpressoraIPNome,0)},c2v:function(){gx.O.AV8cImpressoraIPNome=this.val()},val:function(){return gx.fn.getControlValue("vCIMPRESSORAIPNOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(){gx.O.AV13Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV13Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAIPID",gxz:"Z9922ImpressoraIPId",gxold:"O9922ImpressoraIPId",gxvar:"A9922ImpressoraIPId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9922ImpressoraIPId=Value},v2z:function(Value){gx.O.Z9922ImpressoraIPId=Value},v2c:function(row){gx.fn.setGridControlValue("IMPRESSORAIPID",row || gx.fn.currentGridRowImpl(31),gx.O.A9922ImpressoraIPId,0)},c2v:function(){gx.O.A9922ImpressoraIPId=this.val()},val:function(row){return gx.fn.getGridControlValue("IMPRESSORAIPID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"IMPRESSORAIPSEQUENCIA",gxz:"Z9934ImpressoraIPSequencia",gxold:"O9934ImpressoraIPSequencia",gxvar:"A9934ImpressoraIPSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9934ImpressoraIPSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9934ImpressoraIPSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("IMPRESSORAIPSEQUENCIA",row || gx.fn.currentGridRowImpl(31),gx.O.A9934ImpressoraIPSequencia,0)},c2v:function(){gx.O.A9934ImpressoraIPSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("IMPRESSORAIPSEQUENCIA",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLE4",grid:0};
   this.AV6cImpressoraIPId = "" ;
   this.ZV6cImpressoraIPId = "" ;
   this.OV6cImpressoraIPId = "" ;
   this.AV7cImpressoraIPSequencia = 0 ;
   this.ZV7cImpressoraIPSequencia = 0 ;
   this.OV7cImpressoraIPSequencia = 0 ;
   this.AV8cImpressoraIPNome = "" ;
   this.ZV8cImpressoraIPNome = "" ;
   this.OV8cImpressoraIPNome = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9922ImpressoraIPId = "" ;
   this.O9922ImpressoraIPId = "" ;
   this.Z9934ImpressoraIPSequencia = 0 ;
   this.O9934ImpressoraIPSequencia = 0 ;
   this.AV6cImpressoraIPId = "" ;
   this.AV7cImpressoraIPSequencia = 0 ;
   this.AV8cImpressoraIPNome = "" ;
   this.AV9pImpressoraIPId = "" ;
   this.AV10pImpressoraIPSequencia = 0 ;
   this.A9923ImpressoraIPNome = "" ;
   this.AV5LinkSelection = "" ;
   this.A9922ImpressoraIPId = "" ;
   this.A9934ImpressoraIPSequencia = 0 ;
   this.Events = {"e1323v2_client": ["ENTER", true] ,"e1423v1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cImpressoraIPId',fld:'vCIMPRESSORAIPID'},{av:'AV7cImpressoraIPSequencia',fld:'vCIMPRESSORAIPSEQUENCIA'},{av:'AV8cImpressoraIPNome',fld:'vCIMPRESSORAIPNOME'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9922ImpressoraIPId',fld:'IMPRESSORAIPID'},{av:'A9934ImpressoraIPSequencia',fld:'IMPRESSORAIPSEQUENCIA'}],[{av:'AV9pImpressoraIPId',fld:'vPIMPRESSORAIPID'},{av:'AV10pImpressoraIPSequencia',fld:'vPIMPRESSORAIPSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cImpressoraIPId',fld:'vCIMPRESSORAIPID'},{av:'AV7cImpressoraIPSequencia',fld:'vCIMPRESSORAIPSEQUENCIA'},{av:'AV8cImpressoraIPNome',fld:'vCIMPRESSORAIPNOME'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cImpressoraIPId',fld:'vCIMPRESSORAIPID'},{av:'AV7cImpressoraIPSequencia',fld:'vCIMPRESSORAIPSEQUENCIA'},{av:'AV8cImpressoraIPNome',fld:'vCIMPRESSORAIPNOME'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cImpressoraIPId',fld:'vCIMPRESSORAIPID'},{av:'AV7cImpressoraIPSequencia',fld:'vCIMPRESSORAIPSEQUENCIA'},{av:'AV8cImpressoraIPNome',fld:'vCIMPRESSORAIPNOME'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cImpressoraIPId',fld:'vCIMPRESSORAIPID'},{av:'AV7cImpressoraIPSequencia',fld:'vCIMPRESSORAIPSEQUENCIA'},{av:'AV8cImpressoraIPNome',fld:'vCIMPRESSORAIPNOME'}],[]];
   this.setVCMap("AV9pImpressoraIPId", "vPIMPRESSORAIPID", 0, "svchar");
   this.setVCMap("AV10pImpressoraIPSequencia", "vPIMPRESSORAIPSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ko0());

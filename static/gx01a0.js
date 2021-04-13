/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:25:16.56
*/
gx.evt.autoSkip = false;
gx.define('gx01a0', false, function () {
   this.ServerClass =  "gx01a0" ;
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
      this.AV11pPaisesId=gx.fn.getIntegerValue("vPPAISESID",'.') ;
   };
   this.e131ik2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141ik1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx01a0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(159,43,"PAISESID","Código País","","PaisesId","int",0,"px",7,7,"right",null,[],159,"PaisesId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(160,44,"PAISESNOME","Nome do País","Selecionar","PaisesNome","svchar",0,"px",40,40,"left",null,[],160,"PaisesNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(415,45,"PAISESCODBANCENTRAL","Código Banco Central","","PaisesCodBanCentral","int",0,"px",7,7,"right",null,[],415,"PaisesCodBanCentral",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(836,46,"PAISESUSUARIOID","Paises Usuario Id","","PaisesUsuarioId","char",0,"px",12,12,"left",null,[],836,"PaisesUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(837,47,"PAISESDATAHORAALT","Data/Hora última alteração","","PaisesDataHoraAlt","dtime",0,"px",16,16,"right",null,[],837,"PaisesDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPAISESID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPAISESID",gxz:"ZV6cPaisesId",gxold:"OV6cPaisesId",gxvar:"AV6cPaisesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cPaisesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cPaisesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPAISESID",gx.O.AV6cPaisesId,0)},c2v:function(){gx.O.AV6cPaisesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPAISESID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPAISESNOME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPAISESNOME",gxz:"ZV7cPaisesNome",gxold:"OV7cPaisesNome",gxvar:"AV7cPaisesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cPaisesNome=Value},v2z:function(Value){gx.O.ZV7cPaisesNome=Value},v2c:function(){gx.fn.setControlValue("vCPAISESNOME",gx.O.AV7cPaisesNome,0)},c2v:function(){gx.O.AV7cPaisesNome=this.val()},val:function(){return gx.fn.getControlValue("vCPAISESNOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPAISESCODBANCENTRAL", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPAISESCODBANCENTRAL",gxz:"ZV8cPaisesCodBanCentral",gxold:"OV8cPaisesCodBanCentral",gxvar:"AV8cPaisesCodBanCentral",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cPaisesCodBanCentral=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cPaisesCodBanCentral=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPAISESCODBANCENTRAL",gx.O.AV8cPaisesCodBanCentral,0)},c2v:function(){gx.O.AV8cPaisesCodBanCentral=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPAISESCODBANCENTRAL",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPAISESUSUARIOID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPAISESUSUARIOID",gxz:"ZV9cPaisesUsuarioId",gxold:"OV9cPaisesUsuarioId",gxvar:"AV9cPaisesUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cPaisesUsuarioId=Value},v2z:function(Value){gx.O.ZV9cPaisesUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCPAISESUSUARIOID",gx.O.AV9cPaisesUsuarioId,0)},c2v:function(){gx.O.AV9cPaisesUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCPAISESUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPAISESDATAHORAALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPAISESDATAHORAALT",gxz:"ZV10cPaisesDataHoraAlt",gxold:"OV10cPaisesDataHoraAlt",gxvar:"AV10cPaisesDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cPaisesDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cPaisesDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPAISESDATAHORAALT",gx.O.AV10cPaisesDataHoraAlt,0)},c2v:function(){gx.O.AV10cPaisesDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCPAISESDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PAISESID",gxz:"Z159PaisesId",gxold:"O159PaisesId",gxvar:"A159PaisesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A159PaisesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z159PaisesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAISESID",row || gx.fn.currentGridRowImpl(41),gx.O.A159PaisesId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A159PaisesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAISESID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PAISESNOME",gxz:"Z160PaisesNome",gxold:"O160PaisesNome",gxvar:"A160PaisesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A160PaisesNome=Value},v2z:function(Value){gx.O.Z160PaisesNome=Value},v2c:function(row){gx.fn.setGridControlValue("PAISESNOME",row || gx.fn.currentGridRowImpl(41),gx.O.A160PaisesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A160PaisesNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PAISESNOME",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PAISESCODBANCENTRAL",gxz:"Z415PaisesCodBanCentral",gxold:"O415PaisesCodBanCentral",gxvar:"A415PaisesCodBanCentral",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A415PaisesCodBanCentral=gx.num.intval(Value)},v2z:function(Value){gx.O.Z415PaisesCodBanCentral=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAISESCODBANCENTRAL",row || gx.fn.currentGridRowImpl(41),gx.O.A415PaisesCodBanCentral,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A415PaisesCodBanCentral=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAISESCODBANCENTRAL",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PAISESUSUARIOID",gxz:"Z836PaisesUsuarioId",gxold:"O836PaisesUsuarioId",gxvar:"A836PaisesUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A836PaisesUsuarioId=Value},v2z:function(Value){gx.O.Z836PaisesUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("PAISESUSUARIOID",row || gx.fn.currentGridRowImpl(41),gx.O.A836PaisesUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A836PaisesUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("PAISESUSUARIOID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PAISESDATAHORAALT",gxz:"Z837PaisesDataHoraAlt",gxold:"O837PaisesDataHoraAlt",gxvar:"A837PaisesDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A837PaisesDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z837PaisesDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PAISESDATAHORAALT",row || gx.fn.currentGridRowImpl(41),gx.O.A837PaisesDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A837PaisesDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PAISESDATAHORAALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cPaisesId = 0 ;
   this.ZV6cPaisesId = 0 ;
   this.OV6cPaisesId = 0 ;
   this.AV7cPaisesNome = "" ;
   this.ZV7cPaisesNome = "" ;
   this.OV7cPaisesNome = "" ;
   this.AV8cPaisesCodBanCentral = 0 ;
   this.ZV8cPaisesCodBanCentral = 0 ;
   this.OV8cPaisesCodBanCentral = 0 ;
   this.AV9cPaisesUsuarioId = "" ;
   this.ZV9cPaisesUsuarioId = "" ;
   this.OV9cPaisesUsuarioId = "" ;
   this.AV10cPaisesDataHoraAlt = gx.date.nullDate() ;
   this.ZV10cPaisesDataHoraAlt = gx.date.nullDate() ;
   this.OV10cPaisesDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z159PaisesId = 0 ;
   this.O159PaisesId = 0 ;
   this.Z160PaisesNome = "" ;
   this.O160PaisesNome = "" ;
   this.Z415PaisesCodBanCentral = 0 ;
   this.O415PaisesCodBanCentral = 0 ;
   this.Z836PaisesUsuarioId = "" ;
   this.O836PaisesUsuarioId = "" ;
   this.Z837PaisesDataHoraAlt = gx.date.nullDate() ;
   this.O837PaisesDataHoraAlt = gx.date.nullDate() ;
   this.AV6cPaisesId = 0 ;
   this.AV7cPaisesNome = "" ;
   this.AV8cPaisesCodBanCentral = 0 ;
   this.AV9cPaisesUsuarioId = "" ;
   this.AV10cPaisesDataHoraAlt = gx.date.nullDate() ;
   this.AV11pPaisesId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A159PaisesId = 0 ;
   this.A160PaisesNome = "" ;
   this.A415PaisesCodBanCentral = 0 ;
   this.A836PaisesUsuarioId = "" ;
   this.A837PaisesDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131ik2_client": ["ENTER", true] ,"e141ik1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPaisesId',fld:'vCPAISESID'},{av:'AV7cPaisesNome',fld:'vCPAISESNOME'},{av:'AV8cPaisesCodBanCentral',fld:'vCPAISESCODBANCENTRAL'},{av:'AV9cPaisesUsuarioId',fld:'vCPAISESUSUARIOID'},{av:'AV10cPaisesDataHoraAlt',fld:'vCPAISESDATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A159PaisesId',fld:'PAISESID'}],[{av:'AV11pPaisesId',fld:'vPPAISESID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPaisesId',fld:'vCPAISESID'},{av:'AV7cPaisesNome',fld:'vCPAISESNOME'},{av:'AV8cPaisesCodBanCentral',fld:'vCPAISESCODBANCENTRAL'},{av:'AV9cPaisesUsuarioId',fld:'vCPAISESUSUARIOID'},{av:'AV10cPaisesDataHoraAlt',fld:'vCPAISESDATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPaisesId',fld:'vCPAISESID'},{av:'AV7cPaisesNome',fld:'vCPAISESNOME'},{av:'AV8cPaisesCodBanCentral',fld:'vCPAISESCODBANCENTRAL'},{av:'AV9cPaisesUsuarioId',fld:'vCPAISESUSUARIOID'},{av:'AV10cPaisesDataHoraAlt',fld:'vCPAISESDATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPaisesId',fld:'vCPAISESID'},{av:'AV7cPaisesNome',fld:'vCPAISESNOME'},{av:'AV8cPaisesCodBanCentral',fld:'vCPAISESCODBANCENTRAL'},{av:'AV9cPaisesUsuarioId',fld:'vCPAISESUSUARIOID'},{av:'AV10cPaisesDataHoraAlt',fld:'vCPAISESDATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cPaisesId',fld:'vCPAISESID'},{av:'AV7cPaisesNome',fld:'vCPAISESNOME'},{av:'AV8cPaisesCodBanCentral',fld:'vCPAISESCODBANCENTRAL'},{av:'AV9cPaisesUsuarioId',fld:'vCPAISESUSUARIOID'},{av:'AV10cPaisesDataHoraAlt',fld:'vCPAISESDATAHORAALT'}],[]];
   this.setVCMap("AV11pPaisesId", "vPPAISESID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx01a0());
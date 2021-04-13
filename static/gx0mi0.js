/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:47:11.98
*/
gx.evt.autoSkip = false;
gx.define('gx0mi0', false, function () {
   this.ServerClass =  "gx0mi0" ;
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
      this.AV9pUsuarioFilialEstId=gx.fn.getControlValue("vPUSUARIOFILIALESTID") ;
      this.AV10pFilialEstEmpresaId=gx.fn.getControlValue("vPFILIALESTEMPRESAID") ;
      this.AV11pFilialEstId=gx.fn.getIntegerValue("vPFILIALESTID",'.') ;
   };
   this.e132bb2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142bb1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0mi0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11040,33,"USUARIOFILIALESTID","","","UsuarioFilialEstId","char",0,"px",12,12,"left",null,[],11040,"UsuarioFilialEstId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11041,34,"FILIALESTEMPRESAID","da filial","","FilialEstEmpresaId","char",0,"px",10,10,"left",null,[],11041,"FilialEstEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11042,35,"FILIALESTID","Filial","","FilialEstId","int",0,"px",7,7,"right",null,[],11042,"FilialEstId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKUSUARIOFILIALESTID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOFILIALESTID",gxz:"ZV6cUsuarioFilialEstId",gxold:"OV6cUsuarioFilialEstId",gxvar:"AV6cUsuarioFilialEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cUsuarioFilialEstId=Value},v2z:function(Value){gx.O.ZV6cUsuarioFilialEstId=Value},v2c:function(){gx.fn.setControlValue("vCUSUARIOFILIALESTID",gx.O.AV6cUsuarioFilialEstId,0)},c2v:function(){gx.O.AV6cUsuarioFilialEstId=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIOFILIALESTID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKFILIALESTEMPRESAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALESTEMPRESAID",gxz:"ZV7cFilialEstEmpresaId",gxold:"OV7cFilialEstEmpresaId",gxvar:"AV7cFilialEstEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cFilialEstEmpresaId=Value},v2z:function(Value){gx.O.ZV7cFilialEstEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCFILIALESTEMPRESAID",gx.O.AV7cFilialEstEmpresaId,0)},c2v:function(){gx.O.AV7cFilialEstEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCFILIALESTEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKFILIALESTID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFILIALESTID",gxz:"ZV8cFilialEstId",gxold:"OV8cFilialEstId",gxvar:"AV8cFilialEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cFilialEstId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cFilialEstId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFILIALESTID",gx.O.AV8cFilialEstId,0)},c2v:function(){gx.O.AV8cFilialEstId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFILIALESTID",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOFILIALESTID",gxz:"Z11040UsuarioFilialEstId",gxold:"O11040UsuarioFilialEstId",gxvar:"A11040UsuarioFilialEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11040UsuarioFilialEstId=Value},v2z:function(Value){gx.O.Z11040UsuarioFilialEstId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOFILIALESTID",row || gx.fn.currentGridRowImpl(31),gx.O.A11040UsuarioFilialEstId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11040UsuarioFilialEstId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOFILIALESTID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALESTEMPRESAID",gxz:"Z11041FilialEstEmpresaId",gxold:"O11041FilialEstEmpresaId",gxvar:"A11041FilialEstEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11041FilialEstEmpresaId=Value},v2z:function(Value){gx.O.Z11041FilialEstEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FILIALESTEMPRESAID",row || gx.fn.currentGridRowImpl(31),gx.O.A11041FilialEstEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11041FilialEstEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FILIALESTEMPRESAID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FILIALESTID",gxz:"Z11042FilialEstId",gxold:"O11042FilialEstId",gxvar:"A11042FilialEstId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11042FilialEstId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11042FilialEstId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FILIALESTID",row || gx.fn.currentGridRowImpl(31),gx.O.A11042FilialEstId,0)},c2v:function(){gx.O.A11042FilialEstId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FILIALESTID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cUsuarioFilialEstId = "" ;
   this.ZV6cUsuarioFilialEstId = "" ;
   this.OV6cUsuarioFilialEstId = "" ;
   this.AV7cFilialEstEmpresaId = "" ;
   this.ZV7cFilialEstEmpresaId = "" ;
   this.OV7cFilialEstEmpresaId = "" ;
   this.AV8cFilialEstId = 0 ;
   this.ZV8cFilialEstId = 0 ;
   this.OV8cFilialEstId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11040UsuarioFilialEstId = "" ;
   this.O11040UsuarioFilialEstId = "" ;
   this.Z11041FilialEstEmpresaId = "" ;
   this.O11041FilialEstEmpresaId = "" ;
   this.Z11042FilialEstId = 0 ;
   this.O11042FilialEstId = 0 ;
   this.AV6cUsuarioFilialEstId = "" ;
   this.AV7cFilialEstEmpresaId = "" ;
   this.AV8cFilialEstId = 0 ;
   this.AV9pUsuarioFilialEstId = "" ;
   this.AV10pFilialEstEmpresaId = "" ;
   this.AV11pFilialEstId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A11040UsuarioFilialEstId = "" ;
   this.A11041FilialEstEmpresaId = "" ;
   this.A11042FilialEstId = 0 ;
   this.Events = {"e132bb2_client": ["ENTER", true] ,"e142bb1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioFilialEstId',fld:'vCUSUARIOFILIALESTID'},{av:'AV7cFilialEstEmpresaId',fld:'vCFILIALESTEMPRESAID'},{av:'AV8cFilialEstId',fld:'vCFILIALESTID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11040UsuarioFilialEstId',fld:'USUARIOFILIALESTID'},{av:'A11041FilialEstEmpresaId',fld:'FILIALESTEMPRESAID'},{av:'A11042FilialEstId',fld:'FILIALESTID'}],[{av:'AV9pUsuarioFilialEstId',fld:'vPUSUARIOFILIALESTID'},{av:'AV10pFilialEstEmpresaId',fld:'vPFILIALESTEMPRESAID'},{av:'AV11pFilialEstId',fld:'vPFILIALESTID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioFilialEstId',fld:'vCUSUARIOFILIALESTID'},{av:'AV7cFilialEstEmpresaId',fld:'vCFILIALESTEMPRESAID'},{av:'AV8cFilialEstId',fld:'vCFILIALESTID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioFilialEstId',fld:'vCUSUARIOFILIALESTID'},{av:'AV7cFilialEstEmpresaId',fld:'vCFILIALESTEMPRESAID'},{av:'AV8cFilialEstId',fld:'vCFILIALESTID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioFilialEstId',fld:'vCUSUARIOFILIALESTID'},{av:'AV7cFilialEstEmpresaId',fld:'vCFILIALESTEMPRESAID'},{av:'AV8cFilialEstId',fld:'vCFILIALESTID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioFilialEstId',fld:'vCUSUARIOFILIALESTID'},{av:'AV7cFilialEstEmpresaId',fld:'vCFILIALESTEMPRESAID'},{av:'AV8cFilialEstId',fld:'vCFILIALESTID'}],[]];
   this.setVCMap("AV9pUsuarioFilialEstId", "vPUSUARIOFILIALESTID", 0, "char");
   this.setVCMap("AV10pFilialEstEmpresaId", "vPFILIALESTEMPRESAID", 0, "char");
   this.setVCMap("AV11pFilialEstId", "vPFILIALESTID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0mi0());

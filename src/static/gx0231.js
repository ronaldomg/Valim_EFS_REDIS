/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:26:19.79
*/
gx.evt.autoSkip = false;
gx.define('gx0231', false, function () {
   this.ServerClass =  "gx0231" ;
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
      this.AV7pUsuarioId=gx.fn.getControlValue("vPUSUARIOID") ;
      this.AV8pGrupoId=gx.fn.getIntegerValue("vPGRUPOID",'.') ;
   };
   this.e131jd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141jd1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,18,22,23,24,27];
   this.GXLastCtrlId =27;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",21,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0231",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",22,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(244,23,"GRUPOID","Grupo","Selecionar","GrupoId","int",0,"px",7,7,"right",null,[],244,"GrupoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(75,24,"USUARIOID","Usuário","","UsuarioId","char",0,"px",12,12,"left",null,[],75,"UsuarioId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKGRUPOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCGRUPOID",gxz:"ZV6cGrupoId",gxold:"OV6cGrupoId",gxvar:"AV6cGrupoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cGrupoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cGrupoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCGRUPOID",gx.O.AV6cGrupoId,0)},c2v:function(){gx.O.AV6cGrupoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCGRUPOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"GROUP2",grid:0};
   GXValidFnc[18]={fld:"TABLE3",grid:0};
   GXValidFnc[22]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(21),gx.O.AV5LinkSelection,gx.O.AV11Linkselection_GXI)},c2v:function(){gx.O.AV11Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(21))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(21))}, gxvar_GXI:'AV11Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"GRUPOID",gxz:"Z244GrupoId",gxold:"O244GrupoId",gxvar:"A244GrupoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A244GrupoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z244GrupoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("GRUPOID",row || gx.fn.currentGridRowImpl(21),gx.O.A244GrupoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A244GrupoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("GRUPOID",row || gx.fn.currentGridRowImpl(21),'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z75UsuarioId",gxold:"O75UsuarioId",gxvar:"A75UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A75UsuarioId=Value},v2z:function(Value){gx.O.Z75UsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(21),gx.O.A75UsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A75UsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   this.AV6cGrupoId = 0 ;
   this.ZV6cGrupoId = 0 ;
   this.OV6cGrupoId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z244GrupoId = 0 ;
   this.O244GrupoId = 0 ;
   this.Z75UsuarioId = "" ;
   this.O75UsuarioId = "" ;
   this.AV6cGrupoId = 0 ;
   this.AV7pUsuarioId = "" ;
   this.AV8pGrupoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A244GrupoId = 0 ;
   this.A75UsuarioId = "" ;
   this.Events = {"e131jd2_client": ["ENTER", true] ,"e141jd1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoId',fld:'vCGRUPOID'},{av:'AV7pUsuarioId',fld:'vPUSUARIOID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A244GrupoId',fld:'GRUPOID'}],[{av:'AV8pGrupoId',fld:'vPGRUPOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoId',fld:'vCGRUPOID'},{av:'AV7pUsuarioId',fld:'vPUSUARIOID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoId',fld:'vCGRUPOID'},{av:'AV7pUsuarioId',fld:'vPUSUARIOID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoId',fld:'vCGRUPOID'},{av:'AV7pUsuarioId',fld:'vPUSUARIOID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cGrupoId',fld:'vCGRUPOID'},{av:'AV7pUsuarioId',fld:'vPUSUARIOID',hsh:true}],[]];
   this.setVCMap("AV7pUsuarioId", "vPUSUARIOID", 0, "char");
   this.setVCMap("AV8pGrupoId", "vPGRUPOID", 0, "int");
   this.setVCMap("AV7pUsuarioId", "vPUSUARIOID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar({rfrVar:"AV7pUsuarioId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0231());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:44:54.98
*/
gx.evt.autoSkip = false;
gx.define('gx0kn0', false, function () {
   this.ServerClass =  "gx0kn0" ;
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
      this.AV8pUsuarioDBId=gx.fn.getControlValue("vPUSUARIODBID") ;
   };
   this.e1323w2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1423w1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,28,29,32];
   this.GXLastCtrlId =32;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0kn0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(9920,28,"USUARIODBID","DBId","","UsuarioDBId","svchar",0,"px",100,80,"left",null,[],9920,"UsuarioDBId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9933,29,"USUARIODBOID","DBOid","Selecionar","UsuarioDBOid","int",0,"px",10,10,"right",null,[],9933,"UsuarioDBOid",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKUSUARIODBID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIODBID",gxz:"ZV6cUsuarioDBId",gxold:"OV6cUsuarioDBId",gxvar:"AV6cUsuarioDBId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cUsuarioDBId=Value},v2z:function(Value){gx.O.ZV6cUsuarioDBId=Value},v2c:function(){gx.fn.setControlValue("vCUSUARIODBID",gx.O.AV6cUsuarioDBId,0)},c2v:function(){gx.O.AV6cUsuarioDBId=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIODBID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKUSUARIODBOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIODBOID",gxz:"ZV7cUsuarioDBOid",gxold:"OV7cUsuarioDBOid",gxvar:"AV7cUsuarioDBOid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cUsuarioDBOid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cUsuarioDBOid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCUSUARIODBOID",gx.O.AV7cUsuarioDBOid,0)},c2v:function(){gx.O.AV7cUsuarioDBOid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCUSUARIODBOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"GROUP2",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV11Linkselection_GXI)},c2v:function(){gx.O.AV11Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(26))}, gxvar_GXI:'AV11Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIODBID",gxz:"Z9920UsuarioDBId",gxold:"O9920UsuarioDBId",gxvar:"A9920UsuarioDBId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9920UsuarioDBId=Value},v2z:function(Value){gx.O.Z9920UsuarioDBId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIODBID",row || gx.fn.currentGridRowImpl(26),gx.O.A9920UsuarioDBId,0)},c2v:function(){gx.O.A9920UsuarioDBId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIODBID",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIODBOID",gxz:"Z9933UsuarioDBOid",gxold:"O9933UsuarioDBOid",gxvar:"A9933UsuarioDBOid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9933UsuarioDBOid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9933UsuarioDBOid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("USUARIODBOID",row || gx.fn.currentGridRowImpl(26),gx.O.A9933UsuarioDBOid,0)},c2v:function(){gx.O.A9933UsuarioDBOid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("USUARIODBOID",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   this.AV6cUsuarioDBId = "" ;
   this.ZV6cUsuarioDBId = "" ;
   this.OV6cUsuarioDBId = "" ;
   this.AV7cUsuarioDBOid = 0 ;
   this.ZV7cUsuarioDBOid = 0 ;
   this.OV7cUsuarioDBOid = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z9920UsuarioDBId = "" ;
   this.O9920UsuarioDBId = "" ;
   this.Z9933UsuarioDBOid = 0 ;
   this.O9933UsuarioDBOid = 0 ;
   this.AV6cUsuarioDBId = "" ;
   this.AV7cUsuarioDBOid = 0 ;
   this.AV8pUsuarioDBId = "" ;
   this.AV5LinkSelection = "" ;
   this.A9920UsuarioDBId = "" ;
   this.A9933UsuarioDBOid = 0 ;
   this.Events = {"e1323w2_client": ["ENTER", true] ,"e1423w1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioDBId',fld:'vCUSUARIODBID'},{av:'AV7cUsuarioDBOid',fld:'vCUSUARIODBOID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A9920UsuarioDBId',fld:'USUARIODBID'}],[{av:'AV8pUsuarioDBId',fld:'vPUSUARIODBID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioDBId',fld:'vCUSUARIODBID'},{av:'AV7cUsuarioDBOid',fld:'vCUSUARIODBOID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioDBId',fld:'vCUSUARIODBID'},{av:'AV7cUsuarioDBOid',fld:'vCUSUARIODBOID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioDBId',fld:'vCUSUARIODBID'},{av:'AV7cUsuarioDBOid',fld:'vCUSUARIODBOID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cUsuarioDBId',fld:'vCUSUARIODBID'},{av:'AV7cUsuarioDBOid',fld:'vCUSUARIODBOID'}],[]];
   this.setVCMap("AV8pUsuarioDBId", "vPUSUARIODBID", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0kn0());

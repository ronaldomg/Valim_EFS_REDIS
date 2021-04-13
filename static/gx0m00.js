/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:46:38.43
*/
gx.evt.autoSkip = false;
gx.define('gx0m00', false, function () {
   this.ServerClass =  "gx0m00" ;
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
      this.AV8pRelatorioUsuarioNome=gx.fn.getControlValue("vPRELATORIOUSUARIONOME") ;
   };
   this.e1328u2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1428u1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,28,29,32];
   this.GXLastCtrlId =32;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0m00",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10755,28,"RELATORIOUSUARIONOME","Usuario Nome","","RelatorioUsuarioNome","svchar",0,"px",40,40,"left",null,[],10755,"RelatorioUsuarioNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10756,29,"RELATORIOUSUARIOEMAIL","Usuario Email","Selecionar","RelatorioUsuarioEmail","svchar",0,"px",60,60,"left",null,[],10756,"RelatorioUsuarioEmail",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKRELATORIOUSUARIONOME", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRELATORIOUSUARIONOME",gxz:"ZV6cRelatorioUsuarioNome",gxold:"OV6cRelatorioUsuarioNome",gxvar:"AV6cRelatorioUsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cRelatorioUsuarioNome=Value},v2z:function(Value){gx.O.ZV6cRelatorioUsuarioNome=Value},v2c:function(){gx.fn.setControlValue("vCRELATORIOUSUARIONOME",gx.O.AV6cRelatorioUsuarioNome,0)},c2v:function(){gx.O.AV6cRelatorioUsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("vCRELATORIOUSUARIONOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKRELATORIOUSUARIOEMAIL", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRELATORIOUSUARIOEMAIL",gxz:"ZV7cRelatorioUsuarioEmail",gxold:"OV7cRelatorioUsuarioEmail",gxvar:"AV7cRelatorioUsuarioEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cRelatorioUsuarioEmail=Value},v2z:function(Value){gx.O.ZV7cRelatorioUsuarioEmail=Value},v2c:function(){gx.fn.setControlValue("vCRELATORIOUSUARIOEMAIL",gx.O.AV7cRelatorioUsuarioEmail,0)},c2v:function(){gx.O.AV7cRelatorioUsuarioEmail=this.val()},val:function(){return gx.fn.getControlValue("vCRELATORIOUSUARIOEMAIL")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"GROUP2",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV11Linkselection_GXI)},c2v:function(){gx.O.AV11Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(26))}, gxvar_GXI:'AV11Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RELATORIOUSUARIONOME",gxz:"Z10755RelatorioUsuarioNome",gxold:"O10755RelatorioUsuarioNome",gxvar:"A10755RelatorioUsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10755RelatorioUsuarioNome=Value},v2z:function(Value){gx.O.Z10755RelatorioUsuarioNome=Value},v2c:function(row){gx.fn.setGridControlValue("RELATORIOUSUARIONOME",row || gx.fn.currentGridRowImpl(26),gx.O.A10755RelatorioUsuarioNome,0)},c2v:function(){gx.O.A10755RelatorioUsuarioNome=this.val()},val:function(row){return gx.fn.getGridControlValue("RELATORIOUSUARIONOME",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RELATORIOUSUARIOEMAIL",gxz:"Z10756RelatorioUsuarioEmail",gxold:"O10756RelatorioUsuarioEmail",gxvar:"A10756RelatorioUsuarioEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10756RelatorioUsuarioEmail=Value},v2z:function(Value){gx.O.Z10756RelatorioUsuarioEmail=Value},v2c:function(row){gx.fn.setGridControlValue("RELATORIOUSUARIOEMAIL",row || gx.fn.currentGridRowImpl(26),gx.O.A10756RelatorioUsuarioEmail,0)},c2v:function(){gx.O.A10756RelatorioUsuarioEmail=this.val()},val:function(row){return gx.fn.getGridControlValue("RELATORIOUSUARIOEMAIL",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   this.AV6cRelatorioUsuarioNome = "" ;
   this.ZV6cRelatorioUsuarioNome = "" ;
   this.OV6cRelatorioUsuarioNome = "" ;
   this.AV7cRelatorioUsuarioEmail = "" ;
   this.ZV7cRelatorioUsuarioEmail = "" ;
   this.OV7cRelatorioUsuarioEmail = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10755RelatorioUsuarioNome = "" ;
   this.O10755RelatorioUsuarioNome = "" ;
   this.Z10756RelatorioUsuarioEmail = "" ;
   this.O10756RelatorioUsuarioEmail = "" ;
   this.AV6cRelatorioUsuarioNome = "" ;
   this.AV7cRelatorioUsuarioEmail = "" ;
   this.AV8pRelatorioUsuarioNome = "" ;
   this.AV5LinkSelection = "" ;
   this.A10755RelatorioUsuarioNome = "" ;
   this.A10756RelatorioUsuarioEmail = "" ;
   this.Events = {"e1328u2_client": ["ENTER", true] ,"e1428u1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRelatorioUsuarioNome',fld:'vCRELATORIOUSUARIONOME'},{av:'AV7cRelatorioUsuarioEmail',fld:'vCRELATORIOUSUARIOEMAIL'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10755RelatorioUsuarioNome',fld:'RELATORIOUSUARIONOME'}],[{av:'AV8pRelatorioUsuarioNome',fld:'vPRELATORIOUSUARIONOME'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRelatorioUsuarioNome',fld:'vCRELATORIOUSUARIONOME'},{av:'AV7cRelatorioUsuarioEmail',fld:'vCRELATORIOUSUARIOEMAIL'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRelatorioUsuarioNome',fld:'vCRELATORIOUSUARIONOME'},{av:'AV7cRelatorioUsuarioEmail',fld:'vCRELATORIOUSUARIOEMAIL'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRelatorioUsuarioNome',fld:'vCRELATORIOUSUARIONOME'},{av:'AV7cRelatorioUsuarioEmail',fld:'vCRELATORIOUSUARIOEMAIL'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cRelatorioUsuarioNome',fld:'vCRELATORIOUSUARIONOME'},{av:'AV7cRelatorioUsuarioEmail',fld:'vCRELATORIOUSUARIOEMAIL'}],[]];
   this.setVCMap("AV8pRelatorioUsuarioNome", "vPRELATORIOUSUARIONOME", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0m00());

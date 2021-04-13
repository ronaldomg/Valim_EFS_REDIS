/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:24:37.82
*/
gx.evt.autoSkip = false;
gx.define('gx09e0', false, function () {
   this.ServerClass =  "gx09e0" ;
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
      this.AV8pIdiomaId=gx.fn.getIntegerValue("vPIDIOMAID",'.') ;
   };
   this.e131i32_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141i31_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,28,29,32];
   this.GXLastCtrlId =32;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx09e0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(124,28,"IDIOMAID","Código do Idioma do Acervo","","IdiomaId","int",0,"px",7,7,"right",null,[],124,"IdiomaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(46,29,"IDIOMADESCRICAO","Descrição do Idioma","Selecionar","IdiomaDescricao","svchar",0,"px",35,35,"left",null,[],46,"IdiomaDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKIDIOMAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCIDIOMAID",gxz:"ZV6cIdiomaId",gxold:"OV6cIdiomaId",gxvar:"AV6cIdiomaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cIdiomaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cIdiomaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDIOMAID",gx.O.AV6cIdiomaId,0)},c2v:function(){gx.O.AV6cIdiomaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDIOMAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKIDIOMADESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCIDIOMADESCRICAO",gxz:"ZV7cIdiomaDescricao",gxold:"OV7cIdiomaDescricao",gxvar:"AV7cIdiomaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cIdiomaDescricao=Value},v2z:function(Value){gx.O.ZV7cIdiomaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCIDIOMADESCRICAO",gx.O.AV7cIdiomaDescricao,0)},c2v:function(){gx.O.AV7cIdiomaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCIDIOMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"GROUP2",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV11Linkselection_GXI)},c2v:function(){gx.O.AV11Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(26))}, gxvar_GXI:'AV11Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"IDIOMAID",gxz:"Z124IdiomaId",gxold:"O124IdiomaId",gxvar:"A124IdiomaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A124IdiomaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z124IdiomaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("IDIOMAID",row || gx.fn.currentGridRowImpl(26),gx.O.A124IdiomaId,0)},c2v:function(){gx.O.A124IdiomaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("IDIOMAID",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"IDIOMADESCRICAO",gxz:"Z46IdiomaDescricao",gxold:"O46IdiomaDescricao",gxvar:"A46IdiomaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A46IdiomaDescricao=Value},v2z:function(Value){gx.O.Z46IdiomaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("IDIOMADESCRICAO",row || gx.fn.currentGridRowImpl(26),gx.O.A46IdiomaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A46IdiomaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("IDIOMADESCRICAO",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   this.AV6cIdiomaId = 0 ;
   this.ZV6cIdiomaId = 0 ;
   this.OV6cIdiomaId = 0 ;
   this.AV7cIdiomaDescricao = "" ;
   this.ZV7cIdiomaDescricao = "" ;
   this.OV7cIdiomaDescricao = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z124IdiomaId = 0 ;
   this.O124IdiomaId = 0 ;
   this.Z46IdiomaDescricao = "" ;
   this.O46IdiomaDescricao = "" ;
   this.AV6cIdiomaId = 0 ;
   this.AV7cIdiomaDescricao = "" ;
   this.AV8pIdiomaId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A124IdiomaId = 0 ;
   this.A46IdiomaDescricao = "" ;
   this.Events = {"e131i32_client": ["ENTER", true] ,"e141i31_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIdiomaId',fld:'vCIDIOMAID'},{av:'AV7cIdiomaDescricao',fld:'vCIDIOMADESCRICAO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A124IdiomaId',fld:'IDIOMAID'}],[{av:'AV8pIdiomaId',fld:'vPIDIOMAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIdiomaId',fld:'vCIDIOMAID'},{av:'AV7cIdiomaDescricao',fld:'vCIDIOMADESCRICAO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIdiomaId',fld:'vCIDIOMAID'},{av:'AV7cIdiomaDescricao',fld:'vCIDIOMADESCRICAO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIdiomaId',fld:'vCIDIOMAID'},{av:'AV7cIdiomaDescricao',fld:'vCIDIOMADESCRICAO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIdiomaId',fld:'vCIDIOMAID'},{av:'AV7cIdiomaDescricao',fld:'vCIDIOMADESCRICAO'}],[]];
   this.setVCMap("AV8pIdiomaId", "vPIDIOMAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx09e0());

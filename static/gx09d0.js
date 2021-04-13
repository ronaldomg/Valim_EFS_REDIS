/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:24:13.92
*/
gx.evt.autoSkip = false;
gx.define('gx09d0', false, function () {
   this.ServerClass =  "gx09d0" ;
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
      this.AV11pEditoraId=gx.fn.getIntegerValue("vPEDITORAID",'.') ;
   };
   this.e131hr2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141hr1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,49];
   this.GXLastCtrlId =49;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx09d0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(118,43,"EDITORAID","Cód Editora","","EditoraId","int",0,"px",7,7,"right",null,[],118,"EditoraId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(43,44,"EDITORADESCRICAO","Descrição da Editora","Selecionar","EditoraDescricao","svchar",0,"px",35,35,"left",null,[],43,"EditoraDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(184,45,"EDITORASITE","Site","","EditoraSite","svchar",0,"px",60,60,"left",null,[],184,"EditoraSite",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(147,46,"CIDADESID","Cidade","","CidadesId","int",0,"px",8,8,"right",null,[],147,"CidadesId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKEDITORAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEDITORAID",gxz:"ZV6cEditoraId",gxold:"OV6cEditoraId",gxvar:"AV6cEditoraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEditoraId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cEditoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCEDITORAID",gx.O.AV6cEditoraId,0)},c2v:function(){gx.O.AV6cEditoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCEDITORAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKEDITORADESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEDITORADESCRICAO",gxz:"ZV7cEditoraDescricao",gxold:"OV7cEditoraDescricao",gxvar:"AV7cEditoraDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cEditoraDescricao=Value},v2z:function(Value){gx.O.ZV7cEditoraDescricao=Value},v2c:function(){gx.fn.setControlValue("vCEDITORADESCRICAO",gx.O.AV7cEditoraDescricao,0)},c2v:function(){gx.O.AV7cEditoraDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCEDITORADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKEDITORASITE", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEDITORASITE",gxz:"ZV8cEditoraSite",gxold:"OV8cEditoraSite",gxvar:"AV8cEditoraSite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cEditoraSite=Value},v2z:function(Value){gx.O.ZV8cEditoraSite=Value},v2c:function(){gx.fn.setControlValue("vCEDITORASITE",gx.O.AV8cEditoraSite,0)},c2v:function(){gx.O.AV8cEditoraSite=this.val()},val:function(){return gx.fn.getControlValue("vCEDITORASITE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKEDITORAEMAIL", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEDITORAEMAIL",gxz:"ZV9cEditoraEmail",gxold:"OV9cEditoraEmail",gxvar:"AV9cEditoraEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cEditoraEmail=Value},v2z:function(Value){gx.O.ZV9cEditoraEmail=Value},v2c:function(){gx.fn.setControlValue("vCEDITORAEMAIL",gx.O.AV9cEditoraEmail,0)},c2v:function(){gx.O.AV9cEditoraEmail=this.val()},val:function(){return gx.fn.getControlValue("vCEDITORAEMAIL")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCIDADESID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCIDADESID",gxz:"ZV10cCidadesId",gxold:"OV10cCidadesId",gxvar:"AV10cCidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cCidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCIDADESID",gx.O.AV10cCidadesId,0)},c2v:function(){gx.O.AV10cCidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EDITORAID",gxz:"Z118EditoraId",gxold:"O118EditoraId",gxvar:"A118EditoraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A118EditoraId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z118EditoraId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("EDITORAID",row || gx.fn.currentGridRowImpl(41),gx.O.A118EditoraId,0)},c2v:function(){gx.O.A118EditoraId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("EDITORAID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EDITORADESCRICAO",gxz:"Z43EditoraDescricao",gxold:"O43EditoraDescricao",gxvar:"A43EditoraDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A43EditoraDescricao=Value},v2z:function(Value){gx.O.Z43EditoraDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("EDITORADESCRICAO",row || gx.fn.currentGridRowImpl(41),gx.O.A43EditoraDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A43EditoraDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("EDITORADESCRICAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EDITORASITE",gxz:"Z184EditoraSite",gxold:"O184EditoraSite",gxvar:"A184EditoraSite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A184EditoraSite=Value},v2z:function(Value){gx.O.Z184EditoraSite=Value},v2c:function(row){gx.fn.setGridControlValue("EDITORASITE",row || gx.fn.currentGridRowImpl(41),gx.O.A184EditoraSite,0)},c2v:function(){gx.O.A184EditoraSite=this.val()},val:function(row){return gx.fn.getGridControlValue("EDITORASITE",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z147CidadesId",gxold:"O147CidadesId",gxvar:"A147CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A147CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z147CidadesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CIDADESID",row || gx.fn.currentGridRowImpl(41),gx.O.A147CidadesId,0)},c2v:function(){gx.O.A147CidadesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CIDADESID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABLE4",grid:0};
   this.AV6cEditoraId = 0 ;
   this.ZV6cEditoraId = 0 ;
   this.OV6cEditoraId = 0 ;
   this.AV7cEditoraDescricao = "" ;
   this.ZV7cEditoraDescricao = "" ;
   this.OV7cEditoraDescricao = "" ;
   this.AV8cEditoraSite = "" ;
   this.ZV8cEditoraSite = "" ;
   this.OV8cEditoraSite = "" ;
   this.AV9cEditoraEmail = "" ;
   this.ZV9cEditoraEmail = "" ;
   this.OV9cEditoraEmail = "" ;
   this.AV10cCidadesId = 0 ;
   this.ZV10cCidadesId = 0 ;
   this.OV10cCidadesId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z118EditoraId = 0 ;
   this.O118EditoraId = 0 ;
   this.Z43EditoraDescricao = "" ;
   this.O43EditoraDescricao = "" ;
   this.Z184EditoraSite = "" ;
   this.O184EditoraSite = "" ;
   this.Z147CidadesId = 0 ;
   this.O147CidadesId = 0 ;
   this.AV6cEditoraId = 0 ;
   this.AV7cEditoraDescricao = "" ;
   this.AV8cEditoraSite = "" ;
   this.AV9cEditoraEmail = "" ;
   this.AV10cCidadesId = 0 ;
   this.AV11pEditoraId = 0 ;
   this.A185EditoraEmail = "" ;
   this.AV5LinkSelection = "" ;
   this.A118EditoraId = 0 ;
   this.A43EditoraDescricao = "" ;
   this.A184EditoraSite = "" ;
   this.A147CidadesId = 0 ;
   this.Events = {"e131hr2_client": ["ENTER", true] ,"e141hr1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEditoraId',fld:'vCEDITORAID'},{av:'AV7cEditoraDescricao',fld:'vCEDITORADESCRICAO'},{av:'AV8cEditoraSite',fld:'vCEDITORASITE'},{av:'AV9cEditoraEmail',fld:'vCEDITORAEMAIL'},{av:'AV10cCidadesId',fld:'vCCIDADESID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A118EditoraId',fld:'EDITORAID'}],[{av:'AV11pEditoraId',fld:'vPEDITORAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEditoraId',fld:'vCEDITORAID'},{av:'AV7cEditoraDescricao',fld:'vCEDITORADESCRICAO'},{av:'AV8cEditoraSite',fld:'vCEDITORASITE'},{av:'AV9cEditoraEmail',fld:'vCEDITORAEMAIL'},{av:'AV10cCidadesId',fld:'vCCIDADESID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEditoraId',fld:'vCEDITORAID'},{av:'AV7cEditoraDescricao',fld:'vCEDITORADESCRICAO'},{av:'AV8cEditoraSite',fld:'vCEDITORASITE'},{av:'AV9cEditoraEmail',fld:'vCEDITORAEMAIL'},{av:'AV10cCidadesId',fld:'vCCIDADESID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEditoraId',fld:'vCEDITORAID'},{av:'AV7cEditoraDescricao',fld:'vCEDITORADESCRICAO'},{av:'AV8cEditoraSite',fld:'vCEDITORASITE'},{av:'AV9cEditoraEmail',fld:'vCEDITORAEMAIL'},{av:'AV10cCidadesId',fld:'vCCIDADESID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEditoraId',fld:'vCEDITORAID'},{av:'AV7cEditoraDescricao',fld:'vCEDITORADESCRICAO'},{av:'AV8cEditoraSite',fld:'vCEDITORASITE'},{av:'AV9cEditoraEmail',fld:'vCEDITORAEMAIL'},{av:'AV10cCidadesId',fld:'vCCIDADESID'}],[]];
   this.setVCMap("AV11pEditoraId", "vPEDITORAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx09d0());

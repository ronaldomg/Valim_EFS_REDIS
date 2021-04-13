/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:24:3.4
*/
gx.evt.autoSkip = false;
gx.define('gx09c0', false, function () {
   this.ServerClass =  "gx09c0" ;
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
      this.AV8pClassificacaoLiterariaId=gx.fn.getIntegerValue("vPCLASSIFICACAOLITERARIAID",'.') ;
   };
   this.e131hj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141hj1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,28,29,32];
   this.GXLastCtrlId =32;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx09c0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(119,28,"CLASSIFICACAOLITERARIAID","Classificação Literária","","ClassificacaoLiterariaId","int",0,"px",7,7,"right",null,[],119,"ClassificacaoLiterariaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(44,29,"CLASSIFICACAOLITERARIADESCRICA","Descrição da Classificação Literária","Selecionar","ClassificacaoLiterariaDescrica","svchar",0,"px",35,35,"left",null,[],44,"ClassificacaoLiterariaDescrica",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCLASSIFICACAOLITERARIAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCLASSIFICACAOLITERARIAID",gxz:"ZV6cClassificacaoLiterariaId",gxold:"OV6cClassificacaoLiterariaId",gxvar:"AV6cClassificacaoLiterariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cClassificacaoLiterariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cClassificacaoLiterariaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCLASSIFICACAOLITERARIAID",gx.O.AV6cClassificacaoLiterariaId,0)},c2v:function(){gx.O.AV6cClassificacaoLiterariaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCLASSIFICACAOLITERARIAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCLASSIFICACAOLITERARIADESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCLASSIFICACAOLITERARIADESCRICAO",gxz:"ZV7cClassificacaoLiterariaDescricao",gxold:"OV7cClassificacaoLiterariaDescricao",gxvar:"AV7cClassificacaoLiterariaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cClassificacaoLiterariaDescricao=Value},v2z:function(Value){gx.O.ZV7cClassificacaoLiterariaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCLASSIFICACAOLITERARIADESCRICAO",gx.O.AV7cClassificacaoLiterariaDescricao,0)},c2v:function(){gx.O.AV7cClassificacaoLiterariaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCLASSIFICACAOLITERARIADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"GROUP2",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV11Linkselection_GXI)},c2v:function(){gx.O.AV11Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(26))}, gxvar_GXI:'AV11Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CLASSIFICACAOLITERARIAID",gxz:"Z119ClassificacaoLiterariaId",gxold:"O119ClassificacaoLiterariaId",gxvar:"A119ClassificacaoLiterariaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A119ClassificacaoLiterariaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z119ClassificacaoLiterariaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CLASSIFICACAOLITERARIAID",row || gx.fn.currentGridRowImpl(26),gx.O.A119ClassificacaoLiterariaId,0)},c2v:function(){gx.O.A119ClassificacaoLiterariaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CLASSIFICACAOLITERARIAID",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CLASSIFICACAOLITERARIADESCRICA",gxz:"Z44ClassificacaoLiterariaDescrica",gxold:"O44ClassificacaoLiterariaDescrica",gxvar:"A44ClassificacaoLiterariaDescrica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A44ClassificacaoLiterariaDescrica=Value},v2z:function(Value){gx.O.Z44ClassificacaoLiterariaDescrica=Value},v2c:function(row){gx.fn.setGridControlValue("CLASSIFICACAOLITERARIADESCRICA",row || gx.fn.currentGridRowImpl(26),gx.O.A44ClassificacaoLiterariaDescrica,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A44ClassificacaoLiterariaDescrica=this.val()},val:function(row){return gx.fn.getGridControlValue("CLASSIFICACAOLITERARIADESCRICA",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   this.AV6cClassificacaoLiterariaId = 0 ;
   this.ZV6cClassificacaoLiterariaId = 0 ;
   this.OV6cClassificacaoLiterariaId = 0 ;
   this.AV7cClassificacaoLiterariaDescricao = "" ;
   this.ZV7cClassificacaoLiterariaDescricao = "" ;
   this.OV7cClassificacaoLiterariaDescricao = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z119ClassificacaoLiterariaId = 0 ;
   this.O119ClassificacaoLiterariaId = 0 ;
   this.Z44ClassificacaoLiterariaDescrica = "" ;
   this.O44ClassificacaoLiterariaDescrica = "" ;
   this.AV6cClassificacaoLiterariaId = 0 ;
   this.AV7cClassificacaoLiterariaDescricao = "" ;
   this.AV8pClassificacaoLiterariaId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A119ClassificacaoLiterariaId = 0 ;
   this.A44ClassificacaoLiterariaDescrica = "" ;
   this.Events = {"e131hj2_client": ["ENTER", true] ,"e141hj1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cClassificacaoLiterariaId',fld:'vCCLASSIFICACAOLITERARIAID'},{av:'AV7cClassificacaoLiterariaDescricao',fld:'vCCLASSIFICACAOLITERARIADESCRICAO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A119ClassificacaoLiterariaId',fld:'CLASSIFICACAOLITERARIAID'}],[{av:'AV8pClassificacaoLiterariaId',fld:'vPCLASSIFICACAOLITERARIAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cClassificacaoLiterariaId',fld:'vCCLASSIFICACAOLITERARIAID'},{av:'AV7cClassificacaoLiterariaDescricao',fld:'vCCLASSIFICACAOLITERARIADESCRICAO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cClassificacaoLiterariaId',fld:'vCCLASSIFICACAOLITERARIAID'},{av:'AV7cClassificacaoLiterariaDescricao',fld:'vCCLASSIFICACAOLITERARIADESCRICAO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cClassificacaoLiterariaId',fld:'vCCLASSIFICACAOLITERARIAID'},{av:'AV7cClassificacaoLiterariaDescricao',fld:'vCCLASSIFICACAOLITERARIADESCRICAO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cClassificacaoLiterariaId',fld:'vCCLASSIFICACAOLITERARIAID'},{av:'AV7cClassificacaoLiterariaDescricao',fld:'vCCLASSIFICACAOLITERARIADESCRICAO'}],[]];
   this.setVCMap("AV8pClassificacaoLiterariaId", "vPCLASSIFICACAOLITERARIAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx09c0());

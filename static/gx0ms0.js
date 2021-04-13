/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:47:39.14
*/
gx.evt.autoSkip = false;
gx.define('gx0ms0', false, function () {
   this.ServerClass =  "gx0ms0" ;
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
      this.AV8pCNAE=gx.fn.getControlValue("vPCNAE") ;
   };
   this.e132dt2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142dt1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,23,27,28,29,32];
   this.GXLastCtrlId =32;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ms0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",27,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11183,28,"CNAE","CNAE","","CNAE","char",0,"px",10,10,"left",null,[],11183,"CNAE",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11184,29,"CNAEDESCRICAO","Descrição","Selecionar","CNAEDescricao","svchar",0,"px",100,80,"left",null,[],11184,"CNAEDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCNAE", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCNAE",gxz:"ZV6cCNAE",gxold:"OV6cCNAE",gxvar:"AV6cCNAE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCNAE=Value},v2z:function(Value){gx.O.ZV6cCNAE=Value},v2c:function(){gx.fn.setControlValue("vCCNAE",gx.O.AV6cCNAE,0)},c2v:function(){gx.O.AV6cCNAE=this.val()},val:function(){return gx.fn.getControlValue("vCCNAE")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCNAEDESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCNAEDESCRICAO",gxz:"ZV7cCNAEDescricao",gxold:"OV7cCNAEDescricao",gxvar:"AV7cCNAEDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCNAEDescricao=Value},v2z:function(Value){gx.O.ZV7cCNAEDescricao=Value},v2c:function(){gx.fn.setControlValue("vCCNAEDESCRICAO",gx.O.AV7cCNAEDescricao,0)},c2v:function(){gx.O.AV7cCNAEDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCCNAEDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"GROUP2",grid:0};
   GXValidFnc[23]={fld:"TABLE3",grid:0};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26),gx.O.AV5LinkSelection,gx.O.AV11Linkselection_GXI)},c2v:function(){gx.O.AV11Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(26))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(26))}, gxvar_GXI:'AV11Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CNAE",gxz:"Z11183CNAE",gxold:"O11183CNAE",gxvar:"A11183CNAE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11183CNAE=Value},v2z:function(Value){gx.O.Z11183CNAE=Value},v2c:function(row){gx.fn.setGridControlValue("CNAE",row || gx.fn.currentGridRowImpl(26),gx.O.A11183CNAE,0)},c2v:function(){gx.O.A11183CNAE=this.val()},val:function(row){return gx.fn.getGridControlValue("CNAE",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CNAEDESCRICAO",gxz:"Z11184CNAEDescricao",gxold:"O11184CNAEDescricao",gxvar:"A11184CNAEDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11184CNAEDescricao=Value},v2z:function(Value){gx.O.Z11184CNAEDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CNAEDESCRICAO",row || gx.fn.currentGridRowImpl(26),gx.O.A11184CNAEDescricao,0)},c2v:function(){gx.O.A11184CNAEDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CNAEDESCRICAO",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   this.AV6cCNAE = "" ;
   this.ZV6cCNAE = "" ;
   this.OV6cCNAE = "" ;
   this.AV7cCNAEDescricao = "" ;
   this.ZV7cCNAEDescricao = "" ;
   this.OV7cCNAEDescricao = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11183CNAE = "" ;
   this.O11183CNAE = "" ;
   this.Z11184CNAEDescricao = "" ;
   this.O11184CNAEDescricao = "" ;
   this.AV6cCNAE = "" ;
   this.AV7cCNAEDescricao = "" ;
   this.AV8pCNAE = "" ;
   this.AV5LinkSelection = "" ;
   this.A11183CNAE = "" ;
   this.A11184CNAEDescricao = "" ;
   this.Events = {"e132dt2_client": ["ENTER", true] ,"e142dt1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11183CNAE',fld:'CNAE'}],[{av:'AV8pCNAE',fld:'vPCNAE'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCNAE',fld:'vCCNAE'},{av:'AV7cCNAEDescricao',fld:'vCCNAEDESCRICAO'}],[]];
   this.setVCMap("AV8pCNAE", "vPCNAE", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ms0());

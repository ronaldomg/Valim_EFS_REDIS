/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:4:51.61
*/
gx.evt.autoSkip = false;
gx.define('hmodalfiltroservico', false, function () {
   this.ServerClass =  "hmodalfiltroservico" ;
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
      this.AV8ServicoCodigoCollection=gx.fn.getControlValue("vSERVICOCODIGOCOLLECTION") ;
      this.AV18auxServicoCodigoCollection=gx.fn.getControlValue("vAUXSERVICOCODIGOCOLLECTION") ;
   };
   this.e172a92_client=function()
   {
      this.executeServerEvent("'SEL'", true, arguments[0], false, false);
   };
   this.e112a92_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e122a92_client=function()
   {
      this.executeServerEvent("'SELECIONARTODOS'", false, null, false, false);
   };
   this.e132a92_client=function()
   {
      this.executeServerEvent("'LIMPAR'", false, null, false, false);
   };
   this.e182a91_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,7,8,9,10,11,16];
   this.GXLastCtrlId =16;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",6,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hmodalfiltroservico",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8626,7,"SERVICOCODIGO","Cod","","ServicoCodigo","int",0,"px",4,4,"right",null,[],8626,"ServicoCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(8622,8,"SERVICODESCRICAO","Servico Descricao","","ServicoDescricao","svchar",0,"px",60,60,"left",null,[],8622,"ServicoDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Sel","vSEL",9,0,"px",17,"px","e172a92_client","","Sel","Image","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK1", format:2,grid:0};
   GXValidFnc[7]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOCODIGO",gxz:"Z8626ServicoCodigo",gxold:"O8626ServicoCodigo",gxvar:"A8626ServicoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8626ServicoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8626ServicoCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SERVICOCODIGO",row || gx.fn.currentGridRowImpl(6),gx.O.A8626ServicoCodigo,0)},c2v:function(){gx.O.A8626ServicoCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SERVICOCODIGO",row || gx.fn.currentGridRowImpl(6),'.')},nac:gx.falseFn};
   GXValidFnc[8]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SERVICODESCRICAO",gxz:"Z8622ServicoDescricao",gxold:"O8622ServicoDescricao",gxvar:"A8622ServicoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8622ServicoDescricao=Value},v2z:function(Value){gx.O.Z8622ServicoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("SERVICODESCRICAO",row || gx.fn.currentGridRowImpl(6),gx.O.A8622ServicoDescricao,0)},c2v:function(){gx.O.A8622ServicoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("SERVICODESCRICAO",row || gx.fn.currentGridRowImpl(6))},nac:gx.falseFn};
   GXValidFnc[9]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:6,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSEL",gxz:"ZV10Sel",gxold:"OV10Sel",gxvar:"AV10Sel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV10Sel=Value},v2z:function(Value){gx.O.ZV10Sel=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vSEL",row || gx.fn.currentGridRowImpl(6),gx.O.AV10Sel,gx.O.AV22Sel_GXI)},c2v:function(){gx.O.AV22Sel_GXI=this.val_GXI();gx.O.AV10Sel=this.val()},val:function(row){return gx.fn.getGridControlValue("vSEL",row || gx.fn.currentGridRowImpl(6))},val_GXI:function(row){return gx.fn.getGridControlValue("vSEL_GXI",row || gx.fn.currentGridRowImpl(6))}, gxvar_GXI:'AV22Sel_GXI',nac:gx.falseFn};
   GXValidFnc[10]={fld:"TEXTBLOCK2", format:2,grid:0};
   GXValidFnc[11]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTODOSHTML",gxz:"ZV19todosHtml",gxold:"OV19todosHtml",gxvar:"AV19todosHtml",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19todosHtml=Value},v2z:function(Value){gx.O.ZV19todosHtml=Value},v2c:function(){gx.fn.setControlValue("vTODOSHTML",gx.O.AV19todosHtml,1);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV19todosHtml=this.val()},val:function(){return gx.fn.getControlValue("vTODOSHTML")},nac:gx.falseFn};
   this.declareDomainHdlr( 11 , function() {
   });
   GXValidFnc[16]={lvl:0,type:"vchar",len:2097152,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHTML",gxz:"ZV5html",gxold:"OV5html",gxvar:"AV5html",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5html=Value},v2z:function(Value){gx.O.ZV5html=Value},v2c:function(){gx.fn.setControlValue("vHTML",gx.O.AV5html,1);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV5html=this.val()},val:function(){return gx.fn.getControlValue("vHTML")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   this.Z8626ServicoCodigo = 0 ;
   this.O8626ServicoCodigo = 0 ;
   this.Z8622ServicoDescricao = "" ;
   this.O8622ServicoDescricao = "" ;
   this.ZV10Sel = "" ;
   this.OV10Sel = "" ;
   this.AV19todosHtml = "" ;
   this.ZV19todosHtml = "" ;
   this.OV19todosHtml = "" ;
   this.AV5html = "" ;
   this.ZV5html = "" ;
   this.OV5html = "" ;
   this.AV19todosHtml = "" ;
   this.AV5html = "" ;
   this.A8626ServicoCodigo = 0 ;
   this.A8622ServicoDescricao = "" ;
   this.AV10Sel = "" ;
   this.AV8ServicoCodigoCollection = [ ] ;
   this.AV18auxServicoCodigoCollection = [ ] ;
   this.Events = {"e172a92_client": ["'SEL'", true] ,"e112a92_client": ["ENTER", true] ,"e122a92_client": ["'SELECIONARTODOS'", true] ,"e132a92_client": ["'LIMPAR'", true] ,"e182a91_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV8ServicoCodigoCollection',fld:'vSERVICOCODIGOCOLLECTION'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV18auxServicoCodigoCollection',fld:'vAUXSERVICOCODIGOCOLLECTION'},{av:'AV5html',fld:'vHTML'}],[{av:'gx.fn.getCtrlProperty("vHTML","Visible")',ctrl:'vHTML',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTODOSHTML","Visible")',ctrl:'vTODOSHTML',prop:'Visible'},{av:'AV18auxServicoCodigoCollection',fld:'vAUXSERVICOCODIGOCOLLECTION'},{av:'AV15empresaid',fld:'vEMPRESAID'},{av:'AV8ServicoCodigoCollection',fld:'vSERVICOCODIGOCOLLECTION'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV18auxServicoCodigoCollection',fld:'vAUXSERVICOCODIGOCOLLECTION'},{av:'AV8ServicoCodigoCollection',fld:'vSERVICOCODIGOCOLLECTION'}],[{av:'AV18auxServicoCodigoCollection',fld:'vAUXSERVICOCODIGOCOLLECTION'},{av:'AV19todosHtml',fld:'vTODOSHTML'},{av:'AV10Sel',fld:'vSEL'},{av:'AV23GXV1',fld:'vGXV1'},{av:'AV7ServicoCodigo',fld:'vSERVICOCODIGO'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV8ServicoCodigoCollection',fld:'vSERVICOCODIGOCOLLECTION'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'}],[{av:'AV10Sel',fld:'vSEL'},{av:'AV24GXV2',fld:'vGXV2'},{av:'AV7ServicoCodigo',fld:'vSERVICOCODIGO'}]];
   this.EvtParms["'SEL'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV5html',fld:'vHTML'},{av:'AV8ServicoCodigoCollection',fld:'vSERVICOCODIGOCOLLECTION'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV18auxServicoCodigoCollection',fld:'vAUXSERVICOCODIGOCOLLECTION'}],[{av:'AV8ServicoCodigoCollection',fld:'vSERVICOCODIGOCOLLECTION'},{av:'AV12isNew',fld:'vISNEW'},{av:'AV13i',fld:'vI'},{av:'AV25GXV3',fld:'vGXV3'},{av:'AV7ServicoCodigo',fld:'vSERVICOCODIGO'},{av:'AV10Sel',fld:'vSEL'},{av:'AV5html',fld:'vHTML'}]];
   this.EvtParms["ENTER"] = [[{av:'AV5html',fld:'vHTML'}],[]];
   this.EvtParms["'SELECIONARTODOS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV5html',fld:'vHTML'},{av:'AV8ServicoCodigoCollection',fld:'vSERVICOCODIGOCOLLECTION'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV18auxServicoCodigoCollection',fld:'vAUXSERVICOCODIGOCOLLECTION'},{av:'AV19todosHtml',fld:'vTODOSHTML'}],[{av:'AV5html',fld:'vHTML'}]];
   this.EvtParms["'LIMPAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV5html',fld:'vHTML'},{av:'AV8ServicoCodigoCollection',fld:'vSERVICOCODIGOCOLLECTION'},{av:'A8626ServicoCodigo',fld:'SERVICOCODIGO'},{av:'AV18auxServicoCodigoCollection',fld:'vAUXSERVICOCODIGOCOLLECTION'}],[{av:'AV5html',fld:'vHTML'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV8ServicoCodigoCollection", "vSERVICOCODIGOCOLLECTION", 0, "Collint");
   this.setVCMap("AV18auxServicoCodigoCollection", "vAUXSERVICOCODIGOCOLLECTION", 0, "Collint");
   this.setVCMap("AV8ServicoCodigoCollection", "vSERVICOCODIGOCOLLECTION", 0, "Collint");
   this.setVCMap("AV18auxServicoCodigoCollection", "vAUXSERVICOCODIGOCOLLECTION", 0, "Collint");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV8ServicoCodigoCollection"});
   GridContainer.addRefreshingVar({rfrVar:"A8626ServicoCodigo", rfrProp:"Value", gxAttId:"8626"});
   GridContainer.addRefreshingVar({rfrVar:"AV18auxServicoCodigoCollection"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hmodalfiltroservico());

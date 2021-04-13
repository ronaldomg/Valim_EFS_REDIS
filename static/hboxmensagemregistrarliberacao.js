/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 0:47:20.83
*/
gx.evt.autoSkip = false;
gx.define('hboxmensagemregistrarliberacao', true, function (CmpContext) {
   this.ServerClass =  "hboxmensagemregistrarliberacao" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV10SdtBox=gx.fn.getControlValue("vSDTBOX") ;
      this.A75UsuarioId=gx.fn.getControlValue("USUARIOID") ;
      this.A219UsuarioNome=gx.fn.getControlValue("USUARIONOME") ;
   };
   this.e11lc2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e12lc2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e16lc2_client=function()
   {
      this.executeServerEvent("'ABRIRSOLICIPERMISSAO'", true, arguments[0], false, false);
   };
   this.e13lc2_client=function()
   {
      this.executeServerEvent("'LIBERARTODOS'", true, null, false, false);
   };
   this.e17lc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e18lc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,7,13,16,17,20,21,23,26,29,31,33];
   this.GXLastCtrlId =33;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",10,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hboxmensagemregistrarliberacao",[],true,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","left","","","","","","","","");
   Grid1Container.startTable("Table2",13,"180px");
   Grid1Container.addHtmlCode("<tbody>");
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","","","","","","","2","","");
   Grid1Container.addTextBlock('TEXTBLOCK1',null);
   Grid1Container.addSingleLineEdit("Nmaux",17,"vNMAUX","","","NmAux","svchar",18,"chr",18,18,"left",null,[],"Nmaux","NmAux",true,0,false,false,"Attribute",1,"");
   Grid1Container.endCell();
   Grid1Container.endRow();
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","","","","","","","2","","");
   Grid1Container.addTextBlock('TEXTBLOCK2',null);
   Grid1Container.addSingleLineEdit("Permissaoconcdatahorasol",21,"vPERMISSAOCONCDATAHORASOL","","","PermissaoConcDataHoraSol","dtime",16,"chr",16,16,"right",null,[],"Permissaoconcdatahorasol","PermissaoConcDataHoraSol",true,5,false,false,"Attribute",1,"");
   Grid1Container.addHtmlCode("&nbsp; ");
   Grid1Container.addBitmap("Imgliberar","IMGLIBERAR",22,0,"px",0,"px","e16lc2_client","","Autorizar/Recusar Solicitação","Image","");
   Grid1Container.addSingleLineEdit("Permissaoconcnoagrupamentogrid",23,"vPERMISSAOCONCNOAGRUPAMENTOGRID","","","PermissaoConcNoAgrupamentoGrid","int",7,"chr",7,7,"right",null,[],"Permissaoconcnoagrupamentogrid","PermissaoConcNoAgrupamentoGrid",true,0,false,false,"Attribute",1,"");
   Grid1Container.endCell();
   Grid1Container.endRow();
   Grid1Container.addHtmlCode("</tbody>");
   Grid1Container.endTable();
   Grid1Container.endCell();
   Grid1Container.endRow();
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TABLE4",grid:0};
   GXValidFnc[13]={fld:"TABLE2",grid:10};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:10};
   GXValidFnc[17]={lvl:2,type:"svchar",len:18,dec:0,sign:false,ro:0,isacc:0,grid:10,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNMAUX",gxz:"ZV5NmAux",gxold:"OV5NmAux",gxvar:"AV5NmAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV5NmAux=Value},v2z:function(Value){gx.O.ZV5NmAux=Value},v2c:function(row){gx.fn.setGridControlValue("vNMAUX",row || gx.fn.currentGridRowImpl(10),gx.O.AV5NmAux,0)},c2v:function(){gx.O.AV5NmAux=this.val()},val:function(row){return gx.fn.getGridControlValue("vNMAUX",row || gx.fn.currentGridRowImpl(10))},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK2", format:0,grid:10};
   GXValidFnc[21]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:0,isacc:0,grid:10,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vPERMISSAOCONCDATAHORASOL",gxz:"ZV11PermissaoConcDataHoraSol",gxold:"OV11PermissaoConcDataHoraSol",gxvar:"AV11PermissaoConcDataHoraSol",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV11PermissaoConcDataHoraSol=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11PermissaoConcDataHoraSol=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vPERMISSAOCONCDATAHORASOL",row || gx.fn.currentGridRowImpl(10),gx.O.AV11PermissaoConcDataHoraSol,0)},c2v:function(){gx.O.AV11PermissaoConcDataHoraSol=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vPERMISSAOCONCDATAHORASOL",row || gx.fn.currentGridRowImpl(10))},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:10,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vPERMISSAOCONCNOAGRUPAMENTOGRID",gxz:"ZV17PermissaoConcNoAgrupamentoGrid",gxold:"OV17PermissaoConcNoAgrupamentoGrid",gxvar:"AV17PermissaoConcNoAgrupamentoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17PermissaoConcNoAgrupamentoGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PermissaoConcNoAgrupamentoGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vPERMISSAOCONCNOAGRUPAMENTOGRID",row || gx.fn.currentGridRowImpl(10),gx.O.AV17PermissaoConcNoAgrupamentoGrid,0)},c2v:function(){gx.O.AV17PermissaoConcNoAgrupamentoGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vPERMISSAOCONCNOAGRUPAMENTOGRID",row || gx.fn.currentGridRowImpl(10),'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TABLE3",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"IMAGE3",grid:0};
   GXValidFnc[33]={fld:"IMAGE1",grid:0};
   this.ZV5NmAux = "" ;
   this.OV5NmAux = "" ;
   this.ZV11PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.OV11PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.ZV17PermissaoConcNoAgrupamentoGrid = 0 ;
   this.OV17PermissaoConcNoAgrupamentoGrid = 0 ;
   this.AV5NmAux = "" ;
   this.AV11PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.AV17PermissaoConcNoAgrupamentoGrid = 0 ;
   this.A75UsuarioId = "" ;
   this.A1566UsuarioFilialEmpresaId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.A6567PermissaoConcSnPendente = "" ;
   this.A3141PermissaoUsuarioLibId = "" ;
   this.A568TipoPermissaoId = 0 ;
   this.A3139PermissaoUsuarioSolId = "" ;
   this.A6565PermissaoConcNoAgrupamento = 0 ;
   this.A3144PermissaoConcDataHoraSol = gx.date.nullDate() ;
   this.A219UsuarioNome = "" ;
   this.AV10SdtBox = [ ] ;
   this.Events = {"e11lc2_client": ["'PROXIMO'", true] ,"e12lc2_client": ["'ANTERIOR'", true] ,"e16lc2_client": ["'ABRIRSOLICIPERMISSAO'", true] ,"e13lc2_client": ["'LIBERARTODOS'", true] ,"e17lc2_client": ["ENTER", true] ,"e18lc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'gx.fn.getCtrlProperty("vPERMISSAOCONCNOAGRUPAMENTOGRID","Visible")',ctrl:'vPERMISSAOCONCNOAGRUPAMENTOGRID',prop:'Visible'},{av:'AV11PermissaoConcDataHoraSol',fld:'vPERMISSAOCONCDATAHORASOL'},{av:'AV10SdtBox',fld:'vSDTBOX'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'sPrefix'}],[]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV10SdtBox',fld:'vSDTBOX'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'}],[{av:'gx.fn.getCtrlProperty("TABLE1","Visible")',ctrl:'TABLE1',prop:'Visible'},{av:'AV11PermissaoConcDataHoraSol',fld:'vPERMISSAOCONCDATAHORASOL'},{av:'AV27GXLvl17',fld:'vGXLVL17'},{av:'AV5NmAux',fld:'vNMAUX'},{av:'AV8PermissaoUsuarioSolId',fld:'vPERMISSAOUSUARIOSOLID'},{av:'AV17PermissaoConcNoAgrupamentoGrid',fld:'vPERMISSAOCONCNOAGRUPAMENTOGRID'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'gx.fn.getCtrlProperty("vPERMISSAOCONCNOAGRUPAMENTOGRID","Visible")',ctrl:'vPERMISSAOCONCNOAGRUPAMENTOGRID',prop:'Visible'},{av:'AV11PermissaoConcDataHoraSol',fld:'vPERMISSAOCONCDATAHORASOL'},{av:'AV10SdtBox',fld:'vSDTBOX'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'sPrefix'}],[]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'gx.fn.getCtrlProperty("vPERMISSAOCONCNOAGRUPAMENTOGRID","Visible")',ctrl:'vPERMISSAOCONCNOAGRUPAMENTOGRID',prop:'Visible'},{av:'AV11PermissaoConcDataHoraSol',fld:'vPERMISSAOCONCDATAHORASOL'},{av:'AV10SdtBox',fld:'vSDTBOX'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'sPrefix'}],[]];
   this.EvtParms["'ABRIRSOLICIPERMISSAO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'gx.fn.getCtrlProperty("vPERMISSAOCONCNOAGRUPAMENTOGRID","Visible")',ctrl:'vPERMISSAOCONCNOAGRUPAMENTOGRID',prop:'Visible'},{av:'AV11PermissaoConcDataHoraSol',fld:'vPERMISSAOCONCDATAHORASOL'},{av:'AV10SdtBox',fld:'vSDTBOX'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'sPrefix'},{av:'AV17PermissaoConcNoAgrupamentoGrid',fld:'vPERMISSAOCONCNOAGRUPAMENTOGRID'}],[{av:'AV23SnLiberado',fld:'vSNLIBERADO'}]];
   this.EvtParms["'LIBERARTODOS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'gx.fn.getCtrlProperty("vPERMISSAOCONCNOAGRUPAMENTOGRID","Visible")',ctrl:'vPERMISSAOCONCNOAGRUPAMENTOGRID',prop:'Visible'},{av:'AV11PermissaoConcDataHoraSol',fld:'vPERMISSAOCONCDATAHORASOL'},{av:'AV10SdtBox',fld:'vSDTBOX'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'sPrefix'}],[]];
   this.setVCMap("AV10SdtBox", "vSDTBOX", 0, "CollSdtBoxPermissao.SdtBoxPermissaoItem");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   this.setVCMap("AV10SdtBox", "vSDTBOX", 0, "CollSdtBoxPermissao.SdtBoxPermissaoItem");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   Grid1Container.addRefreshingVar({rfrVar:"AV17PermissaoConcNoAgrupamentoGrid", rfrProp:"Visible", gxAttId:"Permissaoconcnoagrupamentogrid"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11PermissaoConcDataHoraSol", rfrProp:"Value", gxAttId:"Permissaoconcdatahorasol"});
   Grid1Container.addRefreshingVar({rfrVar:"AV10SdtBox"});
   Grid1Container.addRefreshingVar({rfrVar:"A75UsuarioId"});
   Grid1Container.addRefreshingVar({rfrVar:"A219UsuarioNome"});
   this.InitStandaloneVars( );
});
gx.setExecutableComponent("hboxmensagemregistrarliberacao");

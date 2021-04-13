/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:31:5.80
*/
gx.evt.autoSkip = false;
gx.define('hconsultainventario', false, function () {
   this.ServerClass =  "hconsultainventario" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A1156FilialId=gx.fn.getIntegerValue("FILIALID",'.') ;
      this.A1136FilialNome=gx.fn.getControlValue("FILIALNOME") ;
      this.A6380InventarioData=gx.fn.getDateValue("INVENTARIODATA") ;
      this.A1228FilialEmpresaId=gx.fn.getControlValue("FILIALEMPRESAID") ;
      this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID") ;
      this.AV17ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID") ;
      this.A6378InventarioUsuarioAlt=gx.fn.getControlValue("INVENTARIOUSUARIOALT") ;
      this.AV18FilialId=gx.fn.getIntegerValue("vFILIALID",'.') ;
      this.AV19InventarioData=gx.fn.getDateValue("vINVENTARIODATA") ;
   };
   this.Validv_Filialfiltro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALFILTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e17y12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11y12_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12y12_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13y12_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14y12_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15y12_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20y12_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21y11_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,10,13,15,16,22,23,24,30,33,35,37,39,41,42,43,44,45,46,47];
   this.GXLastCtrlId =47;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",21,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultainventario",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Inventariodatagrid",22,"vINVENTARIODATAGRID","","","InventarioDataGrid","date",0,"px",10,10,"right",null,[],"Inventariodatagrid","InventarioDataGrid",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Filialidgrid",23,"vFILIALIDGRID","","","FilialIdGrid","int",0,"px",7,7,"right",null,[],"Filialidgrid","FilialIdGrid",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Filialnomegrid",24,"vFILIALNOMEGRID","","","FilialNomeGrid","svchar",0,"px",100,80,"left",null,[],"Filialnomegrid","FilialNomeGrid",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"TABLE",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialfiltro,isvalid:null,rgrid:[],fld:"vFILIALFILTRO",gxz:"ZV24FilialFiltro",gxold:"OV24FilialFiltro",gxvar:"AV24FilialFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FilialFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24FilialFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALFILTRO",gx.O.AV24FilialFiltro,0)},c2v:function(){gx.O.AV24FilialFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV20FilialNome",gxold:"OV20FilialNome",gxvar:"AV20FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20FilialNome=Value},v2z:function(Value){gx.O.ZV20FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV20FilialNome,0)},c2v:function(){gx.O.AV20FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vINVENTARIODATAGRID",gxz:"ZV30InventarioDataGrid",gxold:"OV30InventarioDataGrid",gxvar:"AV30InventarioDataGrid",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30InventarioDataGrid=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30InventarioDataGrid=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vINVENTARIODATAGRID",row || gx.fn.currentGridRowImpl(21),gx.O.AV30InventarioDataGrid,0)},c2v:function(){gx.O.AV30InventarioDataGrid=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vINVENTARIODATAGRID",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDGRID",gxz:"ZV31FilialIdGrid",gxold:"OV31FilialIdGrid",gxvar:"AV31FilialIdGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31FilialIdGrid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31FilialIdGrid=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vFILIALIDGRID",row || gx.fn.currentGridRowImpl(21),gx.O.AV31FilialIdGrid,0)},c2v:function(){gx.O.AV31FilialIdGrid=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vFILIALIDGRID",row || gx.fn.currentGridRowImpl(21),'.')},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:21,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOMEGRID",gxz:"ZV32FilialNomeGrid",gxold:"OV32FilialNomeGrid",gxvar:"AV32FilialNomeGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV32FilialNomeGrid=Value},v2z:function(Value){gx.O.ZV32FilialNomeGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vFILIALNOMEGRID",row || gx.fn.currentGridRowImpl(21),gx.O.AV32FilialNomeGrid,0)},c2v:function(){gx.O.AV32FilialNomeGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vFILIALNOMEGRID",row || gx.fn.currentGridRowImpl(21))},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABLENAV",grid:0};
   GXValidFnc[33]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[35]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[37]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[39]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[41]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCTRLPAG",gxz:"ZV29CtrlPag",gxold:"OV29CtrlPag",gxvar:"AV29CtrlPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29CtrlPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29CtrlPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTRLPAG",gx.O.AV29CtrlPag,0)},c2v:function(){gx.O.AV29CtrlPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTRLPAG",'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAG",gxz:"ZV28Pag",gxold:"OV28Pag",gxvar:"AV28Pag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28Pag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28Pag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAG",gx.O.AV28Pag,0)},c2v:function(){gx.O.AV28Pag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAG",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"JS", format:2,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV16FilialEmpresaId",gxold:"OV16FilialEmpresaId",gxvar:"AV16FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV16FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV16FilialEmpresaId,0)},c2v:function(){gx.O.AV16FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECAR",gxz:"ZV34QtdeCar",gxold:"OV34QtdeCar",gxvar:"AV34QtdeCar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34QtdeCar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34QtdeCar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECAR",gx.O.AV34QtdeCar,0)},c2v:function(){gx.O.AV34QtdeCar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECAR",'.')},nac:gx.falseFn};
   this.AV24FilialFiltro = 0 ;
   this.ZV24FilialFiltro = 0 ;
   this.OV24FilialFiltro = 0 ;
   this.AV20FilialNome = "" ;
   this.ZV20FilialNome = "" ;
   this.OV20FilialNome = "" ;
   this.ZV30InventarioDataGrid = gx.date.nullDate() ;
   this.OV30InventarioDataGrid = gx.date.nullDate() ;
   this.ZV31FilialIdGrid = 0 ;
   this.OV31FilialIdGrid = 0 ;
   this.ZV32FilialNomeGrid = "" ;
   this.OV32FilialNomeGrid = "" ;
   this.AV29CtrlPag = 0 ;
   this.ZV29CtrlPag = 0 ;
   this.OV29CtrlPag = 0 ;
   this.AV28Pag = 0 ;
   this.ZV28Pag = 0 ;
   this.OV28Pag = 0 ;
   this.AV16FilialEmpresaId = "" ;
   this.ZV16FilialEmpresaId = "" ;
   this.OV16FilialEmpresaId = "" ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV34QtdeCar = 0 ;
   this.ZV34QtdeCar = 0 ;
   this.OV34QtdeCar = 0 ;
   this.AV24FilialFiltro = 0 ;
   this.AV20FilialNome = "" ;
   this.AV29CtrlPag = 0 ;
   this.AV28Pag = 0 ;
   this.AV16FilialEmpresaId = "" ;
   this.AV5Orderedby = 0 ;
   this.AV34QtdeCar = 0 ;
   this.AV18FilialId = 0 ;
   this.AV19InventarioData = gx.date.nullDate() ;
   this.AV30InventarioDataGrid = gx.date.nullDate() ;
   this.AV31FilialIdGrid = 0 ;
   this.AV32FilialNomeGrid = "" ;
   this.A1156FilialId = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.A1228FilialEmpresaId = "" ;
   this.A6378InventarioUsuarioAlt = "" ;
   this.A6380InventarioData = gx.date.nullDate() ;
   this.A1136FilialNome = "" ;
   this.AV17ProdutoEmpresaId = "" ;
   this.Events = {"e17y12_client": ["ENTER", true] ,"e11y12_client": ["'GXM_FIRST'", true] ,"e12y12_client": ["'GXM_PREVIOUS'", true] ,"e13y12_client": ["'GXM_NEXT'", true] ,"e14y12_client": ["'GXM_LAST'", true] ,"e15y12_client": ["'PROCURAR'", true] ,"e20y12_client": ["'ATUALIZAPAGINA'", true] ,"e21y11_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A6380InventarioData',fld:'INVENTARIODATA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV16FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV17ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV24FilialFiltro',fld:'vFILIALFILTRO'},{av:'A6378InventarioUsuarioAlt',fld:'INVENTARIOUSUARIOALT'},{av:'AV30InventarioDataGrid',fld:'vINVENTARIODATAGRID'},{av:'AV31FilialIdGrid',fld:'vFILIALIDGRID'},{av:'AV28Pag',fld:'vPAG'},{av:'AV29CtrlPag',fld:'vCTRLPAG'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'vINVENTARIODATAGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vINVENTARIODATAGRID","Title")',ctrl:'vINVENTARIODATAGRID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'vFILIALIDGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vFILIALIDGRID","Title")',ctrl:'vFILIALIDGRID',prop:'Title'},{ctrl:'vFILIALNOMEGRID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vFILIALNOMEGRID","Title")',ctrl:'vFILIALNOMEGRID',prop:'Title'}]];
   this.EvtParms["ENTER"] = [[{av:'AV30InventarioDataGrid',fld:'vINVENTARIODATAGRID'},{av:'AV31FilialIdGrid',fld:'vFILIALIDGRID'}],[{av:'AV19InventarioData',fld:'vINVENTARIODATA'},{av:'AV18FilialId',fld:'vFILIALID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A6380InventarioData',fld:'INVENTARIODATA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV16FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV17ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV24FilialFiltro',fld:'vFILIALFILTRO'},{av:'A6378InventarioUsuarioAlt',fld:'INVENTARIOUSUARIOALT'},{av:'AV30InventarioDataGrid',fld:'vINVENTARIODATAGRID'},{av:'AV31FilialIdGrid',fld:'vFILIALIDGRID'},{av:'AV28Pag',fld:'vPAG'},{av:'AV29CtrlPag',fld:'vCTRLPAG'}],[{av:'AV29CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A6380InventarioData',fld:'INVENTARIODATA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV16FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV17ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV24FilialFiltro',fld:'vFILIALFILTRO'},{av:'A6378InventarioUsuarioAlt',fld:'INVENTARIOUSUARIOALT'},{av:'AV30InventarioDataGrid',fld:'vINVENTARIODATAGRID'},{av:'AV31FilialIdGrid',fld:'vFILIALIDGRID'},{av:'AV28Pag',fld:'vPAG'},{av:'AV29CtrlPag',fld:'vCTRLPAG'}],[{av:'AV29CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A6380InventarioData',fld:'INVENTARIODATA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV16FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV17ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV24FilialFiltro',fld:'vFILIALFILTRO'},{av:'A6378InventarioUsuarioAlt',fld:'INVENTARIOUSUARIOALT'},{av:'AV30InventarioDataGrid',fld:'vINVENTARIODATAGRID'},{av:'AV31FilialIdGrid',fld:'vFILIALIDGRID'},{av:'AV28Pag',fld:'vPAG'},{av:'AV29CtrlPag',fld:'vCTRLPAG'}],[{av:'AV29CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A6380InventarioData',fld:'INVENTARIODATA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV16FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV17ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV24FilialFiltro',fld:'vFILIALFILTRO'},{av:'A6378InventarioUsuarioAlt',fld:'INVENTARIOUSUARIOALT'},{av:'AV30InventarioDataGrid',fld:'vINVENTARIODATAGRID'},{av:'AV31FilialIdGrid',fld:'vFILIALIDGRID'},{av:'AV28Pag',fld:'vPAG'},{av:'AV29CtrlPag',fld:'vCTRLPAG'}],[{av:'AV29CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A6380InventarioData',fld:'INVENTARIODATA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV16FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV17ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV24FilialFiltro',fld:'vFILIALFILTRO'},{av:'A6378InventarioUsuarioAlt',fld:'INVENTARIOUSUARIOALT'},{av:'AV30InventarioDataGrid',fld:'vINVENTARIODATAGRID'},{av:'AV31FilialIdGrid',fld:'vFILIALIDGRID'},{av:'AV28Pag',fld:'vPAG'},{av:'AV29CtrlPag',fld:'vCTRLPAG'}],[{av:'AV25Cont',fld:'vCONT'},{av:'AV30InventarioDataGrid',fld:'vINVENTARIODATAGRID'},{av:'AV31FilialIdGrid',fld:'vFILIALIDGRID'},{av:'AV32FilialNomeGrid',fld:'vFILIALNOMEGRID'},{av:'AV26Res',fld:'vRES'},{av:'AV27ResInt',fld:'vRESINT'},{av:'AV28Pag',fld:'vPAG'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A6380InventarioData',fld:'INVENTARIODATA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV16FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV17ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV24FilialFiltro',fld:'vFILIALFILTRO'},{av:'A6378InventarioUsuarioAlt',fld:'INVENTARIOUSUARIOALT'},{av:'AV30InventarioDataGrid',fld:'vINVENTARIODATAGRID'},{av:'AV31FilialIdGrid',fld:'vFILIALIDGRID'},{av:'AV28Pag',fld:'vPAG'},{av:'AV29CtrlPag',fld:'vCTRLPAG'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV29CtrlPag',fld:'vCTRLPAG'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'A6380InventarioData',fld:'INVENTARIODATA'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV16FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'AV17ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV24FilialFiltro',fld:'vFILIALFILTRO'},{av:'A6378InventarioUsuarioAlt',fld:'INVENTARIOUSUARIOALT'},{av:'AV30InventarioDataGrid',fld:'vINVENTARIODATAGRID'},{av:'AV31FilialIdGrid',fld:'vFILIALIDGRID'},{av:'AV28Pag',fld:'vPAG'},{av:'AV29CtrlPag',fld:'vCTRLPAG'}],[]];
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   this.setVCMap("A6380InventarioData", "INVENTARIODATA", 0, "date");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV17ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A6378InventarioUsuarioAlt", "INVENTARIOUSUARIOALT", 0, "char");
   this.setVCMap("AV18FilialId", "vFILIALID", 0, "int");
   this.setVCMap("AV19InventarioData", "vINVENTARIODATA", 0, "date");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   this.setVCMap("A6380InventarioData", "INVENTARIODATA", 0, "date");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A2964ProdutoEmpresaId", "PRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV17ProdutoEmpresaId", "vPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("A6378InventarioUsuarioAlt", "INVENTARIOUSUARIOALT", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[46]);
   GridContainer.addRefreshingVar({rfrVar:"A1156FilialId"});
   GridContainer.addRefreshingVar({rfrVar:"A1136FilialNome"});
   GridContainer.addRefreshingVar({rfrVar:"A6380InventarioData"});
   GridContainer.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[45]);
   GridContainer.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV17ProdutoEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[15]);
   GridContainer.addRefreshingVar({rfrVar:"A6378InventarioUsuarioAlt"});
   GridContainer.addRefreshingVar({rfrVar:"AV30InventarioDataGrid", rfrProp:"Value", gxAttId:"Inventariodatagrid"});
   GridContainer.addRefreshingVar({rfrVar:"AV31FilialIdGrid", rfrProp:"Value", gxAttId:"Filialidgrid"});
   GridContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultainventario());

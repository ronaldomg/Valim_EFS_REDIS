/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:41:23.84
*/
gx.evt.autoSkip = false;
gx.define('gx0gy0', false, function () {
   this.ServerClass =  "gx0gy0" ;
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
      this.AV9pWSProdutoEmpresaId=gx.fn.getControlValue("vPWSPRODUTOEMPRESAID") ;
      this.AV10pWSProdutoId=gx.fn.getIntegerValue("vPWSPRODUTOID",'.') ;
      this.AV11pWSPDVCodigo=gx.fn.getIntegerValue("vPWSPDVCODIGO",'.') ;
   };
   this.e131uz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141uz1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0gy0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(8264,33,"WSPRODUTOEMPRESAID","Empresa","","WSProdutoEmpresaId","char",0,"px",10,10,"left",null,[],8264,"WSProdutoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8265,34,"WSPRODUTOID","Código","Selecionar","WSProdutoId","int",0,"px",10,10,"right",null,[],8265,"WSProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8266,35,"WSPDVCODIGO","PDV","","WSPDVCodigo","int",0,"px",10,10,"right",null,[],8266,"WSPDVCodigo",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKWSPRODUTOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCWSPRODUTOEMPRESAID",gxz:"ZV6cWSProdutoEmpresaId",gxold:"OV6cWSProdutoEmpresaId",gxvar:"AV6cWSProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cWSProdutoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cWSProdutoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCWSPRODUTOEMPRESAID",gx.O.AV6cWSProdutoEmpresaId,0)},c2v:function(){gx.O.AV6cWSProdutoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCWSPRODUTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKWSPRODUTOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCWSPRODUTOID",gxz:"ZV7cWSProdutoId",gxold:"OV7cWSProdutoId",gxvar:"AV7cWSProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cWSProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cWSProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCWSPRODUTOID",gx.O.AV7cWSProdutoId,0)},c2v:function(){gx.O.AV7cWSProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCWSPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKWSPDVCODIGO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCWSPDVCODIGO",gxz:"ZV8cWSPDVCodigo",gxold:"OV8cWSPDVCodigo",gxvar:"AV8cWSPDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cWSPDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cWSPDVCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCWSPDVCODIGO",gx.O.AV8cWSPDVCodigo,0)},c2v:function(){gx.O.AV8cWSPDVCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCWSPDVCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"WSPRODUTOEMPRESAID",gxz:"Z8264WSProdutoEmpresaId",gxold:"O8264WSProdutoEmpresaId",gxvar:"A8264WSProdutoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8264WSProdutoEmpresaId=Value},v2z:function(Value){gx.O.Z8264WSProdutoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("WSPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(31),gx.O.A8264WSProdutoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8264WSProdutoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("WSPRODUTOEMPRESAID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"WSPRODUTOID",gxz:"Z8265WSProdutoId",gxold:"O8265WSProdutoId",gxvar:"A8265WSProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8265WSProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8265WSProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("WSPRODUTOID",row || gx.fn.currentGridRowImpl(31),gx.O.A8265WSProdutoId,0)},c2v:function(){gx.O.A8265WSProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("WSPRODUTOID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"WSPDVCODIGO",gxz:"Z8266WSPDVCodigo",gxold:"O8266WSPDVCodigo",gxvar:"A8266WSPDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8266WSPDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8266WSPDVCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("WSPDVCODIGO",row || gx.fn.currentGridRowImpl(31),gx.O.A8266WSPDVCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8266WSPDVCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("WSPDVCODIGO",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cWSProdutoEmpresaId = "" ;
   this.ZV6cWSProdutoEmpresaId = "" ;
   this.OV6cWSProdutoEmpresaId = "" ;
   this.AV7cWSProdutoId = 0 ;
   this.ZV7cWSProdutoId = 0 ;
   this.OV7cWSProdutoId = 0 ;
   this.AV8cWSPDVCodigo = 0 ;
   this.ZV8cWSPDVCodigo = 0 ;
   this.OV8cWSPDVCodigo = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z8264WSProdutoEmpresaId = "" ;
   this.O8264WSProdutoEmpresaId = "" ;
   this.Z8265WSProdutoId = 0 ;
   this.O8265WSProdutoId = 0 ;
   this.Z8266WSPDVCodigo = 0 ;
   this.O8266WSPDVCodigo = 0 ;
   this.AV6cWSProdutoEmpresaId = "" ;
   this.AV7cWSProdutoId = 0 ;
   this.AV8cWSPDVCodigo = 0 ;
   this.AV9pWSProdutoEmpresaId = "" ;
   this.AV10pWSProdutoId = 0 ;
   this.AV11pWSPDVCodigo = 0 ;
   this.AV5LinkSelection = "" ;
   this.A8264WSProdutoEmpresaId = "" ;
   this.A8265WSProdutoId = 0 ;
   this.A8266WSPDVCodigo = 0 ;
   this.Events = {"e131uz2_client": ["ENTER", true] ,"e141uz1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cWSProdutoEmpresaId',fld:'vCWSPRODUTOEMPRESAID'},{av:'AV7cWSProdutoId',fld:'vCWSPRODUTOID'},{av:'AV8cWSPDVCodigo',fld:'vCWSPDVCODIGO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A8264WSProdutoEmpresaId',fld:'WSPRODUTOEMPRESAID'},{av:'A8265WSProdutoId',fld:'WSPRODUTOID'},{av:'A8266WSPDVCodigo',fld:'WSPDVCODIGO'}],[{av:'AV9pWSProdutoEmpresaId',fld:'vPWSPRODUTOEMPRESAID'},{av:'AV10pWSProdutoId',fld:'vPWSPRODUTOID'},{av:'AV11pWSPDVCodigo',fld:'vPWSPDVCODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cWSProdutoEmpresaId',fld:'vCWSPRODUTOEMPRESAID'},{av:'AV7cWSProdutoId',fld:'vCWSPRODUTOID'},{av:'AV8cWSPDVCodigo',fld:'vCWSPDVCODIGO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cWSProdutoEmpresaId',fld:'vCWSPRODUTOEMPRESAID'},{av:'AV7cWSProdutoId',fld:'vCWSPRODUTOID'},{av:'AV8cWSPDVCodigo',fld:'vCWSPDVCODIGO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cWSProdutoEmpresaId',fld:'vCWSPRODUTOEMPRESAID'},{av:'AV7cWSProdutoId',fld:'vCWSPRODUTOID'},{av:'AV8cWSPDVCodigo',fld:'vCWSPDVCODIGO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cWSProdutoEmpresaId',fld:'vCWSPRODUTOEMPRESAID'},{av:'AV7cWSProdutoId',fld:'vCWSPRODUTOID'},{av:'AV8cWSPDVCodigo',fld:'vCWSPDVCODIGO'}],[]];
   this.setVCMap("AV9pWSProdutoEmpresaId", "vPWSPRODUTOEMPRESAID", 0, "char");
   this.setVCMap("AV10pWSProdutoId", "vPWSPRODUTOID", 0, "int");
   this.setVCMap("AV11pWSPDVCodigo", "vPWSPDVCODIGO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0gy0());

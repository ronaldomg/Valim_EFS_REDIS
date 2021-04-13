/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:47:41.52
*/
gx.evt.autoSkip = false;
gx.define('gx0my0', false, function () {
   this.ServerClass =  "gx0my0" ;
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
      this.AV9pFormaPgtoTaxaId=gx.fn.getIntegerValue("vPFORMAPGTOTAXAID",'.') ;
   };
   this.e132dv2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142dv1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0my0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(11278,33,"FORMAPGTOTAXAID","Taxa Id","","FormaPgtoTaxaId","int",0,"px",3,3,"right",null,[],11278,"FormaPgtoTaxaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11279,34,"FORMAPGTOTAXAEMPRESAID","Empresa Id","","FormaPgtoTaxaEmpresaId","char",0,"px",10,10,"left",null,[],11279,"FormaPgtoTaxaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(11280,35,"FORMAPAGAMENTOVALORTAXA","2 casas","","FormaPagamentoValorTaxa","decimal",0,"px",6,6,"right",null,[],11280,"FormaPagamentoValorTaxa",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKFORMAPGTOTAXAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFORMAPGTOTAXAID",gxz:"ZV6cFormaPgtoTaxaId",gxold:"OV6cFormaPgtoTaxaId",gxvar:"AV6cFormaPgtoTaxaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cFormaPgtoTaxaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cFormaPgtoTaxaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFORMAPGTOTAXAID",gx.O.AV6cFormaPgtoTaxaId,0)},c2v:function(){gx.O.AV6cFormaPgtoTaxaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFORMAPGTOTAXAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKFORMAPGTOTAXAEMPRESAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFORMAPGTOTAXAEMPRESAID",gxz:"ZV7cFormaPgtoTaxaEmpresaId",gxold:"OV7cFormaPgtoTaxaEmpresaId",gxvar:"AV7cFormaPgtoTaxaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cFormaPgtoTaxaEmpresaId=Value},v2z:function(Value){gx.O.ZV7cFormaPgtoTaxaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCFORMAPGTOTAXAEMPRESAID",gx.O.AV7cFormaPgtoTaxaEmpresaId,0)},c2v:function(){gx.O.AV7cFormaPgtoTaxaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCFORMAPGTOTAXAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKFORMAPAGAMENTOVALORTAXA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFORMAPAGAMENTOVALORTAXA",gxz:"ZV8cFormaPagamentoValorTaxa",gxold:"OV8cFormaPagamentoValorTaxa",gxvar:"AV8cFormaPagamentoValorTaxa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cFormaPagamentoValorTaxa=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV8cFormaPagamentoValorTaxa=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCFORMAPAGAMENTOVALORTAXA",gx.O.AV8cFormaPagamentoValorTaxa,2,',')},c2v:function(){gx.O.AV8cFormaPagamentoValorTaxa=this.val()},val:function(){return gx.fn.getDecimalValue("vCFORMAPAGAMENTOVALORTAXA",'.',',')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV12Linkselection_GXI)},c2v:function(){gx.O.AV12Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV12Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTOTAXAID",gxz:"Z11278FormaPgtoTaxaId",gxold:"O11278FormaPgtoTaxaId",gxvar:"A11278FormaPgtoTaxaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11278FormaPgtoTaxaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11278FormaPgtoTaxaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTOTAXAID",row || gx.fn.currentGridRowImpl(31),gx.O.A11278FormaPgtoTaxaId,0)},c2v:function(){gx.O.A11278FormaPgtoTaxaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FORMAPGTOTAXAID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPGTOTAXAEMPRESAID",gxz:"Z11279FormaPgtoTaxaEmpresaId",gxold:"O11279FormaPgtoTaxaEmpresaId",gxvar:"A11279FormaPgtoTaxaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A11279FormaPgtoTaxaEmpresaId=Value},v2z:function(Value){gx.O.Z11279FormaPgtoTaxaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("FORMAPGTOTAXAEMPRESAID",row || gx.fn.currentGridRowImpl(31),gx.O.A11279FormaPgtoTaxaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11279FormaPgtoTaxaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("FORMAPGTOTAXAEMPRESAID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FORMAPAGAMENTOVALORTAXA",gxz:"Z11280FormaPagamentoValorTaxa",gxold:"O11280FormaPagamentoValorTaxa",gxvar:"A11280FormaPagamentoValorTaxa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A11280FormaPagamentoValorTaxa=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z11280FormaPagamentoValorTaxa=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("FORMAPAGAMENTOVALORTAXA",row || gx.fn.currentGridRowImpl(31),gx.O.A11280FormaPagamentoValorTaxa,2,',')},c2v:function(){gx.O.A11280FormaPagamentoValorTaxa=this.val()},val:function(row){return gx.fn.getGridDecimalValue("FORMAPAGAMENTOVALORTAXA",row || gx.fn.currentGridRowImpl(31),'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cFormaPgtoTaxaId = 0 ;
   this.ZV6cFormaPgtoTaxaId = 0 ;
   this.OV6cFormaPgtoTaxaId = 0 ;
   this.AV7cFormaPgtoTaxaEmpresaId = "" ;
   this.ZV7cFormaPgtoTaxaEmpresaId = "" ;
   this.OV7cFormaPgtoTaxaEmpresaId = "" ;
   this.AV8cFormaPagamentoValorTaxa = 0 ;
   this.ZV8cFormaPagamentoValorTaxa = 0 ;
   this.OV8cFormaPagamentoValorTaxa = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z11278FormaPgtoTaxaId = 0 ;
   this.O11278FormaPgtoTaxaId = 0 ;
   this.Z11279FormaPgtoTaxaEmpresaId = "" ;
   this.O11279FormaPgtoTaxaEmpresaId = "" ;
   this.Z11280FormaPagamentoValorTaxa = 0 ;
   this.O11280FormaPagamentoValorTaxa = 0 ;
   this.AV6cFormaPgtoTaxaId = 0 ;
   this.AV7cFormaPgtoTaxaEmpresaId = "" ;
   this.AV8cFormaPagamentoValorTaxa = 0 ;
   this.AV9pFormaPgtoTaxaId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A11278FormaPgtoTaxaId = 0 ;
   this.A11279FormaPgtoTaxaEmpresaId = "" ;
   this.A11280FormaPagamentoValorTaxa = 0 ;
   this.Events = {"e132dv2_client": ["ENTER", true] ,"e142dv1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFormaPgtoTaxaId',fld:'vCFORMAPGTOTAXAID'},{av:'AV7cFormaPgtoTaxaEmpresaId',fld:'vCFORMAPGTOTAXAEMPRESAID'},{av:'AV8cFormaPagamentoValorTaxa',fld:'vCFORMAPAGAMENTOVALORTAXA'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A11278FormaPgtoTaxaId',fld:'FORMAPGTOTAXAID'}],[{av:'AV9pFormaPgtoTaxaId',fld:'vPFORMAPGTOTAXAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFormaPgtoTaxaId',fld:'vCFORMAPGTOTAXAID'},{av:'AV7cFormaPgtoTaxaEmpresaId',fld:'vCFORMAPGTOTAXAEMPRESAID'},{av:'AV8cFormaPagamentoValorTaxa',fld:'vCFORMAPAGAMENTOVALORTAXA'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFormaPgtoTaxaId',fld:'vCFORMAPGTOTAXAID'},{av:'AV7cFormaPgtoTaxaEmpresaId',fld:'vCFORMAPGTOTAXAEMPRESAID'},{av:'AV8cFormaPagamentoValorTaxa',fld:'vCFORMAPAGAMENTOVALORTAXA'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFormaPgtoTaxaId',fld:'vCFORMAPGTOTAXAID'},{av:'AV7cFormaPgtoTaxaEmpresaId',fld:'vCFORMAPGTOTAXAEMPRESAID'},{av:'AV8cFormaPagamentoValorTaxa',fld:'vCFORMAPAGAMENTOVALORTAXA'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFormaPgtoTaxaId',fld:'vCFORMAPGTOTAXAID'},{av:'AV7cFormaPgtoTaxaEmpresaId',fld:'vCFORMAPGTOTAXAEMPRESAID'},{av:'AV8cFormaPagamentoValorTaxa',fld:'vCFORMAPAGAMENTOVALORTAXA'}],[]];
   this.setVCMap("AV9pFormaPgtoTaxaId", "vPFORMAPGTOTAXAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0my0());

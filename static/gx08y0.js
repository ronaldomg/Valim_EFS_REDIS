/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:32:42.94
*/
gx.evt.autoSkip = false;
gx.define('gx08y0', false, function () {
   this.ServerClass =  "gx08y0" ;
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
      this.AV9pDmedCPFRespPag=gx.fn.getIntegerValue("vPDMEDCPFRESPPAG",'.') ;
   };
   this.e131nx2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141nx1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,38];
   this.GXLastCtrlId =38;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx08y0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(3071,33,"DMEDCPFRESPPAG","CPF Responsável Pagamento","","DmedCPFRespPag","int",0,"px",11,11,"right",null,[],3071,"DmedCPFRespPag",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3072,34,"DMEDNOMERESPPAG","Nome Responsável Pagamento","Selecionar","DmedNomeRespPag","svchar",0,"px",60,60,"left",null,[],3072,"DmedNomeRespPag",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3073,35,"DMEDVALORPAGO","Valor Pago","","DmedValorPago","decimal",0,"px",22,22,"right",null,[],3073,"DmedValorPago",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKDMEDCPFRESPPAG", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:11,dec:0,sign:false,pic:"99999999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDMEDCPFRESPPAG",gxz:"ZV6cDmedCPFRespPag",gxold:"OV6cDmedCPFRespPag",gxvar:"AV6cDmedCPFRespPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cDmedCPFRespPag=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cDmedCPFRespPag=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCDMEDCPFRESPPAG",gx.O.AV6cDmedCPFRespPag,0)},c2v:function(){gx.O.AV6cDmedCPFRespPag=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDMEDCPFRESPPAG",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKDMEDNOMERESPPAG", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDMEDNOMERESPPAG",gxz:"ZV7cDmedNomeRespPag",gxold:"OV7cDmedNomeRespPag",gxvar:"AV7cDmedNomeRespPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cDmedNomeRespPag=Value},v2z:function(Value){gx.O.ZV7cDmedNomeRespPag=Value},v2c:function(){gx.fn.setControlValue("vCDMEDNOMERESPPAG",gx.O.AV7cDmedNomeRespPag,0)},c2v:function(){gx.O.AV7cDmedNomeRespPag=this.val()},val:function(){return gx.fn.getControlValue("vCDMEDNOMERESPPAG")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKDMEDVALORPAGO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDMEDVALORPAGO",gxz:"ZV8cDmedValorPago",gxold:"OV8cDmedValorPago",gxvar:"AV8cDmedValorPago",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cDmedValorPago=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV8cDmedValorPago=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCDMEDVALORPAGO",gx.O.AV8cDmedValorPago,2,',')},c2v:function(){gx.O.AV8cDmedValorPago=this.val()},val:function(){return gx.fn.getDecimalValue("vCDMEDVALORPAGO",'.',',')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV12Linkselection_GXI)},c2v:function(){gx.O.AV12Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV12Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:11,dec:0,sign:false,pic:"99999999999",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DMEDCPFRESPPAG",gxz:"Z3071DmedCPFRespPag",gxold:"O3071DmedCPFRespPag",gxvar:"A3071DmedCPFRespPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3071DmedCPFRespPag=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3071DmedCPFRespPag=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DMEDCPFRESPPAG",row || gx.fn.currentGridRowImpl(31),gx.O.A3071DmedCPFRespPag,0)},c2v:function(){gx.O.A3071DmedCPFRespPag=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DMEDCPFRESPPAG",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DMEDNOMERESPPAG",gxz:"Z3072DmedNomeRespPag",gxold:"O3072DmedNomeRespPag",gxvar:"A3072DmedNomeRespPag",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3072DmedNomeRespPag=Value},v2z:function(Value){gx.O.Z3072DmedNomeRespPag=Value},v2c:function(row){gx.fn.setGridControlValue("DMEDNOMERESPPAG",row || gx.fn.currentGridRowImpl(31),gx.O.A3072DmedNomeRespPag,0)},c2v:function(){gx.O.A3072DmedNomeRespPag=this.val()},val:function(row){return gx.fn.getGridControlValue("DMEDNOMERESPPAG",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DMEDVALORPAGO",gxz:"Z3073DmedValorPago",gxold:"O3073DmedValorPago",gxvar:"A3073DmedValorPago",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3073DmedValorPago=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3073DmedValorPago=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("DMEDVALORPAGO",row || gx.fn.currentGridRowImpl(31),gx.O.A3073DmedValorPago,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3073DmedValorPago=this.val()},val:function(row){return gx.fn.getGridDecimalValue("DMEDVALORPAGO",row || gx.fn.currentGridRowImpl(31),'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   this.AV6cDmedCPFRespPag = 0 ;
   this.ZV6cDmedCPFRespPag = 0 ;
   this.OV6cDmedCPFRespPag = 0 ;
   this.AV7cDmedNomeRespPag = "" ;
   this.ZV7cDmedNomeRespPag = "" ;
   this.OV7cDmedNomeRespPag = "" ;
   this.AV8cDmedValorPago = 0 ;
   this.ZV8cDmedValorPago = 0 ;
   this.OV8cDmedValorPago = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z3071DmedCPFRespPag = 0 ;
   this.O3071DmedCPFRespPag = 0 ;
   this.Z3072DmedNomeRespPag = "" ;
   this.O3072DmedNomeRespPag = "" ;
   this.Z3073DmedValorPago = 0 ;
   this.O3073DmedValorPago = 0 ;
   this.AV6cDmedCPFRespPag = 0 ;
   this.AV7cDmedNomeRespPag = "" ;
   this.AV8cDmedValorPago = 0 ;
   this.AV9pDmedCPFRespPag = 0 ;
   this.AV5LinkSelection = "" ;
   this.A3071DmedCPFRespPag = 0 ;
   this.A3072DmedNomeRespPag = "" ;
   this.A3073DmedValorPago = 0 ;
   this.Events = {"e131nx2_client": ["ENTER", true] ,"e141nx1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDmedCPFRespPag',fld:'vCDMEDCPFRESPPAG'},{av:'AV7cDmedNomeRespPag',fld:'vCDMEDNOMERESPPAG'},{av:'AV8cDmedValorPago',fld:'vCDMEDVALORPAGO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A3071DmedCPFRespPag',fld:'DMEDCPFRESPPAG'}],[{av:'AV9pDmedCPFRespPag',fld:'vPDMEDCPFRESPPAG'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDmedCPFRespPag',fld:'vCDMEDCPFRESPPAG'},{av:'AV7cDmedNomeRespPag',fld:'vCDMEDNOMERESPPAG'},{av:'AV8cDmedValorPago',fld:'vCDMEDVALORPAGO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDmedCPFRespPag',fld:'vCDMEDCPFRESPPAG'},{av:'AV7cDmedNomeRespPag',fld:'vCDMEDNOMERESPPAG'},{av:'AV8cDmedValorPago',fld:'vCDMEDVALORPAGO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDmedCPFRespPag',fld:'vCDMEDCPFRESPPAG'},{av:'AV7cDmedNomeRespPag',fld:'vCDMEDNOMERESPPAG'},{av:'AV8cDmedValorPago',fld:'vCDMEDVALORPAGO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDmedCPFRespPag',fld:'vCDMEDCPFRESPPAG'},{av:'AV7cDmedNomeRespPag',fld:'vCDMEDNOMERESPPAG'},{av:'AV8cDmedValorPago',fld:'vCDMEDVALORPAGO'}],[]];
   this.setVCMap("AV9pDmedCPFRespPag", "vPDMEDCPFRESPPAG", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx08y0());

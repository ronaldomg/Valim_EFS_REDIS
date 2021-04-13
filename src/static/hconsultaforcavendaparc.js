/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:4:12.38
*/
gx.evt.autoSkip = false;
gx.define('hconsultaforcavendaparc', false, function () {
   this.ServerClass =  "hconsultaforcavendaparc" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV7FvEmpresa=gx.fn.getControlValue("vFVEMPRESA") ;
      this.AV9FvId=gx.fn.getIntegerValue("vFVID",'.') ;
      this.A3375FormaPgtoEmpresaId=gx.fn.getControlValue("FORMAPGTOEMPRESAID") ;
      this.A10763FVParcelaFormaEmpId=gx.fn.getControlValue("FVPARCELAFORMAEMPID") ;
      this.A3376FormaPgtoId=gx.fn.getIntegerValue("FORMAPGTOID",'.') ;
      this.A10764FVParcelaFormaId=gx.fn.getIntegerValue("FVPARCELAFORMAID",'.') ;
      this.A3377TpCobrFormaPgtoId=gx.fn.getIntegerValue("TPCOBRFORMAPGTOID",'.') ;
      this.A10765FVParcelaFormaTpCobr=gx.fn.getIntegerValue("FVPARCELAFORMATPCOBR",'.') ;
      this.A3489FormaPgtoDescricao=gx.fn.getControlValue("FORMAPGTODESCRICAO") ;
      this.A3797TpCobrFormaPgtoDescricao=gx.fn.getControlValue("TPCOBRFORMAPGTODESCRICAO") ;
   };
   this.e1929q2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e1129q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1229q2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e1329q2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e1429q2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e1529q2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e2029q2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e2129q2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,11,12,13,14,15,18,21,23,25,27,33,37,39,40,42];
   this.GXLastCtrlId =42;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",9,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconsultaforcavendaparc",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(10762,10,"FVPARCELASEQ","Sequência","","FVParcelaSeq","char",0,"px",3,3,"right",null,[],10762,"FVParcelaSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Fvformapgtodescricao",11,"vFVFORMAPGTODESCRICAO","Descrição da Forma","","FVFormaPgtoDescricao","svchar",0,"px",20,20,"left",null,[],"Fvformapgtodescricao","FVFormaPgtoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Fvtpcobrformapgtodescricao",12,"vFVTPCOBRFORMAPGTODESCRICAO","Desc Tipo de Cobrança","","FVTpCobrFormaPgtoDescricao","svchar",0,"px",25,25,"left",null,[],"Fvtpcobrformapgtodescricao","FVTpCobrFormaPgtoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10766,13,"FVPARCELAVENCIMENTO","Vencimento","","FVParcelaVencimento","date",0,"px",10,10,"right",null,[],10766,"FVParcelaVencimento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10767,14,"FVPARCELAVALOR","Valor","","FVParcelaValor","decimal",0,"px",22,22,"right",null,[],10767,"FVParcelaValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpcons","vBMPCONS",15,0,"px",17,"px","e1929q2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE8",grid:0};
   GXValidFnc[10]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVPARCELASEQ",gxz:"Z10762FVParcelaSeq",gxold:"O10762FVParcelaSeq",gxvar:"A10762FVParcelaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10762FVParcelaSeq=Value},v2z:function(Value){gx.O.Z10762FVParcelaSeq=Value},v2c:function(row){gx.fn.setGridControlValue("FVPARCELASEQ",row || gx.fn.currentGridRowImpl(9),gx.O.A10762FVParcelaSeq,0)},c2v:function(){gx.O.A10762FVParcelaSeq=this.val()},val:function(row){return gx.fn.getGridControlValue("FVPARCELASEQ",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[11]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vFVFORMAPGTODESCRICAO",gxz:"ZV8FVFormaPgtoDescricao",gxold:"OV8FVFormaPgtoDescricao",gxvar:"AV8FVFormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV8FVFormaPgtoDescricao=Value},v2z:function(Value){gx.O.ZV8FVFormaPgtoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vFVFORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(9),gx.O.AV8FVFormaPgtoDescricao,0)},c2v:function(){gx.O.AV8FVFormaPgtoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vFVFORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[12]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vFVTPCOBRFORMAPGTODESCRICAO",gxz:"ZV10FVTpCobrFormaPgtoDescricao",gxold:"OV10FVTpCobrFormaPgtoDescricao",gxvar:"AV10FVTpCobrFormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV10FVTpCobrFormaPgtoDescricao=Value},v2z:function(Value){gx.O.ZV10FVTpCobrFormaPgtoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vFVTPCOBRFORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(9),gx.O.AV10FVTpCobrFormaPgtoDescricao,0)},c2v:function(){gx.O.AV10FVTpCobrFormaPgtoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vFVTPCOBRFORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[13]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVPARCELAVENCIMENTO",gxz:"Z10766FVParcelaVencimento",gxold:"O10766FVParcelaVencimento",gxvar:"A10766FVParcelaVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10766FVParcelaVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10766FVParcelaVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("FVPARCELAVENCIMENTO",row || gx.fn.currentGridRowImpl(9),gx.O.A10766FVParcelaVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10766FVParcelaVencimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("FVPARCELAVENCIMENTO",row || gx.fn.currentGridRowImpl(9))},nac:gx.falseFn};
   GXValidFnc[14]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVPARCELAVALOR",gxz:"Z10767FVParcelaValor",gxold:"O10767FVParcelaValor",gxvar:"A10767FVParcelaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10767FVParcelaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10767FVParcelaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("FVPARCELAVALOR",row || gx.fn.currentGridRowImpl(9),gx.O.A10767FVParcelaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10767FVParcelaValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("FVPARCELAVALOR",row || gx.fn.currentGridRowImpl(9),'.',',')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:9,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCONS",gxz:"ZV5BmpCons",gxold:"OV5BmpCons",gxvar:"AV5BmpCons",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5BmpCons=Value},v2z:function(Value){gx.O.ZV5BmpCons=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCONS",row || gx.fn.currentGridRowImpl(9),gx.O.AV5BmpCons,gx.O.AV24Bmpcons_GXI)},c2v:function(){gx.O.AV24Bmpcons_GXI=this.val_GXI();gx.O.AV5BmpCons=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCONS",row || gx.fn.currentGridRowImpl(9))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCONS_GXI",row || gx.fn.currentGridRowImpl(9))}, gxvar_GXI:'AV24Bmpcons_GXI',nac:gx.falseFn};
   GXValidFnc[18]={fld:"TABLE1",grid:0};
   GXValidFnc[21]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[23]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[25]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[27]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[33]={fld:"TABLE9",grid:0};
   GXValidFnc[37]={fld:"TABLE10",grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV16Pagina",gxold:"OV16Pagina",gxvar:"AV16Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV16Pagina,0)},c2v:function(){gx.O.AV16Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV17PaginaAux",gxold:"OV17PaginaAux",gxvar:"AV17PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV17PaginaAux,0)},c2v:function(){gx.O.AV17PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.Z10762FVParcelaSeq = "" ;
   this.O10762FVParcelaSeq = "" ;
   this.ZV8FVFormaPgtoDescricao = "" ;
   this.OV8FVFormaPgtoDescricao = "" ;
   this.ZV10FVTpCobrFormaPgtoDescricao = "" ;
   this.OV10FVTpCobrFormaPgtoDescricao = "" ;
   this.Z10766FVParcelaVencimento = gx.date.nullDate() ;
   this.O10766FVParcelaVencimento = gx.date.nullDate() ;
   this.Z10767FVParcelaValor = 0 ;
   this.O10767FVParcelaValor = 0 ;
   this.ZV5BmpCons = "" ;
   this.OV5BmpCons = "" ;
   this.AV16Pagina = 0 ;
   this.ZV16Pagina = 0 ;
   this.OV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.ZV17PaginaAux = 0 ;
   this.OV17PaginaAux = 0 ;
   this.AV16Pagina = 0 ;
   this.AV17PaginaAux = 0 ;
   this.AV7FvEmpresa = "" ;
   this.AV9FvId = 0 ;
   this.A10765FVParcelaFormaTpCobr = 0 ;
   this.A10764FVParcelaFormaId = 0 ;
   this.A10763FVParcelaFormaEmpId = "" ;
   this.A10618FVId = 0 ;
   this.A10617FVEmpresa = "" ;
   this.A10762FVParcelaSeq = "" ;
   this.AV8FVFormaPgtoDescricao = "" ;
   this.AV10FVTpCobrFormaPgtoDescricao = "" ;
   this.A10766FVParcelaVencimento = gx.date.nullDate() ;
   this.A10767FVParcelaValor = 0 ;
   this.AV5BmpCons = "" ;
   this.A3375FormaPgtoEmpresaId = "" ;
   this.A3376FormaPgtoId = 0 ;
   this.A3377TpCobrFormaPgtoId = 0 ;
   this.A3489FormaPgtoDescricao = "" ;
   this.A3797TpCobrFormaPgtoDescricao = "" ;
   this.Events = {"e1929q2_client": ["'CONSULTAR'", true] ,"e1129q2_client": ["'FECHAR'", true] ,"e1229q2_client": ["'GXM_PREVIOUS'", true] ,"e1329q2_client": ["'GXM_NEXT'", true] ,"e1429q2_client": ["'GXM_FIRST'", true] ,"e1529q2_client": ["'GXM_LAST'", true] ,"e2029q2_client": ["ENTER", true] ,"e2129q2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV7FvEmpresa',fld:'vFVEMPRESA'},{av:'AV9FvId',fld:'vFVID'},{av:'AV5BmpCons',fld:'vBMPCONS'},{av:'gx.fn.getCtrlProperty("vBMPCONS","Tooltiptext")',ctrl:'vBMPCONS',prop:'Tooltiptext'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'A3375FormaPgtoEmpresaId',fld:'FORMAPGTOEMPRESAID'},{av:'A10763FVParcelaFormaEmpId',fld:'FVPARCELAFORMAEMPID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A10764FVParcelaFormaId',fld:'FVPARCELAFORMAID'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'A10765FVParcelaFormaTpCobr',fld:'FVPARCELAFORMATPCOBR'},{av:'A3489FormaPgtoDescricao',fld:'FORMAPGTODESCRICAO'},{av:'A3797TpCobrFormaPgtoDescricao',fld:'TPCOBRFORMAPGTODESCRICAO'}],[]];
   this.EvtParms["GRID1.REFRESH"] = [[{av:'AV16Pagina',fld:'vPAGINA'}],[{av:'AV17PaginaAux',fld:'vPAGINAAUX'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A3375FormaPgtoEmpresaId',fld:'FORMAPGTOEMPRESAID'},{av:'A10763FVParcelaFormaEmpId',fld:'FVPARCELAFORMAEMPID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A10764FVParcelaFormaId',fld:'FVPARCELAFORMAID'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'A10765FVParcelaFormaTpCobr',fld:'FVPARCELAFORMATPCOBR'},{av:'A3489FormaPgtoDescricao',fld:'FORMAPGTODESCRICAO'},{av:'A3797TpCobrFormaPgtoDescricao',fld:'TPCOBRFORMAPGTODESCRICAO'}],[{av:'AV8FVFormaPgtoDescricao',fld:'vFVFORMAPGTODESCRICAO'},{av:'AV10FVTpCobrFormaPgtoDescricao',fld:'vFVTPCOBRFORMAPGTODESCRICAO'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV9FvId',fld:'vFVID'},{av:'A10762FVParcelaSeq',fld:'FVPARCELASEQ'}],[{av:'A10762FVParcelaSeq',fld:'FVPARCELASEQ'},{av:'AV9FvId',fld:'vFVID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV7FvEmpresa',fld:'vFVEMPRESA'},{av:'AV9FvId',fld:'vFVID'},{av:'AV5BmpCons',fld:'vBMPCONS'},{av:'gx.fn.getCtrlProperty("vBMPCONS","Tooltiptext")',ctrl:'vBMPCONS',prop:'Tooltiptext'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'A3375FormaPgtoEmpresaId',fld:'FORMAPGTOEMPRESAID'},{av:'A10763FVParcelaFormaEmpId',fld:'FVPARCELAFORMAEMPID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A10764FVParcelaFormaId',fld:'FVPARCELAFORMAID'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'A10765FVParcelaFormaTpCobr',fld:'FVPARCELAFORMATPCOBR'},{av:'A3489FormaPgtoDescricao',fld:'FORMAPGTODESCRICAO'},{av:'A3797TpCobrFormaPgtoDescricao',fld:'TPCOBRFORMAPGTODESCRICAO'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV7FvEmpresa',fld:'vFVEMPRESA'},{av:'AV9FvId',fld:'vFVID'},{av:'AV5BmpCons',fld:'vBMPCONS'},{av:'gx.fn.getCtrlProperty("vBMPCONS","Tooltiptext")',ctrl:'vBMPCONS',prop:'Tooltiptext'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'A3375FormaPgtoEmpresaId',fld:'FORMAPGTOEMPRESAID'},{av:'A10763FVParcelaFormaEmpId',fld:'FVPARCELAFORMAEMPID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A10764FVParcelaFormaId',fld:'FVPARCELAFORMAID'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'A10765FVParcelaFormaTpCobr',fld:'FVPARCELAFORMATPCOBR'},{av:'A3489FormaPgtoDescricao',fld:'FORMAPGTODESCRICAO'},{av:'A3797TpCobrFormaPgtoDescricao',fld:'TPCOBRFORMAPGTODESCRICAO'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV7FvEmpresa',fld:'vFVEMPRESA'},{av:'AV9FvId',fld:'vFVID'},{av:'AV5BmpCons',fld:'vBMPCONS'},{av:'gx.fn.getCtrlProperty("vBMPCONS","Tooltiptext")',ctrl:'vBMPCONS',prop:'Tooltiptext'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'A3375FormaPgtoEmpresaId',fld:'FORMAPGTOEMPRESAID'},{av:'A10763FVParcelaFormaEmpId',fld:'FVPARCELAFORMAEMPID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A10764FVParcelaFormaId',fld:'FVPARCELAFORMAID'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'A10765FVParcelaFormaTpCobr',fld:'FVPARCELAFORMATPCOBR'},{av:'A3489FormaPgtoDescricao',fld:'FORMAPGTODESCRICAO'},{av:'A3797TpCobrFormaPgtoDescricao',fld:'TPCOBRFORMAPGTODESCRICAO'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV7FvEmpresa',fld:'vFVEMPRESA'},{av:'AV9FvId',fld:'vFVID'},{av:'AV5BmpCons',fld:'vBMPCONS'},{av:'gx.fn.getCtrlProperty("vBMPCONS","Tooltiptext")',ctrl:'vBMPCONS',prop:'Tooltiptext'},{av:'AV16Pagina',fld:'vPAGINA'},{av:'A3375FormaPgtoEmpresaId',fld:'FORMAPGTOEMPRESAID'},{av:'A10763FVParcelaFormaEmpId',fld:'FVPARCELAFORMAEMPID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A10764FVParcelaFormaId',fld:'FVPARCELAFORMAID'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'A10765FVParcelaFormaTpCobr',fld:'FVPARCELAFORMATPCOBR'},{av:'A3489FormaPgtoDescricao',fld:'FORMAPGTODESCRICAO'},{av:'A3797TpCobrFormaPgtoDescricao',fld:'TPCOBRFORMAPGTODESCRICAO'},{av:'AV17PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV16Pagina',fld:'vPAGINA'}]];
   this.setVCMap("AV7FvEmpresa", "vFVEMPRESA", 0, "char");
   this.setVCMap("AV9FvId", "vFVID", 0, "int");
   this.setVCMap("A3375FormaPgtoEmpresaId", "FORMAPGTOEMPRESAID", 0, "char");
   this.setVCMap("A10763FVParcelaFormaEmpId", "FVPARCELAFORMAEMPID", 0, "char");
   this.setVCMap("A3376FormaPgtoId", "FORMAPGTOID", 0, "int");
   this.setVCMap("A10764FVParcelaFormaId", "FVPARCELAFORMAID", 0, "int");
   this.setVCMap("A3377TpCobrFormaPgtoId", "TPCOBRFORMAPGTOID", 0, "int");
   this.setVCMap("A10765FVParcelaFormaTpCobr", "FVPARCELAFORMATPCOBR", 0, "int");
   this.setVCMap("A3489FormaPgtoDescricao", "FORMAPGTODESCRICAO", 0, "svchar");
   this.setVCMap("A3797TpCobrFormaPgtoDescricao", "TPCOBRFORMAPGTODESCRICAO", 0, "svchar");
   this.setVCMap("AV7FvEmpresa", "vFVEMPRESA", 0, "char");
   this.setVCMap("AV9FvId", "vFVID", 0, "int");
   this.setVCMap("A3375FormaPgtoEmpresaId", "FORMAPGTOEMPRESAID", 0, "char");
   this.setVCMap("A10763FVParcelaFormaEmpId", "FVPARCELAFORMAEMPID", 0, "char");
   this.setVCMap("A3376FormaPgtoId", "FORMAPGTOID", 0, "int");
   this.setVCMap("A10764FVParcelaFormaId", "FVPARCELAFORMAID", 0, "int");
   this.setVCMap("A3377TpCobrFormaPgtoId", "TPCOBRFORMAPGTOID", 0, "int");
   this.setVCMap("A10765FVParcelaFormaTpCobr", "FVPARCELAFORMATPCOBR", 0, "int");
   this.setVCMap("A3489FormaPgtoDescricao", "FORMAPGTODESCRICAO", 0, "svchar");
   this.setVCMap("A3797TpCobrFormaPgtoDescricao", "TPCOBRFORMAPGTODESCRICAO", 0, "svchar");
   Grid1Container.addRefreshingVar({rfrVar:"AV7FvEmpresa"});
   Grid1Container.addRefreshingVar({rfrVar:"AV9FvId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV5BmpCons", rfrProp:"Value", gxAttId:"Bmpcons"});
   Grid1Container.addRefreshingVar({rfrVar:"AV5BmpCons", rfrProp:"Tooltiptext", gxAttId:"Bmpcons"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"A3375FormaPgtoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A10763FVParcelaFormaEmpId"});
   Grid1Container.addRefreshingVar({rfrVar:"A3376FormaPgtoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A10764FVParcelaFormaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A3377TpCobrFormaPgtoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A10765FVParcelaFormaTpCobr"});
   Grid1Container.addRefreshingVar({rfrVar:"A3489FormaPgtoDescricao"});
   Grid1Container.addRefreshingVar({rfrVar:"A3797TpCobrFormaPgtoDescricao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaforcavendaparc());

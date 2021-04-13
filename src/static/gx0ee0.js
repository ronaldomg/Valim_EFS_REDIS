/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:38:51.82
*/
gx.evt.autoSkip = false;
gx.define('gx0ee0', false, function () {
   this.ServerClass =  "gx0ee0" ;
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
      this.AV12pMovMensalProdutoFilialId=gx.fn.getIntegerValue("vPMOVMENSALPRODUTOFILIALID",'.') ;
      this.AV13pMovMensalProdutoProdutoId=gx.fn.getIntegerValue("vPMOVMENSALPRODUTOPRODUTOID",'.') ;
      this.AV14pMovMensalProdutoLote=gx.fn.getControlValue("vPMOVMENSALPRODUTOLOTE") ;
      this.AV15pMovMensalProdutoData=gx.fn.getDateValue("vPMOVMENSALPRODUTODATA") ;
   };
   this.e131ss2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141ss1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,54];
   this.GXLastCtrlId =54;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ee0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(6507,48,"MOVMENSALPRODUTOFILIALID","Mov Mensal Produto Filial Id","","MovMensalProdutoFilialId","int",0,"px",7,7,"right",null,[],6507,"MovMensalProdutoFilialId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6508,49,"MOVMENSALPRODUTOPRODUTOID","Mov Mensal Produto Produto Id","","MovMensalProdutoProdutoId","int",0,"px",10,10,"right",null,[],6508,"MovMensalProdutoProdutoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6509,50,"MOVMENSALPRODUTOLOTE","Mov Mensal Produto Lote","","MovMensalProdutoLote","char",0,"px",20,20,"left",null,[],6509,"MovMensalProdutoLote",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6510,51,"MOVMENSALPRODUTODATA","Mov Mensal Produto Data","","MovMensalProdutoData","date",0,"px",10,10,"right",null,[],6510,"MovMensalProdutoData",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKMOVMENSALPRODUTOFILIALID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMOVMENSALPRODUTOFILIALID",gxz:"ZV6cMovMensalProdutoFilialId",gxold:"OV6cMovMensalProdutoFilialId",gxvar:"AV6cMovMensalProdutoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cMovMensalProdutoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cMovMensalProdutoFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMOVMENSALPRODUTOFILIALID",gx.O.AV6cMovMensalProdutoFilialId,0)},c2v:function(){gx.O.AV6cMovMensalProdutoFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMOVMENSALPRODUTOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKMOVMENSALPRODUTOPRODUTOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMOVMENSALPRODUTOPRODUTOID",gxz:"ZV7cMovMensalProdutoProdutoId",gxold:"OV7cMovMensalProdutoProdutoId",gxvar:"AV7cMovMensalProdutoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cMovMensalProdutoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cMovMensalProdutoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMOVMENSALPRODUTOPRODUTOID",gx.O.AV7cMovMensalProdutoProdutoId,0)},c2v:function(){gx.O.AV7cMovMensalProdutoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMOVMENSALPRODUTOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKMOVMENSALPRODUTOLOTE", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMOVMENSALPRODUTOLOTE",gxz:"ZV8cMovMensalProdutoLote",gxold:"OV8cMovMensalProdutoLote",gxvar:"AV8cMovMensalProdutoLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cMovMensalProdutoLote=Value},v2z:function(Value){gx.O.ZV8cMovMensalProdutoLote=Value},v2c:function(){gx.fn.setControlValue("vCMOVMENSALPRODUTOLOTE",gx.O.AV8cMovMensalProdutoLote,0)},c2v:function(){gx.O.AV8cMovMensalProdutoLote=this.val()},val:function(){return gx.fn.getControlValue("vCMOVMENSALPRODUTOLOTE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKMOVMENSALPRODUTODATA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMOVMENSALPRODUTODATA",gxz:"ZV9cMovMensalProdutoData",gxold:"OV9cMovMensalProdutoData",gxvar:"AV9cMovMensalProdutoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cMovMensalProdutoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cMovMensalProdutoData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCMOVMENSALPRODUTODATA",gx.O.AV9cMovMensalProdutoData,0)},c2v:function(){gx.O.AV9cMovMensalProdutoData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCMOVMENSALPRODUTODATA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKMOVMENSALPRODUTOENTRADA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMOVMENSALPRODUTOENTRADA",gxz:"ZV10cMovMensalProdutoEntrada",gxold:"OV10cMovMensalProdutoEntrada",gxvar:"AV10cMovMensalProdutoEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cMovMensalProdutoEntrada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV10cMovMensalProdutoEntrada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCMOVMENSALPRODUTOENTRADA",gx.O.AV10cMovMensalProdutoEntrada,4,',')},c2v:function(){gx.O.AV10cMovMensalProdutoEntrada=this.val()},val:function(){return gx.fn.getDecimalValue("vCMOVMENSALPRODUTOENTRADA",'.',',')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKMOVMENSALPRODUTOSAIDA", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:18,dec:4,sign:true,pic:"ZZZZ,ZZZ,ZZZ,ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMOVMENSALPRODUTOSAIDA",gxz:"ZV11cMovMensalProdutoSaida",gxold:"OV11cMovMensalProdutoSaida",gxvar:"AV11cMovMensalProdutoSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cMovMensalProdutoSaida=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV11cMovMensalProdutoSaida=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCMOVMENSALPRODUTOSAIDA",gx.O.AV11cMovMensalProdutoSaida,4,',')},c2v:function(){gx.O.AV11cMovMensalProdutoSaida=this.val()},val:function(){return gx.fn.getDecimalValue("vCMOVMENSALPRODUTOSAIDA",'.',',')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MOVMENSALPRODUTOFILIALID",gxz:"Z6507MovMensalProdutoFilialId",gxold:"O6507MovMensalProdutoFilialId",gxvar:"A6507MovMensalProdutoFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6507MovMensalProdutoFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6507MovMensalProdutoFilialId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVMENSALPRODUTOFILIALID",row || gx.fn.currentGridRowImpl(46),gx.O.A6507MovMensalProdutoFilialId,0)},c2v:function(){gx.O.A6507MovMensalProdutoFilialId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOVMENSALPRODUTOFILIALID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MOVMENSALPRODUTOPRODUTOID",gxz:"Z6508MovMensalProdutoProdutoId",gxold:"O6508MovMensalProdutoProdutoId",gxvar:"A6508MovMensalProdutoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6508MovMensalProdutoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6508MovMensalProdutoProdutoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVMENSALPRODUTOPRODUTOID",row || gx.fn.currentGridRowImpl(46),gx.O.A6508MovMensalProdutoProdutoId,0)},c2v:function(){gx.O.A6508MovMensalProdutoProdutoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MOVMENSALPRODUTOPRODUTOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MOVMENSALPRODUTOLOTE",gxz:"Z6509MovMensalProdutoLote",gxold:"O6509MovMensalProdutoLote",gxvar:"A6509MovMensalProdutoLote",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6509MovMensalProdutoLote=Value},v2z:function(Value){gx.O.Z6509MovMensalProdutoLote=Value},v2c:function(row){gx.fn.setGridControlValue("MOVMENSALPRODUTOLOTE",row || gx.fn.currentGridRowImpl(46),gx.O.A6509MovMensalProdutoLote,0)},c2v:function(){gx.O.A6509MovMensalProdutoLote=this.val()},val:function(row){return gx.fn.getGridControlValue("MOVMENSALPRODUTOLOTE",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MOVMENSALPRODUTODATA",gxz:"Z6510MovMensalProdutoData",gxold:"O6510MovMensalProdutoData",gxvar:"A6510MovMensalProdutoData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6510MovMensalProdutoData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6510MovMensalProdutoData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MOVMENSALPRODUTODATA",row || gx.fn.currentGridRowImpl(46),gx.O.A6510MovMensalProdutoData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6510MovMensalProdutoData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MOVMENSALPRODUTODATA",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE4",grid:0};
   this.AV6cMovMensalProdutoFilialId = 0 ;
   this.ZV6cMovMensalProdutoFilialId = 0 ;
   this.OV6cMovMensalProdutoFilialId = 0 ;
   this.AV7cMovMensalProdutoProdutoId = 0 ;
   this.ZV7cMovMensalProdutoProdutoId = 0 ;
   this.OV7cMovMensalProdutoProdutoId = 0 ;
   this.AV8cMovMensalProdutoLote = "" ;
   this.ZV8cMovMensalProdutoLote = "" ;
   this.OV8cMovMensalProdutoLote = "" ;
   this.AV9cMovMensalProdutoData = gx.date.nullDate() ;
   this.ZV9cMovMensalProdutoData = gx.date.nullDate() ;
   this.OV9cMovMensalProdutoData = gx.date.nullDate() ;
   this.AV10cMovMensalProdutoEntrada = 0 ;
   this.ZV10cMovMensalProdutoEntrada = 0 ;
   this.OV10cMovMensalProdutoEntrada = 0 ;
   this.AV11cMovMensalProdutoSaida = 0 ;
   this.ZV11cMovMensalProdutoSaida = 0 ;
   this.OV11cMovMensalProdutoSaida = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z6507MovMensalProdutoFilialId = 0 ;
   this.O6507MovMensalProdutoFilialId = 0 ;
   this.Z6508MovMensalProdutoProdutoId = 0 ;
   this.O6508MovMensalProdutoProdutoId = 0 ;
   this.Z6509MovMensalProdutoLote = "" ;
   this.O6509MovMensalProdutoLote = "" ;
   this.Z6510MovMensalProdutoData = gx.date.nullDate() ;
   this.O6510MovMensalProdutoData = gx.date.nullDate() ;
   this.AV6cMovMensalProdutoFilialId = 0 ;
   this.AV7cMovMensalProdutoProdutoId = 0 ;
   this.AV8cMovMensalProdutoLote = "" ;
   this.AV9cMovMensalProdutoData = gx.date.nullDate() ;
   this.AV10cMovMensalProdutoEntrada = 0 ;
   this.AV11cMovMensalProdutoSaida = 0 ;
   this.AV12pMovMensalProdutoFilialId = 0 ;
   this.AV13pMovMensalProdutoProdutoId = 0 ;
   this.AV14pMovMensalProdutoLote = "" ;
   this.AV15pMovMensalProdutoData = gx.date.nullDate() ;
   this.A6506MovMensalProdutoSaida = 0 ;
   this.A6505MovMensalProdutoEntrada = 0 ;
   this.AV5LinkSelection = "" ;
   this.A6507MovMensalProdutoFilialId = 0 ;
   this.A6508MovMensalProdutoProdutoId = 0 ;
   this.A6509MovMensalProdutoLote = "" ;
   this.A6510MovMensalProdutoData = gx.date.nullDate() ;
   this.Events = {"e131ss2_client": ["ENTER", true] ,"e141ss1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMovMensalProdutoFilialId',fld:'vCMOVMENSALPRODUTOFILIALID'},{av:'AV7cMovMensalProdutoProdutoId',fld:'vCMOVMENSALPRODUTOPRODUTOID'},{av:'AV8cMovMensalProdutoLote',fld:'vCMOVMENSALPRODUTOLOTE'},{av:'AV9cMovMensalProdutoData',fld:'vCMOVMENSALPRODUTODATA'},{av:'AV10cMovMensalProdutoEntrada',fld:'vCMOVMENSALPRODUTOENTRADA'},{av:'AV11cMovMensalProdutoSaida',fld:'vCMOVMENSALPRODUTOSAIDA'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A6507MovMensalProdutoFilialId',fld:'MOVMENSALPRODUTOFILIALID'},{av:'A6508MovMensalProdutoProdutoId',fld:'MOVMENSALPRODUTOPRODUTOID'},{av:'A6509MovMensalProdutoLote',fld:'MOVMENSALPRODUTOLOTE'},{av:'A6510MovMensalProdutoData',fld:'MOVMENSALPRODUTODATA'}],[{av:'AV12pMovMensalProdutoFilialId',fld:'vPMOVMENSALPRODUTOFILIALID'},{av:'AV13pMovMensalProdutoProdutoId',fld:'vPMOVMENSALPRODUTOPRODUTOID'},{av:'AV14pMovMensalProdutoLote',fld:'vPMOVMENSALPRODUTOLOTE'},{av:'AV15pMovMensalProdutoData',fld:'vPMOVMENSALPRODUTODATA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMovMensalProdutoFilialId',fld:'vCMOVMENSALPRODUTOFILIALID'},{av:'AV7cMovMensalProdutoProdutoId',fld:'vCMOVMENSALPRODUTOPRODUTOID'},{av:'AV8cMovMensalProdutoLote',fld:'vCMOVMENSALPRODUTOLOTE'},{av:'AV9cMovMensalProdutoData',fld:'vCMOVMENSALPRODUTODATA'},{av:'AV10cMovMensalProdutoEntrada',fld:'vCMOVMENSALPRODUTOENTRADA'},{av:'AV11cMovMensalProdutoSaida',fld:'vCMOVMENSALPRODUTOSAIDA'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMovMensalProdutoFilialId',fld:'vCMOVMENSALPRODUTOFILIALID'},{av:'AV7cMovMensalProdutoProdutoId',fld:'vCMOVMENSALPRODUTOPRODUTOID'},{av:'AV8cMovMensalProdutoLote',fld:'vCMOVMENSALPRODUTOLOTE'},{av:'AV9cMovMensalProdutoData',fld:'vCMOVMENSALPRODUTODATA'},{av:'AV10cMovMensalProdutoEntrada',fld:'vCMOVMENSALPRODUTOENTRADA'},{av:'AV11cMovMensalProdutoSaida',fld:'vCMOVMENSALPRODUTOSAIDA'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMovMensalProdutoFilialId',fld:'vCMOVMENSALPRODUTOFILIALID'},{av:'AV7cMovMensalProdutoProdutoId',fld:'vCMOVMENSALPRODUTOPRODUTOID'},{av:'AV8cMovMensalProdutoLote',fld:'vCMOVMENSALPRODUTOLOTE'},{av:'AV9cMovMensalProdutoData',fld:'vCMOVMENSALPRODUTODATA'},{av:'AV10cMovMensalProdutoEntrada',fld:'vCMOVMENSALPRODUTOENTRADA'},{av:'AV11cMovMensalProdutoSaida',fld:'vCMOVMENSALPRODUTOSAIDA'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMovMensalProdutoFilialId',fld:'vCMOVMENSALPRODUTOFILIALID'},{av:'AV7cMovMensalProdutoProdutoId',fld:'vCMOVMENSALPRODUTOPRODUTOID'},{av:'AV8cMovMensalProdutoLote',fld:'vCMOVMENSALPRODUTOLOTE'},{av:'AV9cMovMensalProdutoData',fld:'vCMOVMENSALPRODUTODATA'},{av:'AV10cMovMensalProdutoEntrada',fld:'vCMOVMENSALPRODUTOENTRADA'},{av:'AV11cMovMensalProdutoSaida',fld:'vCMOVMENSALPRODUTOSAIDA'}],[]];
   this.setVCMap("AV12pMovMensalProdutoFilialId", "vPMOVMENSALPRODUTOFILIALID", 0, "int");
   this.setVCMap("AV13pMovMensalProdutoProdutoId", "vPMOVMENSALPRODUTOPRODUTOID", 0, "int");
   this.setVCMap("AV14pMovMensalProdutoLote", "vPMOVMENSALPRODUTOLOTE", 0, "char");
   this.setVCMap("AV15pMovMensalProdutoData", "vPMOVMENSALPRODUTODATA", 0, "date");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ee0());
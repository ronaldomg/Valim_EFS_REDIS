/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:43:28.48
*/
gx.evt.autoSkip = false;
gx.define('gx0js0', false, function () {
   this.ServerClass =  "gx0js0" ;
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
      this.AV11pSaidaEmpresaId=gx.fn.getControlValue("vPSAIDAEMPRESAID") ;
      this.AV12pSaidaId=gx.fn.getIntegerValue("vPSAIDAID",'.') ;
      this.AV13pSaidaLogSefazSequencia=gx.fn.getIntegerValue("vPSAIDALOGSEFAZSEQUENCIA",'.') ;
   };
   this.e131x12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141x11_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0js0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4306,43,"SAIDAEMPRESAID","Empresa Saída","","SaidaEmpresaId","char",0,"px",10,10,"left",null,[],4306,"SaidaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4307,44,"SAIDAID","Número da Saída","","SaidaId","int",0,"px",10,10,"right",null,[],4307,"SaidaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9555,45,"SAIDALOGSEFAZSEQUENCIA","Saida Log Sefaz Sequencia","","SaidaLogSefazSequencia","int",0,"px",4,4,"right",null,[],9555,"SaidaLogSefazSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9552,46,"SAIDALOGSEFAZDATA","Saida Log Sefaz Data","Selecionar","SaidaLogSefazData","dtime",0,"px",16,16,"right",null,[],9552,"SaidaLogSefazData",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(9553,47,"SAIDALOGSEFAZCODRETORNO","Saida Log Sefaz Cod Retorno","","SaidaLogSefazCodRetorno","int",0,"px",6,6,"right",null,[],9553,"SaidaLogSefazCodRetorno",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSAIDAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAEMPRESAID",gxz:"ZV6cSaidaEmpresaId",gxold:"OV6cSaidaEmpresaId",gxvar:"AV6cSaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSaidaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cSaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAEMPRESAID",gx.O.AV6cSaidaEmpresaId,0)},c2v:function(){gx.O.AV6cSaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSAIDAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAID",gxz:"ZV7cSaidaId",gxold:"OV7cSaidaId",gxvar:"AV7cSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDAID",gx.O.AV7cSaidaId,0)},c2v:function(){gx.O.AV7cSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSAIDALOGSEFAZSEQUENCIA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDALOGSEFAZSEQUENCIA",gxz:"ZV8cSaidaLogSefazSequencia",gxold:"OV8cSaidaLogSefazSequencia",gxvar:"AV8cSaidaLogSefazSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSaidaLogSefazSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cSaidaLogSefazSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDALOGSEFAZSEQUENCIA",gx.O.AV8cSaidaLogSefazSequencia,0)},c2v:function(){gx.O.AV8cSaidaLogSefazSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDALOGSEFAZSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSAIDALOGSEFAZDATA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDALOGSEFAZDATA",gxz:"ZV9cSaidaLogSefazData",gxold:"OV9cSaidaLogSefazData",gxvar:"AV9cSaidaLogSefazData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSaidaLogSefazData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cSaidaLogSefazData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDALOGSEFAZDATA",gx.O.AV9cSaidaLogSefazData,0)},c2v:function(){gx.O.AV9cSaidaLogSefazData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCSAIDALOGSEFAZDATA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKSAIDALOGSEFAZCODRETORNO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDALOGSEFAZCODRETORNO",gxz:"ZV10cSaidaLogSefazCodRetorno",gxold:"OV10cSaidaLogSefazCodRetorno",gxvar:"AV10cSaidaLogSefazCodRetorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cSaidaLogSefazCodRetorno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cSaidaLogSefazCodRetorno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDALOGSEFAZCODRETORNO",gx.O.AV10cSaidaLogSefazCodRetorno,0)},c2v:function(){gx.O.AV10cSaidaLogSefazCodRetorno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDALOGSEFAZCODRETORNO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAID",row || gx.fn.currentGridRowImpl(41),gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDALOGSEFAZSEQUENCIA",gxz:"Z9555SaidaLogSefazSequencia",gxold:"O9555SaidaLogSefazSequencia",gxvar:"A9555SaidaLogSefazSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9555SaidaLogSefazSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9555SaidaLogSefazSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDALOGSEFAZSEQUENCIA",row || gx.fn.currentGridRowImpl(41),gx.O.A9555SaidaLogSefazSequencia,0)},c2v:function(){gx.O.A9555SaidaLogSefazSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDALOGSEFAZSEQUENCIA",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDALOGSEFAZDATA",gxz:"Z9552SaidaLogSefazData",gxold:"O9552SaidaLogSefazData",gxvar:"A9552SaidaLogSefazData",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9552SaidaLogSefazData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z9552SaidaLogSefazData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDALOGSEFAZDATA",row || gx.fn.currentGridRowImpl(41),gx.O.A9552SaidaLogSefazData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9552SaidaLogSefazData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SAIDALOGSEFAZDATA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDALOGSEFAZCODRETORNO",gxz:"Z9553SaidaLogSefazCodRetorno",gxold:"O9553SaidaLogSefazCodRetorno",gxvar:"A9553SaidaLogSefazCodRetorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9553SaidaLogSefazCodRetorno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9553SaidaLogSefazCodRetorno=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDALOGSEFAZCODRETORNO",row || gx.fn.currentGridRowImpl(41),gx.O.A9553SaidaLogSefazCodRetorno,0)},c2v:function(){gx.O.A9553SaidaLogSefazCodRetorno=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDALOGSEFAZCODRETORNO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cSaidaEmpresaId = "" ;
   this.ZV6cSaidaEmpresaId = "" ;
   this.OV6cSaidaEmpresaId = "" ;
   this.AV7cSaidaId = 0 ;
   this.ZV7cSaidaId = 0 ;
   this.OV7cSaidaId = 0 ;
   this.AV8cSaidaLogSefazSequencia = 0 ;
   this.ZV8cSaidaLogSefazSequencia = 0 ;
   this.OV8cSaidaLogSefazSequencia = 0 ;
   this.AV9cSaidaLogSefazData = gx.date.nullDate() ;
   this.ZV9cSaidaLogSefazData = gx.date.nullDate() ;
   this.OV9cSaidaLogSefazData = gx.date.nullDate() ;
   this.AV10cSaidaLogSefazCodRetorno = 0 ;
   this.ZV10cSaidaLogSefazCodRetorno = 0 ;
   this.OV10cSaidaLogSefazCodRetorno = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.Z9555SaidaLogSefazSequencia = 0 ;
   this.O9555SaidaLogSefazSequencia = 0 ;
   this.Z9552SaidaLogSefazData = gx.date.nullDate() ;
   this.O9552SaidaLogSefazData = gx.date.nullDate() ;
   this.Z9553SaidaLogSefazCodRetorno = 0 ;
   this.O9553SaidaLogSefazCodRetorno = 0 ;
   this.AV6cSaidaEmpresaId = "" ;
   this.AV7cSaidaId = 0 ;
   this.AV8cSaidaLogSefazSequencia = 0 ;
   this.AV9cSaidaLogSefazData = gx.date.nullDate() ;
   this.AV10cSaidaLogSefazCodRetorno = 0 ;
   this.AV11pSaidaEmpresaId = "" ;
   this.AV12pSaidaId = 0 ;
   this.AV13pSaidaLogSefazSequencia = 0 ;
   this.AV5LinkSelection = "" ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A9555SaidaLogSefazSequencia = 0 ;
   this.A9552SaidaLogSefazData = gx.date.nullDate() ;
   this.A9553SaidaLogSefazCodRetorno = 0 ;
   this.Events = {"e131x12_client": ["ENTER", true] ,"e141x11_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaLogSefazSequencia',fld:'vCSAIDALOGSEFAZSEQUENCIA'},{av:'AV9cSaidaLogSefazData',fld:'vCSAIDALOGSEFAZDATA'},{av:'AV10cSaidaLogSefazCodRetorno',fld:'vCSAIDALOGSEFAZCODRETORNO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'A4307SaidaId',fld:'SAIDAID'},{av:'A9555SaidaLogSefazSequencia',fld:'SAIDALOGSEFAZSEQUENCIA'}],[{av:'AV11pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID'},{av:'AV12pSaidaId',fld:'vPSAIDAID'},{av:'AV13pSaidaLogSefazSequencia',fld:'vPSAIDALOGSEFAZSEQUENCIA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaLogSefazSequencia',fld:'vCSAIDALOGSEFAZSEQUENCIA'},{av:'AV9cSaidaLogSefazData',fld:'vCSAIDALOGSEFAZDATA'},{av:'AV10cSaidaLogSefazCodRetorno',fld:'vCSAIDALOGSEFAZCODRETORNO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaLogSefazSequencia',fld:'vCSAIDALOGSEFAZSEQUENCIA'},{av:'AV9cSaidaLogSefazData',fld:'vCSAIDALOGSEFAZDATA'},{av:'AV10cSaidaLogSefazCodRetorno',fld:'vCSAIDALOGSEFAZCODRETORNO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaLogSefazSequencia',fld:'vCSAIDALOGSEFAZSEQUENCIA'},{av:'AV9cSaidaLogSefazData',fld:'vCSAIDALOGSEFAZDATA'},{av:'AV10cSaidaLogSefazCodRetorno',fld:'vCSAIDALOGSEFAZCODRETORNO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaLogSefazSequencia',fld:'vCSAIDALOGSEFAZSEQUENCIA'},{av:'AV9cSaidaLogSefazData',fld:'vCSAIDALOGSEFAZDATA'},{av:'AV10cSaidaLogSefazCodRetorno',fld:'vCSAIDALOGSEFAZCODRETORNO'}],[]];
   this.setVCMap("AV11pSaidaEmpresaId", "vPSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV12pSaidaId", "vPSAIDAID", 0, "int");
   this.setVCMap("AV13pSaidaLogSefazSequencia", "vPSAIDALOGSEFAZSEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0js0());

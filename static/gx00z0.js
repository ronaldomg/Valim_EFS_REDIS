/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:24:48.84
*/
gx.evt.autoSkip = false;
gx.define('gx00z0', false, function () {
   this.ServerClass =  "gx00z0" ;
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
      this.AV13pLancamentoContabilEmpresaid=gx.fn.getControlValue("vPLANCAMENTOCONTABILEMPRESAID") ;
      this.AV14pLancamentoContabilId=gx.fn.getIntegerValue("vPLANCAMENTOCONTABILID",'.') ;
   };
   this.e131i82_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141i81_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,59];
   this.GXLastCtrlId =59;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00z0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(341,53,"LANCAMENTOCONTABILEMPRESAID","Código Empresa Conta Contábil","","LancamentoContabilEmpresaid","char",0,"px",10,10,"left",null,[],341,"LancamentoContabilEmpresaid",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(61,54,"LANCAMENTOCONTABILID","Número Lançamento","","LancamentoContabilId","int",0,"px",8,8,"right",null,[],61,"LancamentoContabilId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(60,55,"LANCAMENTOCONTABILDATA","Data do Item do LancamentoContabil","","LancamentoContabilData","date",0,"px",10,10,"right",null,[],60,"LancamentoContabilData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(346,56,"EMPRESATRANSACAOCONTABILEMPRES","Empresa Transacao Contabil Empresa Id","","EmpresaTransacaoContabilEmpres","char",0,"px",10,10,"left",null,[],346,"EmpresaTransacaoContabilEmpres",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKLANCAMENTOCONTABILEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLANCAMENTOCONTABILEMPRESAID",gxz:"ZV6cLancamentoContabilEmpresaid",gxold:"OV6cLancamentoContabilEmpresaid",gxvar:"AV6cLancamentoContabilEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cLancamentoContabilEmpresaid=Value},v2z:function(Value){gx.O.ZV6cLancamentoContabilEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vCLANCAMENTOCONTABILEMPRESAID",gx.O.AV6cLancamentoContabilEmpresaid,0)},c2v:function(){gx.O.AV6cLancamentoContabilEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vCLANCAMENTOCONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKLANCAMENTOCONTABILID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLANCAMENTOCONTABILID",gxz:"ZV7cLancamentoContabilId",gxold:"OV7cLancamentoContabilId",gxvar:"AV7cLancamentoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cLancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cLancamentoContabilId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLANCAMENTOCONTABILID",gx.O.AV7cLancamentoContabilId,0)},c2v:function(){gx.O.AV7cLancamentoContabilId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLANCAMENTOCONTABILID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKLANCAMENTOCONTABILDATA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLANCAMENTOCONTABILDATA",gxz:"ZV8cLancamentoContabilData",gxold:"OV8cLancamentoContabilData",gxvar:"AV8cLancamentoContabilData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cLancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8cLancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCLANCAMENTOCONTABILDATA",gx.O.AV8cLancamentoContabilData,0)},c2v:function(){gx.O.AV8cLancamentoContabilData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCLANCAMENTOCONTABILDATA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKEMPRESATRANSACAOCONTABILEMPRESAID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESATRANSACAOCONTABILEMPRESAID",gxz:"ZV9cEmpresaTransacaoContabilEmpresaId",gxold:"OV9cEmpresaTransacaoContabilEmpresaId",gxvar:"AV9cEmpresaTransacaoContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cEmpresaTransacaoContabilEmpresaId=Value},v2z:function(Value){gx.O.ZV9cEmpresaTransacaoContabilEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESATRANSACAOCONTABILEMPRESAID",gx.O.AV9cEmpresaTransacaoContabilEmpresaId,0)},c2v:function(){gx.O.AV9cEmpresaTransacaoContabilEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESATRANSACAOCONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTRANSACAOCONTABILID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOCONTABILID",gxz:"ZV10cTransacaoContabilId",gxold:"OV10cTransacaoContabilId",gxvar:"AV10cTransacaoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTransacaoContabilId=Value},v2z:function(Value){gx.O.ZV10cTransacaoContabilId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOCONTABILID",gx.O.AV10cTransacaoContabilId,0)},c2v:function(){gx.O.AV10cTransacaoContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOCONTABILID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKLANCAMENTOCONTABILESTORNO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLANCAMENTOCONTABILESTORNO",gxz:"ZV11cLancamentoContabilEstorno",gxold:"OV11cLancamentoContabilEstorno",gxvar:"AV11cLancamentoContabilEstorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cLancamentoContabilEstorno=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cLancamentoContabilEstorno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCLANCAMENTOCONTABILESTORNO",gx.O.AV11cLancamentoContabilEstorno,0)},c2v:function(){gx.O.AV11cLancamentoContabilEstorno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCLANCAMENTOCONTABILESTORNO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKLANCAMENTOCONTABILUSUARIOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCLANCAMENTOCONTABILUSUARIOID",gxz:"ZV12cLancamentoContabilUsuarioId",gxold:"OV12cLancamentoContabilUsuarioId",gxvar:"AV12cLancamentoContabilUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cLancamentoContabilUsuarioId=Value},v2z:function(Value){gx.O.ZV12cLancamentoContabilUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCLANCAMENTOCONTABILUSUARIOID",gx.O.AV12cLancamentoContabilUsuarioId,0)},c2v:function(){gx.O.AV12cLancamentoContabilUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCLANCAMENTOCONTABILUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILEMPRESAID",gxz:"Z341LancamentoContabilEmpresaid",gxold:"O341LancamentoContabilEmpresaid",gxvar:"A341LancamentoContabilEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A341LancamentoContabilEmpresaid=Value},v2z:function(Value){gx.O.Z341LancamentoContabilEmpresaid=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A341LancamentoContabilEmpresaid,0)},c2v:function(){gx.O.A341LancamentoContabilEmpresaid=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCONTABILEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILID",gxz:"Z61LancamentoContabilId",gxold:"O61LancamentoContabilId",gxvar:"A61LancamentoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A61LancamentoContabilId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z61LancamentoContabilId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILID",row || gx.fn.currentGridRowImpl(51),gx.O.A61LancamentoContabilId,0)},c2v:function(){gx.O.A61LancamentoContabilId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCONTABILID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCONTABILDATA",gxz:"Z60LancamentoContabilData",gxold:"O60LancamentoContabilData",gxvar:"A60LancamentoContabilData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A60LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z60LancamentoContabilData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCONTABILDATA",row || gx.fn.currentGridRowImpl(51),gx.O.A60LancamentoContabilData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A60LancamentoContabilData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCAMENTOCONTABILDATA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESATRANSACAOCONTABILEMPRES",gxz:"Z346EmpresaTransacaoContabilEmpres",gxold:"O346EmpresaTransacaoContabilEmpres",gxvar:"A346EmpresaTransacaoContabilEmpres",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A346EmpresaTransacaoContabilEmpres=Value},v2z:function(Value){gx.O.Z346EmpresaTransacaoContabilEmpres=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESATRANSACAOCONTABILEMPRES",row || gx.fn.currentGridRowImpl(51),gx.O.A346EmpresaTransacaoContabilEmpres,0)},c2v:function(){gx.O.A346EmpresaTransacaoContabilEmpres=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESATRANSACAOCONTABILEMPRES",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE4",grid:0};
   this.AV6cLancamentoContabilEmpresaid = "" ;
   this.ZV6cLancamentoContabilEmpresaid = "" ;
   this.OV6cLancamentoContabilEmpresaid = "" ;
   this.AV7cLancamentoContabilId = 0 ;
   this.ZV7cLancamentoContabilId = 0 ;
   this.OV7cLancamentoContabilId = 0 ;
   this.AV8cLancamentoContabilData = gx.date.nullDate() ;
   this.ZV8cLancamentoContabilData = gx.date.nullDate() ;
   this.OV8cLancamentoContabilData = gx.date.nullDate() ;
   this.AV9cEmpresaTransacaoContabilEmpresaId = "" ;
   this.ZV9cEmpresaTransacaoContabilEmpresaId = "" ;
   this.OV9cEmpresaTransacaoContabilEmpresaId = "" ;
   this.AV10cTransacaoContabilId = "" ;
   this.ZV10cTransacaoContabilId = "" ;
   this.OV10cTransacaoContabilId = "" ;
   this.AV11cLancamentoContabilEstorno = 0 ;
   this.ZV11cLancamentoContabilEstorno = 0 ;
   this.OV11cLancamentoContabilEstorno = 0 ;
   this.AV12cLancamentoContabilUsuarioId = "" ;
   this.ZV12cLancamentoContabilUsuarioId = "" ;
   this.OV12cLancamentoContabilUsuarioId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z341LancamentoContabilEmpresaid = "" ;
   this.O341LancamentoContabilEmpresaid = "" ;
   this.Z61LancamentoContabilId = 0 ;
   this.O61LancamentoContabilId = 0 ;
   this.Z60LancamentoContabilData = gx.date.nullDate() ;
   this.O60LancamentoContabilData = gx.date.nullDate() ;
   this.Z346EmpresaTransacaoContabilEmpres = "" ;
   this.O346EmpresaTransacaoContabilEmpres = "" ;
   this.AV6cLancamentoContabilEmpresaid = "" ;
   this.AV7cLancamentoContabilId = 0 ;
   this.AV8cLancamentoContabilData = gx.date.nullDate() ;
   this.AV9cEmpresaTransacaoContabilEmpresaId = "" ;
   this.AV10cTransacaoContabilId = "" ;
   this.AV11cLancamentoContabilEstorno = 0 ;
   this.AV12cLancamentoContabilUsuarioId = "" ;
   this.AV13pLancamentoContabilEmpresaid = "" ;
   this.AV14pLancamentoContabilId = 0 ;
   this.A799LancamentoContabilUsuarioId = "" ;
   this.A342LancamentoContabilEstorno = 0 ;
   this.A347TransacaoContabilId = "" ;
   this.AV5LinkSelection = "" ;
   this.A341LancamentoContabilEmpresaid = "" ;
   this.A61LancamentoContabilId = 0 ;
   this.A60LancamentoContabilData = gx.date.nullDate() ;
   this.A346EmpresaTransacaoContabilEmpres = "" ;
   this.Events = {"e131i82_client": ["ENTER", true] ,"e141i81_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLancamentoContabilEmpresaid',fld:'vCLANCAMENTOCONTABILEMPRESAID'},{av:'AV7cLancamentoContabilId',fld:'vCLANCAMENTOCONTABILID'},{av:'AV8cLancamentoContabilData',fld:'vCLANCAMENTOCONTABILDATA'},{av:'AV9cEmpresaTransacaoContabilEmpresaId',fld:'vCEMPRESATRANSACAOCONTABILEMPRESAID'},{av:'AV10cTransacaoContabilId',fld:'vCTRANSACAOCONTABILID'},{av:'AV11cLancamentoContabilEstorno',fld:'vCLANCAMENTOCONTABILESTORNO'},{av:'AV12cLancamentoContabilUsuarioId',fld:'vCLANCAMENTOCONTABILUSUARIOID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'}],[{av:'AV13pLancamentoContabilEmpresaid',fld:'vPLANCAMENTOCONTABILEMPRESAID'},{av:'AV14pLancamentoContabilId',fld:'vPLANCAMENTOCONTABILID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLancamentoContabilEmpresaid',fld:'vCLANCAMENTOCONTABILEMPRESAID'},{av:'AV7cLancamentoContabilId',fld:'vCLANCAMENTOCONTABILID'},{av:'AV8cLancamentoContabilData',fld:'vCLANCAMENTOCONTABILDATA'},{av:'AV9cEmpresaTransacaoContabilEmpresaId',fld:'vCEMPRESATRANSACAOCONTABILEMPRESAID'},{av:'AV10cTransacaoContabilId',fld:'vCTRANSACAOCONTABILID'},{av:'AV11cLancamentoContabilEstorno',fld:'vCLANCAMENTOCONTABILESTORNO'},{av:'AV12cLancamentoContabilUsuarioId',fld:'vCLANCAMENTOCONTABILUSUARIOID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLancamentoContabilEmpresaid',fld:'vCLANCAMENTOCONTABILEMPRESAID'},{av:'AV7cLancamentoContabilId',fld:'vCLANCAMENTOCONTABILID'},{av:'AV8cLancamentoContabilData',fld:'vCLANCAMENTOCONTABILDATA'},{av:'AV9cEmpresaTransacaoContabilEmpresaId',fld:'vCEMPRESATRANSACAOCONTABILEMPRESAID'},{av:'AV10cTransacaoContabilId',fld:'vCTRANSACAOCONTABILID'},{av:'AV11cLancamentoContabilEstorno',fld:'vCLANCAMENTOCONTABILESTORNO'},{av:'AV12cLancamentoContabilUsuarioId',fld:'vCLANCAMENTOCONTABILUSUARIOID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLancamentoContabilEmpresaid',fld:'vCLANCAMENTOCONTABILEMPRESAID'},{av:'AV7cLancamentoContabilId',fld:'vCLANCAMENTOCONTABILID'},{av:'AV8cLancamentoContabilData',fld:'vCLANCAMENTOCONTABILDATA'},{av:'AV9cEmpresaTransacaoContabilEmpresaId',fld:'vCEMPRESATRANSACAOCONTABILEMPRESAID'},{av:'AV10cTransacaoContabilId',fld:'vCTRANSACAOCONTABILID'},{av:'AV11cLancamentoContabilEstorno',fld:'vCLANCAMENTOCONTABILESTORNO'},{av:'AV12cLancamentoContabilUsuarioId',fld:'vCLANCAMENTOCONTABILUSUARIOID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cLancamentoContabilEmpresaid',fld:'vCLANCAMENTOCONTABILEMPRESAID'},{av:'AV7cLancamentoContabilId',fld:'vCLANCAMENTOCONTABILID'},{av:'AV8cLancamentoContabilData',fld:'vCLANCAMENTOCONTABILDATA'},{av:'AV9cEmpresaTransacaoContabilEmpresaId',fld:'vCEMPRESATRANSACAOCONTABILEMPRESAID'},{av:'AV10cTransacaoContabilId',fld:'vCTRANSACAOCONTABILID'},{av:'AV11cLancamentoContabilEstorno',fld:'vCLANCAMENTOCONTABILESTORNO'},{av:'AV12cLancamentoContabilUsuarioId',fld:'vCLANCAMENTOCONTABILUSUARIOID'}],[]];
   this.setVCMap("AV13pLancamentoContabilEmpresaid", "vPLANCAMENTOCONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV14pLancamentoContabilId", "vPLANCAMENTOCONTABILID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx00z0());
/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:10:38.56
*/
gx.evt.autoSkip = false;
gx.define('hemiteboletosaidapedido', false, function () {
   this.ServerClass =  "hemiteboletosaidapedido" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("4", "'FINALIZAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV5SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID") ;
   };
   this.e122cc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132cc2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e112cc2_client=function()
   {
      this.executeServerEvent("'FINALIZAR'", false, null, false, false);
   };
   this.e162cc2_client=function()
   {
      this.executeServerEvent("'EXCLUIRLINHA'", true, arguments[0], false, false);
   };
   this.e142cc2_client=function()
   {
      this.executeServerEvent("'PROMPTSAIDA'", true, null, false, false);
   };
   this.e182cc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,16,17,24,26,27,28];
   this.GXLastCtrlId =28;
   this.Grid2Container = new gx.grid.grid(this, 2,"WbpLvl2",25,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"hemiteboletosaidapedido",[],false,1,false,true,0,true,false,false,"CollSdtConsSaida.SdtConsSaidaItem",0,"px","Novo registro",true,false,false,null,null,false,"AV23SdtConsSaida",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("GXV10Q",26,"CTLNUMNOTA","Número do documento","","NumNota","int",0,"px",10,10,"right",null,[],"GXV10Q","GXV10Q",true,0,false,false,"Attribute",1,"");
   Grid2Container.addBitmap("&Bmpexc","vBMPEXC",27,0,"px",17,"px","e162cc2_client","","Exc","Image","");
   this.setGrid(Grid2Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV17SaidaNoDocumento",gxold:"OV17SaidaNoDocumento",gxvar:"AV17SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17SaidaNoDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17SaidaNoDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV17SaidaNoDocumento,0)},c2v:function(){gx.O.AV17SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[14]={fld:"PROMPTSAIDA",grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAID",gxz:"ZV16SaidaId",gxold:"OV16SaidaId",gxvar:"AV16SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16SaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSAIDAID",gx.O.AV16SaidaId,0)},c2v:function(){gx.O.AV16SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPO",gxz:"ZV19Tipo",gxold:"OV19Tipo",gxvar:"AV19Tipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Tipo=Value},v2z:function(Value){gx.O.ZV19Tipo=Value},v2c:function(){gx.fn.setControlValue("vTIPO",gx.O.AV19Tipo,0)},c2v:function(){gx.O.AV19Tipo=this.val()},val:function(){return gx.fn.getControlValue("vTIPO")},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV15PessoaId",gxold:"OV15PessoaId",gxvar:"AV15PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV15PessoaId,0)},c2v:function(){gx.O.AV15PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[26]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:25,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMNOTA",gxz:"ZV30GXV10Q",gxold:"OV30GXV10Q",gxvar:"GXV10Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10Q=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30GXV10Q=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMNOTA",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10Q,0)},c2v:function(){gx.O.GXV10Q=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMNOTA",row || gx.fn.currentGridRowImpl(25),'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:25,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV6bmpExc",gxold:"OV6bmpExc",gxvar:"AV6bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6bmpExc=Value},v2z:function(Value){gx.O.ZV6bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(25),gx.O.AV6bmpExc,gx.O.AV33Bmpexc_GXI)},c2v:function(){gx.O.AV33Bmpexc_GXI=this.val_GXI();gx.O.AV6bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(25))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(25))}, gxvar_GXI:'AV33Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[28]={fld:"DIV2", format:2,grid:0};
   this.AV17SaidaNoDocumento = 0 ;
   this.ZV17SaidaNoDocumento = 0 ;
   this.OV17SaidaNoDocumento = 0 ;
   this.AV16SaidaId = 0 ;
   this.ZV16SaidaId = 0 ;
   this.OV16SaidaId = 0 ;
   this.AV19Tipo = "" ;
   this.ZV19Tipo = "" ;
   this.OV19Tipo = "" ;
   this.AV15PessoaId = 0 ;
   this.ZV15PessoaId = 0 ;
   this.OV15PessoaId = 0 ;
   this.ZV30GXV10Q = 0 ;
   this.OV30GXV10Q = 0 ;
   this.ZV6bmpExc = "" ;
   this.OV6bmpExc = "" ;
   this.AV17SaidaNoDocumento = 0 ;
   this.AV16SaidaId = 0 ;
   this.AV19Tipo = "" ;
   this.AV15PessoaId = 0 ;
   this.AV5SaidaEmpresaId = "" ;
   this.GXV10Q = 0 ;
   this.AV6bmpExc = "" ;
   this.A992TipoCobrancaId = 0 ;
   this.A991TipoCobrancaEmpresaId = "" ;
   this.A988TipoCobrancaFormaCob = "" ;
   this.A5960SaidaNoDocumento = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.Events = {"e122cc2_client": ["'FECHAR'", true] ,"e132cc2_client": ["ENTER", true] ,"e112cc2_client": ["'FINALIZAR'", true] ,"e162cc2_client": ["'EXCLUIRLINHA'", true] ,"e142cc2_client": ["'PROMPTSAIDA'", true] ,"e182cc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'AV23SdtConsSaida',fld:'vSDTCONSSAIDA',grid:25},{av:'subGrid2_Rows'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'}],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV17SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV23SdtConsSaida',fld:'vSDTCONSSAIDA',grid:25},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV5SaidaEmpresaId',fld:'vSAIDAEMPRESAID',hsh:true},{av:'A5960SaidaNoDocumento',fld:'SAIDANODOCUMENTO'},{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'}],[{av:'AV14isErro',fld:'vISERRO'},{av:'AV31GXV2',fld:'vGXV2'},{av:'AV24SdtConsSaidaItem',fld:'vSDTCONSSAIDAITEM'},{av:'AV32GXLvl22',fld:'vGXLVL22'},{av:'AV23SdtConsSaida',fld:'vSDTCONSSAIDA',grid:25},{av:'AV17SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'}]];
   this.EvtParms["'FINALIZAR'"] = [[{av:'AV23SdtConsSaida',fld:'vSDTCONSSAIDA',grid:25},{av:'AV17SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'}],[{av:'AV14isErro',fld:'vISERRO'}]];
   this.EvtParms["'PROMPTSAIDA'"] = [[{av:'AV19Tipo',fld:'vTIPO'},{av:'AV15PessoaId',fld:'vPESSOAID'}],[{av:'AV17SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV18SaidaSerie',fld:'vSAIDASERIE'},{av:'AV10CooOut',fld:'vCOOOUT'},{av:'AV12ECFOut',fld:'vECFOUT'},{av:'AV16SaidaId',fld:'vSAIDAID',hsh:true}]];
   this.EvtParms["'EXCLUIRLINHA'"] = [[{av:'AV23SdtConsSaida',fld:'vSDTCONSSAIDA',grid:25},{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'}],[{av:'AV13Idx',fld:'vIDX'},{av:'AV23SdtConsSaida',fld:'vSDTCONSSAIDA',grid:25}]];
   this.EvtParms["GRID2_FIRSTPAGE"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV23SdtConsSaida',fld:'vSDTCONSSAIDA',grid:25}],[]];
   this.EvtParms["GRID2_PREVPAGE"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV23SdtConsSaida',fld:'vSDTCONSSAIDA',grid:25}],[]];
   this.EvtParms["GRID2_NEXTPAGE"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV23SdtConsSaida',fld:'vSDTCONSSAIDA',grid:25}],[]];
   this.EvtParms["GRID2_LASTPAGE"] = [[{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'subGrid2_Rows'},{av:'AV6bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV23SdtConsSaida',fld:'vSDTCONSSAIDA',grid:25}],[]];
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("AV5SaidaEmpresaId", "vSAIDAEMPRESAID", 0, "char");
   Grid2Container.addRefreshingVar({rfrVar:"AV6bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   Grid2Container.addRefreshingVar({rfrVar:"AV6bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   Grid2Container.addRefreshingVar({rfrVar:"AV6bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   this.addGridBCProperty("Sdtconssaida", ["NumNota"], this.GXValidFnc[26], "AV23SdtConsSaida");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hemiteboletosaidapedido());

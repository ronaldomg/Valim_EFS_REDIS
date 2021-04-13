/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:34:10.66
*/
gx.evt.autoSkip = false;
gx.define('gx03y1', false, function () {
   this.ServerClass =  "gx03y1" ;
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
      this.AV12pTransacaoCxBcoEmpresaId=gx.fn.getControlValue("vPTRANSACAOCXBCOEMPRESAID") ;
      this.AV13pTransacaoCxBcoSigla=gx.fn.getControlValue("vPTRANSACAOCXBCOSIGLA") ;
   };
   this.e131p22_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141p21_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,56];
   this.GXLastCtrlId =56;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx03y1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1114,48,"TRANSACAOCXBCOSIGLA","Sigla da Transação","","TransacaoCxBcoSigla","char",0,"px",8,8,"left",null,[],1114,"TransacaoCxBcoSigla",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1116,49,"TRANSACAOCXBCODESCRICAO","Descrição","Selecionar","TransacaoCxBcoDescricao","svchar",0,"px",40,40,"left",null,[],1116,"TransacaoCxBcoDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1117,50,"TRANSACAOCXBCOSNOBRCCUSTO","Exigir Centro de Custo","","TransacaoCxBcoSnObrCCusto","char",0,"px",1,1,"left",null,[],1117,"TransacaoCxBcoSnObrCCusto",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1118,51,"TRANSACAOCXBCOSNOBRCLIFOR","Exigir Cliente/Fornecedor","","TransacaoCxBcoSnObrCliFor","char",0,"px",1,1,"left",null,[],1118,"TransacaoCxBcoSnObrCliFor",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1120,52,"TRANSACAOCXBCOSNOBRDOCUMENTO","Exigir Documento","","TransacaoCxBcoSnObrDocumento","char",0,"px",1,1,"left",null,[],1120,"TransacaoCxBcoSnObrDocumento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1115,53,"TRANSACAOCXBCOEMPRESAID","Empresa","","TransacaoCxBcoEmpresaId","char",0,"px",10,10,"left",null,[],1115,"TransacaoCxBcoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTRANSACAOCXBCOSIGLA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOCXBCOSIGLA",gxz:"ZV6cTransacaoCxBcoSigla",gxold:"OV6cTransacaoCxBcoSigla",gxvar:"AV6cTransacaoCxBcoSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTransacaoCxBcoSigla=Value},v2z:function(Value){gx.O.ZV6cTransacaoCxBcoSigla=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOCXBCOSIGLA",gx.O.AV6cTransacaoCxBcoSigla,0)},c2v:function(){gx.O.AV6cTransacaoCxBcoSigla=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOCXBCOSIGLA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTRANSACAOCXBCODESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOCXBCODESCRICAO",gxz:"ZV7cTransacaoCxBcoDescricao",gxold:"OV7cTransacaoCxBcoDescricao",gxvar:"AV7cTransacaoCxBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTransacaoCxBcoDescricao=Value},v2z:function(Value){gx.O.ZV7cTransacaoCxBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOCXBCODESCRICAO",gx.O.AV7cTransacaoCxBcoDescricao,0)},c2v:function(){gx.O.AV7cTransacaoCxBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOCXBCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTRANSACAOCXBCOSNOBRCCUSTO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOCXBCOSNOBRCCUSTO",gxz:"ZV8cTransacaoCxBcoSnObrCCusto",gxold:"OV8cTransacaoCxBcoSnObrCCusto",gxvar:"AV8cTransacaoCxBcoSnObrCCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTransacaoCxBcoSnObrCCusto=Value},v2z:function(Value){gx.O.ZV8cTransacaoCxBcoSnObrCCusto=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOCXBCOSNOBRCCUSTO",gx.O.AV8cTransacaoCxBcoSnObrCCusto,0)},c2v:function(){gx.O.AV8cTransacaoCxBcoSnObrCCusto=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOCXBCOSNOBRCCUSTO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTRANSACAOCXBCOSNOBRCLIFOR", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOCXBCOSNOBRCLIFOR",gxz:"ZV9cTransacaoCxBcoSnObrCliFor",gxold:"OV9cTransacaoCxBcoSnObrCliFor",gxvar:"AV9cTransacaoCxBcoSnObrCliFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTransacaoCxBcoSnObrCliFor=Value},v2z:function(Value){gx.O.ZV9cTransacaoCxBcoSnObrCliFor=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOCXBCOSNOBRCLIFOR",gx.O.AV9cTransacaoCxBcoSnObrCliFor,0)},c2v:function(){gx.O.AV9cTransacaoCxBcoSnObrCliFor=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOCXBCOSNOBRCLIFOR")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTRANSACAOCXBCOSNDOCDUPLICADO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOCXBCOSNDOCDUPLICADO",gxz:"ZV10cTransacaoCxBcoSnDocDuplicado",gxold:"OV10cTransacaoCxBcoSnDocDuplicado",gxvar:"AV10cTransacaoCxBcoSnDocDuplicado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTransacaoCxBcoSnDocDuplicado=Value},v2z:function(Value){gx.O.ZV10cTransacaoCxBcoSnDocDuplicado=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOCXBCOSNDOCDUPLICADO",gx.O.AV10cTransacaoCxBcoSnDocDuplicado,0)},c2v:function(){gx.O.AV10cTransacaoCxBcoSnDocDuplicado=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOCXBCOSNDOCDUPLICADO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTRANSACAOCXBCOSNOBRDOCUMENTO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOCXBCOSNOBRDOCUMENTO",gxz:"ZV11cTransacaoCxBcoSnObrDocumento",gxold:"OV11cTransacaoCxBcoSnObrDocumento",gxvar:"AV11cTransacaoCxBcoSnObrDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTransacaoCxBcoSnObrDocumento=Value},v2z:function(Value){gx.O.ZV11cTransacaoCxBcoSnObrDocumento=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOCXBCOSNOBRDOCUMENTO",gx.O.AV11cTransacaoCxBcoSnObrDocumento,0)},c2v:function(){gx.O.AV11cTransacaoCxBcoSnObrDocumento=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOCXBCOSNOBRDOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCOSIGLA",gxz:"Z1114TransacaoCxBcoSigla",gxold:"O1114TransacaoCxBcoSigla",gxvar:"A1114TransacaoCxBcoSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1114TransacaoCxBcoSigla=Value},v2z:function(Value){gx.O.Z1114TransacaoCxBcoSigla=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCOSIGLA",row || gx.fn.currentGridRowImpl(46),gx.O.A1114TransacaoCxBcoSigla,0)},c2v:function(){gx.O.A1114TransacaoCxBcoSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCOSIGLA",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCODESCRICAO",gxz:"Z1116TransacaoCxBcoDescricao",gxold:"O1116TransacaoCxBcoDescricao",gxvar:"A1116TransacaoCxBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1116TransacaoCxBcoDescricao=Value},v2z:function(Value){gx.O.Z1116TransacaoCxBcoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCODESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A1116TransacaoCxBcoDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1116TransacaoCxBcoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCODESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCOSNOBRCCUSTO",gxz:"Z1117TransacaoCxBcoSnObrCCusto",gxold:"O1117TransacaoCxBcoSnObrCCusto",gxvar:"A1117TransacaoCxBcoSnObrCCusto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1117TransacaoCxBcoSnObrCCusto=Value},v2z:function(Value){gx.O.Z1117TransacaoCxBcoSnObrCCusto=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCOSNOBRCCUSTO",row || gx.fn.currentGridRowImpl(46),gx.O.A1117TransacaoCxBcoSnObrCCusto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1117TransacaoCxBcoSnObrCCusto=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCOSNOBRCCUSTO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCOSNOBRCLIFOR",gxz:"Z1118TransacaoCxBcoSnObrCliFor",gxold:"O1118TransacaoCxBcoSnObrCliFor",gxvar:"A1118TransacaoCxBcoSnObrCliFor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1118TransacaoCxBcoSnObrCliFor=Value},v2z:function(Value){gx.O.Z1118TransacaoCxBcoSnObrCliFor=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCOSNOBRCLIFOR",row || gx.fn.currentGridRowImpl(46),gx.O.A1118TransacaoCxBcoSnObrCliFor,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1118TransacaoCxBcoSnObrCliFor=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCOSNOBRCLIFOR",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCOSNOBRDOCUMENTO",gxz:"Z1120TransacaoCxBcoSnObrDocumento",gxold:"O1120TransacaoCxBcoSnObrDocumento",gxvar:"A1120TransacaoCxBcoSnObrDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1120TransacaoCxBcoSnObrDocumento=Value},v2z:function(Value){gx.O.Z1120TransacaoCxBcoSnObrDocumento=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCOSNOBRDOCUMENTO",row || gx.fn.currentGridRowImpl(46),gx.O.A1120TransacaoCxBcoSnObrDocumento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1120TransacaoCxBcoSnObrDocumento=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCOSNOBRDOCUMENTO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOCXBCOEMPRESAID",gxz:"Z1115TransacaoCxBcoEmpresaId",gxold:"O1115TransacaoCxBcoEmpresaId",gxvar:"A1115TransacaoCxBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1115TransacaoCxBcoEmpresaId=Value},v2z:function(Value){gx.O.Z1115TransacaoCxBcoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOCXBCOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A1115TransacaoCxBcoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1115TransacaoCxBcoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOCXBCOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   this.AV6cTransacaoCxBcoSigla = "" ;
   this.ZV6cTransacaoCxBcoSigla = "" ;
   this.OV6cTransacaoCxBcoSigla = "" ;
   this.AV7cTransacaoCxBcoDescricao = "" ;
   this.ZV7cTransacaoCxBcoDescricao = "" ;
   this.OV7cTransacaoCxBcoDescricao = "" ;
   this.AV8cTransacaoCxBcoSnObrCCusto = "" ;
   this.ZV8cTransacaoCxBcoSnObrCCusto = "" ;
   this.OV8cTransacaoCxBcoSnObrCCusto = "" ;
   this.AV9cTransacaoCxBcoSnObrCliFor = "" ;
   this.ZV9cTransacaoCxBcoSnObrCliFor = "" ;
   this.OV9cTransacaoCxBcoSnObrCliFor = "" ;
   this.AV10cTransacaoCxBcoSnDocDuplicado = "" ;
   this.ZV10cTransacaoCxBcoSnDocDuplicado = "" ;
   this.OV10cTransacaoCxBcoSnDocDuplicado = "" ;
   this.AV11cTransacaoCxBcoSnObrDocumento = "" ;
   this.ZV11cTransacaoCxBcoSnObrDocumento = "" ;
   this.OV11cTransacaoCxBcoSnObrDocumento = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1114TransacaoCxBcoSigla = "" ;
   this.O1114TransacaoCxBcoSigla = "" ;
   this.Z1116TransacaoCxBcoDescricao = "" ;
   this.O1116TransacaoCxBcoDescricao = "" ;
   this.Z1117TransacaoCxBcoSnObrCCusto = "" ;
   this.O1117TransacaoCxBcoSnObrCCusto = "" ;
   this.Z1118TransacaoCxBcoSnObrCliFor = "" ;
   this.O1118TransacaoCxBcoSnObrCliFor = "" ;
   this.Z1120TransacaoCxBcoSnObrDocumento = "" ;
   this.O1120TransacaoCxBcoSnObrDocumento = "" ;
   this.Z1115TransacaoCxBcoEmpresaId = "" ;
   this.O1115TransacaoCxBcoEmpresaId = "" ;
   this.AV6cTransacaoCxBcoSigla = "" ;
   this.AV7cTransacaoCxBcoDescricao = "" ;
   this.AV8cTransacaoCxBcoSnObrCCusto = "" ;
   this.AV9cTransacaoCxBcoSnObrCliFor = "" ;
   this.AV10cTransacaoCxBcoSnDocDuplicado = "" ;
   this.AV11cTransacaoCxBcoSnObrDocumento = "" ;
   this.AV12pTransacaoCxBcoEmpresaId = "" ;
   this.AV13pTransacaoCxBcoSigla = "" ;
   this.A1119TransacaoCxBcoSnDocDuplicado = "" ;
   this.AV5LinkSelection = "" ;
   this.A1114TransacaoCxBcoSigla = "" ;
   this.A1116TransacaoCxBcoDescricao = "" ;
   this.A1117TransacaoCxBcoSnObrCCusto = "" ;
   this.A1118TransacaoCxBcoSnObrCliFor = "" ;
   this.A1120TransacaoCxBcoSnObrDocumento = "" ;
   this.A1115TransacaoCxBcoEmpresaId = "" ;
   this.Events = {"e131p22_client": ["ENTER", true] ,"e141p21_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoCxBcoSigla',fld:'vCTRANSACAOCXBCOSIGLA'},{av:'AV7cTransacaoCxBcoDescricao',fld:'vCTRANSACAOCXBCODESCRICAO'},{av:'AV8cTransacaoCxBcoSnObrCCusto',fld:'vCTRANSACAOCXBCOSNOBRCCUSTO'},{av:'AV9cTransacaoCxBcoSnObrCliFor',fld:'vCTRANSACAOCXBCOSNOBRCLIFOR'},{av:'AV10cTransacaoCxBcoSnDocDuplicado',fld:'vCTRANSACAOCXBCOSNDOCDUPLICADO'},{av:'AV11cTransacaoCxBcoSnObrDocumento',fld:'vCTRANSACAOCXBCOSNOBRDOCUMENTO'},{av:'AV12pTransacaoCxBcoEmpresaId',fld:'vPTRANSACAOCXBCOEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1114TransacaoCxBcoSigla',fld:'TRANSACAOCXBCOSIGLA'}],[{av:'AV13pTransacaoCxBcoSigla',fld:'vPTRANSACAOCXBCOSIGLA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoCxBcoSigla',fld:'vCTRANSACAOCXBCOSIGLA'},{av:'AV7cTransacaoCxBcoDescricao',fld:'vCTRANSACAOCXBCODESCRICAO'},{av:'AV8cTransacaoCxBcoSnObrCCusto',fld:'vCTRANSACAOCXBCOSNOBRCCUSTO'},{av:'AV9cTransacaoCxBcoSnObrCliFor',fld:'vCTRANSACAOCXBCOSNOBRCLIFOR'},{av:'AV10cTransacaoCxBcoSnDocDuplicado',fld:'vCTRANSACAOCXBCOSNDOCDUPLICADO'},{av:'AV11cTransacaoCxBcoSnObrDocumento',fld:'vCTRANSACAOCXBCOSNOBRDOCUMENTO'},{av:'AV12pTransacaoCxBcoEmpresaId',fld:'vPTRANSACAOCXBCOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoCxBcoSigla',fld:'vCTRANSACAOCXBCOSIGLA'},{av:'AV7cTransacaoCxBcoDescricao',fld:'vCTRANSACAOCXBCODESCRICAO'},{av:'AV8cTransacaoCxBcoSnObrCCusto',fld:'vCTRANSACAOCXBCOSNOBRCCUSTO'},{av:'AV9cTransacaoCxBcoSnObrCliFor',fld:'vCTRANSACAOCXBCOSNOBRCLIFOR'},{av:'AV10cTransacaoCxBcoSnDocDuplicado',fld:'vCTRANSACAOCXBCOSNDOCDUPLICADO'},{av:'AV11cTransacaoCxBcoSnObrDocumento',fld:'vCTRANSACAOCXBCOSNOBRDOCUMENTO'},{av:'AV12pTransacaoCxBcoEmpresaId',fld:'vPTRANSACAOCXBCOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoCxBcoSigla',fld:'vCTRANSACAOCXBCOSIGLA'},{av:'AV7cTransacaoCxBcoDescricao',fld:'vCTRANSACAOCXBCODESCRICAO'},{av:'AV8cTransacaoCxBcoSnObrCCusto',fld:'vCTRANSACAOCXBCOSNOBRCCUSTO'},{av:'AV9cTransacaoCxBcoSnObrCliFor',fld:'vCTRANSACAOCXBCOSNOBRCLIFOR'},{av:'AV10cTransacaoCxBcoSnDocDuplicado',fld:'vCTRANSACAOCXBCOSNDOCDUPLICADO'},{av:'AV11cTransacaoCxBcoSnObrDocumento',fld:'vCTRANSACAOCXBCOSNOBRDOCUMENTO'},{av:'AV12pTransacaoCxBcoEmpresaId',fld:'vPTRANSACAOCXBCOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoCxBcoSigla',fld:'vCTRANSACAOCXBCOSIGLA'},{av:'AV7cTransacaoCxBcoDescricao',fld:'vCTRANSACAOCXBCODESCRICAO'},{av:'AV8cTransacaoCxBcoSnObrCCusto',fld:'vCTRANSACAOCXBCOSNOBRCCUSTO'},{av:'AV9cTransacaoCxBcoSnObrCliFor',fld:'vCTRANSACAOCXBCOSNOBRCLIFOR'},{av:'AV10cTransacaoCxBcoSnDocDuplicado',fld:'vCTRANSACAOCXBCOSNDOCDUPLICADO'},{av:'AV11cTransacaoCxBcoSnObrDocumento',fld:'vCTRANSACAOCXBCOSNOBRDOCUMENTO'},{av:'AV12pTransacaoCxBcoEmpresaId',fld:'vPTRANSACAOCXBCOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pTransacaoCxBcoEmpresaId", "vPTRANSACAOCXBCOEMPRESAID", 0, "char");
   this.setVCMap("AV13pTransacaoCxBcoSigla", "vPTRANSACAOCXBCOSIGLA", 0, "char");
   this.setVCMap("AV12pTransacaoCxBcoEmpresaId", "vPTRANSACAOCXBCOEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pTransacaoCxBcoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx03y1());

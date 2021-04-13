/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:26:51.84
*/
gx.evt.autoSkip = false;
gx.define('gx03q0', false, function () {
   this.ServerClass =  "gx03q0" ;
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
      this.AV13pTipoCobrancaEmpresaId=gx.fn.getControlValue("vPTIPOCOBRANCAEMPRESAID") ;
      this.AV14pTipoCobrancaId=gx.fn.getIntegerValue("vPTIPOCOBRANCAID",'.') ;
   };
   this.e131js2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141js1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx03q0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(991,53,"TIPOCOBRANCAEMPRESAID","Empresa","","TipoCobrancaEmpresaId","char",0,"px",10,10,"left",null,[],991,"TipoCobrancaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(992,54,"TIPOCOBRANCAID","Código Tipo de Cobrança","","TipoCobrancaId","int",0,"px",3,3,"right",null,[],992,"TipoCobrancaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(993,55,"TIPOCOBRANCADESCRICAO","Descrição do Tipo de Cobrança","Selecionar","TipoCobrancaDescricao","svchar",0,"px",25,25,"left",null,[],993,"TipoCobrancaDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(988,56,"TIPOCOBRANCAFORMACOB","Forma de Cobrança","TipoCobrancaFormaCob","char",null,0,true,false,0,"px","");
   Grid1Container.addComboBox(989,57,"TIPOCOBRANCATIPOCOMISSAO","Tipo de Comissão","TipoCobrancaTipoComissao","char",null,0,true,false,0,"px","");
   Grid1Container.addComboBox(990,58,"TIPOCOBRANCATIPODOCUME","Documento a ser Emitido","TipoCobrancaTipoDocume","char",null,0,true,false,0,"px","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTIPOCOBRANCAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCOBRANCAEMPRESAID",gxz:"ZV6cTipoCobrancaEmpresaId",gxold:"OV6cTipoCobrancaEmpresaId",gxvar:"AV6cTipoCobrancaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoCobrancaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTipoCobrancaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTIPOCOBRANCAEMPRESAID",gx.O.AV6cTipoCobrancaEmpresaId,0)},c2v:function(){gx.O.AV6cTipoCobrancaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOCOBRANCAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTIPOCOBRANCAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCOBRANCAID",gxz:"ZV7cTipoCobrancaId",gxold:"OV7cTipoCobrancaId",gxvar:"AV7cTipoCobrancaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTipoCobrancaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cTipoCobrancaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOCOBRANCAID",gx.O.AV7cTipoCobrancaId,0)},c2v:function(){gx.O.AV7cTipoCobrancaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOCOBRANCAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTIPOCOBRANCADESCRICAO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCOBRANCADESCRICAO",gxz:"ZV8cTipoCobrancaDescricao",gxold:"OV8cTipoCobrancaDescricao",gxvar:"AV8cTipoCobrancaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTipoCobrancaDescricao=Value},v2z:function(Value){gx.O.ZV8cTipoCobrancaDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTIPOCOBRANCADESCRICAO",gx.O.AV8cTipoCobrancaDescricao,0)},c2v:function(){gx.O.AV8cTipoCobrancaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOCOBRANCADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTIPOCOBRANCAFORMACOB", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCOBRANCAFORMACOB",gxz:"ZV9cTipoCobrancaFormaCob",gxold:"OV9cTipoCobrancaFormaCob",gxvar:"AV9cTipoCobrancaFormaCob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cTipoCobrancaFormaCob=Value},v2z:function(Value){gx.O.ZV9cTipoCobrancaFormaCob=Value},v2c:function(){gx.fn.setComboBoxValue("vCTIPOCOBRANCAFORMACOB",gx.O.AV9cTipoCobrancaFormaCob)},c2v:function(){gx.O.AV9cTipoCobrancaFormaCob=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOCOBRANCAFORMACOB")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTIPOCOBRANCATIPOCOMISSAO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCOBRANCATIPOCOMISSAO",gxz:"ZV10cTipoCobrancaTipoComissao",gxold:"OV10cTipoCobrancaTipoComissao",gxvar:"AV10cTipoCobrancaTipoComissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cTipoCobrancaTipoComissao=Value},v2z:function(Value){gx.O.ZV10cTipoCobrancaTipoComissao=Value},v2c:function(){gx.fn.setComboBoxValue("vCTIPOCOBRANCATIPOCOMISSAO",gx.O.AV10cTipoCobrancaTipoComissao)},c2v:function(){gx.O.AV10cTipoCobrancaTipoComissao=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOCOBRANCATIPOCOMISSAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTIPOCOBRANCATIPODOCUME", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCOBRANCATIPODOCUME",gxz:"ZV11cTipoCobrancaTipoDocume",gxold:"OV11cTipoCobrancaTipoDocume",gxvar:"AV11cTipoCobrancaTipoDocume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11cTipoCobrancaTipoDocume=Value},v2z:function(Value){gx.O.ZV11cTipoCobrancaTipoDocume=Value},v2c:function(){gx.fn.setComboBoxValue("vCTIPOCOBRANCATIPODOCUME",gx.O.AV11cTipoCobrancaTipoDocume)},c2v:function(){gx.O.AV11cTipoCobrancaTipoDocume=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOCOBRANCATIPODOCUME")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTIPOCOBRANCAPERCCOMISSAO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOCOBRANCAPERCCOMISSAO",gxz:"ZV12cTipoCobrancaPercComissao",gxold:"OV12cTipoCobrancaPercComissao",gxvar:"AV12cTipoCobrancaPercComissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTipoCobrancaPercComissao=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV12cTipoCobrancaPercComissao=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCTIPOCOBRANCAPERCCOMISSAO",gx.O.AV12cTipoCobrancaPercComissao,2,',')},c2v:function(){gx.O.AV12cTipoCobrancaPercComissao=this.val()},val:function(){return gx.fn.getDecimalValue("vCTIPOCOBRANCAPERCCOMISSAO",'.',',')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCOBRANCAEMPRESAID",gxz:"Z991TipoCobrancaEmpresaId",gxold:"O991TipoCobrancaEmpresaId",gxvar:"A991TipoCobrancaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A991TipoCobrancaEmpresaId=Value},v2z:function(Value){gx.O.Z991TipoCobrancaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCOBRANCAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A991TipoCobrancaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A991TipoCobrancaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCOBRANCAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCOBRANCAID",gxz:"Z992TipoCobrancaId",gxold:"O992TipoCobrancaId",gxvar:"A992TipoCobrancaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A992TipoCobrancaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z992TipoCobrancaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOCOBRANCAID",row || gx.fn.currentGridRowImpl(51),gx.O.A992TipoCobrancaId,0)},c2v:function(){gx.O.A992TipoCobrancaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOCOBRANCAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCOBRANCADESCRICAO",gxz:"Z993TipoCobrancaDescricao",gxold:"O993TipoCobrancaDescricao",gxvar:"A993TipoCobrancaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A993TipoCobrancaDescricao=Value},v2z:function(Value){gx.O.Z993TipoCobrancaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOCOBRANCADESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A993TipoCobrancaDescricao,0)},c2v:function(){gx.O.A993TipoCobrancaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCOBRANCADESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCOBRANCAFORMACOB",gxz:"Z988TipoCobrancaFormaCob",gxold:"O988TipoCobrancaFormaCob",gxvar:"A988TipoCobrancaFormaCob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A988TipoCobrancaFormaCob=Value},v2z:function(Value){gx.O.Z988TipoCobrancaFormaCob=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOCOBRANCAFORMACOB",row || gx.fn.currentGridRowImpl(51),gx.O.A988TipoCobrancaFormaCob)},c2v:function(){gx.O.A988TipoCobrancaFormaCob=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCOBRANCAFORMACOB",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCOBRANCATIPOCOMISSAO",gxz:"Z989TipoCobrancaTipoComissao",gxold:"O989TipoCobrancaTipoComissao",gxvar:"A989TipoCobrancaTipoComissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A989TipoCobrancaTipoComissao=Value},v2z:function(Value){gx.O.Z989TipoCobrancaTipoComissao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOCOBRANCATIPOCOMISSAO",row || gx.fn.currentGridRowImpl(51),gx.O.A989TipoCobrancaTipoComissao)},c2v:function(){gx.O.A989TipoCobrancaTipoComissao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCOBRANCATIPOCOMISSAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOCOBRANCATIPODOCUME",gxz:"Z990TipoCobrancaTipoDocume",gxold:"O990TipoCobrancaTipoDocume",gxvar:"A990TipoCobrancaTipoDocume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A990TipoCobrancaTipoDocume=Value},v2z:function(Value){gx.O.Z990TipoCobrancaTipoDocume=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOCOBRANCATIPODOCUME",row || gx.fn.currentGridRowImpl(51),gx.O.A990TipoCobrancaTipoDocume)},c2v:function(){gx.O.A990TipoCobrancaTipoDocume=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOCOBRANCATIPODOCUME",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cTipoCobrancaEmpresaId = "" ;
   this.ZV6cTipoCobrancaEmpresaId = "" ;
   this.OV6cTipoCobrancaEmpresaId = "" ;
   this.AV7cTipoCobrancaId = 0 ;
   this.ZV7cTipoCobrancaId = 0 ;
   this.OV7cTipoCobrancaId = 0 ;
   this.AV8cTipoCobrancaDescricao = "" ;
   this.ZV8cTipoCobrancaDescricao = "" ;
   this.OV8cTipoCobrancaDescricao = "" ;
   this.AV9cTipoCobrancaFormaCob = "" ;
   this.ZV9cTipoCobrancaFormaCob = "" ;
   this.OV9cTipoCobrancaFormaCob = "" ;
   this.AV10cTipoCobrancaTipoComissao = "" ;
   this.ZV10cTipoCobrancaTipoComissao = "" ;
   this.OV10cTipoCobrancaTipoComissao = "" ;
   this.AV11cTipoCobrancaTipoDocume = "" ;
   this.ZV11cTipoCobrancaTipoDocume = "" ;
   this.OV11cTipoCobrancaTipoDocume = "" ;
   this.AV12cTipoCobrancaPercComissao = 0 ;
   this.ZV12cTipoCobrancaPercComissao = 0 ;
   this.OV12cTipoCobrancaPercComissao = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z991TipoCobrancaEmpresaId = "" ;
   this.O991TipoCobrancaEmpresaId = "" ;
   this.Z992TipoCobrancaId = 0 ;
   this.O992TipoCobrancaId = 0 ;
   this.Z993TipoCobrancaDescricao = "" ;
   this.O993TipoCobrancaDescricao = "" ;
   this.Z988TipoCobrancaFormaCob = "" ;
   this.O988TipoCobrancaFormaCob = "" ;
   this.Z989TipoCobrancaTipoComissao = "" ;
   this.O989TipoCobrancaTipoComissao = "" ;
   this.Z990TipoCobrancaTipoDocume = "" ;
   this.O990TipoCobrancaTipoDocume = "" ;
   this.AV6cTipoCobrancaEmpresaId = "" ;
   this.AV7cTipoCobrancaId = 0 ;
   this.AV8cTipoCobrancaDescricao = "" ;
   this.AV9cTipoCobrancaFormaCob = "" ;
   this.AV10cTipoCobrancaTipoComissao = "" ;
   this.AV11cTipoCobrancaTipoDocume = "" ;
   this.AV12cTipoCobrancaPercComissao = 0 ;
   this.AV13pTipoCobrancaEmpresaId = "" ;
   this.AV14pTipoCobrancaId = 0 ;
   this.A994TipoCobrancaPercComissao = 0 ;
   this.AV5LinkSelection = "" ;
   this.A991TipoCobrancaEmpresaId = "" ;
   this.A992TipoCobrancaId = 0 ;
   this.A993TipoCobrancaDescricao = "" ;
   this.A988TipoCobrancaFormaCob = "" ;
   this.A989TipoCobrancaTipoComissao = "" ;
   this.A990TipoCobrancaTipoDocume = "" ;
   this.Events = {"e131js2_client": ["ENTER", true] ,"e141js1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoCobrancaEmpresaId',fld:'vCTIPOCOBRANCAEMPRESAID'},{av:'AV7cTipoCobrancaId',fld:'vCTIPOCOBRANCAID'},{av:'AV8cTipoCobrancaDescricao',fld:'vCTIPOCOBRANCADESCRICAO'},{av:'AV9cTipoCobrancaFormaCob',fld:'vCTIPOCOBRANCAFORMACOB'},{av:'AV10cTipoCobrancaTipoComissao',fld:'vCTIPOCOBRANCATIPOCOMISSAO'},{av:'AV11cTipoCobrancaTipoDocume',fld:'vCTIPOCOBRANCATIPODOCUME'},{av:'AV12cTipoCobrancaPercComissao',fld:'vCTIPOCOBRANCAPERCCOMISSAO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A991TipoCobrancaEmpresaId',fld:'TIPOCOBRANCAEMPRESAID'},{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'}],[{av:'AV13pTipoCobrancaEmpresaId',fld:'vPTIPOCOBRANCAEMPRESAID'},{av:'AV14pTipoCobrancaId',fld:'vPTIPOCOBRANCAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoCobrancaEmpresaId',fld:'vCTIPOCOBRANCAEMPRESAID'},{av:'AV7cTipoCobrancaId',fld:'vCTIPOCOBRANCAID'},{av:'AV8cTipoCobrancaDescricao',fld:'vCTIPOCOBRANCADESCRICAO'},{av:'AV9cTipoCobrancaFormaCob',fld:'vCTIPOCOBRANCAFORMACOB'},{av:'AV10cTipoCobrancaTipoComissao',fld:'vCTIPOCOBRANCATIPOCOMISSAO'},{av:'AV11cTipoCobrancaTipoDocume',fld:'vCTIPOCOBRANCATIPODOCUME'},{av:'AV12cTipoCobrancaPercComissao',fld:'vCTIPOCOBRANCAPERCCOMISSAO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoCobrancaEmpresaId',fld:'vCTIPOCOBRANCAEMPRESAID'},{av:'AV7cTipoCobrancaId',fld:'vCTIPOCOBRANCAID'},{av:'AV8cTipoCobrancaDescricao',fld:'vCTIPOCOBRANCADESCRICAO'},{av:'AV9cTipoCobrancaFormaCob',fld:'vCTIPOCOBRANCAFORMACOB'},{av:'AV10cTipoCobrancaTipoComissao',fld:'vCTIPOCOBRANCATIPOCOMISSAO'},{av:'AV11cTipoCobrancaTipoDocume',fld:'vCTIPOCOBRANCATIPODOCUME'},{av:'AV12cTipoCobrancaPercComissao',fld:'vCTIPOCOBRANCAPERCCOMISSAO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoCobrancaEmpresaId',fld:'vCTIPOCOBRANCAEMPRESAID'},{av:'AV7cTipoCobrancaId',fld:'vCTIPOCOBRANCAID'},{av:'AV8cTipoCobrancaDescricao',fld:'vCTIPOCOBRANCADESCRICAO'},{av:'AV9cTipoCobrancaFormaCob',fld:'vCTIPOCOBRANCAFORMACOB'},{av:'AV10cTipoCobrancaTipoComissao',fld:'vCTIPOCOBRANCATIPOCOMISSAO'},{av:'AV11cTipoCobrancaTipoDocume',fld:'vCTIPOCOBRANCATIPODOCUME'},{av:'AV12cTipoCobrancaPercComissao',fld:'vCTIPOCOBRANCAPERCCOMISSAO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTipoCobrancaEmpresaId',fld:'vCTIPOCOBRANCAEMPRESAID'},{av:'AV7cTipoCobrancaId',fld:'vCTIPOCOBRANCAID'},{av:'AV8cTipoCobrancaDescricao',fld:'vCTIPOCOBRANCADESCRICAO'},{av:'AV9cTipoCobrancaFormaCob',fld:'vCTIPOCOBRANCAFORMACOB'},{av:'AV10cTipoCobrancaTipoComissao',fld:'vCTIPOCOBRANCATIPOCOMISSAO'},{av:'AV11cTipoCobrancaTipoDocume',fld:'vCTIPOCOBRANCATIPODOCUME'},{av:'AV12cTipoCobrancaPercComissao',fld:'vCTIPOCOBRANCAPERCCOMISSAO'}],[]];
   this.setVCMap("AV13pTipoCobrancaEmpresaId", "vPTIPOCOBRANCAEMPRESAID", 0, "char");
   this.setVCMap("AV14pTipoCobrancaId", "vPTIPOCOBRANCAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx03q0());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:37:5.74
*/
gx.evt.autoSkip = false;
gx.define('gx0co0', false, function () {
   this.ServerClass =  "gx0co0" ;
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
      this.AV13pEntradaEmpresaId=gx.fn.getControlValue("vPENTRADAEMPRESAID") ;
      this.AV14pEntradaId=gx.fn.getIntegerValue("vPENTRADAID",'.') ;
      this.AV15pEntradaItemSequencia=gx.fn.getIntegerValue("vPENTRADAITEMSEQUENCIA",'.') ;
      this.AV16pDecImportacaoSequencia=gx.fn.getIntegerValue("vPDECIMPORTACAOSEQUENCIA",'.') ;
      this.AV17pDecImportacaoAdicaoSeq=gx.fn.getIntegerValue("vPDECIMPORTACAOADICAOSEQ",'.') ;
   };
   this.e131rj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141rj1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0co0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4637,53,"ENTRADAEMPRESAID","Empresa da Entrada","","EntradaEmpresaId","char",0,"px",10,10,"left",null,[],4637,"EntradaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4638,54,"ENTRADAID","Código da Entrada","","EntradaId","int",0,"px",10,10,"right",null,[],4638,"EntradaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4822,55,"ENTRADAITEMSEQUENCIA","Sequência do Item","","EntradaItemSequencia","int",0,"px",6,6,"right",null,[],4822,"EntradaItemSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5175,56,"DECIMPORTACAOSEQUENCIA","Sequência da Declaração","","DecImportacaoSequencia","int",0,"px",2,2,"right",null,[],5175,"DecImportacaoSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5181,57,"DECIMPORTACAOADICAOSEQ","Sequência da Adição da Declaração","","DecImportacaoAdicaoSeq","int",0,"px",2,2,"right",null,[],5181,"DecImportacaoAdicaoSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5176,58,"DECIMPORTACAOADICAONO","Número da Adição","Selecionar","DecImportacaoAdicaoNo","int",0,"px",3,3,"right",null,[],5176,"DecImportacaoAdicaoNo",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKENTRADAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAEMPRESAID",gxz:"ZV6cEntradaEmpresaId",gxold:"OV6cEntradaEmpresaId",gxvar:"AV6cEntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEntradaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEntradaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCENTRADAEMPRESAID",gx.O.AV6cEntradaEmpresaId,0)},c2v:function(){gx.O.AV6cEntradaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKENTRADAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAID",gxz:"ZV7cEntradaId",gxold:"OV7cEntradaId",gxvar:"AV7cEntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cEntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cEntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAID",gx.O.AV7cEntradaId,0)},c2v:function(){gx.O.AV7cEntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKENTRADAITEMSEQUENCIA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAITEMSEQUENCIA",gxz:"ZV8cEntradaItemSequencia",gxold:"OV8cEntradaItemSequencia",gxvar:"AV8cEntradaItemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cEntradaItemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cEntradaItemSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAITEMSEQUENCIA",gx.O.AV8cEntradaItemSequencia,0)},c2v:function(){gx.O.AV8cEntradaItemSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADAITEMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKDECIMPORTACAOSEQUENCIA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDECIMPORTACAOSEQUENCIA",gxz:"ZV9cDecImportacaoSequencia",gxold:"OV9cDecImportacaoSequencia",gxvar:"AV9cDecImportacaoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cDecImportacaoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cDecImportacaoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCDECIMPORTACAOSEQUENCIA",gx.O.AV9cDecImportacaoSequencia,0)},c2v:function(){gx.O.AV9cDecImportacaoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDECIMPORTACAOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKDECIMPORTACAOADICAOSEQ", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDECIMPORTACAOADICAOSEQ",gxz:"ZV10cDecImportacaoAdicaoSeq",gxold:"OV10cDecImportacaoAdicaoSeq",gxvar:"AV10cDecImportacaoAdicaoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cDecImportacaoAdicaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cDecImportacaoAdicaoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCDECIMPORTACAOADICAOSEQ",gx.O.AV10cDecImportacaoAdicaoSeq,0)},c2v:function(){gx.O.AV10cDecImportacaoAdicaoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDECIMPORTACAOADICAOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKDECIMPORTACAOADICAONO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDECIMPORTACAOADICAONO",gxz:"ZV11cDecImportacaoAdicaoNo",gxold:"OV11cDecImportacaoAdicaoNo",gxvar:"AV11cDecImportacaoAdicaoNo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cDecImportacaoAdicaoNo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cDecImportacaoAdicaoNo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCDECIMPORTACAOADICAONO",gx.O.AV11cDecImportacaoAdicaoNo,0)},c2v:function(){gx.O.AV11cDecImportacaoAdicaoNo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDECIMPORTACAOADICAONO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKDECIMPORTACAOADICAOFABRICANTE", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDECIMPORTACAOADICAOFABRICANTE",gxz:"ZV12cDecImportacaoAdicaoFabricante",gxold:"OV12cDecImportacaoAdicaoFabricante",gxvar:"AV12cDecImportacaoAdicaoFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cDecImportacaoAdicaoFabricante=Value},v2z:function(Value){gx.O.ZV12cDecImportacaoAdicaoFabricante=Value},v2c:function(){gx.fn.setControlValue("vCDECIMPORTACAOADICAOFABRICANTE",gx.O.AV12cDecImportacaoAdicaoFabricante,0)},c2v:function(){gx.O.AV12cDecImportacaoAdicaoFabricante=this.val()},val:function(){return gx.fn.getControlValue("vCDECIMPORTACAOADICAOFABRICANTE")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV20Linkselection_GXI)},c2v:function(){gx.O.AV20Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV20Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAEMPRESAID",gxz:"Z4637EntradaEmpresaId",gxold:"O4637EntradaEmpresaId",gxvar:"A4637EntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4637EntradaEmpresaId=Value},v2z:function(Value){gx.O.Z4637EntradaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A4637EntradaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4637EntradaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAID",gxz:"Z4638EntradaId",gxold:"O4638EntradaId",gxvar:"A4638EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4638EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4638EntradaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAID",row || gx.fn.currentGridRowImpl(51),gx.O.A4638EntradaId,0)},c2v:function(){gx.O.A4638EntradaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAITEMSEQUENCIA",gxz:"Z4822EntradaItemSequencia",gxold:"O4822EntradaItemSequencia",gxvar:"A4822EntradaItemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4822EntradaItemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4822EntradaItemSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAITEMSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A4822EntradaItemSequencia,0)},c2v:function(){gx.O.A4822EntradaItemSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAITEMSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAOSEQUENCIA",gxz:"Z5175DecImportacaoSequencia",gxold:"O5175DecImportacaoSequencia",gxvar:"A5175DecImportacaoSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5175DecImportacaoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5175DecImportacaoSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DECIMPORTACAOSEQUENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A5175DecImportacaoSequencia,0)},c2v:function(){gx.O.A5175DecImportacaoSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DECIMPORTACAOSEQUENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAOADICAOSEQ",gxz:"Z5181DecImportacaoAdicaoSeq",gxold:"O5181DecImportacaoAdicaoSeq",gxvar:"A5181DecImportacaoAdicaoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5181DecImportacaoAdicaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5181DecImportacaoAdicaoSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DECIMPORTACAOADICAOSEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A5181DecImportacaoAdicaoSeq,0)},c2v:function(){gx.O.A5181DecImportacaoAdicaoSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DECIMPORTACAOADICAOSEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAOADICAONO",gxz:"Z5176DecImportacaoAdicaoNo",gxold:"O5176DecImportacaoAdicaoNo",gxvar:"A5176DecImportacaoAdicaoNo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5176DecImportacaoAdicaoNo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5176DecImportacaoAdicaoNo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DECIMPORTACAOADICAONO",row || gx.fn.currentGridRowImpl(51),gx.O.A5176DecImportacaoAdicaoNo,0)},c2v:function(){gx.O.A5176DecImportacaoAdicaoNo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DECIMPORTACAOADICAONO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cEntradaEmpresaId = "" ;
   this.ZV6cEntradaEmpresaId = "" ;
   this.OV6cEntradaEmpresaId = "" ;
   this.AV7cEntradaId = 0 ;
   this.ZV7cEntradaId = 0 ;
   this.OV7cEntradaId = 0 ;
   this.AV8cEntradaItemSequencia = 0 ;
   this.ZV8cEntradaItemSequencia = 0 ;
   this.OV8cEntradaItemSequencia = 0 ;
   this.AV9cDecImportacaoSequencia = 0 ;
   this.ZV9cDecImportacaoSequencia = 0 ;
   this.OV9cDecImportacaoSequencia = 0 ;
   this.AV10cDecImportacaoAdicaoSeq = 0 ;
   this.ZV10cDecImportacaoAdicaoSeq = 0 ;
   this.OV10cDecImportacaoAdicaoSeq = 0 ;
   this.AV11cDecImportacaoAdicaoNo = 0 ;
   this.ZV11cDecImportacaoAdicaoNo = 0 ;
   this.OV11cDecImportacaoAdicaoNo = 0 ;
   this.AV12cDecImportacaoAdicaoFabricante = "" ;
   this.ZV12cDecImportacaoAdicaoFabricante = "" ;
   this.OV12cDecImportacaoAdicaoFabricante = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z4637EntradaEmpresaId = "" ;
   this.O4637EntradaEmpresaId = "" ;
   this.Z4638EntradaId = 0 ;
   this.O4638EntradaId = 0 ;
   this.Z4822EntradaItemSequencia = 0 ;
   this.O4822EntradaItemSequencia = 0 ;
   this.Z5175DecImportacaoSequencia = 0 ;
   this.O5175DecImportacaoSequencia = 0 ;
   this.Z5181DecImportacaoAdicaoSeq = 0 ;
   this.O5181DecImportacaoAdicaoSeq = 0 ;
   this.Z5176DecImportacaoAdicaoNo = 0 ;
   this.O5176DecImportacaoAdicaoNo = 0 ;
   this.AV6cEntradaEmpresaId = "" ;
   this.AV7cEntradaId = 0 ;
   this.AV8cEntradaItemSequencia = 0 ;
   this.AV9cDecImportacaoSequencia = 0 ;
   this.AV10cDecImportacaoAdicaoSeq = 0 ;
   this.AV11cDecImportacaoAdicaoNo = 0 ;
   this.AV12cDecImportacaoAdicaoFabricante = "" ;
   this.AV13pEntradaEmpresaId = "" ;
   this.AV14pEntradaId = 0 ;
   this.AV15pEntradaItemSequencia = 0 ;
   this.AV16pDecImportacaoSequencia = 0 ;
   this.AV17pDecImportacaoAdicaoSeq = 0 ;
   this.A5177DecImportacaoAdicaoFabricante = "" ;
   this.AV5LinkSelection = "" ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.A4822EntradaItemSequencia = 0 ;
   this.A5175DecImportacaoSequencia = 0 ;
   this.A5181DecImportacaoAdicaoSeq = 0 ;
   this.A5176DecImportacaoAdicaoNo = 0 ;
   this.Events = {"e131rj2_client": ["ENTER", true] ,"e141rj1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaEmpresaId',fld:'vCENTRADAEMPRESAID'},{av:'AV7cEntradaId',fld:'vCENTRADAID'},{av:'AV8cEntradaItemSequencia',fld:'vCENTRADAITEMSEQUENCIA'},{av:'AV9cDecImportacaoSequencia',fld:'vCDECIMPORTACAOSEQUENCIA'},{av:'AV10cDecImportacaoAdicaoSeq',fld:'vCDECIMPORTACAOADICAOSEQ'},{av:'AV11cDecImportacaoAdicaoNo',fld:'vCDECIMPORTACAOADICAONO'},{av:'AV12cDecImportacaoAdicaoFabricante',fld:'vCDECIMPORTACAOADICAOFABRICANTE'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'A4638EntradaId',fld:'ENTRADAID'},{av:'A4822EntradaItemSequencia',fld:'ENTRADAITEMSEQUENCIA'},{av:'A5175DecImportacaoSequencia',fld:'DECIMPORTACAOSEQUENCIA'},{av:'A5181DecImportacaoAdicaoSeq',fld:'DECIMPORTACAOADICAOSEQ'}],[{av:'AV13pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID'},{av:'AV14pEntradaId',fld:'vPENTRADAID'},{av:'AV15pEntradaItemSequencia',fld:'vPENTRADAITEMSEQUENCIA'},{av:'AV16pDecImportacaoSequencia',fld:'vPDECIMPORTACAOSEQUENCIA'},{av:'AV17pDecImportacaoAdicaoSeq',fld:'vPDECIMPORTACAOADICAOSEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaEmpresaId',fld:'vCENTRADAEMPRESAID'},{av:'AV7cEntradaId',fld:'vCENTRADAID'},{av:'AV8cEntradaItemSequencia',fld:'vCENTRADAITEMSEQUENCIA'},{av:'AV9cDecImportacaoSequencia',fld:'vCDECIMPORTACAOSEQUENCIA'},{av:'AV10cDecImportacaoAdicaoSeq',fld:'vCDECIMPORTACAOADICAOSEQ'},{av:'AV11cDecImportacaoAdicaoNo',fld:'vCDECIMPORTACAOADICAONO'},{av:'AV12cDecImportacaoAdicaoFabricante',fld:'vCDECIMPORTACAOADICAOFABRICANTE'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaEmpresaId',fld:'vCENTRADAEMPRESAID'},{av:'AV7cEntradaId',fld:'vCENTRADAID'},{av:'AV8cEntradaItemSequencia',fld:'vCENTRADAITEMSEQUENCIA'},{av:'AV9cDecImportacaoSequencia',fld:'vCDECIMPORTACAOSEQUENCIA'},{av:'AV10cDecImportacaoAdicaoSeq',fld:'vCDECIMPORTACAOADICAOSEQ'},{av:'AV11cDecImportacaoAdicaoNo',fld:'vCDECIMPORTACAOADICAONO'},{av:'AV12cDecImportacaoAdicaoFabricante',fld:'vCDECIMPORTACAOADICAOFABRICANTE'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaEmpresaId',fld:'vCENTRADAEMPRESAID'},{av:'AV7cEntradaId',fld:'vCENTRADAID'},{av:'AV8cEntradaItemSequencia',fld:'vCENTRADAITEMSEQUENCIA'},{av:'AV9cDecImportacaoSequencia',fld:'vCDECIMPORTACAOSEQUENCIA'},{av:'AV10cDecImportacaoAdicaoSeq',fld:'vCDECIMPORTACAOADICAOSEQ'},{av:'AV11cDecImportacaoAdicaoNo',fld:'vCDECIMPORTACAOADICAONO'},{av:'AV12cDecImportacaoAdicaoFabricante',fld:'vCDECIMPORTACAOADICAOFABRICANTE'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaEmpresaId',fld:'vCENTRADAEMPRESAID'},{av:'AV7cEntradaId',fld:'vCENTRADAID'},{av:'AV8cEntradaItemSequencia',fld:'vCENTRADAITEMSEQUENCIA'},{av:'AV9cDecImportacaoSequencia',fld:'vCDECIMPORTACAOSEQUENCIA'},{av:'AV10cDecImportacaoAdicaoSeq',fld:'vCDECIMPORTACAOADICAOSEQ'},{av:'AV11cDecImportacaoAdicaoNo',fld:'vCDECIMPORTACAOADICAONO'},{av:'AV12cDecImportacaoAdicaoFabricante',fld:'vCDECIMPORTACAOADICAOFABRICANTE'}],[]];
   this.setVCMap("AV13pEntradaEmpresaId", "vPENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV14pEntradaId", "vPENTRADAID", 0, "int");
   this.setVCMap("AV15pEntradaItemSequencia", "vPENTRADAITEMSEQUENCIA", 0, "int");
   this.setVCMap("AV16pDecImportacaoSequencia", "vPDECIMPORTACAOSEQUENCIA", 0, "int");
   this.setVCMap("AV17pDecImportacaoAdicaoSeq", "vPDECIMPORTACAOADICAOSEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0co0());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:38:49.77
*/
gx.evt.autoSkip = false;
gx.define('gx0ed0', false, function () {
   this.ServerClass =  "gx0ed0" ;
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
      this.AV10pDocumentoNotaEmpresaId=gx.fn.getControlValue("vPDOCUMENTONOTAEMPRESAID") ;
      this.AV11pDocumentoNotaFilial=gx.fn.getIntegerValue("vPDOCUMENTONOTAFILIAL",'.') ;
      this.AV12pDocumentoNotaSerie=gx.fn.getControlValue("vPDOCUMENTONOTASERIE") ;
   };
   this.e131sr2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141sr1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,44];
   this.GXLastCtrlId =44;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ed0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(6488,38,"DOCUMENTONOTAEMPRESAID","Empresa","","DocumentoNotaEmpresaId","char",0,"px",10,10,"left",null,[],6488,"DocumentoNotaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6489,39,"DOCUMENTONOTAFILIAL","Filial","","DocumentoNotaFilial","int",0,"px",7,7,"right",null,[],6489,"DocumentoNotaFilial",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6490,40,"DOCUMENTONOTASERIE","Série","","DocumentoNotaSerie","char",0,"px",4,4,"left",null,[],6490,"DocumentoNotaSerie",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(6487,41,"DOCUMENTONOTANUMERO","Número Documento","Selecionar","DocumentoNotaNumero","int",0,"px",10,10,"right",null,[],6487,"DocumentoNotaNumero",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKDOCUMENTONOTAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDOCUMENTONOTAEMPRESAID",gxz:"ZV6cDocumentoNotaEmpresaId",gxold:"OV6cDocumentoNotaEmpresaId",gxvar:"AV6cDocumentoNotaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cDocumentoNotaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cDocumentoNotaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCDOCUMENTONOTAEMPRESAID",gx.O.AV6cDocumentoNotaEmpresaId,0)},c2v:function(){gx.O.AV6cDocumentoNotaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCDOCUMENTONOTAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKDOCUMENTONOTAFILIAL", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDOCUMENTONOTAFILIAL",gxz:"ZV7cDocumentoNotaFilial",gxold:"OV7cDocumentoNotaFilial",gxvar:"AV7cDocumentoNotaFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cDocumentoNotaFilial=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cDocumentoNotaFilial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCDOCUMENTONOTAFILIAL",gx.O.AV7cDocumentoNotaFilial,0)},c2v:function(){gx.O.AV7cDocumentoNotaFilial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDOCUMENTONOTAFILIAL",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKDOCUMENTONOTASERIE", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDOCUMENTONOTASERIE",gxz:"ZV8cDocumentoNotaSerie",gxold:"OV8cDocumentoNotaSerie",gxvar:"AV8cDocumentoNotaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cDocumentoNotaSerie=Value},v2z:function(Value){gx.O.ZV8cDocumentoNotaSerie=Value},v2c:function(){gx.fn.setControlValue("vCDOCUMENTONOTASERIE",gx.O.AV8cDocumentoNotaSerie,0)},c2v:function(){gx.O.AV8cDocumentoNotaSerie=this.val()},val:function(){return gx.fn.getControlValue("vCDOCUMENTONOTASERIE")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKDOCUMENTONOTANUMERO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDOCUMENTONOTANUMERO",gxz:"ZV9cDocumentoNotaNumero",gxold:"OV9cDocumentoNotaNumero",gxvar:"AV9cDocumentoNotaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cDocumentoNotaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cDocumentoNotaNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCDOCUMENTONOTANUMERO",gx.O.AV9cDocumentoNotaNumero,0)},c2v:function(){gx.O.AV9cDocumentoNotaNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDOCUMENTONOTANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV15Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DOCUMENTONOTAEMPRESAID",gxz:"Z6488DocumentoNotaEmpresaId",gxold:"O6488DocumentoNotaEmpresaId",gxvar:"A6488DocumentoNotaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6488DocumentoNotaEmpresaId=Value},v2z:function(Value){gx.O.Z6488DocumentoNotaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("DOCUMENTONOTAEMPRESAID",row || gx.fn.currentGridRowImpl(36),gx.O.A6488DocumentoNotaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6488DocumentoNotaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("DOCUMENTONOTAEMPRESAID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DOCUMENTONOTAFILIAL",gxz:"Z6489DocumentoNotaFilial",gxold:"O6489DocumentoNotaFilial",gxvar:"A6489DocumentoNotaFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6489DocumentoNotaFilial=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6489DocumentoNotaFilial=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DOCUMENTONOTAFILIAL",row || gx.fn.currentGridRowImpl(36),gx.O.A6489DocumentoNotaFilial,0)},c2v:function(){gx.O.A6489DocumentoNotaFilial=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DOCUMENTONOTAFILIAL",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DOCUMENTONOTASERIE",gxz:"Z6490DocumentoNotaSerie",gxold:"O6490DocumentoNotaSerie",gxvar:"A6490DocumentoNotaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6490DocumentoNotaSerie=Value},v2z:function(Value){gx.O.Z6490DocumentoNotaSerie=Value},v2c:function(row){gx.fn.setGridControlValue("DOCUMENTONOTASERIE",row || gx.fn.currentGridRowImpl(36),gx.O.A6490DocumentoNotaSerie,0)},c2v:function(){gx.O.A6490DocumentoNotaSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("DOCUMENTONOTASERIE",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DOCUMENTONOTANUMERO",gxz:"Z6487DocumentoNotaNumero",gxold:"O6487DocumentoNotaNumero",gxvar:"A6487DocumentoNotaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6487DocumentoNotaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6487DocumentoNotaNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DOCUMENTONOTANUMERO",row || gx.fn.currentGridRowImpl(36),gx.O.A6487DocumentoNotaNumero,0)},c2v:function(){gx.O.A6487DocumentoNotaNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DOCUMENTONOTANUMERO",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLE4",grid:0};
   this.AV6cDocumentoNotaEmpresaId = "" ;
   this.ZV6cDocumentoNotaEmpresaId = "" ;
   this.OV6cDocumentoNotaEmpresaId = "" ;
   this.AV7cDocumentoNotaFilial = 0 ;
   this.ZV7cDocumentoNotaFilial = 0 ;
   this.OV7cDocumentoNotaFilial = 0 ;
   this.AV8cDocumentoNotaSerie = "" ;
   this.ZV8cDocumentoNotaSerie = "" ;
   this.OV8cDocumentoNotaSerie = "" ;
   this.AV9cDocumentoNotaNumero = 0 ;
   this.ZV9cDocumentoNotaNumero = 0 ;
   this.OV9cDocumentoNotaNumero = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z6488DocumentoNotaEmpresaId = "" ;
   this.O6488DocumentoNotaEmpresaId = "" ;
   this.Z6489DocumentoNotaFilial = 0 ;
   this.O6489DocumentoNotaFilial = 0 ;
   this.Z6490DocumentoNotaSerie = "" ;
   this.O6490DocumentoNotaSerie = "" ;
   this.Z6487DocumentoNotaNumero = 0 ;
   this.O6487DocumentoNotaNumero = 0 ;
   this.AV6cDocumentoNotaEmpresaId = "" ;
   this.AV7cDocumentoNotaFilial = 0 ;
   this.AV8cDocumentoNotaSerie = "" ;
   this.AV9cDocumentoNotaNumero = 0 ;
   this.AV10pDocumentoNotaEmpresaId = "" ;
   this.AV11pDocumentoNotaFilial = 0 ;
   this.AV12pDocumentoNotaSerie = "" ;
   this.AV5LinkSelection = "" ;
   this.A6488DocumentoNotaEmpresaId = "" ;
   this.A6489DocumentoNotaFilial = 0 ;
   this.A6490DocumentoNotaSerie = "" ;
   this.A6487DocumentoNotaNumero = 0 ;
   this.Events = {"e131sr2_client": ["ENTER", true] ,"e141sr1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDocumentoNotaEmpresaId',fld:'vCDOCUMENTONOTAEMPRESAID'},{av:'AV7cDocumentoNotaFilial',fld:'vCDOCUMENTONOTAFILIAL'},{av:'AV8cDocumentoNotaSerie',fld:'vCDOCUMENTONOTASERIE'},{av:'AV9cDocumentoNotaNumero',fld:'vCDOCUMENTONOTANUMERO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A6488DocumentoNotaEmpresaId',fld:'DOCUMENTONOTAEMPRESAID'},{av:'A6489DocumentoNotaFilial',fld:'DOCUMENTONOTAFILIAL'},{av:'A6490DocumentoNotaSerie',fld:'DOCUMENTONOTASERIE'}],[{av:'AV10pDocumentoNotaEmpresaId',fld:'vPDOCUMENTONOTAEMPRESAID'},{av:'AV11pDocumentoNotaFilial',fld:'vPDOCUMENTONOTAFILIAL'},{av:'AV12pDocumentoNotaSerie',fld:'vPDOCUMENTONOTASERIE'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDocumentoNotaEmpresaId',fld:'vCDOCUMENTONOTAEMPRESAID'},{av:'AV7cDocumentoNotaFilial',fld:'vCDOCUMENTONOTAFILIAL'},{av:'AV8cDocumentoNotaSerie',fld:'vCDOCUMENTONOTASERIE'},{av:'AV9cDocumentoNotaNumero',fld:'vCDOCUMENTONOTANUMERO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDocumentoNotaEmpresaId',fld:'vCDOCUMENTONOTAEMPRESAID'},{av:'AV7cDocumentoNotaFilial',fld:'vCDOCUMENTONOTAFILIAL'},{av:'AV8cDocumentoNotaSerie',fld:'vCDOCUMENTONOTASERIE'},{av:'AV9cDocumentoNotaNumero',fld:'vCDOCUMENTONOTANUMERO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDocumentoNotaEmpresaId',fld:'vCDOCUMENTONOTAEMPRESAID'},{av:'AV7cDocumentoNotaFilial',fld:'vCDOCUMENTONOTAFILIAL'},{av:'AV8cDocumentoNotaSerie',fld:'vCDOCUMENTONOTASERIE'},{av:'AV9cDocumentoNotaNumero',fld:'vCDOCUMENTONOTANUMERO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDocumentoNotaEmpresaId',fld:'vCDOCUMENTONOTAEMPRESAID'},{av:'AV7cDocumentoNotaFilial',fld:'vCDOCUMENTONOTAFILIAL'},{av:'AV8cDocumentoNotaSerie',fld:'vCDOCUMENTONOTASERIE'},{av:'AV9cDocumentoNotaNumero',fld:'vCDOCUMENTONOTANUMERO'}],[]];
   this.setVCMap("AV10pDocumentoNotaEmpresaId", "vPDOCUMENTONOTAEMPRESAID", 0, "char");
   this.setVCMap("AV11pDocumentoNotaFilial", "vPDOCUMENTONOTAFILIAL", 0, "int");
   this.setVCMap("AV12pDocumentoNotaSerie", "vPDOCUMENTONOTASERIE", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ed0());

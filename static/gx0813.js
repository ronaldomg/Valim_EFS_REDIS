/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:32:1.36
*/
gx.evt.autoSkip = false;
gx.define('gx0813', false, function () {
   this.ServerClass =  "gx0813" ;
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
      this.AV9pIntFinCblAgrUsuarioId=gx.fn.getControlValue("vPINTFINCBLAGRUSUARIOID") ;
      this.AV10pIntFinCblAgrSequencia=gx.fn.getIntegerValue("vPINTFINCBLAGRSEQUENCIA",'.') ;
      this.AV11pIntFinCblAgrSeqItem=gx.fn.getIntegerValue("vPINTFINCBLAGRSEQITEM",'.') ;
      this.AV12pIntFinCblAgrCCusDebCre=gx.fn.getControlValue("vPINTFINCBLAGRCCUSDEBCRE") ;
      this.AV13pIntFinCblAgrCCusId=gx.fn.getControlValue("vPINTFINCBLAGRCCUSID") ;
   };
   this.e131ng2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141ng1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,36,37,38,41];
   this.GXLastCtrlId =41;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0813",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(2739,33,"INTFINCBLAGRCCUSDEBCRE","Int Fin Cbl Agr CCus Deb Cre","","IntFinCblAgrCCusDebCre","char",0,"px",1,1,"left",null,[],2739,"IntFinCblAgrCCusDebCre",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2741,34,"INTFINCBLAGRCCUSID","Int Fin Cbl Agr CCus Id","","IntFinCblAgrCCusId","svchar",0,"px",30,30,"left",null,[],2741,"IntFinCblAgrCCusId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2742,35,"INTFINCBLAGRCCUSVALOR","Int Fin Cbl Agr CCus Valor","Selecionar","IntFinCblAgrCCusValor","decimal",0,"px",12,12,"right",null,[],2742,"IntFinCblAgrCCusValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2728,36,"INTFINCBLAGRUSUARIOID","Usuário","","IntFinCblAgrUsuarioId","char",0,"px",12,12,"left",null,[],2728,"IntFinCblAgrUsuarioId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2729,37,"INTFINCBLAGRSEQUENCIA","Int Fin Cbl Agr Sequencia","","IntFinCblAgrSequencia","int",0,"px",6,6,"right",null,[],2729,"IntFinCblAgrSequencia",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2730,38,"INTFINCBLAGRSEQITEM","Int Fin Cbl Agr Seq Item","","IntFinCblAgrSeqItem","int",0,"px",6,6,"right",null,[],2730,"IntFinCblAgrSeqItem",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKINTFINCBLAGRCCUSDEBCRE", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTFINCBLAGRCCUSDEBCRE",gxz:"ZV6cIntFinCblAgrCCusDebCre",gxold:"OV6cIntFinCblAgrCCusDebCre",gxvar:"AV6cIntFinCblAgrCCusDebCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cIntFinCblAgrCCusDebCre=Value},v2z:function(Value){gx.O.ZV6cIntFinCblAgrCCusDebCre=Value},v2c:function(){gx.fn.setControlValue("vCINTFINCBLAGRCCUSDEBCRE",gx.O.AV6cIntFinCblAgrCCusDebCre,0)},c2v:function(){gx.O.AV6cIntFinCblAgrCCusDebCre=this.val()},val:function(){return gx.fn.getControlValue("vCINTFINCBLAGRCCUSDEBCRE")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKINTFINCBLAGRCCUSID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTFINCBLAGRCCUSID",gxz:"ZV7cIntFinCblAgrCCusId",gxold:"OV7cIntFinCblAgrCCusId",gxvar:"AV7cIntFinCblAgrCCusId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cIntFinCblAgrCCusId=Value},v2z:function(Value){gx.O.ZV7cIntFinCblAgrCCusId=Value},v2c:function(){gx.fn.setControlValue("vCINTFINCBLAGRCCUSID",gx.O.AV7cIntFinCblAgrCCusId,0)},c2v:function(){gx.O.AV7cIntFinCblAgrCCusId=this.val()},val:function(){return gx.fn.getControlValue("vCINTFINCBLAGRCCUSID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKINTFINCBLAGRCCUSVALOR", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTFINCBLAGRCCUSVALOR",gxz:"ZV8cIntFinCblAgrCCusValor",gxold:"OV8cIntFinCblAgrCCusValor",gxvar:"AV8cIntFinCblAgrCCusValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cIntFinCblAgrCCusValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV8cIntFinCblAgrCCusValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCINTFINCBLAGRCCUSVALOR",gx.O.AV8cIntFinCblAgrCCusValor,2,',')},c2v:function(){gx.O.AV8cIntFinCblAgrCCusValor=this.val()},val:function(){return gx.fn.getDecimalValue("vCINTFINCBLAGRCCUSVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTFINCBLAGRCCUSDEBCRE",gxz:"Z2739IntFinCblAgrCCusDebCre",gxold:"O2739IntFinCblAgrCCusDebCre",gxvar:"A2739IntFinCblAgrCCusDebCre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2739IntFinCblAgrCCusDebCre=Value},v2z:function(Value){gx.O.Z2739IntFinCblAgrCCusDebCre=Value},v2c:function(row){gx.fn.setGridControlValue("INTFINCBLAGRCCUSDEBCRE",row || gx.fn.currentGridRowImpl(31),gx.O.A2739IntFinCblAgrCCusDebCre,0)},c2v:function(){gx.O.A2739IntFinCblAgrCCusDebCre=this.val()},val:function(row){return gx.fn.getGridControlValue("INTFINCBLAGRCCUSDEBCRE",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTFINCBLAGRCCUSID",gxz:"Z2741IntFinCblAgrCCusId",gxold:"O2741IntFinCblAgrCCusId",gxvar:"A2741IntFinCblAgrCCusId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2741IntFinCblAgrCCusId=Value},v2z:function(Value){gx.O.Z2741IntFinCblAgrCCusId=Value},v2c:function(row){gx.fn.setGridControlValue("INTFINCBLAGRCCUSID",row || gx.fn.currentGridRowImpl(31),gx.O.A2741IntFinCblAgrCCusId,0)},c2v:function(){gx.O.A2741IntFinCblAgrCCusId=this.val()},val:function(row){return gx.fn.getGridControlValue("INTFINCBLAGRCCUSID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"decimal",len:12,dec:2,sign:false,pic:"ZZZZZZZZ9.99",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTFINCBLAGRCCUSVALOR",gxz:"Z2742IntFinCblAgrCCusValor",gxold:"O2742IntFinCblAgrCCusValor",gxvar:"A2742IntFinCblAgrCCusValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2742IntFinCblAgrCCusValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2742IntFinCblAgrCCusValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("INTFINCBLAGRCCUSVALOR",row || gx.fn.currentGridRowImpl(31),gx.O.A2742IntFinCblAgrCCusValor,2,',')},c2v:function(){gx.O.A2742IntFinCblAgrCCusValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("INTFINCBLAGRCCUSVALOR",row || gx.fn.currentGridRowImpl(31),'.',',')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTFINCBLAGRUSUARIOID",gxz:"Z2728IntFinCblAgrUsuarioId",gxold:"O2728IntFinCblAgrUsuarioId",gxvar:"A2728IntFinCblAgrUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2728IntFinCblAgrUsuarioId=Value},v2z:function(Value){gx.O.Z2728IntFinCblAgrUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("INTFINCBLAGRUSUARIOID",row || gx.fn.currentGridRowImpl(31),gx.O.A2728IntFinCblAgrUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2728IntFinCblAgrUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("INTFINCBLAGRUSUARIOID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTFINCBLAGRSEQUENCIA",gxz:"Z2729IntFinCblAgrSequencia",gxold:"O2729IntFinCblAgrSequencia",gxvar:"A2729IntFinCblAgrSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2729IntFinCblAgrSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2729IntFinCblAgrSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INTFINCBLAGRSEQUENCIA",row || gx.fn.currentGridRowImpl(31),gx.O.A2729IntFinCblAgrSequencia,0)},c2v:function(){gx.O.A2729IntFinCblAgrSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INTFINCBLAGRSEQUENCIA",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTFINCBLAGRSEQITEM",gxz:"Z2730IntFinCblAgrSeqItem",gxold:"O2730IntFinCblAgrSeqItem",gxvar:"A2730IntFinCblAgrSeqItem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2730IntFinCblAgrSeqItem=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2730IntFinCblAgrSeqItem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INTFINCBLAGRSEQITEM",row || gx.fn.currentGridRowImpl(31),gx.O.A2730IntFinCblAgrSeqItem,0)},c2v:function(){gx.O.A2730IntFinCblAgrSeqItem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INTFINCBLAGRSEQITEM",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TABLE4",grid:0};
   this.AV6cIntFinCblAgrCCusDebCre = "" ;
   this.ZV6cIntFinCblAgrCCusDebCre = "" ;
   this.OV6cIntFinCblAgrCCusDebCre = "" ;
   this.AV7cIntFinCblAgrCCusId = "" ;
   this.ZV7cIntFinCblAgrCCusId = "" ;
   this.OV7cIntFinCblAgrCCusId = "" ;
   this.AV8cIntFinCblAgrCCusValor = 0 ;
   this.ZV8cIntFinCblAgrCCusValor = 0 ;
   this.OV8cIntFinCblAgrCCusValor = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z2739IntFinCblAgrCCusDebCre = "" ;
   this.O2739IntFinCblAgrCCusDebCre = "" ;
   this.Z2741IntFinCblAgrCCusId = "" ;
   this.O2741IntFinCblAgrCCusId = "" ;
   this.Z2742IntFinCblAgrCCusValor = 0 ;
   this.O2742IntFinCblAgrCCusValor = 0 ;
   this.Z2728IntFinCblAgrUsuarioId = "" ;
   this.O2728IntFinCblAgrUsuarioId = "" ;
   this.Z2729IntFinCblAgrSequencia = 0 ;
   this.O2729IntFinCblAgrSequencia = 0 ;
   this.Z2730IntFinCblAgrSeqItem = 0 ;
   this.O2730IntFinCblAgrSeqItem = 0 ;
   this.AV6cIntFinCblAgrCCusDebCre = "" ;
   this.AV7cIntFinCblAgrCCusId = "" ;
   this.AV8cIntFinCblAgrCCusValor = 0 ;
   this.AV9pIntFinCblAgrUsuarioId = "" ;
   this.AV10pIntFinCblAgrSequencia = 0 ;
   this.AV11pIntFinCblAgrSeqItem = 0 ;
   this.AV12pIntFinCblAgrCCusDebCre = "" ;
   this.AV13pIntFinCblAgrCCusId = "" ;
   this.AV5LinkSelection = "" ;
   this.A2739IntFinCblAgrCCusDebCre = "" ;
   this.A2741IntFinCblAgrCCusId = "" ;
   this.A2742IntFinCblAgrCCusValor = 0 ;
   this.A2728IntFinCblAgrUsuarioId = "" ;
   this.A2729IntFinCblAgrSequencia = 0 ;
   this.A2730IntFinCblAgrSeqItem = 0 ;
   this.Events = {"e131ng2_client": ["ENTER", true] ,"e141ng1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntFinCblAgrCCusDebCre',fld:'vCINTFINCBLAGRCCUSDEBCRE'},{av:'AV7cIntFinCblAgrCCusId',fld:'vCINTFINCBLAGRCCUSID'},{av:'AV8cIntFinCblAgrCCusValor',fld:'vCINTFINCBLAGRCCUSVALOR'},{av:'AV9pIntFinCblAgrUsuarioId',fld:'vPINTFINCBLAGRUSUARIOID',hsh:true},{av:'AV10pIntFinCblAgrSequencia',fld:'vPINTFINCBLAGRSEQUENCIA',hsh:true},{av:'AV11pIntFinCblAgrSeqItem',fld:'vPINTFINCBLAGRSEQITEM',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A2739IntFinCblAgrCCusDebCre',fld:'INTFINCBLAGRCCUSDEBCRE'},{av:'A2741IntFinCblAgrCCusId',fld:'INTFINCBLAGRCCUSID'}],[{av:'AV12pIntFinCblAgrCCusDebCre',fld:'vPINTFINCBLAGRCCUSDEBCRE'},{av:'AV13pIntFinCblAgrCCusId',fld:'vPINTFINCBLAGRCCUSID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntFinCblAgrCCusDebCre',fld:'vCINTFINCBLAGRCCUSDEBCRE'},{av:'AV7cIntFinCblAgrCCusId',fld:'vCINTFINCBLAGRCCUSID'},{av:'AV8cIntFinCblAgrCCusValor',fld:'vCINTFINCBLAGRCCUSVALOR'},{av:'AV9pIntFinCblAgrUsuarioId',fld:'vPINTFINCBLAGRUSUARIOID',hsh:true},{av:'AV10pIntFinCblAgrSequencia',fld:'vPINTFINCBLAGRSEQUENCIA',hsh:true},{av:'AV11pIntFinCblAgrSeqItem',fld:'vPINTFINCBLAGRSEQITEM',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntFinCblAgrCCusDebCre',fld:'vCINTFINCBLAGRCCUSDEBCRE'},{av:'AV7cIntFinCblAgrCCusId',fld:'vCINTFINCBLAGRCCUSID'},{av:'AV8cIntFinCblAgrCCusValor',fld:'vCINTFINCBLAGRCCUSVALOR'},{av:'AV9pIntFinCblAgrUsuarioId',fld:'vPINTFINCBLAGRUSUARIOID',hsh:true},{av:'AV10pIntFinCblAgrSequencia',fld:'vPINTFINCBLAGRSEQUENCIA',hsh:true},{av:'AV11pIntFinCblAgrSeqItem',fld:'vPINTFINCBLAGRSEQITEM',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntFinCblAgrCCusDebCre',fld:'vCINTFINCBLAGRCCUSDEBCRE'},{av:'AV7cIntFinCblAgrCCusId',fld:'vCINTFINCBLAGRCCUSID'},{av:'AV8cIntFinCblAgrCCusValor',fld:'vCINTFINCBLAGRCCUSVALOR'},{av:'AV9pIntFinCblAgrUsuarioId',fld:'vPINTFINCBLAGRUSUARIOID',hsh:true},{av:'AV10pIntFinCblAgrSequencia',fld:'vPINTFINCBLAGRSEQUENCIA',hsh:true},{av:'AV11pIntFinCblAgrSeqItem',fld:'vPINTFINCBLAGRSEQITEM',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntFinCblAgrCCusDebCre',fld:'vCINTFINCBLAGRCCUSDEBCRE'},{av:'AV7cIntFinCblAgrCCusId',fld:'vCINTFINCBLAGRCCUSID'},{av:'AV8cIntFinCblAgrCCusValor',fld:'vCINTFINCBLAGRCCUSVALOR'},{av:'AV9pIntFinCblAgrUsuarioId',fld:'vPINTFINCBLAGRUSUARIOID',hsh:true},{av:'AV10pIntFinCblAgrSequencia',fld:'vPINTFINCBLAGRSEQUENCIA',hsh:true},{av:'AV11pIntFinCblAgrSeqItem',fld:'vPINTFINCBLAGRSEQITEM',hsh:true}],[]];
   this.setVCMap("AV9pIntFinCblAgrUsuarioId", "vPINTFINCBLAGRUSUARIOID", 0, "char");
   this.setVCMap("AV10pIntFinCblAgrSequencia", "vPINTFINCBLAGRSEQUENCIA", 0, "int");
   this.setVCMap("AV11pIntFinCblAgrSeqItem", "vPINTFINCBLAGRSEQITEM", 0, "int");
   this.setVCMap("AV12pIntFinCblAgrCCusDebCre", "vPINTFINCBLAGRCCUSDEBCRE", 0, "char");
   this.setVCMap("AV13pIntFinCblAgrCCusId", "vPINTFINCBLAGRCCUSID", 0, "svchar");
   this.setVCMap("AV9pIntFinCblAgrUsuarioId", "vPINTFINCBLAGRUSUARIOID", 0, "char");
   this.setVCMap("AV10pIntFinCblAgrSequencia", "vPINTFINCBLAGRSEQUENCIA", 0, "int");
   this.setVCMap("AV11pIntFinCblAgrSeqItem", "vPINTFINCBLAGRSEQITEM", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar({rfrVar:"AV9pIntFinCblAgrUsuarioId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV10pIntFinCblAgrSequencia"});
   Grid1Container.addRefreshingVar({rfrVar:"AV11pIntFinCblAgrSeqItem"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0813());

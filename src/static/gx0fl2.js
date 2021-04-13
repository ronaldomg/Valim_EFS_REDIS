/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:36:47.47
*/
gx.evt.autoSkip = false;
gx.define('gx0fl2', false, function () {
   this.ServerClass =  "gx0fl2" ;
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
      this.AV9pEntradaEmpresaId=gx.fn.getControlValue("vPENTRADAEMPRESAID") ;
      this.AV10pEntradaId=gx.fn.getIntegerValue("vPENTRADAID",'.') ;
      this.AV11pEntradaObsFiscalCodigo=gx.fn.getIntegerValue("vPENTRADAOBSFISCALCODIGO",'.') ;
   };
   this.e131ra2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141ra1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,28,32,33,34,35,36,37,40];
   this.GXLastCtrlId =40;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0fl2",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",32,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(7285,33,"ENTRADAOBSFISCALCODIGO","Código Observação","","EntradaObsFiscalCodigo","int",0,"px",4,4,"right",null,[],7285,"EntradaObsFiscalCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7274,34,"ENTRADAOBSFISCALUSUARIOALT","Entrada Obs Fiscal Usuario Alt","Selecionar","EntradaObsFiscalUsuarioAlt","char",0,"px",12,12,"left",null,[],7274,"EntradaObsFiscalUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(7275,35,"ENTRADAOBSFISCALDATAHORAALT","Entrada Obs Fiscal Data Hora Alt","","EntradaObsFiscalDataHoraAlt","dtime",0,"px",16,16,"right",null,[],7275,"EntradaObsFiscalDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4637,36,"ENTRADAEMPRESAID","Empresa da Entrada","","EntradaEmpresaId","char",0,"px",10,10,"left",null,[],4637,"EntradaEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4638,37,"ENTRADAID","Código da Entrada","","EntradaId","int",0,"px",10,10,"right",null,[],4638,"EntradaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKENTRADAOBSFISCALCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAOBSFISCALCODIGO",gxz:"ZV6cEntradaObsFiscalCodigo",gxold:"OV6cEntradaObsFiscalCodigo",gxvar:"AV6cEntradaObsFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEntradaObsFiscalCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cEntradaObsFiscalCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAOBSFISCALCODIGO",gx.O.AV6cEntradaObsFiscalCodigo,0)},c2v:function(){gx.O.AV6cEntradaObsFiscalCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADAOBSFISCALCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKENTRADAOBSFISCALUSUARIOALT", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAOBSFISCALUSUARIOALT",gxz:"ZV7cEntradaObsFiscalUsuarioAlt",gxold:"OV7cEntradaObsFiscalUsuarioAlt",gxvar:"AV7cEntradaObsFiscalUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cEntradaObsFiscalUsuarioAlt=Value},v2z:function(Value){gx.O.ZV7cEntradaObsFiscalUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCENTRADAOBSFISCALUSUARIOALT",gx.O.AV7cEntradaObsFiscalUsuarioAlt,0)},c2v:function(){gx.O.AV7cEntradaObsFiscalUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADAOBSFISCALUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKENTRADAOBSFISCALDATAHORAALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAOBSFISCALDATAHORAALT",gxz:"ZV8cEntradaObsFiscalDataHoraAlt",gxold:"OV8cEntradaObsFiscalDataHoraAlt",gxvar:"AV8cEntradaObsFiscalDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cEntradaObsFiscalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8cEntradaObsFiscalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAOBSFISCALDATAHORAALT",gx.O.AV8cEntradaObsFiscalDataHoraAlt,0)},c2v:function(){gx.O.AV8cEntradaObsFiscalDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCENTRADAOBSFISCALDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"GROUP2",grid:0};
   GXValidFnc[28]={fld:"TABLE3",grid:0};
   GXValidFnc[32]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAOBSFISCALCODIGO",gxz:"Z7285EntradaObsFiscalCodigo",gxold:"O7285EntradaObsFiscalCodigo",gxvar:"A7285EntradaObsFiscalCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7285EntradaObsFiscalCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7285EntradaObsFiscalCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAOBSFISCALCODIGO",row || gx.fn.currentGridRowImpl(31),gx.O.A7285EntradaObsFiscalCodigo,0)},c2v:function(){gx.O.A7285EntradaObsFiscalCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAOBSFISCALCODIGO",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAOBSFISCALUSUARIOALT",gxz:"Z7274EntradaObsFiscalUsuarioAlt",gxold:"O7274EntradaObsFiscalUsuarioAlt",gxvar:"A7274EntradaObsFiscalUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A7274EntradaObsFiscalUsuarioAlt=Value},v2z:function(Value){gx.O.Z7274EntradaObsFiscalUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAOBSFISCALUSUARIOALT",row || gx.fn.currentGridRowImpl(31),gx.O.A7274EntradaObsFiscalUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7274EntradaObsFiscalUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAOBSFISCALUSUARIOALT",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAOBSFISCALDATAHORAALT",gxz:"Z7275EntradaObsFiscalDataHoraAlt",gxold:"O7275EntradaObsFiscalDataHoraAlt",gxvar:"A7275EntradaObsFiscalDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A7275EntradaObsFiscalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7275EntradaObsFiscalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAOBSFISCALDATAHORAALT",row || gx.fn.currentGridRowImpl(31),gx.O.A7275EntradaObsFiscalDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7275EntradaObsFiscalDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ENTRADAOBSFISCALDATAHORAALT",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAEMPRESAID",gxz:"Z4637EntradaEmpresaId",gxold:"O4637EntradaEmpresaId",gxvar:"A4637EntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4637EntradaEmpresaId=Value},v2z:function(Value){gx.O.Z4637EntradaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(31),gx.O.A4637EntradaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4637EntradaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAID",gxz:"Z4638EntradaId",gxold:"O4638EntradaId",gxvar:"A4638EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4638EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4638EntradaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAID",row || gx.fn.currentGridRowImpl(31),gx.O.A4638EntradaId,0)},c2v:function(){gx.O.A4638EntradaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLE4",grid:0};
   this.AV6cEntradaObsFiscalCodigo = 0 ;
   this.ZV6cEntradaObsFiscalCodigo = 0 ;
   this.OV6cEntradaObsFiscalCodigo = 0 ;
   this.AV7cEntradaObsFiscalUsuarioAlt = "" ;
   this.ZV7cEntradaObsFiscalUsuarioAlt = "" ;
   this.OV7cEntradaObsFiscalUsuarioAlt = "" ;
   this.AV8cEntradaObsFiscalDataHoraAlt = gx.date.nullDate() ;
   this.ZV8cEntradaObsFiscalDataHoraAlt = gx.date.nullDate() ;
   this.OV8cEntradaObsFiscalDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z7285EntradaObsFiscalCodigo = 0 ;
   this.O7285EntradaObsFiscalCodigo = 0 ;
   this.Z7274EntradaObsFiscalUsuarioAlt = "" ;
   this.O7274EntradaObsFiscalUsuarioAlt = "" ;
   this.Z7275EntradaObsFiscalDataHoraAlt = gx.date.nullDate() ;
   this.O7275EntradaObsFiscalDataHoraAlt = gx.date.nullDate() ;
   this.Z4637EntradaEmpresaId = "" ;
   this.O4637EntradaEmpresaId = "" ;
   this.Z4638EntradaId = 0 ;
   this.O4638EntradaId = 0 ;
   this.AV6cEntradaObsFiscalCodigo = 0 ;
   this.AV7cEntradaObsFiscalUsuarioAlt = "" ;
   this.AV8cEntradaObsFiscalDataHoraAlt = gx.date.nullDate() ;
   this.AV9pEntradaEmpresaId = "" ;
   this.AV10pEntradaId = 0 ;
   this.AV11pEntradaObsFiscalCodigo = 0 ;
   this.AV5LinkSelection = "" ;
   this.A7285EntradaObsFiscalCodigo = 0 ;
   this.A7274EntradaObsFiscalUsuarioAlt = "" ;
   this.A7275EntradaObsFiscalDataHoraAlt = gx.date.nullDate() ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.Events = {"e131ra2_client": ["ENTER", true] ,"e141ra1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaObsFiscalCodigo',fld:'vCENTRADAOBSFISCALCODIGO'},{av:'AV7cEntradaObsFiscalUsuarioAlt',fld:'vCENTRADAOBSFISCALUSUARIOALT'},{av:'AV8cEntradaObsFiscalDataHoraAlt',fld:'vCENTRADAOBSFISCALDATAHORAALT'},{av:'AV9pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV10pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A7285EntradaObsFiscalCodigo',fld:'ENTRADAOBSFISCALCODIGO'}],[{av:'AV11pEntradaObsFiscalCodigo',fld:'vPENTRADAOBSFISCALCODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaObsFiscalCodigo',fld:'vCENTRADAOBSFISCALCODIGO'},{av:'AV7cEntradaObsFiscalUsuarioAlt',fld:'vCENTRADAOBSFISCALUSUARIOALT'},{av:'AV8cEntradaObsFiscalDataHoraAlt',fld:'vCENTRADAOBSFISCALDATAHORAALT'},{av:'AV9pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV10pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaObsFiscalCodigo',fld:'vCENTRADAOBSFISCALCODIGO'},{av:'AV7cEntradaObsFiscalUsuarioAlt',fld:'vCENTRADAOBSFISCALUSUARIOALT'},{av:'AV8cEntradaObsFiscalDataHoraAlt',fld:'vCENTRADAOBSFISCALDATAHORAALT'},{av:'AV9pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV10pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaObsFiscalCodigo',fld:'vCENTRADAOBSFISCALCODIGO'},{av:'AV7cEntradaObsFiscalUsuarioAlt',fld:'vCENTRADAOBSFISCALUSUARIOALT'},{av:'AV8cEntradaObsFiscalDataHoraAlt',fld:'vCENTRADAOBSFISCALDATAHORAALT'},{av:'AV9pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV10pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaObsFiscalCodigo',fld:'vCENTRADAOBSFISCALCODIGO'},{av:'AV7cEntradaObsFiscalUsuarioAlt',fld:'vCENTRADAOBSFISCALUSUARIOALT'},{av:'AV8cEntradaObsFiscalDataHoraAlt',fld:'vCENTRADAOBSFISCALDATAHORAALT'},{av:'AV9pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID',hsh:true},{av:'AV10pEntradaId',fld:'vPENTRADAID',hsh:true}],[]];
   this.setVCMap("AV9pEntradaEmpresaId", "vPENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV10pEntradaId", "vPENTRADAID", 0, "int");
   this.setVCMap("AV11pEntradaObsFiscalCodigo", "vPENTRADAOBSFISCALCODIGO", 0, "int");
   this.setVCMap("AV9pEntradaEmpresaId", "vPENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV10pEntradaId", "vPENTRADAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar({rfrVar:"AV9pEntradaEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV10pEntradaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0fl2());
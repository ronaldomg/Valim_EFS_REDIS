/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:33:48.60
*/
gx.evt.autoSkip = false;
gx.define('gx0ad0', false, function () {
   this.ServerClass =  "gx0ad0" ;
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
      this.AV12pDeptoComprasEmpresaId=gx.fn.getControlValue("vPDEPTOCOMPRASEMPRESAID") ;
      this.AV13pDeptoComprasCodigo=gx.fn.getControlValue("vPDEPTOCOMPRASCODIGO") ;
   };
   this.e131os2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141os1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,54];
   this.GXLastCtrlId =54;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0ad0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(3487,48,"DEPTOCOMPRASEMPRESAID","Empresa Depto Compras","","DeptoComprasEmpresaId","char",0,"px",10,10,"left",null,[],3487,"DeptoComprasEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3488,49,"DEPTOCOMPRASCODIGO","Código Depto Compras","","DeptoComprasCodigo","svchar",0,"px",15,15,"left",null,[],3488,"DeptoComprasCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3483,50,"DEPTOCOMPRASNOME","Nome Depto Compras","Selecionar","DeptoComprasNome","svchar",0,"px",40,40,"left",null,[],3483,"DeptoComprasNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3484,51,"DEPTOCOMPRASRESPONSAVEL","Nome Responsável","","DeptoComprasResponsavel","svchar",0,"px",40,40,"left",null,[],3484,"DeptoComprasResponsavel",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKDEPTOCOMPRASEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDEPTOCOMPRASEMPRESAID",gxz:"ZV6cDeptoComprasEmpresaId",gxold:"OV6cDeptoComprasEmpresaId",gxvar:"AV6cDeptoComprasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cDeptoComprasEmpresaId=Value},v2z:function(Value){gx.O.ZV6cDeptoComprasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCDEPTOCOMPRASEMPRESAID",gx.O.AV6cDeptoComprasEmpresaId,0)},c2v:function(){gx.O.AV6cDeptoComprasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCDEPTOCOMPRASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKDEPTOCOMPRASCODIGO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDEPTOCOMPRASCODIGO",gxz:"ZV7cDeptoComprasCodigo",gxold:"OV7cDeptoComprasCodigo",gxvar:"AV7cDeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cDeptoComprasCodigo=Value},v2z:function(Value){gx.O.ZV7cDeptoComprasCodigo=Value},v2c:function(){gx.fn.setControlValue("vCDEPTOCOMPRASCODIGO",gx.O.AV7cDeptoComprasCodigo,0)},c2v:function(){gx.O.AV7cDeptoComprasCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCDEPTOCOMPRASCODIGO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKDEPTOCOMPRASNOME", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDEPTOCOMPRASNOME",gxz:"ZV8cDeptoComprasNome",gxold:"OV8cDeptoComprasNome",gxvar:"AV8cDeptoComprasNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cDeptoComprasNome=Value},v2z:function(Value){gx.O.ZV8cDeptoComprasNome=Value},v2c:function(){gx.fn.setControlValue("vCDEPTOCOMPRASNOME",gx.O.AV8cDeptoComprasNome,0)},c2v:function(){gx.O.AV8cDeptoComprasNome=this.val()},val:function(){return gx.fn.getControlValue("vCDEPTOCOMPRASNOME")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKDEPTOCOMPRASRESPONSAVEL", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDEPTOCOMPRASRESPONSAVEL",gxz:"ZV9cDeptoComprasResponsavel",gxold:"OV9cDeptoComprasResponsavel",gxvar:"AV9cDeptoComprasResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cDeptoComprasResponsavel=Value},v2z:function(Value){gx.O.ZV9cDeptoComprasResponsavel=Value},v2c:function(){gx.fn.setControlValue("vCDEPTOCOMPRASRESPONSAVEL",gx.O.AV9cDeptoComprasResponsavel,0)},c2v:function(){gx.O.AV9cDeptoComprasResponsavel=this.val()},val:function(){return gx.fn.getControlValue("vCDEPTOCOMPRASRESPONSAVEL")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKDEPTOCOMPRASUSUARIOALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDEPTOCOMPRASUSUARIOALT",gxz:"ZV10cDeptoComprasUsuarioAlt",gxold:"OV10cDeptoComprasUsuarioAlt",gxvar:"AV10cDeptoComprasUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cDeptoComprasUsuarioAlt=Value},v2z:function(Value){gx.O.ZV10cDeptoComprasUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCDEPTOCOMPRASUSUARIOALT",gx.O.AV10cDeptoComprasUsuarioAlt,0)},c2v:function(){gx.O.AV10cDeptoComprasUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCDEPTOCOMPRASUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKDEPTOCOMPRASDATAHORAALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDEPTOCOMPRASDATAHORAALT",gxz:"ZV11cDeptoComprasDataHoraAlt",gxold:"OV11cDeptoComprasDataHoraAlt",gxvar:"AV11cDeptoComprasDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cDeptoComprasDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cDeptoComprasDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCDEPTOCOMPRASDATAHORAALT",gx.O.AV11cDeptoComprasDataHoraAlt,0)},c2v:function(){gx.O.AV11cDeptoComprasDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCDEPTOCOMPRASDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASEMPRESAID",gxz:"Z3487DeptoComprasEmpresaId",gxold:"O3487DeptoComprasEmpresaId",gxvar:"A3487DeptoComprasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3487DeptoComprasEmpresaId=Value},v2z:function(Value){gx.O.Z3487DeptoComprasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("DEPTOCOMPRASEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A3487DeptoComprasEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3487DeptoComprasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPTOCOMPRASEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASCODIGO",gxz:"Z3488DeptoComprasCodigo",gxold:"O3488DeptoComprasCodigo",gxvar:"A3488DeptoComprasCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3488DeptoComprasCodigo=Value},v2z:function(Value){gx.O.Z3488DeptoComprasCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("DEPTOCOMPRASCODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A3488DeptoComprasCodigo,0)},c2v:function(){gx.O.A3488DeptoComprasCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPTOCOMPRASCODIGO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASNOME",gxz:"Z3483DeptoComprasNome",gxold:"O3483DeptoComprasNome",gxvar:"A3483DeptoComprasNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3483DeptoComprasNome=Value},v2z:function(Value){gx.O.Z3483DeptoComprasNome=Value},v2c:function(row){gx.fn.setGridControlValue("DEPTOCOMPRASNOME",row || gx.fn.currentGridRowImpl(46),gx.O.A3483DeptoComprasNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3483DeptoComprasNome=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPTOCOMPRASNOME",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DEPTOCOMPRASRESPONSAVEL",gxz:"Z3484DeptoComprasResponsavel",gxold:"O3484DeptoComprasResponsavel",gxvar:"A3484DeptoComprasResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3484DeptoComprasResponsavel=Value},v2z:function(Value){gx.O.Z3484DeptoComprasResponsavel=Value},v2c:function(row){gx.fn.setGridControlValue("DEPTOCOMPRASRESPONSAVEL",row || gx.fn.currentGridRowImpl(46),gx.O.A3484DeptoComprasResponsavel,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3484DeptoComprasResponsavel=this.val()},val:function(row){return gx.fn.getGridControlValue("DEPTOCOMPRASRESPONSAVEL",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE4",grid:0};
   this.AV6cDeptoComprasEmpresaId = "" ;
   this.ZV6cDeptoComprasEmpresaId = "" ;
   this.OV6cDeptoComprasEmpresaId = "" ;
   this.AV7cDeptoComprasCodigo = "" ;
   this.ZV7cDeptoComprasCodigo = "" ;
   this.OV7cDeptoComprasCodigo = "" ;
   this.AV8cDeptoComprasNome = "" ;
   this.ZV8cDeptoComprasNome = "" ;
   this.OV8cDeptoComprasNome = "" ;
   this.AV9cDeptoComprasResponsavel = "" ;
   this.ZV9cDeptoComprasResponsavel = "" ;
   this.OV9cDeptoComprasResponsavel = "" ;
   this.AV10cDeptoComprasUsuarioAlt = "" ;
   this.ZV10cDeptoComprasUsuarioAlt = "" ;
   this.OV10cDeptoComprasUsuarioAlt = "" ;
   this.AV11cDeptoComprasDataHoraAlt = gx.date.nullDate() ;
   this.ZV11cDeptoComprasDataHoraAlt = gx.date.nullDate() ;
   this.OV11cDeptoComprasDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z3487DeptoComprasEmpresaId = "" ;
   this.O3487DeptoComprasEmpresaId = "" ;
   this.Z3488DeptoComprasCodigo = "" ;
   this.O3488DeptoComprasCodigo = "" ;
   this.Z3483DeptoComprasNome = "" ;
   this.O3483DeptoComprasNome = "" ;
   this.Z3484DeptoComprasResponsavel = "" ;
   this.O3484DeptoComprasResponsavel = "" ;
   this.AV6cDeptoComprasEmpresaId = "" ;
   this.AV7cDeptoComprasCodigo = "" ;
   this.AV8cDeptoComprasNome = "" ;
   this.AV9cDeptoComprasResponsavel = "" ;
   this.AV10cDeptoComprasUsuarioAlt = "" ;
   this.AV11cDeptoComprasDataHoraAlt = gx.date.nullDate() ;
   this.AV12pDeptoComprasEmpresaId = "" ;
   this.AV13pDeptoComprasCodigo = "" ;
   this.A3486DeptoComprasDataHoraAlt = gx.date.nullDate() ;
   this.A3485DeptoComprasUsuarioAlt = "" ;
   this.AV5LinkSelection = "" ;
   this.A3487DeptoComprasEmpresaId = "" ;
   this.A3488DeptoComprasCodigo = "" ;
   this.A3483DeptoComprasNome = "" ;
   this.A3484DeptoComprasResponsavel = "" ;
   this.Events = {"e131os2_client": ["ENTER", true] ,"e141os1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDeptoComprasEmpresaId',fld:'vCDEPTOCOMPRASEMPRESAID'},{av:'AV7cDeptoComprasCodigo',fld:'vCDEPTOCOMPRASCODIGO'},{av:'AV8cDeptoComprasNome',fld:'vCDEPTOCOMPRASNOME'},{av:'AV9cDeptoComprasResponsavel',fld:'vCDEPTOCOMPRASRESPONSAVEL'},{av:'AV10cDeptoComprasUsuarioAlt',fld:'vCDEPTOCOMPRASUSUARIOALT'},{av:'AV11cDeptoComprasDataHoraAlt',fld:'vCDEPTOCOMPRASDATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A3487DeptoComprasEmpresaId',fld:'DEPTOCOMPRASEMPRESAID'},{av:'A3488DeptoComprasCodigo',fld:'DEPTOCOMPRASCODIGO'}],[{av:'AV12pDeptoComprasEmpresaId',fld:'vPDEPTOCOMPRASEMPRESAID'},{av:'AV13pDeptoComprasCodigo',fld:'vPDEPTOCOMPRASCODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDeptoComprasEmpresaId',fld:'vCDEPTOCOMPRASEMPRESAID'},{av:'AV7cDeptoComprasCodigo',fld:'vCDEPTOCOMPRASCODIGO'},{av:'AV8cDeptoComprasNome',fld:'vCDEPTOCOMPRASNOME'},{av:'AV9cDeptoComprasResponsavel',fld:'vCDEPTOCOMPRASRESPONSAVEL'},{av:'AV10cDeptoComprasUsuarioAlt',fld:'vCDEPTOCOMPRASUSUARIOALT'},{av:'AV11cDeptoComprasDataHoraAlt',fld:'vCDEPTOCOMPRASDATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDeptoComprasEmpresaId',fld:'vCDEPTOCOMPRASEMPRESAID'},{av:'AV7cDeptoComprasCodigo',fld:'vCDEPTOCOMPRASCODIGO'},{av:'AV8cDeptoComprasNome',fld:'vCDEPTOCOMPRASNOME'},{av:'AV9cDeptoComprasResponsavel',fld:'vCDEPTOCOMPRASRESPONSAVEL'},{av:'AV10cDeptoComprasUsuarioAlt',fld:'vCDEPTOCOMPRASUSUARIOALT'},{av:'AV11cDeptoComprasDataHoraAlt',fld:'vCDEPTOCOMPRASDATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDeptoComprasEmpresaId',fld:'vCDEPTOCOMPRASEMPRESAID'},{av:'AV7cDeptoComprasCodigo',fld:'vCDEPTOCOMPRASCODIGO'},{av:'AV8cDeptoComprasNome',fld:'vCDEPTOCOMPRASNOME'},{av:'AV9cDeptoComprasResponsavel',fld:'vCDEPTOCOMPRASRESPONSAVEL'},{av:'AV10cDeptoComprasUsuarioAlt',fld:'vCDEPTOCOMPRASUSUARIOALT'},{av:'AV11cDeptoComprasDataHoraAlt',fld:'vCDEPTOCOMPRASDATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDeptoComprasEmpresaId',fld:'vCDEPTOCOMPRASEMPRESAID'},{av:'AV7cDeptoComprasCodigo',fld:'vCDEPTOCOMPRASCODIGO'},{av:'AV8cDeptoComprasNome',fld:'vCDEPTOCOMPRASNOME'},{av:'AV9cDeptoComprasResponsavel',fld:'vCDEPTOCOMPRASRESPONSAVEL'},{av:'AV10cDeptoComprasUsuarioAlt',fld:'vCDEPTOCOMPRASUSUARIOALT'},{av:'AV11cDeptoComprasDataHoraAlt',fld:'vCDEPTOCOMPRASDATAHORAALT'}],[]];
   this.setVCMap("AV12pDeptoComprasEmpresaId", "vPDEPTOCOMPRASEMPRESAID", 0, "char");
   this.setVCMap("AV13pDeptoComprasCodigo", "vPDEPTOCOMPRASCODIGO", 0, "svchar");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0ad0());
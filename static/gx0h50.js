/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:41:37.52
*/
gx.evt.autoSkip = false;
gx.define('gx0h50', false, function () {
   this.ServerClass =  "gx0h50" ;
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
      this.AV12pParcelaEmpresaId=gx.fn.getControlValue("vPPARCELAEMPRESAID") ;
      this.AV13pParcelaId=gx.fn.getIntegerValue("vPPARCELAID",'.') ;
   };
   this.e131v52_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141v51_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,56];
   this.GXLastCtrlId =56;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0h50",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(8317,48,"PARCELAEMPRESAID","Parcela Empresa Id","","ParcelaEmpresaId","char",0,"px",10,10,"left",null,[],8317,"ParcelaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8318,49,"PARCELAID","Parcela Id","","ParcelaId","int",0,"px",4,4,"right",null,[],8318,"ParcelaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8313,50,"PARCELAVALORMAXIMOPROPOSTA","Parcela Valor Maximo Proposta","Selecionar","ParcelaValorMaximoProposta","decimal",0,"px",22,22,"right",null,[],8313,"ParcelaValorMaximoProposta",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8314,51,"PARCELAQUANTIDADEPARCELA","Parcela Quantidade Parcela","","ParcelaQuantidadeParcela","int",0,"px",4,4,"right",null,[],8314,"ParcelaQuantidadeParcela",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8315,52,"PARCELAUSUARIOALT","Parcela Usuario Alt","","ParcelaUsuarioAlt","char",0,"px",12,12,"left",null,[],8315,"ParcelaUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8316,53,"PARCELADATAHORAALT","Parcela Data Hora Alt","","ParcelaDataHoraAlt","dtime",0,"px",16,16,"right",null,[],8316,"ParcelaDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKPARCELAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARCELAEMPRESAID",gxz:"ZV6cParcelaEmpresaId",gxold:"OV6cParcelaEmpresaId",gxvar:"AV6cParcelaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cParcelaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cParcelaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPARCELAEMPRESAID",gx.O.AV6cParcelaEmpresaId,0)},c2v:function(){gx.O.AV6cParcelaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPARCELAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKPARCELAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARCELAID",gxz:"ZV7cParcelaId",gxold:"OV7cParcelaId",gxvar:"AV7cParcelaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cParcelaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cParcelaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPARCELAID",gx.O.AV7cParcelaId,0)},c2v:function(){gx.O.AV7cParcelaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPARCELAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKPARCELAVALORMAXIMOPROPOSTA", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARCELAVALORMAXIMOPROPOSTA",gxz:"ZV8cParcelaValorMaximoProposta",gxold:"OV8cParcelaValorMaximoProposta",gxvar:"AV8cParcelaValorMaximoProposta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cParcelaValorMaximoProposta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV8cParcelaValorMaximoProposta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCPARCELAVALORMAXIMOPROPOSTA",gx.O.AV8cParcelaValorMaximoProposta,2,',')},c2v:function(){gx.O.AV8cParcelaValorMaximoProposta=this.val()},val:function(){return gx.fn.getDecimalValue("vCPARCELAVALORMAXIMOPROPOSTA",'.',',')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKPARCELAQUANTIDADEPARCELA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARCELAQUANTIDADEPARCELA",gxz:"ZV9cParcelaQuantidadeParcela",gxold:"OV9cParcelaQuantidadeParcela",gxvar:"AV9cParcelaQuantidadeParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cParcelaQuantidadeParcela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cParcelaQuantidadeParcela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPARCELAQUANTIDADEPARCELA",gx.O.AV9cParcelaQuantidadeParcela,0)},c2v:function(){gx.O.AV9cParcelaQuantidadeParcela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPARCELAQUANTIDADEPARCELA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPARCELAUSUARIOALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARCELAUSUARIOALT",gxz:"ZV10cParcelaUsuarioAlt",gxold:"OV10cParcelaUsuarioAlt",gxvar:"AV10cParcelaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cParcelaUsuarioAlt=Value},v2z:function(Value){gx.O.ZV10cParcelaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCPARCELAUSUARIOALT",gx.O.AV10cParcelaUsuarioAlt,0)},c2v:function(){gx.O.AV10cParcelaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCPARCELAUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPARCELADATAHORAALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPARCELADATAHORAALT",gxz:"ZV11cParcelaDataHoraAlt",gxold:"OV11cParcelaDataHoraAlt",gxvar:"AV11cParcelaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cParcelaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cParcelaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCPARCELADATAHORAALT",gx.O.AV11cParcelaDataHoraAlt,0)},c2v:function(){gx.O.AV11cParcelaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCPARCELADATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARCELAEMPRESAID",gxz:"Z8317ParcelaEmpresaId",gxold:"O8317ParcelaEmpresaId",gxvar:"A8317ParcelaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8317ParcelaEmpresaId=Value},v2z:function(Value){gx.O.Z8317ParcelaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PARCELAEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A8317ParcelaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8317ParcelaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PARCELAEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARCELAID",gxz:"Z8318ParcelaId",gxold:"O8318ParcelaId",gxvar:"A8318ParcelaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8318ParcelaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8318ParcelaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARCELAID",row || gx.fn.currentGridRowImpl(46),gx.O.A8318ParcelaId,0)},c2v:function(){gx.O.A8318ParcelaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARCELAID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARCELAVALORMAXIMOPROPOSTA",gxz:"Z8313ParcelaValorMaximoProposta",gxold:"O8313ParcelaValorMaximoProposta",gxvar:"A8313ParcelaValorMaximoProposta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8313ParcelaValorMaximoProposta=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8313ParcelaValorMaximoProposta=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PARCELAVALORMAXIMOPROPOSTA",row || gx.fn.currentGridRowImpl(46),gx.O.A8313ParcelaValorMaximoProposta,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8313ParcelaValorMaximoProposta=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PARCELAVALORMAXIMOPROPOSTA",row || gx.fn.currentGridRowImpl(46),'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARCELAQUANTIDADEPARCELA",gxz:"Z8314ParcelaQuantidadeParcela",gxold:"O8314ParcelaQuantidadeParcela",gxvar:"A8314ParcelaQuantidadeParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8314ParcelaQuantidadeParcela=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8314ParcelaQuantidadeParcela=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARCELAQUANTIDADEPARCELA",row || gx.fn.currentGridRowImpl(46),gx.O.A8314ParcelaQuantidadeParcela,0)},c2v:function(){gx.O.A8314ParcelaQuantidadeParcela=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARCELAQUANTIDADEPARCELA",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARCELAUSUARIOALT",gxz:"Z8315ParcelaUsuarioAlt",gxold:"O8315ParcelaUsuarioAlt",gxvar:"A8315ParcelaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8315ParcelaUsuarioAlt=Value},v2z:function(Value){gx.O.Z8315ParcelaUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("PARCELAUSUARIOALT",row || gx.fn.currentGridRowImpl(46),gx.O.A8315ParcelaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8315ParcelaUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("PARCELAUSUARIOALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PARCELADATAHORAALT",gxz:"Z8316ParcelaDataHoraAlt",gxold:"O8316ParcelaDataHoraAlt",gxvar:"A8316ParcelaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8316ParcelaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8316ParcelaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PARCELADATAHORAALT",row || gx.fn.currentGridRowImpl(46),gx.O.A8316ParcelaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8316ParcelaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PARCELADATAHORAALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TABLE4",grid:0};
   this.AV6cParcelaEmpresaId = "" ;
   this.ZV6cParcelaEmpresaId = "" ;
   this.OV6cParcelaEmpresaId = "" ;
   this.AV7cParcelaId = 0 ;
   this.ZV7cParcelaId = 0 ;
   this.OV7cParcelaId = 0 ;
   this.AV8cParcelaValorMaximoProposta = 0 ;
   this.ZV8cParcelaValorMaximoProposta = 0 ;
   this.OV8cParcelaValorMaximoProposta = 0 ;
   this.AV9cParcelaQuantidadeParcela = 0 ;
   this.ZV9cParcelaQuantidadeParcela = 0 ;
   this.OV9cParcelaQuantidadeParcela = 0 ;
   this.AV10cParcelaUsuarioAlt = "" ;
   this.ZV10cParcelaUsuarioAlt = "" ;
   this.OV10cParcelaUsuarioAlt = "" ;
   this.AV11cParcelaDataHoraAlt = gx.date.nullDate() ;
   this.ZV11cParcelaDataHoraAlt = gx.date.nullDate() ;
   this.OV11cParcelaDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z8317ParcelaEmpresaId = "" ;
   this.O8317ParcelaEmpresaId = "" ;
   this.Z8318ParcelaId = 0 ;
   this.O8318ParcelaId = 0 ;
   this.Z8313ParcelaValorMaximoProposta = 0 ;
   this.O8313ParcelaValorMaximoProposta = 0 ;
   this.Z8314ParcelaQuantidadeParcela = 0 ;
   this.O8314ParcelaQuantidadeParcela = 0 ;
   this.Z8315ParcelaUsuarioAlt = "" ;
   this.O8315ParcelaUsuarioAlt = "" ;
   this.Z8316ParcelaDataHoraAlt = gx.date.nullDate() ;
   this.O8316ParcelaDataHoraAlt = gx.date.nullDate() ;
   this.AV6cParcelaEmpresaId = "" ;
   this.AV7cParcelaId = 0 ;
   this.AV8cParcelaValorMaximoProposta = 0 ;
   this.AV9cParcelaQuantidadeParcela = 0 ;
   this.AV10cParcelaUsuarioAlt = "" ;
   this.AV11cParcelaDataHoraAlt = gx.date.nullDate() ;
   this.AV12pParcelaEmpresaId = "" ;
   this.AV13pParcelaId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A8317ParcelaEmpresaId = "" ;
   this.A8318ParcelaId = 0 ;
   this.A8313ParcelaValorMaximoProposta = 0 ;
   this.A8314ParcelaQuantidadeParcela = 0 ;
   this.A8315ParcelaUsuarioAlt = "" ;
   this.A8316ParcelaDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131v52_client": ["ENTER", true] ,"e141v51_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cParcelaEmpresaId',fld:'vCPARCELAEMPRESAID'},{av:'AV7cParcelaId',fld:'vCPARCELAID'},{av:'AV8cParcelaValorMaximoProposta',fld:'vCPARCELAVALORMAXIMOPROPOSTA'},{av:'AV9cParcelaQuantidadeParcela',fld:'vCPARCELAQUANTIDADEPARCELA'},{av:'AV10cParcelaUsuarioAlt',fld:'vCPARCELAUSUARIOALT'},{av:'AV11cParcelaDataHoraAlt',fld:'vCPARCELADATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A8317ParcelaEmpresaId',fld:'PARCELAEMPRESAID'},{av:'A8318ParcelaId',fld:'PARCELAID'}],[{av:'AV12pParcelaEmpresaId',fld:'vPPARCELAEMPRESAID'},{av:'AV13pParcelaId',fld:'vPPARCELAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cParcelaEmpresaId',fld:'vCPARCELAEMPRESAID'},{av:'AV7cParcelaId',fld:'vCPARCELAID'},{av:'AV8cParcelaValorMaximoProposta',fld:'vCPARCELAVALORMAXIMOPROPOSTA'},{av:'AV9cParcelaQuantidadeParcela',fld:'vCPARCELAQUANTIDADEPARCELA'},{av:'AV10cParcelaUsuarioAlt',fld:'vCPARCELAUSUARIOALT'},{av:'AV11cParcelaDataHoraAlt',fld:'vCPARCELADATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cParcelaEmpresaId',fld:'vCPARCELAEMPRESAID'},{av:'AV7cParcelaId',fld:'vCPARCELAID'},{av:'AV8cParcelaValorMaximoProposta',fld:'vCPARCELAVALORMAXIMOPROPOSTA'},{av:'AV9cParcelaQuantidadeParcela',fld:'vCPARCELAQUANTIDADEPARCELA'},{av:'AV10cParcelaUsuarioAlt',fld:'vCPARCELAUSUARIOALT'},{av:'AV11cParcelaDataHoraAlt',fld:'vCPARCELADATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cParcelaEmpresaId',fld:'vCPARCELAEMPRESAID'},{av:'AV7cParcelaId',fld:'vCPARCELAID'},{av:'AV8cParcelaValorMaximoProposta',fld:'vCPARCELAVALORMAXIMOPROPOSTA'},{av:'AV9cParcelaQuantidadeParcela',fld:'vCPARCELAQUANTIDADEPARCELA'},{av:'AV10cParcelaUsuarioAlt',fld:'vCPARCELAUSUARIOALT'},{av:'AV11cParcelaDataHoraAlt',fld:'vCPARCELADATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cParcelaEmpresaId',fld:'vCPARCELAEMPRESAID'},{av:'AV7cParcelaId',fld:'vCPARCELAID'},{av:'AV8cParcelaValorMaximoProposta',fld:'vCPARCELAVALORMAXIMOPROPOSTA'},{av:'AV9cParcelaQuantidadeParcela',fld:'vCPARCELAQUANTIDADEPARCELA'},{av:'AV10cParcelaUsuarioAlt',fld:'vCPARCELAUSUARIOALT'},{av:'AV11cParcelaDataHoraAlt',fld:'vCPARCELADATAHORAALT'}],[]];
   this.setVCMap("AV12pParcelaEmpresaId", "vPPARCELAEMPRESAID", 0, "char");
   this.setVCMap("AV13pParcelaId", "vPPARCELAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0h50());

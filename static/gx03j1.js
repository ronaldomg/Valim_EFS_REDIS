/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:27:22.58
*/
gx.evt.autoSkip = false;
gx.define('gx03j1', false, function () {
   this.ServerClass =  "gx03j1" ;
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
      this.AV11pBancoEmpresaId=gx.fn.getControlValue("vPBANCOEMPRESAID") ;
      this.AV12pBancoId=gx.fn.getIntegerValue("vPBANCOID",'.') ;
   };
   this.e131k52_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141k51_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,51];
   this.GXLastCtrlId =51;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx03j1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(947,43,"BANCOID","Código do Banco","","BancoId","int",0,"px",3,3,"right",null,[],947,"BancoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(948,44,"BANCONOME","Nome Banco","Selecionar","BancoNome","svchar",0,"px",25,25,"left",null,[],948,"BancoNome",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(949,45,"BANCOQTDEDIGITOBOLETO","Qtde Dígito Boleto","","BancoQtdeDigitoBoleto","int",0,"px",2,2,"right",null,[],949,"BancoQtdeDigitoBoleto",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(951,46,"BANCOUSUARIOALT","Usuário Alteração","","BancoUsuarioAlt","char",0,"px",12,12,"left",null,[],951,"BancoUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(952,47,"BANCODATAHORAALT","Data/Hora Alteração","","BancoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],952,"BancoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(950,48,"BANCOEMPRESAID","Empresa","","BancoEmpresaId","char",0,"px",10,10,"left",null,[],950,"BancoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKBANCOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBANCOID",gxz:"ZV6cBancoId",gxold:"OV6cBancoId",gxvar:"AV6cBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBANCOID",gx.O.AV6cBancoId,0)},c2v:function(){gx.O.AV6cBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKBANCONOME", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBANCONOME",gxz:"ZV7cBancoNome",gxold:"OV7cBancoNome",gxvar:"AV7cBancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cBancoNome=Value},v2z:function(Value){gx.O.ZV7cBancoNome=Value},v2c:function(){gx.fn.setControlValue("vCBANCONOME",gx.O.AV7cBancoNome,0)},c2v:function(){gx.O.AV7cBancoNome=this.val()},val:function(){return gx.fn.getControlValue("vCBANCONOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKBANCOQTDEDIGITOBOLETO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBANCOQTDEDIGITOBOLETO",gxz:"ZV8cBancoQtdeDigitoBoleto",gxold:"OV8cBancoQtdeDigitoBoleto",gxvar:"AV8cBancoQtdeDigitoBoleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cBancoQtdeDigitoBoleto=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cBancoQtdeDigitoBoleto=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBANCOQTDEDIGITOBOLETO",gx.O.AV8cBancoQtdeDigitoBoleto,0)},c2v:function(){gx.O.AV8cBancoQtdeDigitoBoleto=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBANCOQTDEDIGITOBOLETO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKBANCOUSUARIOALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBANCOUSUARIOALT",gxz:"ZV9cBancoUsuarioAlt",gxold:"OV9cBancoUsuarioAlt",gxvar:"AV9cBancoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cBancoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV9cBancoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCBANCOUSUARIOALT",gx.O.AV9cBancoUsuarioAlt,0)},c2v:function(){gx.O.AV9cBancoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCBANCOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKBANCODATAHORAALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBANCODATAHORAALT",gxz:"ZV10cBancoDataHoraAlt",gxold:"OV10cBancoDataHoraAlt",gxvar:"AV10cBancoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cBancoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cBancoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCBANCODATAHORAALT",gx.O.AV10cBancoDataHoraAlt,0)},c2v:function(){gx.O.AV10cBancoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCBANCODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV15Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCOID",gxz:"Z947BancoId",gxold:"O947BancoId",gxvar:"A947BancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A947BancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z947BancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOID",row || gx.fn.currentGridRowImpl(41),gx.O.A947BancoId,0)},c2v:function(){gx.O.A947BancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCONOME",gxz:"Z948BancoNome",gxold:"O948BancoNome",gxvar:"A948BancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A948BancoNome=Value},v2z:function(Value){gx.O.Z948BancoNome=Value},v2c:function(row){gx.fn.setGridControlValue("BANCONOME",row || gx.fn.currentGridRowImpl(41),gx.O.A948BancoNome,0)},c2v:function(){gx.O.A948BancoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("BANCONOME",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCOQTDEDIGITOBOLETO",gxz:"Z949BancoQtdeDigitoBoleto",gxold:"O949BancoQtdeDigitoBoleto",gxvar:"A949BancoQtdeDigitoBoleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A949BancoQtdeDigitoBoleto=gx.num.intval(Value)},v2z:function(Value){gx.O.Z949BancoQtdeDigitoBoleto=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCOQTDEDIGITOBOLETO",row || gx.fn.currentGridRowImpl(41),gx.O.A949BancoQtdeDigitoBoleto,0)},c2v:function(){gx.O.A949BancoQtdeDigitoBoleto=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BANCOQTDEDIGITOBOLETO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCOUSUARIOALT",gxz:"Z951BancoUsuarioAlt",gxold:"O951BancoUsuarioAlt",gxvar:"A951BancoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A951BancoUsuarioAlt=Value},v2z:function(Value){gx.O.Z951BancoUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("BANCOUSUARIOALT",row || gx.fn.currentGridRowImpl(41),gx.O.A951BancoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A951BancoUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("BANCOUSUARIOALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCODATAHORAALT",gxz:"Z952BancoDataHoraAlt",gxold:"O952BancoDataHoraAlt",gxvar:"A952BancoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A952BancoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z952BancoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BANCODATAHORAALT",row || gx.fn.currentGridRowImpl(41),gx.O.A952BancoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A952BancoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BANCODATAHORAALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BANCOEMPRESAID",gxz:"Z950BancoEmpresaId",gxold:"O950BancoEmpresaId",gxvar:"A950BancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A950BancoEmpresaId=Value},v2z:function(Value){gx.O.Z950BancoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("BANCOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A950BancoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A950BancoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("BANCOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TABLE4",grid:0};
   this.AV6cBancoId = 0 ;
   this.ZV6cBancoId = 0 ;
   this.OV6cBancoId = 0 ;
   this.AV7cBancoNome = "" ;
   this.ZV7cBancoNome = "" ;
   this.OV7cBancoNome = "" ;
   this.AV8cBancoQtdeDigitoBoleto = 0 ;
   this.ZV8cBancoQtdeDigitoBoleto = 0 ;
   this.OV8cBancoQtdeDigitoBoleto = 0 ;
   this.AV9cBancoUsuarioAlt = "" ;
   this.ZV9cBancoUsuarioAlt = "" ;
   this.OV9cBancoUsuarioAlt = "" ;
   this.AV10cBancoDataHoraAlt = gx.date.nullDate() ;
   this.ZV10cBancoDataHoraAlt = gx.date.nullDate() ;
   this.OV10cBancoDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z947BancoId = 0 ;
   this.O947BancoId = 0 ;
   this.Z948BancoNome = "" ;
   this.O948BancoNome = "" ;
   this.Z949BancoQtdeDigitoBoleto = 0 ;
   this.O949BancoQtdeDigitoBoleto = 0 ;
   this.Z951BancoUsuarioAlt = "" ;
   this.O951BancoUsuarioAlt = "" ;
   this.Z952BancoDataHoraAlt = gx.date.nullDate() ;
   this.O952BancoDataHoraAlt = gx.date.nullDate() ;
   this.Z950BancoEmpresaId = "" ;
   this.O950BancoEmpresaId = "" ;
   this.AV6cBancoId = 0 ;
   this.AV7cBancoNome = "" ;
   this.AV8cBancoQtdeDigitoBoleto = 0 ;
   this.AV9cBancoUsuarioAlt = "" ;
   this.AV10cBancoDataHoraAlt = gx.date.nullDate() ;
   this.AV11pBancoEmpresaId = "" ;
   this.AV12pBancoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A947BancoId = 0 ;
   this.A948BancoNome = "" ;
   this.A949BancoQtdeDigitoBoleto = 0 ;
   this.A951BancoUsuarioAlt = "" ;
   this.A952BancoDataHoraAlt = gx.date.nullDate() ;
   this.A950BancoEmpresaId = "" ;
   this.Events = {"e131k52_client": ["ENTER", true] ,"e141k51_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBancoId',fld:'vCBANCOID'},{av:'AV7cBancoNome',fld:'vCBANCONOME'},{av:'AV8cBancoQtdeDigitoBoleto',fld:'vCBANCOQTDEDIGITOBOLETO'},{av:'AV9cBancoUsuarioAlt',fld:'vCBANCOUSUARIOALT'},{av:'AV10cBancoDataHoraAlt',fld:'vCBANCODATAHORAALT'},{av:'AV11pBancoEmpresaId',fld:'vPBANCOEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A947BancoId',fld:'BANCOID'}],[{av:'AV12pBancoId',fld:'vPBANCOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBancoId',fld:'vCBANCOID'},{av:'AV7cBancoNome',fld:'vCBANCONOME'},{av:'AV8cBancoQtdeDigitoBoleto',fld:'vCBANCOQTDEDIGITOBOLETO'},{av:'AV9cBancoUsuarioAlt',fld:'vCBANCOUSUARIOALT'},{av:'AV10cBancoDataHoraAlt',fld:'vCBANCODATAHORAALT'},{av:'AV11pBancoEmpresaId',fld:'vPBANCOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBancoId',fld:'vCBANCOID'},{av:'AV7cBancoNome',fld:'vCBANCONOME'},{av:'AV8cBancoQtdeDigitoBoleto',fld:'vCBANCOQTDEDIGITOBOLETO'},{av:'AV9cBancoUsuarioAlt',fld:'vCBANCOUSUARIOALT'},{av:'AV10cBancoDataHoraAlt',fld:'vCBANCODATAHORAALT'},{av:'AV11pBancoEmpresaId',fld:'vPBANCOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBancoId',fld:'vCBANCOID'},{av:'AV7cBancoNome',fld:'vCBANCONOME'},{av:'AV8cBancoQtdeDigitoBoleto',fld:'vCBANCOQTDEDIGITOBOLETO'},{av:'AV9cBancoUsuarioAlt',fld:'vCBANCOUSUARIOALT'},{av:'AV10cBancoDataHoraAlt',fld:'vCBANCODATAHORAALT'},{av:'AV11pBancoEmpresaId',fld:'vPBANCOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBancoId',fld:'vCBANCOID'},{av:'AV7cBancoNome',fld:'vCBANCONOME'},{av:'AV8cBancoQtdeDigitoBoleto',fld:'vCBANCOQTDEDIGITOBOLETO'},{av:'AV9cBancoUsuarioAlt',fld:'vCBANCOUSUARIOALT'},{av:'AV10cBancoDataHoraAlt',fld:'vCBANCODATAHORAALT'},{av:'AV11pBancoEmpresaId',fld:'vPBANCOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV11pBancoEmpresaId", "vPBANCOEMPRESAID", 0, "char");
   this.setVCMap("AV12pBancoId", "vPBANCOID", 0, "int");
   this.setVCMap("AV11pBancoEmpresaId", "vPBANCOEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pBancoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx03j1());
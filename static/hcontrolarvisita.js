/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:55:33.69
*/
gx.evt.autoSkip = false;
gx.define('hcontrolarvisita', false, function () {
   this.ServerClass =  "hcontrolarvisita" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV25SdtControlaVisita=gx.fn.getControlValue("vSDTCONTROLAVISITA") ;
   };
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Vendedorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Vendedorempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vVENDEDOREMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s132_client=function()
   {
      this.AV30TpErro = gx.num.trunc( 0 ,0) ;
   };
   this.e112092_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e122092_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e132092_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142092_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", false, null, false, false);
   };
   this.e152092_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e162092_client=function()
   {
      this.executeServerEvent("'MARCARTODOS'", false, null, false, false);
   };
   this.e202092_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,28,30,32,35,37,40,42,44,47,49,50,53,55,56,67,69,70,71,72,73,74,75,76,77,78,79,80,81,84,91,93,94,96,104,105,106];
   this.GXLastCtrlId =106;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",68,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hcontrolarvisita",[],false,1,true,true,0,true,false,false,"CollSdtControlaVisita.SdtControlaVisitaItem",0,"px","Novo registro",true,false,true,null,null,false,"AV25SdtControlaVisita",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV11X",69,"CTLPESSOAID","Código","","PessoaId","int",0,"px",7,7,"right",null,[],"GXV11X","GXV11X",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV11Y",70,"CTLPESSOAFANTASIA","Fantasia","","Pessoafantasia","svchar",0,"px",60,60,"left",null,[],"GXV11Y","GXV11Y",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("GXV11Z",71,"CTLPESSOATELEFONE","Telefone","","PessoaTelefone","svchar",0,"px",15,15,"left",null,[],"GXV11Z","GXV11Z",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV120",72,"CTLPESSOAENDERECO","Endereço","","PessoaEndereco","svchar",0,"px",50,50,"left",null,[],"GXV120","GXV120",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Endereco",73,"vENDERECO","Endereco","","Endereco","svchar",0,"px",50,50,"left",null,[],"Endereco","Endereco",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV122",74,"CTLPESSOADATAULTIMAVISITA","Última","","PessoaDataUltimaVisita","date",0,"px",10,10,"right",null,[],"GXV122","GXV122",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV123",75,"CTLSAIDADATAEMISSAO","Últ. Venda","","SaidaDataEmissao","date",0,"px",10,10,"right",null,[],"GXV123","GXV123",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV124",76,"CTLSAIDAVALORTOTAL","Valor","","SaidaValorTotal","decimal",0,"px",22,22,"right",null,[],"GXV124","GXV124",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV125",77,"CTLSAIDANODOCUMENTO","Documento","","SaidaNoDocumento","int",0,"px",10,10,"right",null,[],"GXV125","GXV125",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV126",78,"CTLDTVISITAREALIZADA","Vis. Realizada","","DtVisitaRealizada","date",0,"px",10,10,"right",null,[],"GXV126","GXV126",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV127",79,"CTLPESSOADATAAGENDAVISITA","Dt. Agenda","","PessoaDataAgendaVisita","date",0,"px",10,10,"right",null,[],"GXV127","GXV127",true,0,false,false,"Attribute",1,"");
   GridContainer.addCheckBox("GXV128",80,"CTLSNATUALIZA","","","SNAtualiza","char","S","N",null,true,false,0,"px","");
   this.setGrid(GridContainer);
   this.HDMASKDTVISITAContainer = gx.uc.getNew(this, 90, 16, "HDMask", "HDMASKDTVISITAContainer", "Hdmaskdtvisita");
   var HDMASKDTVISITAContainer = this.HDMASKDTVISITAContainer;
   HDMASKDTVISITAContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKDTVISITAContainer.setProp("Picture", "Picture", "99/99/9999", "str");
   HDMASKDTVISITAContainer.setProp("Default", "Default", "", "str");
   HDMASKDTVISITAContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKDTVISITAContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKDTVISITAContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKDTVISITAContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKDTVISITAContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKDTVISITAContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKDTVISITAContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKDTVISITAContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKDTVISITAContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKDTVISITAContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKDTVISITAContainer.setProp("Class", "Class", "", "char");
   HDMASKDTVISITAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKDTVISITAContainer);
   this.HDMASKDTAGENDAContainer = gx.uc.getNew(this, 92, 16, "HDMask", "HDMASKDTAGENDAContainer", "Hdmaskdtagenda");
   var HDMASKDTAGENDAContainer = this.HDMASKDTAGENDAContainer;
   HDMASKDTAGENDAContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKDTAGENDAContainer.setProp("Picture", "Picture", "99/99/9999", "str");
   HDMASKDTAGENDAContainer.setProp("Default", "Default", "", "str");
   HDMASKDTAGENDAContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKDTAGENDAContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKDTAGENDAContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKDTAGENDAContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKDTAGENDAContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKDTAGENDAContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKDTAGENDAContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKDTAGENDAContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKDTAGENDAContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKDTAGENDAContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKDTAGENDAContainer.setProp("Class", "Class", "", "char");
   HDMASKDTAGENDAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKDTAGENDAContainer);
   this.JSHANDLER1Container = gx.uc.getNew(this, 95, 16, "JSHandler", "JSHANDLER1Container", "Jshandler1");
   var JSHANDLER1Container = this.JSHANDLER1Container;
   JSHANDLER1Container.setDynProp("js", "Js", "", "str");
   JSHANDLER1Container.setProp("Visible", "Visible", true, "bool");
   JSHANDLER1Container.setProp("Enabled", "Enabled", true, "boolean");
   JSHANDLER1Container.setProp("Class", "Class", "", "char");
   JSHANDLER1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(JSHANDLER1Container);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE15",grid:0};
   GXValidFnc[16]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTAGENDAMENTOINI",gxz:"ZV8DtAgendamentoIni",gxold:"OV8DtAgendamentoIni",gxvar:"AV8DtAgendamentoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8DtAgendamentoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8DtAgendamentoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTAGENDAMENTOINI",gx.O.AV8DtAgendamentoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV8DtAgendamentoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTAGENDAMENTOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 16 , function() {
   });
   GXValidFnc[18]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTAGENDAMENTOFIN",gxz:"ZV7DtAgendamentoFin",gxold:"OV7DtAgendamentoFin",gxvar:"AV7DtAgendamentoFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7DtAgendamentoFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7DtAgendamentoFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTAGENDAMENTOFIN",gx.O.AV7DtAgendamentoFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV7DtAgendamentoFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTAGENDAMENTOFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[25]={fld:"TABLE16",grid:0};
   GXValidFnc[28]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTVISITAINI",gxz:"ZV10DtVisitaIni",gxold:"OV10DtVisitaIni",gxvar:"AV10DtVisitaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10DtVisitaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10DtVisitaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTVISITAINI",gx.O.AV10DtVisitaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV10DtVisitaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTVISITAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTVISITAFIN",gxz:"ZV9DtVisitaFin",gxold:"OV9DtVisitaFin",gxvar:"AV9DtVisitaFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9DtVisitaFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9DtVisitaFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTVISITAFIN",gx.O.AV9DtVisitaFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV9DtVisitaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTVISITAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[35]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[37]={fld:"TABLE17",grid:0};
   GXValidFnc[40]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTVENDAINI",gxz:"ZV35DtVendaIni",gxold:"OV35DtVendaIni",gxvar:"AV35DtVendaIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35DtVendaIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV35DtVendaIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTVENDAINI",gx.O.AV35DtVendaIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV35DtVendaIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTVENDAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTVENDAFIN",gxz:"ZV36DtVendaFin",gxold:"OV36DtVendaFin",gxvar:"AV36DtVendaFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36DtVendaFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV36DtVendaFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTVENDAFIN",gx.O.AV36DtVendaFin,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV36DtVendaFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTVENDAFIN")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[47]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV19PessoaId",gxold:"OV19PessoaId",gxvar:"AV19PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV19PessoaId,0)},c2v:function(){gx.O.AV19PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOANOME",gxz:"ZV21PessoaNome",gxold:"OV21PessoaNome",gxvar:"AV21PessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PessoaNome=Value},v2z:function(Value){gx.O.ZV21PessoaNome=Value},v2c:function(){gx.fn.setControlValue("vPESSOANOME",gx.O.AV21PessoaNome,0)},c2v:function(){gx.O.AV21PessoaNome=this.val()},val:function(){return gx.fn.getControlValue("vPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TXTTITAPL5", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorid,isvalid:null,rgrid:[],fld:"vVENDEDORID",gxz:"ZV47VendedorId",gxold:"OV47VendedorId",gxvar:"AV47VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47VendedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47VendedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVENDEDORID",gx.O.AV47VendedorId,0)},c2v:function(){gx.O.AV47VendedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVENDEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOME",gxz:"ZV48VendedorNome",gxold:"OV48VendedorNome",gxvar:"AV48VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48VendedorNome=Value},v2z:function(Value){gx.O.ZV48VendedorNome=Value},v2c:function(){gx.fn.setControlValue("vVENDEDORNOME",gx.O.AV48VendedorNome,0)},c2v:function(){gx.O.AV48VendedorNome=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDORNOME")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[69]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAID",gxz:"ZV57GXV11X",gxold:"OV57GXV11X",gxvar:"GXV11X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV11X=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57GXV11X=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(68),gx.O.GXV11X,0)},c2v:function(){gx.O.GXV11X=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLPESSOAID",row || gx.fn.currentGridRowImpl(68),'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFANTASIA",gxz:"ZV58GXV11Y",gxold:"OV58GXV11Y",gxvar:"GXV11Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Y=Value},v2z:function(Value){gx.O.ZV58GXV11Y=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(68),gx.O.GXV11Y,0)},c2v:function(){gx.O.GXV11Y=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(68))},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOATELEFONE",gxz:"ZV59GXV11Z",gxold:"OV59GXV11Z",gxvar:"GXV11Z",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV11Z=Value},v2z:function(Value){gx.O.ZV59GXV11Z=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(68),gx.O.GXV11Z,0)},c2v:function(){gx.O.GXV11Z=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOATELEFONE",row || gx.fn.currentGridRowImpl(68))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAENDERECO",gxz:"ZV60GXV120",gxold:"OV60GXV120",gxvar:"GXV120",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV120=Value},v2z:function(Value){gx.O.ZV60GXV120=Value},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(68),gx.O.GXV120,0)},c2v:function(){gx.O.GXV120=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLPESSOAENDERECO",row || gx.fn.currentGridRowImpl(68))},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vENDERECO",gxz:"ZV46Endereco",gxold:"OV46Endereco",gxvar:"AV46Endereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV46Endereco=Value},v2z:function(Value){gx.O.ZV46Endereco=Value},v2c:function(row){gx.fn.setGridControlValue("vENDERECO",row || gx.fn.currentGridRowImpl(68),gx.O.AV46Endereco,0)},c2v:function(){gx.O.AV46Endereco=this.val()},val:function(row){return gx.fn.getGridControlValue("vENDERECO",row || gx.fn.currentGridRowImpl(68))},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOADATAULTIMAVISITA",gxz:"ZV61GXV122",gxold:"OV61GXV122",gxvar:"GXV122",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV122=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV61GXV122=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOADATAULTIMAVISITA",row || gx.fn.currentGridRowImpl(68),gx.O.GXV122,0)},c2v:function(){gx.O.GXV122=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLPESSOADATAULTIMAVISITA",row || gx.fn.currentGridRowImpl(68))},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDADATAEMISSAO",gxz:"ZV62GXV123",gxold:"OV62GXV123",gxvar:"GXV123",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV123=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV62GXV123=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDADATAEMISSAO",row || gx.fn.currentGridRowImpl(68),gx.O.GXV123,0)},c2v:function(){gx.O.GXV123=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLSAIDADATAEMISSAO",row || gx.fn.currentGridRowImpl(68))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDAVALORTOTAL",gxz:"ZV63GXV124",gxold:"OV63GXV124",gxvar:"GXV124",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV124=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV63GXV124=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CTLSAIDAVALORTOTAL",row || gx.fn.currentGridRowImpl(68),gx.O.GXV124,2,',')},c2v:function(){gx.O.GXV124=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CTLSAIDAVALORTOTAL",row || gx.fn.currentGridRowImpl(68),'.',',')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSAIDANODOCUMENTO",gxz:"ZV64GXV125",gxold:"OV64GXV125",gxvar:"GXV125",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV125=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64GXV125=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSAIDANODOCUMENTO",row || gx.fn.currentGridRowImpl(68),gx.O.GXV125,0)},c2v:function(){gx.O.GXV125=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSAIDANODOCUMENTO",row || gx.fn.currentGridRowImpl(68),'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDTVISITAREALIZADA",gxz:"ZV65GXV126",gxold:"OV65GXV126",gxvar:"GXV126",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV126=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV65GXV126=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLDTVISITAREALIZADA",row || gx.fn.currentGridRowImpl(68),gx.O.GXV126,0)},c2v:function(){gx.O.GXV126=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLDTVISITAREALIZADA",row || gx.fn.currentGridRowImpl(68))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOADATAAGENDAVISITA",gxz:"ZV66GXV127",gxold:"OV66GXV127",gxvar:"GXV127",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV127=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV66GXV127=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLPESSOADATAAGENDAVISITA",row || gx.fn.currentGridRowImpl(68),gx.O.GXV127,0)},c2v:function(){gx.O.GXV127=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CTLPESSOADATAAGENDAVISITA",row || gx.fn.currentGridRowImpl(68))},nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:68,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNATUALIZA",gxz:"ZV67GXV128",gxold:"OV67GXV128",gxvar:"GXV128",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV128=Value},v2z:function(Value){gx.O.ZV67GXV128=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNATUALIZA",row || gx.fn.currentGridRowImpl(68),gx.O.GXV128,"S")},c2v:function(){gx.O.GXV128=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNATUALIZA",row || gx.fn.currentGridRowImpl(68))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[81]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[84]={fld:"TXTTOTAL", format:0,grid:0};
   GXValidFnc[91]={fld:"JS", format:2,grid:0};
   GXValidFnc[93]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDEREDBY",gxz:"ZV18OrderedBy",gxold:"OV18OrderedBy",gxvar:"AV18OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV18OrderedBy,0)},c2v:function(){gx.O.AV18OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[96]={fld:"TABLE1",grid:0};
   GXValidFnc[104]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorempresaid,isvalid:null,rgrid:[],fld:"vVENDEDOREMPRESAID",gxz:"ZV49VendedorEmpresaId",gxold:"OV49VendedorEmpresaId",gxvar:"AV49VendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49VendedorEmpresaId=Value},v2z:function(Value){gx.O.ZV49VendedorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vVENDEDOREMPRESAID",gx.O.AV49VendedorEmpresaId,0)},c2v:function(){gx.O.AV49VendedorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDOREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[105]={fld:"PROMPT_PESSOAID",grid:0};
   GXValidFnc[106]={fld:"PROMPT_VENDEDORID",grid:0};
   this.AV8DtAgendamentoIni = gx.date.nullDate() ;
   this.ZV8DtAgendamentoIni = gx.date.nullDate() ;
   this.OV8DtAgendamentoIni = gx.date.nullDate() ;
   this.AV7DtAgendamentoFin = gx.date.nullDate() ;
   this.ZV7DtAgendamentoFin = gx.date.nullDate() ;
   this.OV7DtAgendamentoFin = gx.date.nullDate() ;
   this.AV10DtVisitaIni = gx.date.nullDate() ;
   this.ZV10DtVisitaIni = gx.date.nullDate() ;
   this.OV10DtVisitaIni = gx.date.nullDate() ;
   this.AV9DtVisitaFin = gx.date.nullDate() ;
   this.ZV9DtVisitaFin = gx.date.nullDate() ;
   this.OV9DtVisitaFin = gx.date.nullDate() ;
   this.AV35DtVendaIni = gx.date.nullDate() ;
   this.ZV35DtVendaIni = gx.date.nullDate() ;
   this.OV35DtVendaIni = gx.date.nullDate() ;
   this.AV36DtVendaFin = gx.date.nullDate() ;
   this.ZV36DtVendaFin = gx.date.nullDate() ;
   this.OV36DtVendaFin = gx.date.nullDate() ;
   this.AV19PessoaId = 0 ;
   this.ZV19PessoaId = 0 ;
   this.OV19PessoaId = 0 ;
   this.AV21PessoaNome = "" ;
   this.ZV21PessoaNome = "" ;
   this.OV21PessoaNome = "" ;
   this.AV47VendedorId = 0 ;
   this.ZV47VendedorId = 0 ;
   this.OV47VendedorId = 0 ;
   this.AV48VendedorNome = "" ;
   this.ZV48VendedorNome = "" ;
   this.OV48VendedorNome = "" ;
   this.ZV57GXV11X = 0 ;
   this.OV57GXV11X = 0 ;
   this.ZV58GXV11Y = "" ;
   this.OV58GXV11Y = "" ;
   this.ZV59GXV11Z = "" ;
   this.OV59GXV11Z = "" ;
   this.ZV60GXV120 = "" ;
   this.OV60GXV120 = "" ;
   this.ZV46Endereco = "" ;
   this.OV46Endereco = "" ;
   this.ZV61GXV122 = gx.date.nullDate() ;
   this.OV61GXV122 = gx.date.nullDate() ;
   this.ZV62GXV123 = gx.date.nullDate() ;
   this.OV62GXV123 = gx.date.nullDate() ;
   this.ZV63GXV124 = 0 ;
   this.OV63GXV124 = 0 ;
   this.ZV64GXV125 = 0 ;
   this.OV64GXV125 = 0 ;
   this.ZV65GXV126 = gx.date.nullDate() ;
   this.OV65GXV126 = gx.date.nullDate() ;
   this.ZV66GXV127 = gx.date.nullDate() ;
   this.OV66GXV127 = gx.date.nullDate() ;
   this.ZV67GXV128 = "" ;
   this.OV67GXV128 = "" ;
   this.AV18OrderedBy = 0 ;
   this.ZV18OrderedBy = 0 ;
   this.OV18OrderedBy = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV49VendedorEmpresaId = "" ;
   this.ZV49VendedorEmpresaId = "" ;
   this.OV49VendedorEmpresaId = "" ;
   this.AV8DtAgendamentoIni = gx.date.nullDate() ;
   this.AV7DtAgendamentoFin = gx.date.nullDate() ;
   this.AV10DtVisitaIni = gx.date.nullDate() ;
   this.AV9DtVisitaFin = gx.date.nullDate() ;
   this.AV35DtVendaIni = gx.date.nullDate() ;
   this.AV36DtVendaFin = gx.date.nullDate() ;
   this.AV19PessoaId = 0 ;
   this.AV21PessoaNome = "" ;
   this.AV47VendedorId = 0 ;
   this.AV48VendedorNome = "" ;
   this.AV18OrderedBy = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.AV49VendedorEmpresaId = "" ;
   this.GXV11X = 0 ;
   this.GXV11Y = "" ;
   this.GXV11Z = "" ;
   this.GXV120 = "" ;
   this.AV46Endereco = "" ;
   this.GXV122 = gx.date.nullDate() ;
   this.GXV123 = gx.date.nullDate() ;
   this.GXV124 = 0 ;
   this.GXV125 = 0 ;
   this.GXV126 = gx.date.nullDate() ;
   this.GXV127 = gx.date.nullDate() ;
   this.GXV128 = "" ;
   this.A5966SaidaClienteId = 0 ;
   this.A4306SaidaEmpresaId = "" ;
   this.A5960SaidaNoDocumento = 0 ;
   this.A5964SaidaDataEmissao = gx.date.nullDate() ;
   this.A10671SaidaValorICMSDesonerado = 0 ;
   this.A10677SaidaValorFCPST = 0 ;
   this.A6092SaidaFreteEntraTotal = "" ;
   this.A6067SaidaValorFrete = 0 ;
   this.A6077SaidaValorIPI = 0 ;
   this.A6069SaidaValorOutrasDespesas = 0 ;
   this.A6068SaidaValorSeguro = 0 ;
   this.A6076SaidaValorICMSST = 0 ;
   this.A6065SaidaValorDesconto = 0 ;
   this.A6064SaidaValorProduto = 0 ;
   this.A6063SaidaValorServico = 0 ;
   this.A6086SaidaValorTotal = 0 ;
   this.A6484PessoaVendPadId = 0 ;
   this.A9800PessoaDataUltimaVisita = gx.date.nullDate() ;
   this.A9801PessoaDataAgendaVisita = gx.date.nullDate() ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A424PessoaNumeroEnd = 0 ;
   this.A423PessoaEndereco = "" ;
   this.A71PessoaFantasia = "" ;
   this.A72PessoaTelefone = "" ;
   this.A1237VendedorId = 0 ;
   this.A1229VendedorEmpresaId = "" ;
   this.AV25SdtControlaVisita = [ ] ;
   this.AV30TpErro = 0 ;
   this.Events = {"e112092_client": ["'FECHAR'", true] ,"e122092_client": ["'PROCURAR'", true] ,"e132092_client": ["ENTER", true] ,"e142092_client": ["'IMPRIMIR'", true] ,"e152092_client": ["'DESMARCARTODOS'", true] ,"e162092_client": ["'MARCARTODOS'", true] ,"e202092_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68}],[{av:'this.HDMASKDTVISITAContainer.AttachControl',ctrl:'HDMASKDTVISITA',prop:'AttachControl'},{av:'this.HDMASKDTAGENDAContainer.AttachControl',ctrl:'HDMASKDTAGENDA',prop:'AttachControl'}]];
   this.EvtParms["'FECHAR'"] = [[],[{av:'this.JSHANDLER1Container.js',ctrl:'JSHANDLER1',prop:'js'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'AV30TpErro',fld:'vTPERRO'},{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68},{av:'AV35DtVendaIni',fld:'vDTVENDAINI'},{av:'AV36DtVendaFin',fld:'vDTVENDAFIN'},{av:'AV8DtAgendamentoIni',fld:'vDTAGENDAMENTOINI'},{av:'AV7DtAgendamentoFin',fld:'vDTAGENDAMENTOFIN'},{av:'AV10DtVisitaIni',fld:'vDTVISITAINI'},{av:'AV9DtVisitaFin',fld:'vDTVISITAFIN'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV47VendedorId',fld:'vVENDEDORID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV5EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV49VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A9801PessoaDataAgendaVisita',fld:'PESSOADATAAGENDAVISITA'},{av:'A9800PessoaDataUltimaVisita',fld:'PESSOADATAULTIMAVISITA'},{av:'A6484PessoaVendPadId',fld:'PESSOAVENDPADID'},{av:'AV40Seleciona',fld:'vSELECIONA'},{av:'A423PessoaEndereco',fld:'PESSOAENDERECO'},{av:'A424PessoaNumeroEnd',fld:'PESSOANUMEROEND'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A72PessoaTelefone',fld:'PESSOATELEFONE'},{av:'AV37SaidaDataEmissao',fld:'vSAIDADATAEMISSAO'},{av:'AV38SaidaValorTotal',fld:'vSAIDAVALORTOTAL'},{av:'AV39SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'A5964SaidaDataEmissao',fld:'SAIDADATAEMISSAO'},{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'AV24saidaempresaid',fld:'vSAIDAEMPRESAID'},{av:'A5966SaidaClienteId',fld:'SAIDACLIENTEID'},{av:'AV20PessoaIdAux',fld:'vPESSOAIDAUX'},{av:'A6086SaidaValorTotal',fld:'SAIDAVALORTOTAL'},{av:'A5960SaidaNoDocumento',fld:'SAIDANODOCUMENTO'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'this.JSHANDLER1Container.js',ctrl:'JSHANDLER1',prop:'js'},{av:'AV30TpErro',fld:'vTPERRO'},{av:'AV36DtVendaFin',fld:'vDTVENDAFIN'},{av:'AV70GXLvl128',fld:'vGXLVL128'},{av:'AV71GXLvl141',fld:'vGXLVL141'},{av:'AV52QtdeVisitas',fld:'vQTDEVISITAS'},{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68},{av:'AV20PessoaIdAux',fld:'vPESSOAIDAUX'},{av:'AV26SdtControlaVisitaItem',fld:'vSDTCONTROLAVISITAITEM'},{av:'AV32EnderecoNumero',fld:'vENDERECONUMERO'},{av:'gx.fn.getCtrlProperty("TXTTOTAL","Caption")',ctrl:'TXTTOTAL',prop:'Caption'},{av:'AV37SaidaDataEmissao',fld:'vSAIDADATAEMISSAO'},{av:'AV38SaidaValorTotal',fld:'vSAIDAVALORTOTAL'},{av:'AV39SaidaNoDocumento',fld:'vSAIDANODOCUMENTO'},{av:'AV40Seleciona',fld:'vSELECIONA'}]];
   this.EvtParms["ENTER"] = [[{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68},{av:'AV5EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV34EmpresaCodificacaoEmpresaId',fld:'vEMPRESACODIFICACAOEMPRESAID'},{av:'AV8DtAgendamentoIni',fld:'vDTAGENDAMENTOINI'},{av:'AV7DtAgendamentoFin',fld:'vDTAGENDAMENTOFIN'},{av:'AV10DtVisitaIni',fld:'vDTVISITAINI'},{av:'AV9DtVisitaFin',fld:'vDTVISITAFIN'},{av:'AV35DtVendaIni',fld:'vDTVENDAINI'},{av:'AV36DtVendaFin',fld:'vDTVENDAFIN'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV33CodificacaoId',fld:'vCODIFICACAOID'},{av:'AV30TpErro',fld:'vTPERRO'},{av:'AV74GXV2',fld:'vGXV2'},{av:'AV26SdtControlaVisitaItem',fld:'vSDTCONTROLAVISITAITEM'},{av:'AV22QtdRegistrosAtua',fld:'vQTDREGISTROSATUA'},{av:'AV75GXV3',fld:'vGXV3'},{av:'AV53SnAtualizou',fld:'vSNATUALIZOU'},{av:'AV31MsgTela',fld:'vMSGTELA'},{av:'this.JSHANDLER1Container.js',ctrl:'JSHANDLER1',prop:'js'},{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68},{av:'AV8DtAgendamentoIni',fld:'vDTAGENDAMENTOINI'},{av:'AV7DtAgendamentoFin',fld:'vDTAGENDAMENTOFIN'},{av:'AV10DtVisitaIni',fld:'vDTVISITAINI'},{av:'AV9DtVisitaFin',fld:'vDTVISITAFIN'},{av:'AV35DtVendaIni',fld:'vDTVENDAINI'},{av:'AV36DtVendaFin',fld:'vDTVENDAFIN'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV21PessoaNome',fld:'vPESSOANOME'},{av:'AV47VendedorId',fld:'vVENDEDORID'},{av:'AV48VendedorNome',fld:'vVENDEDORNOME'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV68Pgmname',fld:'vPGMNAME'},{av:'AV45OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV43QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68},{av:'AV8DtAgendamentoIni',fld:'vDTAGENDAMENTOINI'},{av:'AV7DtAgendamentoFin',fld:'vDTAGENDAMENTOFIN'},{av:'AV10DtVisitaIni',fld:'vDTVISITAINI'},{av:'AV9DtVisitaFin',fld:'vDTVISITAFIN'},{av:'AV35DtVendaIni',fld:'vDTVENDAINI'},{av:'AV36DtVendaFin',fld:'vDTVENDAFIN'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV21PessoaNome',fld:'vPESSOANOME'},{av:'AV47VendedorId',fld:'vVENDEDORID'},{av:'AV48VendedorNome',fld:'vVENDEDORNOME'},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV42NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV41NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV48VendedorNome',fld:'vVENDEDORNOME'},{av:'AV47VendedorId',fld:'vVENDEDORID'},{av:'AV21PessoaNome',fld:'vPESSOANOME'},{av:'AV19PessoaId',fld:'vPESSOAID'},{av:'AV36DtVendaFin',fld:'vDTVENDAFIN'},{av:'AV35DtVendaIni',fld:'vDTVENDAINI'},{av:'AV9DtVisitaFin',fld:'vDTVISITAFIN'},{av:'AV10DtVisitaIni',fld:'vDTVISITAINI'},{av:'AV7DtAgendamentoFin',fld:'vDTAGENDAMENTOFIN'},{av:'AV8DtAgendamentoIni',fld:'vDTAGENDAMENTOINI'},{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68},{av:'AV43QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV45OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68}],[{av:'AV46Endereco',fld:'vENDERECO'}]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68}]];
   this.EvtParms["'MARCARTODOS'"] = [[{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68},{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'}],[{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68}],[{av:'this.HDMASKDTVISITAContainer.AttachControl',ctrl:'HDMASKDTVISITA',prop:'AttachControl'},{av:'this.HDMASKDTAGENDAContainer.AttachControl',ctrl:'HDMASKDTAGENDA',prop:'AttachControl'}]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68}],[{av:'this.HDMASKDTVISITAContainer.AttachControl',ctrl:'HDMASKDTVISITA',prop:'AttachControl'},{av:'this.HDMASKDTAGENDAContainer.AttachControl',ctrl:'HDMASKDTAGENDA',prop:'AttachControl'}]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68}],[{av:'this.HDMASKDTVISITAContainer.AttachControl',ctrl:'HDMASKDTVISITA',prop:'AttachControl'},{av:'this.HDMASKDTAGENDAContainer.AttachControl',ctrl:'HDMASKDTAGENDA',prop:'AttachControl'}]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV25SdtControlaVisita',fld:'vSDTCONTROLAVISITA',grid:68}],[{av:'this.HDMASKDTVISITAContainer.AttachControl',ctrl:'HDMASKDTVISITA',prop:'AttachControl'},{av:'this.HDMASKDTAGENDAContainer.AttachControl',ctrl:'HDMASKDTAGENDA',prop:'AttachControl'}]];
   this.setPrompt("PROMPT_PESSOAID", [49]);
   this.setPrompt("PROMPT_VENDEDORID", [55]);
   this.EnterCtrl = ["BUTTON3"];
   this.setVCMap("A6063SaidaValorServico", "SAIDAVALORSERVICO", 0, "decimal");
   this.setVCMap("A6064SaidaValorProduto", "SAIDAVALORPRODUTO", 0, "decimal");
   this.setVCMap("A6065SaidaValorDesconto", "SAIDAVALORDESCONTO", 0, "decimal");
   this.setVCMap("A6076SaidaValorICMSST", "SAIDAVALORICMSST", 0, "decimal");
   this.setVCMap("A6068SaidaValorSeguro", "SAIDAVALORSEGURO", 0, "decimal");
   this.setVCMap("A6069SaidaValorOutrasDespesas", "SAIDAVALOROUTRASDESPESAS", 0, "decimal");
   this.setVCMap("A6077SaidaValorIPI", "SAIDAVALORIPI", 0, "decimal");
   this.setVCMap("A6067SaidaValorFrete", "SAIDAVALORFRETE", 0, "decimal");
   this.setVCMap("A6092SaidaFreteEntraTotal", "SAIDAFRETEENTRATOTAL", 0, "char");
   this.setVCMap("A10677SaidaValorFCPST", "SAIDAVALORFCPST", 0, "decimal");
   this.setVCMap("A10671SaidaValorICMSDesonerado", "SAIDAVALORICMSDESONERADO", 0, "decimal");
   this.setVCMap("A6086SaidaValorTotal", "SAIDAVALORTOTAL", 0, "decimal");
   this.setVCMap("AV25SdtControlaVisita", "vSDTCONTROLAVISITA", 0, "CollSdtControlaVisita.SdtControlaVisitaItem");
   this.setVCMap("AV25SdtControlaVisita", "vSDTCONTROLAVISITA", 0, "CollSdtControlaVisita.SdtControlaVisitaItem");
   GridContainer.addRefreshingVar({rfrVar:"AV25SdtControlaVisita"});
   this.addGridBCProperty("Sdtcontrolavisita", ["PessoaId"], this.GXValidFnc[69], "AV25SdtControlaVisita");
   this.addGridBCProperty("Sdtcontrolavisita", ["Pessoafantasia"], this.GXValidFnc[70], "AV25SdtControlaVisita");
   this.addGridBCProperty("Sdtcontrolavisita", ["PessoaTelefone"], this.GXValidFnc[71], "AV25SdtControlaVisita");
   this.addGridBCProperty("Sdtcontrolavisita", ["PessoaEndereco"], this.GXValidFnc[72], "AV25SdtControlaVisita");
   this.addGridBCProperty("Sdtcontrolavisita", ["PessoaDataUltimaVisita"], this.GXValidFnc[74], "AV25SdtControlaVisita");
   this.addGridBCProperty("Sdtcontrolavisita", ["SaidaDataEmissao"], this.GXValidFnc[75], "AV25SdtControlaVisita");
   this.addGridBCProperty("Sdtcontrolavisita", ["SaidaValorTotal"], this.GXValidFnc[76], "AV25SdtControlaVisita");
   this.addGridBCProperty("Sdtcontrolavisita", ["SaidaNoDocumento"], this.GXValidFnc[77], "AV25SdtControlaVisita");
   this.addGridBCProperty("Sdtcontrolavisita", ["DtVisitaRealizada"], this.GXValidFnc[78], "AV25SdtControlaVisita");
   this.addGridBCProperty("Sdtcontrolavisita", ["PessoaDataAgendaVisita"], this.GXValidFnc[79], "AV25SdtControlaVisita");
   this.addGridBCProperty("Sdtcontrolavisita", ["SNAtualiza"], this.GXValidFnc[80], "AV25SdtControlaVisita");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hcontrolarvisita());

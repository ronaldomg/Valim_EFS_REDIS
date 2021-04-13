/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:42:34.28
*/
gx.evt.autoSkip = false;
gx.define('halterarconveniocontapr', false, function () {
   this.ServerClass =  "halterarconveniocontapr" ;
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
      this.AV30SdtLanc=gx.fn.getControlValue("vSDTLANC") ;
      this.AV37EmpresaContaContabilEmpresaId=gx.fn.getControlValue("vEMPRESACONTACONTABILEMPRESAID") ;
      this.AV37EmpresaContaContabilEmpresaId=gx.fn.getControlValue("vEMPRESACONTACONTABILEMPRESAID") ;
      this.AV25ContaPagRecEmpresaId=gx.fn.getControlValue("vCONTAPAGRECEMPRESAID") ;
   };
   this.Validv_Contapagrecnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresacentrocustoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESACENTROCUSTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      gx.fn.setCtrlProperty("vTIPOCONTATIPOCONTABIL","Visible", 0 );
      gx.fn.setCtrlProperty("vCONVENIOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vQTDECHAR","Visible", 0 );
      gx.fn.setCtrlProperty("vEMPRESACENTROCUSTOEMPRESAID","Visible", 0 );
      gx.fn.setCtrlProperty("vCONTACONTABILIDAUX","Visible", 0 );
      gx.fn.setCtrlProperty("vCONTAPAGRECPAGREC","Visible", 0 );
   };
   this.e18i72_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hdetalharccontabil",[this.AV37EmpresaContaContabilEmpresaId, this.AV50TradutorLanc]), []);
      this.refreshOutputs([]);
   };
   this.e19i714_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hdetalharccontabil",[this.AV37EmpresaContaContabilEmpresaId, this.AV57TradutorRateio]), []);
      this.refreshOutputs([]);
   };
   this.e11i72_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12i72_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17i72_client=function()
   {
      this.executeServerEvent("VCCUSRATEIO.ISVALID", true, arguments[0], false, false);
   };
   this.e20i72_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,29,31,34,36,38,40,42,45,47,54,56,57,65,68,70,71,72,73,74,75,76,77,78,79,80,83,85,86,87,88,89,90,91,92,93,94,95,101,104,105,106,107,108,109,112,113,118,119];
   this.GXLastCtrlId =119;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",69,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"halterarconveniocontapr",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("Seqlanc",70,"vSEQLANC","Seq","","SeqLanc","int",0,"px",3,3,"right",null,[],"Seqlanc","SeqLanc",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Datalanc",71,"vDATALANC","Data","","DataLanc","date",0,"px",10,10,"right",null,[],"Datalanc","DataLanc",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Codlanc",72,"vCODLANC","Código","","CodLanc","int",0,"px",4,4,"right",null,[],"Codlanc","CodLanc",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Desclanc",73,"vDESCLANC","Descrição do Lançamento","","DescLanc","svchar",0,"px",25,25,"left",null,[],"Desclanc","DescLanc",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Valorlanc",74,"vVALORLANC","Valor","","ValorLanc","decimal",100,"px",22,22,"right",null,[],"Valorlanc","ValorLanc",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Stcontabillanc",75,"vSTCONTABILLANC","St. Contábil","","StContabilLanc","svchar",0,"px",15,15,"left",null,[],"Stcontabillanc","StContabilLanc",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Tradutorlanc",76,"vTRADUTORLANC","Tradutor","","TradutorLanc","int",0,"px",5,5,"right",null,[],"Tradutorlanc","TradutorLanc",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpprmlanc","vBMPPRMLANC",77,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addBitmap("&Bmptralanc","vBMPTRALANC",78,0,"px",17,"px","e18i72_client","","","Image","");
   this.setGrid(Grid1Container);
   this.Grid2Container = new gx.grid.grid(this, 14,"WbpLvl14",84,"Grid2","Grid2","Grid2Container",this.CmpContext,this.IsMasterPage,"halterarconveniocontapr",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var Grid2Container = this.Grid2Container;
   Grid2Container.addSingleLineEdit("Seqrateio",85,"vSEQRATEIO","Seq","","SeqRateio","int",0,"px",2,2,"right",null,[],"Seqrateio","SeqRateio",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("Ccusrateio",86,"vCCUSRATEIO","Centro de Custo","","CCusRateio","svchar",100,"px",30,30,"left",null,[],"Ccusrateio","CCusRateio",true,0,false,false,"Attribute",1,"");
   Grid2Container.addBitmap("&Bmpprmccus","vBMPPRMCCUS",87,0,"px",17,"px",null,"","","Image","");
   Grid2Container.addSingleLineEdit("Descccusrateio",88,"vDESCCCUSRATEIO","Descrição","","DescCCusRateio","svchar",0,"px",35,35,"left",null,[],"Descccusrateio","DescCCusRateio",true,0,false,false,"SemQuebraGrid",1,"");
   Grid2Container.addSingleLineEdit("Natrateio",89,"vNATRATEIO","Natureza","","NatRateio","svchar",0,"px",30,30,"left",null,[],"Natrateio","NatRateio",true,0,false,false,"Attribute",1,"");
   Grid2Container.addSingleLineEdit("Descnatrateio",90,"vDESCNATRATEIO","Descrição","","DescNatRateio","svchar",0,"px",35,35,"left",null,[],"Descnatrateio","DescNatRateio",true,0,false,false,"SemQuebraGrid",1,"");
   Grid2Container.addSingleLineEdit("Tradutorrateio",91,"vTRADUTORRATEIO","Tradutor","","TradutorRateio","int",0,"px",5,5,"right",null,[],"Tradutorrateio","TradutorRateio",true,0,false,false,"Attribute",1,"");
   Grid2Container.addBitmap("&Bmpprmrateio","vBMPPRMRATEIO",92,0,"px",17,"px",null,"","","Image","");
   Grid2Container.addBitmap("&Bmptrarateio","vBMPTRARATEIO",93,0,"px",17,"px","e19i714_client","","","Image","");
   Grid2Container.addSingleLineEdit("Valorrateio",94,"vVALORRATEIO","Valor","","ValorRateio","decimal",100,"px",22,22,"right",null,[],"Valorrateio","ValorRateio",true,2,false,false,"Attribute",1,"");
   this.setGrid(Grid2Container);
   this.TABCSSContainer = gx.uc.getNew(this, 64, 13, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV77Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV77Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV77Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "halterarconveniocontapr_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   this.HDMASKCENTROCUSTOContainer = gx.uc.getNew(this, 114, 13, "HDMask", "HDMASKCENTROCUSTOContainer", "Hdmaskcentrocusto");
   var HDMASKCENTROCUSTOContainer = this.HDMASKCENTROCUSTOContainer;
   HDMASKCENTROCUSTOContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKCENTROCUSTOContainer.setDynProp("Picture", "Picture", "", "str");
   HDMASKCENTROCUSTOContainer.setProp("Default", "Default", "", "str");
   HDMASKCENTROCUSTOContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKCENTROCUSTOContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKCENTROCUSTOContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKCENTROCUSTOContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKCENTROCUSTOContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKCENTROCUSTOContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKCENTROCUSTOContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKCENTROCUSTOContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKCENTROCUSTOContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKCENTROCUSTOContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKCENTROCUSTOContainer.setProp("Class", "Class", "", "char");
   HDMASKCENTROCUSTOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKCENTROCUSTOContainer);
   this.HDMASKNATUREZAContainer = gx.uc.getNew(this, 115, 13, "HDMask", "HDMASKNATUREZAContainer", "Hdmasknatureza");
   var HDMASKNATUREZAContainer = this.HDMASKNATUREZAContainer;
   HDMASKNATUREZAContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKNATUREZAContainer.setDynProp("Picture", "Picture", "", "str");
   HDMASKNATUREZAContainer.setProp("Default", "Default", "", "str");
   HDMASKNATUREZAContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKNATUREZAContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKNATUREZAContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKNATUREZAContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKNATUREZAContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKNATUREZAContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKNATUREZAContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKNATUREZAContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKNATUREZAContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKNATUREZAContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKNATUREZAContainer.setProp("Class", "Class", "", "char");
   HDMASKNATUREZAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKNATUREZAContainer);
   this.HDMASKVALORContainer = gx.uc.getNew(this, 116, 13, "HDMask", "HDMASKVALORContainer", "Hdmaskvalor");
   var HDMASKVALORContainer = this.HDMASKVALORContainer;
   HDMASKVALORContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVALORContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVALORContainer.setProp("Default", "Default", "", "str");
   HDMASKVALORContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVALORContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVALORContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVALORContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVALORContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVALORContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVALORContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVALORContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKVALORContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVALORContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVALORContainer.setProp("Class", "Class", "", "char");
   HDMASKVALORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVALORContainer);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecnumero,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNUMERO",gxz:"ZV15ContaPagRecNumero",gxold:"OV15ContaPagRecNumero",gxvar:"AV15ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNUMERO",gx.O.AV15ContaPagRecNumero,0)},c2v:function(){gx.O.AV15ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTEMISSAO",gxz:"ZV20DtEmissao",gxold:"OV20DtEmissao",gxvar:"AV20DtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20DtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV20DtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTEMISSAO",gx.O.AV20DtEmissao,0)},c2v:function(){gx.O.AV20DtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTEMISSAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCSEQ",gxz:"ZV16DocSeq",gxold:"OV16DocSeq",gxvar:"AV16DocSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16DocSeq=Value},v2z:function(Value){gx.O.ZV16DocSeq=Value},v2c:function(){gx.fn.setControlValue("vDOCSEQ",gx.O.AV16DocSeq,0)},c2v:function(){gx.O.AV16DocSeq=this.val()},val:function(){return gx.fn.getControlValue("vDOCSEQ")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTVENCIMENTO",gxz:"ZV21DtVencimento",gxold:"OV21DtVencimento",gxvar:"AV21DtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21DtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV21DtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTVENCIMENTO",gx.O.AV21DtVencimento,0)},c2v:function(){gx.O.AV21DtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[31]={fld:"TABLE5",grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV17PessoaId",gxold:"OV17PessoaId",gxvar:"AV17PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV17PessoaId,0)},c2v:function(){gx.O.AV17PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV18PessoaFantasia",gxold:"OV18PessoaFantasia",gxvar:"AV18PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PessoaFantasia=Value},v2z:function(Value){gx.O.ZV18PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV18PessoaFantasia,0)},c2v:function(){gx.O.AV18PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:12,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAO",gxz:"ZV22Situacao",gxold:"OV22Situacao",gxvar:"AV22Situacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22Situacao=Value},v2z:function(Value){gx.O.ZV22Situacao=Value},v2c:function(){gx.fn.setControlValue("vSITUACAO",gx.O.AV22Situacao,0)},c2v:function(){gx.O.AV22Situacao=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAO")},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORATUAL",gxz:"ZV19ValorAtual",gxold:"OV19ValorAtual",gxvar:"AV19ValorAtual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ValorAtual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV19ValorAtual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORATUAL",gx.O.AV19ValorAtual,2,',')},c2v:function(){gx.O.AV19ValorAtual=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORATUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[],fld:"vCONVENIOID",gxz:"ZV23COnvenioId",gxold:"OV23COnvenioId",gxvar:"AV23COnvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23COnvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23COnvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV23COnvenioId,0)},c2v:function(){gx.O.AV23COnvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV24COnvenioDescricao",gxold:"OV24COnvenioDescricao",gxvar:"AV24COnvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24COnvenioDescricao=Value},v2z:function(Value){gx.O.ZV24COnvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV24COnvenioDescricao,0)},c2v:function(){gx.O.AV24COnvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TAB1",grid:0};
   GXValidFnc[68]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[70]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:0,grid:69,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vSEQLANC",gxz:"ZV44SeqLanc",gxold:"OV44SeqLanc",gxvar:"AV44SeqLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV44SeqLanc=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV44SeqLanc=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vSEQLANC",row || gx.fn.currentGridRowImpl(69),gx.O.AV44SeqLanc,0)},c2v:function(){gx.O.AV44SeqLanc=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vSEQLANC",row || gx.fn.currentGridRowImpl(69),'.')},nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:69,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vDATALANC",gxz:"ZV45DataLanc",gxold:"OV45DataLanc",gxvar:"AV45DataLanc",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV45DataLanc=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV45DataLanc=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vDATALANC",row || gx.fn.currentGridRowImpl(69),gx.O.AV45DataLanc,0)},c2v:function(){gx.O.AV45DataLanc=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vDATALANC",row || gx.fn.currentGridRowImpl(69))},nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:69,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCODLANC",gxz:"ZV46CodLanc",gxold:"OV46CodLanc",gxvar:"AV46CodLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV46CodLanc=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46CodLanc=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCODLANC",row || gx.fn.currentGridRowImpl(69),gx.O.AV46CodLanc,0)},c2v:function(){gx.O.AV46CodLanc=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCODLANC",row || gx.fn.currentGridRowImpl(69),'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:69,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vDESCLANC",gxz:"ZV47DescLanc",gxold:"OV47DescLanc",gxvar:"AV47DescLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV47DescLanc=Value},v2z:function(Value){gx.O.ZV47DescLanc=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCLANC",row || gx.fn.currentGridRowImpl(69),gx.O.AV47DescLanc,0)},c2v:function(){gx.O.AV47DescLanc=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCLANC",row || gx.fn.currentGridRowImpl(69))},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:69,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vVALORLANC",gxz:"ZV48ValorLanc",gxold:"OV48ValorLanc",gxvar:"AV48ValorLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV48ValorLanc=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV48ValorLanc=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORLANC",row || gx.fn.currentGridRowImpl(69),gx.O.AV48ValorLanc,2,',')},c2v:function(){gx.O.AV48ValorLanc=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORLANC",row || gx.fn.currentGridRowImpl(69),'.',',')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:69,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vSTCONTABILLANC",gxz:"ZV49StContabilLanc",gxold:"OV49StContabilLanc",gxvar:"AV49StContabilLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV49StContabilLanc=Value},v2z:function(Value){gx.O.ZV49StContabilLanc=Value},v2c:function(row){gx.fn.setGridControlValue("vSTCONTABILLANC",row || gx.fn.currentGridRowImpl(69),gx.O.AV49StContabilLanc,0)},c2v:function(){gx.O.AV49StContabilLanc=this.val()},val:function(row){return gx.fn.getGridControlValue("vSTCONTABILLANC",row || gx.fn.currentGridRowImpl(69))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,isacc:0,grid:69,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORLANC",gxz:"ZV50TradutorLanc",gxold:"OV50TradutorLanc",gxvar:"AV50TradutorLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV50TradutorLanc=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50TradutorLanc=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTRADUTORLANC",row || gx.fn.currentGridRowImpl(69),gx.O.AV50TradutorLanc,0)},c2v:function(){gx.O.AV50TradutorLanc=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTRADUTORLANC",row || gx.fn.currentGridRowImpl(69),'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:69,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRMLANC",gxz:"ZV60BmpPrmLanc",gxold:"OV60BmpPrmLanc",gxvar:"AV60BmpPrmLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV60BmpPrmLanc=Value},v2z:function(Value){gx.O.ZV60BmpPrmLanc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRMLANC",row || gx.fn.currentGridRowImpl(69),gx.O.AV60BmpPrmLanc,gx.O.AV85Bmpprmlanc_GXI)},c2v:function(){gx.O.AV85Bmpprmlanc_GXI=this.val_GXI();gx.O.AV60BmpPrmLanc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRMLANC",row || gx.fn.currentGridRowImpl(69))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRMLANC_GXI",row || gx.fn.currentGridRowImpl(69))}, gxvar_GXI:'AV85Bmpprmlanc_GXI',nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:69,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPTRALANC",gxz:"ZV51BmpTraLanc",gxold:"OV51BmpTraLanc",gxvar:"AV51BmpTraLanc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV51BmpTraLanc=Value},v2z:function(Value){gx.O.ZV51BmpTraLanc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPTRALANC",row || gx.fn.currentGridRowImpl(69),gx.O.AV51BmpTraLanc,gx.O.AV83Bmptralanc_GXI)},c2v:function(){gx.O.AV83Bmptralanc_GXI=this.val_GXI();gx.O.AV51BmpTraLanc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPTRALANC",row || gx.fn.currentGridRowImpl(69))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPTRALANC_GXI",row || gx.fn.currentGridRowImpl(69))}, gxvar_GXI:'AV83Bmptralanc_GXI',nac:gx.falseFn};
   GXValidFnc[79]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[80]={fld:"TAB2",grid:0};
   GXValidFnc[83]={fld:"DIV3", format:2,grid:0};
   GXValidFnc[85]={lvl:14,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:84,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vSEQRATEIO",gxz:"ZV52SeqRateio",gxold:"OV52SeqRateio",gxvar:"AV52SeqRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV52SeqRateio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52SeqRateio=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vSEQRATEIO",row || gx.fn.currentGridRowImpl(84),gx.O.AV52SeqRateio,0)},c2v:function(){gx.O.AV52SeqRateio=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vSEQRATEIO",row || gx.fn.currentGridRowImpl(84),'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:14,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:84,gxgrid:this.Grid2Container,fnc:null,isvalid:'e17i72_client',rgrid:[],fld:"vCCUSRATEIO",gxz:"ZV53CCusRateio",gxold:"OV53CCusRateio",gxvar:"AV53CCusRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV53CCusRateio=Value},v2z:function(Value){gx.O.ZV53CCusRateio=Value},v2c:function(row){gx.fn.setGridControlValue("vCCUSRATEIO",row || gx.fn.currentGridRowImpl(84),gx.O.AV53CCusRateio,0)},c2v:function(){gx.O.AV53CCusRateio=this.val()},val:function(row){return gx.fn.getGridControlValue("vCCUSRATEIO",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[87]={lvl:14,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRMCCUS",gxz:"ZV62BmpPrmCCus",gxold:"OV62BmpPrmCCus",gxvar:"AV62BmpPrmCCus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV62BmpPrmCCus=Value},v2z:function(Value){gx.O.ZV62BmpPrmCCus=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRMCCUS",row || gx.fn.currentGridRowImpl(84),gx.O.AV62BmpPrmCCus,gx.O.AV87Bmpprmccus_GXI)},c2v:function(){gx.O.AV87Bmpprmccus_GXI=this.val_GXI();gx.O.AV62BmpPrmCCus=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRMCCUS",row || gx.fn.currentGridRowImpl(84))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRMCCUS_GXI",row || gx.fn.currentGridRowImpl(84))}, gxvar_GXI:'AV87Bmpprmccus_GXI',nac:gx.falseFn};
   GXValidFnc[88]={lvl:14,type:"svchar",len:35,dec:0,sign:false,ro:0,isacc:0,grid:84,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vDESCCCUSRATEIO",gxz:"ZV54DescCCusRateio",gxold:"OV54DescCCusRateio",gxvar:"AV54DescCCusRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV54DescCCusRateio=Value},v2z:function(Value){gx.O.ZV54DescCCusRateio=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCCCUSRATEIO",row || gx.fn.currentGridRowImpl(84),gx.O.AV54DescCCusRateio,0)},c2v:function(){gx.O.AV54DescCCusRateio=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCCCUSRATEIO",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[89]={lvl:14,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:84,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vNATRATEIO",gxz:"ZV55NatRateio",gxold:"OV55NatRateio",gxvar:"AV55NatRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV55NatRateio=Value},v2z:function(Value){gx.O.ZV55NatRateio=Value},v2c:function(row){gx.fn.setGridControlValue("vNATRATEIO",row || gx.fn.currentGridRowImpl(84),gx.O.AV55NatRateio,0)},c2v:function(){gx.O.AV55NatRateio=this.val()},val:function(row){return gx.fn.getGridControlValue("vNATRATEIO",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[90]={lvl:14,type:"svchar",len:35,dec:0,sign:false,ro:0,isacc:0,grid:84,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vDESCNATRATEIO",gxz:"ZV56DescNatRateio",gxold:"OV56DescNatRateio",gxvar:"AV56DescNatRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV56DescNatRateio=Value},v2z:function(Value){gx.O.ZV56DescNatRateio=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCNATRATEIO",row || gx.fn.currentGridRowImpl(84),gx.O.AV56DescNatRateio,0)},c2v:function(){gx.O.AV56DescNatRateio=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCNATRATEIO",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[91]={lvl:14,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,isacc:0,grid:84,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTORRATEIO",gxz:"ZV57TradutorRateio",gxold:"OV57TradutorRateio",gxvar:"AV57TradutorRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV57TradutorRateio=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV57TradutorRateio=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTRADUTORRATEIO",row || gx.fn.currentGridRowImpl(84),gx.O.AV57TradutorRateio,0)},c2v:function(){gx.O.AV57TradutorRateio=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTRADUTORRATEIO",row || gx.fn.currentGridRowImpl(84),'.')},nac:gx.falseFn};
   GXValidFnc[92]={lvl:14,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRMRATEIO",gxz:"ZV61BmpPrmRateio",gxold:"OV61BmpPrmRateio",gxvar:"AV61BmpPrmRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV61BmpPrmRateio=Value},v2z:function(Value){gx.O.ZV61BmpPrmRateio=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRMRATEIO",row || gx.fn.currentGridRowImpl(84),gx.O.AV61BmpPrmRateio,gx.O.AV86Bmpprmrateio_GXI)},c2v:function(){gx.O.AV86Bmpprmrateio_GXI=this.val_GXI();gx.O.AV61BmpPrmRateio=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRMRATEIO",row || gx.fn.currentGridRowImpl(84))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRMRATEIO_GXI",row || gx.fn.currentGridRowImpl(84))}, gxvar_GXI:'AV86Bmpprmrateio_GXI',nac:gx.falseFn};
   GXValidFnc[93]={lvl:14,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPTRARATEIO",gxz:"ZV58BmpTraRateio",gxold:"OV58BmpTraRateio",gxvar:"AV58BmpTraRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV58BmpTraRateio=Value},v2z:function(Value){gx.O.ZV58BmpTraRateio=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPTRARATEIO",row || gx.fn.currentGridRowImpl(84),gx.O.AV58BmpTraRateio,gx.O.AV84Bmptrarateio_GXI)},c2v:function(){gx.O.AV84Bmptrarateio_GXI=this.val_GXI();gx.O.AV58BmpTraRateio=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPTRARATEIO",row || gx.fn.currentGridRowImpl(84))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPTRARATEIO_GXI",row || gx.fn.currentGridRowImpl(84))}, gxvar_GXI:'AV84Bmptrarateio_GXI',nac:gx.falseFn};
   GXValidFnc[94]={lvl:14,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:84,gxgrid:this.Grid2Container,fnc:null,isvalid:null,rgrid:[],fld:"vVALORRATEIO",gxz:"ZV59ValorRateio",gxold:"OV59ValorRateio",gxvar:"AV59ValorRateio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV59ValorRateio=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV59ValorRateio=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORRATEIO",row || gx.fn.currentGridRowImpl(84),gx.O.AV59ValorRateio,2,',')},c2v:function(){gx.O.AV59ValorRateio=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORRATEIO",row || gx.fn.currentGridRowImpl(84),'.',',')},nac:gx.falseFn};
   GXValidFnc[95]={fld:"DIV4", format:2,grid:0};
   GXValidFnc[101]={fld:"TABLE3",grid:0};
   GXValidFnc[104]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTATIPOCONTABIL",gxz:"ZV40TipoContaTipoContabil",gxold:"OV40TipoContaTipoContabil",gxvar:"AV40TipoContaTipoContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV40TipoContaTipoContabil=Value},v2z:function(Value){gx.O.ZV40TipoContaTipoContabil=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOCONTATIPOCONTABIL",gx.O.AV40TipoContaTipoContabil)},c2v:function(){gx.O.AV40TipoContaTipoContabil=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTATIPOCONTABIL")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV65QtdeChar",gxold:"OV65QtdeChar",gxvar:"AV65QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV65QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV65QtdeChar,0)},c2v:function(){gx.O.AV65QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioempresaid,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV38ConvenioEmpresaId",gxold:"OV38ConvenioEmpresaId",gxvar:"AV38ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV38ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV38ConvenioEmpresaId,0)},c2v:function(){gx.O.AV38ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresacentrocustoempresaid,isvalid:null,rgrid:[],fld:"vEMPRESACENTROCUSTOEMPRESAID",gxz:"ZV35EmpresaCentroCustoEmpresaId",gxold:"OV35EmpresaCentroCustoEmpresaId",gxvar:"AV35EmpresaCentroCustoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35EmpresaCentroCustoEmpresaId=Value},v2z:function(Value){gx.O.ZV35EmpresaCentroCustoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACENTROCUSTOEMPRESAID",gx.O.AV35EmpresaCentroCustoEmpresaId,0)},c2v:function(){gx.O.AV35EmpresaCentroCustoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACENTROCUSTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDAUX",gxz:"ZV43ContaContabilIdAux",gxold:"OV43ContaContabilIdAux",gxvar:"AV43ContaContabilIdAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ContaContabilIdAux=Value},v2z:function(Value){gx.O.ZV43ContaContabilIdAux=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDAUX",gx.O.AV43ContaContabilIdAux,0)},c2v:function(){gx.O.AV43ContaContabilIdAux=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDAUX")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECPAGREC",gxz:"ZV73ContaPagRecPagRec",gxold:"OV73ContaPagRecPagRec",gxvar:"AV73ContaPagRecPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV73ContaPagRecPagRec=Value},v2z:function(Value){gx.O.ZV73ContaPagRecPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("vCONTAPAGRECPAGREC",gx.O.AV73ContaPagRecPagRec)},c2v:function(){gx.O.AV73ContaPagRecPagRec=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECPAGREC")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"JS", format:2,grid:0};
   GXValidFnc[113]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV76AcessoSistemaSequencia",gxold:"OV76AcessoSistemaSequencia",gxvar:"AV76AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV76AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV76AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV76AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[118]={fld:"BTNHELP",grid:0};
   GXValidFnc[119]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV15ContaPagRecNumero = 0 ;
   this.ZV15ContaPagRecNumero = 0 ;
   this.OV15ContaPagRecNumero = 0 ;
   this.AV20DtEmissao = gx.date.nullDate() ;
   this.ZV20DtEmissao = gx.date.nullDate() ;
   this.OV20DtEmissao = gx.date.nullDate() ;
   this.AV16DocSeq = "" ;
   this.ZV16DocSeq = "" ;
   this.OV16DocSeq = "" ;
   this.AV21DtVencimento = gx.date.nullDate() ;
   this.ZV21DtVencimento = gx.date.nullDate() ;
   this.OV21DtVencimento = gx.date.nullDate() ;
   this.AV17PessoaId = 0 ;
   this.ZV17PessoaId = 0 ;
   this.OV17PessoaId = 0 ;
   this.AV18PessoaFantasia = "" ;
   this.ZV18PessoaFantasia = "" ;
   this.OV18PessoaFantasia = "" ;
   this.AV22Situacao = "" ;
   this.ZV22Situacao = "" ;
   this.OV22Situacao = "" ;
   this.AV19ValorAtual = 0 ;
   this.ZV19ValorAtual = 0 ;
   this.OV19ValorAtual = 0 ;
   this.AV23COnvenioId = 0 ;
   this.ZV23COnvenioId = 0 ;
   this.OV23COnvenioId = 0 ;
   this.AV24COnvenioDescricao = "" ;
   this.ZV24COnvenioDescricao = "" ;
   this.OV24COnvenioDescricao = "" ;
   this.ZV44SeqLanc = 0 ;
   this.OV44SeqLanc = 0 ;
   this.ZV45DataLanc = gx.date.nullDate() ;
   this.OV45DataLanc = gx.date.nullDate() ;
   this.ZV46CodLanc = 0 ;
   this.OV46CodLanc = 0 ;
   this.ZV47DescLanc = "" ;
   this.OV47DescLanc = "" ;
   this.ZV48ValorLanc = 0 ;
   this.OV48ValorLanc = 0 ;
   this.ZV49StContabilLanc = "" ;
   this.OV49StContabilLanc = "" ;
   this.ZV50TradutorLanc = 0 ;
   this.OV50TradutorLanc = 0 ;
   this.ZV60BmpPrmLanc = "" ;
   this.OV60BmpPrmLanc = "" ;
   this.ZV51BmpTraLanc = "" ;
   this.OV51BmpTraLanc = "" ;
   this.ZV52SeqRateio = 0 ;
   this.OV52SeqRateio = 0 ;
   this.ZV53CCusRateio = "" ;
   this.OV53CCusRateio = "" ;
   this.ZV62BmpPrmCCus = "" ;
   this.OV62BmpPrmCCus = "" ;
   this.ZV54DescCCusRateio = "" ;
   this.OV54DescCCusRateio = "" ;
   this.ZV55NatRateio = "" ;
   this.OV55NatRateio = "" ;
   this.ZV56DescNatRateio = "" ;
   this.OV56DescNatRateio = "" ;
   this.ZV57TradutorRateio = 0 ;
   this.OV57TradutorRateio = 0 ;
   this.ZV61BmpPrmRateio = "" ;
   this.OV61BmpPrmRateio = "" ;
   this.ZV58BmpTraRateio = "" ;
   this.OV58BmpTraRateio = "" ;
   this.ZV59ValorRateio = 0 ;
   this.OV59ValorRateio = 0 ;
   this.AV40TipoContaTipoContabil = "" ;
   this.ZV40TipoContaTipoContabil = "" ;
   this.OV40TipoContaTipoContabil = "" ;
   this.AV65QtdeChar = 0 ;
   this.ZV65QtdeChar = 0 ;
   this.OV65QtdeChar = 0 ;
   this.AV38ConvenioEmpresaId = "" ;
   this.ZV38ConvenioEmpresaId = "" ;
   this.OV38ConvenioEmpresaId = "" ;
   this.AV35EmpresaCentroCustoEmpresaId = "" ;
   this.ZV35EmpresaCentroCustoEmpresaId = "" ;
   this.OV35EmpresaCentroCustoEmpresaId = "" ;
   this.AV43ContaContabilIdAux = "" ;
   this.ZV43ContaContabilIdAux = "" ;
   this.OV43ContaContabilIdAux = "" ;
   this.AV73ContaPagRecPagRec = "" ;
   this.ZV73ContaPagRecPagRec = "" ;
   this.OV73ContaPagRecPagRec = "" ;
   this.AV76AcessoSistemaSequencia = 0 ;
   this.ZV76AcessoSistemaSequencia = 0 ;
   this.OV76AcessoSistemaSequencia = 0 ;
   this.AV15ContaPagRecNumero = 0 ;
   this.AV20DtEmissao = gx.date.nullDate() ;
   this.AV16DocSeq = "" ;
   this.AV21DtVencimento = gx.date.nullDate() ;
   this.AV17PessoaId = 0 ;
   this.AV18PessoaFantasia = "" ;
   this.AV22Situacao = "" ;
   this.AV19ValorAtual = 0 ;
   this.AV23COnvenioId = 0 ;
   this.AV24COnvenioDescricao = "" ;
   this.AV77Tab = [ ] ;
   this.AV40TipoContaTipoContabil = "" ;
   this.AV65QtdeChar = 0 ;
   this.AV38ConvenioEmpresaId = "" ;
   this.AV35EmpresaCentroCustoEmpresaId = "" ;
   this.AV43ContaContabilIdAux = "" ;
   this.AV73ContaPagRecPagRec = "" ;
   this.AV76AcessoSistemaSequencia = 0 ;
   this.AV25ContaPagRecEmpresaId = "" ;
   this.AV44SeqLanc = 0 ;
   this.AV45DataLanc = gx.date.nullDate() ;
   this.AV46CodLanc = 0 ;
   this.AV47DescLanc = "" ;
   this.AV48ValorLanc = 0 ;
   this.AV49StContabilLanc = "" ;
   this.AV50TradutorLanc = 0 ;
   this.AV60BmpPrmLanc = "" ;
   this.AV51BmpTraLanc = "" ;
   this.AV52SeqRateio = 0 ;
   this.AV53CCusRateio = "" ;
   this.AV62BmpPrmCCus = "" ;
   this.AV54DescCCusRateio = "" ;
   this.AV55NatRateio = "" ;
   this.AV56DescNatRateio = "" ;
   this.AV57TradutorRateio = 0 ;
   this.AV61BmpPrmRateio = "" ;
   this.AV58BmpTraRateio = "" ;
   this.AV59ValorRateio = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1701ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1696ContaPagRecSeqDocume = "" ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1715ContaPagRecVlrPagamento = 0 ;
   this.A1714ContaPagRecVlrDesconto = 0 ;
   this.A1712ContaPagRecVlrAcrescimo = 0 ;
   this.A1713ContaPagRecVlrConta = 0 ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A1688ContaPagRecConvenioId = 0 ;
   this.A2100ContaPagRecConvenioDesc = "" ;
   this.A2032ContaPagRecTipContaTipoContab = "" ;
   this.A2458ContaPagRecUsuarioInc = "" ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1645ContaPagRecTipContaEmpId = "" ;
   this.A1646ContaPagRecTipContaId = 0 ;
   this.A1687ContaPagRecConvenioEmpId = "" ;
   this.A1793ContaRateioCCustoId = "" ;
   this.A1794ContaRateioCCustoDescricao = "" ;
   this.A1796ContaRateioNaturezaId = "" ;
   this.A1797ContaRateioNaturezaDescricao = "" ;
   this.A1799ContaRateioCContabilId = "" ;
   this.A2071ContaRateioCContabilTradutor = 0 ;
   this.A1800ContaRateioCContabilNome = "" ;
   this.A1811ContaRateioValor = 0 ;
   this.A1810ContaRateioSequencia = 0 ;
   this.A1792ContaRateioCCustoEmpId = "" ;
   this.A1795ContaRateioNaturezaEmpId = "" ;
   this.A1798ContaRateioCContabilEmpId = "" ;
   this.A1805ContaLancamData = gx.date.nullDate() ;
   this.A1804ContaLancamStContabil = "" ;
   this.A1783ContaLancamTpLancamId = 0 ;
   this.A1784ContaLancamTpLancamDescricao = "" ;
   this.A2028ContaLancamCContabilTradutor = 0 ;
   this.A1787ContaLancamCContabilNome = "" ;
   this.A1786ContaLancamCContabilId = "" ;
   this.A1807ContaLancamValor = 0 ;
   this.A1803ContaLancamSequencia = 0 ;
   this.A1782ContaLancamTpLancamEmpId = "" ;
   this.A1785ContaLancamCContabilEmpId = "" ;
   this.A2091ConvenioVerbaContaId = "" ;
   this.A2090ConvenioVerbaContaEmpId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A62ContaContabilId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A65ContaContabilSituacao = "" ;
   this.A2106ConvenioCentroCustoId = "" ;
   this.A2105ConvenioCentroCustoEmpId = "" ;
   this.A51CentroCustoId = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A1888TipoLancamentoIntegCblEmpId = "" ;
   this.A1889TipoLancamentoIntegCblId = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.A2183ConvenioAtivo = "" ;
   this.AV30SdtLanc = [ ] ;
   this.AV37EmpresaContaContabilEmpresaId = "" ;
   this.Events = {"e11i72_client": ["'FECHAR'", true] ,"e12i72_client": ["ENTER", true] ,"e17i72_client": ["VCCUSRATEIO.ISVALID", true] ,"e20i72_client": ["CANCEL", true] ,"e18i72_client": ["'DETALHARCONTALANC'", false] ,"e19i714_client": ["'DETALHARCONTARATEIO'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV51BmpTraLanc',fld:'vBMPTRALANC'},{av:'gx.fn.getCtrlProperty("vBMPTRALANC","Tooltiptext")',ctrl:'vBMPTRALANC',prop:'Tooltiptext'},{av:'AV60BmpPrmLanc',fld:'vBMPPRMLANC'},{av:'AV30SdtLanc',fld:'vSDTLANC'},{av:'GRID2_nFirstRecordOnPage'},{av:'GRID2_nEOF'},{av:'AV58BmpTraRateio',fld:'vBMPTRARATEIO'},{av:'AV61BmpPrmRateio',fld:'vBMPPRMRATEIO'},{av:'AV62BmpPrmCCus',fld:'vBMPPRMCCUS'},{av:'AV32SdtRateio',fld:'vSDTRATEIO'}],[{av:'AV66TemMascara',fld:'vTEMMASCARA'},{av:'this.HDMASKCENTROCUSTOContainer.AttachControl',ctrl:'HDMASKCENTROCUSTO',prop:'AttachControl'},{av:'AV79MascaraValores',fld:'vMASCARAVALORES'},{av:'this.HDMASKCENTROCUSTOContainer.Picture',ctrl:'HDMASKCENTROCUSTO',prop:'Picture'},{av:'this.HDMASKNATUREZAContainer.AttachControl',ctrl:'HDMASKNATUREZA',prop:'AttachControl'},{av:'this.HDMASKNATUREZAContainer.Picture',ctrl:'HDMASKNATUREZA',prop:'Picture'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV76AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV34SnErro',fld:'vSNERRO'},{av:'AV25ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID',hsh:true},{av:'AV15ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO',hsh:true},{av:'AV38ConvenioEmpresaId',fld:'vCONVENIOEMPRESAID'},{av:'AV23COnvenioId',fld:'vCONVENIOID'},{av:'AV30SdtLanc',fld:'vSDTLANC'},{av:'AV32SdtRateio',fld:'vSDTRATEIO'},{av:'AV72SnProcessoConta',fld:'vSNPROCESSOCONTA'},{av:'AV73ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2082ConvenioDescricao',fld:'CONVENIODESCRICAO'},{av:'A2183ConvenioAtivo',fld:'CONVENIOATIVO'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV42TipoLancamentoEmpresaId',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A1888TipoLancamentoIntegCblEmpId',fld:'TIPOLANCAMENTOINTEGCBLEMPID'},{av:'A1889TipoLancamentoIntegCblId',fld:'TIPOLANCAMENTOINTEGCBLID'},{av:'AV41IntFinCbl',fld:'vINTFINCBL'},{av:'AV40TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV37EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A65ContaContabilSituacao',fld:'CONTACONTABILSITUACAO'},{av:'A2090ConvenioVerbaContaEmpId',fld:'CONVENIOVERBACONTAEMPID'},{av:'A2091ConvenioVerbaContaId',fld:'CONVENIOVERBACONTAID'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'AV35EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A52CentroCustoDescricao',fld:'CENTROCUSTODESCRICAO'},{av:'A2105ConvenioCentroCustoEmpId',fld:'CONVENIOCENTROCUSTOEMPID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'AV76AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV44SeqLanc',fld:'vSEQLANC',grid:69},{av:'AV50TradutorLanc',fld:'vTRADUTORLANC',grid:69},{av:'AV52SeqRateio',fld:'vSEQRATEIO',grid:84},{av:'AV57TradutorRateio',fld:'vTRADUTORRATEIO',grid:84},{av:'AV53CCusRateio',fld:'vCCUSRATEIO',grid:84}],[{av:'AV32SdtRateio',fld:'vSDTRATEIO'},{av:'AV30SdtLanc',fld:'vSDTLANC'},{av:'AV34SnErro',fld:'vSNERRO'},{av:'AV24COnvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV88GXLvl94',fld:'vGXLVL94'},{av:'AV39NumLinha',fld:'vNUMLINHA'},{av:'AV89GXV1',fld:'vGXV1'},{av:'AV31SdtLancItem',fld:'vSDTLANCITEM'},{av:'AV70TipoLancamentoIntegCblEmpId',fld:'vTIPOLANCAMENTOINTEGCBLEMPID'},{av:'AV71TipoLancamentoIntegCblId',fld:'vTIPOLANCAMENTOINTEGCBLID'},{av:'AV91GXLvl130',fld:'vGXLVL130'},{av:'AV92GXLvl152',fld:'vGXLVL152'},{av:'AV93GXV2',fld:'vGXV2'},{av:'AV33SdtRateioItem',fld:'vSDTRATEIOITEM'},{av:'AV94GXLvl187',fld:'vGXLVL187'},{av:'AV36SnCCusSin',fld:'vSNCCUSSIN'},{av:'AV95GXLvl209',fld:'vGXLVL209'},{av:'AV96GXLvl232',fld:'vGXLVL232'},{av:'AV97GXLvl254',fld:'vGXLVL254'},{av:'AV41IntFinCbl',fld:'vINTFINCBL'},{av:'AV72SnProcessoConta',fld:'vSNPROCESSOCONTA'},{av:'AV104GXV5',fld:'vGXV5'},{av:'AV106GXV6',fld:'vGXV6'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV30SdtLanc',fld:'vSDTLANC'}],[{av:'AV101GXV3',fld:'vGXV3'},{av:'AV31SdtLancItem',fld:'vSDTLANCITEM'},{av:'AV44SeqLanc',fld:'vSEQLANC'},{av:'AV45DataLanc',fld:'vDATALANC'},{av:'AV46CodLanc',fld:'vCODLANC'},{av:'AV47DescLanc',fld:'vDESCLANC'},{av:'AV48ValorLanc',fld:'vVALORLANC'},{av:'AV49StContabilLanc',fld:'vSTCONTABILLANC'},{av:'AV50TradutorLanc',fld:'vTRADUTORLANC'}]];
   this.EvtParms["GRID2.LOAD"] = [[{av:'AV32SdtRateio',fld:'vSDTRATEIO'}],[{av:'AV102GXV4',fld:'vGXV4'},{av:'AV33SdtRateioItem',fld:'vSDTRATEIOITEM'},{av:'AV52SeqRateio',fld:'vSEQRATEIO'},{av:'AV53CCusRateio',fld:'vCCUSRATEIO'},{av:'AV54DescCCusRateio',fld:'vDESCCCUSRATEIO'},{av:'AV55NatRateio',fld:'vNATRATEIO'},{av:'AV56DescNatRateio',fld:'vDESCNATRATEIO'},{av:'AV57TradutorRateio',fld:'vTRADUTORRATEIO'},{av:'AV59ValorRateio',fld:'vVALORRATEIO'}]];
   this.EvtParms["'DETALHARCONTALANC'"] = [[{av:'AV37EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV50TradutorLanc',fld:'vTRADUTORLANC'}],[]];
   this.EvtParms["'DETALHARCONTARATEIO'"] = [[{av:'AV37EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV57TradutorRateio',fld:'vTRADUTORRATEIO'}],[]];
   this.EvtParms["VCCUSRATEIO.ISVALID"] = [[{av:'AV35EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV53CCusRateio',fld:'vCCUSRATEIO'}],[{av:'AV54DescCCusRateio',fld:'vDESCCCUSRATEIO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV51BmpTraLanc',fld:'vBMPTRALANC'},{av:'gx.fn.getCtrlProperty("vBMPTRALANC","Tooltiptext")',ctrl:'vBMPTRALANC',prop:'Tooltiptext'},{av:'AV60BmpPrmLanc',fld:'vBMPPRMLANC'},{av:'AV30SdtLanc',fld:'vSDTLANC'}],[{av:'AV66TemMascara',fld:'vTEMMASCARA'},{av:'this.HDMASKCENTROCUSTOContainer.AttachControl',ctrl:'HDMASKCENTROCUSTO',prop:'AttachControl'},{av:'AV79MascaraValores',fld:'vMASCARAVALORES'},{av:'this.HDMASKCENTROCUSTOContainer.Picture',ctrl:'HDMASKCENTROCUSTO',prop:'Picture'},{av:'this.HDMASKNATUREZAContainer.AttachControl',ctrl:'HDMASKNATUREZA',prop:'AttachControl'},{av:'this.HDMASKNATUREZAContainer.Picture',ctrl:'HDMASKNATUREZA',prop:'Picture'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV51BmpTraLanc',fld:'vBMPTRALANC'},{av:'gx.fn.getCtrlProperty("vBMPTRALANC","Tooltiptext")',ctrl:'vBMPTRALANC',prop:'Tooltiptext'},{av:'AV60BmpPrmLanc',fld:'vBMPPRMLANC'},{av:'AV30SdtLanc',fld:'vSDTLANC'}],[{av:'AV66TemMascara',fld:'vTEMMASCARA'},{av:'this.HDMASKCENTROCUSTOContainer.AttachControl',ctrl:'HDMASKCENTROCUSTO',prop:'AttachControl'},{av:'AV79MascaraValores',fld:'vMASCARAVALORES'},{av:'this.HDMASKCENTROCUSTOContainer.Picture',ctrl:'HDMASKCENTROCUSTO',prop:'Picture'},{av:'this.HDMASKNATUREZAContainer.AttachControl',ctrl:'HDMASKNATUREZA',prop:'AttachControl'},{av:'this.HDMASKNATUREZAContainer.Picture',ctrl:'HDMASKNATUREZA',prop:'Picture'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV51BmpTraLanc',fld:'vBMPTRALANC'},{av:'gx.fn.getCtrlProperty("vBMPTRALANC","Tooltiptext")',ctrl:'vBMPTRALANC',prop:'Tooltiptext'},{av:'AV60BmpPrmLanc',fld:'vBMPPRMLANC'},{av:'AV30SdtLanc',fld:'vSDTLANC'}],[{av:'AV66TemMascara',fld:'vTEMMASCARA'},{av:'this.HDMASKCENTROCUSTOContainer.AttachControl',ctrl:'HDMASKCENTROCUSTO',prop:'AttachControl'},{av:'AV79MascaraValores',fld:'vMASCARAVALORES'},{av:'this.HDMASKCENTROCUSTOContainer.Picture',ctrl:'HDMASKCENTROCUSTO',prop:'Picture'},{av:'this.HDMASKNATUREZAContainer.AttachControl',ctrl:'HDMASKNATUREZA',prop:'AttachControl'},{av:'this.HDMASKNATUREZAContainer.Picture',ctrl:'HDMASKNATUREZA',prop:'Picture'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV51BmpTraLanc',fld:'vBMPTRALANC'},{av:'gx.fn.getCtrlProperty("vBMPTRALANC","Tooltiptext")',ctrl:'vBMPTRALANC',prop:'Tooltiptext'},{av:'AV60BmpPrmLanc',fld:'vBMPPRMLANC'},{av:'AV30SdtLanc',fld:'vSDTLANC'}],[{av:'AV66TemMascara',fld:'vTEMMASCARA'},{av:'this.HDMASKCENTROCUSTOContainer.AttachControl',ctrl:'HDMASKCENTROCUSTO',prop:'AttachControl'},{av:'AV79MascaraValores',fld:'vMASCARAVALORES'},{av:'this.HDMASKCENTROCUSTOContainer.Picture',ctrl:'HDMASKCENTROCUSTO',prop:'Picture'},{av:'this.HDMASKNATUREZAContainer.AttachControl',ctrl:'HDMASKNATUREZA',prop:'AttachControl'},{av:'this.HDMASKNATUREZAContainer.Picture',ctrl:'HDMASKNATUREZA',prop:'Picture'}]];
   this.setPrompt("PROMPT_CONVENIOID", [56]);
   this.setPrompt("&BMPPRMLANC", [108,76]);
   this.setPrompt("&BMPPRMCCUS", [86]);
   this.setPrompt("&BMPPRMRATEIO", [108,91]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV30SdtLanc", "vSDTLANC", 0, "CollContasLanc.SdtLancContasItem");
   this.setVCMap("AV37EmpresaContaContabilEmpresaId", "vEMPRESACONTACONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV37EmpresaContaContabilEmpresaId", "vEMPRESACONTACONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV25ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV30SdtLanc", "vSDTLANC", 0, "CollContasLanc.SdtLancContasItem");
   Grid1Container.addRefreshingVar({rfrVar:"AV51BmpTraLanc", rfrProp:"Value", gxAttId:"Bmptralanc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV51BmpTraLanc", rfrProp:"Tooltiptext", gxAttId:"Bmptralanc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV60BmpPrmLanc", rfrProp:"Value", gxAttId:"Bmpprmlanc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV30SdtLanc"});
   Grid2Container.addRefreshingVar({rfrVar:"AV58BmpTraRateio", rfrProp:"Value", gxAttId:"Bmptrarateio"});
   Grid2Container.addRefreshingVar({rfrVar:"AV61BmpPrmRateio", rfrProp:"Value", gxAttId:"Bmpprmrateio"});
   Grid2Container.addRefreshingVar({rfrVar:"AV62BmpPrmCCus", rfrProp:"Value", gxAttId:"Bmpprmccus"});
   Grid2Container.addRefreshingVar({rfrVar:"AV32SdtRateio"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new halterarconveniocontapr());

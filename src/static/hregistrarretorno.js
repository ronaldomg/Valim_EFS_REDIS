/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:46:48.92
*/
gx.evt.autoSkip = false;
gx.define('hregistrarretorno', false, function () {
   this.ServerClass =  "hregistrarretorno" ;
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
      this.AV60Sim=gx.fn.getControlValue("vSIM") ;
      this.AV61ContaPagRecPagRec=gx.fn.getControlValue("vCONTAPAGRECPAGREC") ;
      this.AV29SdtGrid=gx.fn.getControlValue("vSDTGRID") ;
      this.AV77SdtBaixa=gx.fn.getControlValue("vSDTBAIXA") ;
      this.A950BancoEmpresaId=gx.fn.getControlValue("BANCOEMPRESAID") ;
      this.A947BancoId=gx.fn.getIntegerValue("BANCOID",'.') ;
      this.A953BancoAgenciaId=gx.fn.getIntegerValue("BANCOAGENCIAID",'.') ;
      this.A2772CedenteNoConta=gx.fn.getIntegerValue("CEDENTENOCONTA",'.') ;
      this.A2761CedenteSequencia=gx.fn.getIntegerValue("CEDENTESEQUENCIA",'.') ;
   };
   this.Validv_Bancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bancoagenciaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBANCOAGENCIAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Cedentesequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCEDENTESEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Centrocustoidrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCENTROCUSTOIDREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Naturezaidrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZAIDREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Historicocxabcoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOCXABCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Centrocustoidtarifa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCENTROCUSTOIDTARIFA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Naturezaidtarifa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZAIDTARIFA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
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
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipocontaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCONTAEMPRESAID");
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
   this.Validv_Tipocobrancaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOCOBRANCAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipobaixapagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOBAIXAPAGREC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipobaixaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOBAIXAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bancoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBANCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipolancamentoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOLANCAMENTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Historicocxabcoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vHISTORICOCXABCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresanaturezaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESANATUREZAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresacontacontabilempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESACONTACONTABILEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11jn2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12jn2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13jn2_client=function()
   {
      this.executeServerEvent("'DIALOG'", false, null, false, false);
   };
   this.e14jn2_client=function()
   {
      this.executeServerEvent("VBANCOID.ISVALID", true, null, false, true);
   };
   this.e15jn2_client=function()
   {
      this.executeServerEvent("VBANCOAGENCIAID.ISVALID", true, null, false, true);
   };
   this.e19jn2_client=function()
   {
      this.executeServerEvent("VTIPOBAIXASIGLA.ISVALID", true, arguments[0], false, false);
   };
   this.e20jn2_client=function()
   {
      this.executeServerEvent("VCAIXABANCOID.ISVALID", true, arguments[0], false, false);
   };
   this.e21jn2_client=function()
   {
      this.executeServerEvent("VTIPOCONTAID.ISVALID", true, arguments[0], false, false);
   };
   this.e22jn2_client=function()
   {
      this.executeServerEvent("VTIPOCOBRANCAID.ISVALID", true, arguments[0], false, false);
   };
   this.e23jn2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,16,18,21,23,25,28,30,33,35,37,39,42,44,49,54,57,59,62,64,67,69,72,74,77,79,80,83,85,86,87,88,90,93,95,98,100,109,111,112,115,117,118,123,125,126,127,128,129,130,131,132,133,134,135,136,137,138,141,144,146,147,150,152,153,156,158,159,162,164,165,166,167,170,172,173,177,180,182,188,194,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,213,215,216,217,218,219,220,221,222,223];
   this.GXLastCtrlId =223;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",124,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hregistrarretorno",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("Tipobaixasigla",125,"vTIPOBAIXASIGLA","Tp.Baixa","","TipoBaixaSigla","char",0,"px",5,5,"left",null,[],"Tipobaixasigla","TipoBaixaSigla",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpprmbai","vBMPPRMBAI",126,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit("Tipobaixadescricao",127,"vTIPOBAIXADESCRICAO","Descrição","","TipoBaixaDescricao","svchar",0,"px",30,30,"left",null,[],"Tipobaixadescricao","TipoBaixaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Caixabancoid",128,"vCAIXABANCOID","Cxa/Bco","","CaixaBancoId","int",0,"px",5,5,"right",null,[],"Caixabancoid","CaixaBancoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpprmcxb","vBMPPRMCXB",129,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit("Caixabancodescricao",130,"vCAIXABANCODESCRICAO","Descrição","","CaixaBancoDescricao","svchar",0,"px",25,25,"left",null,[],"Caixabancodescricao","CaixaBancoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Tipocontaid",131,"vTIPOCONTAID","Tp. Conta","","TipoContaId","int",0,"px",3,3,"right",null,[],"Tipocontaid","TipoContaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpprmcon","vBMPPRMCON",132,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit("Tipocontadescricao",133,"vTIPOCONTADESCRICAO","Descrição","","TipoContaDescricao","svchar",0,"px",25,25,"left",null,[],"Tipocontadescricao","TipoContaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit("Tipocobrancaid",134,"vTIPOCOBRANCAID","Tp. Cob.","","TipoCobrancaId","int",0,"px",3,3,"right",null,[],"Tipocobrancaid","TipoCobrancaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpprmcob","vBMPPRMCOB",135,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit("Tipocobrancadescricao",136,"vTIPOCOBRANCADESCRICAO","Descrição","","TipoCobrancaDescricao","svchar",0,"px",25,25,"left",null,[],"Tipocobrancadescricao","TipoCobrancaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV138Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV138Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV138Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "hregistrarretorno_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[3]={fld:"TABLE10",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TAB115",grid:0};
   GXValidFnc[13]={fld:"TABLE15",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK48", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOEXECUCAO",gxz:"ZV18TipoExecucao",gxold:"OV18TipoExecucao",gxvar:"AV18TipoExecucao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18TipoExecucao=Value},v2z:function(Value){gx.O.ZV18TipoExecucao=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOEXECUCAO",gx.O.AV18TipoExecucao)},c2v:function(){gx.O.AV18TipoExecucao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOEXECUCAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK51", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV12Ordenacao",gxold:"OV12Ordenacao",gxvar:"AV12Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV12Ordenacao=Value},v2z:function(Value){gx.O.ZV12Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV12Ordenacao)},c2v:function(){gx.O.AV12Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TABLE6",grid:0};
   GXValidFnc[28]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLE16",grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bancoid,isvalid:'e14jn2_client',rgrid:[],fld:"vBANCOID",gxz:"ZV19BancoId",gxold:"OV19BancoId",gxvar:"AV19BancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19BancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19BancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOID",gx.O.AV19BancoId,0)},c2v:function(){gx.O.AV19BancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bancoagenciaid,isvalid:'e15jn2_client',rgrid:[],fld:"vBANCOAGENCIAID",gxz:"ZV20BancoAgenciaId",gxold:"OV20BancoAgenciaId",gxvar:"AV20BancoAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20BancoAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20BancoAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIAID",gx.O.AV20BancoAgenciaId,0)},c2v:function(){gx.O.AV20BancoAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBANCOAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCONOME",gxz:"ZV21BancoNome",gxold:"OV21BancoNome",gxvar:"AV21BancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21BancoNome=Value},v2z:function(Value){gx.O.ZV21BancoNome=Value},v2c:function(){gx.fn.setControlValue("vBANCONOME",gx.O.AV21BancoNome,0)},c2v:function(){gx.O.AV21BancoNome=this.val()},val:function(){return gx.fn.getControlValue("vBANCONOME")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK45", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cedentesequencia,isvalid:null,rgrid:[],fld:"vCEDENTESEQUENCIA",gxz:"ZV22CedenteSequencia",gxold:"OV22CedenteSequencia",gxvar:"AV22CedenteSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV22CedenteSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22CedenteSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vCEDENTESEQUENCIA",gx.O.AV22CedenteSequencia)},c2v:function(){gx.O.AV22CedenteSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCEDENTESEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"TABLE3",grid:0};
   GXValidFnc[54]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV23Diretorio",gxold:"OV23Diretorio",gxvar:"AV23Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23Diretorio=Value},v2z:function(Value){gx.O.ZV23Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV23Diretorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCK55", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODATABANCO",gxz:"ZV25TipoDataBanco",gxold:"OV25TipoDataBanco",gxvar:"AV25TipoDataBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25TipoDataBanco=Value},v2z:function(Value){gx.O.ZV25TipoDataBanco=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPODATABANCO",gx.O.AV25TipoDataBanco)},c2v:function(){gx.O.AV25TipoDataBanco=this.val()},val:function(){return gx.fn.getControlValue("vTIPODATABANCO")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK60", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODATACONTA",gxz:"ZV26TipoDataConta",gxold:"OV26TipoDataConta",gxvar:"AV26TipoDataConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26TipoDataConta=Value},v2z:function(Value){gx.O.ZV26TipoDataConta=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPODATACONTA",gx.O.AV26TipoDataConta)},c2v:function(){gx.O.AV26TipoDataConta=this.val()},val:function(){return gx.fn.getControlValue("vTIPODATACONTA")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK61", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVALORACRESCIMO",gxz:"ZV28SnValorAcrescimo",gxold:"OV28SnValorAcrescimo",gxvar:"AV28SnValorAcrescimo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28SnValorAcrescimo=Value},v2z:function(Value){gx.O.ZV28SnValorAcrescimo=Value},v2c:function(){gx.fn.setComboBoxValue("vSNVALORACRESCIMO",gx.O.AV28SnValorAcrescimo)},c2v:function(){gx.O.AV28SnValorAcrescimo=this.val()},val:function(){return gx.fn.getControlValue("vSNVALORACRESCIMO")},nac:gx.falseFn};
   GXValidFnc[72]={fld:"TEXTBLOCK56", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVALORDESCONTO",gxz:"ZV27SnValorDesconto",gxold:"OV27SnValorDesconto",gxvar:"AV27SnValorDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27SnValorDesconto=Value},v2z:function(Value){gx.O.ZV27SnValorDesconto=Value},v2c:function(){gx.fn.setComboBoxValue("vSNVALORDESCONTO",gx.O.AV27SnValorDesconto)},c2v:function(){gx.O.AV27SnValorDesconto=this.val()},val:function(){return gx.fn.getControlValue("vSNVALORDESCONTO")},nac:gx.falseFn};
   GXValidFnc[77]={fld:"TEXTBLOCK58", format:0,grid:0};
   GXValidFnc[79]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Centrocustoidrec,isvalid:null,rgrid:[],fld:"vCENTROCUSTOIDREC",gxz:"ZV107CentroCustoIdRec",gxold:"OV107CentroCustoIdRec",gxvar:"AV107CentroCustoIdRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV107CentroCustoIdRec=Value},v2z:function(Value){gx.O.ZV107CentroCustoIdRec=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOIDREC",gx.O.AV107CentroCustoIdRec,0)},c2v:function(){gx.O.AV107CentroCustoIdRec=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOIDREC")},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTODESCREC",gxz:"ZV109CentroCustoDescRec",gxold:"OV109CentroCustoDescRec",gxvar:"AV109CentroCustoDescRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV109CentroCustoDescRec=Value},v2z:function(Value){gx.O.ZV109CentroCustoDescRec=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTODESCREC",gx.O.AV109CentroCustoDescRec,0)},c2v:function(){gx.O.AV109CentroCustoDescRec=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTODESCREC")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK59", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTORREC",gxz:"ZV133ContaContabilTradutorRec",gxold:"OV133ContaContabilTradutorRec",gxvar:"AV133ContaContabilTradutorRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV133ContaContabilTradutorRec=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV133ContaContabilTradutorRec=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTORREC",gx.O.AV133ContaContabilTradutorRec,0)},c2v:function(){gx.O.AV133ContaContabilTradutorRec=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTORREC",'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILIDREC",gxz:"ZV132ContaContabilIdRec",gxold:"OV132ContaContabilIdRec",gxvar:"AV132ContaContabilIdRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV132ContaContabilIdRec=Value},v2z:function(Value){gx.O.ZV132ContaContabilIdRec=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILIDREC",gx.O.AV132ContaContabilIdRec,0)},c2v:function(){gx.O.AV132ContaContabilIdRec=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILIDREC")},nac:gx.falseFn};
   GXValidFnc[87]={fld:"IMGCCONT1",grid:0};
   GXValidFnc[88]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOMEREC",gxz:"ZV134ContaContabilNomeRec",gxold:"OV134ContaContabilNomeRec",gxvar:"AV134ContaContabilNomeRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV134ContaContabilNomeRec=Value},v2z:function(Value){gx.O.ZV134ContaContabilNomeRec=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOMEREC",gx.O.AV134ContaContabilNomeRec,0)},c2v:function(){gx.O.AV134ContaContabilNomeRec=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOMEREC")},nac:gx.falseFn};
   GXValidFnc[90]={fld:"TABLE17",grid:0};
   GXValidFnc[93]={fld:"TEXTBLOCK43", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATAARQUIVO",gxz:"ZV24DataArquivo",gxold:"OV24DataArquivo",gxvar:"AV24DataArquivo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DataArquivo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DataArquivo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAARQUIVO",gx.O.AV24DataArquivo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DataArquivo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAARQUIVO")},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[98]={fld:"TEXTBLOCK57", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGRUPAR",gxz:"ZV131Agrupar",gxold:"OV131Agrupar",gxvar:"AV131Agrupar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV131Agrupar=Value},v2z:function(Value){gx.O.ZV131Agrupar=Value},v2c:function(){gx.fn.setComboBoxValue("vAGRUPAR",gx.O.AV131Agrupar)},c2v:function(){gx.O.AV131Agrupar=this.val()},val:function(){return gx.fn.getControlValue("vAGRUPAR")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"TEXTBLOCK63", format:0,grid:0};
   GXValidFnc[111]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOID",gxz:"ZV45TipoLancamentoId",gxold:"OV45TipoLancamentoId",gxvar:"AV45TipoLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45TipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV45TipoLancamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOID",gx.O.AV45TipoLancamentoId,0)},c2v:function(){gx.O.AV45TipoLancamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOLANCAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[112]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTODESCRICAO",gxz:"ZV46TipoLancamentoDescricao",gxold:"OV46TipoLancamentoDescricao",gxvar:"AV46TipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46TipoLancamentoDescricao=Value},v2z:function(Value){gx.O.ZV46TipoLancamentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTODESCRICAO",gx.O.AV46TipoLancamentoDescricao,0)},c2v:function(){gx.O.AV46TipoLancamentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[115]={fld:"TEXTBLOCK62", format:0,grid:0};
   GXValidFnc[117]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezaidrec,isvalid:null,rgrid:[],fld:"vNATUREZAIDREC",gxz:"ZV112NaturezaIdRec",gxold:"OV112NaturezaIdRec",gxvar:"AV112NaturezaIdRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112NaturezaIdRec=Value},v2z:function(Value){gx.O.ZV112NaturezaIdRec=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAIDREC",gx.O.AV112NaturezaIdRec,0)},c2v:function(){gx.O.AV112NaturezaIdRec=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAIDREC")},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZADESCREC",gxz:"ZV113NaturezaDescRec",gxold:"OV113NaturezaDescRec",gxvar:"AV113NaturezaDescRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113NaturezaDescRec=Value},v2z:function(Value){gx.O.ZV113NaturezaDescRec=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESCREC",gx.O.AV113NaturezaDescRec,0)},c2v:function(){gx.O.AV113NaturezaDescRec=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESCREC")},nac:gx.falseFn};
   GXValidFnc[123]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[125]={lvl:2,type:"char",len:5,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:124,gxgrid:this.Grid1Container,fnc:null,isvalid:'e19jn2_client',rgrid:[],fld:"vTIPOBAIXASIGLA",gxz:"ZV48TipoBaixaSigla",gxold:"OV48TipoBaixaSigla",gxvar:"AV48TipoBaixaSigla",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV48TipoBaixaSigla=Value},v2z:function(Value){gx.O.ZV48TipoBaixaSigla=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOBAIXASIGLA",row || gx.fn.currentGridRowImpl(124),gx.O.AV48TipoBaixaSigla,0)},c2v:function(){gx.O.AV48TipoBaixaSigla=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOBAIXASIGLA",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn};
   GXValidFnc[126]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:124,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRMBAI",gxz:"ZV37BmpPrmBai",gxold:"OV37BmpPrmBai",gxvar:"AV37BmpPrmBai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV37BmpPrmBai=Value},v2z:function(Value){gx.O.ZV37BmpPrmBai=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRMBAI",row || gx.fn.currentGridRowImpl(124),gx.O.AV37BmpPrmBai,gx.O.AV160Bmpprmbai_GXI)},c2v:function(){gx.O.AV160Bmpprmbai_GXI=this.val_GXI();gx.O.AV37BmpPrmBai=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRMBAI",row || gx.fn.currentGridRowImpl(124))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRMBAI_GXI",row || gx.fn.currentGridRowImpl(124))}, gxvar_GXI:'AV160Bmpprmbai_GXI',nac:gx.falseFn};
   GXValidFnc[127]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:124,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBAIXADESCRICAO",gxz:"ZV49TipoBaixaDescricao",gxold:"OV49TipoBaixaDescricao",gxvar:"AV49TipoBaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV49TipoBaixaDescricao=Value},v2z:function(Value){gx.O.ZV49TipoBaixaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOBAIXADESCRICAO",row || gx.fn.currentGridRowImpl(124),gx.O.AV49TipoBaixaDescricao,0)},c2v:function(){gx.O.AV49TipoBaixaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOBAIXADESCRICAO",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn};
   GXValidFnc[128]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,isacc:0,grid:124,gxgrid:this.Grid1Container,fnc:null,isvalid:'e20jn2_client',rgrid:[],fld:"vCAIXABANCOID",gxz:"ZV54CaixaBancoId",gxold:"OV54CaixaBancoId",gxvar:"AV54CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV54CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54CaixaBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCAIXABANCOID",row || gx.fn.currentGridRowImpl(124),gx.O.AV54CaixaBancoId,0)},c2v:function(){gx.O.AV54CaixaBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCAIXABANCOID",row || gx.fn.currentGridRowImpl(124),'.')},nac:gx.falseFn};
   GXValidFnc[129]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:124,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRMCXB",gxz:"ZV38BmpPrmCxB",gxold:"OV38BmpPrmCxB",gxvar:"AV38BmpPrmCxB",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV38BmpPrmCxB=Value},v2z:function(Value){gx.O.ZV38BmpPrmCxB=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRMCXB",row || gx.fn.currentGridRowImpl(124),gx.O.AV38BmpPrmCxB,gx.O.AV161Bmpprmcxb_GXI)},c2v:function(){gx.O.AV161Bmpprmcxb_GXI=this.val_GXI();gx.O.AV38BmpPrmCxB=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRMCXB",row || gx.fn.currentGridRowImpl(124))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRMCXB_GXI",row || gx.fn.currentGridRowImpl(124))}, gxvar_GXI:'AV161Bmpprmcxb_GXI',nac:gx.falseFn};
   GXValidFnc[130]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:124,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV55CaixaBancoDescricao",gxold:"OV55CaixaBancoDescricao",gxvar:"AV55CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV55CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV55CaixaBancoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vCAIXABANCODESCRICAO",row || gx.fn.currentGridRowImpl(124),gx.O.AV55CaixaBancoDescricao,0)},c2v:function(){gx.O.AV55CaixaBancoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vCAIXABANCODESCRICAO",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn};
   GXValidFnc[131]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:0,grid:124,gxgrid:this.Grid1Container,fnc:null,isvalid:'e21jn2_client',rgrid:[],fld:"vTIPOCONTAID",gxz:"ZV50TipoContaId",gxold:"OV50TipoContaId",gxvar:"AV50TipoContaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV50TipoContaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV50TipoContaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTIPOCONTAID",row || gx.fn.currentGridRowImpl(124),gx.O.AV50TipoContaId,0)},c2v:function(){gx.O.AV50TipoContaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTIPOCONTAID",row || gx.fn.currentGridRowImpl(124),'.')},nac:gx.falseFn};
   GXValidFnc[132]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:124,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRMCON",gxz:"ZV39BmpPrmCon",gxold:"OV39BmpPrmCon",gxvar:"AV39BmpPrmCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV39BmpPrmCon=Value},v2z:function(Value){gx.O.ZV39BmpPrmCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRMCON",row || gx.fn.currentGridRowImpl(124),gx.O.AV39BmpPrmCon,gx.O.AV162Bmpprmcon_GXI)},c2v:function(){gx.O.AV162Bmpprmcon_GXI=this.val_GXI();gx.O.AV39BmpPrmCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRMCON",row || gx.fn.currentGridRowImpl(124))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRMCON_GXI",row || gx.fn.currentGridRowImpl(124))}, gxvar_GXI:'AV162Bmpprmcon_GXI',nac:gx.falseFn};
   GXValidFnc[133]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:124,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONTADESCRICAO",gxz:"ZV51TipoContaDescricao",gxold:"OV51TipoContaDescricao",gxvar:"AV51TipoContaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV51TipoContaDescricao=Value},v2z:function(Value){gx.O.ZV51TipoContaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOCONTADESCRICAO",row || gx.fn.currentGridRowImpl(124),gx.O.AV51TipoContaDescricao,0)},c2v:function(){gx.O.AV51TipoContaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOCONTADESCRICAO",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn};
   GXValidFnc[134]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,isacc:0,grid:124,gxgrid:this.Grid1Container,fnc:null,isvalid:'e22jn2_client',rgrid:[],fld:"vTIPOCOBRANCAID",gxz:"ZV52TipoCobrancaId",gxold:"OV52TipoCobrancaId",gxvar:"AV52TipoCobrancaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV52TipoCobrancaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52TipoCobrancaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTIPOCOBRANCAID",row || gx.fn.currentGridRowImpl(124),gx.O.AV52TipoCobrancaId,0)},c2v:function(){gx.O.AV52TipoCobrancaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTIPOCOBRANCAID",row || gx.fn.currentGridRowImpl(124),'.')},nac:gx.falseFn};
   GXValidFnc[135]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:124,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRMCOB",gxz:"ZV40BmpPrmCob",gxold:"OV40BmpPrmCob",gxvar:"AV40BmpPrmCob",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV40BmpPrmCob=Value},v2z:function(Value){gx.O.ZV40BmpPrmCob=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPRMCOB",row || gx.fn.currentGridRowImpl(124),gx.O.AV40BmpPrmCob,gx.O.AV163Bmpprmcob_GXI)},c2v:function(){gx.O.AV163Bmpprmcob_GXI=this.val_GXI();gx.O.AV40BmpPrmCob=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPRMCOB",row || gx.fn.currentGridRowImpl(124))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPRMCOB_GXI",row || gx.fn.currentGridRowImpl(124))}, gxvar_GXI:'AV163Bmpprmcob_GXI',nac:gx.falseFn};
   GXValidFnc[136]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:124,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCADESCRICAO",gxz:"ZV53TipoCobrancaDescricao",gxold:"OV53TipoCobrancaDescricao",gxvar:"AV53TipoCobrancaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV53TipoCobrancaDescricao=Value},v2z:function(Value){gx.O.ZV53TipoCobrancaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOCOBRANCADESCRICAO",row || gx.fn.currentGridRowImpl(124),gx.O.AV53TipoCobrancaDescricao,0)},c2v:function(){gx.O.AV53TipoCobrancaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOCOBRANCADESCRICAO",row || gx.fn.currentGridRowImpl(124))},nac:gx.falseFn};
   GXValidFnc[137]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[138]={fld:"TAB2",grid:0};
   GXValidFnc[141]={fld:"TABLE1",grid:0};
   GXValidFnc[144]={fld:"TEXTBLOCK46", format:0,grid:0};
   GXValidFnc[146]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Historicocxabcoid,isvalid:null,rgrid:[],fld:"vHISTORICOCXABCOID",gxz:"ZV42HistoricoCxaBcoId",gxold:"OV42HistoricoCxaBcoId",gxvar:"AV42HistoricoCxaBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42HistoricoCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42HistoricoCxaBcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCOID",gx.O.AV42HistoricoCxaBcoId,0)},c2v:function(){gx.O.AV42HistoricoCxaBcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOCXABCOID",'.')},nac:gx.falseFn};
   GXValidFnc[147]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOCXABCODESCRICAO",gxz:"ZV43HistoricoCxaBcoDescricao",gxold:"OV43HistoricoCxaBcoDescricao",gxvar:"AV43HistoricoCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43HistoricoCxaBcoDescricao=Value},v2z:function(Value){gx.O.ZV43HistoricoCxaBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCODESCRICAO",gx.O.AV43HistoricoCxaBcoDescricao,0)},c2v:function(){gx.O.AV43HistoricoCxaBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOCXABCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[150]={fld:"TEXTBLOCK64", format:0,grid:0};
   GXValidFnc[152]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Centrocustoidtarifa,isvalid:null,rgrid:[],fld:"vCENTROCUSTOIDTARIFA",gxz:"ZV106CentroCustoIdTarifa",gxold:"OV106CentroCustoIdTarifa",gxvar:"AV106CentroCustoIdTarifa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV106CentroCustoIdTarifa=Value},v2z:function(Value){gx.O.ZV106CentroCustoIdTarifa=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOIDTARIFA",gx.O.AV106CentroCustoIdTarifa,0)},c2v:function(){gx.O.AV106CentroCustoIdTarifa=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOIDTARIFA")},nac:gx.falseFn};
   GXValidFnc[153]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTODESCTARIFA",gxz:"ZV108CentroCustoDescTarifa",gxold:"OV108CentroCustoDescTarifa",gxvar:"AV108CentroCustoDescTarifa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108CentroCustoDescTarifa=Value},v2z:function(Value){gx.O.ZV108CentroCustoDescTarifa=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTODESCTARIFA",gx.O.AV108CentroCustoDescTarifa,0)},c2v:function(){gx.O.AV108CentroCustoDescTarifa=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTODESCTARIFA")},nac:gx.falseFn};
   GXValidFnc[156]={fld:"TEXTBLOCK65", format:0,grid:0};
   GXValidFnc[158]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezaidtarifa,isvalid:null,rgrid:[],fld:"vNATUREZAIDTARIFA",gxz:"ZV110NaturezaIdTarifa",gxold:"OV110NaturezaIdTarifa",gxvar:"AV110NaturezaIdTarifa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV110NaturezaIdTarifa=Value},v2z:function(Value){gx.O.ZV110NaturezaIdTarifa=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAIDTARIFA",gx.O.AV110NaturezaIdTarifa,0)},c2v:function(){gx.O.AV110NaturezaIdTarifa=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAIDTARIFA")},nac:gx.falseFn};
   GXValidFnc[159]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZADESCTARIFA",gxz:"ZV111NaturezaDescTarifa",gxold:"OV111NaturezaDescTarifa",gxvar:"AV111NaturezaDescTarifa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111NaturezaDescTarifa=Value},v2z:function(Value){gx.O.ZV111NaturezaDescTarifa=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESCTARIFA",gx.O.AV111NaturezaDescTarifa,0)},c2v:function(){gx.O.AV111NaturezaDescTarifa=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESCTARIFA")},nac:gx.falseFn};
   GXValidFnc[162]={fld:"TEXTBLOCK68", format:0,grid:0};
   GXValidFnc[164]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV127ContaContabilTradutor",gxold:"OV127ContaContabilTradutor",gxvar:"AV127ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV127ContaContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV127ContaContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTOR",gx.O.AV127ContaContabilTradutor,0)},c2v:function(){gx.O.AV127ContaContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[165]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV130ContaContabilId",gxold:"OV130ContaContabilId",gxvar:"AV130ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV130ContaContabilId=Value},v2z:function(Value){gx.O.ZV130ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV130ContaContabilId,0)},c2v:function(){gx.O.AV130ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[166]={fld:"IMGCCONT2",grid:0};
   GXValidFnc[167]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV128ContaContabilNome",gxold:"OV128ContaContabilNome",gxvar:"AV128ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV128ContaContabilNome=Value},v2z:function(Value){gx.O.ZV128ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV128ContaContabilNome,0)},c2v:function(){gx.O.AV128ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[170]={fld:"TEXTBLOCK66", format:0,grid:0};
   GXValidFnc[172]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV120PessoaId",gxold:"OV120PessoaId",gxvar:"AV120PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV120PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV120PessoaId,0)},c2v:function(){gx.O.AV120PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[173]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV121PessoaFantasia",gxold:"OV121PessoaFantasia",gxvar:"AV121PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV121PessoaFantasia=Value},v2z:function(Value){gx.O.ZV121PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV121PessoaFantasia,0)},c2v:function(){gx.O.AV121PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[177]={lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISTARIFAENTRADA",gxz:"ZV155isTarifaEntrada",gxold:"OV155isTarifaEntrada",gxvar:"AV155isTarifaEntrada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV155isTarifaEntrada=gx.lang.booleanValue(Value)},v2z:function(Value){gx.O.ZV155isTarifaEntrada=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vISTARIFAENTRADA",gx.O.AV155isTarifaEntrada,true)},c2v:function(){gx.O.AV155isTarifaEntrada=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vISTARIFAENTRADA")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[180]={fld:"TEXTBLOCK67", format:0,grid:0};
   GXValidFnc[182]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBSERVACAO",gxz:"ZV126Observacao",gxold:"OV126Observacao",gxvar:"AV126Observacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV126Observacao=Value},v2z:function(Value){gx.O.ZV126Observacao=Value},v2c:function(){gx.fn.setControlValue("vOBSERVACAO",gx.O.AV126Observacao,0)},c2v:function(){gx.O.AV126Observacao=this.val()},val:function(){return gx.fn.getControlValue("vOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[188]={fld:"TABLE11",grid:0};
   GXValidFnc[194]={fld:"TABINV",grid:0};
   GXValidFnc[197]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV124EmpresaPessoasEmpresaId",gxold:"OV124EmpresaPessoasEmpresaId",gxvar:"AV124EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV124EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV124EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV124EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV124EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[198]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipocontaempresaid,isvalid:null,rgrid:[],fld:"vTIPOCONTAEMPRESAID",gxz:"ZV57TipoContaEmpresaid",gxold:"OV57TipoContaEmpresaid",gxvar:"AV57TipoContaEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57TipoContaEmpresaid=Value},v2z:function(Value){gx.O.ZV57TipoContaEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vTIPOCONTAEMPRESAID",gx.O.AV57TipoContaEmpresaid,0)},c2v:function(){gx.O.AV57TipoContaEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONTAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[199]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresacentrocustoempresaid,isvalid:null,rgrid:[],fld:"vEMPRESACENTROCUSTOEMPRESAID",gxz:"ZV114EmpresaCentroCustoEmpresaId",gxold:"OV114EmpresaCentroCustoEmpresaId",gxvar:"AV114EmpresaCentroCustoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114EmpresaCentroCustoEmpresaId=Value},v2z:function(Value){gx.O.ZV114EmpresaCentroCustoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACENTROCUSTOEMPRESAID",gx.O.AV114EmpresaCentroCustoEmpresaId,0)},c2v:function(){gx.O.AV114EmpresaCentroCustoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACENTROCUSTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[200]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipocobrancaempresaid,isvalid:null,rgrid:[],fld:"vTIPOCOBRANCAEMPRESAID",gxz:"ZV56TipoCobrancaEmpresaid",gxold:"OV56TipoCobrancaEmpresaid",gxvar:"AV56TipoCobrancaEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56TipoCobrancaEmpresaid=Value},v2z:function(Value){gx.O.ZV56TipoCobrancaEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vTIPOCOBRANCAEMPRESAID",gx.O.AV56TipoCobrancaEmpresaid,0)},c2v:function(){gx.O.AV56TipoCobrancaEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCOBRANCAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[201]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATACREDITO",gxz:"ZV135DataCredito",gxold:"OV135DataCredito",gxvar:"AV135DataCredito",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV135DataCredito=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV135DataCredito=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATACREDITO",gx.O.AV135DataCredito,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV135DataCredito=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATACREDITO")},nac:gx.falseFn};
   this.declareDomainHdlr( 201 , function() {
   });
   GXValidFnc[202]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARAC",gxz:"ZV67QtdeCarac",gxold:"OV67QtdeCarac",gxvar:"AV67QtdeCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67QtdeCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67QtdeCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARAC",gx.O.AV67QtdeCarac,0)},c2v:function(){gx.O.AV67QtdeCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARAC",'.')},nac:gx.falseFn};
   GXValidFnc[203]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipobaixapagrec,isvalid:null,rgrid:[],fld:"vTIPOBAIXAPAGREC",gxz:"ZV62TipoBaixaPagRec",gxold:"OV62TipoBaixaPagRec",gxvar:"AV62TipoBaixaPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62TipoBaixaPagRec=Value},v2z:function(Value){gx.O.ZV62TipoBaixaPagRec=Value},v2c:function(){gx.fn.setControlValue("vTIPOBAIXAPAGREC",gx.O.AV62TipoBaixaPagRec,0)},c2v:function(){gx.O.AV62TipoBaixaPagRec=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBAIXAPAGREC")},nac:gx.falseFn};
   GXValidFnc[204]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipobaixaempresaid,isvalid:null,rgrid:[],fld:"vTIPOBAIXAEMPRESAID",gxz:"ZV59TipoBaixaEmpresaid",gxold:"OV59TipoBaixaEmpresaid",gxvar:"AV59TipoBaixaEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59TipoBaixaEmpresaid=Value},v2z:function(Value){gx.O.ZV59TipoBaixaEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vTIPOBAIXAEMPRESAID",gx.O.AV59TipoBaixaEmpresaid,0)},c2v:function(){gx.O.AV59TipoBaixaEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBAIXAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[205]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoempresaid,isvalid:null,rgrid:[],fld:"vCAIXABANCOEMPRESAID",gxz:"ZV58CaixaBancoEmpresaid",gxold:"OV58CaixaBancoEmpresaid",gxvar:"AV58CaixaBancoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58CaixaBancoEmpresaid=Value},v2z:function(Value){gx.O.ZV58CaixaBancoEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOEMPRESAID",gx.O.AV58CaixaBancoEmpresaid,0)},c2v:function(){gx.O.AV58CaixaBancoEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[206]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bancoempresaid,isvalid:null,rgrid:[],fld:"vBANCOEMPRESAID",gxz:"ZV30BancoEmpresaId",gxold:"OV30BancoEmpresaId",gxvar:"AV30BancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30BancoEmpresaId=Value},v2z:function(Value){gx.O.ZV30BancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vBANCOEMPRESAID",gx.O.AV30BancoEmpresaId,0)},c2v:function(){gx.O.AV30BancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vBANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[207]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipolancamentoempresaid,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOEMPRESAID",gxz:"ZV44TipoLancamentoEmpresaid",gxold:"OV44TipoLancamentoEmpresaid",gxvar:"AV44TipoLancamentoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44TipoLancamentoEmpresaid=Value},v2z:function(Value){gx.O.ZV44TipoLancamentoEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vTIPOLANCAMENTOEMPRESAID",gx.O.AV44TipoLancamentoEmpresaid,0)},c2v:function(){gx.O.AV44TipoLancamentoEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vTIPOLANCAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[208]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Historicocxabcoempresaid,isvalid:null,rgrid:[],fld:"vHISTORICOCXABCOEMPRESAID",gxz:"ZV41HistoricoCxaBcoEmpresaId",gxold:"OV41HistoricoCxaBcoEmpresaId",gxvar:"AV41HistoricoCxaBcoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41HistoricoCxaBcoEmpresaId=Value},v2z:function(Value){gx.O.ZV41HistoricoCxaBcoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCOEMPRESAID",gx.O.AV41HistoricoCxaBcoEmpresaId,0)},c2v:function(){gx.O.AV41HistoricoCxaBcoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOCXABCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[209]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresanaturezaempresaid,isvalid:null,rgrid:[],fld:"vEMPRESANATUREZAEMPRESAID",gxz:"ZV115EmpresaNaturezaEmpresaId",gxold:"OV115EmpresaNaturezaEmpresaId",gxvar:"AV115EmpresaNaturezaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV115EmpresaNaturezaEmpresaId=Value},v2z:function(Value){gx.O.ZV115EmpresaNaturezaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESANATUREZAEMPRESAID",gx.O.AV115EmpresaNaturezaEmpresaId,0)},c2v:function(){gx.O.AV115EmpresaNaturezaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESANATUREZAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[210]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresacontacontabilempresaid,isvalid:null,rgrid:[],fld:"vEMPRESACONTACONTABILEMPRESAID",gxz:"ZV129EmpresaContaContabilEmpresaId",gxold:"OV129EmpresaContaContabilEmpresaId",gxvar:"AV129EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV129EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.ZV129EmpresaContaContabilEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACONTACONTABILEMPRESAID",gx.O.AV129EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.AV129EmpresaContaContabilEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACONTACONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[211]={fld:"JS", format:2,grid:0};
   GXValidFnc[213]={fld:"BTNHELP",grid:0};
   GXValidFnc[215]={fld:"PROMPT_BANCOID",grid:0};
   GXValidFnc[216]={fld:"PROMPT_BANCOAGENCIAID",grid:0};
   GXValidFnc[217]={fld:"PROMPT_CENTROCUSTOIDREC",grid:0};
   GXValidFnc[218]={fld:"PROMPT_TIPOLANCAMENTOID",grid:0};
   GXValidFnc[219]={fld:"PROMPT_NATUREZAIDREC",grid:0};
   GXValidFnc[220]={fld:"PROMPT_HISTORICOCXABCOID",grid:0};
   GXValidFnc[221]={fld:"PROMPT_CENTROCUSTOIDTARIFA",grid:0};
   GXValidFnc[222]={fld:"PROMPT_NATUREZAIDTARIFA",grid:0};
   GXValidFnc[223]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV18TipoExecucao = "" ;
   this.ZV18TipoExecucao = "" ;
   this.OV18TipoExecucao = "" ;
   this.AV12Ordenacao = "" ;
   this.ZV12Ordenacao = "" ;
   this.OV12Ordenacao = "" ;
   this.AV19BancoId = 0 ;
   this.ZV19BancoId = 0 ;
   this.OV19BancoId = 0 ;
   this.AV20BancoAgenciaId = 0 ;
   this.ZV20BancoAgenciaId = 0 ;
   this.OV20BancoAgenciaId = 0 ;
   this.AV21BancoNome = "" ;
   this.ZV21BancoNome = "" ;
   this.OV21BancoNome = "" ;
   this.AV22CedenteSequencia = 0 ;
   this.ZV22CedenteSequencia = 0 ;
   this.OV22CedenteSequencia = 0 ;
   this.AV23Diretorio = "" ;
   this.ZV23Diretorio = "" ;
   this.OV23Diretorio = "" ;
   this.AV25TipoDataBanco = "" ;
   this.ZV25TipoDataBanco = "" ;
   this.OV25TipoDataBanco = "" ;
   this.AV26TipoDataConta = "" ;
   this.ZV26TipoDataConta = "" ;
   this.OV26TipoDataConta = "" ;
   this.AV28SnValorAcrescimo = "" ;
   this.ZV28SnValorAcrescimo = "" ;
   this.OV28SnValorAcrescimo = "" ;
   this.AV27SnValorDesconto = "" ;
   this.ZV27SnValorDesconto = "" ;
   this.OV27SnValorDesconto = "" ;
   this.AV107CentroCustoIdRec = "" ;
   this.ZV107CentroCustoIdRec = "" ;
   this.OV107CentroCustoIdRec = "" ;
   this.AV109CentroCustoDescRec = "" ;
   this.ZV109CentroCustoDescRec = "" ;
   this.OV109CentroCustoDescRec = "" ;
   this.AV133ContaContabilTradutorRec = 0 ;
   this.ZV133ContaContabilTradutorRec = 0 ;
   this.OV133ContaContabilTradutorRec = 0 ;
   this.AV132ContaContabilIdRec = "" ;
   this.ZV132ContaContabilIdRec = "" ;
   this.OV132ContaContabilIdRec = "" ;
   this.AV134ContaContabilNomeRec = "" ;
   this.ZV134ContaContabilNomeRec = "" ;
   this.OV134ContaContabilNomeRec = "" ;
   this.AV24DataArquivo = gx.date.nullDate() ;
   this.ZV24DataArquivo = gx.date.nullDate() ;
   this.OV24DataArquivo = gx.date.nullDate() ;
   this.AV131Agrupar = "" ;
   this.ZV131Agrupar = "" ;
   this.OV131Agrupar = "" ;
   this.AV45TipoLancamentoId = 0 ;
   this.ZV45TipoLancamentoId = 0 ;
   this.OV45TipoLancamentoId = 0 ;
   this.AV46TipoLancamentoDescricao = "" ;
   this.ZV46TipoLancamentoDescricao = "" ;
   this.OV46TipoLancamentoDescricao = "" ;
   this.AV112NaturezaIdRec = "" ;
   this.ZV112NaturezaIdRec = "" ;
   this.OV112NaturezaIdRec = "" ;
   this.AV113NaturezaDescRec = "" ;
   this.ZV113NaturezaDescRec = "" ;
   this.OV113NaturezaDescRec = "" ;
   this.ZV48TipoBaixaSigla = "" ;
   this.OV48TipoBaixaSigla = "" ;
   this.ZV37BmpPrmBai = "" ;
   this.OV37BmpPrmBai = "" ;
   this.ZV49TipoBaixaDescricao = "" ;
   this.OV49TipoBaixaDescricao = "" ;
   this.ZV54CaixaBancoId = 0 ;
   this.OV54CaixaBancoId = 0 ;
   this.ZV38BmpPrmCxB = "" ;
   this.OV38BmpPrmCxB = "" ;
   this.ZV55CaixaBancoDescricao = "" ;
   this.OV55CaixaBancoDescricao = "" ;
   this.ZV50TipoContaId = 0 ;
   this.OV50TipoContaId = 0 ;
   this.ZV39BmpPrmCon = "" ;
   this.OV39BmpPrmCon = "" ;
   this.ZV51TipoContaDescricao = "" ;
   this.OV51TipoContaDescricao = "" ;
   this.ZV52TipoCobrancaId = 0 ;
   this.OV52TipoCobrancaId = 0 ;
   this.ZV40BmpPrmCob = "" ;
   this.OV40BmpPrmCob = "" ;
   this.ZV53TipoCobrancaDescricao = "" ;
   this.OV53TipoCobrancaDescricao = "" ;
   this.AV42HistoricoCxaBcoId = 0 ;
   this.ZV42HistoricoCxaBcoId = 0 ;
   this.OV42HistoricoCxaBcoId = 0 ;
   this.AV43HistoricoCxaBcoDescricao = "" ;
   this.ZV43HistoricoCxaBcoDescricao = "" ;
   this.OV43HistoricoCxaBcoDescricao = "" ;
   this.AV106CentroCustoIdTarifa = "" ;
   this.ZV106CentroCustoIdTarifa = "" ;
   this.OV106CentroCustoIdTarifa = "" ;
   this.AV108CentroCustoDescTarifa = "" ;
   this.ZV108CentroCustoDescTarifa = "" ;
   this.OV108CentroCustoDescTarifa = "" ;
   this.AV110NaturezaIdTarifa = "" ;
   this.ZV110NaturezaIdTarifa = "" ;
   this.OV110NaturezaIdTarifa = "" ;
   this.AV111NaturezaDescTarifa = "" ;
   this.ZV111NaturezaDescTarifa = "" ;
   this.OV111NaturezaDescTarifa = "" ;
   this.AV127ContaContabilTradutor = 0 ;
   this.ZV127ContaContabilTradutor = 0 ;
   this.OV127ContaContabilTradutor = 0 ;
   this.AV130ContaContabilId = "" ;
   this.ZV130ContaContabilId = "" ;
   this.OV130ContaContabilId = "" ;
   this.AV128ContaContabilNome = "" ;
   this.ZV128ContaContabilNome = "" ;
   this.OV128ContaContabilNome = "" ;
   this.AV120PessoaId = 0 ;
   this.ZV120PessoaId = 0 ;
   this.OV120PessoaId = 0 ;
   this.AV121PessoaFantasia = "" ;
   this.ZV121PessoaFantasia = "" ;
   this.OV121PessoaFantasia = "" ;
   this.AV155isTarifaEntrada = false ;
   this.ZV155isTarifaEntrada = false ;
   this.OV155isTarifaEntrada = false ;
   this.AV126Observacao = "" ;
   this.ZV126Observacao = "" ;
   this.OV126Observacao = "" ;
   this.AV124EmpresaPessoasEmpresaId = "" ;
   this.ZV124EmpresaPessoasEmpresaId = "" ;
   this.OV124EmpresaPessoasEmpresaId = "" ;
   this.AV57TipoContaEmpresaid = "" ;
   this.ZV57TipoContaEmpresaid = "" ;
   this.OV57TipoContaEmpresaid = "" ;
   this.AV114EmpresaCentroCustoEmpresaId = "" ;
   this.ZV114EmpresaCentroCustoEmpresaId = "" ;
   this.OV114EmpresaCentroCustoEmpresaId = "" ;
   this.AV56TipoCobrancaEmpresaid = "" ;
   this.ZV56TipoCobrancaEmpresaid = "" ;
   this.OV56TipoCobrancaEmpresaid = "" ;
   this.AV135DataCredito = gx.date.nullDate() ;
   this.ZV135DataCredito = gx.date.nullDate() ;
   this.OV135DataCredito = gx.date.nullDate() ;
   this.AV67QtdeCarac = 0 ;
   this.ZV67QtdeCarac = 0 ;
   this.OV67QtdeCarac = 0 ;
   this.AV62TipoBaixaPagRec = "" ;
   this.ZV62TipoBaixaPagRec = "" ;
   this.OV62TipoBaixaPagRec = "" ;
   this.AV59TipoBaixaEmpresaid = "" ;
   this.ZV59TipoBaixaEmpresaid = "" ;
   this.OV59TipoBaixaEmpresaid = "" ;
   this.AV58CaixaBancoEmpresaid = "" ;
   this.ZV58CaixaBancoEmpresaid = "" ;
   this.OV58CaixaBancoEmpresaid = "" ;
   this.AV30BancoEmpresaId = "" ;
   this.ZV30BancoEmpresaId = "" ;
   this.OV30BancoEmpresaId = "" ;
   this.AV44TipoLancamentoEmpresaid = "" ;
   this.ZV44TipoLancamentoEmpresaid = "" ;
   this.OV44TipoLancamentoEmpresaid = "" ;
   this.AV41HistoricoCxaBcoEmpresaId = "" ;
   this.ZV41HistoricoCxaBcoEmpresaId = "" ;
   this.OV41HistoricoCxaBcoEmpresaId = "" ;
   this.AV115EmpresaNaturezaEmpresaId = "" ;
   this.ZV115EmpresaNaturezaEmpresaId = "" ;
   this.OV115EmpresaNaturezaEmpresaId = "" ;
   this.AV129EmpresaContaContabilEmpresaId = "" ;
   this.ZV129EmpresaContaContabilEmpresaId = "" ;
   this.OV129EmpresaContaContabilEmpresaId = "" ;
   this.AV138Tab = [ ] ;
   this.AV18TipoExecucao = "" ;
   this.AV12Ordenacao = "" ;
   this.AV19BancoId = 0 ;
   this.AV20BancoAgenciaId = 0 ;
   this.AV21BancoNome = "" ;
   this.AV22CedenteSequencia = 0 ;
   this.AV23Diretorio = "" ;
   this.AV25TipoDataBanco = "" ;
   this.AV26TipoDataConta = "" ;
   this.AV28SnValorAcrescimo = "" ;
   this.AV27SnValorDesconto = "" ;
   this.AV107CentroCustoIdRec = "" ;
   this.AV109CentroCustoDescRec = "" ;
   this.AV133ContaContabilTradutorRec = 0 ;
   this.AV132ContaContabilIdRec = "" ;
   this.AV134ContaContabilNomeRec = "" ;
   this.AV24DataArquivo = gx.date.nullDate() ;
   this.AV131Agrupar = "" ;
   this.AV45TipoLancamentoId = 0 ;
   this.AV46TipoLancamentoDescricao = "" ;
   this.AV112NaturezaIdRec = "" ;
   this.AV113NaturezaDescRec = "" ;
   this.AV42HistoricoCxaBcoId = 0 ;
   this.AV43HistoricoCxaBcoDescricao = "" ;
   this.AV106CentroCustoIdTarifa = "" ;
   this.AV108CentroCustoDescTarifa = "" ;
   this.AV110NaturezaIdTarifa = "" ;
   this.AV111NaturezaDescTarifa = "" ;
   this.AV127ContaContabilTradutor = 0 ;
   this.AV130ContaContabilId = "" ;
   this.AV128ContaContabilNome = "" ;
   this.AV120PessoaId = 0 ;
   this.AV121PessoaFantasia = "" ;
   this.AV155isTarifaEntrada = false ;
   this.AV126Observacao = "" ;
   this.AV124EmpresaPessoasEmpresaId = "" ;
   this.AV57TipoContaEmpresaid = "" ;
   this.AV114EmpresaCentroCustoEmpresaId = "" ;
   this.AV56TipoCobrancaEmpresaid = "" ;
   this.AV135DataCredito = gx.date.nullDate() ;
   this.AV67QtdeCarac = 0 ;
   this.AV62TipoBaixaPagRec = "" ;
   this.AV59TipoBaixaEmpresaid = "" ;
   this.AV58CaixaBancoEmpresaid = "" ;
   this.AV30BancoEmpresaId = "" ;
   this.AV44TipoLancamentoEmpresaid = "" ;
   this.AV41HistoricoCxaBcoEmpresaId = "" ;
   this.AV115EmpresaNaturezaEmpresaId = "" ;
   this.AV129EmpresaContaContabilEmpresaId = "" ;
   this.AV48TipoBaixaSigla = "" ;
   this.AV37BmpPrmBai = "" ;
   this.AV49TipoBaixaDescricao = "" ;
   this.AV54CaixaBancoId = 0 ;
   this.AV38BmpPrmCxB = "" ;
   this.AV55CaixaBancoDescricao = "" ;
   this.AV50TipoContaId = 0 ;
   this.AV39BmpPrmCon = "" ;
   this.AV51TipoContaDescricao = "" ;
   this.AV52TipoCobrancaId = 0 ;
   this.AV40BmpPrmCob = "" ;
   this.AV53TipoCobrancaDescricao = "" ;
   this.A1053TipoBaixaSigla = "" ;
   this.A1049TipoBaixaPagRec = "" ;
   this.A1052TipoBaixaEmpresaId = "" ;
   this.A1054TipoBaixaDescricao = "" ;
   this.A953BancoAgenciaId = 0 ;
   this.A947BancoId = 0 ;
   this.A950BancoEmpresaId = "" ;
   this.A2761CedenteSequencia = 0 ;
   this.A2772CedenteNoConta = 0 ;
   this.A172NaturezaId = "" ;
   this.A171EmpresaNaturezaEmpresaId = "" ;
   this.A154NaturezaDescricao = "" ;
   this.A51CentroCustoId = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.A1004HistoricoCxaBcoId = 0 ;
   this.A1003HistoricoCxaBcoEmpresaId = "" ;
   this.A1005HistoricoCxaBcoDescricao = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A963TipoLancamentoDescricao = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A948BancoNome = "" ;
   this.A942TipoContaId = 0 ;
   this.A941TipoContaEmpresaId = "" ;
   this.A943TipoContaDescricao = "" ;
   this.A992TipoCobrancaId = 0 ;
   this.A991TipoCobrancaEmpresaId = "" ;
   this.A993TipoCobrancaDescricao = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.A1017CaixaBancoDescricao = "" ;
   this.A75UsuarioId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.A64ContaContabilTradutor = 0 ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A62ContaContabilId = "" ;
   this.A1019CaixaBancoSnAtivo = "" ;
   this.A1016CaixaBancoTipo = "" ;
   this.A1768UsuFilialCxaBcoCxaBcoEmpId = "" ;
   this.A1769UsuFilialCxaBcoCxaBcoId = 0 ;
   this.A1762UsuFilialCxaBcoFilialId = 0 ;
   this.A1761UsuFilialCxaBcoFilialEmpId = "" ;
   this.A1771PermissaoUsuCxaContaUsuarioId = "" ;
   this.A1076PermissaoUsuCxaContaEmpresaId = "" ;
   this.A1050TipoBaixaTipoCaixaBanco = "" ;
   this.A2812CedenteRetornoEmpId = "" ;
   this.A2813CedenteRetornoId = 0 ;
   this.AV29SdtGrid = [ ] ;
   this.AV77SdtBaixa = [ ] ;
   this.Events = {"e11jn2_client": ["'FECHAR'", true] ,"e12jn2_client": ["ENTER", true] ,"e13jn2_client": ["'DIALOG'", true] ,"e14jn2_client": ["VBANCOID.ISVALID", true] ,"e15jn2_client": ["VBANCOAGENCIAID.ISVALID", true] ,"e19jn2_client": ["VTIPOBAIXASIGLA.ISVALID", true] ,"e20jn2_client": ["VCAIXABANCOID.ISVALID", true] ,"e21jn2_client": ["VTIPOCONTAID.ISVALID", true] ,"e22jn2_client": ["VTIPOCOBRANCAID.ISVALID", true] ,"e23jn2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV37BmpPrmBai',fld:'vBMPPRMBAI'},{av:'AV38BmpPrmCxB',fld:'vBMPPRMCXB'},{av:'AV39BmpPrmCon',fld:'vBMPPRMCON'},{av:'AV40BmpPrmCob',fld:'vBMPPRMCOB'},{av:'AV23Diretorio',fld:'vDIRETORIO'},{av:'AV30BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'AV19BancoId',fld:'vBANCOID'},{av:'AV20BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV22CedenteSequencia',fld:'vCEDENTESEQUENCIA'},{av:'AV27SnValorDesconto',fld:'vSNVALORDESCONTO'},{av:'AV28SnValorAcrescimo',fld:'vSNVALORACRESCIMO'},{av:'AV135DataCredito',fld:'vDATACREDITO'},{av:'AV25TipoDataBanco',fld:'vTIPODATABANCO'},{av:'AV26TipoDataConta',fld:'vTIPODATACONTA'},{av:'AV29SdtGrid',fld:'vSDTGRID'},{av:'AV77SdtBaixa',fld:'vSDTBAIXA'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'}],[{av:'AV23Diretorio',fld:'vDIRETORIO'},{av:'AV77SdtBaixa',fld:'vSDTBAIXA'},{av:'AV29SdtGrid',fld:'vSDTGRID'},{av:'AV203GXV8',fld:'vGXV8'},{av:'AV68SdtRetornoItem',fld:'vSDTRETORNOITEM'},{av:'AV24DataArquivo',fld:'vDATAARQUIVO'},{av:'AV135DataCredito',fld:'vDATACREDITO'},{av:'AV96SnCaixaBanco',fld:'vSNCAIXABANCO'},{av:'gx.fn.getCtrlProperty("vCAIXABANCOID","Visible")',ctrl:'vCAIXABANCOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCAIXABANCODESCRICAO","Visible")',ctrl:'vCAIXABANCODESCRICAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBMPPRMCXB","Visible")',ctrl:'vBMPPRMCXB',prop:'Visible'},{av:'AV22CedenteSequencia',fld:'vCEDENTESEQUENCIA'},{av:'AV136DescSequencia',fld:'vDESCSEQUENCIA'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV31SnErro',fld:'vSNERRO'},{av:'AV77SdtBaixa',fld:'vSDTBAIXA'},{av:'AV79SdtErro',fld:'vSDTERRO'},{av:'AV78SdtEntreg',fld:'vSDTENTREG'},{av:'AV30BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'AV19BancoId',fld:'vBANCOID'},{av:'AV73RemessaRetornoEmpresaId',fld:'vREMESSARETORNOEMPRESAID'},{av:'AV74RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV24DataArquivo',fld:'vDATAARQUIVO'},{av:'AV80SdtCxaBco',fld:'vSDTCXABCO'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV159Pgmdesc',fld:'vPGMDESC'},{av:'AV18TipoExecucao',fld:'vTIPOEXECUCAO'},{av:'AV12Ordenacao',fld:'vORDENACAO'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A948BancoNome',fld:'BANCONOME'},{av:'AV20BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'AV22CedenteSequencia',fld:'vCEDENTESEQUENCIA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'},{av:'A2812CedenteRetornoEmpId',fld:'CEDENTERETORNOEMPID'},{av:'A2813CedenteRetornoId',fld:'CEDENTERETORNOID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'AV23Diretorio',fld:'vDIRETORIO'},{av:'AV27SnValorDesconto',fld:'vSNVALORDESCONTO'},{av:'AV28SnValorAcrescimo',fld:'vSNVALORACRESCIMO'},{av:'AV135DataCredito',fld:'vDATACREDITO'},{av:'AV25TipoDataBanco',fld:'vTIPODATABANCO'},{av:'AV26TipoDataConta',fld:'vTIPODATACONTA'},{av:'AV29SdtGrid',fld:'vSDTGRID'},{av:'AV151CedenteNoConta',fld:'vCEDENTENOCONTA'},{av:'AV131Agrupar',fld:'vAGRUPAR'},{av:'AV45TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV44TipoLancamentoEmpresaid',fld:'vTIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'A963TipoLancamentoDescricao',fld:'TIPOLANCAMENTODESCRICAO'},{av:'AV107CentroCustoIdRec',fld:'vCENTROCUSTOIDREC'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'AV114EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A52CentroCustoDescricao',fld:'CENTROCUSTODESCRICAO'},{av:'AV112NaturezaIdRec',fld:'vNATUREZAIDREC'},{av:'A171EmpresaNaturezaEmpresaId',fld:'EMPRESANATUREZAEMPRESAID'},{av:'AV115EmpresaNaturezaEmpresaId',fld:'vEMPRESANATUREZAEMPRESAID'},{av:'A172NaturezaId',fld:'NATUREZAID'},{av:'A154NaturezaDescricao',fld:'NATUREZADESCRICAO'},{av:'AV133ContaContabilTradutorRec',fld:'vCONTACONTABILTRADUTORREC'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV129EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'AV59TipoBaixaEmpresaid',fld:'vTIPOBAIXAEMPRESAID'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'AV62TipoBaixaPagRec',fld:'vTIPOBAIXAPAGREC'},{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'A1054TipoBaixaDescricao',fld:'TIPOBAIXADESCRICAO'},{av:'A1050TipoBaixaTipoCaixaBanco',fld:'TIPOBAIXATIPOCAIXABANCO'},{av:'AV96SnCaixaBanco',fld:'vSNCAIXABANCO'},{av:'AV54CaixaBancoId',fld:'vCAIXABANCOID',grid:124},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV58CaixaBancoEmpresaid',fld:'vCAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'A1017CaixaBancoDescricao',fld:'CAIXABANCODESCRICAO'},{av:'A1019CaixaBancoSnAtivo',fld:'CAIXABANCOSNATIVO'},{av:'AV90DataAux',fld:'vDATAAUX'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'A1076PermissaoUsuCxaContaEmpresaId',fld:'PERMISSAOUSUCXACONTAEMPRESAID'},{av:'AV91PermissaoUsuCxaContaEmpresaId',fld:'vPERMISSAOUSUCXACONTAEMPRESAID'},{av:'A1771PermissaoUsuCxaContaUsuarioId',fld:'PERMISSAOUSUCXACONTAUSUARIOID'},{av:'A1761UsuFilialCxaBcoFilialEmpId',fld:'USUFILIALCXABCOFILIALEMPID'},{av:'A1762UsuFilialCxaBcoFilialId',fld:'USUFILIALCXABCOFILIALID'},{av:'A1769UsuFilialCxaBcoCxaBcoId',fld:'USUFILIALCXABCOCXABCOID'},{av:'A1768UsuFilialCxaBcoCxaBcoEmpId',fld:'USUFILIALCXABCOCXABCOEMPID'},{av:'A1016CaixaBancoTipo',fld:'CAIXABANCOTIPO'},{av:'A941TipoContaEmpresaId',fld:'TIPOCONTAEMPRESAID'},{av:'AV57TipoContaEmpresaid',fld:'vTIPOCONTAEMPRESAID'},{av:'A942TipoContaId',fld:'TIPOCONTAID'},{av:'A943TipoContaDescricao',fld:'TIPOCONTADESCRICAO'},{av:'A991TipoCobrancaEmpresaId',fld:'TIPOCOBRANCAEMPRESAID'},{av:'AV56TipoCobrancaEmpresaid',fld:'vTIPOCOBRANCAEMPRESAID'},{av:'A992TipoCobrancaId',fld:'TIPOCOBRANCAID'},{av:'A993TipoCobrancaDescricao',fld:'TIPOCOBRANCADESCRICAO'},{av:'AV42HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'A1003HistoricoCxaBcoEmpresaId',fld:'HISTORICOCXABCOEMPRESAID'},{av:'AV41HistoricoCxaBcoEmpresaId',fld:'vHISTORICOCXABCOEMPRESAID'},{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'A1005HistoricoCxaBcoDescricao',fld:'HISTORICOCXABCODESCRICAO'},{av:'AV106CentroCustoIdTarifa',fld:'vCENTROCUSTOIDTARIFA'},{av:'AV110NaturezaIdTarifa',fld:'vNATUREZAIDTARIFA'},{av:'AV127ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV120PessoaId',fld:'vPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV124EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV48TipoBaixaSigla',fld:'vTIPOBAIXASIGLA',grid:124},{av:'AV49TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO',grid:124},{av:'AV52TipoCobrancaId',fld:'vTIPOCOBRANCAID',grid:124},{av:'AV53TipoCobrancaDescricao',fld:'vTIPOCOBRANCADESCRICAO',grid:124},{av:'AV50TipoContaId',fld:'vTIPOCONTAID',grid:124},{av:'AV51TipoContaDescricao',fld:'vTIPOCONTADESCRICAO',grid:124},{av:'AV55CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO',grid:124},{av:'AV149UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A1564UsuarioFilialId',fld:'USUARIOFILIALID'},{av:'AV158Pgmname',fld:'vPGMNAME'},{av:'AV155isTarifaEntrada',fld:'vISTARIFAENTRADA'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV97ValorTarifa',fld:'vVALORTARIFA'},{av:'AV69ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID'},{av:'AV130ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV126Observacao',fld:'vOBSERVACAO'},{av:'AV132ContaContabilIdRec',fld:'vCONTACONTABILIDREC'}],[{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV16QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV80SdtCxaBco',fld:'vSDTCXABCO'},{av:'AV78SdtEntreg',fld:'vSDTENTREG'},{av:'AV79SdtErro',fld:'vSDTERRO'},{av:'AV77SdtBaixa',fld:'vSDTBAIXA'},{av:'AV24DataArquivo',fld:'vDATAARQUIVO'},{av:'AV74RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV73RemessaRetornoEmpresaId',fld:'vREMESSARETORNOEMPRESAID'},{av:'AV19BancoId',fld:'vBANCOID'},{av:'AV30BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'AV31SnErro',fld:'vSNERRO'},{av:'AV164GXLvl102',fld:'vGXLVL102'},{av:'AV21BancoNome',fld:'vBANCONOME'},{av:'AV165GXLvl123',fld:'vGXLVL123'},{av:'AV151CedenteNoConta',fld:'vCEDENTENOCONTA'},{av:'AV29SdtGrid',fld:'vSDTGRID'},{av:'AV167GXV1',fld:'vGXV1'},{av:'AV68SdtRetornoItem',fld:'vSDTRETORNOITEM'},{av:'AV135DataCredito',fld:'vDATACREDITO'},{av:'AV168GXLvl256',fld:'vGXLVL256'},{av:'AV46TipoLancamentoDescricao',fld:'vTIPOLANCAMENTODESCRICAO'},{av:'AV109CentroCustoDescRec',fld:'vCENTROCUSTODESCREC'},{av:'AV169GXLvl291',fld:'vGXLVL291'},{av:'AV117SnCCusSin',fld:'vSNCCUSSIN'},{av:'AV113NaturezaDescRec',fld:'vNATUREZADESCREC'},{av:'AV170GXLvl316',fld:'vGXLVL316'},{av:'AV118SnNatSin',fld:'vSNNATSIN'},{av:'AV132ContaContabilIdRec',fld:'vCONTACONTABILIDREC'},{av:'AV134ContaContabilNomeRec',fld:'vCONTACONTABILNOMEREC'},{av:'AV171GXLvl342',fld:'vGXLVL342'},{av:'AV47NumLinha',fld:'vNUMLINHA'},{av:'AV172GXV2',fld:'vGXV2'},{av:'AV33SdtGridItem',fld:'vSDTGRIDITEM'},{av:'AV92FilialCxBcoEmpresaId',fld:'vFILIALCXBCOEMPRESAID'},{av:'AV93FilialCxBcoId',fld:'vFILIALCXBCOID'},{av:'AV89TipoBaixaTipoCaixaBanco',fld:'vTIPOBAIXATIPOCAIXABANCO'},{av:'AV173GXLvl366',fld:'vGXLVL366'},{av:'AV174GXLvl392',fld:'vGXLVL392'},{av:'AV90DataAux',fld:'vDATAAUX'},{av:'AV7MsgErro',fld:'vMSGERRO'},{av:'AV175GXLvl414',fld:'vGXLVL414'},{av:'AV176GXLvl459',fld:'vGXLVL459'},{av:'AV177GXLvl471',fld:'vGXLVL471'},{av:'AV178GXLvl499',fld:'vGXLVL499'},{av:'AV43HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV108CentroCustoDescTarifa',fld:'vCENTROCUSTODESCTARIFA'},{av:'AV179GXLvl517',fld:'vGXLVL517'},{av:'AV111NaturezaDescTarifa',fld:'vNATUREZADESCTARIFA'},{av:'AV180GXLvl542',fld:'vGXLVL542'},{av:'AV130ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV128ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV181GXLvl568',fld:'vGXLVL568'},{av:'AV182GXLvl585',fld:'vGXLVL585'},{av:'AV149UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV150NomeTxt',fld:'vNOMETXT'},{av:'AV145OpcoesTxtTela',fld:'vOPCOESTXTTELA'},{av:'AV143ArquivoGrid',fld:'vARQUIVOGRID'},{av:'AV184GXV3',fld:'vGXV3'},{av:'AV146CamposGrid',fld:'vCAMPOSGRID'},{av:'AV204GXV9',fld:'vGXV9'},{av:'AV95QtContas',fld:'vQTCONTAS'},{av:'AV98Desconto',fld:'vDESCONTO'},{av:'AV100Abatimentos',fld:'vABATIMENTOS'},{av:'AV99Acrescimo',fld:'vACRESCIMO'},{av:'AV101Juros',fld:'vJUROS'},{av:'AV103ValorTitulo',fld:'vVALORTITULO'},{av:'AV94ValorPago',fld:'vVALORPAGO'},{av:'AV97ValorTarifa',fld:'vVALORTARIFA'},{av:'AV205GXV10',fld:'vGXV10'},{av:'AV81SdtConta',fld:'vSDTCONTA'},{av:'AV82SnExiste',fld:'vSNEXISTE'},{av:'AV86SnExiData',fld:'vSNEXIDATA'},{av:'AV102ValorConta',fld:'vVALORCONTA'},{av:'AV105DataBanco',fld:'vDATABANCO'},{av:'AV104DataConta',fld:'vDATACONTA'},{av:'AV206GXV11',fld:'vGXV11'},{av:'AV83SdtCxaBcoItem',fld:'vSDTCXABCOITEM'},{av:'AV207GXV12',fld:'vGXV12'},{av:'AV84SdtLanc',fld:'vSDTLANC'},{av:'AV85SdtBaixaConta',fld:'vSDTBAIXACONTA'},{av:'AV131Agrupar',fld:'vAGRUPAR'},{av:'AV112NaturezaIdRec',fld:'vNATUREZAIDREC'},{av:'AV107CentroCustoIdRec',fld:'vCENTROCUSTOIDREC'},{av:'AV126Observacao',fld:'vOBSERVACAO'},{av:'AV120PessoaId',fld:'vPESSOAID'},{av:'AV110NaturezaIdTarifa',fld:'vNATUREZAIDTARIFA'},{av:'AV106CentroCustoIdTarifa',fld:'vCENTROCUSTOIDTARIFA'},{av:'AV42HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV41HistoricoCxaBcoEmpresaId',fld:'vHISTORICOCXABCOEMPRESAID'},{av:'AV45TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'AV44TipoLancamentoEmpresaid',fld:'vTIPOLANCAMENTOEMPRESAID'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV29SdtGrid',fld:'vSDTGRID'}],[{av:'AV201GXV7',fld:'vGXV7'},{av:'AV33SdtGridItem',fld:'vSDTGRIDITEM'},{av:'AV48TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'AV49TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'},{av:'AV52TipoCobrancaId',fld:'vTIPOCOBRANCAID'},{av:'AV53TipoCobrancaDescricao',fld:'vTIPOCOBRANCADESCRICAO'},{av:'AV50TipoContaId',fld:'vTIPOCONTAID'},{av:'AV51TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'},{av:'AV54CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV55CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'}]];
   this.EvtParms["'DIALOG'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV37BmpPrmBai',fld:'vBMPPRMBAI'},{av:'AV38BmpPrmCxB',fld:'vBMPPRMCXB'},{av:'AV39BmpPrmCon',fld:'vBMPPRMCON'},{av:'AV40BmpPrmCob',fld:'vBMPPRMCOB'},{av:'AV23Diretorio',fld:'vDIRETORIO'},{av:'AV30BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'AV19BancoId',fld:'vBANCOID'},{av:'AV20BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV22CedenteSequencia',fld:'vCEDENTESEQUENCIA'},{av:'AV27SnValorDesconto',fld:'vSNVALORDESCONTO'},{av:'AV28SnValorAcrescimo',fld:'vSNVALORACRESCIMO'},{av:'AV135DataCredito',fld:'vDATACREDITO'},{av:'AV25TipoDataBanco',fld:'vTIPODATABANCO'},{av:'AV26TipoDataConta',fld:'vTIPODATACONTA'},{av:'AV29SdtGrid',fld:'vSDTGRID'},{av:'AV77SdtBaixa',fld:'vSDTBAIXA'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'}],[{av:'AV153isCloud',fld:'vISCLOUD'},{av:'AV152DirUpload',fld:'vDIRUPLOAD'},{av:'AV23Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["VBANCOID.ISVALID"] = [[{av:'AV19BancoId',fld:'vBANCOID'},{av:'AV30BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'AV20BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'}],[{av:'AV21BancoNome',fld:'vBANCONOME'},{av:'AV137BAncoAgenciaNome',fld:'vBANCOAGENCIANOME'},{av:'AV22CedenteSequencia',fld:'vCEDENTESEQUENCIA'},{av:'AV136DescSequencia',fld:'vDESCSEQUENCIA'}]];
   this.EvtParms["VBANCOAGENCIAID.ISVALID"] = [[{av:'AV19BancoId',fld:'vBANCOID'},{av:'AV20BancoAgenciaId',fld:'vBANCOAGENCIAID'},{av:'AV30BancoEmpresaId',fld:'vBANCOEMPRESAID'},{av:'A950BancoEmpresaId',fld:'BANCOEMPRESAID'},{av:'A947BancoId',fld:'BANCOID'},{av:'A953BancoAgenciaId',fld:'BANCOAGENCIAID'},{av:'A2772CedenteNoConta',fld:'CEDENTENOCONTA'},{av:'A2761CedenteSequencia',fld:'CEDENTESEQUENCIA'}],[{av:'AV21BancoNome',fld:'vBANCONOME'},{av:'AV137BAncoAgenciaNome',fld:'vBANCOAGENCIANOME'},{av:'AV22CedenteSequencia',fld:'vCEDENTESEQUENCIA'},{av:'AV136DescSequencia',fld:'vDESCSEQUENCIA'}]];
   this.EvtParms["VTIPOBAIXASIGLA.ISVALID"] = [[{av:'A1052TipoBaixaEmpresaId',fld:'TIPOBAIXAEMPRESAID'},{av:'A1049TipoBaixaPagRec',fld:'TIPOBAIXAPAGREC'},{av:'A1053TipoBaixaSigla',fld:'TIPOBAIXASIGLA'},{av:'AV48TipoBaixaSigla',fld:'vTIPOBAIXASIGLA'},{av:'A1054TipoBaixaDescricao',fld:'TIPOBAIXADESCRICAO'}],[{av:'AV209GXLvl1398',fld:'vGXLVL1398'},{av:'AV49TipoBaixaDescricao',fld:'vTIPOBAIXADESCRICAO'}]];
   this.EvtParms["VCAIXABANCOID.ISVALID"] = [[{av:'AV58CaixaBancoEmpresaid',fld:'vCAIXABANCOEMPRESAID'},{av:'AV54CaixaBancoId',fld:'vCAIXABANCOID'}],[{av:'AV55CaixaBancoDescricao',fld:'vCAIXABANCODESCRICAO'}]];
   this.EvtParms["VTIPOCONTAID.ISVALID"] = [[{av:'AV57TipoContaEmpresaid',fld:'vTIPOCONTAEMPRESAID'},{av:'AV50TipoContaId',fld:'vTIPOCONTAID'}],[{av:'AV51TipoContaDescricao',fld:'vTIPOCONTADESCRICAO'}]];
   this.EvtParms["VTIPOCOBRANCAID.ISVALID"] = [[{av:'AV56TipoCobrancaEmpresaid',fld:'vTIPOCOBRANCAEMPRESAID'},{av:'AV52TipoCobrancaId',fld:'vTIPOCOBRANCAID'}],[{av:'AV53TipoCobrancaDescricao',fld:'vTIPOCOBRANCADESCRICAO'}]];
   this.setPrompt("IMGCCONT1", [86,85]);
   this.setPrompt("PROMPT_BANCOID", [33]);
   this.setPrompt("PROMPT_BANCOAGENCIAID", [37]);
   this.setPrompt("PROMPT_CENTROCUSTOIDREC", [79]);
   this.setPrompt("PROMPT_TIPOLANCAMENTOID", [111]);
   this.setPrompt("PROMPT_NATUREZAIDREC", [117]);
   this.setPrompt("PROMPT_HISTORICOCXABCOID", [146]);
   this.setPrompt("IMGCCONT2", [165,164]);
   this.setPrompt("PROMPT_CENTROCUSTOIDTARIFA", [152]);
   this.setPrompt("PROMPT_NATUREZAIDTARIFA", [158]);
   this.setPrompt("PROMPT_PESSOAID", [172]);
   this.setPrompt("&BMPPRMCON", [131]);
   this.setPrompt("&BMPPRMCOB", [134]);
   this.setPrompt("&BMPPRMCXB", [128]);
   this.setPrompt("&BMPPRMBAI", [125,203]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV60Sim", "vSIM", 0, "char");
   this.setVCMap("AV61ContaPagRecPagRec", "vCONTAPAGRECPAGREC", 0, "char");
   this.setVCMap("AV29SdtGrid", "vSDTGRID", 0, "CollTipoBaixaRetorno.TipoBaixaRetornoItem");
   this.setVCMap("AV77SdtBaixa", "vSDTBAIXA", 0, "CollRegRetorno.RegRetornoItem");
   this.setVCMap("A950BancoEmpresaId", "BANCOEMPRESAID", 0, "char");
   this.setVCMap("A947BancoId", "BANCOID", 0, "int");
   this.setVCMap("A953BancoAgenciaId", "BANCOAGENCIAID", 0, "int");
   this.setVCMap("A2772CedenteNoConta", "CEDENTENOCONTA", 0, "int");
   this.setVCMap("A2761CedenteSequencia", "CEDENTESEQUENCIA", 0, "int");
   this.setVCMap("AV29SdtGrid", "vSDTGRID", 0, "CollTipoBaixaRetorno.TipoBaixaRetornoItem");
   this.setVCMap("AV77SdtBaixa", "vSDTBAIXA", 0, "CollRegRetorno.RegRetornoItem");
   this.setVCMap("A950BancoEmpresaId", "BANCOEMPRESAID", 0, "char");
   this.setVCMap("A947BancoId", "BANCOID", 0, "int");
   this.setVCMap("A953BancoAgenciaId", "BANCOAGENCIAID", 0, "int");
   this.setVCMap("A2772CedenteNoConta", "CEDENTENOCONTA", 0, "int");
   this.setVCMap("A2761CedenteSequencia", "CEDENTESEQUENCIA", 0, "int");
   Grid1Container.addRefreshingVar({rfrVar:"AV37BmpPrmBai", rfrProp:"Value", gxAttId:"Bmpprmbai"});
   Grid1Container.addRefreshingVar({rfrVar:"AV38BmpPrmCxB", rfrProp:"Value", gxAttId:"Bmpprmcxb"});
   Grid1Container.addRefreshingVar({rfrVar:"AV39BmpPrmCon", rfrProp:"Value", gxAttId:"Bmpprmcon"});
   Grid1Container.addRefreshingVar({rfrVar:"AV40BmpPrmCob", rfrProp:"Value", gxAttId:"Bmpprmcob"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[54]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[206]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[33]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[37]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[74]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[69]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[201]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[59]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[64]);
   Grid1Container.addRefreshingVar({rfrVar:"AV29SdtGrid"});
   Grid1Container.addRefreshingVar({rfrVar:"AV77SdtBaixa"});
   Grid1Container.addRefreshingVar({rfrVar:"A950BancoEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A947BancoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A953BancoAgenciaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2772CedenteNoConta"});
   Grid1Container.addRefreshingVar({rfrVar:"A2761CedenteSequencia"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarretorno());

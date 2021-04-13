/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 7:12:48.47
*/
gx.evt.autoSkip = false;
gx.define('hgeracaospedfiscal', false, function () {
   this.ServerClass =  "hgeracaospedfiscal" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV141ProcessoRotina=gx.fn.getControlValue("vPROCESSOROTINA") ;
   };
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoinventario=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOINVENTARIO");
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
   };
   this.s132_client=function()
   {
      gx.fn.setCtrlProperty("vFILIALID","Enabled", 1 );
      gx.fn.setCtrlProperty("vTPARQUIVO","Enabled", 1 );
      gx.fn.setCtrlProperty("vMESREF","Enabled", 1 );
      gx.fn.setCtrlProperty("vANOREF","Enabled", 1 );
      gx.fn.setCtrlProperty("vLAYOUTARQUIVO","Enabled", 1 );
      gx.fn.setCtrlProperty("vTPAPURACAOIPI","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP1","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP2","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP3","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP4","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP5","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP6","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP7","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP8","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP9","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP10","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP11","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP12","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP13","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP14","Enabled", 1 );
      gx.fn.setCtrlProperty("vCFOP15","Enabled", 1 );
      gx.fn.setCtrlProperty("vSNINVENTARIO","Enabled", 1 );
      gx.fn.setCtrlProperty("vTPSALDO","Enabled", 1 );
      gx.fn.setCtrlProperty("vMESSALDO","Enabled", 1 );
      gx.fn.setCtrlProperty("vANOSALDO","Enabled", 1 );
      gx.fn.setCtrlProperty("vDTSALDO","Enabled", 1 );
      gx.fn.setCtrlProperty("vPRECOINVENTARIO","Enabled", 1 );
      gx.fn.setCtrlProperty("vMOTIVOINVENTARIO","Enabled", 1 );
      gx.fn.setCtrlProperty("vOBRIGACAOICMS","Enabled", 1 );
      gx.fn.setCtrlProperty("vCCONTABILMERCADORIA","Enabled", 1 );
      gx.fn.setCtrlProperty("vOBRIGACAOICMSST","Enabled", 1 );
      gx.fn.setCtrlProperty("vRECEITAICMS","Enabled", 1 );
      gx.fn.setCtrlProperty("vRECEITAICMSST","Enabled", 1 );
      gx.fn.setCtrlProperty("vDIAVENC","Enabled", 1 );
      gx.fn.setCtrlProperty("vDIAVENCIMENTO","Enabled", 1 );
      gx.fn.setCtrlProperty("vRECEITA","Enabled", 1 );
      gx.fn.setCtrlProperty("vOBRIGACAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vFECHARMESESTOQUE","Enabled", 1 );
      gx.fn.setCtrlProperty("vMOTIVORESTITUICAO","Enabled", 1 );
      gx.fn.setCtrlProperty("vRESPONSAVELRETENCAO","Enabled", 1 );
      gx.fn.setCtrlProperty("BUTTON1","Enabled", 1 );
      gx.fn.setCtrlProperty("BUTTON2","Enabled", 1 );
      gx.fn.setCtrlProperty("PROMPT1","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT2","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT3","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT4","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT5","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT6","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT7","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT8","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT9","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT10","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT11","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT12","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT13","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT14","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT15","Visible", 1 );
      gx.fn.setCtrlProperty("PROMPT16","Visible", 1 );
   };
   this.s162_client=function()
   {
      gx.fn.setCtrlProperty("vFILIALID","Enabled", 0 );
      gx.fn.setCtrlProperty("vTPARQUIVO","Enabled", 0 );
      gx.fn.setCtrlProperty("vMESREF","Enabled", 0 );
      gx.fn.setCtrlProperty("vANOREF","Enabled", 0 );
      gx.fn.setCtrlProperty("vLAYOUTARQUIVO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTPAPURACAOIPI","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP1","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP2","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP3","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP4","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP5","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP6","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP7","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP8","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP9","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP10","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP11","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP12","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP13","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP14","Enabled", 0 );
      gx.fn.setCtrlProperty("vCFOP15","Enabled", 0 );
      gx.fn.setCtrlProperty("vSNINVENTARIO","Enabled", 0 );
      gx.fn.setCtrlProperty("vTPSALDO","Enabled", 0 );
      gx.fn.setCtrlProperty("vMESSALDO","Enabled", 0 );
      gx.fn.setCtrlProperty("vANOSALDO","Enabled", 0 );
      gx.fn.setCtrlProperty("vDTSALDO","Enabled", 0 );
      gx.fn.setCtrlProperty("vPRECOINVENTARIO","Enabled", 0 );
      gx.fn.setCtrlProperty("vMOTIVOINVENTARIO","Enabled", 0 );
      gx.fn.setCtrlProperty("vOBRIGACAOICMS","Enabled", 0 );
      gx.fn.setCtrlProperty("vCCONTABILMERCADORIA","Enabled", 0 );
      gx.fn.setCtrlProperty("vOBRIGACAOICMSST","Enabled", 0 );
      gx.fn.setCtrlProperty("vRECEITAICMS","Enabled", 0 );
      gx.fn.setCtrlProperty("vRECEITAICMSST","Enabled", 0 );
      gx.fn.setCtrlProperty("vDIAVENC","Enabled", 0 );
      gx.fn.setCtrlProperty("vFECHARMESESTOQUE","Enabled", 0 );
      gx.fn.setCtrlProperty("vDIAVENCIMENTO","Enabled", 0 );
      gx.fn.setCtrlProperty("vRECEITA","Enabled", 0 );
      gx.fn.setCtrlProperty("vOBRIGACAO","Enabled", 0 );
      gx.fn.setCtrlProperty("vMOTIVORESTITUICAO","Enabled", 0 );
      gx.fn.setCtrlProperty("vRESPONSAVELRETENCAO","Enabled", 0 );
      gx.fn.setCtrlProperty("BUTTON1","Enabled", 0 );
      gx.fn.setCtrlProperty("BUTTON2","Enabled", 0 );
      gx.fn.setCtrlProperty("PROMPT1","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT2","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT3","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT4","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT5","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT6","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT7","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT8","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT9","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT10","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT11","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT12","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT13","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT14","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT15","Visible", 0 );
      gx.fn.setCtrlProperty("PROMPT16","Visible", 0 );
   };
   this.e111112_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e141112_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e121112_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e171112_client=function()
   {
      this.executeServerEvent("VTPSALDO.CLICK", true, null, false, true);
   };
   this.e181112_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,12,14,15,16,18,19,22,24,25,26,30,32,33,34,35,36,40,42,46,48,49,55,60,62,63,66,67,70,71,74,75,78,79,87,88,91,92,95,96,99,100,103,104,112,113,116,117,120,121,124,125,128,129,134,137,140,142,143,146,148,149,152,154,156,159,162,167,171,173,177,179,180,181,182,186,188,189,193,195,199,201,205,209,211,215,217,221,223,227,229,233,235,237,238,241,243,246,248,251,253,256,258,261,263,279,283,287,293,297,298,301,302,303,304,305,307,308];
   this.GXLastCtrlId =308;
   this.TABSContainer = gx.uc.getNew(this, 5, 0, "TabCss", "TABSContainer", "Tabs");
   var TABSContainer = this.TABSContainer;
   TABSContainer.setProp("Width", "Width", "100", "str");
   TABSContainer.setProp("Height", "Height", "100", "str");
   TABSContainer.addV2CFunction('AV157Tab', "vTAB", 'SetData');
   TABSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV157Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV157Tab); });
   TABSContainer.setProp("Position", "Position", 1, "num");
   TABSContainer.setProp("CookieId", "Cookieid", "hgeracaospedfiscal_tabcss", "str");
   TABSContainer.setProp("Visible", "Visible", true, "bool");
   TABSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABSContainer.setProp("Class", "Class", "", "char");
   TABSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABSContainer);
   this.TIMER1Container = gx.uc.getNew(this, 155, 14, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e121112_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[2]={fld:"TABLE7",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV70FilialId",gxold:"OV70FilialId",gxvar:"AV70FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV70FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV70FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV70FilialId,0)},c2v:function(){gx.O.AV70FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"PROMPT16",grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV71FilialNome",gxold:"OV71FilialNome",gxvar:"AV71FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71FilialNome=Value},v2z:function(Value){gx.O.ZV71FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV71FilialNome,0)},c2v:function(){gx.O.AV71FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFECHARMESESTOQUE",gxz:"ZV148FecharMesEstoque",gxold:"OV148FecharMesEstoque",gxvar:"AV148FecharMesEstoque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV148FecharMesEstoque=Value},v2z:function(Value){gx.O.ZV148FecharMesEstoque=Value},v2c:function(){gx.fn.setCheckBoxValue("vFECHARMESESTOQUE",gx.O.AV148FecharMesEstoque,"S")},c2v:function(){gx.O.AV148FecharMesEstoque=this.val()},val:function(){return gx.fn.getControlValue("vFECHARMESESTOQUE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[19]={fld:"TABLE4",grid:0};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPARQUIVO",gxz:"ZV72TpArquivo",gxold:"OV72TpArquivo",gxvar:"AV72TpArquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV72TpArquivo=Value},v2z:function(Value){gx.O.ZV72TpArquivo=Value},v2c:function(){gx.fn.setComboBoxValue("vTPARQUIVO",gx.O.AV72TpArquivo)},c2v:function(){gx.O.AV72TpArquivo=this.val()},val:function(){return gx.fn.getControlValue("vTPARQUIVO")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOENTSAI",gxz:"ZV112TipoEntSai",gxold:"OV112TipoEntSai",gxvar:"AV112TipoEntSai",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112TipoEntSai=Value},v2z:function(Value){gx.O.ZV112TipoEntSai=Value},v2c:function(){gx.fn.setControlValue("vTIPOENTSAI",gx.O.AV112TipoEntSai,0)},c2v:function(){gx.O.AV112TipoEntSai=this.val()},val:function(){return gx.fn.getControlValue("vTIPOENTSAI")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPINI",gxz:"ZV113CfopIni",gxold:"OV113CfopIni",gxvar:"AV113CfopIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113CfopIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV113CfopIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOPINI",gx.O.AV113CfopIni,0)},c2v:function(){gx.O.AV113CfopIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOPINI",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESREF",gxz:"ZV73MesRef",gxold:"OV73MesRef",gxvar:"AV73MesRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73MesRef=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV73MesRef=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESREF",gx.O.AV73MesRef,0)},c2v:function(){gx.O.AV73MesRef=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESREF",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOREF",gxz:"ZV74AnoRef",gxold:"OV74AnoRef",gxvar:"AV74AnoRef",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74AnoRef=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV74AnoRef=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOREF",gx.O.AV74AnoRef,0)},c2v:function(){gx.O.AV74AnoRef=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOREF",'.')},nac:gx.falseFn};
   GXValidFnc[35]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV105FilialEmpresaId",gxold:"OV105FilialEmpresaId",gxvar:"AV105FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV105FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV105FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV105FilialEmpresaId,0)},c2v:function(){gx.O.AV105FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoempresaid,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV111PrecoEmpresaId",gxold:"OV111PrecoEmpresaId",gxvar:"AV111PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111PrecoEmpresaId=Value},v2z:function(Value){gx.O.ZV111PrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV111PrecoEmpresaId,0)},c2v:function(){gx.O.AV111PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLAYOUTARQUIVO",gxz:"ZV75LayoutArquivo",gxold:"OV75LayoutArquivo",gxvar:"AV75LayoutArquivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75LayoutArquivo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV75LayoutArquivo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLAYOUTARQUIVO",gx.O.AV75LayoutArquivo,0)},c2v:function(){gx.O.AV75LayoutArquivo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLAYOUTARQUIVO",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPAPURACAOIPI",gxz:"ZV76TpApuracaoIPI",gxold:"OV76TpApuracaoIPI",gxvar:"AV76TpApuracaoIPI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV76TpApuracaoIPI=Value},v2z:function(Value){gx.O.ZV76TpApuracaoIPI=Value},v2c:function(){gx.fn.setComboBoxValue("vTPAPURACAOIPI",gx.O.AV76TpApuracaoIPI)},c2v:function(){gx.O.AV76TpApuracaoIPI=this.val()},val:function(){return gx.fn.getControlValue("vTPAPURACAOIPI")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV103ProcessoId",gxold:"OV103ProcessoId",gxvar:"AV103ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV103ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV103ProcessoId,0)},c2v:function(){gx.O.AV103ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TABLE11",grid:0};
   GXValidFnc[60]={fld:"TEXTBLOCK63", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP1",gxz:"ZV77Cfop1",gxold:"OV77Cfop1",gxvar:"AV77Cfop1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV77Cfop1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV77Cfop1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP1",gx.O.AV77Cfop1,0)},c2v:function(){gx.O.AV77Cfop1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP1",'.')},nac:gx.falseFn};
   GXValidFnc[63]={fld:"PROMPT1",grid:0};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP2",gxz:"ZV78Cfop2",gxold:"OV78Cfop2",gxvar:"AV78Cfop2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78Cfop2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV78Cfop2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP2",gx.O.AV78Cfop2,0)},c2v:function(){gx.O.AV78Cfop2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP2",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"PROMPT2",grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP3",gxz:"ZV79Cfop3",gxold:"OV79Cfop3",gxvar:"AV79Cfop3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79Cfop3=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV79Cfop3=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP3",gx.O.AV79Cfop3,0)},c2v:function(){gx.O.AV79Cfop3=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP3",'.')},nac:gx.falseFn};
   GXValidFnc[71]={fld:"PROMPT3",grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP4",gxz:"ZV80Cfop4",gxold:"OV80Cfop4",gxvar:"AV80Cfop4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV80Cfop4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV80Cfop4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP4",gx.O.AV80Cfop4,0)},c2v:function(){gx.O.AV80Cfop4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP4",'.')},nac:gx.falseFn};
   GXValidFnc[75]={fld:"PROMPT4",grid:0};
   GXValidFnc[78]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP5",gxz:"ZV81Cfop5",gxold:"OV81Cfop5",gxvar:"AV81Cfop5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81Cfop5=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81Cfop5=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP5",gx.O.AV81Cfop5,0)},c2v:function(){gx.O.AV81Cfop5=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP5",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"PROMPT5",grid:0};
   GXValidFnc[87]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP6",gxz:"ZV82Cfop6",gxold:"OV82Cfop6",gxvar:"AV82Cfop6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82Cfop6=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV82Cfop6=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP6",gx.O.AV82Cfop6,0)},c2v:function(){gx.O.AV82Cfop6=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP6",'.')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"PROMPT6",grid:0};
   GXValidFnc[91]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP7",gxz:"ZV83Cfop7",gxold:"OV83Cfop7",gxvar:"AV83Cfop7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83Cfop7=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83Cfop7=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP7",gx.O.AV83Cfop7,0)},c2v:function(){gx.O.AV83Cfop7=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP7",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"PROMPT7",grid:0};
   GXValidFnc[95]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP8",gxz:"ZV84Cfop8",gxold:"OV84Cfop8",gxvar:"AV84Cfop8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84Cfop8=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV84Cfop8=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP8",gx.O.AV84Cfop8,0)},c2v:function(){gx.O.AV84Cfop8=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP8",'.')},nac:gx.falseFn};
   GXValidFnc[96]={fld:"PROMPT8",grid:0};
   GXValidFnc[99]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP9",gxz:"ZV85Cfop9",gxold:"OV85Cfop9",gxvar:"AV85Cfop9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85Cfop9=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV85Cfop9=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP9",gx.O.AV85Cfop9,0)},c2v:function(){gx.O.AV85Cfop9=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP9",'.')},nac:gx.falseFn};
   GXValidFnc[100]={fld:"PROMPT9",grid:0};
   GXValidFnc[103]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP10",gxz:"ZV86Cfop10",gxold:"OV86Cfop10",gxvar:"AV86Cfop10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86Cfop10=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86Cfop10=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP10",gx.O.AV86Cfop10,0)},c2v:function(){gx.O.AV86Cfop10=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP10",'.')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"PROMPT10",grid:0};
   GXValidFnc[112]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP11",gxz:"ZV87Cfop11",gxold:"OV87Cfop11",gxvar:"AV87Cfop11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87Cfop11=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV87Cfop11=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP11",gx.O.AV87Cfop11,0)},c2v:function(){gx.O.AV87Cfop11=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP11",'.')},nac:gx.falseFn};
   GXValidFnc[113]={fld:"PROMPT11",grid:0};
   GXValidFnc[116]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP12",gxz:"ZV88Cfop12",gxold:"OV88Cfop12",gxvar:"AV88Cfop12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88Cfop12=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV88Cfop12=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP12",gx.O.AV88Cfop12,0)},c2v:function(){gx.O.AV88Cfop12=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP12",'.')},nac:gx.falseFn};
   GXValidFnc[117]={fld:"PROMPT12",grid:0};
   GXValidFnc[120]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP13",gxz:"ZV89Cfop13",gxold:"OV89Cfop13",gxvar:"AV89Cfop13",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89Cfop13=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV89Cfop13=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP13",gx.O.AV89Cfop13,0)},c2v:function(){gx.O.AV89Cfop13=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP13",'.')},nac:gx.falseFn};
   GXValidFnc[121]={fld:"PROMPT13",grid:0};
   GXValidFnc[124]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP14",gxz:"ZV90Cfop14",gxold:"OV90Cfop14",gxvar:"AV90Cfop14",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90Cfop14=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV90Cfop14=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP14",gx.O.AV90Cfop14,0)},c2v:function(){gx.O.AV90Cfop14=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP14",'.')},nac:gx.falseFn};
   GXValidFnc[125]={fld:"PROMPT14",grid:0};
   GXValidFnc[128]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCFOP15",gxz:"ZV91Cfop15",gxold:"OV91Cfop15",gxvar:"AV91Cfop15",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91Cfop15=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV91Cfop15=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFOP15",gx.O.AV91Cfop15,0)},c2v:function(){gx.O.AV91Cfop15=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFOP15",'.')},nac:gx.falseFn};
   GXValidFnc[129]={fld:"PROMPT15",grid:0};
   GXValidFnc[134]={fld:"TABLE5",grid:0};
   GXValidFnc[137]={fld:"TAB3",grid:0};
   GXValidFnc[140]={fld:"IMAGE2",grid:0};
   GXValidFnc[142]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[143]={fld:"TAB4",grid:0};
   GXValidFnc[146]={fld:"IMGERRO",grid:0};
   GXValidFnc[148]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[149]={fld:"TAB5",grid:0};
   GXValidFnc[152]={fld:"IMGPROC",grid:0};
   GXValidFnc[154]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[156]={fld:"TAB2",grid:0};
   GXValidFnc[159]={fld:"TABLE6",grid:0};
   GXValidFnc[162]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[167]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNINVENTARIO",gxz:"ZV92SnInventario",gxold:"OV92SnInventario",gxvar:"AV92SnInventario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV92SnInventario=Value},v2z:function(Value){gx.O.ZV92SnInventario=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNINVENTARIO",gx.O.AV92SnInventario,"S")},c2v:function(){gx.O.AV92SnInventario=this.val()},val:function(){return gx.fn.getControlValue("vSNINVENTARIO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[171]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[173]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPSALDO",gxz:"ZV137TpSaldo",gxold:"OV137TpSaldo",gxvar:"AV137TpSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV137TpSaldo=Value},v2z:function(Value){gx.O.ZV137TpSaldo=Value},v2c:function(){gx.fn.setComboBoxValue("vTPSALDO",gx.O.AV137TpSaldo)},c2v:function(){gx.O.AV137TpSaldo=this.val()},val:function(){return gx.fn.getControlValue("vTPSALDO")},nac:gx.falseFn};
   GXValidFnc[177]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[179]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMESSALDO",gxz:"ZV93MesSaldo",gxold:"OV93MesSaldo",gxvar:"AV93MesSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93MesSaldo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93MesSaldo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMESSALDO",gx.O.AV93MesSaldo,0)},c2v:function(){gx.O.AV93MesSaldo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMESSALDO",'.')},nac:gx.falseFn};
   GXValidFnc[180]={fld:"TXTBARRA", format:0,grid:0};
   GXValidFnc[181]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vANOSALDO",gxz:"ZV94AnoSaldo",gxold:"OV94AnoSaldo",gxvar:"AV94AnoSaldo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94AnoSaldo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV94AnoSaldo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vANOSALDO",gx.O.AV94AnoSaldo,0)},c2v:function(){gx.O.AV94AnoSaldo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vANOSALDO",'.')},nac:gx.falseFn};
   GXValidFnc[182]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTSALDO",gxz:"ZV139DtSaldo",gxold:"OV139DtSaldo",gxvar:"AV139DtSaldo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV139DtSaldo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV139DtSaldo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTSALDO",gx.O.AV139DtSaldo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV139DtSaldo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTSALDO")},nac:gx.falseFn};
   this.declareDomainHdlr( 182 , function() {
   });
   GXValidFnc[186]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[188]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoinventario,isvalid:null,rgrid:[],fld:"vPRECOINVENTARIO",gxz:"ZV95PrecoInventario",gxold:"OV95PrecoInventario",gxvar:"AV95PrecoInventario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95PrecoInventario=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV95PrecoInventario=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOINVENTARIO",gx.O.AV95PrecoInventario,0)},c2v:function(){gx.O.AV95PrecoInventario=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOINVENTARIO",'.')},nac:gx.falseFn};
   GXValidFnc[189]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV108PrecoDescricao",gxold:"OV108PrecoDescricao",gxvar:"AV108PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108PrecoDescricao=Value},v2z:function(Value){gx.O.ZV108PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV108PrecoDescricao,0)},c2v:function(){gx.O.AV108PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[193]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[195]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOTIVOINVENTARIO",gxz:"ZV96MotivoInventario",gxold:"OV96MotivoInventario",gxvar:"AV96MotivoInventario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV96MotivoInventario=Value},v2z:function(Value){gx.O.ZV96MotivoInventario=Value},v2c:function(){gx.fn.setComboBoxValue("vMOTIVOINVENTARIO",gx.O.AV96MotivoInventario)},c2v:function(){gx.O.AV96MotivoInventario=this.val()},val:function(){return gx.fn.getControlValue("vMOTIVOINVENTARIO")},nac:gx.falseFn};
   GXValidFnc[199]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[201]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCONTABILMERCADORIA",gxz:"ZV159CContabilMercadoria",gxold:"OV159CContabilMercadoria",gxvar:"AV159CContabilMercadoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV159CContabilMercadoria=Value},v2z:function(Value){gx.O.ZV159CContabilMercadoria=Value},v2c:function(){gx.fn.setControlValue("vCCONTABILMERCADORIA",gx.O.AV159CContabilMercadoria,0)},c2v:function(){gx.O.AV159CContabilMercadoria=this.val()},val:function(){return gx.fn.getControlValue("vCCONTABILMERCADORIA")},nac:gx.falseFn};
   GXValidFnc[205]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[209]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[211]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBRIGACAOICMS",gxz:"ZV97ObrigacaoICMS",gxold:"OV97ObrigacaoICMS",gxvar:"AV97ObrigacaoICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV97ObrigacaoICMS=Value},v2z:function(Value){gx.O.ZV97ObrigacaoICMS=Value},v2c:function(){gx.fn.setComboBoxValue("vOBRIGACAOICMS",gx.O.AV97ObrigacaoICMS)},c2v:function(){gx.O.AV97ObrigacaoICMS=this.val()},val:function(){return gx.fn.getControlValue("vOBRIGACAOICMS")},nac:gx.falseFn};
   GXValidFnc[215]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[217]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBRIGACAOICMSST",gxz:"ZV98ObrigacaoICMSST",gxold:"OV98ObrigacaoICMSST",gxvar:"AV98ObrigacaoICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV98ObrigacaoICMSST=Value},v2z:function(Value){gx.O.ZV98ObrigacaoICMSST=Value},v2c:function(){gx.fn.setComboBoxValue("vOBRIGACAOICMSST",gx.O.AV98ObrigacaoICMSST)},c2v:function(){gx.O.AV98ObrigacaoICMSST=this.val()},val:function(){return gx.fn.getControlValue("vOBRIGACAOICMSST")},nac:gx.falseFn};
   GXValidFnc[221]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[223]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRECEITAICMS",gxz:"ZV99ReceitaICMS",gxold:"OV99ReceitaICMS",gxvar:"AV99ReceitaICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV99ReceitaICMS=Value},v2z:function(Value){gx.O.ZV99ReceitaICMS=Value},v2c:function(){gx.fn.setControlValue("vRECEITAICMS",gx.O.AV99ReceitaICMS,0)},c2v:function(){gx.O.AV99ReceitaICMS=this.val()},val:function(){return gx.fn.getControlValue("vRECEITAICMS")},nac:gx.falseFn};
   GXValidFnc[227]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[229]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRECEITAICMSST",gxz:"ZV100ReceitaICMSST",gxold:"OV100ReceitaICMSST",gxvar:"AV100ReceitaICMSST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV100ReceitaICMSST=Value},v2z:function(Value){gx.O.ZV100ReceitaICMSST=Value},v2c:function(){gx.fn.setControlValue("vRECEITAICMSST",gx.O.AV100ReceitaICMSST,0)},c2v:function(){gx.O.AV100ReceitaICMSST=this.val()},val:function(){return gx.fn.getControlValue("vRECEITAICMSST")},nac:gx.falseFn};
   GXValidFnc[233]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[235]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAVENC",gxz:"ZV101DiaVenc",gxold:"OV101DiaVenc",gxvar:"AV101DiaVenc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV101DiaVenc=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV101DiaVenc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAVENC",gx.O.AV101DiaVenc,0)},c2v:function(){gx.O.AV101DiaVenc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAVENC",'.')},nac:gx.falseFn};
   GXValidFnc[237]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[238]={fld:"TABLE1",grid:0};
   GXValidFnc[241]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[243]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAVENCIMENTO",gxz:"ZV167DiaVencimento",gxold:"OV167DiaVencimento",gxvar:"AV167DiaVencimento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV167DiaVencimento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV167DiaVencimento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAVENCIMENTO",gx.O.AV167DiaVencimento,0)},c2v:function(){gx.O.AV167DiaVencimento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAVENCIMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[246]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[248]={lvl:0,type:"svchar",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMOTIVORESTITUICAO",gxz:"ZV175MotivoRestituicao",gxold:"OV175MotivoRestituicao",gxvar:"AV175MotivoRestituicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV175MotivoRestituicao=Value},v2z:function(Value){gx.O.ZV175MotivoRestituicao=Value},v2c:function(){gx.fn.setControlValue("vMOTIVORESTITUICAO",gx.O.AV175MotivoRestituicao,0)},c2v:function(){gx.O.AV175MotivoRestituicao=this.val()},val:function(){return gx.fn.getControlValue("vMOTIVORESTITUICAO")},nac:gx.falseFn};
   GXValidFnc[251]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[253]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBRIGACAO",gxz:"ZV168Obrigacao",gxold:"OV168Obrigacao",gxvar:"AV168Obrigacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV168Obrigacao=Value},v2z:function(Value){gx.O.ZV168Obrigacao=Value},v2c:function(){gx.fn.setControlValue("vOBRIGACAO",gx.O.AV168Obrigacao,0)},c2v:function(){gx.O.AV168Obrigacao=this.val()},val:function(){return gx.fn.getControlValue("vOBRIGACAO")},nac:gx.falseFn};
   GXValidFnc[256]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[258]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRESPONSAVELRETENCAO",gxz:"ZV176ResponsavelRetencao",gxold:"OV176ResponsavelRetencao",gxvar:"AV176ResponsavelRetencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV176ResponsavelRetencao=Value},v2z:function(Value){gx.O.ZV176ResponsavelRetencao=Value},v2c:function(){gx.fn.setComboBoxValue("vRESPONSAVELRETENCAO",gx.O.AV176ResponsavelRetencao)},c2v:function(){gx.O.AV176ResponsavelRetencao=this.val()},val:function(){return gx.fn.getControlValue("vRESPONSAVELRETENCAO")},nac:gx.falseFn};
   GXValidFnc[261]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[263]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRECEITA",gxz:"ZV169Receita",gxold:"OV169Receita",gxvar:"AV169Receita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV169Receita=Value},v2z:function(Value){gx.O.ZV169Receita=Value},v2c:function(){gx.fn.setControlValue("vRECEITA",gx.O.AV169Receita,0)},c2v:function(){gx.O.AV169Receita=this.val()},val:function(){return gx.fn.getControlValue("vRECEITA")},nac:gx.falseFn};
   GXValidFnc[279]={fld:"TABLE2",grid:0};
   GXValidFnc[283]={lvl:0,type:"svchar",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNGERABLOCOK",gxz:"ZV172SNGeraBlocoK",gxold:"OV172SNGeraBlocoK",gxvar:"AV172SNGeraBlocoK",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV172SNGeraBlocoK=Value},v2z:function(Value){gx.O.ZV172SNGeraBlocoK=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNGERABLOCOK",gx.O.AV172SNGeraBlocoK,"S")},c2v:function(){gx.O.AV172SNGeraBlocoK=this.val()},val:function(){return gx.fn.getControlValue("vSNGERABLOCOK")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[287]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNARQCONTABILIDADE",gxz:"ZV173SnArqContabilidade",gxold:"OV173SnArqContabilidade",gxvar:"AV173SnArqContabilidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV173SnArqContabilidade=Value},v2z:function(Value){gx.O.ZV173SnArqContabilidade=Value},v2c:function(){gx.fn.setCheckBoxValue("vSNARQCONTABILIDADE",gx.O.AV173SnArqContabilidade,"S")},c2v:function(){gx.O.AV173SnArqContabilidade=this.val()},val:function(){return gx.fn.getControlValue("vSNARQCONTABILIDADE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[293]={fld:"TABLE8",grid:0};
   GXValidFnc[297]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[298]={fld:"JS", format:2,grid:0};
   GXValidFnc[301]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV153Qtde",gxold:"OV153Qtde",gxvar:"AV153Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV153Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV153Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV153Qtde,0)},c2v:function(){gx.O.AV153Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[302]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV103ProcessoId",gxold:"OV103ProcessoId",gxvar:"AV103ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV103ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV103ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV103ProcessoId,0)},c2v:function(){gx.O.AV103ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[303]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV61Diretorio",gxold:"OV61Diretorio",gxvar:"AV61Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61Diretorio=Value},v2z:function(Value){gx.O.ZV61Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV61Diretorio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV61Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 303 , function() {
   });
   GXValidFnc[304]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEABSOLUTO",gxz:"ZV11NomeAbsoluto",gxold:"OV11NomeAbsoluto",gxvar:"AV11NomeAbsoluto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11NomeAbsoluto=Value},v2z:function(Value){gx.O.ZV11NomeAbsoluto=Value},v2c:function(){gx.fn.setControlValue("vNOMEABSOLUTO",gx.O.AV11NomeAbsoluto,0)},c2v:function(){gx.O.AV11NomeAbsoluto=this.val()},val:function(){return gx.fn.getControlValue("vNOMEABSOLUTO")},nac:gx.falseFn};
   GXValidFnc[305]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMERELATIVO",gxz:"ZV12NomeRelativo",gxold:"OV12NomeRelativo",gxvar:"AV12NomeRelativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12NomeRelativo=Value},v2z:function(Value){gx.O.ZV12NomeRelativo=Value},v2c:function(){gx.fn.setControlValue("vNOMERELATIVO",gx.O.AV12NomeRelativo,0)},c2v:function(){gx.O.AV12NomeRelativo=this.val()},val:function(){return gx.fn.getControlValue("vNOMERELATIVO")},nac:gx.falseFn};
   GXValidFnc[307]={fld:"BTNHELP",grid:0};
   GXValidFnc[308]={fld:"PROMPT_PRECOINVENTARIO",grid:0};
   this.AV70FilialId = 0 ;
   this.ZV70FilialId = 0 ;
   this.OV70FilialId = 0 ;
   this.AV71FilialNome = "" ;
   this.ZV71FilialNome = "" ;
   this.OV71FilialNome = "" ;
   this.AV148FecharMesEstoque = "" ;
   this.ZV148FecharMesEstoque = "" ;
   this.OV148FecharMesEstoque = "" ;
   this.AV72TpArquivo = "" ;
   this.ZV72TpArquivo = "" ;
   this.OV72TpArquivo = "" ;
   this.AV112TipoEntSai = "" ;
   this.ZV112TipoEntSai = "" ;
   this.OV112TipoEntSai = "" ;
   this.AV113CfopIni = 0 ;
   this.ZV113CfopIni = 0 ;
   this.OV113CfopIni = 0 ;
   this.AV73MesRef = 0 ;
   this.ZV73MesRef = 0 ;
   this.OV73MesRef = 0 ;
   this.AV74AnoRef = 0 ;
   this.ZV74AnoRef = 0 ;
   this.OV74AnoRef = 0 ;
   this.AV105FilialEmpresaId = "" ;
   this.ZV105FilialEmpresaId = "" ;
   this.OV105FilialEmpresaId = "" ;
   this.AV111PrecoEmpresaId = "" ;
   this.ZV111PrecoEmpresaId = "" ;
   this.OV111PrecoEmpresaId = "" ;
   this.AV75LayoutArquivo = 0 ;
   this.ZV75LayoutArquivo = 0 ;
   this.OV75LayoutArquivo = 0 ;
   this.AV76TpApuracaoIPI = "" ;
   this.ZV76TpApuracaoIPI = "" ;
   this.OV76TpApuracaoIPI = "" ;
   this.AV103ProcessoId = 0 ;
   this.ZV103ProcessoId = 0 ;
   this.OV103ProcessoId = 0 ;
   this.AV77Cfop1 = 0 ;
   this.ZV77Cfop1 = 0 ;
   this.OV77Cfop1 = 0 ;
   this.AV78Cfop2 = 0 ;
   this.ZV78Cfop2 = 0 ;
   this.OV78Cfop2 = 0 ;
   this.AV79Cfop3 = 0 ;
   this.ZV79Cfop3 = 0 ;
   this.OV79Cfop3 = 0 ;
   this.AV80Cfop4 = 0 ;
   this.ZV80Cfop4 = 0 ;
   this.OV80Cfop4 = 0 ;
   this.AV81Cfop5 = 0 ;
   this.ZV81Cfop5 = 0 ;
   this.OV81Cfop5 = 0 ;
   this.AV82Cfop6 = 0 ;
   this.ZV82Cfop6 = 0 ;
   this.OV82Cfop6 = 0 ;
   this.AV83Cfop7 = 0 ;
   this.ZV83Cfop7 = 0 ;
   this.OV83Cfop7 = 0 ;
   this.AV84Cfop8 = 0 ;
   this.ZV84Cfop8 = 0 ;
   this.OV84Cfop8 = 0 ;
   this.AV85Cfop9 = 0 ;
   this.ZV85Cfop9 = 0 ;
   this.OV85Cfop9 = 0 ;
   this.AV86Cfop10 = 0 ;
   this.ZV86Cfop10 = 0 ;
   this.OV86Cfop10 = 0 ;
   this.AV87Cfop11 = 0 ;
   this.ZV87Cfop11 = 0 ;
   this.OV87Cfop11 = 0 ;
   this.AV88Cfop12 = 0 ;
   this.ZV88Cfop12 = 0 ;
   this.OV88Cfop12 = 0 ;
   this.AV89Cfop13 = 0 ;
   this.ZV89Cfop13 = 0 ;
   this.OV89Cfop13 = 0 ;
   this.AV90Cfop14 = 0 ;
   this.ZV90Cfop14 = 0 ;
   this.OV90Cfop14 = 0 ;
   this.AV91Cfop15 = 0 ;
   this.ZV91Cfop15 = 0 ;
   this.OV91Cfop15 = 0 ;
   this.AV92SnInventario = "" ;
   this.ZV92SnInventario = "" ;
   this.OV92SnInventario = "" ;
   this.AV137TpSaldo = "" ;
   this.ZV137TpSaldo = "" ;
   this.OV137TpSaldo = "" ;
   this.AV93MesSaldo = 0 ;
   this.ZV93MesSaldo = 0 ;
   this.OV93MesSaldo = 0 ;
   this.AV94AnoSaldo = 0 ;
   this.ZV94AnoSaldo = 0 ;
   this.OV94AnoSaldo = 0 ;
   this.AV139DtSaldo = gx.date.nullDate() ;
   this.ZV139DtSaldo = gx.date.nullDate() ;
   this.OV139DtSaldo = gx.date.nullDate() ;
   this.AV95PrecoInventario = 0 ;
   this.ZV95PrecoInventario = 0 ;
   this.OV95PrecoInventario = 0 ;
   this.AV108PrecoDescricao = "" ;
   this.ZV108PrecoDescricao = "" ;
   this.OV108PrecoDescricao = "" ;
   this.AV96MotivoInventario = "" ;
   this.ZV96MotivoInventario = "" ;
   this.OV96MotivoInventario = "" ;
   this.AV159CContabilMercadoria = "" ;
   this.ZV159CContabilMercadoria = "" ;
   this.OV159CContabilMercadoria = "" ;
   this.AV97ObrigacaoICMS = "" ;
   this.ZV97ObrigacaoICMS = "" ;
   this.OV97ObrigacaoICMS = "" ;
   this.AV98ObrigacaoICMSST = "" ;
   this.ZV98ObrigacaoICMSST = "" ;
   this.OV98ObrigacaoICMSST = "" ;
   this.AV99ReceitaICMS = "" ;
   this.ZV99ReceitaICMS = "" ;
   this.OV99ReceitaICMS = "" ;
   this.AV100ReceitaICMSST = "" ;
   this.ZV100ReceitaICMSST = "" ;
   this.OV100ReceitaICMSST = "" ;
   this.AV101DiaVenc = 0 ;
   this.ZV101DiaVenc = 0 ;
   this.OV101DiaVenc = 0 ;
   this.AV167DiaVencimento = 0 ;
   this.ZV167DiaVencimento = 0 ;
   this.OV167DiaVencimento = 0 ;
   this.AV175MotivoRestituicao = "" ;
   this.ZV175MotivoRestituicao = "" ;
   this.OV175MotivoRestituicao = "" ;
   this.AV168Obrigacao = "" ;
   this.ZV168Obrigacao = "" ;
   this.OV168Obrigacao = "" ;
   this.AV176ResponsavelRetencao = "" ;
   this.ZV176ResponsavelRetencao = "" ;
   this.OV176ResponsavelRetencao = "" ;
   this.AV169Receita = "" ;
   this.ZV169Receita = "" ;
   this.OV169Receita = "" ;
   this.AV172SNGeraBlocoK = "" ;
   this.ZV172SNGeraBlocoK = "" ;
   this.OV172SNGeraBlocoK = "" ;
   this.AV173SnArqContabilidade = "" ;
   this.ZV173SnArqContabilidade = "" ;
   this.OV173SnArqContabilidade = "" ;
   this.AV153Qtde = 0 ;
   this.ZV153Qtde = 0 ;
   this.OV153Qtde = 0 ;
   this.AV61Diretorio = "" ;
   this.ZV61Diretorio = "" ;
   this.OV61Diretorio = "" ;
   this.AV11NomeAbsoluto = "" ;
   this.ZV11NomeAbsoluto = "" ;
   this.OV11NomeAbsoluto = "" ;
   this.AV12NomeRelativo = "" ;
   this.ZV12NomeRelativo = "" ;
   this.OV12NomeRelativo = "" ;
   this.AV157Tab = [ ] ;
   this.AV70FilialId = 0 ;
   this.AV71FilialNome = "" ;
   this.AV148FecharMesEstoque = "" ;
   this.AV72TpArquivo = "" ;
   this.AV112TipoEntSai = "" ;
   this.AV113CfopIni = 0 ;
   this.AV73MesRef = 0 ;
   this.AV74AnoRef = 0 ;
   this.AV105FilialEmpresaId = "" ;
   this.AV111PrecoEmpresaId = "" ;
   this.AV75LayoutArquivo = 0 ;
   this.AV76TpApuracaoIPI = "" ;
   this.AV103ProcessoId = 0 ;
   this.AV77Cfop1 = 0 ;
   this.AV78Cfop2 = 0 ;
   this.AV79Cfop3 = 0 ;
   this.AV80Cfop4 = 0 ;
   this.AV81Cfop5 = 0 ;
   this.AV82Cfop6 = 0 ;
   this.AV83Cfop7 = 0 ;
   this.AV84Cfop8 = 0 ;
   this.AV85Cfop9 = 0 ;
   this.AV86Cfop10 = 0 ;
   this.AV87Cfop11 = 0 ;
   this.AV88Cfop12 = 0 ;
   this.AV89Cfop13 = 0 ;
   this.AV90Cfop14 = 0 ;
   this.AV91Cfop15 = 0 ;
   this.AV92SnInventario = "" ;
   this.AV137TpSaldo = "" ;
   this.AV93MesSaldo = 0 ;
   this.AV94AnoSaldo = 0 ;
   this.AV139DtSaldo = gx.date.nullDate() ;
   this.AV95PrecoInventario = 0 ;
   this.AV108PrecoDescricao = "" ;
   this.AV96MotivoInventario = "" ;
   this.AV159CContabilMercadoria = "" ;
   this.AV97ObrigacaoICMS = "" ;
   this.AV98ObrigacaoICMSST = "" ;
   this.AV99ReceitaICMS = "" ;
   this.AV100ReceitaICMSST = "" ;
   this.AV101DiaVenc = 0 ;
   this.AV167DiaVencimento = 0 ;
   this.AV175MotivoRestituicao = "" ;
   this.AV168Obrigacao = "" ;
   this.AV176ResponsavelRetencao = "" ;
   this.AV169Receita = "" ;
   this.AV172SNGeraBlocoK = "" ;
   this.AV173SnArqContabilidade = "" ;
   this.AV153Qtde = 0 ;
   this.AV61Diretorio = "" ;
   this.AV11NomeAbsoluto = "" ;
   this.AV12NomeRelativo = "" ;
   this.AV141ProcessoRotina = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A711PrecoDescricao = "" ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1551ErroProcessoDescricao = "" ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.A7404SpedAuxTpRegistro = 0 ;
   this.A7405SpedAuxCodRegistro = "" ;
   this.A3430CFOPCodigo = 0 ;
   this.A1236FilialPerfil = "" ;
   this.A1264FilialAtividade = "" ;
   this.A889SignatarioSpedQualificacao = "" ;
   this.A899EmpresaSignatarioSpedEmpresaId = "" ;
   this.Events = {"e111112_client": ["'FECHAR'", true] ,"e141112_client": ["ENTER", true] ,"e121112_client": ["TIMER1.ELAPSED", true] ,"e171112_client": ["VTPSALDO.CLICK", true] ,"e181112_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV61Diretorio',fld:'vDIRETORIO'},{av:'AV137TpSaldo',fld:'vTPSALDO'}],[{av:'gx.fn.getCtrlProperty("vDTSALDO","Visible")',ctrl:'vDTSALDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vMESSALDO","Visible")',ctrl:'vMESSALDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vANOSALDO","Visible")',ctrl:'vANOSALDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTBARRA","Visible")',ctrl:'TXTBARRA',prop:'Visible'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV70FilialId',fld:'vFILIALID'},{av:'AV73MesRef',fld:'vMESREF'},{av:'AV74AnoRef',fld:'vANOREF'},{av:'AV104TpErro',fld:'vTPERRO'},{av:'AV179Pgmname',fld:'vPGMNAME'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV152CaminhoLogo',fld:'vCAMINHOLOGO'},{av:'AV151ImagemEmpresa',fld:'vIMAGEMEMPRESA'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV118SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'AV119EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV120ApuracaoAjusteEmpresaId',fld:'vAPURACAOAJUSTEEMPRESAID'},{av:'AV105FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV121ApuracaoEmpresaId',fld:'vAPURACAOEMPRESAID'},{av:'AV122ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV123SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'AV124EmpresaSignatarioSpedEmpresaId',fld:'vEMPRESASIGNATARIOSPEDEMPRESAID'},{av:'AV125EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV126UnidadeEmpresaId',fld:'vUNIDADEEMPRESAID'},{av:'AV127ReducaoZEmpresaId',fld:'vREDUCAOZEMPRESAID'},{av:'AV72TpArquivo',fld:'vTPARQUIVO'},{av:'AV75LayoutArquivo',fld:'vLAYOUTARQUIVO'},{av:'AV76TpApuracaoIPI',fld:'vTPAPURACAOIPI'},{av:'AV77Cfop1',fld:'vCFOP1'},{av:'AV78Cfop2',fld:'vCFOP2'},{av:'AV79Cfop3',fld:'vCFOP3'},{av:'AV80Cfop4',fld:'vCFOP4'},{av:'AV81Cfop5',fld:'vCFOP5'},{av:'AV82Cfop6',fld:'vCFOP6'},{av:'AV83Cfop7',fld:'vCFOP7'},{av:'AV84Cfop8',fld:'vCFOP8'},{av:'AV85Cfop9',fld:'vCFOP9'},{av:'AV86Cfop10',fld:'vCFOP10'},{av:'AV87Cfop11',fld:'vCFOP11'},{av:'AV88Cfop12',fld:'vCFOP12'},{av:'AV89Cfop13',fld:'vCFOP13'},{av:'AV90Cfop14',fld:'vCFOP14'},{av:'AV91Cfop15',fld:'vCFOP15'},{av:'AV92SnInventario',fld:'vSNINVENTARIO'},{av:'AV137TpSaldo',fld:'vTPSALDO'},{av:'AV139DtSaldo',fld:'vDTSALDO'},{av:'AV93MesSaldo',fld:'vMESSALDO'},{av:'AV94AnoSaldo',fld:'vANOSALDO'},{av:'AV95PrecoInventario',fld:'vPRECOINVENTARIO'},{av:'AV96MotivoInventario',fld:'vMOTIVOINVENTARIO'},{av:'AV97ObrigacaoICMS',fld:'vOBRIGACAOICMS'},{av:'AV98ObrigacaoICMSST',fld:'vOBRIGACAOICMSST'},{av:'AV99ReceitaICMS',fld:'vRECEITAICMS'},{av:'AV100ReceitaICMSST',fld:'vRECEITAICMSST'},{av:'AV101DiaVenc',fld:'vDIAVENC'},{av:'AV136DtImplantacao',fld:'vDTIMPLANTACAO'},{av:'AV140SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV149ParametroSistemaEmpId',fld:'vPARAMETROSISTEMAEMPID'},{av:'AV148FecharMesEstoque',fld:'vFECHARMESESTOQUE'},{av:'AV159CContabilMercadoria',fld:'vCCONTABILMERCADORIA'},{av:'AV162PartilhaICMSEmpresaId',fld:'vPARTILHAICMSEMPRESAID'},{av:'AV167DiaVencimento',fld:'vDIAVENCIMENTO'},{av:'AV169Receita',fld:'vRECEITA'},{av:'AV168Obrigacao',fld:'vOBRIGACAO'},{av:'AV128ErrDsc',fld:'vERRDSC'},{av:'AV172SNGeraBlocoK',fld:'vSNGERABLOCOK'},{av:'AV173SnArqContabilidade',fld:'vSNARQCONTABILIDADE'},{av:'AV174CatICMSFilial',fld:'vCATICMSFILIAL'},{av:'AV175MotivoRestituicao',fld:'vMOTIVORESTITUICAO'},{av:'AV176ResponsavelRetencao',fld:'vRESPONSAVELRETENCAO'},{av:'A899EmpresaSignatarioSpedEmpresaId',fld:'EMPRESASIGNATARIOSPEDEMPRESAID'},{av:'A889SignatarioSpedQualificacao',fld:'SIGNATARIOSPEDQUALIFICACAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1236FilialPerfil',fld:'FILIALPERFIL'},{av:'A1264FilialAtividade',fld:'FILIALATIVIDADE'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV61Diretorio',fld:'vDIRETORIO'},{av:'AV7MsgErro',fld:'vMSGERRO'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV111PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A711PrecoDescricao',fld:'PRECODESCRICAO'},{av:'A3430CFOPCodigo',fld:'CFOPCODIGO'},{av:'AV117CfopAux',fld:'vCFOPAUX'}],[{av:'AV170isCloud',fld:'vISCLOUD'},{av:'AV61Diretorio',fld:'vDIRETORIO'},{av:'AV166CamRelat',fld:'vCAMRELAT'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB4","Visible")',ctrl:'TAB4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB5","Visible")',ctrl:'TAB5',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV103ProcessoId',fld:'vPROCESSOID'},{av:'AV164ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV176ResponsavelRetencao',fld:'vRESPONSAVELRETENCAO'},{av:'AV175MotivoRestituicao',fld:'vMOTIVORESTITUICAO'},{av:'AV174CatICMSFilial',fld:'vCATICMSFILIAL'},{av:'AV173SnArqContabilidade',fld:'vSNARQCONTABILIDADE'},{av:'AV172SNGeraBlocoK',fld:'vSNGERABLOCOK'},{av:'AV128ErrDsc',fld:'vERRDSC'},{av:'AV168Obrigacao',fld:'vOBRIGACAO'},{av:'AV169Receita',fld:'vRECEITA'},{av:'AV167DiaVencimento',fld:'vDIAVENCIMENTO'},{av:'AV162PartilhaICMSEmpresaId',fld:'vPARTILHAICMSEMPRESAID'},{av:'AV159CContabilMercadoria',fld:'vCCONTABILMERCADORIA'},{av:'AV148FecharMesEstoque',fld:'vFECHARMESESTOQUE'},{av:'AV149ParametroSistemaEmpId',fld:'vPARAMETROSISTEMAEMPID'},{av:'AV140SnLoteUnico',fld:'vSNLOTEUNICO'},{av:'AV136DtImplantacao',fld:'vDTIMPLANTACAO'},{av:'AV101DiaVenc',fld:'vDIAVENC'},{av:'AV100ReceitaICMSST',fld:'vRECEITAICMSST'},{av:'AV99ReceitaICMS',fld:'vRECEITAICMS'},{av:'AV98ObrigacaoICMSST',fld:'vOBRIGACAOICMSST'},{av:'AV97ObrigacaoICMS',fld:'vOBRIGACAOICMS'},{av:'AV96MotivoInventario',fld:'vMOTIVOINVENTARIO'},{av:'AV95PrecoInventario',fld:'vPRECOINVENTARIO'},{av:'AV94AnoSaldo',fld:'vANOSALDO'},{av:'AV93MesSaldo',fld:'vMESSALDO'},{av:'AV139DtSaldo',fld:'vDTSALDO'},{av:'AV137TpSaldo',fld:'vTPSALDO'},{av:'AV92SnInventario',fld:'vSNINVENTARIO'},{av:'AV91Cfop15',fld:'vCFOP15'},{av:'AV90Cfop14',fld:'vCFOP14'},{av:'AV89Cfop13',fld:'vCFOP13'},{av:'AV88Cfop12',fld:'vCFOP12'},{av:'AV87Cfop11',fld:'vCFOP11'},{av:'AV86Cfop10',fld:'vCFOP10'},{av:'AV85Cfop9',fld:'vCFOP9'},{av:'AV84Cfop8',fld:'vCFOP8'},{av:'AV83Cfop7',fld:'vCFOP7'},{av:'AV82Cfop6',fld:'vCFOP6'},{av:'AV81Cfop5',fld:'vCFOP5'},{av:'AV80Cfop4',fld:'vCFOP4'},{av:'AV79Cfop3',fld:'vCFOP3'},{av:'AV78Cfop2',fld:'vCFOP2'},{av:'AV77Cfop1',fld:'vCFOP1'},{av:'AV76TpApuracaoIPI',fld:'vTPAPURACAOIPI'},{av:'AV75LayoutArquivo',fld:'vLAYOUTARQUIVO'},{av:'AV74AnoRef',fld:'vANOREF'},{av:'AV73MesRef',fld:'vMESREF'},{av:'AV72TpArquivo',fld:'vTPARQUIVO'},{av:'AV70FilialId',fld:'vFILIALID'},{av:'AV127ReducaoZEmpresaId',fld:'vREDUCAOZEMPRESAID'},{av:'AV126UnidadeEmpresaId',fld:'vUNIDADEEMPRESAID'},{av:'AV125EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'AV124EmpresaSignatarioSpedEmpresaId',fld:'vEMPRESASIGNATARIOSPEDEMPRESAID'},{av:'AV123SaidaExportacaoEmpresaId',fld:'vSAIDAEXPORTACAOEMPRESAID'},{av:'AV122ProdutoEmpresaId',fld:'vPRODUTOEMPRESAID'},{av:'AV121ApuracaoEmpresaId',fld:'vAPURACAOEMPRESAID'},{av:'AV105FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'AV120ApuracaoAjusteEmpresaId',fld:'vAPURACAOAJUSTEEMPRESAID'},{av:'AV119EntradaEmpresaId',fld:'vENTRADAEMPRESAID'},{av:'AV118SaidaEmpresaId',fld:'vSAIDAEMPRESAID'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV151ImagemEmpresa',fld:'vIMAGEMEMPRESA'},{av:'AV152CaminhoLogo',fld:'vCAMINHOLOGO'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV104TpErro',fld:'vTPERRO'},{av:'AV181GXLvl177',fld:'vGXLVL177'},{av:'AV182GXLvl195',fld:'vGXLVL195'},{av:'AV71FilialNome',fld:'vFILIALNOME'},{av:'AV117CfopAux',fld:'vCFOPAUX'},{av:'AV115DataStr',fld:'vDATASTR'},{av:'AV116DataEstoque',fld:'vDATAESTOQUE'},{av:'AV155Parametro',fld:'vPARAMETRO'},{av:'AV156DataAuxiliar',fld:'vDATAAUXILIAR'},{av:'AV7MsgErro',fld:'vMSGERRO'},{av:'AV183GXLvl597',fld:'vGXLVL597'},{av:'AV108PrecoDescricao',fld:'vPRECODESCRICAO'},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{ctrl:'vTPARQUIVO'},{av:'gx.fn.getCtrlProperty("vMESREF","Enabled")',ctrl:'vMESREF',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANOREF","Enabled")',ctrl:'vANOREF',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLAYOUTARQUIVO","Enabled")',ctrl:'vLAYOUTARQUIVO',prop:'Enabled'},{ctrl:'vTPAPURACAOIPI'},{av:'gx.fn.getCtrlProperty("vCFOP1","Enabled")',ctrl:'vCFOP1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP2","Enabled")',ctrl:'vCFOP2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP3","Enabled")',ctrl:'vCFOP3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP4","Enabled")',ctrl:'vCFOP4',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP5","Enabled")',ctrl:'vCFOP5',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP6","Enabled")',ctrl:'vCFOP6',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP7","Enabled")',ctrl:'vCFOP7',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP8","Enabled")',ctrl:'vCFOP8',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP9","Enabled")',ctrl:'vCFOP9',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP10","Enabled")',ctrl:'vCFOP10',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP11","Enabled")',ctrl:'vCFOP11',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP12","Enabled")',ctrl:'vCFOP12',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP13","Enabled")',ctrl:'vCFOP13',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP14","Enabled")',ctrl:'vCFOP14',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP15","Enabled")',ctrl:'vCFOP15',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNINVENTARIO","Enabled")',ctrl:'vSNINVENTARIO',prop:'Enabled'},{ctrl:'vTPSALDO'},{av:'gx.fn.getCtrlProperty("vMESSALDO","Enabled")',ctrl:'vMESSALDO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANOSALDO","Enabled")',ctrl:'vANOSALDO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTSALDO","Enabled")',ctrl:'vDTSALDO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRECOINVENTARIO","Enabled")',ctrl:'vPRECOINVENTARIO',prop:'Enabled'},{ctrl:'vMOTIVOINVENTARIO'},{ctrl:'vOBRIGACAOICMS'},{av:'gx.fn.getCtrlProperty("vCCONTABILMERCADORIA","Enabled")',ctrl:'vCCONTABILMERCADORIA',prop:'Enabled'},{ctrl:'vOBRIGACAOICMSST'},{av:'gx.fn.getCtrlProperty("vRECEITAICMS","Enabled")',ctrl:'vRECEITAICMS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vRECEITAICMSST","Enabled")',ctrl:'vRECEITAICMSST',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDIAVENC","Enabled")',ctrl:'vDIAVENC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFECHARMESESTOQUE","Enabled")',ctrl:'vFECHARMESESTOQUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDIAVENCIMENTO","Enabled")',ctrl:'vDIAVENCIMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vRECEITA","Enabled")',ctrl:'vRECEITA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOBRIGACAO","Enabled")',ctrl:'vOBRIGACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMOTIVORESTITUICAO","Enabled")',ctrl:'vMOTIVORESTITUICAO',prop:'Enabled'},{ctrl:'vRESPONSAVELRETENCAO'},{ctrl:'BUTTON1',prop:'Enabled'},{ctrl:'BUTTON2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("PROMPT1","Visible")',ctrl:'PROMPT1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT2","Visible")',ctrl:'PROMPT2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT3","Visible")',ctrl:'PROMPT3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT4","Visible")',ctrl:'PROMPT4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT5","Visible")',ctrl:'PROMPT5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT6","Visible")',ctrl:'PROMPT6',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT7","Visible")',ctrl:'PROMPT7',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT8","Visible")',ctrl:'PROMPT8',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT9","Visible")',ctrl:'PROMPT9',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT10","Visible")',ctrl:'PROMPT10',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT11","Visible")',ctrl:'PROMPT11',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT12","Visible")',ctrl:'PROMPT12',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT13","Visible")',ctrl:'PROMPT13',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT14","Visible")',ctrl:'PROMPT14',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT15","Visible")',ctrl:'PROMPT15',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT16","Visible")',ctrl:'PROMPT16',prop:'Visible'},{av:'AV134DiretorioTxt',fld:'vDIRETORIOTXT'},{av:'AV19i',fld:'vI'},{av:'AV184GXLvl705',fld:'vGXLVL705'}]];
   this.EvtParms["VTPSALDO.CLICK"] = [[{av:'AV137TpSaldo',fld:'vTPSALDO'}],[{av:'gx.fn.getCtrlProperty("vDTSALDO","Visible")',ctrl:'vDTSALDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vMESSALDO","Visible")',ctrl:'vMESSALDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vANOSALDO","Visible")',ctrl:'vANOSALDO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TXTBARRA","Visible")',ctrl:'TXTBARRA',prop:'Visible'}]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV103ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'},{av:'AV163SnNotaEdicao',fld:'vSNNOTAEDICAO'},{av:'A1551ErroProcessoDescricao',fld:'ERROPROCESSODESCRICAO'},{av:'A7404SpedAuxTpRegistro',fld:'SPEDAUXTPREGISTRO'},{av:'A7405SpedAuxCodRegistro',fld:'SPEDAUXCODREGISTRO'},{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'}],[{av:'AV187GXLvl916',fld:'vGXLVL916'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TXTAPLERRO","Caption")',ctrl:'TXTAPLERRO',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB4","Visible")',ctrl:'TAB4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB5","Visible")',ctrl:'TAB5',prop:'Visible'},{av:'AV103ProcessoId',fld:'vPROCESSOID'},{av:'gx.fn.getCtrlProperty("vFILIALID","Enabled")',ctrl:'vFILIALID',prop:'Enabled'},{ctrl:'vTPARQUIVO'},{av:'gx.fn.getCtrlProperty("vMESREF","Enabled")',ctrl:'vMESREF',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANOREF","Enabled")',ctrl:'vANOREF',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vLAYOUTARQUIVO","Enabled")',ctrl:'vLAYOUTARQUIVO',prop:'Enabled'},{ctrl:'vTPAPURACAOIPI'},{av:'gx.fn.getCtrlProperty("vCFOP1","Enabled")',ctrl:'vCFOP1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP2","Enabled")',ctrl:'vCFOP2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP3","Enabled")',ctrl:'vCFOP3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP4","Enabled")',ctrl:'vCFOP4',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP5","Enabled")',ctrl:'vCFOP5',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP6","Enabled")',ctrl:'vCFOP6',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP7","Enabled")',ctrl:'vCFOP7',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP8","Enabled")',ctrl:'vCFOP8',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP9","Enabled")',ctrl:'vCFOP9',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP10","Enabled")',ctrl:'vCFOP10',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP11","Enabled")',ctrl:'vCFOP11',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP12","Enabled")',ctrl:'vCFOP12',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP13","Enabled")',ctrl:'vCFOP13',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP14","Enabled")',ctrl:'vCFOP14',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCFOP15","Enabled")',ctrl:'vCFOP15',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vSNINVENTARIO","Enabled")',ctrl:'vSNINVENTARIO',prop:'Enabled'},{ctrl:'vTPSALDO'},{av:'gx.fn.getCtrlProperty("vMESSALDO","Enabled")',ctrl:'vMESSALDO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vANOSALDO","Enabled")',ctrl:'vANOSALDO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDTSALDO","Enabled")',ctrl:'vDTSALDO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vPRECOINVENTARIO","Enabled")',ctrl:'vPRECOINVENTARIO',prop:'Enabled'},{ctrl:'vMOTIVOINVENTARIO'},{ctrl:'vOBRIGACAOICMS'},{av:'gx.fn.getCtrlProperty("vCCONTABILMERCADORIA","Enabled")',ctrl:'vCCONTABILMERCADORIA',prop:'Enabled'},{ctrl:'vOBRIGACAOICMSST'},{av:'gx.fn.getCtrlProperty("vRECEITAICMS","Enabled")',ctrl:'vRECEITAICMS',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vRECEITAICMSST","Enabled")',ctrl:'vRECEITAICMSST',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDIAVENC","Enabled")',ctrl:'vDIAVENC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDIAVENCIMENTO","Enabled")',ctrl:'vDIAVENCIMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vRECEITA","Enabled")',ctrl:'vRECEITA',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vOBRIGACAO","Enabled")',ctrl:'vOBRIGACAO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vFECHARMESESTOQUE","Enabled")',ctrl:'vFECHARMESESTOQUE',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vMOTIVORESTITUICAO","Enabled")',ctrl:'vMOTIVORESTITUICAO',prop:'Enabled'},{ctrl:'vRESPONSAVELRETENCAO'},{ctrl:'BUTTON1',prop:'Enabled'},{ctrl:'BUTTON2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("PROMPT1","Visible")',ctrl:'PROMPT1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT2","Visible")',ctrl:'PROMPT2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT3","Visible")',ctrl:'PROMPT3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT4","Visible")',ctrl:'PROMPT4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT5","Visible")',ctrl:'PROMPT5',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT6","Visible")',ctrl:'PROMPT6',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT7","Visible")',ctrl:'PROMPT7',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT8","Visible")',ctrl:'PROMPT8',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT9","Visible")',ctrl:'PROMPT9',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT10","Visible")',ctrl:'PROMPT10',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT11","Visible")',ctrl:'PROMPT11',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT12","Visible")',ctrl:'PROMPT12',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT13","Visible")',ctrl:'PROMPT13',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT14","Visible")',ctrl:'PROMPT14',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT15","Visible")',ctrl:'PROMPT15',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROMPT16","Visible")',ctrl:'PROMPT16',prop:'Visible'},{av:'AV163SnNotaEdicao',fld:'vSNNOTAEDICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.setPrompt("PROMPT16", [14]);
   this.setPrompt("PROMPT1", [62]);
   this.setPrompt("PROMPT2", [66]);
   this.setPrompt("PROMPT3", [70]);
   this.setPrompt("PROMPT4", [74]);
   this.setPrompt("PROMPT5", [78]);
   this.setPrompt("PROMPT6", [87]);
   this.setPrompt("PROMPT7", [91]);
   this.setPrompt("PROMPT8", [95]);
   this.setPrompt("PROMPT9", [99]);
   this.setPrompt("PROMPT10", [103]);
   this.setPrompt("PROMPT11", [112]);
   this.setPrompt("PROMPT12", [116]);
   this.setPrompt("PROMPT13", [120]);
   this.setPrompt("PROMPT14", [124]);
   this.setPrompt("PROMPT15", [128]);
   this.setPrompt("PROMPT_PRECOINVENTARIO", [188]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV141ProcessoRotina", "vPROCESSOROTINA", 0, "svchar");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hgeracaospedfiscal());

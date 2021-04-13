/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:37:56.94
*/
gx.evt.autoSkip = false;
gx.define('himportadadosjockey', false, function () {
   this.ServerClass =  "himportadadosjockey" ;
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
      this.AV49CaminhoSistema=gx.fn.getControlValue("vCAMINHOSISTEMA") ;
   };
   this.Validv_Ocorrenciaportariaidhist=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOCORRENCIAPORTARIAIDHIST");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ocorrenciaportariaidmsgs=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOCORRENCIAPORTARIAIDMSGS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grauparentescoidfem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRAUPARENTESCOIDFEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Grauparentescoidmas=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vGRAUPARENTESCOIDMAS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e18in2_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e11in2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13in2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12in2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e14in2_client=function()
   {
      this.executeServerEvent("'BUSCARDIRETORIO'", true, null, false, false);
   };
   this.e19in2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,18,20,21,25,30,32,35,37,40,42,43,44,45,46,47,48,51,54,56,57,60,62,63,66,68,76,80,82,83];
   this.GXLastCtrlId =83;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"himportadadosjockey",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("Grauparentescoidtxt",42,"vGRAUPARENTESCOIDTXT","Grau Parentesco Arq Texto","","GrauParentescoIdTxt","int",0,"px",2,2,"right",null,[],"Grauparentescoidtxt","GrauParentescoIdTxt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Grauparentescoidfem",43,"vGRAUPARENTESCOIDFEM","Grau Parentesco Sexo Feminino","","GrauParentescoIdFem","int",0,"px",2,2,"right",null,[],"Grauparentescoidfem","GrauParentescoIdFem",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpprompt1","vBMPPROMPT1",44,0,"px",17,"px",null,"","","ImagePrompt","");
   Grid1Container.addSingleLineEdit("Grauparentescoidmas",45,"vGRAUPARENTESCOIDMAS","Grau Parentesco Sexo Masculino","","GrauParentescoIdMas","int",0,"px",2,2,"right",null,[],"Grauparentescoidmas","GrauParentescoIdMas",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpprompt2","vBMPPROMPT2",46,0,"px",17,"px",null,"","","ImagePrompt","");
   Grid1Container.addBitmap("&Bmpteste","vBMPTESTE",47,0,"px",17,"px","e18in2_client","","bmp Teste","Image","");
   this.setGrid(Grid1Container);
   this.TIMER1Container = gx.uc.getNew(this, 69, 20, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12in2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE7",grid:0};
   GXValidFnc[12]={fld:"TABLE5",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV20Diretorio",gxold:"OV20Diretorio",gxvar:"AV20Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Diretorio=Value},v2z:function(Value){gx.O.ZV20Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV20Diretorio,0)},c2v:function(){gx.O.AV20Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRDADOS",gxz:"ZV50ExcluirDados",gxold:"OV50ExcluirDados",gxvar:"AV50ExcluirDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV50ExcluirDados=Value},v2z:function(Value){gx.O.ZV50ExcluirDados=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRDADOS",gx.O.AV50ExcluirDados,"S")},c2v:function(){gx.O.AV50ExcluirDados=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRDADOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[30]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ocorrenciaportariaidhist,isvalid:null,rgrid:[],fld:"vOCORRENCIAPORTARIAIDHIST",gxz:"ZV21OcorrenciaPortariaIdHist",gxold:"OV21OcorrenciaPortariaIdHist",gxvar:"AV21OcorrenciaPortariaIdHist",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21OcorrenciaPortariaIdHist=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21OcorrenciaPortariaIdHist=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAPORTARIAIDHIST",gx.O.AV21OcorrenciaPortariaIdHist,0)},c2v:function(){gx.O.AV21OcorrenciaPortariaIdHist=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIAPORTARIAIDHIST",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ocorrenciaportariaidmsgs,isvalid:null,rgrid:[],fld:"vOCORRENCIAPORTARIAIDMSGS",gxz:"ZV22OcorrenciaPortariaIdMsgs",gxold:"OV22OcorrenciaPortariaIdMsgs",gxvar:"AV22OcorrenciaPortariaIdMsgs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22OcorrenciaPortariaIdMsgs=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22OcorrenciaPortariaIdMsgs=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAPORTARIAIDMSGS",gx.O.AV22OcorrenciaPortariaIdMsgs,0)},c2v:function(){gx.O.AV22OcorrenciaPortariaIdMsgs=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIAPORTARIAIDMSGS",'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[42]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vGRAUPARENTESCOIDTXT",gxz:"ZV24GrauParentescoIdTxt",gxold:"OV24GrauParentescoIdTxt",gxvar:"AV24GrauParentescoIdTxt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24GrauParentescoIdTxt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24GrauParentescoIdTxt=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vGRAUPARENTESCOIDTXT",row || gx.fn.currentGridRowImpl(41),gx.O.AV24GrauParentescoIdTxt,0)},c2v:function(){gx.O.AV24GrauParentescoIdTxt=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vGRAUPARENTESCOIDTXT",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:this.Validv_Grauparentescoidfem,isvalid:null,rgrid:[],fld:"vGRAUPARENTESCOIDFEM",gxz:"ZV28GrauParentescoIdFem",gxold:"OV28GrauParentescoIdFem",gxvar:"AV28GrauParentescoIdFem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28GrauParentescoIdFem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28GrauParentescoIdFem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vGRAUPARENTESCOIDFEM",row || gx.fn.currentGridRowImpl(41),gx.O.AV28GrauParentescoIdFem,0)},c2v:function(){gx.O.AV28GrauParentescoIdFem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vGRAUPARENTESCOIDFEM",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPROMPT1",gxz:"ZV33bmpPrompt1",gxold:"OV33bmpPrompt1",gxvar:"AV33bmpPrompt1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33bmpPrompt1=Value},v2z:function(Value){gx.O.ZV33bmpPrompt1=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPROMPT1",row || gx.fn.currentGridRowImpl(41),gx.O.AV33bmpPrompt1,gx.O.AV56Bmpprompt1_GXI)},c2v:function(){gx.O.AV56Bmpprompt1_GXI=this.val_GXI();gx.O.AV33bmpPrompt1=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPROMPT1",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPROMPT1_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV56Bmpprompt1_GXI',nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:this.Validv_Grauparentescoidmas,isvalid:null,rgrid:[],fld:"vGRAUPARENTESCOIDMAS",gxz:"ZV27GrauParentescoIdMas",gxold:"OV27GrauParentescoIdMas",gxvar:"AV27GrauParentescoIdMas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27GrauParentescoIdMas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27GrauParentescoIdMas=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vGRAUPARENTESCOIDMAS",row || gx.fn.currentGridRowImpl(41),gx.O.AV27GrauParentescoIdMas,0)},c2v:function(){gx.O.AV27GrauParentescoIdMas=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vGRAUPARENTESCOIDMAS",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPROMPT2",gxz:"ZV34bmpPrompt2",gxold:"OV34bmpPrompt2",gxvar:"AV34bmpPrompt2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV34bmpPrompt2=Value},v2z:function(Value){gx.O.ZV34bmpPrompt2=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPROMPT2",row || gx.fn.currentGridRowImpl(41),gx.O.AV34bmpPrompt2,gx.O.AV57Bmpprompt2_GXI)},c2v:function(){gx.O.AV57Bmpprompt2_GXI=this.val_GXI();gx.O.AV34bmpPrompt2=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPROMPT2",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPROMPT2_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV57Bmpprompt2_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPTESTE",gxz:"ZV30bmpTeste",gxold:"OV30bmpTeste",gxvar:"AV30bmpTeste",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpTeste=Value},v2z:function(Value){gx.O.ZV30bmpTeste=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPTESTE",row || gx.fn.currentGridRowImpl(41),gx.O.AV30bmpTeste,gx.O.AV67Bmpteste_GXI)},c2v:function(){gx.O.AV67Bmpteste_GXI=this.val_GXI();gx.O.AV30bmpTeste=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPTESTE",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPTESTE_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV67Bmpteste_GXI',nac:gx.falseFn};
   GXValidFnc[48]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[51]={fld:"TAB3",grid:0};
   GXValidFnc[54]={fld:"IMAGE2",grid:0};
   GXValidFnc[56]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[57]={fld:"TAB2",grid:0};
   GXValidFnc[60]={fld:"IMGERRO",grid:0};
   GXValidFnc[62]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[63]={fld:"TAB1",grid:0};
   GXValidFnc[66]={fld:"IMGPROC",grid:0};
   GXValidFnc[68]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV31ProcessoId",gxold:"OV31ProcessoId",gxvar:"AV31ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV31ProcessoId,0)},c2v:function(){gx.O.AV31ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[80]={fld:"BTNHELP",grid:0};
   GXValidFnc[82]={fld:"PROMPT_OCORRENCIAPORTARIAIDHIST",grid:0};
   GXValidFnc[83]={fld:"PROMPT_OCORRENCIAPORTARIAIDMSGS",grid:0};
   this.AV20Diretorio = "" ;
   this.ZV20Diretorio = "" ;
   this.OV20Diretorio = "" ;
   this.AV50ExcluirDados = "" ;
   this.ZV50ExcluirDados = "" ;
   this.OV50ExcluirDados = "" ;
   this.AV21OcorrenciaPortariaIdHist = 0 ;
   this.ZV21OcorrenciaPortariaIdHist = 0 ;
   this.OV21OcorrenciaPortariaIdHist = 0 ;
   this.AV22OcorrenciaPortariaIdMsgs = 0 ;
   this.ZV22OcorrenciaPortariaIdMsgs = 0 ;
   this.OV22OcorrenciaPortariaIdMsgs = 0 ;
   this.ZV24GrauParentescoIdTxt = 0 ;
   this.OV24GrauParentescoIdTxt = 0 ;
   this.ZV28GrauParentescoIdFem = 0 ;
   this.OV28GrauParentescoIdFem = 0 ;
   this.ZV33bmpPrompt1 = "" ;
   this.OV33bmpPrompt1 = "" ;
   this.ZV27GrauParentescoIdMas = 0 ;
   this.OV27GrauParentescoIdMas = 0 ;
   this.ZV34bmpPrompt2 = "" ;
   this.OV34bmpPrompt2 = "" ;
   this.ZV30bmpTeste = "" ;
   this.OV30bmpTeste = "" ;
   this.AV31ProcessoId = 0 ;
   this.ZV31ProcessoId = 0 ;
   this.OV31ProcessoId = 0 ;
   this.AV20Diretorio = "" ;
   this.AV50ExcluirDados = "" ;
   this.AV21OcorrenciaPortariaIdHist = 0 ;
   this.AV22OcorrenciaPortariaIdMsgs = 0 ;
   this.AV31ProcessoId = 0 ;
   this.AV24GrauParentescoIdTxt = 0 ;
   this.AV28GrauParentescoIdFem = 0 ;
   this.AV33bmpPrompt1 = "" ;
   this.AV27GrauParentescoIdMas = 0 ;
   this.AV34bmpPrompt2 = "" ;
   this.AV30bmpTeste = "" ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.A2647GrauParentescoId = 0 ;
   this.A2663OcorrenciaPortariaId = 0 ;
   this.A2662OcorrenciaPortariaEmpresaId = "" ;
   this.A2676OcorrenciaPortariaTipoBloqueio = "" ;
   this.AV49CaminhoSistema = "" ;
   this.Events = {"e11in2_client": ["'FECHAR'", true] ,"e13in2_client": ["ENTER", true] ,"e12in2_client": ["TIMER1.ELAPSED", true] ,"e14in2_client": ["'BUSCARDIRETORIO'", true] ,"e19in2_client": ["CANCEL", true] ,"e18in2_client": ["'MOSTRALINHAS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV33bmpPrompt1',fld:'vBMPPROMPT1'},{av:'AV34bmpPrompt2',fld:'vBMPPROMPT2'},{av:'AV49CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV21OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV22OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV28GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'}],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20Diretorio',fld:'vDIRETORIO'},{av:'AV21OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'A2662OcorrenciaPortariaEmpresaId',fld:'OCORRENCIAPORTARIAEMPRESAID'},{av:'AV26OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'},{av:'A2663OcorrenciaPortariaId',fld:'OCORRENCIAPORTARIAID'},{av:'A2676OcorrenciaPortariaTipoBloqueio',fld:'OCORRENCIAPORTARIATIPOBLOQUEIO'},{av:'AV22OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT',grid:41},{av:'AV28GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM',grid:41},{av:'A2647GrauParentescoId',fld:'GRAUPARENTESCOID'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS',grid:41},{av:'AV35SdtImportaDadosJockey',fld:'vSDTIMPORTADADOSJOCKEY'},{av:'AV50ExcluirDados',fld:'vEXCLUIRDADOS'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV40EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV45EmpresaTiposEnderecoEmpresaId',fld:'vEMPRESATIPOSENDERECOEMPRESAID'},{av:'AV46EmpresaTipoTelefoneEmpresaId',fld:'vEMPRESATIPOTELEFONEEMPRESAID'},{av:'AV41CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV43ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV42TiposEnderecoIdParm',fld:'vTIPOSENDERECOIDPARM'},{av:'AV44TipoTelefoneIdParm',fld:'vTIPOTELEFONEIDPARM'},{av:'AV32ErrDsc',fld:'vERRDSC'}],[{av:'AV25tpErro',fld:'vTPERRO'},{av:'AV58GXLvl98',fld:'vGXLVL98'},{av:'AV59GXLvl121',fld:'vGXLVL121'},{av:'AV38Contador',fld:'vCONTADOR'},{av:'AV39SnPreenchido',fld:'vSNPREENCHIDO'},{av:'AV36SdtImportaDadosJockeyItem',fld:'vSDTIMPORTADADOSJOCKEYITEM'},{av:'AV62GXLvl165',fld:'vGXLVL165'},{av:'AV63GXLvl182',fld:'vGXLVL182'},{av:'AV35SdtImportaDadosJockey',fld:'vSDTIMPORTADADOSJOCKEY'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV31ProcessoId',fld:'vPROCESSOID'},{av:'AV51ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV32ErrDsc',fld:'vERRDSC'},{av:'AV44TipoTelefoneIdParm',fld:'vTIPOTELEFONEIDPARM'},{av:'AV42TiposEnderecoIdParm',fld:'vTIPOSENDERECOIDPARM'},{av:'AV43ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV41CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV46EmpresaTipoTelefoneEmpresaId',fld:'vEMPRESATIPOTELEFONEEMPRESAID'},{av:'AV45EmpresaTiposEnderecoEmpresaId',fld:'vEMPRESATIPOSENDERECOEMPRESAID'},{av:'AV40EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV22OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV21OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV50ExcluirDados',fld:'vEXCLUIRDADOS'},{av:'AV20Diretorio',fld:'vDIRETORIO'},{av:'AV47Arquivo',fld:'vARQUIVO'},{av:'AV19i',fld:'vI'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV49CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV21OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV22OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV28GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'}],[{av:'AV35SdtImportaDadosJockey',fld:'vSDTIMPORTADADOSJOCKEY'},{av:'AV47Arquivo',fld:'vARQUIVO'},{av:'AV19i',fld:'vI'},{av:'AV37x',fld:'vX'},{av:'AV64GXV1',fld:'vGXV1'},{av:'AV36SdtImportaDadosJockeyItem',fld:'vSDTIMPORTADADOSJOCKEYITEM'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV28GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'}]];
   this.EvtParms["'MOSTRALINHAS'"] = [[],[]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV31ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV66GXLvl291',fld:'vGXLVL291'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB1","Visible")',ctrl:'TAB1',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB2","Visible")',ctrl:'TAB2',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'}]];
   this.EvtParms["'BUSCARDIRETORIO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV33bmpPrompt1',fld:'vBMPPROMPT1'},{av:'AV34bmpPrompt2',fld:'vBMPPROMPT2'},{av:'AV49CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV21OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV22OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV28GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'}],[]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV33bmpPrompt1',fld:'vBMPPROMPT1'},{av:'AV34bmpPrompt2',fld:'vBMPPROMPT2'},{av:'AV49CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV21OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV22OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV28GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'}],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV33bmpPrompt1',fld:'vBMPPROMPT1'},{av:'AV34bmpPrompt2',fld:'vBMPPROMPT2'},{av:'AV49CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV21OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV22OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV28GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'}],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV33bmpPrompt1',fld:'vBMPPROMPT1'},{av:'AV34bmpPrompt2',fld:'vBMPPROMPT2'},{av:'AV49CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV21OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV22OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV28GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'}],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV33bmpPrompt1',fld:'vBMPPROMPT1'},{av:'AV34bmpPrompt2',fld:'vBMPPROMPT2'},{av:'AV49CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV21OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV22OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV28GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'}],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.setPrompt("PROMPT_OCORRENCIAPORTARIAIDHIST", [32]);
   this.setPrompt("PROMPT_OCORRENCIAPORTARIAIDMSGS", [37]);
   this.setPrompt("&BMPPROMPT1", [43]);
   this.setPrompt("&BMPPROMPT2", [45]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV49CaminhoSistema", "vCAMINHOSISTEMA", 0, "svchar");
   this.setVCMap("AV49CaminhoSistema", "vCAMINHOSISTEMA", 0, "svchar");
   Grid1Container.addRefreshingVar({rfrVar:"AV33bmpPrompt1", rfrProp:"Value", gxAttId:"Bmpprompt1"});
   Grid1Container.addRefreshingVar({rfrVar:"AV34bmpPrompt2", rfrProp:"Value", gxAttId:"Bmpprompt2"});
   Grid1Container.addRefreshingVar({rfrVar:"AV49CaminhoSistema"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[32]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[37]);
   Grid1Container.addRefreshingVar({rfrVar:"AV24GrauParentescoIdTxt", rfrProp:"Value", gxAttId:"Grauparentescoidtxt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV28GrauParentescoIdFem", rfrProp:"Value", gxAttId:"Grauparentescoidfem"});
   Grid1Container.addRefreshingVar({rfrVar:"AV27GrauParentescoIdMas", rfrProp:"Value", gxAttId:"Grauparentescoidmas"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportadadosjockey());

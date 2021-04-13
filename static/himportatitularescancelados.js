/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:40:59.66
*/
gx.evt.autoSkip = false;
gx.define('himportatitularescancelados', false, function () {
   this.ServerClass =  "himportatitularescancelados" ;
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
      this.AV44CaminhoSistema=gx.fn.getControlValue("vCAMINHOSISTEMA") ;
      this.A1228FilialEmpresaId=gx.fn.getControlValue("FILIALEMPRESAID") ;
      this.A1156FilialId=gx.fn.getIntegerValue("FILIALID",'.') ;
      this.A1136FilialNome=gx.fn.getControlValue("FILIALNOME") ;
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
   this.Validv_Contapagrecfilialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTAPAGRECFILIALID");
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
   this.e18km2_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e13km2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e11km2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14km2_client=function()
   {
      this.executeServerEvent("'BUSCARDIRETORIO'", true, null, false, false);
   };
   this.e12km2_client=function()
   {
      this.executeServerEvent("TIMER1.ELAPSED", false, null, true, true);
   };
   this.e19km2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,10,13,16,19,21,22,26,31,33,36,38,39,42,44,45,46,47,48,49,52,55,57,58,61,63,64,67,69,71,74,77,80,82,85,87,88,89,92,94,95,96,97,98,103,106,108,115,118,120,122,123,124,125,126];
   this.GXLastCtrlId =126;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",43,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"himportatitularescancelados",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("Grauparentescoidtxt",44,"vGRAUPARENTESCOIDTXT","Grau Parentesco Arq Texto","","GrauParentescoIdTxt","int",0,"px",2,2,"right",null,[],"Grauparentescoidtxt","GrauParentescoIdTxt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Grauparentescoidfem",45,"vGRAUPARENTESCOIDFEM","Grau Parentesco Sexo Feminino","","GrauParentescoIdFem","int",0,"px",2,2,"right",null,[],"Grauparentescoidfem","GrauParentescoIdFem",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpprompt1","vBMPPROMPT1",46,0,"px",17,"px",null,"","","Image","GridColumnImage");
   Grid1Container.addSingleLineEdit("Grauparentescoidmas",47,"vGRAUPARENTESCOIDMAS","Grau Parentesco Sexo Masculino","","GrauParentescoIdMas","int",0,"px",2,2,"right",null,[],"Grauparentescoidmas","GrauParentescoIdMas",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("&Bmpprompt2","vBMPPROMPT2",48,0,"px",17,"px",null,"","","Image","GridColumnImage");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 9, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV76Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV76Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV76Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "himportatitularescancelados_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   this.TIMER1Container = gx.uc.getNew(this, 70, 21, "Timer", "TIMER1Container", "Timer1");
   var TIMER1Container = this.TIMER1Container;
   TIMER1Container.setProp("Interval", "Interval", 10000, "num");
   TIMER1Container.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMER1Container.setProp("Visible", "Visible", true, "bool");
   TIMER1Container.setProp("Class", "Class", "", "char");
   TIMER1Container.setC2ShowFunction(function(UC) { UC.start(); });
   TIMER1Container.addEventHandler("Elapsed", this.e12km2_client);
   this.setUserControl(TIMER1Container);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[10]={fld:"TAB1",grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[19]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV20Diretorio",gxold:"OV20Diretorio",gxvar:"AV20Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Diretorio=Value},v2z:function(Value){gx.O.ZV20Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV20Diretorio,0)},c2v:function(){gx.O.AV20Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEXCLUIRDADOS",gxz:"ZV21ExcluirDados",gxold:"OV21ExcluirDados",gxvar:"AV21ExcluirDados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21ExcluirDados=Value},v2z:function(Value){gx.O.ZV21ExcluirDados=Value},v2c:function(){gx.fn.setCheckBoxValue("vEXCLUIRDADOS",gx.O.AV21ExcluirDados,"S")},c2v:function(){gx.O.AV21ExcluirDados=this.val()},val:function(){return gx.fn.getControlValue("vEXCLUIRDADOS")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[31]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ocorrenciaportariaidhist,isvalid:null,rgrid:[],fld:"vOCORRENCIAPORTARIAIDHIST",gxz:"ZV22OcorrenciaPortariaIdHist",gxold:"OV22OcorrenciaPortariaIdHist",gxvar:"AV22OcorrenciaPortariaIdHist",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22OcorrenciaPortariaIdHist=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22OcorrenciaPortariaIdHist=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAPORTARIAIDHIST",gx.O.AV22OcorrenciaPortariaIdHist,0)},c2v:function(){gx.O.AV22OcorrenciaPortariaIdHist=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIAPORTARIAIDHIST",'.')},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ocorrenciaportariaidmsgs,isvalid:null,rgrid:[],fld:"vOCORRENCIAPORTARIAIDMSGS",gxz:"ZV23OcorrenciaPortariaIdMsgs",gxold:"OV23OcorrenciaPortariaIdMsgs",gxvar:"AV23OcorrenciaPortariaIdMsgs",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23OcorrenciaPortariaIdMsgs=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23OcorrenciaPortariaIdMsgs=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vOCORRENCIAPORTARIAIDMSGS",gx.O.AV23OcorrenciaPortariaIdMsgs,0)},c2v:function(){gx.O.AV23OcorrenciaPortariaIdMsgs=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vOCORRENCIAPORTARIAIDMSGS",'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLE4",grid:0};
   GXValidFnc[42]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[44]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:43,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vGRAUPARENTESCOIDTXT",gxz:"ZV24GrauParentescoIdTxt",gxold:"OV24GrauParentescoIdTxt",gxvar:"AV24GrauParentescoIdTxt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24GrauParentescoIdTxt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24GrauParentescoIdTxt=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vGRAUPARENTESCOIDTXT",row || gx.fn.currentGridRowImpl(43),gx.O.AV24GrauParentescoIdTxt,0)},c2v:function(){gx.O.AV24GrauParentescoIdTxt=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vGRAUPARENTESCOIDTXT",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:43,gxgrid:this.Grid1Container,fnc:this.Validv_Grauparentescoidfem,isvalid:null,rgrid:[],fld:"vGRAUPARENTESCOIDFEM",gxz:"ZV25GrauParentescoIdFem",gxold:"OV25GrauParentescoIdFem",gxvar:"AV25GrauParentescoIdFem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25GrauParentescoIdFem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25GrauParentescoIdFem=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vGRAUPARENTESCOIDFEM",row || gx.fn.currentGridRowImpl(43),gx.O.AV25GrauParentescoIdFem,0)},c2v:function(){gx.O.AV25GrauParentescoIdFem=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vGRAUPARENTESCOIDFEM",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPROMPT1",gxz:"ZV26bmpPrompt1",gxold:"OV26bmpPrompt1",gxvar:"AV26bmpPrompt1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26bmpPrompt1=Value},v2z:function(Value){gx.O.ZV26bmpPrompt1=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPROMPT1",row || gx.fn.currentGridRowImpl(43),gx.O.AV26bmpPrompt1,gx.O.AV83Bmpprompt1_GXI)},c2v:function(){gx.O.AV83Bmpprompt1_GXI=this.val_GXI();gx.O.AV26bmpPrompt1=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPROMPT1",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPROMPT1_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV83Bmpprompt1_GXI',nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,isacc:0,grid:43,gxgrid:this.Grid1Container,fnc:this.Validv_Grauparentescoidmas,isvalid:null,rgrid:[],fld:"vGRAUPARENTESCOIDMAS",gxz:"ZV27GrauParentescoIdMas",gxold:"OV27GrauParentescoIdMas",gxvar:"AV27GrauParentescoIdMas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV27GrauParentescoIdMas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27GrauParentescoIdMas=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vGRAUPARENTESCOIDMAS",row || gx.fn.currentGridRowImpl(43),gx.O.AV27GrauParentescoIdMas,0)},c2v:function(){gx.O.AV27GrauParentescoIdMas=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vGRAUPARENTESCOIDMAS",row || gx.fn.currentGridRowImpl(43),'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:43,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPROMPT2",gxz:"ZV28bmpPrompt2",gxold:"OV28bmpPrompt2",gxvar:"AV28bmpPrompt2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28bmpPrompt2=Value},v2z:function(Value){gx.O.ZV28bmpPrompt2=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPPROMPT2",row || gx.fn.currentGridRowImpl(43),gx.O.AV28bmpPrompt2,gx.O.AV84Bmpprompt2_GXI)},c2v:function(){gx.O.AV84Bmpprompt2_GXI=this.val_GXI();gx.O.AV28bmpPrompt2=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPPROMPT2",row || gx.fn.currentGridRowImpl(43))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPPROMPT2_GXI",row || gx.fn.currentGridRowImpl(43))}, gxvar_GXI:'AV84Bmpprompt2_GXI',nac:gx.falseFn};
   GXValidFnc[49]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[52]={fld:"TAB3",grid:0};
   GXValidFnc[55]={fld:"IMAGE2",grid:0};
   GXValidFnc[57]={fld:"TXTAPLERRO1", format:0,grid:0};
   GXValidFnc[58]={fld:"TAB4",grid:0};
   GXValidFnc[61]={fld:"IMGERRO",grid:0};
   GXValidFnc[63]={fld:"TXTAPLERRO", format:0,grid:0};
   GXValidFnc[64]={fld:"TAB5",grid:0};
   GXValidFnc[67]={fld:"IMGPROC",grid:0};
   GXValidFnc[69]={fld:"TXTAPLICACAO", format:0,grid:0};
   GXValidFnc[71]={fld:"TAB2",grid:0};
   GXValidFnc[74]={fld:"TABLE6",grid:0};
   GXValidFnc[77]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[80]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIAEMISSAO",gxz:"ZV30DiaEmissao",gxold:"OV30DiaEmissao",gxvar:"AV30DiaEmissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30DiaEmissao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30DiaEmissao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDIAEMISSAO",gx.O.AV30DiaEmissao,0)},c2v:function(){gx.O.AV30DiaEmissao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDIAEMISSAO",'.')},nac:gx.falseFn};
   GXValidFnc[85]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contapagrecfilialid,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFILIALID",gxz:"ZV31ContaPagRecFilialId",gxold:"OV31ContaPagRecFilialId",gxvar:"AV31ContaPagRecFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ContaPagRecFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV31ContaPagRecFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECFILIALID",gx.O.AV31ContaPagRecFilialId,0)},c2v:function(){gx.O.AV31ContaPagRecFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECFILIALDESCRICAO",gxz:"ZV32ContaPagRecFilialDescricao",gxold:"OV32ContaPagRecFilialDescricao",gxvar:"AV32ContaPagRecFilialDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ContaPagRecFilialDescricao=Value},v2z:function(Value){gx.O.ZV32ContaPagRecFilialDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECFILIALDESCRICAO",gx.O.AV32ContaPagRecFilialDescricao,0)},c2v:function(){gx.O.AV32ContaPagRecFilialDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECFILIALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV33FilialEmpresaId",gxold:"OV33FilialEmpresaId",gxvar:"AV33FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV33FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV33FilialEmpresaId,0)},c2v:function(){gx.O.AV33FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECBANCOID",gxz:"ZV34ContaPagRecBancoId",gxold:"OV34ContaPagRecBancoId",gxvar:"AV34ContaPagRecBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ContaPagRecBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34ContaPagRecBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECBANCOID",gx.O.AV34ContaPagRecBancoId,0)},c2v:function(){gx.O.AV34ContaPagRecBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECBANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECAGENCIAID",gxz:"ZV35ContaPagRecAgenciaId",gxold:"OV35ContaPagRecAgenciaId",gxvar:"AV35ContaPagRecAgenciaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ContaPagRecAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV35ContaPagRecAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECAGENCIAID",gx.O.AV35ContaPagRecAgenciaId,0)},c2v:function(){gx.O.AV35ContaPagRecAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[97]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCONOME",gxz:"ZV36BancoNome",gxold:"OV36BancoNome",gxvar:"AV36BancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36BancoNome=Value},v2z:function(Value){gx.O.ZV36BancoNome=Value},v2c:function(){gx.fn.setControlValue("vBANCONOME",gx.O.AV36BancoNome,0)},c2v:function(){gx.O.AV36BancoNome=this.val()},val:function(){return gx.fn.getControlValue("vBANCONOME")},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOEMPRESAID",gxz:"ZV37BancoEmpresaId",gxold:"OV37BancoEmpresaId",gxvar:"AV37BancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37BancoEmpresaId=Value},v2z:function(Value){gx.O.ZV37BancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vBANCOEMPRESAID",gx.O.AV37BancoEmpresaId,0)},c2v:function(){gx.O.AV37BancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vBANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[106]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPODATABAIXA",gxz:"ZV38TipoDataBaixa",gxold:"OV38TipoDataBaixa",gxvar:"AV38TipoDataBaixa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV38TipoDataBaixa=Value},v2z:function(Value){gx.O.ZV38TipoDataBaixa=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPODATABAIXA",gx.O.AV38TipoDataBaixa)},c2v:function(){gx.O.AV38TipoDataBaixa=this.val()},val:function(){return gx.fn.getControlValue("vTIPODATABAIXA")},nac:gx.falseFn};
   GXValidFnc[115]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSOID",gxz:"ZV62ProcessoId",gxold:"OV62ProcessoId",gxvar:"AV62ProcessoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62ProcessoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV62ProcessoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOID",gx.O.AV62ProcessoId,0)},c2v:function(){gx.O.AV62ProcessoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOID",'.')},nac:gx.falseFn};
   GXValidFnc[118]={fld:"JS", format:2,grid:0};
   GXValidFnc[120]={fld:"BTNHELP",grid:0};
   GXValidFnc[122]={fld:"PROMPT_OCORRENCIAPORTARIAIDHIST",grid:0};
   GXValidFnc[123]={fld:"PROMPT_OCORRENCIAPORTARIAIDMSGS",grid:0};
   GXValidFnc[124]={fld:"PROMPT_CONTAPAGRECFILIALID",grid:0};
   GXValidFnc[125]={fld:"PROMPT_CONTAPAGRECBANCOID",grid:0};
   GXValidFnc[126]={fld:"PROMPT_CONTAPAGRECAGENCIAID",grid:0};
   this.AV20Diretorio = "" ;
   this.ZV20Diretorio = "" ;
   this.OV20Diretorio = "" ;
   this.AV21ExcluirDados = "" ;
   this.ZV21ExcluirDados = "" ;
   this.OV21ExcluirDados = "" ;
   this.AV22OcorrenciaPortariaIdHist = 0 ;
   this.ZV22OcorrenciaPortariaIdHist = 0 ;
   this.OV22OcorrenciaPortariaIdHist = 0 ;
   this.AV23OcorrenciaPortariaIdMsgs = 0 ;
   this.ZV23OcorrenciaPortariaIdMsgs = 0 ;
   this.OV23OcorrenciaPortariaIdMsgs = 0 ;
   this.ZV24GrauParentescoIdTxt = 0 ;
   this.OV24GrauParentescoIdTxt = 0 ;
   this.ZV25GrauParentescoIdFem = 0 ;
   this.OV25GrauParentescoIdFem = 0 ;
   this.ZV26bmpPrompt1 = "" ;
   this.OV26bmpPrompt1 = "" ;
   this.ZV27GrauParentescoIdMas = 0 ;
   this.OV27GrauParentescoIdMas = 0 ;
   this.ZV28bmpPrompt2 = "" ;
   this.OV28bmpPrompt2 = "" ;
   this.AV30DiaEmissao = 0 ;
   this.ZV30DiaEmissao = 0 ;
   this.OV30DiaEmissao = 0 ;
   this.AV31ContaPagRecFilialId = 0 ;
   this.ZV31ContaPagRecFilialId = 0 ;
   this.OV31ContaPagRecFilialId = 0 ;
   this.AV32ContaPagRecFilialDescricao = "" ;
   this.ZV32ContaPagRecFilialDescricao = "" ;
   this.OV32ContaPagRecFilialDescricao = "" ;
   this.AV33FilialEmpresaId = "" ;
   this.ZV33FilialEmpresaId = "" ;
   this.OV33FilialEmpresaId = "" ;
   this.AV34ContaPagRecBancoId = 0 ;
   this.ZV34ContaPagRecBancoId = 0 ;
   this.OV34ContaPagRecBancoId = 0 ;
   this.AV35ContaPagRecAgenciaId = 0 ;
   this.ZV35ContaPagRecAgenciaId = 0 ;
   this.OV35ContaPagRecAgenciaId = 0 ;
   this.AV36BancoNome = "" ;
   this.ZV36BancoNome = "" ;
   this.OV36BancoNome = "" ;
   this.AV37BancoEmpresaId = "" ;
   this.ZV37BancoEmpresaId = "" ;
   this.OV37BancoEmpresaId = "" ;
   this.AV38TipoDataBaixa = "" ;
   this.ZV38TipoDataBaixa = "" ;
   this.OV38TipoDataBaixa = "" ;
   this.AV62ProcessoId = 0 ;
   this.ZV62ProcessoId = 0 ;
   this.OV62ProcessoId = 0 ;
   this.AV76Tab = [ ] ;
   this.AV20Diretorio = "" ;
   this.AV21ExcluirDados = "" ;
   this.AV22OcorrenciaPortariaIdHist = 0 ;
   this.AV23OcorrenciaPortariaIdMsgs = 0 ;
   this.AV30DiaEmissao = 0 ;
   this.AV31ContaPagRecFilialId = 0 ;
   this.AV32ContaPagRecFilialDescricao = "" ;
   this.AV33FilialEmpresaId = "" ;
   this.AV34ContaPagRecBancoId = 0 ;
   this.AV35ContaPagRecAgenciaId = 0 ;
   this.AV36BancoNome = "" ;
   this.AV37BancoEmpresaId = "" ;
   this.AV38TipoDataBaixa = "" ;
   this.AV62ProcessoId = 0 ;
   this.AV24GrauParentescoIdTxt = 0 ;
   this.AV25GrauParentescoIdFem = 0 ;
   this.AV26bmpPrompt1 = "" ;
   this.AV27GrauParentescoIdMas = 0 ;
   this.AV28bmpPrompt2 = "" ;
   this.A1546ProcessoDtTermino = gx.date.nullDate() ;
   this.A1544ProcessoId = 0 ;
   this.A1543ProcessoRotina = "" ;
   this.A1554ProcessoQtdeErros = 0 ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A2647GrauParentescoId = 0 ;
   this.A2663OcorrenciaPortariaId = 0 ;
   this.A2662OcorrenciaPortariaEmpresaId = "" ;
   this.A2676OcorrenciaPortariaTipoBloqueio = "" ;
   this.AV44CaminhoSistema = "" ;
   this.Events = {"e13km2_client": ["ENTER", true] ,"e11km2_client": ["'FECHAR'", true] ,"e14km2_client": ["'BUSCARDIRETORIO'", true] ,"e12km2_client": ["TIMER1.ELAPSED", true] ,"e19km2_client": ["CANCEL", true] ,"e18km2_client": ["'MOSTRALINHAS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV26bmpPrompt1',fld:'vBMPPROMPT1'},{av:'AV28bmpPrompt2',fld:'vBMPPROMPT2'},{av:'AV44CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV22OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV23OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV31ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'AV30DiaEmissao',fld:'vDIAEMISSAO'},{av:'AV34ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV35ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV25GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV20Diretorio',fld:'vDIRETORIO'},{av:'AV22OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'A2662OcorrenciaPortariaEmpresaId',fld:'OCORRENCIAPORTARIAEMPRESAID'},{av:'AV50OcorrenciaPortariaEmpresaId',fld:'vOCORRENCIAPORTARIAEMPRESAID'},{av:'A2663OcorrenciaPortariaId',fld:'OCORRENCIAPORTARIAID'},{av:'A2676OcorrenciaPortariaTipoBloqueio',fld:'OCORRENCIAPORTARIATIPOBLOQUEIO'},{av:'AV23OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT',grid:43},{av:'AV25GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM',grid:43},{av:'A2647GrauParentescoId',fld:'GRAUPARENTESCOID'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS',grid:43},{av:'AV42SdtImportaDadosJockey',fld:'vSDTIMPORTADADOSJOCKEY'},{av:'AV31ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV38TipoDataBaixa',fld:'vTIPODATABAIXA'},{av:'AV21ExcluirDados',fld:'vEXCLUIRDADOS'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV51EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV52EmpresaTiposEnderecoEmpresaId',fld:'vEMPRESATIPOSENDERECOEMPRESAID'},{av:'AV53EmpresaTipoTelefoneEmpresaId',fld:'vEMPRESATIPOTELEFONEEMPRESAID'},{av:'AV54CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV30DiaEmissao',fld:'vDIAEMISSAO'},{av:'AV34ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV35ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV55ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV56ClassificacaoTitulo',fld:'vCLASSIFICACAOTITULO'},{av:'AV57TiposEnderecoIdParm',fld:'vTIPOSENDERECOIDPARM'},{av:'AV58TipoTelefoneIdParm',fld:'vTIPOTELEFONEIDPARM'},{av:'AV66EmpresaPadraoOcorrencia',fld:'vEMPRESAPADRAOOCORRENCIA'},{av:'AV67EmpresaPadroTipoCategoria',fld:'vEMPRESAPADROTIPOCATEGORIA'},{av:'AV68EmpresaPadraoTpCobranca',fld:'vEMPRESAPADRAOTPCOBRANCA'},{av:'AV69EmpresaPadraoTpConta',fld:'vEMPRESAPADRAOTPCONTA'},{av:'AV70EmpresaPadraoEspecie',fld:'vEMPRESAPADRAOESPECIE'},{av:'AV71EmpresaPadraoFilial',fld:'vEMPRESAPADRAOFILIAL'},{av:'AV74EmpresaPadraoTpLancamento',fld:'vEMPRESAPADRAOTPLANCAMENTO'},{av:'AV73EmpresaPadraoCCusto',fld:'vEMPRESAPADRAOCCUSTO'},{av:'AV72EmpresaPadraoCContabil',fld:'vEMPRESAPADRAOCCONTABIL'},{av:'AV75EmpresaPadraoNatureza',fld:'vEMPRESAPADRAONATUREZA'},{av:'AV65ErrDsc',fld:'vERRDSC'}],[{av:'AV40tpErro',fld:'vTPERRO'},{av:'AV85GXLvl115',fld:'vGXLVL115'},{av:'AV86GXLvl141',fld:'vGXLVL141'},{av:'AV60Contador',fld:'vCONTADOR'},{av:'AV61SnPreenchido',fld:'vSNPREENCHIDO'},{av:'AV41SdtImportaDadosJockeyItem',fld:'vSDTIMPORTADADOSJOCKEYITEM'},{av:'AV89GXLvl189',fld:'vGXLVL189'},{av:'AV90GXLvl208',fld:'vGXLVL208'},{av:'AV42SdtImportaDadosJockey',fld:'vSDTIMPORTADADOSJOCKEY'},{av:'AV91GXLvl236',fld:'vGXLVL236'},{av:'AV32ContaPagRecFilialDescricao',fld:'vCONTAPAGRECFILIALDESCRICAO'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB4","Visible")',ctrl:'TAB4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB5","Visible")',ctrl:'TAB5',prop:'Visible'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'AV62ProcessoId',fld:'vPROCESSOID'},{av:'AV78ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV65ErrDsc',fld:'vERRDSC'},{av:'AV75EmpresaPadraoNatureza',fld:'vEMPRESAPADRAONATUREZA'},{av:'AV72EmpresaPadraoCContabil',fld:'vEMPRESAPADRAOCCONTABIL'},{av:'AV73EmpresaPadraoCCusto',fld:'vEMPRESAPADRAOCCUSTO'},{av:'AV74EmpresaPadraoTpLancamento',fld:'vEMPRESAPADRAOTPLANCAMENTO'},{av:'AV71EmpresaPadraoFilial',fld:'vEMPRESAPADRAOFILIAL'},{av:'AV70EmpresaPadraoEspecie',fld:'vEMPRESAPADRAOESPECIE'},{av:'AV69EmpresaPadraoTpConta',fld:'vEMPRESAPADRAOTPCONTA'},{av:'AV68EmpresaPadraoTpCobranca',fld:'vEMPRESAPADRAOTPCOBRANCA'},{av:'AV67EmpresaPadroTipoCategoria',fld:'vEMPRESAPADROTIPOCATEGORIA'},{av:'AV66EmpresaPadraoOcorrencia',fld:'vEMPRESAPADRAOOCORRENCIA'},{av:'AV58TipoTelefoneIdParm',fld:'vTIPOTELEFONEIDPARM'},{av:'AV57TiposEnderecoIdParm',fld:'vTIPOSENDERECOIDPARM'},{av:'AV56ClassificacaoTitulo',fld:'vCLASSIFICACAOTITULO'},{av:'AV55ClassificacaoIdParm',fld:'vCLASSIFICACAOIDPARM'},{av:'AV38TipoDataBaixa',fld:'vTIPODATABAIXA'},{av:'AV35ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV34ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV31ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'AV30DiaEmissao',fld:'vDIAEMISSAO'},{av:'AV54CategoriaEmpresaId',fld:'vCATEGORIAEMPRESAID'},{av:'AV53EmpresaTipoTelefoneEmpresaId',fld:'vEMPRESATIPOTELEFONEEMPRESAID'},{av:'AV52EmpresaTiposEnderecoEmpresaId',fld:'vEMPRESATIPOSENDERECOEMPRESAID'},{av:'AV51EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'AV23OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV22OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV8EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV21ExcluirDados',fld:'vEXCLUIRDADOS'},{av:'AV20Diretorio',fld:'vDIRETORIO'},{av:'AV64Arquivo',fld:'vARQUIVO'},{av:'AV19i',fld:'vI'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV44CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV22OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV23OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV31ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'AV30DiaEmissao',fld:'vDIAEMISSAO'},{av:'AV34ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV35ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV25GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV42SdtImportaDadosJockey',fld:'vSDTIMPORTADADOSJOCKEY'},{av:'AV64Arquivo',fld:'vARQUIVO'},{av:'AV19i',fld:'vI'},{av:'AV63x',fld:'vX'},{av:'AV92GXV1',fld:'vGXV1'},{av:'AV41SdtImportaDadosJockeyItem',fld:'vSDTIMPORTADADOSJOCKEYITEM'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV25GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'},{av:'AV32ContaPagRecFilialDescricao',fld:'vCONTAPAGRECFILIALDESCRICAO'}]];
   this.EvtParms["'MOSTRALINHAS'"] = [[],[]];
   this.EvtParms["'BUSCARDIRETORIO'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV26bmpPrompt1',fld:'vBMPPROMPT1'},{av:'AV28bmpPrompt2',fld:'vBMPPROMPT2'},{av:'AV44CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV22OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV23OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV31ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'AV30DiaEmissao',fld:'vDIAEMISSAO'},{av:'AV34ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV35ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV25GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[]];
   this.EvtParms["TIMER1.ELAPSED"] = [[{av:'A1543ProcessoRotina',fld:'PROCESSOROTINA'},{av:'A1544ProcessoId',fld:'PROCESSOID'},{av:'AV62ProcessoId',fld:'vPROCESSOID'},{av:'A1546ProcessoDtTermino',fld:'PROCESSODTTERMINO'},{av:'A1554ProcessoQtdeErros',fld:'PROCESSOQTDEERROS'}],[{av:'AV95GXLvl422',fld:'vGXLVL422'},{av:'this.TIMER1Container.Enabled',ctrl:'TIMER1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("TAB3","Visible")',ctrl:'TAB3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB4","Visible")',ctrl:'TAB4',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TAB5","Visible")',ctrl:'TAB5',prop:'Visible'},{av:'AV62ProcessoId',fld:'vPROCESSOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV26bmpPrompt1',fld:'vBMPPROMPT1'},{av:'AV28bmpPrompt2',fld:'vBMPPROMPT2'},{av:'AV44CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV22OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV23OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV31ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'AV30DiaEmissao',fld:'vDIAEMISSAO'},{av:'AV34ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV35ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV25GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV26bmpPrompt1',fld:'vBMPPROMPT1'},{av:'AV28bmpPrompt2',fld:'vBMPPROMPT2'},{av:'AV44CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV22OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV23OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV31ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'AV30DiaEmissao',fld:'vDIAEMISSAO'},{av:'AV34ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV35ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV25GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV26bmpPrompt1',fld:'vBMPPROMPT1'},{av:'AV28bmpPrompt2',fld:'vBMPPROMPT2'},{av:'AV44CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV22OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV23OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV31ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'AV30DiaEmissao',fld:'vDIAEMISSAO'},{av:'AV34ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV35ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV25GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV26bmpPrompt1',fld:'vBMPPROMPT1'},{av:'AV28bmpPrompt2',fld:'vBMPPROMPT2'},{av:'AV44CaminhoSistema',fld:'vCAMINHOSISTEMA',hsh:true},{av:'AV22OcorrenciaPortariaIdHist',fld:'vOCORRENCIAPORTARIAIDHIST'},{av:'AV23OcorrenciaPortariaIdMsgs',fld:'vOCORRENCIAPORTARIAIDMSGS'},{av:'AV31ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'AV30DiaEmissao',fld:'vDIAEMISSAO'},{av:'AV34ContaPagRecBancoId',fld:'vCONTAPAGRECBANCOID'},{av:'AV35ContaPagRecAgenciaId',fld:'vCONTAPAGRECAGENCIAID'},{av:'AV24GrauParentescoIdTxt',fld:'vGRAUPARENTESCOIDTXT'},{av:'AV25GrauParentescoIdFem',fld:'vGRAUPARENTESCOIDFEM'},{av:'AV27GrauParentescoIdMas',fld:'vGRAUPARENTESCOIDMAS'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV33FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'}],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.setPrompt("PROMPT_OCORRENCIAPORTARIAIDHIST", [33]);
   this.setPrompt("PROMPT_OCORRENCIAPORTARIAIDMSGS", [38]);
   this.setPrompt("PROMPT_CONTAPAGRECFILIALID", [87]);
   this.setPrompt("PROMPT_CONTAPAGRECBANCOID", [94]);
   this.setPrompt("PROMPT_CONTAPAGRECAGENCIAID", [96]);
   this.setPrompt("&BMPPROMPT1", [45]);
   this.setPrompt("&BMPPROMPT2", [47]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV44CaminhoSistema", "vCAMINHOSISTEMA", 0, "svchar");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   this.setVCMap("AV44CaminhoSistema", "vCAMINHOSISTEMA", 0, "svchar");
   this.setVCMap("A1228FilialEmpresaId", "FILIALEMPRESAID", 0, "char");
   this.setVCMap("A1156FilialId", "FILIALID", 0, "int");
   this.setVCMap("A1136FilialNome", "FILIALNOME", 0, "svchar");
   Grid1Container.addRefreshingVar({rfrVar:"AV26bmpPrompt1", rfrProp:"Value", gxAttId:"Bmpprompt1"});
   Grid1Container.addRefreshingVar({rfrVar:"AV28bmpPrompt2", rfrProp:"Value", gxAttId:"Bmpprompt2"});
   Grid1Container.addRefreshingVar({rfrVar:"AV44CaminhoSistema"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[33]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[38]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[87]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[82]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[94]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[96]);
   Grid1Container.addRefreshingVar({rfrVar:"AV24GrauParentescoIdTxt", rfrProp:"Value", gxAttId:"Grauparentescoidtxt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV25GrauParentescoIdFem", rfrProp:"Value", gxAttId:"Grauparentescoidfem"});
   Grid1Container.addRefreshingVar({rfrVar:"AV27GrauParentescoIdMas", rfrProp:"Value", gxAttId:"Grauparentescoidmas"});
   Grid1Container.addRefreshingVar({rfrVar:"A1228FilialEmpresaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[89]);
   Grid1Container.addRefreshingVar({rfrVar:"A1156FilialId"});
   Grid1Container.addRefreshingVar({rfrVar:"A1136FilialNome"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new himportatitularescancelados());

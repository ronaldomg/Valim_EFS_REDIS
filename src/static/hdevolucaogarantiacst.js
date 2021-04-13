/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:9:26.78
*/
gx.evt.autoSkip = false;
gx.define('hdevolucaogarantiacst', false, function () {
   this.ServerClass =  "hdevolucaogarantiacst" ;
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
      this.AV29SNNovaLinhaICMS=gx.fn.getControlValue("vSNNOVALINHAICMS") ;
      this.AV27SnErro=gx.fn.getControlValue("vSNERRO") ;
      this.AV28snExcluiICMS=gx.fn.getControlValue("vSNEXCLUIICMS") ;
      this.AV22SdtICMS=gx.fn.getControlValue("vSDTICMS") ;
   };
   this.Validv_Csticms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCSTICMS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Csticmscorrespondente=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCSTICMSCORRESPONDENTE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tipositicms=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOSITICMS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e112bt2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e122bt2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e132bt2_client=function()
   {
      this.executeServerEvent("'LINHAICMS'", true, null, false, false);
   };
   this.e162bt2_client=function()
   {
      this.executeServerEvent("'EXCLUILINHAGRIDICMS'", true, arguments[0], false, false);
   };
   this.e182bt2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,14,15,16,17,18,19,27];
   this.GXLastCtrlId =27;
   this.GridicmsContainer = new gx.grid.grid(this, 2,"WbpLvl2",13,"Gridicms","Gridicms","GridicmsContainer",this.CmpContext,this.IsMasterPage,"hdevolucaogarantiacst",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridicmsContainer = this.GridicmsContainer;
   GridicmsContainer.addSingleLineEdit("Csticms",14,"vCSTICMS","ICMS NF Entrada","","CSTICMS","char",0,"px",4,4,"left",null,[],"Csticms","CSTICMS",true,0,false,false,"Attribute",1,"");
   GridicmsContainer.addBitmap("&Promptcsticms","vPROMPTCSTICMS",15,0,"px",17,"px",null,"","","Image","GridColumnImage");
   GridicmsContainer.addSingleLineEdit("Csticmscorrespondente",16,"vCSTICMSCORRESPONDENTE","ICMS NF Simples Remessa","","CSTICMSCorrespondente","char",0,"px",4,4,"left",null,[],"Csticmscorrespondente","CSTICMSCorrespondente",true,0,false,false,"Attribute",1,"");
   GridicmsContainer.addBitmap("&Promptcsticmscorrespondente","vPROMPTCSTICMSCORRESPONDENTE",17,0,"px",17,"px",null,"","","Image","GridColumnImage");
   GridicmsContainer.addBitmap("&Excicms","vEXCICMS",18,0,"px",17,"px","e162bt2_client","","","Image","GridColumnImage");
   GridicmsContainer.addSingleLineEdit("Controlecsticms",19,"vCONTROLECSTICMS","Controle CSTICMS","","ControleCSTICMS","int",0,"px",4,4,"right",null,[],"Controlecsticms","ControleCSTICMS",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridicmsContainer);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TAB1",grid:0};
   GXValidFnc[8]={fld:"TABLE1",grid:0};
   GXValidFnc[11]={fld:"INCLUIICMS",grid:0};
   GXValidFnc[14]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:0,isacc:0,grid:13,gxgrid:this.GridicmsContainer,fnc:this.Validv_Csticms,isvalid:null,rgrid:[],fld:"vCSTICMS",gxz:"ZV10CSTICMS",gxold:"OV10CSTICMS",gxvar:"AV10CSTICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV10CSTICMS=Value},v2z:function(Value){gx.O.ZV10CSTICMS=Value},v2c:function(row){gx.fn.setGridControlValue("vCSTICMS",row || gx.fn.currentGridRowImpl(13),gx.O.AV10CSTICMS,0)},c2v:function(){gx.O.AV10CSTICMS=this.val()},val:function(row){return gx.fn.getGridControlValue("vCSTICMS",row || gx.fn.currentGridRowImpl(13))},nac:gx.falseFn};
   GXValidFnc[15]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:13,gxgrid:this.GridicmsContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTCSTICMS",gxz:"ZV20PromptCSTICMS",gxold:"OV20PromptCSTICMS",gxvar:"AV20PromptCSTICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV20PromptCSTICMS=Value},v2z:function(Value){gx.O.ZV20PromptCSTICMS=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTCSTICMS",row || gx.fn.currentGridRowImpl(13),gx.O.AV20PromptCSTICMS,gx.O.AV38Promptcsticms_GXI)},c2v:function(){gx.O.AV38Promptcsticms_GXI=this.val_GXI();gx.O.AV20PromptCSTICMS=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTCSTICMS",row || gx.fn.currentGridRowImpl(13))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTCSTICMS_GXI",row || gx.fn.currentGridRowImpl(13))}, gxvar_GXI:'AV38Promptcsticms_GXI',nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:0,isacc:0,grid:13,gxgrid:this.GridicmsContainer,fnc:this.Validv_Csticmscorrespondente,isvalid:null,rgrid:[],fld:"vCSTICMSCORRESPONDENTE",gxz:"ZV11CSTICMSCorrespondente",gxold:"OV11CSTICMSCorrespondente",gxvar:"AV11CSTICMSCorrespondente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV11CSTICMSCorrespondente=Value},v2z:function(Value){gx.O.ZV11CSTICMSCorrespondente=Value},v2c:function(row){gx.fn.setGridControlValue("vCSTICMSCORRESPONDENTE",row || gx.fn.currentGridRowImpl(13),gx.O.AV11CSTICMSCorrespondente,0)},c2v:function(){gx.O.AV11CSTICMSCorrespondente=this.val()},val:function(row){return gx.fn.getGridControlValue("vCSTICMSCORRESPONDENTE",row || gx.fn.currentGridRowImpl(13))},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:13,gxgrid:this.GridicmsContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROMPTCSTICMSCORRESPONDENTE",gxz:"ZV21PromptCSTICMSCorrespondente",gxold:"OV21PromptCSTICMSCorrespondente",gxvar:"AV21PromptCSTICMSCorrespondente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21PromptCSTICMSCorrespondente=Value},v2z:function(Value){gx.O.ZV21PromptCSTICMSCorrespondente=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vPROMPTCSTICMSCORRESPONDENTE",row || gx.fn.currentGridRowImpl(13),gx.O.AV21PromptCSTICMSCorrespondente,gx.O.AV39Promptcsticmscorrespondente_GXI)},c2v:function(){gx.O.AV39Promptcsticmscorrespondente_GXI=this.val_GXI();gx.O.AV21PromptCSTICMSCorrespondente=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROMPTCSTICMSCORRESPONDENTE",row || gx.fn.currentGridRowImpl(13))},val_GXI:function(row){return gx.fn.getGridControlValue("vPROMPTCSTICMSCORRESPONDENTE_GXI",row || gx.fn.currentGridRowImpl(13))}, gxvar_GXI:'AV39Promptcsticmscorrespondente_GXI',nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:13,gxgrid:this.GridicmsContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEXCICMS",gxz:"ZV15ExcICMS",gxold:"OV15ExcICMS",gxvar:"AV15ExcICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV15ExcICMS=Value},v2z:function(Value){gx.O.ZV15ExcICMS=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vEXCICMS",row || gx.fn.currentGridRowImpl(13),gx.O.AV15ExcICMS,gx.O.AV41Excicms_GXI)},c2v:function(){gx.O.AV41Excicms_GXI=this.val_GXI();gx.O.AV15ExcICMS=this.val()},val:function(row){return gx.fn.getGridControlValue("vEXCICMS",row || gx.fn.currentGridRowImpl(13))},val_GXI:function(row){return gx.fn.getGridControlValue("vEXCICMS_GXI",row || gx.fn.currentGridRowImpl(13))}, gxvar_GXI:'AV41Excicms_GXI',nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:13,gxgrid:this.GridicmsContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTROLECSTICMS",gxz:"ZV9ControleCSTICMS",gxold:"OV9ControleCSTICMS",gxvar:"AV9ControleCSTICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV9ControleCSTICMS=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9ControleCSTICMS=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTROLECSTICMS",row || gx.fn.currentGridRowImpl(13),gx.O.AV9ControleCSTICMS,0)},c2v:function(){gx.O.AV9ControleCSTICMS=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTROLECSTICMS",row || gx.fn.currentGridRowImpl(13),'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipositicms,isvalid:null,rgrid:[],fld:"vTIPOSITICMS",gxz:"ZV32TipoSitICMS",gxold:"OV32TipoSitICMS",gxvar:"AV32TipoSitICMS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32TipoSitICMS=Value},v2z:function(Value){gx.O.ZV32TipoSitICMS=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOSITICMS",gx.O.AV32TipoSitICMS)},c2v:function(){gx.O.AV32TipoSitICMS=this.val()},val:function(){return gx.fn.getControlValue("vTIPOSITICMS")},nac:gx.falseFn};
   this.ZV10CSTICMS = "" ;
   this.OV10CSTICMS = "" ;
   this.ZV20PromptCSTICMS = "" ;
   this.OV20PromptCSTICMS = "" ;
   this.ZV11CSTICMSCorrespondente = "" ;
   this.OV11CSTICMSCorrespondente = "" ;
   this.ZV21PromptCSTICMSCorrespondente = "" ;
   this.OV21PromptCSTICMSCorrespondente = "" ;
   this.ZV15ExcICMS = "" ;
   this.OV15ExcICMS = "" ;
   this.ZV9ControleCSTICMS = 0 ;
   this.OV9ControleCSTICMS = 0 ;
   this.AV32TipoSitICMS = "" ;
   this.ZV32TipoSitICMS = "" ;
   this.OV32TipoSitICMS = "" ;
   this.AV32TipoSitICMS = "" ;
   this.AV10CSTICMS = "" ;
   this.AV20PromptCSTICMS = "" ;
   this.AV11CSTICMSCorrespondente = "" ;
   this.AV21PromptCSTICMSCorrespondente = "" ;
   this.AV15ExcICMS = "" ;
   this.AV9ControleCSTICMS = 0 ;
   this.A3566SituacaoTributariaCodigo = "" ;
   this.A3564SituacaoTributariaTipo = "" ;
   this.AV29SNNovaLinhaICMS = "" ;
   this.AV27SnErro = "" ;
   this.AV28snExcluiICMS = "" ;
   this.AV22SdtICMS = [ ] ;
   this.Events = {"e112bt2_client": ["'FECHAR'", true] ,"e122bt2_client": ["ENTER", true] ,"e132bt2_client": ["'LINHAICMS'", true] ,"e162bt2_client": ["'EXCLUILINHAGRIDICMS'", true] ,"e182bt2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDICMS_nFirstRecordOnPage'},{av:'GRIDICMS_nEOF'},{av:'AV20PromptCSTICMS',fld:'vPROMPTCSTICMS',grid:13},{av:'AV21PromptCSTICMSCorrespondente',fld:'vPROMPTCSTICMSCORRESPONDENTE',grid:13},{av:'AV15ExcICMS',fld:'vEXCICMS',grid:13},{av:'AV22SdtICMS',fld:'vSDTICMS'},{av:'AV29SNNovaLinhaICMS',fld:'vSNNOVALINHAICMS'},{av:'AV27SnErro',fld:'vSNERRO'},{av:'AV28snExcluiICMS',fld:'vSNEXCLUIICMS'},{av:'AV10CSTICMS',fld:'vCSTICMS',grid:13},{av:'AV11CSTICMSCorrespondente',fld:'vCSTICMSCORRESPONDENTE',grid:13}],[{av:'AV22SdtICMS',fld:'vSDTICMS'},{av:'AV8Cont',fld:'vCONT'},{av:'AV49GXV4',fld:'vGXV4'},{av:'AV23SdtICMSItem',fld:'vSDTICMSITEM'},{av:'AV50GXV5',fld:'vGXV5'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV27SnErro',fld:'vSNERRO'},{av:'AV29SNNovaLinhaICMS',fld:'vSNNOVALINHAICMS'},{av:'AV28snExcluiICMS',fld:'vSNEXCLUIICMS'},{av:'AV10CSTICMS',fld:'vCSTICMS',grid:13},{av:'AV11CSTICMSCorrespondente',fld:'vCSTICMSCORRESPONDENTE',grid:13},{av:'AV37Pgmname',fld:'vPGMNAME'},{av:'AV22SdtICMS',fld:'vSDTICMS'},{av:'AV13EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'AV32TipoSitICMS',fld:'vTIPOSITICMS'},{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'}],[{av:'AV27SnErro',fld:'vSNERRO'},{av:'AV22SdtICMS',fld:'vSDTICMS'},{av:'AV8Cont',fld:'vCONT'},{av:'AV49GXV4',fld:'vGXV4'},{av:'AV23SdtICMSItem',fld:'vSDTICMSITEM'},{av:'AV50GXV5',fld:'vGXV5'},{av:'AV6ArquivoGrid',fld:'vARQUIVOGRID'},{av:'AV5OpcoesTxtTela',fld:'vOPCOESTXTTELA'},{av:'AV42GXV1',fld:'vGXV1'},{av:'AV7CamposGrid',fld:'vCAMPOSGRID'},{av:'AV46GXLvl146',fld:'vGXLVL146'},{av:'AV47GXLvl162',fld:'vGXLVL162'}]];
   this.EvtParms["GRIDICMS.LOAD"] = [[{av:'AV22SdtICMS',fld:'vSDTICMS'}],[{av:'AV9ControleCSTICMS',fld:'vCONTROLECSTICMS'},{av:'AV44GXV3',fld:'vGXV3'},{av:'AV23SdtICMSItem',fld:'vSDTICMSITEM'},{av:'AV10CSTICMS',fld:'vCSTICMS'},{av:'AV11CSTICMSCorrespondente',fld:'vCSTICMSCORRESPONDENTE'}]];
   this.EvtParms["'LINHAICMS'"] = [[{av:'AV10CSTICMS',fld:'vCSTICMS',grid:13},{av:'AV29SNNovaLinhaICMS',fld:'vSNNOVALINHAICMS'},{av:'AV11CSTICMSCorrespondente',fld:'vCSTICMSCORRESPONDENTE',grid:13},{av:'A3564SituacaoTributariaTipo',fld:'SITUACAOTRIBUTARIATIPO'},{av:'AV32TipoSitICMS',fld:'vTIPOSITICMS'},{av:'A3566SituacaoTributariaCodigo',fld:'SITUACAOTRIBUTARIACODIGO'}],[{av:'AV27SnErro',fld:'vSNERRO'},{av:'AV22SdtICMS',fld:'vSDTICMS'},{av:'AV29SNNovaLinhaICMS',fld:'vSNNOVALINHAICMS'},{av:'AV23SdtICMSItem',fld:'vSDTICMSITEM'},{av:'AV46GXLvl146',fld:'vGXLVL146'},{av:'AV47GXLvl162',fld:'vGXLVL162'}]];
   this.EvtParms["'EXCLUILINHAGRIDICMS'"] = [[{av:'AV9ControleCSTICMS',fld:'vCONTROLECSTICMS'}],[{av:'AV22SdtICMS',fld:'vSDTICMS'},{av:'AV28snExcluiICMS',fld:'vSNEXCLUIICMS'}]];
   this.setPrompt("&PROMPTCSTICMS", [14,27]);
   this.setPrompt("&PROMPTCSTICMSCORRESPONDENTE", [16,27]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV29SNNovaLinhaICMS", "vSNNOVALINHAICMS", 0, "char");
   this.setVCMap("AV27SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV28snExcluiICMS", "vSNEXCLUIICMS", 0, "char");
   this.setVCMap("AV22SdtICMS", "vSDTICMS", 0, "CollSDTCST.SDTCSTItem");
   this.setVCMap("AV29SNNovaLinhaICMS", "vSNNOVALINHAICMS", 0, "char");
   this.setVCMap("AV27SnErro", "vSNERRO", 0, "char");
   this.setVCMap("AV28snExcluiICMS", "vSNEXCLUIICMS", 0, "char");
   this.setVCMap("AV22SdtICMS", "vSDTICMS", 0, "CollSDTCST.SDTCSTItem");
   GridicmsContainer.addRefreshingVar({rfrVar:"AV20PromptCSTICMS", rfrProp:"Value", gxAttId:"Promptcsticms"});
   GridicmsContainer.addRefreshingVar({rfrVar:"AV21PromptCSTICMSCorrespondente", rfrProp:"Value", gxAttId:"Promptcsticmscorrespondente"});
   GridicmsContainer.addRefreshingVar({rfrVar:"AV15ExcICMS", rfrProp:"Value", gxAttId:"Excicms"});
   GridicmsContainer.addRefreshingVar({rfrVar:"AV29SNNovaLinhaICMS"});
   GridicmsContainer.addRefreshingVar({rfrVar:"AV27SnErro"});
   GridicmsContainer.addRefreshingVar({rfrVar:"AV28snExcluiICMS"});
   GridicmsContainer.addRefreshingVar({rfrVar:"AV10CSTICMS", rfrProp:"Value", gxAttId:"Csticms"});
   GridicmsContainer.addRefreshingVar({rfrVar:"AV11CSTICMSCorrespondente", rfrProp:"Value", gxAttId:"Csticmscorrespondente"});
   GridicmsContainer.addRefreshingVar({rfrVar:"AV22SdtICMS"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hdevolucaogarantiacst());

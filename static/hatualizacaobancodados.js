/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 19:0:13.15
*/
gx.evt.autoSkip = false;
gx.define('hatualizacaobancodados', false, function () {
   this.ServerClass =  "hatualizacaobancodados" ;
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
      this.AV15SdtScriptSQL=gx.fn.getControlValue("vSDTSCRIPTSQL") ;
      this.AV43SnBackup=gx.fn.getControlValue("vSNBACKUP") ;
      this.AV50Tela=gx.fn.getControlValue("vTELA") ;
      this.AV56SnObjExt=gx.fn.getControlValue("vSNOBJEXT") ;
   };
   this.Validv_Scriptsqlprocesso=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSCRIPTSQLPROCESSO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122112_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e112112_client=function()
   {
      this.executeServerEvent("TIMER.ELAPSED", false, null, true, true);
   };
   this.e132112_client=function()
   {
      this.executeServerEvent("'PROSSEGUIR'", false, null, false, false);
   };
   this.e162112_client=function()
   {
      this.executeServerEvent("'DETALHAR'", true, arguments[0], false, false);
   };
   this.e182112_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,12,17,20,26,27,28,29,30,39,40,43,44];
   this.GXLastCtrlId =44;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",25,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hatualizacaobancodados",[],false,1,false,true,0,false,false,false,"CollSdtScriptSQL.SdtScriptSQLItem",0,"px","Novo registro",false,false,false,null,null,false,"AV15SdtScriptSQL",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("GXV10Q",26,"CTLSEQUENCIA","","","Sequencia","int",0,"px",4,4,"right",null,[],"GXV10Q","GXV10Q",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10R",27,"CTLORDEMSERVICO","Ordem de Serviço","","OrdemServico","int",0,"px",8,8,"right",null,[],"GXV10R","GXV10R",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("GXV10S",28,"CTLDESCRICAOORDEMSERVICO","Descrição","","DescricaoOrdemServico","svchar",0,"px",100,80,"left",null,[],"GXV10S","GXV10S",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Detalhe","vDETALHE",29,0,"px",17,"px","e162112_client","","Detalhar","Image","GridColumnImage");
   GridContainer.addBitmap("&Status","vSTATUS",30,0,"px",17,"px",null,"","Status","Image","GridColumnImage");
   this.setGrid(GridContainer);
   this.TIMERContainer = gx.uc.getNew(this, 38, 26, "Timer", "TIMERContainer", "Timer");
   var TIMERContainer = this.TIMERContainer;
   TIMERContainer.setProp("Interval", "Interval", 2000, "num");
   TIMERContainer.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMERContainer.setProp("Visible", "Visible", true, "bool");
   TIMERContainer.setProp("Class", "Class", "", "char");
   TIMERContainer.setC2ShowFunction(function(UC) { UC.start(); });
   TIMERContainer.addEventHandler("Elapsed", this.e112112_client);
   this.setUserControl(TIMERContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"LOGOEMPRESA",grid:0};
   GXValidFnc[10]={fld:"TXTTITULO", format:0,grid:0};
   GXValidFnc[12]={fld:"LOGOSISTEMA",grid:0};
   GXValidFnc[17]={fld:"TABLE1",grid:0};
   GXValidFnc[20]={fld:"TXTBACKUP2", format:0,grid:0};
   GXValidFnc[26]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSEQUENCIA",gxz:"ZV61GXV10Q",gxold:"OV61GXV10Q",gxvar:"GXV10Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10Q=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV61GXV10Q=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLSEQUENCIA",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10Q,0)},c2v:function(){gx.O.GXV10Q=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLSEQUENCIA",row || gx.fn.currentGridRowImpl(25),'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLORDEMSERVICO",gxz:"ZV62GXV10R",gxold:"OV62GXV10R",gxvar:"GXV10R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10R=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV62GXV10R=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLORDEMSERVICO",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10R,0)},c2v:function(){gx.O.GXV10R=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLORDEMSERVICO",row || gx.fn.currentGridRowImpl(25),'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLDESCRICAOORDEMSERVICO",gxz:"ZV63GXV10S",gxold:"OV63GXV10S",gxvar:"GXV10S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10S=Value},v2z:function(Value){gx.O.ZV63GXV10S=Value},v2c:function(row){gx.fn.setGridControlValue("CTLDESCRICAOORDEMSERVICO",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10S,0)},c2v:function(){gx.O.GXV10S=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLDESCRICAOORDEMSERVICO",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDETALHE",gxz:"ZV6detalhe",gxold:"OV6detalhe",gxvar:"AV6detalhe",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV6detalhe=Value},v2z:function(Value){gx.O.ZV6detalhe=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vDETALHE",row || gx.fn.currentGridRowImpl(25),gx.O.AV6detalhe,gx.O.AV65Detalhe_GXI)},c2v:function(){gx.O.AV65Detalhe_GXI=this.val_GXI();gx.O.AV6detalhe=this.val()},val:function(row){return gx.fn.getGridControlValue("vDETALHE",row || gx.fn.currentGridRowImpl(25))},val_GXI:function(row){return gx.fn.getGridControlValue("vDETALHE_GXI",row || gx.fn.currentGridRowImpl(25))}, gxvar_GXI:'AV65Detalhe_GXI',nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:25,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSTATUS",gxz:"ZV17status",gxold:"OV17status",gxvar:"AV17status",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17status=Value},v2z:function(Value){gx.O.ZV17status=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vSTATUS",row || gx.fn.currentGridRowImpl(25),gx.O.AV17status,gx.O.AV68Status_GXI)},c2v:function(){gx.O.AV68Status_GXI=this.val_GXI();gx.O.AV17status=this.val()},val:function(row){return gx.fn.getGridControlValue("vSTATUS",row || gx.fn.currentGridRowImpl(25))},val_GXI:function(row){return gx.fn.getGridControlValue("vSTATUS_GXI",row || gx.fn.currentGridRowImpl(25))}, gxvar_GXI:'AV68Status_GXI',nac:gx.falseFn};
   GXValidFnc[39]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Scriptsqlprocesso,isvalid:null,rgrid:[],fld:"vSCRIPTSQLPROCESSO",gxz:"ZV11ScriptSqlProcesso",gxold:"OV11ScriptSqlProcesso",gxvar:"AV11ScriptSqlProcesso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11ScriptSqlProcesso=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11ScriptSqlProcesso=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSCRIPTSQLPROCESSO",gx.O.AV11ScriptSqlProcesso,0)},c2v:function(){gx.O.AV11ScriptSqlProcesso=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSCRIPTSQLPROCESSO",'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEXECUTAR",gxz:"ZV16SnExecutar",gxold:"OV16SnExecutar",gxvar:"AV16SnExecutar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16SnExecutar=Value},v2z:function(Value){gx.O.ZV16SnExecutar=Value},v2c:function(){gx.fn.setControlValue("vSNEXECUTAR",gx.O.AV16SnExecutar,0)},c2v:function(){gx.O.AV16SnExecutar=this.val()},val:function(){return gx.fn.getControlValue("vSNEXECUTAR")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVERSAO",gxz:"ZV53Versao",gxold:"OV53Versao",gxvar:"AV53Versao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53Versao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV53Versao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vVERSAO",gx.O.AV53Versao,0)},c2v:function(){gx.O.AV53Versao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vVERSAO",'.')},nac:gx.falseFn};
   this.ZV61GXV10Q = 0 ;
   this.OV61GXV10Q = 0 ;
   this.ZV62GXV10R = 0 ;
   this.OV62GXV10R = 0 ;
   this.ZV63GXV10S = "" ;
   this.OV63GXV10S = "" ;
   this.ZV6detalhe = "" ;
   this.OV6detalhe = "" ;
   this.ZV17status = "" ;
   this.OV17status = "" ;
   this.AV11ScriptSqlProcesso = 0 ;
   this.ZV11ScriptSqlProcesso = 0 ;
   this.OV11ScriptSqlProcesso = 0 ;
   this.AV16SnExecutar = "" ;
   this.ZV16SnExecutar = "" ;
   this.OV16SnExecutar = "" ;
   this.AV53Versao = 0 ;
   this.ZV53Versao = 0 ;
   this.OV53Versao = 0 ;
   this.AV11ScriptSqlProcesso = 0 ;
   this.AV16SnExecutar = "" ;
   this.AV53Versao = 0 ;
   this.AV43SnBackup = "" ;
   this.AV50Tela = "" ;
   this.AV56SnObjExt = "" ;
   this.GXV10Q = 0 ;
   this.GXV10R = 0 ;
   this.GXV10S = "" ;
   this.AV6detalhe = "" ;
   this.AV17status = "" ;
   this.A9862ScriptSqlStatus = 0 ;
   this.A9850ScriptSqlProcesso = 0 ;
   this.AV15SdtScriptSQL = [ ] ;
   this.Events = {"e122112_client": ["ENTER", true] ,"e112112_client": ["TIMER.ELAPSED", true] ,"e132112_client": ["'PROSSEGUIR'", true] ,"e162112_client": ["'DETALHAR'", true] ,"e182112_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV6detalhe',fld:'vDETALHE'},{av:'AV16SnExecutar',fld:'vSNEXECUTAR'},{av:'AV53Versao',fld:'vVERSAO'},{av:'AV11ScriptSqlProcesso',fld:'vSCRIPTSQLPROCESSO'},{av:'AV15SdtScriptSQL',fld:'vSDTSCRIPTSQL',grid:25}],[{ctrl:'CTLORDEMSERVICO',prop:'Visible'},{av:'AV16SnExecutar',fld:'vSNEXECUTAR'},{av:'AV52ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV15SdtScriptSQL',fld:'vSDTSCRIPTSQL',grid:25},{av:'AV53Versao',fld:'vVERSAO'},{av:'AV11ScriptSqlProcesso',fld:'vSCRIPTSQLPROCESSO'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{ctrl:'BTNEXECUTA',prop:'Visible'}]];
   this.EvtParms["ENTER"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV6detalhe',fld:'vDETALHE'},{av:'AV53Versao',fld:'vVERSAO'},{av:'AV11ScriptSqlProcesso',fld:'vSCRIPTSQLPROCESSO'},{av:'AV15SdtScriptSQL',fld:'vSDTSCRIPTSQL',grid:25},{av:'AV16SnExecutar',fld:'vSNEXECUTAR'},{av:'AV43SnBackup',fld:'vSNBACKUP',hsh:true},{av:'A9850ScriptSqlProcesso',fld:'SCRIPTSQLPROCESSO'},{av:'A9862ScriptSqlStatus',fld:'SCRIPTSQLSTATUS'},{av:'AV36NmOper',fld:'vNMOPER'},{av:'AV49BlueFocusEnv',fld:'vBLUEFOCUSENV'},{av:'Gx_date',fld:'vTODAY'},{av:'this.AV26DbConnection.Connectiondata',ctrl:'vDBCONNECTION',prop:'Connectiondata'},{av:'AV25Chave',fld:'vCHAVE'},{av:'this.AV26DbConnection.Username',ctrl:'vDBCONNECTION',prop:'Username'}],[{av:'AV52ApplicationFolder',fld:'vAPPLICATIONFOLDER'},{av:'AV15SdtScriptSQL',fld:'vSDTSCRIPTSQL',grid:25},{av:'AV48SnProcAndamento',fld:'vSNPROCANDAMENTO'},{av:'AV66GXLvl69',fld:'vGXLVL69'},{av:'AV36NmOper',fld:'vNMOPER'},{av:'AV25Chave',fld:'vCHAVE'},{av:'AV47Usuario',fld:'vUSUARIO'},{av:'AV35JDBCDriverURL',fld:'vJDBCDRIVERURL'},{av:'AV32Host',fld:'vHOST'},{av:'AV40Porta',fld:'vPORTA'},{av:'AV22ArquivoBanco',fld:'vARQUIVOBANCO'},{av:'AV51user',fld:'vUSER'},{av:'AV16SnExecutar',fld:'vSNEXECUTAR'},{av:'AV53Versao',fld:'vVERSAO'},{av:'AV11ScriptSqlProcesso',fld:'vSCRIPTSQLPROCESSO'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{ctrl:'BTNEXECUTA',prop:'Visible'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV11ScriptSqlProcesso',fld:'vSCRIPTSQLPROCESSO'},{av:'AV15SdtScriptSQL',fld:'vSDTSCRIPTSQL',grid:25},{av:'AV16SnExecutar',fld:'vSNEXECUTAR'}],[{av:'AV12ScriptSqlStatus',fld:'vSCRIPTSQLSTATUS'},{av:'AV17status',fld:'vSTATUS'},{av:'gx.fn.getCtrlProperty("vSTATUS","Tooltiptext")',ctrl:'vSTATUS',prop:'Tooltiptext'}]];
   this.EvtParms["TIMER.ELAPSED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV6detalhe',fld:'vDETALHE'},{av:'AV53Versao',fld:'vVERSAO'},{av:'AV11ScriptSqlProcesso',fld:'vSCRIPTSQLPROCESSO'},{av:'AV15SdtScriptSQL',fld:'vSDTSCRIPTSQL',grid:25},{av:'AV16SnExecutar',fld:'vSNEXECUTAR'},{av:'A9850ScriptSqlProcesso',fld:'SCRIPTSQLPROCESSO'},{av:'A9862ScriptSqlStatus',fld:'SCRIPTSQLSTATUS'},{av:'AV20isErro',fld:'vISERRO'}],[{av:'AV9isFinalizado',fld:'vISFINALIZADO'},{av:'AV7hasProcesso',fld:'vHASPROCESSO'},{av:'AV5hasErro',fld:'vHASERRO'},{av:'AV70GXLvl172',fld:'vGXLVL172'},{av:'AV20isErro',fld:'vISERRO'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{ctrl:'BTNPROSSEGUIR',prop:'Visible'},{ctrl:'BTNEXECUTA',prop:'Visible'},{av:'AV16SnExecutar',fld:'vSNEXECUTAR'}]];
   this.EvtParms["'PROSSEGUIR'"] = [[{av:'AV53Versao',fld:'vVERSAO'}],[{av:'AV57isCloud',fld:'vISCLOUD'},{av:'AV55AtualizacaoAtual',fld:'vATUALIZACAOATUAL'},{av:'AV54VersaoAtual',fld:'vVERSAOATUAL'}]];
   this.EvtParms["'DETALHAR'"] = [[{av:'AV16SnExecutar',fld:'vSNEXECUTAR'},{av:'AV11ScriptSqlProcesso',fld:'vSCRIPTSQLPROCESSO'},{av:'AV15SdtScriptSQL',fld:'vSDTSCRIPTSQL',grid:25}],[]];
   this.EnterCtrl = ["BTNEXECUTA"];
   this.setVCMap("AV15SdtScriptSQL", "vSDTSCRIPTSQL", 0, "CollSdtScriptSQL.SdtScriptSQLItem");
   this.setVCMap("AV43SnBackup", "vSNBACKUP", 0, "char");
   this.setVCMap("AV50Tela", "vTELA", 0, "char");
   this.setVCMap("AV56SnObjExt", "vSNOBJEXT", 0, "char");
   this.setVCMap("AV15SdtScriptSQL", "vSDTSCRIPTSQL", 0, "CollSdtScriptSQL.SdtScriptSQLItem");
   GridContainer.addRefreshingVar({rfrVar:"AV6detalhe", rfrProp:"Value", gxAttId:"Detalhe"});
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar(this.GXValidFnc[39]);
   GridContainer.addRefreshingVar({rfrVar:"AV15SdtScriptSQL"});
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   this.addGridBCProperty("Sdtscriptsql", ["Sequencia"], this.GXValidFnc[26], "AV15SdtScriptSQL");
   this.addGridBCProperty("Sdtscriptsql", ["OrdemServico"], this.GXValidFnc[27], "AV15SdtScriptSQL");
   this.addGridBCProperty("Sdtscriptsql", ["DescricaoOrdemServico"], this.GXValidFnc[28], "AV15SdtScriptSQL");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizacaobancodados());

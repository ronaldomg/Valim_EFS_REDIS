/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:23:32.72
*/
gx.evt.autoSkip = false;
gx.define('hconsultabem', false, function () {
   this.ServerClass =  "hconsultabem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV15OutBemCodigo=gx.fn.getIntegerValue("vOUTBEMCODIGO",'.') ;
      this.AV19PBemSubgrupo=gx.fn.getIntegerValue("vPBEMSUBGRUPO",'.') ;
   };
   this.Validv_Tipobemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOBEMID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadraotipobem=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAOTIPOBEM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e17dj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11dj2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12dj2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13dj2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14dj2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15dj2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19dj2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21dj1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,24,26,29,31,32,35,37,40,42,45,47,49,55,56,57,58,59,60,66,69,71,73,75,77,78,79,80,81,82,83,85];
   this.GXLastCtrlId =85;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultabem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2262,55,"BEMCODIGO","","","BemCodigo","int",0,"px",7,7,"right",null,[],2262,"BemCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2318,56,"BEMSUBGRUPO","Grp","","BemSubgrupo","int",0,"px",2,2,"right",null,[],2318,"BemSubgrupo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2264,57,"BEMDESCRICAORESUMIDA","","","BemDescricaoResumida","svchar",0,"px",40,40,"left",null,[],2264,"BemDescricaoResumida",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2035,58,"TIPOBEMDESCRICAO","","","TipoBemDescricao","svchar",0,"px",40,40,"left",null,[],2035,"TipoBemDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2321,59,"BEMDTAQUISICAO","","","BemDtAquisicao","date",0,"px",10,10,"right",null,[],2321,"BemDtAquisicao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(2320,60,"BEMSITUACAO","","BemSituacao","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLERANGECODIGO",grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMCODIGO",gxz:"ZV16BemCodigo",gxold:"OV16BemCodigo",gxvar:"AV16BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV16BemCodigo,0)},c2v:function(){gx.O.AV16BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSUBGRUPO",gxz:"ZV18BemSubgrupo",gxold:"OV18BemSubgrupo",gxvar:"AV18BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV18BemSubgrupo,0)},c2v:function(){gx.O.AV18BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAORESUMIDA",gxz:"ZV17BemDescricaoResumida",gxold:"OV17BemDescricaoResumida",gxvar:"AV17BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17BemDescricaoResumida=Value},v2z:function(Value){gx.O.ZV17BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAORESUMIDA",gx.O.AV17BemDescricaoResumida,0)},c2v:function(){gx.O.AV17BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TXTTIPOBEM", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipobemid,isvalid:null,rgrid:[],fld:"vTIPOBEMID",gxz:"ZV22TipoBemId",gxold:"OV22TipoBemId",gxvar:"AV22TipoBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22TipoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22TipoBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMID",gx.O.AV22TipoBemId,0)},c2v:function(){gx.O.AV22TipoBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMDESCRICAO",gxz:"ZV20TipoBemDescricao",gxold:"OV20TipoBemDescricao",gxvar:"AV20TipoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20TipoBemDescricao=Value},v2z:function(Value){gx.O.ZV20TipoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOBEMDESCRICAO",gx.O.AV20TipoBemDescricao,0)},c2v:function(){gx.O.AV20TipoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAOBEM",gxz:"ZV31SituacaoBem",gxold:"OV31SituacaoBem",gxvar:"AV31SituacaoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV31SituacaoBem=Value},v2z:function(Value){gx.O.ZV31SituacaoBem=Value},v2c:function(){gx.fn.setComboBoxValue("vSITUACAOBEM",gx.O.AV31SituacaoBem)},c2v:function(){gx.O.AV31SituacaoBem=this.val()},val:function(){return gx.fn.getControlValue("vSITUACAOBEM")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TXTPROCESSO1", format:0,grid:0};
   GXValidFnc[42]={fld:"TABLERANGEAQUISICAO",grid:0};
   GXValidFnc[45]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTAQUISICAOINI",gxz:"ZV23DtAquisicaoIni",gxold:"OV23DtAquisicaoIni",gxvar:"AV23DtAquisicaoIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23DtAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV23DtAquisicaoIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTAQUISICAOINI",gx.O.AV23DtAquisicaoIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV23DtAquisicaoIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTAQUISICAOINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[47]={fld:"TXTA", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTAQUISICAOFIM",gxz:"ZV24DtAquisicaoFim",gxold:"OV24DtAquisicaoFim",gxvar:"AV24DtAquisicaoFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DtAquisicaoFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DtAquisicaoFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTAQUISICAOFIM",gx.O.AV24DtAquisicaoFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DtAquisicaoFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTAQUISICAOFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[55]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMCODIGO",gxz:"Z2262BemCodigo",gxold:"O2262BemCodigo",gxvar:"A2262BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2262BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2262BemCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMCODIGO",row || gx.fn.currentGridRowImpl(54),gx.O.A2262BemCodigo,0)},c2v:function(){gx.O.A2262BemCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BEMCODIGO",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMSUBGRUPO",gxz:"Z2318BemSubgrupo",gxold:"O2318BemSubgrupo",gxvar:"A2318BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2318BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2318BemSubgrupo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMSUBGRUPO",row || gx.fn.currentGridRowImpl(54),gx.O.A2318BemSubgrupo,0)},c2v:function(){gx.O.A2318BemSubgrupo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BEMSUBGRUPO",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMDESCRICAORESUMIDA",gxz:"Z2264BemDescricaoResumida",gxold:"O2264BemDescricaoResumida",gxvar:"A2264BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2264BemDescricaoResumida=Value},v2z:function(Value){gx.O.Z2264BemDescricaoResumida=Value},v2c:function(row){gx.fn.setGridControlValue("BEMDESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(54),gx.O.A2264BemDescricaoResumida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2264BemDescricaoResumida=this.val()},val:function(row){return gx.fn.getGridControlValue("BEMDESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMDESCRICAO",gxz:"Z2035TipoBemDescricao",gxold:"O2035TipoBemDescricao",gxvar:"A2035TipoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2035TipoBemDescricao=Value},v2z:function(Value){gx.O.Z2035TipoBemDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBEMDESCRICAO",row || gx.fn.currentGridRowImpl(54),gx.O.A2035TipoBemDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2035TipoBemDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBEMDESCRICAO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMDTAQUISICAO",gxz:"Z2321BemDtAquisicao",gxold:"O2321BemDtAquisicao",gxvar:"A2321BemDtAquisicao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2321BemDtAquisicao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2321BemDtAquisicao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMDTAQUISICAO",row || gx.fn.currentGridRowImpl(54),gx.O.A2321BemDtAquisicao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2321BemDtAquisicao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BEMDTAQUISICAO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMSITUACAO",gxz:"Z2320BemSituacao",gxold:"O2320BemSituacao",gxvar:"A2320BemSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2320BemSituacao=Value},v2z:function(Value){gx.O.Z2320BemSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("BEMSITUACAO",row || gx.fn.currentGridRowImpl(54),gx.O.A2320BemSituacao)},c2v:function(){gx.O.A2320BemSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("BEMSITUACAO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TABLENAV",grid:0};
   GXValidFnc[69]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[71]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[73]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[75]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[77]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[78]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTER",gxz:"ZV28QtCaracter",gxold:"OV28QtCaracter",gxvar:"AV28QtCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28QtCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28QtCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTER",gx.O.AV28QtCaracter,0)},c2v:function(){gx.O.AV28QtCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[79]={fld:"JS", format:2,grid:0};
   GXValidFnc[80]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadraotipobem,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOTIPOBEM",gxz:"ZV27EmpresaPadraoTipoBem",gxold:"OV27EmpresaPadraoTipoBem",gxvar:"AV27EmpresaPadraoTipoBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27EmpresaPadraoTipoBem=Value},v2z:function(Value){gx.O.ZV27EmpresaPadraoTipoBem=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOTIPOBEM",gx.O.AV27EmpresaPadraoTipoBem,0)},c2v:function(){gx.O.AV27EmpresaPadraoTipoBem=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOTIPOBEM")},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV33Pagina",gxold:"OV33Pagina",gxvar:"AV33Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV33Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV33Pagina)},c2v:function(){gx.O.AV33Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV34PaginaAux",gxold:"OV34PaginaAux",gxvar:"AV34PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV34PaginaAux,0)},c2v:function(){gx.O.AV34PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[85]={fld:"PROMPT_TIPOBEMID",grid:0};
   this.AV16BemCodigo = 0 ;
   this.ZV16BemCodigo = 0 ;
   this.OV16BemCodigo = 0 ;
   this.AV18BemSubgrupo = 0 ;
   this.ZV18BemSubgrupo = 0 ;
   this.OV18BemSubgrupo = 0 ;
   this.AV17BemDescricaoResumida = "" ;
   this.ZV17BemDescricaoResumida = "" ;
   this.OV17BemDescricaoResumida = "" ;
   this.AV22TipoBemId = 0 ;
   this.ZV22TipoBemId = 0 ;
   this.OV22TipoBemId = 0 ;
   this.AV20TipoBemDescricao = "" ;
   this.ZV20TipoBemDescricao = "" ;
   this.OV20TipoBemDescricao = "" ;
   this.AV31SituacaoBem = "" ;
   this.ZV31SituacaoBem = "" ;
   this.OV31SituacaoBem = "" ;
   this.AV23DtAquisicaoIni = gx.date.nullDate() ;
   this.ZV23DtAquisicaoIni = gx.date.nullDate() ;
   this.OV23DtAquisicaoIni = gx.date.nullDate() ;
   this.AV24DtAquisicaoFim = gx.date.nullDate() ;
   this.ZV24DtAquisicaoFim = gx.date.nullDate() ;
   this.OV24DtAquisicaoFim = gx.date.nullDate() ;
   this.Z2262BemCodigo = 0 ;
   this.O2262BemCodigo = 0 ;
   this.Z2318BemSubgrupo = 0 ;
   this.O2318BemSubgrupo = 0 ;
   this.Z2264BemDescricaoResumida = "" ;
   this.O2264BemDescricaoResumida = "" ;
   this.Z2035TipoBemDescricao = "" ;
   this.O2035TipoBemDescricao = "" ;
   this.Z2321BemDtAquisicao = gx.date.nullDate() ;
   this.O2321BemDtAquisicao = gx.date.nullDate() ;
   this.Z2320BemSituacao = "" ;
   this.O2320BemSituacao = "" ;
   this.AV28QtCaracter = 0 ;
   this.ZV28QtCaracter = 0 ;
   this.OV28QtCaracter = 0 ;
   this.AV27EmpresaPadraoTipoBem = "" ;
   this.ZV27EmpresaPadraoTipoBem = "" ;
   this.OV27EmpresaPadraoTipoBem = "" ;
   this.AV33Pagina = 0 ;
   this.ZV33Pagina = 0 ;
   this.OV33Pagina = 0 ;
   this.AV34PaginaAux = 0 ;
   this.ZV34PaginaAux = 0 ;
   this.OV34PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16BemCodigo = 0 ;
   this.AV18BemSubgrupo = 0 ;
   this.AV17BemDescricaoResumida = "" ;
   this.AV22TipoBemId = 0 ;
   this.AV20TipoBemDescricao = "" ;
   this.AV31SituacaoBem = "" ;
   this.AV23DtAquisicaoIni = gx.date.nullDate() ;
   this.AV24DtAquisicaoFim = gx.date.nullDate() ;
   this.AV28QtCaracter = 0 ;
   this.AV27EmpresaPadraoTipoBem = "" ;
   this.AV33Pagina = 0 ;
   this.AV34PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV15OutBemCodigo = 0 ;
   this.AV19PBemSubgrupo = 0 ;
   this.A2072TipoBemEmpresaId = "" ;
   this.A2034TipoBemId = 0 ;
   this.A2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2264BemDescricaoResumida = "" ;
   this.A2035TipoBemDescricao = "" ;
   this.A2321BemDtAquisicao = gx.date.nullDate() ;
   this.A2320BemSituacao = "" ;
   this.Events = {"e17dj2_client": ["ENTER", true] ,"e11dj2_client": ["'GXM_FIRST'", true] ,"e12dj2_client": ["'GXM_PREVIOUS'", true] ,"e13dj2_client": ["'GXM_NEXT'", true] ,"e14dj2_client": ["'GXM_LAST'", true] ,"e15dj2_client": ["'PROCURAR'", true] ,"e19dj2_client": ["'ATUALIZAPAGINA'", true] ,"e21dj1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'BEMCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BEMCODIGO","Title")',ctrl:'BEMCODIGO',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'BEMDESCRICAORESUMIDA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BEMDESCRICAORESUMIDA","Title")',ctrl:'BEMDESCRICAORESUMIDA',prop:'Title'},{ctrl:'TIPOBEMDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBEMDESCRICAO","Title")',ctrl:'TIPOBEMDESCRICAO',prop:'Title'},{ctrl:'BEMDTAQUISICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BEMDTAQUISICAO","Title")',ctrl:'BEMDTAQUISICAO',prop:'Title'},{ctrl:'BEMSITUACAO'},{av:'AV34PaginaAux',fld:'vPAGINAAUX'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV32NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'}],[{av:'AV15OutBemCodigo',fld:'vOUTBEMCODIGO'},{av:'AV19PBemSubgrupo',fld:'vPBEMSUBGRUPO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV25SnCarrega',fld:'vSNCARREGA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV33Pagina',fld:'vPAGINA'}],[{av:'AV25SnCarrega',fld:'vSNCARREGA'},{av:'AV33Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV34PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV25SnCarrega',fld:'vSNCARREGA'},{av:'AV33Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV34PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV25SnCarrega',fld:'vSNCARREGA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV26SnErro',fld:'vSNERRO'},{av:'AV22TipoBemId',fld:'vTIPOBEMID'},{av:'A2072TipoBemEmpresaId',fld:'TIPOBEMEMPRESAID'},{av:'AV27EmpresaPadraoTipoBem',fld:'vEMPRESAPADRAOTIPOBEM'},{av:'A2034TipoBemId',fld:'TIPOBEMID'},{av:'AV24DtAquisicaoFim',fld:'vDTAQUISICAOFIM'},{av:'AV23DtAquisicaoIni',fld:'vDTAQUISICAOINI'}],[{av:'AV25SnCarrega',fld:'vSNCARREGA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV33Pagina',fld:'vPAGINA'},{av:'AV26SnErro',fld:'vSNERRO'},{av:'AV37GXLvl175',fld:'vGXLVL175'},{av:'AV24DtAquisicaoFim',fld:'vDTAQUISICAOFIM'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setPrompt("PROMPT_TIPOBEMID", [31]);
   this.setVCMap("AV15OutBemCodigo", "vOUTBEMCODIGO", 0, "int");
   this.setVCMap("AV19PBemSubgrupo", "vPBEMSUBGRUPO", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[83]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultabem());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:30:14.19
*/
gx.evt.autoSkip = false;
gx.define('hlancamentobem', false, function () {
   this.ServerClass =  "hlancamentobem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV43Snaprocreicms=gx.fn.getControlValue("vSNAPROCREICMS") ;
      this.AV61SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A2261BemEmpresaId=gx.fn.getControlValue("BEMEMPRESAID") ;
      this.A2264BemDescricaoResumida=gx.fn.getControlValue("BEMDESCRICAORESUMIDA") ;
      this.A2035TipoBemDescricao=gx.fn.getControlValue("TIPOBEMDESCRICAO") ;
   };
   this.Validv_Bemcodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemsubgrupo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMSUBGRUPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemcodigo=function()
   {
      this.StandaloneModal( );
      this.StandaloneNotModal( );
      gx.ajax.validSrvEvt("dyncall","valid_Bemcodigo",["gx.O.A2261BemEmpresaId", "gx.O.A2262BemCodigo", "gx.O.A2318BemSubgrupo", "gx.O.A2320BemSituacao"],["A2320BemSituacao"]);
      return true;
   }
   this.Valid_Bemsubgrupo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(80) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BEMSUBGRUPO", gx.fn.currentGridRowImpl(80));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Bemempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vBEMEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemcodigo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(80) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BEMCODIGO", gx.fn.currentGridRowImpl(80));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemsubgrupo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(80) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BEMSUBGRUPO", gx.fn.currentGridRowImpl(80));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemcodigo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(80) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BEMCODIGO", gx.fn.currentGridRowImpl(80));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Bemsubgrupo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(80) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BEMSUBGRUPO", gx.fn.currentGridRowImpl(80));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e26eo1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalparmaprovcredito",[]), []);
      this.refreshOutputs([]);
   };
   this.e11eo2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12eo2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16eo2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13eo2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14eo2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15eo2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19eo2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20eo2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21eo2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22eo2_client=function()
   {
      this.executeServerEvent("'ALTERARDATA'", true, arguments[0], false, false);
   };
   this.e24eo2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e27eo2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e28eo2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,26,27,30,32,34,36,39,41,44,46,48,55,58,61,63,65,67,69,71,74,76,77,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,101,102,104,105,106,109];
   this.GXLastCtrlId =109;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",80,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hlancamentobem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2262,81,"BEMCODIGO","Código do HistoricoBem","","BemCodigo","int",0,"px",7,7,"right",null,[],2262,"BemCodigo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2318,82,"BEMSUBGRUPO","Subgrupo","","BemSubgrupo","int",0,"px",2,2,"right",null,[],2318,"BemSubgrupo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2413,83,"LANCAMENTOBEMDATA","","","LancamentoBemData","date",0,"px",10,10,"right",null,[],2413,"LancamentoBemData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2414,84,"LANCAMENTOBEMSEQUENCIA","","","LancamentoBemSequencia","int",0,"px",4,4,"right",null,[],2414,"LancamentoBemSequencia",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(2403,85,"LANCAMENTOBEMTIPO","","LancamentoBemTipo","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2351,86,"LANCAMENTOBEMVLRBEM","","","LancamentoBemVlrBem","decimal",0,"px",22,22,"right",null,[],2351,"LancamentoBemVlrBem",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2341,87,"LANCAMENTOBEMVLRCORBEM","","","LancamentoBemVlrCorBem","decimal",0,"px",22,22,"right",null,[],2341,"LancamentoBemVlrCorBem",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2342,88,"LANCAMENTOBEMVLRREDUTORA","","","LancamentoBemVlrRedutora","decimal",0,"px",22,22,"right",null,[],2342,"LancamentoBemVlrRedutora",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2353,89,"LANCAMENTOBEMCORREDUTORA","","","LancamentoBemCorRedutora","decimal",0,"px",22,22,"right",null,[],2353,"LancamentoBemCorRedutora",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2352,90,"LANCAMENTOBEMVLRICMS","","","LancamentoBemVlrIcms","decimal",0,"px",22,22,"right",null,[],2352,"LancamentoBemVlrIcms",true,2,false,false,"Attribute",1,"");
   GridContainer.addComboBox(2320,91,"BEMSITUACAO","Situação","BemSituacao","char",null,0,false,false,0,"px","");
   GridContainer.addBitmap("&Bmpdata","vBMPDATA",92,0,"px",17,"px","e22eo2_client","","Alt Data","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",93,0,"px",17,"px","e19eo2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",94,0,"px",17,"px","e20eo2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",95,0,"px",17,"px","e21eo2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE11",grid:0};
   GXValidFnc[12]={fld:"TABLE3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE13",grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMCODIGO",gxz:"ZV36BemCodigo",gxold:"OV36BemCodigo",gxvar:"AV36BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV36BemCodigo,0)},c2v:function(){gx.O.AV36BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMSUBGRUPO",gxz:"ZV37BemSubgrupo",gxold:"OV37BemSubgrupo",gxvar:"AV37BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV37BemSubgrupo,0)},c2v:function(){gx.O.AV37BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAORESUMIDA",gxz:"ZV48BemDescricaoResumida",gxold:"OV48BemDescricaoResumida",gxvar:"AV48BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48BemDescricaoResumida=Value},v2z:function(Value){gx.O.ZV48BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAORESUMIDA",gx.O.AV48BemDescricaoResumida,0)},c2v:function(){gx.O.AV48BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TABLE12",grid:0};
   GXValidFnc[30]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOBEMDESCRICAO",gxz:"ZV35TipoBemDescricao",gxold:"OV35TipoBemDescricao",gxvar:"AV35TipoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35TipoBemDescricao=Value},v2z:function(Value){gx.O.ZV35TipoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOBEMDESCRICAO",gx.O.AV35TipoBemDescricao,0)},c2v:function(){gx.O.AV35TipoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMSITUACAODESCRICAO",gxz:"ZV51BemSituacaoDescricao",gxold:"OV51BemSituacaoDescricao",gxvar:"AV51BemSituacaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51BemSituacaoDescricao=Value},v2z:function(Value){gx.O.ZV51BemSituacaoDescricao=Value},v2c:function(){gx.fn.setControlValue("vBEMSITUACAODESCRICAO",gx.O.AV51BemSituacaoDescricao,0)},c2v:function(){gx.O.AV51BemSituacaoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vBEMSITUACAODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[41]={fld:"TABLE14",grid:0};
   GXValidFnc[44]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAINI",gxz:"ZV28DataIni",gxold:"OV28DataIni",gxvar:"AV28DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV28DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV28DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[46]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAFIM",gxz:"ZV29DataFim",gxold:"OV29DataFim",gxvar:"AV29DataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29DataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29DataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIM",gx.O.AV29DataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV29DataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[55]={fld:"TABLE4",grid:0};
   GXValidFnc[58]={fld:"TABLE10",grid:0};
   GXValidFnc[61]={fld:"IMAGE2",grid:0};
   GXValidFnc[63]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[65]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[67]={fld:"BTNHELP",grid:0};
   GXValidFnc[69]={fld:"BTNPARM",grid:0};
   GXValidFnc[71]={fld:"TABLE5",grid:0};
   GXValidFnc[74]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:this.Valid_Bemcodigo,isvalid:null,rgrid:[],fld:"BEMCODIGO",gxz:"Z2262BemCodigo",gxold:"O2262BemCodigo",gxvar:"A2262BemCodigo",ucs:[],op:[91],ip:[91,82,81],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2262BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2262BemCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMCODIGO",row || gx.fn.currentGridRowImpl(80),gx.O.A2262BemCodigo,0)},c2v:function(){gx.O.A2262BemCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BEMCODIGO",row || gx.fn.currentGridRowImpl(80),'.')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:this.Valid_Bemsubgrupo,isvalid:null,rgrid:[],fld:"BEMSUBGRUPO",gxz:"Z2318BemSubgrupo",gxold:"O2318BemSubgrupo",gxvar:"A2318BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2318BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2318BemSubgrupo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMSUBGRUPO",row || gx.fn.currentGridRowImpl(80),gx.O.A2318BemSubgrupo,0)},c2v:function(){gx.O.A2318BemSubgrupo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BEMSUBGRUPO",row || gx.fn.currentGridRowImpl(80),'.')},nac:gx.falseFn};
   GXValidFnc[83]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMDATA",gxz:"Z2413LancamentoBemData",gxold:"O2413LancamentoBemData",gxvar:"A2413LancamentoBemData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2413LancamentoBemData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2413LancamentoBemData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOBEMDATA",row || gx.fn.currentGridRowImpl(80),gx.O.A2413LancamentoBemData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2413LancamentoBemData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCAMENTOBEMDATA",row || gx.fn.currentGridRowImpl(80))},nac:gx.falseFn};
   GXValidFnc[84]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMSEQUENCIA",gxz:"Z2414LancamentoBemSequencia",gxold:"O2414LancamentoBemSequencia",gxvar:"A2414LancamentoBemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2414LancamentoBemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2414LancamentoBemSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOBEMSEQUENCIA",row || gx.fn.currentGridRowImpl(80),gx.O.A2414LancamentoBemSequencia,0)},c2v:function(){gx.O.A2414LancamentoBemSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOBEMSEQUENCIA",row || gx.fn.currentGridRowImpl(80),'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMTIPO",gxz:"Z2403LancamentoBemTipo",gxold:"O2403LancamentoBemTipo",gxvar:"A2403LancamentoBemTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2403LancamentoBemTipo=Value},v2z:function(Value){gx.O.Z2403LancamentoBemTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("LANCAMENTOBEMTIPO",row || gx.fn.currentGridRowImpl(80),gx.O.A2403LancamentoBemTipo)},c2v:function(){gx.O.A2403LancamentoBemTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOBEMTIPO",row || gx.fn.currentGridRowImpl(80))},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMVLRBEM",gxz:"Z2351LancamentoBemVlrBem",gxold:"O2351LancamentoBemVlrBem",gxvar:"A2351LancamentoBemVlrBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2351LancamentoBemVlrBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2351LancamentoBemVlrBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCAMENTOBEMVLRBEM",row || gx.fn.currentGridRowImpl(80),gx.O.A2351LancamentoBemVlrBem,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2351LancamentoBemVlrBem=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCAMENTOBEMVLRBEM",row || gx.fn.currentGridRowImpl(80),'.',',')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMVLRCORBEM",gxz:"Z2341LancamentoBemVlrCorBem",gxold:"O2341LancamentoBemVlrCorBem",gxvar:"A2341LancamentoBemVlrCorBem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2341LancamentoBemVlrCorBem=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2341LancamentoBemVlrCorBem=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCAMENTOBEMVLRCORBEM",row || gx.fn.currentGridRowImpl(80),gx.O.A2341LancamentoBemVlrCorBem,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2341LancamentoBemVlrCorBem=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCAMENTOBEMVLRCORBEM",row || gx.fn.currentGridRowImpl(80),'.',',')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMVLRREDUTORA",gxz:"Z2342LancamentoBemVlrRedutora",gxold:"O2342LancamentoBemVlrRedutora",gxvar:"A2342LancamentoBemVlrRedutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2342LancamentoBemVlrRedutora=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2342LancamentoBemVlrRedutora=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCAMENTOBEMVLRREDUTORA",row || gx.fn.currentGridRowImpl(80),gx.O.A2342LancamentoBemVlrRedutora,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2342LancamentoBemVlrRedutora=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCAMENTOBEMVLRREDUTORA",row || gx.fn.currentGridRowImpl(80),'.',',')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMCORREDUTORA",gxz:"Z2353LancamentoBemCorRedutora",gxold:"O2353LancamentoBemCorRedutora",gxvar:"A2353LancamentoBemCorRedutora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2353LancamentoBemCorRedutora=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2353LancamentoBemCorRedutora=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCAMENTOBEMCORREDUTORA",row || gx.fn.currentGridRowImpl(80),gx.O.A2353LancamentoBemCorRedutora,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2353LancamentoBemCorRedutora=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCAMENTOBEMCORREDUTORA",row || gx.fn.currentGridRowImpl(80),'.',',')},nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOBEMVLRICMS",gxz:"Z2352LancamentoBemVlrIcms",gxold:"O2352LancamentoBemVlrIcms",gxvar:"A2352LancamentoBemVlrIcms",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2352LancamentoBemVlrIcms=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2352LancamentoBemVlrIcms=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCAMENTOBEMVLRICMS",row || gx.fn.currentGridRowImpl(80),gx.O.A2352LancamentoBemVlrIcms,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2352LancamentoBemVlrIcms=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCAMENTOBEMVLRICMS",row || gx.fn.currentGridRowImpl(80),'.',',')},nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMSITUACAO",gxz:"Z2320BemSituacao",gxold:"O2320BemSituacao",gxvar:"A2320BemSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2320BemSituacao=Value},v2z:function(Value){gx.O.Z2320BemSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("BEMSITUACAO",row || gx.fn.currentGridRowImpl(80),gx.O.A2320BemSituacao)},c2v:function(){gx.O.A2320BemSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("BEMSITUACAO",row || gx.fn.currentGridRowImpl(80))},nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPDATA",gxz:"ZV60bmpData",gxold:"OV60bmpData",gxvar:"AV60bmpData",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV60bmpData=Value},v2z:function(Value){gx.O.ZV60bmpData=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPDATA",row || gx.fn.currentGridRowImpl(80),gx.O.AV60bmpData,gx.O.AV70Bmpdata_GXI)},c2v:function(){gx.O.AV70Bmpdata_GXI=this.val_GXI();gx.O.AV60bmpData=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPDATA",row || gx.fn.currentGridRowImpl(80))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPDATA_GXI",row || gx.fn.currentGridRowImpl(80))}, gxvar_GXI:'AV70Bmpdata_GXI',nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(80),gx.O.AV7bmpAlt,gx.O.AV67Bmpalt_GXI)},c2v:function(){gx.O.AV67Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(80))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(80))}, gxvar_GXI:'AV67Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(80),gx.O.AV8bmpExc,gx.O.AV68Bmpexc_GXI)},c2v:function(){gx.O.AV68Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(80))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(80))}, gxvar_GXI:'AV68Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:80,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(80),gx.O.AV16bmpCon,gx.O.AV69Bmpcon_GXI)},c2v:function(){gx.O.AV69Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(80))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(80))}, gxvar_GXI:'AV69Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARACTER",gxz:"ZV58QtdeCaracter",gxold:"OV58QtdeCaracter",gxvar:"AV58QtdeCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58QtdeCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV58QtdeCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECARACTER",gx.O.AV58QtdeCaracter,0)},c2v:function(){gx.O.AV58QtdeCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[104]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemempresaid,isvalid:null,rgrid:[],fld:"vBEMEMPRESAID",gxz:"ZV33BemEmpresaId",gxold:"OV33BemEmpresaId",gxvar:"AV33BemEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33BemEmpresaId=Value},v2z:function(Value){gx.O.ZV33BemEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vBEMEMPRESAID",gx.O.AV33BemEmpresaId,0)},c2v:function(){gx.O.AV33BemEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vBEMEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[106]={fld:"JS", format:2,grid:0};
   GXValidFnc[109]={fld:"PROMPT_BEMCODIGO_BEMSUBGRUPO",grid:0};
   this.AV36BemCodigo = 0 ;
   this.ZV36BemCodigo = 0 ;
   this.OV36BemCodigo = 0 ;
   this.AV37BemSubgrupo = 0 ;
   this.ZV37BemSubgrupo = 0 ;
   this.OV37BemSubgrupo = 0 ;
   this.AV48BemDescricaoResumida = "" ;
   this.ZV48BemDescricaoResumida = "" ;
   this.OV48BemDescricaoResumida = "" ;
   this.AV35TipoBemDescricao = "" ;
   this.ZV35TipoBemDescricao = "" ;
   this.OV35TipoBemDescricao = "" ;
   this.AV51BemSituacaoDescricao = "" ;
   this.ZV51BemSituacaoDescricao = "" ;
   this.OV51BemSituacaoDescricao = "" ;
   this.AV28DataIni = gx.date.nullDate() ;
   this.ZV28DataIni = gx.date.nullDate() ;
   this.OV28DataIni = gx.date.nullDate() ;
   this.AV29DataFim = gx.date.nullDate() ;
   this.ZV29DataFim = gx.date.nullDate() ;
   this.OV29DataFim = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2262BemCodigo = 0 ;
   this.O2262BemCodigo = 0 ;
   this.Z2318BemSubgrupo = 0 ;
   this.O2318BemSubgrupo = 0 ;
   this.Z2413LancamentoBemData = gx.date.nullDate() ;
   this.O2413LancamentoBemData = gx.date.nullDate() ;
   this.Z2414LancamentoBemSequencia = 0 ;
   this.O2414LancamentoBemSequencia = 0 ;
   this.Z2403LancamentoBemTipo = "" ;
   this.O2403LancamentoBemTipo = "" ;
   this.Z2351LancamentoBemVlrBem = 0 ;
   this.O2351LancamentoBemVlrBem = 0 ;
   this.Z2341LancamentoBemVlrCorBem = 0 ;
   this.O2341LancamentoBemVlrCorBem = 0 ;
   this.Z2342LancamentoBemVlrRedutora = 0 ;
   this.O2342LancamentoBemVlrRedutora = 0 ;
   this.Z2353LancamentoBemCorRedutora = 0 ;
   this.O2353LancamentoBemCorRedutora = 0 ;
   this.Z2352LancamentoBemVlrIcms = 0 ;
   this.O2352LancamentoBemVlrIcms = 0 ;
   this.Z2320BemSituacao = "" ;
   this.O2320BemSituacao = "" ;
   this.ZV60bmpData = "" ;
   this.OV60bmpData = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV58QtdeCaracter = 0 ;
   this.ZV58QtdeCaracter = 0 ;
   this.OV58QtdeCaracter = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV33BemEmpresaId = "" ;
   this.ZV33BemEmpresaId = "" ;
   this.OV33BemEmpresaId = "" ;
   this.AV36BemCodigo = 0 ;
   this.AV37BemSubgrupo = 0 ;
   this.AV48BemDescricaoResumida = "" ;
   this.AV35TipoBemDescricao = "" ;
   this.AV51BemSituacaoDescricao = "" ;
   this.AV28DataIni = gx.date.nullDate() ;
   this.AV29DataFim = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV58QtdeCaracter = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV33BemEmpresaId = "" ;
   this.A2412LancamentoBemEmpresaId = "" ;
   this.A2261BemEmpresaId = "" ;
   this.A2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2413LancamentoBemData = gx.date.nullDate() ;
   this.A2414LancamentoBemSequencia = 0 ;
   this.A2403LancamentoBemTipo = "" ;
   this.A2351LancamentoBemVlrBem = 0 ;
   this.A2341LancamentoBemVlrCorBem = 0 ;
   this.A2342LancamentoBemVlrRedutora = 0 ;
   this.A2353LancamentoBemCorRedutora = 0 ;
   this.A2352LancamentoBemVlrIcms = 0 ;
   this.A2320BemSituacao = "" ;
   this.AV60bmpData = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A2264BemDescricaoResumida = "" ;
   this.A2035TipoBemDescricao = "" ;
   this.A2072TipoBemEmpresaId = "" ;
   this.A2034TipoBemId = 0 ;
   this.AV43Snaprocreicms = "" ;
   this.AV61SnRecuperaFiltro = "" ;
   this.Events = {"e11eo2_client": ["'ANTERIOR'", true] ,"e12eo2_client": ["'PROXIMO'", true] ,"e16eo2_client": ["VPAGINA.CLICK", true] ,"e13eo2_client": ["'NOVO'", true] ,"e14eo2_client": ["'FECHAR'", true] ,"e15eo2_client": ["'PROCURAR'", true] ,"e19eo2_client": ["'ALTERAR'", true] ,"e20eo2_client": ["'EXCLUIR'", true] ,"e21eo2_client": ["'CONSULTAR'", true] ,"e22eo2_client": ["'ALTERARDATA'", true] ,"e24eo2_client": ["'ATUALIZAPAGINA'", true] ,"e27eo2_client": ["ENTER", true] ,"e28eo2_client": ["CANCEL", true] ,"e26eo1_client": ["'PARAMETROS'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV37BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28DataIni',fld:'vDATAINI'},{av:'AV29DataFim',fld:'vDATAFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV60bmpData',fld:'vBMPDATA'},{av:'gx.fn.getCtrlProperty("vBMPDATA","Tooltiptext")',ctrl:'vBMPDATA',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV61SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV33BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV58QtdeCaracter',fld:'vQTDECARACTER'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2320BemSituacao',fld:'BEMSITUACAO'},{av:'AV36BemCodigo',fld:'vBEMCODIGO'}],[{av:'AV59SnCarregar',fld:'vSNCARREGAR'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36BemCodigo',fld:'vBEMCODIGO'},{av:'AV37BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28DataIni',fld:'vDATAINI'},{av:'AV29DataFim',fld:'vDATAFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV60bmpData',fld:'vBMPDATA'},{av:'gx.fn.getCtrlProperty("vBMPDATA","Tooltiptext")',ctrl:'vBMPDATA',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV61SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV33BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV58QtdeCaracter',fld:'vQTDECARACTER'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2320BemSituacao',fld:'BEMSITUACAO'}],[{ctrl:'LANCAMENTOBEMDATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOBEMDATA","Title")',ctrl:'LANCAMENTOBEMDATA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'LANCAMENTOBEMSEQUENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOBEMSEQUENCIA","Title")',ctrl:'LANCAMENTOBEMSEQUENCIA',prop:'Title'},{ctrl:'LANCAMENTOBEMTIPO'},{ctrl:'LANCAMENTOBEMVLRBEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOBEMVLRBEM","Title")',ctrl:'LANCAMENTOBEMVLRBEM',prop:'Title'},{ctrl:'LANCAMENTOBEMVLRCORBEM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOBEMVLRCORBEM","Title")',ctrl:'LANCAMENTOBEMVLRCORBEM',prop:'Title'},{ctrl:'LANCAMENTOBEMVLRREDUTORA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOBEMVLRREDUTORA","Title")',ctrl:'LANCAMENTOBEMVLRREDUTORA',prop:'Title'},{ctrl:'LANCAMENTOBEMCORREDUTORA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOBEMCORREDUTORA","Title")',ctrl:'LANCAMENTOBEMCORREDUTORA',prop:'Title'},{ctrl:'LANCAMENTOBEMVLRICMS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOBEMVLRICMS","Title")',ctrl:'LANCAMENTOBEMVLRICMS',prop:'Title'},{av:'gx.fn.getCtrlProperty("LANCAMENTOBEMVLRICMS","Visible")',ctrl:'LANCAMENTOBEMVLRICMS',prop:'Visible'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV61SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36BemCodigo',fld:'vBEMCODIGO'},{av:'AV37BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28DataIni',fld:'vDATAINI'},{av:'AV29DataFim',fld:'vDATAFIM'},{av:'AV48BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV35TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV51BemSituacaoDescricao',fld:'vBEMSITUACAODESCRICAO'},{av:'AV59SnCarregar',fld:'vSNCARREGAR'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36BemCodigo',fld:'vBEMCODIGO'},{av:'AV37BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28DataIni',fld:'vDATAINI'},{av:'AV29DataFim',fld:'vDATAFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV60bmpData',fld:'vBMPDATA'},{av:'gx.fn.getCtrlProperty("vBMPDATA","Tooltiptext")',ctrl:'vBMPDATA',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV61SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV33BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV58QtdeCaracter',fld:'vQTDECARACTER'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2320BemSituacao',fld:'BEMSITUACAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV59SnCarregar',fld:'vSNCARREGAR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36BemCodigo',fld:'vBEMCODIGO'},{av:'AV37BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28DataIni',fld:'vDATAINI'},{av:'AV29DataFim',fld:'vDATAFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV60bmpData',fld:'vBMPDATA'},{av:'gx.fn.getCtrlProperty("vBMPDATA","Tooltiptext")',ctrl:'vBMPDATA',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV61SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV33BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV58QtdeCaracter',fld:'vQTDECARACTER'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2320BemSituacao',fld:'BEMSITUACAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV59SnCarregar',fld:'vSNCARREGAR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36BemCodigo',fld:'vBEMCODIGO'},{av:'AV37BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28DataIni',fld:'vDATAINI'},{av:'AV29DataFim',fld:'vDATAFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV60bmpData',fld:'vBMPDATA'},{av:'gx.fn.getCtrlProperty("vBMPDATA","Tooltiptext")',ctrl:'vBMPDATA',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV61SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV33BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV58QtdeCaracter',fld:'vQTDECARACTER'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2320BemSituacao',fld:'BEMSITUACAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV59SnCarregar',fld:'vSNCARREGAR'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV52SnError',fld:'vSNERROR'},{av:'Gx_date',fld:'vTODAY'},{av:'AV36BemCodigo',fld:'vBEMCODIGO'},{av:'AV37BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV33BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV58QtdeCaracter',fld:'vQTDECARACTER'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2320BemSituacao',fld:'BEMSITUACAO'},{av:'AV29DataFim',fld:'vDATAFIM'},{av:'AV28DataIni',fld:'vDATAINI'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'AV31Data',fld:'vDATA'},{av:'AV52SnError',fld:'vSNERROR'},{av:'AV59SnCarregar',fld:'vSNCARREGAR'},{av:'AV73GXLvl300',fld:'vGXLVL300'},{av:'AV48BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV35TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV51BemSituacaoDescricao',fld:'vBEMSITUACAODESCRICAO'},{av:'AV29DataFim',fld:'vDATAFIM'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV46Entrada',fld:'vENTRADA'},{av:'AV47Saida',fld:'vSAIDA'}],[{av:'gx.fn.getCtrlProperty("vEMPRESAPADRAO","Visible")',ctrl:'vEMPRESAPADRAO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vBEMEMPRESAID","Visible")',ctrl:'vBEMEMPRESAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vQTDECARACTER","Visible")',ctrl:'vQTDECARACTER',prop:'Visible'},{av:'AV58QtdeCaracter',fld:'vQTDECARACTER'},{av:'gx.fn.getCtrlProperty("JS","Caption")',ctrl:'JS',prop:'Caption'},{av:'AV46Entrada',fld:'vENTRADA'},{av:'AV47Saida',fld:'vSAIDA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36BemCodigo',fld:'vBEMCODIGO'},{av:'AV37BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28DataIni',fld:'vDATAINI'},{av:'AV29DataFim',fld:'vDATAFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV60bmpData',fld:'vBMPDATA'},{av:'gx.fn.getCtrlProperty("vBMPDATA","Tooltiptext")',ctrl:'vBMPDATA',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV61SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV33BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV58QtdeCaracter',fld:'vQTDECARACTER'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2320BemSituacao',fld:'BEMSITUACAO'},{av:'AV52SnError',fld:'vSNERROR'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV59SnCarregar',fld:'vSNCARREGAR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV52SnError',fld:'vSNERROR'},{av:'AV73GXLvl300',fld:'vGXLVL300'},{av:'AV48BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV35TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV51BemSituacaoDescricao',fld:'vBEMSITUACAODESCRICAO'},{av:'AV29DataFim',fld:'vDATAFIM'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2413LancamentoBemData',fld:'LANCAMENTOBEMDATA'},{av:'A2414LancamentoBemSequencia',fld:'LANCAMENTOBEMSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36BemCodigo',fld:'vBEMCODIGO'},{av:'AV37BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28DataIni',fld:'vDATAINI'},{av:'AV29DataFim',fld:'vDATAFIM'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2413LancamentoBemData',fld:'LANCAMENTOBEMDATA'},{av:'A2414LancamentoBemSequencia',fld:'LANCAMENTOBEMSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36BemCodigo',fld:'vBEMCODIGO'},{av:'AV37BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28DataIni',fld:'vDATAINI'},{av:'AV29DataFim',fld:'vDATAFIM'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2413LancamentoBemData',fld:'LANCAMENTOBEMDATA'},{av:'A2414LancamentoBemSequencia',fld:'LANCAMENTOBEMSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV36BemCodigo',fld:'vBEMCODIGO'},{av:'AV37BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28DataIni',fld:'vDATAINI'},{av:'AV29DataFim',fld:'vDATAFIM'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERARDATA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36BemCodigo',fld:'vBEMCODIGO'},{av:'AV37BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28DataIni',fld:'vDATAINI'},{av:'AV29DataFim',fld:'vDATAFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV60bmpData',fld:'vBMPDATA'},{av:'gx.fn.getCtrlProperty("vBMPDATA","Tooltiptext")',ctrl:'vBMPDATA',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV61SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV33BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV58QtdeCaracter',fld:'vQTDECARACTER'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2320BemSituacao',fld:'BEMSITUACAO'},{av:'A2413LancamentoBemData',fld:'LANCAMENTOBEMDATA'},{av:'A2414LancamentoBemSequencia',fld:'LANCAMENTOBEMSEQUENCIA'}],[{av:'A2414LancamentoBemSequencia',fld:'LANCAMENTOBEMSEQUENCIA'},{av:'A2413LancamentoBemData',fld:'LANCAMENTOBEMDATA'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'AV33BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.EvtParms["'PARAMETROS'"] = [[],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV36BemCodigo',fld:'vBEMCODIGO'},{av:'AV37BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28DataIni',fld:'vDATAINI'},{av:'AV29DataFim',fld:'vDATAFIM'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV60bmpData',fld:'vBMPDATA'},{av:'gx.fn.getCtrlProperty("vBMPDATA","Tooltiptext")',ctrl:'vBMPDATA',prop:'Tooltiptext'},{av:'AV43Snaprocreicms',fld:'vSNAPROCREICMS'},{av:'AV61SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV33BemEmpresaId',fld:'vBEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV58QtdeCaracter',fld:'vQTDECARACTER'},{av:'A2035TipoBemDescricao',fld:'TIPOBEMDESCRICAO'},{av:'A2320BemSituacao',fld:'BEMSITUACAO'}],[]];
   this.setPrompt("PROMPT_BEMCODIGO_BEMSUBGRUPO", [20,24]);
   this.setVCMap("AV43Snaprocreicms", "vSNAPROCREICMS", 0, "svchar");
   this.setVCMap("AV61SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2261BemEmpresaId", "BEMEMPRESAID", 0, "char");
   this.setVCMap("A2264BemDescricaoResumida", "BEMDESCRICAORESUMIDA", 0, "svchar");
   this.setVCMap("A2035TipoBemDescricao", "TIPOBEMDESCRICAO", 0, "svchar");
   this.setVCMap("AV43Snaprocreicms", "vSNAPROCREICMS", 0, "svchar");
   this.setVCMap("AV61SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2261BemEmpresaId", "BEMEMPRESAID", 0, "char");
   this.setVCMap("A2264BemDescricaoResumida", "BEMDESCRICAORESUMIDA", 0, "svchar");
   this.setVCMap("A2035TipoBemDescricao", "TIPOBEMDESCRICAO", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar(this.GXValidFnc[101]);
   GridContainer.addRefreshingVar(this.GXValidFnc[104]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV60bmpData", rfrProp:"Value", gxAttId:"Bmpdata"});
   GridContainer.addRefreshingVar({rfrVar:"AV60bmpData", rfrProp:"Tooltiptext", gxAttId:"Bmpdata"});
   GridContainer.addRefreshingVar({rfrVar:"AV43Snaprocreicms"});
   GridContainer.addRefreshingVar({rfrVar:"AV61SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2261BemEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[105]);
   GridContainer.addRefreshingVar({rfrVar:"A2262BemCodigo", rfrProp:"Value", gxAttId:"2262"});
   GridContainer.addRefreshingVar({rfrVar:"A2318BemSubgrupo", rfrProp:"Value", gxAttId:"2318"});
   GridContainer.addRefreshingVar({rfrVar:"A2264BemDescricaoResumida"});
   GridContainer.addRefreshingVar(this.GXValidFnc[102]);
   GridContainer.addRefreshingVar({rfrVar:"A2035TipoBemDescricao"});
   GridContainer.addRefreshingVar({rfrVar:"A2320BemSituacao", rfrProp:"Value", gxAttId:"2320"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlancamentobem());

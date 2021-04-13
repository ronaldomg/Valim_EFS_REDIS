/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:30:13.29
*/
gx.evt.autoSkip = false;
gx.define('hvistoriabem', false, function () {
   this.ServerClass =  "hvistoriabem" ;
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
      this.AV51SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A2261BemEmpresaId=gx.fn.getControlValue("BEMEMPRESAID") ;
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
      try {
         if(  gx.fn.currentGridRowImpl(62) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BEMCODIGO", gx.fn.currentGridRowImpl(62));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

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
         if(  gx.fn.currentGridRowImpl(62) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BEMSUBGRUPO", gx.fn.currentGridRowImpl(62));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
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
         if(  gx.fn.currentGridRowImpl(62) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BEMCODIGO", gx.fn.currentGridRowImpl(62));
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
         if(  gx.fn.currentGridRowImpl(62) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BEMSUBGRUPO", gx.fn.currentGridRowImpl(62));
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
         if(  gx.fn.currentGridRowImpl(62) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BEMCODIGO", gx.fn.currentGridRowImpl(62));
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
         if(  gx.fn.currentGridRowImpl(62) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("BEMSUBGRUPO", gx.fn.currentGridRowImpl(62));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11eu2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12eu2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16eu2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13eu2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14eu2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15eu2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19eu2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20eu2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21eu2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e22eu2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24eu2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25eu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,22,25,27,30,32,34,39,42,45,47,49,51,53,56,58,59,63,64,65,66,67,68,69,70,77,78,79,80,81];
   this.GXLastCtrlId =81;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",62,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hvistoriabem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2262,63,"BEMCODIGO","","","BemCodigo","int",0,"px",7,7,"right",null,[],2262,"BemCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2318,64,"BEMSUBGRUPO","","","BemSubgrupo","int",0,"px",2,2,"right",null,[],2318,"BemSubgrupo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2264,65,"BEMDESCRICAORESUMIDA","","","BemDescricaoResumida","svchar",0,"px",40,40,"left",null,[],2264,"BemDescricaoResumida",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2456,66,"VISTORIABEMDATA","","","VistoriaBemData","date",0,"px",10,10,"right",null,[],2456,"VistoriaBemData",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2452,67,"RESPVISTORIANOME","","","RespVistoriaNome","svchar",0,"px",40,40,"left",null,[],2452,"RespVistoriaNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",68,0,"px",17,"px","e19eu2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",69,0,"px",17,"px","e20eu2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",70,0,"px",17,"px","e21eu2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE12",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE7",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMCODIGO",gxz:"ZV27BemCodigo",gxold:"OV27BemCodigo",gxvar:"AV27BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV27BemCodigo,0)},c2v:function(){gx.O.AV27BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMSUBGRUPO",gxz:"ZV28BemSubgrupo",gxold:"OV28BemSubgrupo",gxvar:"AV28BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV28BemSubgrupo,0)},c2v:function(){gx.O.AV28BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAORESUMIDA",gxz:"ZV29BemDescricaoResumida",gxold:"OV29BemDescricaoResumida",gxvar:"AV29BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29BemDescricaoResumida=Value},v2z:function(Value){gx.O.ZV29BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAORESUMIDA",gx.O.AV29BemDescricaoResumida,0)},c2v:function(){gx.O.AV29BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TXTTITAPL7", format:0,grid:0};
   GXValidFnc[27]={fld:"TABLE8",grid:0};
   GXValidFnc[30]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAINI",gxz:"ZV30DataIni",gxold:"OV30DataIni",gxvar:"AV30DataIni",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30DataIni=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30DataIni=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINI",gx.O.AV30DataIni,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV30DataIni=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINI")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAFIM",gxz:"ZV31DataFim",gxold:"OV31DataFim",gxvar:"AV31DataFim",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31DataFim=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV31DataFim=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFIM",gx.O.AV31DataFim,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV31DataFim=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFIM")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[39]={fld:"TABLE4",grid:0};
   GXValidFnc[42]={fld:"TABLE3",grid:0};
   GXValidFnc[45]={fld:"IMAGE2",grid:0};
   GXValidFnc[47]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[49]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[51]={fld:"BTNHELP",grid:0};
   GXValidFnc[53]={fld:"TABLE5",grid:0};
   GXValidFnc[56]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:this.Valid_Bemcodigo,isvalid:null,rgrid:[],fld:"BEMCODIGO",gxz:"Z2262BemCodigo",gxold:"O2262BemCodigo",gxvar:"A2262BemCodigo",ucs:[],op:[65,67],ip:[65,67,64,63],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2262BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2262BemCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMCODIGO",row || gx.fn.currentGridRowImpl(62),gx.O.A2262BemCodigo,0)},c2v:function(){gx.O.A2262BemCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BEMCODIGO",row || gx.fn.currentGridRowImpl(62),'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:this.Valid_Bemsubgrupo,isvalid:null,rgrid:[],fld:"BEMSUBGRUPO",gxz:"Z2318BemSubgrupo",gxold:"O2318BemSubgrupo",gxvar:"A2318BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2318BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2318BemSubgrupo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BEMSUBGRUPO",row || gx.fn.currentGridRowImpl(62),gx.O.A2318BemSubgrupo,0)},c2v:function(){gx.O.A2318BemSubgrupo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BEMSUBGRUPO",row || gx.fn.currentGridRowImpl(62),'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"BEMDESCRICAORESUMIDA",gxz:"Z2264BemDescricaoResumida",gxold:"O2264BemDescricaoResumida",gxvar:"A2264BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2264BemDescricaoResumida=Value},v2z:function(Value){gx.O.Z2264BemDescricaoResumida=Value},v2c:function(row){gx.fn.setGridControlValue("BEMDESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(62),gx.O.A2264BemDescricaoResumida,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2264BemDescricaoResumida=this.val()},val:function(row){return gx.fn.getGridControlValue("BEMDESCRICAORESUMIDA",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VISTORIABEMDATA",gxz:"Z2456VistoriaBemData",gxold:"O2456VistoriaBemData",gxvar:"A2456VistoriaBemData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2456VistoriaBemData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2456VistoriaBemData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("VISTORIABEMDATA",row || gx.fn.currentGridRowImpl(62),gx.O.A2456VistoriaBemData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2456VistoriaBemData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("VISTORIABEMDATA",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"RESPVISTORIANOME",gxz:"Z2452RespVistoriaNome",gxold:"O2452RespVistoriaNome",gxvar:"A2452RespVistoriaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2452RespVistoriaNome=Value},v2z:function(Value){gx.O.Z2452RespVistoriaNome=Value},v2c:function(row){gx.fn.setGridControlValue("RESPVISTORIANOME",row || gx.fn.currentGridRowImpl(62),gx.O.A2452RespVistoriaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2452RespVistoriaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("RESPVISTORIANOME",row || gx.fn.currentGridRowImpl(62))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(62),gx.O.AV7bmpAlt,gx.O.AV56Bmpalt_GXI)},c2v:function(){gx.O.AV56Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(62))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(62))}, gxvar_GXI:'AV56Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(62),gx.O.AV8bmpExc,gx.O.AV57Bmpexc_GXI)},c2v:function(){gx.O.AV57Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(62))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(62))}, gxvar_GXI:'AV57Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:62,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(62),gx.O.AV16bmpCon,gx.O.AV58Bmpcon_GXI)},c2v:function(){gx.O.AV58Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(62))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(62))}, gxvar_GXI:'AV58Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"JS", format:2,grid:0};
   GXValidFnc[79]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARACTER",gxz:"ZV43QtCaracter",gxold:"OV43QtCaracter",gxvar:"AV43QtCaracter",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43QtCaracter=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43QtCaracter=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARACTER",gx.O.AV43QtCaracter,0)},c2v:function(){gx.O.AV43QtCaracter=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARACTER",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"PROMPT_BEMCODIGO_BEMSUBGRUPO",grid:0};
   this.AV27BemCodigo = 0 ;
   this.ZV27BemCodigo = 0 ;
   this.OV27BemCodigo = 0 ;
   this.AV28BemSubgrupo = 0 ;
   this.ZV28BemSubgrupo = 0 ;
   this.OV28BemSubgrupo = 0 ;
   this.AV29BemDescricaoResumida = "" ;
   this.ZV29BemDescricaoResumida = "" ;
   this.OV29BemDescricaoResumida = "" ;
   this.AV30DataIni = gx.date.nullDate() ;
   this.ZV30DataIni = gx.date.nullDate() ;
   this.OV30DataIni = gx.date.nullDate() ;
   this.AV31DataFim = gx.date.nullDate() ;
   this.ZV31DataFim = gx.date.nullDate() ;
   this.OV31DataFim = gx.date.nullDate() ;
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
   this.Z2264BemDescricaoResumida = "" ;
   this.O2264BemDescricaoResumida = "" ;
   this.Z2456VistoriaBemData = gx.date.nullDate() ;
   this.O2456VistoriaBemData = gx.date.nullDate() ;
   this.Z2452RespVistoriaNome = "" ;
   this.O2452RespVistoriaNome = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV43QtCaracter = 0 ;
   this.ZV43QtCaracter = 0 ;
   this.OV43QtCaracter = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27BemCodigo = 0 ;
   this.AV28BemSubgrupo = 0 ;
   this.AV29BemDescricaoResumida = "" ;
   this.AV30DataIni = gx.date.nullDate() ;
   this.AV31DataFim = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV43QtCaracter = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2450RespVistoriaEmpresaId = "" ;
   this.A2451RespVistoriaId = 0 ;
   this.A2262BemCodigo = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2264BemDescricaoResumida = "" ;
   this.A2456VistoriaBemData = gx.date.nullDate() ;
   this.A2452RespVistoriaNome = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV51SnRecuperaFiltro = "" ;
   this.Events = {"e11eu2_client": ["'ANTERIOR'", true] ,"e12eu2_client": ["'PROXIMO'", true] ,"e16eu2_client": ["VPAGINA.CLICK", true] ,"e13eu2_client": ["'NOVO'", true] ,"e14eu2_client": ["'FECHAR'", true] ,"e15eu2_client": ["'PROCURAR'", true] ,"e19eu2_client": ["'ALTERAR'", true] ,"e20eu2_client": ["'EXCLUIR'", true] ,"e21eu2_client": ["'CONSULTAR'", true] ,"e22eu2_client": ["'ATUALIZAPAGINA'", true] ,"e24eu2_client": ["ENTER", true] ,"e25eu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV30DataIni',fld:'vDATAINI'},{av:'AV31DataFim',fld:'vDATAFIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV30DataIni',fld:'vDATAINI'},{av:'AV31DataFim',fld:'vDATAFIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{ctrl:'BEMCODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BEMCODIGO","Title")',ctrl:'BEMCODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'BEMSUBGRUPO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BEMSUBGRUPO","Title")',ctrl:'BEMSUBGRUPO',prop:'Title'},{ctrl:'BEMDESCRICAORESUMIDA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("BEMDESCRICAORESUMIDA","Title")',ctrl:'BEMDESCRICAORESUMIDA',prop:'Title'},{ctrl:'VISTORIABEMDATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VISTORIABEMDATA","Title")',ctrl:'VISTORIABEMDATA',prop:'Title'},{ctrl:'RESPVISTORIANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("RESPVISTORIANOME","Title")',ctrl:'RESPVISTORIANOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV30DataIni',fld:'vDATAINI'},{av:'AV31DataFim',fld:'vDATAFIM'},{av:'AV29BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV30DataIni',fld:'vDATAINI'},{av:'AV31DataFim',fld:'vDATAFIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV30DataIni',fld:'vDATAINI'},{av:'AV31DataFim',fld:'vDATAFIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV30DataIni',fld:'vDATAINI'},{av:'AV31DataFim',fld:'vDATAFIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'Gx_date',fld:'vTODAY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV30DataIni',fld:'vDATAINI'},{av:'AV31DataFim',fld:'vDATAFIM'}],[{av:'AV33Data',fld:'vDATA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV30DataIni',fld:'vDATAINI'},{av:'AV31DataFim',fld:'vDATAFIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV41SnError',fld:'vSNERROR'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV41SnError',fld:'vSNERROR'},{av:'AV61GXLvl257',fld:'vGXLVL257'},{av:'AV31DataFim',fld:'vDATAFIM'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2456VistoriaBemData',fld:'VISTORIABEMDATA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV30DataIni',fld:'vDATAINI'},{av:'AV31DataFim',fld:'vDATAFIM'}],[{av:'A2456VistoriaBemData',fld:'VISTORIABEMDATA'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2456VistoriaBemData',fld:'VISTORIABEMDATA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV30DataIni',fld:'vDATAINI'},{av:'AV31DataFim',fld:'vDATAFIM'}],[{av:'A2456VistoriaBemData',fld:'VISTORIABEMDATA'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2456VistoriaBemData',fld:'VISTORIABEMDATA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV30DataIni',fld:'vDATAINI'},{av:'AV31DataFim',fld:'vDATAFIM'}],[{av:'A2456VistoriaBemData',fld:'VISTORIABEMDATA'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV28BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV30DataIni',fld:'vDATAINI'},{av:'AV31DataFim',fld:'vDATAFIM'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV51SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'A2264BemDescricaoResumida',fld:'BEMDESCRICAORESUMIDA'},{av:'AV5Pagina',fld:'vPAGINA'}],[]];
   this.setPrompt("PROMPT_BEMCODIGO_BEMSUBGRUPO", [16,20]);
   this.setVCMap("AV51SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2261BemEmpresaId", "BEMEMPRESAID", 0, "char");
   this.setVCMap("AV51SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2261BemEmpresaId", "BEMEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[34]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV51SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2261BemEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A2262BemCodigo", rfrProp:"Value", gxAttId:"2262"});
   GridContainer.addRefreshingVar({rfrVar:"A2318BemSubgrupo", rfrProp:"Value", gxAttId:"2318"});
   GridContainer.addRefreshingVar({rfrVar:"A2264BemDescricaoResumida", rfrProp:"Value", gxAttId:"2264"});
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvistoriabem());

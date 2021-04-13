/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:25:7.59
*/
gx.evt.autoSkip = false;
gx.define('hhistoricobem', false, function () {
   this.ServerClass =  "hhistoricobem" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV41SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
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
   this.Valid_Historicobemdepartamentocodigo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(61) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("HISTORICOBEMDEPARTAMENTOCODIGO", gx.fn.currentGridRowImpl(61));
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
   this.Valid_Historicobemrespid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(61) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("HISTORICOBEMRESPID", gx.fn.currentGridRowImpl(61));
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
   this.e11dm2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12dm2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17dm2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13dm2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14dm2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15dm2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16dm2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20dm2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21dm2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22dm2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23dm2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25dm2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26dm2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,26,29,31,36,39,42,44,46,48,50,52,55,57,58,62,63,64,65,66,67,68,69,70,77,78,79,80,82];
   this.GXLastCtrlId =82;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",61,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hhistoricobem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2267,62,"HISTORICOBEMDATA","","","HistoricoBemData","date",0,"px",10,10,"right",null,[],2267,"HistoricoBemData",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2268,63,"HISTORICOBEMSEQUENCIA","","","HistoricoBemSequencia","int",0,"px",2,2,"right",null,[],2268,"HistoricoBemSequencia",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2256,64,"HISTORICOBEMDEPARTAMENTOCODIGO","Código","","HistoricoBemDepartamentoCodigo","svchar",0,"px",15,15,"left",null,[],2256,"HistoricoBemDepartamentoCodigo",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2257,65,"HISTORICOBEMDEPARTAMENTONOME","Nome Departamento","","HistoricoBemDepartamentoNome","svchar",0,"px",40,40,"left",null,[],2257,"HistoricoBemDepartamentoNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2259,66,"HISTORICOBEMRESPID","Código","","HistoricoBemRespId","int",0,"px",4,4,"right",null,[],2259,"HistoricoBemRespId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2260,67,"HISTORICOBEMRESPNOME","Nome Responsável","","HistoricoBemRespNome","svchar",0,"px",40,40,"left",null,[],2260,"HistoricoBemRespNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",68,0,"px",17,"px","e20dm2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",69,0,"px",17,"px","e21dm2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",70,0,"px",17,"px","e22dm2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE6",grid:0};
   GXValidFnc[12]={fld:"TABLE7",grid:0};
   GXValidFnc[15]={fld:"TXTTITAPL6", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE8",grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemcodigo,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMCODIGO",gxz:"ZV27BemCodigo",gxold:"OV27BemCodigo",gxvar:"AV27BemCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27BemCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27BemCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMCODIGO",gx.O.AV27BemCodigo,0)},c2v:function(){gx.O.AV27BemCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Bemsubgrupo,isvalid:null,rgrid:[this.GridContainer],fld:"vBEMSUBGRUPO",gxz:"ZV38BemSubgrupo",gxold:"OV38BemSubgrupo",gxvar:"AV38BemSubgrupo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38BemSubgrupo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38BemSubgrupo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vBEMSUBGRUPO",gx.O.AV38BemSubgrupo,0)},c2v:function(){gx.O.AV38BemSubgrupo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vBEMSUBGRUPO",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBEMDESCRICAORESUMIDA",gxz:"ZV28BemDescricaoResumida",gxold:"OV28BemDescricaoResumida",gxvar:"AV28BemDescricaoResumida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28BemDescricaoResumida=Value},v2z:function(Value){gx.O.ZV28BemDescricaoResumida=Value},v2c:function(){gx.fn.setControlValue("vBEMDESCRICAORESUMIDA",gx.O.AV28BemDescricaoResumida,0)},c2v:function(){gx.O.AV28BemDescricaoResumida=this.val()},val:function(){return gx.fn.getControlValue("vBEMDESCRICAORESUMIDA")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TXTTITAPL7", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOBEMDATA",gxz:"ZV29HistoricoBemData",gxold:"OV29HistoricoBemData",gxvar:"AV29HistoricoBemData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29HistoricoBemData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29HistoricoBemData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOBEMDATA",gx.O.AV29HistoricoBemData,0)},c2v:function(){gx.O.AV29HistoricoBemData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vHISTORICOBEMDATA")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLE4",grid:0};
   GXValidFnc[39]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={fld:"IMAGE2",grid:0};
   GXValidFnc[44]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[46]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[48]={fld:"IMAGE1",grid:0};
   GXValidFnc[50]={fld:"BTNHELP",grid:0};
   GXValidFnc[52]={fld:"TABLE5",grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOBEMDATA",gxz:"Z2267HistoricoBemData",gxold:"O2267HistoricoBemData",gxvar:"A2267HistoricoBemData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2267HistoricoBemData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2267HistoricoBemData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICOBEMDATA",row || gx.fn.currentGridRowImpl(61),gx.O.A2267HistoricoBemData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2267HistoricoBemData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("HISTORICOBEMDATA",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOBEMSEQUENCIA",gxz:"Z2268HistoricoBemSequencia",gxold:"O2268HistoricoBemSequencia",gxvar:"A2268HistoricoBemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2268HistoricoBemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2268HistoricoBemSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICOBEMSEQUENCIA",row || gx.fn.currentGridRowImpl(61),gx.O.A2268HistoricoBemSequencia,0)},c2v:function(){gx.O.A2268HistoricoBemSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HISTORICOBEMSEQUENCIA",row || gx.fn.currentGridRowImpl(61),'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:this.Valid_Historicobemdepartamentocodigo,isvalid:null,rgrid:[],fld:"HISTORICOBEMDEPARTAMENTOCODIGO",gxz:"Z2256HistoricoBemDepartamentoCodigo",gxold:"O2256HistoricoBemDepartamentoCodigo",gxvar:"A2256HistoricoBemDepartamentoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2256HistoricoBemDepartamentoCodigo=Value},v2z:function(Value){gx.O.Z2256HistoricoBemDepartamentoCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOBEMDEPARTAMENTOCODIGO",row || gx.fn.currentGridRowImpl(61),gx.O.A2256HistoricoBemDepartamentoCodigo,0)},c2v:function(){gx.O.A2256HistoricoBemDepartamentoCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOBEMDEPARTAMENTOCODIGO",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOBEMDEPARTAMENTONOME",gxz:"Z2257HistoricoBemDepartamentoNome",gxold:"O2257HistoricoBemDepartamentoNome",gxvar:"A2257HistoricoBemDepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2257HistoricoBemDepartamentoNome=Value},v2z:function(Value){gx.O.Z2257HistoricoBemDepartamentoNome=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOBEMDEPARTAMENTONOME",row || gx.fn.currentGridRowImpl(61),gx.O.A2257HistoricoBemDepartamentoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2257HistoricoBemDepartamentoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOBEMDEPARTAMENTONOME",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:this.Valid_Historicobemrespid,isvalid:null,rgrid:[],fld:"HISTORICOBEMRESPID",gxz:"Z2259HistoricoBemRespId",gxold:"O2259HistoricoBemRespId",gxvar:"A2259HistoricoBemRespId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2259HistoricoBemRespId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2259HistoricoBemRespId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICOBEMRESPID",row || gx.fn.currentGridRowImpl(61),gx.O.A2259HistoricoBemRespId,0)},c2v:function(){gx.O.A2259HistoricoBemRespId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HISTORICOBEMRESPID",row || gx.fn.currentGridRowImpl(61),'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOBEMRESPNOME",gxz:"Z2260HistoricoBemRespNome",gxold:"O2260HistoricoBemRespNome",gxvar:"A2260HistoricoBemRespNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2260HistoricoBemRespNome=Value},v2z:function(Value){gx.O.Z2260HistoricoBemRespNome=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOBEMRESPNOME",row || gx.fn.currentGridRowImpl(61),gx.O.A2260HistoricoBemRespNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2260HistoricoBemRespNome=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOBEMRESPNOME",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(61),gx.O.AV7bmpAlt,gx.O.AV47Bmpalt_GXI)},c2v:function(){gx.O.AV47Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV47Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61),gx.O.AV8bmpExc,gx.O.AV48Bmpexc_GXI)},c2v:function(){gx.O.AV48Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV48Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(61),gx.O.AV16bmpCon,gx.O.AV49Bmpcon_GXI)},c2v:function(){gx.O.AV49Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV49Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[77]={fld:"JS", format:2,grid:0};
   GXValidFnc[78]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV42Qtde",gxold:"OV42Qtde",gxvar:"AV42Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV42Qtde,0)},c2v:function(){gx.O.AV42Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"PROMPT_BEMCODIGO_BEMSUBGRUPO",grid:0};
   this.AV27BemCodigo = 0 ;
   this.ZV27BemCodigo = 0 ;
   this.OV27BemCodigo = 0 ;
   this.AV38BemSubgrupo = 0 ;
   this.ZV38BemSubgrupo = 0 ;
   this.OV38BemSubgrupo = 0 ;
   this.AV28BemDescricaoResumida = "" ;
   this.ZV28BemDescricaoResumida = "" ;
   this.OV28BemDescricaoResumida = "" ;
   this.AV29HistoricoBemData = gx.date.nullDate() ;
   this.ZV29HistoricoBemData = gx.date.nullDate() ;
   this.OV29HistoricoBemData = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2267HistoricoBemData = gx.date.nullDate() ;
   this.O2267HistoricoBemData = gx.date.nullDate() ;
   this.Z2268HistoricoBemSequencia = 0 ;
   this.O2268HistoricoBemSequencia = 0 ;
   this.Z2256HistoricoBemDepartamentoCodigo = "" ;
   this.O2256HistoricoBemDepartamentoCodigo = "" ;
   this.Z2257HistoricoBemDepartamentoNome = "" ;
   this.O2257HistoricoBemDepartamentoNome = "" ;
   this.Z2259HistoricoBemRespId = 0 ;
   this.O2259HistoricoBemRespId = 0 ;
   this.Z2260HistoricoBemRespNome = "" ;
   this.O2260HistoricoBemRespNome = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV42Qtde = 0 ;
   this.ZV42Qtde = 0 ;
   this.OV42Qtde = 0 ;
   this.AV27BemCodigo = 0 ;
   this.AV38BemSubgrupo = 0 ;
   this.AV28BemDescricaoResumida = "" ;
   this.AV29HistoricoBemData = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV11OrderedBy = 0 ;
   this.AV42Qtde = 0 ;
   this.A2318BemSubgrupo = 0 ;
   this.A2262BemCodigo = 0 ;
   this.A2261BemEmpresaId = "" ;
   this.A2255HistoricoBemDepartamentoEmpId = "" ;
   this.A2258HistoricoBemRespEmpresaId = "" ;
   this.A2267HistoricoBemData = gx.date.nullDate() ;
   this.A2268HistoricoBemSequencia = 0 ;
   this.A2256HistoricoBemDepartamentoCodigo = "" ;
   this.A2257HistoricoBemDepartamentoNome = "" ;
   this.A2259HistoricoBemRespId = 0 ;
   this.A2260HistoricoBemRespNome = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV41SnRecuperaFiltro = "" ;
   this.Events = {"e11dm2_client": ["'ANTERIOR'", true] ,"e12dm2_client": ["'PROXIMO'", true] ,"e17dm2_client": ["VPAGINA.CLICK", true] ,"e13dm2_client": ["'NOVO'", true] ,"e14dm2_client": ["'FECHAR'", true] ,"e15dm2_client": ["'IMPRIMIR'", true] ,"e16dm2_client": ["'PROCURAR'", true] ,"e20dm2_client": ["'ALTERAR'", true] ,"e21dm2_client": ["'EXCLUIR'", true] ,"e22dm2_client": ["'CONSULTAR'", true] ,"e23dm2_client": ["'ATUALIZAPAGINA'", true] ,"e25dm2_client": ["ENTER", true] ,"e26dm2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV29HistoricoBemData',fld:'vHISTORICOBEMDATA'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV29HistoricoBemData',fld:'vHISTORICOBEMDATA'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'HISTORICOBEMDATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOBEMDATA","Title")',ctrl:'HISTORICOBEMDATA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'HISTORICOBEMSEQUENCIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOBEMSEQUENCIA","Title")',ctrl:'HISTORICOBEMSEQUENCIA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV29HistoricoBemData',fld:'vHISTORICOBEMDATA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV29HistoricoBemData',fld:'vHISTORICOBEMDATA'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV29HistoricoBemData',fld:'vHISTORICOBEMDATA'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV28BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV29HistoricoBemData',fld:'vHISTORICOBEMDATA'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV36tpErro',fld:'vTPERRO'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'A2267HistoricoBemData',fld:'HISTORICOBEMDATA'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV29HistoricoBemData',fld:'vHISTORICOBEMDATA'}],[{av:'A2267HistoricoBemData',fld:'HISTORICOBEMDATA'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV36tpErro',fld:'vTPERRO'},{av:'AV50GXLvl256',fld:'vGXLVL256'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV45Pgmname',fld:'vPGMNAME'},{av:'AV35QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV28BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV28BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV35QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV29HistoricoBemData',fld:'vHISTORICOBEMDATA'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36tpErro',fld:'vTPERRO'},{av:'A2261BemEmpresaId',fld:'BEMEMPRESAID'},{av:'A2262BemCodigo',fld:'BEMCODIGO'},{av:'A2318BemSubgrupo',fld:'BEMSUBGRUPO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV36tpErro',fld:'vTPERRO'},{av:'AV50GXLvl256',fld:'vGXLVL256'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'A2267HistoricoBemData',fld:'HISTORICOBEMDATA'},{av:'A2268HistoricoBemSequencia',fld:'HISTORICOBEMSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV29HistoricoBemData',fld:'vHISTORICOBEMDATA'}],[{av:'A2268HistoricoBemSequencia',fld:'HISTORICOBEMSEQUENCIA'},{av:'A2267HistoricoBemData',fld:'HISTORICOBEMDATA'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'A2267HistoricoBemData',fld:'HISTORICOBEMDATA'},{av:'A2268HistoricoBemSequencia',fld:'HISTORICOBEMSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV29HistoricoBemData',fld:'vHISTORICOBEMDATA'}],[{av:'A2268HistoricoBemSequencia',fld:'HISTORICOBEMSEQUENCIA'},{av:'A2267HistoricoBemData',fld:'HISTORICOBEMDATA'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'A2267HistoricoBemData',fld:'HISTORICOBEMDATA'},{av:'A2268HistoricoBemSequencia',fld:'HISTORICOBEMSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28BemDescricaoResumida',fld:'vBEMDESCRICAORESUMIDA'},{av:'AV29HistoricoBemData',fld:'vHISTORICOBEMDATA'}],[{av:'A2268HistoricoBemSequencia',fld:'HISTORICOBEMSEQUENCIA'},{av:'A2267HistoricoBemData',fld:'HISTORICOBEMDATA'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27BemCodigo',fld:'vBEMCODIGO'},{av:'AV38BemSubgrupo',fld:'vBEMSUBGRUPO'},{av:'AV29HistoricoBemData',fld:'vHISTORICOBEMDATA'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setPrompt("PROMPT_BEMCODIGO_BEMSUBGRUPO", [20,24]);
   this.setVCMap("AV41SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV41SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hhistoricobem());

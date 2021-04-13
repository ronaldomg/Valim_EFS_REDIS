/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:19:46.74
*/
gx.evt.autoSkip = false;
gx.define('hvaloresconvenio', false, function () {
   this.ServerClass =  "hvaloresconvenio" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("6", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV41SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Validv_Convenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Valoresconveniocontaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(61) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("VALORESCONVENIOCONTAID", gx.fn.currentGridRowImpl(61));
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
   this.e11cg2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12cg2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16cg2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13cg2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14cg2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15cg2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20cg2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21cg2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22cg2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e17cg2_client=function()
   {
      this.executeServerEvent("'LANCARCONTAS'", true, null, false, false);
   };
   this.e25cg2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e26cg2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e27cg2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,27,29,31,36,39,42,44,46,48,50,52,55,57,58,62,63,64,65,66,67,68,71,74,76,82,84,85,86,87];
   this.GXLastCtrlId =87;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",61,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hvaloresconvenio",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2132,62,"VALORESCONVENIODATAVERBA","","","ValoresConvenioDataVerba","date",0,"px",10,10,"right",null,[],2132,"ValoresConvenioDataVerba",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2134,63,"VALORESCONVENIOCONTAID","","","ValoresConvenioContaId","svchar",0,"px",30,30,"left",null,[],2134,"ValoresConvenioContaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2136,64,"VALORESCONVENIOCONTANOME","","","ValoresConvenioContaNome","svchar",0,"px",45,45,"left",null,[],2136,"ValoresConvenioContaNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2137,65,"VALORESCONVENIOVALORVERBA","","","ValoresConvenioValorVerba","decimal",0,"px",22,22,"right",null,[],2137,"ValoresConvenioValorVerba",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",66,0,"px",17,"px","e20cg2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",67,0,"px",17,"px","e21cg2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",68,0,"px",17,"px","e22cg2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE10",grid:0};
   GXValidFnc[8]={fld:"TABLE11",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOID",gxz:"ZV27ConvenioId",gxold:"OV27ConvenioId",gxvar:"AV27ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV27ConvenioId,0)},c2v:function(){gx.O.AV27ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV39ConvenioDescricao",gxold:"OV39ConvenioDescricao",gxvar:"AV39ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV39ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV39ConvenioDescricao,0)},c2v:function(){gx.O.AV39ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vVALORESCONVENIOTPLANCAMENTO",gxz:"ZV28ValoresConvenioTpLancamento",gxold:"OV28ValoresConvenioTpLancamento",gxvar:"AV28ValoresConvenioTpLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28ValoresConvenioTpLancamento=Value},v2z:function(Value){gx.O.ZV28ValoresConvenioTpLancamento=Value},v2c:function(){gx.fn.setComboBoxValue("vVALORESCONVENIOTPLANCAMENTO",gx.O.AV28ValoresConvenioTpLancamento)},c2v:function(){gx.O.AV28ValoresConvenioTpLancamento=this.val()},val:function(){return gx.fn.getControlValue("vVALORESCONVENIOTPLANCAMENTO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[24]={fld:"TABLE12",grid:0};
   GXValidFnc[27]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vVALORESCONVENIODATAINICIAL",gxz:"ZV29ValoresConvenioDataInicial",gxold:"OV29ValoresConvenioDataInicial",gxvar:"AV29ValoresConvenioDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ValoresConvenioDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29ValoresConvenioDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vVALORESCONVENIODATAINICIAL",gx.O.AV29ValoresConvenioDataInicial,0)},c2v:function(){gx.O.AV29ValoresConvenioDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vVALORESCONVENIODATAINICIAL")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vVALORESCONVENIODATAFINAL",gxz:"ZV30ValoresConvenioDataFinal",gxold:"OV30ValoresConvenioDataFinal",gxvar:"AV30ValoresConvenioDataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ValoresConvenioDataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30ValoresConvenioDataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vVALORESCONVENIODATAFINAL",gx.O.AV30ValoresConvenioDataFinal,0)},c2v:function(){gx.O.AV30ValoresConvenioDataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vVALORESCONVENIODATAFINAL")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLE4",grid:0};
   GXValidFnc[39]={fld:"TABLE9",grid:0};
   GXValidFnc[42]={fld:"IMAGE2",grid:0};
   GXValidFnc[44]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[46]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[48]={fld:"BTNHELP",grid:0};
   GXValidFnc[50]={fld:"BTNCONVENIO",grid:0};
   GXValidFnc[52]={fld:"TABLE5",grid:0};
   GXValidFnc[55]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VALORESCONVENIODATAVERBA",gxz:"Z2132ValoresConvenioDataVerba",gxold:"O2132ValoresConvenioDataVerba",gxvar:"A2132ValoresConvenioDataVerba",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2132ValoresConvenioDataVerba=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2132ValoresConvenioDataVerba=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("VALORESCONVENIODATAVERBA",row || gx.fn.currentGridRowImpl(61),gx.O.A2132ValoresConvenioDataVerba,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2132ValoresConvenioDataVerba=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("VALORESCONVENIODATAVERBA",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:this.Valid_Valoresconveniocontaid,isvalid:null,rgrid:[],fld:"VALORESCONVENIOCONTAID",gxz:"Z2134ValoresConvenioContaId",gxold:"O2134ValoresConvenioContaId",gxvar:"A2134ValoresConvenioContaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2134ValoresConvenioContaId=Value},v2z:function(Value){gx.O.Z2134ValoresConvenioContaId=Value},v2c:function(row){gx.fn.setGridControlValue("VALORESCONVENIOCONTAID",row || gx.fn.currentGridRowImpl(61),gx.O.A2134ValoresConvenioContaId,0)},c2v:function(){gx.O.A2134ValoresConvenioContaId=this.val()},val:function(row){return gx.fn.getGridControlValue("VALORESCONVENIOCONTAID",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VALORESCONVENIOCONTANOME",gxz:"Z2136ValoresConvenioContaNome",gxold:"O2136ValoresConvenioContaNome",gxvar:"A2136ValoresConvenioContaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2136ValoresConvenioContaNome=Value},v2z:function(Value){gx.O.Z2136ValoresConvenioContaNome=Value},v2c:function(row){gx.fn.setGridControlValue("VALORESCONVENIOCONTANOME",row || gx.fn.currentGridRowImpl(61),gx.O.A2136ValoresConvenioContaNome,0)},c2v:function(){gx.O.A2136ValoresConvenioContaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("VALORESCONVENIOCONTANOME",row || gx.fn.currentGridRowImpl(61))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"VALORESCONVENIOVALORVERBA",gxz:"Z2137ValoresConvenioValorVerba",gxold:"O2137ValoresConvenioValorVerba",gxvar:"A2137ValoresConvenioValorVerba",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2137ValoresConvenioValorVerba=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2137ValoresConvenioValorVerba=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("VALORESCONVENIOVALORVERBA",row || gx.fn.currentGridRowImpl(61),gx.O.A2137ValoresConvenioValorVerba,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2137ValoresConvenioValorVerba=this.val()},val:function(row){return gx.fn.getGridDecimalValue("VALORESCONVENIOVALORVERBA",row || gx.fn.currentGridRowImpl(61),'.',',')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(61),gx.O.AV7bmpAlt,gx.O.AV46Bmpalt_GXI)},c2v:function(){gx.O.AV46Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV46Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61),gx.O.AV8bmpExc,gx.O.AV47Bmpexc_GXI)},c2v:function(){gx.O.AV47Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV47Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:61,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(61),gx.O.AV16bmpCon,gx.O.AV48Bmpcon_GXI)},c2v:function(){gx.O.AV48Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(61))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(61))}, gxvar_GXI:'AV48Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[71]={fld:"TABLE8",grid:0};
   GXValidFnc[74]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORESCONVENIOVERBATOTAL",gxz:"ZV32ValoresConvenioVerbaTotal",gxold:"OV32ValoresConvenioVerbaTotal",gxvar:"AV32ValoresConvenioVerbaTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ValoresConvenioVerbaTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV32ValoresConvenioVerbaTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORESCONVENIOVERBATOTAL",gx.O.AV32ValoresConvenioVerbaTotal,2,',')},c2v:function(){gx.O.AV32ValoresConvenioVerbaTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORESCONVENIOVERBATOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"JSJSON", format:2,grid:0};
   GXValidFnc[85]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV17EmpresaPadrao",gxold:"OV17EmpresaPadrao",gxvar:"AV17EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV17EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV17EmpresaPadrao,0)},c2v:function(){gx.O.AV17EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV40Qtde",gxold:"OV40Qtde",gxvar:"AV40Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV40Qtde,0)},c2v:function(){gx.O.AV40Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[87]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV27ConvenioId = 0 ;
   this.ZV27ConvenioId = 0 ;
   this.OV27ConvenioId = 0 ;
   this.AV39ConvenioDescricao = "" ;
   this.ZV39ConvenioDescricao = "" ;
   this.OV39ConvenioDescricao = "" ;
   this.AV28ValoresConvenioTpLancamento = "" ;
   this.ZV28ValoresConvenioTpLancamento = "" ;
   this.OV28ValoresConvenioTpLancamento = "" ;
   this.AV29ValoresConvenioDataInicial = gx.date.nullDate() ;
   this.ZV29ValoresConvenioDataInicial = gx.date.nullDate() ;
   this.OV29ValoresConvenioDataInicial = gx.date.nullDate() ;
   this.AV30ValoresConvenioDataFinal = gx.date.nullDate() ;
   this.ZV30ValoresConvenioDataFinal = gx.date.nullDate() ;
   this.OV30ValoresConvenioDataFinal = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2132ValoresConvenioDataVerba = gx.date.nullDate() ;
   this.O2132ValoresConvenioDataVerba = gx.date.nullDate() ;
   this.Z2134ValoresConvenioContaId = "" ;
   this.O2134ValoresConvenioContaId = "" ;
   this.Z2136ValoresConvenioContaNome = "" ;
   this.O2136ValoresConvenioContaNome = "" ;
   this.Z2137ValoresConvenioValorVerba = 0 ;
   this.O2137ValoresConvenioValorVerba = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV32ValoresConvenioVerbaTotal = 0 ;
   this.ZV32ValoresConvenioVerbaTotal = 0 ;
   this.OV32ValoresConvenioVerbaTotal = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.ZV17EmpresaPadrao = "" ;
   this.OV17EmpresaPadrao = "" ;
   this.AV40Qtde = 0 ;
   this.ZV40Qtde = 0 ;
   this.OV40Qtde = 0 ;
   this.AV27ConvenioId = 0 ;
   this.AV39ConvenioDescricao = "" ;
   this.AV28ValoresConvenioTpLancamento = "" ;
   this.AV29ValoresConvenioDataInicial = gx.date.nullDate() ;
   this.AV30ValoresConvenioDataFinal = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV32ValoresConvenioVerbaTotal = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV40Qtde = 0 ;
   this.A2131ValoresConvenioTpLancamento = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2133ValoresConvenioContaEmpId = "" ;
   this.A2132ValoresConvenioDataVerba = gx.date.nullDate() ;
   this.A2134ValoresConvenioContaId = "" ;
   this.A2136ValoresConvenioContaNome = "" ;
   this.A2137ValoresConvenioValorVerba = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV41SnRecuperaFiltro = "" ;
   this.Events = {"e11cg2_client": ["'ANTERIOR'", true] ,"e12cg2_client": ["'PROXIMO'", true] ,"e16cg2_client": ["VPAGINA.CLICK", true] ,"e13cg2_client": ["'NOVO'", true] ,"e14cg2_client": ["'FECHAR'", true] ,"e15cg2_client": ["'PROCURAR'", true] ,"e20cg2_client": ["'ALTERAR'", true] ,"e21cg2_client": ["'EXCLUIR'", true] ,"e22cg2_client": ["'CONSULTAR'", true] ,"e17cg2_client": ["'LANCARCONTAS'", true] ,"e25cg2_client": ["'ATUALIZAPAGINA'", true] ,"e26cg2_client": ["ENTER", true] ,"e27cg2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV29ValoresConvenioDataInicial',fld:'vVALORESCONVENIODATAINICIAL'},{av:'AV30ValoresConvenioDataFinal',fld:'vVALORESCONVENIODATAFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32ValoresConvenioVerbaTotal',fld:'vVALORESCONVENIOVERBATOTAL'},{av:'A2137ValoresConvenioValorVerba',fld:'VALORESCONVENIOVALORVERBA'}],[{av:'AV32ValoresConvenioVerbaTotal',fld:'vVALORESCONVENIOVERBATOTAL'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV29ValoresConvenioDataInicial',fld:'vVALORESCONVENIODATAINICIAL'},{av:'AV30ValoresConvenioDataFinal',fld:'vVALORESCONVENIODATAFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32ValoresConvenioVerbaTotal',fld:'vVALORESCONVENIOVERBATOTAL'},{av:'A2137ValoresConvenioValorVerba',fld:'VALORESCONVENIOVALORVERBA'}],[{ctrl:'VALORESCONVENIODATAVERBA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VALORESCONVENIODATAVERBA","Title")',ctrl:'VALORESCONVENIODATAVERBA',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'VALORESCONVENIOCONTAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VALORESCONVENIOCONTAID","Title")',ctrl:'VALORESCONVENIOCONTAID',prop:'Title'},{ctrl:'VALORESCONVENIOCONTANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VALORESCONVENIOCONTANOME","Title")',ctrl:'VALORESCONVENIOCONTANOME',prop:'Title'},{ctrl:'VALORESCONVENIOVALORVERBA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("VALORESCONVENIOVALORVERBA","Title")',ctrl:'VALORESCONVENIOVALORVERBA',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV29ValoresConvenioDataInicial',fld:'vVALORESCONVENIODATAINICIAL'},{av:'AV30ValoresConvenioDataFinal',fld:'vVALORESCONVENIODATAFINAL'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV29ValoresConvenioDataInicial',fld:'vVALORESCONVENIODATAINICIAL'},{av:'AV30ValoresConvenioDataFinal',fld:'vVALORESCONVENIODATAFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32ValoresConvenioVerbaTotal',fld:'vVALORESCONVENIOVERBATOTAL'},{av:'A2137ValoresConvenioValorVerba',fld:'VALORESCONVENIOVALORVERBA'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV29ValoresConvenioDataInicial',fld:'vVALORESCONVENIODATAINICIAL'},{av:'AV30ValoresConvenioDataFinal',fld:'vVALORESCONVENIODATAFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32ValoresConvenioVerbaTotal',fld:'vVALORESCONVENIOVERBATOTAL'},{av:'A2137ValoresConvenioValorVerba',fld:'VALORESCONVENIOVALORVERBA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV29ValoresConvenioDataInicial',fld:'vVALORESCONVENIODATAINICIAL'},{av:'AV30ValoresConvenioDataFinal',fld:'vVALORESCONVENIODATAFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32ValoresConvenioVerbaTotal',fld:'vVALORESCONVENIOVERBATOTAL'},{av:'A2137ValoresConvenioValorVerba',fld:'VALORESCONVENIOVALORVERBA'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV31tpErro',fld:'vTPERRO'},{av:'Gx_date',fld:'vTODAY'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV29ValoresConvenioDataInicial',fld:'vVALORESCONVENIODATAINICIAL'},{av:'AV30ValoresConvenioDataFinal',fld:'vVALORESCONVENIODATAFINAL'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV35Data',fld:'vDATA'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV31tpErro',fld:'vTPERRO'},{av:'AV50GXLvl249',fld:'vGXLVL249'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV29ValoresConvenioDataInicial',fld:'vVALORESCONVENIODATAINICIAL'},{av:'AV30ValoresConvenioDataFinal',fld:'vVALORESCONVENIODATAFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32ValoresConvenioVerbaTotal',fld:'vVALORESCONVENIOVERBATOTAL'},{av:'A2137ValoresConvenioValorVerba',fld:'VALORESCONVENIOVALORVERBA'},{av:'AV31tpErro',fld:'vTPERRO'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV31tpErro',fld:'vTPERRO'},{av:'AV50GXLvl249',fld:'vGXLVL249'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'A2132ValoresConvenioDataVerba',fld:'VALORESCONVENIODATAVERBA'},{av:'A2134ValoresConvenioContaId',fld:'VALORESCONVENIOCONTAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV29ValoresConvenioDataInicial',fld:'vVALORESCONVENIODATAINICIAL'},{av:'AV30ValoresConvenioDataFinal',fld:'vVALORESCONVENIODATAFINAL'}],[{av:'A2134ValoresConvenioContaId',fld:'VALORESCONVENIOCONTAID'},{av:'A2132ValoresConvenioDataVerba',fld:'VALORESCONVENIODATAVERBA'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'A2132ValoresConvenioDataVerba',fld:'VALORESCONVENIODATAVERBA'},{av:'A2134ValoresConvenioContaId',fld:'VALORESCONVENIOCONTAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV29ValoresConvenioDataInicial',fld:'vVALORESCONVENIODATAINICIAL'},{av:'AV30ValoresConvenioDataFinal',fld:'vVALORESCONVENIODATAFINAL'}],[{av:'A2134ValoresConvenioContaId',fld:'VALORESCONVENIOCONTAID'},{av:'A2132ValoresConvenioDataVerba',fld:'VALORESCONVENIODATAVERBA'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'A2132ValoresConvenioDataVerba',fld:'VALORESCONVENIODATAVERBA'},{av:'A2134ValoresConvenioContaId',fld:'VALORESCONVENIOCONTAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV39ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV29ValoresConvenioDataInicial',fld:'vVALORESCONVENIODATAINICIAL'},{av:'AV30ValoresConvenioDataFinal',fld:'vVALORESCONVENIODATAFINAL'}],[{av:'A2134ValoresConvenioContaId',fld:'VALORESCONVENIOCONTAID'},{av:'A2132ValoresConvenioDataVerba',fld:'VALORESCONVENIODATAVERBA'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["LOAD"] = [[{av:'AV32ValoresConvenioVerbaTotal',fld:'vVALORESCONVENIOVERBATOTAL'},{av:'A2137ValoresConvenioValorVerba',fld:'VALORESCONVENIOVALORVERBA'}],[{av:'AV32ValoresConvenioVerbaTotal',fld:'vVALORESCONVENIOVERBATOTAL'}]];
   this.EvtParms["'LANCARCONTAS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV29ValoresConvenioDataInicial',fld:'vVALORESCONVENIODATAINICIAL'},{av:'AV30ValoresConvenioDataFinal',fld:'vVALORESCONVENIODATAFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32ValoresConvenioVerbaTotal',fld:'vVALORESCONVENIOVERBATOTAL'},{av:'A2137ValoresConvenioValorVerba',fld:'VALORESCONVENIOVALORVERBA'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28ValoresConvenioTpLancamento',fld:'vVALORESCONVENIOTPLANCAMENTO'},{av:'AV29ValoresConvenioDataInicial',fld:'vVALORESCONVENIODATAINICIAL'},{av:'AV30ValoresConvenioDataFinal',fld:'vVALORESCONVENIODATAFINAL'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV41SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32ValoresConvenioVerbaTotal',fld:'vVALORESCONVENIOVERBATOTAL'},{av:'A2137ValoresConvenioValorVerba',fld:'VALORESCONVENIOVALORVERBA'}],[]];
   this.setPrompt("PROMPT_CONVENIOID", [13]);
   this.setVCMap("AV41SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV41SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[82]);
   GridContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV41SnRecuperaFiltro"});
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar({rfrVar:"A2137ValoresConvenioValorVerba", rfrProp:"Value", gxAttId:"2137"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvaloresconvenio());

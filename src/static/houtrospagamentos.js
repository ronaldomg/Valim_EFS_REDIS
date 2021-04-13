/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:20:37.33
*/
gx.evt.autoSkip = false;
gx.define('houtrospagamentos', false, function () {
   this.ServerClass =  "houtrospagamentos" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV38SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
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
   this.Valid_Outrospagamentospessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(60) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("OUTROSPAGAMENTOSPESSOAID", gx.fn.currentGridRowImpl(60));
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
   this.e11cm2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12cm2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17cm2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13cm2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14cm2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15cm2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16cm2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e21cm2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22cm2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e23cm2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24cm2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25cm2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26cm2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,30,35,38,41,43,45,47,49,51,54,56,57,61,62,63,64,65,66,67,68,69,70,71,72,73,79,81,82,83,84];
   this.GXLastCtrlId =84;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",60,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"houtrospagamentos",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2173,61,"OUTROSPAGAMENTOSPESSOAID","","","OutrosPagamentosPessoaId","int",0,"px",7,7,"right",null,[],2173,"OutrosPagamentosPessoaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2174,62,"OUTROSPAGAMENTOSPESSOAFANTASIA","","","OutrosPagamentosPessoaFantasia","svchar",0,"px",60,60,"left",null,[],2174,"OutrosPagamentosPessoaFantasia",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Nomefornecedor",63,"vNOMEFORNECEDOR","Nome Fornecedor","","NomeFornecedor","svchar",0,"px",40,40,"left",null,[],"Nomefornecedor","NomeFornecedor",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2164,64,"OUTROSPAGAMENTOSESPECIE","","","OutrosPagamentosEspecie","svchar",0,"px",20,20,"left",null,[],2164,"OutrosPagamentosEspecie",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2165,65,"OUTROSPAGAMENTOSDOCUMENTO","","","OutrosPagamentosDocumento","svchar",0,"px",15,15,"left",null,[],2165,"OutrosPagamentosDocumento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2167,66,"OUTROSPAGAMENTOSNOCHEQUE","","","OutrosPagamentosNoCheque","svchar",0,"px",20,20,"left",null,[],2167,"OutrosPagamentosNoCheque",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2166,67,"OUTROSPAGAMENTOSDATAEMISSAO","","","OutrosPagamentosDataEmissao","date",0,"px",10,10,"right",null,[],2166,"OutrosPagamentosDataEmissao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2168,68,"OUTROSPAGAMENTOSDATAPAGTO","","","OutrosPagamentosDataPagto","date",0,"px",10,10,"right",null,[],2168,"OutrosPagamentosDataPagto",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2170,69,"OUTROSPAGAMENTOSVALORPAGO","","","OutrosPagamentosValorPago","decimal",0,"px",22,22,"right",null,[],2170,"OutrosPagamentosValorPago",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",70,0,"px",17,"px","e21cm2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",71,0,"px",17,"px","e22cm2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",72,0,"px",17,"px","e23cm2_client","","Con","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(2163,73,"OUTROSPAGAMENTOSSEQUENCIA","Sequência","","OutrosPagamentosSequencia","int",0,"px",6,6,"right",null,[],2163,"OutrosPagamentosSequencia",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE11",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Convenioid,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOID",gxz:"ZV27ConvenioId",gxold:"OV27ConvenioId",gxvar:"AV27ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV27ConvenioId,0)},c2v:function(){gx.O.AV27ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV34ConvenioDescricao",gxold:"OV34ConvenioDescricao",gxvar:"AV34ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV34ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV34ConvenioDescricao,0)},c2v:function(){gx.O.AV34ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[23]={fld:"TABLE12",grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOUTROSPAGAMENTOSDATAIN",gxz:"ZV28OutrosPagamentosDataIn",gxold:"OV28OutrosPagamentosDataIn",gxvar:"AV28OutrosPagamentosDataIn",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28OutrosPagamentosDataIn=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28OutrosPagamentosDataIn=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vOUTROSPAGAMENTOSDATAIN",gx.O.AV28OutrosPagamentosDataIn,0)},c2v:function(){gx.O.AV28OutrosPagamentosDataIn=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vOUTROSPAGAMENTOSDATAIN")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vOUTROSPAGAMENTOSDATAFI",gxz:"ZV29OutrosPagamentosDataFi",gxold:"OV29OutrosPagamentosDataFi",gxvar:"AV29OutrosPagamentosDataFi",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29OutrosPagamentosDataFi=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29OutrosPagamentosDataFi=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vOUTROSPAGAMENTOSDATAFI",gx.O.AV29OutrosPagamentosDataFi,0)},c2v:function(){gx.O.AV29OutrosPagamentosDataFi=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vOUTROSPAGAMENTOSDATAFI")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TABLE8",grid:0};
   GXValidFnc[41]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[45]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[47]={fld:"IMAGE1",grid:0};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   GXValidFnc[51]={fld:"TABLE5",grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:this.Valid_Outrospagamentospessoaid,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSPESSOAID",gxz:"Z2173OutrosPagamentosPessoaId",gxold:"O2173OutrosPagamentosPessoaId",gxvar:"A2173OutrosPagamentosPessoaId",ucs:[],op:[62],ip:[62,61],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2173OutrosPagamentosPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2173OutrosPagamentosPessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OUTROSPAGAMENTOSPESSOAID",row || gx.fn.currentGridRowImpl(60),gx.O.A2173OutrosPagamentosPessoaId,0)},c2v:function(){gx.O.A2173OutrosPagamentosPessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OUTROSPAGAMENTOSPESSOAID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSPESSOAFANTASIA",gxz:"Z2174OutrosPagamentosPessoaFantasia",gxold:"O2174OutrosPagamentosPessoaFantasia",gxvar:"A2174OutrosPagamentosPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2174OutrosPagamentosPessoaFantasia=Value},v2z:function(Value){gx.O.Z2174OutrosPagamentosPessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("OUTROSPAGAMENTOSPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(60),gx.O.A2174OutrosPagamentosPessoaFantasia,0)},c2v:function(){gx.O.A2174OutrosPagamentosPessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("OUTROSPAGAMENTOSPESSOAFANTASIA",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEFORNECEDOR",gxz:"ZV39NomeFornecedor",gxold:"OV39NomeFornecedor",gxvar:"AV39NomeFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV39NomeFornecedor=Value},v2z:function(Value){gx.O.ZV39NomeFornecedor=Value},v2c:function(row){gx.fn.setGridControlValue("vNOMEFORNECEDOR",row || gx.fn.currentGridRowImpl(60),gx.O.AV39NomeFornecedor,0)},c2v:function(){gx.O.AV39NomeFornecedor=this.val()},val:function(row){return gx.fn.getGridControlValue("vNOMEFORNECEDOR",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSESPECIE",gxz:"Z2164OutrosPagamentosEspecie",gxold:"O2164OutrosPagamentosEspecie",gxvar:"A2164OutrosPagamentosEspecie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2164OutrosPagamentosEspecie=Value},v2z:function(Value){gx.O.Z2164OutrosPagamentosEspecie=Value},v2c:function(row){gx.fn.setGridControlValue("OUTROSPAGAMENTOSESPECIE",row || gx.fn.currentGridRowImpl(60),gx.O.A2164OutrosPagamentosEspecie,0)},c2v:function(){gx.O.A2164OutrosPagamentosEspecie=this.val()},val:function(row){return gx.fn.getGridControlValue("OUTROSPAGAMENTOSESPECIE",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSDOCUMENTO",gxz:"Z2165OutrosPagamentosDocumento",gxold:"O2165OutrosPagamentosDocumento",gxvar:"A2165OutrosPagamentosDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2165OutrosPagamentosDocumento=Value},v2z:function(Value){gx.O.Z2165OutrosPagamentosDocumento=Value},v2c:function(row){gx.fn.setGridControlValue("OUTROSPAGAMENTOSDOCUMENTO",row || gx.fn.currentGridRowImpl(60),gx.O.A2165OutrosPagamentosDocumento,0)},c2v:function(){gx.O.A2165OutrosPagamentosDocumento=this.val()},val:function(row){return gx.fn.getGridControlValue("OUTROSPAGAMENTOSDOCUMENTO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSNOCHEQUE",gxz:"Z2167OutrosPagamentosNoCheque",gxold:"O2167OutrosPagamentosNoCheque",gxvar:"A2167OutrosPagamentosNoCheque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2167OutrosPagamentosNoCheque=Value},v2z:function(Value){gx.O.Z2167OutrosPagamentosNoCheque=Value},v2c:function(row){gx.fn.setGridControlValue("OUTROSPAGAMENTOSNOCHEQUE",row || gx.fn.currentGridRowImpl(60),gx.O.A2167OutrosPagamentosNoCheque,0)},c2v:function(){gx.O.A2167OutrosPagamentosNoCheque=this.val()},val:function(row){return gx.fn.getGridControlValue("OUTROSPAGAMENTOSNOCHEQUE",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSDATAEMISSAO",gxz:"Z2166OutrosPagamentosDataEmissao",gxold:"O2166OutrosPagamentosDataEmissao",gxvar:"A2166OutrosPagamentosDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2166OutrosPagamentosDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2166OutrosPagamentosDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("OUTROSPAGAMENTOSDATAEMISSAO",row || gx.fn.currentGridRowImpl(60),gx.O.A2166OutrosPagamentosDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2166OutrosPagamentosDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("OUTROSPAGAMENTOSDATAEMISSAO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSDATAPAGTO",gxz:"Z2168OutrosPagamentosDataPagto",gxold:"O2168OutrosPagamentosDataPagto",gxvar:"A2168OutrosPagamentosDataPagto",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2168OutrosPagamentosDataPagto=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2168OutrosPagamentosDataPagto=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("OUTROSPAGAMENTOSDATAPAGTO",row || gx.fn.currentGridRowImpl(60),gx.O.A2168OutrosPagamentosDataPagto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2168OutrosPagamentosDataPagto=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("OUTROSPAGAMENTOSDATAPAGTO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSVALORPAGO",gxz:"Z2170OutrosPagamentosValorPago",gxold:"O2170OutrosPagamentosValorPago",gxvar:"A2170OutrosPagamentosValorPago",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2170OutrosPagamentosValorPago=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2170OutrosPagamentosValorPago=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("OUTROSPAGAMENTOSVALORPAGO",row || gx.fn.currentGridRowImpl(60),gx.O.A2170OutrosPagamentosValorPago,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2170OutrosPagamentosValorPago=this.val()},val:function(row){return gx.fn.getGridDecimalValue("OUTROSPAGAMENTOSVALORPAGO",row || gx.fn.currentGridRowImpl(60),'.',',')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(60),gx.O.AV7bmpAlt,gx.O.AV45Bmpalt_GXI)},c2v:function(){gx.O.AV45Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV45Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60),gx.O.AV8bmpExc,gx.O.AV46Bmpexc_GXI)},c2v:function(){gx.O.AV46Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV46Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(60),gx.O.AV16bmpCon,gx.O.AV47Bmpcon_GXI)},c2v:function(){gx.O.AV47Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV47Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[73]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"OUTROSPAGAMENTOSSEQUENCIA",gxz:"Z2163OutrosPagamentosSequencia",gxold:"O2163OutrosPagamentosSequencia",gxvar:"A2163OutrosPagamentosSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2163OutrosPagamentosSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2163OutrosPagamentosSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("OUTROSPAGAMENTOSSEQUENCIA",row || gx.fn.currentGridRowImpl(60),gx.O.A2163OutrosPagamentosSequencia,0)},c2v:function(){gx.O.A2163OutrosPagamentosSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("OUTROSPAGAMENTOSSEQUENCIA",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[81]={fld:"JSJSON", format:2,grid:0};
   GXValidFnc[82]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESACONVENIO",gxz:"ZV31EmpresaConvenio",gxold:"OV31EmpresaConvenio",gxvar:"AV31EmpresaConvenio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EmpresaConvenio=Value},v2z:function(Value){gx.O.ZV31EmpresaConvenio=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACONVENIO",gx.O.AV31EmpresaConvenio,0)},c2v:function(){gx.O.AV31EmpresaConvenio=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACONVENIO")},nac:gx.falseFn};
   GXValidFnc[83]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV40Qtde",gxold:"OV40Qtde",gxvar:"AV40Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV40Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV40Qtde,0)},c2v:function(){gx.O.AV40Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"PROMPT_CONVENIOID",grid:0};
   this.AV27ConvenioId = 0 ;
   this.ZV27ConvenioId = 0 ;
   this.OV27ConvenioId = 0 ;
   this.AV34ConvenioDescricao = "" ;
   this.ZV34ConvenioDescricao = "" ;
   this.OV34ConvenioDescricao = "" ;
   this.AV28OutrosPagamentosDataIn = gx.date.nullDate() ;
   this.ZV28OutrosPagamentosDataIn = gx.date.nullDate() ;
   this.OV28OutrosPagamentosDataIn = gx.date.nullDate() ;
   this.AV29OutrosPagamentosDataFi = gx.date.nullDate() ;
   this.ZV29OutrosPagamentosDataFi = gx.date.nullDate() ;
   this.OV29OutrosPagamentosDataFi = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2173OutrosPagamentosPessoaId = 0 ;
   this.O2173OutrosPagamentosPessoaId = 0 ;
   this.Z2174OutrosPagamentosPessoaFantasia = "" ;
   this.O2174OutrosPagamentosPessoaFantasia = "" ;
   this.ZV39NomeFornecedor = "" ;
   this.OV39NomeFornecedor = "" ;
   this.Z2164OutrosPagamentosEspecie = "" ;
   this.O2164OutrosPagamentosEspecie = "" ;
   this.Z2165OutrosPagamentosDocumento = "" ;
   this.O2165OutrosPagamentosDocumento = "" ;
   this.Z2167OutrosPagamentosNoCheque = "" ;
   this.O2167OutrosPagamentosNoCheque = "" ;
   this.Z2166OutrosPagamentosDataEmissao = gx.date.nullDate() ;
   this.O2166OutrosPagamentosDataEmissao = gx.date.nullDate() ;
   this.Z2168OutrosPagamentosDataPagto = gx.date.nullDate() ;
   this.O2168OutrosPagamentosDataPagto = gx.date.nullDate() ;
   this.Z2170OutrosPagamentosValorPago = 0 ;
   this.O2170OutrosPagamentosValorPago = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z2163OutrosPagamentosSequencia = 0 ;
   this.O2163OutrosPagamentosSequencia = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV31EmpresaConvenio = "" ;
   this.ZV31EmpresaConvenio = "" ;
   this.OV31EmpresaConvenio = "" ;
   this.AV40Qtde = 0 ;
   this.ZV40Qtde = 0 ;
   this.OV40Qtde = 0 ;
   this.AV27ConvenioId = 0 ;
   this.AV34ConvenioDescricao = "" ;
   this.AV28OutrosPagamentosDataIn = gx.date.nullDate() ;
   this.AV29OutrosPagamentosDataFi = gx.date.nullDate() ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV31EmpresaConvenio = "" ;
   this.AV40Qtde = 0 ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2172OutrosPagamentosPessoaEmpId = "" ;
   this.A2173OutrosPagamentosPessoaId = 0 ;
   this.A2174OutrosPagamentosPessoaFantasia = "" ;
   this.AV39NomeFornecedor = "" ;
   this.A2164OutrosPagamentosEspecie = "" ;
   this.A2165OutrosPagamentosDocumento = "" ;
   this.A2167OutrosPagamentosNoCheque = "" ;
   this.A2166OutrosPagamentosDataEmissao = gx.date.nullDate() ;
   this.A2168OutrosPagamentosDataPagto = gx.date.nullDate() ;
   this.A2170OutrosPagamentosValorPago = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A2163OutrosPagamentosSequencia = 0 ;
   this.AV17EmpresaPadrao = "" ;
   this.AV38SnRecuperaFiltro = "" ;
   this.Events = {"e11cm2_client": ["'ANTERIOR'", true] ,"e12cm2_client": ["'PROXIMO'", true] ,"e17cm2_client": ["VPAGINA.CLICK", true] ,"e13cm2_client": ["'NOVO'", true] ,"e14cm2_client": ["'FECHAR'", true] ,"e15cm2_client": ["'IMPRIMIR'", true] ,"e16cm2_client": ["'PROCURAR'", true] ,"e21cm2_client": ["'ALTERAR'", true] ,"e22cm2_client": ["'EXCLUIR'", true] ,"e23cm2_client": ["'CONSULTAR'", true] ,"e24cm2_client": ["'ATUALIZAPAGINA'", true] ,"e25cm2_client": ["ENTER", true] ,"e26cm2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2174OutrosPagamentosPessoaFantasia',fld:'OUTROSPAGAMENTOSPESSOAFANTASIA'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2174OutrosPagamentosPessoaFantasia',fld:'OUTROSPAGAMENTOSPESSOAFANTASIA'}],[{av:'AV39NomeFornecedor',fld:'vNOMEFORNECEDOR'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2174OutrosPagamentosPessoaFantasia',fld:'OUTROSPAGAMENTOSPESSOAFANTASIA'}],[{ctrl:'OUTROSPAGAMENTOSPESSOAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OUTROSPAGAMENTOSPESSOAID","Title")',ctrl:'OUTROSPAGAMENTOSPESSOAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'OUTROSPAGAMENTOSPESSOAFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OUTROSPAGAMENTOSPESSOAFANTASIA","Title")',ctrl:'OUTROSPAGAMENTOSPESSOAFANTASIA',prop:'Title'},{ctrl:'OUTROSPAGAMENTOSESPECIE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OUTROSPAGAMENTOSESPECIE","Title")',ctrl:'OUTROSPAGAMENTOSESPECIE',prop:'Title'},{ctrl:'OUTROSPAGAMENTOSDOCUMENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OUTROSPAGAMENTOSDOCUMENTO","Title")',ctrl:'OUTROSPAGAMENTOSDOCUMENTO',prop:'Title'},{ctrl:'OUTROSPAGAMENTOSNOCHEQUE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OUTROSPAGAMENTOSNOCHEQUE","Title")',ctrl:'OUTROSPAGAMENTOSNOCHEQUE',prop:'Title'},{ctrl:'OUTROSPAGAMENTOSDATAEMISSAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OUTROSPAGAMENTOSDATAEMISSAO","Title")',ctrl:'OUTROSPAGAMENTOSDATAEMISSAO',prop:'Title'},{ctrl:'OUTROSPAGAMENTOSDATAPAGTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OUTROSPAGAMENTOSDATAPAGTO","Title")',ctrl:'OUTROSPAGAMENTOSDATAPAGTO',prop:'Title'},{ctrl:'OUTROSPAGAMENTOSVALORPAGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("OUTROSPAGAMENTOSVALORPAGO","Title")',ctrl:'OUTROSPAGAMENTOSVALORPAGO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV34ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2174OutrosPagamentosPessoaFantasia',fld:'OUTROSPAGAMENTOSPESSOAFANTASIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV34ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2174OutrosPagamentosPessoaFantasia',fld:'OUTROSPAGAMENTOSPESSOAFANTASIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV34ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2174OutrosPagamentosPessoaFantasia',fld:'OUTROSPAGAMENTOSPESSOAFANTASIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV34ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV30tpErro',fld:'vTPERRO'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV30tpErro',fld:'vTPERRO'},{av:'AV48GXLvl282',fld:'vGXLVL282'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV43Pgmname',fld:'vPGMNAME'},{av:'AV36QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV34ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'},{av:'AV44Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV34ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV36QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2174OutrosPagamentosPessoaFantasia',fld:'OUTROSPAGAMENTOSPESSOAFANTASIA'},{av:'AV30tpErro',fld:'vTPERRO'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV34ConvenioDescricao',fld:'vCONVENIODESCRICAO'}],[{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV30tpErro',fld:'vTPERRO'},{av:'AV48GXLvl282',fld:'vGXLVL282'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'A2163OutrosPagamentosSequencia',fld:'OUTROSPAGAMENTOSSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'}],[{av:'A2163OutrosPagamentosSequencia',fld:'OUTROSPAGAMENTOSSEQUENCIA'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'A2163OutrosPagamentosSequencia',fld:'OUTROSPAGAMENTOSSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'}],[{av:'A2163OutrosPagamentosSequencia',fld:'OUTROSPAGAMENTOSSEQUENCIA'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'A2163OutrosPagamentosSequencia',fld:'OUTROSPAGAMENTOSSEQUENCIA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV34ConvenioDescricao',fld:'vCONVENIODESCRICAO'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'}],[{av:'A2163OutrosPagamentosSequencia',fld:'OUTROSPAGAMENTOSSEQUENCIA'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvenioId',fld:'vCONVENIOID'},{av:'AV28OutrosPagamentosDataIn',fld:'vOUTROSPAGAMENTOSDATAIN'},{av:'AV29OutrosPagamentosDataFi',fld:'vOUTROSPAGAMENTOSDATAFI'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV38SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2174OutrosPagamentosPessoaFantasia',fld:'OUTROSPAGAMENTOSPESSOAFANTASIA'}],[]];
   this.setPrompt("PROMPT_CONVENIOID", [16]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV38SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV38SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2174OutrosPagamentosPessoaFantasia", rfrProp:"Value", gxAttId:"2174"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new houtrospagamentos());

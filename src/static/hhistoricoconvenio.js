/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:20:50.3
*/
gx.evt.autoSkip = false;
gx.define('hhistoricoconvenio', false, function () {
   this.ServerClass =  "hhistoricoconvenio" ;
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
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV53SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A2725HistoricoConvenioContaTradutor=gx.fn.getIntegerValue("HISTORICOCONVENIOCONTATRADUTOR",'.') ;
   };
   this.Validv_Centrocustoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCENTROCUSTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contacontabilid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicocxabcoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(84) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("HISTORICOCXABCOID", gx.fn.currentGridRowImpl(84));
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
   this.Valid_Historicoconvenioccustoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(84) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("HISTORICOCONVENIOCCUSTOID", gx.fn.currentGridRowImpl(84));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Historicoconveniocontaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(84) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("HISTORICOCONVENIOCONTAID", gx.fn.currentGridRowImpl(84));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresacontacontabilempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESACONTACONTABILEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresacentrocustoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESACENTROCUSTOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11cp2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12cp2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16cp2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13cp2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14cp2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15cp2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19cp2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e20cp2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e21cp2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23cp2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24cp2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25cp2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,24,27,29,32,34,37,39,42,44,47,49,52,53,55,56,61,64,67,69,71,73,75,78,80,81,85,86,87,88,89,90,91,92,93,94,100,101,102,103,105,106,107,109,110];
   this.GXLastCtrlId =110;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",84,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hhistoricoconvenio",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1004,85,"HISTORICOCXABCOID","","","HistoricoCxaBcoId","int",0,"px",4,4,"right",null,[],1004,"HistoricoCxaBcoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1005,86,"HISTORICOCXABCODESCRICAO","","","HistoricoCxaBcoDescricao","svchar",0,"px",25,25,"left",null,[],1005,"HistoricoCxaBcoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2469,87,"HISTORICOCONVENIOCCUSTOID","","","HistoricoConvenioCCustoId","svchar",0,"px",30,30,"left",null,[],2469,"HistoricoConvenioCCustoId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2470,88,"HISTORICOCONVENIOCCUSTODESCRIC","","","HistoricoConvenioCCustoDescric","svchar",0,"px",35,35,"left",null,[],2470,"HistoricoConvenioCCustoDescric",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2190,89,"HISTORICOCONVENIOCONTAID","","","HistoricoConvenioContaId","svchar",0,"px",30,30,"left",null,[],2190,"HistoricoConvenioContaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2191,90,"HISTORICOCONVENIOCONTANOME","","","HistoricoConvenioContaNome","svchar",0,"px",45,45,"left",null,[],2191,"HistoricoConvenioContaNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Contacontabiltradutor",91,"vCONTACONTABILTRADUTOR","","","ContaContabilTradutor","char",0,"px",7,7,"left",null,[],"Contacontabiltradutor","ContaContabilTradutor",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",92,0,"px",17,"px","e19cp2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",93,0,"px",17,"px","e20cp2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",94,0,"px",17,"px","e21cp2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE8",grid:0};
   GXValidFnc[12]={fld:"TABLE9",grid:0};
   GXValidFnc[15]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE12",grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOID",gxz:"ZV27ConvenioId",gxold:"OV27ConvenioId",gxvar:"AV27ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV27ConvenioId,0)},c2v:function(){gx.O.AV27ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV28ConvenioDescricao",gxold:"OV28ConvenioDescricao",gxvar:"AV28ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV28ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV28ConvenioDescricao,0)},c2v:function(){gx.O.AV28ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[29]={fld:"TABLE7",grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOCXABCOID",gxz:"ZV32HistoricoCxaBcoId",gxold:"OV32HistoricoCxaBcoId",gxvar:"AV32HistoricoCxaBcoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32HistoricoCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32HistoricoCxaBcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCOID",gx.O.AV32HistoricoCxaBcoId,0)},c2v:function(){gx.O.AV32HistoricoCxaBcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOCXABCOID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOCXABCODESCRICAO",gxz:"ZV34HistoricoCxaBcoDescricao",gxold:"OV34HistoricoCxaBcoDescricao",gxvar:"AV34HistoricoCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34HistoricoCxaBcoDescricao=Value},v2z:function(Value){gx.O.ZV34HistoricoCxaBcoDescricao=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOCXABCODESCRICAO",gx.O.AV34HistoricoCxaBcoDescricao,0)},c2v:function(){gx.O.AV34HistoricoCxaBcoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOCXABCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[39]={fld:"TABLE10",grid:0};
   GXValidFnc[42]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Centrocustoid,isvalid:null,rgrid:[this.GridContainer],fld:"vCENTROCUSTOID",gxz:"ZV39CentroCustoid",gxold:"OV39CentroCustoid",gxvar:"AV39CentroCustoid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39CentroCustoid=Value},v2z:function(Value){gx.O.ZV39CentroCustoid=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOID",gx.O.AV39CentroCustoid,0)},c2v:function(){gx.O.AV39CentroCustoid=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOID")},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTODESCRICAO",gxz:"ZV40centrocustodescricao",gxold:"OV40centrocustodescricao",gxvar:"AV40centrocustodescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40centrocustodescricao=Value},v2z:function(Value){gx.O.ZV40centrocustodescricao=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTODESCRICAO",gx.O.AV40centrocustodescricao,0)},c2v:function(){gx.O.AV40centrocustodescricao=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[49]={fld:"TABLE11",grid:0};
   GXValidFnc[52]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Contacontabilid,isvalid:null,rgrid:[this.GridContainer],fld:"vCONTACONTABILID",gxz:"ZV41ContaContabilId",gxold:"OV41ContaContabilId",gxvar:"AV41ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ContaContabilId=Value},v2z:function(Value){gx.O.ZV41ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV41ContaContabilId,0)},c2v:function(){gx.O.AV41ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"IMGCCONT",grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV43ContaContabilNome",gxold:"OV43ContaContabilNome",gxvar:"AV43ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ContaContabilNome=Value},v2z:function(Value){gx.O.ZV43ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV43ContaContabilNome,0)},c2v:function(){gx.O.AV43ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR",gxz:"ZV42Tradutor",gxold:"OV42Tradutor",gxvar:"AV42Tradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42Tradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42Tradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTRADUTOR",gx.O.AV42Tradutor,0)},c2v:function(){gx.O.AV42Tradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   GXValidFnc[64]={fld:"TABLE6",grid:0};
   GXValidFnc[67]={fld:"IMAGE2",grid:0};
   GXValidFnc[69]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[71]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[73]={fld:"BTNHELP",grid:0};
   GXValidFnc[75]={fld:"TABLE5",grid:0};
   GXValidFnc[78]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[81]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[85]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:this.Valid_Historicocxabcoid,isvalid:null,rgrid:[],fld:"HISTORICOCXABCOID",gxz:"Z1004HistoricoCxaBcoId",gxold:"O1004HistoricoCxaBcoId",gxvar:"A1004HistoricoCxaBcoId",ucs:[],op:[86,88,90],ip:[86,88,90,85,87,89],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1004HistoricoCxaBcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1004HistoricoCxaBcoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICOCXABCOID",row || gx.fn.currentGridRowImpl(84),gx.O.A1004HistoricoCxaBcoId,0)},c2v:function(){gx.O.A1004HistoricoCxaBcoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HISTORICOCXABCOID",row || gx.fn.currentGridRowImpl(84),'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCXABCODESCRICAO",gxz:"Z1005HistoricoCxaBcoDescricao",gxold:"O1005HistoricoCxaBcoDescricao",gxvar:"A1005HistoricoCxaBcoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1005HistoricoCxaBcoDescricao=Value},v2z:function(Value){gx.O.Z1005HistoricoCxaBcoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOCXABCODESCRICAO",row || gx.fn.currentGridRowImpl(84),gx.O.A1005HistoricoCxaBcoDescricao,0)},c2v:function(){gx.O.A1005HistoricoCxaBcoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOCXABCODESCRICAO",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[87]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:this.Valid_Historicoconvenioccustoid,isvalid:null,rgrid:[],fld:"HISTORICOCONVENIOCCUSTOID",gxz:"Z2469HistoricoConvenioCCustoId",gxold:"O2469HistoricoConvenioCCustoId",gxvar:"A2469HistoricoConvenioCCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2469HistoricoConvenioCCustoId=Value},v2z:function(Value){gx.O.Z2469HistoricoConvenioCCustoId=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOCONVENIOCCUSTOID",row || gx.fn.currentGridRowImpl(84),gx.O.A2469HistoricoConvenioCCustoId,0)},c2v:function(){gx.O.A2469HistoricoConvenioCCustoId=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOCONVENIOCCUSTOID",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[88]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCONVENIOCCUSTODESCRIC",gxz:"Z2470HistoricoConvenioCCustoDescric",gxold:"O2470HistoricoConvenioCCustoDescric",gxvar:"A2470HistoricoConvenioCCustoDescric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2470HistoricoConvenioCCustoDescric=Value},v2z:function(Value){gx.O.Z2470HistoricoConvenioCCustoDescric=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOCONVENIOCCUSTODESCRIC",row || gx.fn.currentGridRowImpl(84),gx.O.A2470HistoricoConvenioCCustoDescric,0)},c2v:function(){gx.O.A2470HistoricoConvenioCCustoDescric=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOCONVENIOCCUSTODESCRIC",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[89]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:this.Valid_Historicoconveniocontaid,isvalid:null,rgrid:[],fld:"HISTORICOCONVENIOCONTAID",gxz:"Z2190HistoricoConvenioContaId",gxold:"O2190HistoricoConvenioContaId",gxvar:"A2190HistoricoConvenioContaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2190HistoricoConvenioContaId=Value},v2z:function(Value){gx.O.Z2190HistoricoConvenioContaId=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOCONVENIOCONTAID",row || gx.fn.currentGridRowImpl(84),gx.O.A2190HistoricoConvenioContaId,0)},c2v:function(){gx.O.A2190HistoricoConvenioContaId=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOCONVENIOCONTAID",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[90]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCONVENIOCONTANOME",gxz:"Z2191HistoricoConvenioContaNome",gxold:"O2191HistoricoConvenioContaNome",gxvar:"A2191HistoricoConvenioContaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2191HistoricoConvenioContaNome=Value},v2z:function(Value){gx.O.Z2191HistoricoConvenioContaNome=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOCONVENIOCONTANOME",row || gx.fn.currentGridRowImpl(84),gx.O.A2191HistoricoConvenioContaNome,0)},c2v:function(){gx.O.A2191HistoricoConvenioContaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOCONVENIOCONTANOME",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[91]={lvl:2,type:"char",len:7,dec:0,sign:false,ro:0,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV37ContaContabilTradutor",gxold:"OV37ContaContabilTradutor",gxvar:"AV37ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37ContaContabilTradutor=Value},v2z:function(Value){gx.O.ZV37ContaContabilTradutor=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(84),gx.O.AV37ContaContabilTradutor,0)},c2v:function(){gx.O.AV37ContaContabilTradutor=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(84))},nac:gx.falseFn};
   GXValidFnc[92]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(84),gx.O.AV7bmpAlt,gx.O.AV59Bmpalt_GXI)},c2v:function(){gx.O.AV59Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(84))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(84))}, gxvar_GXI:'AV59Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(84),gx.O.AV8bmpExc,gx.O.AV60Bmpexc_GXI)},c2v:function(){gx.O.AV60Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(84))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(84))}, gxvar_GXI:'AV60Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:84,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(84),gx.O.AV16bmpCon,gx.O.AV61Bmpcon_GXI)},c2v:function(){gx.O.AV61Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(84))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(84))}, gxvar_GXI:'AV61Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV54Qtde",gxold:"OV54Qtde",gxvar:"AV54Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV54Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV54Qtde,0)},c2v:function(){gx.O.AV54Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresacontacontabilempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESACONTACONTABILEMPRESAID",gxz:"ZV44EmpresaContaContabilEmpresaId",gxold:"OV44EmpresaContaContabilEmpresaId",gxvar:"AV44EmpresaContaContabilEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44EmpresaContaContabilEmpresaId=Value},v2z:function(Value){gx.O.ZV44EmpresaContaContabilEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACONTACONTABILEMPRESAID",gx.O.AV44EmpresaContaContabilEmpresaId,0)},c2v:function(){gx.O.AV44EmpresaContaContabilEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACONTACONTABILEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[102]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresacentrocustoempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESACENTROCUSTOEMPRESAID",gxz:"ZV45EmpresaCentroCustoEmpresaId",gxold:"OV45EmpresaCentroCustoEmpresaId",gxvar:"AV45EmpresaCentroCustoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45EmpresaCentroCustoEmpresaId=Value},v2z:function(Value){gx.O.ZV45EmpresaCentroCustoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACENTROCUSTOEMPRESAID",gx.O.AV45EmpresaCentroCustoEmpresaId,0)},c2v:function(){gx.O.AV45EmpresaCentroCustoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACENTROCUSTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[105]={fld:"JS", format:2,grid:0};
   GXValidFnc[106]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAHISTORICOCXABCO",gxz:"ZV33EmpresaHistoricoCxaBco",gxold:"OV33EmpresaHistoricoCxaBco",gxvar:"AV33EmpresaHistoricoCxaBco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33EmpresaHistoricoCxaBco=Value},v2z:function(Value){gx.O.ZV33EmpresaHistoricoCxaBco=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAHISTORICOCXABCO",gx.O.AV33EmpresaHistoricoCxaBco,0)},c2v:function(){gx.O.AV33EmpresaHistoricoCxaBco=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAHISTORICOCXABCO")},nac:gx.falseFn};
   GXValidFnc[107]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV50ChamaOnBlurMascara",gxold:"OV50ChamaOnBlurMascara",gxvar:"AV50ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV50ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV50ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV50ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[109]={fld:"PROMPT_HISTORICOCXABCOID",grid:0};
   GXValidFnc[110]={fld:"PROMPT_CENTROCUSTOID",grid:0};
   this.AV27ConvenioId = 0 ;
   this.ZV27ConvenioId = 0 ;
   this.OV27ConvenioId = 0 ;
   this.AV28ConvenioDescricao = "" ;
   this.ZV28ConvenioDescricao = "" ;
   this.OV28ConvenioDescricao = "" ;
   this.AV32HistoricoCxaBcoId = 0 ;
   this.ZV32HistoricoCxaBcoId = 0 ;
   this.OV32HistoricoCxaBcoId = 0 ;
   this.AV34HistoricoCxaBcoDescricao = "" ;
   this.ZV34HistoricoCxaBcoDescricao = "" ;
   this.OV34HistoricoCxaBcoDescricao = "" ;
   this.AV39CentroCustoid = "" ;
   this.ZV39CentroCustoid = "" ;
   this.OV39CentroCustoid = "" ;
   this.AV40centrocustodescricao = "" ;
   this.ZV40centrocustodescricao = "" ;
   this.OV40centrocustodescricao = "" ;
   this.AV41ContaContabilId = "" ;
   this.ZV41ContaContabilId = "" ;
   this.OV41ContaContabilId = "" ;
   this.AV43ContaContabilNome = "" ;
   this.ZV43ContaContabilNome = "" ;
   this.OV43ContaContabilNome = "" ;
   this.AV42Tradutor = 0 ;
   this.ZV42Tradutor = 0 ;
   this.OV42Tradutor = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1004HistoricoCxaBcoId = 0 ;
   this.O1004HistoricoCxaBcoId = 0 ;
   this.Z1005HistoricoCxaBcoDescricao = "" ;
   this.O1005HistoricoCxaBcoDescricao = "" ;
   this.Z2469HistoricoConvenioCCustoId = "" ;
   this.O2469HistoricoConvenioCCustoId = "" ;
   this.Z2470HistoricoConvenioCCustoDescric = "" ;
   this.O2470HistoricoConvenioCCustoDescric = "" ;
   this.Z2190HistoricoConvenioContaId = "" ;
   this.O2190HistoricoConvenioContaId = "" ;
   this.Z2191HistoricoConvenioContaNome = "" ;
   this.O2191HistoricoConvenioContaNome = "" ;
   this.ZV37ContaContabilTradutor = "" ;
   this.OV37ContaContabilTradutor = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV54Qtde = 0 ;
   this.ZV54Qtde = 0 ;
   this.OV54Qtde = 0 ;
   this.AV44EmpresaContaContabilEmpresaId = "" ;
   this.ZV44EmpresaContaContabilEmpresaId = "" ;
   this.OV44EmpresaContaContabilEmpresaId = "" ;
   this.AV45EmpresaCentroCustoEmpresaId = "" ;
   this.ZV45EmpresaCentroCustoEmpresaId = "" ;
   this.OV45EmpresaCentroCustoEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV33EmpresaHistoricoCxaBco = "" ;
   this.ZV33EmpresaHistoricoCxaBco = "" ;
   this.OV33EmpresaHistoricoCxaBco = "" ;
   this.AV50ChamaOnBlurMascara = "" ;
   this.ZV50ChamaOnBlurMascara = "" ;
   this.OV50ChamaOnBlurMascara = "" ;
   this.AV27ConvenioId = 0 ;
   this.AV28ConvenioDescricao = "" ;
   this.AV32HistoricoCxaBcoId = 0 ;
   this.AV34HistoricoCxaBcoDescricao = "" ;
   this.AV39CentroCustoid = "" ;
   this.AV40centrocustodescricao = "" ;
   this.AV41ContaContabilId = "" ;
   this.AV43ContaContabilNome = "" ;
   this.AV42Tradutor = 0 ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV54Qtde = 0 ;
   this.AV44EmpresaContaContabilEmpresaId = "" ;
   this.AV45EmpresaCentroCustoEmpresaId = "" ;
   this.AV11OrderedBy = 0 ;
   this.AV33EmpresaHistoricoCxaBco = "" ;
   this.AV50ChamaOnBlurMascara = "" ;
   this.A2725HistoricoConvenioContaTradutor = 0 ;
   this.A2468HistoricoConvenioCCustoEmpId = "" ;
   this.A2189HistoricoConvenioContaEmpId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A1003HistoricoCxaBcoEmpresaId = "" ;
   this.A1004HistoricoCxaBcoId = 0 ;
   this.A1005HistoricoCxaBcoDescricao = "" ;
   this.A2469HistoricoConvenioCCustoId = "" ;
   this.A2470HistoricoConvenioCCustoDescric = "" ;
   this.A2190HistoricoConvenioContaId = "" ;
   this.A2191HistoricoConvenioContaNome = "" ;
   this.AV37ContaContabilTradutor = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A62ContaContabilId = "" ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A63ContaContabilNome = "" ;
   this.A51CentroCustoId = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV53SnRecuperaFiltro = "" ;
   this.Events = {"e11cp2_client": ["'ANTERIOR'", true] ,"e12cp2_client": ["'PROXIMO'", true] ,"e16cp2_client": ["VPAGINA.CLICK", true] ,"e13cp2_client": ["'NOVO'", true] ,"e14cp2_client": ["'FECHAR'", true] ,"e15cp2_client": ["'PROCURAR'", true] ,"e19cp2_client": ["'ALTERAR'", true] ,"e20cp2_client": ["'EXCLUIR'", true] ,"e21cp2_client": ["'CONSULTAR'", true] ,"e23cp2_client": ["'ATUALIZAPAGINA'", true] ,"e24cp2_client": ["ENTER", true] ,"e25cp2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV39CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV41ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV44EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV45EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2725HistoricoConvenioContaTradutor',fld:'HISTORICOCONVENIOCONTATRADUTOR'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV39CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV41ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV44EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV45EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2725HistoricoConvenioContaTradutor',fld:'HISTORICOCONVENIOCONTATRADUTOR'}],[{ctrl:'HISTORICOCXABCOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOCXABCOID","Title")',ctrl:'HISTORICOCXABCOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'HISTORICOCXABCODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOCXABCODESCRICAO","Title")',ctrl:'HISTORICOCXABCODESCRICAO',prop:'Title'},{ctrl:'HISTORICOCONVENIOCCUSTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOCONVENIOCCUSTOID","Title")',ctrl:'HISTORICOCONVENIOCCUSTOID',prop:'Title'},{ctrl:'HISTORICOCONVENIOCCUSTODESCRIC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOCONVENIOCCUSTODESCRIC","Title")',ctrl:'HISTORICOCONVENIOCCUSTODESCRIC',prop:'Title'},{ctrl:'HISTORICOCONVENIOCONTAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOCONVENIOCONTAID","Title")',ctrl:'HISTORICOCONVENIOCONTAID',prop:'Title'},{ctrl:'HISTORICOCONVENIOCONTANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOCONVENIOCONTANOME","Title")',ctrl:'HISTORICOCONVENIOCONTANOME',prop:'Title'},{ctrl:'vCONTACONTABILTRADUTOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vCONTACONTABILTRADUTOR","Title")',ctrl:'vCONTACONTABILTRADUTOR',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV32HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV34HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV39CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV40centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV41ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV43ContaContabilNome',fld:'vCONTACONTABILNOME'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV39CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV41ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV44EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV45EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2725HistoricoConvenioContaTradutor',fld:'HISTORICOCONVENIOCONTATRADUTOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV34HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV40centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV43ContaContabilNome',fld:'vCONTACONTABILNOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV39CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV41ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV44EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV45EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2725HistoricoConvenioContaTradutor',fld:'HISTORICOCONVENIOCONTATRADUTOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV34HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV40centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV43ContaContabilNome',fld:'vCONTACONTABILNOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV39CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV41ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV44EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV45EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2725HistoricoConvenioContaTradutor',fld:'HISTORICOCONVENIOCONTATRADUTOR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV34HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV40centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV43ContaContabilNome',fld:'vCONTACONTABILNOME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'A2469HistoricoConvenioCCustoId',fld:'HISTORICOCONVENIOCCUSTOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV34HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV39CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV40centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV41ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV43ContaContabilNome',fld:'vCONTACONTABILNOME'}],[{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'A2469HistoricoConvenioCCustoId',fld:'HISTORICOCONVENIOCCUSTOID'},{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV39CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV41ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV44EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV45EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2725HistoricoConvenioContaTradutor',fld:'HISTORICOCONVENIOCONTATRADUTOR'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A52CentroCustoDescricao',fld:'CENTROCUSTODESCRICAO'},{av:'AV54Qtde',fld:'vQTDE'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A63ContaContabilNome',fld:'CONTACONTABILNOME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV34HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV40centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV43ContaContabilNome',fld:'vCONTACONTABILNOME'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV62GXLvl309',fld:'vGXLVL309'},{av:'AV40centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV63GXLvl318',fld:'vGXLVL318'},{av:'AV43ContaContabilNome',fld:'vCONTACONTABILNOME'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'A2469HistoricoConvenioCCustoId',fld:'HISTORICOCONVENIOCCUSTOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV34HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV39CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV40centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV41ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV43ContaContabilNome',fld:'vCONTACONTABILNOME'}],[{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'A2469HistoricoConvenioCCustoId',fld:'HISTORICOCONVENIOCCUSTOID'},{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'A2469HistoricoConvenioCCustoId',fld:'HISTORICOCONVENIOCCUSTOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV34HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV39CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV40centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV41ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV43ContaContabilNome',fld:'vCONTACONTABILNOME'}],[{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'A2469HistoricoConvenioCCustoId',fld:'HISTORICOCONVENIOCCUSTOID'},{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'A2469HistoricoConvenioCCustoId',fld:'HISTORICOCONVENIOCCUSTOID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV34HistoricoCxaBcoDescricao',fld:'vHISTORICOCXABCODESCRICAO'},{av:'AV39CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV40centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV41ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV43ContaContabilNome',fld:'vCONTACONTABILNOME'}],[{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'A2469HistoricoConvenioCCustoId',fld:'HISTORICOCONVENIOCCUSTOID'},{av:'A1004HistoricoCxaBcoId',fld:'HISTORICOCXABCOID'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A2725HistoricoConvenioContaTradutor',fld:'HISTORICOCONVENIOCONTATRADUTOR'}],[{av:'AV37ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV38Digito',fld:'vDIGITO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32HistoricoCxaBcoId',fld:'vHISTORICOCXABCOID'},{av:'AV39CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV41ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV44EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV45EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV53SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A2725HistoricoConvenioContaTradutor',fld:'HISTORICOCONVENIOCONTATRADUTOR'}],[]];
   this.setPrompt("IMGCCONT", [52,56]);
   this.setPrompt("PROMPT_HISTORICOCXABCOID", [32]);
   this.setPrompt("PROMPT_CENTROCUSTOID", [42]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV53SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2725HistoricoConvenioContaTradutor", "HISTORICOCONVENIOCONTATRADUTOR", 0, "int");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV53SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A2725HistoricoConvenioContaTradutor", "HISTORICOCONVENIOCONTATRADUTOR", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar(this.GXValidFnc[52]);
   GridContainer.addRefreshingVar(this.GXValidFnc[101]);
   GridContainer.addRefreshingVar(this.GXValidFnc[102]);
   GridContainer.addRefreshingVar(this.GXValidFnc[103]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV53SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A2725HistoricoConvenioContaTradutor"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hhistoricoconvenio());

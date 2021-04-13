/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:31:16.97
*/
gx.evt.autoSkip = false;
gx.define('hconveniocentrocusto', false, function () {
   this.ServerClass =  "hconveniocentrocusto" ;
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
      this.AV44SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
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
   this.Validv_Naturezadespesaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZADESPESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Conveniocentrocustoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(60) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONVENIOCENTROCUSTOID", gx.fn.currentGridRowImpl(60));
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
   this.Valid_Convenioccusnatdesid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(60) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONVENIOCCUSNATDESID", gx.fn.currentGridRowImpl(60));
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
   this.Validv_Naturezadespesaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNATUREZADESPESAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11fo2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12fo2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e16fo2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13fo2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14fo2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15fo2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20fo2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21fo2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22fo2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23fo2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e24fo2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e25fo2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,20,23,25,26,29,31,32,37,40,43,45,47,49,51,54,56,57,61,62,63,64,65,66,67,68,69,75,76,78,79,80,81,82];
   this.GXLastCtrlId =82;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",60,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconveniocentrocusto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2106,61,"CONVENIOCENTROCUSTOID","","","ConvenioCentroCustoId","svchar",0,"px",30,30,"left",null,[],2106,"ConvenioCentroCustoId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2107,62,"CONVENIOCENTROCUSTODESCRICAO","","","ConvenioCentroCustoDescricao","svchar",0,"px",35,35,"left",null,[],2107,"ConvenioCentroCustoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2097,63,"CONVENIOCCUSNATDESID","","","ConvenioCCusNatDesId","int",0,"px",8,8,"right",null,[],2097,"ConvenioCCusNatDesId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2098,64,"CONVENIOCCUSNATDESDESCRICAO","","","ConvenioCCusNatDesDescricao","svchar",0,"px",40,40,"left",null,[],2098,"ConvenioCCusNatDesDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Snpatrimonio",65,"vSNPATRIMONIO","Patrimônio","","SnPatrimonio","char",0,"px",3,3,"left",null,[],"Snpatrimonio","SnPatrimonio",true,0,false,false,"Attribute",1,"");
   GridContainer.addCheckBox(3089,66,"CONVENIOCCUSSNPATRIMONIO","Patrimônio","","ConvenioCCusSnPatrimonio","char","S","N",null,false,false,0,"px","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",67,0,"px",17,"px","e20fo2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",68,0,"px",17,"px","e21fo2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",69,0,"px",17,"px","e22fo2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={fld:"TABLE3",grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVENIOID",gxz:"ZV27ConvenioId",gxold:"OV27ConvenioId",gxvar:"AV27ConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVENIOID",gx.O.AV27ConvenioId,0)},c2v:function(){gx.O.AV27ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONVENIODESCRICAO",gxz:"ZV28ConvenioDescricao",gxold:"OV28ConvenioDescricao",gxvar:"AV28ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ConvenioDescricao=Value},v2z:function(Value){gx.O.ZV28ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("vCONVENIODESCRICAO",gx.O.AV28ConvenioDescricao,0)},c2v:function(){gx.O.AV28ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Centrocustoid,isvalid:null,rgrid:[this.GridContainer],fld:"vCENTROCUSTOID",gxz:"ZV32CentroCustoid",gxold:"OV32CentroCustoid",gxvar:"AV32CentroCustoid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32CentroCustoid=Value},v2z:function(Value){gx.O.ZV32CentroCustoid=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOID",gx.O.AV32CentroCustoid,0)},c2v:function(){gx.O.AV32CentroCustoid=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOID")},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTODESCRICAO",gxz:"ZV33centrocustodescricao",gxold:"OV33centrocustodescricao",gxvar:"AV33centrocustodescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33centrocustodescricao=Value},v2z:function(Value){gx.O.ZV33centrocustodescricao=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTODESCRICAO",gx.O.AV33centrocustodescricao,0)},c2v:function(){gx.O.AV33centrocustodescricao=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezadespesaid,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZADESPESAID",gxz:"ZV34NaturezaDespesaId",gxold:"OV34NaturezaDespesaId",gxvar:"AV34NaturezaDespesaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34NaturezaDespesaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34NaturezaDespesaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESAID",gx.O.AV34NaturezaDespesaId,0)},c2v:function(){gx.O.AV34NaturezaDespesaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNATUREZADESPESAID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZADESPESADESCRICAO",gxz:"ZV35NaturezaDespesaDescricao",gxold:"OV35NaturezaDespesaDescricao",gxvar:"AV35NaturezaDespesaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35NaturezaDespesaDescricao=Value},v2z:function(Value){gx.O.ZV35NaturezaDespesaDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESADESCRICAO",gx.O.AV35NaturezaDespesaDescricao,0)},c2v:function(){gx.O.AV35NaturezaDespesaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESPESADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLE4",grid:0};
   GXValidFnc[40]={fld:"TABLE6",grid:0};
   GXValidFnc[43]={fld:"IMAGE2",grid:0};
   GXValidFnc[45]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[47]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   GXValidFnc[51]={fld:"TABLE5",grid:0};
   GXValidFnc[54]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:this.Valid_Conveniocentrocustoid,isvalid:null,rgrid:[],fld:"CONVENIOCENTROCUSTOID",gxz:"Z2106ConvenioCentroCustoId",gxold:"O2106ConvenioCentroCustoId",gxvar:"A2106ConvenioCentroCustoId",ucs:[],op:[62,64],ip:[62,64,61,63],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2106ConvenioCentroCustoId=Value},v2z:function(Value){gx.O.Z2106ConvenioCentroCustoId=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOCENTROCUSTOID",row || gx.fn.currentGridRowImpl(60),gx.O.A2106ConvenioCentroCustoId,0)},c2v:function(){gx.O.A2106ConvenioCentroCustoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOCENTROCUSTOID",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOCENTROCUSTODESCRICAO",gxz:"Z2107ConvenioCentroCustoDescricao",gxold:"O2107ConvenioCentroCustoDescricao",gxvar:"A2107ConvenioCentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2107ConvenioCentroCustoDescricao=Value},v2z:function(Value){gx.O.Z2107ConvenioCentroCustoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOCENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(60),gx.O.A2107ConvenioCentroCustoDescricao,0)},c2v:function(){gx.O.A2107ConvenioCentroCustoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOCENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:this.Valid_Convenioccusnatdesid,isvalid:null,rgrid:[],fld:"CONVENIOCCUSNATDESID",gxz:"Z2097ConvenioCCusNatDesId",gxold:"O2097ConvenioCCusNatDesId",gxvar:"A2097ConvenioCCusNatDesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2097ConvenioCCusNatDesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2097ConvenioCCusNatDesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVENIOCCUSNATDESID",row || gx.fn.currentGridRowImpl(60),gx.O.A2097ConvenioCCusNatDesId,0)},c2v:function(){gx.O.A2097ConvenioCCusNatDesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVENIOCCUSNATDESID",row || gx.fn.currentGridRowImpl(60),'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOCCUSNATDESDESCRICAO",gxz:"Z2098ConvenioCCusNatDesDescricao",gxold:"O2098ConvenioCCusNatDesDescricao",gxvar:"A2098ConvenioCCusNatDesDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2098ConvenioCCusNatDesDescricao=Value},v2z:function(Value){gx.O.Z2098ConvenioCCusNatDesDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CONVENIOCCUSNATDESDESCRICAO",row || gx.fn.currentGridRowImpl(60),gx.O.A2098ConvenioCCusNatDesDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2098ConvenioCCusNatDesDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOCCUSNATDESDESCRICAO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:0,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNPATRIMONIO",gxz:"ZV43SnPatrimonio",gxold:"OV43SnPatrimonio",gxvar:"AV43SnPatrimonio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV43SnPatrimonio=Value},v2z:function(Value){gx.O.ZV43SnPatrimonio=Value},v2c:function(row){gx.fn.setGridControlValue("vSNPATRIMONIO",row || gx.fn.currentGridRowImpl(60),gx.O.AV43SnPatrimonio,0)},c2v:function(){gx.O.AV43SnPatrimonio=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNPATRIMONIO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVENIOCCUSSNPATRIMONIO",gxz:"Z3089ConvenioCCusSnPatrimonio",gxold:"O3089ConvenioCCusSnPatrimonio",gxvar:"A3089ConvenioCCusSnPatrimonio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A3089ConvenioCCusSnPatrimonio=Value},v2z:function(Value){gx.O.Z3089ConvenioCCusSnPatrimonio=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CONVENIOCCUSSNPATRIMONIO",row || gx.fn.currentGridRowImpl(60),gx.O.A3089ConvenioCCusSnPatrimonio,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3089ConvenioCCusSnPatrimonio=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVENIOCCUSSNPATRIMONIO",row || gx.fn.currentGridRowImpl(60))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(60),gx.O.AV7bmpAlt,gx.O.AV49Bmpalt_GXI)},c2v:function(){gx.O.AV49Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV49Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60),gx.O.AV8bmpExc,gx.O.AV50Bmpexc_GXI)},c2v:function(){gx.O.AV50Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV50Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:60,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(60),gx.O.AV16bmpCon,gx.O.AV51Bmpcon_GXI)},c2v:function(){gx.O.AV51Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(60))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(60))}, gxvar_GXI:'AV51Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTCARAC",gxz:"ZV38QtCarac",gxold:"OV38QtCarac",gxvar:"AV38QtCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38QtCarac=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38QtCarac=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTCARAC",gx.O.AV38QtCarac,0)},c2v:function(){gx.O.AV38QtCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTCARAC",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"JS", format:2,grid:0};
   GXValidFnc[79]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresacentrocustoempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESACENTROCUSTOEMPRESAID",gxz:"ZV40EmpresaCentroCustoEmpresaId",gxold:"OV40EmpresaCentroCustoEmpresaId",gxvar:"AV40EmpresaCentroCustoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40EmpresaCentroCustoEmpresaId=Value},v2z:function(Value){gx.O.ZV40EmpresaCentroCustoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACENTROCUSTOEMPRESAID",gx.O.AV40EmpresaCentroCustoEmpresaId,0)},c2v:function(){gx.O.AV40EmpresaCentroCustoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACENTROCUSTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Naturezadespesaempresaid,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZADESPESAEMPRESAID",gxz:"ZV39NaturezaDespesaEmpresaId",gxold:"OV39NaturezaDespesaEmpresaId",gxvar:"AV39NaturezaDespesaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39NaturezaDespesaEmpresaId=Value},v2z:function(Value){gx.O.ZV39NaturezaDespesaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESPESAEMPRESAID",gx.O.AV39NaturezaDespesaEmpresaId,0)},c2v:function(){gx.O.AV39NaturezaDespesaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESPESAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"PROMPT_CENTROCUSTOID",grid:0};
   GXValidFnc[82]={fld:"PROMPT_NATUREZADESPESAID",grid:0};
   this.AV27ConvenioId = 0 ;
   this.ZV27ConvenioId = 0 ;
   this.OV27ConvenioId = 0 ;
   this.AV28ConvenioDescricao = "" ;
   this.ZV28ConvenioDescricao = "" ;
   this.OV28ConvenioDescricao = "" ;
   this.AV32CentroCustoid = "" ;
   this.ZV32CentroCustoid = "" ;
   this.OV32CentroCustoid = "" ;
   this.AV33centrocustodescricao = "" ;
   this.ZV33centrocustodescricao = "" ;
   this.OV33centrocustodescricao = "" ;
   this.AV34NaturezaDespesaId = 0 ;
   this.ZV34NaturezaDespesaId = 0 ;
   this.OV34NaturezaDespesaId = 0 ;
   this.AV35NaturezaDespesaDescricao = "" ;
   this.ZV35NaturezaDespesaDescricao = "" ;
   this.OV35NaturezaDespesaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2106ConvenioCentroCustoId = "" ;
   this.O2106ConvenioCentroCustoId = "" ;
   this.Z2107ConvenioCentroCustoDescricao = "" ;
   this.O2107ConvenioCentroCustoDescricao = "" ;
   this.Z2097ConvenioCCusNatDesId = 0 ;
   this.O2097ConvenioCCusNatDesId = 0 ;
   this.Z2098ConvenioCCusNatDesDescricao = "" ;
   this.O2098ConvenioCCusNatDesDescricao = "" ;
   this.ZV43SnPatrimonio = "" ;
   this.OV43SnPatrimonio = "" ;
   this.Z3089ConvenioCCusSnPatrimonio = "" ;
   this.O3089ConvenioCCusSnPatrimonio = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV38QtCarac = 0 ;
   this.ZV38QtCarac = 0 ;
   this.OV38QtCarac = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV40EmpresaCentroCustoEmpresaId = "" ;
   this.ZV40EmpresaCentroCustoEmpresaId = "" ;
   this.OV40EmpresaCentroCustoEmpresaId = "" ;
   this.AV39NaturezaDespesaEmpresaId = "" ;
   this.ZV39NaturezaDespesaEmpresaId = "" ;
   this.OV39NaturezaDespesaEmpresaId = "" ;
   this.AV27ConvenioId = 0 ;
   this.AV28ConvenioDescricao = "" ;
   this.AV32CentroCustoid = "" ;
   this.AV33centrocustodescricao = "" ;
   this.AV34NaturezaDespesaId = 0 ;
   this.AV35NaturezaDespesaDescricao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV38QtCarac = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV40EmpresaCentroCustoEmpresaId = "" ;
   this.AV39NaturezaDespesaEmpresaId = "" ;
   this.A2105ConvenioCentroCustoEmpId = "" ;
   this.A2096ConvenioCCusNatDesEmpId = "" ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2106ConvenioCentroCustoId = "" ;
   this.A2107ConvenioCentroCustoDescricao = "" ;
   this.A2097ConvenioCCusNatDesId = 0 ;
   this.A2098ConvenioCCusNatDesDescricao = "" ;
   this.AV43SnPatrimonio = "" ;
   this.A3089ConvenioCCusSnPatrimonio = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A51CentroCustoId = "" ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.A2073NaturezaDespesaId = 0 ;
   this.A2076NaturezaDespesaEmpresaId = "" ;
   this.A2077NaturezaDespesaDescricao = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV44SnRecuperaFiltro = "" ;
   this.Events = {"e11fo2_client": ["'ANTERIOR'", true] ,"e12fo2_client": ["'PROXIMO'", true] ,"e16fo2_client": ["VPAGINA.CLICK", true] ,"e13fo2_client": ["'NOVO'", true] ,"e14fo2_client": ["'FECHAR'", true] ,"e15fo2_client": ["'PROCURAR'", true] ,"e20fo2_client": ["'ALTERAR'", true] ,"e21fo2_client": ["'EXCLUIR'", true] ,"e22fo2_client": ["'CONSULTAR'", true] ,"e23fo2_client": ["'ATUALIZAPAGINA'", true] ,"e24fo2_client": ["ENTER", true] ,"e25fo2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV34NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV40EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV39NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3089ConvenioCCusSnPatrimonio',fld:'CONVENIOCCUSSNPATRIMONIO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV34NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV40EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV39NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3089ConvenioCCusSnPatrimonio',fld:'CONVENIOCCUSSNPATRIMONIO'}],[{ctrl:'CONVENIOCENTROCUSTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOCENTROCUSTOID","Title")',ctrl:'CONVENIOCENTROCUSTOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CONVENIOCENTROCUSTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOCENTROCUSTODESCRICAO","Title")',ctrl:'CONVENIOCENTROCUSTODESCRICAO',prop:'Title'},{ctrl:'CONVENIOCCUSNATDESID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOCCUSNATDESID","Title")',ctrl:'CONVENIOCCUSNATDESID',prop:'Title'},{ctrl:'CONVENIOCCUSNATDESDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVENIOCCUSNATDESDESCRICAO","Title")',ctrl:'CONVENIOCCUSNATDESDESCRICAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV33centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV34NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV35NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3089ConvenioCCusSnPatrimonio',fld:'CONVENIOCCUSSNPATRIMONIO'}],[{av:'AV43SnPatrimonio',fld:'vSNPATRIMONIO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV34NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV40EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV39NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3089ConvenioCCusSnPatrimonio',fld:'CONVENIOCCUSSNPATRIMONIO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV35NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV34NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV40EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV39NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3089ConvenioCCusSnPatrimonio',fld:'CONVENIOCCUSSNPATRIMONIO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV33centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV35NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV34NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV40EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV39NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3089ConvenioCCusSnPatrimonio',fld:'CONVENIOCCUSSNPATRIMONIO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV35NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'A2097ConvenioCCusNatDesId',fld:'CONVENIOCCUSNATDESID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV33centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV34NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV35NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'A2097ConvenioCCusNatDesId',fld:'CONVENIOCCUSNATDESID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV34NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV40EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV39NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3089ConvenioCCusSnPatrimonio',fld:'CONVENIOCCUSSNPATRIMONIO'},{av:'A2076NaturezaDespesaEmpresaId',fld:'NATUREZADESPESAEMPRESAID'},{av:'A2073NaturezaDespesaId',fld:'NATUREZADESPESAID'},{av:'A2077NaturezaDespesaDescricao',fld:'NATUREZADESPESADESCRICAO'},{av:'AV38QtCarac',fld:'vQTCARAC'},{av:'A153EmpresaCentroCustoEmpresaId',fld:'EMPRESACENTROCUSTOEMPRESAID'},{av:'A51CentroCustoId',fld:'CENTROCUSTOID'},{av:'A52CentroCustoDescricao',fld:'CENTROCUSTODESCRICAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV33centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV35NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV52GXLvl254',fld:'vGXLVL254'},{av:'AV35NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'},{av:'AV53GXLvl263',fld:'vGXLVL263'},{av:'AV33centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'A2097ConvenioCCusNatDesId',fld:'CONVENIOCCUSNATDESID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV33centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV34NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV35NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'A2097ConvenioCCusNatDesId',fld:'CONVENIOCCUSNATDESID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'A2097ConvenioCCusNatDesId',fld:'CONVENIOCCUSNATDESID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV33centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV34NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV35NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'A2097ConvenioCCusNatDesId',fld:'CONVENIOCCUSNATDESID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'A2097ConvenioCCusNatDesId',fld:'CONVENIOCCUSNATDESID'},{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV33centrocustodescricao',fld:'vCENTROCUSTODESCRICAO'},{av:'AV34NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV35NaturezaDespesaDescricao',fld:'vNATUREZADESPESADESCRICAO'}],[{av:'AV28ConvenioDescricao',fld:'vCONVENIODESCRICAO',hsh:true},{av:'A2097ConvenioCCusNatDesId',fld:'CONVENIOCCUSNATDESID'},{av:'A2106ConvenioCentroCustoId',fld:'CONVENIOCENTROCUSTOID'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV32CentroCustoid',fld:'vCENTROCUSTOID'},{av:'AV34NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV40EmpresaCentroCustoEmpresaId',fld:'vEMPRESACENTROCUSTOEMPRESAID'},{av:'AV39NaturezaDespesaEmpresaId',fld:'vNATUREZADESPESAEMPRESAID'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV27ConvenioId',fld:'vCONVENIOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV44SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A3089ConvenioCCusSnPatrimonio',fld:'CONVENIOCCUSSNPATRIMONIO'}],[]];
   this.setPrompt("PROMPT_CENTROCUSTOID", [25]);
   this.setPrompt("PROMPT_NATUREZADESPESAID", [31]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV44SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV44SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[16]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV44SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A3089ConvenioCCusSnPatrimonio", rfrProp:"Value", gxAttId:"3089"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconveniocentrocusto());

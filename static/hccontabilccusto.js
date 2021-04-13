/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:7:56.47
*/
gx.evt.autoSkip = false;
gx.define('hccontabilccusto', false, function () {
   this.ServerClass =  "hccontabilccusto" ;
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
      this.AV46SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.Valid_Ccontabilccustocusid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(59) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CCONTABILCCUSTOCUSID", gx.fn.currentGridRowImpl(59));
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
   this.Valid_Ccontabilccustonatid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(59) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CCONTABILCCUSTONATID", gx.fn.currentGridRowImpl(59));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Ccontabilccustocontaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(59) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CCONTABILCCUSTOCONTAID", gx.fn.currentGridRowImpl(59));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e119k2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e129k2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e209k2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e219k2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e229k2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e169k2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e139k2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e149k2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e159k2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e239k2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e249k2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e259k2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,19,21,22,26,28,29,30,36,39,42,44,46,48,50,53,55,56,60,61,62,63,64,65,66,67,68,69,75,76,77,78,79,80,82,83,84];
   this.GXLastCtrlId =84;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",59,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hccontabilccusto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(1424,60,"CCONTABILCCUSTOCUSID","","","CContabilCCustoCusId","svchar",0,"px",30,30,"left",null,[],1424,"CContabilCCustoCusId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1425,61,"CCONTABILCCUSTOCUSDESCRICAO","","","CContabilCCustoCusDescricao","svchar",0,"px",35,35,"left",null,[],1425,"CContabilCCustoCusDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1427,62,"CCONTABILCCUSTONATID","","","CContabilCCustoNatId","svchar",0,"px",30,30,"left",null,[],1427,"CContabilCCustoNatId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1428,63,"CCONTABILCCUSTONATDESCRICAO","","","CContabilCCustoNatDescricao","svchar",0,"px",35,35,"left",null,[],1428,"CContabilCCustoNatDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1430,64,"CCONTABILCCUSTOCONTAID","","","CContabilCCustoContaId","svchar",0,"px",30,30,"left",null,[],1430,"CContabilCCustoContaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1431,65,"CCONTABILCCUSTOCONTANOME","","","CContabilCCustoContaNome","svchar",0,"px",45,45,"left",null,[],1431,"CContabilCCustoContaNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(1435,66,"CCONTABILCCUSTOID","Código","","CContabilCCustoId","int",0,"px",4,4,"right",null,[],1435,"CContabilCCustoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",67,0,"px",17,"px","e209k2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",68,0,"px",17,"px","e219k2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",69,0,"px",17,"px","e229k2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCENTROCUSTOID",gxz:"ZV27CentroCustoId",gxold:"OV27CentroCustoId",gxvar:"AV27CentroCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27CentroCustoId=Value},v2z:function(Value){gx.O.ZV27CentroCustoId=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTOID",gx.O.AV27CentroCustoId,0)},c2v:function(){gx.O.AV27CentroCustoId=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTOID")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"PROMPTCCUSTO",grid:0};
   GXValidFnc[15]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCENTROCUSTODESCRICAO",gxz:"ZV30CentroCustoDescricao",gxold:"OV30CentroCustoDescricao",gxvar:"AV30CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30CentroCustoDescricao=Value},v2z:function(Value){gx.O.ZV30CentroCustoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCENTROCUSTODESCRICAO",gx.O.AV30CentroCustoDescricao,0)},c2v:function(){gx.O.AV30CentroCustoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCENTROCUSTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vNATUREZAID",gxz:"ZV28NaturezaId",gxold:"OV28NaturezaId",gxvar:"AV28NaturezaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28NaturezaId=Value},v2z:function(Value){gx.O.ZV28NaturezaId=Value},v2c:function(){gx.fn.setControlValue("vNATUREZAID",gx.O.AV28NaturezaId,0)},c2v:function(){gx.O.AV28NaturezaId=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZAID")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNATUREZADESCRICAO",gxz:"ZV31NaturezaDescricao",gxold:"OV31NaturezaDescricao",gxvar:"AV31NaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31NaturezaDescricao=Value},v2z:function(Value){gx.O.ZV31NaturezaDescricao=Value},v2c:function(){gx.fn.setControlValue("vNATUREZADESCRICAO",gx.O.AV31NaturezaDescricao,0)},c2v:function(){gx.O.AV31NaturezaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vNATUREZADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONTACONTABILID",gxz:"ZV29ContaContabilId",gxold:"OV29ContaContabilId",gxvar:"AV29ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ContaContabilId=Value},v2z:function(Value){gx.O.ZV29ContaContabilId=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV29ContaContabilId,0)},c2v:function(){gx.O.AV29ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"IMAGE6",grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:45,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILNOME",gxz:"ZV32ContaContabilNome",gxold:"OV32ContaContabilNome",gxvar:"AV32ContaContabilNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ContaContabilNome=Value},v2z:function(Value){gx.O.ZV32ContaContabilNome=Value},v2c:function(){gx.fn.setControlValue("vCONTACONTABILNOME",gx.O.AV32ContaContabilNome,0)},c2v:function(){gx.O.AV32ContaContabilNome=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILNOME")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TABLE4",grid:0};
   GXValidFnc[39]={fld:"TABLE8",grid:0};
   GXValidFnc[42]={fld:"IMAGE2",grid:0};
   GXValidFnc[44]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[46]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[48]={fld:"BTNHELP",grid:0};
   GXValidFnc[50]={fld:"TABLE5",grid:0};
   GXValidFnc[53]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:this.Valid_Ccontabilccustocusid,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOCUSID",gxz:"Z1424CContabilCCustoCusId",gxold:"O1424CContabilCCustoCusId",gxvar:"A1424CContabilCCustoCusId",ucs:[],op:[61,63,65],ip:[61,63,65,60,62,64],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1424CContabilCCustoCusId=Value},v2z:function(Value){gx.O.Z1424CContabilCCustoCusId=Value},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTOCUSID",row || gx.fn.currentGridRowImpl(59),gx.O.A1424CContabilCCustoCusId,0)},c2v:function(){gx.O.A1424CContabilCCustoCusId=this.val()},val:function(row){return gx.fn.getGridControlValue("CCONTABILCCUSTOCUSID",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOCUSDESCRICAO",gxz:"Z1425CContabilCCustoCusDescricao",gxold:"O1425CContabilCCustoCusDescricao",gxvar:"A1425CContabilCCustoCusDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1425CContabilCCustoCusDescricao=Value},v2z:function(Value){gx.O.Z1425CContabilCCustoCusDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTOCUSDESCRICAO",row || gx.fn.currentGridRowImpl(59),gx.O.A1425CContabilCCustoCusDescricao,0)},c2v:function(){gx.O.A1425CContabilCCustoCusDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CCONTABILCCUSTOCUSDESCRICAO",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:this.Valid_Ccontabilccustonatid,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTONATID",gxz:"Z1427CContabilCCustoNatId",gxold:"O1427CContabilCCustoNatId",gxvar:"A1427CContabilCCustoNatId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1427CContabilCCustoNatId=Value},v2z:function(Value){gx.O.Z1427CContabilCCustoNatId=Value},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTONATID",row || gx.fn.currentGridRowImpl(59),gx.O.A1427CContabilCCustoNatId,0)},c2v:function(){gx.O.A1427CContabilCCustoNatId=this.val()},val:function(row){return gx.fn.getGridControlValue("CCONTABILCCUSTONATID",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTONATDESCRICAO",gxz:"Z1428CContabilCCustoNatDescricao",gxold:"O1428CContabilCCustoNatDescricao",gxvar:"A1428CContabilCCustoNatDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1428CContabilCCustoNatDescricao=Value},v2z:function(Value){gx.O.Z1428CContabilCCustoNatDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTONATDESCRICAO",row || gx.fn.currentGridRowImpl(59),gx.O.A1428CContabilCCustoNatDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1428CContabilCCustoNatDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CCONTABILCCUSTONATDESCRICAO",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:this.Valid_Ccontabilccustocontaid,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOCONTAID",gxz:"Z1430CContabilCCustoContaId",gxold:"O1430CContabilCCustoContaId",gxvar:"A1430CContabilCCustoContaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1430CContabilCCustoContaId=Value},v2z:function(Value){gx.O.Z1430CContabilCCustoContaId=Value},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTOCONTAID",row || gx.fn.currentGridRowImpl(59),gx.O.A1430CContabilCCustoContaId,0)},c2v:function(){gx.O.A1430CContabilCCustoContaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CCONTABILCCUSTOCONTAID",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:45,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOCONTANOME",gxz:"Z1431CContabilCCustoContaNome",gxold:"O1431CContabilCCustoContaNome",gxvar:"A1431CContabilCCustoContaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1431CContabilCCustoContaNome=Value},v2z:function(Value){gx.O.Z1431CContabilCCustoContaNome=Value},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTOCONTANOME",row || gx.fn.currentGridRowImpl(59),gx.O.A1431CContabilCCustoContaNome,0)},c2v:function(){gx.O.A1431CContabilCCustoContaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CCONTABILCCUSTOCONTANOME",row || gx.fn.currentGridRowImpl(59))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CCONTABILCCUSTOID",gxz:"Z1435CContabilCCustoId",gxold:"O1435CContabilCCustoId",gxvar:"A1435CContabilCCustoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1435CContabilCCustoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1435CContabilCCustoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CCONTABILCCUSTOID",row || gx.fn.currentGridRowImpl(59),gx.O.A1435CContabilCCustoId,0)},c2v:function(){gx.O.A1435CContabilCCustoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CCONTABILCCUSTOID",row || gx.fn.currentGridRowImpl(59),'.')},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(59),gx.O.AV7bmpAlt,gx.O.AV52Bmpalt_GXI)},c2v:function(){gx.O.AV52Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(59))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(59))}, gxvar_GXI:'AV52Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(59),gx.O.AV8bmpExc,gx.O.AV53Bmpexc_GXI)},c2v:function(){gx.O.AV53Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(59))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(59))}, gxvar_GXI:'AV53Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:59,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(59),gx.O.AV16bmpCon,gx.O.AV54Bmpcon_GXI)},c2v:function(){gx.O.AV54Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(59))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(59))}, gxvar_GXI:'AV54Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[76]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHAMAONBLURMASCARA",gxz:"ZV45ChamaOnBlurMascara",gxold:"OV45ChamaOnBlurMascara",gxvar:"AV45ChamaOnBlurMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45ChamaOnBlurMascara=Value},v2z:function(Value){gx.O.ZV45ChamaOnBlurMascara=Value},v2c:function(){gx.fn.setControlValue("vCHAMAONBLURMASCARA",gx.O.AV45ChamaOnBlurMascara,0)},c2v:function(){gx.O.AV45ChamaOnBlurMascara=this.val()},val:function(){return gx.fn.getControlValue("vCHAMAONBLURMASCARA")},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV42ContaContabilTradutor",gxold:"OV42ContaContabilTradutor",gxvar:"AV42ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ContaContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42ContaContabilTradutor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTACONTABILTRADUTOR",gx.O.AV42ContaContabilTradutor,0)},c2v:function(){gx.O.AV42ContaContabilTradutor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTACONTABILTRADUTOR",'.')},nac:gx.falseFn};
   GXValidFnc[78]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCCONTABIL",gxz:"ZV36EmpresaPadraoCContabil",gxold:"OV36EmpresaPadraoCContabil",gxvar:"AV36EmpresaPadraoCContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36EmpresaPadraoCContabil=Value},v2z:function(Value){gx.O.ZV36EmpresaPadraoCContabil=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCCONTABIL",gx.O.AV36EmpresaPadraoCContabil,0)},c2v:function(){gx.O.AV36EmpresaPadraoCContabil=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCCONTABIL")},nac:gx.falseFn};
   GXValidFnc[79]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAOCCUS",gxz:"ZV35EmpresaPadraoCCus",gxold:"OV35EmpresaPadraoCCus",gxvar:"AV35EmpresaPadraoCCus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35EmpresaPadraoCCus=Value},v2z:function(Value){gx.O.ZV35EmpresaPadraoCCus=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAOCCUS",gx.O.AV35EmpresaPadraoCCus,0)},c2v:function(){gx.O.AV35EmpresaPadraoCCus=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAOCCUS")},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAONAT",gxz:"ZV37EmpresaPadraoNat",gxold:"OV37EmpresaPadraoNat",gxvar:"AV37EmpresaPadraoNat",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37EmpresaPadraoNat=Value},v2z:function(Value){gx.O.ZV37EmpresaPadraoNat=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAONAT",gx.O.AV37EmpresaPadraoNat,0)},c2v:function(){gx.O.AV37EmpresaPadraoNat=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAONAT")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"JS", format:2,grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV47Qtde",gxold:"OV47Qtde",gxvar:"AV47Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV47Qtde,0)},c2v:function(){gx.O.AV47Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"PROMPT_NATUREZAID",grid:0};
   this.AV27CentroCustoId = "" ;
   this.ZV27CentroCustoId = "" ;
   this.OV27CentroCustoId = "" ;
   this.AV30CentroCustoDescricao = "" ;
   this.ZV30CentroCustoDescricao = "" ;
   this.OV30CentroCustoDescricao = "" ;
   this.AV28NaturezaId = "" ;
   this.ZV28NaturezaId = "" ;
   this.OV28NaturezaId = "" ;
   this.AV31NaturezaDescricao = "" ;
   this.ZV31NaturezaDescricao = "" ;
   this.OV31NaturezaDescricao = "" ;
   this.AV29ContaContabilId = "" ;
   this.ZV29ContaContabilId = "" ;
   this.OV29ContaContabilId = "" ;
   this.AV32ContaContabilNome = "" ;
   this.ZV32ContaContabilNome = "" ;
   this.OV32ContaContabilNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z1424CContabilCCustoCusId = "" ;
   this.O1424CContabilCCustoCusId = "" ;
   this.Z1425CContabilCCustoCusDescricao = "" ;
   this.O1425CContabilCCustoCusDescricao = "" ;
   this.Z1427CContabilCCustoNatId = "" ;
   this.O1427CContabilCCustoNatId = "" ;
   this.Z1428CContabilCCustoNatDescricao = "" ;
   this.O1428CContabilCCustoNatDescricao = "" ;
   this.Z1430CContabilCCustoContaId = "" ;
   this.O1430CContabilCCustoContaId = "" ;
   this.Z1431CContabilCCustoContaNome = "" ;
   this.O1431CContabilCCustoContaNome = "" ;
   this.Z1435CContabilCCustoId = 0 ;
   this.O1435CContabilCCustoId = 0 ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV45ChamaOnBlurMascara = "" ;
   this.ZV45ChamaOnBlurMascara = "" ;
   this.OV45ChamaOnBlurMascara = "" ;
   this.AV42ContaContabilTradutor = 0 ;
   this.ZV42ContaContabilTradutor = 0 ;
   this.OV42ContaContabilTradutor = 0 ;
   this.AV36EmpresaPadraoCContabil = "" ;
   this.ZV36EmpresaPadraoCContabil = "" ;
   this.OV36EmpresaPadraoCContabil = "" ;
   this.AV35EmpresaPadraoCCus = "" ;
   this.ZV35EmpresaPadraoCCus = "" ;
   this.OV35EmpresaPadraoCCus = "" ;
   this.AV37EmpresaPadraoNat = "" ;
   this.ZV37EmpresaPadraoNat = "" ;
   this.OV37EmpresaPadraoNat = "" ;
   this.AV47Qtde = 0 ;
   this.ZV47Qtde = 0 ;
   this.OV47Qtde = 0 ;
   this.AV27CentroCustoId = "" ;
   this.AV30CentroCustoDescricao = "" ;
   this.AV28NaturezaId = "" ;
   this.AV31NaturezaDescricao = "" ;
   this.AV29ContaContabilId = "" ;
   this.AV32ContaContabilNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV45ChamaOnBlurMascara = "" ;
   this.AV42ContaContabilTradutor = 0 ;
   this.AV36EmpresaPadraoCContabil = "" ;
   this.AV35EmpresaPadraoCCus = "" ;
   this.AV37EmpresaPadraoNat = "" ;
   this.AV47Qtde = 0 ;
   this.A1434CContabilCCustoEmpresaId = "" ;
   this.A1423CContabilCCustoCusEmpresaId = "" ;
   this.A1426CContabilCCustoNatEmpresaId = "" ;
   this.A1429CContabilCCustoContaEmpresaId = "" ;
   this.A1424CContabilCCustoCusId = "" ;
   this.A1425CContabilCCustoCusDescricao = "" ;
   this.A1427CContabilCCustoNatId = "" ;
   this.A1428CContabilCCustoNatDescricao = "" ;
   this.A1430CContabilCCustoContaId = "" ;
   this.A1431CContabilCCustoContaNome = "" ;
   this.A1435CContabilCCustoId = 0 ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV46SnRecuperaFiltro = "" ;
   this.Events = {"e119k2_client": ["'ANTERIOR'", true] ,"e129k2_client": ["'PROXIMO'", true] ,"e209k2_client": ["'ALTERAR'", true] ,"e219k2_client": ["'EXCLUIR'", true] ,"e229k2_client": ["'CONSULTAR'", true] ,"e169k2_client": ["VPAGINA.CLICK", true] ,"e139k2_client": ["'NOVO'", true] ,"e149k2_client": ["'FECHAR'", true] ,"e159k2_client": ["'PROCURAR'", true] ,"e239k2_client": ["'ATUALIZAPAGINA'", true] ,"e249k2_client": ["ENTER", true] ,"e259k2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV28NaturezaId',fld:'vNATUREZAID'},{av:'AV29ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV46SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV28NaturezaId',fld:'vNATUREZAID'},{av:'AV29ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV46SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'CCONTABILCCUSTOCUSID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CCONTABILCCUSTOCUSID","Title")',ctrl:'CCONTABILCCUSTOCUSID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CCONTABILCCUSTOCUSDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CCONTABILCCUSTOCUSDESCRICAO","Title")',ctrl:'CCONTABILCCUSTOCUSDESCRICAO',prop:'Title'},{ctrl:'CCONTABILCCUSTONATID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CCONTABILCCUSTONATID","Title")',ctrl:'CCONTABILCCUSTONATID',prop:'Title'},{ctrl:'CCONTABILCCUSTONATDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CCONTABILCCUSTONATDESCRICAO","Title")',ctrl:'CCONTABILCCUSTONATDESCRICAO',prop:'Title'},{ctrl:'CCONTABILCCUSTOCONTAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CCONTABILCCUSTOCONTAID","Title")',ctrl:'CCONTABILCCUSTOCONTAID',prop:'Title'},{ctrl:'CCONTABILCCUSTOCONTANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CCONTABILCCUSTOCONTANOME","Title")',ctrl:'CCONTABILCCUSTOCONTANOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV46SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV28NaturezaId',fld:'vNATUREZAID'},{av:'AV29ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV46SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV28NaturezaId',fld:'vNATUREZAID'},{av:'AV29ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV46SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1435CContabilCCustoId',fld:'CCONTABILCCUSTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1435CContabilCCustoId',fld:'CCONTABILCCUSTOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A1435CContabilCCustoId',fld:'CCONTABILCCUSTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1435CContabilCCustoId',fld:'CCONTABILCCUSTOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A1435CContabilCCustoId',fld:'CCONTABILCCUSTOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A1435CContabilCCustoId',fld:'CCONTABILCCUSTOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV28NaturezaId',fld:'vNATUREZAID'},{av:'AV29ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV46SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV28NaturezaId',fld:'vNATUREZAID'},{av:'AV29ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV46SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27CentroCustoId',fld:'vCENTROCUSTOID'},{av:'AV28NaturezaId',fld:'vNATUREZAID'},{av:'AV29ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV46SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setPrompt("PROMPTCCUSTO", [13]);
   this.setPrompt("IMAGE6", [28,77]);
   this.setPrompt("PROMPT_NATUREZAID", [21]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV46SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV46SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[21]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV46SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hccontabilccusto());

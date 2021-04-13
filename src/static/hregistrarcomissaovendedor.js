/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:41:59.81
*/
gx.evt.autoSkip = false;
gx.define('hregistrarcomissaovendedor', false, function () {
   this.ServerClass =  "hregistrarcomissaovendedor" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV23PercentualVendedor=gx.fn.getIntegerValue("vPERCENTUALVENDEDOR",'.') ;
      this.A3375FormaPgtoEmpresaId=gx.fn.getControlValue("FORMAPGTOEMPRESAID") ;
      this.AV57FormaPgtoEmpresaId=gx.fn.getControlValue("vFORMAPGTOEMPRESAID") ;
      this.A3376FormaPgtoId=gx.fn.getIntegerValue("FORMAPGTOID",'.') ;
      this.AV58FormaPgtoId=gx.fn.getIntegerValue("vFORMAPGTOID",'.') ;
      this.A3377TpCobrFormaPgtoId=gx.fn.getIntegerValue("TPCOBRFORMAPGTOID",'.') ;
      this.AV59TpCobrFormaPgtoId=gx.fn.getIntegerValue("vTPCOBRFORMAPGTOID",'.') ;
      this.A3797TpCobrFormaPgtoDescricao=gx.fn.getControlValue("TPCOBRFORMAPGTODESCRICAO") ;
      this.AV25ComissaoVendedorEmpresaId=gx.fn.getControlValue("vCOMISSAOVENDEDOREMPRESAID") ;
      this.AV5UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A1229VendedorEmpresaId=gx.fn.getControlValue("VENDEDOREMPRESAID") ;
      this.AV55VendedorEmpresaId=gx.fn.getControlValue("vVENDEDOREMPRESAID") ;
      this.A1237VendedorId=gx.fn.getIntegerValue("VENDEDORID",'.') ;
      this.AV56VendedorId=gx.fn.getIntegerValue("vVENDEDORID",'.') ;
      this.A1148VendedorNome=gx.fn.getControlValue("VENDEDORNOME") ;
   };
   this.Validv_Comissaovendedorvendid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCOMISSAOVENDEDORVENDID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Comissaovendedortpcobrformaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCOMISSAOVENDEDORTPCOBRFORMAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Comissaovendedortpcobrid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCOMISSAOVENDEDORTPCOBRID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Comissaovendedortpcobrformaid2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCOMISSAOVENDEDORTPCOBRFORMAID2");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Comissaovendedortpcobrid2=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCOMISSAOVENDEDORTPCOBRID2");
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
   this.Validv_Comissaovendedorseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCOMISSAOVENDEDORSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Comissaovendedorvendempid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCOMISSAOVENDEDORVENDEMPID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s142_client=function()
   {
      this.AV14ComissaoVendedorVendId = gx.num.trunc( 0 ,0) ;
      this.AV17ComissaoVendedorTpCobrFormaId = gx.num.trunc( 0 ,0) ;
      this.AV18ComissaoVendedorTpCobrId = gx.num.trunc( 0 ,0) ;
      this.AV20ComissaoVendedorPercentual =  0  ;
      this.AV24ComissaoVendedorSeq = gx.num.trunc( 0 ,0) ;
      this.AV15ComissaoVendedorVendNome =  ""  ;
      this.AV19ComissaoVendedorTpCobrDescricao =  ""  ;
      this.AV30ComissaoVendedorValorFinal =  0  ;
      this.AV31ComissaoVendedorValorInicial =  0  ;
      this.AV35ComissaoVendedorPercentual1 =  0  ;
      this.AV41ComissaoVendedorPercentual2 =  0  ;
      this.AV39ComissaoVendedorValorInicial2 =  0  ;
      this.AV40ComissaoVendedorValorFinal2 =  0  ;
      this.AV42ComissaoVendedorTpCobrFormaId2 = gx.num.trunc( 0 ,0) ;
      this.AV43ComissaoVendedorTpCobrId2 = gx.num.trunc( 0 ,0) ;
      this.AV44ComissaoVendedorTpCobrDescricao2 =  ""  ;
      this.AV29ComissaoVendedorPcDescInicial =  0  ;
      this.AV28ComissaoVendedorPcDescFinal =  0  ;
      this.AV47ComissaoVendedorPercentual3 =  0  ;
   };
   this.s162_client=function()
   {
      if ( this.AV23PercentualVendedor == 3 )
      {
         gx.fn.setCtrlProperty("INSERIR","Visible", 1 );
         gx.fn.setCtrlProperty("CONFIRMAR","Visible", 0 );
         gx.fn.setCtrlProperty("CANCELAR","Visible", 0 );
      }
      if ( this.AV23PercentualVendedor == 4 )
      {
         gx.fn.setCtrlProperty("INSERIR1","Visible", 1 );
         gx.fn.setCtrlProperty("CONFIRMAR1","Visible", 0 );
         gx.fn.setCtrlProperty("CANCELAR1","Visible", 0 );
      }
      if ( this.AV23PercentualVendedor == 5 )
      {
         gx.fn.setCtrlProperty("INSERIR2","Visible", 1 );
         gx.fn.setCtrlProperty("CONFIRMAR2","Visible", 0 );
         gx.fn.setCtrlProperty("CANCELAR2","Visible", 0 );
      }
      if ( this.AV23PercentualVendedor == 6 )
      {
         gx.fn.setCtrlProperty("INSERIR3","Visible", 1 );
         gx.fn.setCtrlProperty("CONFIRMAR3","Visible", 0 );
         gx.fn.setCtrlProperty("CANCELAR3","Visible", 0 );
      }
      gx.fn.setCtrlProperty("vCOMISSAOVENDEDORVENDID","Enabled", 1 );
      gx.fn.setCtrlProperty("vCOMISSAOVENDEDORTPCOBRFORMAID","Enabled", 1 );
      gx.fn.setCtrlProperty("vCOMISSAOVENDEDORTPCOBRID","Enabled", 1 );
      gx.fn.setCtrlProperty("vCOMISSAOVENDEDORTPCOBRFORMAID2","Enabled", 1 );
      gx.fn.setCtrlProperty("vCOMISSAOVENDEDORTPCOBRID2","Enabled", 1 );
      gx.fn.setCtrlProperty("vCOMISSAOVENDEDORVALORINICIAL","Enabled", 1 );
      gx.fn.setCtrlProperty("vCOMISSAOVENDEDORVALORFINAL","Enabled", 1 );
      gx.fn.setCtrlProperty("vCOMISSAOVENDEDORVALORINICIAL2","Enabled", 1 );
      gx.fn.setCtrlProperty("vCOMISSAOVENDEDORVALORFINAL2","Enabled", 1 );
      gx.fn.setCtrlProperty("vCOMISSAOVENDEDORPCDESCINICIAL","Enabled", 1 );
      gx.fn.setCtrlProperty("vCOMISSAOVENDEDORPCDESCFINAL","Enabled", 1 );
   };
   this.e111fd2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e121fd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e171fd2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e131fd2_client=function()
   {
      this.executeServerEvent("'CONFIRMAR'", false, null, false, false);
   };
   this.e191fd2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e141fd2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e201fd2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,18,21,23,26,28,30,32,35,37,44,47,49,52,54,57,59,66,69,71,74,76,78,80,83,85,88,90,93,95,102,105,107,110,112,115,117,124,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,149,150,151,152,153,155,156,157,160,161,162,163,164];
   this.GXLastCtrlId =164;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",125,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hregistrarcomissaovendedor",[],false,1,false,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(9296,126,"COMISSAOVENDEDORVENDID","Cód. Vend.","","ComissaoVendedorVendId","int",0,"px",7,7,"right",null,[],9296,"ComissaoVendedorVendId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Comissaovendedorvendnomegrid",127,"vCOMISSAOVENDEDORVENDNOMEGRID","Vend. Nome","","ComissaoVendedorVendNomeGrid","svchar",0,"px",40,40,"left",null,[],"Comissaovendedorvendnomegrid","ComissaoVendedorVendNomeGrid",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9299,128,"COMISSAOVENDEDORTPCOBRFORMAID","Forma","","ComissaoVendedorTpCobrFormaId","int",0,"px",3,3,"right",null,[],9299,"ComissaoVendedorTpCobrFormaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9300,129,"COMISSAOVENDEDORTPCOBRID","Tp. Cobr.","","ComissaoVendedorTpCobrId","int",0,"px",3,3,"right",null,[],9300,"ComissaoVendedorTpCobrId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Comissaovendedortpcobrdescricaogrid",130,"vCOMISSAOVENDEDORTPCOBRDESCRICAOGRID","Descrição","","ComissaoVendedorTpCobrDescricaoGrid","svchar",0,"px",25,25,"left",null,[],"Comissaovendedortpcobrdescricaogrid","ComissaoVendedorTpCobrDescricaoGrid",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9302,131,"COMISSAOVENDEDORVALORINICIAL","Valor Inicial","","ComissaoVendedorValorInicial","decimal",0,"px",22,22,"right",null,[],9302,"ComissaoVendedorValorInicial",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9303,132,"COMISSAOVENDEDORVALORFINAL","Valor Final","","ComissaoVendedorValorFinal","decimal",0,"px",22,22,"right",null,[],9303,"ComissaoVendedorValorFinal",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9304,133,"COMISSAOVENDEDORPCDESCINICIAL","% Desc. Inicial","","ComissaoVendedorPcDescInicial","decimal",0,"px",22,22,"right",null,[],9304,"ComissaoVendedorPcDescInicial",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9305,134,"COMISSAOVENDEDORPCDESCFINAL","% Desc. Final","","ComissaoVendedorPcDescFinal","decimal",0,"px",22,22,"right",null,[],9305,"ComissaoVendedorPcDescFinal",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(1219,135,"COMISSAOVENDEDORPERCENTUAL","Perc.","","ComissaoVendedorPercentual","decimal",0,"px",22,22,"right",null,[],1219,"ComissaoVendedorPercentual",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",136,0,"px",17,"px","e191fd2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",137,0,"px",17,"px","e171fd2_client","","Exc","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1220,138,"COMISSAOVENDEDOREMPRESAID","Empresa da Comissão do Vendedor","","ComissaoVendedorEmpresaId","char",0,"px",10,10,"left",null,[],1220,"ComissaoVendedorEmpresaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9306,139,"COMISSAOVENDEDORSEQ","Sequencia","","ComissaoVendedorSeq","int",0,"px",6,6,"right",null,[],9306,"ComissaoVendedorSeq",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9298,140,"COMISSAOVENDEDORTPCOBREMPRESAI","Tp. Cobr.","","ComissaoVendedorTpCobrEmpresaI","char",0,"px",10,10,"left",null,[],9298,"ComissaoVendedorTpCobrEmpresaI",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(9295,141,"COMISSAOVENDEDORVENDEMPID","Empresa do Vendedor","","ComissaoVendedorVendEmpId","char",0,"px",10,10,"left",null,[],9295,"ComissaoVendedorVendEmpId",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"GERAL",grid:0};
   GXValidFnc[12]={fld:"REGVENDCOM3",grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Comissaovendedorvendid,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORVENDID",gxz:"ZV14ComissaoVendedorVendId",gxold:"OV14ComissaoVendedorVendId",gxvar:"AV14ComissaoVendedorVendId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14ComissaoVendedorVendId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14ComissaoVendedorVendId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOMISSAOVENDEDORVENDID",gx.O.AV14ComissaoVendedorVendId,0)},c2v:function(){gx.O.AV14ComissaoVendedorVendId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMISSAOVENDEDORVENDID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORVENDNOME",gxz:"ZV15ComissaoVendedorVendNome",gxold:"OV15ComissaoVendedorVendNome",gxvar:"AV15ComissaoVendedorVendNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ComissaoVendedorVendNome=Value},v2z:function(Value){gx.O.ZV15ComissaoVendedorVendNome=Value},v2c:function(){gx.fn.setControlValue("vCOMISSAOVENDEDORVENDNOME",gx.O.AV15ComissaoVendedorVendNome,0)},c2v:function(){gx.O.AV15ComissaoVendedorVendNome=this.val()},val:function(){return gx.fn.getControlValue("vCOMISSAOVENDEDORVENDNOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Comissaovendedortpcobrformaid,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORTPCOBRFORMAID",gxz:"ZV17ComissaoVendedorTpCobrFormaId",gxold:"OV17ComissaoVendedorTpCobrFormaId",gxvar:"AV17ComissaoVendedorTpCobrFormaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17ComissaoVendedorTpCobrFormaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17ComissaoVendedorTpCobrFormaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOMISSAOVENDEDORTPCOBRFORMAID",gx.O.AV17ComissaoVendedorTpCobrFormaId,0)},c2v:function(){gx.O.AV17ComissaoVendedorTpCobrFormaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMISSAOVENDEDORTPCOBRFORMAID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Comissaovendedortpcobrid,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORTPCOBRID",gxz:"ZV18ComissaoVendedorTpCobrId",gxold:"OV18ComissaoVendedorTpCobrId",gxvar:"AV18ComissaoVendedorTpCobrId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18ComissaoVendedorTpCobrId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18ComissaoVendedorTpCobrId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOMISSAOVENDEDORTPCOBRID",gx.O.AV18ComissaoVendedorTpCobrId,0)},c2v:function(){gx.O.AV18ComissaoVendedorTpCobrId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMISSAOVENDEDORTPCOBRID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORTPCOBRDESCRICAO",gxz:"ZV19ComissaoVendedorTpCobrDescricao",gxold:"OV19ComissaoVendedorTpCobrDescricao",gxvar:"AV19ComissaoVendedorTpCobrDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ComissaoVendedorTpCobrDescricao=Value},v2z:function(Value){gx.O.ZV19ComissaoVendedorTpCobrDescricao=Value},v2c:function(){gx.fn.setControlValue("vCOMISSAOVENDEDORTPCOBRDESCRICAO",gx.O.AV19ComissaoVendedorTpCobrDescricao,0)},c2v:function(){gx.O.AV19ComissaoVendedorTpCobrDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCOMISSAOVENDEDORTPCOBRDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORPERCENTUAL",gxz:"ZV20ComissaoVendedorPercentual",gxold:"OV20ComissaoVendedorPercentual",gxvar:"AV20ComissaoVendedorPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ComissaoVendedorPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV20ComissaoVendedorPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOMISSAOVENDEDORPERCENTUAL",gx.O.AV20ComissaoVendedorPercentual,2,',')},c2v:function(){gx.O.AV20ComissaoVendedorPercentual=this.val()},val:function(){return gx.fn.getDecimalValue("vCOMISSAOVENDEDORPERCENTUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"REGVENDCOM4",grid:0};
   GXValidFnc[47]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORVALORINICIAL",gxz:"ZV31ComissaoVendedorValorInicial",gxold:"OV31ComissaoVendedorValorInicial",gxvar:"AV31ComissaoVendedorValorInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31ComissaoVendedorValorInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV31ComissaoVendedorValorInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOMISSAOVENDEDORVALORINICIAL",gx.O.AV31ComissaoVendedorValorInicial,2,',')},c2v:function(){gx.O.AV31ComissaoVendedorValorInicial=this.val()},val:function(){return gx.fn.getDecimalValue("vCOMISSAOVENDEDORVALORINICIAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORVALORFINAL",gxz:"ZV30ComissaoVendedorValorFinal",gxold:"OV30ComissaoVendedorValorFinal",gxvar:"AV30ComissaoVendedorValorFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ComissaoVendedorValorFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV30ComissaoVendedorValorFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOMISSAOVENDEDORVALORFINAL",gx.O.AV30ComissaoVendedorValorFinal,2,',')},c2v:function(){gx.O.AV30ComissaoVendedorValorFinal=this.val()},val:function(){return gx.fn.getDecimalValue("vCOMISSAOVENDEDORVALORFINAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORPERCENTUAL1",gxz:"ZV35ComissaoVendedorPercentual1",gxold:"OV35ComissaoVendedorPercentual1",gxvar:"AV35ComissaoVendedorPercentual1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35ComissaoVendedorPercentual1=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV35ComissaoVendedorPercentual1=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOMISSAOVENDEDORPERCENTUAL1",gx.O.AV35ComissaoVendedorPercentual1,2,',')},c2v:function(){gx.O.AV35ComissaoVendedorPercentual1=this.val()},val:function(){return gx.fn.getDecimalValue("vCOMISSAOVENDEDORPERCENTUAL1",'.',',')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"REGVENDCOM5",grid:0};
   GXValidFnc[69]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[71]={fld:"TABLE3",grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Comissaovendedortpcobrformaid2,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORTPCOBRFORMAID2",gxz:"ZV42ComissaoVendedorTpCobrFormaId2",gxold:"OV42ComissaoVendedorTpCobrFormaId2",gxvar:"AV42ComissaoVendedorTpCobrFormaId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ComissaoVendedorTpCobrFormaId2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV42ComissaoVendedorTpCobrFormaId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOMISSAOVENDEDORTPCOBRFORMAID2",gx.O.AV42ComissaoVendedorTpCobrFormaId2,0)},c2v:function(){gx.O.AV42ComissaoVendedorTpCobrFormaId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMISSAOVENDEDORTPCOBRFORMAID2",'.')},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Comissaovendedortpcobrid2,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORTPCOBRID2",gxz:"ZV43ComissaoVendedorTpCobrId2",gxold:"OV43ComissaoVendedorTpCobrId2",gxvar:"AV43ComissaoVendedorTpCobrId2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43ComissaoVendedorTpCobrId2=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43ComissaoVendedorTpCobrId2=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOMISSAOVENDEDORTPCOBRID2",gx.O.AV43ComissaoVendedorTpCobrId2,0)},c2v:function(){gx.O.AV43ComissaoVendedorTpCobrId2=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMISSAOVENDEDORTPCOBRID2",'.')},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORTPCOBRDESCRICAO2",gxz:"ZV44ComissaoVendedorTpCobrDescricao2",gxold:"OV44ComissaoVendedorTpCobrDescricao2",gxvar:"AV44ComissaoVendedorTpCobrDescricao2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44ComissaoVendedorTpCobrDescricao2=Value},v2z:function(Value){gx.O.ZV44ComissaoVendedorTpCobrDescricao2=Value},v2c:function(){gx.fn.setControlValue("vCOMISSAOVENDEDORTPCOBRDESCRICAO2",gx.O.AV44ComissaoVendedorTpCobrDescricao2,0)},c2v:function(){gx.O.AV44ComissaoVendedorTpCobrDescricao2=this.val()},val:function(){return gx.fn.getControlValue("vCOMISSAOVENDEDORTPCOBRDESCRICAO2")},nac:gx.falseFn};
   GXValidFnc[83]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORVALORINICIAL2",gxz:"ZV39ComissaoVendedorValorInicial2",gxold:"OV39ComissaoVendedorValorInicial2",gxvar:"AV39ComissaoVendedorValorInicial2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ComissaoVendedorValorInicial2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV39ComissaoVendedorValorInicial2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOMISSAOVENDEDORVALORINICIAL2",gx.O.AV39ComissaoVendedorValorInicial2,2,',')},c2v:function(){gx.O.AV39ComissaoVendedorValorInicial2=this.val()},val:function(){return gx.fn.getDecimalValue("vCOMISSAOVENDEDORVALORINICIAL2",'.',',')},nac:gx.falseFn};
   GXValidFnc[88]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORVALORFINAL2",gxz:"ZV40ComissaoVendedorValorFinal2",gxold:"OV40ComissaoVendedorValorFinal2",gxvar:"AV40ComissaoVendedorValorFinal2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40ComissaoVendedorValorFinal2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV40ComissaoVendedorValorFinal2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOMISSAOVENDEDORVALORFINAL2",gx.O.AV40ComissaoVendedorValorFinal2,2,',')},c2v:function(){gx.O.AV40ComissaoVendedorValorFinal2=this.val()},val:function(){return gx.fn.getDecimalValue("vCOMISSAOVENDEDORVALORFINAL2",'.',',')},nac:gx.falseFn};
   GXValidFnc[93]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORPERCENTUAL2",gxz:"ZV41ComissaoVendedorPercentual2",gxold:"OV41ComissaoVendedorPercentual2",gxvar:"AV41ComissaoVendedorPercentual2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41ComissaoVendedorPercentual2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV41ComissaoVendedorPercentual2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOMISSAOVENDEDORPERCENTUAL2",gx.O.AV41ComissaoVendedorPercentual2,2,',')},c2v:function(){gx.O.AV41ComissaoVendedorPercentual2=this.val()},val:function(){return gx.fn.getDecimalValue("vCOMISSAOVENDEDORPERCENTUAL2",'.',',')},nac:gx.falseFn};
   GXValidFnc[102]={fld:"REGVENDCOM6",grid:0};
   GXValidFnc[105]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[107]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORPCDESCINICIAL",gxz:"ZV29ComissaoVendedorPcDescInicial",gxold:"OV29ComissaoVendedorPcDescInicial",gxvar:"AV29ComissaoVendedorPcDescInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ComissaoVendedorPcDescInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV29ComissaoVendedorPcDescInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOMISSAOVENDEDORPCDESCINICIAL",gx.O.AV29ComissaoVendedorPcDescInicial,2,',')},c2v:function(){gx.O.AV29ComissaoVendedorPcDescInicial=this.val()},val:function(){return gx.fn.getDecimalValue("vCOMISSAOVENDEDORPCDESCINICIAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[110]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[112]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORPCDESCFINAL",gxz:"ZV28ComissaoVendedorPcDescFinal",gxold:"OV28ComissaoVendedorPcDescFinal",gxvar:"AV28ComissaoVendedorPcDescFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ComissaoVendedorPcDescFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV28ComissaoVendedorPcDescFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOMISSAOVENDEDORPCDESCFINAL",gx.O.AV28ComissaoVendedorPcDescFinal,2,',')},c2v:function(){gx.O.AV28ComissaoVendedorPcDescFinal=this.val()},val:function(){return gx.fn.getDecimalValue("vCOMISSAOVENDEDORPCDESCFINAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[115]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[117]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORPERCENTUAL3",gxz:"ZV47ComissaoVendedorPercentual3",gxold:"OV47ComissaoVendedorPercentual3",gxvar:"AV47ComissaoVendedorPercentual3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV47ComissaoVendedorPercentual3=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV47ComissaoVendedorPercentual3=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCOMISSAOVENDEDORPERCENTUAL3",gx.O.AV47ComissaoVendedorPercentual3,2,',')},c2v:function(){gx.O.AV47ComissaoVendedorPercentual3=this.val()},val:function(){return gx.fn.getDecimalValue("vCOMISSAOVENDEDORPERCENTUAL3",'.',',')},nac:gx.falseFn};
   GXValidFnc[124]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[126]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORVENDID",gxz:"Z9296ComissaoVendedorVendId",gxold:"O9296ComissaoVendedorVendId",gxvar:"A9296ComissaoVendedorVendId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9296ComissaoVendedorVendId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9296ComissaoVendedorVendId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("COMISSAOVENDEDORVENDID",row || gx.fn.currentGridRowImpl(125),gx.O.A9296ComissaoVendedorVendId,0)},c2v:function(){gx.O.A9296ComissaoVendedorVendId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("COMISSAOVENDEDORVENDID",row || gx.fn.currentGridRowImpl(125),'.')},nac:gx.falseFn};
   GXValidFnc[127]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORVENDNOMEGRID",gxz:"ZV53ComissaoVendedorVendNomeGrid",gxold:"OV53ComissaoVendedorVendNomeGrid",gxvar:"AV53ComissaoVendedorVendNomeGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV53ComissaoVendedorVendNomeGrid=Value},v2z:function(Value){gx.O.ZV53ComissaoVendedorVendNomeGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vCOMISSAOVENDEDORVENDNOMEGRID",row || gx.fn.currentGridRowImpl(125),gx.O.AV53ComissaoVendedorVendNomeGrid,0)},c2v:function(){gx.O.AV53ComissaoVendedorVendNomeGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCOMISSAOVENDEDORVENDNOMEGRID",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[128]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORTPCOBRFORMAID",gxz:"Z9299ComissaoVendedorTpCobrFormaId",gxold:"O9299ComissaoVendedorTpCobrFormaId",gxvar:"A9299ComissaoVendedorTpCobrFormaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9299ComissaoVendedorTpCobrFormaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9299ComissaoVendedorTpCobrFormaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("COMISSAOVENDEDORTPCOBRFORMAID",row || gx.fn.currentGridRowImpl(125),gx.O.A9299ComissaoVendedorTpCobrFormaId,0)},c2v:function(){gx.O.A9299ComissaoVendedorTpCobrFormaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("COMISSAOVENDEDORTPCOBRFORMAID",row || gx.fn.currentGridRowImpl(125),'.')},nac:gx.falseFn};
   GXValidFnc[129]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORTPCOBRID",gxz:"Z9300ComissaoVendedorTpCobrId",gxold:"O9300ComissaoVendedorTpCobrId",gxvar:"A9300ComissaoVendedorTpCobrId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9300ComissaoVendedorTpCobrId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9300ComissaoVendedorTpCobrId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("COMISSAOVENDEDORTPCOBRID",row || gx.fn.currentGridRowImpl(125),gx.O.A9300ComissaoVendedorTpCobrId,0)},c2v:function(){gx.O.A9300ComissaoVendedorTpCobrId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("COMISSAOVENDEDORTPCOBRID",row || gx.fn.currentGridRowImpl(125),'.')},nac:gx.falseFn};
   GXValidFnc[130]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORTPCOBRDESCRICAOGRID",gxz:"ZV54ComissaoVendedorTpCobrDescricaoGrid",gxold:"OV54ComissaoVendedorTpCobrDescricaoGrid",gxvar:"AV54ComissaoVendedorTpCobrDescricaoGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV54ComissaoVendedorTpCobrDescricaoGrid=Value},v2z:function(Value){gx.O.ZV54ComissaoVendedorTpCobrDescricaoGrid=Value},v2c:function(row){gx.fn.setGridControlValue("vCOMISSAOVENDEDORTPCOBRDESCRICAOGRID",row || gx.fn.currentGridRowImpl(125),gx.O.AV54ComissaoVendedorTpCobrDescricaoGrid,0)},c2v:function(){gx.O.AV54ComissaoVendedorTpCobrDescricaoGrid=this.val()},val:function(row){return gx.fn.getGridControlValue("vCOMISSAOVENDEDORTPCOBRDESCRICAOGRID",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[131]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORVALORINICIAL",gxz:"Z9302ComissaoVendedorValorInicial",gxold:"O9302ComissaoVendedorValorInicial",gxvar:"A9302ComissaoVendedorValorInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9302ComissaoVendedorValorInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9302ComissaoVendedorValorInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("COMISSAOVENDEDORVALORINICIAL",row || gx.fn.currentGridRowImpl(125),gx.O.A9302ComissaoVendedorValorInicial,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9302ComissaoVendedorValorInicial=this.val()},val:function(row){return gx.fn.getGridDecimalValue("COMISSAOVENDEDORVALORINICIAL",row || gx.fn.currentGridRowImpl(125),'.',',')},nac:gx.falseFn};
   GXValidFnc[132]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORVALORFINAL",gxz:"Z9303ComissaoVendedorValorFinal",gxold:"O9303ComissaoVendedorValorFinal",gxvar:"A9303ComissaoVendedorValorFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9303ComissaoVendedorValorFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9303ComissaoVendedorValorFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("COMISSAOVENDEDORVALORFINAL",row || gx.fn.currentGridRowImpl(125),gx.O.A9303ComissaoVendedorValorFinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9303ComissaoVendedorValorFinal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("COMISSAOVENDEDORVALORFINAL",row || gx.fn.currentGridRowImpl(125),'.',',')},nac:gx.falseFn};
   GXValidFnc[133]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORPCDESCINICIAL",gxz:"Z9304ComissaoVendedorPcDescInicial",gxold:"O9304ComissaoVendedorPcDescInicial",gxvar:"A9304ComissaoVendedorPcDescInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9304ComissaoVendedorPcDescInicial=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9304ComissaoVendedorPcDescInicial=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("COMISSAOVENDEDORPCDESCINICIAL",row || gx.fn.currentGridRowImpl(125),gx.O.A9304ComissaoVendedorPcDescInicial,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9304ComissaoVendedorPcDescInicial=this.val()},val:function(row){return gx.fn.getGridDecimalValue("COMISSAOVENDEDORPCDESCINICIAL",row || gx.fn.currentGridRowImpl(125),'.',',')},nac:gx.falseFn};
   GXValidFnc[134]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORPCDESCFINAL",gxz:"Z9305ComissaoVendedorPcDescFinal",gxold:"O9305ComissaoVendedorPcDescFinal",gxvar:"A9305ComissaoVendedorPcDescFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9305ComissaoVendedorPcDescFinal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z9305ComissaoVendedorPcDescFinal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("COMISSAOVENDEDORPCDESCFINAL",row || gx.fn.currentGridRowImpl(125),gx.O.A9305ComissaoVendedorPcDescFinal,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9305ComissaoVendedorPcDescFinal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("COMISSAOVENDEDORPCDESCFINAL",row || gx.fn.currentGridRowImpl(125),'.',',')},nac:gx.falseFn};
   GXValidFnc[135]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORPERCENTUAL",gxz:"Z1219ComissaoVendedorPercentual",gxold:"O1219ComissaoVendedorPercentual",gxvar:"A1219ComissaoVendedorPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1219ComissaoVendedorPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1219ComissaoVendedorPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("COMISSAOVENDEDORPERCENTUAL",row || gx.fn.currentGridRowImpl(125),gx.O.A1219ComissaoVendedorPercentual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1219ComissaoVendedorPercentual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("COMISSAOVENDEDORPERCENTUAL",row || gx.fn.currentGridRowImpl(125),'.',',')},nac:gx.falseFn};
   GXValidFnc[136]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV21bmpAlt",gxold:"OV21bmpAlt",gxvar:"AV21bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpAlt=Value},v2z:function(Value){gx.O.ZV21bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(125),gx.O.AV21bmpAlt,gx.O.AV65Bmpalt_GXI)},c2v:function(){gx.O.AV65Bmpalt_GXI=this.val_GXI();gx.O.AV21bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(125))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(125))}, gxvar_GXI:'AV65Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[137]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV22bmpExc",gxold:"OV22bmpExc",gxvar:"AV22bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpExc=Value},v2z:function(Value){gx.O.ZV22bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(125),gx.O.AV22bmpExc,gx.O.AV66Bmpexc_GXI)},c2v:function(){gx.O.AV66Bmpexc_GXI=this.val_GXI();gx.O.AV22bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(125))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(125))}, gxvar_GXI:'AV66Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[138]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDOREMPRESAID",gxz:"Z1220ComissaoVendedorEmpresaId",gxold:"O1220ComissaoVendedorEmpresaId",gxvar:"A1220ComissaoVendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1220ComissaoVendedorEmpresaId=Value},v2z:function(Value){gx.O.Z1220ComissaoVendedorEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("COMISSAOVENDEDOREMPRESAID",row || gx.fn.currentGridRowImpl(125),gx.O.A1220ComissaoVendedorEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1220ComissaoVendedorEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("COMISSAOVENDEDOREMPRESAID",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[139]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORSEQ",gxz:"Z9306ComissaoVendedorSeq",gxold:"O9306ComissaoVendedorSeq",gxvar:"A9306ComissaoVendedorSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9306ComissaoVendedorSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9306ComissaoVendedorSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("COMISSAOVENDEDORSEQ",row || gx.fn.currentGridRowImpl(125),gx.O.A9306ComissaoVendedorSeq,0)},c2v:function(){gx.O.A9306ComissaoVendedorSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("COMISSAOVENDEDORSEQ",row || gx.fn.currentGridRowImpl(125),'.')},nac:gx.falseFn};
   GXValidFnc[140]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORTPCOBREMPRESAI",gxz:"Z9298ComissaoVendedorTpCobrEmpresaI",gxold:"O9298ComissaoVendedorTpCobrEmpresaI",gxvar:"A9298ComissaoVendedorTpCobrEmpresaI",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9298ComissaoVendedorTpCobrEmpresaI=Value},v2z:function(Value){gx.O.Z9298ComissaoVendedorTpCobrEmpresaI=Value},v2c:function(row){gx.fn.setGridControlValue("COMISSAOVENDEDORTPCOBREMPRESAI",row || gx.fn.currentGridRowImpl(125),gx.O.A9298ComissaoVendedorTpCobrEmpresaI,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9298ComissaoVendedorTpCobrEmpresaI=this.val()},val:function(row){return gx.fn.getGridControlValue("COMISSAOVENDEDORTPCOBREMPRESAI",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[141]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:125,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"COMISSAOVENDEDORVENDEMPID",gxz:"Z9295ComissaoVendedorVendEmpId",gxold:"O9295ComissaoVendedorVendEmpId",gxvar:"A9295ComissaoVendedorVendEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9295ComissaoVendedorVendEmpId=Value},v2z:function(Value){gx.O.Z9295ComissaoVendedorVendEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("COMISSAOVENDEDORVENDEMPID",row || gx.fn.currentGridRowImpl(125),gx.O.A9295ComissaoVendedorVendEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A9295ComissaoVendedorVendEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("COMISSAOVENDEDORVENDEMPID",row || gx.fn.currentGridRowImpl(125))},nac:gx.falseFn};
   GXValidFnc[142]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[149]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNEXCLUIR",gxz:"ZV27SnExcluir",gxold:"OV27SnExcluir",gxvar:"AV27SnExcluir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27SnExcluir=Value},v2z:function(Value){gx.O.ZV27SnExcluir=Value},v2c:function(){gx.fn.setControlValue("vSNEXCLUIR",gx.O.AV27SnExcluir,0)},c2v:function(){gx.O.AV27SnExcluir=this.val()},val:function(){return gx.fn.getControlValue("vSNEXCLUIR")},nac:gx.falseFn};
   GXValidFnc[150]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[151]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Comissaovendedorseq,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORSEQ",gxz:"ZV24ComissaoVendedorSeq",gxold:"OV24ComissaoVendedorSeq",gxvar:"AV24ComissaoVendedorSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ComissaoVendedorSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24ComissaoVendedorSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOMISSAOVENDEDORSEQ",gx.O.AV24ComissaoVendedorSeq,0)},c2v:function(){gx.O.AV24ComissaoVendedorSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMISSAOVENDEDORSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[152]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORTPCOBREMPRESAID",gxz:"ZV16ComissaoVendedorTpCobrEmpresaId",gxold:"OV16ComissaoVendedorTpCobrEmpresaId",gxvar:"AV16ComissaoVendedorTpCobrEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ComissaoVendedorTpCobrEmpresaId=Value},v2z:function(Value){gx.O.ZV16ComissaoVendedorTpCobrEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCOMISSAOVENDEDORTPCOBREMPRESAID",gx.O.AV16ComissaoVendedorTpCobrEmpresaId,0)},c2v:function(){gx.O.AV16ComissaoVendedorTpCobrEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCOMISSAOVENDEDORTPCOBREMPRESAID")},nac:gx.falseFn};
   GXValidFnc[153]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Comissaovendedorvendempid,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORVENDEMPID",gxz:"ZV13ComissaoVendedorVendEmpId",gxold:"OV13ComissaoVendedorVendEmpId",gxvar:"AV13ComissaoVendedorVendEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13ComissaoVendedorVendEmpId=Value},v2z:function(Value){gx.O.ZV13ComissaoVendedorVendEmpId=Value},v2c:function(){gx.fn.setControlValue("vCOMISSAOVENDEDORVENDEMPID",gx.O.AV13ComissaoVendedorVendEmpId,0)},c2v:function(){gx.O.AV13ComissaoVendedorVendEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCOMISSAOVENDEDORVENDEMPID")},nac:gx.falseFn};
   GXValidFnc[155]={fld:"JS", format:2,grid:0};
   GXValidFnc[156]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNALTERAR",gxz:"ZV26SnAlterar",gxold:"OV26SnAlterar",gxvar:"AV26SnAlterar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26SnAlterar=Value},v2z:function(Value){gx.O.ZV26SnAlterar=Value},v2c:function(){gx.fn.setControlValue("vSNALTERAR",gx.O.AV26SnAlterar,0)},c2v:function(){gx.O.AV26SnAlterar=this.val()},val:function(){return gx.fn.getControlValue("vSNALTERAR")},nac:gx.falseFn};
   GXValidFnc[157]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOMISSAOVENDEDORSEQEXC",gxz:"ZV52ComissaoVendedorSeqExc",gxold:"OV52ComissaoVendedorSeqExc",gxvar:"AV52ComissaoVendedorSeqExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52ComissaoVendedorSeqExc=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV52ComissaoVendedorSeqExc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOMISSAOVENDEDORSEQEXC",gx.O.AV52ComissaoVendedorSeqExc,0)},c2v:function(){gx.O.AV52ComissaoVendedorSeqExc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOMISSAOVENDEDORSEQEXC",'.')},nac:gx.falseFn};
   GXValidFnc[160]={fld:"PROMPT_COMISSAOVENDEDORVENDID",grid:0};
   GXValidFnc[161]={fld:"PROMPT_COMISSAOVENDEDORTPCOBRFORMAID",grid:0};
   GXValidFnc[162]={fld:"PROMPT_COMISSAOVENDEDORTPCOBRID",grid:0};
   GXValidFnc[163]={fld:"PROMPT_COMISSAOVENDEDORTPCOBRFORMAID2",grid:0};
   GXValidFnc[164]={fld:"PROMPT_COMISSAOVENDEDORTPCOBRID2",grid:0};
   this.AV14ComissaoVendedorVendId = 0 ;
   this.ZV14ComissaoVendedorVendId = 0 ;
   this.OV14ComissaoVendedorVendId = 0 ;
   this.AV15ComissaoVendedorVendNome = "" ;
   this.ZV15ComissaoVendedorVendNome = "" ;
   this.OV15ComissaoVendedorVendNome = "" ;
   this.AV17ComissaoVendedorTpCobrFormaId = 0 ;
   this.ZV17ComissaoVendedorTpCobrFormaId = 0 ;
   this.OV17ComissaoVendedorTpCobrFormaId = 0 ;
   this.AV18ComissaoVendedorTpCobrId = 0 ;
   this.ZV18ComissaoVendedorTpCobrId = 0 ;
   this.OV18ComissaoVendedorTpCobrId = 0 ;
   this.AV19ComissaoVendedorTpCobrDescricao = "" ;
   this.ZV19ComissaoVendedorTpCobrDescricao = "" ;
   this.OV19ComissaoVendedorTpCobrDescricao = "" ;
   this.AV20ComissaoVendedorPercentual = 0 ;
   this.ZV20ComissaoVendedorPercentual = 0 ;
   this.OV20ComissaoVendedorPercentual = 0 ;
   this.AV31ComissaoVendedorValorInicial = 0 ;
   this.ZV31ComissaoVendedorValorInicial = 0 ;
   this.OV31ComissaoVendedorValorInicial = 0 ;
   this.AV30ComissaoVendedorValorFinal = 0 ;
   this.ZV30ComissaoVendedorValorFinal = 0 ;
   this.OV30ComissaoVendedorValorFinal = 0 ;
   this.AV35ComissaoVendedorPercentual1 = 0 ;
   this.ZV35ComissaoVendedorPercentual1 = 0 ;
   this.OV35ComissaoVendedorPercentual1 = 0 ;
   this.AV42ComissaoVendedorTpCobrFormaId2 = 0 ;
   this.ZV42ComissaoVendedorTpCobrFormaId2 = 0 ;
   this.OV42ComissaoVendedorTpCobrFormaId2 = 0 ;
   this.AV43ComissaoVendedorTpCobrId2 = 0 ;
   this.ZV43ComissaoVendedorTpCobrId2 = 0 ;
   this.OV43ComissaoVendedorTpCobrId2 = 0 ;
   this.AV44ComissaoVendedorTpCobrDescricao2 = "" ;
   this.ZV44ComissaoVendedorTpCobrDescricao2 = "" ;
   this.OV44ComissaoVendedorTpCobrDescricao2 = "" ;
   this.AV39ComissaoVendedorValorInicial2 = 0 ;
   this.ZV39ComissaoVendedorValorInicial2 = 0 ;
   this.OV39ComissaoVendedorValorInicial2 = 0 ;
   this.AV40ComissaoVendedorValorFinal2 = 0 ;
   this.ZV40ComissaoVendedorValorFinal2 = 0 ;
   this.OV40ComissaoVendedorValorFinal2 = 0 ;
   this.AV41ComissaoVendedorPercentual2 = 0 ;
   this.ZV41ComissaoVendedorPercentual2 = 0 ;
   this.OV41ComissaoVendedorPercentual2 = 0 ;
   this.AV29ComissaoVendedorPcDescInicial = 0 ;
   this.ZV29ComissaoVendedorPcDescInicial = 0 ;
   this.OV29ComissaoVendedorPcDescInicial = 0 ;
   this.AV28ComissaoVendedorPcDescFinal = 0 ;
   this.ZV28ComissaoVendedorPcDescFinal = 0 ;
   this.OV28ComissaoVendedorPcDescFinal = 0 ;
   this.AV47ComissaoVendedorPercentual3 = 0 ;
   this.ZV47ComissaoVendedorPercentual3 = 0 ;
   this.OV47ComissaoVendedorPercentual3 = 0 ;
   this.Z9296ComissaoVendedorVendId = 0 ;
   this.O9296ComissaoVendedorVendId = 0 ;
   this.ZV53ComissaoVendedorVendNomeGrid = "" ;
   this.OV53ComissaoVendedorVendNomeGrid = "" ;
   this.Z9299ComissaoVendedorTpCobrFormaId = 0 ;
   this.O9299ComissaoVendedorTpCobrFormaId = 0 ;
   this.Z9300ComissaoVendedorTpCobrId = 0 ;
   this.O9300ComissaoVendedorTpCobrId = 0 ;
   this.ZV54ComissaoVendedorTpCobrDescricaoGrid = "" ;
   this.OV54ComissaoVendedorTpCobrDescricaoGrid = "" ;
   this.Z9302ComissaoVendedorValorInicial = 0 ;
   this.O9302ComissaoVendedorValorInicial = 0 ;
   this.Z9303ComissaoVendedorValorFinal = 0 ;
   this.O9303ComissaoVendedorValorFinal = 0 ;
   this.Z9304ComissaoVendedorPcDescInicial = 0 ;
   this.O9304ComissaoVendedorPcDescInicial = 0 ;
   this.Z9305ComissaoVendedorPcDescFinal = 0 ;
   this.O9305ComissaoVendedorPcDescFinal = 0 ;
   this.Z1219ComissaoVendedorPercentual = 0 ;
   this.O1219ComissaoVendedorPercentual = 0 ;
   this.ZV21bmpAlt = "" ;
   this.OV21bmpAlt = "" ;
   this.ZV22bmpExc = "" ;
   this.OV22bmpExc = "" ;
   this.Z1220ComissaoVendedorEmpresaId = "" ;
   this.O1220ComissaoVendedorEmpresaId = "" ;
   this.Z9306ComissaoVendedorSeq = 0 ;
   this.O9306ComissaoVendedorSeq = 0 ;
   this.Z9298ComissaoVendedorTpCobrEmpresaI = "" ;
   this.O9298ComissaoVendedorTpCobrEmpresaI = "" ;
   this.Z9295ComissaoVendedorVendEmpId = "" ;
   this.O9295ComissaoVendedorVendEmpId = "" ;
   this.AV27SnExcluir = "" ;
   this.ZV27SnExcluir = "" ;
   this.OV27SnExcluir = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV24ComissaoVendedorSeq = 0 ;
   this.ZV24ComissaoVendedorSeq = 0 ;
   this.OV24ComissaoVendedorSeq = 0 ;
   this.AV16ComissaoVendedorTpCobrEmpresaId = "" ;
   this.ZV16ComissaoVendedorTpCobrEmpresaId = "" ;
   this.OV16ComissaoVendedorTpCobrEmpresaId = "" ;
   this.AV13ComissaoVendedorVendEmpId = "" ;
   this.ZV13ComissaoVendedorVendEmpId = "" ;
   this.OV13ComissaoVendedorVendEmpId = "" ;
   this.AV26SnAlterar = "" ;
   this.ZV26SnAlterar = "" ;
   this.OV26SnAlterar = "" ;
   this.AV52ComissaoVendedorSeqExc = 0 ;
   this.ZV52ComissaoVendedorSeqExc = 0 ;
   this.OV52ComissaoVendedorSeqExc = 0 ;
   this.AV14ComissaoVendedorVendId = 0 ;
   this.AV15ComissaoVendedorVendNome = "" ;
   this.AV17ComissaoVendedorTpCobrFormaId = 0 ;
   this.AV18ComissaoVendedorTpCobrId = 0 ;
   this.AV19ComissaoVendedorTpCobrDescricao = "" ;
   this.AV20ComissaoVendedorPercentual = 0 ;
   this.AV31ComissaoVendedorValorInicial = 0 ;
   this.AV30ComissaoVendedorValorFinal = 0 ;
   this.AV35ComissaoVendedorPercentual1 = 0 ;
   this.AV42ComissaoVendedorTpCobrFormaId2 = 0 ;
   this.AV43ComissaoVendedorTpCobrId2 = 0 ;
   this.AV44ComissaoVendedorTpCobrDescricao2 = "" ;
   this.AV39ComissaoVendedorValorInicial2 = 0 ;
   this.AV40ComissaoVendedorValorFinal2 = 0 ;
   this.AV41ComissaoVendedorPercentual2 = 0 ;
   this.AV29ComissaoVendedorPcDescInicial = 0 ;
   this.AV28ComissaoVendedorPcDescFinal = 0 ;
   this.AV47ComissaoVendedorPercentual3 = 0 ;
   this.AV27SnExcluir = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV24ComissaoVendedorSeq = 0 ;
   this.AV16ComissaoVendedorTpCobrEmpresaId = "" ;
   this.AV13ComissaoVendedorVendEmpId = "" ;
   this.AV26SnAlterar = "" ;
   this.AV52ComissaoVendedorSeqExc = 0 ;
   this.AV23PercentualVendedor = 0 ;
   this.A9353ComissaoVendedorTpPercentual = 0 ;
   this.A9296ComissaoVendedorVendId = 0 ;
   this.AV53ComissaoVendedorVendNomeGrid = "" ;
   this.A9299ComissaoVendedorTpCobrFormaId = 0 ;
   this.A9300ComissaoVendedorTpCobrId = 0 ;
   this.AV54ComissaoVendedorTpCobrDescricaoGrid = "" ;
   this.A9302ComissaoVendedorValorInicial = 0 ;
   this.A9303ComissaoVendedorValorFinal = 0 ;
   this.A9304ComissaoVendedorPcDescInicial = 0 ;
   this.A9305ComissaoVendedorPcDescFinal = 0 ;
   this.A1219ComissaoVendedorPercentual = 0 ;
   this.AV21bmpAlt = "" ;
   this.AV22bmpExc = "" ;
   this.A1220ComissaoVendedorEmpresaId = "" ;
   this.A9306ComissaoVendedorSeq = 0 ;
   this.A9298ComissaoVendedorTpCobrEmpresaI = "" ;
   this.A9295ComissaoVendedorVendEmpId = "" ;
   this.A3377TpCobrFormaPgtoId = 0 ;
   this.A3376FormaPgtoId = 0 ;
   this.A3375FormaPgtoEmpresaId = "" ;
   this.A3797TpCobrFormaPgtoDescricao = "" ;
   this.A1237VendedorId = 0 ;
   this.A1229VendedorEmpresaId = "" ;
   this.A1148VendedorNome = "" ;
   this.AV57FormaPgtoEmpresaId = "" ;
   this.AV58FormaPgtoId = 0 ;
   this.AV59TpCobrFormaPgtoId = 0 ;
   this.AV25ComissaoVendedorEmpresaId = "" ;
   this.AV5UsrCod = "" ;
   this.AV55VendedorEmpresaId = "" ;
   this.AV56VendedorId = 0 ;
   this.Events = {"e111fd2_client": ["ENTER", true] ,"e121fd2_client": ["'FECHAR'", true] ,"e171fd2_client": ["'EXCLUIR'", true] ,"e131fd2_client": ["'CONFIRMAR'", true] ,"e191fd2_client": ["'ALTERAR'", true] ,"e141fd2_client": ["'CANCELAR'", true] ,"e201fd2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDOREMPRESAID","Visible")',ctrl:'COMISSAOVENDEDOREMPRESAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORSEQ","Visible")',ctrl:'COMISSAOVENDEDORSEQ',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORVENDEMPID","Visible")',ctrl:'COMISSAOVENDEDORVENDEMPID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORVENDID","Visible")',ctrl:'COMISSAOVENDEDORVENDID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORVENDNOMEGRID","Visible")',ctrl:'vCOMISSAOVENDEDORVENDNOMEGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORTPCOBREMPRESAI","Visible")',ctrl:'COMISSAOVENDEDORTPCOBREMPRESAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORTPCOBRFORMAID","Visible")',ctrl:'COMISSAOVENDEDORTPCOBRFORMAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORTPCOBRID","Visible")',ctrl:'COMISSAOVENDEDORTPCOBRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORTPCOBRDESCRICAOGRID","Visible")',ctrl:'vCOMISSAOVENDEDORTPCOBRDESCRICAOGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORVALORINICIAL","Visible")',ctrl:'COMISSAOVENDEDORVALORINICIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORVALORFINAL","Visible")',ctrl:'COMISSAOVENDEDORVALORFINAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORPCDESCINICIAL","Visible")',ctrl:'COMISSAOVENDEDORPCDESCINICIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORPCDESCFINAL","Visible")',ctrl:'COMISSAOVENDEDORPCDESCFINAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORPERCENTUAL","Visible")',ctrl:'COMISSAOVENDEDORPERCENTUAL',prop:'Visible'},{av:'AV18ComissaoVendedorTpCobrId',fld:'vCOMISSAOVENDEDORTPCOBRID'},{av:'AV17ComissaoVendedorTpCobrFormaId',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID'},{av:'A3375FormaPgtoEmpresaId',fld:'FORMAPGTOEMPRESAID'},{av:'AV57FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV58FormaPgtoId',fld:'vFORMAPGTOID'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'AV59TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'A3797TpCobrFormaPgtoDescricao',fld:'TPCOBRFORMAPGTODESCRICAO'},{av:'AV43ComissaoVendedorTpCobrId2',fld:'vCOMISSAOVENDEDORTPCOBRID2'},{av:'AV42ComissaoVendedorTpCobrFormaId2',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID2'},{av:'AV26SnAlterar',fld:'vSNALTERAR'},{av:'A1220ComissaoVendedorEmpresaId',fld:'COMISSAOVENDEDOREMPRESAID'},{av:'AV25ComissaoVendedorEmpresaId',fld:'vCOMISSAOVENDEDOREMPRESAID'},{av:'A9306ComissaoVendedorSeq',fld:'COMISSAOVENDEDORSEQ'},{av:'AV24ComissaoVendedorSeq',fld:'vCOMISSAOVENDEDORSEQ'},{av:'A9295ComissaoVendedorVendEmpId',fld:'COMISSAOVENDEDORVENDEMPID'},{av:'A9296ComissaoVendedorVendId',fld:'COMISSAOVENDEDORVENDID'},{av:'A9298ComissaoVendedorTpCobrEmpresaI',fld:'COMISSAOVENDEDORTPCOBREMPRESAI'},{av:'A9299ComissaoVendedorTpCobrFormaId',fld:'COMISSAOVENDEDORTPCOBRFORMAID'},{av:'A9300ComissaoVendedorTpCobrId',fld:'COMISSAOVENDEDORTPCOBRID'},{av:'A1219ComissaoVendedorPercentual',fld:'COMISSAOVENDEDORPERCENTUAL'},{av:'A9302ComissaoVendedorValorInicial',fld:'COMISSAOVENDEDORVALORINICIAL'},{av:'A9303ComissaoVendedorValorFinal',fld:'COMISSAOVENDEDORVALORFINAL'},{av:'A9304ComissaoVendedorPcDescInicial',fld:'COMISSAOVENDEDORPCDESCINICIAL'},{av:'A9305ComissaoVendedorPcDescFinal',fld:'COMISSAOVENDEDORPCDESCFINAL'},{av:'AV23PercentualVendedor',fld:'vPERCENTUALVENDEDOR',hsh:true},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV52ComissaoVendedorSeqExc',fld:'vCOMISSAOVENDEDORSEQEXC'},{av:'AV13ComissaoVendedorVendEmpId',fld:'vCOMISSAOVENDEDORVENDEMPID'},{av:'AV14ComissaoVendedorVendId',fld:'vCOMISSAOVENDEDORVENDID'},{av:'AV16ComissaoVendedorTpCobrEmpresaId',fld:'vCOMISSAOVENDEDORTPCOBREMPRESAID'},{av:'AV31ComissaoVendedorValorInicial',fld:'vCOMISSAOVENDEDORVALORINICIAL'},{av:'AV30ComissaoVendedorValorFinal',fld:'vCOMISSAOVENDEDORVALORFINAL'},{av:'AV29ComissaoVendedorPcDescInicial',fld:'vCOMISSAOVENDEDORPCDESCINICIAL'},{av:'AV28ComissaoVendedorPcDescFinal',fld:'vCOMISSAOVENDEDORPCDESCFINAL'},{av:'AV20ComissaoVendedorPercentual',fld:'vCOMISSAOVENDEDORPERCENTUAL'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV55VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV56VendedorId',fld:'vVENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'}],[{av:'AV19ComissaoVendedorTpCobrDescricao',fld:'vCOMISSAOVENDEDORTPCOBRDESCRICAO'},{av:'AV44ComissaoVendedorTpCobrDescricao2',fld:'vCOMISSAOVENDEDORTPCOBRDESCRICAO2'},{av:'AV13ComissaoVendedorVendEmpId',fld:'vCOMISSAOVENDEDORVENDEMPID'},{av:'AV14ComissaoVendedorVendId',fld:'vCOMISSAOVENDEDORVENDID'},{av:'AV55VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV56VendedorId',fld:'vVENDEDORID'},{av:'AV15ComissaoVendedorVendNome',fld:'vCOMISSAOVENDEDORVENDNOME'},{av:'AV16ComissaoVendedorTpCobrEmpresaId',fld:'vCOMISSAOVENDEDORTPCOBREMPRESAID'},{av:'AV17ComissaoVendedorTpCobrFormaId',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID'},{av:'AV18ComissaoVendedorTpCobrId',fld:'vCOMISSAOVENDEDORTPCOBRID'},{av:'AV57FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'},{av:'AV58FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV59TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV42ComissaoVendedorTpCobrFormaId2',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID2'},{av:'AV43ComissaoVendedorTpCobrId2',fld:'vCOMISSAOVENDEDORTPCOBRID2'},{av:'AV20ComissaoVendedorPercentual',fld:'vCOMISSAOVENDEDORPERCENTUAL'},{av:'AV35ComissaoVendedorPercentual1',fld:'vCOMISSAOVENDEDORPERCENTUAL1'},{av:'AV41ComissaoVendedorPercentual2',fld:'vCOMISSAOVENDEDORPERCENTUAL2'},{av:'AV47ComissaoVendedorPercentual3',fld:'vCOMISSAOVENDEDORPERCENTUAL3'},{av:'AV31ComissaoVendedorValorInicial',fld:'vCOMISSAOVENDEDORVALORINICIAL'},{av:'AV30ComissaoVendedorValorFinal',fld:'vCOMISSAOVENDEDORVALORFINAL'},{av:'AV39ComissaoVendedorValorInicial2',fld:'vCOMISSAOVENDEDORVALORINICIAL2'},{av:'AV40ComissaoVendedorValorFinal2',fld:'vCOMISSAOVENDEDORVALORFINAL2'},{av:'AV29ComissaoVendedorPcDescInicial',fld:'vCOMISSAOVENDEDORPCDESCINICIAL'},{av:'AV28ComissaoVendedorPcDescFinal',fld:'vCOMISSAOVENDEDORPCDESCFINAL'},{ctrl:'INSERIR',prop:'Visible'},{ctrl:'CONFIRMAR',prop:'Visible'},{ctrl:'CANCELAR',prop:'Visible'},{ctrl:'INSERIR1',prop:'Visible'},{ctrl:'CONFIRMAR1',prop:'Visible'},{ctrl:'CANCELAR1',prop:'Visible'},{ctrl:'INSERIR2',prop:'Visible'},{ctrl:'CONFIRMAR2',prop:'Visible'},{ctrl:'CANCELAR2',prop:'Visible'},{ctrl:'INSERIR3',prop:'Visible'},{ctrl:'CONFIRMAR3',prop:'Visible'},{ctrl:'CANCELAR3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORVENDID","Enabled")',ctrl:'vCOMISSAOVENDEDORVENDID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORTPCOBRFORMAID","Enabled")',ctrl:'vCOMISSAOVENDEDORTPCOBRFORMAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORTPCOBRID","Enabled")',ctrl:'vCOMISSAOVENDEDORTPCOBRID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORVALORINICIAL","Enabled")',ctrl:'vCOMISSAOVENDEDORVALORINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORVALORFINAL","Enabled")',ctrl:'vCOMISSAOVENDEDORVALORFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORTPCOBRFORMAID2","Enabled")',ctrl:'vCOMISSAOVENDEDORTPCOBRFORMAID2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORTPCOBRID2","Enabled")',ctrl:'vCOMISSAOVENDEDORTPCOBRID2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORVALORINICIAL2","Enabled")',ctrl:'vCOMISSAOVENDEDORVALORINICIAL2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORVALORFINAL2","Enabled")',ctrl:'vCOMISSAOVENDEDORVALORFINAL2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORPCDESCINICIAL","Enabled")',ctrl:'vCOMISSAOVENDEDORPCDESCINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORPCDESCFINAL","Enabled")',ctrl:'vCOMISSAOVENDEDORPCDESCFINAL',prop:'Enabled'},{av:'AV27SnExcluir',fld:'vSNEXCLUIR'},{av:'AV53ComissaoVendedorVendNomeGrid',fld:'vCOMISSAOVENDEDORVENDNOMEGRID'},{av:'AV54ComissaoVendedorTpCobrDescricaoGrid',fld:'vCOMISSAOVENDEDORTPCOBRDESCRICAOGRID'},{av:'AV24ComissaoVendedorSeq',fld:'vCOMISSAOVENDEDORSEQ'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A9295ComissaoVendedorVendEmpId',fld:'COMISSAOVENDEDORVENDEMPID'},{av:'A9296ComissaoVendedorVendId',fld:'COMISSAOVENDEDORVENDID'},{av:'A9298ComissaoVendedorTpCobrEmpresaI',fld:'COMISSAOVENDEDORTPCOBREMPRESAI'},{av:'A9299ComissaoVendedorTpCobrFormaId',fld:'COMISSAOVENDEDORTPCOBRFORMAID'},{av:'A9300ComissaoVendedorTpCobrId',fld:'COMISSAOVENDEDORTPCOBRID'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV55VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV56VendedorId',fld:'vVENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'},{av:'A3375FormaPgtoEmpresaId',fld:'FORMAPGTOEMPRESAID'},{av:'AV57FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV58FormaPgtoId',fld:'vFORMAPGTOID'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'AV59TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'A3797TpCobrFormaPgtoDescricao',fld:'TPCOBRFORMAPGTODESCRICAO'}],[{av:'AV55VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'AV56VendedorId',fld:'vVENDEDORID'},{av:'AV53ComissaoVendedorVendNomeGrid',fld:'vCOMISSAOVENDEDORVENDNOMEGRID'},{av:'AV57FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'},{av:'AV58FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV59TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV54ComissaoVendedorTpCobrDescricaoGrid',fld:'vCOMISSAOVENDEDORTPCOBRDESCRICAOGRID'},{av:'AV15ComissaoVendedorVendNome',fld:'vCOMISSAOVENDEDORVENDNOME'}]];
   this.EvtParms["ENTER"] = [[{av:'AV23PercentualVendedor',fld:'vPERCENTUALVENDEDOR',hsh:true},{av:'AV35ComissaoVendedorPercentual1',fld:'vCOMISSAOVENDEDORPERCENTUAL1'},{av:'AV41ComissaoVendedorPercentual2',fld:'vCOMISSAOVENDEDORPERCENTUAL2'},{av:'AV39ComissaoVendedorValorInicial2',fld:'vCOMISSAOVENDEDORVALORINICIAL2'},{av:'AV40ComissaoVendedorValorFinal2',fld:'vCOMISSAOVENDEDORVALORFINAL2'},{av:'AV42ComissaoVendedorTpCobrFormaId2',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID2'},{av:'AV43ComissaoVendedorTpCobrId2',fld:'vCOMISSAOVENDEDORTPCOBRID2'},{av:'AV47ComissaoVendedorPercentual3',fld:'vCOMISSAOVENDEDORPERCENTUAL3'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24ComissaoVendedorSeq',fld:'vCOMISSAOVENDEDORSEQ'},{av:'AV13ComissaoVendedorVendEmpId',fld:'vCOMISSAOVENDEDORVENDEMPID'},{av:'AV14ComissaoVendedorVendId',fld:'vCOMISSAOVENDEDORVENDID'},{av:'AV16ComissaoVendedorTpCobrEmpresaId',fld:'vCOMISSAOVENDEDORTPCOBREMPRESAID'},{av:'AV17ComissaoVendedorTpCobrFormaId',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID'},{av:'AV18ComissaoVendedorTpCobrId',fld:'vCOMISSAOVENDEDORTPCOBRID'},{av:'AV31ComissaoVendedorValorInicial',fld:'vCOMISSAOVENDEDORVALORINICIAL'},{av:'AV30ComissaoVendedorValorFinal',fld:'vCOMISSAOVENDEDORVALORFINAL'},{av:'AV29ComissaoVendedorPcDescInicial',fld:'vCOMISSAOVENDEDORPCDESCINICIAL'},{av:'AV28ComissaoVendedorPcDescFinal',fld:'vCOMISSAOVENDEDORPCDESCFINAL'},{av:'AV20ComissaoVendedorPercentual',fld:'vCOMISSAOVENDEDORPERCENTUAL'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'AV34SnErro',fld:'vSNERRO'},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'A3375FormaPgtoEmpresaId',fld:'FORMAPGTOEMPRESAID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'}],[{av:'AV20ComissaoVendedorPercentual',fld:'vCOMISSAOVENDEDORPERCENTUAL'},{av:'AV31ComissaoVendedorValorInicial',fld:'vCOMISSAOVENDEDORVALORINICIAL'},{av:'AV30ComissaoVendedorValorFinal',fld:'vCOMISSAOVENDEDORVALORFINAL'},{av:'AV17ComissaoVendedorTpCobrFormaId',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID'},{av:'AV18ComissaoVendedorTpCobrId',fld:'vCOMISSAOVENDEDORTPCOBRID'},{av:'AV36SnExiste',fld:'vSNEXISTE'},{av:'AV24ComissaoVendedorSeq',fld:'vCOMISSAOVENDEDORSEQ'},{av:'AV34SnErro',fld:'vSNERRO'},{av:'AV70GXLvl443',fld:'vGXLVL443'},{av:'AV71GXLvl468',fld:'vGXLVL468'},{av:'AV72GXLvl512',fld:'vGXLVL512'},{av:'AV14ComissaoVendedorVendId',fld:'vCOMISSAOVENDEDORVENDID'},{av:'AV15ComissaoVendedorVendNome',fld:'vCOMISSAOVENDEDORVENDNOME'},{av:'AV19ComissaoVendedorTpCobrDescricao',fld:'vCOMISSAOVENDEDORTPCOBRDESCRICAO'},{av:'AV35ComissaoVendedorPercentual1',fld:'vCOMISSAOVENDEDORPERCENTUAL1'},{av:'AV41ComissaoVendedorPercentual2',fld:'vCOMISSAOVENDEDORPERCENTUAL2'},{av:'AV39ComissaoVendedorValorInicial2',fld:'vCOMISSAOVENDEDORVALORINICIAL2'},{av:'AV40ComissaoVendedorValorFinal2',fld:'vCOMISSAOVENDEDORVALORFINAL2'},{av:'AV42ComissaoVendedorTpCobrFormaId2',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID2'},{av:'AV43ComissaoVendedorTpCobrId2',fld:'vCOMISSAOVENDEDORTPCOBRID2'},{av:'AV44ComissaoVendedorTpCobrDescricao2',fld:'vCOMISSAOVENDEDORTPCOBRDESCRICAO2'},{av:'AV29ComissaoVendedorPcDescInicial',fld:'vCOMISSAOVENDEDORPCDESCINICIAL'},{av:'AV28ComissaoVendedorPcDescFinal',fld:'vCOMISSAOVENDEDORPCDESCFINAL'},{av:'AV47ComissaoVendedorPercentual3',fld:'vCOMISSAOVENDEDORPERCENTUAL3'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A1220ComissaoVendedorEmpresaId',fld:'COMISSAOVENDEDOREMPRESAID'},{av:'A9306ComissaoVendedorSeq',fld:'COMISSAOVENDEDORSEQ'}],[{av:'AV26SnAlterar',fld:'vSNALTERAR'},{av:'AV25ComissaoVendedorEmpresaId',fld:'vCOMISSAOVENDEDOREMPRESAID'},{av:'AV24ComissaoVendedorSeq',fld:'vCOMISSAOVENDEDORSEQ'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23PercentualVendedor',fld:'vPERCENTUALVENDEDOR',hsh:true},{av:'AV21bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV22bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDOREMPRESAID","Visible")',ctrl:'COMISSAOVENDEDOREMPRESAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORSEQ","Visible")',ctrl:'COMISSAOVENDEDORSEQ',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORVENDEMPID","Visible")',ctrl:'COMISSAOVENDEDORVENDEMPID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORVENDID","Visible")',ctrl:'COMISSAOVENDEDORVENDID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORVENDNOMEGRID","Visible")',ctrl:'vCOMISSAOVENDEDORVENDNOMEGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORTPCOBREMPRESAI","Visible")',ctrl:'COMISSAOVENDEDORTPCOBREMPRESAI',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORTPCOBRFORMAID","Visible")',ctrl:'COMISSAOVENDEDORTPCOBRFORMAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORTPCOBRID","Visible")',ctrl:'COMISSAOVENDEDORTPCOBRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORTPCOBRDESCRICAOGRID","Visible")',ctrl:'vCOMISSAOVENDEDORTPCOBRDESCRICAOGRID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORVALORINICIAL","Visible")',ctrl:'COMISSAOVENDEDORVALORINICIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORVALORFINAL","Visible")',ctrl:'COMISSAOVENDEDORVALORFINAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORPCDESCINICIAL","Visible")',ctrl:'COMISSAOVENDEDORPCDESCINICIAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORPCDESCFINAL","Visible")',ctrl:'COMISSAOVENDEDORPCDESCFINAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("COMISSAOVENDEDORPERCENTUAL","Visible")',ctrl:'COMISSAOVENDEDORPERCENTUAL',prop:'Visible'},{av:'AV18ComissaoVendedorTpCobrId',fld:'vCOMISSAOVENDEDORTPCOBRID'},{av:'AV17ComissaoVendedorTpCobrFormaId',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID'},{av:'A3375FormaPgtoEmpresaId',fld:'FORMAPGTOEMPRESAID'},{av:'AV57FormaPgtoEmpresaId',fld:'vFORMAPGTOEMPRESAID'},{av:'A3376FormaPgtoId',fld:'FORMAPGTOID'},{av:'AV58FormaPgtoId',fld:'vFORMAPGTOID'},{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'},{av:'AV59TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'A3797TpCobrFormaPgtoDescricao',fld:'TPCOBRFORMAPGTODESCRICAO'},{av:'AV43ComissaoVendedorTpCobrId2',fld:'vCOMISSAOVENDEDORTPCOBRID2'},{av:'AV42ComissaoVendedorTpCobrFormaId2',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID2'},{av:'AV26SnAlterar',fld:'vSNALTERAR'},{av:'A1220ComissaoVendedorEmpresaId',fld:'COMISSAOVENDEDOREMPRESAID'},{av:'AV25ComissaoVendedorEmpresaId',fld:'vCOMISSAOVENDEDOREMPRESAID'},{av:'A9306ComissaoVendedorSeq',fld:'COMISSAOVENDEDORSEQ'},{av:'AV24ComissaoVendedorSeq',fld:'vCOMISSAOVENDEDORSEQ'},{av:'A9295ComissaoVendedorVendEmpId',fld:'COMISSAOVENDEDORVENDEMPID'},{av:'A9296ComissaoVendedorVendId',fld:'COMISSAOVENDEDORVENDID'},{av:'A9298ComissaoVendedorTpCobrEmpresaI',fld:'COMISSAOVENDEDORTPCOBREMPRESAI'},{av:'A9299ComissaoVendedorTpCobrFormaId',fld:'COMISSAOVENDEDORTPCOBRFORMAID'},{av:'A9300ComissaoVendedorTpCobrId',fld:'COMISSAOVENDEDORTPCOBRID'},{av:'A1219ComissaoVendedorPercentual',fld:'COMISSAOVENDEDORPERCENTUAL'},{av:'A9302ComissaoVendedorValorInicial',fld:'COMISSAOVENDEDORVALORINICIAL'},{av:'A9303ComissaoVendedorValorFinal',fld:'COMISSAOVENDEDORVALORFINAL'},{av:'A9304ComissaoVendedorPcDescInicial',fld:'COMISSAOVENDEDORPCDESCINICIAL'},{av:'A9305ComissaoVendedorPcDescFinal',fld:'COMISSAOVENDEDORPCDESCFINAL'},{av:'AV52ComissaoVendedorSeqExc',fld:'vCOMISSAOVENDEDORSEQEXC'},{av:'AV13ComissaoVendedorVendEmpId',fld:'vCOMISSAOVENDEDORVENDEMPID'},{av:'AV14ComissaoVendedorVendId',fld:'vCOMISSAOVENDEDORVENDID'},{av:'AV16ComissaoVendedorTpCobrEmpresaId',fld:'vCOMISSAOVENDEDORTPCOBREMPRESAID'},{av:'AV31ComissaoVendedorValorInicial',fld:'vCOMISSAOVENDEDORVALORINICIAL'},{av:'AV30ComissaoVendedorValorFinal',fld:'vCOMISSAOVENDEDORVALORFINAL'},{av:'AV29ComissaoVendedorPcDescInicial',fld:'vCOMISSAOVENDEDORPCDESCINICIAL'},{av:'AV28ComissaoVendedorPcDescFinal',fld:'vCOMISSAOVENDEDORPCDESCFINAL'},{av:'AV20ComissaoVendedorPercentual',fld:'vCOMISSAOVENDEDORPERCENTUAL'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true},{av:'A1229VendedorEmpresaId',fld:'VENDEDOREMPRESAID'},{av:'AV55VendedorEmpresaId',fld:'vVENDEDOREMPRESAID'},{av:'A1237VendedorId',fld:'VENDEDORID'},{av:'AV56VendedorId',fld:'vVENDEDORID'},{av:'A1148VendedorNome',fld:'VENDEDORNOME'}],[{av:'AV52ComissaoVendedorSeqExc',fld:'vCOMISSAOVENDEDORSEQEXC'},{av:'AV50Msgm',fld:'vMSGM'}]];
   this.EvtParms["'CONFIRMAR'"] = [[{av:'AV26SnAlterar',fld:'vSNALTERAR'},{av:'AV23PercentualVendedor',fld:'vPERCENTUALVENDEDOR',hsh:true},{av:'AV35ComissaoVendedorPercentual1',fld:'vCOMISSAOVENDEDORPERCENTUAL1'},{av:'AV41ComissaoVendedorPercentual2',fld:'vCOMISSAOVENDEDORPERCENTUAL2'},{av:'AV39ComissaoVendedorValorInicial2',fld:'vCOMISSAOVENDEDORVALORINICIAL2'},{av:'AV40ComissaoVendedorValorFinal2',fld:'vCOMISSAOVENDEDORVALORFINAL2'},{av:'AV47ComissaoVendedorPercentual3',fld:'vCOMISSAOVENDEDORPERCENTUAL3'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24ComissaoVendedorSeq',fld:'vCOMISSAOVENDEDORSEQ'},{av:'AV13ComissaoVendedorVendEmpId',fld:'vCOMISSAOVENDEDORVENDEMPID'},{av:'AV14ComissaoVendedorVendId',fld:'vCOMISSAOVENDEDORVENDID'},{av:'AV16ComissaoVendedorTpCobrEmpresaId',fld:'vCOMISSAOVENDEDORTPCOBREMPRESAID'},{av:'AV17ComissaoVendedorTpCobrFormaId',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID'},{av:'AV18ComissaoVendedorTpCobrId',fld:'vCOMISSAOVENDEDORTPCOBRID'},{av:'AV31ComissaoVendedorValorInicial',fld:'vCOMISSAOVENDEDORVALORINICIAL'},{av:'AV30ComissaoVendedorValorFinal',fld:'vCOMISSAOVENDEDORVALORFINAL'},{av:'AV29ComissaoVendedorPcDescInicial',fld:'vCOMISSAOVENDEDORPCDESCINICIAL'},{av:'AV28ComissaoVendedorPcDescFinal',fld:'vCOMISSAOVENDEDORPCDESCFINAL'},{av:'AV20ComissaoVendedorPercentual',fld:'vCOMISSAOVENDEDORPERCENTUAL'},{av:'AV5UsrCod',fld:'vUSRCOD',hsh:true}],[{av:'AV20ComissaoVendedorPercentual',fld:'vCOMISSAOVENDEDORPERCENTUAL'},{av:'AV31ComissaoVendedorValorInicial',fld:'vCOMISSAOVENDEDORVALORINICIAL'},{av:'AV30ComissaoVendedorValorFinal',fld:'vCOMISSAOVENDEDORVALORFINAL'},{av:'AV26SnAlterar',fld:'vSNALTERAR'},{av:'AV14ComissaoVendedorVendId',fld:'vCOMISSAOVENDEDORVENDID'},{av:'AV17ComissaoVendedorTpCobrFormaId',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID'},{av:'AV18ComissaoVendedorTpCobrId',fld:'vCOMISSAOVENDEDORTPCOBRID'},{av:'AV24ComissaoVendedorSeq',fld:'vCOMISSAOVENDEDORSEQ'},{av:'AV15ComissaoVendedorVendNome',fld:'vCOMISSAOVENDEDORVENDNOME'},{av:'AV19ComissaoVendedorTpCobrDescricao',fld:'vCOMISSAOVENDEDORTPCOBRDESCRICAO'},{av:'AV35ComissaoVendedorPercentual1',fld:'vCOMISSAOVENDEDORPERCENTUAL1'},{av:'AV41ComissaoVendedorPercentual2',fld:'vCOMISSAOVENDEDORPERCENTUAL2'},{av:'AV39ComissaoVendedorValorInicial2',fld:'vCOMISSAOVENDEDORVALORINICIAL2'},{av:'AV40ComissaoVendedorValorFinal2',fld:'vCOMISSAOVENDEDORVALORFINAL2'},{av:'AV42ComissaoVendedorTpCobrFormaId2',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID2'},{av:'AV43ComissaoVendedorTpCobrId2',fld:'vCOMISSAOVENDEDORTPCOBRID2'},{av:'AV44ComissaoVendedorTpCobrDescricao2',fld:'vCOMISSAOVENDEDORTPCOBRDESCRICAO2'},{av:'AV29ComissaoVendedorPcDescInicial',fld:'vCOMISSAOVENDEDORPCDESCINICIAL'},{av:'AV28ComissaoVendedorPcDescFinal',fld:'vCOMISSAOVENDEDORPCDESCFINAL'},{av:'AV47ComissaoVendedorPercentual3',fld:'vCOMISSAOVENDEDORPERCENTUAL3'}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV23PercentualVendedor',fld:'vPERCENTUALVENDEDOR',hsh:true}],[{av:'AV26SnAlterar',fld:'vSNALTERAR'},{av:'AV14ComissaoVendedorVendId',fld:'vCOMISSAOVENDEDORVENDID'},{av:'AV17ComissaoVendedorTpCobrFormaId',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID'},{av:'AV18ComissaoVendedorTpCobrId',fld:'vCOMISSAOVENDEDORTPCOBRID'},{av:'AV20ComissaoVendedorPercentual',fld:'vCOMISSAOVENDEDORPERCENTUAL'},{av:'AV24ComissaoVendedorSeq',fld:'vCOMISSAOVENDEDORSEQ'},{av:'AV15ComissaoVendedorVendNome',fld:'vCOMISSAOVENDEDORVENDNOME'},{av:'AV19ComissaoVendedorTpCobrDescricao',fld:'vCOMISSAOVENDEDORTPCOBRDESCRICAO'},{av:'AV30ComissaoVendedorValorFinal',fld:'vCOMISSAOVENDEDORVALORFINAL'},{av:'AV31ComissaoVendedorValorInicial',fld:'vCOMISSAOVENDEDORVALORINICIAL'},{av:'AV35ComissaoVendedorPercentual1',fld:'vCOMISSAOVENDEDORPERCENTUAL1'},{av:'AV41ComissaoVendedorPercentual2',fld:'vCOMISSAOVENDEDORPERCENTUAL2'},{av:'AV39ComissaoVendedorValorInicial2',fld:'vCOMISSAOVENDEDORVALORINICIAL2'},{av:'AV40ComissaoVendedorValorFinal2',fld:'vCOMISSAOVENDEDORVALORFINAL2'},{av:'AV42ComissaoVendedorTpCobrFormaId2',fld:'vCOMISSAOVENDEDORTPCOBRFORMAID2'},{av:'AV43ComissaoVendedorTpCobrId2',fld:'vCOMISSAOVENDEDORTPCOBRID2'},{av:'AV44ComissaoVendedorTpCobrDescricao2',fld:'vCOMISSAOVENDEDORTPCOBRDESCRICAO2'},{av:'AV29ComissaoVendedorPcDescInicial',fld:'vCOMISSAOVENDEDORPCDESCINICIAL'},{av:'AV28ComissaoVendedorPcDescFinal',fld:'vCOMISSAOVENDEDORPCDESCFINAL'},{av:'AV47ComissaoVendedorPercentual3',fld:'vCOMISSAOVENDEDORPERCENTUAL3'},{ctrl:'INSERIR',prop:'Visible'},{ctrl:'CONFIRMAR',prop:'Visible'},{ctrl:'CANCELAR',prop:'Visible'},{ctrl:'INSERIR1',prop:'Visible'},{ctrl:'CONFIRMAR1',prop:'Visible'},{ctrl:'CANCELAR1',prop:'Visible'},{ctrl:'INSERIR2',prop:'Visible'},{ctrl:'CONFIRMAR2',prop:'Visible'},{ctrl:'CANCELAR2',prop:'Visible'},{ctrl:'INSERIR3',prop:'Visible'},{ctrl:'CONFIRMAR3',prop:'Visible'},{ctrl:'CANCELAR3',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORVENDID","Enabled")',ctrl:'vCOMISSAOVENDEDORVENDID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORTPCOBRFORMAID","Enabled")',ctrl:'vCOMISSAOVENDEDORTPCOBRFORMAID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORTPCOBRID","Enabled")',ctrl:'vCOMISSAOVENDEDORTPCOBRID',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORTPCOBRFORMAID2","Enabled")',ctrl:'vCOMISSAOVENDEDORTPCOBRFORMAID2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORTPCOBRID2","Enabled")',ctrl:'vCOMISSAOVENDEDORTPCOBRID2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORVALORINICIAL","Enabled")',ctrl:'vCOMISSAOVENDEDORVALORINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORVALORFINAL","Enabled")',ctrl:'vCOMISSAOVENDEDORVALORFINAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORVALORINICIAL2","Enabled")',ctrl:'vCOMISSAOVENDEDORVALORINICIAL2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORVALORFINAL2","Enabled")',ctrl:'vCOMISSAOVENDEDORVALORFINAL2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORPCDESCINICIAL","Enabled")',ctrl:'vCOMISSAOVENDEDORPCDESCINICIAL',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCOMISSAOVENDEDORPCDESCFINAL","Enabled")',ctrl:'vCOMISSAOVENDEDORPCDESCFINAL',prop:'Enabled'}]];
   this.setPrompt("PROMPT_COMISSAOVENDEDORVENDID", [17]);
   this.setPrompt("PROMPT_COMISSAOVENDEDORTPCOBRFORMAID", [26]);
   this.setPrompt("PROMPT_COMISSAOVENDEDORTPCOBRID", [30]);
   this.setPrompt("PROMPT_COMISSAOVENDEDORTPCOBRFORMAID2", [74]);
   this.setPrompt("PROMPT_COMISSAOVENDEDORTPCOBRID2", [78]);
   this.EnterCtrl = ["INSERIR" ,"INSERIR1" ,"INSERIR2" ,"INSERIR3"];
   this.setVCMap("AV23PercentualVendedor", "vPERCENTUALVENDEDOR", 0, "int");
   this.setVCMap("A3375FormaPgtoEmpresaId", "FORMAPGTOEMPRESAID", 0, "char");
   this.setVCMap("AV57FormaPgtoEmpresaId", "vFORMAPGTOEMPRESAID", 0, "char");
   this.setVCMap("A3376FormaPgtoId", "FORMAPGTOID", 0, "int");
   this.setVCMap("AV58FormaPgtoId", "vFORMAPGTOID", 0, "int");
   this.setVCMap("A3377TpCobrFormaPgtoId", "TPCOBRFORMAPGTOID", 0, "int");
   this.setVCMap("AV59TpCobrFormaPgtoId", "vTPCOBRFORMAPGTOID", 0, "int");
   this.setVCMap("A3797TpCobrFormaPgtoDescricao", "TPCOBRFORMAPGTODESCRICAO", 0, "svchar");
   this.setVCMap("AV25ComissaoVendedorEmpresaId", "vCOMISSAOVENDEDOREMPRESAID", 0, "char");
   this.setVCMap("AV5UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A1229VendedorEmpresaId", "VENDEDOREMPRESAID", 0, "char");
   this.setVCMap("AV55VendedorEmpresaId", "vVENDEDOREMPRESAID", 0, "char");
   this.setVCMap("A1237VendedorId", "VENDEDORID", 0, "int");
   this.setVCMap("AV56VendedorId", "vVENDEDORID", 0, "int");
   this.setVCMap("A1148VendedorNome", "VENDEDORNOME", 0, "svchar");
   this.setVCMap("AV23PercentualVendedor", "vPERCENTUALVENDEDOR", 0, "int");
   this.setVCMap("A3375FormaPgtoEmpresaId", "FORMAPGTOEMPRESAID", 0, "char");
   this.setVCMap("AV57FormaPgtoEmpresaId", "vFORMAPGTOEMPRESAID", 0, "char");
   this.setVCMap("A3376FormaPgtoId", "FORMAPGTOID", 0, "int");
   this.setVCMap("AV58FormaPgtoId", "vFORMAPGTOID", 0, "int");
   this.setVCMap("A3377TpCobrFormaPgtoId", "TPCOBRFORMAPGTOID", 0, "int");
   this.setVCMap("AV59TpCobrFormaPgtoId", "vTPCOBRFORMAPGTOID", 0, "int");
   this.setVCMap("A3797TpCobrFormaPgtoDescricao", "TPCOBRFORMAPGTODESCRICAO", 0, "svchar");
   this.setVCMap("AV25ComissaoVendedorEmpresaId", "vCOMISSAOVENDEDOREMPRESAID", 0, "char");
   this.setVCMap("AV5UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A1229VendedorEmpresaId", "VENDEDOREMPRESAID", 0, "char");
   this.setVCMap("AV55VendedorEmpresaId", "vVENDEDOREMPRESAID", 0, "char");
   this.setVCMap("A1237VendedorId", "VENDEDORID", 0, "int");
   this.setVCMap("AV56VendedorId", "vVENDEDORID", 0, "int");
   this.setVCMap("A1148VendedorNome", "VENDEDORNOME", 0, "svchar");
   GridContainer.addRefreshingVar(this.GXValidFnc[150]);
   GridContainer.addRefreshingVar({rfrVar:"AV23PercentualVendedor"});
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV21bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV22bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV22bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"A1220ComissaoVendedorEmpresaId", rfrProp:"Visible", gxAttId:"1220"});
   GridContainer.addRefreshingVar({rfrVar:"A9306ComissaoVendedorSeq", rfrProp:"Visible", gxAttId:"9306"});
   GridContainer.addRefreshingVar({rfrVar:"A9295ComissaoVendedorVendEmpId", rfrProp:"Visible", gxAttId:"9295"});
   GridContainer.addRefreshingVar({rfrVar:"A9296ComissaoVendedorVendId", rfrProp:"Visible", gxAttId:"9296"});
   GridContainer.addRefreshingVar({rfrVar:"AV53ComissaoVendedorVendNomeGrid", rfrProp:"Visible", gxAttId:"Comissaovendedorvendnomegrid"});
   GridContainer.addRefreshingVar({rfrVar:"A9298ComissaoVendedorTpCobrEmpresaI", rfrProp:"Visible", gxAttId:"9298"});
   GridContainer.addRefreshingVar({rfrVar:"A9299ComissaoVendedorTpCobrFormaId", rfrProp:"Visible", gxAttId:"9299"});
   GridContainer.addRefreshingVar({rfrVar:"A9300ComissaoVendedorTpCobrId", rfrProp:"Visible", gxAttId:"9300"});
   GridContainer.addRefreshingVar({rfrVar:"AV54ComissaoVendedorTpCobrDescricaoGrid", rfrProp:"Visible", gxAttId:"Comissaovendedortpcobrdescricaogrid"});
   GridContainer.addRefreshingVar({rfrVar:"A9302ComissaoVendedorValorInicial", rfrProp:"Visible", gxAttId:"9302"});
   GridContainer.addRefreshingVar({rfrVar:"A9303ComissaoVendedorValorFinal", rfrProp:"Visible", gxAttId:"9303"});
   GridContainer.addRefreshingVar({rfrVar:"A9304ComissaoVendedorPcDescInicial", rfrProp:"Visible", gxAttId:"9304"});
   GridContainer.addRefreshingVar({rfrVar:"A9305ComissaoVendedorPcDescFinal", rfrProp:"Visible", gxAttId:"9305"});
   GridContainer.addRefreshingVar({rfrVar:"A1219ComissaoVendedorPercentual", rfrProp:"Visible", gxAttId:"1219"});
   GridContainer.addRefreshingVar(this.GXValidFnc[30]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar({rfrVar:"A3375FormaPgtoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV57FormaPgtoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A3376FormaPgtoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV58FormaPgtoId"});
   GridContainer.addRefreshingVar({rfrVar:"A3377TpCobrFormaPgtoId"});
   GridContainer.addRefreshingVar({rfrVar:"AV59TpCobrFormaPgtoId"});
   GridContainer.addRefreshingVar({rfrVar:"A3797TpCobrFormaPgtoDescricao"});
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar(this.GXValidFnc[156]);
   GridContainer.addRefreshingVar({rfrVar:"A1220ComissaoVendedorEmpresaId", rfrProp:"Value", gxAttId:"1220"});
   GridContainer.addRefreshingVar({rfrVar:"AV25ComissaoVendedorEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A9306ComissaoVendedorSeq", rfrProp:"Value", gxAttId:"9306"});
   GridContainer.addRefreshingVar(this.GXValidFnc[151]);
   GridContainer.addRefreshingVar({rfrVar:"A9295ComissaoVendedorVendEmpId", rfrProp:"Value", gxAttId:"9295"});
   GridContainer.addRefreshingVar({rfrVar:"A9296ComissaoVendedorVendId", rfrProp:"Value", gxAttId:"9296"});
   GridContainer.addRefreshingVar({rfrVar:"A9298ComissaoVendedorTpCobrEmpresaI", rfrProp:"Value", gxAttId:"9298"});
   GridContainer.addRefreshingVar({rfrVar:"A9299ComissaoVendedorTpCobrFormaId", rfrProp:"Value", gxAttId:"9299"});
   GridContainer.addRefreshingVar({rfrVar:"A9300ComissaoVendedorTpCobrId", rfrProp:"Value", gxAttId:"9300"});
   GridContainer.addRefreshingVar({rfrVar:"A1219ComissaoVendedorPercentual", rfrProp:"Value", gxAttId:"1219"});
   GridContainer.addRefreshingVar({rfrVar:"A9302ComissaoVendedorValorInicial", rfrProp:"Value", gxAttId:"9302"});
   GridContainer.addRefreshingVar({rfrVar:"A9303ComissaoVendedorValorFinal", rfrProp:"Value", gxAttId:"9303"});
   GridContainer.addRefreshingVar({rfrVar:"A9304ComissaoVendedorPcDescInicial", rfrProp:"Value", gxAttId:"9304"});
   GridContainer.addRefreshingVar({rfrVar:"A9305ComissaoVendedorPcDescFinal", rfrProp:"Value", gxAttId:"9305"});
   GridContainer.addRefreshingVar(this.GXValidFnc[157]);
   GridContainer.addRefreshingVar(this.GXValidFnc[153]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[152]);
   GridContainer.addRefreshingVar(this.GXValidFnc[49]);
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   GridContainer.addRefreshingVar(this.GXValidFnc[107]);
   GridContainer.addRefreshingVar(this.GXValidFnc[112]);
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar({rfrVar:"AV5UsrCod"});
   GridContainer.addRefreshingVar({rfrVar:"A1229VendedorEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV55VendedorEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A1237VendedorId"});
   GridContainer.addRefreshingVar({rfrVar:"AV56VendedorId"});
   GridContainer.addRefreshingVar({rfrVar:"A1148VendedorNome"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarcomissaovendedor());

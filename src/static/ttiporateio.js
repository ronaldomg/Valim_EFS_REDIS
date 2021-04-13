/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:56:20.93
*/
gx.evt.autoSkip = false;
gx.define('ttiporateio', false, function () {
   this.ServerClass =  "ttiporateio" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV18TipoRateioId=gx.fn.getIntegerValue("vTIPORATEIOID",'.') ;
      this.A977TipoRateioEmpresaId=gx.fn.getControlValue("TIPORATEIOEMPRESAID") ;
      this.AV22snExisteFator=gx.fn.getControlValue("vSNEXISTEFATOR") ;
      this.AV10ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A981TipoRateioUltimoItem=gx.fn.getIntegerValue("TIPORATEIOULTIMOITEM",'.') ;
      this.AV41Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV40Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV19EmpresaCentroCustoEmpresaId=gx.fn.getControlValue("vEMPRESACENTROCUSTOEMPRESAID") ;
      this.AV20EmpresaNaturezaEmpresaId=gx.fn.getControlValue("vEMPRESANATUREZAEMPRESAID") ;
      this.AV28snCentroCustoSint=gx.fn.getControlValue("vSNCENTROCUSTOSINT") ;
      this.AV27snNaturezaSint=gx.fn.getControlValue("vSNNATUREZASINT") ;
   };
   this.Valid_Tiporateioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPORATEIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tiporateiodescricao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tiporateiodescricao",["gx.O.O980TipoRateioDescricao", "gx.O.A980TipoRateioDescricao", "gx.O.AV22snExisteFator", "gx.O.AV7UsrCod", "gx.O.AV10ret", "gx.O.A982TipoRateioUsuarioAlt", 'gx.date.urlDateTime(gx.O.A983TipoRateioDataHoraAlt,"DMY4")'],["AV10ret", "A982TipoRateioUsuarioAlt", "A983TipoRateioDataHoraAlt"]);
      return true;
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
   this.Valid_Tiporateioitemseq=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(26) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("TIPORATEIOITEMSEQ", gx.fn.currentGridRowImpl(26));
         this.AnyError  = 0;
         this.sMode133 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(133,26)  ;
         this.standaloneModal2D133( );
         this.standaloneNotModal2D133( );
         if ( gx.fn.gridDuplicateKey(28) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Item", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode133  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Centrocustoid=function()
   {
      this.sMode133 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(133,26)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Centrocustoid",["gx.O.A51CentroCustoId", "gx.O.AV28snCentroCustoSint"],["AV28snCentroCustoSint"]);
      this.Gx_mode =  this.sMode133  ;
      return true;
   }
   this.Valid_Naturezaid=function()
   {
      this.sMode133 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(133,26)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Naturezaid",["gx.O.A172NaturezaId", "gx.O.AV27snNaturezaSint"],["AV27snNaturezaSint"]);
      this.Gx_mode =  this.sMode133  ;
      return true;
   }
   this.Valid_Tiporateioitemfator=function()
   {
      this.sMode133 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(133,26)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Tiporateioitemfator",["gx.num.urlDecimal(gx.O.O985TipoRateioItemFator,\'.\',\',\')", "gx.O.O172NaturezaId", "gx.O.O51CentroCustoId", "gx.O.AV7UsrCod", "gx.O.A51CentroCustoId", "gx.O.A172NaturezaId", "gx.num.urlDecimal(gx.O.A985TipoRateioItemFator,\'.\',\',\')", "gx.O.A986TipoRateioItemUsuarioAlt", 'gx.date.urlDateTime(gx.O.A987TipoRateioItemDataHoraAlt,"DMY4")'],["A986TipoRateioItemUsuarioAlt", "A987TipoRateioItemDataHoraAlt"]);
      this.Gx_mode =  this.sMode133  ;
      return true;
   }
   this.Valid_Empresacentrocustoempresaid=function()
   {
      this.sMode133 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(133,26)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Empresacentrocustoempresaid",["gx.O.A153EmpresaCentroCustoEmpresaId", "gx.O.A51CentroCustoId", "gx.O.A52CentroCustoDescricao"],["A52CentroCustoDescricao"]);
      this.Gx_mode =  this.sMode133  ;
      return true;
   }
   this.Valid_Empresanaturezaempresaid=function()
   {
      this.sMode133 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(133,26)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Empresanaturezaempresaid",["gx.O.AV27snNaturezaSint", "gx.O.AV28snCentroCustoSint", "gx.O.AV10ret", "gx.O.AV22snExisteFator", "gx.O.A51CentroCustoId", "gx.num.urlDecimal(gx.O.A985TipoRateioItemFator,\'.\',\',\')", "gx.O.A981TipoRateioUltimoItem", "gx.O.A171EmpresaNaturezaEmpresaId", "gx.O.A172NaturezaId", "gx.O.A154NaturezaDescricao"],["A154NaturezaDescricao"]);
      this.Gx_mode =  this.sMode133  ;
      return true;
   }
   this.standaloneModal2D133=function()
   {
      this.A981TipoRateioUltimoItem = gx.num.trunc( gx.fn.serialRule( "A981TipoRateioUltimoItem" , "A984TipoRateioItemSeq" , 26 , 1 , this ) ,0) ;
      try {
         this.A171EmpresaNaturezaEmpresaId =  this.AV20EmpresaNaturezaEmpresaId  ;
      }
      catch(e){}
      try {
         this.A153EmpresaCentroCustoEmpresaId =  this.AV19EmpresaCentroCustoEmpresaId  ;
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal2D133=function()
   {
      try {
         gx.fn.setCtrlProperty("TIPORATEIOITEMSEQ","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("TIPORATEIOITEMUSUARIOALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("TIPORATEIOITEMDATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("EMPRESACENTROCUSTOEMPRESAID","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("EMPRESANATUREZAEMPRESAID","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.e122d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132d2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142d132_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152d132_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,19,21,22,25,27,28,29,30,31,32,33,34,35,36,37,38,41,44,46,48,57,61,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 133,"Item",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"ttiporateio",[984],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit("nRcdDeleted_133",27,"vNRCDDELETED_133","","","nRcdDeleted_133","int",0,"px",4,1,"right",null,[],"nRcdDeleted_133","nRcdDeleted_133",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(984,28,"TIPORATEIOITEMSEQ","Seq","","TipoRateioItemSeq","int",0,"px",2,2,"right",null,[],984,"TipoRateioItemSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(51,29,"CENTROCUSTOID","Centro de Custo","","CentroCustoId","svchar",0,"px",30,30,"left",null,[],51,"CentroCustoId",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("prompt_51","PROMPT_51",66,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(52,30,"CENTROCUSTODESCRICAO","Descrição","","CentroCustoDescricao","svchar",0,"px",35,35,"left",null,[],52,"CentroCustoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(172,31,"NATUREZAID","Natureza","","NaturezaId","svchar",0,"px",30,30,"left",null,[],172,"NaturezaId",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("prompt_172","PROMPT_172",67,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(154,32,"NATUREZADESCRICAO","Descrição","","NaturezaDescricao","svchar",0,"px",35,35,"left",null,[],154,"NaturezaDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(985,33,"TIPORATEIOITEMFATOR","Fator","","TipoRateioItemFator","decimal",0,"px",6,6,"right",null,[],985,"TipoRateioItemFator",true,2,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(986,34,"TIPORATEIOITEMUSUARIOALT","Usuário","","TipoRateioItemUsuarioAlt","char",0,"px",12,12,"left",null,[],986,"TipoRateioItemUsuarioAlt",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(987,35,"TIPORATEIOITEMDATAHORAALT","Última Alteração","","TipoRateioItemDataHoraAlt","dtime",0,"px",16,16,"right",null,[],987,"TipoRateioItemDataHoraAlt",true,5,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(153,36,"EMPRESACENTROCUSTOEMPRESAID","Código Empresa Centro Custo","","EmpresaCentroCustoEmpresaId","char",0,"px",10,10,"left",null,[],153,"EmpresaCentroCustoEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(171,37,"EMPRESANATUREZAEMPRESAID","Empresa Natureza Empresa Id","","EmpresaNaturezaEmpresaId","char",0,"px",10,10,"left",null,[],171,"EmpresaNaturezaEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV35Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV35Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV35Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "ttiporateio_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   this.HDMASKCENTROCUSTOContainer = gx.uc.getNew(this, 58, 15, "HDMask", "HDMASKCENTROCUSTOContainer", "Hdmaskcentrocusto");
   var HDMASKCENTROCUSTOContainer = this.HDMASKCENTROCUSTOContainer;
   HDMASKCENTROCUSTOContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKCENTROCUSTOContainer.setDynProp("Picture", "Picture", "", "str");
   HDMASKCENTROCUSTOContainer.setProp("Default", "Default", "", "str");
   HDMASKCENTROCUSTOContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKCENTROCUSTOContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKCENTROCUSTOContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKCENTROCUSTOContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKCENTROCUSTOContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKCENTROCUSTOContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKCENTROCUSTOContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKCENTROCUSTOContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKCENTROCUSTOContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKCENTROCUSTOContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKCENTROCUSTOContainer.setProp("Class", "Class", "", "char");
   HDMASKCENTROCUSTOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKCENTROCUSTOContainer);
   this.HDMASKNATUREZAContainer = gx.uc.getNew(this, 59, 15, "HDMask", "HDMASKNATUREZAContainer", "Hdmasknatureza");
   var HDMASKNATUREZAContainer = this.HDMASKNATUREZAContainer;
   HDMASKNATUREZAContainer.setDynProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKNATUREZAContainer.setDynProp("Picture", "Picture", "", "str");
   HDMASKNATUREZAContainer.setProp("Default", "Default", "", "str");
   HDMASKNATUREZAContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKNATUREZAContainer.setProp("Reverse", "Reverse", false, "bool");
   HDMASKNATUREZAContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKNATUREZAContainer.setProp("UnmaskedChars", "Unmaskedchars", "[(),.:/ -]", "str");
   HDMASKNATUREZAContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKNATUREZAContainer.setProp("FixedChars", "Fixedchars", "[(),.:/ -]", "str");
   HDMASKNATUREZAContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKNATUREZAContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKNATUREZAContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKNATUREZAContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKNATUREZAContainer.setProp("Class", "Class", "", "char");
   HDMASKNATUREZAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKNATUREZAContainer);
   this.HDMASKVALORContainer = gx.uc.getNew(this, 60, 15, "HDMask", "HDMASKVALORContainer", "Hdmaskvalor");
   var HDMASKVALORContainer = this.HDMASKVALORContainer;
   HDMASKVALORContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVALORContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVALORContainer.setProp("Default", "Default", "", "str");
   HDMASKVALORContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVALORContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVALORContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVALORContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVALORContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVALORContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVALORContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVALORContainer.setProp("ControlType", "Controltype", "TransactionGrid", "str");
   HDMASKVALORContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVALORContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVALORContainer.setProp("Class", "Class", "", "char");
   HDMASKVALORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVALORContainer);
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[7]={fld:"TAB1",grid:0};
   GXValidFnc[10]={fld:"TABLE2",grid:0};
   GXValidFnc[13]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tiporateioid,isvalid:null,rgrid:[this.Grid1Container],fld:"TIPORATEIOID",gxz:"Z978TipoRateioId",gxold:"O978TipoRateioId",gxvar:"A978TipoRateioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A978TipoRateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z978TipoRateioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPORATEIOID",gx.O.A978TipoRateioId,0)},c2v:function(){gx.O.A978TipoRateioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPORATEIOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tiporateiodescricao,isvalid:null,rgrid:[],fld:"TIPORATEIODESCRICAO",gxz:"Z980TipoRateioDescricao",gxold:"O980TipoRateioDescricao",gxvar:"A980TipoRateioDescricao",ucs:[],op:[48,46],ip:[48,46,21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A980TipoRateioDescricao=Value},v2z:function(Value){gx.O.Z980TipoRateioDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPORATEIODESCRICAO",gx.O.A980TipoRateioDescricao,0)},c2v:function(){gx.O.A980TipoRateioDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPORATEIODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TAB2",grid:0};
   GXValidFnc[25]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[27]={lvl:133,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_133",gxz:"ZnRcdDeleted_133",gxold:"OnRcdDeleted_133",gxvar:"nRcdDeleted_133",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_133=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_133=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_133",row || gx.fn.currentGridRowImpl(26),gx.O.nRcdDeleted_133,0)},c2v:function(){gx.O.nRcdDeleted_133=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_133",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:133,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Tiporateioitemseq,isvalid:null,rgrid:[],fld:"TIPORATEIOITEMSEQ",gxz:"Z984TipoRateioItemSeq",gxold:"O984TipoRateioItemSeq",gxvar:"A984TipoRateioItemSeq",ucs:[],op:[36,37,28],ip:[36,37,28],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A984TipoRateioItemSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z984TipoRateioItemSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIOITEMSEQ",row || gx.fn.currentGridRowImpl(26),gx.O.A984TipoRateioItemSeq,0)},c2v:function(){gx.O.A984TipoRateioItemSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPORATEIOITEMSEQ",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:133,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Centrocustoid,isvalid:null,rgrid:[],fld:"CENTROCUSTOID",gxz:"Z51CentroCustoId",gxold:"O51CentroCustoId",gxvar:"A51CentroCustoId",ucs:[],op:[],ip:[29],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A51CentroCustoId=Value},v2z:function(Value){gx.O.Z51CentroCustoId=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOID",row || gx.fn.currentGridRowImpl(26),gx.O.A51CentroCustoId,0)},c2v:function(){gx.O.A51CentroCustoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOID",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:133,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CENTROCUSTODESCRICAO",gxz:"Z52CentroCustoDescricao",gxold:"O52CentroCustoDescricao",gxvar:"A52CentroCustoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A52CentroCustoDescricao=Value},v2z:function(Value){gx.O.Z52CentroCustoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(26),gx.O.A52CentroCustoDescricao,0)},c2v:function(){gx.O.A52CentroCustoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTODESCRICAO",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:133,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Naturezaid,isvalid:null,rgrid:[],fld:"NATUREZAID",gxz:"Z172NaturezaId",gxold:"O172NaturezaId",gxvar:"A172NaturezaId",ucs:[],op:[],ip:[31],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A172NaturezaId=Value},v2z:function(Value){gx.O.Z172NaturezaId=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZAID",row || gx.fn.currentGridRowImpl(26),gx.O.A172NaturezaId,0)},c2v:function(){gx.O.A172NaturezaId=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZAID",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:133,type:"svchar",len:35,dec:0,sign:false,ro:1,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESCRICAO",gxz:"Z154NaturezaDescricao",gxold:"O154NaturezaDescricao",gxvar:"A154NaturezaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A154NaturezaDescricao=Value},v2z:function(Value){gx.O.Z154NaturezaDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("NATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(26),gx.O.A154NaturezaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A154NaturezaDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("NATUREZADESCRICAO",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:133,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Tiporateioitemfator,isvalid:null,rgrid:[],fld:"TIPORATEIOITEMFATOR",gxz:"Z985TipoRateioItemFator",gxold:"O985TipoRateioItemFator",gxvar:"A985TipoRateioItemFator",ucs:[],op:[35,34],ip:[35,34,33,31,29],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A985TipoRateioItemFator=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z985TipoRateioItemFator=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("TIPORATEIOITEMFATOR",row || gx.fn.currentGridRowImpl(26),gx.O.A985TipoRateioItemFator,2,',')},c2v:function(){gx.O.A985TipoRateioItemFator=this.val()},val:function(row){return gx.fn.getGridDecimalValue("TIPORATEIOITEMFATOR",row || gx.fn.currentGridRowImpl(26),'.',',')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:133,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIOITEMUSUARIOALT",gxz:"Z986TipoRateioItemUsuarioAlt",gxold:"O986TipoRateioItemUsuarioAlt",gxvar:"A986TipoRateioItemUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A986TipoRateioItemUsuarioAlt=Value},v2z:function(Value){gx.O.Z986TipoRateioItemUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIOITEMUSUARIOALT",row || gx.fn.currentGridRowImpl(26),gx.O.A986TipoRateioItemUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A986TipoRateioItemUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPORATEIOITEMUSUARIOALT",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:133,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIOITEMDATAHORAALT",gxz:"Z987TipoRateioItemDataHoraAlt",gxold:"O987TipoRateioItemDataHoraAlt",gxvar:"A987TipoRateioItemDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A987TipoRateioItemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z987TipoRateioItemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPORATEIOITEMDATAHORAALT",row || gx.fn.currentGridRowImpl(26),gx.O.A987TipoRateioItemDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A987TipoRateioItemDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("TIPORATEIOITEMDATAHORAALT",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:133,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Empresacentrocustoempresaid,isvalid:null,rgrid:[],fld:"EMPRESACENTROCUSTOEMPRESAID",gxz:"Z153EmpresaCentroCustoEmpresaId",gxold:"O153EmpresaCentroCustoEmpresaId",gxvar:"A153EmpresaCentroCustoEmpresaId",ucs:[],op:[30],ip:[30,29,36],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A153EmpresaCentroCustoEmpresaId=Value},v2z:function(Value){gx.O.Z153EmpresaCentroCustoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESACENTROCUSTOEMPRESAID",row || gx.fn.currentGridRowImpl(26),gx.O.A153EmpresaCentroCustoEmpresaId,0)},c2v:function(){gx.O.A153EmpresaCentroCustoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESACENTROCUSTOEMPRESAID",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[37]={lvl:133,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Empresanaturezaempresaid,isvalid:null,rgrid:[],fld:"EMPRESANATUREZAEMPRESAID",gxz:"Z171EmpresaNaturezaEmpresaId",gxold:"O171EmpresaNaturezaEmpresaId",gxvar:"A171EmpresaNaturezaEmpresaId",ucs:[],op:[32],ip:[32,31,37],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A171EmpresaNaturezaEmpresaId=Value},v2z:function(Value){gx.O.Z171EmpresaNaturezaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESANATUREZAEMPRESAID",row || gx.fn.currentGridRowImpl(26),gx.O.A171EmpresaNaturezaEmpresaId,0)},c2v:function(){gx.O.A171EmpresaNaturezaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESANATUREZAEMPRESAID",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[38]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[41]={fld:"TABLE3",grid:0};
   GXValidFnc[44]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIOUSUARIOALT",gxz:"Z982TipoRateioUsuarioAlt",gxold:"O982TipoRateioUsuarioAlt",gxvar:"A982TipoRateioUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A982TipoRateioUsuarioAlt=Value},v2z:function(Value){gx.O.Z982TipoRateioUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TIPORATEIOUSUARIOALT",gx.O.A982TipoRateioUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A982TipoRateioUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TIPORATEIOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[48]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPORATEIODATAHORAALT",gxz:"Z983TipoRateioDataHoraAlt",gxold:"O983TipoRateioDataHoraAlt",gxvar:"A983TipoRateioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A983TipoRateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z983TipoRateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPORATEIODATAHORAALT",gx.O.A983TipoRateioDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A983TipoRateioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPORATEIODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[57]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV30AcessoSistemaSequencia",gxold:"OV30AcessoSistemaSequencia",gxvar:"AV30AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV30AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV30AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV14EmpresaPadrao",gxold:"OV14EmpresaPadrao",gxvar:"AV14EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV14EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV14EmpresaPadrao,0)},c2v:function(){gx.O.AV14EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"BTNHELP",grid:0};
   this.A978TipoRateioId = 0 ;
   this.Z978TipoRateioId = 0 ;
   this.O978TipoRateioId = 0 ;
   this.A980TipoRateioDescricao = "" ;
   this.Z980TipoRateioDescricao = "" ;
   this.O980TipoRateioDescricao = "" ;
   this.ZnRcdDeleted_133 = 0 ;
   this.OnRcdDeleted_133 = 0 ;
   this.Z984TipoRateioItemSeq = 0 ;
   this.O984TipoRateioItemSeq = 0 ;
   this.Z51CentroCustoId = "" ;
   this.O51CentroCustoId = "" ;
   this.Z52CentroCustoDescricao = "" ;
   this.O52CentroCustoDescricao = "" ;
   this.Z172NaturezaId = "" ;
   this.O172NaturezaId = "" ;
   this.Z154NaturezaDescricao = "" ;
   this.O154NaturezaDescricao = "" ;
   this.Z985TipoRateioItemFator = 0 ;
   this.O985TipoRateioItemFator = 0 ;
   this.Z986TipoRateioItemUsuarioAlt = "" ;
   this.O986TipoRateioItemUsuarioAlt = "" ;
   this.Z987TipoRateioItemDataHoraAlt = gx.date.nullDate() ;
   this.O987TipoRateioItemDataHoraAlt = gx.date.nullDate() ;
   this.Z153EmpresaCentroCustoEmpresaId = "" ;
   this.O153EmpresaCentroCustoEmpresaId = "" ;
   this.Z171EmpresaNaturezaEmpresaId = "" ;
   this.O171EmpresaNaturezaEmpresaId = "" ;
   this.A982TipoRateioUsuarioAlt = "" ;
   this.Z982TipoRateioUsuarioAlt = "" ;
   this.O982TipoRateioUsuarioAlt = "" ;
   this.A983TipoRateioDataHoraAlt = gx.date.nullDate() ;
   this.Z983TipoRateioDataHoraAlt = gx.date.nullDate() ;
   this.O983TipoRateioDataHoraAlt = gx.date.nullDate() ;
   this.AV30AcessoSistemaSequencia = 0 ;
   this.ZV30AcessoSistemaSequencia = 0 ;
   this.OV30AcessoSistemaSequencia = 0 ;
   this.AV14EmpresaPadrao = "" ;
   this.ZV14EmpresaPadrao = "" ;
   this.OV14EmpresaPadrao = "" ;
   this.A984TipoRateioItemSeq = 0 ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A171EmpresaNaturezaEmpresaId = "" ;
   this.A986TipoRateioItemUsuarioAlt = "" ;
   this.A987TipoRateioItemDataHoraAlt = gx.date.nullDate() ;
   this.A51CentroCustoId = "" ;
   this.A52CentroCustoDescricao = "" ;
   this.A172NaturezaId = "" ;
   this.A154NaturezaDescricao = "" ;
   this.A985TipoRateioItemFator = 0 ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV16Sistema = "" ;
   this.AV40Pgmname = "" ;
   this.AV41Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV30AcessoSistemaSequencia = 0 ;
   this.AV21Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV19EmpresaCentroCustoEmpresaId = "" ;
   this.AV20EmpresaNaturezaEmpresaId = "" ;
   this.AV23TemMascara = "" ;
   this.AV38MascaraValores = {} ;
   this.AV24TemMascara2 = "" ;
   this.AV22snExisteFator = "" ;
   this.AV28snCentroCustoSint = "" ;
   this.AV27snNaturezaSint = "" ;
   this.AV10ret = 0 ;
   this.AV18TipoRateioId = 0 ;
   this.A977TipoRateioEmpresaId = "" ;
   this.A978TipoRateioId = 0 ;
   this.A982TipoRateioUsuarioAlt = "" ;
   this.A983TipoRateioDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A980TipoRateioDescricao = "" ;
   this.A981TipoRateioUltimoItem = 0 ;
   this.AV35Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e122d2_client": ["'FECHAR'", true] ,"e132d2_client": ["AFTER TRN", true] ,"e142d132_client": ["ENTER", true] ,"e152d132_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18TipoRateioId',fld:'vTIPORATEIOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV30AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV30AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_51", [29]);
   this.setPrompt("PROMPT_172", [31]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18TipoRateioId", "vTIPORATEIOID", 0, "int");
   this.setVCMap("A977TipoRateioEmpresaId", "TIPORATEIOEMPRESAID", 0, "char");
   this.setVCMap("AV22snExisteFator", "vSNEXISTEFATOR", 0, "char");
   this.setVCMap("AV10ret", "vRET", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A981TipoRateioUltimoItem", "TIPORATEIOULTIMOITEM", 0, "int");
   this.setVCMap("AV41Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV40Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV19EmpresaCentroCustoEmpresaId", "vEMPRESACENTROCUSTOEMPRESAID", 0, "char");
   this.setVCMap("AV20EmpresaNaturezaEmpresaId", "vEMPRESANATUREZAEMPRESAID", 0, "char");
   this.setVCMap("AV28snCentroCustoSint", "vSNCENTROCUSTOSINT", 0, "char");
   this.setVCMap("AV27snNaturezaSint", "vSNNATUREZASINT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 132 ]= ["O981TipoRateioUltimoItem","O980TipoRateioDescricao"] ;
   this.LvlOlds[ 133 ]= ["O985TipoRateioItemFator","O172NaturezaId","O51CentroCustoId"] ;
});
gx.setParentObj(new ttiporateio());

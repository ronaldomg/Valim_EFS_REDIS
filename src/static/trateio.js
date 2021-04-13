/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:53:15.52
*/
gx.evt.autoSkip = false;
gx.define('trateio', false, function () {
   this.ServerClass =  "trateio" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A169EmpresaRateioEmpresaId=gx.fn.getControlValue("EMPRESARATEIOEMPRESAID") ;
      this.AV14RateioId=gx.fn.getIntegerValue("vRATEIOID",'.') ;
      this.AV16ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV31AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A511RateioUltimoFator=gx.fn.getIntegerValue("RATEIOULTIMOFATOR",'.') ;
      this.AV45Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV44Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV24EmpresaPadraoCusto=gx.fn.getControlValue("vEMPRESAPADRAOCUSTO") ;
      this.A512FatorRateioSequencia=gx.fn.getIntegerValue("FATORRATEIOSEQUENCIA",'.') ;
      this.AV33snCentroCustoSint=gx.fn.getControlValue("vSNCENTROCUSTOSINT") ;
      this.AV32AlterDados2=gx.fn.getControlValue("vALTERDADOS2") ;
   };
   this.Valid_Rateioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("RATEIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Rateiodescricao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Rateiodescricao",["gx.O.A177RateioDescricao", "gx.O.AV16ret"],["AV16ret"]);
      return true;
   }
   this.Valid_Empresacentrocustoempresaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(26) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("EMPRESACENTROCUSTOEMPRESAID", gx.fn.currentGridRowImpl(26));
         this.AnyError  = 0;
         this.sMode57 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(57,26)  ;
         this.standaloneModal1657( );
         this.standaloneNotModal1657( );

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode57  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Centrocustoid=function()
   {
      this.sMode57 =  this.Gx_mode  ;
      this.Gx_mode =  gx.fn.getGridRowMode(57,26)  ;
      gx.ajax.validSrvEvt("dyncall","valid_Centrocustoid",["gx.O.A153EmpresaCentroCustoEmpresaId", "gx.O.A51CentroCustoId", "gx.O.A177RateioDescricao", "gx.O.AV33snCentroCustoSint", "gx.O.AV16ret"],["AV33snCentroCustoSint", "AV16ret"]);
      this.Gx_mode =  this.sMode57  ;
      return true;
   }
   this.Valid_Fatorrateiovalor=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(26) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("FATORRATEIOVALOR", gx.fn.currentGridRowImpl(26));
         this.AnyError  = 0;
         this.sMode57 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(57,26)  ;

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode57  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal1657=function()
   {
      this.A511RateioUltimoFator = gx.num.trunc( gx.fn.serialRule( "A511RateioUltimoFator" , "A512FatorRateioSequencia" , 26 , 1 , this ) ,0) ;
      try {
         if ( (this.Gx_mode == 'INS') && (""==this.A153EmpresaCentroCustoEmpresaId) && this.Gx_BScreen == 0 )
         {
            this.A153EmpresaCentroCustoEmpresaId =  this.AV24EmpresaPadraoCusto  ;
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal1657=function()
   {
      try {
         gx.fn.setCtrlProperty("EMPRESACENTROCUSTOEMPRESAID","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("FATORRATEIONIVELUSUARIO","Enabled", 0 );
      }
      catch(e){}
      try {
         gx.fn.setCtrlProperty("FATORRATEIONIVELDATAHORAALT","Enabled", 0 );
      }
      catch(e){}
      return true;
   }
   this.e12162_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13162_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e141656_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e151656_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,7,10,13,15,19,21,22,25,27,28,29,30,31,32,33,36,39,41,43,52,56];
   this.GXLastCtrlId =56;
   this.Grid1Container = new gx.grid.grid(this, 57,"FatorRateio",26,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"trateio",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(153,27,"EMPRESACENTROCUSTOEMPRESAID","Código Empresa Centro Custo","","EmpresaCentroCustoEmpresaId","char",0,"px",10,10,"left",null,[],153,"EmpresaCentroCustoEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("nRcdDeleted_57",28,"vNRCDDELETED_57","","","nRcdDeleted_57","int",0,"px",4,1,"right",null,[],"nRcdDeleted_57","nRcdDeleted_57",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(51,29,"CENTROCUSTOID","Código Centro Custo","","CentroCustoId","svchar",0,"px",30,30,"left",null,[],51,"CentroCustoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addBitmap("prompt_51","PROMPT_51",58,0,"",0,"",null,"","","gx-prompt Image","");
   Grid1Container.addSingleLineEdit(510,30,"FATORRATEIOVALOR","Valor do Fator","","FatorRateioValor","decimal",0,"px",9,9,"right",null,[],510,"FatorRateioValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(789,31,"FATORRATEIONIVELUSUARIO","Usuário","","FatorRateioNivelUsuario","char",0,"px",12,12,"left",null,[],789,"FatorRateioNivelUsuario",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(790,32,"FATORRATEIONIVELDATAHORAALT","Última alteração","","FatorRateioNivelDataHoraAlt","dtime",0,"px",16,16,"right",null,[],790,"FatorRateioNivelDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   this.TABCSSContainer = gx.uc.getNew(this, 6, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV39Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV39Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV39Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "trateio_tabcss", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   this.HDMASKCENTROCUSTOContainer = gx.uc.getNew(this, 53, 15, "HDMask", "HDMASKCENTROCUSTOContainer", "Hdmaskcentrocusto");
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
   this.HDMASKVALORContainer = gx.uc.getNew(this, 54, 15, "HDMask", "HDMASKVALORContainer", "Hdmaskvalor");
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
   GXValidFnc[13]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[15]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Rateioid,isvalid:null,rgrid:[this.Grid1Container],fld:"RATEIOID",gxz:"Z170RateioId",gxold:"O170RateioId",gxvar:"A170RateioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A170RateioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z170RateioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("RATEIOID",gx.O.A170RateioId,0)},c2v:function(){gx.O.A170RateioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("RATEIOID",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Rateiodescricao,isvalid:null,rgrid:[],fld:"RATEIODESCRICAO",gxz:"Z177RateioDescricao",gxold:"O177RateioDescricao",gxvar:"A177RateioDescricao",ucs:[],op:[],ip:[21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A177RateioDescricao=Value},v2z:function(Value){gx.O.Z177RateioDescricao=Value},v2c:function(){gx.fn.setControlValue("RATEIODESCRICAO",gx.O.A177RateioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A177RateioDescricao=this.val()},val:function(){return gx.fn.getControlValue("RATEIODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 21 , function() {
   });
   GXValidFnc[22]={fld:"TAB2",grid:0};
   GXValidFnc[25]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[27]={lvl:57,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Empresacentrocustoempresaid,isvalid:null,rgrid:[],fld:"EMPRESACENTROCUSTOEMPRESAID",gxz:"Z153EmpresaCentroCustoEmpresaId",gxold:"O153EmpresaCentroCustoEmpresaId",gxvar:"A153EmpresaCentroCustoEmpresaId",ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A153EmpresaCentroCustoEmpresaId=Value},v2z:function(Value){gx.O.Z153EmpresaCentroCustoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESACENTROCUSTOEMPRESAID",row || gx.fn.currentGridRowImpl(26),gx.O.A153EmpresaCentroCustoEmpresaId,0)},c2v:function(){gx.O.A153EmpresaCentroCustoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESACENTROCUSTOEMPRESAID",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:57,type:"int",len:4,dec:0,sign:false,pic:"9999",ro:0,isacc:0,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_57",gxz:"ZnRcdDeleted_57",gxold:"OnRcdDeleted_57",gxvar:"nRcdDeleted_57",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.nRcdDeleted_57=gx.num.intval(Value)},v2z:function(Value){gx.O.ZnRcdDeleted_57=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNRCDDELETED_57",row || gx.fn.currentGridRowImpl(26),gx.O.nRcdDeleted_57,0)},c2v:function(){gx.O.nRcdDeleted_57=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNRCDDELETED_57",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:57,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Centrocustoid,isvalid:null,rgrid:[],fld:"CENTROCUSTOID",gxz:"Z51CentroCustoId",gxold:"O51CentroCustoId",gxvar:"A51CentroCustoId",ucs:[],op:[],ip:[21,29,27],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A51CentroCustoId=Value},v2z:function(Value){gx.O.Z51CentroCustoId=Value},v2c:function(row){gx.fn.setGridControlValue("CENTROCUSTOID",row || gx.fn.currentGridRowImpl(26),gx.O.A51CentroCustoId,0)},c2v:function(){gx.O.A51CentroCustoId=this.val()},val:function(row){return gx.fn.getGridControlValue("CENTROCUSTOID",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:57,type:"decimal",len:9,dec:2,sign:false,pic:"ZZZZZ9.99",ro:0,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:this.Valid_Fatorrateiovalor,isvalid:null,rgrid:[],fld:"FATORRATEIOVALOR",gxz:"Z510FatorRateioValor",gxold:"O510FatorRateioValor",gxvar:"A510FatorRateioValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A510FatorRateioValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z510FatorRateioValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("FATORRATEIOVALOR",row || gx.fn.currentGridRowImpl(26),gx.O.A510FatorRateioValor,2,',')},c2v:function(){gx.O.A510FatorRateioValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("FATORRATEIOVALOR",row || gx.fn.currentGridRowImpl(26),'.',',')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:57,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATORRATEIONIVELUSUARIO",gxz:"Z789FatorRateioNivelUsuario",gxold:"O789FatorRateioNivelUsuario",gxvar:"A789FatorRateioNivelUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A789FatorRateioNivelUsuario=Value},v2z:function(Value){gx.O.Z789FatorRateioNivelUsuario=Value},v2c:function(row){gx.fn.setGridControlValue("FATORRATEIONIVELUSUARIO",row || gx.fn.currentGridRowImpl(26),gx.O.A789FatorRateioNivelUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A789FatorRateioNivelUsuario=this.val()},val:function(row){return gx.fn.getGridControlValue("FATORRATEIONIVELUSUARIO",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:57,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:1,grid:26,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FATORRATEIONIVELDATAHORAALT",gxz:"Z790FatorRateioNivelDataHoraAlt",gxold:"O790FatorRateioNivelDataHoraAlt",gxvar:"A790FatorRateioNivelDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A790FatorRateioNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z790FatorRateioNivelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("FATORRATEIONIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(26),gx.O.A790FatorRateioNivelDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A790FatorRateioNivelDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("FATORRATEIONIVELDATAHORAALT",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[33]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[36]={fld:"TABLE3",grid:0};
   GXValidFnc[39]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RATEIOUSUARIOID",gxz:"Z787RateioUsuarioId",gxold:"O787RateioUsuarioId",gxvar:"A787RateioUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A787RateioUsuarioId=Value},v2z:function(Value){gx.O.Z787RateioUsuarioId=Value},v2c:function(){gx.fn.setControlValue("RATEIOUSUARIOID",gx.O.A787RateioUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A787RateioUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("RATEIOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[43]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"RATEIODATAHORAALT",gxz:"Z788RateioDataHoraAlt",gxold:"O788RateioDataHoraAlt",gxvar:"A788RateioDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A788RateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z788RateioDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("RATEIODATAHORAALT",gx.O.A788RateioDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A788RateioDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("RATEIODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[52]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV34AcessoSistemaSequencia",gxold:"OV34AcessoSistemaSequencia",gxvar:"AV34AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV34AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV34AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={fld:"BTNHELP",grid:0};
   this.A170RateioId = 0 ;
   this.Z170RateioId = 0 ;
   this.O170RateioId = 0 ;
   this.A177RateioDescricao = "" ;
   this.Z177RateioDescricao = "" ;
   this.O177RateioDescricao = "" ;
   this.Z153EmpresaCentroCustoEmpresaId = "" ;
   this.O153EmpresaCentroCustoEmpresaId = "" ;
   this.ZnRcdDeleted_57 = 0 ;
   this.OnRcdDeleted_57 = 0 ;
   this.Z51CentroCustoId = "" ;
   this.O51CentroCustoId = "" ;
   this.Z510FatorRateioValor = 0 ;
   this.O510FatorRateioValor = 0 ;
   this.Z789FatorRateioNivelUsuario = "" ;
   this.O789FatorRateioNivelUsuario = "" ;
   this.Z790FatorRateioNivelDataHoraAlt = gx.date.nullDate() ;
   this.O790FatorRateioNivelDataHoraAlt = gx.date.nullDate() ;
   this.A787RateioUsuarioId = "" ;
   this.Z787RateioUsuarioId = "" ;
   this.O787RateioUsuarioId = "" ;
   this.A788RateioDataHoraAlt = gx.date.nullDate() ;
   this.Z788RateioDataHoraAlt = gx.date.nullDate() ;
   this.O788RateioDataHoraAlt = gx.date.nullDate() ;
   this.AV34AcessoSistemaSequencia = 0 ;
   this.ZV34AcessoSistemaSequencia = 0 ;
   this.OV34AcessoSistemaSequencia = 0 ;
   this.A512FatorRateioSequencia = 0 ;
   this.A153EmpresaCentroCustoEmpresaId = "" ;
   this.A789FatorRateioNivelUsuario = "" ;
   this.A790FatorRateioNivelDataHoraAlt = gx.date.nullDate() ;
   this.A51CentroCustoId = "" ;
   this.A510FatorRateioValor = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV28Sistema = "" ;
   this.AV44Pgmname = "" ;
   this.AV45Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV34AcessoSistemaSequencia = 0 ;
   this.AV23Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV24EmpresaPadraoCusto = "" ;
   this.AV30TemMascara = "" ;
   this.AV42MascaraValores = {} ;
   this.AV31AlterDados = "" ;
   this.AV32AlterDados2 = "" ;
   this.AV33snCentroCustoSint = "" ;
   this.AV14RateioId = 0 ;
   this.A169EmpresaRateioEmpresaId = "" ;
   this.A170RateioId = 0 ;
   this.AV16ret = 0 ;
   this.A787RateioUsuarioId = "" ;
   this.A788RateioDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A177RateioDescricao = "" ;
   this.A511RateioUltimoFator = 0 ;
   this.AV39Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e12162_client": ["'FECHAR'", true] ,"e13162_client": ["AFTER TRN", true] ,"e141656_client": ["ENTER", true] ,"e151656_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV14RateioId',fld:'vRATEIOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV34AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV34AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_51", [29]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A169EmpresaRateioEmpresaId", "EMPRESARATEIOEMPRESAID", 0, "char");
   this.setVCMap("AV14RateioId", "vRATEIOID", 0, "int");
   this.setVCMap("AV16ret", "vRET", 0, "int");
   this.setVCMap("AV31AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A511RateioUltimoFator", "RATEIOULTIMOFATOR", 0, "int");
   this.setVCMap("AV45Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV44Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV24EmpresaPadraoCusto", "vEMPRESAPADRAOCUSTO", 0, "char");
   this.setVCMap("A512FatorRateioSequencia", "FATORRATEIOSEQUENCIA", 26, "int");
   this.setVCMap("AV33snCentroCustoSint", "vSNCENTROCUSTOSINT", 0, "char");
   this.setVCMap("AV32AlterDados2", "vALTERDADOS2", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 56 ]= ["O511RateioUltimoFator","O177RateioDescricao"] ;
   this.LvlOlds[ 57 ]= ["O510FatorRateioValor","O51CentroCustoId"] ;
});
gx.setParentObj(new trateio());

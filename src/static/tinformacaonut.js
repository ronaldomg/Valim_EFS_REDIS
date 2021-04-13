/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:46:41.34
*/
gx.evt.autoSkip = false;
gx.define('tinformacaonut', false, function () {
   this.ServerClass =  "tinformacaonut" ;
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
      this.AV7InformacaoNutId=gx.fn.getIntegerValue("vINFORMACAONUTID",'.') ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV19ret=gx.fn.getIntegerValue("vRET",'.') ;
      this.AV8SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV10UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV30Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV29Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV22SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Informacaonutid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutdescricao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Informacaonutdescricao",["gx.O.A3593InformacaoNutDescricao", "gx.O.AV19ret"],["AV19ret"]);
      return true;
   }
   this.Valid_Informacaonutdsporcao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTDSPORCAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutunporcao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTUNPORCAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutqtcalorias=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTQTCALORIAS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutvdcalorias=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTVDCALORIAS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutqtcarboidrato=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTQTCARBOIDRATO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutvdcarboidrato=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTVDCARBOIDRATO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutqtproteina=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTQTPROTEINA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutvdproteina=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTVDPROTEINA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutqtgortotal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTQTGORTOTAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutvdgortotal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTVDGORTOTAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutqtgorsaturada=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTQTGORSATURADA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutvdgorsaturada=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTVDGORSATURADA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutqtgortrans=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTQTGORTRANS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutvdgortrans=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTVDGORTRANS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutqtcolesterol=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTQTCOLESTEROL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutvdcolesterol=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTVDCOLESTEROL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutqtfibra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTQTFIBRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutvdfibra=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTVDFIBRA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutqtcalcio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTQTCALCIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutvdcalcio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTVDCALCIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutqtferro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTQTFERRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutvdferro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTVDFERRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutqtsodio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTQTSODIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Informacaonutvdsodio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("INFORMACAONUTVDSODIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e126t2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136t2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146t384_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156t384_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,9,12,14,18,20,23,25,28,30,31,34,38,40,43,45,47,50,52,54,57,59,61,64,66,68,71,73,75,78,80,82,85,87,89,92,94,96,99,101,103,106,108,110,113,115,117,120,123,125,127,133,139,140,141,143];
   this.GXLastCtrlId =143;
   this.TABCSSContainer = gx.uc.getNew(this, 5, 0, "TabCss", "TABCSSContainer", "Tabcss");
   var TABCSSContainer = this.TABCSSContainer;
   TABCSSContainer.setProp("Width", "Width", "100", "str");
   TABCSSContainer.setProp("Height", "Height", "100", "str");
   TABCSSContainer.addV2CFunction('AV26Tab', "vTAB", 'SetData');
   TABCSSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV26Tab=UC.GetData();gx.fn.setControlValue("vTAB",UC.ParentObject.AV26Tab); });
   TABCSSContainer.setProp("Position", "Position", 1, "num");
   TABCSSContainer.setProp("CookieId", "Cookieid", "tinformacaonut", "str");
   TABCSSContainer.setProp("Visible", "Visible", true, "bool");
   TABCSSContainer.setProp("Enabled", "Enabled", true, "boolean");
   TABCSSContainer.setProp("Class", "Class", "", "char");
   TABCSSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(TABCSSContainer);
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutid,isvalid:null,rgrid:[],fld:"INFORMACAONUTID",gxz:"Z3621InformacaoNutId",gxold:"O3621InformacaoNutId",gxvar:"A3621InformacaoNutId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3621InformacaoNutId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3621InformacaoNutId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAONUTID",gx.O.A3621InformacaoNutId,0)},c2v:function(){gx.O.A3621InformacaoNutId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAONUTID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutdescricao,isvalid:null,rgrid:[],fld:"INFORMACAONUTDESCRICAO",gxz:"Z3593InformacaoNutDescricao",gxold:"O3593InformacaoNutDescricao",gxvar:"A3593InformacaoNutDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3593InformacaoNutDescricao=Value},v2z:function(Value){gx.O.Z3593InformacaoNutDescricao=Value},v2c:function(){gx.fn.setControlValue("INFORMACAONUTDESCRICAO",gx.O.A3593InformacaoNutDescricao,0)},c2v:function(){gx.O.A3593InformacaoNutDescricao=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAONUTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutdsporcao,isvalid:null,rgrid:[],fld:"INFORMACAONUTDSPORCAO",gxz:"Z3594InformacaoNutDsPorcao",gxold:"O3594InformacaoNutDsPorcao",gxvar:"A3594InformacaoNutDsPorcao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3594InformacaoNutDsPorcao=Value},v2z:function(Value){gx.O.Z3594InformacaoNutDsPorcao=Value},v2c:function(){gx.fn.setControlValue("INFORMACAONUTDSPORCAO",gx.O.A3594InformacaoNutDsPorcao,0)},c2v:function(){gx.O.A3594InformacaoNutDsPorcao=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAONUTDSPORCAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutunporcao,isvalid:null,rgrid:[],fld:"INFORMACAONUTUNPORCAO",gxz:"Z3595InformacaoNutUNPorcao",gxold:"O3595InformacaoNutUNPorcao",gxvar:"A3595InformacaoNutUNPorcao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3595InformacaoNutUNPorcao=Value},v2z:function(Value){gx.O.Z3595InformacaoNutUNPorcao=Value},v2c:function(){gx.fn.setComboBoxValue("INFORMACAONUTUNPORCAO",gx.O.A3595InformacaoNutUNPorcao)},c2v:function(){gx.O.A3595InformacaoNutUNPorcao=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAONUTUNPORCAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TAB2",grid:0};
   GXValidFnc[34]={fld:"TABLE3",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutqtcalorias,isvalid:null,rgrid:[],fld:"INFORMACAONUTQTCALORIAS",gxz:"Z3596InformacaoNutQtCalorias",gxold:"O3596InformacaoNutQtCalorias",gxvar:"A3596InformacaoNutQtCalorias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3596InformacaoNutQtCalorias=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3596InformacaoNutQtCalorias=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INFORMACAONUTQTCALORIAS",gx.O.A3596InformacaoNutQtCalorias,2,',')},c2v:function(){gx.O.A3596InformacaoNutQtCalorias=this.val()},val:function(){return gx.fn.getDecimalValue("INFORMACAONUTQTCALORIAS",'.',',')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutvdcalorias,isvalid:null,rgrid:[],fld:"INFORMACAONUTVDCALORIAS",gxz:"Z3597InformacaoNutVDCalorias",gxold:"O3597InformacaoNutVDCalorias",gxvar:"A3597InformacaoNutVDCalorias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3597InformacaoNutVDCalorias=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3597InformacaoNutVDCalorias=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAONUTVDCALORIAS",gx.O.A3597InformacaoNutVDCalorias,0)},c2v:function(){gx.O.A3597InformacaoNutVDCalorias=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAONUTVDCALORIAS",'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutqtcarboidrato,isvalid:null,rgrid:[],fld:"INFORMACAONUTQTCARBOIDRATO",gxz:"Z3598InformacaoNutQtCarboidrato",gxold:"O3598InformacaoNutQtCarboidrato",gxvar:"A3598InformacaoNutQtCarboidrato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3598InformacaoNutQtCarboidrato=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3598InformacaoNutQtCarboidrato=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INFORMACAONUTQTCARBOIDRATO",gx.O.A3598InformacaoNutQtCarboidrato,2,',')},c2v:function(){gx.O.A3598InformacaoNutQtCarboidrato=this.val()},val:function(){return gx.fn.getDecimalValue("INFORMACAONUTQTCARBOIDRATO",'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutvdcarboidrato,isvalid:null,rgrid:[],fld:"INFORMACAONUTVDCARBOIDRATO",gxz:"Z3599InformacaoNutVDCarboidrato",gxold:"O3599InformacaoNutVDCarboidrato",gxvar:"A3599InformacaoNutVDCarboidrato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3599InformacaoNutVDCarboidrato=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3599InformacaoNutVDCarboidrato=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAONUTVDCARBOIDRATO",gx.O.A3599InformacaoNutVDCarboidrato,0)},c2v:function(){gx.O.A3599InformacaoNutVDCarboidrato=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAONUTVDCARBOIDRATO",'.')},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutqtproteina,isvalid:null,rgrid:[],fld:"INFORMACAONUTQTPROTEINA",gxz:"Z3600InformacaoNutQtProteina",gxold:"O3600InformacaoNutQtProteina",gxvar:"A3600InformacaoNutQtProteina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3600InformacaoNutQtProteina=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3600InformacaoNutQtProteina=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INFORMACAONUTQTPROTEINA",gx.O.A3600InformacaoNutQtProteina,2,',')},c2v:function(){gx.O.A3600InformacaoNutQtProteina=this.val()},val:function(){return gx.fn.getDecimalValue("INFORMACAONUTQTPROTEINA",'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutvdproteina,isvalid:null,rgrid:[],fld:"INFORMACAONUTVDPROTEINA",gxz:"Z3601InformacaoNutVDProteina",gxold:"O3601InformacaoNutVDProteina",gxvar:"A3601InformacaoNutVDProteina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3601InformacaoNutVDProteina=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3601InformacaoNutVDProteina=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAONUTVDPROTEINA",gx.O.A3601InformacaoNutVDProteina,0)},c2v:function(){gx.O.A3601InformacaoNutVDProteina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAONUTVDPROTEINA",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutqtgortotal,isvalid:null,rgrid:[],fld:"INFORMACAONUTQTGORTOTAL",gxz:"Z3602InformacaoNutQtGorTotal",gxold:"O3602InformacaoNutQtGorTotal",gxvar:"A3602InformacaoNutQtGorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3602InformacaoNutQtGorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3602InformacaoNutQtGorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INFORMACAONUTQTGORTOTAL",gx.O.A3602InformacaoNutQtGorTotal,2,',')},c2v:function(){gx.O.A3602InformacaoNutQtGorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("INFORMACAONUTQTGORTOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutvdgortotal,isvalid:null,rgrid:[],fld:"INFORMACAONUTVDGORTOTAL",gxz:"Z3603InformacaoNutVDGorTotal",gxold:"O3603InformacaoNutVDGorTotal",gxvar:"A3603InformacaoNutVDGorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3603InformacaoNutVDGorTotal=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3603InformacaoNutVDGorTotal=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAONUTVDGORTOTAL",gx.O.A3603InformacaoNutVDGorTotal,0)},c2v:function(){gx.O.A3603InformacaoNutVDGorTotal=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAONUTVDGORTOTAL",'.')},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutqtgorsaturada,isvalid:null,rgrid:[],fld:"INFORMACAONUTQTGORSATURADA",gxz:"Z3604InformacaoNutQtGorSaturada",gxold:"O3604InformacaoNutQtGorSaturada",gxvar:"A3604InformacaoNutQtGorSaturada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3604InformacaoNutQtGorSaturada=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3604InformacaoNutQtGorSaturada=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INFORMACAONUTQTGORSATURADA",gx.O.A3604InformacaoNutQtGorSaturada,2,',')},c2v:function(){gx.O.A3604InformacaoNutQtGorSaturada=this.val()},val:function(){return gx.fn.getDecimalValue("INFORMACAONUTQTGORSATURADA",'.',',')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutvdgorsaturada,isvalid:null,rgrid:[],fld:"INFORMACAONUTVDGORSATURADA",gxz:"Z3605InformacaoNutVDGorSaturada",gxold:"O3605InformacaoNutVDGorSaturada",gxvar:"A3605InformacaoNutVDGorSaturada",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3605InformacaoNutVDGorSaturada=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3605InformacaoNutVDGorSaturada=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAONUTVDGORSATURADA",gx.O.A3605InformacaoNutVDGorSaturada,0)},c2v:function(){gx.O.A3605InformacaoNutVDGorSaturada=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAONUTVDGORSATURADA",'.')},nac:gx.falseFn};
   GXValidFnc[78]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutqtgortrans,isvalid:null,rgrid:[],fld:"INFORMACAONUTQTGORTRANS",gxz:"Z3606InformacaoNutQtGorTrans",gxold:"O3606InformacaoNutQtGorTrans",gxvar:"A3606InformacaoNutQtGorTrans",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3606InformacaoNutQtGorTrans=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3606InformacaoNutQtGorTrans=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INFORMACAONUTQTGORTRANS",gx.O.A3606InformacaoNutQtGorTrans,2,',')},c2v:function(){gx.O.A3606InformacaoNutQtGorTrans=this.val()},val:function(){return gx.fn.getDecimalValue("INFORMACAONUTQTGORTRANS",'.',',')},nac:gx.falseFn};
   GXValidFnc[82]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutvdgortrans,isvalid:null,rgrid:[],fld:"INFORMACAONUTVDGORTRANS",gxz:"Z3607InformacaoNutVDGorTrans",gxold:"O3607InformacaoNutVDGorTrans",gxvar:"A3607InformacaoNutVDGorTrans",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3607InformacaoNutVDGorTrans=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3607InformacaoNutVDGorTrans=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAONUTVDGORTRANS",gx.O.A3607InformacaoNutVDGorTrans,0)},c2v:function(){gx.O.A3607InformacaoNutVDGorTrans=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAONUTVDGORTRANS",'.')},nac:gx.falseFn};
   GXValidFnc[85]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutqtcolesterol,isvalid:null,rgrid:[],fld:"INFORMACAONUTQTCOLESTEROL",gxz:"Z3608InformacaoNutQtColesterol",gxold:"O3608InformacaoNutQtColesterol",gxvar:"A3608InformacaoNutQtColesterol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3608InformacaoNutQtColesterol=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3608InformacaoNutQtColesterol=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INFORMACAONUTQTCOLESTEROL",gx.O.A3608InformacaoNutQtColesterol,2,',')},c2v:function(){gx.O.A3608InformacaoNutQtColesterol=this.val()},val:function(){return gx.fn.getDecimalValue("INFORMACAONUTQTCOLESTEROL",'.',',')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutvdcolesterol,isvalid:null,rgrid:[],fld:"INFORMACAONUTVDCOLESTEROL",gxz:"Z3609InformacaoNutVDColesterol",gxold:"O3609InformacaoNutVDColesterol",gxvar:"A3609InformacaoNutVDColesterol",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3609InformacaoNutVDColesterol=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3609InformacaoNutVDColesterol=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAONUTVDCOLESTEROL",gx.O.A3609InformacaoNutVDColesterol,0)},c2v:function(){gx.O.A3609InformacaoNutVDColesterol=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAONUTVDCOLESTEROL",'.')},nac:gx.falseFn};
   GXValidFnc[92]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[94]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutqtfibra,isvalid:null,rgrid:[],fld:"INFORMACAONUTQTFIBRA",gxz:"Z3610InformacaoNutQtFibra",gxold:"O3610InformacaoNutQtFibra",gxvar:"A3610InformacaoNutQtFibra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3610InformacaoNutQtFibra=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3610InformacaoNutQtFibra=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INFORMACAONUTQTFIBRA",gx.O.A3610InformacaoNutQtFibra,2,',')},c2v:function(){gx.O.A3610InformacaoNutQtFibra=this.val()},val:function(){return gx.fn.getDecimalValue("INFORMACAONUTQTFIBRA",'.',',')},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutvdfibra,isvalid:null,rgrid:[],fld:"INFORMACAONUTVDFIBRA",gxz:"Z3611InformacaoNutVDFibra",gxold:"O3611InformacaoNutVDFibra",gxvar:"A3611InformacaoNutVDFibra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3611InformacaoNutVDFibra=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3611InformacaoNutVDFibra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAONUTVDFIBRA",gx.O.A3611InformacaoNutVDFibra,0)},c2v:function(){gx.O.A3611InformacaoNutVDFibra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAONUTVDFIBRA",'.')},nac:gx.falseFn};
   GXValidFnc[99]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[101]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutqtcalcio,isvalid:null,rgrid:[],fld:"INFORMACAONUTQTCALCIO",gxz:"Z3612InformacaoNutQtCalcio",gxold:"O3612InformacaoNutQtCalcio",gxvar:"A3612InformacaoNutQtCalcio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3612InformacaoNutQtCalcio=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3612InformacaoNutQtCalcio=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INFORMACAONUTQTCALCIO",gx.O.A3612InformacaoNutQtCalcio,2,',')},c2v:function(){gx.O.A3612InformacaoNutQtCalcio=this.val()},val:function(){return gx.fn.getDecimalValue("INFORMACAONUTQTCALCIO",'.',',')},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutvdcalcio,isvalid:null,rgrid:[],fld:"INFORMACAONUTVDCALCIO",gxz:"Z3613InformacaoNutVDCalcio",gxold:"O3613InformacaoNutVDCalcio",gxvar:"A3613InformacaoNutVDCalcio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3613InformacaoNutVDCalcio=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3613InformacaoNutVDCalcio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAONUTVDCALCIO",gx.O.A3613InformacaoNutVDCalcio,0)},c2v:function(){gx.O.A3613InformacaoNutVDCalcio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAONUTVDCALCIO",'.')},nac:gx.falseFn};
   GXValidFnc[106]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[108]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutqtferro,isvalid:null,rgrid:[],fld:"INFORMACAONUTQTFERRO",gxz:"Z3614InformacaoNutQtFerro",gxold:"O3614InformacaoNutQtFerro",gxvar:"A3614InformacaoNutQtFerro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3614InformacaoNutQtFerro=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3614InformacaoNutQtFerro=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INFORMACAONUTQTFERRO",gx.O.A3614InformacaoNutQtFerro,2,',')},c2v:function(){gx.O.A3614InformacaoNutQtFerro=this.val()},val:function(){return gx.fn.getDecimalValue("INFORMACAONUTQTFERRO",'.',',')},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutvdferro,isvalid:null,rgrid:[],fld:"INFORMACAONUTVDFERRO",gxz:"Z3615InformacaoNutVDFerro",gxold:"O3615InformacaoNutVDFerro",gxvar:"A3615InformacaoNutVDFerro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3615InformacaoNutVDFerro=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3615InformacaoNutVDFerro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAONUTVDFERRO",gx.O.A3615InformacaoNutVDFerro,0)},c2v:function(){gx.O.A3615InformacaoNutVDFerro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAONUTVDFERRO",'.')},nac:gx.falseFn};
   GXValidFnc[113]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutqtsodio,isvalid:null,rgrid:[],fld:"INFORMACAONUTQTSODIO",gxz:"Z3616InformacaoNutQtSodio",gxold:"O3616InformacaoNutQtSodio",gxvar:"A3616InformacaoNutQtSodio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3616InformacaoNutQtSodio=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3616InformacaoNutQtSodio=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("INFORMACAONUTQTSODIO",gx.O.A3616InformacaoNutQtSodio,2,',')},c2v:function(){gx.O.A3616InformacaoNutQtSodio=this.val()},val:function(){return gx.fn.getDecimalValue("INFORMACAONUTQTSODIO",'.',',')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutvdsodio,isvalid:null,rgrid:[],fld:"INFORMACAONUTVDSODIO",gxz:"Z3617InformacaoNutVDSodio",gxold:"O3617InformacaoNutVDSodio",gxvar:"A3617InformacaoNutVDSodio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3617InformacaoNutVDSodio=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3617InformacaoNutVDSodio=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAONUTVDSODIO",gx.O.A3617InformacaoNutVDSodio,0)},c2v:function(){gx.O.A3617InformacaoNutVDSodio=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("INFORMACAONUTVDSODIO",'.')},nac:gx.falseFn};
   GXValidFnc[120]={fld:"TABLE21",grid:0};
   GXValidFnc[123]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAONUTUSUARIOALT",gxz:"Z3618InformacaoNutUsuarioAlt",gxold:"O3618InformacaoNutUsuarioAlt",gxvar:"A3618InformacaoNutUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3618InformacaoNutUsuarioAlt=Value},v2z:function(Value){gx.O.Z3618InformacaoNutUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("INFORMACAONUTUSUARIOALT",gx.O.A3618InformacaoNutUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3618InformacaoNutUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAONUTUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 125 , function() {
   });
   GXValidFnc[127]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"INFORMACAONUTDATAHORAALT",gxz:"Z3619InformacaoNutDataHoraAlt",gxold:"O3619InformacaoNutDataHoraAlt",gxvar:"A3619InformacaoNutDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3619InformacaoNutDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3619InformacaoNutDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("INFORMACAONUTDATAHORAALT",gx.O.A3619InformacaoNutDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3619InformacaoNutDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("INFORMACAONUTDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 127 , function() {
   });
   GXValidFnc[133]={fld:"TABLE5",grid:0};
   GXValidFnc[139]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Informacaonutempresaid,isvalid:null,rgrid:[],fld:"INFORMACAONUTEMPRESAID",gxz:"Z3620InformacaoNutEmpresaId",gxold:"O3620InformacaoNutEmpresaId",gxvar:"A3620InformacaoNutEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3620InformacaoNutEmpresaId=Value},v2z:function(Value){gx.O.Z3620InformacaoNutEmpresaId=Value},v2c:function(){gx.fn.setControlValue("INFORMACAONUTEMPRESAID",gx.O.A3620InformacaoNutEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3620InformacaoNutEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("INFORMACAONUTEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 139 , function() {
   });
   GXValidFnc[140]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV11AcessoSistemaSequencia",gxold:"OV11AcessoSistemaSequencia",gxvar:"AV11AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV11AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV11AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[141]={fld:"JS", format:2,grid:0};
   GXValidFnc[143]={fld:"BTNHELP",grid:0};
   this.A3621InformacaoNutId = 0 ;
   this.Z3621InformacaoNutId = 0 ;
   this.O3621InformacaoNutId = 0 ;
   this.A3593InformacaoNutDescricao = "" ;
   this.Z3593InformacaoNutDescricao = "" ;
   this.O3593InformacaoNutDescricao = "" ;
   this.A3594InformacaoNutDsPorcao = "" ;
   this.Z3594InformacaoNutDsPorcao = "" ;
   this.O3594InformacaoNutDsPorcao = "" ;
   this.A3595InformacaoNutUNPorcao = "" ;
   this.Z3595InformacaoNutUNPorcao = "" ;
   this.O3595InformacaoNutUNPorcao = "" ;
   this.A3596InformacaoNutQtCalorias = 0 ;
   this.Z3596InformacaoNutQtCalorias = 0 ;
   this.O3596InformacaoNutQtCalorias = 0 ;
   this.A3597InformacaoNutVDCalorias = 0 ;
   this.Z3597InformacaoNutVDCalorias = 0 ;
   this.O3597InformacaoNutVDCalorias = 0 ;
   this.A3598InformacaoNutQtCarboidrato = 0 ;
   this.Z3598InformacaoNutQtCarboidrato = 0 ;
   this.O3598InformacaoNutQtCarboidrato = 0 ;
   this.A3599InformacaoNutVDCarboidrato = 0 ;
   this.Z3599InformacaoNutVDCarboidrato = 0 ;
   this.O3599InformacaoNutVDCarboidrato = 0 ;
   this.A3600InformacaoNutQtProteina = 0 ;
   this.Z3600InformacaoNutQtProteina = 0 ;
   this.O3600InformacaoNutQtProteina = 0 ;
   this.A3601InformacaoNutVDProteina = 0 ;
   this.Z3601InformacaoNutVDProteina = 0 ;
   this.O3601InformacaoNutVDProteina = 0 ;
   this.A3602InformacaoNutQtGorTotal = 0 ;
   this.Z3602InformacaoNutQtGorTotal = 0 ;
   this.O3602InformacaoNutQtGorTotal = 0 ;
   this.A3603InformacaoNutVDGorTotal = 0 ;
   this.Z3603InformacaoNutVDGorTotal = 0 ;
   this.O3603InformacaoNutVDGorTotal = 0 ;
   this.A3604InformacaoNutQtGorSaturada = 0 ;
   this.Z3604InformacaoNutQtGorSaturada = 0 ;
   this.O3604InformacaoNutQtGorSaturada = 0 ;
   this.A3605InformacaoNutVDGorSaturada = 0 ;
   this.Z3605InformacaoNutVDGorSaturada = 0 ;
   this.O3605InformacaoNutVDGorSaturada = 0 ;
   this.A3606InformacaoNutQtGorTrans = 0 ;
   this.Z3606InformacaoNutQtGorTrans = 0 ;
   this.O3606InformacaoNutQtGorTrans = 0 ;
   this.A3607InformacaoNutVDGorTrans = 0 ;
   this.Z3607InformacaoNutVDGorTrans = 0 ;
   this.O3607InformacaoNutVDGorTrans = 0 ;
   this.A3608InformacaoNutQtColesterol = 0 ;
   this.Z3608InformacaoNutQtColesterol = 0 ;
   this.O3608InformacaoNutQtColesterol = 0 ;
   this.A3609InformacaoNutVDColesterol = 0 ;
   this.Z3609InformacaoNutVDColesterol = 0 ;
   this.O3609InformacaoNutVDColesterol = 0 ;
   this.A3610InformacaoNutQtFibra = 0 ;
   this.Z3610InformacaoNutQtFibra = 0 ;
   this.O3610InformacaoNutQtFibra = 0 ;
   this.A3611InformacaoNutVDFibra = 0 ;
   this.Z3611InformacaoNutVDFibra = 0 ;
   this.O3611InformacaoNutVDFibra = 0 ;
   this.A3612InformacaoNutQtCalcio = 0 ;
   this.Z3612InformacaoNutQtCalcio = 0 ;
   this.O3612InformacaoNutQtCalcio = 0 ;
   this.A3613InformacaoNutVDCalcio = 0 ;
   this.Z3613InformacaoNutVDCalcio = 0 ;
   this.O3613InformacaoNutVDCalcio = 0 ;
   this.A3614InformacaoNutQtFerro = 0 ;
   this.Z3614InformacaoNutQtFerro = 0 ;
   this.O3614InformacaoNutQtFerro = 0 ;
   this.A3615InformacaoNutVDFerro = 0 ;
   this.Z3615InformacaoNutVDFerro = 0 ;
   this.O3615InformacaoNutVDFerro = 0 ;
   this.A3616InformacaoNutQtSodio = 0 ;
   this.Z3616InformacaoNutQtSodio = 0 ;
   this.O3616InformacaoNutQtSodio = 0 ;
   this.A3617InformacaoNutVDSodio = 0 ;
   this.Z3617InformacaoNutVDSodio = 0 ;
   this.O3617InformacaoNutVDSodio = 0 ;
   this.A3618InformacaoNutUsuarioAlt = "" ;
   this.Z3618InformacaoNutUsuarioAlt = "" ;
   this.O3618InformacaoNutUsuarioAlt = "" ;
   this.A3619InformacaoNutDataHoraAlt = gx.date.nullDate() ;
   this.Z3619InformacaoNutDataHoraAlt = gx.date.nullDate() ;
   this.O3619InformacaoNutDataHoraAlt = gx.date.nullDate() ;
   this.A3620InformacaoNutEmpresaId = "" ;
   this.Z3620InformacaoNutEmpresaId = "" ;
   this.O3620InformacaoNutEmpresaId = "" ;
   this.AV11AcessoSistemaSequencia = 0 ;
   this.ZV11AcessoSistemaSequencia = 0 ;
   this.OV11AcessoSistemaSequencia = 0 ;
   this.AV10UsrCod = "" ;
   this.AV15EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV29Pgmname = "" ;
   this.AV30Pgmdesc = "" ;
   this.AV18MsgErro = "" ;
   this.AV11AcessoSistemaSequencia = 0 ;
   this.AV17Modulo = "" ;
   this.AV9Logon = {} ;
   this.AV20Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV8SnAlterou = "" ;
   this.AV19ret = 0 ;
   this.AV28Posicao = 0 ;
   this.AV7InformacaoNutId = 0 ;
   this.AV22SnPrompt = "" ;
   this.A3620InformacaoNutEmpresaId = "" ;
   this.A3621InformacaoNutId = 0 ;
   this.A3618InformacaoNutUsuarioAlt = "" ;
   this.A3619InformacaoNutDataHoraAlt = gx.date.nullDate() ;
   this.A3593InformacaoNutDescricao = "" ;
   this.A3594InformacaoNutDsPorcao = "" ;
   this.A3595InformacaoNutUNPorcao = "" ;
   this.A3596InformacaoNutQtCalorias = 0 ;
   this.A3597InformacaoNutVDCalorias = 0 ;
   this.A3598InformacaoNutQtCarboidrato = 0 ;
   this.A3599InformacaoNutVDCarboidrato = 0 ;
   this.A3600InformacaoNutQtProteina = 0 ;
   this.A3601InformacaoNutVDProteina = 0 ;
   this.A3602InformacaoNutQtGorTotal = 0 ;
   this.A3603InformacaoNutVDGorTotal = 0 ;
   this.A3604InformacaoNutQtGorSaturada = 0 ;
   this.A3605InformacaoNutVDGorSaturada = 0 ;
   this.A3606InformacaoNutQtGorTrans = 0 ;
   this.A3607InformacaoNutVDGorTrans = 0 ;
   this.A3608InformacaoNutQtColesterol = 0 ;
   this.A3609InformacaoNutVDColesterol = 0 ;
   this.A3610InformacaoNutQtFibra = 0 ;
   this.A3611InformacaoNutVDFibra = 0 ;
   this.A3612InformacaoNutQtCalcio = 0 ;
   this.A3613InformacaoNutVDCalcio = 0 ;
   this.A3614InformacaoNutQtFerro = 0 ;
   this.A3615InformacaoNutVDFerro = 0 ;
   this.A3616InformacaoNutQtSodio = 0 ;
   this.A3617InformacaoNutVDSodio = 0 ;
   this.AV26Tab = [ ] ;
   this.Gx_mode = "" ;
   this.Events = {"e126t2_client": ["'FECHAR'", true] ,"e136t2_client": ["AFTER TRN", true] ,"e146t384_client": ["ENTER", true] ,"e156t384_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV7InformacaoNutId',fld:'vINFORMACAONUTID'},{av:'AV22SnPrompt',fld:'vSNPROMPT'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV11AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV22SnPrompt',fld:'vSNPROMPT'},{av:'A3621InformacaoNutId',fld:'INFORMACAONUTID'}],[{av:'A3621InformacaoNutId',fld:'INFORMACAONUTID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV11AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV22SnPrompt',fld:'vSNPROMPT'},{av:'A3621InformacaoNutId',fld:'INFORMACAONUTID'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV7InformacaoNutId", "vINFORMACAONUTID", 0, "int");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV19ret", "vRET", 0, "int");
   this.setVCMap("AV8SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV10UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV30Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV29Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV22SnPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 384 ]= ["O3617InformacaoNutVDSodio","O3616InformacaoNutQtSodio","O3615InformacaoNutVDFerro","O3614InformacaoNutQtFerro","O3613InformacaoNutVDCalcio","O3612InformacaoNutQtCalcio","O3611InformacaoNutVDFibra","O3610InformacaoNutQtFibra","O3609InformacaoNutVDColesterol","O3608InformacaoNutQtColesterol","O3607InformacaoNutVDGorTrans","O3606InformacaoNutQtGorTrans","O3605InformacaoNutVDGorSaturada","O3604InformacaoNutQtGorSaturada","O3603InformacaoNutVDGorTotal","O3602InformacaoNutQtGorTotal","O3601InformacaoNutVDProteina","O3600InformacaoNutQtProteina","O3599InformacaoNutVDCarboidrato","O3598InformacaoNutQtCarboidrato","O3597InformacaoNutVDCalorias","O3596InformacaoNutQtCalorias","O3595InformacaoNutUNPorcao","O3594InformacaoNutDsPorcao","O3593InformacaoNutDescricao","O3621InformacaoNutId"] ;
});
gx.setParentObj(new tinformacaonut());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:47:6.44
*/
gx.evt.autoSkip = false;
gx.define('hrelacaovendaperda', false, function () {
   this.ServerClass =  "hrelacaovendaperda" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Precoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Familiasalgado=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFAMILIASALGADO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Gx_date=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTODAY");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Filialempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFILIALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Precoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPRECOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Familiaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFAMILIAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e151gj1_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("hmodalfiltrosrelvendaperda",[]), []);
      this.refreshOutputs([]);
   };
   this.e131gj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e111gj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e161gj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,9,12,14,17,20,22,25,27,28,31,33,34,37,41,43,44,47,49,52,54,56,59,61,64,66,68,71,73,76,77,79,81,82,85,87,90,92,94,96,99,101,103,105,108,110,116,119,120,123,125,128,131,133,135,137,140,142,144,147,150,152,154,156,159,161,163,166,169,171,173,175,178,180,182,185,188,190,192,194,197,199,201,204,207,209,211,213,216,218,220,226,232,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290];
   this.GXLastCtrlId =290;
   GXValidFnc[2]={fld:"TABLE7",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[9]={fld:"TABLE11",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMODELORELATORIO",gxz:"ZV70ModeloRelatorio",gxold:"OV70ModeloRelatorio",gxvar:"AV70ModeloRelatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV70ModeloRelatorio=Value},v2z:function(Value){gx.O.ZV70ModeloRelatorio=Value},v2c:function(){gx.fn.setComboBoxValue("vMODELORELATORIO",gx.O.AV70ModeloRelatorio)},c2v:function(){gx.O.AV70ModeloRelatorio=this.val()},val:function(){return gx.fn.getControlValue("vMODELORELATORIO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TABLE10",grid:0};
   GXValidFnc[20]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vORDENACAO",gxz:"ZV44Ordenacao",gxold:"OV44Ordenacao",gxvar:"AV44Ordenacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV44Ordenacao=Value},v2z:function(Value){gx.O.ZV44Ordenacao=Value},v2c:function(){gx.fn.setComboBoxValue("vORDENACAO",gx.O.AV44Ordenacao)},c2v:function(){gx.O.AV44Ordenacao=this.val()},val:function(){return gx.fn.getControlValue("vORDENACAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoid,isvalid:null,rgrid:[],fld:"vPRECOID",gxz:"ZV92PrecoId",gxold:"OV92PrecoId",gxvar:"AV92PrecoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV92PrecoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV92PrecoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECOID",gx.O.AV92PrecoId,0)},c2v:function(){gx.O.AV92PrecoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECOID",'.')},nac:gx.falseFn};
   GXValidFnc[28]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECODESCRICAO",gxz:"ZV93PrecoDescricao",gxold:"OV93PrecoDescricao",gxvar:"AV93PrecoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93PrecoDescricao=Value},v2z:function(Value){gx.O.ZV93PrecoDescricao=Value},v2c:function(){gx.fn.setControlValue("vPRECODESCRICAO",gx.O.AV93PrecoDescricao,0)},c2v:function(){gx.O.AV93PrecoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPRECODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiasalgado,isvalid:null,rgrid:[],fld:"vFAMILIASALGADO",gxz:"ZV118FamiliaSalgado",gxold:"OV118FamiliaSalgado",gxvar:"AV118FamiliaSalgado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV118FamiliaSalgado=Value},v2z:function(Value){gx.O.ZV118FamiliaSalgado=Value},v2c:function(){gx.fn.setControlValue("vFAMILIASALGADO",gx.O.AV118FamiliaSalgado,0)},c2v:function(){gx.O.AV118FamiliaSalgado=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIASALGADO")},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIASALGADODESC",gxz:"ZV119FamiliaSalgadoDesc",gxold:"OV119FamiliaSalgadoDesc",gxvar:"AV119FamiliaSalgadoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV119FamiliaSalgadoDesc=Value},v2z:function(Value){gx.O.ZV119FamiliaSalgadoDesc=Value},v2c:function(){gx.fn.setControlValue("vFAMILIASALGADODESC",gx.O.AV119FamiliaSalgadoDesc,0)},c2v:function(){gx.O.AV119FamiliaSalgadoDesc=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIASALGADODESC")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[41]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialid,isvalid:null,rgrid:[],fld:"vFILIALID",gxz:"ZV16FilialId",gxold:"OV16FilialId",gxvar:"AV16FilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16FilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16FilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALID",gx.O.AV16FilialId,0)},c2v:function(){gx.O.AV16FilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALNOME",gxz:"ZV17FilialNome",gxold:"OV17FilialNome",gxvar:"AV17FilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17FilialNome=Value},v2z:function(Value){gx.O.ZV17FilialNome=Value},v2c:function(){gx.fn.setControlValue("vFILIALNOME",gx.O.AV17FilialNome,0)},c2v:function(){gx.O.AV17FilialNome=this.val()},val:function(){return gx.fn.getControlValue("vFILIALNOME")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[49]={fld:"TABLE15",grid:0};
   GXValidFnc[52]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTINICIAL",gxz:"ZV71DtInicial",gxold:"OV71DtInicial",gxvar:"AV71DtInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV71DtInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV71DtInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTINICIAL",gx.O.AV71DtInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV71DtInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTFINAL",gxz:"ZV72DtFinal",gxold:"OV72DtFinal",gxvar:"AV72DtFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV72DtFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV72DtFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTFINAL",gx.O.AV72DtFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV72DtFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 56 , function() {
   });
   GXValidFnc[59]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[61]={fld:"TABLE16",grid:0};
   GXValidFnc[64]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSETORINI",gxz:"ZV73SetorIni",gxold:"OV73SetorIni",gxvar:"AV73SetorIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV73SetorIni=Value},v2z:function(Value){gx.O.ZV73SetorIni=Value},v2c:function(){gx.fn.setControlValue("vSETORINI",gx.O.AV73SetorIni,0)},c2v:function(){gx.O.AV73SetorIni=this.val()},val:function(){return gx.fn.getControlValue("vSETORINI")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSETORFIN",gxz:"ZV74SetorFin",gxold:"OV74SetorFin",gxvar:"AV74SetorFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV74SetorFin=Value},v2z:function(Value){gx.O.ZV74SetorFin=Value},v2c:function(){gx.fn.setControlValue("vSETORFIN",gx.O.AV74SetorFin,0)},c2v:function(){gx.O.AV74SetorFin=this.val()},val:function(){return gx.fn.getControlValue("vSETORFIN")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[73]={fld:"TABLE17",grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOINI",gxz:"ZV75ProdutoIni",gxold:"OV75ProdutoIni",gxvar:"AV75ProdutoIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV75ProdutoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV75ProdutoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOINI",gx.O.AV75ProdutoIni,0)},c2v:function(){gx.O.AV75ProdutoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOINI",'.')},nac:gx.falseFn};
   GXValidFnc[77]={fld:"PROMPTPRODINI",grid:0};
   GXValidFnc[79]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[81]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOFIN",gxz:"ZV76ProdutoFin",gxold:"OV76ProdutoFin",gxvar:"AV76ProdutoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV76ProdutoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV76ProdutoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOFIN",gx.O.AV76ProdutoFin,0)},c2v:function(){gx.O.AV76ProdutoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"PROMPTPRODFIN",grid:0};
   GXValidFnc[85]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[87]={fld:"TABLE3",grid:0};
   GXValidFnc[90]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIA1",gxz:"ZV108Familia1",gxold:"OV108Familia1",gxvar:"AV108Familia1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV108Familia1=Value},v2z:function(Value){gx.O.ZV108Familia1=Value},v2c:function(){gx.fn.setControlValue("vFAMILIA1",gx.O.AV108Familia1,0)},c2v:function(){gx.O.AV108Familia1=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIA1")},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIA2",gxz:"ZV109Familia2",gxold:"OV109Familia2",gxvar:"AV109Familia2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV109Familia2=Value},v2z:function(Value){gx.O.ZV109Familia2=Value},v2c:function(){gx.fn.setControlValue("vFAMILIA2",gx.O.AV109Familia2,0)},c2v:function(){gx.O.AV109Familia2=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIA2")},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIA3",gxz:"ZV110Familia3",gxold:"OV110Familia3",gxvar:"AV110Familia3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV110Familia3=Value},v2z:function(Value){gx.O.ZV110Familia3=Value},v2c:function(){gx.fn.setControlValue("vFAMILIA3",gx.O.AV110Familia3,0)},c2v:function(){gx.O.AV110Familia3=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIA3")},nac:gx.falseFn};
   GXValidFnc[96]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIA4",gxz:"ZV111Familia4",gxold:"OV111Familia4",gxvar:"AV111Familia4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV111Familia4=Value},v2z:function(Value){gx.O.ZV111Familia4=Value},v2c:function(){gx.fn.setControlValue("vFAMILIA4",gx.O.AV111Familia4,0)},c2v:function(){gx.O.AV111Familia4=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIA4")},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIA5",gxz:"ZV112Familia5",gxold:"OV112Familia5",gxvar:"AV112Familia5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV112Familia5=Value},v2z:function(Value){gx.O.ZV112Familia5=Value},v2c:function(){gx.fn.setControlValue("vFAMILIA5",gx.O.AV112Familia5,0)},c2v:function(){gx.O.AV112Familia5=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIA5")},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIA6",gxz:"ZV113Familia6",gxold:"OV113Familia6",gxvar:"AV113Familia6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV113Familia6=Value},v2z:function(Value){gx.O.ZV113Familia6=Value},v2c:function(){gx.fn.setControlValue("vFAMILIA6",gx.O.AV113Familia6,0)},c2v:function(){gx.O.AV113Familia6=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIA6")},nac:gx.falseFn};
   GXValidFnc[103]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIA7",gxz:"ZV114Familia7",gxold:"OV114Familia7",gxvar:"AV114Familia7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV114Familia7=Value},v2z:function(Value){gx.O.ZV114Familia7=Value},v2c:function(){gx.fn.setControlValue("vFAMILIA7",gx.O.AV114Familia7,0)},c2v:function(){gx.O.AV114Familia7=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIA7")},nac:gx.falseFn};
   GXValidFnc[105]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIA8",gxz:"ZV115Familia8",gxold:"OV115Familia8",gxvar:"AV115Familia8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV115Familia8=Value},v2z:function(Value){gx.O.ZV115Familia8=Value},v2c:function(){gx.fn.setControlValue("vFAMILIA8",gx.O.AV115Familia8,0)},c2v:function(){gx.O.AV115Familia8=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIA8")},nac:gx.falseFn};
   GXValidFnc[108]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIA9",gxz:"ZV116Familia9",gxold:"OV116Familia9",gxvar:"AV116Familia9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV116Familia9=Value},v2z:function(Value){gx.O.ZV116Familia9=Value},v2c:function(){gx.fn.setControlValue("vFAMILIA9",gx.O.AV116Familia9,0)},c2v:function(){gx.O.AV116Familia9=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIA9")},nac:gx.falseFn};
   GXValidFnc[110]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIA10",gxz:"ZV117Familia10",gxold:"OV117Familia10",gxvar:"AV117Familia10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV117Familia10=Value},v2z:function(Value){gx.O.ZV117Familia10=Value},v2c:function(){gx.fn.setControlValue("vFAMILIA10",gx.O.AV117Familia10,0)},c2v:function(){gx.O.AV117Familia10=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIA10")},nac:gx.falseFn};
   GXValidFnc[116]={fld:"TABLE12",grid:0};
   GXValidFnc[119]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[120]={fld:"TABLE13",grid:0};
   GXValidFnc[123]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[125]={fld:"TABLE2",grid:0};
   GXValidFnc[128]={fld:"TABLE4",grid:0};
   GXValidFnc[131]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOINI1",gxz:"ZV49CCustoIni1",gxold:"OV49CCustoIni1",gxvar:"AV49CCustoIni1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49CCustoIni1=Value},v2z:function(Value){gx.O.ZV49CCustoIni1=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOINI1",gx.O.AV49CCustoIni1,0)},c2v:function(){gx.O.AV49CCustoIni1=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOINI1")},nac:gx.falseFn};
   GXValidFnc[133]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOFIN1",gxz:"ZV50CCustoFin1",gxold:"OV50CCustoFin1",gxvar:"AV50CCustoFin1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50CCustoFin1=Value},v2z:function(Value){gx.O.ZV50CCustoFin1=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOFIN1",gx.O.AV50CCustoFin1,0)},c2v:function(){gx.O.AV50CCustoFin1=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOFIN1")},nac:gx.falseFn};
   GXValidFnc[137]={fld:"TABLE24",grid:0};
   GXValidFnc[140]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOINI2",gxz:"ZV51CCustoIni2",gxold:"OV51CCustoIni2",gxvar:"AV51CCustoIni2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51CCustoIni2=Value},v2z:function(Value){gx.O.ZV51CCustoIni2=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOINI2",gx.O.AV51CCustoIni2,0)},c2v:function(){gx.O.AV51CCustoIni2=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOINI2")},nac:gx.falseFn};
   GXValidFnc[142]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[144]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOFIN2",gxz:"ZV52CCustoFin2",gxold:"OV52CCustoFin2",gxvar:"AV52CCustoFin2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV52CCustoFin2=Value},v2z:function(Value){gx.O.ZV52CCustoFin2=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOFIN2",gx.O.AV52CCustoFin2,0)},c2v:function(){gx.O.AV52CCustoFin2=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOFIN2")},nac:gx.falseFn};
   GXValidFnc[147]={fld:"TABLE5",grid:0};
   GXValidFnc[150]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOINI3",gxz:"ZV53CCustoIni3",gxold:"OV53CCustoIni3",gxvar:"AV53CCustoIni3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV53CCustoIni3=Value},v2z:function(Value){gx.O.ZV53CCustoIni3=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOINI3",gx.O.AV53CCustoIni3,0)},c2v:function(){gx.O.AV53CCustoIni3=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOINI3")},nac:gx.falseFn};
   GXValidFnc[152]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[154]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOFIN3",gxz:"ZV54CCustoFin3",gxold:"OV54CCustoFin3",gxvar:"AV54CCustoFin3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV54CCustoFin3=Value},v2z:function(Value){gx.O.ZV54CCustoFin3=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOFIN3",gx.O.AV54CCustoFin3,0)},c2v:function(){gx.O.AV54CCustoFin3=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOFIN3")},nac:gx.falseFn};
   GXValidFnc[156]={fld:"TABLE23",grid:0};
   GXValidFnc[159]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOINI4",gxz:"ZV55CCustoIni4",gxold:"OV55CCustoIni4",gxvar:"AV55CCustoIni4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV55CCustoIni4=Value},v2z:function(Value){gx.O.ZV55CCustoIni4=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOINI4",gx.O.AV55CCustoIni4,0)},c2v:function(){gx.O.AV55CCustoIni4=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOINI4")},nac:gx.falseFn};
   GXValidFnc[161]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[163]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOFIN4",gxz:"ZV56CCustoFin4",gxold:"OV56CCustoFin4",gxvar:"AV56CCustoFin4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV56CCustoFin4=Value},v2z:function(Value){gx.O.ZV56CCustoFin4=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOFIN4",gx.O.AV56CCustoFin4,0)},c2v:function(){gx.O.AV56CCustoFin4=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOFIN4")},nac:gx.falseFn};
   GXValidFnc[166]={fld:"TABLE6",grid:0};
   GXValidFnc[169]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOINI5",gxz:"ZV57CCustoIni5",gxold:"OV57CCustoIni5",gxvar:"AV57CCustoIni5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV57CCustoIni5=Value},v2z:function(Value){gx.O.ZV57CCustoIni5=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOINI5",gx.O.AV57CCustoIni5,0)},c2v:function(){gx.O.AV57CCustoIni5=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOINI5")},nac:gx.falseFn};
   GXValidFnc[171]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[173]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOFIN5",gxz:"ZV59CCustoFin5",gxold:"OV59CCustoFin5",gxvar:"AV59CCustoFin5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV59CCustoFin5=Value},v2z:function(Value){gx.O.ZV59CCustoFin5=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOFIN5",gx.O.AV59CCustoFin5,0)},c2v:function(){gx.O.AV59CCustoFin5=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOFIN5")},nac:gx.falseFn};
   GXValidFnc[175]={fld:"TABLE22",grid:0};
   GXValidFnc[178]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOINI6",gxz:"ZV58CCustoIni6",gxold:"OV58CCustoIni6",gxvar:"AV58CCustoIni6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58CCustoIni6=Value},v2z:function(Value){gx.O.ZV58CCustoIni6=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOINI6",gx.O.AV58CCustoIni6,0)},c2v:function(){gx.O.AV58CCustoIni6=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOINI6")},nac:gx.falseFn};
   GXValidFnc[180]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[182]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOFIN6",gxz:"ZV64CCustoFin6",gxold:"OV64CCustoFin6",gxvar:"AV64CCustoFin6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV64CCustoFin6=Value},v2z:function(Value){gx.O.ZV64CCustoFin6=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOFIN6",gx.O.AV64CCustoFin6,0)},c2v:function(){gx.O.AV64CCustoFin6=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOFIN6")},nac:gx.falseFn};
   GXValidFnc[185]={fld:"TABLE18",grid:0};
   GXValidFnc[188]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOINI7",gxz:"ZV60CCustoIni7",gxold:"OV60CCustoIni7",gxvar:"AV60CCustoIni7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV60CCustoIni7=Value},v2z:function(Value){gx.O.ZV60CCustoIni7=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOINI7",gx.O.AV60CCustoIni7,0)},c2v:function(){gx.O.AV60CCustoIni7=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOINI7")},nac:gx.falseFn};
   GXValidFnc[190]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[192]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOFIN7",gxz:"ZV65CCustoFin7",gxold:"OV65CCustoFin7",gxvar:"AV65CCustoFin7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV65CCustoFin7=Value},v2z:function(Value){gx.O.ZV65CCustoFin7=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOFIN7",gx.O.AV65CCustoFin7,0)},c2v:function(){gx.O.AV65CCustoFin7=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOFIN7")},nac:gx.falseFn};
   GXValidFnc[194]={fld:"TABLE21",grid:0};
   GXValidFnc[197]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOINI8",gxz:"ZV61CCustoIni8",gxold:"OV61CCustoIni8",gxvar:"AV61CCustoIni8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV61CCustoIni8=Value},v2z:function(Value){gx.O.ZV61CCustoIni8=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOINI8",gx.O.AV61CCustoIni8,0)},c2v:function(){gx.O.AV61CCustoIni8=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOINI8")},nac:gx.falseFn};
   GXValidFnc[199]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[201]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOFIN8",gxz:"ZV66CCustoFin8",gxold:"OV66CCustoFin8",gxvar:"AV66CCustoFin8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV66CCustoFin8=Value},v2z:function(Value){gx.O.ZV66CCustoFin8=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOFIN8",gx.O.AV66CCustoFin8,0)},c2v:function(){gx.O.AV66CCustoFin8=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOFIN8")},nac:gx.falseFn};
   GXValidFnc[204]={fld:"TABLE19",grid:0};
   GXValidFnc[207]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOINI9",gxz:"ZV62CCustoIni9",gxold:"OV62CCustoIni9",gxvar:"AV62CCustoIni9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV62CCustoIni9=Value},v2z:function(Value){gx.O.ZV62CCustoIni9=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOINI9",gx.O.AV62CCustoIni9,0)},c2v:function(){gx.O.AV62CCustoIni9=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOINI9")},nac:gx.falseFn};
   GXValidFnc[209]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[211]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOFIN9",gxz:"ZV67CCustoFin9",gxold:"OV67CCustoFin9",gxvar:"AV67CCustoFin9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV67CCustoFin9=Value},v2z:function(Value){gx.O.ZV67CCustoFin9=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOFIN9",gx.O.AV67CCustoFin9,0)},c2v:function(){gx.O.AV67CCustoFin9=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOFIN9")},nac:gx.falseFn};
   GXValidFnc[213]={fld:"TABLE20",grid:0};
   GXValidFnc[216]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOINI10",gxz:"ZV63CCustoIni10",gxold:"OV63CCustoIni10",gxvar:"AV63CCustoIni10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63CCustoIni10=Value},v2z:function(Value){gx.O.ZV63CCustoIni10=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOINI10",gx.O.AV63CCustoIni10,0)},c2v:function(){gx.O.AV63CCustoIni10=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOINI10")},nac:gx.falseFn};
   GXValidFnc[218]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[220]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCCUSTOFIN10",gxz:"ZV68CCustoFin10",gxold:"OV68CCustoFin10",gxvar:"AV68CCustoFin10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV68CCustoFin10=Value},v2z:function(Value){gx.O.ZV68CCustoFin10=Value},v2c:function(){gx.fn.setControlValue("vCCUSTOFIN10",gx.O.AV68CCustoFin10,0)},c2v:function(){gx.O.AV68CCustoFin10=this.val()},val:function(){return gx.fn.getControlValue("vCCUSTOFIN10")},nac:gx.falseFn};
   GXValidFnc[226]={fld:"TABLE9",grid:0};
   GXValidFnc[232]={fld:"TABPROMPT",grid:0};
   GXValidFnc[235]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGRUPOPRODUTOID",gxz:"ZV81GrupoProdutoId",gxold:"OV81GrupoProdutoId",gxvar:"AV81GrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV81GrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV81GrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGRUPOPRODUTOID",gx.O.AV81GrupoProdutoId,0)},c2v:function(){gx.O.AV81GrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[236]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCODIGOID",gxz:"ZV83ProdutoCodigoId",gxold:"OV83ProdutoCodigoId",gxvar:"AV83ProdutoCodigoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV83ProdutoCodigoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV83ProdutoCodigoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRODUTOCODIGOID",gx.O.AV83ProdutoCodigoId,0)},c2v:function(){gx.O.AV83ProdutoCodigoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRODUTOCODIGOID",'.')},nac:gx.falseFn};
   GXValidFnc[237]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSUBGRUPOPRODUTOID",gxz:"ZV82SubGrupoProdutoId",gxold:"OV82SubGrupoProdutoId",gxvar:"AV82SubGrupoProdutoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV82SubGrupoProdutoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV82SubGrupoProdutoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSUBGRUPOPRODUTOID",gx.O.AV82SubGrupoProdutoId,0)},c2v:function(){gx.O.AV82SubGrupoProdutoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSUBGRUPOPRODUTOID",'.')},nac:gx.falseFn};
   GXValidFnc[238]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCODIGOBARRASPRODUTOBARRA",gxz:"ZV86CodigoBarrasProdutoBarra",gxold:"OV86CodigoBarrasProdutoBarra",gxvar:"AV86CodigoBarrasProdutoBarra",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV86CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV86CodigoBarrasProdutoBarra=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCODIGOBARRASPRODUTOBARRA",gx.O.AV86CodigoBarrasProdutoBarra,0)},c2v:function(){gx.O.AV86CodigoBarrasProdutoBarra=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCODIGOBARRASPRODUTOBARRA",'.')},nac:gx.falseFn};
   GXValidFnc[239]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOTEPRODUTOCOMBINACAO",gxz:"ZV84LoteProdutoCombinacao",gxold:"OV84LoteProdutoCombinacao",gxvar:"AV84LoteProdutoCombinacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV84LoteProdutoCombinacao=Value},v2z:function(Value){gx.O.ZV84LoteProdutoCombinacao=Value},v2c:function(){gx.fn.setControlValue("vLOTEPRODUTOCOMBINACAO",gx.O.AV84LoteProdutoCombinacao,0)},c2v:function(){gx.O.AV84LoteProdutoCombinacao=this.val()},val:function(){return gx.fn.getControlValue("vLOTEPRODUTOCOMBINACAO")},nac:gx.falseFn};
   GXValidFnc[240]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNVENDA",gxz:"ZV88SNVenda",gxold:"OV88SNVenda",gxvar:"AV88SNVenda",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV88SNVenda=Value},v2z:function(Value){gx.O.ZV88SNVenda=Value},v2c:function(){gx.fn.setControlValue("vSNVENDA",gx.O.AV88SNVenda,0)},c2v:function(){gx.O.AV88SNVenda=this.val()},val:function(){return gx.fn.getControlValue("vSNVENDA")},nac:gx.falseFn};
   GXValidFnc[241]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFAMILIAIDIN",gxz:"ZV78FamiliaIdIN",gxold:"OV78FamiliaIdIN",gxvar:"AV78FamiliaIdIN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV78FamiliaIdIN=Value},v2z:function(Value){gx.O.ZV78FamiliaIdIN=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAIDIN",gx.O.AV78FamiliaIdIN,0)},c2v:function(){gx.O.AV78FamiliaIdIN=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAIDIN")},nac:gx.falseFn};
   GXValidFnc[242]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALIDFILTRO",gxz:"ZV89FilialIdFiltro",gxold:"OV89FilialIdFiltro",gxvar:"AV89FilialIdFiltro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89FilialIdFiltro=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV89FilialIdFiltro=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFILIALIDFILTRO",gx.O.AV89FilialIdFiltro,0)},c2v:function(){gx.O.AV89FilialIdFiltro=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFILIALIDFILTRO",'.')},nac:gx.falseFn};
   GXValidFnc[243]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOREFERENCIA",gxz:"ZV87ProdutoReferencia",gxold:"OV87ProdutoReferencia",gxvar:"AV87ProdutoReferencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV87ProdutoReferencia=Value},v2z:function(Value){gx.O.ZV87ProdutoReferencia=Value},v2c:function(){gx.fn.setControlValue("vPRODUTOREFERENCIA",gx.O.AV87ProdutoReferencia,0)},c2v:function(){gx.O.AV87ProdutoReferencia=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOREFERENCIA")},nac:gx.falseFn};
   GXValidFnc[244]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRECONULO",gxz:"ZV90PrecoNulo",gxold:"OV90PrecoNulo",gxvar:"AV90PrecoNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV90PrecoNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV90PrecoNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPRECONULO",gx.O.AV90PrecoNulo,0)},c2v:function(){gx.O.AV90PrecoNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPRECONULO",'.')},nac:gx.falseFn};
   GXValidFnc[245]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTOCATEGORIA",gxz:"ZV80ProdutoCategoria",gxold:"OV80ProdutoCategoria",gxvar:"AV80ProdutoCategoria",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV80ProdutoCategoria=Value},v2z:function(Value){gx.O.ZV80ProdutoCategoria=Value},v2c:function(){gx.fn.setComboBoxValue("vPRODUTOCATEGORIA",gx.O.AV80ProdutoCategoria)},c2v:function(){gx.O.AV80ProdutoCategoria=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTOCATEGORIA")},nac:gx.falseFn};
   GXValidFnc[246]={lvl:0,type:"date",len:8,dec:0,sign:true,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Gx_date,isvalid:null,rgrid:[],fld:"vTODAY",gxz:"Gx_date",gxold:"Gx_date",gxvar:"Gx_date",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Gx_date=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTODAY",gx.O.Gx_date,0)},c2v:function(){gx.O.Gx_date=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTODAY")},nac:gx.falseFn};
   GXValidFnc[247]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUXIN",gxz:"ZV85IntAuxIn",gxold:"OV85IntAuxIn",gxvar:"AV85IntAuxIn",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV85IntAuxIn=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV85IntAuxIn=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vINTAUXIN",gx.O.AV85IntAuxIn,0)},c2v:function(){gx.O.AV85IntAuxIn=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUXIN",'.')},nac:gx.falseFn};
   GXValidFnc[248]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Filialempresaid,isvalid:null,rgrid:[],fld:"vFILIALEMPRESAID",gxz:"ZV18FilialEmpresaId",gxold:"OV18FilialEmpresaId",gxvar:"AV18FilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18FilialEmpresaId=Value},v2z:function(Value){gx.O.ZV18FilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFILIALEMPRESAID",gx.O.AV18FilialEmpresaId,0)},c2v:function(){gx.O.AV18FilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[249]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECHAR",gxz:"ZV123QtdeChar",gxold:"OV123QtdeChar",gxvar:"AV123QtdeChar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV123QtdeChar=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV123QtdeChar=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDECHAR",gx.O.AV123QtdeChar,0)},c2v:function(){gx.O.AV123QtdeChar=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECHAR",'.')},nac:gx.falseFn};
   GXValidFnc[250]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Precoempresaid,isvalid:null,rgrid:[],fld:"vPRECOEMPRESAID",gxz:"ZV94PrecoEmpresaId",gxold:"OV94PrecoEmpresaId",gxvar:"AV94PrecoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94PrecoEmpresaId=Value},v2z:function(Value){gx.O.ZV94PrecoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPRECOEMPRESAID",gx.O.AV94PrecoEmpresaId,0)},c2v:function(){gx.O.AV94PrecoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPRECOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[251]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Familiaempresaid,isvalid:null,rgrid:[],fld:"vFAMILIAEMPRESAID",gxz:"ZV120FamiliaEmpresaId",gxold:"OV120FamiliaEmpresaId",gxvar:"AV120FamiliaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV120FamiliaEmpresaId=Value},v2z:function(Value){gx.O.ZV120FamiliaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vFAMILIAEMPRESAID",gx.O.AV120FamiliaEmpresaId,0)},c2v:function(){gx.O.AV120FamiliaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vFAMILIAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[252]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSETORIDIN",gxz:"ZV79SetorIdIN",gxold:"OV79SetorIdIN",gxvar:"AV79SetorIdIN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV79SetorIdIN=Value},v2z:function(Value){gx.O.ZV79SetorIdIN=Value},v2c:function(){gx.fn.setControlValue("vSETORIDIN",gx.O.AV79SetorIdIN,0)},c2v:function(){gx.O.AV79SetorIdIN=this.val()},val:function(){return gx.fn.getControlValue("vSETORIDIN")},nac:gx.falseFn};
   GXValidFnc[253]={fld:"JS", format:2,grid:0};
   GXValidFnc[255]={fld:"BTNHELP",grid:0};
   GXValidFnc[256]={fld:"PROMPT_PRECOID",grid:0};
   GXValidFnc[257]={fld:"PROMPT_FAMILIASALGADO",grid:0};
   GXValidFnc[258]={fld:"PROMPT_FILIALID",grid:0};
   GXValidFnc[259]={fld:"PROMPT_SETORINI",grid:0};
   GXValidFnc[260]={fld:"PROMPT_SETORFIN",grid:0};
   GXValidFnc[261]={fld:"PROMPT_FAMILIA1",grid:0};
   GXValidFnc[262]={fld:"PROMPT_FAMILIA2",grid:0};
   GXValidFnc[263]={fld:"PROMPT_FAMILIA3",grid:0};
   GXValidFnc[264]={fld:"PROMPT_FAMILIA4",grid:0};
   GXValidFnc[265]={fld:"PROMPT_FAMILIA5",grid:0};
   GXValidFnc[266]={fld:"PROMPT_FAMILIA6",grid:0};
   GXValidFnc[267]={fld:"PROMPT_FAMILIA7",grid:0};
   GXValidFnc[268]={fld:"PROMPT_FAMILIA8",grid:0};
   GXValidFnc[269]={fld:"PROMPT_FAMILIA9",grid:0};
   GXValidFnc[270]={fld:"PROMPT_FAMILIA10",grid:0};
   GXValidFnc[271]={fld:"PROMPT_CCUSTOINI1",grid:0};
   GXValidFnc[272]={fld:"PROMPT_CCUSTOFIN1",grid:0};
   GXValidFnc[273]={fld:"PROMPT_CCUSTOINI2",grid:0};
   GXValidFnc[274]={fld:"PROMPT_CCUSTOFIN2",grid:0};
   GXValidFnc[275]={fld:"PROMPT_CCUSTOINI3",grid:0};
   GXValidFnc[276]={fld:"PROMPT_CCUSTOFIN3",grid:0};
   GXValidFnc[277]={fld:"PROMPT_CCUSTOINI4",grid:0};
   GXValidFnc[278]={fld:"PROMPT_CCUSTOFIN4",grid:0};
   GXValidFnc[279]={fld:"PROMPT_CCUSTOINI5",grid:0};
   GXValidFnc[280]={fld:"PROMPT_CCUSTOFIN5",grid:0};
   GXValidFnc[281]={fld:"PROMPT_CCUSTOINI6",grid:0};
   GXValidFnc[282]={fld:"PROMPT_CCUSTOFIN6",grid:0};
   GXValidFnc[283]={fld:"PROMPT_CCUSTOINI7",grid:0};
   GXValidFnc[284]={fld:"PROMPT_CCUSTOFIN7",grid:0};
   GXValidFnc[285]={fld:"PROMPT_CCUSTOINI8",grid:0};
   GXValidFnc[286]={fld:"PROMPT_CCUSTOFIN8",grid:0};
   GXValidFnc[287]={fld:"PROMPT_CCUSTOINI9",grid:0};
   GXValidFnc[288]={fld:"PROMPT_CCUSTOFIN9",grid:0};
   GXValidFnc[289]={fld:"PROMPT_CCUSTOINI10",grid:0};
   GXValidFnc[290]={fld:"PROMPT_CCUSTOFIN10",grid:0};
   this.AV70ModeloRelatorio = "" ;
   this.ZV70ModeloRelatorio = "" ;
   this.OV70ModeloRelatorio = "" ;
   this.AV44Ordenacao = "" ;
   this.ZV44Ordenacao = "" ;
   this.OV44Ordenacao = "" ;
   this.AV92PrecoId = 0 ;
   this.ZV92PrecoId = 0 ;
   this.OV92PrecoId = 0 ;
   this.AV93PrecoDescricao = "" ;
   this.ZV93PrecoDescricao = "" ;
   this.OV93PrecoDescricao = "" ;
   this.AV118FamiliaSalgado = "" ;
   this.ZV118FamiliaSalgado = "" ;
   this.OV118FamiliaSalgado = "" ;
   this.AV119FamiliaSalgadoDesc = "" ;
   this.ZV119FamiliaSalgadoDesc = "" ;
   this.OV119FamiliaSalgadoDesc = "" ;
   this.AV16FilialId = 0 ;
   this.ZV16FilialId = 0 ;
   this.OV16FilialId = 0 ;
   this.AV17FilialNome = "" ;
   this.ZV17FilialNome = "" ;
   this.OV17FilialNome = "" ;
   this.AV71DtInicial = gx.date.nullDate() ;
   this.ZV71DtInicial = gx.date.nullDate() ;
   this.OV71DtInicial = gx.date.nullDate() ;
   this.AV72DtFinal = gx.date.nullDate() ;
   this.ZV72DtFinal = gx.date.nullDate() ;
   this.OV72DtFinal = gx.date.nullDate() ;
   this.AV73SetorIni = "" ;
   this.ZV73SetorIni = "" ;
   this.OV73SetorIni = "" ;
   this.AV74SetorFin = "" ;
   this.ZV74SetorFin = "" ;
   this.OV74SetorFin = "" ;
   this.AV75ProdutoIni = 0 ;
   this.ZV75ProdutoIni = 0 ;
   this.OV75ProdutoIni = 0 ;
   this.AV76ProdutoFin = 0 ;
   this.ZV76ProdutoFin = 0 ;
   this.OV76ProdutoFin = 0 ;
   this.AV108Familia1 = "" ;
   this.ZV108Familia1 = "" ;
   this.OV108Familia1 = "" ;
   this.AV109Familia2 = "" ;
   this.ZV109Familia2 = "" ;
   this.OV109Familia2 = "" ;
   this.AV110Familia3 = "" ;
   this.ZV110Familia3 = "" ;
   this.OV110Familia3 = "" ;
   this.AV111Familia4 = "" ;
   this.ZV111Familia4 = "" ;
   this.OV111Familia4 = "" ;
   this.AV112Familia5 = "" ;
   this.ZV112Familia5 = "" ;
   this.OV112Familia5 = "" ;
   this.AV113Familia6 = "" ;
   this.ZV113Familia6 = "" ;
   this.OV113Familia6 = "" ;
   this.AV114Familia7 = "" ;
   this.ZV114Familia7 = "" ;
   this.OV114Familia7 = "" ;
   this.AV115Familia8 = "" ;
   this.ZV115Familia8 = "" ;
   this.OV115Familia8 = "" ;
   this.AV116Familia9 = "" ;
   this.ZV116Familia9 = "" ;
   this.OV116Familia9 = "" ;
   this.AV117Familia10 = "" ;
   this.ZV117Familia10 = "" ;
   this.OV117Familia10 = "" ;
   this.AV49CCustoIni1 = "" ;
   this.ZV49CCustoIni1 = "" ;
   this.OV49CCustoIni1 = "" ;
   this.AV50CCustoFin1 = "" ;
   this.ZV50CCustoFin1 = "" ;
   this.OV50CCustoFin1 = "" ;
   this.AV51CCustoIni2 = "" ;
   this.ZV51CCustoIni2 = "" ;
   this.OV51CCustoIni2 = "" ;
   this.AV52CCustoFin2 = "" ;
   this.ZV52CCustoFin2 = "" ;
   this.OV52CCustoFin2 = "" ;
   this.AV53CCustoIni3 = "" ;
   this.ZV53CCustoIni3 = "" ;
   this.OV53CCustoIni3 = "" ;
   this.AV54CCustoFin3 = "" ;
   this.ZV54CCustoFin3 = "" ;
   this.OV54CCustoFin3 = "" ;
   this.AV55CCustoIni4 = "" ;
   this.ZV55CCustoIni4 = "" ;
   this.OV55CCustoIni4 = "" ;
   this.AV56CCustoFin4 = "" ;
   this.ZV56CCustoFin4 = "" ;
   this.OV56CCustoFin4 = "" ;
   this.AV57CCustoIni5 = "" ;
   this.ZV57CCustoIni5 = "" ;
   this.OV57CCustoIni5 = "" ;
   this.AV59CCustoFin5 = "" ;
   this.ZV59CCustoFin5 = "" ;
   this.OV59CCustoFin5 = "" ;
   this.AV58CCustoIni6 = "" ;
   this.ZV58CCustoIni6 = "" ;
   this.OV58CCustoIni6 = "" ;
   this.AV64CCustoFin6 = "" ;
   this.ZV64CCustoFin6 = "" ;
   this.OV64CCustoFin6 = "" ;
   this.AV60CCustoIni7 = "" ;
   this.ZV60CCustoIni7 = "" ;
   this.OV60CCustoIni7 = "" ;
   this.AV65CCustoFin7 = "" ;
   this.ZV65CCustoFin7 = "" ;
   this.OV65CCustoFin7 = "" ;
   this.AV61CCustoIni8 = "" ;
   this.ZV61CCustoIni8 = "" ;
   this.OV61CCustoIni8 = "" ;
   this.AV66CCustoFin8 = "" ;
   this.ZV66CCustoFin8 = "" ;
   this.OV66CCustoFin8 = "" ;
   this.AV62CCustoIni9 = "" ;
   this.ZV62CCustoIni9 = "" ;
   this.OV62CCustoIni9 = "" ;
   this.AV67CCustoFin9 = "" ;
   this.ZV67CCustoFin9 = "" ;
   this.OV67CCustoFin9 = "" ;
   this.AV63CCustoIni10 = "" ;
   this.ZV63CCustoIni10 = "" ;
   this.OV63CCustoIni10 = "" ;
   this.AV68CCustoFin10 = "" ;
   this.ZV68CCustoFin10 = "" ;
   this.OV68CCustoFin10 = "" ;
   this.AV81GrupoProdutoId = 0 ;
   this.ZV81GrupoProdutoId = 0 ;
   this.OV81GrupoProdutoId = 0 ;
   this.AV83ProdutoCodigoId = 0 ;
   this.ZV83ProdutoCodigoId = 0 ;
   this.OV83ProdutoCodigoId = 0 ;
   this.AV82SubGrupoProdutoId = 0 ;
   this.ZV82SubGrupoProdutoId = 0 ;
   this.OV82SubGrupoProdutoId = 0 ;
   this.AV86CodigoBarrasProdutoBarra = 0 ;
   this.ZV86CodigoBarrasProdutoBarra = 0 ;
   this.OV86CodigoBarrasProdutoBarra = 0 ;
   this.AV84LoteProdutoCombinacao = "" ;
   this.ZV84LoteProdutoCombinacao = "" ;
   this.OV84LoteProdutoCombinacao = "" ;
   this.AV88SNVenda = "" ;
   this.ZV88SNVenda = "" ;
   this.OV88SNVenda = "" ;
   this.AV78FamiliaIdIN = "" ;
   this.ZV78FamiliaIdIN = "" ;
   this.OV78FamiliaIdIN = "" ;
   this.AV89FilialIdFiltro = 0 ;
   this.ZV89FilialIdFiltro = 0 ;
   this.OV89FilialIdFiltro = 0 ;
   this.AV87ProdutoReferencia = "" ;
   this.ZV87ProdutoReferencia = "" ;
   this.OV87ProdutoReferencia = "" ;
   this.AV90PrecoNulo = 0 ;
   this.ZV90PrecoNulo = 0 ;
   this.OV90PrecoNulo = 0 ;
   this.AV80ProdutoCategoria = "" ;
   this.ZV80ProdutoCategoria = "" ;
   this.OV80ProdutoCategoria = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV85IntAuxIn = 0 ;
   this.ZV85IntAuxIn = 0 ;
   this.OV85IntAuxIn = 0 ;
   this.AV18FilialEmpresaId = "" ;
   this.ZV18FilialEmpresaId = "" ;
   this.OV18FilialEmpresaId = "" ;
   this.AV123QtdeChar = 0 ;
   this.ZV123QtdeChar = 0 ;
   this.OV123QtdeChar = 0 ;
   this.AV94PrecoEmpresaId = "" ;
   this.ZV94PrecoEmpresaId = "" ;
   this.OV94PrecoEmpresaId = "" ;
   this.AV120FamiliaEmpresaId = "" ;
   this.ZV120FamiliaEmpresaId = "" ;
   this.OV120FamiliaEmpresaId = "" ;
   this.AV79SetorIdIN = "" ;
   this.ZV79SetorIdIN = "" ;
   this.OV79SetorIdIN = "" ;
   this.AV70ModeloRelatorio = "" ;
   this.AV44Ordenacao = "" ;
   this.AV92PrecoId = 0 ;
   this.AV93PrecoDescricao = "" ;
   this.AV118FamiliaSalgado = "" ;
   this.AV119FamiliaSalgadoDesc = "" ;
   this.AV16FilialId = 0 ;
   this.AV17FilialNome = "" ;
   this.AV71DtInicial = gx.date.nullDate() ;
   this.AV72DtFinal = gx.date.nullDate() ;
   this.AV73SetorIni = "" ;
   this.AV74SetorFin = "" ;
   this.AV75ProdutoIni = 0 ;
   this.AV76ProdutoFin = 0 ;
   this.AV108Familia1 = "" ;
   this.AV109Familia2 = "" ;
   this.AV110Familia3 = "" ;
   this.AV111Familia4 = "" ;
   this.AV112Familia5 = "" ;
   this.AV113Familia6 = "" ;
   this.AV114Familia7 = "" ;
   this.AV115Familia8 = "" ;
   this.AV116Familia9 = "" ;
   this.AV117Familia10 = "" ;
   this.AV49CCustoIni1 = "" ;
   this.AV50CCustoFin1 = "" ;
   this.AV51CCustoIni2 = "" ;
   this.AV52CCustoFin2 = "" ;
   this.AV53CCustoIni3 = "" ;
   this.AV54CCustoFin3 = "" ;
   this.AV55CCustoIni4 = "" ;
   this.AV56CCustoFin4 = "" ;
   this.AV57CCustoIni5 = "" ;
   this.AV59CCustoFin5 = "" ;
   this.AV58CCustoIni6 = "" ;
   this.AV64CCustoFin6 = "" ;
   this.AV60CCustoIni7 = "" ;
   this.AV65CCustoFin7 = "" ;
   this.AV61CCustoIni8 = "" ;
   this.AV66CCustoFin8 = "" ;
   this.AV62CCustoIni9 = "" ;
   this.AV67CCustoFin9 = "" ;
   this.AV63CCustoIni10 = "" ;
   this.AV68CCustoFin10 = "" ;
   this.AV81GrupoProdutoId = 0 ;
   this.AV83ProdutoCodigoId = 0 ;
   this.AV82SubGrupoProdutoId = 0 ;
   this.AV86CodigoBarrasProdutoBarra = 0 ;
   this.AV84LoteProdutoCombinacao = "" ;
   this.AV88SNVenda = "" ;
   this.AV78FamiliaIdIN = "" ;
   this.AV89FilialIdFiltro = 0 ;
   this.AV87ProdutoReferencia = "" ;
   this.AV90PrecoNulo = 0 ;
   this.AV80ProdutoCategoria = "" ;
   this.Gx_date = gx.date.nullDate() ;
   this.AV85IntAuxIn = 0 ;
   this.AV18FilialEmpresaId = "" ;
   this.AV123QtdeChar = 0 ;
   this.AV94PrecoEmpresaId = "" ;
   this.AV120FamiliaEmpresaId = "" ;
   this.AV79SetorIdIN = "" ;
   this.A2957FamiliaId = "" ;
   this.A2956FamiliaEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1136FilialNome = "" ;
   this.A2951FamiliaDescricao = "" ;
   this.A710PrecoId = 0 ;
   this.A709PrecoEmpresaId = "" ;
   this.A722PrecoTipo = "" ;
   this.Events = {"e131gj2_client": ["ENTER", true] ,"e111gj2_client": ["'FECHAR'", true] ,"e161gj2_client": ["CANCEL", true] ,"e151gj1_client": ["'TIPOMOVIMENTO'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV40SNErro',fld:'vSNERRO'},{av:'AV70ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV44Ordenacao',fld:'vORDENACAO'},{av:'AV71DtInicial',fld:'vDTINICIAL'},{av:'AV72DtFinal',fld:'vDTFINAL'},{av:'AV92PrecoId',fld:'vPRECOID'},{av:'AV73SetorIni',fld:'vSETORINI'},{av:'AV74SetorFin',fld:'vSETORFIN'},{av:'AV75ProdutoIni',fld:'vPRODUTOINI'},{av:'AV76ProdutoFin',fld:'vPRODUTOFIN'},{av:'AV49CCustoIni1',fld:'vCCUSTOINI1'},{av:'AV50CCustoFin1',fld:'vCCUSTOFIN1'},{av:'AV51CCustoIni2',fld:'vCCUSTOINI2'},{av:'AV52CCustoFin2',fld:'vCCUSTOFIN2'},{av:'AV53CCustoIni3',fld:'vCCUSTOINI3'},{av:'AV54CCustoFin3',fld:'vCCUSTOFIN3'},{av:'AV55CCustoIni4',fld:'vCCUSTOINI4'},{av:'AV56CCustoFin4',fld:'vCCUSTOFIN4'},{av:'AV57CCustoIni5',fld:'vCCUSTOINI5'},{av:'AV59CCustoFin5',fld:'vCCUSTOFIN5'},{av:'AV58CCustoIni6',fld:'vCCUSTOINI6'},{av:'AV64CCustoFin6',fld:'vCCUSTOFIN6'},{av:'AV60CCustoIni7',fld:'vCCUSTOINI7'},{av:'AV65CCustoFin7',fld:'vCCUSTOFIN7'},{av:'AV61CCustoIni8',fld:'vCCUSTOINI8'},{av:'AV66CCustoFin8',fld:'vCCUSTOFIN8'},{av:'AV62CCustoIni9',fld:'vCCUSTOINI9'},{av:'AV67CCustoFin9',fld:'vCCUSTOFIN9'},{av:'AV63CCustoIni10',fld:'vCCUSTOINI10'},{av:'AV68CCustoFin10',fld:'vCCUSTOFIN10'},{av:'AV118FamiliaSalgado',fld:'vFAMILIASALGADO'},{av:'AV108Familia1',fld:'vFAMILIA1'},{av:'AV109Familia2',fld:'vFAMILIA2'},{av:'AV110Familia3',fld:'vFAMILIA3'},{av:'AV111Familia4',fld:'vFAMILIA4'},{av:'AV112Familia5',fld:'vFAMILIA5'},{av:'AV113Familia6',fld:'vFAMILIA6'},{av:'AV114Familia7',fld:'vFAMILIA7'},{av:'AV115Familia8',fld:'vFAMILIA8'},{av:'AV116Familia9',fld:'vFAMILIA9'},{av:'AV117Familia10',fld:'vFAMILIA10'},{av:'AV16FilialId',fld:'vFILIALID'},{av:'AV130Pgmdesc',fld:'vPGMDESC'},{av:'A709PrecoEmpresaId',fld:'PRECOEMPRESAID'},{av:'AV94PrecoEmpresaId',fld:'vPRECOEMPRESAID'},{av:'A710PrecoId',fld:'PRECOID'},{av:'A722PrecoTipo',fld:'PRECOTIPO'},{av:'A2956FamiliaEmpresaId',fld:'FAMILIAEMPRESAID'},{av:'AV120FamiliaEmpresaId',fld:'vFAMILIAEMPRESAID'},{av:'A2957FamiliaId',fld:'FAMILIAID'},{av:'A2951FamiliaDescricao',fld:'FAMILIADESCRICAO'},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV18FilialEmpresaId',fld:'vFILIALEMPRESAID'},{av:'A1156FilialId',fld:'FILIALID'},{av:'A1136FilialNome',fld:'FILIALNOME'},{av:'AV121FamiliaId',fld:'vFAMILIAID'},{av:'AV95CCustoIni',fld:'vCCUSTOINI'},{av:'AV96CCustoFin',fld:'vCCUSTOFIN'}],[{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV10NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV97SnGerou',fld:'vSNGEROU'},{av:'AV70ModeloRelatorio',fld:'vMODELORELATORIO'},{av:'AV14QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV40SNErro',fld:'vSNERRO'},{av:'AV132GXLvl213',fld:'vGXLVL213'},{av:'AV133GXLvl235',fld:'vGXLVL235'},{av:'AV119FamiliaSalgadoDesc',fld:'vFAMILIASALGADODESC'},{av:'AV134GXLvl249',fld:'vGXLVL249'},{av:'AV17FilialNome',fld:'vFILIALNOME'},{av:'AV91x',fld:'vX'},{av:'AV121FamiliaId',fld:'vFAMILIAID'},{av:'AV135GXLvl318',fld:'vGXLVL318'},{av:'AV95CCustoIni',fld:'vCCUSTOINI'},{av:'AV96CCustoFin',fld:'vCCUSTOFIN'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'TIPOMOVIMENTO'"] = [[],[]];
   this.setPrompt("PROMPTPRODINI", [76,235,237,236,239,243,238]);
   this.setPrompt("PROMPT_PRECOID", [27]);
   this.setPrompt("PROMPT_FAMILIASALGADO", [33]);
   this.setPrompt("PROMPT_FILIALID", [43]);
   this.setPrompt("PROMPT_SETORINI", [64]);
   this.setPrompt("PROMPT_SETORFIN", [68]);
   this.setPrompt("PROMPTPRODFIN", [81,235,237,236,239,243,238]);
   this.setPrompt("PROMPT_FAMILIA1", [90]);
   this.setPrompt("PROMPT_FAMILIA2", [92]);
   this.setPrompt("PROMPT_FAMILIA3", [94]);
   this.setPrompt("PROMPT_FAMILIA4", [96]);
   this.setPrompt("PROMPT_FAMILIA5", [99]);
   this.setPrompt("PROMPT_FAMILIA6", [101]);
   this.setPrompt("PROMPT_FAMILIA7", [103]);
   this.setPrompt("PROMPT_FAMILIA8", [105]);
   this.setPrompt("PROMPT_FAMILIA9", [108]);
   this.setPrompt("PROMPT_FAMILIA10", [110]);
   this.setPrompt("PROMPT_CCUSTOINI1", [131]);
   this.setPrompt("PROMPT_CCUSTOFIN1", [135]);
   this.setPrompt("PROMPT_CCUSTOINI2", [140]);
   this.setPrompt("PROMPT_CCUSTOFIN2", [144]);
   this.setPrompt("PROMPT_CCUSTOINI3", [150]);
   this.setPrompt("PROMPT_CCUSTOFIN3", [154]);
   this.setPrompt("PROMPT_CCUSTOINI4", [159]);
   this.setPrompt("PROMPT_CCUSTOFIN4", [163]);
   this.setPrompt("PROMPT_CCUSTOINI5", [169]);
   this.setPrompt("PROMPT_CCUSTOFIN5", [173]);
   this.setPrompt("PROMPT_CCUSTOINI6", [178]);
   this.setPrompt("PROMPT_CCUSTOFIN6", [182]);
   this.setPrompt("PROMPT_CCUSTOINI7", [188]);
   this.setPrompt("PROMPT_CCUSTOFIN7", [192]);
   this.setPrompt("PROMPT_CCUSTOINI8", [197]);
   this.setPrompt("PROMPT_CCUSTOFIN8", [201]);
   this.setPrompt("PROMPT_CCUSTOINI9", [207]);
   this.setPrompt("PROMPT_CCUSTOFIN9", [211]);
   this.setPrompt("PROMPT_CCUSTOINI10", [216]);
   this.setPrompt("PROMPT_CCUSTOFIN10", [220]);
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hrelacaovendaperda());

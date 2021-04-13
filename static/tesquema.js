/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:20:7.61
*/
gx.evt.autoSkip = false;
gx.define('tesquema', false, function () {
   this.ServerClass =  "tesquema" ;
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
      this.AV18EsquemaCodigo=gx.fn.getIntegerValue("vESQUEMACODIGO",'.') ;
      this.AV20SnExcluir=gx.fn.getControlValue("vSNEXCLUIR") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV30Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV29Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Esquemacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ESQUEMACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Esquemadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ESQUEMADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2912EsquemaDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e126j2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136j2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146j374_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156j374_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Esquemacodigo,isvalid:null,rgrid:[],fld:"ESQUEMACODIGO",gxz:"Z2915EsquemaCodigo",gxold:"O2915EsquemaCodigo",gxvar:"A2915EsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2915EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2915EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ESQUEMACODIGO",gx.O.A2915EsquemaCodigo,0)},c2v:function(){gx.O.A2915EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Esquemadescricao,isvalid:null,rgrid:[],fld:"ESQUEMADESCRICAO",gxz:"Z2912EsquemaDescricao",gxold:"O2912EsquemaDescricao",gxvar:"A2912EsquemaDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2912EsquemaDescricao=Value},v2z:function(Value){gx.O.Z2912EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("ESQUEMADESCRICAO",gx.O.A2912EsquemaDescricao,0)},c2v:function(){gx.O.A2912EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("ESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESQUEMAUSUARIOALT",gxz:"Z2913EsquemaUsuarioAlt",gxold:"O2913EsquemaUsuarioAlt",gxvar:"A2913EsquemaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2913EsquemaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2913EsquemaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ESQUEMAUSUARIOALT",gx.O.A2913EsquemaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2913EsquemaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ESQUEMAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESQUEMADATAHORAALT",gxz:"Z2914EsquemaDataHoraAlt",gxold:"O2914EsquemaDataHoraAlt",gxvar:"A2914EsquemaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2914EsquemaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2914EsquemaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ESQUEMADATAHORAALT",gx.O.A2914EsquemaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2914EsquemaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ESQUEMADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A2915EsquemaCodigo = 0 ;
   this.Z2915EsquemaCodigo = 0 ;
   this.O2915EsquemaCodigo = 0 ;
   this.A2912EsquemaDescricao = "" ;
   this.Z2912EsquemaDescricao = "" ;
   this.O2912EsquemaDescricao = "" ;
   this.A2913EsquemaUsuarioAlt = "" ;
   this.Z2913EsquemaUsuarioAlt = "" ;
   this.O2913EsquemaUsuarioAlt = "" ;
   this.A2914EsquemaDataHoraAlt = gx.date.nullDate() ;
   this.Z2914EsquemaDataHoraAlt = gx.date.nullDate() ;
   this.O2914EsquemaDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV29Pgmname = "" ;
   this.AV30Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV26UrlMobile = "" ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV19SnAlterou = "" ;
   this.AV20SnExcluir = "" ;
   this.AV18EsquemaCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2913EsquemaUsuarioAlt = "" ;
   this.A2914EsquemaDataHoraAlt = gx.date.nullDate() ;
   this.A2912EsquemaDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126j2_client": ["'FECHAR'", true] ,"e136j2_client": ["AFTER TRN", true] ,"e146j374_client": ["ENTER", true] ,"e156j374_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'AV26UrlMobile',fld:'vURLMOBILE'},{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'}],[{av:'AV25SdtValorAtributo',fld:'vSDTVALORATRIBUTO'},{av:'AV24SdtAtributoEsquema',fld:'vSDTATRIBUTOESQUEMA'},{av:'AV23SdtEsquema',fld:'vSDTESQUEMA'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18EsquemaCodigo", "vESQUEMACODIGO", 0, "int");
   this.setVCMap("AV20SnExcluir", "vSNEXCLUIR", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV30Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV29Pgmname", "vPGMNAME", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 374 ]= ["O2912EsquemaDescricao","O2915EsquemaCodigo"] ;
});
gx.setParentObj(new tesquema());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:57:36.48
*/
gx.evt.autoSkip = false;
gx.define('tvaloratributo', false, function () {
   this.ServerClass =  "tvaloratributo" ;
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
      this.AV19AtributoEsquemaCodigo=gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO",'.') ;
      this.AV20ValorAtributoCodigo=gx.fn.getIntegerValue("vVALORATRIBUTOCODIGO",'.') ;
      this.AV23SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV24SNExiste=gx.fn.getControlValue("vSNEXISTE") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV30Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV29Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Esquemacodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Esquemacodigo",["gx.O.A2915EsquemaCodigo", "gx.O.A2912EsquemaDescricao"],["A2912EsquemaDescricao"]);
      return true;
   }
   this.Valid_Atributoesquemacodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Atributoesquemacodigo",["gx.O.A2915EsquemaCodigo", "gx.O.A2921AtributoEsquemaCodigo", "gx.O.A2916AtributoEsquemaDescricao"],["A2916AtributoEsquemaDescricao"]);
      return true;
   }
   this.Valid_Valoratributocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VALORATRIBUTOCODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Valoratributodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VALORATRIBUTODESCRICAO");
         this.AnyError  = 0;
         try {
            if ( gx.Old("VALORATRIBUTODESCRICAO","O2938ValorAtributoDescricao") != this.A2938ValorAtributoDescricao )
            {
               this.AV23SnAlterou =  "S"  ;
            }
         }
         catch(e){}
         if ( (""==this.A2938ValorAtributoDescricao) )
         {
            try {
               gxballoon.setError("Informe a Sigla/Descrição");
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
   this.e127s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e137s2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e147s426_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e157s426_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,21,24,26,30,32,35,38,40,42,51,53];
   this.GXLastCtrlId =53;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Esquemacodigo,isvalid:null,rgrid:[],fld:"ESQUEMACODIGO",gxz:"Z2915EsquemaCodigo",gxold:"O2915EsquemaCodigo",gxvar:"A2915EsquemaCodigo",ucs:[],op:[15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2915EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2915EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ESQUEMACODIGO",gx.O.A2915EsquemaCodigo,0)},c2v:function(){gx.O.A2915EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESQUEMADESCRICAO",gxz:"Z2912EsquemaDescricao",gxold:"O2912EsquemaDescricao",gxvar:"A2912EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2912EsquemaDescricao=Value},v2z:function(Value){gx.O.Z2912EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("ESQUEMADESCRICAO",gx.O.A2912EsquemaDescricao,0)},c2v:function(){gx.O.A2912EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("ESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Atributoesquemacodigo,isvalid:null,rgrid:[],fld:"ATRIBUTOESQUEMACODIGO",gxz:"Z2921AtributoEsquemaCodigo",gxold:"O2921AtributoEsquemaCodigo",gxvar:"A2921AtributoEsquemaCodigo",ucs:[],op:[21],ip:[21,20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2921AtributoEsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2921AtributoEsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ATRIBUTOESQUEMACODIGO",gx.O.A2921AtributoEsquemaCodigo,0)},c2v:function(){gx.O.A2921AtributoEsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ATRIBUTOESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[21]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ATRIBUTOESQUEMADESCRICAO",gxz:"Z2916AtributoEsquemaDescricao",gxold:"O2916AtributoEsquemaDescricao",gxvar:"A2916AtributoEsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2916AtributoEsquemaDescricao=Value},v2z:function(Value){gx.O.Z2916AtributoEsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("ATRIBUTOESQUEMADESCRICAO",gx.O.A2916AtributoEsquemaDescricao,0)},c2v:function(){gx.O.A2916AtributoEsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("ATRIBUTOESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Valoratributocodigo,isvalid:null,rgrid:[],fld:"VALORATRIBUTOCODIGO",gxz:"Z2941ValorAtributoCodigo",gxold:"O2941ValorAtributoCodigo",gxvar:"A2941ValorAtributoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2941ValorAtributoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2941ValorAtributoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VALORATRIBUTOCODIGO",gx.O.A2941ValorAtributoCodigo,0)},c2v:function(){gx.O.A2941ValorAtributoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VALORATRIBUTOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Valoratributodescricao,isvalid:null,rgrid:[],fld:"VALORATRIBUTODESCRICAO",gxz:"Z2938ValorAtributoDescricao",gxold:"O2938ValorAtributoDescricao",gxvar:"A2938ValorAtributoDescricao",ucs:[],op:[32],ip:[32],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2938ValorAtributoDescricao=Value},v2z:function(Value){gx.O.Z2938ValorAtributoDescricao=Value},v2c:function(){gx.fn.setControlValue("VALORATRIBUTODESCRICAO",gx.O.A2938ValorAtributoDescricao,0)},c2v:function(){gx.O.A2938ValorAtributoDescricao=this.val()},val:function(){return gx.fn.getControlValue("VALORATRIBUTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VALORATRIBUTOUSUARIOALT",gxz:"Z2939ValorAtributoUsuarioAlt",gxold:"O2939ValorAtributoUsuarioAlt",gxvar:"A2939ValorAtributoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2939ValorAtributoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2939ValorAtributoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("VALORATRIBUTOUSUARIOALT",gx.O.A2939ValorAtributoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2939ValorAtributoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("VALORATRIBUTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VALORATRIBUTODATAHORAALT",gxz:"Z2940ValorAtributoDataHoraAlt",gxold:"O2940ValorAtributoDataHoraAlt",gxvar:"A2940ValorAtributoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2940ValorAtributoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2940ValorAtributoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("VALORATRIBUTODATAHORAALT",gx.O.A2940ValorAtributoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2940ValorAtributoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("VALORATRIBUTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[51]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={fld:"BTNHELP",grid:0};
   this.A2915EsquemaCodigo = 0 ;
   this.Z2915EsquemaCodigo = 0 ;
   this.O2915EsquemaCodigo = 0 ;
   this.A2912EsquemaDescricao = "" ;
   this.Z2912EsquemaDescricao = "" ;
   this.O2912EsquemaDescricao = "" ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.Z2921AtributoEsquemaCodigo = 0 ;
   this.O2921AtributoEsquemaCodigo = 0 ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.Z2916AtributoEsquemaDescricao = "" ;
   this.O2916AtributoEsquemaDescricao = "" ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.Z2941ValorAtributoCodigo = 0 ;
   this.O2941ValorAtributoCodigo = 0 ;
   this.A2938ValorAtributoDescricao = "" ;
   this.Z2938ValorAtributoDescricao = "" ;
   this.O2938ValorAtributoDescricao = "" ;
   this.A2939ValorAtributoUsuarioAlt = "" ;
   this.Z2939ValorAtributoUsuarioAlt = "" ;
   this.O2939ValorAtributoUsuarioAlt = "" ;
   this.A2940ValorAtributoDataHoraAlt = gx.date.nullDate() ;
   this.Z2940ValorAtributoDataHoraAlt = gx.date.nullDate() ;
   this.O2940ValorAtributoDataHoraAlt = gx.date.nullDate() ;
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
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV23SnAlterou = "" ;
   this.AV24SNExiste = "" ;
   this.AV18EsquemaCodigo = 0 ;
   this.AV19AtributoEsquemaCodigo = 0 ;
   this.AV20ValorAtributoCodigo = 0 ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2941ValorAtributoCodigo = 0 ;
   this.A2939ValorAtributoUsuarioAlt = "" ;
   this.A2940ValorAtributoDataHoraAlt = gx.date.nullDate() ;
   this.A2912EsquemaDescricao = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2938ValorAtributoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e127s2_client": ["'FECHAR'", true] ,"e137s2_client": ["AFTER TRN", true] ,"e147s426_client": ["ENTER", true] ,"e157s426_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV19AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV20ValorAtributoCodigo',fld:'vVALORATRIBUTOCODIGO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV19AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'}],[{av:'AV19AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV18EsquemaCodigo',fld:'vESQUEMACODIGO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18EsquemaCodigo", "vESQUEMACODIGO", 0, "int");
   this.setVCMap("AV19AtributoEsquemaCodigo", "vATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("AV20ValorAtributoCodigo", "vVALORATRIBUTOCODIGO", 0, "int");
   this.setVCMap("AV23SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV24SNExiste", "vSNEXISTE", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV30Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV29Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 426 ]= ["O2938ValorAtributoDescricao"] ;
});
gx.setParentObj(new tvaloratributo());

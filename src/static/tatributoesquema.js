/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:45:6.45
*/
gx.evt.autoSkip = false;
gx.define('tatributoesquema', false, function () {
   this.ServerClass =  "tatributoesquema" ;
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
      this.AV22SnAchouMov=gx.fn.getControlValue("vSNACHOUMOV") ;
      this.AV18AtributoEsquemaCodigo=gx.fn.getIntegerValue("vATRIBUTOESQUEMACODIGO",'.') ;
      this.AV19EsquemaCodigo=gx.fn.getIntegerValue("vESQUEMACODIGO",'.') ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV21Resp=gx.fn.getControlValue("vRESP") ;
      this.AV27Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV26Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Esquemacodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Esquemacodigo",["gx.O.A2915EsquemaCodigo", "gx.O.A2912EsquemaDescricao"],["A2912EsquemaDescricao"]);
      return true;
   }
   this.Valid_Atributoesquemacodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ATRIBUTOESQUEMACODIGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Atributoesquemadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ATRIBUTOESQUEMADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2916AtributoEsquemaDescricao) )
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
   this.Valid_Atributoesquemasncadastrado=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ATRIBUTOESQUEMASNCADASTRADO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Atributoesquemasnvencimento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ATRIBUTOESQUEMASNVENCIMENTO");
         this.AnyError  = 0;
         try {
            if ( gx.OldInteger("ATRIBUTOESQUEMACODIGO","O2921AtributoEsquemaCodigo") != this.A2921AtributoEsquemaCodigo || gx.Old("ATRIBUTOESQUEMADESCRICAO","O2916AtributoEsquemaDescricao") != this.A2916AtributoEsquemaDescricao || gx.Old("ATRIBUTOESQUEMASNCADASTRADO","O2917AtributoEsquemaSnCadastrado") != this.A2917AtributoEsquemaSnCadastrado || gx.Old("ATRIBUTOESQUEMASNVENCIMENTO","O2918AtributoEsquemaSnVencimento") != this.A2918AtributoEsquemaSnVencimento )
            {
               this.AV20SnAlterou =  "S"  ;
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e126a2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136a2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146a364_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156a364_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,24,26,30,34,37,40,42,44,53,55];
   this.GXLastCtrlId =55;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Esquemacodigo,isvalid:null,rgrid:[],fld:"ESQUEMACODIGO",gxz:"Z2915EsquemaCodigo",gxold:"O2915EsquemaCodigo",gxvar:"A2915EsquemaCodigo",ucs:[],op:[15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2915EsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2915EsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ESQUEMACODIGO",gx.O.A2915EsquemaCodigo,0)},c2v:function(){gx.O.A2915EsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ESQUEMADESCRICAO",gxz:"Z2912EsquemaDescricao",gxold:"O2912EsquemaDescricao",gxvar:"A2912EsquemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2912EsquemaDescricao=Value},v2z:function(Value){gx.O.Z2912EsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("ESQUEMADESCRICAO",gx.O.A2912EsquemaDescricao,0)},c2v:function(){gx.O.A2912EsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("ESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Atributoesquemacodigo,isvalid:null,rgrid:[],fld:"ATRIBUTOESQUEMACODIGO",gxz:"Z2921AtributoEsquemaCodigo",gxold:"O2921AtributoEsquemaCodigo",gxvar:"A2921AtributoEsquemaCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2921AtributoEsquemaCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2921AtributoEsquemaCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ATRIBUTOESQUEMACODIGO",gx.O.A2921AtributoEsquemaCodigo,0)},c2v:function(){gx.O.A2921AtributoEsquemaCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ATRIBUTOESQUEMACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Atributoesquemadescricao,isvalid:null,rgrid:[],fld:"ATRIBUTOESQUEMADESCRICAO",gxz:"Z2916AtributoEsquemaDescricao",gxold:"O2916AtributoEsquemaDescricao",gxvar:"A2916AtributoEsquemaDescricao",ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2916AtributoEsquemaDescricao=Value},v2z:function(Value){gx.O.Z2916AtributoEsquemaDescricao=Value},v2c:function(){gx.fn.setControlValue("ATRIBUTOESQUEMADESCRICAO",gx.O.A2916AtributoEsquemaDescricao,0)},c2v:function(){gx.O.A2916AtributoEsquemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("ATRIBUTOESQUEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Atributoesquemasncadastrado,isvalid:null,rgrid:[],fld:"ATRIBUTOESQUEMASNCADASTRADO",gxz:"Z2917AtributoEsquemaSnCadastrado",gxold:"O2917AtributoEsquemaSnCadastrado",gxvar:"A2917AtributoEsquemaSnCadastrado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2917AtributoEsquemaSnCadastrado=Value},v2z:function(Value){gx.O.Z2917AtributoEsquemaSnCadastrado=Value},v2c:function(){gx.fn.setCheckBoxValue("ATRIBUTOESQUEMASNCADASTRADO",gx.O.A2917AtributoEsquemaSnCadastrado,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2917AtributoEsquemaSnCadastrado=this.val()},val:function(){return gx.fn.getControlValue("ATRIBUTOESQUEMASNCADASTRADO")},nac:function(){return !(this.Gx_mode == 'INS')&&this.AV22SnAchouMov=="S"},values:['S','N']};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Atributoesquemasnvencimento,isvalid:null,rgrid:[],fld:"ATRIBUTOESQUEMASNVENCIMENTO",gxz:"Z2918AtributoEsquemaSnVencimento",gxold:"O2918AtributoEsquemaSnVencimento",gxvar:"A2918AtributoEsquemaSnVencimento",ucs:[],op:[],ip:[34,30,26,20],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2918AtributoEsquemaSnVencimento=Value},v2z:function(Value){gx.O.Z2918AtributoEsquemaSnVencimento=Value},v2c:function(){gx.fn.setCheckBoxValue("ATRIBUTOESQUEMASNVENCIMENTO",gx.O.A2918AtributoEsquemaSnVencimento,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2918AtributoEsquemaSnVencimento=this.val()},val:function(){return gx.fn.getControlValue("ATRIBUTOESQUEMASNVENCIMENTO")},nac:function(){return !(this.Gx_mode == 'INS')&&this.AV22SnAchouMov=="S"},values:['S','N']};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[37]={fld:"TABLE4",grid:0};
   GXValidFnc[40]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ATRIBUTOESQUEMAUSUARIOALT",gxz:"Z2919AtributoEsquemaUsuarioAlt",gxold:"O2919AtributoEsquemaUsuarioAlt",gxvar:"A2919AtributoEsquemaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2919AtributoEsquemaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2919AtributoEsquemaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ATRIBUTOESQUEMAUSUARIOALT",gx.O.A2919AtributoEsquemaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2919AtributoEsquemaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ATRIBUTOESQUEMAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ATRIBUTOESQUEMADATAHORAALT",gxz:"Z2920AtributoEsquemaDataHoraAlt",gxold:"O2920AtributoEsquemaDataHoraAlt",gxvar:"A2920AtributoEsquemaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2920AtributoEsquemaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2920AtributoEsquemaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ATRIBUTOESQUEMADATAHORAALT",gx.O.A2920AtributoEsquemaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2920AtributoEsquemaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ATRIBUTOESQUEMADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[53]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"BTNHELP",grid:0};
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
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.Z2917AtributoEsquemaSnCadastrado = "" ;
   this.O2917AtributoEsquemaSnCadastrado = "" ;
   this.A2918AtributoEsquemaSnVencimento = "" ;
   this.Z2918AtributoEsquemaSnVencimento = "" ;
   this.O2918AtributoEsquemaSnVencimento = "" ;
   this.A2919AtributoEsquemaUsuarioAlt = "" ;
   this.Z2919AtributoEsquemaUsuarioAlt = "" ;
   this.O2919AtributoEsquemaUsuarioAlt = "" ;
   this.A2920AtributoEsquemaDataHoraAlt = gx.date.nullDate() ;
   this.Z2920AtributoEsquemaDataHoraAlt = gx.date.nullDate() ;
   this.O2920AtributoEsquemaDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV26Pgmname = "" ;
   this.AV27Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV20SnAlterou = "" ;
   this.AV19EsquemaCodigo = 0 ;
   this.AV18AtributoEsquemaCodigo = 0 ;
   this.AV22SnAchouMov = "" ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2921AtributoEsquemaCodigo = 0 ;
   this.A2919AtributoEsquemaUsuarioAlt = "" ;
   this.A2920AtributoEsquemaDataHoraAlt = gx.date.nullDate() ;
   this.AV21Resp = "" ;
   this.A2912EsquemaDescricao = "" ;
   this.A2916AtributoEsquemaDescricao = "" ;
   this.A2917AtributoEsquemaSnCadastrado = "" ;
   this.A2918AtributoEsquemaSnVencimento = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126a2_client": ["'FECHAR'", true] ,"e136a2_client": ["AFTER TRN", true] ,"e146a364_client": ["ENTER", true] ,"e156a364_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19EsquemaCodigo',fld:'vESQUEMACODIGO'},{av:'AV18AtributoEsquemaCodigo',fld:'vATRIBUTOESQUEMACODIGO'},{av:'AV22SnAchouMov',fld:'vSNACHOUMOV'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV19EsquemaCodigo',fld:'vESQUEMACODIGO'}],[{av:'AV19EsquemaCodigo',fld:'vESQUEMACODIGO'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV22SnAchouMov", "vSNACHOUMOV", 0, "char");
   this.setVCMap("AV18AtributoEsquemaCodigo", "vATRIBUTOESQUEMACODIGO", 0, "int");
   this.setVCMap("AV19EsquemaCodigo", "vESQUEMACODIGO", 0, "int");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV21Resp", "vRESP", 0, "char");
   this.setVCMap("AV27Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV26Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 364 ]= ["O2918AtributoEsquemaSnVencimento","O2917AtributoEsquemaSnCadastrado","O2916AtributoEsquemaDescricao","O2921AtributoEsquemaCodigo"] ;
});
gx.setParentObj(new tatributoesquema());

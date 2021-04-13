/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:10:18.25
*/
gx.evt.autoSkip = false;
gx.define('tservicoremessa', false, function () {
   this.ServerClass =  "tservicoremessa" ;
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
      this.AV18ServicoRemessaTipo=gx.fn.getControlValue("vSERVICOREMESSATIPO") ;
      this.AV19ServicoRemessaId=gx.fn.getIntegerValue("vSERVICOREMESSAID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5476ServicoRemessaEmpresaId=gx.fn.getControlValue("SERVICOREMESSAEMPRESAID") ;
      this.AV20SNAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Servicoremessatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SERVICOREMESSATIPO");
         this.AnyError  = 0;
         if ( (""==this.A5477ServicoRemessaTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Registro");
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
   this.Valid_Servicoremessaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SERVICOREMESSAID");
         this.AnyError  = 0;
         if ( (0==this.A5478ServicoRemessaId) )
         {
            try {
               gxballoon.setError("Informe o Código");
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
   this.Valid_Servicoremessadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SERVICOREMESSADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A5473ServicoRemessaDescricao) )
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
   this.e128s2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138s2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148s472_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158s472_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,31,33,35,44,46];
   this.GXLastCtrlId =46;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Servicoremessatipo,isvalid:null,rgrid:[],fld:"SERVICOREMESSATIPO",gxz:"Z5477ServicoRemessaTipo",gxold:"O5477ServicoRemessaTipo",gxvar:"A5477ServicoRemessaTipo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5477ServicoRemessaTipo=Value},v2z:function(Value){gx.O.Z5477ServicoRemessaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("SERVICOREMESSATIPO",gx.O.A5477ServicoRemessaTipo)},c2v:function(){gx.O.A5477ServicoRemessaTipo=this.val()},val:function(){return gx.fn.getControlValue("SERVICOREMESSATIPO")},nac:function(){return !(""==this.AV18ServicoRemessaTipo)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Servicoremessaid,isvalid:null,rgrid:[],fld:"SERVICOREMESSAID",gxz:"Z5478ServicoRemessaId",gxold:"O5478ServicoRemessaId",gxvar:"A5478ServicoRemessaId",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5478ServicoRemessaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5478ServicoRemessaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SERVICOREMESSAID",gx.O.A5478ServicoRemessaId,0)},c2v:function(){gx.O.A5478ServicoRemessaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SERVICOREMESSAID",'.')},nac:function(){return !(0==this.AV19ServicoRemessaId)}};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Servicoremessadescricao,isvalid:null,rgrid:[],fld:"SERVICOREMESSADESCRICAO",gxz:"Z5473ServicoRemessaDescricao",gxold:"O5473ServicoRemessaDescricao",gxvar:"A5473ServicoRemessaDescricao",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5473ServicoRemessaDescricao=Value},v2z:function(Value){gx.O.Z5473ServicoRemessaDescricao=Value},v2c:function(){gx.fn.setControlValue("SERVICOREMESSADESCRICAO",gx.O.A5473ServicoRemessaDescricao,0)},c2v:function(){gx.O.A5473ServicoRemessaDescricao=this.val()},val:function(){return gx.fn.getControlValue("SERVICOREMESSADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TABLE21",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOREMESSAUSUARIOALT",gxz:"Z5474ServicoRemessaUsuarioAlt",gxold:"O5474ServicoRemessaUsuarioAlt",gxvar:"A5474ServicoRemessaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5474ServicoRemessaUsuarioAlt=Value},v2z:function(Value){gx.O.Z5474ServicoRemessaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("SERVICOREMESSAUSUARIOALT",gx.O.A5474ServicoRemessaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5474ServicoRemessaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("SERVICOREMESSAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SERVICOREMESSADATAHORAALT",gxz:"Z5475ServicoRemessaDataHoraAlt",gxold:"O5475ServicoRemessaDataHoraAlt",gxvar:"A5475ServicoRemessaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5475ServicoRemessaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5475ServicoRemessaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("SERVICOREMESSADATAHORAALT",gx.O.A5475ServicoRemessaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5475ServicoRemessaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("SERVICOREMESSADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={fld:"BTNHELP",grid:0};
   this.A5477ServicoRemessaTipo = "" ;
   this.Z5477ServicoRemessaTipo = "" ;
   this.O5477ServicoRemessaTipo = "" ;
   this.A5478ServicoRemessaId = 0 ;
   this.Z5478ServicoRemessaId = 0 ;
   this.O5478ServicoRemessaId = 0 ;
   this.A5473ServicoRemessaDescricao = "" ;
   this.Z5473ServicoRemessaDescricao = "" ;
   this.O5473ServicoRemessaDescricao = "" ;
   this.A5474ServicoRemessaUsuarioAlt = "" ;
   this.Z5474ServicoRemessaUsuarioAlt = "" ;
   this.O5474ServicoRemessaUsuarioAlt = "" ;
   this.A5475ServicoRemessaDataHoraAlt = gx.date.nullDate() ;
   this.Z5475ServicoRemessaDataHoraAlt = gx.date.nullDate() ;
   this.O5475ServicoRemessaDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV25Pgmname = "" ;
   this.AV26Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20SNAlterou = "" ;
   this.AV18ServicoRemessaTipo = "" ;
   this.AV19ServicoRemessaId = 0 ;
   this.A5476ServicoRemessaEmpresaId = "" ;
   this.A5477ServicoRemessaTipo = "" ;
   this.A5478ServicoRemessaId = 0 ;
   this.A5474ServicoRemessaUsuarioAlt = "" ;
   this.A5475ServicoRemessaDataHoraAlt = gx.date.nullDate() ;
   this.A5473ServicoRemessaDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e128s2_client": ["'FECHAR'", true] ,"e138s2_client": ["AFTER TRN", true] ,"e148s472_client": ["ENTER", true] ,"e158s472_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ServicoRemessaTipo',fld:'vSERVICOREMESSATIPO'},{av:'AV19ServicoRemessaId',fld:'vSERVICOREMESSAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18ServicoRemessaTipo", "vSERVICOREMESSATIPO", 0, "char");
   this.setVCMap("AV19ServicoRemessaId", "vSERVICOREMESSAID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5476ServicoRemessaEmpresaId", "SERVICOREMESSAEMPRESAID", 0, "char");
   this.setVCMap("AV20SNAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 472 ]= ["O5473ServicoRemessaDescricao"] ;
});
gx.setParentObj(new tservicoremessa());

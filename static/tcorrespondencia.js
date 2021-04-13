/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:38:52.86
*/
gx.evt.autoSkip = false;
gx.define('tcorrespondencia', false, function () {
   this.ServerClass =  "tcorrespondencia" ;
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
      this.AV18CorrespondenciaAno=gx.fn.getIntegerValue("vCORRESPONDENCIAANO",'.') ;
      this.AV19CorrespondenciaProtocolo=gx.fn.getIntegerValue("vCORRESPONDENCIAPROTOCOLO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2271CorrespondenciaEmpresaId=gx.fn.getControlValue("CORRESPONDENCIAEMPRESAID") ;
      this.AV17EmpresaDepartamento=gx.fn.getControlValue("vEMPRESADEPARTAMENTO") ;
      this.A2247DepartamentoEmpresaId=gx.fn.getControlValue("DEPARTAMENTOEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV25SnProcessoConta=gx.fn.getControlValue("vSNPROCESSOCONTA") ;
      this.AV37Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Correspondenciaano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CORRESPONDENCIAANO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Correspondenciaprotocolo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CORRESPONDENCIAPROTOCOLO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Correspondenciadatahora=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CORRESPONDENCIADATAHORA");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2277CorrespondenciaDataHora)==0) )
         {
            try {
               gxballoon.setError("Informe a Data/Hora do Recebimento");
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
   this.Valid_Correspondenciaremetente=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CORRESPONDENCIAREMETENTE");
         this.AnyError  = 0;
         if ( (""==this.A2274CorrespondenciaRemetente) )
         {
            try {
               gxballoon.setError("Informe o Remetente");
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
   this.Valid_Correspondenciaassunto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CORRESPONDENCIAASSUNTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Correspondenciaidentificacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CORRESPONDENCIAIDENTIFICACAO");
         this.AnyError  = 0;
         if ( (""==this.A2275CorrespondenciaIdentificacao) )
         {
            try {
               gxballoon.setError("Informe a Identificação");
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
   this.Valid_Departamentocodigo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DEPARTAMENTOCODIGO");
         this.AnyError  = 0;
         if ( (""==this.A2248DepartamentoCodigo) )
         {
            try {
               gxballoon.setError("Informe o Departamento");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( gx.text.substring( this.A2248DepartamentoCodigo, 1, 2) != "01" && this.AV25SnProcessoConta == "S" && ! (this.Gx_mode == 'DLT') )
         {
            try {
               gxballoon.setError("Departamento Inválido");
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
   this.e124a2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e134a2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e144a239_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e154a239_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,42,44,47,49,52,54,57,59,60,63,66,68,70,79,80,82,84];
   this.GXLastCtrlId =84;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Correspondenciaano,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAANO",gxz:"Z2272CorrespondenciaAno",gxold:"O2272CorrespondenciaAno",gxvar:"A2272CorrespondenciaAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2272CorrespondenciaAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2272CorrespondenciaAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CORRESPONDENCIAANO",gx.O.A2272CorrespondenciaAno,0)},c2v:function(){gx.O.A2272CorrespondenciaAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CORRESPONDENCIAANO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Correspondenciaprotocolo,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAPROTOCOLO",gxz:"Z2273CorrespondenciaProtocolo",gxold:"O2273CorrespondenciaProtocolo",gxvar:"A2273CorrespondenciaProtocolo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2273CorrespondenciaProtocolo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2273CorrespondenciaProtocolo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CORRESPONDENCIAPROTOCOLO",gx.O.A2273CorrespondenciaProtocolo,0)},c2v:function(){gx.O.A2273CorrespondenciaProtocolo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CORRESPONDENCIAPROTOCOLO",'.')},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIAPROTOANT",gxz:"ZV23CorrespondenciaProtoAnt",gxold:"OV23CorrespondenciaProtoAnt",gxvar:"AV23CorrespondenciaProtoAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23CorrespondenciaProtoAnt=Value},v2z:function(Value){gx.O.ZV23CorrespondenciaProtoAnt=Value},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAPROTOANT",gx.O.AV23CorrespondenciaProtoAnt,0)},c2v:function(){gx.O.AV23CorrespondenciaProtoAnt=this.val()},val:function(){return gx.fn.getControlValue("vCORRESPONDENCIAPROTOANT")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCORRESPONDENCIAPROTOCOLOANT",gxz:"ZV21CorrespondenciaProtocoloAnt",gxold:"OV21CorrespondenciaProtocoloAnt",gxvar:"AV21CorrespondenciaProtocoloAnt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21CorrespondenciaProtocoloAnt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21CorrespondenciaProtocoloAnt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCORRESPONDENCIAPROTOCOLOANT",gx.O.AV21CorrespondenciaProtocoloAnt,0)},c2v:function(){gx.O.AV21CorrespondenciaProtocoloAnt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCORRESPONDENCIAPROTOCOLOANT",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Correspondenciadatahora,isvalid:null,rgrid:[],fld:"CORRESPONDENCIADATAHORA",gxz:"Z2277CorrespondenciaDataHora",gxold:"O2277CorrespondenciaDataHora",gxvar:"A2277CorrespondenciaDataHora",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2277CorrespondenciaDataHora=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2277CorrespondenciaDataHora=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CORRESPONDENCIADATAHORA",gx.O.A2277CorrespondenciaDataHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2277CorrespondenciaDataHora=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CORRESPONDENCIADATAHORA")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={fld:"TABLE4",grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Correspondenciaremetente,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAREMETENTE",gxz:"Z2274CorrespondenciaRemetente",gxold:"O2274CorrespondenciaRemetente",gxvar:"A2274CorrespondenciaRemetente",ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2274CorrespondenciaRemetente=Value},v2z:function(Value){gx.O.Z2274CorrespondenciaRemetente=Value},v2c:function(){gx.fn.setControlValue("CORRESPONDENCIAREMETENTE",gx.O.A2274CorrespondenciaRemetente,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2274CorrespondenciaRemetente=this.val()},val:function(){return gx.fn.getControlValue("CORRESPONDENCIAREMETENTE")},nac:gx.falseFn};
   this.declareDomainHdlr( 38 , function() {
   });
   GXValidFnc[40]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMETENTE",gxz:"ZV30Remetente",gxold:"OV30Remetente",gxvar:"AV30Remetente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30Remetente=Value},v2z:function(Value){gx.O.ZV30Remetente=Value},v2c:function(){gx.fn.setControlValue("vREMETENTE",gx.O.AV30Remetente,0)},c2v:function(){gx.O.AV30Remetente=this.val()},val:function(){return gx.fn.getControlValue("vREMETENTE")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTO",gxz:"ZV34ContaPagRecDtVencimento",gxold:"OV34ContaPagRecDtVencimento",gxvar:"AV34ContaPagRecDtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV34ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTO",gx.O.AV34ContaPagRecDtVencimento,0)},c2v:function(){gx.O.AV34ContaPagRecDtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Correspondenciaassunto,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAASSUNTO",gxz:"Z2276CorrespondenciaAssunto",gxold:"O2276CorrespondenciaAssunto",gxvar:"A2276CorrespondenciaAssunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2276CorrespondenciaAssunto=Value},v2z:function(Value){gx.O.Z2276CorrespondenciaAssunto=Value},v2c:function(){gx.fn.setControlValue("CORRESPONDENCIAASSUNTO",gx.O.A2276CorrespondenciaAssunto,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2276CorrespondenciaAssunto=this.val()},val:function(){return gx.fn.getControlValue("CORRESPONDENCIAASSUNTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[52]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Correspondenciaidentificacao,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAIDENTIFICACAO",gxz:"Z2275CorrespondenciaIdentificacao",gxold:"O2275CorrespondenciaIdentificacao",gxvar:"A2275CorrespondenciaIdentificacao",ucs:[],op:[54],ip:[54],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2275CorrespondenciaIdentificacao=Value},v2z:function(Value){gx.O.Z2275CorrespondenciaIdentificacao=Value},v2c:function(){gx.fn.setControlValue("CORRESPONDENCIAIDENTIFICACAO",gx.O.A2275CorrespondenciaIdentificacao,0)},c2v:function(){gx.O.A2275CorrespondenciaIdentificacao=this.val()},val:function(){return gx.fn.getControlValue("CORRESPONDENCIAIDENTIFICACAO")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Departamentocodigo,isvalid:null,rgrid:[],fld:"DEPARTAMENTOCODIGO",gxz:"Z2248DepartamentoCodigo",gxold:"O2248DepartamentoCodigo",gxvar:"A2248DepartamentoCodigo",ucs:[],op:[59],ip:[59],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2248DepartamentoCodigo=Value},v2z:function(Value){gx.O.Z2248DepartamentoCodigo=Value},v2c:function(){gx.fn.setControlValue("DEPARTAMENTOCODIGO",gx.O.A2248DepartamentoCodigo,0)},c2v:function(){gx.O.A2248DepartamentoCodigo=this.val()},val:function(){return gx.fn.getControlValue("DEPARTAMENTOCODIGO")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DEPARTAMENTONOME",gxz:"Z2249DepartamentoNome",gxold:"O2249DepartamentoNome",gxvar:"A2249DepartamentoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2249DepartamentoNome=Value},v2z:function(Value){gx.O.Z2249DepartamentoNome=Value},v2c:function(){gx.fn.setControlValue("DEPARTAMENTONOME",gx.O.A2249DepartamentoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2249DepartamentoNome=this.val()},val:function(){return gx.fn.getControlValue("DEPARTAMENTONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TABLE21",grid:0};
   GXValidFnc[66]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CORRESPONDENCIAUSUARIOALT",gxz:"Z2278CorrespondenciaUsuarioAlt",gxold:"O2278CorrespondenciaUsuarioAlt",gxvar:"A2278CorrespondenciaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2278CorrespondenciaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2278CorrespondenciaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CORRESPONDENCIAUSUARIOALT",gx.O.A2278CorrespondenciaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2278CorrespondenciaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CORRESPONDENCIAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[70]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CORRESPONDENCIADATAHORAALT",gxz:"Z2279CorrespondenciaDataHoraAlt",gxold:"O2279CorrespondenciaDataHoraAlt",gxvar:"A2279CorrespondenciaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2279CorrespondenciaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2279CorrespondenciaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CORRESPONDENCIADATAHORAALT",gx.O.A2279CorrespondenciaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2279CorrespondenciaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CORRESPONDENCIADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[79]={fld:"JS", format:2,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV24AcessoSistemaSequencia",gxold:"OV24AcessoSistemaSequencia",gxvar:"AV24AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV24AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV24AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[82]={fld:"BTNHELP",grid:0};
   GXValidFnc[84]={fld:"PROMPT_2248",grid:239};
   this.A2272CorrespondenciaAno = 0 ;
   this.Z2272CorrespondenciaAno = 0 ;
   this.O2272CorrespondenciaAno = 0 ;
   this.A2273CorrespondenciaProtocolo = 0 ;
   this.Z2273CorrespondenciaProtocolo = 0 ;
   this.O2273CorrespondenciaProtocolo = 0 ;
   this.AV23CorrespondenciaProtoAnt = "" ;
   this.ZV23CorrespondenciaProtoAnt = "" ;
   this.OV23CorrespondenciaProtoAnt = "" ;
   this.AV21CorrespondenciaProtocoloAnt = 0 ;
   this.ZV21CorrespondenciaProtocoloAnt = 0 ;
   this.OV21CorrespondenciaProtocoloAnt = 0 ;
   this.A2277CorrespondenciaDataHora = gx.date.nullDate() ;
   this.Z2277CorrespondenciaDataHora = gx.date.nullDate() ;
   this.O2277CorrespondenciaDataHora = gx.date.nullDate() ;
   this.A2274CorrespondenciaRemetente = "" ;
   this.Z2274CorrespondenciaRemetente = "" ;
   this.O2274CorrespondenciaRemetente = "" ;
   this.AV30Remetente = "" ;
   this.ZV30Remetente = "" ;
   this.OV30Remetente = "" ;
   this.AV34ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.ZV34ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.OV34ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.A2276CorrespondenciaAssunto = "" ;
   this.Z2276CorrespondenciaAssunto = "" ;
   this.O2276CorrespondenciaAssunto = "" ;
   this.A2275CorrespondenciaIdentificacao = "" ;
   this.Z2275CorrespondenciaIdentificacao = "" ;
   this.O2275CorrespondenciaIdentificacao = "" ;
   this.A2248DepartamentoCodigo = "" ;
   this.Z2248DepartamentoCodigo = "" ;
   this.O2248DepartamentoCodigo = "" ;
   this.A2249DepartamentoNome = "" ;
   this.Z2249DepartamentoNome = "" ;
   this.O2249DepartamentoNome = "" ;
   this.A2278CorrespondenciaUsuarioAlt = "" ;
   this.Z2278CorrespondenciaUsuarioAlt = "" ;
   this.O2278CorrespondenciaUsuarioAlt = "" ;
   this.A2279CorrespondenciaDataHoraAlt = gx.date.nullDate() ;
   this.Z2279CorrespondenciaDataHoraAlt = gx.date.nullDate() ;
   this.O2279CorrespondenciaDataHoraAlt = gx.date.nullDate() ;
   this.AV24AcessoSistemaSequencia = 0 ;
   this.ZV24AcessoSistemaSequencia = 0 ;
   this.OV24AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV36Pgmname = "" ;
   this.AV37Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV24AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV17EmpresaDepartamento = "" ;
   this.AV25SnProcessoConta = "" ;
   this.AV22TemMascara = "" ;
   this.A2272CorrespondenciaAno = 0 ;
   this.AV21CorrespondenciaProtocoloAnt = 0 ;
   this.AV18CorrespondenciaAno = 0 ;
   this.AV19CorrespondenciaProtocolo = 0 ;
   this.AV30Remetente = "" ;
   this.AV34ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.AV33SnExiste = "" ;
   this.AV23CorrespondenciaProtoAnt = "" ;
   this.AV20SnAlterou = "" ;
   this.A2271CorrespondenciaEmpresaId = "" ;
   this.A2273CorrespondenciaProtocolo = 0 ;
   this.A2247DepartamentoEmpresaId = "" ;
   this.A2278CorrespondenciaUsuarioAlt = "" ;
   this.A2279CorrespondenciaDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A2274CorrespondenciaRemetente = "" ;
   this.A2275CorrespondenciaIdentificacao = "" ;
   this.A2276CorrespondenciaAssunto = "" ;
   this.A2277CorrespondenciaDataHora = gx.date.nullDate() ;
   this.A2248DepartamentoCodigo = "" ;
   this.A2249DepartamentoNome = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e124a2_client": ["'FECHAR'", true] ,"e134a2_client": ["AFTER TRN", true] ,"e144a239_client": ["ENTER", true] ,"e154a239_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18CorrespondenciaAno',fld:'vCORRESPONDENCIAANO'},{av:'AV19CorrespondenciaProtocolo',fld:'vCORRESPONDENCIAPROTOCOLO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV24AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV24AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_2248", [59]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18CorrespondenciaAno", "vCORRESPONDENCIAANO", 0, "int");
   this.setVCMap("AV19CorrespondenciaProtocolo", "vCORRESPONDENCIAPROTOCOLO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2271CorrespondenciaEmpresaId", "CORRESPONDENCIAEMPRESAID", 0, "char");
   this.setVCMap("AV17EmpresaDepartamento", "vEMPRESADEPARTAMENTO", 0, "char");
   this.setVCMap("A2247DepartamentoEmpresaId", "DEPARTAMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV25SnProcessoConta", "vSNPROCESSOCONTA", 0, "char");
   this.setVCMap("AV37Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 239 ]= ["O2248DepartamentoCodigo","O2276CorrespondenciaAssunto","O2275CorrespondenciaIdentificacao","O2274CorrespondenciaRemetente","O2277CorrespondenciaDataHora"] ;
});
gx.setParentObj(new tcorrespondencia());

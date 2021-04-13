/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:42:22.18
*/
gx.evt.autoSkip = false;
gx.define('tremessaretornoitem', false, function () {
   this.ServerClass =  "tremessaretornoitem" ;
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
      this.AV18RemessaRetornoId=gx.fn.getIntegerValue("vREMESSARETORNOID",'.') ;
      this.AV19RemessaRetornoItemSequencia=gx.fn.getIntegerValue("vREMESSARETORNOITEMSEQUENCIA",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2784RemessaRetornoEmpresaId=gx.fn.getControlValue("REMESSARETORNOEMPRESAID") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV27MsgmErro=gx.fn.getControlValue("vMSGMERRO") ;
      this.A2792RemessaRetornoTipo=gx.fn.getControlValue("REMESSARETORNOTIPO") ;
      this.AV23RemessaRetornoTamanho=gx.fn.getIntegerValue("vREMESSARETORNOTAMANHO",'.') ;
      this.AV26MsgRetorno=gx.fn.getControlValue("vMSGRETORNO") ;
      this.AV35Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV34Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV28RemessaRetornoTipo=gx.fn.getControlValue("vREMESSARETORNOTIPO") ;
   };
   this.Valid_Remessaretornoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Remessaretornoid",["gx.O.A2784RemessaRetornoEmpresaId", "gx.O.A2785RemessaRetornoId", "gx.O.A2792RemessaRetornoTipo"],["A2792RemessaRetornoTipo"]);
      return true;
   }
   this.Valid_Remessaretornoitemsequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOITEMSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Remessaretornoitemtipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOITEMTIPO");
         this.AnyError  = 0;
         if ( (""==this.A2799RemessaRetornoItemTipo) )
         {
            try {
               gxballoon.setError("Informe o Tipo");
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
   this.Valid_Remessaretornoitemtiporegistro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOITEMTIPOREGISTRO");
         this.AnyError  = 0;
         if ( (""==this.A2910RemessaRetornoItemTipoRegistro) && this.A2799RemessaRetornoItemTipo == "3" && this.A2792RemessaRetornoTipo != "2" )
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
   this.Valid_Remessaretornoitemdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOITEMDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2800RemessaRetornoItemDescricao) )
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
   this.Valid_Remessaretornoitemconteudo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REMESSARETORNOITEMCONTEUDO");
         this.AnyError  = 0;
         if ( (""==this.A2801RemessaRetornoItemConteudo) )
         {
            try {
               gxballoon.setError("Informe o Conteúdo");
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
   this.Validv_Armazenatamanho=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vARMAZENATAMANHO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12532_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13532_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14532_client=function()
   {
      this.executeServerEvent("'CONTEUDO'", false, null, false, false);
   };
   this.e1553292_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1653292_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,21,23,26,28,31,33,36,38,41,43,46,49,51,53,60,63,64,66];
   this.GXLastCtrlId =66;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoid,isvalid:null,rgrid:[],fld:"REMESSARETORNOID",gxz:"Z2785RemessaRetornoId",gxold:"O2785RemessaRetornoId",gxvar:"A2785RemessaRetornoId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2785RemessaRetornoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2785RemessaRetornoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOID",gx.O.A2785RemessaRetornoId,0)},c2v:function(){gx.O.A2785RemessaRetornoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vREMESSARETORNODESCRICAO",gxz:"ZV21RemessaRetornoDescricao",gxold:"OV21RemessaRetornoDescricao",gxvar:"AV21RemessaRetornoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21RemessaRetornoDescricao=Value},v2z:function(Value){gx.O.ZV21RemessaRetornoDescricao=Value},v2c:function(){gx.fn.setControlValue("vREMESSARETORNODESCRICAO",gx.O.AV21RemessaRetornoDescricao,0)},c2v:function(){gx.O.AV21RemessaRetornoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vREMESSARETORNODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoitemsequencia,isvalid:null,rgrid:[],fld:"REMESSARETORNOITEMSEQUENCIA",gxz:"Z2798RemessaRetornoItemSequencia",gxold:"O2798RemessaRetornoItemSequencia",gxvar:"A2798RemessaRetornoItemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2798RemessaRetornoItemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2798RemessaRetornoItemSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOITEMSEQUENCIA",gx.O.A2798RemessaRetornoItemSequencia,0)},c2v:function(){gx.O.A2798RemessaRetornoItemSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REMESSARETORNOITEMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoitemtipo,isvalid:null,rgrid:[],fld:"REMESSARETORNOITEMTIPO",gxz:"Z2799RemessaRetornoItemTipo",gxold:"O2799RemessaRetornoItemTipo",gxvar:"A2799RemessaRetornoItemTipo",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2799RemessaRetornoItemTipo=Value},v2z:function(Value){gx.O.Z2799RemessaRetornoItemTipo=Value},v2c:function(){gx.fn.setComboBoxValue("REMESSARETORNOITEMTIPO",gx.O.A2799RemessaRetornoItemTipo)},c2v:function(){gx.O.A2799RemessaRetornoItemTipo=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOITEMTIPO")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoitemtiporegistro,isvalid:null,rgrid:[],fld:"REMESSARETORNOITEMTIPOREGISTRO",gxz:"Z2910RemessaRetornoItemTipoRegistro",gxold:"O2910RemessaRetornoItemTipoRegistro",gxvar:"A2910RemessaRetornoItemTipoRegistro",ucs:[],op:[28,33],ip:[28,33],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2910RemessaRetornoItemTipoRegistro=Value},v2z:function(Value){gx.O.Z2910RemessaRetornoItemTipoRegistro=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOITEMTIPOREGISTRO",gx.O.A2910RemessaRetornoItemTipoRegistro,0)},c2v:function(){gx.O.A2910RemessaRetornoItemTipoRegistro=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOITEMTIPOREGISTRO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoitemdescricao,isvalid:null,rgrid:[],fld:"REMESSARETORNOITEMDESCRICAO",gxz:"Z2800RemessaRetornoItemDescricao",gxold:"O2800RemessaRetornoItemDescricao",gxvar:"A2800RemessaRetornoItemDescricao",ucs:[],op:[38],ip:[38],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2800RemessaRetornoItemDescricao=Value},v2z:function(Value){gx.O.Z2800RemessaRetornoItemDescricao=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOITEMDESCRICAO",gx.O.A2800RemessaRetornoItemDescricao,0)},c2v:function(){gx.O.A2800RemessaRetornoItemDescricao=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOITEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Remessaretornoitemconteudo,isvalid:null,rgrid:[],fld:"REMESSARETORNOITEMCONTEUDO",gxz:"Z2801RemessaRetornoItemConteudo",gxold:"O2801RemessaRetornoItemConteudo",gxvar:"A2801RemessaRetornoItemConteudo",ucs:[],op:[43],ip:[43],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2801RemessaRetornoItemConteudo=Value},v2z:function(Value){gx.O.Z2801RemessaRetornoItemConteudo=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOITEMCONTEUDO",gx.O.A2801RemessaRetornoItemConteudo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2801RemessaRetornoItemConteudo=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOITEMCONTEUDO")},nac:gx.falseFn};
   this.declareDomainHdlr( 43 , function() {
   });
   GXValidFnc[46]={fld:"TABLE4",grid:0};
   GXValidFnc[49]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOITEMUSUARIOALT",gxz:"Z2802RemessaRetornoItemUsuarioAlt",gxold:"O2802RemessaRetornoItemUsuarioAlt",gxvar:"A2802RemessaRetornoItemUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2802RemessaRetornoItemUsuarioAlt=Value},v2z:function(Value){gx.O.Z2802RemessaRetornoItemUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("REMESSARETORNOITEMUSUARIOALT",gx.O.A2802RemessaRetornoItemUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2802RemessaRetornoItemUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("REMESSARETORNOITEMUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[53]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"REMESSARETORNOITEMDATAHORAALT",gxz:"Z2803RemessaRetornoItemDataHoraAlt",gxold:"O2803RemessaRetornoItemDataHoraAlt",gxvar:"A2803RemessaRetornoItemDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2803RemessaRetornoItemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2803RemessaRetornoItemDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("REMESSARETORNOITEMDATAHORAALT",gx.O.A2803RemessaRetornoItemDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2803RemessaRetornoItemDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("REMESSARETORNOITEMDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Armazenatamanho,isvalid:null,rgrid:[],fld:"vARMAZENATAMANHO",gxz:"ZV25ArmazenaTamanho",gxold:"OV25ArmazenaTamanho",gxvar:"AV25ArmazenaTamanho",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ArmazenaTamanho=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25ArmazenaTamanho=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vARMAZENATAMANHO",gx.O.AV25ArmazenaTamanho,0)},c2v:function(){gx.O.AV25ArmazenaTamanho=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vARMAZENATAMANHO",'.')},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[64]={fld:"JSMOD", format:2,grid:0};
   GXValidFnc[66]={fld:"BTNHELP",grid:0};
   this.A2785RemessaRetornoId = 0 ;
   this.Z2785RemessaRetornoId = 0 ;
   this.O2785RemessaRetornoId = 0 ;
   this.AV21RemessaRetornoDescricao = "" ;
   this.ZV21RemessaRetornoDescricao = "" ;
   this.OV21RemessaRetornoDescricao = "" ;
   this.A2798RemessaRetornoItemSequencia = 0 ;
   this.Z2798RemessaRetornoItemSequencia = 0 ;
   this.O2798RemessaRetornoItemSequencia = 0 ;
   this.A2799RemessaRetornoItemTipo = "" ;
   this.Z2799RemessaRetornoItemTipo = "" ;
   this.O2799RemessaRetornoItemTipo = "" ;
   this.A2910RemessaRetornoItemTipoRegistro = "" ;
   this.Z2910RemessaRetornoItemTipoRegistro = "" ;
   this.O2910RemessaRetornoItemTipoRegistro = "" ;
   this.A2800RemessaRetornoItemDescricao = "" ;
   this.Z2800RemessaRetornoItemDescricao = "" ;
   this.O2800RemessaRetornoItemDescricao = "" ;
   this.A2801RemessaRetornoItemConteudo = "" ;
   this.Z2801RemessaRetornoItemConteudo = "" ;
   this.O2801RemessaRetornoItemConteudo = "" ;
   this.A2802RemessaRetornoItemUsuarioAlt = "" ;
   this.Z2802RemessaRetornoItemUsuarioAlt = "" ;
   this.O2802RemessaRetornoItemUsuarioAlt = "" ;
   this.A2803RemessaRetornoItemDataHoraAlt = gx.date.nullDate() ;
   this.Z2803RemessaRetornoItemDataHoraAlt = gx.date.nullDate() ;
   this.O2803RemessaRetornoItemDataHoraAlt = gx.date.nullDate() ;
   this.AV25ArmazenaTamanho = 0 ;
   this.ZV25ArmazenaTamanho = 0 ;
   this.OV25ArmazenaTamanho = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV34Pgmname = "" ;
   this.AV35Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12EmpresaPadrao = "" ;
   this.AV27MsgmErro = "" ;
   this.AV26MsgRetorno = "" ;
   this.AV25ArmazenaTamanho = 0 ;
   this.AV18RemessaRetornoId = 0 ;
   this.AV21RemessaRetornoDescricao = "" ;
   this.AV19RemessaRetornoItemSequencia = 0 ;
   this.AV23RemessaRetornoTamanho = 0 ;
   this.AV28RemessaRetornoTipo = "" ;
   this.A2784RemessaRetornoEmpresaId = "" ;
   this.A2785RemessaRetornoId = 0 ;
   this.A2798RemessaRetornoItemSequencia = 0 ;
   this.AV20SnAlterou = "" ;
   this.A2792RemessaRetornoTipo = "" ;
   this.A2799RemessaRetornoItemTipo = "" ;
   this.A2910RemessaRetornoItemTipoRegistro = "" ;
   this.A2800RemessaRetornoItemDescricao = "" ;
   this.A2801RemessaRetornoItemConteudo = "" ;
   this.A2802RemessaRetornoItemUsuarioAlt = "" ;
   this.A2803RemessaRetornoItemDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e12532_client": ["'FECHAR'", true] ,"e13532_client": ["AFTER TRN", true] ,"e14532_client": ["'CONTEUDO'", true] ,"e1553292_client": ["ENTER", true] ,"e1653292_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV21RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV19RemessaRetornoItemSequencia',fld:'vREMESSARETORNOITEMSEQUENCIA'},{av:'AV23RemessaRetornoTamanho',fld:'vREMESSARETORNOTAMANHO'},{av:'AV28RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'AV21RemessaRetornoDescricao',fld:'vREMESSARETORNODESCRICAO'},{av:'AV23RemessaRetornoTamanho',fld:'vREMESSARETORNOTAMANHO'},{av:'AV28RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["'CONTEUDO'"] = [[{av:'A2799RemessaRetornoItemTipo',fld:'REMESSARETORNOITEMTIPO'},{av:'A2800RemessaRetornoItemDescricao',fld:'REMESSARETORNOITEMDESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV18RemessaRetornoId',fld:'vREMESSARETORNOID'},{av:'A2798RemessaRetornoItemSequencia',fld:'REMESSARETORNOITEMSEQUENCIA'},{av:'Gx_mode',fld:'vMODE'},{av:'AV19RemessaRetornoItemSequencia',fld:'vREMESSARETORNOITEMSEQUENCIA'},{av:'A2801RemessaRetornoItemConteudo',fld:'REMESSARETORNOITEMCONTEUDO'},{av:'AV28RemessaRetornoTipo',fld:'vREMESSARETORNOTIPO'}],[{av:'AV27MsgmErro',fld:'vMSGMERRO'},{av:'AV22SdtRemessaRetorno',fld:'vSDTREMESSARETORNO'},{av:'AV25ArmazenaTamanho',fld:'vARMAZENATAMANHO'},{av:'A2801RemessaRetornoItemConteudo',fld:'REMESSARETORNOITEMCONTEUDO'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18RemessaRetornoId", "vREMESSARETORNOID", 0, "int");
   this.setVCMap("AV19RemessaRetornoItemSequencia", "vREMESSARETORNOITEMSEQUENCIA", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2784RemessaRetornoEmpresaId", "REMESSARETORNOEMPRESAID", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV27MsgmErro", "vMSGMERRO", 0, "svchar");
   this.setVCMap("A2792RemessaRetornoTipo", "REMESSARETORNOTIPO", 0, "char");
   this.setVCMap("AV23RemessaRetornoTamanho", "vREMESSARETORNOTAMANHO", 0, "int");
   this.setVCMap("AV26MsgRetorno", "vMSGRETORNO", 0, "svchar");
   this.setVCMap("AV35Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV34Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV28RemessaRetornoTipo", "vREMESSARETORNOTIPO", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 292 ]= ["O2801RemessaRetornoItemConteudo","O2800RemessaRetornoItemDescricao","O2799RemessaRetornoItemTipo"] ;
});
gx.setParentObj(new tremessaretornoitem());

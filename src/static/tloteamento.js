/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:43:52.39
*/
gx.evt.autoSkip = false;
gx.define('tloteamento', false, function () {
   this.ServerClass =  "tloteamento" ;
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
      this.AV20LoteamentoId=gx.fn.getIntegerValue("vLOTEAMENTOID",'.') ;
      this.AV18LoteamentoEmpresaId=gx.fn.getControlValue("vLOTEAMENTOEMPRESAID") ;
      this.A5290LoteamentoEmpresaId=gx.fn.getControlValue("LOTEAMENTOEMPRESAID") ;
      this.AV21LoteamentoModContratoEmpId=gx.fn.getControlValue("vLOTEAMENTOMODCONTRATOEMPID") ;
      this.A5320LoteamentoModContratoEmpId=gx.fn.getControlValue("LOTEAMENTOMODCONTRATOEMPID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV27MsgLotEmp=gx.fn.getControlValue("vMSGLOTEMP") ;
      this.AV28MsgArea=gx.fn.getControlValue("vMSGAREA") ;
      this.AV29MsgIdentificacao=gx.fn.getControlValue("vMSGIDENTIFICACAO") ;
      this.A5325LoteamentoCidadeUF=gx.fn.getControlValue("LOTEAMENTOCIDADEUF") ;
      this.AV34Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV33Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Loteamentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Loteamentonome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAMENTONOME");
         this.AnyError  = 0;
         if ( (""==this.A5315LoteamentoNome) )
         {
            try {
               gxballoon.setError(this.AV27MsgLotEmp);
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
   this.Valid_Loteamentoareatotal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAMENTOAREATOTAL");
         this.AnyError  = 0;
         if ( (0.0==this.A5319LoteamentoAreaTotal) )
         {
            try {
               gxballoon.setError(this.AV28MsgArea);
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
   this.Valid_Loteamentoidentificacaolotes=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAMENTOIDENTIFICACAOLOTES");
         this.AnyError  = 0;
         if ( this.A5291LoteamentoIdentificacaoLotes == "0" )
         {
            try {
               gxballoon.setError(this.AV29MsgIdentificacao);
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
   this.Valid_Loteamentotipovalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAMENTOTIPOVALOR");
         this.AnyError  = 0;
         if ( (""==this.A8511LoteamentoTipoValor) )
         {
            try {
               gxballoon.setError("Informe o Tipo de Valor");
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
   this.Valid_Loteamentomodcontratoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Loteamentomodcontratoid",["gx.O.AV21LoteamentoModContratoEmpId", "gx.O.A5321LoteamentoModContratoId", "gx.O.A5320LoteamentoModContratoEmpId", "gx.O.A5322LoteamentoModContratoDescricao"],["A5320LoteamentoModContratoEmpId", "A5322LoteamentoModContratoDescricao"]);
      return true;
   }
   this.Valid_Loteamentocep=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAMENTOCEP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Loteamentoendereco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAMENTOENDERECO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Loteamentonumendereco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAMENTONUMENDERECO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Loteamentocomplemento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAMENTOCOMPLEMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Loteamentobairro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOTEAMENTOBAIRRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Loteamentocidadeid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Loteamentocidadeid",["gx.O.A5323LoteamentoCidadeId", "gx.O.A5324LoteamentoCidadeNome", "gx.O.A5325LoteamentoCidadeUF"],["A5324LoteamentoCidadeNome", "A5325LoteamentoCidadeUF"]);
      return true;
   }
   this.e128i2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138i2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148i462_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158i462_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,43,45,48,50,51,56,59,61,64,66,67,68,71,73,76,78,81,83,84,87,90,92,94,103,104,106,108,109,110];
   this.GXLastCtrlId =110;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Loteamentoid,isvalid:null,rgrid:[],fld:"LOTEAMENTOID",gxz:"Z5314LoteamentoId",gxold:"O5314LoteamentoId",gxvar:"A5314LoteamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5314LoteamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5314LoteamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTEAMENTOID",gx.O.A5314LoteamentoId,0)},c2v:function(){gx.O.A5314LoteamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTEAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteamentonome,isvalid:null,rgrid:[],fld:"LOTEAMENTONOME",gxz:"Z5315LoteamentoNome",gxold:"O5315LoteamentoNome",gxvar:"A5315LoteamentoNome",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5315LoteamentoNome=Value},v2z:function(Value){gx.O.Z5315LoteamentoNome=Value},v2c:function(){gx.fn.setControlValue("LOTEAMENTONOME",gx.O.A5315LoteamentoNome,0)},c2v:function(){gx.O.A5315LoteamentoNome=this.val()},val:function(){return gx.fn.getControlValue("LOTEAMENTONOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"decimal",len:10,dec:3,sign:false,pic:"ZZZ,ZZ9.999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteamentoareatotal,isvalid:null,rgrid:[],fld:"LOTEAMENTOAREATOTAL",gxz:"Z5319LoteamentoAreaTotal",gxold:"O5319LoteamentoAreaTotal",gxvar:"A5319LoteamentoAreaTotal",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5319LoteamentoAreaTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5319LoteamentoAreaTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOTEAMENTOAREATOTAL",gx.O.A5319LoteamentoAreaTotal,3,',')},c2v:function(){gx.O.A5319LoteamentoAreaTotal=this.val()},val:function(){return gx.fn.getDecimalValue("LOTEAMENTOAREATOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TXTFRENTE", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"decimal",len:10,dec:3,sign:false,pic:"ZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEAMENTOAREAFRENTE",gxz:"Z8701LoteamentoAreaFrente",gxold:"O8701LoteamentoAreaFrente",gxvar:"A8701LoteamentoAreaFrente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8701LoteamentoAreaFrente=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8701LoteamentoAreaFrente=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOTEAMENTOAREAFRENTE",gx.O.A8701LoteamentoAreaFrente,3,',')},c2v:function(){gx.O.A8701LoteamentoAreaFrente=this.val()},val:function(){return gx.fn.getDecimalValue("LOTEAMENTOAREAFRENTE",'.',',')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TXTFUNDO", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"decimal",len:10,dec:3,sign:false,pic:"ZZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEAMENTOAREAFUNDO",gxz:"Z8702LoteamentoAreaFundo",gxold:"O8702LoteamentoAreaFundo",gxvar:"A8702LoteamentoAreaFundo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8702LoteamentoAreaFundo=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8702LoteamentoAreaFundo=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("LOTEAMENTOAREAFUNDO",gx.O.A8702LoteamentoAreaFundo,3,',')},c2v:function(){gx.O.A8702LoteamentoAreaFundo=this.val()},val:function(){return gx.fn.getDecimalValue("LOTEAMENTOAREAFUNDO",'.',',')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteamentoidentificacaolotes,isvalid:null,rgrid:[],fld:"LOTEAMENTOIDENTIFICACAOLOTES",gxz:"Z5291LoteamentoIdentificacaoLotes",gxold:"O5291LoteamentoIdentificacaoLotes",gxvar:"A5291LoteamentoIdentificacaoLotes",ucs:[],op:[40],ip:[40],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5291LoteamentoIdentificacaoLotes=Value},v2z:function(Value){gx.O.Z5291LoteamentoIdentificacaoLotes=Value},v2c:function(){gx.fn.setComboBoxValue("LOTEAMENTOIDENTIFICACAOLOTES",gx.O.A5291LoteamentoIdentificacaoLotes)},c2v:function(){gx.O.A5291LoteamentoIdentificacaoLotes=this.val()},val:function(){return gx.fn.getControlValue("LOTEAMENTOIDENTIFICACAOLOTES")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteamentotipovalor,isvalid:null,rgrid:[],fld:"LOTEAMENTOTIPOVALOR",gxz:"Z8511LoteamentoTipoValor",gxold:"O8511LoteamentoTipoValor",gxvar:"A8511LoteamentoTipoValor",ucs:[],op:[45],ip:[45],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A8511LoteamentoTipoValor=Value},v2z:function(Value){gx.O.Z8511LoteamentoTipoValor=Value},v2c:function(){gx.fn.setComboBoxValue("LOTEAMENTOTIPOVALOR",gx.O.A8511LoteamentoTipoValor)},c2v:function(){gx.O.A8511LoteamentoTipoValor=this.val()},val:function(){return gx.fn.getControlValue("LOTEAMENTOTIPOVALOR")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteamentomodcontratoid,isvalid:null,rgrid:[],fld:"LOTEAMENTOMODCONTRATOID",gxz:"Z5321LoteamentoModContratoId",gxold:"O5321LoteamentoModContratoId",gxvar:"A5321LoteamentoModContratoId",ucs:[],op:[51],ip:[51,50],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5321LoteamentoModContratoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5321LoteamentoModContratoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTEAMENTOMODCONTRATOID",gx.O.A5321LoteamentoModContratoId,0)},c2v:function(){gx.O.A5321LoteamentoModContratoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTEAMENTOMODCONTRATOID",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEAMENTOMODCONTRATODESCRICAO",gxz:"Z5322LoteamentoModContratoDescricao",gxold:"O5322LoteamentoModContratoDescricao",gxvar:"A5322LoteamentoModContratoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5322LoteamentoModContratoDescricao=Value},v2z:function(Value){gx.O.Z5322LoteamentoModContratoDescricao=Value},v2c:function(){gx.fn.setControlValue("LOTEAMENTOMODCONTRATODESCRICAO",gx.O.A5322LoteamentoModContratoDescricao,0)},c2v:function(){gx.O.A5322LoteamentoModContratoDescricao=this.val()},val:function(){return gx.fn.getControlValue("LOTEAMENTOMODCONTRATODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[56]={fld:"TEXTBLOCK34", format:0,grid:0};
   GXValidFnc[59]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteamentocep,isvalid:null,rgrid:[],fld:"LOTEAMENTOCEP",gxz:"Z5330LoteamentoCep",gxold:"O5330LoteamentoCep",gxvar:"A5330LoteamentoCep",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5330LoteamentoCep=Value},v2z:function(Value){gx.O.Z5330LoteamentoCep=Value},v2c:function(){gx.fn.setControlValue("LOTEAMENTOCEP",gx.O.A5330LoteamentoCep,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5330LoteamentoCep=this.val()},val:function(){return gx.fn.getControlValue("LOTEAMENTOCEP")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[64]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteamentoendereco,isvalid:null,rgrid:[],fld:"LOTEAMENTOENDERECO",gxz:"Z5326LoteamentoEndereco",gxold:"O5326LoteamentoEndereco",gxvar:"A5326LoteamentoEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5326LoteamentoEndereco=Value},v2z:function(Value){gx.O.Z5326LoteamentoEndereco=Value},v2c:function(){gx.fn.setControlValue("LOTEAMENTOENDERECO",gx.O.A5326LoteamentoEndereco,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5326LoteamentoEndereco=this.val()},val:function(){return gx.fn.getControlValue("LOTEAMENTOENDERECO")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[67]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteamentonumendereco,isvalid:null,rgrid:[],fld:"LOTEAMENTONUMENDERECO",gxz:"Z5327LoteamentoNumEndereco",gxold:"O5327LoteamentoNumEndereco",gxvar:"A5327LoteamentoNumEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5327LoteamentoNumEndereco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5327LoteamentoNumEndereco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTEAMENTONUMENDERECO",gx.O.A5327LoteamentoNumEndereco,0)},c2v:function(){gx.O.A5327LoteamentoNumEndereco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTEAMENTONUMENDERECO",'.')},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[73]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteamentocomplemento,isvalid:null,rgrid:[],fld:"LOTEAMENTOCOMPLEMENTO",gxz:"Z5328LoteamentoComplemento",gxold:"O5328LoteamentoComplemento",gxvar:"A5328LoteamentoComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5328LoteamentoComplemento=Value},v2z:function(Value){gx.O.Z5328LoteamentoComplemento=Value},v2c:function(){gx.fn.setControlValue("LOTEAMENTOCOMPLEMENTO",gx.O.A5328LoteamentoComplemento,0)},c2v:function(){gx.O.A5328LoteamentoComplemento=this.val()},val:function(){return gx.fn.getControlValue("LOTEAMENTOCOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[78]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteamentobairro,isvalid:null,rgrid:[],fld:"LOTEAMENTOBAIRRO",gxz:"Z5329LoteamentoBairro",gxold:"O5329LoteamentoBairro",gxvar:"A5329LoteamentoBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5329LoteamentoBairro=Value},v2z:function(Value){gx.O.Z5329LoteamentoBairro=Value},v2c:function(){gx.fn.setControlValue("LOTEAMENTOBAIRRO",gx.O.A5329LoteamentoBairro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5329LoteamentoBairro=this.val()},val:function(){return gx.fn.getControlValue("LOTEAMENTOBAIRRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 78 , function() {
   });
   GXValidFnc[81]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Loteamentocidadeid,isvalid:null,rgrid:[],fld:"LOTEAMENTOCIDADEID",gxz:"Z5323LoteamentoCidadeId",gxold:"O5323LoteamentoCidadeId",gxvar:"A5323LoteamentoCidadeId",ucs:[],op:[84],ip:[84,83],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5323LoteamentoCidadeId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5323LoteamentoCidadeId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOTEAMENTOCIDADEID",gx.O.A5323LoteamentoCidadeId,0)},c2v:function(){gx.O.A5323LoteamentoCidadeId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOTEAMENTOCIDADEID",'.')},nac:gx.falseFn};
   GXValidFnc[84]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEAMENTOCIDADENOME",gxz:"Z5324LoteamentoCidadeNome",gxold:"O5324LoteamentoCidadeNome",gxvar:"A5324LoteamentoCidadeNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5324LoteamentoCidadeNome=Value},v2z:function(Value){gx.O.Z5324LoteamentoCidadeNome=Value},v2c:function(){gx.fn.setControlValue("LOTEAMENTOCIDADENOME",gx.O.A5324LoteamentoCidadeNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5324LoteamentoCidadeNome=this.val()},val:function(){return gx.fn.getControlValue("LOTEAMENTOCIDADENOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 84 , function() {
   });
   GXValidFnc[87]={fld:"TABLE4",grid:0};
   GXValidFnc[90]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[92]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEAMENTOUSUARIOALT",gxz:"Z5331LoteamentoUsuarioAlt",gxold:"O5331LoteamentoUsuarioAlt",gxvar:"A5331LoteamentoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5331LoteamentoUsuarioAlt=Value},v2z:function(Value){gx.O.Z5331LoteamentoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("LOTEAMENTOUSUARIOALT",gx.O.A5331LoteamentoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5331LoteamentoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("LOTEAMENTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 92 , function() {
   });
   GXValidFnc[94]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOTEAMENTODATAHORAALT",gxz:"Z5332LoteamentoDataHoraAlt",gxold:"O5332LoteamentoDataHoraAlt",gxvar:"A5332LoteamentoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5332LoteamentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5332LoteamentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LOTEAMENTODATAHORAALT",gx.O.A5332LoteamentoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5332LoteamentoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LOTEAMENTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 94 , function() {
   });
   GXValidFnc[103]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[104]={fld:"JS", format:2,grid:0};
   GXValidFnc[106]={fld:"BTNHELP",grid:0};
   GXValidFnc[108]={fld:"PROMPT_5321",grid:462};
   GXValidFnc[109]={fld:"PROMPT_5323_5330",grid:462};
   GXValidFnc[110]={fld:"PROMPT_5323",grid:462};
   this.A5314LoteamentoId = 0 ;
   this.Z5314LoteamentoId = 0 ;
   this.O5314LoteamentoId = 0 ;
   this.A5315LoteamentoNome = "" ;
   this.Z5315LoteamentoNome = "" ;
   this.O5315LoteamentoNome = "" ;
   this.A5319LoteamentoAreaTotal = 0 ;
   this.Z5319LoteamentoAreaTotal = 0 ;
   this.O5319LoteamentoAreaTotal = 0 ;
   this.A8701LoteamentoAreaFrente = 0 ;
   this.Z8701LoteamentoAreaFrente = 0 ;
   this.O8701LoteamentoAreaFrente = 0 ;
   this.A8702LoteamentoAreaFundo = 0 ;
   this.Z8702LoteamentoAreaFundo = 0 ;
   this.O8702LoteamentoAreaFundo = 0 ;
   this.A5291LoteamentoIdentificacaoLotes = "" ;
   this.Z5291LoteamentoIdentificacaoLotes = "" ;
   this.O5291LoteamentoIdentificacaoLotes = "" ;
   this.A8511LoteamentoTipoValor = "" ;
   this.Z8511LoteamentoTipoValor = "" ;
   this.O8511LoteamentoTipoValor = "" ;
   this.A5321LoteamentoModContratoId = 0 ;
   this.Z5321LoteamentoModContratoId = 0 ;
   this.O5321LoteamentoModContratoId = 0 ;
   this.A5322LoteamentoModContratoDescricao = "" ;
   this.Z5322LoteamentoModContratoDescricao = "" ;
   this.O5322LoteamentoModContratoDescricao = "" ;
   this.A5330LoteamentoCep = "" ;
   this.Z5330LoteamentoCep = "" ;
   this.O5330LoteamentoCep = "" ;
   this.A5326LoteamentoEndereco = "" ;
   this.Z5326LoteamentoEndereco = "" ;
   this.O5326LoteamentoEndereco = "" ;
   this.A5327LoteamentoNumEndereco = 0 ;
   this.Z5327LoteamentoNumEndereco = 0 ;
   this.O5327LoteamentoNumEndereco = 0 ;
   this.A5328LoteamentoComplemento = "" ;
   this.Z5328LoteamentoComplemento = "" ;
   this.O5328LoteamentoComplemento = "" ;
   this.A5329LoteamentoBairro = "" ;
   this.Z5329LoteamentoBairro = "" ;
   this.O5329LoteamentoBairro = "" ;
   this.A5323LoteamentoCidadeId = 0 ;
   this.Z5323LoteamentoCidadeId = 0 ;
   this.O5323LoteamentoCidadeId = 0 ;
   this.A5324LoteamentoCidadeNome = "" ;
   this.Z5324LoteamentoCidadeNome = "" ;
   this.O5324LoteamentoCidadeNome = "" ;
   this.A5331LoteamentoUsuarioAlt = "" ;
   this.Z5331LoteamentoUsuarioAlt = "" ;
   this.O5331LoteamentoUsuarioAlt = "" ;
   this.A5332LoteamentoDataHoraAlt = gx.date.nullDate() ;
   this.Z5332LoteamentoDataHoraAlt = gx.date.nullDate() ;
   this.O5332LoteamentoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV33Pgmname = "" ;
   this.AV34Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV18LoteamentoEmpresaId = "" ;
   this.AV21LoteamentoModContratoEmpId = "" ;
   this.AV26TPDESCRICAO = "" ;
   this.AV27MsgLotEmp = "" ;
   this.AV28MsgArea = "" ;
   this.AV29MsgIdentificacao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV20LoteamentoId = 0 ;
   this.A5290LoteamentoEmpresaId = "" ;
   this.A5314LoteamentoId = 0 ;
   this.A5320LoteamentoModContratoEmpId = "" ;
   this.A5331LoteamentoUsuarioAlt = "" ;
   this.A5332LoteamentoDataHoraAlt = gx.date.nullDate() ;
   this.A5315LoteamentoNome = "" ;
   this.A5319LoteamentoAreaTotal = 0 ;
   this.A8701LoteamentoAreaFrente = 0 ;
   this.A8702LoteamentoAreaFundo = 0 ;
   this.A5291LoteamentoIdentificacaoLotes = "" ;
   this.A5321LoteamentoModContratoId = 0 ;
   this.A5322LoteamentoModContratoDescricao = "" ;
   this.A5323LoteamentoCidadeId = 0 ;
   this.A5324LoteamentoCidadeNome = "" ;
   this.A5325LoteamentoCidadeUF = "" ;
   this.A5326LoteamentoEndereco = "" ;
   this.A5327LoteamentoNumEndereco = 0 ;
   this.A5328LoteamentoComplemento = "" ;
   this.A5329LoteamentoBairro = "" ;
   this.A5330LoteamentoCep = "" ;
   this.A8511LoteamentoTipoValor = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e128i2_client": ["'FECHAR'", true] ,"e138i2_client": ["AFTER TRN", true] ,"e148i462_client": ["ENTER", true] ,"e158i462_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20LoteamentoId',fld:'vLOTEAMENTOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_5321", [50]);
   this.setPrompt("PROMPT_5323_5330", [83,61]);
   this.setPrompt("PROMPT_5323", [83]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20LoteamentoId", "vLOTEAMENTOID", 0, "int");
   this.setVCMap("AV18LoteamentoEmpresaId", "vLOTEAMENTOEMPRESAID", 0, "char");
   this.setVCMap("A5290LoteamentoEmpresaId", "LOTEAMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV21LoteamentoModContratoEmpId", "vLOTEAMENTOMODCONTRATOEMPID", 0, "char");
   this.setVCMap("A5320LoteamentoModContratoEmpId", "LOTEAMENTOMODCONTRATOEMPID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV27MsgLotEmp", "vMSGLOTEMP", 0, "svchar");
   this.setVCMap("AV28MsgArea", "vMSGAREA", 0, "svchar");
   this.setVCMap("AV29MsgIdentificacao", "vMSGIDENTIFICACAO", 0, "svchar");
   this.setVCMap("A5325LoteamentoCidadeUF", "LOTEAMENTOCIDADEUF", 0, "char");
   this.setVCMap("AV34Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV33Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 462 ]= ["O5330LoteamentoCep","O8511LoteamentoTipoValor","O5329LoteamentoBairro","O5328LoteamentoComplemento","O5327LoteamentoNumEndereco","O5326LoteamentoEndereco","O5323LoteamentoCidadeId","O5321LoteamentoModContratoId","O5291LoteamentoIdentificacaoLotes","O5319LoteamentoAreaTotal","O5315LoteamentoNome"] ;
});
gx.setParentObj(new tloteamento());

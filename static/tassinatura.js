/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:57:48.71
*/
gx.evt.autoSkip = false;
gx.define('tassinatura', false, function () {
   this.ServerClass =  "tassinatura" ;
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
      this.AV19AssinaturaTipo=gx.fn.getControlValue("vASSINATURATIPO") ;
      this.AV20AssinaturaDataInicial=gx.fn.getDateValue("vASSINATURADATAINICIAL") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A4224AssinaturaEmpresaId=gx.fn.getControlValue("ASSINATURAEMPRESAID") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV27Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV26Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Assinaturatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSINATURATIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Assinaturadatainicial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSINATURADATAINICIAL");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A4225AssinaturaDataInicial)==0) )
         {
            try {
               gxballoon.setError("Informe a Data Inicial");
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
   this.Valid_Assinaturaprimeironome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSINATURAPRIMEIRONOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Assinaturaprimeirocargo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSINATURAPRIMEIROCARGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Assinaturasegundonome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSINATURASEGUNDONOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Assinaturasegundocargo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSINATURASEGUNDOCARGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Assinaturaterceironome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSINATURATERCEIRONOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Assinaturaterceirocargo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSINATURATERCEIROCARGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Assinaturaquartonome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSINATURAQUARTONOME");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Assinaturaquartocargo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSINATURAQUARTOCARGO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e127w2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e137w2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e147w431_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e157w431_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,66,68,70,79,80,82];
   this.GXLastCtrlId =82;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Assinaturatipo,isvalid:null,rgrid:[],fld:"ASSINATURATIPO",gxz:"Z4223AssinaturaTipo",gxold:"O4223AssinaturaTipo",gxvar:"A4223AssinaturaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A4223AssinaturaTipo=Value},v2z:function(Value){gx.O.Z4223AssinaturaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("ASSINATURATIPO",gx.O.A4223AssinaturaTipo)},c2v:function(){gx.O.A4223AssinaturaTipo=this.val()},val:function(){return gx.fn.getControlValue("ASSINATURATIPO")},nac:function(){return !(""==this.AV19AssinaturaTipo)}};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Assinaturadatainicial,isvalid:null,rgrid:[],fld:"ASSINATURADATAINICIAL",gxz:"Z4225AssinaturaDataInicial",gxold:"O4225AssinaturaDataInicial",gxvar:"A4225AssinaturaDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4225AssinaturaDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4225AssinaturaDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSINATURADATAINICIAL",gx.O.A4225AssinaturaDataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4225AssinaturaDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ASSINATURADATAINICIAL")},nac:function(){return !(new gx.date.gxdate("").compare(this.AV20AssinaturaDataInicial)==0)}};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Assinaturaprimeironome,isvalid:null,rgrid:[],fld:"ASSINATURAPRIMEIRONOME",gxz:"Z4226AssinaturaPrimeiroNome",gxold:"O4226AssinaturaPrimeiroNome",gxvar:"A4226AssinaturaPrimeiroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4226AssinaturaPrimeiroNome=Value},v2z:function(Value){gx.O.Z4226AssinaturaPrimeiroNome=Value},v2c:function(){gx.fn.setControlValue("ASSINATURAPRIMEIRONOME",gx.O.A4226AssinaturaPrimeiroNome,0)},c2v:function(){gx.O.A4226AssinaturaPrimeiroNome=this.val()},val:function(){return gx.fn.getControlValue("ASSINATURAPRIMEIRONOME")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Assinaturaprimeirocargo,isvalid:null,rgrid:[],fld:"ASSINATURAPRIMEIROCARGO",gxz:"Z4227AssinaturaPrimeiroCargo",gxold:"O4227AssinaturaPrimeiroCargo",gxvar:"A4227AssinaturaPrimeiroCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4227AssinaturaPrimeiroCargo=Value},v2z:function(Value){gx.O.Z4227AssinaturaPrimeiroCargo=Value},v2c:function(){gx.fn.setControlValue("ASSINATURAPRIMEIROCARGO",gx.O.A4227AssinaturaPrimeiroCargo,0)},c2v:function(){gx.O.A4227AssinaturaPrimeiroCargo=this.val()},val:function(){return gx.fn.getControlValue("ASSINATURAPRIMEIROCARGO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Assinaturasegundonome,isvalid:null,rgrid:[],fld:"ASSINATURASEGUNDONOME",gxz:"Z4228AssinaturaSegundoNome",gxold:"O4228AssinaturaSegundoNome",gxvar:"A4228AssinaturaSegundoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4228AssinaturaSegundoNome=Value},v2z:function(Value){gx.O.Z4228AssinaturaSegundoNome=Value},v2c:function(){gx.fn.setControlValue("ASSINATURASEGUNDONOME",gx.O.A4228AssinaturaSegundoNome,0)},c2v:function(){gx.O.A4228AssinaturaSegundoNome=this.val()},val:function(){return gx.fn.getControlValue("ASSINATURASEGUNDONOME")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Assinaturasegundocargo,isvalid:null,rgrid:[],fld:"ASSINATURASEGUNDOCARGO",gxz:"Z4229AssinaturaSegundoCargo",gxold:"O4229AssinaturaSegundoCargo",gxvar:"A4229AssinaturaSegundoCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4229AssinaturaSegundoCargo=Value},v2z:function(Value){gx.O.Z4229AssinaturaSegundoCargo=Value},v2c:function(){gx.fn.setControlValue("ASSINATURASEGUNDOCARGO",gx.O.A4229AssinaturaSegundoCargo,0)},c2v:function(){gx.O.A4229AssinaturaSegundoCargo=this.val()},val:function(){return gx.fn.getControlValue("ASSINATURASEGUNDOCARGO")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Assinaturaterceironome,isvalid:null,rgrid:[],fld:"ASSINATURATERCEIRONOME",gxz:"Z4230AssinaturaTerceiroNome",gxold:"O4230AssinaturaTerceiroNome",gxvar:"A4230AssinaturaTerceiroNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4230AssinaturaTerceiroNome=Value},v2z:function(Value){gx.O.Z4230AssinaturaTerceiroNome=Value},v2c:function(){gx.fn.setControlValue("ASSINATURATERCEIRONOME",gx.O.A4230AssinaturaTerceiroNome,0)},c2v:function(){gx.O.A4230AssinaturaTerceiroNome=this.val()},val:function(){return gx.fn.getControlValue("ASSINATURATERCEIRONOME")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Assinaturaterceirocargo,isvalid:null,rgrid:[],fld:"ASSINATURATERCEIROCARGO",gxz:"Z4231AssinaturaTerceiroCargo",gxold:"O4231AssinaturaTerceiroCargo",gxvar:"A4231AssinaturaTerceiroCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4231AssinaturaTerceiroCargo=Value},v2z:function(Value){gx.O.Z4231AssinaturaTerceiroCargo=Value},v2c:function(){gx.fn.setControlValue("ASSINATURATERCEIROCARGO",gx.O.A4231AssinaturaTerceiroCargo,0)},c2v:function(){gx.O.A4231AssinaturaTerceiroCargo=this.val()},val:function(){return gx.fn.getControlValue("ASSINATURATERCEIROCARGO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Assinaturaquartonome,isvalid:null,rgrid:[],fld:"ASSINATURAQUARTONOME",gxz:"Z4232AssinaturaQuartoNome",gxold:"O4232AssinaturaQuartoNome",gxvar:"A4232AssinaturaQuartoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4232AssinaturaQuartoNome=Value},v2z:function(Value){gx.O.Z4232AssinaturaQuartoNome=Value},v2c:function(){gx.fn.setControlValue("ASSINATURAQUARTONOME",gx.O.A4232AssinaturaQuartoNome,0)},c2v:function(){gx.O.A4232AssinaturaQuartoNome=this.val()},val:function(){return gx.fn.getControlValue("ASSINATURAQUARTONOME")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Assinaturaquartocargo,isvalid:null,rgrid:[],fld:"ASSINATURAQUARTOCARGO",gxz:"Z4233AssinaturaQuartoCargo",gxold:"O4233AssinaturaQuartoCargo",gxvar:"A4233AssinaturaQuartoCargo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4233AssinaturaQuartoCargo=Value},v2z:function(Value){gx.O.Z4233AssinaturaQuartoCargo=Value},v2c:function(){gx.fn.setControlValue("ASSINATURAQUARTOCARGO",gx.O.A4233AssinaturaQuartoCargo,0)},c2v:function(){gx.O.A4233AssinaturaQuartoCargo=this.val()},val:function(){return gx.fn.getControlValue("ASSINATURAQUARTOCARGO")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   GXValidFnc[66]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[68]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSINATURAUSUARIOALT",gxz:"Z4234AssinaturaUsuarioAlt",gxold:"O4234AssinaturaUsuarioAlt",gxvar:"A4234AssinaturaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4234AssinaturaUsuarioAlt=Value},v2z:function(Value){gx.O.Z4234AssinaturaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ASSINATURAUSUARIOALT",gx.O.A4234AssinaturaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4234AssinaturaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ASSINATURAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 68 , function() {
   });
   GXValidFnc[70]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSINATURADATAHORAALT",gxz:"Z4235AssinaturaDataHoraAlt",gxold:"O4235AssinaturaDataHoraAlt",gxvar:"A4235AssinaturaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4235AssinaturaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4235AssinaturaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSINATURADATAHORAALT",gx.O.A4235AssinaturaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4235AssinaturaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ASSINATURADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[79]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[80]={fld:"JS", format:2,grid:0};
   GXValidFnc[82]={fld:"BTNHELP",grid:0};
   this.A4223AssinaturaTipo = "" ;
   this.Z4223AssinaturaTipo = "" ;
   this.O4223AssinaturaTipo = "" ;
   this.A4225AssinaturaDataInicial = gx.date.nullDate() ;
   this.Z4225AssinaturaDataInicial = gx.date.nullDate() ;
   this.O4225AssinaturaDataInicial = gx.date.nullDate() ;
   this.A4226AssinaturaPrimeiroNome = "" ;
   this.Z4226AssinaturaPrimeiroNome = "" ;
   this.O4226AssinaturaPrimeiroNome = "" ;
   this.A4227AssinaturaPrimeiroCargo = "" ;
   this.Z4227AssinaturaPrimeiroCargo = "" ;
   this.O4227AssinaturaPrimeiroCargo = "" ;
   this.A4228AssinaturaSegundoNome = "" ;
   this.Z4228AssinaturaSegundoNome = "" ;
   this.O4228AssinaturaSegundoNome = "" ;
   this.A4229AssinaturaSegundoCargo = "" ;
   this.Z4229AssinaturaSegundoCargo = "" ;
   this.O4229AssinaturaSegundoCargo = "" ;
   this.A4230AssinaturaTerceiroNome = "" ;
   this.Z4230AssinaturaTerceiroNome = "" ;
   this.O4230AssinaturaTerceiroNome = "" ;
   this.A4231AssinaturaTerceiroCargo = "" ;
   this.Z4231AssinaturaTerceiroCargo = "" ;
   this.O4231AssinaturaTerceiroCargo = "" ;
   this.A4232AssinaturaQuartoNome = "" ;
   this.Z4232AssinaturaQuartoNome = "" ;
   this.O4232AssinaturaQuartoNome = "" ;
   this.A4233AssinaturaQuartoCargo = "" ;
   this.Z4233AssinaturaQuartoCargo = "" ;
   this.O4233AssinaturaQuartoCargo = "" ;
   this.A4234AssinaturaUsuarioAlt = "" ;
   this.Z4234AssinaturaUsuarioAlt = "" ;
   this.O4234AssinaturaUsuarioAlt = "" ;
   this.A4235AssinaturaDataHoraAlt = gx.date.nullDate() ;
   this.Z4235AssinaturaDataHoraAlt = gx.date.nullDate() ;
   this.O4235AssinaturaDataHoraAlt = gx.date.nullDate() ;
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
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV25SnConvenio = "" ;
   this.AV18SnAlterou = "" ;
   this.AV19AssinaturaTipo = "" ;
   this.AV20AssinaturaDataInicial = gx.date.nullDate() ;
   this.A4224AssinaturaEmpresaId = "" ;
   this.A4223AssinaturaTipo = "" ;
   this.A4225AssinaturaDataInicial = gx.date.nullDate() ;
   this.A4234AssinaturaUsuarioAlt = "" ;
   this.A4235AssinaturaDataHoraAlt = gx.date.nullDate() ;
   this.A4226AssinaturaPrimeiroNome = "" ;
   this.A4227AssinaturaPrimeiroCargo = "" ;
   this.A4228AssinaturaSegundoNome = "" ;
   this.A4229AssinaturaSegundoCargo = "" ;
   this.A4230AssinaturaTerceiroNome = "" ;
   this.A4231AssinaturaTerceiroCargo = "" ;
   this.A4232AssinaturaQuartoNome = "" ;
   this.A4233AssinaturaQuartoCargo = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e127w2_client": ["'FECHAR'", true] ,"e137w2_client": ["AFTER TRN", true] ,"e147w431_client": ["ENTER", true] ,"e157w431_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19AssinaturaTipo',fld:'vASSINATURATIPO'},{av:'AV20AssinaturaDataInicial',fld:'vASSINATURADATAINICIAL'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19AssinaturaTipo", "vASSINATURATIPO", 0, "char");
   this.setVCMap("AV20AssinaturaDataInicial", "vASSINATURADATAINICIAL", 0, "date");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A4224AssinaturaEmpresaId", "ASSINATURAEMPRESAID", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV27Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV26Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 431 ]= ["O4233AssinaturaQuartoCargo","O4232AssinaturaQuartoNome","O4231AssinaturaTerceiroCargo","O4230AssinaturaTerceiroNome","O4229AssinaturaSegundoCargo","O4228AssinaturaSegundoNome","O4227AssinaturaPrimeiroCargo","O4226AssinaturaPrimeiroNome"] ;
});
gx.setParentObj(new tassinatura());

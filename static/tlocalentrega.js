/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:47:4.85
*/
gx.evt.autoSkip = false;
gx.define('tlocalentrega', false, function () {
   this.ServerClass =  "tlocalentrega" ;
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
      this.AV18LocalEntregaId=gx.fn.getIntegerValue("vLOCALENTREGAID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A3363LocalEntregaEmpresaId=gx.fn.getControlValue("LOCALENTREGAEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Localentregaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOCALENTREGAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Localentregadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOCALENTREGADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A3633LocalEntregaDescricao) )
         {
            try {
               gxballoon.setError("Informe a descrição");
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
   this.Valid_Localentregacep=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOCALENTREGACEP");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Localentregalogradouro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOCALENTREGALOGRADOURO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Localentreganumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOCALENTREGANUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Localentregacomplemento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOCALENTREGACOMPLEMENTO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Localentregabairro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOCALENTREGABAIRRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cidadesid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Cidadesid",["gx.O.A147CidadesId", "gx.O.A149CidadesNome", "gx.O.A157CidadesUF"],["A149CidadesNome", "A157CidadesUF"]);
      return true;
   }
   this.Valid_Localentregatelefone=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOCALENTREGATELEFONE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Localentregacontato=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LOCALENTREGACONTATO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e126x2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136x2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146x388_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156x388_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,31,34,36,39,41,44,46,47,48,51,53,56,58,61,63,66,69,71,73,79,83,85,87];
   this.GXLastCtrlId =87;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Localentregaid,isvalid:null,rgrid:[],fld:"LOCALENTREGAID",gxz:"Z3364LocalEntregaId",gxold:"O3364LocalEntregaId",gxvar:"A3364LocalEntregaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3364LocalEntregaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3364LocalEntregaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOCALENTREGAID",gx.O.A3364LocalEntregaId,0)},c2v:function(){gx.O.A3364LocalEntregaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOCALENTREGAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Localentregadescricao,isvalid:null,rgrid:[],fld:"LOCALENTREGADESCRICAO",gxz:"Z3633LocalEntregaDescricao",gxold:"O3633LocalEntregaDescricao",gxvar:"A3633LocalEntregaDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3633LocalEntregaDescricao=Value},v2z:function(Value){gx.O.Z3633LocalEntregaDescricao=Value},v2c:function(){gx.fn.setControlValue("LOCALENTREGADESCRICAO",gx.O.A3633LocalEntregaDescricao,0)},c2v:function(){gx.O.A3633LocalEntregaDescricao=this.val()},val:function(){return gx.fn.getControlValue("LOCALENTREGADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Localentregacep,isvalid:null,rgrid:[],fld:"LOCALENTREGACEP",gxz:"Z3638LocalEntregaCEP",gxold:"O3638LocalEntregaCEP",gxvar:"A3638LocalEntregaCEP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3638LocalEntregaCEP=Value},v2z:function(Value){gx.O.Z3638LocalEntregaCEP=Value},v2c:function(){gx.fn.setControlValue("LOCALENTREGACEP",gx.O.A3638LocalEntregaCEP,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3638LocalEntregaCEP=this.val()},val:function(){return gx.fn.getControlValue("LOCALENTREGACEP")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Localentregalogradouro,isvalid:null,rgrid:[],fld:"LOCALENTREGALOGRADOURO",gxz:"Z3634LocalEntregaLogradouro",gxold:"O3634LocalEntregaLogradouro",gxvar:"A3634LocalEntregaLogradouro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3634LocalEntregaLogradouro=Value},v2z:function(Value){gx.O.Z3634LocalEntregaLogradouro=Value},v2c:function(){gx.fn.setControlValue("LOCALENTREGALOGRADOURO",gx.O.A3634LocalEntregaLogradouro,0)},c2v:function(){gx.O.A3634LocalEntregaLogradouro=this.val()},val:function(){return gx.fn.getControlValue("LOCALENTREGALOGRADOURO")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Localentreganumero,isvalid:null,rgrid:[],fld:"LOCALENTREGANUMERO",gxz:"Z3635LocalEntregaNumero",gxold:"O3635LocalEntregaNumero",gxvar:"A3635LocalEntregaNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3635LocalEntregaNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3635LocalEntregaNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LOCALENTREGANUMERO",gx.O.A3635LocalEntregaNumero,0)},c2v:function(){gx.O.A3635LocalEntregaNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LOCALENTREGANUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Localentregacomplemento,isvalid:null,rgrid:[],fld:"LOCALENTREGACOMPLEMENTO",gxz:"Z3636LocalEntregaComplemento",gxold:"O3636LocalEntregaComplemento",gxvar:"A3636LocalEntregaComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3636LocalEntregaComplemento=Value},v2z:function(Value){gx.O.Z3636LocalEntregaComplemento=Value},v2c:function(){gx.fn.setControlValue("LOCALENTREGACOMPLEMENTO",gx.O.A3636LocalEntregaComplemento,0)},c2v:function(){gx.O.A3636LocalEntregaComplemento=this.val()},val:function(){return gx.fn.getControlValue("LOCALENTREGACOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Localentregabairro,isvalid:null,rgrid:[],fld:"LOCALENTREGABAIRRO",gxz:"Z3637LocalEntregaBairro",gxold:"O3637LocalEntregaBairro",gxvar:"A3637LocalEntregaBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3637LocalEntregaBairro=Value},v2z:function(Value){gx.O.Z3637LocalEntregaBairro=Value},v2c:function(){gx.fn.setControlValue("LOCALENTREGABAIRRO",gx.O.A3637LocalEntregaBairro,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3637LocalEntregaBairro=this.val()},val:function(){return gx.fn.getControlValue("LOCALENTREGABAIRRO")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[44]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cidadesid,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z147CidadesId",gxold:"O147CidadesId",gxvar:"A147CidadesId",ucs:[],op:[46,48,47],ip:[48,47,46],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A147CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z147CidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CIDADESID",gx.O.A147CidadesId,0)},c2v:function(){gx.O.A147CidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z149CidadesNome",gxold:"O149CidadesNome",gxvar:"A149CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A149CidadesNome=Value},v2z:function(Value){gx.O.Z149CidadesNome=Value},v2c:function(){gx.fn.setControlValue("CIDADESNOME",gx.O.A149CidadesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A149CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("CIDADESNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[48]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESUF",gxz:"Z157CidadesUF",gxold:"O157CidadesUF",gxvar:"A157CidadesUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A157CidadesUF=Value},v2z:function(Value){gx.O.Z157CidadesUF=Value},v2c:function(){gx.fn.setComboBoxValue("CIDADESUF",gx.O.A157CidadesUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A157CidadesUF=this.val()},val:function(){return gx.fn.getControlValue("CIDADESUF")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[51]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Localentregatelefone,isvalid:null,rgrid:[],fld:"LOCALENTREGATELEFONE",gxz:"Z3639LocalEntregaTelefone",gxold:"O3639LocalEntregaTelefone",gxvar:"A3639LocalEntregaTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3639LocalEntregaTelefone=Value},v2z:function(Value){gx.O.Z3639LocalEntregaTelefone=Value},v2c:function(){gx.fn.setControlValue("LOCALENTREGATELEFONE",gx.O.A3639LocalEntregaTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3639LocalEntregaTelefone=this.val()},val:function(){return gx.fn.getControlValue("LOCALENTREGATELEFONE")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[56]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Localentregacontato,isvalid:null,rgrid:[],fld:"LOCALENTREGACONTATO",gxz:"Z3640LocalEntregaContato",gxold:"O3640LocalEntregaContato",gxvar:"A3640LocalEntregaContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3640LocalEntregaContato=Value},v2z:function(Value){gx.O.Z3640LocalEntregaContato=Value},v2c:function(){gx.fn.setControlValue("LOCALENTREGACONTATO",gx.O.A3640LocalEntregaContato,0)},c2v:function(){gx.O.A3640LocalEntregaContato=this.val()},val:function(){return gx.fn.getControlValue("LOCALENTREGACONTATO")},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALENTREGAHORARIO",gxz:"Z3641LocalEntregaHorario",gxold:"O3641LocalEntregaHorario",gxvar:"A3641LocalEntregaHorario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3641LocalEntregaHorario=Value},v2z:function(Value){gx.O.Z3641LocalEntregaHorario=Value},v2c:function(){gx.fn.setControlValue("LOCALENTREGAHORARIO",gx.O.A3641LocalEntregaHorario,0)},c2v:function(){gx.O.A3641LocalEntregaHorario=this.val()},val:function(){return gx.fn.getControlValue("LOCALENTREGAHORARIO")},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TABLE4",grid:0};
   GXValidFnc[69]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALENTREGAUSUARIOALT",gxz:"Z3642LocalEntregaUsuarioAlt",gxold:"O3642LocalEntregaUsuarioAlt",gxvar:"A3642LocalEntregaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3642LocalEntregaUsuarioAlt=Value},v2z:function(Value){gx.O.Z3642LocalEntregaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("LOCALENTREGAUSUARIOALT",gx.O.A3642LocalEntregaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3642LocalEntregaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("LOCALENTREGAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[73]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"LOCALENTREGADATAHORAALT",gxz:"Z3643LocalEntregaDataHoraAlt",gxold:"O3643LocalEntregaDataHoraAlt",gxvar:"A3643LocalEntregaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3643LocalEntregaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3643LocalEntregaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("LOCALENTREGADATAHORAALT",gx.O.A3643LocalEntregaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3643LocalEntregaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("LOCALENTREGADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 73 , function() {
   });
   GXValidFnc[79]={fld:"JS", format:2,grid:0};
   GXValidFnc[83]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[85]={fld:"BTNHELP",grid:0};
   GXValidFnc[87]={fld:"PROMPT_147",grid:388};
   this.A3364LocalEntregaId = 0 ;
   this.Z3364LocalEntregaId = 0 ;
   this.O3364LocalEntregaId = 0 ;
   this.A3633LocalEntregaDescricao = "" ;
   this.Z3633LocalEntregaDescricao = "" ;
   this.O3633LocalEntregaDescricao = "" ;
   this.A3638LocalEntregaCEP = "" ;
   this.Z3638LocalEntregaCEP = "" ;
   this.O3638LocalEntregaCEP = "" ;
   this.A3634LocalEntregaLogradouro = "" ;
   this.Z3634LocalEntregaLogradouro = "" ;
   this.O3634LocalEntregaLogradouro = "" ;
   this.A3635LocalEntregaNumero = 0 ;
   this.Z3635LocalEntregaNumero = 0 ;
   this.O3635LocalEntregaNumero = 0 ;
   this.A3636LocalEntregaComplemento = "" ;
   this.Z3636LocalEntregaComplemento = "" ;
   this.O3636LocalEntregaComplemento = "" ;
   this.A3637LocalEntregaBairro = "" ;
   this.Z3637LocalEntregaBairro = "" ;
   this.O3637LocalEntregaBairro = "" ;
   this.A147CidadesId = 0 ;
   this.Z147CidadesId = 0 ;
   this.O147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.Z149CidadesNome = "" ;
   this.O149CidadesNome = "" ;
   this.A157CidadesUF = "" ;
   this.Z157CidadesUF = "" ;
   this.O157CidadesUF = "" ;
   this.A3639LocalEntregaTelefone = "" ;
   this.Z3639LocalEntregaTelefone = "" ;
   this.O3639LocalEntregaTelefone = "" ;
   this.A3640LocalEntregaContato = "" ;
   this.Z3640LocalEntregaContato = "" ;
   this.O3640LocalEntregaContato = "" ;
   this.A3641LocalEntregaHorario = "" ;
   this.Z3641LocalEntregaHorario = "" ;
   this.O3641LocalEntregaHorario = "" ;
   this.A3642LocalEntregaUsuarioAlt = "" ;
   this.Z3642LocalEntregaUsuarioAlt = "" ;
   this.O3642LocalEntregaUsuarioAlt = "" ;
   this.A3643LocalEntregaDataHoraAlt = gx.date.nullDate() ;
   this.Z3643LocalEntregaDataHoraAlt = gx.date.nullDate() ;
   this.O3643LocalEntregaDataHoraAlt = gx.date.nullDate() ;
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
   this.AV20Entrada = [ ] ;
   this.AV21Saida = [ ] ;
   this.AV19SnAlterou = "" ;
   this.AV18LocalEntregaId = 0 ;
   this.A3363LocalEntregaEmpresaId = "" ;
   this.A3364LocalEntregaId = 0 ;
   this.A3642LocalEntregaUsuarioAlt = "" ;
   this.A3643LocalEntregaDataHoraAlt = gx.date.nullDate() ;
   this.A3633LocalEntregaDescricao = "" ;
   this.A3634LocalEntregaLogradouro = "" ;
   this.A3635LocalEntregaNumero = 0 ;
   this.A3636LocalEntregaComplemento = "" ;
   this.A3637LocalEntregaBairro = "" ;
   this.A3638LocalEntregaCEP = "" ;
   this.A147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.A157CidadesUF = "" ;
   this.A3639LocalEntregaTelefone = "" ;
   this.A3640LocalEntregaContato = "" ;
   this.A3641LocalEntregaHorario = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126x2_client": ["'FECHAR'", true] ,"e136x2_client": ["AFTER TRN", true] ,"e146x388_client": ["ENTER", true] ,"e156x388_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18LocalEntregaId',fld:'vLOCALENTREGAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_147", [46]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18LocalEntregaId", "vLOCALENTREGAID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A3363LocalEntregaEmpresaId", "LOCALENTREGAEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 388 ]= ["O3640LocalEntregaContato","O3639LocalEntregaTelefone","O147CidadesId","O3638LocalEntregaCEP","O3637LocalEntregaBairro","O3636LocalEntregaComplemento","O3635LocalEntregaNumero","O3634LocalEntregaLogradouro","O3633LocalEntregaDescricao"] ;
});
gx.setParentObj(new tlocalentrega());

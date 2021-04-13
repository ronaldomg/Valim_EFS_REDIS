/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 15:14:4.70
*/
gx.evt.autoSkip = false;
gx.define('htermoaberturafechamentopat', false, function () {
   this.ServerClass =  "htermoaberturafechamentopat" ;
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
   this.Validv_Empresauf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAUF");
         this.AnyError  = 0;
         if ( ! ( this.AV35EmpresaUF == "" || this.AV35EmpresaUF == "AC" || this.AV35EmpresaUF == "AL" || this.AV35EmpresaUF == "AP" || this.AV35EmpresaUF == "AM" || this.AV35EmpresaUF == "BA" || this.AV35EmpresaUF == "CE" || this.AV35EmpresaUF == "DF" || this.AV35EmpresaUF == "ES" || this.AV35EmpresaUF == "GO" || this.AV35EmpresaUF == "MA" || this.AV35EmpresaUF == "MT" || this.AV35EmpresaUF == "MS" || this.AV35EmpresaUF == "MG" || this.AV35EmpresaUF == "PA" || this.AV35EmpresaUF == "PB" || this.AV35EmpresaUF == "PR" || this.AV35EmpresaUF == "PE" || this.AV35EmpresaUF == "PI" || this.AV35EmpresaUF == "RJ" || this.AV35EmpresaUF == "RN" || this.AV35EmpresaUF == "RS" || this.AV35EmpresaUF == "RO" || this.AV35EmpresaUF == "RR" || this.AV35EmpresaUF == "SC" || this.AV35EmpresaUF == "SP" || this.AV35EmpresaUF == "SE" || this.AV35EmpresaUF == "TO" || this.AV35EmpresaUF == "EX" ) )
         {
            try {
               gxballoon.setError("Campo EmpresaUF fora do intervalo");
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
   this.s122_client=function()
   {
      this.AV38TpErro = gx.num.trunc( 0 ,0) ;
      if ( (0==this.AV21NumeroOrdem) )
      {
         this.addMessage("Informe o número de ordem");
         gx.fn.usrSetFocus("vNUMEROORDEM") ;
         this.AV38TpErro = gx.num.trunc( 1 ,0) ;
      }
      else
      {
         if ( (0==this.AV22QtdeFolhas) )
         {
            this.addMessage("Informe a quantidade de folhas do termo");
            gx.fn.usrSetFocus("vQTDEFOLHAS") ;
            this.AV38TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV38TpErro == 0 )
      {
         if ( (0==this.AV23FolhaIni) && (0==this.AV24FolhaFin) )
         {
            this.addMessage("Informe o intervalo de folhas do termo");
            gx.fn.usrSetFocus("vFOLHAINI") ;
            this.AV38TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV38TpErro == 0 )
      {
         if ( (""==this.AV25Local) )
         {
            this.addMessage("Informe o local a ser impresso no termo");
            gx.fn.usrSetFocus("vLOCAL") ;
            this.AV38TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV38TpErro == 0 )
      {
         if ( (new gx.date.gxdate("").compare(this.AV26DataTermo)==0) )
         {
            this.addMessage("Informe a data do termo");
            gx.fn.usrSetFocus("vDATATERMO") ;
            this.AV38TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV38TpErro == 0 )
      {
         if ( (""==this.AV27Responsavel) )
         {
            this.addMessage("Informe o responsável pelo termo");
            gx.fn.usrSetFocus("vRESPONSAVEL") ;
            this.AV38TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV38TpErro == 0 )
      {
         if ( (""==this.AV28EmpresaNome) )
         {
            this.addMessage("Informe o nome da empresa");
            gx.fn.usrSetFocus("vEMPRESANOME") ;
            this.AV38TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV38TpErro == 0 )
      {
         if ( (""==this.AV29EmpresaEndereco) )
         {
            this.addMessage("Informe o endereço da empresa");
            gx.fn.usrSetFocus("vEMPRESAENDERECO") ;
            this.AV38TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV38TpErro == 0 )
      {
         if ( (""==this.AV34EmpresaCidade) )
         {
            this.addMessage("Informe a cidade da empresa");
            gx.fn.usrSetFocus("vEMPRESACIDADE") ;
            this.AV38TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
      if ( this.AV38TpErro == 0 )
      {
         if ( (""==this.AV35EmpresaUF) )
         {
            this.addMessage("Informe a uf da cidade da empresa");
            gx.fn.usrSetFocus("vEMPRESAUF") ;
            this.AV38TpErro = gx.num.trunc( 1 ,0) ;
         }
      }
   };
   this.e1110c2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e1310c2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1510c2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,11,14,17,23,25,30,32,37,39,42,44,46,51,53,58,60,65,67,72,74,81,87,89,94,96,99,101,103,105,108,110,112,114,117,119,121,123,126,128,130,132,141,143];
   this.GXLastCtrlId =143;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TABLE7",grid:0};
   GXValidFnc[14]={fld:"TABLE10",grid:0};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNUMEROORDEM",gxz:"ZV21NumeroOrdem",gxold:"OV21NumeroOrdem",gxvar:"AV21NumeroOrdem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21NumeroOrdem=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21NumeroOrdem=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNUMEROORDEM",gx.O.AV21NumeroOrdem,0)},c2v:function(){gx.O.AV21NumeroOrdem=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNUMEROORDEM",'.')},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[32]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDEFOLHAS",gxz:"ZV22QtdeFolhas",gxold:"OV22QtdeFolhas",gxvar:"AV22QtdeFolhas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22QtdeFolhas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22QtdeFolhas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEFOLHAS",gx.O.AV22QtdeFolhas,0)},c2v:function(){gx.O.AV22QtdeFolhas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEFOLHAS",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[39]={fld:"TABLERFOLHAS",grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFOLHAINI",gxz:"ZV23FolhaIni",gxold:"OV23FolhaIni",gxvar:"AV23FolhaIni",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23FolhaIni=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23FolhaIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFOLHAINI",gx.O.AV23FolhaIni,0)},c2v:function(){gx.O.AV23FolhaIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFOLHAINI",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFOLHAFIN",gxz:"ZV24FolhaFin",gxold:"OV24FolhaFin",gxvar:"AV24FolhaFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24FolhaFin=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24FolhaFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFOLHAFIN",gx.O.AV24FolhaFin,0)},c2v:function(){gx.O.AV24FolhaFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFOLHAFIN",'.')},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTULTIMOLANC",gxz:"ZV39DtUltimoLanc",gxold:"OV39DtUltimoLanc",gxvar:"AV39DtUltimoLanc",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39DtUltimoLanc=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV39DtUltimoLanc=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTULTIMOLANC",gx.O.AV39DtUltimoLanc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV39DtUltimoLanc=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTULTIMOLANC")},nac:gx.falseFn};
   this.declareDomainHdlr( 53 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOCAL",gxz:"ZV25Local",gxold:"OV25Local",gxvar:"AV25Local",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25Local=Value},v2z:function(Value){gx.O.ZV25Local=Value},v2c:function(){gx.fn.setControlValue("vLOCAL",gx.O.AV25Local,0)},c2v:function(){gx.O.AV25Local=this.val()},val:function(){return gx.fn.getControlValue("vLOCAL")},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDATATERMO",gxz:"ZV26DataTermo",gxold:"OV26DataTermo",gxvar:"AV26DataTermo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DataTermo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26DataTermo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATATERMO",gx.O.AV26DataTermo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26DataTermo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATATERMO")},nac:gx.falseFn};
   this.declareDomainHdlr( 67 , function() {
   });
   GXValidFnc[72]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[74]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vRESPONSAVEL",gxz:"ZV27Responsavel",gxold:"OV27Responsavel",gxvar:"AV27Responsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27Responsavel=Value},v2z:function(Value){gx.O.ZV27Responsavel=Value},v2c:function(){gx.fn.setControlValue("vRESPONSAVEL",gx.O.AV27Responsavel,0)},c2v:function(){gx.O.AV27Responsavel=this.val()},val:function(){return gx.fn.getControlValue("vRESPONSAVEL")},nac:gx.falseFn};
   GXValidFnc[81]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[87]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[89]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESANOME",gxz:"ZV28EmpresaNome",gxold:"OV28EmpresaNome",gxvar:"AV28EmpresaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28EmpresaNome=Value},v2z:function(Value){gx.O.ZV28EmpresaNome=Value},v2c:function(){gx.fn.setControlValue("vEMPRESANOME",gx.O.AV28EmpresaNome,0)},c2v:function(){gx.O.AV28EmpresaNome=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESANOME")},nac:gx.falseFn};
   GXValidFnc[94]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[96]={fld:"TABLEENDNRO",grid:0};
   GXValidFnc[99]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAENDERECO",gxz:"ZV29EmpresaEndereco",gxold:"OV29EmpresaEndereco",gxvar:"AV29EmpresaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29EmpresaEndereco=Value},v2z:function(Value){gx.O.ZV29EmpresaEndereco=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAENDERECO",gx.O.AV29EmpresaEndereco,0)},c2v:function(){gx.O.AV29EmpresaEndereco=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAENDERECO")},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESANUMEROENDERECO",gxz:"ZV30EmpresaNumeroEndereco",gxold:"OV30EmpresaNumeroEndereco",gxvar:"AV30EmpresaNumeroEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30EmpresaNumeroEndereco=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30EmpresaNumeroEndereco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEMPRESANUMEROENDERECO",gx.O.AV30EmpresaNumeroEndereco,0)},c2v:function(){gx.O.AV30EmpresaNumeroEndereco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEMPRESANUMEROENDERECO",'.')},nac:gx.falseFn};
   GXValidFnc[103]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"char",len:9,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESACEP",gxz:"ZV33EmpresaCEP",gxold:"OV33EmpresaCEP",gxvar:"AV33EmpresaCEP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33EmpresaCEP=Value},v2z:function(Value){gx.O.ZV33EmpresaCEP=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACEP",gx.O.AV33EmpresaCEP,0)},c2v:function(){gx.O.AV33EmpresaCEP=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACEP")},nac:gx.falseFn};
   GXValidFnc[108]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESACOMPLEMENTO",gxz:"ZV31EmpresaComplemento",gxold:"OV31EmpresaComplemento",gxvar:"AV31EmpresaComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31EmpresaComplemento=Value},v2z:function(Value){gx.O.ZV31EmpresaComplemento=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACOMPLEMENTO",gx.O.AV31EmpresaComplemento,0)},c2v:function(){gx.O.AV31EmpresaComplemento=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[112]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[114]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESABAIRRO",gxz:"ZV32EmpresaBairro",gxold:"OV32EmpresaBairro",gxvar:"AV32EmpresaBairro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32EmpresaBairro=Value},v2z:function(Value){gx.O.ZV32EmpresaBairro=Value},v2c:function(){gx.fn.setControlValue("vEMPRESABAIRRO",gx.O.AV32EmpresaBairro,0)},c2v:function(){gx.O.AV32EmpresaBairro=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESABAIRRO")},nac:gx.falseFn};
   GXValidFnc[117]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[119]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESACIDADE",gxz:"ZV34EmpresaCidade",gxold:"OV34EmpresaCidade",gxvar:"AV34EmpresaCidade",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34EmpresaCidade=Value},v2z:function(Value){gx.O.ZV34EmpresaCidade=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACIDADE",gx.O.AV34EmpresaCidade,0)},c2v:function(){gx.O.AV34EmpresaCidade=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACIDADE")},nac:gx.falseFn};
   GXValidFnc[121]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[123]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresauf,isvalid:null,rgrid:[],fld:"vEMPRESAUF",gxz:"ZV35EmpresaUF",gxold:"OV35EmpresaUF",gxvar:"AV35EmpresaUF",ucs:[],op:[123],ip:[123],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV35EmpresaUF=Value},v2z:function(Value){gx.O.ZV35EmpresaUF=Value},v2c:function(){gx.fn.setComboBoxValue("vEMPRESAUF",gx.O.AV35EmpresaUF)},c2v:function(){gx.O.AV35EmpresaUF=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAUF")},nac:gx.falseFn};
   GXValidFnc[126]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[128]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAINSCRICAOESTADUAL",gxz:"ZV36EmpresaInscricaoEstadual",gxold:"OV36EmpresaInscricaoEstadual",gxvar:"AV36EmpresaInscricaoEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36EmpresaInscricaoEstadual=Value},v2z:function(Value){gx.O.ZV36EmpresaInscricaoEstadual=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAINSCRICAOESTADUAL",gx.O.AV36EmpresaInscricaoEstadual,0)},c2v:function(){gx.O.AV36EmpresaInscricaoEstadual=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAINSCRICAOESTADUAL")},nac:gx.falseFn};
   GXValidFnc[130]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[132]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESACNPJ",gxz:"ZV37EmpresaCNPJ",gxold:"OV37EmpresaCNPJ",gxvar:"AV37EmpresaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37EmpresaCNPJ=Value},v2z:function(Value){gx.O.ZV37EmpresaCNPJ=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACNPJ",gx.O.AV37EmpresaCNPJ,0)},c2v:function(){gx.O.AV37EmpresaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACNPJ")},nac:gx.falseFn};
   GXValidFnc[141]={fld:"JS", format:2,grid:0};
   GXValidFnc[143]={fld:"BTNHELP",grid:0};
   this.AV21NumeroOrdem = 0 ;
   this.ZV21NumeroOrdem = 0 ;
   this.OV21NumeroOrdem = 0 ;
   this.AV22QtdeFolhas = 0 ;
   this.ZV22QtdeFolhas = 0 ;
   this.OV22QtdeFolhas = 0 ;
   this.AV23FolhaIni = 0 ;
   this.ZV23FolhaIni = 0 ;
   this.OV23FolhaIni = 0 ;
   this.AV24FolhaFin = 0 ;
   this.ZV24FolhaFin = 0 ;
   this.OV24FolhaFin = 0 ;
   this.AV39DtUltimoLanc = gx.date.nullDate() ;
   this.ZV39DtUltimoLanc = gx.date.nullDate() ;
   this.OV39DtUltimoLanc = gx.date.nullDate() ;
   this.AV25Local = "" ;
   this.ZV25Local = "" ;
   this.OV25Local = "" ;
   this.AV26DataTermo = gx.date.nullDate() ;
   this.ZV26DataTermo = gx.date.nullDate() ;
   this.OV26DataTermo = gx.date.nullDate() ;
   this.AV27Responsavel = "" ;
   this.ZV27Responsavel = "" ;
   this.OV27Responsavel = "" ;
   this.AV28EmpresaNome = "" ;
   this.ZV28EmpresaNome = "" ;
   this.OV28EmpresaNome = "" ;
   this.AV29EmpresaEndereco = "" ;
   this.ZV29EmpresaEndereco = "" ;
   this.OV29EmpresaEndereco = "" ;
   this.AV30EmpresaNumeroEndereco = 0 ;
   this.ZV30EmpresaNumeroEndereco = 0 ;
   this.OV30EmpresaNumeroEndereco = 0 ;
   this.AV33EmpresaCEP = "" ;
   this.ZV33EmpresaCEP = "" ;
   this.OV33EmpresaCEP = "" ;
   this.AV31EmpresaComplemento = "" ;
   this.ZV31EmpresaComplemento = "" ;
   this.OV31EmpresaComplemento = "" ;
   this.AV32EmpresaBairro = "" ;
   this.ZV32EmpresaBairro = "" ;
   this.OV32EmpresaBairro = "" ;
   this.AV34EmpresaCidade = "" ;
   this.ZV34EmpresaCidade = "" ;
   this.OV34EmpresaCidade = "" ;
   this.AV35EmpresaUF = "" ;
   this.ZV35EmpresaUF = "" ;
   this.OV35EmpresaUF = "" ;
   this.AV36EmpresaInscricaoEstadual = "" ;
   this.ZV36EmpresaInscricaoEstadual = "" ;
   this.OV36EmpresaInscricaoEstadual = "" ;
   this.AV37EmpresaCNPJ = "" ;
   this.ZV37EmpresaCNPJ = "" ;
   this.OV37EmpresaCNPJ = "" ;
   this.AV21NumeroOrdem = 0 ;
   this.AV22QtdeFolhas = 0 ;
   this.AV23FolhaIni = 0 ;
   this.AV24FolhaFin = 0 ;
   this.AV39DtUltimoLanc = gx.date.nullDate() ;
   this.AV25Local = "" ;
   this.AV26DataTermo = gx.date.nullDate() ;
   this.AV27Responsavel = "" ;
   this.AV28EmpresaNome = "" ;
   this.AV29EmpresaEndereco = "" ;
   this.AV30EmpresaNumeroEndereco = 0 ;
   this.AV33EmpresaCEP = "" ;
   this.AV31EmpresaComplemento = "" ;
   this.AV32EmpresaBairro = "" ;
   this.AV34EmpresaCidade = "" ;
   this.AV35EmpresaUF = "" ;
   this.AV36EmpresaInscricaoEstadual = "" ;
   this.AV37EmpresaCNPJ = "" ;
   this.A138EmpresaId = "" ;
   this.A186EmpresaNome = "" ;
   this.A187EmpresaEndereco = "" ;
   this.A204EmpresaNumeroEndereco = 0 ;
   this.A188EmpresaComplemento = "" ;
   this.A205EmpresaBairro = "" ;
   this.A196EmpresaCEP = "" ;
   this.A189EmpresaCidade = "" ;
   this.A190EmpresaUF = "" ;
   this.A202EmpresaCNPJ = "" ;
   this.A209EmpresaInscricaoEstadual = "" ;
   this.AV38TpErro = 0 ;
   this.Events = {"e1110c2_client": ["'FECHAR'", true] ,"e1310c2_client": ["ENTER", true] ,"e1510c2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV38TpErro',fld:'vTPERRO'},{av:'AV66Pgmname',fld:'vPGMNAME'},{av:'AV14Ordenacao',fld:'vORDENACAO'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV21NumeroOrdem',fld:'vNUMEROORDEM'},{av:'AV22QtdeFolhas',fld:'vQTDEFOLHAS'},{av:'AV23FolhaIni',fld:'vFOLHAINI'},{av:'AV24FolhaFin',fld:'vFOLHAFIN'},{av:'AV25Local',fld:'vLOCAL'},{av:'AV26DataTermo',fld:'vDATATERMO'},{av:'AV27Responsavel',fld:'vRESPONSAVEL'},{av:'AV28EmpresaNome',fld:'vEMPRESANOME'},{av:'AV29EmpresaEndereco',fld:'vEMPRESAENDERECO'},{av:'AV30EmpresaNumeroEndereco',fld:'vEMPRESANUMEROENDERECO'},{av:'AV31EmpresaComplemento',fld:'vEMPRESACOMPLEMENTO'},{av:'AV32EmpresaBairro',fld:'vEMPRESABAIRRO'},{av:'AV33EmpresaCEP',fld:'vEMPRESACEP'},{av:'AV34EmpresaCidade',fld:'vEMPRESACIDADE'},{av:'AV35EmpresaUF',fld:'vEMPRESAUF'},{av:'AV36EmpresaInscricaoEstadual',fld:'vEMPRESAINSCRICAOESTADUAL'},{av:'AV37EmpresaCNPJ',fld:'vEMPRESACNPJ'},{av:'AV39DtUltimoLanc',fld:'vDTULTIMOLANC'},{av:'AV67Pgmdesc',fld:'vPGMDESC'}],[{av:'AV12NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV11NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV39DtUltimoLanc',fld:'vDTULTIMOLANC'},{av:'AV37EmpresaCNPJ',fld:'vEMPRESACNPJ'},{av:'AV36EmpresaInscricaoEstadual',fld:'vEMPRESAINSCRICAOESTADUAL'},{av:'AV35EmpresaUF',fld:'vEMPRESAUF'},{av:'AV34EmpresaCidade',fld:'vEMPRESACIDADE'},{av:'AV33EmpresaCEP',fld:'vEMPRESACEP'},{av:'AV32EmpresaBairro',fld:'vEMPRESABAIRRO'},{av:'AV31EmpresaComplemento',fld:'vEMPRESACOMPLEMENTO'},{av:'AV30EmpresaNumeroEndereco',fld:'vEMPRESANUMEROENDERECO'},{av:'AV29EmpresaEndereco',fld:'vEMPRESAENDERECO'},{av:'AV28EmpresaNome',fld:'vEMPRESANOME'},{av:'AV27Responsavel',fld:'vRESPONSAVEL'},{av:'AV26DataTermo',fld:'vDATATERMO'},{av:'AV25Local',fld:'vLOCAL'},{av:'AV24FolhaFin',fld:'vFOLHAFIN'},{av:'AV23FolhaIni',fld:'vFOLHAINI'},{av:'AV22QtdeFolhas',fld:'vQTDEFOLHAS'},{av:'AV21NumeroOrdem',fld:'vNUMEROORDEM'},{av:'AV18QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV13OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV38TpErro',fld:'vTPERRO'},{av:'AV52Diretorio',fld:'vDIRETORIO'},{av:'AV19i',fld:'vI'}]];
   this.EnterCtrl = ["BUTTON3"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new htermoaberturafechamentopat());

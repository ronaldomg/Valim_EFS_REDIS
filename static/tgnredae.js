/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:10:4.67
*/
gx.evt.autoSkip = false;
gx.define('tgnredae', false, function () {
   this.ServerClass =  "tgnredae" ;
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
      this.AV18GNREDAEId=gx.fn.getIntegerValue("vGNREDAEID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5386GNREDAEEmpresaId=gx.fn.getControlValue("GNREDAEEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV20SnPrompt=gx.fn.getControlValue("vSNPROMPT") ;
   };
   this.Valid_Gnredaeid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Gnredaetipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAETIPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Gnredaeufsubstituto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAEUFSUBSTITUTO");
         this.AnyError  = 0;
         if ( ! ( this.A5397GNREDAEUFSubstituto == "" || this.A5397GNREDAEUFSubstituto == "AC" || this.A5397GNREDAEUFSubstituto == "AL" || this.A5397GNREDAEUFSubstituto == "AP" || this.A5397GNREDAEUFSubstituto == "AM" || this.A5397GNREDAEUFSubstituto == "BA" || this.A5397GNREDAEUFSubstituto == "CE" || this.A5397GNREDAEUFSubstituto == "DF" || this.A5397GNREDAEUFSubstituto == "ES" || this.A5397GNREDAEUFSubstituto == "GO" || this.A5397GNREDAEUFSubstituto == "MA" || this.A5397GNREDAEUFSubstituto == "MT" || this.A5397GNREDAEUFSubstituto == "MS" || this.A5397GNREDAEUFSubstituto == "MG" || this.A5397GNREDAEUFSubstituto == "PA" || this.A5397GNREDAEUFSubstituto == "PB" || this.A5397GNREDAEUFSubstituto == "PR" || this.A5397GNREDAEUFSubstituto == "PE" || this.A5397GNREDAEUFSubstituto == "PI" || this.A5397GNREDAEUFSubstituto == "RJ" || this.A5397GNREDAEUFSubstituto == "RN" || this.A5397GNREDAEUFSubstituto == "RS" || this.A5397GNREDAEUFSubstituto == "RO" || this.A5397GNREDAEUFSubstituto == "RR" || this.A5397GNREDAEUFSubstituto == "SC" || this.A5397GNREDAEUFSubstituto == "SP" || this.A5397GNREDAEUFSubstituto == "SE" || this.A5397GNREDAEUFSubstituto == "TO" || this.A5397GNREDAEUFSubstituto == "EX" ) )
         {
            try {
               gxballoon.setError("Campo Substituto fora do intervalo");
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
   this.Valid_Gnredaeuffavorecido=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAEUFFAVORECIDO");
         this.AnyError  = 0;
         if ( ! ( this.A5388GNREDAEUFFavorecido == "" || this.A5388GNREDAEUFFavorecido == "AC" || this.A5388GNREDAEUFFavorecido == "AL" || this.A5388GNREDAEUFFavorecido == "AP" || this.A5388GNREDAEUFFavorecido == "AM" || this.A5388GNREDAEUFFavorecido == "BA" || this.A5388GNREDAEUFFavorecido == "CE" || this.A5388GNREDAEUFFavorecido == "DF" || this.A5388GNREDAEUFFavorecido == "ES" || this.A5388GNREDAEUFFavorecido == "GO" || this.A5388GNREDAEUFFavorecido == "MA" || this.A5388GNREDAEUFFavorecido == "MT" || this.A5388GNREDAEUFFavorecido == "MS" || this.A5388GNREDAEUFFavorecido == "MG" || this.A5388GNREDAEUFFavorecido == "PA" || this.A5388GNREDAEUFFavorecido == "PB" || this.A5388GNREDAEUFFavorecido == "PR" || this.A5388GNREDAEUFFavorecido == "PE" || this.A5388GNREDAEUFFavorecido == "PI" || this.A5388GNREDAEUFFavorecido == "RJ" || this.A5388GNREDAEUFFavorecido == "RN" || this.A5388GNREDAEUFFavorecido == "RS" || this.A5388GNREDAEUFFavorecido == "RO" || this.A5388GNREDAEUFFavorecido == "RR" || this.A5388GNREDAEUFFavorecido == "SC" || this.A5388GNREDAEUFFavorecido == "SP" || this.A5388GNREDAEUFFavorecido == "SE" || this.A5388GNREDAEUFFavorecido == "TO" || this.A5388GNREDAEUFFavorecido == "EX" ) )
         {
            try {
               gxballoon.setError("Campo UF do Favorecido fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( (""==this.A5388GNREDAEUFFavorecido) )
         {
            try {
               gxballoon.setError("Informe a UF do Favorecido");
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
   this.Valid_Gnredaenodocarrecadacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAENODOCARRECADACAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Gnredaebanco=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAEBANCO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Gnredaeagencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAEAGENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Gnredaeautenticacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAEAUTENTICACAO");
         this.AnyError  = 0;
         if ( (""==this.A5398GNREDAENoDocArrecadacao) && (""==this.A5391GNREDAEAutenticacao) )
         {
            try {
               gxballoon.setError("Informe a autenticação");
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
   this.Valid_Gnredaevalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAEVALOR");
         this.AnyError  = 0;
         if ( (0.0==this.A5392GNREDAEValor) )
         {
            try {
               gxballoon.setError("Informe o valor");
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
   this.Valid_Gnredaevencimento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAEVENCIMENTO");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A5393GNREDAEVencimento)==0) )
         {
            try {
               gxballoon.setError("Informe o vencimento");
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
   this.Valid_Gnredaemesreferencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAEMESREFERENCIA");
         this.AnyError  = 0;
         if ( ( this.A5416GNREDAEMesReferencia < 1 || this.A5416GNREDAEMesReferencia > 12 ) && this.A5416GNREDAEMesReferencia != 0 )
         {
            try {
               gxballoon.setError("Informe um mês de referência válido");
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
   this.Valid_Gnredaeanoreferencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAEANOREFERENCIA");
         this.AnyError  = 0;
         if ( (0==this.A5416GNREDAEMesReferencia) && ! (0==this.A5417GNREDAEAnoReferencia) )
         {
            try {
               gxballoon.setError("Informe o mês de referência");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (0==this.A5416GNREDAEMesReferencia) && (0==this.A5417GNREDAEAnoReferencia) )
         {
            try {
               gxballoon.setError("Informe o ano de referência");
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
   this.Valid_Gnredaedatapagamento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAEDATAPAGAMENTO");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A5395GNREDAEDataPagamento)==0) )
         {
            try {
               gxballoon.setError("Informe a data de pagamento");
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
   this.Valid_Gnredaeconvenio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GNREDAECONVENIO");
         this.AnyError  = 0;
         if ( this.A5385GNREDAETipo == "0" && ! (""==this.A5396GNREDAEConvenio) )
         {
            try {
               gxballoon.setError("Não é permitido informar o número do convênio para o tipo DAE");
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
   this.e128o2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138o2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148o467_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158o467_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,66,67,70,72,75,77,80,83,85,87,96,97,98,100];
   this.GXLastCtrlId =100;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TXTTIPO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gnredaetipo,isvalid:null,rgrid:[],fld:"GNREDAETIPO",gxz:"Z5385GNREDAETipo",gxold:"O5385GNREDAETipo",gxvar:"A5385GNREDAETipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5385GNREDAETipo=Value},v2z:function(Value){gx.O.Z5385GNREDAETipo=Value},v2c:function(){gx.fn.setComboBoxValue("GNREDAETIPO",gx.O.A5385GNREDAETipo)},c2v:function(){gx.O.A5385GNREDAETipo=this.val()},val:function(){return gx.fn.getControlValue("GNREDAETIPO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Gnredaeid,isvalid:null,rgrid:[],fld:"GNREDAEID",gxz:"Z4681GNREDAEid",gxold:"O4681GNREDAEid",gxvar:"A4681GNREDAEid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4681GNREDAEid=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4681GNREDAEid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GNREDAEID",gx.O.A4681GNREDAEid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4681GNREDAEid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GNREDAEID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gnredaeufsubstituto,isvalid:null,rgrid:[],fld:"GNREDAEUFSUBSTITUTO",gxz:"Z5397GNREDAEUFSubstituto",gxold:"O5397GNREDAEUFSubstituto",gxvar:"A5397GNREDAEUFSubstituto",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5397GNREDAEUFSubstituto=Value},v2z:function(Value){gx.O.Z5397GNREDAEUFSubstituto=Value},v2c:function(){gx.fn.setComboBoxValue("GNREDAEUFSUBSTITUTO",gx.O.A5397GNREDAEUFSubstituto);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5397GNREDAEUFSubstituto=this.val()},val:function(){return gx.fn.getControlValue("GNREDAEUFSUBSTITUTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gnredaeuffavorecido,isvalid:null,rgrid:[],fld:"GNREDAEUFFAVORECIDO",gxz:"Z5388GNREDAEUFFavorecido",gxold:"O5388GNREDAEUFFavorecido",gxvar:"A5388GNREDAEUFFavorecido",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A5388GNREDAEUFFavorecido=Value},v2z:function(Value){gx.O.Z5388GNREDAEUFFavorecido=Value},v2c:function(){gx.fn.setComboBoxValue("GNREDAEUFFAVORECIDO",gx.O.A5388GNREDAEUFFavorecido);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5388GNREDAEUFFavorecido=this.val()},val:function(){return gx.fn.getControlValue("GNREDAEUFFAVORECIDO")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gnredaenodocarrecadacao,isvalid:null,rgrid:[],fld:"GNREDAENODOCARRECADACAO",gxz:"Z5398GNREDAENoDocArrecadacao",gxold:"O5398GNREDAENoDocArrecadacao",gxvar:"A5398GNREDAENoDocArrecadacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5398GNREDAENoDocArrecadacao=Value},v2z:function(Value){gx.O.Z5398GNREDAENoDocArrecadacao=Value},v2c:function(){gx.fn.setControlValue("GNREDAENODOCARRECADACAO",gx.O.A5398GNREDAENoDocArrecadacao,0)},c2v:function(){gx.O.A5398GNREDAENoDocArrecadacao=this.val()},val:function(){return gx.fn.getControlValue("GNREDAENODOCARRECADACAO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gnredaebanco,isvalid:null,rgrid:[],fld:"GNREDAEBANCO",gxz:"Z5389GNREDAEBanco",gxold:"O5389GNREDAEBanco",gxvar:"A5389GNREDAEBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5389GNREDAEBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5389GNREDAEBanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GNREDAEBANCO",gx.O.A5389GNREDAEBanco,0)},c2v:function(){gx.O.A5389GNREDAEBanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GNREDAEBANCO",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gnredaeagencia,isvalid:null,rgrid:[],fld:"GNREDAEAGENCIA",gxz:"Z5390GNREDAEAgencia",gxold:"O5390GNREDAEAgencia",gxvar:"A5390GNREDAEAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5390GNREDAEAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5390GNREDAEAgencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GNREDAEAGENCIA",gx.O.A5390GNREDAEAgencia,0)},c2v:function(){gx.O.A5390GNREDAEAgencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GNREDAEAGENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gnredaeautenticacao,isvalid:null,rgrid:[],fld:"GNREDAEAUTENTICACAO",gxz:"Z5391GNREDAEAutenticacao",gxold:"O5391GNREDAEAutenticacao",gxvar:"A5391GNREDAEAutenticacao",ucs:[],op:[50,35],ip:[50,35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5391GNREDAEAutenticacao=Value},v2z:function(Value){gx.O.Z5391GNREDAEAutenticacao=Value},v2c:function(){gx.fn.setControlValue("GNREDAEAUTENTICACAO",gx.O.A5391GNREDAEAutenticacao,0)},c2v:function(){gx.O.A5391GNREDAEAutenticacao=this.val()},val:function(){return gx.fn.getControlValue("GNREDAEAUTENTICACAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gnredaevalor,isvalid:null,rgrid:[],fld:"GNREDAEVALOR",gxz:"Z5392GNREDAEValor",gxold:"O5392GNREDAEValor",gxvar:"A5392GNREDAEValor",ucs:[],op:[55],ip:[55],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5392GNREDAEValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5392GNREDAEValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("GNREDAEVALOR",gx.O.A5392GNREDAEValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5392GNREDAEValor=this.val()},val:function(){return gx.fn.getDecimalValue("GNREDAEVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gnredaevencimento,isvalid:null,rgrid:[],fld:"GNREDAEVENCIMENTO",gxz:"Z5393GNREDAEVencimento",gxold:"O5393GNREDAEVencimento",gxvar:"A5393GNREDAEVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[60],ip:[60],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5393GNREDAEVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5393GNREDAEVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("GNREDAEVENCIMENTO",gx.O.A5393GNREDAEVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5393GNREDAEVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("GNREDAEVENCIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gnredaemesreferencia,isvalid:null,rgrid:[],fld:"GNREDAEMESREFERENCIA",gxz:"Z5416GNREDAEMesReferencia",gxold:"O5416GNREDAEMesReferencia",gxvar:"A5416GNREDAEMesReferencia",ucs:[],op:[65],ip:[65],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5416GNREDAEMesReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5416GNREDAEMesReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GNREDAEMESREFERENCIA",gx.O.A5416GNREDAEMesReferencia,0)},c2v:function(){gx.O.A5416GNREDAEMesReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GNREDAEMESREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[66]={fld:"TXTBARRA", format:0,grid:0};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gnredaeanoreferencia,isvalid:null,rgrid:[],fld:"GNREDAEANOREFERENCIA",gxz:"Z5417GNREDAEAnoReferencia",gxold:"O5417GNREDAEAnoReferencia",gxvar:"A5417GNREDAEAnoReferencia",ucs:[],op:[67,65],ip:[67,65],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5417GNREDAEAnoReferencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5417GNREDAEAnoReferencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GNREDAEANOREFERENCIA",gx.O.A5417GNREDAEAnoReferencia,0)},c2v:function(){gx.O.A5417GNREDAEAnoReferencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GNREDAEANOREFERENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[70]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gnredaedatapagamento,isvalid:null,rgrid:[],fld:"GNREDAEDATAPAGAMENTO",gxz:"Z5395GNREDAEDataPagamento",gxold:"O5395GNREDAEDataPagamento",gxvar:"A5395GNREDAEDataPagamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[72],ip:[72],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5395GNREDAEDataPagamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5395GNREDAEDataPagamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("GNREDAEDATAPAGAMENTO",gx.O.A5395GNREDAEDataPagamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5395GNREDAEDataPagamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("GNREDAEDATAPAGAMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[75]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[77]={lvl:0,type:"char",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Gnredaeconvenio,isvalid:null,rgrid:[],fld:"GNREDAECONVENIO",gxz:"Z5396GNREDAEConvenio",gxold:"O5396GNREDAEConvenio",gxvar:"A5396GNREDAEConvenio",ucs:[],op:[77,14],ip:[77,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5396GNREDAEConvenio=Value},v2z:function(Value){gx.O.Z5396GNREDAEConvenio=Value},v2c:function(){gx.fn.setControlValue("GNREDAECONVENIO",gx.O.A5396GNREDAEConvenio,0)},c2v:function(){gx.O.A5396GNREDAEConvenio=this.val()},val:function(){return gx.fn.getControlValue("GNREDAECONVENIO")},nac:gx.falseFn};
   GXValidFnc[80]={fld:"TABLE4",grid:0};
   GXValidFnc[83]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEUSUARIOALT",gxz:"Z5399GNREDAEUsuarioAlt",gxold:"O5399GNREDAEUsuarioAlt",gxvar:"A5399GNREDAEUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5399GNREDAEUsuarioAlt=Value},v2z:function(Value){gx.O.Z5399GNREDAEUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("GNREDAEUSUARIOALT",gx.O.A5399GNREDAEUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5399GNREDAEUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("GNREDAEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[87]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GNREDAEDATAHORAALT",gxz:"Z5400GNREDAEDataHoraAlt",gxold:"O5400GNREDAEDataHoraAlt",gxvar:"A5400GNREDAEDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5400GNREDAEDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5400GNREDAEDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("GNREDAEDATAHORAALT",gx.O.A5400GNREDAEDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5400GNREDAEDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("GNREDAEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 87 , function() {
   });
   GXValidFnc[96]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[97]={fld:"JS", format:2,grid:0};
   GXValidFnc[98]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGNREDAEIDPROMPT",gxz:"ZV21GNREDAEIdPrompt",gxold:"OV21GNREDAEIdPrompt",gxvar:"AV21GNREDAEIdPrompt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21GNREDAEIdPrompt=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21GNREDAEIdPrompt=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vGNREDAEIDPROMPT",gx.O.AV21GNREDAEIdPrompt,0)},c2v:function(){gx.O.AV21GNREDAEIdPrompt=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vGNREDAEIDPROMPT",'.')},nac:gx.falseFn};
   GXValidFnc[100]={fld:"BTNHELP",grid:0};
   this.A5385GNREDAETipo = "" ;
   this.Z5385GNREDAETipo = "" ;
   this.O5385GNREDAETipo = "" ;
   this.A4681GNREDAEid = 0 ;
   this.Z4681GNREDAEid = 0 ;
   this.O4681GNREDAEid = 0 ;
   this.A5397GNREDAEUFSubstituto = "" ;
   this.Z5397GNREDAEUFSubstituto = "" ;
   this.O5397GNREDAEUFSubstituto = "" ;
   this.A5388GNREDAEUFFavorecido = "" ;
   this.Z5388GNREDAEUFFavorecido = "" ;
   this.O5388GNREDAEUFFavorecido = "" ;
   this.A5398GNREDAENoDocArrecadacao = "" ;
   this.Z5398GNREDAENoDocArrecadacao = "" ;
   this.O5398GNREDAENoDocArrecadacao = "" ;
   this.A5389GNREDAEBanco = 0 ;
   this.Z5389GNREDAEBanco = 0 ;
   this.O5389GNREDAEBanco = 0 ;
   this.A5390GNREDAEAgencia = 0 ;
   this.Z5390GNREDAEAgencia = 0 ;
   this.O5390GNREDAEAgencia = 0 ;
   this.A5391GNREDAEAutenticacao = "" ;
   this.Z5391GNREDAEAutenticacao = "" ;
   this.O5391GNREDAEAutenticacao = "" ;
   this.A5392GNREDAEValor = 0 ;
   this.Z5392GNREDAEValor = 0 ;
   this.O5392GNREDAEValor = 0 ;
   this.A5393GNREDAEVencimento = gx.date.nullDate() ;
   this.Z5393GNREDAEVencimento = gx.date.nullDate() ;
   this.O5393GNREDAEVencimento = gx.date.nullDate() ;
   this.A5416GNREDAEMesReferencia = 0 ;
   this.Z5416GNREDAEMesReferencia = 0 ;
   this.O5416GNREDAEMesReferencia = 0 ;
   this.A5417GNREDAEAnoReferencia = 0 ;
   this.Z5417GNREDAEAnoReferencia = 0 ;
   this.O5417GNREDAEAnoReferencia = 0 ;
   this.A5395GNREDAEDataPagamento = gx.date.nullDate() ;
   this.Z5395GNREDAEDataPagamento = gx.date.nullDate() ;
   this.O5395GNREDAEDataPagamento = gx.date.nullDate() ;
   this.A5396GNREDAEConvenio = "" ;
   this.Z5396GNREDAEConvenio = "" ;
   this.O5396GNREDAEConvenio = "" ;
   this.A5399GNREDAEUsuarioAlt = "" ;
   this.Z5399GNREDAEUsuarioAlt = "" ;
   this.O5399GNREDAEUsuarioAlt = "" ;
   this.A5400GNREDAEDataHoraAlt = gx.date.nullDate() ;
   this.Z5400GNREDAEDataHoraAlt = gx.date.nullDate() ;
   this.O5400GNREDAEDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV21GNREDAEIdPrompt = 0 ;
   this.ZV21GNREDAEIdPrompt = 0 ;
   this.OV21GNREDAEIdPrompt = 0 ;
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
   this.AV19SnAlterou = "" ;
   this.AV18GNREDAEId = 0 ;
   this.AV20SnPrompt = "" ;
   this.A5386GNREDAEEmpresaId = "" ;
   this.A4681GNREDAEid = 0 ;
   this.A5399GNREDAEUsuarioAlt = "" ;
   this.A5400GNREDAEDataHoraAlt = gx.date.nullDate() ;
   this.A5385GNREDAETipo = "" ;
   this.A5398GNREDAENoDocArrecadacao = "" ;
   this.A5388GNREDAEUFFavorecido = "" ;
   this.A5389GNREDAEBanco = 0 ;
   this.A5390GNREDAEAgencia = 0 ;
   this.A5391GNREDAEAutenticacao = "" ;
   this.A5392GNREDAEValor = 0 ;
   this.A5393GNREDAEVencimento = gx.date.nullDate() ;
   this.A5416GNREDAEMesReferencia = 0 ;
   this.A5417GNREDAEAnoReferencia = 0 ;
   this.A5395GNREDAEDataPagamento = gx.date.nullDate() ;
   this.A5396GNREDAEConvenio = "" ;
   this.A5397GNREDAEUFSubstituto = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e128o2_client": ["'FECHAR'", true] ,"e138o2_client": ["AFTER TRN", true] ,"e148o467_client": ["ENTER", true] ,"e158o467_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18GNREDAEId',fld:'vGNREDAEID'},{av:'AV20SnPrompt',fld:'vSNPROMPT'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV20SnPrompt',fld:'vSNPROMPT'},{av:'AV21GNREDAEIdPrompt',fld:'vGNREDAEIDPROMPT'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'AV20SnPrompt',fld:'vSNPROMPT'},{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV21GNREDAEIdPrompt',fld:'vGNREDAEIDPROMPT'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18GNREDAEId", "vGNREDAEID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5386GNREDAEEmpresaId", "GNREDAEEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV20SnPrompt", "vSNPROMPT", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 467 ]= ["O5397GNREDAEUFSubstituto","O5396GNREDAEConvenio","O5395GNREDAEDataPagamento","O5417GNREDAEAnoReferencia","O5416GNREDAEMesReferencia","O5393GNREDAEVencimento","O5392GNREDAEValor","O5391GNREDAEAutenticacao","O5390GNREDAEAgencia","O5389GNREDAEBanco","O5388GNREDAEUFFavorecido","O5398GNREDAENoDocArrecadacao","O5385GNREDAETipo"] ;
});
gx.setParentObj(new tgnredae());

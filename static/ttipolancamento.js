/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:26:10.23
*/
gx.evt.autoSkip = false;
gx.define('ttipolancamento', false, function () {
   this.ServerClass =  "ttipolancamento" ;
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
      this.AV17TipoLancamentoId=gx.fn.getIntegerValue("vTIPOLANCAMENTOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A1046TipoLancamentoEmpresaid=gx.fn.getControlValue("TIPOLANCAMENTOEMPRESAID") ;
      this.AV19TipoLancamentoIntegCblEmpId=gx.fn.getControlValue("vTIPOLANCAMENTOINTEGCBLEMPID") ;
      this.AV18snAlterDados=gx.fn.getControlValue("vSNALTERDADOS") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV24TipoContaCredito=gx.fn.getControlValue("vTIPOCONTACREDITO") ;
      this.AV23TipoContaDebito=gx.fn.getControlValue("vTIPOCONTADEBITO") ;
      this.AV25ComplementoCampo=gx.fn.getControlValue("vCOMPLEMENTOCAMPO") ;
      this.AV22ValorParametro=gx.fn.getControlValue("vVALORPARAMETRO") ;
      this.AV32Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV31Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Tipolancamentoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLANCAMENTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipolancamentodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLANCAMENTODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A963TipoLancamentoDescricao) )
         {
            try {
               gxballoon.setError("Informe descrição");
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
   this.Valid_Tipolancamentopagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLANCAMENTOPAGREC");
         this.AnyError  = 0;
         if ( this.A964TipoLancamentoPagRec == "0" )
         {
            try {
               gxballoon.setError("Informe se é a pagar ou receber");
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
   this.Valid_Tipolancamentotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLANCAMENTOTIPO");
         this.AnyError  = 0;
         if ( this.A965TipoLancamentoTipo == "0" )
         {
            try {
               gxballoon.setError("Informe tipo de lançamento");
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
   this.Valid_Tipolancamentotpcalcacr=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLANCAMENTOTPCALCACR");
         this.AnyError  = 0;
         if ( this.A967TipoLancamentoTpCalcAcr == "0" )
         {
            try {
               gxballoon.setError("Informe cálculo de acréscimo");
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
   this.Valid_Tipolancamentointegcblid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLANCAMENTOINTEGCBLID");
         this.AnyError  = 0;
         try {
            if ( ! (0==this.A1889TipoLancamentoIntegCblId) )
            {
               this.A1888TipoLancamentoIntegCblEmpId =  this.AV19TipoLancamentoIntegCblEmpId  ;
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
   this.Valid_Tipolancamentointegcblempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipolancamentointegcblempid",["gx.O.A1888TipoLancamentoIntegCblEmpId", "gx.O.A1889TipoLancamentoIntegCblId", "gx.O.A1895TipoLancamentoIntegCblDesc"],["A1895TipoLancamentoIntegCblDesc"]);
      return true;
   }
   this.Valid_Tipolancamentosnestorno=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLANCAMENTOSNESTORNO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Tipolancamentosnconciliado=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TIPOLANCAMENTOSNCONCILIADO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122b2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132b2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142b139_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152b139_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,41,42,46,50,54,57,60,62,64,73,74,76,78];
   this.GXLastCtrlId =78;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tipolancamentoid,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOID",gxz:"Z962TipoLancamentoId",gxold:"O962TipoLancamentoId",gxvar:"A962TipoLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A962TipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z962TipoLancamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTOID",gx.O.A962TipoLancamentoId,0)},c2v:function(){gx.O.A962TipoLancamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOLANCAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolancamentodescricao,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTODESCRICAO",gxz:"Z963TipoLancamentoDescricao",gxold:"O963TipoLancamentoDescricao",gxvar:"A963TipoLancamentoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A963TipoLancamentoDescricao=Value},v2z:function(Value){gx.O.Z963TipoLancamentoDescricao=Value},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTODESCRICAO",gx.O.A963TipoLancamentoDescricao,0)},c2v:function(){gx.O.A963TipoLancamentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolancamentopagrec,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOPAGREC",gxz:"Z964TipoLancamentoPagRec",gxold:"O964TipoLancamentoPagRec",gxvar:"A964TipoLancamentoPagRec",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A964TipoLancamentoPagRec=Value},v2z:function(Value){gx.O.Z964TipoLancamentoPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOLANCAMENTOPAGREC",gx.O.A964TipoLancamentoPagRec)},c2v:function(){gx.O.A964TipoLancamentoPagRec=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTOPAGREC")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolancamentotipo,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOTIPO",gxz:"Z965TipoLancamentoTipo",gxold:"O965TipoLancamentoTipo",gxvar:"A965TipoLancamentoTipo",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A965TipoLancamentoTipo=Value},v2z:function(Value){gx.O.Z965TipoLancamentoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOLANCAMENTOTIPO",gx.O.A965TipoLancamentoTipo)},c2v:function(){gx.O.A965TipoLancamentoTipo=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTOTIPO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolancamentotpcalcacr,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOTPCALCACR",gxz:"Z967TipoLancamentoTpCalcAcr",gxold:"O967TipoLancamentoTpCalcAcr",gxvar:"A967TipoLancamentoTpCalcAcr",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A967TipoLancamentoTpCalcAcr=Value},v2z:function(Value){gx.O.Z967TipoLancamentoTpCalcAcr=Value},v2c:function(){gx.fn.setComboBoxValue("TIPOLANCAMENTOTPCALCACR",gx.O.A967TipoLancamentoTpCalcAcr)},c2v:function(){gx.O.A967TipoLancamentoTpCalcAcr=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTOTPCALCACR")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolancamentointegcblid,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOINTEGCBLID",gxz:"Z1889TipoLancamentoIntegCblId",gxold:"O1889TipoLancamentoIntegCblId",gxvar:"A1889TipoLancamentoIntegCblId",ucs:[],op:[42],ip:[42,40],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1889TipoLancamentoIntegCblId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1889TipoLancamentoIntegCblId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTOINTEGCBLID",gx.O.A1889TipoLancamentoIntegCblId,0)},c2v:function(){gx.O.A1889TipoLancamentoIntegCblId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOLANCAMENTOINTEGCBLID",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOINTEGCBLDESC",gxz:"Z1895TipoLancamentoIntegCblDesc",gxold:"O1895TipoLancamentoIntegCblDesc",gxvar:"A1895TipoLancamentoIntegCblDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1895TipoLancamentoIntegCblDesc=Value},v2z:function(Value){gx.O.Z1895TipoLancamentoIntegCblDesc=Value},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTOINTEGCBLDESC",gx.O.A1895TipoLancamentoIntegCblDesc,0)},c2v:function(){gx.O.A1895TipoLancamentoIntegCblDesc=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTOINTEGCBLDESC")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolancamentointegcblempid,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOINTEGCBLEMPID",gxz:"Z1888TipoLancamentoIntegCblEmpId",gxold:"O1888TipoLancamentoIntegCblEmpId",gxvar:"A1888TipoLancamentoIntegCblEmpId",ucs:[],op:[41],ip:[41,40,42],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1888TipoLancamentoIntegCblEmpId=Value},v2z:function(Value){gx.O.Z1888TipoLancamentoIntegCblEmpId=Value},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTOINTEGCBLEMPID",gx.O.A1888TipoLancamentoIntegCblEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1888TipoLancamentoIntegCblEmpId=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTOINTEGCBLEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolancamentosnestorno,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOSNESTORNO",gxz:"Z966TipoLancamentoSnEstorno",gxold:"O966TipoLancamentoSnEstorno",gxvar:"A966TipoLancamentoSnEstorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A966TipoLancamentoSnEstorno=Value},v2z:function(Value){gx.O.Z966TipoLancamentoSnEstorno=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOLANCAMENTOSNESTORNO",gx.O.A966TipoLancamentoSnEstorno,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A966TipoLancamentoSnEstorno=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTOSNESTORNO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolancamentosnconciliado,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOSNCONCILIADO",gxz:"Z968TipoLancamentoSnConciliado",gxold:"O968TipoLancamentoSnConciliado",gxvar:"A968TipoLancamentoSnConciliado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A968TipoLancamentoSnConciliado=Value},v2z:function(Value){gx.O.Z968TipoLancamentoSnConciliado=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOLANCAMENTOSNCONCILIADO",gx.O.A968TipoLancamentoSnConciliado,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A968TipoLancamentoSnConciliado=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTOSNCONCILIADO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOSNRENEGOCIACAO",gxz:"Z2206TipoLancamentoSnRenegociacao",gxold:"O2206TipoLancamentoSnRenegociacao",gxvar:"A2206TipoLancamentoSnRenegociacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2206TipoLancamentoSnRenegociacao=Value},v2z:function(Value){gx.O.Z2206TipoLancamentoSnRenegociacao=Value},v2c:function(){gx.fn.setCheckBoxValue("TIPOLANCAMENTOSNRENEGOCIACAO",gx.O.A2206TipoLancamentoSnRenegociacao,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2206TipoLancamentoSnRenegociacao=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTOSNRENEGOCIACAO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TABLE4",grid:0};
   GXValidFnc[60]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[62]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOUSUARIOALT",gxz:"Z970TipoLancamentoUsuarioAlt",gxold:"O970TipoLancamentoUsuarioAlt",gxvar:"A970TipoLancamentoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A970TipoLancamentoUsuarioAlt=Value},v2z:function(Value){gx.O.Z970TipoLancamentoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTOUSUARIOALT",gx.O.A970TipoLancamentoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A970TipoLancamentoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 62 , function() {
   });
   GXValidFnc[64]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTODATAHORAALT",gxz:"Z971TipoLancamentoDataHoraAlt",gxold:"O971TipoLancamentoDataHoraAlt",gxvar:"A971TipoLancamentoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A971TipoLancamentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z971TipoLancamentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTODATAHORAALT",gx.O.A971TipoLancamentoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A971TipoLancamentoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TIPOLANCAMENTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[73]={fld:"JS", format:2,grid:0};
   GXValidFnc[74]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV26AcessoSistemaSequencia",gxold:"OV26AcessoSistemaSequencia",gxvar:"AV26AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV26AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV26AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[76]={fld:"BTNHELP",grid:0};
   GXValidFnc[78]={fld:"PROMPT_1889",grid:139};
   this.A962TipoLancamentoId = 0 ;
   this.Z962TipoLancamentoId = 0 ;
   this.O962TipoLancamentoId = 0 ;
   this.A963TipoLancamentoDescricao = "" ;
   this.Z963TipoLancamentoDescricao = "" ;
   this.O963TipoLancamentoDescricao = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.Z964TipoLancamentoPagRec = "" ;
   this.O964TipoLancamentoPagRec = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.Z965TipoLancamentoTipo = "" ;
   this.O965TipoLancamentoTipo = "" ;
   this.A967TipoLancamentoTpCalcAcr = "" ;
   this.Z967TipoLancamentoTpCalcAcr = "" ;
   this.O967TipoLancamentoTpCalcAcr = "" ;
   this.A1889TipoLancamentoIntegCblId = 0 ;
   this.Z1889TipoLancamentoIntegCblId = 0 ;
   this.O1889TipoLancamentoIntegCblId = 0 ;
   this.A1895TipoLancamentoIntegCblDesc = "" ;
   this.Z1895TipoLancamentoIntegCblDesc = "" ;
   this.O1895TipoLancamentoIntegCblDesc = "" ;
   this.A1888TipoLancamentoIntegCblEmpId = "" ;
   this.Z1888TipoLancamentoIntegCblEmpId = "" ;
   this.O1888TipoLancamentoIntegCblEmpId = "" ;
   this.A966TipoLancamentoSnEstorno = "" ;
   this.Z966TipoLancamentoSnEstorno = "" ;
   this.O966TipoLancamentoSnEstorno = "" ;
   this.A968TipoLancamentoSnConciliado = "" ;
   this.Z968TipoLancamentoSnConciliado = "" ;
   this.O968TipoLancamentoSnConciliado = "" ;
   this.A2206TipoLancamentoSnRenegociacao = "" ;
   this.Z2206TipoLancamentoSnRenegociacao = "" ;
   this.O2206TipoLancamentoSnRenegociacao = "" ;
   this.A970TipoLancamentoUsuarioAlt = "" ;
   this.Z970TipoLancamentoUsuarioAlt = "" ;
   this.O970TipoLancamentoUsuarioAlt = "" ;
   this.A971TipoLancamentoDataHoraAlt = gx.date.nullDate() ;
   this.Z971TipoLancamentoDataHoraAlt = gx.date.nullDate() ;
   this.O971TipoLancamentoDataHoraAlt = gx.date.nullDate() ;
   this.AV26AcessoSistemaSequencia = 0 ;
   this.ZV26AcessoSistemaSequencia = 0 ;
   this.OV26AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV31Pgmname = "" ;
   this.AV32Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV26AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19TipoLancamentoIntegCblEmpId = "" ;
   this.AV20Entrada = [ ] ;
   this.AV21Saida = [ ] ;
   this.AV18snAlterDados = "" ;
   this.AV24TipoContaCredito = "" ;
   this.AV23TipoContaDebito = "" ;
   this.AV25ComplementoCampo = "" ;
   this.AV22ValorParametro = "" ;
   this.AV17TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1888TipoLancamentoIntegCblEmpId = "" ;
   this.A970TipoLancamentoUsuarioAlt = "" ;
   this.A971TipoLancamentoDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A963TipoLancamentoDescricao = "" ;
   this.A964TipoLancamentoPagRec = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A966TipoLancamentoSnEstorno = "" ;
   this.A967TipoLancamentoTpCalcAcr = "" ;
   this.A1889TipoLancamentoIntegCblId = 0 ;
   this.A1895TipoLancamentoIntegCblDesc = "" ;
   this.A968TipoLancamentoSnConciliado = "" ;
   this.A2206TipoLancamentoSnRenegociacao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e122b2_client": ["'FECHAR'", true] ,"e132b2_client": ["AFTER TRN", true] ,"e142b139_client": ["ENTER", true] ,"e152b139_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17TipoLancamentoId',fld:'vTIPOLANCAMENTOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV26AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV26AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_1889", [40]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17TipoLancamentoId", "vTIPOLANCAMENTOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A1046TipoLancamentoEmpresaid", "TIPOLANCAMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV19TipoLancamentoIntegCblEmpId", "vTIPOLANCAMENTOINTEGCBLEMPID", 0, "char");
   this.setVCMap("AV18snAlterDados", "vSNALTERDADOS", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV24TipoContaCredito", "vTIPOCONTACREDITO", 0, "char");
   this.setVCMap("AV23TipoContaDebito", "vTIPOCONTADEBITO", 0, "char");
   this.setVCMap("AV25ComplementoCampo", "vCOMPLEMENTOCAMPO", 0, "char");
   this.setVCMap("AV22ValorParametro", "vVALORPARAMETRO", 0, "svchar");
   this.setVCMap("AV32Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV31Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 139 ]= ["O968TipoLancamentoSnConciliado","O967TipoLancamentoTpCalcAcr","O966TipoLancamentoSnEstorno","O965TipoLancamentoTipo","O964TipoLancamentoPagRec","O1889TipoLancamentoIntegCblId","O963TipoLancamentoDescricao"] ;
});
gx.setParentObj(new ttipolancamento());

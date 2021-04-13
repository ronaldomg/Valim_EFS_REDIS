/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:42:26.92
*/
gx.evt.autoSkip = false;
gx.define('tmontbarrasboleto', false, function () {
   this.ServerClass =  "tmontbarrasboleto" ;
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
      this.AV18MontBarrasBoletoId=gx.fn.getIntegerValue("vMONTBARRASBOLETOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2819MontBarrasBoletoEmpresaId=gx.fn.getControlValue("MONTBARRASBOLETOEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Montbarrasboletoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MONTBARRASBOLETOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Montbarrasboletotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MONTBARRASBOLETOTIPO");
         this.AnyError  = 0;
         try {
            if ( this.A2821MontBarrasBoletoTipo == "N" )
            {
               gx.fn.setCtrlProperty("MONTBARRASBOLETODTBASEFTVENC","Enabled", 0 );
            }
            else
            {
               gx.fn.setCtrlProperty("MONTBARRASBOLETODTBASEFTVENC","Enabled", 1 );
            }
         }
         catch(e){}
         if ( (""==this.A2821MontBarrasBoletoTipo) )
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
   this.Valid_Montbarrasboletopesoini=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MONTBARRASBOLETOPESOINI");
         this.AnyError  = 0;
         if ( (0==this.A2823MontBarrasBoletoPesoIni) )
         {
            try {
               gxballoon.setError("Informe o Peso Inicial");
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
   this.Valid_Montbarrasboletopesofin=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MONTBARRASBOLETOPESOFIN");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Montbarrasboletobase=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MONTBARRASBOLETOBASE");
         this.AnyError  = 0;
         if ( (""==this.A2822MontBarrasBoletoBase) )
         {
            try {
               gxballoon.setError("Informe a Base");
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
   this.Valid_Montbarrasboletoresto0=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MONTBARRASBOLETORESTO0");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Montbarrasboletoresto1=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MONTBARRASBOLETORESTO1");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Montbarrasboletoqtdedigsoma=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MONTBARRASBOLETOQTDEDIGSOMA");
         this.AnyError  = 0;
         if ( (""==this.A2828MontBarrasBoletoQtdeDigSoma) )
         {
            try {
               gxballoon.setError("Informe a Qtde Dígitos Multiplicação");
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
   this.Valid_Montbarrasboletodtbaseftvenc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MONTBARRASBOLETODTBASEFTVENC");
         this.AnyError  = 0;
         if ( (new gx.date.gxdate("").compare(this.A2827MontBarrasBoletoDtBaseFtVenc)==0) && this.A2821MontBarrasBoletoTipo != "N" )
         {
            try {
               gxballoon.setError("Informe a Data Base do Fator de Vencimento");
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
   this.e12552_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13552_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1455294_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1555294_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,43,45,48,50,54,57,59,62,64,67,70,72,74,83,84,86];
   this.GXLastCtrlId =86;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Montbarrasboletoid,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOID",gxz:"Z2820MontBarrasBoletoId",gxold:"O2820MontBarrasBoletoId",gxvar:"A2820MontBarrasBoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2820MontBarrasBoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2820MontBarrasBoletoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MONTBARRASBOLETOID",gx.O.A2820MontBarrasBoletoId,0)},c2v:function(){gx.O.A2820MontBarrasBoletoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MONTBARRASBOLETOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Montbarrasboletotipo,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOTIPO",gxz:"Z2821MontBarrasBoletoTipo",gxold:"O2821MontBarrasBoletoTipo",gxvar:"A2821MontBarrasBoletoTipo",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2821MontBarrasBoletoTipo=Value},v2z:function(Value){gx.O.Z2821MontBarrasBoletoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("MONTBARRASBOLETOTIPO",gx.O.A2821MontBarrasBoletoTipo)},c2v:function(){gx.O.A2821MontBarrasBoletoTipo=this.val()},val:function(){return gx.fn.getControlValue("MONTBARRASBOLETOTIPO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Montbarrasboletopesoini,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOPESOINI",gxz:"Z2823MontBarrasBoletoPesoIni",gxold:"O2823MontBarrasBoletoPesoIni",gxvar:"A2823MontBarrasBoletoPesoIni",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2823MontBarrasBoletoPesoIni=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2823MontBarrasBoletoPesoIni=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MONTBARRASBOLETOPESOINI",gx.O.A2823MontBarrasBoletoPesoIni,0)},c2v:function(){gx.O.A2823MontBarrasBoletoPesoIni=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MONTBARRASBOLETOPESOINI",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Montbarrasboletopesofin,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOPESOFIN",gxz:"Z2824MontBarrasBoletoPesoFin",gxold:"O2824MontBarrasBoletoPesoFin",gxvar:"A2824MontBarrasBoletoPesoFin",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2824MontBarrasBoletoPesoFin=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2824MontBarrasBoletoPesoFin=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MONTBARRASBOLETOPESOFIN",gx.O.A2824MontBarrasBoletoPesoFin,0)},c2v:function(){gx.O.A2824MontBarrasBoletoPesoFin=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MONTBARRASBOLETOPESOFIN",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Montbarrasboletobase,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOBASE",gxz:"Z2822MontBarrasBoletoBase",gxold:"O2822MontBarrasBoletoBase",gxvar:"A2822MontBarrasBoletoBase",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2822MontBarrasBoletoBase=Value},v2z:function(Value){gx.O.Z2822MontBarrasBoletoBase=Value},v2c:function(){gx.fn.setComboBoxValue("MONTBARRASBOLETOBASE",gx.O.A2822MontBarrasBoletoBase)},c2v:function(){gx.O.A2822MontBarrasBoletoBase=this.val()},val:function(){return gx.fn.getControlValue("MONTBARRASBOLETOBASE")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Montbarrasboletoresto0,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETORESTO0",gxz:"Z2825MontBarrasBoletoResto0",gxold:"O2825MontBarrasBoletoResto0",gxvar:"A2825MontBarrasBoletoResto0",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2825MontBarrasBoletoResto0=Value},v2z:function(Value){gx.O.Z2825MontBarrasBoletoResto0=Value},v2c:function(){gx.fn.setControlValue("MONTBARRASBOLETORESTO0",gx.O.A2825MontBarrasBoletoResto0,0)},c2v:function(){gx.O.A2825MontBarrasBoletoResto0=this.val()},val:function(){return gx.fn.getControlValue("MONTBARRASBOLETORESTO0")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Montbarrasboletoresto1,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETORESTO1",gxz:"Z2826MontBarrasBoletoResto1",gxold:"O2826MontBarrasBoletoResto1",gxvar:"A2826MontBarrasBoletoResto1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2826MontBarrasBoletoResto1=Value},v2z:function(Value){gx.O.Z2826MontBarrasBoletoResto1=Value},v2c:function(){gx.fn.setControlValue("MONTBARRASBOLETORESTO1",gx.O.A2826MontBarrasBoletoResto1,0)},c2v:function(){gx.O.A2826MontBarrasBoletoResto1=this.val()},val:function(){return gx.fn.getControlValue("MONTBARRASBOLETORESTO1")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETORESTO10",gxz:"Z3087MontBarrasBoletoResto10",gxold:"O3087MontBarrasBoletoResto10",gxvar:"A3087MontBarrasBoletoResto10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3087MontBarrasBoletoResto10=Value},v2z:function(Value){gx.O.Z3087MontBarrasBoletoResto10=Value},v2c:function(){gx.fn.setControlValue("MONTBARRASBOLETORESTO10",gx.O.A3087MontBarrasBoletoResto10,0)},c2v:function(){gx.O.A3087MontBarrasBoletoResto10=this.val()},val:function(){return gx.fn.getControlValue("MONTBARRASBOLETORESTO10")},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOSUBTRAIRESTO",gxz:"Z3088MontBarrasBoletoSubtraiResto",gxold:"O3088MontBarrasBoletoSubtraiResto",gxvar:"A3088MontBarrasBoletoSubtraiResto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A3088MontBarrasBoletoSubtraiResto=Value},v2z:function(Value){gx.O.Z3088MontBarrasBoletoSubtraiResto=Value},v2c:function(){gx.fn.setCheckBoxValue("MONTBARRASBOLETOSUBTRAIRESTO",gx.O.A3088MontBarrasBoletoSubtraiResto,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3088MontBarrasBoletoSubtraiResto=this.val()},val:function(){return gx.fn.getControlValue("MONTBARRASBOLETOSUBTRAIRESTO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[57]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Montbarrasboletoqtdedigsoma,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOQTDEDIGSOMA",gxz:"Z2828MontBarrasBoletoQtdeDigSoma",gxold:"O2828MontBarrasBoletoQtdeDigSoma",gxvar:"A2828MontBarrasBoletoQtdeDigSoma",ucs:[],op:[59],ip:[59],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2828MontBarrasBoletoQtdeDigSoma=Value},v2z:function(Value){gx.O.Z2828MontBarrasBoletoQtdeDigSoma=Value},v2c:function(){gx.fn.setComboBoxValue("MONTBARRASBOLETOQTDEDIGSOMA",gx.O.A2828MontBarrasBoletoQtdeDigSoma)},c2v:function(){gx.O.A2828MontBarrasBoletoQtdeDigSoma=this.val()},val:function(){return gx.fn.getControlValue("MONTBARRASBOLETOQTDEDIGSOMA")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Montbarrasboletodtbaseftvenc,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETODTBASEFTVENC",gxz:"Z2827MontBarrasBoletoDtBaseFtVenc",gxold:"O2827MontBarrasBoletoDtBaseFtVenc",gxvar:"A2827MontBarrasBoletoDtBaseFtVenc",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[20,64],ip:[20,64],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2827MontBarrasBoletoDtBaseFtVenc=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2827MontBarrasBoletoDtBaseFtVenc=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MONTBARRASBOLETODTBASEFTVENC",gx.O.A2827MontBarrasBoletoDtBaseFtVenc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2827MontBarrasBoletoDtBaseFtVenc=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("MONTBARRASBOLETODTBASEFTVENC")},nac:function(){return this.A2821MontBarrasBoletoTipo=="N"}};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[67]={fld:"TABLE4",grid:0};
   GXValidFnc[70]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[72]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETOUSUARIOALT",gxz:"Z2830MontBarrasBoletoUsuarioAlt",gxold:"O2830MontBarrasBoletoUsuarioAlt",gxvar:"A2830MontBarrasBoletoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2830MontBarrasBoletoUsuarioAlt=Value},v2z:function(Value){gx.O.Z2830MontBarrasBoletoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MONTBARRASBOLETOUSUARIOALT",gx.O.A2830MontBarrasBoletoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2830MontBarrasBoletoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MONTBARRASBOLETOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 72 , function() {
   });
   GXValidFnc[74]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MONTBARRASBOLETODATAALT",gxz:"Z2829MontBarrasBoletoDataAlt",gxold:"O2829MontBarrasBoletoDataAlt",gxvar:"A2829MontBarrasBoletoDataAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2829MontBarrasBoletoDataAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2829MontBarrasBoletoDataAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MONTBARRASBOLETODATAALT",gx.O.A2829MontBarrasBoletoDataAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2829MontBarrasBoletoDataAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MONTBARRASBOLETODATAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[83]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"JS", format:2,grid:0};
   GXValidFnc[86]={fld:"BTNHELP",grid:0};
   this.A2820MontBarrasBoletoId = 0 ;
   this.Z2820MontBarrasBoletoId = 0 ;
   this.O2820MontBarrasBoletoId = 0 ;
   this.A2821MontBarrasBoletoTipo = "" ;
   this.Z2821MontBarrasBoletoTipo = "" ;
   this.O2821MontBarrasBoletoTipo = "" ;
   this.A2823MontBarrasBoletoPesoIni = 0 ;
   this.Z2823MontBarrasBoletoPesoIni = 0 ;
   this.O2823MontBarrasBoletoPesoIni = 0 ;
   this.A2824MontBarrasBoletoPesoFin = 0 ;
   this.Z2824MontBarrasBoletoPesoFin = 0 ;
   this.O2824MontBarrasBoletoPesoFin = 0 ;
   this.A2822MontBarrasBoletoBase = "" ;
   this.Z2822MontBarrasBoletoBase = "" ;
   this.O2822MontBarrasBoletoBase = "" ;
   this.A2825MontBarrasBoletoResto0 = "" ;
   this.Z2825MontBarrasBoletoResto0 = "" ;
   this.O2825MontBarrasBoletoResto0 = "" ;
   this.A2826MontBarrasBoletoResto1 = "" ;
   this.Z2826MontBarrasBoletoResto1 = "" ;
   this.O2826MontBarrasBoletoResto1 = "" ;
   this.A3087MontBarrasBoletoResto10 = "" ;
   this.Z3087MontBarrasBoletoResto10 = "" ;
   this.O3087MontBarrasBoletoResto10 = "" ;
   this.A3088MontBarrasBoletoSubtraiResto = "" ;
   this.Z3088MontBarrasBoletoSubtraiResto = "" ;
   this.O3088MontBarrasBoletoSubtraiResto = "" ;
   this.A2828MontBarrasBoletoQtdeDigSoma = "" ;
   this.Z2828MontBarrasBoletoQtdeDigSoma = "" ;
   this.O2828MontBarrasBoletoQtdeDigSoma = "" ;
   this.A2827MontBarrasBoletoDtBaseFtVenc = gx.date.nullDate() ;
   this.Z2827MontBarrasBoletoDtBaseFtVenc = gx.date.nullDate() ;
   this.O2827MontBarrasBoletoDtBaseFtVenc = gx.date.nullDate() ;
   this.A2830MontBarrasBoletoUsuarioAlt = "" ;
   this.Z2830MontBarrasBoletoUsuarioAlt = "" ;
   this.O2830MontBarrasBoletoUsuarioAlt = "" ;
   this.A2829MontBarrasBoletoDataAlt = gx.date.nullDate() ;
   this.Z2829MontBarrasBoletoDataAlt = gx.date.nullDate() ;
   this.O2829MontBarrasBoletoDataAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV19SnAlterou = "" ;
   this.AV18MontBarrasBoletoId = 0 ;
   this.A2819MontBarrasBoletoEmpresaId = "" ;
   this.A2820MontBarrasBoletoId = 0 ;
   this.A2830MontBarrasBoletoUsuarioAlt = "" ;
   this.A2829MontBarrasBoletoDataAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A2821MontBarrasBoletoTipo = "" ;
   this.A2822MontBarrasBoletoBase = "" ;
   this.A2823MontBarrasBoletoPesoIni = 0 ;
   this.A2824MontBarrasBoletoPesoFin = 0 ;
   this.A2825MontBarrasBoletoResto0 = "" ;
   this.A2826MontBarrasBoletoResto1 = "" ;
   this.A3087MontBarrasBoletoResto10 = "" ;
   this.A2827MontBarrasBoletoDtBaseFtVenc = gx.date.nullDate() ;
   this.A2828MontBarrasBoletoQtdeDigSoma = "" ;
   this.A3088MontBarrasBoletoSubtraiResto = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12552_client": ["'FECHAR'", true] ,"e13552_client": ["AFTER TRN", true] ,"e1455294_client": ["ENTER", true] ,"e1555294_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18MontBarrasBoletoId',fld:'vMONTBARRASBOLETOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18MontBarrasBoletoId", "vMONTBARRASBOLETOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2819MontBarrasBoletoEmpresaId", "MONTBARRASBOLETOEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 294 ]= ["O2827MontBarrasBoletoDtBaseFtVenc","O2828MontBarrasBoletoQtdeDigSoma","O2826MontBarrasBoletoResto1","O2825MontBarrasBoletoResto0","O2822MontBarrasBoletoBase","O2824MontBarrasBoletoPesoFin","O2823MontBarrasBoletoPesoIni","O2821MontBarrasBoletoTipo"] ;
});
gx.setParentObj(new tmontbarrasboleto());

/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:52:11.13
*/
gx.evt.autoSkip = false;
gx.define('tequipamentos', false, function () {
   this.ServerClass =  "tequipamentos" ;
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
      this.AV18EquipamentoNumeroLoja=gx.fn.getIntegerValue("vEQUIPAMENTONUMEROLOJA",'.') ;
      this.AV19EquipamentoSequenciaECF=gx.fn.getIntegerValue("vEQUIPAMENTOSEQUENCIAECF",'.') ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Equipamentonumeroloja=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EQUIPAMENTONUMEROLOJA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Equipamentosequenciaecf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EQUIPAMENTOSEQUENCIAECF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Equipamentonumeroserie=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EQUIPAMENTONUMEROSERIE");
         this.AnyError  = 0;
         if ( (""==this.A6524EquipamentoNumeroSerie) )
         {
            try {
               gxballoon.setError("Informe o número de série");
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
   this.Valid_Equipamentonumintervencao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EQUIPAMENTONUMINTERVENCAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Equipamentonumerousuarioecf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EQUIPAMENTONUMEROUSUARIOECF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Equipamentoletramfadicionalecf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EQUIPAMENTOLETRAMFADICIONALECF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Equipamentomodeloecf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EQUIPAMENTOMODELOECF");
         this.AnyError  = 0;
         if ( (""==this.A6528EquipamentoModeloECF) )
         {
            try {
               gxballoon.setError("Informe o modelo do ECF");
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
   this.Valid_Modelodocfiscalcod=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Modelodocfiscalcod",["gx.O.A8039ModeloDocFiscalCod", "gx.O.A8040ModeloDocFiscalDesc"],["A8040ModeloDocFiscalDesc"]);
      return true;
   }
   this.Valid_Equipamentodescontoissqnecf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EQUIPAMENTODESCONTOISSQNECF");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e129k2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e139k2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e149k521_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e159k521_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,43,45,48,50,51,55,58,61,63,65,74,76,78];
   this.GXLastCtrlId =78;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Equipamentonumeroloja,isvalid:null,rgrid:[],fld:"EQUIPAMENTONUMEROLOJA",gxz:"Z6532EquipamentoNumeroLoja",gxold:"O6532EquipamentoNumeroLoja",gxvar:"A6532EquipamentoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6532EquipamentoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6532EquipamentoNumeroLoja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EQUIPAMENTONUMEROLOJA",gx.O.A6532EquipamentoNumeroLoja,0)},c2v:function(){gx.O.A6532EquipamentoNumeroLoja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EQUIPAMENTONUMEROLOJA",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Equipamentosequenciaecf,isvalid:null,rgrid:[],fld:"EQUIPAMENTOSEQUENCIAECF",gxz:"Z6533EquipamentoSequenciaECF",gxold:"O6533EquipamentoSequenciaECF",gxvar:"A6533EquipamentoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6533EquipamentoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6533EquipamentoSequenciaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EQUIPAMENTOSEQUENCIAECF",gx.O.A6533EquipamentoSequenciaECF,0)},c2v:function(){gx.O.A6533EquipamentoSequenciaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EQUIPAMENTOSEQUENCIAECF",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Equipamentonumeroserie,isvalid:null,rgrid:[],fld:"EQUIPAMENTONUMEROSERIE",gxz:"Z6524EquipamentoNumeroSerie",gxold:"O6524EquipamentoNumeroSerie",gxvar:"A6524EquipamentoNumeroSerie",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6524EquipamentoNumeroSerie=Value},v2z:function(Value){gx.O.Z6524EquipamentoNumeroSerie=Value},v2c:function(){gx.fn.setControlValue("EQUIPAMENTONUMEROSERIE",gx.O.A6524EquipamentoNumeroSerie,0)},c2v:function(){gx.O.A6524EquipamentoNumeroSerie=this.val()},val:function(){return gx.fn.getControlValue("EQUIPAMENTONUMEROSERIE")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Equipamentonumintervencao,isvalid:null,rgrid:[],fld:"EQUIPAMENTONUMINTERVENCAO",gxz:"Z6525EquipamentoNumIntervencao",gxold:"O6525EquipamentoNumIntervencao",gxvar:"A6525EquipamentoNumIntervencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6525EquipamentoNumIntervencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6525EquipamentoNumIntervencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EQUIPAMENTONUMINTERVENCAO",gx.O.A6525EquipamentoNumIntervencao,0)},c2v:function(){gx.O.A6525EquipamentoNumIntervencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EQUIPAMENTONUMINTERVENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Equipamentonumerousuarioecf,isvalid:null,rgrid:[],fld:"EQUIPAMENTONUMEROUSUARIOECF",gxz:"Z6526EquipamentoNumeroUsuarioECF",gxold:"O6526EquipamentoNumeroUsuarioECF",gxvar:"A6526EquipamentoNumeroUsuarioECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6526EquipamentoNumeroUsuarioECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6526EquipamentoNumeroUsuarioECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EQUIPAMENTONUMEROUSUARIOECF",gx.O.A6526EquipamentoNumeroUsuarioECF,0)},c2v:function(){gx.O.A6526EquipamentoNumeroUsuarioECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EQUIPAMENTONUMEROUSUARIOECF",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Equipamentoletramfadicionalecf,isvalid:null,rgrid:[],fld:"EQUIPAMENTOLETRAMFADICIONALECF",gxz:"Z6527EquipamentoLetraMFAdicionalECF",gxold:"O6527EquipamentoLetraMFAdicionalECF",gxvar:"A6527EquipamentoLetraMFAdicionalECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6527EquipamentoLetraMFAdicionalECF=Value},v2z:function(Value){gx.O.Z6527EquipamentoLetraMFAdicionalECF=Value},v2c:function(){gx.fn.setControlValue("EQUIPAMENTOLETRAMFADICIONALECF",gx.O.A6527EquipamentoLetraMFAdicionalECF,0)},c2v:function(){gx.O.A6527EquipamentoLetraMFAdicionalECF=this.val()},val:function(){return gx.fn.getControlValue("EQUIPAMENTOLETRAMFADICIONALECF")},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Equipamentomodeloecf,isvalid:null,rgrid:[],fld:"EQUIPAMENTOMODELOECF",gxz:"Z6528EquipamentoModeloECF",gxold:"O6528EquipamentoModeloECF",gxvar:"A6528EquipamentoModeloECF",ucs:[],op:[45],ip:[45],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6528EquipamentoModeloECF=Value},v2z:function(Value){gx.O.Z6528EquipamentoModeloECF=Value},v2c:function(){gx.fn.setControlValue("EQUIPAMENTOMODELOECF",gx.O.A6528EquipamentoModeloECF,0)},c2v:function(){gx.O.A6528EquipamentoModeloECF=this.val()},val:function(){return gx.fn.getControlValue("EQUIPAMENTOMODELOECF")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Modelodocfiscalcod,isvalid:null,rgrid:[],fld:"MODELODOCFISCALCOD",gxz:"Z8039ModeloDocFiscalCod",gxold:"O8039ModeloDocFiscalCod",gxvar:"A8039ModeloDocFiscalCod",ucs:[],op:[51],ip:[51,50],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8039ModeloDocFiscalCod=Value},v2z:function(Value){gx.O.Z8039ModeloDocFiscalCod=Value},v2c:function(){gx.fn.setControlValue("MODELODOCFISCALCOD",gx.O.A8039ModeloDocFiscalCod,0)},c2v:function(){gx.O.A8039ModeloDocFiscalCod=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCFISCALCOD")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MODELODOCFISCALDESC",gxz:"Z8040ModeloDocFiscalDesc",gxold:"O8040ModeloDocFiscalDesc",gxvar:"A8040ModeloDocFiscalDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8040ModeloDocFiscalDesc=Value},v2z:function(Value){gx.O.Z8040ModeloDocFiscalDesc=Value},v2c:function(){gx.fn.setControlValue("MODELODOCFISCALDESC",gx.O.A8040ModeloDocFiscalDesc,0)},c2v:function(){gx.O.A8040ModeloDocFiscalDesc=this.val()},val:function(){return gx.fn.getControlValue("MODELODOCFISCALDESC")},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Equipamentodescontoissqnecf,isvalid:null,rgrid:[],fld:"EQUIPAMENTODESCONTOISSQNECF",gxz:"Z6529EquipamentoDescontoISSQNECF",gxold:"O6529EquipamentoDescontoISSQNECF",gxvar:"A6529EquipamentoDescontoISSQNECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A6529EquipamentoDescontoISSQNECF=Value},v2z:function(Value){gx.O.Z6529EquipamentoDescontoISSQNECF=Value},v2c:function(){gx.fn.setCheckBoxValue("EQUIPAMENTODESCONTOISSQNECF",gx.O.A6529EquipamentoDescontoISSQNECF,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6529EquipamentoDescontoISSQNECF=this.val()},val:function(){return gx.fn.getControlValue("EQUIPAMENTODESCONTOISSQNECF")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TABLE5",grid:0};
   GXValidFnc[61]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTOUSUARIOALT",gxz:"Z6530EquipamentoUsuarioAlt",gxold:"O6530EquipamentoUsuarioAlt",gxvar:"A6530EquipamentoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6530EquipamentoUsuarioAlt=Value},v2z:function(Value){gx.O.Z6530EquipamentoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("EQUIPAMENTOUSUARIOALT",gx.O.A6530EquipamentoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6530EquipamentoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("EQUIPAMENTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[65]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTODATAHORAALT",gxz:"Z6531EquipamentoDataHoraAlt",gxold:"O6531EquipamentoDataHoraAlt",gxvar:"A6531EquipamentoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6531EquipamentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6531EquipamentoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("EQUIPAMENTODATAHORAALT",gx.O.A6531EquipamentoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6531EquipamentoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("EQUIPAMENTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[74]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[76]={fld:"BTNHELP",grid:0};
   GXValidFnc[78]={fld:"PROMPT_8039",grid:521};
   this.A6532EquipamentoNumeroLoja = 0 ;
   this.Z6532EquipamentoNumeroLoja = 0 ;
   this.O6532EquipamentoNumeroLoja = 0 ;
   this.A6533EquipamentoSequenciaECF = 0 ;
   this.Z6533EquipamentoSequenciaECF = 0 ;
   this.O6533EquipamentoSequenciaECF = 0 ;
   this.A6524EquipamentoNumeroSerie = "" ;
   this.Z6524EquipamentoNumeroSerie = "" ;
   this.O6524EquipamentoNumeroSerie = "" ;
   this.A6525EquipamentoNumIntervencao = 0 ;
   this.Z6525EquipamentoNumIntervencao = 0 ;
   this.O6525EquipamentoNumIntervencao = 0 ;
   this.A6526EquipamentoNumeroUsuarioECF = 0 ;
   this.Z6526EquipamentoNumeroUsuarioECF = 0 ;
   this.O6526EquipamentoNumeroUsuarioECF = 0 ;
   this.A6527EquipamentoLetraMFAdicionalECF = "" ;
   this.Z6527EquipamentoLetraMFAdicionalECF = "" ;
   this.O6527EquipamentoLetraMFAdicionalECF = "" ;
   this.A6528EquipamentoModeloECF = "" ;
   this.Z6528EquipamentoModeloECF = "" ;
   this.O6528EquipamentoModeloECF = "" ;
   this.A8039ModeloDocFiscalCod = "" ;
   this.Z8039ModeloDocFiscalCod = "" ;
   this.O8039ModeloDocFiscalCod = "" ;
   this.A8040ModeloDocFiscalDesc = "" ;
   this.Z8040ModeloDocFiscalDesc = "" ;
   this.O8040ModeloDocFiscalDesc = "" ;
   this.A6529EquipamentoDescontoISSQNECF = "" ;
   this.Z6529EquipamentoDescontoISSQNECF = "" ;
   this.O6529EquipamentoDescontoISSQNECF = "" ;
   this.A6530EquipamentoUsuarioAlt = "" ;
   this.Z6530EquipamentoUsuarioAlt = "" ;
   this.O6530EquipamentoUsuarioAlt = "" ;
   this.A6531EquipamentoDataHoraAlt = gx.date.nullDate() ;
   this.Z6531EquipamentoDataHoraAlt = gx.date.nullDate() ;
   this.O6531EquipamentoDataHoraAlt = gx.date.nullDate() ;
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
   this.AV20SnAlterou = "" ;
   this.AV18EquipamentoNumeroLoja = 0 ;
   this.AV19EquipamentoSequenciaECF = 0 ;
   this.A6532EquipamentoNumeroLoja = 0 ;
   this.A6533EquipamentoSequenciaECF = 0 ;
   this.A6530EquipamentoUsuarioAlt = "" ;
   this.A6531EquipamentoDataHoraAlt = gx.date.nullDate() ;
   this.A6524EquipamentoNumeroSerie = "" ;
   this.A6525EquipamentoNumIntervencao = 0 ;
   this.A6526EquipamentoNumeroUsuarioECF = 0 ;
   this.A6527EquipamentoLetraMFAdicionalECF = "" ;
   this.A6528EquipamentoModeloECF = "" ;
   this.A6529EquipamentoDescontoISSQNECF = "" ;
   this.A8039ModeloDocFiscalCod = "" ;
   this.A8040ModeloDocFiscalDesc = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e129k2_client": ["'FECHAR'", true] ,"e139k2_client": ["AFTER TRN", true] ,"e149k521_client": ["ENTER", true] ,"e159k521_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV19EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_8039", [50]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18EquipamentoNumeroLoja", "vEQUIPAMENTONUMEROLOJA", 0, "int");
   this.setVCMap("AV19EquipamentoSequenciaECF", "vEQUIPAMENTOSEQUENCIAECF", 0, "int");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 521 ]= ["O6529EquipamentoDescontoISSQNECF","O6528EquipamentoModeloECF","O6527EquipamentoLetraMFAdicionalECF","O6526EquipamentoNumeroUsuarioECF","O6525EquipamentoNumIntervencao","O6524EquipamentoNumeroSerie"] ;
});
gx.setParentObj(new tequipamentos());

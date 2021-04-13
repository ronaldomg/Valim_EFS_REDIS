/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:20:0.75
*/
gx.evt.autoSkip = false;
gx.define('taliquotasn', false, function () {
   this.ServerClass =  "taliquotasn" ;
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
      this.AV19AliquotaSNMes=gx.fn.getIntegerValue("vALIQUOTASNMES",'.') ;
      this.AV20AliquotaSNAno=gx.fn.getIntegerValue("vALIQUOTASNANO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A7215AliquotaSNEmpresaId=gx.fn.getControlValue("ALIQUOTASNEMPRESAID") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV26Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV25Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Aliquotasnmes=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ALIQUOTASNMES");
         this.AnyError  = 0;
         if ( (0==this.A7216AliquotaSNMes) )
         {
            try {
               gxballoon.setError("Informe o mês de referência");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (0==this.A7216AliquotaSNMes) && this.A7216AliquotaSNMes > 12 )
         {
            try {
               gxballoon.setError("Mês de referência inválido");
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
   this.Valid_Aliquotasnano=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ALIQUOTASNANO");
         this.AnyError  = 0;
         if ( (0==this.A7217AliquotaSNAno) )
         {
            try {
               gxballoon.setError("Informe o ano de referência");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( ! (0==this.A7217AliquotaSNAno) && this.A7217AliquotaSNAno < 1900 )
         {
            try {
               gxballoon.setError("Ano de referência inválido");
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
   this.Valid_Aliquotasnpercentual=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ALIQUOTASNPERCENTUAL");
         this.AnyError  = 0;
         if ( (0.0==this.A7211AliquotaSNPercentual) )
         {
            try {
               gxballoon.setError("Informe o percentual");
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
   this.Valid_Aliquotasnvalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ALIQUOTASNVALOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12ai2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13ai2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14ai558_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15ai558_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,16,20,22,25,27,30,33,35,37,46,47,49];
   this.GXLastCtrlId =49;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aliquotasnmes,isvalid:null,rgrid:[],fld:"ALIQUOTASNMES",gxz:"Z7216AliquotaSNMes",gxold:"O7216AliquotaSNMes",gxvar:"A7216AliquotaSNMes",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7216AliquotaSNMes=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7216AliquotaSNMes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ALIQUOTASNMES",gx.O.A7216AliquotaSNMes,0)},c2v:function(){gx.O.A7216AliquotaSNMes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ALIQUOTASNMES",'.')},nac:function(){return !(0==this.AV19AliquotaSNMes)}};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aliquotasnano,isvalid:null,rgrid:[],fld:"ALIQUOTASNANO",gxz:"Z7217AliquotaSNAno",gxold:"O7217AliquotaSNAno",gxvar:"A7217AliquotaSNAno",ucs:[],op:[16],ip:[16],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7217AliquotaSNAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z7217AliquotaSNAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ALIQUOTASNANO",gx.O.A7217AliquotaSNAno,0)},c2v:function(){gx.O.A7217AliquotaSNAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ALIQUOTASNANO",'.')},nac:function(){return !(0==this.AV20AliquotaSNAno)}};
   GXValidFnc[20]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aliquotasnpercentual,isvalid:null,rgrid:[],fld:"ALIQUOTASNPERCENTUAL",gxz:"Z7211AliquotaSNPercentual",gxold:"O7211AliquotaSNPercentual",gxvar:"A7211AliquotaSNPercentual",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7211AliquotaSNPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7211AliquotaSNPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ALIQUOTASNPERCENTUAL",gx.O.A7211AliquotaSNPercentual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7211AliquotaSNPercentual=this.val()},val:function(){return gx.fn.getDecimalValue("ALIQUOTASNPERCENTUAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[25]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aliquotasnvalor,isvalid:null,rgrid:[],fld:"ALIQUOTASNVALOR",gxz:"Z7212AliquotaSNValor",gxold:"O7212AliquotaSNValor",gxvar:"A7212AliquotaSNValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7212AliquotaSNValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z7212AliquotaSNValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ALIQUOTASNVALOR",gx.O.A7212AliquotaSNValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7212AliquotaSNValor=this.val()},val:function(){return gx.fn.getDecimalValue("ALIQUOTASNVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 27 , function() {
   });
   GXValidFnc[30]={fld:"TABLE22",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTASNUSUARIOALT",gxz:"Z7213AliquotaSNUsuarioAlt",gxold:"O7213AliquotaSNUsuarioAlt",gxvar:"A7213AliquotaSNUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7213AliquotaSNUsuarioAlt=Value},v2z:function(Value){gx.O.Z7213AliquotaSNUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ALIQUOTASNUSUARIOALT",gx.O.A7213AliquotaSNUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7213AliquotaSNUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ALIQUOTASNUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[37]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ALIQUOTASNDATAHORAALT",gxz:"Z7214AliquotaSNDataHoraAlt",gxold:"O7214AliquotaSNDataHoraAlt",gxvar:"A7214AliquotaSNDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A7214AliquotaSNDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z7214AliquotaSNDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ALIQUOTASNDATAHORAALT",gx.O.A7214AliquotaSNDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A7214AliquotaSNDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ALIQUOTASNDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[46]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"JSVAL", format:2,grid:0};
   GXValidFnc[49]={fld:"BTNHELP",grid:0};
   this.A7216AliquotaSNMes = 0 ;
   this.Z7216AliquotaSNMes = 0 ;
   this.O7216AliquotaSNMes = 0 ;
   this.A7217AliquotaSNAno = 0 ;
   this.Z7217AliquotaSNAno = 0 ;
   this.O7217AliquotaSNAno = 0 ;
   this.A7211AliquotaSNPercentual = 0 ;
   this.Z7211AliquotaSNPercentual = 0 ;
   this.O7211AliquotaSNPercentual = 0 ;
   this.A7212AliquotaSNValor = 0 ;
   this.Z7212AliquotaSNValor = 0 ;
   this.O7212AliquotaSNValor = 0 ;
   this.A7213AliquotaSNUsuarioAlt = "" ;
   this.Z7213AliquotaSNUsuarioAlt = "" ;
   this.O7213AliquotaSNUsuarioAlt = "" ;
   this.A7214AliquotaSNDataHoraAlt = gx.date.nullDate() ;
   this.Z7214AliquotaSNDataHoraAlt = gx.date.nullDate() ;
   this.O7214AliquotaSNDataHoraAlt = gx.date.nullDate() ;
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
   this.AV18SnAlterou = "" ;
   this.AV19AliquotaSNMes = 0 ;
   this.AV20AliquotaSNAno = 0 ;
   this.A7215AliquotaSNEmpresaId = "" ;
   this.A7216AliquotaSNMes = 0 ;
   this.A7217AliquotaSNAno = 0 ;
   this.A7213AliquotaSNUsuarioAlt = "" ;
   this.A7214AliquotaSNDataHoraAlt = gx.date.nullDate() ;
   this.A7211AliquotaSNPercentual = 0 ;
   this.A7212AliquotaSNValor = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12ai2_client": ["'FECHAR'", true] ,"e13ai2_client": ["AFTER TRN", true] ,"e14ai558_client": ["ENTER", true] ,"e15ai558_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV19AliquotaSNMes',fld:'vALIQUOTASNMES'},{av:'AV20AliquotaSNAno',fld:'vALIQUOTASNANO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19AliquotaSNMes", "vALIQUOTASNMES", 0, "int");
   this.setVCMap("AV20AliquotaSNAno", "vALIQUOTASNANO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A7215AliquotaSNEmpresaId", "ALIQUOTASNEMPRESAID", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV26Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV25Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 558 ]= ["O7212AliquotaSNValor","O7211AliquotaSNPercentual"] ;
});
gx.setParentObj(new taliquotasn());

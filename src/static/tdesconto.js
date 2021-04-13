/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:23:51.85
*/
gx.evt.autoSkip = false;
gx.define('tdesconto', false, function () {
   this.ServerClass =  "tdesconto" ;
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
      this.AV19DescontoEmpresaId=gx.fn.getControlValue("vDESCONTOEMPRESAID") ;
      this.A8281DescontoEmpresaId=gx.fn.getControlValue("DESCONTOEMPRESAID") ;
      this.AV18DescontoId=gx.fn.getIntegerValue("vDESCONTOID",'.') ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Descontoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DESCONTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Descontoquantidademodulo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DESCONTOQUANTIDADEMODULO");
         this.AnyError  = 0;
         if ( (0==this.A8275DescontoQuantidadeModulo) )
         {
            try {
               gxballoon.setError("Informe a quantidade de módulo(s)");
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
   this.Valid_Descontoquantidadeempresa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DESCONTOQUANTIDADEEMPRESA");
         this.AnyError  = 0;
         if ( (0==this.A8276DescontoQuantidadeEmpresa) )
         {
            try {
               gxballoon.setError("Informe a quantidade de empresa(s)");
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
   this.Valid_Descontodesconto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("DESCONTODESCONTO");
         this.AnyError  = 0;
         if ( this.A8277DescontoDesconto > 100 || this.A8277DescontoDesconto < 0 )
         {
            try {
               gxballoon.setError("Informe o desconto corretamente");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( (0.0==this.A8277DescontoDesconto) )
         {
            try {
               gxballoon.setError("Informe o Desconto");
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
   this.e12bm2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13bm2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14bm612_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15bm612_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,35,37,39,48,49,51];
   this.GXLastCtrlId =51;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Descontoid,isvalid:null,rgrid:[],fld:"DESCONTOID",gxz:"Z8280DescontoId",gxold:"O8280DescontoId",gxvar:"A8280DescontoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8280DescontoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8280DescontoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DESCONTOID",gx.O.A8280DescontoId,0)},c2v:function(){gx.O.A8280DescontoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DESCONTOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Descontoquantidademodulo,isvalid:null,rgrid:[],fld:"DESCONTOQUANTIDADEMODULO",gxz:"Z8275DescontoQuantidadeModulo",gxold:"O8275DescontoQuantidadeModulo",gxvar:"A8275DescontoQuantidadeModulo",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8275DescontoQuantidadeModulo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8275DescontoQuantidadeModulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DESCONTOQUANTIDADEMODULO",gx.O.A8275DescontoQuantidadeModulo,0)},c2v:function(){gx.O.A8275DescontoQuantidadeModulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DESCONTOQUANTIDADEMODULO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Descontoquantidadeempresa,isvalid:null,rgrid:[],fld:"DESCONTOQUANTIDADEEMPRESA",gxz:"Z8276DescontoQuantidadeEmpresa",gxold:"O8276DescontoQuantidadeEmpresa",gxvar:"A8276DescontoQuantidadeEmpresa",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8276DescontoQuantidadeEmpresa=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8276DescontoQuantidadeEmpresa=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DESCONTOQUANTIDADEEMPRESA",gx.O.A8276DescontoQuantidadeEmpresa,0)},c2v:function(){gx.O.A8276DescontoQuantidadeEmpresa=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DESCONTOQUANTIDADEEMPRESA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Descontodesconto,isvalid:null,rgrid:[],fld:"DESCONTODESCONTO",gxz:"Z8277DescontoDesconto",gxold:"O8277DescontoDesconto",gxvar:"A8277DescontoDesconto",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8277DescontoDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z8277DescontoDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DESCONTODESCONTO",gx.O.A8277DescontoDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8277DescontoDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("DESCONTODESCONTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[32]={fld:"TABLE4",grid:0};
   GXValidFnc[35]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DESCONTOUSUARIOALT",gxz:"Z8278DescontoUsuarioAlt",gxold:"O8278DescontoUsuarioAlt",gxvar:"A8278DescontoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8278DescontoUsuarioAlt=Value},v2z:function(Value){gx.O.Z8278DescontoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("DESCONTOUSUARIOALT",gx.O.A8278DescontoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8278DescontoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("DESCONTOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DESCONTODATAHORAALT",gxz:"Z8279DescontoDataHoraAlt",gxold:"O8279DescontoDataHoraAlt",gxvar:"A8279DescontoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8279DescontoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8279DescontoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DESCONTODATAHORAALT",gx.O.A8279DescontoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8279DescontoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DESCONTODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[48]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[49]={fld:"JS", format:2,grid:0};
   GXValidFnc[51]={fld:"BTNHELP",grid:0};
   this.A8280DescontoId = 0 ;
   this.Z8280DescontoId = 0 ;
   this.O8280DescontoId = 0 ;
   this.A8275DescontoQuantidadeModulo = 0 ;
   this.Z8275DescontoQuantidadeModulo = 0 ;
   this.O8275DescontoQuantidadeModulo = 0 ;
   this.A8276DescontoQuantidadeEmpresa = 0 ;
   this.Z8276DescontoQuantidadeEmpresa = 0 ;
   this.O8276DescontoQuantidadeEmpresa = 0 ;
   this.A8277DescontoDesconto = 0 ;
   this.Z8277DescontoDesconto = 0 ;
   this.O8277DescontoDesconto = 0 ;
   this.A8278DescontoUsuarioAlt = "" ;
   this.Z8278DescontoUsuarioAlt = "" ;
   this.O8278DescontoUsuarioAlt = "" ;
   this.A8279DescontoDataHoraAlt = gx.date.nullDate() ;
   this.Z8279DescontoDataHoraAlt = gx.date.nullDate() ;
   this.O8279DescontoDataHoraAlt = gx.date.nullDate() ;
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
   this.AV19DescontoEmpresaId = "" ;
   this.AV20SnAlterou = "" ;
   this.AV18DescontoId = 0 ;
   this.A8280DescontoId = 0 ;
   this.A8281DescontoEmpresaId = "" ;
   this.A8278DescontoUsuarioAlt = "" ;
   this.A8279DescontoDataHoraAlt = gx.date.nullDate() ;
   this.A8275DescontoQuantidadeModulo = 0 ;
   this.A8276DescontoQuantidadeEmpresa = 0 ;
   this.A8277DescontoDesconto = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12bm2_client": ["'FECHAR'", true] ,"e13bm2_client": ["AFTER TRN", true] ,"e14bm612_client": ["ENTER", true] ,"e15bm612_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18DescontoId',fld:'vDESCONTOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19DescontoEmpresaId", "vDESCONTOEMPRESAID", 0, "char");
   this.setVCMap("A8281DescontoEmpresaId", "DESCONTOEMPRESAID", 0, "char");
   this.setVCMap("AV18DescontoId", "vDESCONTOID", 0, "int");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 612 ]= ["O8277DescontoDesconto","O8276DescontoQuantidadeEmpresa","O8275DescontoQuantidadeModulo"] ;
});
gx.setParentObj(new tdesconto());

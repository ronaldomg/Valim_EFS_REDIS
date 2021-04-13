/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:9:58.60
*/
gx.evt.autoSkip = false;
gx.define('tvalormetro', false, function () {
   this.ServerClass =  "tvalormetro" ;
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
      this.AV20ValorMetroId=gx.fn.getIntegerValue("vVALORMETROID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A5353ValorMetroEmpresaId=gx.fn.getControlValue("VALORMETROEMPRESAID") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Valormetroid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VALORMETROID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Valormetrodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VALORMETRODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A5265ValorMetroDescricao) )
         {
            try {
               gxballoon.setError("Informe a Descrição");
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
   this.Valid_Valormetrovalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("VALORMETROVALOR");
         this.AnyError  = 0;
         if ( (0.0==this.A5266ValorMetroValor) )
         {
            try {
               gxballoon.setError("Informe o Valor do Metro Quadrado");
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
   this.e128m2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e138m2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e148m466_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e158m466_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,31,33,35,44,45,47];
   this.GXLastCtrlId =47;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Valormetroid,isvalid:null,rgrid:[],fld:"VALORMETROID",gxz:"Z5264ValorMetroId",gxold:"O5264ValorMetroId",gxvar:"A5264ValorMetroId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5264ValorMetroId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5264ValorMetroId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("VALORMETROID",gx.O.A5264ValorMetroId,0)},c2v:function(){gx.O.A5264ValorMetroId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("VALORMETROID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Valormetrodescricao,isvalid:null,rgrid:[],fld:"VALORMETRODESCRICAO",gxz:"Z5265ValorMetroDescricao",gxold:"O5265ValorMetroDescricao",gxvar:"A5265ValorMetroDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5265ValorMetroDescricao=Value},v2z:function(Value){gx.O.Z5265ValorMetroDescricao=Value},v2c:function(){gx.fn.setControlValue("VALORMETRODESCRICAO",gx.O.A5265ValorMetroDescricao,0)},c2v:function(){gx.O.A5265ValorMetroDescricao=this.val()},val:function(){return gx.fn.getControlValue("VALORMETRODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Valormetrovalor,isvalid:null,rgrid:[],fld:"VALORMETROVALOR",gxz:"Z5266ValorMetroValor",gxold:"O5266ValorMetroValor",gxvar:"A5266ValorMetroValor",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5266ValorMetroValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5266ValorMetroValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("VALORMETROVALOR",gx.O.A5266ValorMetroValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5266ValorMetroValor=this.val()},val:function(){return gx.fn.getDecimalValue("VALORMETROVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TABLE4",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VALORMETROUSUARIOALT",gxz:"Z5351ValorMetroUsuarioAlt",gxold:"O5351ValorMetroUsuarioAlt",gxvar:"A5351ValorMetroUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5351ValorMetroUsuarioAlt=Value},v2z:function(Value){gx.O.Z5351ValorMetroUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("VALORMETROUSUARIOALT",gx.O.A5351ValorMetroUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5351ValorMetroUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("VALORMETROUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"VALORMETRODATAHORAALT",gxz:"Z5352ValorMetroDataHoraAlt",gxold:"O5352ValorMetroDataHoraAlt",gxvar:"A5352ValorMetroDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5352ValorMetroDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5352ValorMetroDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("VALORMETRODATAHORAALT",gx.O.A5352ValorMetroDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5352ValorMetroDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("VALORMETRODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"JSVAL", format:2,grid:0};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   this.A5264ValorMetroId = 0 ;
   this.Z5264ValorMetroId = 0 ;
   this.O5264ValorMetroId = 0 ;
   this.A5265ValorMetroDescricao = "" ;
   this.Z5265ValorMetroDescricao = "" ;
   this.O5265ValorMetroDescricao = "" ;
   this.A5266ValorMetroValor = 0 ;
   this.Z5266ValorMetroValor = 0 ;
   this.O5266ValorMetroValor = 0 ;
   this.A5351ValorMetroUsuarioAlt = "" ;
   this.Z5351ValorMetroUsuarioAlt = "" ;
   this.O5351ValorMetroUsuarioAlt = "" ;
   this.A5352ValorMetroDataHoraAlt = gx.date.nullDate() ;
   this.Z5352ValorMetroDataHoraAlt = gx.date.nullDate() ;
   this.O5352ValorMetroDataHoraAlt = gx.date.nullDate() ;
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
   this.AV12EmpresaPadrao = "" ;
   this.AV18SnAlterou = "" ;
   this.AV20ValorMetroId = 0 ;
   this.A5353ValorMetroEmpresaId = "" ;
   this.A5264ValorMetroId = 0 ;
   this.A5351ValorMetroUsuarioAlt = "" ;
   this.A5352ValorMetroDataHoraAlt = gx.date.nullDate() ;
   this.A5266ValorMetroValor = 0 ;
   this.A5265ValorMetroDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e128m2_client": ["'FECHAR'", true] ,"e138m2_client": ["AFTER TRN", true] ,"e148m466_client": ["ENTER", true] ,"e158m466_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20ValorMetroId',fld:'vVALORMETROID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20ValorMetroId", "vVALORMETROID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A5353ValorMetroEmpresaId", "VALORMETROEMPRESAID", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 466 ]= ["O5266ValorMetroValor","O5265ValorMetroDescricao"] ;
});
gx.setParentObj(new tvalormetro());

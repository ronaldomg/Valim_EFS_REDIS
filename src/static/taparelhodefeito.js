/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:29:37.23
*/
gx.evt.autoSkip = false;
gx.define('taparelhodefeito', false, function () {
   this.ServerClass =  "taparelhodefeito" ;
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
      this.AV20AparelhoDefeitoId=gx.fn.getIntegerValue("vAPARELHODEFEITOID",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A8874AparelhoDefeitoEmpresaId=gx.fn.getControlValue("APARELHODEFEITOEMPRESAID") ;
      this.AV19SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Aparelhodefeitoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHODEFEITOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Aparelhodefeitodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("APARELHODEFEITODESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A8871AparelhoDefeitoDescricao) )
         {
            try {
               gxballoon.setError("Informe uma Descrição");
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
   this.e12cv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13cv2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14cv663_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15cv663_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,26,28,30,39,41];
   this.GXLastCtrlId =41;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Aparelhodefeitoid,isvalid:null,rgrid:[],fld:"APARELHODEFEITOID",gxz:"Z8875AparelhoDefeitoId",gxold:"O8875AparelhoDefeitoId",gxvar:"A8875AparelhoDefeitoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8875AparelhoDefeitoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8875AparelhoDefeitoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("APARELHODEFEITOID",gx.O.A8875AparelhoDefeitoId,0)},c2v:function(){gx.O.A8875AparelhoDefeitoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("APARELHODEFEITOID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Aparelhodefeitodescricao,isvalid:null,rgrid:[],fld:"APARELHODEFEITODESCRICAO",gxz:"Z8871AparelhoDefeitoDescricao",gxold:"O8871AparelhoDefeitoDescricao",gxvar:"A8871AparelhoDefeitoDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8871AparelhoDefeitoDescricao=Value},v2z:function(Value){gx.O.Z8871AparelhoDefeitoDescricao=Value},v2c:function(){gx.fn.setControlValue("APARELHODEFEITODESCRICAO",gx.O.A8871AparelhoDefeitoDescricao,0)},c2v:function(){gx.O.A8871AparelhoDefeitoDescricao=this.val()},val:function(){return gx.fn.getControlValue("APARELHODEFEITODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE7",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHODEFEITOUSUALT",gxz:"Z8872AparelhoDefeitoUsuAlt",gxold:"O8872AparelhoDefeitoUsuAlt",gxvar:"A8872AparelhoDefeitoUsuAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8872AparelhoDefeitoUsuAlt=Value},v2z:function(Value){gx.O.Z8872AparelhoDefeitoUsuAlt=Value},v2c:function(){gx.fn.setControlValue("APARELHODEFEITOUSUALT",gx.O.A8872AparelhoDefeitoUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8872AparelhoDefeitoUsuAlt=this.val()},val:function(){return gx.fn.getControlValue("APARELHODEFEITOUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"APARELHODEFEITODATAUSUALT",gxz:"Z8873AparelhoDefeitoDataUsuAlt",gxold:"O8873AparelhoDefeitoDataUsuAlt",gxvar:"A8873AparelhoDefeitoDataUsuAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8873AparelhoDefeitoDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8873AparelhoDefeitoDataUsuAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("APARELHODEFEITODATAUSUALT",gx.O.A8873AparelhoDefeitoDataUsuAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8873AparelhoDefeitoDataUsuAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("APARELHODEFEITODATAUSUALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A8875AparelhoDefeitoId = 0 ;
   this.Z8875AparelhoDefeitoId = 0 ;
   this.O8875AparelhoDefeitoId = 0 ;
   this.A8871AparelhoDefeitoDescricao = "" ;
   this.Z8871AparelhoDefeitoDescricao = "" ;
   this.O8871AparelhoDefeitoDescricao = "" ;
   this.A8872AparelhoDefeitoUsuAlt = "" ;
   this.Z8872AparelhoDefeitoUsuAlt = "" ;
   this.O8872AparelhoDefeitoUsuAlt = "" ;
   this.A8873AparelhoDefeitoDataUsuAlt = gx.date.nullDate() ;
   this.Z8873AparelhoDefeitoDataUsuAlt = gx.date.nullDate() ;
   this.O8873AparelhoDefeitoDataUsuAlt = gx.date.nullDate() ;
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
   this.AV20AparelhoDefeitoId = 0 ;
   this.A8874AparelhoDefeitoEmpresaId = "" ;
   this.A8875AparelhoDefeitoId = 0 ;
   this.A8872AparelhoDefeitoUsuAlt = "" ;
   this.A8873AparelhoDefeitoDataUsuAlt = gx.date.nullDate() ;
   this.A8871AparelhoDefeitoDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12cv2_client": ["'FECHAR'", true] ,"e13cv2_client": ["AFTER TRN", true] ,"e14cv663_client": ["ENTER", true] ,"e15cv663_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV20AparelhoDefeitoId',fld:'vAPARELHODEFEITOID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV20AparelhoDefeitoId", "vAPARELHODEFEITOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A8874AparelhoDefeitoEmpresaId", "APARELHODEFEITOEMPRESAID", 0, "char");
   this.setVCMap("AV19SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 663 ]= ["O8871AparelhoDefeitoDescricao"] ;
});
gx.setParentObj(new taparelhodefeito());

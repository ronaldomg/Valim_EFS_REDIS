/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:38:4.2
*/
gx.evt.autoSkip = false;
gx.define('tobraadicional', false, function () {
   this.ServerClass =  "tobraadicional" ;
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
      this.A11311ObraEmpresaId=gx.fn.getControlValue("OBRAEMPRESAID") ;
      this.AV8ObraCodigo=gx.fn.getIntegerValue("vOBRACODIGO",'.') ;
      this.AV7ObraAdicionalSeq=gx.fn.getIntegerValue("vOBRAADICIONALSEQ",'.') ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV11UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV21Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Obracodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Obracodigo",["gx.O.A11311ObraEmpresaId", "gx.O.A11312ObraCodigo"],[]);
      return true;
   }
   this.Valid_Obraadicionalseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OBRAADICIONALSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Obraadicionaldescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OBRAADICIONALDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A11548ObraAdicionalDescricao) )
         {
            try {
               gxballoon.setError("Informe o descritivo");
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
   this.Validv_Obraempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vOBRAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12gm2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13gm2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14gm848_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15gm848_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,19,21,24,26,29,32,34,36,45,46,48];
   this.GXLastCtrlId =48;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Obracodigo,isvalid:null,rgrid:[],fld:"OBRACODIGO",gxz:"Z11312ObraCodigo",gxold:"O11312ObraCodigo",gxvar:"A11312ObraCodigo",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11312ObraCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11312ObraCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRACODIGO",gx.O.A11312ObraCodigo,0)},c2v:function(){gx.O.A11312ObraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRACODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOBRANOME",gxz:"ZV9ObraNome",gxold:"OV9ObraNome",gxvar:"AV9ObraNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9ObraNome=Value},v2z:function(Value){gx.O.ZV9ObraNome=Value},v2c:function(){gx.fn.setControlValue("vOBRANOME",gx.O.AV9ObraNome,0)},c2v:function(){gx.O.AV9ObraNome=this.val()},val:function(){return gx.fn.getControlValue("vOBRANOME")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Obraadicionalseq,isvalid:null,rgrid:[],fld:"OBRAADICIONALSEQ",gxz:"Z11542ObraAdicionalSeq",gxold:"O11542ObraAdicionalSeq",gxvar:"A11542ObraAdicionalSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11542ObraAdicionalSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z11542ObraAdicionalSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("OBRAADICIONALSEQ",gx.O.A11542ObraAdicionalSeq,0)},c2v:function(){gx.O.A11542ObraAdicionalSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("OBRAADICIONALSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Obraadicionaldescricao,isvalid:null,rgrid:[],fld:"OBRAADICIONALDESCRICAO",gxz:"Z11548ObraAdicionalDescricao",gxold:"O11548ObraAdicionalDescricao",gxvar:"A11548ObraAdicionalDescricao",ucs:[],op:[26],ip:[26],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11548ObraAdicionalDescricao=Value},v2z:function(Value){gx.O.Z11548ObraAdicionalDescricao=Value},v2c:function(){gx.fn.setControlValue("OBRAADICIONALDESCRICAO",gx.O.A11548ObraAdicionalDescricao,0)},c2v:function(){gx.O.A11548ObraAdicionalDescricao=this.val()},val:function(){return gx.fn.getControlValue("OBRAADICIONALDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TABLE4",grid:0};
   GXValidFnc[32]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAADICIONALUSUARIOALT",gxz:"Z11549ObraAdicionalUsuarioAlt",gxold:"O11549ObraAdicionalUsuarioAlt",gxvar:"A11549ObraAdicionalUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11549ObraAdicionalUsuarioAlt=Value},v2z:function(Value){gx.O.Z11549ObraAdicionalUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("OBRAADICIONALUSUARIOALT",gx.O.A11549ObraAdicionalUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11549ObraAdicionalUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("OBRAADICIONALUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[36]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OBRAADICIONALDATAHORAALT",gxz:"Z11547ObraAdicionalDataHoraAlt",gxold:"O11547ObraAdicionalDataHoraAlt",gxvar:"A11547ObraAdicionalDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A11547ObraAdicionalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z11547ObraAdicionalDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OBRAADICIONALDATAHORAALT",gx.O.A11547ObraAdicionalDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A11547ObraAdicionalDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("OBRAADICIONALDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 36 , function() {
   });
   GXValidFnc[45]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV15AcessoSistemaSequencia",gxold:"OV15AcessoSistemaSequencia",gxvar:"AV15AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV15AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV15AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Obraempresaid,isvalid:null,rgrid:[],fld:"vOBRAEMPRESAID",gxz:"ZV10ObraEmpresaId",gxold:"OV10ObraEmpresaId",gxvar:"AV10ObraEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10ObraEmpresaId=Value},v2z:function(Value){gx.O.ZV10ObraEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vOBRAEMPRESAID",gx.O.AV10ObraEmpresaId,0)},c2v:function(){gx.O.AV10ObraEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vOBRAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"BTNHELP",grid:0};
   this.A11312ObraCodigo = 0 ;
   this.Z11312ObraCodigo = 0 ;
   this.O11312ObraCodigo = 0 ;
   this.AV9ObraNome = "" ;
   this.ZV9ObraNome = "" ;
   this.OV9ObraNome = "" ;
   this.A11542ObraAdicionalSeq = 0 ;
   this.Z11542ObraAdicionalSeq = 0 ;
   this.O11542ObraAdicionalSeq = 0 ;
   this.A11548ObraAdicionalDescricao = "" ;
   this.Z11548ObraAdicionalDescricao = "" ;
   this.O11548ObraAdicionalDescricao = "" ;
   this.A11549ObraAdicionalUsuarioAlt = "" ;
   this.Z11549ObraAdicionalUsuarioAlt = "" ;
   this.O11549ObraAdicionalUsuarioAlt = "" ;
   this.A11547ObraAdicionalDataHoraAlt = gx.date.nullDate() ;
   this.Z11547ObraAdicionalDataHoraAlt = gx.date.nullDate() ;
   this.O11547ObraAdicionalDataHoraAlt = gx.date.nullDate() ;
   this.AV15AcessoSistemaSequencia = 0 ;
   this.ZV15AcessoSistemaSequencia = 0 ;
   this.OV15AcessoSistemaSequencia = 0 ;
   this.AV10ObraEmpresaId = "" ;
   this.ZV10ObraEmpresaId = "" ;
   this.OV10ObraEmpresaId = "" ;
   this.AV11UsrCod = "" ;
   this.AV12EmpresaLogadaId = "" ;
   this.AV13Sistema = "" ;
   this.AV20Pgmname = "" ;
   this.AV21Pgmdesc = "" ;
   this.AV14MsgErro = "" ;
   this.AV15AcessoSistemaSequencia = 0 ;
   this.AV16Modulo = "" ;
   this.AV17Logon = {} ;
   this.AV19Tabela = "" ;
   this.AV10ObraEmpresaId = "" ;
   this.AV18SnAlterou = "" ;
   this.AV8ObraCodigo = 0 ;
   this.AV9ObraNome = "" ;
   this.AV7ObraAdicionalSeq = 0 ;
   this.A11311ObraEmpresaId = "" ;
   this.A11312ObraCodigo = 0 ;
   this.A11542ObraAdicionalSeq = 0 ;
   this.A11549ObraAdicionalUsuarioAlt = "" ;
   this.A11547ObraAdicionalDataHoraAlt = gx.date.nullDate() ;
   this.A11548ObraAdicionalDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12gm2_client": ["'FECHAR'", true] ,"e13gm2_client": ["AFTER TRN", true] ,"e14gm848_client": ["ENTER", true] ,"e15gm848_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV8ObraCodigo',fld:'vOBRACODIGO'},{av:'AV9ObraNome',fld:'vOBRANOME'},{av:'AV7ObraAdicionalSeq',fld:'vOBRAADICIONALSEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV15AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV15AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A11311ObraEmpresaId", "OBRAEMPRESAID", 0, "char");
   this.setVCMap("AV8ObraCodigo", "vOBRACODIGO", 0, "int");
   this.setVCMap("AV7ObraAdicionalSeq", "vOBRAADICIONALSEQ", 0, "int");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV11UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV21Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV20Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 848 ]= ["O11548ObraAdicionalDescricao"] ;
});
gx.setParentObj(new tobraadicional());

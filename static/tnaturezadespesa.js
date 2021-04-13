/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:37:37.29
*/
gx.evt.autoSkip = false;
gx.define('tnaturezadespesa', false, function () {
   this.ServerClass =  "tnaturezadespesa" ;
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
      this.AV17NaturezaDespesaId=gx.fn.getIntegerValue("vNATUREZADESPESAID",'.') ;
      this.AV20TipoDispendioEmpresaId=gx.fn.getControlValue("vTIPODISPENDIOEMPRESAID") ;
      this.A8180NaturezaDespesaTpDispEmp=gx.fn.getControlValue("NATUREZADESPESATPDISPEMP") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2076NaturezaDespesaEmpresaId=gx.fn.getControlValue("NATUREZADESPESAEMPRESAID") ;
      this.AV18SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A8429NaturezaDespesaTpDispSnOper=gx.fn.getControlValue("NATUREZADESPESATPDISPSNOPER") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Naturezadespesaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NATUREZADESPESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Naturezadespesadescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NATUREZADESPESADESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2077NaturezaDespesaDescricao) )
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
   this.Valid_Naturezadespesatpimpressao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NATUREZADESPESATPIMPRESSAO");
         this.AnyError  = 0;
         if ( this.A2074NaturezaDespesaTpImpressao == "" )
         {
            try {
               gxballoon.setError("Informe o Tipo de Impressão");
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
   this.Valid_Naturezadespesatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NATUREZADESPESATIPO");
         this.AnyError  = 0;
         if ( this.A2075NaturezaDespesaTipo == "" )
         {
            try {
               gxballoon.setError("Informe o Tipo de Natureza");
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
   this.Valid_Naturezadespesatpdispid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Naturezadespesatpdispid",["gx.O.AV20TipoDispendioEmpresaId", "gx.O.A8181NaturezaDespesaTpDispId", "gx.O.A8180NaturezaDespesaTpDispEmp", "gx.O.A8182NaturezaDespesaTpDispDesc", "gx.O.A8429NaturezaDespesaTpDispSnOper"],["A8180NaturezaDespesaTpDispEmp", "A8182NaturezaDespesaTpDispDesc", "A8429NaturezaDespesaTpDispSnOper"]);
      return true;
   }
   this.e123u2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133u2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e143u203_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153u203_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,36,39,41,47,50,52,54,63,65,67];
   this.GXLastCtrlId =67;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Naturezadespesaid,isvalid:null,rgrid:[],fld:"NATUREZADESPESAID",gxz:"Z2073NaturezaDespesaId",gxold:"O2073NaturezaDespesaId",gxvar:"A2073NaturezaDespesaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2073NaturezaDespesaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2073NaturezaDespesaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NATUREZADESPESAID",gx.O.A2073NaturezaDespesaId,0)},c2v:function(){gx.O.A2073NaturezaDespesaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NATUREZADESPESAID",'.')},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Naturezadespesadescricao,isvalid:null,rgrid:[],fld:"NATUREZADESPESADESCRICAO",gxz:"Z2077NaturezaDespesaDescricao",gxold:"O2077NaturezaDespesaDescricao",gxvar:"A2077NaturezaDespesaDescricao",ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2077NaturezaDespesaDescricao=Value},v2z:function(Value){gx.O.Z2077NaturezaDespesaDescricao=Value},v2c:function(){gx.fn.setControlValue("NATUREZADESPESADESCRICAO",gx.O.A2077NaturezaDespesaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2077NaturezaDespesaDescricao=this.val()},val:function(){return gx.fn.getControlValue("NATUREZADESPESADESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 20 , function() {
   });
   GXValidFnc[23]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Naturezadespesatpimpressao,isvalid:null,rgrid:[],fld:"NATUREZADESPESATPIMPRESSAO",gxz:"Z2074NaturezaDespesaTpImpressao",gxold:"O2074NaturezaDespesaTpImpressao",gxvar:"A2074NaturezaDespesaTpImpressao",ucs:[],op:[25],ip:[25],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2074NaturezaDespesaTpImpressao=Value},v2z:function(Value){gx.O.Z2074NaturezaDespesaTpImpressao=Value},v2c:function(){gx.fn.setComboBoxValue("NATUREZADESPESATPIMPRESSAO",gx.O.A2074NaturezaDespesaTpImpressao)},c2v:function(){gx.O.A2074NaturezaDespesaTpImpressao=this.val()},val:function(){return gx.fn.getControlValue("NATUREZADESPESATPIMPRESSAO")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Naturezadespesatipo,isvalid:null,rgrid:[],fld:"NATUREZADESPESATIPO",gxz:"Z2075NaturezaDespesaTipo",gxold:"O2075NaturezaDespesaTipo",gxvar:"A2075NaturezaDespesaTipo",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A2075NaturezaDespesaTipo=Value},v2z:function(Value){gx.O.Z2075NaturezaDespesaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("NATUREZADESPESATIPO",gx.O.A2075NaturezaDespesaTipo)},c2v:function(){gx.O.A2075NaturezaDespesaTipo=this.val()},val:function(){return gx.fn.getControlValue("NATUREZADESPESATIPO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Naturezadespesatpdispid,isvalid:null,rgrid:[],fld:"NATUREZADESPESATPDISPID",gxz:"Z8181NaturezaDespesaTpDispId",gxold:"O8181NaturezaDespesaTpDispId",gxvar:"A8181NaturezaDespesaTpDispId",ucs:[],op:[36],ip:[36,35],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8181NaturezaDespesaTpDispId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8181NaturezaDespesaTpDispId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NATUREZADESPESATPDISPID",gx.O.A8181NaturezaDespesaTpDispId,0)},c2v:function(){gx.O.A8181NaturezaDespesaTpDispId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NATUREZADESPESATPDISPID",'.')},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"svchar",len:70,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESPESATPDISPDESC",gxz:"Z8182NaturezaDespesaTpDispDesc",gxold:"O8182NaturezaDespesaTpDispDesc",gxvar:"A8182NaturezaDespesaTpDispDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8182NaturezaDespesaTpDispDesc=Value},v2z:function(Value){gx.O.Z8182NaturezaDespesaTpDispDesc=Value},v2c:function(){gx.fn.setControlValue("NATUREZADESPESATPDISPDESC",gx.O.A8182NaturezaDespesaTpDispDesc,0)},c2v:function(){gx.O.A8182NaturezaDespesaTpDispDesc=this.val()},val:function(){return gx.fn.getControlValue("NATUREZADESPESATPDISPDESC")},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESPESACODITEMFAP",gxz:"Z8183NaturezaDespesaCodItemFap",gxold:"O8183NaturezaDespesaCodItemFap",gxvar:"A8183NaturezaDespesaCodItemFap",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8183NaturezaDespesaCodItemFap=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8183NaturezaDespesaCodItemFap=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NATUREZADESPESACODITEMFAP",gx.O.A8183NaturezaDespesaCodItemFap,0)},c2v:function(){gx.O.A8183NaturezaDespesaCodItemFap=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NATUREZADESPESACODITEMFAP",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLE4",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESPESADATAHORAALT",gxz:"Z2079NaturezaDespesaDataHoraAlt",gxold:"O2079NaturezaDespesaDataHoraAlt",gxvar:"A2079NaturezaDespesaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2079NaturezaDespesaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2079NaturezaDespesaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NATUREZADESPESADATAHORAALT",gx.O.A2079NaturezaDespesaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2079NaturezaDespesaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NATUREZADESPESADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[54]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZADESPESAUSUARIOALT",gxz:"Z2078NaturezaDespesaUsuarioAlt",gxold:"O2078NaturezaDespesaUsuarioAlt",gxvar:"A2078NaturezaDespesaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2078NaturezaDespesaUsuarioAlt=Value},v2z:function(Value){gx.O.Z2078NaturezaDespesaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("NATUREZADESPESAUSUARIOALT",gx.O.A2078NaturezaDespesaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2078NaturezaDespesaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("NATUREZADESPESAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[63]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV19AcessoSistemaSequencia",gxold:"OV19AcessoSistemaSequencia",gxvar:"AV19AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV19AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV19AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={fld:"BTNHELP",grid:0};
   GXValidFnc[67]={fld:"PROMPT_8181",grid:203};
   this.A2073NaturezaDespesaId = 0 ;
   this.Z2073NaturezaDespesaId = 0 ;
   this.O2073NaturezaDespesaId = 0 ;
   this.A2077NaturezaDespesaDescricao = "" ;
   this.Z2077NaturezaDespesaDescricao = "" ;
   this.O2077NaturezaDespesaDescricao = "" ;
   this.A2074NaturezaDespesaTpImpressao = "" ;
   this.Z2074NaturezaDespesaTpImpressao = "" ;
   this.O2074NaturezaDespesaTpImpressao = "" ;
   this.A2075NaturezaDespesaTipo = "" ;
   this.Z2075NaturezaDespesaTipo = "" ;
   this.O2075NaturezaDespesaTipo = "" ;
   this.A8181NaturezaDespesaTpDispId = 0 ;
   this.Z8181NaturezaDespesaTpDispId = 0 ;
   this.O8181NaturezaDespesaTpDispId = 0 ;
   this.A8182NaturezaDespesaTpDispDesc = "" ;
   this.Z8182NaturezaDespesaTpDispDesc = "" ;
   this.O8182NaturezaDespesaTpDispDesc = "" ;
   this.A8183NaturezaDespesaCodItemFap = 0 ;
   this.Z8183NaturezaDespesaCodItemFap = 0 ;
   this.O8183NaturezaDespesaCodItemFap = 0 ;
   this.A2079NaturezaDespesaDataHoraAlt = gx.date.nullDate() ;
   this.Z2079NaturezaDespesaDataHoraAlt = gx.date.nullDate() ;
   this.O2079NaturezaDespesaDataHoraAlt = gx.date.nullDate() ;
   this.A2078NaturezaDespesaUsuarioAlt = "" ;
   this.Z2078NaturezaDespesaUsuarioAlt = "" ;
   this.O2078NaturezaDespesaUsuarioAlt = "" ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.ZV19AcessoSistemaSequencia = 0 ;
   this.OV19AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV19AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV20TipoDispendioEmpresaId = "" ;
   this.AV18SnAlterou = "" ;
   this.AV17NaturezaDespesaId = 0 ;
   this.A2076NaturezaDespesaEmpresaId = "" ;
   this.A2073NaturezaDespesaId = 0 ;
   this.A8180NaturezaDespesaTpDispEmp = "" ;
   this.A2078NaturezaDespesaUsuarioAlt = "" ;
   this.A2079NaturezaDespesaDataHoraAlt = gx.date.nullDate() ;
   this.A2077NaturezaDespesaDescricao = "" ;
   this.A2074NaturezaDespesaTpImpressao = "" ;
   this.A2075NaturezaDespesaTipo = "" ;
   this.A8181NaturezaDespesaTpDispId = 0 ;
   this.A8182NaturezaDespesaTpDispDesc = "" ;
   this.A8429NaturezaDespesaTpDispSnOper = "" ;
   this.A8183NaturezaDespesaCodItemFap = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e123u2_client": ["'FECHAR'", true] ,"e133u2_client": ["AFTER TRN", true] ,"e143u203_client": ["ENTER", true] ,"e153u203_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17NaturezaDespesaId',fld:'vNATUREZADESPESAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV19AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_8181", [35]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17NaturezaDespesaId", "vNATUREZADESPESAID", 0, "int");
   this.setVCMap("AV20TipoDispendioEmpresaId", "vTIPODISPENDIOEMPRESAID", 0, "char");
   this.setVCMap("A8180NaturezaDespesaTpDispEmp", "NATUREZADESPESATPDISPEMP", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2076NaturezaDespesaEmpresaId", "NATUREZADESPESAEMPRESAID", 0, "char");
   this.setVCMap("AV18SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A8429NaturezaDespesaTpDispSnOper", "NATUREZADESPESATPDISPSNOPER", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 203 ]= ["O2075NaturezaDespesaTipo","O2074NaturezaDespesaTpImpressao","O2077NaturezaDespesaDescricao","O2073NaturezaDespesaId"] ;
});
gx.setParentObj(new tnaturezadespesa());

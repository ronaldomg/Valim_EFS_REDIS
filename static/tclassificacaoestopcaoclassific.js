/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:57:51.30
*/
gx.evt.autoSkip = false;
gx.define('tclassificacaoestopcaoclassific', false, function () {
   this.ServerClass =  "tclassificacaoestopcaoclassific" ;
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
      this.AV19OpcaoClassificacaoEstId=gx.fn.getControlValue("vOPCAOCLASSIFICACAOESTID") ;
      this.AV18ClassificacaoEstId=gx.fn.getControlValue("vCLASSIFICACAOESTID") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2929ClassificacaoEstEmpresaId=gx.fn.getControlValue("CLASSIFICACAOESTEMPRESAID") ;
      this.AV21SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV28Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Classificacaoestid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Classificacaoestid",["gx.O.A2929ClassificacaoEstEmpresaId", "gx.O.A2930ClassificacaoEstId"],[]);
      return true;
   }
   this.Valid_Opcaoclassificacaoestid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OPCAOCLASSIFICACAOESTID");
         this.AnyError  = 0;
         if ( (""==this.A2931OpcaoClassificacaoEstId) )
         {
            try {
               gxballoon.setError("Informe o Código");
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
   this.Valid_Opcaoclassificacaoestdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("OPCAOCLASSIFICACAOESTDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2926OpcaoClassificacaoEstDescricao) )
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
   this.e127x2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e137x2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e147x432_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e157x432_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,16,19,21,25,27,30,33,35,37,46,48];
   this.GXLastCtrlId =48;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Classificacaoestid,isvalid:null,rgrid:[],fld:"CLASSIFICACAOESTID",gxz:"Z2930ClassificacaoEstId",gxold:"O2930ClassificacaoEstId",gxvar:"A2930ClassificacaoEstId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2930ClassificacaoEstId=Value},v2z:function(Value){gx.O.Z2930ClassificacaoEstId=Value},v2c:function(){gx.fn.setControlValue("CLASSIFICACAOESTID",gx.O.A2930ClassificacaoEstId,0)},c2v:function(){gx.O.A2930ClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("CLASSIFICACAOESTID")},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOESTDESCRICAO",gxz:"ZV22ClassificacaoEstDescricao",gxold:"OV22ClassificacaoEstDescricao",gxvar:"AV22ClassificacaoEstDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.ZV22ClassificacaoEstDescricao=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOESTDESCRICAO",gx.O.AV22ClassificacaoEstDescricao,0)},c2v:function(){gx.O.AV22ClassificacaoEstDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Opcaoclassificacaoestid,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAOESTID",gxz:"Z2931OpcaoClassificacaoEstId",gxold:"O2931OpcaoClassificacaoEstId",gxvar:"A2931OpcaoClassificacaoEstId",ucs:[],op:[21],ip:[21],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2931OpcaoClassificacaoEstId=Value},v2z:function(Value){gx.O.Z2931OpcaoClassificacaoEstId=Value},v2c:function(){gx.fn.setControlValue("OPCAOCLASSIFICACAOESTID",gx.O.A2931OpcaoClassificacaoEstId,0)},c2v:function(){gx.O.A2931OpcaoClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("OPCAOCLASSIFICACAOESTID")},nac:function(){return !(""==this.AV19OpcaoClassificacaoEstId)}};
   GXValidFnc[25]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Opcaoclassificacaoestdescricao,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAOESTDESCRICAO",gxz:"Z2926OpcaoClassificacaoEstDescricao",gxold:"O2926OpcaoClassificacaoEstDescricao",gxvar:"A2926OpcaoClassificacaoEstDescricao",ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2926OpcaoClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.Z2926OpcaoClassificacaoEstDescricao=Value},v2c:function(){gx.fn.setControlValue("OPCAOCLASSIFICACAOESTDESCRICAO",gx.O.A2926OpcaoClassificacaoEstDescricao,0)},c2v:function(){gx.O.A2926OpcaoClassificacaoEstDescricao=this.val()},val:function(){return gx.fn.getControlValue("OPCAOCLASSIFICACAOESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[30]={fld:"TABLE4",grid:0};
   GXValidFnc[33]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAOESTUSUARIOAL",gxz:"Z2927OpcaoClassificacaoEstUsuarioAl",gxold:"O2927OpcaoClassificacaoEstUsuarioAl",gxvar:"A2927OpcaoClassificacaoEstUsuarioAl",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2927OpcaoClassificacaoEstUsuarioAl=Value},v2z:function(Value){gx.O.Z2927OpcaoClassificacaoEstUsuarioAl=Value},v2c:function(){gx.fn.setControlValue("OPCAOCLASSIFICACAOESTUSUARIOAL",gx.O.A2927OpcaoClassificacaoEstUsuarioAl,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2927OpcaoClassificacaoEstUsuarioAl=this.val()},val:function(){return gx.fn.getControlValue("OPCAOCLASSIFICACAOESTUSUARIOAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[37]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"OPCAOCLASSIFICACAOESTDATAHORAA",gxz:"Z2928OpcaoClassificacaoEstDataHoraA",gxold:"O2928OpcaoClassificacaoEstDataHoraA",gxvar:"A2928OpcaoClassificacaoEstDataHoraA",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2928OpcaoClassificacaoEstDataHoraA=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2928OpcaoClassificacaoEstDataHoraA=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("OPCAOCLASSIFICACAOESTDATAHORAA",gx.O.A2928OpcaoClassificacaoEstDataHoraA,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2928OpcaoClassificacaoEstDataHoraA=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("OPCAOCLASSIFICACAOESTDATAHORAA")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[46]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"BTNHELP",grid:0};
   this.A2930ClassificacaoEstId = "" ;
   this.Z2930ClassificacaoEstId = "" ;
   this.O2930ClassificacaoEstId = "" ;
   this.AV22ClassificacaoEstDescricao = "" ;
   this.ZV22ClassificacaoEstDescricao = "" ;
   this.OV22ClassificacaoEstDescricao = "" ;
   this.A2931OpcaoClassificacaoEstId = "" ;
   this.Z2931OpcaoClassificacaoEstId = "" ;
   this.O2931OpcaoClassificacaoEstId = "" ;
   this.A2926OpcaoClassificacaoEstDescricao = "" ;
   this.Z2926OpcaoClassificacaoEstDescricao = "" ;
   this.O2926OpcaoClassificacaoEstDescricao = "" ;
   this.A2927OpcaoClassificacaoEstUsuarioAl = "" ;
   this.Z2927OpcaoClassificacaoEstUsuarioAl = "" ;
   this.O2927OpcaoClassificacaoEstUsuarioAl = "" ;
   this.A2928OpcaoClassificacaoEstDataHoraA = gx.date.nullDate() ;
   this.Z2928OpcaoClassificacaoEstDataHoraA = gx.date.nullDate() ;
   this.O2928OpcaoClassificacaoEstDataHoraA = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV27Pgmname = "" ;
   this.AV28Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV21SnAlterou = "" ;
   this.AV18ClassificacaoEstId = "" ;
   this.AV22ClassificacaoEstDescricao = "" ;
   this.AV19OpcaoClassificacaoEstId = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A2931OpcaoClassificacaoEstId = "" ;
   this.A2927OpcaoClassificacaoEstUsuarioAl = "" ;
   this.A2928OpcaoClassificacaoEstDataHoraA = gx.date.nullDate() ;
   this.A2926OpcaoClassificacaoEstDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e127x2_client": ["'FECHAR'", true] ,"e137x2_client": ["AFTER TRN", true] ,"e147x432_client": ["ENTER", true] ,"e157x432_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV22ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV19OpcaoClassificacaoEstId',fld:'vOPCAOCLASSIFICACAOESTID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV18ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'AV22ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'}],[{av:'AV22ClassificacaoEstDescricao',fld:'vCLASSIFICACAOESTDESCRICAO'},{av:'AV18ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV19OpcaoClassificacaoEstId", "vOPCAOCLASSIFICACAOESTID", 0, "char");
   this.setVCMap("AV18ClassificacaoEstId", "vCLASSIFICACAOESTID", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2929ClassificacaoEstEmpresaId", "CLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV21SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV28Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV27Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 432 ]= ["O2926OpcaoClassificacaoEstDescricao","O2931OpcaoClassificacaoEstId"] ;
});
gx.setParentObj(new tclassificacaoestopcaoclassific());

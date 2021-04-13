/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:45:18.71
*/
gx.evt.autoSkip = false;
gx.define('tclassificacaoest', false, function () {
   this.ServerClass =  "tclassificacaoest" ;
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
      this.AV21ClassificacaoEstId=gx.fn.getControlValue("vCLASSIFICACAOESTID") ;
      this.AV14EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A2929ClassificacaoEstEmpresaId=gx.fn.getControlValue("CLASSIFICACAOESTEMPRESAID") ;
      this.AV23SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV28Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Classificacaoestid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSIFICACAOESTID");
         this.AnyError  = 0;
         if ( (""==this.A2930ClassificacaoEstId) )
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
   this.Valid_Classificacaoestdescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSIFICACAOESTDESCRICAO");
         this.AnyError  = 0;
         if ( (""==this.A2922ClassificacaoEstDescricao) )
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
   this.Valid_Classificacaoestsnobrigatorio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CLASSIFICACAOESTSNOBRIGATORIO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e126d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136d2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146d367_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156d367_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,26,29,31,33,42,44];
   this.GXLastCtrlId =44;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TAB1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classificacaoestid,isvalid:null,rgrid:[],fld:"CLASSIFICACAOESTID",gxz:"Z2930ClassificacaoEstId",gxold:"O2930ClassificacaoEstId",gxvar:"A2930ClassificacaoEstId",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2930ClassificacaoEstId=Value},v2z:function(Value){gx.O.Z2930ClassificacaoEstId=Value},v2c:function(){gx.fn.setControlValue("CLASSIFICACAOESTID",gx.O.A2930ClassificacaoEstId,0)},c2v:function(){gx.O.A2930ClassificacaoEstId=this.val()},val:function(){return gx.fn.getControlValue("CLASSIFICACAOESTID")},nac:function(){return !(""==this.AV21ClassificacaoEstId)}};
   GXValidFnc[17]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classificacaoestdescricao,isvalid:null,rgrid:[],fld:"CLASSIFICACAOESTDESCRICAO",gxz:"Z2922ClassificacaoEstDescricao",gxold:"O2922ClassificacaoEstDescricao",gxvar:"A2922ClassificacaoEstDescricao",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2922ClassificacaoEstDescricao=Value},v2z:function(Value){gx.O.Z2922ClassificacaoEstDescricao=Value},v2c:function(){gx.fn.setControlValue("CLASSIFICACAOESTDESCRICAO",gx.O.A2922ClassificacaoEstDescricao,0)},c2v:function(){gx.O.A2922ClassificacaoEstDescricao=this.val()},val:function(){return gx.fn.getControlValue("CLASSIFICACAOESTDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Classificacaoestsnobrigatorio,isvalid:null,rgrid:[],fld:"CLASSIFICACAOESTSNOBRIGATORIO",gxz:"Z2923ClassificacaoEstSnObrigatorio",gxold:"O2923ClassificacaoEstSnObrigatorio",gxvar:"A2923ClassificacaoEstSnObrigatorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A2923ClassificacaoEstSnObrigatorio=Value},v2z:function(Value){gx.O.Z2923ClassificacaoEstSnObrigatorio=Value},v2c:function(){gx.fn.setCheckBoxValue("CLASSIFICACAOESTSNOBRIGATORIO",gx.O.A2923ClassificacaoEstSnObrigatorio,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2923ClassificacaoEstSnObrigatorio=this.val()},val:function(){return gx.fn.getControlValue("CLASSIFICACAOESTSNOBRIGATORIO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 23 , function() {
   });
   GXValidFnc[26]={fld:"TABLE21",grid:0};
   GXValidFnc[29]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSIFICACAOESTUSUARIOALT",gxz:"Z2924ClassificacaoEstUsuarioAlt",gxold:"O2924ClassificacaoEstUsuarioAlt",gxvar:"A2924ClassificacaoEstUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2924ClassificacaoEstUsuarioAlt=Value},v2z:function(Value){gx.O.Z2924ClassificacaoEstUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("CLASSIFICACAOESTUSUARIOALT",gx.O.A2924ClassificacaoEstUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2924ClassificacaoEstUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("CLASSIFICACAOESTUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 31 , function() {
   });
   GXValidFnc[33]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CLASSIFICACAOESTDATAHORAALT",gxz:"Z2925ClassificacaoEstDataHoraAlt",gxold:"O2925ClassificacaoEstDataHoraAlt",gxvar:"A2925ClassificacaoEstDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2925ClassificacaoEstDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2925ClassificacaoEstDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CLASSIFICACAOESTDATAHORAALT",gx.O.A2925ClassificacaoEstDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2925ClassificacaoEstDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("CLASSIFICACAOESTDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[42]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"BTNHELP",grid:0};
   this.A2930ClassificacaoEstId = "" ;
   this.Z2930ClassificacaoEstId = "" ;
   this.O2930ClassificacaoEstId = "" ;
   this.A2922ClassificacaoEstDescricao = "" ;
   this.Z2922ClassificacaoEstDescricao = "" ;
   this.O2922ClassificacaoEstDescricao = "" ;
   this.A2923ClassificacaoEstSnObrigatorio = "" ;
   this.Z2923ClassificacaoEstSnObrigatorio = "" ;
   this.O2923ClassificacaoEstSnObrigatorio = "" ;
   this.A2924ClassificacaoEstUsuarioAlt = "" ;
   this.Z2924ClassificacaoEstUsuarioAlt = "" ;
   this.O2924ClassificacaoEstUsuarioAlt = "" ;
   this.A2925ClassificacaoEstDataHoraAlt = gx.date.nullDate() ;
   this.Z2925ClassificacaoEstDataHoraAlt = gx.date.nullDate() ;
   this.O2925ClassificacaoEstDataHoraAlt = gx.date.nullDate() ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.ZV20AcessoSistemaSequencia = 0 ;
   this.OV20AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV12EmpresaLogadaID = "" ;
   this.AV16Sistema = "" ;
   this.AV27Pgmname = "" ;
   this.AV28Pgmdesc = "" ;
   this.AV13MsgErro = "" ;
   this.AV20AcessoSistemaSequencia = 0 ;
   this.AV19Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV15Tabela = "" ;
   this.AV14EmpresaPadrao = "" ;
   this.AV23SnAlterou = "" ;
   this.AV21ClassificacaoEstId = "" ;
   this.A2929ClassificacaoEstEmpresaId = "" ;
   this.A2930ClassificacaoEstId = "" ;
   this.A2924ClassificacaoEstUsuarioAlt = "" ;
   this.A2925ClassificacaoEstDataHoraAlt = gx.date.nullDate() ;
   this.A2922ClassificacaoEstDescricao = "" ;
   this.A2923ClassificacaoEstSnObrigatorio = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126d2_client": ["'FECHAR'", true] ,"e136d2_client": ["AFTER TRN", true] ,"e146d367_client": ["ENTER", true] ,"e156d367_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV21ClassificacaoEstId',fld:'vCLASSIFICACAOESTID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV20AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV21ClassificacaoEstId", "vCLASSIFICACAOESTID", 0, "char");
   this.setVCMap("AV14EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2929ClassificacaoEstEmpresaId", "CLASSIFICACAOESTEMPRESAID", 0, "char");
   this.setVCMap("AV23SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV28Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV27Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 367 ]= ["O2923ClassificacaoEstSnObrigatorio","O2922ClassificacaoEstDescricao","O2930ClassificacaoEstId"] ;
});
gx.setParentObj(new tclassificacaoest());

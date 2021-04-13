/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 2:55:15.0
*/
gx.evt.autoSkip = false;
gx.define('tnaturezalivrosped', false, function () {
   this.ServerClass =  "tnaturezalivrosped" ;
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
      this.AV15NaturezaLivroSpedTipoLivro=gx.fn.getControlValue("vNATUREZALIVROSPEDTIPOLIVRO") ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A900EmpresaNaturezaLivroSpedEmpres=gx.fn.getControlValue("EMPRESANATUREZALIVROSPEDEMPRES") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV21Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Naturezalivrospedtipolivro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("NATUREZALIVROSPEDTIPOLIVRO");
         this.AnyError  = 0;
         if ( (""==this.A895NaturezaLivroSpedTipoLivro) )
         {
            try {
               gxballoon.setError("Informe o tipo de livro");
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
   this.Valid_Naturezalivrospeddescricao=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Naturezalivrospeddescricao",["gx.O.O896NaturezaLivroSpedDescricao", "gx.O.O895NaturezaLivroSpedTipoLivro", "gx.O.AV7UsrCod", "gx.O.A895NaturezaLivroSpedTipoLivro", "gx.O.A896NaturezaLivroSpedDescricao", "gx.O.A897NaturezaLivroSpedUsuarioId", 'gx.date.urlDateTime(gx.O.A898NaturezaLivroSpedDataHoraAlt,"DMY4")'],["A897NaturezaLivroSpedUsuarioId", "A898NaturezaLivroSpedDataHoraAlt"]);
      return true;
   }
   this.e12242_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13242_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1424116_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1524116_client=function()
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
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Naturezalivrospedtipolivro,isvalid:null,rgrid:[],fld:"NATUREZALIVROSPEDTIPOLIVRO",gxz:"Z895NaturezaLivroSpedTipoLivro",gxold:"O895NaturezaLivroSpedTipoLivro",gxvar:"A895NaturezaLivroSpedTipoLivro",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A895NaturezaLivroSpedTipoLivro=Value},v2z:function(Value){gx.O.Z895NaturezaLivroSpedTipoLivro=Value},v2c:function(){gx.fn.setComboBoxValue("NATUREZALIVROSPEDTIPOLIVRO",gx.O.A895NaturezaLivroSpedTipoLivro)},c2v:function(){gx.O.A895NaturezaLivroSpedTipoLivro=this.val()},val:function(){return gx.fn.getControlValue("NATUREZALIVROSPEDTIPOLIVRO")},nac:function(){return !(""==this.AV15NaturezaLivroSpedTipoLivro)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Naturezalivrospeddescricao,isvalid:null,rgrid:[],fld:"NATUREZALIVROSPEDDESCRICAO",gxz:"Z896NaturezaLivroSpedDescricao",gxold:"O896NaturezaLivroSpedDescricao",gxvar:"A896NaturezaLivroSpedDescricao",ucs:[],op:[20,30,28],ip:[30,28,20,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A896NaturezaLivroSpedDescricao=Value},v2z:function(Value){gx.O.Z896NaturezaLivroSpedDescricao=Value},v2c:function(){gx.fn.setControlValue("NATUREZALIVROSPEDDESCRICAO",gx.O.A896NaturezaLivroSpedDescricao,0)},c2v:function(){gx.O.A896NaturezaLivroSpedDescricao=this.val()},val:function(){return gx.fn.getControlValue("NATUREZALIVROSPEDDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZALIVROSPEDUSUARIOID",gxz:"Z897NaturezaLivroSpedUsuarioId",gxold:"O897NaturezaLivroSpedUsuarioId",gxvar:"A897NaturezaLivroSpedUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A897NaturezaLivroSpedUsuarioId=Value},v2z:function(Value){gx.O.Z897NaturezaLivroSpedUsuarioId=Value},v2c:function(){gx.fn.setControlValue("NATUREZALIVROSPEDUSUARIOID",gx.O.A897NaturezaLivroSpedUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A897NaturezaLivroSpedUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("NATUREZALIVROSPEDUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[30]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"NATUREZALIVROSPEDDATAHORAALT",gxz:"Z898NaturezaLivroSpedDataHoraAlt",gxold:"O898NaturezaLivroSpedDataHoraAlt",gxvar:"A898NaturezaLivroSpedDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A898NaturezaLivroSpedDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z898NaturezaLivroSpedDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("NATUREZALIVROSPEDDATAHORAALT",gx.O.A898NaturezaLivroSpedDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A898NaturezaLivroSpedDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("NATUREZALIVROSPEDDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV16AcessoSistemaSequencia",gxold:"OV16AcessoSistemaSequencia",gxvar:"AV16AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV16AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV16AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[41]={fld:"BTNHELP",grid:0};
   this.A895NaturezaLivroSpedTipoLivro = "" ;
   this.Z895NaturezaLivroSpedTipoLivro = "" ;
   this.O895NaturezaLivroSpedTipoLivro = "" ;
   this.A896NaturezaLivroSpedDescricao = "" ;
   this.Z896NaturezaLivroSpedDescricao = "" ;
   this.O896NaturezaLivroSpedDescricao = "" ;
   this.A897NaturezaLivroSpedUsuarioId = "" ;
   this.Z897NaturezaLivroSpedUsuarioId = "" ;
   this.O897NaturezaLivroSpedUsuarioId = "" ;
   this.A898NaturezaLivroSpedDataHoraAlt = gx.date.nullDate() ;
   this.Z898NaturezaLivroSpedDataHoraAlt = gx.date.nullDate() ;
   this.O898NaturezaLivroSpedDataHoraAlt = gx.date.nullDate() ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.ZV16AcessoSistemaSequencia = 0 ;
   this.OV16AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV20Pgmname = "" ;
   this.AV21Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV16AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV15NaturezaLivroSpedTipoLivro = "" ;
   this.A900EmpresaNaturezaLivroSpedEmpres = "" ;
   this.A895NaturezaLivroSpedTipoLivro = "" ;
   this.A897NaturezaLivroSpedUsuarioId = "" ;
   this.A898NaturezaLivroSpedDataHoraAlt = gx.date.nullDate() ;
   this.A896NaturezaLivroSpedDescricao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12242_client": ["'FECHAR'", true] ,"e13242_client": ["AFTER TRN", true] ,"e1424116_client": ["ENTER", true] ,"e1524116_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV15NaturezaLivroSpedTipoLivro',fld:'vNATUREZALIVROSPEDTIPOLIVRO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV16AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV15NaturezaLivroSpedTipoLivro", "vNATUREZALIVROSPEDTIPOLIVRO", 0, "char");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A900EmpresaNaturezaLivroSpedEmpres", "EMPRESANATUREZALIVROSPEDEMPRES", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV21Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV20Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 116 ]= ["O896NaturezaLivroSpedDescricao","O895NaturezaLivroSpedTipoLivro"] ;
});
gx.setParentObj(new tnaturezalivrosped());

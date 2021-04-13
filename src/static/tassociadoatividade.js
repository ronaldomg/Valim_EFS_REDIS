/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 4:24:13.60
*/
gx.evt.autoSkip = false;
gx.define('tassociadoatividade', false, function () {
   this.ServerClass =  "tassociadoatividade" ;
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
      this.AV24AssociadoAtividadeAssocId=gx.fn.getIntegerValue("vASSOCIADOATIVIDADEASSOCID",'.') ;
      this.AV9AssociadoAtividadeSeq=gx.fn.getIntegerValue("vASSOCIADOATIVIDADESEQ",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A9990AssociadoAtividadeAssocEmpId=gx.fn.getControlValue("ASSOCIADOATIVIDADEASSOCEMPID") ;
      this.A9993AssociadoAtividadeOcoEmpId=gx.fn.getControlValue("ASSOCIADOATIVIDADEOCOEMPID") ;
      this.AV8AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.AV23UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV28Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV27Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV25AssociadoAtividadeAssocEmpId=gx.fn.getControlValue("vASSOCIADOATIVIDADEASSOCEMPID") ;
   };
   this.Valid_Associadoatividadeassocid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Associadoatividadeassocid",["gx.O.A9990AssociadoAtividadeAssocEmpId", "gx.O.A9991AssociadoAtividadeAssocId"],[]);
      return true;
   }
   this.Valid_Associadoatividadeseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADOATIVIDADESEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadoatividadedatainicial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADOATIVIDADEDATAINICIAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadoatividadedatafinal=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADOATIVIDADEDATAFINAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadoatividadeocoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Associadoatividadeocoid",["gx.O.AV12EmpresaPadrao", "gx.O.A9994AssociadoAtividadeOcoId", "gx.O.A9993AssociadoAtividadeOcoEmpId", "gx.O.A10037AssociadoAtividadeOcoDesc"],["A9993AssociadoAtividadeOcoEmpId", "A10037AssociadoAtividadeOcoDesc"]);
      return true;
   }
   this.Valid_Associadoatividadetipofat=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADOATIVIDADETIPOFAT");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Associadoatividadeprimesvenc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ASSOCIADOATIVIDADEPRIMESVENC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12em2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13em2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14em749_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15em749_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,20,23,25,32,34,37,39,42,44,45,48,50,53,55,58,61,63,65,74,76,77];
   this.GXLastCtrlId =77;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Associadoatividadeassocid,isvalid:null,rgrid:[],fld:"ASSOCIADOATIVIDADEASSOCID",gxz:"Z9991AssociadoAtividadeAssocId",gxold:"O9991AssociadoAtividadeAssocId",gxvar:"A9991AssociadoAtividadeAssocId",ucs:[],op:[],ip:[13],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9991AssociadoAtividadeAssocId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9991AssociadoAtividadeAssocId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOATIVIDADEASSOCID",gx.O.A9991AssociadoAtividadeAssocId,0)},c2v:function(){gx.O.A9991AssociadoAtividadeAssocId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADOATIVIDADEASSOCID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV20PessoaRazaoSocial",gxold:"OV20PessoaRazaoSocial",gxvar:"AV20PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV20PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV20PessoaRazaoSocial,0)},c2v:function(){gx.O.AV20PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[20]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV19PessoaFantasia",gxold:"OV19PessoaFantasia",gxvar:"AV19PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PessoaFantasia=Value},v2z:function(Value){gx.O.ZV19PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV19PessoaFantasia,0)},c2v:function(){gx.O.AV19PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Associadoatividadeseq,isvalid:null,rgrid:[],fld:"ASSOCIADOATIVIDADESEQ",gxz:"Z9992AssociadoAtividadeSeq",gxold:"O9992AssociadoAtividadeSeq",gxvar:"A9992AssociadoAtividadeSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9992AssociadoAtividadeSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9992AssociadoAtividadeSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOATIVIDADESEQ",gx.O.A9992AssociadoAtividadeSeq,0)},c2v:function(){gx.O.A9992AssociadoAtividadeSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADOATIVIDADESEQ",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoatividadedatainicial,isvalid:null,rgrid:[],fld:"ASSOCIADOATIVIDADEDATAINICIAL",gxz:"Z10035AssociadoAtividadeDataInicial",gxold:"O10035AssociadoAtividadeDataInicial",gxvar:"A10035AssociadoAtividadeDataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10035AssociadoAtividadeDataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10035AssociadoAtividadeDataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOATIVIDADEDATAINICIAL",gx.O.A10035AssociadoAtividadeDataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10035AssociadoAtividadeDataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ASSOCIADOATIVIDADEDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[37]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoatividadedatafinal,isvalid:null,rgrid:[],fld:"ASSOCIADOATIVIDADEDATAFINAL",gxz:"Z10033AssociadoAtividadeDataFinal",gxold:"O10033AssociadoAtividadeDataFinal",gxvar:"A10033AssociadoAtividadeDataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10033AssociadoAtividadeDataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10033AssociadoAtividadeDataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOATIVIDADEDATAFINAL",gx.O.A10033AssociadoAtividadeDataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10033AssociadoAtividadeDataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("ASSOCIADOATIVIDADEDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[42]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZZ",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoatividadeocoid,isvalid:null,rgrid:[],fld:"ASSOCIADOATIVIDADEOCOID",gxz:"Z9994AssociadoAtividadeOcoId",gxold:"O9994AssociadoAtividadeOcoId",gxvar:"A9994AssociadoAtividadeOcoId",ucs:[],op:[45],ip:[45,44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A9994AssociadoAtividadeOcoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9994AssociadoAtividadeOcoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOATIVIDADEOCOID",gx.O.A9994AssociadoAtividadeOcoId,0)},c2v:function(){gx.O.A9994AssociadoAtividadeOcoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADOATIVIDADEOCOID",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOATIVIDADEOCODESC",gxz:"Z10037AssociadoAtividadeOcoDesc",gxold:"O10037AssociadoAtividadeOcoDesc",gxvar:"A10037AssociadoAtividadeOcoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10037AssociadoAtividadeOcoDesc=Value},v2z:function(Value){gx.O.Z10037AssociadoAtividadeOcoDesc=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOATIVIDADEOCODESC",gx.O.A10037AssociadoAtividadeOcoDesc,0)},c2v:function(){gx.O.A10037AssociadoAtividadeOcoDesc=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOATIVIDADEOCODESC")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoatividadetipofat,isvalid:null,rgrid:[],fld:"ASSOCIADOATIVIDADETIPOFAT",gxz:"Z10039AssociadoAtividadeTipoFat",gxold:"O10039AssociadoAtividadeTipoFat",gxvar:"A10039AssociadoAtividadeTipoFat",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A10039AssociadoAtividadeTipoFat=Value},v2z:function(Value){gx.O.Z10039AssociadoAtividadeTipoFat=Value},v2c:function(){gx.fn.setComboBoxValue("ASSOCIADOATIVIDADETIPOFAT",gx.O.A10039AssociadoAtividadeTipoFat)},c2v:function(){gx.O.A10039AssociadoAtividadeTipoFat=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOATIVIDADETIPOFAT")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Associadoatividadeprimesvenc,isvalid:null,rgrid:[],fld:"ASSOCIADOATIVIDADEPRIMESVENC",gxz:"Z10038AssociadoAtividadePriMesVenc",gxold:"O10038AssociadoAtividadePriMesVenc",gxvar:"A10038AssociadoAtividadePriMesVenc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10038AssociadoAtividadePriMesVenc=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10038AssociadoAtividadePriMesVenc=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOATIVIDADEPRIMESVENC",gx.O.A10038AssociadoAtividadePriMesVenc,0)},c2v:function(){gx.O.A10038AssociadoAtividadePriMesVenc=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ASSOCIADOATIVIDADEPRIMESVENC",'.')},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TABLE4",grid:0};
   GXValidFnc[61]={fld:"TEXTBLOCK44", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOATIVIDADEUSUARIOALT",gxz:"Z10040AssociadoAtividadeUsuarioAlt",gxold:"O10040AssociadoAtividadeUsuarioAlt",gxvar:"A10040AssociadoAtividadeUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10040AssociadoAtividadeUsuarioAlt=Value},v2z:function(Value){gx.O.Z10040AssociadoAtividadeUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ASSOCIADOATIVIDADEUSUARIOALT",gx.O.A10040AssociadoAtividadeUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10040AssociadoAtividadeUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ASSOCIADOATIVIDADEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 63 , function() {
   });
   GXValidFnc[65]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ASSOCIADOATIVIDADEDATAHORAALT",gxz:"Z10034AssociadoAtividadeDataHoraAlt",gxold:"O10034AssociadoAtividadeDataHoraAlt",gxvar:"A10034AssociadoAtividadeDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10034AssociadoAtividadeDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10034AssociadoAtividadeDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ASSOCIADOATIVIDADEDATAHORAALT",gx.O.A10034AssociadoAtividadeDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10034AssociadoAtividadeDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ASSOCIADOATIVIDADEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[74]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV7AcessoSistemaSequencia",gxold:"OV7AcessoSistemaSequencia",gxvar:"AV7AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV7AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV7AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[76]={fld:"BTNHELP",grid:0};
   GXValidFnc[77]={fld:"PROMPT_9994",grid:749};
   this.A9991AssociadoAtividadeAssocId = 0 ;
   this.Z9991AssociadoAtividadeAssocId = 0 ;
   this.O9991AssociadoAtividadeAssocId = 0 ;
   this.AV20PessoaRazaoSocial = "" ;
   this.ZV20PessoaRazaoSocial = "" ;
   this.OV20PessoaRazaoSocial = "" ;
   this.AV19PessoaFantasia = "" ;
   this.ZV19PessoaFantasia = "" ;
   this.OV19PessoaFantasia = "" ;
   this.A9992AssociadoAtividadeSeq = 0 ;
   this.Z9992AssociadoAtividadeSeq = 0 ;
   this.O9992AssociadoAtividadeSeq = 0 ;
   this.A10035AssociadoAtividadeDataInicial = gx.date.nullDate() ;
   this.Z10035AssociadoAtividadeDataInicial = gx.date.nullDate() ;
   this.O10035AssociadoAtividadeDataInicial = gx.date.nullDate() ;
   this.A10033AssociadoAtividadeDataFinal = gx.date.nullDate() ;
   this.Z10033AssociadoAtividadeDataFinal = gx.date.nullDate() ;
   this.O10033AssociadoAtividadeDataFinal = gx.date.nullDate() ;
   this.A9994AssociadoAtividadeOcoId = 0 ;
   this.Z9994AssociadoAtividadeOcoId = 0 ;
   this.O9994AssociadoAtividadeOcoId = 0 ;
   this.A10037AssociadoAtividadeOcoDesc = "" ;
   this.Z10037AssociadoAtividadeOcoDesc = "" ;
   this.O10037AssociadoAtividadeOcoDesc = "" ;
   this.A10039AssociadoAtividadeTipoFat = "" ;
   this.Z10039AssociadoAtividadeTipoFat = "" ;
   this.O10039AssociadoAtividadeTipoFat = "" ;
   this.A10038AssociadoAtividadePriMesVenc = 0 ;
   this.Z10038AssociadoAtividadePriMesVenc = 0 ;
   this.O10038AssociadoAtividadePriMesVenc = 0 ;
   this.A10040AssociadoAtividadeUsuarioAlt = "" ;
   this.Z10040AssociadoAtividadeUsuarioAlt = "" ;
   this.O10040AssociadoAtividadeUsuarioAlt = "" ;
   this.A10034AssociadoAtividadeDataHoraAlt = gx.date.nullDate() ;
   this.Z10034AssociadoAtividadeDataHoraAlt = gx.date.nullDate() ;
   this.O10034AssociadoAtividadeDataHoraAlt = gx.date.nullDate() ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.ZV7AcessoSistemaSequencia = 0 ;
   this.OV7AcessoSistemaSequencia = 0 ;
   this.AV23UsrCod = "" ;
   this.AV11EmpresaLogadaId = "" ;
   this.AV21Sistema = "" ;
   this.AV27Pgmname = "" ;
   this.AV28Pgmdesc = "" ;
   this.AV18MsgErro = "" ;
   this.AV7AcessoSistemaSequencia = 0 ;
   this.AV17Modulo = "" ;
   this.AV15Logon = {} ;
   this.AV22Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV8AlterDados = "" ;
   this.AV25AssociadoAtividadeAssocEmpId = "" ;
   this.AV24AssociadoAtividadeAssocId = 0 ;
   this.AV19PessoaFantasia = "" ;
   this.AV20PessoaRazaoSocial = "" ;
   this.AV9AssociadoAtividadeSeq = 0 ;
   this.A9990AssociadoAtividadeAssocEmpId = "" ;
   this.A9991AssociadoAtividadeAssocId = 0 ;
   this.A9992AssociadoAtividadeSeq = 0 ;
   this.A9993AssociadoAtividadeOcoEmpId = "" ;
   this.A10040AssociadoAtividadeUsuarioAlt = "" ;
   this.A10034AssociadoAtividadeDataHoraAlt = gx.date.nullDate() ;
   this.A10035AssociadoAtividadeDataInicial = gx.date.nullDate() ;
   this.A10033AssociadoAtividadeDataFinal = gx.date.nullDate() ;
   this.A10039AssociadoAtividadeTipoFat = "" ;
   this.A10038AssociadoAtividadePriMesVenc = 0 ;
   this.A9994AssociadoAtividadeOcoId = 0 ;
   this.A10037AssociadoAtividadeOcoDesc = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12em2_client": ["'FECHAR'", true] ,"e13em2_client": ["AFTER TRN", true] ,"e14em749_client": ["ENTER", true] ,"e15em749_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV25AssociadoAtividadeAssocEmpId',fld:'vASSOCIADOATIVIDADEASSOCEMPID'},{av:'AV24AssociadoAtividadeAssocId',fld:'vASSOCIADOATIVIDADEASSOCID'},{av:'AV19PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV20PessoaRazaoSocial',fld:'vPESSOARAZAOSOCIAL'},{av:'AV9AssociadoAtividadeSeq',fld:'vASSOCIADOATIVIDADESEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV7AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_9994", [44]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV24AssociadoAtividadeAssocId", "vASSOCIADOATIVIDADEASSOCID", 0, "int");
   this.setVCMap("AV9AssociadoAtividadeSeq", "vASSOCIADOATIVIDADESEQ", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A9990AssociadoAtividadeAssocEmpId", "ASSOCIADOATIVIDADEASSOCEMPID", 0, "char");
   this.setVCMap("A9993AssociadoAtividadeOcoEmpId", "ASSOCIADOATIVIDADEOCOEMPID", 0, "char");
   this.setVCMap("AV8AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("AV23UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV28Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV27Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV25AssociadoAtividadeAssocEmpId", "vASSOCIADOATIVIDADEASSOCEMPID", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 749 ]= ["O10038AssociadoAtividadePriMesVenc","O10039AssociadoAtividadeTipoFat","O9994AssociadoAtividadeOcoId","O10033AssociadoAtividadeDataFinal","O10035AssociadoAtividadeDataInicial"] ;
});
gx.setParentObj(new tassociadoatividade());

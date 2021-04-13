/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:27:57.70
*/
gx.evt.autoSkip = false;
gx.define('tgenerofornecedor', false, function () {
   this.ServerClass =  "tgenerofornecedor" ;
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
      this.AV18GeneroFornecedorPessoaId=gx.fn.getIntegerValue("vGENEROFORNECEDORPESSOAID",'.') ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV19GeneroFornecedorGeneroId=gx.fn.getControlValue("vGENEROFORNECEDORGENEROID") ;
      this.A3533GeneroFornecedorPessoaEmpId=gx.fn.getControlValue("GENEROFORNECEDORPESSOAEMPID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV29Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV28Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Generofornecedorpessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Generofornecedorpessoaid",["gx.O.A3533GeneroFornecedorPessoaEmpId", "gx.O.A3534GeneroFornecedorPessoaId", "gx.O.A3528GeneroFornecedorPessoaFantasia", "gx.O.A3529GeneroFornecedorPessoaRazao"],["A3528GeneroFornecedorPessoaFantasia", "A3529GeneroFornecedorPessoaRazao"]);
      return true;
   }
   this.Valid_Generofornecedorgeneroid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Generofornecedorgeneroid",["gx.O.A3535GeneroFornecedorGeneroId", "gx.O.A3530GeneroFornecedorGeneroDesc", "gx.O.AV22GeneroDescricao"],["A3530GeneroFornecedorGeneroDesc", "AV22GeneroDescricao"]);
      return true;
   }
   this.Valid_Generofornecedorgenerodesc=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("GENEROFORNECEDORGENERODESC");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresapadrao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPADRAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e126o2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e136o2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e146o379_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e156o379_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,18,20,23,25,27,31,34,37,39,41,50,51,53,55,56];
   this.GXLastCtrlId =56;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Generofornecedorpessoaid,isvalid:null,rgrid:[],fld:"GENEROFORNECEDORPESSOAID",gxz:"Z3534GeneroFornecedorPessoaId",gxold:"O3534GeneroFornecedorPessoaId",gxvar:"A3534GeneroFornecedorPessoaId",ucs:[],op:[20,15],ip:[20,15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3534GeneroFornecedorPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3534GeneroFornecedorPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("GENEROFORNECEDORPESSOAID",gx.O.A3534GeneroFornecedorPessoaId,0)},c2v:function(){gx.O.A3534GeneroFornecedorPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("GENEROFORNECEDORPESSOAID",'.')},nac:function(){return !(0==this.AV18GeneroFornecedorPessoaId)}};
   GXValidFnc[15]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GENEROFORNECEDORPESSOAFANTASIA",gxz:"Z3528GeneroFornecedorPessoaFantasia",gxold:"O3528GeneroFornecedorPessoaFantasia",gxvar:"A3528GeneroFornecedorPessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3528GeneroFornecedorPessoaFantasia=Value},v2z:function(Value){gx.O.Z3528GeneroFornecedorPessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("GENEROFORNECEDORPESSOAFANTASIA",gx.O.A3528GeneroFornecedorPessoaFantasia,0)},c2v:function(){gx.O.A3528GeneroFornecedorPessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("GENEROFORNECEDORPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[18]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GENEROFORNECEDORPESSOARAZAO",gxz:"Z3529GeneroFornecedorPessoaRazao",gxold:"O3529GeneroFornecedorPessoaRazao",gxvar:"A3529GeneroFornecedorPessoaRazao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3529GeneroFornecedorPessoaRazao=Value},v2z:function(Value){gx.O.Z3529GeneroFornecedorPessoaRazao=Value},v2c:function(){gx.fn.setControlValue("GENEROFORNECEDORPESSOARAZAO",gx.O.A3529GeneroFornecedorPessoaRazao,0)},c2v:function(){gx.O.A3529GeneroFornecedorPessoaRazao=this.val()},val:function(){return gx.fn.getControlValue("GENEROFORNECEDORPESSOARAZAO")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Generofornecedorgeneroid,isvalid:null,rgrid:[],fld:"GENEROFORNECEDORGENEROID",gxz:"Z3535GeneroFornecedorGeneroId",gxold:"O3535GeneroFornecedorGeneroId",gxvar:"A3535GeneroFornecedorGeneroId",ucs:[],op:[27,31],ip:[27,31,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3535GeneroFornecedorGeneroId=Value},v2z:function(Value){gx.O.Z3535GeneroFornecedorGeneroId=Value},v2c:function(){gx.fn.setControlValue("GENEROFORNECEDORGENEROID",gx.O.A3535GeneroFornecedorGeneroId,0)},c2v:function(){gx.O.A3535GeneroFornecedorGeneroId=this.val()},val:function(){return gx.fn.getControlValue("GENEROFORNECEDORGENEROID")},nac:function(){return !(""==this.AV19GeneroFornecedorGeneroId)}};
   GXValidFnc[27]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vGENERODESCRICAO",gxz:"ZV22GeneroDescricao",gxold:"OV22GeneroDescricao",gxvar:"AV22GeneroDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22GeneroDescricao=Value},v2z:function(Value){gx.O.ZV22GeneroDescricao=Value},v2c:function(){gx.fn.setControlValue("vGENERODESCRICAO",gx.O.AV22GeneroDescricao,0)},c2v:function(){gx.O.AV22GeneroDescricao=this.val()},val:function(){return gx.fn.getControlValue("vGENERODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"svchar",len:160,dec:0,sign:false,ro:1,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Generofornecedorgenerodesc,isvalid:null,rgrid:[],fld:"GENEROFORNECEDORGENERODESC",gxz:"Z3530GeneroFornecedorGeneroDesc",gxold:"O3530GeneroFornecedorGeneroDesc",gxvar:"A3530GeneroFornecedorGeneroDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3530GeneroFornecedorGeneroDesc=Value},v2z:function(Value){gx.O.Z3530GeneroFornecedorGeneroDesc=Value},v2c:function(){gx.fn.setControlValue("GENEROFORNECEDORGENERODESC",gx.O.A3530GeneroFornecedorGeneroDesc,0)},c2v:function(){gx.O.A3530GeneroFornecedorGeneroDesc=this.val()},val:function(){return gx.fn.getControlValue("GENEROFORNECEDORGENERODESC")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"TABLE4",grid:0};
   GXValidFnc[37]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GENEROFORNECEDORUSUARIOALT",gxz:"Z3531GeneroFornecedorUsuarioAlt",gxold:"O3531GeneroFornecedorUsuarioAlt",gxvar:"A3531GeneroFornecedorUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3531GeneroFornecedorUsuarioAlt=Value},v2z:function(Value){gx.O.Z3531GeneroFornecedorUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("GENEROFORNECEDORUSUARIOALT",gx.O.A3531GeneroFornecedorUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3531GeneroFornecedorUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("GENEROFORNECEDORUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[41]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"GENEROFORNECEDORDATAHORAALT",gxz:"Z3532GeneroFornecedorDataHoraAlt",gxold:"O3532GeneroFornecedorDataHoraAlt",gxvar:"A3532GeneroFornecedorDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3532GeneroFornecedorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3532GeneroFornecedorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("GENEROFORNECEDORDATAHORAALT",gx.O.A3532GeneroFornecedorDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3532GeneroFornecedorDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("GENEROFORNECEDORDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 41 , function() {
   });
   GXValidFnc[50]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"BTNHELP",grid:0};
   GXValidFnc[55]={fld:"PROMPT_3534",grid:379};
   GXValidFnc[56]={fld:"PROMPT_3535",grid:379};
   this.A3534GeneroFornecedorPessoaId = 0 ;
   this.Z3534GeneroFornecedorPessoaId = 0 ;
   this.O3534GeneroFornecedorPessoaId = 0 ;
   this.A3528GeneroFornecedorPessoaFantasia = "" ;
   this.Z3528GeneroFornecedorPessoaFantasia = "" ;
   this.O3528GeneroFornecedorPessoaFantasia = "" ;
   this.A3529GeneroFornecedorPessoaRazao = "" ;
   this.Z3529GeneroFornecedorPessoaRazao = "" ;
   this.O3529GeneroFornecedorPessoaRazao = "" ;
   this.A3535GeneroFornecedorGeneroId = "" ;
   this.Z3535GeneroFornecedorGeneroId = "" ;
   this.O3535GeneroFornecedorGeneroId = "" ;
   this.AV22GeneroDescricao = "" ;
   this.ZV22GeneroDescricao = "" ;
   this.OV22GeneroDescricao = "" ;
   this.A3530GeneroFornecedorGeneroDesc = "" ;
   this.Z3530GeneroFornecedorGeneroDesc = "" ;
   this.O3530GeneroFornecedorGeneroDesc = "" ;
   this.A3531GeneroFornecedorUsuarioAlt = "" ;
   this.Z3531GeneroFornecedorUsuarioAlt = "" ;
   this.O3531GeneroFornecedorUsuarioAlt = "" ;
   this.A3532GeneroFornecedorDataHoraAlt = gx.date.nullDate() ;
   this.Z3532GeneroFornecedorDataHoraAlt = gx.date.nullDate() ;
   this.O3532GeneroFornecedorDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV28Pgmname = "" ;
   this.AV29Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18GeneroFornecedorPessoaId = 0 ;
   this.AV19GeneroFornecedorGeneroId = "" ;
   this.A3533GeneroFornecedorPessoaEmpId = "" ;
   this.A3534GeneroFornecedorPessoaId = 0 ;
   this.A3535GeneroFornecedorGeneroId = "" ;
   this.AV22GeneroDescricao = "" ;
   this.A3531GeneroFornecedorUsuarioAlt = "" ;
   this.A3532GeneroFornecedorDataHoraAlt = gx.date.nullDate() ;
   this.Gx_BScreen = 0 ;
   this.A3528GeneroFornecedorPessoaFantasia = "" ;
   this.A3529GeneroFornecedorPessoaRazao = "" ;
   this.A3530GeneroFornecedorGeneroDesc = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e126o2_client": ["'FECHAR'", true] ,"e136o2_client": ["AFTER TRN", true] ,"e146o379_client": ["ENTER", true] ,"e156o379_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18GeneroFornecedorPessoaId',fld:'vGENEROFORNECEDORPESSOAID'},{av:'AV19GeneroFornecedorGeneroId',fld:'vGENEROFORNECEDORGENEROID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_3534", [14]);
   this.setPrompt("PROMPT_3535", [25]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV18GeneroFornecedorPessoaId", "vGENEROFORNECEDORPESSOAID", 0, "int");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV19GeneroFornecedorGeneroId", "vGENEROFORNECEDORGENEROID", 0, "char");
   this.setVCMap("A3533GeneroFornecedorPessoaEmpId", "GENEROFORNECEDORPESSOAEMPID", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV29Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV28Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tgenerofornecedor());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:35:10.48
*/
gx.evt.autoSkip = false;
gx.define('tentregador', false, function () {
   this.ServerClass =  "tentregador" ;
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
      this.AV14EntregadorId=gx.fn.getIntegerValue("vENTREGADORID",'.') ;
      this.AV16EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.A10825EntregadorEmpresaId=gx.fn.getControlValue("ENTREGADOREMPRESAID") ;
      this.AV18EntregadorSnFuncionario=gx.fn.getControlValue("vENTREGADORSNFUNCIONARIO") ;
      this.AV15AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV23Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV22Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Entregadorid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGADORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entregadorsnfuncionario=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entregadorsnfuncionario",["gx.O.A10861EntregadorSnFuncionario", "gx.O.AV18EntregadorSnFuncionario"],["AV18EntregadorSnFuncionario"]);
      return true;
   }
   this.Valid_Entregadornome=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGADORNOME");
         this.AnyError  = 0;
         if ( (""==this.A10846EntregadorNome) )
         {
            try {
               gxballoon.setError("Informe o nome do entregador");
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
   this.Valid_Entregadortelefone=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGADORTELEFONE");
         this.AnyError  = 0;
         if ( (""==this.A10862EntregadorTelefone) )
         {
            try {
               gxballoon.setError("Informe o telefone do entregador");
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
   this.Valid_Entregadorempresa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGADOREMPRESA");
         this.AnyError  = 0;
         if ( this.AV18EntregadorSnFuncionario == "N" && (""==this.A10863EntregadorEmpresa) )
         {
            try {
               gxballoon.setError("Informe a empresa a qual o entregador pertence");
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
   this.Valid_Entregadorcaixaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTREGADORCAIXAID");
         this.AnyError  = 0;
         try {
            if ( ! (0==this.A10828EntregadorCaixaId) )
            {
               this.A10827EntregadorCaixaEmpId =  this.AV20CaixaBancoEmpresaId  ;
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entregadorcaixaempid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entregadorcaixaempid",["gx.O.A10827EntregadorCaixaEmpId", "gx.O.A10828EntregadorCaixaId", "gx.O.A10864EntregadorCaixaDescricao"],["A10864EntregadorCaixaDescricao"]);
      return true;
   }
   this.Valid_Entregadorusuariocodigo=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Entregadorusuariocodigo",["gx.O.A10905EntregadorUsuarioCodigo", "gx.O.A10907EntregadorUsuarioNome"],["A10907EntregadorUsuarioNome"]);
      return true;
   }
   this.Validv_Sim=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSIM");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12fm2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13fm2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e14fm798_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15fm798_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,20,22,26,28,32,34,38,40,41,42,46,48,49,53,56,58,60,69,70,71,73,75,76];
   this.GXLastCtrlId =76;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Entregadorid,isvalid:null,rgrid:[],fld:"ENTREGADORID",gxz:"Z10826EntregadorId",gxold:"O10826EntregadorId",gxvar:"A10826EntregadorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10826EntregadorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10826EntregadorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTREGADORID",gx.O.A10826EntregadorId,0)},c2v:function(){gx.O.A10826EntregadorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTREGADORID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregadorsnfuncionario,isvalid:null,rgrid:[],fld:"ENTREGADORSNFUNCIONARIO",gxz:"Z10861EntregadorSnFuncionario",gxold:"O10861EntregadorSnFuncionario",gxvar:"A10861EntregadorSnFuncionario",ucs:[],op:[],ip:[17],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.A10861EntregadorSnFuncionario=Value},v2z:function(Value){gx.O.Z10861EntregadorSnFuncionario=Value},v2c:function(){gx.fn.setCheckBoxValue("ENTREGADORSNFUNCIONARIO",gx.O.A10861EntregadorSnFuncionario,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10861EntregadorSnFuncionario=this.val()},val:function(){return gx.fn.getControlValue("ENTREGADORSNFUNCIONARIO")},nac:gx.falseFn,values:['S','N']};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregadornome,isvalid:null,rgrid:[],fld:"ENTREGADORNOME",gxz:"Z10846EntregadorNome",gxold:"O10846EntregadorNome",gxvar:"A10846EntregadorNome",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10846EntregadorNome=Value},v2z:function(Value){gx.O.Z10846EntregadorNome=Value},v2c:function(){gx.fn.setControlValue("ENTREGADORNOME",gx.O.A10846EntregadorNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10846EntregadorNome=this.val()},val:function(){return gx.fn.getControlValue("ENTREGADORNOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[26]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregadortelefone,isvalid:null,rgrid:[],fld:"ENTREGADORTELEFONE",gxz:"Z10862EntregadorTelefone",gxold:"O10862EntregadorTelefone",gxvar:"A10862EntregadorTelefone",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10862EntregadorTelefone=Value},v2z:function(Value){gx.O.Z10862EntregadorTelefone=Value},v2c:function(){gx.fn.setControlValue("ENTREGADORTELEFONE",gx.O.A10862EntregadorTelefone,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10862EntregadorTelefone=this.val()},val:function(){return gx.fn.getControlValue("ENTREGADORTELEFONE")},nac:gx.falseFn};
   this.declareDomainHdlr( 28 , function() {
   });
   GXValidFnc[32]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregadorempresa,isvalid:null,rgrid:[],fld:"ENTREGADOREMPRESA",gxz:"Z10863EntregadorEmpresa",gxold:"O10863EntregadorEmpresa",gxvar:"A10863EntregadorEmpresa",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10863EntregadorEmpresa=Value},v2z:function(Value){gx.O.Z10863EntregadorEmpresa=Value},v2c:function(){gx.fn.setControlValue("ENTREGADOREMPRESA",gx.O.A10863EntregadorEmpresa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10863EntregadorEmpresa=this.val()},val:function(){return gx.fn.getControlValue("ENTREGADOREMPRESA")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[38]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregadorcaixaid,isvalid:null,rgrid:[],fld:"ENTREGADORCAIXAID",gxz:"Z10828EntregadorCaixaId",gxold:"O10828EntregadorCaixaId",gxvar:"A10828EntregadorCaixaId",ucs:[],op:[42],ip:[42,40,71],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10828EntregadorCaixaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10828EntregadorCaixaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTREGADORCAIXAID",gx.O.A10828EntregadorCaixaId,0)},c2v:function(){gx.O.A10828EntregadorCaixaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTREGADORCAIXAID",'.')},nac:gx.falseFn};
   GXValidFnc[41]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGADORCAIXADESCRICAO",gxz:"Z10864EntregadorCaixaDescricao",gxold:"O10864EntregadorCaixaDescricao",gxvar:"A10864EntregadorCaixaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10864EntregadorCaixaDescricao=Value},v2z:function(Value){gx.O.Z10864EntregadorCaixaDescricao=Value},v2c:function(){gx.fn.setControlValue("ENTREGADORCAIXADESCRICAO",gx.O.A10864EntregadorCaixaDescricao,0)},c2v:function(){gx.O.A10864EntregadorCaixaDescricao=this.val()},val:function(){return gx.fn.getControlValue("ENTREGADORCAIXADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregadorcaixaempid,isvalid:null,rgrid:[],fld:"ENTREGADORCAIXAEMPID",gxz:"Z10827EntregadorCaixaEmpId",gxold:"O10827EntregadorCaixaEmpId",gxvar:"A10827EntregadorCaixaEmpId",ucs:[],op:[41],ip:[41,40,42],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10827EntregadorCaixaEmpId=Value},v2z:function(Value){gx.O.Z10827EntregadorCaixaEmpId=Value},v2c:function(){gx.fn.setControlValue("ENTREGADORCAIXAEMPID",gx.O.A10827EntregadorCaixaEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10827EntregadorCaixaEmpId=this.val()},val:function(){return gx.fn.getControlValue("ENTREGADORCAIXAEMPID")},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[46]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entregadorusuariocodigo,isvalid:null,rgrid:[],fld:"ENTREGADORUSUARIOCODIGO",gxz:"Z10905EntregadorUsuarioCodigo",gxold:"O10905EntregadorUsuarioCodigo",gxvar:"A10905EntregadorUsuarioCodigo",ucs:[],op:[49],ip:[49,48],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10905EntregadorUsuarioCodigo=Value},v2z:function(Value){gx.O.Z10905EntregadorUsuarioCodigo=Value},v2c:function(){gx.fn.setControlValue("ENTREGADORUSUARIOCODIGO",gx.O.A10905EntregadorUsuarioCodigo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10905EntregadorUsuarioCodigo=this.val()},val:function(){return gx.fn.getControlValue("ENTREGADORUSUARIOCODIGO")},nac:gx.falseFn};
   this.declareDomainHdlr( 48 , function() {
   });
   GXValidFnc[49]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGADORUSUARIONOME",gxz:"Z10907EntregadorUsuarioNome",gxold:"O10907EntregadorUsuarioNome",gxvar:"A10907EntregadorUsuarioNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10907EntregadorUsuarioNome=Value},v2z:function(Value){gx.O.Z10907EntregadorUsuarioNome=Value},v2c:function(){gx.fn.setControlValue("ENTREGADORUSUARIONOME",gx.O.A10907EntregadorUsuarioNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10907EntregadorUsuarioNome=this.val()},val:function(){return gx.fn.getControlValue("ENTREGADORUSUARIONOME")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[53]={fld:"TABLE4",grid:0};
   GXValidFnc[56]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGADORUSUARIOALT",gxz:"Z10865EntregadorUsuarioAlt",gxold:"O10865EntregadorUsuarioAlt",gxvar:"A10865EntregadorUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10865EntregadorUsuarioAlt=Value},v2z:function(Value){gx.O.Z10865EntregadorUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ENTREGADORUSUARIOALT",gx.O.A10865EntregadorUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10865EntregadorUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ENTREGADORUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 58 , function() {
   });
   GXValidFnc[60]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTREGADORDATAHORAALT",gxz:"Z10866EntregadorDataHoraAlt",gxold:"O10866EntregadorDataHoraAlt",gxvar:"A10866EntregadorDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10866EntregadorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10866EntregadorDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ENTREGADORDATAHORAALT",gx.O.A10866EntregadorDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10866EntregadorDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ENTREGADORDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[69]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV11AcessoSistemaSequencia",gxold:"OV11AcessoSistemaSequencia",gxvar:"AV11AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV11AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV11AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Sim,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV19Sim",gxold:"OV19Sim",gxvar:"AV19Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19Sim=Value},v2z:function(Value){gx.O.ZV19Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV19Sim,0)},c2v:function(){gx.O.AV19Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoempresaid,isvalid:null,rgrid:[],fld:"vCAIXABANCOEMPRESAID",gxz:"ZV20CaixaBancoEmpresaId",gxold:"OV20CaixaBancoEmpresaId",gxvar:"AV20CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.ZV20CaixaBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOEMPRESAID",gx.O.AV20CaixaBancoEmpresaId,0)},c2v:function(){gx.O.AV20CaixaBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"BTNHELP",grid:0};
   GXValidFnc[75]={fld:"PROMPT_10828",grid:798};
   GXValidFnc[76]={fld:"PROMPT_10905",grid:798};
   this.A10826EntregadorId = 0 ;
   this.Z10826EntregadorId = 0 ;
   this.O10826EntregadorId = 0 ;
   this.A10861EntregadorSnFuncionario = "" ;
   this.Z10861EntregadorSnFuncionario = "" ;
   this.O10861EntregadorSnFuncionario = "" ;
   this.A10846EntregadorNome = "" ;
   this.Z10846EntregadorNome = "" ;
   this.O10846EntregadorNome = "" ;
   this.A10862EntregadorTelefone = "" ;
   this.Z10862EntregadorTelefone = "" ;
   this.O10862EntregadorTelefone = "" ;
   this.A10863EntregadorEmpresa = "" ;
   this.Z10863EntregadorEmpresa = "" ;
   this.O10863EntregadorEmpresa = "" ;
   this.A10828EntregadorCaixaId = 0 ;
   this.Z10828EntregadorCaixaId = 0 ;
   this.O10828EntregadorCaixaId = 0 ;
   this.A10864EntregadorCaixaDescricao = "" ;
   this.Z10864EntregadorCaixaDescricao = "" ;
   this.O10864EntregadorCaixaDescricao = "" ;
   this.A10827EntregadorCaixaEmpId = "" ;
   this.Z10827EntregadorCaixaEmpId = "" ;
   this.O10827EntregadorCaixaEmpId = "" ;
   this.A10905EntregadorUsuarioCodigo = "" ;
   this.Z10905EntregadorUsuarioCodigo = "" ;
   this.O10905EntregadorUsuarioCodigo = "" ;
   this.A10907EntregadorUsuarioNome = "" ;
   this.Z10907EntregadorUsuarioNome = "" ;
   this.O10907EntregadorUsuarioNome = "" ;
   this.A10865EntregadorUsuarioAlt = "" ;
   this.Z10865EntregadorUsuarioAlt = "" ;
   this.O10865EntregadorUsuarioAlt = "" ;
   this.A10866EntregadorDataHoraAlt = gx.date.nullDate() ;
   this.Z10866EntregadorDataHoraAlt = gx.date.nullDate() ;
   this.O10866EntregadorDataHoraAlt = gx.date.nullDate() ;
   this.AV11AcessoSistemaSequencia = 0 ;
   this.ZV11AcessoSistemaSequencia = 0 ;
   this.OV11AcessoSistemaSequencia = 0 ;
   this.AV19Sim = "" ;
   this.ZV19Sim = "" ;
   this.OV19Sim = "" ;
   this.AV20CaixaBancoEmpresaId = "" ;
   this.ZV20CaixaBancoEmpresaId = "" ;
   this.OV20CaixaBancoEmpresaId = "" ;
   this.AV7UsrCod = "" ;
   this.AV8EmpresaLogadaId = "" ;
   this.AV9Sistema = "" ;
   this.AV22Pgmname = "" ;
   this.AV23Pgmdesc = "" ;
   this.AV10MsgErro = "" ;
   this.AV11AcessoSistemaSequencia = 0 ;
   this.AV12Modulo = "" ;
   this.AV13Logon = {} ;
   this.AV17Tabela = "" ;
   this.AV16EmpresaPadrao = "" ;
   this.AV20CaixaBancoEmpresaId = "" ;
   this.AV19Sim = "" ;
   this.AV14EntregadorId = 0 ;
   this.A10825EntregadorEmpresaId = "" ;
   this.A10826EntregadorId = 0 ;
   this.A10827EntregadorCaixaEmpId = "" ;
   this.AV18EntregadorSnFuncionario = "" ;
   this.AV15AlterDados = "" ;
   this.Gx_BScreen = 0 ;
   this.A10846EntregadorNome = "" ;
   this.A10861EntregadorSnFuncionario = "" ;
   this.A10862EntregadorTelefone = "" ;
   this.A10863EntregadorEmpresa = "" ;
   this.A10828EntregadorCaixaId = 0 ;
   this.A10864EntregadorCaixaDescricao = "" ;
   this.A10905EntregadorUsuarioCodigo = "" ;
   this.A10907EntregadorUsuarioNome = "" ;
   this.A10865EntregadorUsuarioAlt = "" ;
   this.A10866EntregadorDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e12fm2_client": ["'FECHAR'", true] ,"e13fm2_client": ["AFTER TRN", true] ,"e14fm798_client": ["ENTER", true] ,"e15fm798_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV14EntregadorId',fld:'vENTREGADORID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV11AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV11AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_10828", [40]);
   this.setPrompt("PROMPT_10905", [48]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV14EntregadorId", "vENTREGADORID", 0, "int");
   this.setVCMap("AV16EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A10825EntregadorEmpresaId", "ENTREGADOREMPRESAID", 0, "char");
   this.setVCMap("AV18EntregadorSnFuncionario", "vENTREGADORSNFUNCIONARIO", 0, "char");
   this.setVCMap("AV15AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV23Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV22Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 798 ]= ["O10863EntregadorEmpresa","O10862EntregadorTelefone","O10861EntregadorSnFuncionario","O10846EntregadorNome"] ;
});
gx.setParentObj(new tentregador());

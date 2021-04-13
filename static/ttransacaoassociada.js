/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:0:15.15
*/
gx.evt.autoSkip = false;
gx.define('ttransacaoassociada', false, function () {
   this.ServerClass =  "ttransacaoassociada" ;
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
      this.AV17TransacaoAssociadaId=gx.fn.getControlValue("vTRANSACAOASSOCIADAID") ;
      this.AV37TransacaoPrincipalTipoPagRec=gx.fn.getControlValue("vTRANSACAOPRINCIPALTIPOPAGREC") ;
      this.AV21TransacaoPrincipalId=gx.fn.getControlValue("vTRANSACAOPRINCIPALID") ;
      this.A1153TransacaoAssociadaEmpresaId=gx.fn.getControlValue("TRANSACAOASSOCIADAEMPRESAID") ;
      this.AV38TransacaoAssociadaTipoPagRec=gx.fn.getControlValue("vTRANSACAOASSOCIADATIPOPAGREC") ;
      this.AV18TipoLancamentoAssociadaEmpresaId=gx.fn.getControlValue("vTIPOLANCAMENTOASSOCIADAEMPRESAID") ;
      this.A1262TipoLancamentoAssociadaEmpresa=gx.fn.getControlValue("TIPOLANCAMENTOASSOCIADAEMPRESA") ;
      this.AV26AlterDados=gx.fn.getControlValue("vALTERDADOS") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV24snExiste=gx.fn.getControlValue("vSNEXISTE") ;
      this.AV27SnExiste2=gx.fn.getControlValue("vSNEXISTE2") ;
      this.AV40Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV39Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV22TransacaoPrincipalDescricao=gx.fn.getControlValue("vTRANSACAOPRINCIPALDESCRICAO") ;
   };
   this.Valid_Transacaoprincipaltipopagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSACAOPRINCIPALTIPOPAGREC");
         this.AnyError  = 0;
         if ( ! ( this.A1533TransacaoPrincipalTipoPagRec == "0" || this.A1533TransacaoPrincipalTipoPagRec == "P" || this.A1533TransacaoPrincipalTipoPagRec == "R" ) )
         {
            try {
               gxballoon.setError("Campo Transacao Principal Tipo Pag Rec fora do intervalo");
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
   this.Valid_Transacaoprincipalid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSACAOPRINCIPALID");
         this.AnyError  = 0;
         try {
            gx.fn.setCtrlProperty("PROMPT_1251","Link", (this.Gx_mode=="DSP" ? "" : "javascript:"+"gx.popup.openPrompt('"+"gx0441_2"+"',["+"{Ctrl:gx.dom.el('"+"TRANSACAOPRINCIPALEMPRESAID"+"'), id:'"+"TRANSACAOPRINCIPALEMPRESAID"+"'"+",IOType:'out'}"+","+"'"+gx.text.replaceAll( gx.text.rtrim( this.A1533TransacaoPrincipalTipoPagRec), "'", "\\'")+"'"+","+"'"+gx.text.replaceAll( gx.text.rtrim( this.A1154TransacaoPrincipalId), "'", "\\'")+"'"+"],"+"null"+","+"'', false"+","+"true"+");") );
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
   this.Valid_Transacaoassociadatipopagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TRANSACAOASSOCIADATIPOPAGREC");
         this.AnyError  = 0;
         if ( ! ( this.A1532TransacaoAssociadaTipoPagRec == "0" || this.A1532TransacaoAssociadaTipoPagRec == "P" || this.A1532TransacaoAssociadaTipoPagRec == "R" ) )
         {
            try {
               gxballoon.setError("Campo Transacao Associada Tipo Pag Rec fora do intervalo");
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
   this.Valid_Transacaoassociadaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transacaoassociadaid",["gx.O.A1153TransacaoAssociadaEmpresaId", "gx.O.A1532TransacaoAssociadaTipoPagRec", "gx.O.A1132TransacaoAssociadaId", "gx.O.A1154TransacaoPrincipalId", "gx.O.A1143TransacaoAssociadaDescricao"],["A1143TransacaoAssociadaDescricao"]);
      return true;
   }
   this.Valid_Transacaoprincipalempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Transacaoprincipalempresaid",["gx.O.A1251TransacaoPrincipalEmpresaId", "gx.O.A1533TransacaoPrincipalTipoPagRec", "gx.O.A1154TransacaoPrincipalId", "gx.O.A1243TransacaoPrincipalDescricao"],["A1243TransacaoPrincipalDescricao"]);
      return true;
   }
   this.Valid_Tipolancamentoassociadaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Tipolancamentoassociadaid",["gx.O.AV18TipoLancamentoAssociadaEmpresaId", "gx.O.A1250TipoLancamentoAssociadaId", "gx.O.A1262TipoLancamentoAssociadaEmpresa", "gx.O.A1254TipoLancamentoAssociadaDescric"],["A1262TipoLancamentoAssociadaEmpresa", "A1254TipoLancamentoAssociadaDescric"]);
      return true;
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
   this.e122q2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132q2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e142q162_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152q162_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,21,23,25,28,30,33,35,37,41,43,44,47,50,52,54,55,64,65,66,68,70,71,72];
   this.GXLastCtrlId =72;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE5",grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Transacaoprincipaltipopagrec,isvalid:null,rgrid:[],fld:"TRANSACAOPRINCIPALTIPOPAGREC",gxz:"Z1533TransacaoPrincipalTipoPagRec",gxold:"O1533TransacaoPrincipalTipoPagRec",gxvar:"A1533TransacaoPrincipalTipoPagRec",ucs:[],op:[17],ip:[17],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1533TransacaoPrincipalTipoPagRec=Value},v2z:function(Value){gx.O.Z1533TransacaoPrincipalTipoPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("TRANSACAOPRINCIPALTIPOPAGREC",gx.O.A1533TransacaoPrincipalTipoPagRec);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1533TransacaoPrincipalTipoPagRec=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOPRINCIPALTIPOPAGREC")},nac:gx.falseFn};
   this.declareDomainHdlr( 17 , function() {
   });
   GXValidFnc[19]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Transacaoprincipalid,isvalid:null,rgrid:[],fld:"TRANSACAOPRINCIPALID",gxz:"Z1154TransacaoPrincipalId",gxold:"O1154TransacaoPrincipalId",gxvar:"A1154TransacaoPrincipalId",ucs:[],op:[],ip:[21,17],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1154TransacaoPrincipalId=Value},v2z:function(Value){gx.O.Z1154TransacaoPrincipalId=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOPRINCIPALID",gx.O.A1154TransacaoPrincipalId,0)},c2v:function(){gx.O.A1154TransacaoPrincipalId=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOPRINCIPALID")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPRINCIPALDESCRICAO",gxz:"Z1243TransacaoPrincipalDescricao",gxold:"O1243TransacaoPrincipalDescricao",gxvar:"A1243TransacaoPrincipalDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1243TransacaoPrincipalDescricao=Value},v2z:function(Value){gx.O.Z1243TransacaoPrincipalDescricao=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOPRINCIPALDESCRICAO",gx.O.A1243TransacaoPrincipalDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1243TransacaoPrincipalDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOPRINCIPALDESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[28]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[30]={fld:"TABLE7",grid:0};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transacaoassociadatipopagrec,isvalid:null,rgrid:[],fld:"TRANSACAOASSOCIADATIPOPAGREC",gxz:"Z1532TransacaoAssociadaTipoPagRec",gxold:"O1532TransacaoAssociadaTipoPagRec",gxvar:"A1532TransacaoAssociadaTipoPagRec",ucs:[],op:[33],ip:[33],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1532TransacaoAssociadaTipoPagRec=Value},v2z:function(Value){gx.O.Z1532TransacaoAssociadaTipoPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("TRANSACAOASSOCIADATIPOPAGREC",gx.O.A1532TransacaoAssociadaTipoPagRec);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1532TransacaoAssociadaTipoPagRec=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOASSOCIADATIPOPAGREC")},nac:function(){return !(""==this.AV17TransacaoAssociadaId)}};
   this.declareDomainHdlr( 33 , function() {
   });
   GXValidFnc[35]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transacaoassociadaid,isvalid:null,rgrid:[],fld:"TRANSACAOASSOCIADAID",gxz:"Z1132TransacaoAssociadaId",gxold:"O1132TransacaoAssociadaId",gxvar:"A1132TransacaoAssociadaId",ucs:[],op:[37,21,55],ip:[55,21,37,33],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1132TransacaoAssociadaId=Value},v2z:function(Value){gx.O.Z1132TransacaoAssociadaId=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOASSOCIADAID",gx.O.A1132TransacaoAssociadaId,0)},c2v:function(){gx.O.A1132TransacaoAssociadaId=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOASSOCIADAID")},nac:function(){return !(""==this.AV17TransacaoAssociadaId)}};
   GXValidFnc[41]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tipolancamentoassociadaid,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOASSOCIADAID",gxz:"Z1250TipoLancamentoAssociadaId",gxold:"O1250TipoLancamentoAssociadaId",gxvar:"A1250TipoLancamentoAssociadaId",ucs:[],op:[44],ip:[44,43],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1250TipoLancamentoAssociadaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1250TipoLancamentoAssociadaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTOASSOCIADAID",gx.O.A1250TipoLancamentoAssociadaId,0)},c2v:function(){gx.O.A1250TipoLancamentoAssociadaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("TIPOLANCAMENTOASSOCIADAID",'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOASSOCIADADESCRIC",gxz:"Z1254TipoLancamentoAssociadaDescric",gxold:"O1254TipoLancamentoAssociadaDescric",gxvar:"A1254TipoLancamentoAssociadaDescric",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1254TipoLancamentoAssociadaDescric=Value},v2z:function(Value){gx.O.Z1254TipoLancamentoAssociadaDescric=Value},v2c:function(){gx.fn.setControlValue("TIPOLANCAMENTOASSOCIADADESCRIC",gx.O.A1254TipoLancamentoAssociadaDescric,0)},c2v:function(){gx.O.A1254TipoLancamentoAssociadaDescric=this.val()},val:function(){return gx.fn.getControlValue("TIPOLANCAMENTOASSOCIADADESCRIC")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TABLE4",grid:0};
   GXValidFnc[50]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[52]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOASSOCIADAUSUARIOALT",gxz:"Z1273TransacaoAssociadaUsuarioAlt",gxold:"O1273TransacaoAssociadaUsuarioAlt",gxvar:"A1273TransacaoAssociadaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1273TransacaoAssociadaUsuarioAlt=Value},v2z:function(Value){gx.O.Z1273TransacaoAssociadaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOASSOCIADAUSUARIOALT",gx.O.A1273TransacaoAssociadaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1273TransacaoAssociadaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOASSOCIADAUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 52 , function() {
   });
   GXValidFnc[54]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOASSOCIADADATAHORAALT",gxz:"Z1274TransacaoAssociadaDataHoraAlt",gxold:"O1274TransacaoAssociadaDataHoraAlt",gxvar:"A1274TransacaoAssociadaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1274TransacaoAssociadaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1274TransacaoAssociadaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("TRANSACAOASSOCIADADATAHORAALT",gx.O.A1274TransacaoAssociadaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1274TransacaoAssociadaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("TRANSACAOASSOCIADADATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[55]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOASSOCIADADESCRICAO",gxz:"Z1143TransacaoAssociadaDescricao",gxold:"O1143TransacaoAssociadaDescricao",gxvar:"A1143TransacaoAssociadaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1143TransacaoAssociadaDescricao=Value},v2z:function(Value){gx.O.Z1143TransacaoAssociadaDescricao=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOASSOCIADADESCRICAO",gx.O.A1143TransacaoAssociadaDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1143TransacaoAssociadaDescricao=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOASSOCIADADESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[64]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV28AcessoSistemaSequencia",gxold:"OV28AcessoSistemaSequencia",gxvar:"AV28AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV28AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV28AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Transacaoprincipalempresaid,isvalid:null,rgrid:[],fld:"TRANSACAOPRINCIPALEMPRESAID",gxz:"Z1251TransacaoPrincipalEmpresaId",gxold:"O1251TransacaoPrincipalEmpresaId",gxvar:"A1251TransacaoPrincipalEmpresaId",ucs:[],op:[25],ip:[25,21,17,65],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1251TransacaoPrincipalEmpresaId=Value},v2z:function(Value){gx.O.Z1251TransacaoPrincipalEmpresaId=Value},v2c:function(){gx.fn.setControlValue("TRANSACAOPRINCIPALEMPRESAID",gx.O.A1251TransacaoPrincipalEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1251TransacaoPrincipalEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("TRANSACAOPRINCIPALEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[66]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[68]={fld:"BTNHELP",grid:0};
   GXValidFnc[70]={fld:"PROMPT_1532_1132",grid:162};
   GXValidFnc[71]={fld:"PROMPT_1250",grid:162};
   GXValidFnc[72]={fld:"PROMPT_1251",grid:162};
   this.A1533TransacaoPrincipalTipoPagRec = "" ;
   this.Z1533TransacaoPrincipalTipoPagRec = "" ;
   this.O1533TransacaoPrincipalTipoPagRec = "" ;
   this.A1154TransacaoPrincipalId = "" ;
   this.Z1154TransacaoPrincipalId = "" ;
   this.O1154TransacaoPrincipalId = "" ;
   this.A1243TransacaoPrincipalDescricao = "" ;
   this.Z1243TransacaoPrincipalDescricao = "" ;
   this.O1243TransacaoPrincipalDescricao = "" ;
   this.A1532TransacaoAssociadaTipoPagRec = "" ;
   this.Z1532TransacaoAssociadaTipoPagRec = "" ;
   this.O1532TransacaoAssociadaTipoPagRec = "" ;
   this.A1132TransacaoAssociadaId = "" ;
   this.Z1132TransacaoAssociadaId = "" ;
   this.O1132TransacaoAssociadaId = "" ;
   this.A1250TipoLancamentoAssociadaId = 0 ;
   this.Z1250TipoLancamentoAssociadaId = 0 ;
   this.O1250TipoLancamentoAssociadaId = 0 ;
   this.A1254TipoLancamentoAssociadaDescric = "" ;
   this.Z1254TipoLancamentoAssociadaDescric = "" ;
   this.O1254TipoLancamentoAssociadaDescric = "" ;
   this.A1273TransacaoAssociadaUsuarioAlt = "" ;
   this.Z1273TransacaoAssociadaUsuarioAlt = "" ;
   this.O1273TransacaoAssociadaUsuarioAlt = "" ;
   this.A1274TransacaoAssociadaDataHoraAlt = gx.date.nullDate() ;
   this.Z1274TransacaoAssociadaDataHoraAlt = gx.date.nullDate() ;
   this.O1274TransacaoAssociadaDataHoraAlt = gx.date.nullDate() ;
   this.A1143TransacaoAssociadaDescricao = "" ;
   this.Z1143TransacaoAssociadaDescricao = "" ;
   this.O1143TransacaoAssociadaDescricao = "" ;
   this.AV28AcessoSistemaSequencia = 0 ;
   this.ZV28AcessoSistemaSequencia = 0 ;
   this.OV28AcessoSistemaSequencia = 0 ;
   this.A1251TransacaoPrincipalEmpresaId = "" ;
   this.Z1251TransacaoPrincipalEmpresaId = "" ;
   this.O1251TransacaoPrincipalEmpresaId = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV39Pgmname = "" ;
   this.AV40Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV28AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV18TipoLancamentoAssociadaEmpresaId = "" ;
   this.AV24snExiste = "" ;
   this.AV27SnExiste2 = "" ;
   this.AV37TransacaoPrincipalTipoPagRec = "" ;
   this.AV21TransacaoPrincipalId = "" ;
   this.AV22TransacaoPrincipalDescricao = "" ;
   this.AV38TransacaoAssociadaTipoPagRec = "" ;
   this.AV17TransacaoAssociadaId = "" ;
   this.A1251TransacaoPrincipalEmpresaId = "" ;
   this.A1533TransacaoPrincipalTipoPagRec = "" ;
   this.A1154TransacaoPrincipalId = "" ;
   this.A1153TransacaoAssociadaEmpresaId = "" ;
   this.A1532TransacaoAssociadaTipoPagRec = "" ;
   this.A1132TransacaoAssociadaId = "" ;
   this.A1262TipoLancamentoAssociadaEmpresa = "" ;
   this.AV26AlterDados = "" ;
   this.A1243TransacaoPrincipalDescricao = "" ;
   this.A1143TransacaoAssociadaDescricao = "" ;
   this.A1250TipoLancamentoAssociadaId = 0 ;
   this.A1254TipoLancamentoAssociadaDescric = "" ;
   this.A1273TransacaoAssociadaUsuarioAlt = "" ;
   this.A1274TransacaoAssociadaDataHoraAlt = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e122q2_client": ["'FECHAR'", true] ,"e132q2_client": ["AFTER TRN", true] ,"e142q162_client": ["ENTER", true] ,"e152q162_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV37TransacaoPrincipalTipoPagRec',fld:'vTRANSACAOPRINCIPALTIPOPAGREC'},{av:'AV21TransacaoPrincipalId',fld:'vTRANSACAOPRINCIPALID'},{av:'AV22TransacaoPrincipalDescricao',fld:'vTRANSACAOPRINCIPALDESCRICAO'},{av:'AV38TransacaoAssociadaTipoPagRec',fld:'vTRANSACAOASSOCIADATIPOPAGREC'},{av:'AV17TransacaoAssociadaId',fld:'vTRANSACAOASSOCIADAID'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV28AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV21TransacaoPrincipalId',fld:'vTRANSACAOPRINCIPALID'},{av:'AV22TransacaoPrincipalDescricao',fld:'vTRANSACAOPRINCIPALDESCRICAO'},{av:'AV25TransacaoTipoPagRec',fld:'vTRANSACAOTIPOPAGREC'}],[{av:'AV25TransacaoTipoPagRec',fld:'vTRANSACAOTIPOPAGREC'},{av:'AV22TransacaoPrincipalDescricao',fld:'vTRANSACAOPRINCIPALDESCRICAO'},{av:'AV21TransacaoPrincipalId',fld:'vTRANSACAOPRINCIPALID'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV28AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.setPrompt("PROMPT_1532_1132", [33,37]);
   this.setPrompt("PROMPT_1250", [43]);
   this.setPrompt("PROMPT_1251", [65]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17TransacaoAssociadaId", "vTRANSACAOASSOCIADAID", 0, "char");
   this.setVCMap("AV37TransacaoPrincipalTipoPagRec", "vTRANSACAOPRINCIPALTIPOPAGREC", 0, "char");
   this.setVCMap("AV21TransacaoPrincipalId", "vTRANSACAOPRINCIPALID", 0, "char");
   this.setVCMap("A1153TransacaoAssociadaEmpresaId", "TRANSACAOASSOCIADAEMPRESAID", 0, "char");
   this.setVCMap("AV38TransacaoAssociadaTipoPagRec", "vTRANSACAOASSOCIADATIPOPAGREC", 0, "char");
   this.setVCMap("AV18TipoLancamentoAssociadaEmpresaId", "vTIPOLANCAMENTOASSOCIADAEMPRESAID", 0, "char");
   this.setVCMap("A1262TipoLancamentoAssociadaEmpresa", "TIPOLANCAMENTOASSOCIADAEMPRESA", 0, "char");
   this.setVCMap("AV26AlterDados", "vALTERDADOS", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV24snExiste", "vSNEXISTE", 0, "char");
   this.setVCMap("AV27SnExiste2", "vSNEXISTE2", 0, "char");
   this.setVCMap("AV40Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV39Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.setVCMap("AV22TransacaoPrincipalDescricao", "vTRANSACAOPRINCIPALDESCRICAO", 0, "svchar");
   this.InitStandaloneVars( );
   this.LvlOlds[ 162 ]= ["O1250TipoLancamentoAssociadaId","O1132TransacaoAssociadaId"] ;
});
gx.setParentObj(new ttransacaoassociada());

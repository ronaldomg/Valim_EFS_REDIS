/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:28:7.62
*/
gx.evt.autoSkip = false;
gx.define('tprocessoconv', false, function () {
   this.ServerClass =  "tprocessoconv" ;
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
      this.A3373ProcessoConvAno=gx.fn.getIntegerValue("PROCESSOCONVANO",'.') ;
      this.A4296ProcessoConvPedidoCompraForn=gx.fn.getControlValue("PROCESSOCONVPEDIDOCOMPRAFORN") ;
      this.A8111TermoOutorgaEmpresaId=gx.fn.getControlValue("TERMOOUTORGAEMPRESAID") ;
      this.A8105TermoOutorgaValor=gx.fn.getDecimalValue("TERMOOUTORGAVALOR",'.',',') ;
      this.A8159TermoOutorgaValorProcesso=gx.fn.getDecimalValue("TERMOOUTORGAVALORPROCESSO",'.',',') ;
      this.AV18ProcessoConvAno=gx.fn.getIntegerValue("vPROCESSOCONVANO",'.') ;
      this.AV19ProcessoConvNumero=gx.fn.getIntegerValue("vPROCESSOCONVNUMERO",'.') ;
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV29ProcessoConvFornecEmpId=gx.fn.getControlValue("vPROCESSOCONVFORNECEMPID") ;
      this.A4292ProcessoConvFornecEmpId=gx.fn.getControlValue("PROCESSOCONVFORNECEMPID") ;
      this.AV34TermoOutorgaEmpresaId=gx.fn.getControlValue("vTERMOOUTORGAEMPRESAID") ;
      this.A2183ConvenioAtivo=gx.fn.getControlValue("CONVENIOATIVO") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV40LogProcessoConvEmpresaId=gx.fn.getControlValue("vLOGPROCESSOCONVEMPRESAID") ;
      this.AV41LogProcessoConvAno=gx.fn.getIntegerValue("vLOGPROCESSOCONVANO",'.') ;
      this.AV42LogProcessoConvNumero=gx.fn.getIntegerValue("vLOGPROCESSOCONVNUMERO",'.') ;
      this.A4295ProcessoConvFornecRazaoSocial=gx.fn.getControlValue("PROCESSOCONVFORNECRAZAOSOCIAL") ;
      this.A8106TermoOutorgaInicioProcesso=gx.fn.getDateValue("TERMOOUTORGAINICIOPROCESSO") ;
      this.A8107TermoOutorgaFinalProcesso=gx.fn.getDateValue("TERMOOUTORGAFINALPROCESSO") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV25ConvenioTipoConvenio=gx.fn.getControlValue("vCONVENIOTIPOCONVENIO") ;
      this.AV26PedidoCompraEmpresaId=gx.fn.getControlValue("vPEDIDOCOMPRAEMPRESAID") ;
      this.AV24ContaPagRecEmpresaId=gx.fn.getControlValue("vCONTAPAGRECEMPRESAID") ;
      this.AV37DataInicioTO=gx.fn.getDateValue("vDATAINICIOTO") ;
      this.AV39lProcessoConvs=gx.fn.getControlValue("vLPROCESSOCONVS") ;
      this.AV43LogUsuario=gx.fn.getControlValue("vLOGUSUARIO") ;
      this.AV45Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV44Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Processoconvempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Processoconvnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Convenioempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONVENIOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Convenioempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVENIOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Processoconvanoaux=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROCESSOCONVANOAUX");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Processoconvfornecid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Processoconvfornecid",["gx.O.Gx_mode", "gx.O.O4293ProcessoConvFornecId", "gx.O.O4295ProcessoConvFornecRazaoSocial", "gx.O.O4294ProcessoConvFornecFantasia", "gx.O.O4292ProcessoConvFornecEmpId", "gx.O.O4296ProcessoConvPedidoCompraForn", "gx.O.A3372ProcessoConvEmpresaId", "gx.O.A3373ProcessoConvAno", "gx.O.A3374ProcessoConvNumero", "gx.O.A4293ProcessoConvFornecId", "gx.O.A4296ProcessoConvPedidoCompraForn", "gx.O.AV29ProcessoConvFornecEmpId", "gx.O.A4292ProcessoConvFornecEmpId", "gx.O.A4294ProcessoConvFornecFantasia", "gx.O.A4295ProcessoConvFornecRazaoSocial"],["O4294ProcessoConvFornecFantasia", "O4295ProcessoConvFornecRazaoSocial", "A4296ProcessoConvPedidoCompraForn", ["AV39lProcessoConvs","Aprocessoconvpedidocompraforn"], "A4292ProcessoConvFornecEmpId", ["AV39lProcessoConvs","Aprocessoconvfornecempid"], "A4294ProcessoConvFornecFantasia", "A4295ProcessoConvFornecRazaoSocial", ["AV39lProcessoConvs","Aprocessoconvfornecfantasia"], ["AV39lProcessoConvs","Aprocessoconvfornecrazaosocial"], ["AV39lProcessoConvs","Aprocessoconvfornecid"]]);
      return true;
   }
   this.Valid_Processoconvfornecfantasia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVFORNECFANTASIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Processoconvfinalidade=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVFINALIDADE");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
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
   this.Valid_Termooutorganoprocesso=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Termooutorganoprocesso",["gx.O.Gx_mode", "gx.O.O8112TermoOutorgaNoProcesso", "gx.num.urlDecimal(gx.O.O8159TermoOutorgaValorProcesso,\'.\',\',\')", 'gx.date.urlDate(gx.O.O8107TermoOutorgaFinalProcesso,"DMY4")', 'gx.date.urlDate(gx.O.O8106TermoOutorgaInicioProcesso,"DMY4")', "gx.O.O8111TermoOutorgaEmpresaId", "gx.O.AV34TermoOutorgaEmpresaId", "gx.O.A8112TermoOutorgaNoProcesso", "gx.O.A8111TermoOutorgaEmpresaId", 'gx.date.urlDate(gx.O.A8106TermoOutorgaInicioProcesso,"DMY4")', 'gx.date.urlDate(gx.O.A8107TermoOutorgaFinalProcesso,"DMY4")', "gx.num.urlDecimal(gx.O.A8105TermoOutorgaValor,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A8159TermoOutorgaValorProcesso,\'.\',\',\')"],["O8106TermoOutorgaInicioProcesso", "O8107TermoOutorgaFinalProcesso", "A8111TermoOutorgaEmpresaId", ["AV39lProcessoConvs","Atermooutorgaempresaid"], "A8106TermoOutorgaInicioProcesso", "A8107TermoOutorgaFinalProcesso", "A8105TermoOutorgaValor", ["AV39lProcessoConvs","Atermooutorgainicioprocesso"], ["AV39lProcessoConvs","Atermooutorgafinalprocesso"], "A8159TermoOutorgaValorProcesso", ["AV39lProcessoConvs","Atermooutorgavalorprocesso"], ["AV39lProcessoConvs","Atermooutorganoprocesso"]]);
      return true;
   }
   this.Valid_Processoconvdatainicio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVDATAINICIO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
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
   this.Valid_Processoconvsncontrato=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVSNCONTRATO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
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
   this.Valid_Processoconvdatavalidade=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVDATAVALIDADE");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
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
   this.Valid_Processoconvnocontrato=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVNOCONTRATO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
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
   this.Valid_Processoconvsituacao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVSITUACAO");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
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
   this.Valid_Processoconvdatafeccan=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVDATAFECCAN");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
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
   this.Valid_Processoconvvalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVVALOR");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
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
   this.Valid_Convenioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Convenioid",["gx.O.Gx_mode", "gx.O.O1681ConvenioId", "gx.O.O2183ConvenioAtivo", "gx.O.O2082ConvenioDescricao", "gx.O.O1680ConvenioEmpresaId", "gx.O.AV21ConvenioEmpresaId", "gx.O.A1681ConvenioId", "gx.O.A1680ConvenioEmpresaId", "gx.O.A2082ConvenioDescricao", "gx.O.A2183ConvenioAtivo"],["O2082ConvenioDescricao", "O2183ConvenioAtivo", "A1680ConvenioEmpresaId", ["AV39lProcessoConvs","Aconvenioempresaid"], "A2082ConvenioDescricao", "A2183ConvenioAtivo", ["AV39lProcessoConvs","Aconveniodescricao"], ["AV39lProcessoConvs","Aconvenioativo"], ["AV39lProcessoConvs","Aconvenioid"]]);
      return true;
   }
   this.Valid_Conveniodescricao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONVENIODESCRICAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Processoconvjustificativa=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PROCESSOCONVJUSTIFICATIVA");
         this.AnyError  = 0;
         try {
            if ( (this.Gx_mode == 'DLT') )
            {
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
   this.Validv_Totautorizacoes=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TOTAUTORIZACOES");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Qtdeautorizacoes=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vQTDEAUTORIZACOES");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Totnotas=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("TOTNOTAS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Qtdenotas=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vQTDENOTAS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Nao=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vNAO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12792_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13792_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e1479402_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e1579402_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,7,8,12,15,18,20,21,22,26,28,29,32,34,37,39,42,44,46,49,51,54,56,59,61,64,66,69,71,74,76,77,80,82,85,87,88,91,93,94,95,96,97,106,107,108,109,111,115,116,117];
   this.GXLastCtrlId =117;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoconvempresaid,isvalid:null,rgrid:[],fld:"PROCESSOCONVEMPRESAID",gxz:"Z3372ProcessoConvEmpresaId",gxold:"O3372ProcessoConvEmpresaId",gxvar:"A3372ProcessoConvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3372ProcessoConvEmpresaId=Value},v2z:function(Value){gx.O.Z3372ProcessoConvEmpresaId=Value},v2c:function(){gx.fn.setControlValue("PROCESSOCONVEMPRESAID",gx.O.A3372ProcessoConvEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3372ProcessoConvEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOCONVEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 6 , function() {
   });
   GXValidFnc[7]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Convenioempresaid,isvalid:null,rgrid:[],fld:"vCONVENIOEMPRESAID",gxz:"ZV21ConvenioEmpresaId",gxold:"OV21ConvenioEmpresaId",gxvar:"AV21ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21ConvenioEmpresaId=Value},v2z:function(Value){gx.O.ZV21ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCONVENIOEMPRESAID",gx.O.AV21ConvenioEmpresaId,0)},c2v:function(){gx.O.AV21ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCONVENIOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[8]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convenioempresaid,isvalid:null,rgrid:[],fld:"CONVENIOEMPRESAID",gxz:"Z1680ConvenioEmpresaId",gxold:"O1680ConvenioEmpresaId",gxvar:"A1680ConvenioEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1680ConvenioEmpresaId=Value},v2z:function(Value){gx.O.Z1680ConvenioEmpresaId=Value},v2c:function(){gx.fn.setControlValue("CONVENIOEMPRESAID",gx.O.A1680ConvenioEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1680ConvenioEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("CONVENIOEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 8 , function() {
   });
   GXValidFnc[12]={fld:"TABLE2",grid:0};
   GXValidFnc[15]={fld:"TABLE3",grid:0};
   GXValidFnc[18]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Processoconvanoaux,isvalid:null,rgrid:[],fld:"vPROCESSOCONVANOAUX",gxz:"ZV32ProcessoConvAnoAux",gxold:"OV32ProcessoConvAnoAux",gxvar:"AV32ProcessoConvAnoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ProcessoConvAnoAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32ProcessoConvAnoAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROCESSOCONVANOAUX",gx.O.AV32ProcessoConvAnoAux,0)},c2v:function(){gx.O.AV32ProcessoConvAnoAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROCESSOCONVANOAUX",'.')},nac:function(){return !(0==this.AV18ProcessoConvAno)}};
   GXValidFnc[21]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Processoconvnumero,isvalid:null,rgrid:[],fld:"PROCESSOCONVNUMERO",gxz:"Z3374ProcessoConvNumero",gxold:"O3374ProcessoConvNumero",gxvar:"A3374ProcessoConvNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3374ProcessoConvNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3374ProcessoConvNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROCESSOCONVNUMERO",gx.O.A3374ProcessoConvNumero,0)},c2v:function(){gx.O.A3374ProcessoConvNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROCESSOCONVNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoconvfornecid,isvalid:null,rgrid:[],fld:"PROCESSOCONVFORNECID",gxz:"Z4293ProcessoConvFornecId",gxold:"O4293ProcessoConvFornecId",gxvar:"A4293ProcessoConvFornecId",ucs:[],op:[29],ip:[29,28,22,6],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4293ProcessoConvFornecId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4293ProcessoConvFornecId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PROCESSOCONVFORNECID",gx.O.A4293ProcessoConvFornecId,0)},c2v:function(){gx.O.A4293ProcessoConvFornecId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PROCESSOCONVFORNECID",'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Processoconvfornecfantasia,isvalid:null,rgrid:[],fld:"PROCESSOCONVFORNECFANTASIA",gxz:"Z4294ProcessoConvFornecFantasia",gxold:"O4294ProcessoConvFornecFantasia",gxvar:"A4294ProcessoConvFornecFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4294ProcessoConvFornecFantasia=Value},v2z:function(Value){gx.O.Z4294ProcessoConvFornecFantasia=Value},v2c:function(){gx.fn.setControlValue("PROCESSOCONVFORNECFANTASIA",gx.O.A4294ProcessoConvFornecFantasia,0)},c2v:function(){gx.O.A4294ProcessoConvFornecFantasia=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOCONVFORNECFANTASIA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoconvfinalidade,isvalid:null,rgrid:[],fld:"PROCESSOCONVFINALIDADE",gxz:"Z3819ProcessoConvFinalidade",gxold:"O3819ProcessoConvFinalidade",gxvar:"A3819ProcessoConvFinalidade",ucs:[],op:[],ip:[34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3819ProcessoConvFinalidade=Value},v2z:function(Value){gx.O.Z3819ProcessoConvFinalidade=Value},v2c:function(){gx.fn.setControlValue("PROCESSOCONVFINALIDADE",gx.O.A3819ProcessoConvFinalidade,0)},c2v:function(){gx.O.A3819ProcessoConvFinalidade=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOCONVFINALIDADE")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Termooutorganoprocesso,isvalid:null,rgrid:[],fld:"TERMOOUTORGANOPROCESSO",gxz:"Z8112TermoOutorgaNoProcesso",gxold:"O8112TermoOutorgaNoProcesso",gxvar:"A8112TermoOutorgaNoProcesso",ucs:[],op:[],ip:[39],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8112TermoOutorgaNoProcesso=Value},v2z:function(Value){gx.O.Z8112TermoOutorgaNoProcesso=Value},v2c:function(){gx.fn.setControlValue("TERMOOUTORGANOPROCESSO",gx.O.A8112TermoOutorgaNoProcesso,0)},c2v:function(){gx.O.A8112TermoOutorgaNoProcesso=this.val()},val:function(){return gx.fn.getControlValue("TERMOOUTORGANOPROCESSO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoconvdatainicio,isvalid:null,rgrid:[],fld:"PROCESSOCONVDATAINICIO",gxz:"Z3817ProcessoConvDataInicio",gxold:"O3817ProcessoConvDataInicio",gxvar:"A3817ProcessoConvDataInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[44],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3817ProcessoConvDataInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3817ProcessoConvDataInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PROCESSOCONVDATAINICIO",gx.O.A3817ProcessoConvDataInicio,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3817ProcessoConvDataInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PROCESSOCONVDATAINICIO")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[46]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoconvsncontrato,isvalid:null,rgrid:[],fld:"PROCESSOCONVSNCONTRATO",gxz:"Z3823ProcessoConvSnContrato",gxold:"O3823ProcessoConvSnContrato",gxvar:"A3823ProcessoConvSnContrato",ucs:[],op:[],ip:[46],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3823ProcessoConvSnContrato=Value},v2z:function(Value){gx.O.Z3823ProcessoConvSnContrato=Value},v2c:function(){gx.fn.setControlValue("PROCESSOCONVSNCONTRATO",gx.O.A3823ProcessoConvSnContrato,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3823ProcessoConvSnContrato=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOCONVSNCONTRATO")},nac:gx.falseFn};
   this.declareDomainHdlr( 46 , function() {
   });
   GXValidFnc[49]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[51]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoconvdatavalidade,isvalid:null,rgrid:[],fld:"PROCESSOCONVDATAVALIDADE",gxz:"Z3818ProcessoConvDataValidade",gxold:"O3818ProcessoConvDataValidade",gxvar:"A3818ProcessoConvDataValidade",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[51],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3818ProcessoConvDataValidade=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3818ProcessoConvDataValidade=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PROCESSOCONVDATAVALIDADE",gx.O.A3818ProcessoConvDataValidade,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3818ProcessoConvDataValidade=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PROCESSOCONVDATAVALIDADE")},nac:gx.falseFn};
   this.declareDomainHdlr( 51 , function() {
   });
   GXValidFnc[54]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[56]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoconvnocontrato,isvalid:null,rgrid:[],fld:"PROCESSOCONVNOCONTRATO",gxz:"Z3816ProcessoConvNoContrato",gxold:"O3816ProcessoConvNoContrato",gxvar:"A3816ProcessoConvNoContrato",ucs:[],op:[],ip:[56],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3816ProcessoConvNoContrato=Value},v2z:function(Value){gx.O.Z3816ProcessoConvNoContrato=Value},v2c:function(){gx.fn.setControlValue("PROCESSOCONVNOCONTRATO",gx.O.A3816ProcessoConvNoContrato,0)},c2v:function(){gx.O.A3816ProcessoConvNoContrato=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOCONVNOCONTRATO")},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoconvsituacao,isvalid:null,rgrid:[],fld:"PROCESSOCONVSITUACAO",gxz:"Z3815ProcessoConvSituacao",gxold:"O3815ProcessoConvSituacao",gxvar:"A3815ProcessoConvSituacao",ucs:[],op:[],ip:[61],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3815ProcessoConvSituacao=Value},v2z:function(Value){gx.O.Z3815ProcessoConvSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("PROCESSOCONVSITUACAO",gx.O.A3815ProcessoConvSituacao)},c2v:function(){gx.O.A3815ProcessoConvSituacao=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOCONVSITUACAO")},nac:gx.falseFn};
   GXValidFnc[64]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[66]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoconvdatafeccan,isvalid:null,rgrid:[],fld:"PROCESSOCONVDATAFECCAN",gxz:"Z3822ProcessoConvDataFecCan",gxold:"O3822ProcessoConvDataFecCan",gxvar:"A3822ProcessoConvDataFecCan",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[66],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3822ProcessoConvDataFecCan=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3822ProcessoConvDataFecCan=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PROCESSOCONVDATAFECCAN",gx.O.A3822ProcessoConvDataFecCan,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3822ProcessoConvDataFecCan=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PROCESSOCONVDATAFECCAN")},nac:gx.falseFn};
   this.declareDomainHdlr( 66 , function() {
   });
   GXValidFnc[69]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Processoconvvalor,isvalid:null,rgrid:[],fld:"PROCESSOCONVVALOR",gxz:"Z3820ProcessoConvValor",gxold:"O3820ProcessoConvValor",gxvar:"A3820ProcessoConvValor",ucs:[],op:[],ip:[71],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3820ProcessoConvValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3820ProcessoConvValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PROCESSOCONVVALOR",gx.O.A3820ProcessoConvValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3820ProcessoConvValor=this.val()},val:function(){return gx.fn.getDecimalValue("PROCESSOCONVVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 71 , function() {
   });
   GXValidFnc[74]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[76]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Convenioid,isvalid:null,rgrid:[],fld:"CONVENIOID",gxz:"Z1681ConvenioId",gxold:"O1681ConvenioId",gxvar:"A1681ConvenioId",ucs:[],op:[77,8],ip:[77,8,76,7],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1681ConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1681ConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONVENIOID",gx.O.A1681ConvenioId,0)},c2v:function(){gx.O.A1681ConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[77]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Valid_Conveniodescricao,isvalid:null,rgrid:[],fld:"CONVENIODESCRICAO",gxz:"Z2082ConvenioDescricao",gxold:"O2082ConvenioDescricao",gxvar:"A2082ConvenioDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2082ConvenioDescricao=Value},v2z:function(Value){gx.O.Z2082ConvenioDescricao=Value},v2c:function(){gx.fn.setControlValue("CONVENIODESCRICAO",gx.O.A2082ConvenioDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2082ConvenioDescricao=this.val()},val:function(){return gx.fn.getControlValue("CONVENIODESCRICAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 77 , function() {
   });
   GXValidFnc[80]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[82]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:this.Valid_Processoconvjustificativa,isvalid:null,rgrid:[],fld:"PROCESSOCONVJUSTIFICATIVA",gxz:"Z3821ProcessoConvJustificativa",gxold:"O3821ProcessoConvJustificativa",gxvar:"A3821ProcessoConvJustificativa",ucs:[],op:[],ip:[82],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3821ProcessoConvJustificativa=Value},v2z:function(Value){gx.O.Z3821ProcessoConvJustificativa=Value},v2c:function(){gx.fn.setControlValue("PROCESSOCONVJUSTIFICATIVA",gx.O.A3821ProcessoConvJustificativa,0)},c2v:function(){gx.O.A3821ProcessoConvJustificativa=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOCONVJUSTIFICATIVA")},nac:gx.falseFn};
   GXValidFnc[85]={fld:"TOTAUTORIZACOES", format:0,grid:0};
   GXValidFnc[87]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Totautorizacoes,isvalid:null,rgrid:[],fld:"vTOTAUTORIZACOES",gxz:"ZV22TotAutorizacoes",gxold:"OV22TotAutorizacoes",gxvar:"AV22TotAutorizacoes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22TotAutorizacoes=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV22TotAutorizacoes=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTAUTORIZACOES",gx.O.AV22TotAutorizacoes,2,',')},c2v:function(){gx.O.AV22TotAutorizacoes=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTAUTORIZACOES",'.',',')},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Qtdeautorizacoes,isvalid:null,rgrid:[],fld:"vQTDEAUTORIZACOES",gxz:"ZV28QtdeAutorizacoes",gxold:"OV28QtdeAutorizacoes",gxvar:"AV28QtdeAutorizacoes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28QtdeAutorizacoes=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28QtdeAutorizacoes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDEAUTORIZACOES",gx.O.AV28QtdeAutorizacoes,0)},c2v:function(){gx.O.AV28QtdeAutorizacoes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDEAUTORIZACOES",'.')},nac:gx.falseFn};
   GXValidFnc[91]={fld:"TOTNOTAS", format:0,grid:0};
   GXValidFnc[93]={lvl:0,type:"decimal",len:15,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Totnotas,isvalid:null,rgrid:[],fld:"vTOTNOTAS",gxz:"ZV23TotNotas",gxold:"OV23TotNotas",gxvar:"AV23TotNotas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23TotNotas=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV23TotNotas=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTOTNOTAS",gx.O.AV23TotNotas,2,',')},c2v:function(){gx.O.AV23TotNotas=this.val()},val:function(){return gx.fn.getDecimalValue("vTOTNOTAS",'.',',')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Qtdenotas,isvalid:null,rgrid:[],fld:"vQTDENOTAS",gxz:"ZV27QtdeNotas",gxold:"OV27QtdeNotas",gxvar:"AV27QtdeNotas",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27QtdeNotas=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27QtdeNotas=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDENOTAS",gx.O.AV27QtdeNotas,0)},c2v:function(){gx.O.AV27QtdeNotas=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDENOTAS",'.')},nac:gx.falseFn};
   GXValidFnc[95]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[96]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVUSUARIOALT",gxz:"Z3824ProcessoConvUsuarioAlt",gxold:"O3824ProcessoConvUsuarioAlt",gxvar:"A3824ProcessoConvUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3824ProcessoConvUsuarioAlt=Value},v2z:function(Value){gx.O.Z3824ProcessoConvUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("PROCESSOCONVUSUARIOALT",gx.O.A3824ProcessoConvUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3824ProcessoConvUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PROCESSOCONVUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 96 , function() {
   });
   GXValidFnc[97]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PROCESSOCONVDATAHORAALT",gxz:"Z3825ProcessoConvDataHoraAlt",gxold:"O3825ProcessoConvDataHoraAlt",gxvar:"A3825ProcessoConvDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A3825ProcessoConvDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3825ProcessoConvDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PROCESSOCONVDATAHORAALT",gx.O.A3825ProcessoConvDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3825ProcessoConvDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PROCESSOCONVDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 97 , function() {
   });
   GXValidFnc[106]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[107]={fld:"JS", format:2,grid:0};
   GXValidFnc[108]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV30Sim",gxold:"OV30Sim",gxvar:"AV30Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30Sim=Value},v2z:function(Value){gx.O.ZV30Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV30Sim,0)},c2v:function(){gx.O.AV30Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[109]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:this.Validv_Nao,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV31Nao",gxold:"OV31Nao",gxvar:"AV31Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV31Nao=Value},v2z:function(Value){gx.O.ZV31Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV31Nao,0)},c2v:function(){gx.O.AV31Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[111]={fld:"BTNHELP",grid:0};
   GXValidFnc[115]={fld:"PROMPT_4293",grid:402};
   GXValidFnc[116]={fld:"PROMPT_8112",grid:402};
   GXValidFnc[117]={fld:"PROMPT_1681",grid:402};
   this.A3372ProcessoConvEmpresaId = "" ;
   this.Z3372ProcessoConvEmpresaId = "" ;
   this.O3372ProcessoConvEmpresaId = "" ;
   this.AV21ConvenioEmpresaId = "" ;
   this.ZV21ConvenioEmpresaId = "" ;
   this.OV21ConvenioEmpresaId = "" ;
   this.A1680ConvenioEmpresaId = "" ;
   this.Z1680ConvenioEmpresaId = "" ;
   this.O1680ConvenioEmpresaId = "" ;
   this.AV32ProcessoConvAnoAux = 0 ;
   this.ZV32ProcessoConvAnoAux = 0 ;
   this.OV32ProcessoConvAnoAux = 0 ;
   this.A3374ProcessoConvNumero = 0 ;
   this.Z3374ProcessoConvNumero = 0 ;
   this.O3374ProcessoConvNumero = 0 ;
   this.A4293ProcessoConvFornecId = 0 ;
   this.Z4293ProcessoConvFornecId = 0 ;
   this.O4293ProcessoConvFornecId = 0 ;
   this.A4294ProcessoConvFornecFantasia = "" ;
   this.Z4294ProcessoConvFornecFantasia = "" ;
   this.O4294ProcessoConvFornecFantasia = "" ;
   this.A3819ProcessoConvFinalidade = "" ;
   this.Z3819ProcessoConvFinalidade = "" ;
   this.O3819ProcessoConvFinalidade = "" ;
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.Z8112TermoOutorgaNoProcesso = "" ;
   this.O8112TermoOutorgaNoProcesso = "" ;
   this.A3817ProcessoConvDataInicio = gx.date.nullDate() ;
   this.Z3817ProcessoConvDataInicio = gx.date.nullDate() ;
   this.O3817ProcessoConvDataInicio = gx.date.nullDate() ;
   this.A3823ProcessoConvSnContrato = "" ;
   this.Z3823ProcessoConvSnContrato = "" ;
   this.O3823ProcessoConvSnContrato = "" ;
   this.A3818ProcessoConvDataValidade = gx.date.nullDate() ;
   this.Z3818ProcessoConvDataValidade = gx.date.nullDate() ;
   this.O3818ProcessoConvDataValidade = gx.date.nullDate() ;
   this.A3816ProcessoConvNoContrato = "" ;
   this.Z3816ProcessoConvNoContrato = "" ;
   this.O3816ProcessoConvNoContrato = "" ;
   this.A3815ProcessoConvSituacao = "" ;
   this.Z3815ProcessoConvSituacao = "" ;
   this.O3815ProcessoConvSituacao = "" ;
   this.A3822ProcessoConvDataFecCan = gx.date.nullDate() ;
   this.Z3822ProcessoConvDataFecCan = gx.date.nullDate() ;
   this.O3822ProcessoConvDataFecCan = gx.date.nullDate() ;
   this.A3820ProcessoConvValor = 0 ;
   this.Z3820ProcessoConvValor = 0 ;
   this.O3820ProcessoConvValor = 0 ;
   this.A1681ConvenioId = 0 ;
   this.Z1681ConvenioId = 0 ;
   this.O1681ConvenioId = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.Z2082ConvenioDescricao = "" ;
   this.O2082ConvenioDescricao = "" ;
   this.A3821ProcessoConvJustificativa = "" ;
   this.Z3821ProcessoConvJustificativa = "" ;
   this.O3821ProcessoConvJustificativa = "" ;
   this.AV22TotAutorizacoes = 0 ;
   this.ZV22TotAutorizacoes = 0 ;
   this.OV22TotAutorizacoes = 0 ;
   this.AV28QtdeAutorizacoes = 0 ;
   this.ZV28QtdeAutorizacoes = 0 ;
   this.OV28QtdeAutorizacoes = 0 ;
   this.AV23TotNotas = 0 ;
   this.ZV23TotNotas = 0 ;
   this.OV23TotNotas = 0 ;
   this.AV27QtdeNotas = 0 ;
   this.ZV27QtdeNotas = 0 ;
   this.OV27QtdeNotas = 0 ;
   this.A3824ProcessoConvUsuarioAlt = "" ;
   this.Z3824ProcessoConvUsuarioAlt = "" ;
   this.O3824ProcessoConvUsuarioAlt = "" ;
   this.A3825ProcessoConvDataHoraAlt = gx.date.nullDate() ;
   this.Z3825ProcessoConvDataHoraAlt = gx.date.nullDate() ;
   this.O3825ProcessoConvDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV30Sim = "" ;
   this.ZV30Sim = "" ;
   this.OV30Sim = "" ;
   this.AV31Nao = "" ;
   this.ZV31Nao = "" ;
   this.OV31Nao = "" ;
   this.AV30Sim = "" ;
   this.AV31Nao = "" ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV44Pgmname = "" ;
   this.AV45Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV13Tabela = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV24ContaPagRecEmpresaId = "" ;
   this.AV21ConvenioEmpresaId = "" ;
   this.AV26PedidoCompraEmpresaId = "" ;
   this.AV29ProcessoConvFornecEmpId = "" ;
   this.AV34TermoOutorgaEmpresaId = "" ;
   this.AV38TxtAux = "" ;
   this.AV37DataInicioTO = gx.date.nullDate() ;
   this.AV32ProcessoConvAnoAux = 0 ;
   this.AV35Entrada = [ ] ;
   this.AV36Saida = [ ] ;
   this.AV18ProcessoConvAno = 0 ;
   this.AV19ProcessoConvNumero = 0 ;
   this.A3372ProcessoConvEmpresaId = "" ;
   this.A3373ProcessoConvAno = 0 ;
   this.A3374ProcessoConvNumero = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A4292ProcessoConvFornecEmpId = "" ;
   this.A8111TermoOutorgaEmpresaId = "" ;
   this.AV25ConvenioTipoConvenio = "" ;
   this.AV22TotAutorizacoes = 0 ;
   this.AV28QtdeAutorizacoes = 0 ;
   this.AV23TotNotas = 0 ;
   this.AV27QtdeNotas = 0 ;
   this.AV20SnAlterou = "" ;
   this.AV40LogProcessoConvEmpresaId = "" ;
   this.AV41LogProcessoConvAno = 0 ;
   this.AV42LogProcessoConvNumero = 0 ;
   this.A8159TermoOutorgaValorProcesso = 0 ;
   this.A4296ProcessoConvPedidoCompraForn = "" ;
   this.A3815ProcessoConvSituacao = "" ;
   this.A3816ProcessoConvNoContrato = "" ;
   this.A3817ProcessoConvDataInicio = gx.date.nullDate() ;
   this.A3818ProcessoConvDataValidade = gx.date.nullDate() ;
   this.A3819ProcessoConvFinalidade = "" ;
   this.A3820ProcessoConvValor = 0 ;
   this.A3821ProcessoConvJustificativa = "" ;
   this.A3822ProcessoConvDataFecCan = gx.date.nullDate() ;
   this.A3823ProcessoConvSnContrato = "" ;
   this.A1681ConvenioId = 0 ;
   this.A2082ConvenioDescricao = "" ;
   this.A2183ConvenioAtivo = "" ;
   this.A4293ProcessoConvFornecId = 0 ;
   this.A4294ProcessoConvFornecFantasia = "" ;
   this.A4295ProcessoConvFornecRazaoSocial = "" ;
   this.A8112TermoOutorgaNoProcesso = "" ;
   this.A8106TermoOutorgaInicioProcesso = gx.date.nullDate() ;
   this.A8107TermoOutorgaFinalProcesso = gx.date.nullDate() ;
   this.A3824ProcessoConvUsuarioAlt = "" ;
   this.A3825ProcessoConvDataHoraAlt = gx.date.nullDate() ;
   this.AV39lProcessoConvs = {} ;
   this.AV43LogUsuario = "" ;
   this.A8105TermoOutorgaValor = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e12792_client": ["'FECHAR'", true] ,"e13792_client": ["AFTER TRN", true] ,"e1479402_client": ["ENTER", true] ,"e1579402_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV18ProcessoConvAno',fld:'vPROCESSOCONVANO'},{av:'AV19ProcessoConvNumero',fld:'vPROCESSOCONVNUMERO'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV17AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV32ProcessoConvAnoAux',fld:'vPROCESSOCONVANOAUX'}]];
   this.setPrompt("PROMPT_4293", [28]);
   this.setPrompt("PROMPT_8112", [39]);
   this.setPrompt("PROMPT_1681", [76]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A3373ProcessoConvAno", "PROCESSOCONVANO", 0, "int");
   this.setVCMap("A4296ProcessoConvPedidoCompraForn", "PROCESSOCONVPEDIDOCOMPRAFORN", 0, "svchar");
   this.setVCMap("A8111TermoOutorgaEmpresaId", "TERMOOUTORGAEMPRESAID", 0, "char");
   this.setVCMap("A8105TermoOutorgaValor", "TERMOOUTORGAVALOR", 0, "decimal");
   this.setVCMap("A8159TermoOutorgaValorProcesso", "TERMOOUTORGAVALORPROCESSO", 0, "decimal");
   this.setVCMap("AV18ProcessoConvAno", "vPROCESSOCONVANO", 0, "int");
   this.setVCMap("AV19ProcessoConvNumero", "vPROCESSOCONVNUMERO", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV29ProcessoConvFornecEmpId", "vPROCESSOCONVFORNECEMPID", 0, "char");
   this.setVCMap("A4292ProcessoConvFornecEmpId", "PROCESSOCONVFORNECEMPID", 0, "char");
   this.setVCMap("AV34TermoOutorgaEmpresaId", "vTERMOOUTORGAEMPRESAID", 0, "char");
   this.setVCMap("A2183ConvenioAtivo", "CONVENIOATIVO", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV40LogProcessoConvEmpresaId", "vLOGPROCESSOCONVEMPRESAID", 0, "char");
   this.setVCMap("AV41LogProcessoConvAno", "vLOGPROCESSOCONVANO", 0, "int");
   this.setVCMap("AV42LogProcessoConvNumero", "vLOGPROCESSOCONVNUMERO", 0, "int");
   this.setVCMap("A4295ProcessoConvFornecRazaoSocial", "PROCESSOCONVFORNECRAZAOSOCIAL", 0, "svchar");
   this.setVCMap("A8106TermoOutorgaInicioProcesso", "TERMOOUTORGAINICIOPROCESSO", 0, "date");
   this.setVCMap("A8107TermoOutorgaFinalProcesso", "TERMOOUTORGAFINALPROCESSO", 0, "date");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV25ConvenioTipoConvenio", "vCONVENIOTIPOCONVENIO", 0, "char");
   this.setVCMap("AV26PedidoCompraEmpresaId", "vPEDIDOCOMPRAEMPRESAID", 0, "char");
   this.setVCMap("AV24ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV37DataInicioTO", "vDATAINICIOTO", 0, "date");
   this.setVCMap("AV39lProcessoConvs", "vLPROCESSOCONVS", 0, "lProcessoConvs");
   this.setVCMap("AV43LogUsuario", "vLOGUSUARIO", 0, "svchar");
   this.setVCMap("AV45Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV44Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 402 ]= ["O8112TermoOutorgaNoProcesso","O4296ProcessoConvPedidoCompraForn","O8159TermoOutorgaValorProcesso","O8107TermoOutorgaFinalProcesso","O8106TermoOutorgaInicioProcesso","O8111TermoOutorgaEmpresaId","O4293ProcessoConvFornecId","O4295ProcessoConvFornecRazaoSocial","O4294ProcessoConvFornecFantasia","O4292ProcessoConvFornecEmpId","O1681ConvenioId","O2183ConvenioAtivo","O2082ConvenioDescricao","O1680ConvenioEmpresaId","O3823ProcessoConvSnContrato","O3822ProcessoConvDataFecCan","O3821ProcessoConvJustificativa","O3820ProcessoConvValor","O3819ProcessoConvFinalidade","O3818ProcessoConvDataValidade","O3817ProcessoConvDataInicio","O3816ProcessoConvNoContrato","O3815ProcessoConvSituacao","O3374ProcessoConvNumero","O3373ProcessoConvAno"] ;
});
gx.setParentObj(new tprocessoconv());

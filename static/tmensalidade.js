/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:8:4.0
*/
gx.evt.autoSkip = false;
gx.define('tmensalidade', false, function () {
   this.ServerClass =  "tmensalidade" ;
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
      this.AV17PessoaId=gx.fn.getIntegerValue("vPESSOAID",'.') ;
      this.AV34MensalidadePagRec=gx.fn.getControlValue("vMENSALIDADEPAGREC") ;
      this.AV18MensalidadeAno=gx.fn.getIntegerValue("vMENSALIDADEANO",'.') ;
      this.AV19MensalidadeMes=gx.fn.getIntegerValue("vMENSALIDADEMES",'.') ;
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.AV31EmpresaCentroCustoEmpresaId=gx.fn.getControlValue("vEMPRESACENTROCUSTOEMPRESAID") ;
      this.A2988MensalidadeCCusEmpId=gx.fn.getControlValue("MENSALIDADECCUSEMPID") ;
      this.AV27Data=gx.fn.getControlValue("vDATA") ;
      this.AV33SnCCusAnal=gx.fn.getControlValue("vSNCCUSANAL") ;
      this.AV20SnAlterou=gx.fn.getControlValue("vSNALTEROU") ;
      this.AV28Data2=gx.fn.getDateValue("vDATA2") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.AV29Dia=gx.fn.getIntegerValue("vDIA",'.') ;
      this.AV21ErroMesAno=gx.fn.getControlValue("vERROMESANO") ;
      this.AV42Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV41Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV22Sim=gx.fn.getControlValue("vSIM") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Pessoaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Pessoaid",["gx.O.A227EmpresaPessoasEmpresaId", "gx.O.A69PessoaId", "gx.O.A71PessoaFantasia"],["A71PessoaFantasia"]);
      return true;
   }
   this.Valid_Mensalidadepagrec=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENSALIDADEPAGREC");
         this.AnyError  = 0;
         if ( ! ( this.A3085MensalidadePagRec == "0" || this.A3085MensalidadePagRec == "P" || this.A3085MensalidadePagRec == "R" ) )
         {
            try {
               gxballoon.setError("Campo Pagar/Receber fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         if ( this.A3085MensalidadePagRec == "0" )
         {
            try {
               gxballoon.setError("Informe Pagar/Receber");
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
   this.Valid_Mensalidademes=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENSALIDADEMES");
         this.AnyError  = 0;
         if ( (0==this.A2010MensalidadeMes) )
         {
            try {
               gxballoon.setError("Informe mês");
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
   this.Valid_Mensalidadeano=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Mensalidadeano",["gx.O.A2010MensalidadeMes", "gx.O.A2009MensalidadeAno", "gx.O.AV27Data", 'gx.date.urlDate(gx.O.AV28Data2,"DMY4")', "gx.O.AV29Dia"],["AV27Data", "AV28Data2", "AV29Dia"]);
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
   this.Valid_Mensalidadediavencimento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENSALIDADEDIAVENCIMENTO");
         this.AnyError  = 0;
         if ( this.A2011MensalidadeDiaVencimento < 0 || this.A2011MensalidadeDiaVencimento > this.AV29Dia )
         {
            try {
               gxballoon.setError("Dia inválido");
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
   this.Valid_Mensalidadepcacrdes=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENSALIDADEPCACRDES");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Mensalidadevalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENSALIDADEVALOR");
         this.AnyError  = 0;
         if ( (0==this.A2011MensalidadeDiaVencimento) && (0.0==this.A2008MensalidadePcAcrDes) && (0.0==this.A2012MensalidadeValor) )
         {
            try {
               gxballoon.setError("Informe Dia do Vencimento,Percentual Acréscimo/Desconto ou Valor");
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
   this.Valid_Mensalidadeccusid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENSALIDADECCUSID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e123r2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e133r2_client=function()
   {
      this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e143r334_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e153r334_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,15,16,20,22,25,27,28,29,32,34,37,39,40,43,45,48,50,51,54,57,59,61,70,71,73,75,76];
   this.GXLastCtrlId =76;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[14,15],ip:[15,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PESSOAID",gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PESSOAID",'.')},nac:function(){return !(0==this.AV17PessoaId)}};
   GXValidFnc[15]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("PESSOAFANTASIA",gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("PESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[16]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Mensalidadepagrec,isvalid:null,rgrid:[],fld:"MENSALIDADEPAGREC",gxz:"Z3085MensalidadePagRec",gxold:"O3085MensalidadePagRec",gxvar:"A3085MensalidadePagRec",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A3085MensalidadePagRec=Value},v2z:function(Value){gx.O.Z3085MensalidadePagRec=Value},v2c:function(){gx.fn.setComboBoxValue("MENSALIDADEPAGREC",gx.O.A3085MensalidadePagRec);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3085MensalidadePagRec=this.val()},val:function(){return gx.fn.getControlValue("MENSALIDADEPAGREC")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[25]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mensalidademes,isvalid:null,rgrid:[],fld:"MENSALIDADEMES",gxz:"Z2010MensalidadeMes",gxold:"O2010MensalidadeMes",gxvar:"A2010MensalidadeMes",ucs:[],op:[27],ip:[27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2010MensalidadeMes=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2010MensalidadeMes=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MENSALIDADEMES",gx.O.A2010MensalidadeMes,0)},c2v:function(){gx.O.A2010MensalidadeMes=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENSALIDADEMES",'.')},nac:function(){return (this.Gx_mode == 'UPD')}};
   GXValidFnc[28]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mensalidadeano,isvalid:null,rgrid:[],fld:"MENSALIDADEANO",gxz:"Z2009MensalidadeAno",gxold:"O2009MensalidadeAno",gxvar:"A2009MensalidadeAno",ucs:[],op:[29],ip:[29,27],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2009MensalidadeAno=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2009MensalidadeAno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MENSALIDADEANO",gx.O.A2009MensalidadeAno,0)},c2v:function(){gx.O.A2009MensalidadeAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENSALIDADEANO",'.')},nac:function(){return (this.Gx_mode == 'UPD')}};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mensalidadediavencimento,isvalid:null,rgrid:[],fld:"MENSALIDADEDIAVENCIMENTO",gxz:"Z2011MensalidadeDiaVencimento",gxold:"O2011MensalidadeDiaVencimento",gxvar:"A2011MensalidadeDiaVencimento",ucs:[],op:[34],ip:[34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2011MensalidadeDiaVencimento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2011MensalidadeDiaVencimento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MENSALIDADEDIAVENCIMENTO",gx.O.A2011MensalidadeDiaVencimento,0)},c2v:function(){gx.O.A2011MensalidadeDiaVencimento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENSALIDADEDIAVENCIMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:7,dec:3,sign:true,pic:"ZZ9.999",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mensalidadepcacrdes,isvalid:null,rgrid:[],fld:"MENSALIDADEPCACRDES",gxz:"Z2008MensalidadePcAcrDes",gxold:"O2008MensalidadePcAcrDes",gxvar:"A2008MensalidadePcAcrDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2008MensalidadePcAcrDes=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2008MensalidadePcAcrDes=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MENSALIDADEPCACRDES",gx.O.A2008MensalidadePcAcrDes,3,',')},c2v:function(){gx.O.A2008MensalidadePcAcrDes=this.val()},val:function(){return gx.fn.getDecimalValue("MENSALIDADEPCACRDES",'.',',')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:11,dec:2,sign:false,pic:"ZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mensalidadevalor,isvalid:null,rgrid:[],fld:"MENSALIDADEVALOR",gxz:"Z2012MensalidadeValor",gxold:"O2012MensalidadeValor",gxvar:"A2012MensalidadeValor",ucs:[],op:[45,39,34],ip:[45,39,34],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2012MensalidadeValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2012MensalidadeValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("MENSALIDADEVALOR",gx.O.A2012MensalidadeValor,2,',')},c2v:function(){gx.O.A2012MensalidadeValor=this.val()},val:function(){return gx.fn.getDecimalValue("MENSALIDADEVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Mensalidadeccusid,isvalid:null,rgrid:[],fld:"MENSALIDADECCUSID",gxz:"Z2989MensalidadeCCusId",gxold:"O2989MensalidadeCCusId",gxvar:"A2989MensalidadeCCusId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2989MensalidadeCCusId=Value},v2z:function(Value){gx.O.Z2989MensalidadeCCusId=Value},v2c:function(){gx.fn.setControlValue("MENSALIDADECCUSID",gx.O.A2989MensalidadeCCusId,0)},c2v:function(){gx.O.A2989MensalidadeCCusId=this.val()},val:function(){return gx.fn.getControlValue("MENSALIDADECCUSID")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"svchar",len:35,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADECCUSDESCRICAO",gxz:"Z2990MensalidadeCCusDescricao",gxold:"O2990MensalidadeCCusDescricao",gxvar:"A2990MensalidadeCCusDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2990MensalidadeCCusDescricao=Value},v2z:function(Value){gx.O.Z2990MensalidadeCCusDescricao=Value},v2c:function(){gx.fn.setControlValue("MENSALIDADECCUSDESCRICAO",gx.O.A2990MensalidadeCCusDescricao,0)},c2v:function(){gx.O.A2990MensalidadeCCusDescricao=this.val()},val:function(){return gx.fn.getControlValue("MENSALIDADECCUSDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE4",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEUSUARIOALT",gxz:"Z2013MensalidadeUsuarioAlt",gxold:"O2013MensalidadeUsuarioAlt",gxvar:"A2013MensalidadeUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2013MensalidadeUsuarioAlt=Value},v2z:function(Value){gx.O.Z2013MensalidadeUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("MENSALIDADEUSUARIOALT",gx.O.A2013MensalidadeUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2013MensalidadeUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("MENSALIDADEUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[61]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"MENSALIDADEDATAHORAALT",gxz:"Z2014MensalidadeDataHoraAlt",gxold:"O2014MensalidadeDataHoraAlt",gxvar:"A2014MensalidadeDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2014MensalidadeDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2014MensalidadeDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MENSALIDADEDATAHORAALT",gx.O.A2014MensalidadeDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2014MensalidadeDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("MENSALIDADEDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 61 , function() {
   });
   GXValidFnc[70]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV30AcessoSistemaSequencia",gxold:"OV30AcessoSistemaSequencia",gxvar:"AV30AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV30AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV30AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[71]={fld:"JS", format:2,grid:0};
   GXValidFnc[73]={fld:"BTNHELP",grid:0};
   GXValidFnc[75]={fld:"PROMPT_69",grid:334};
   GXValidFnc[76]={fld:"PROMPT_2989",grid:334};
   this.A69PessoaId = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.A3085MensalidadePagRec = "" ;
   this.Z3085MensalidadePagRec = "" ;
   this.O3085MensalidadePagRec = "" ;
   this.A2010MensalidadeMes = 0 ;
   this.Z2010MensalidadeMes = 0 ;
   this.O2010MensalidadeMes = 0 ;
   this.A2009MensalidadeAno = 0 ;
   this.Z2009MensalidadeAno = 0 ;
   this.O2009MensalidadeAno = 0 ;
   this.A2011MensalidadeDiaVencimento = 0 ;
   this.Z2011MensalidadeDiaVencimento = 0 ;
   this.O2011MensalidadeDiaVencimento = 0 ;
   this.A2008MensalidadePcAcrDes = 0 ;
   this.Z2008MensalidadePcAcrDes = 0 ;
   this.O2008MensalidadePcAcrDes = 0 ;
   this.A2012MensalidadeValor = 0 ;
   this.Z2012MensalidadeValor = 0 ;
   this.O2012MensalidadeValor = 0 ;
   this.A2989MensalidadeCCusId = "" ;
   this.Z2989MensalidadeCCusId = "" ;
   this.O2989MensalidadeCCusId = "" ;
   this.A2990MensalidadeCCusDescricao = "" ;
   this.Z2990MensalidadeCCusDescricao = "" ;
   this.O2990MensalidadeCCusDescricao = "" ;
   this.A2013MensalidadeUsuarioAlt = "" ;
   this.Z2013MensalidadeUsuarioAlt = "" ;
   this.O2013MensalidadeUsuarioAlt = "" ;
   this.A2014MensalidadeDataHoraAlt = gx.date.nullDate() ;
   this.Z2014MensalidadeDataHoraAlt = gx.date.nullDate() ;
   this.O2014MensalidadeDataHoraAlt = gx.date.nullDate() ;
   this.AV30AcessoSistemaSequencia = 0 ;
   this.ZV30AcessoSistemaSequencia = 0 ;
   this.OV30AcessoSistemaSequencia = 0 ;
   this.AV7UsrCod = "" ;
   this.AV10EmpresaLogadaId = "" ;
   this.AV16Sistema = "" ;
   this.AV41Pgmname = "" ;
   this.AV42Pgmdesc = "" ;
   this.AV11MsgErro = "" ;
   this.AV30AcessoSistemaSequencia = 0 ;
   this.AV14Modulo = "" ;
   this.AV8Logon = {} ;
   this.AV12EmpresaPadrao = "" ;
   this.AV31EmpresaCentroCustoEmpresaId = "" ;
   this.AV22Sim = "" ;
   this.AV23Nao = "" ;
   this.AV32TemMascara = "" ;
   this.AV21ErroMesAno = "" ;
   this.AV33SnCCusAnal = "" ;
   this.AV17PessoaId = 0 ;
   this.AV34MensalidadePagRec = "" ;
   this.AV18MensalidadeAno = 0 ;
   this.AV19MensalidadeMes = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A3085MensalidadePagRec = "" ;
   this.A2009MensalidadeAno = 0 ;
   this.A2010MensalidadeMes = 0 ;
   this.A2988MensalidadeCCusEmpId = "" ;
   this.AV27Data = "" ;
   this.AV20SnAlterou = "" ;
   this.A71PessoaFantasia = "" ;
   this.A2011MensalidadeDiaVencimento = 0 ;
   this.A2008MensalidadePcAcrDes = 0 ;
   this.A2012MensalidadeValor = 0 ;
   this.A2989MensalidadeCCusId = "" ;
   this.A2990MensalidadeCCusDescricao = "" ;
   this.A2013MensalidadeUsuarioAlt = "" ;
   this.A2014MensalidadeDataHoraAlt = gx.date.nullDate() ;
   this.AV28Data2 = gx.date.nullDate() ;
   this.AV29Dia = 0 ;
   this.Gx_mode = "" ;
   this.Events = {"e123r2_client": ["'FECHAR'", true] ,"e133r2_client": ["AFTER TRN", true] ,"e143r334_client": ["ENTER", true] ,"e153r334_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV17PessoaId',fld:'vPESSOAID'},{av:'AV34MensalidadePagRec',fld:'vMENSALIDADEPAGREC'},{av:'AV18MensalidadeAno',fld:'vMENSALIDADEANO'},{av:'AV19MensalidadeMes',fld:'vMENSALIDADEMES'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV30AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV34MensalidadePagRec',fld:'vMENSALIDADEPAGREC'}],[{av:'AV34MensalidadePagRec',fld:'vMENSALIDADEPAGREC'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE'},{av:'AV30AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV34MensalidadePagRec',fld:'vMENSALIDADEPAGREC'}],[{av:'AV34MensalidadePagRec',fld:'vMENSALIDADEPAGREC'}]];
   this.setPrompt("PROMPT_69", [14]);
   this.setPrompt("PROMPT_2989", [50]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV17PessoaId", "vPESSOAID", 0, "int");
   this.setVCMap("AV34MensalidadePagRec", "vMENSALIDADEPAGREC", 0, "char");
   this.setVCMap("AV18MensalidadeAno", "vMENSALIDADEANO", 0, "int");
   this.setVCMap("AV19MensalidadeMes", "vMENSALIDADEMES", 0, "int");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV31EmpresaCentroCustoEmpresaId", "vEMPRESACENTROCUSTOEMPRESAID", 0, "char");
   this.setVCMap("A2988MensalidadeCCusEmpId", "MENSALIDADECCUSEMPID", 0, "char");
   this.setVCMap("AV27Data", "vDATA", 0, "char");
   this.setVCMap("AV33SnCCusAnal", "vSNCCUSANAL", 0, "char");
   this.setVCMap("AV20SnAlterou", "vSNALTEROU", 0, "char");
   this.setVCMap("AV28Data2", "vDATA2", 0, "date");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("AV29Dia", "vDIA", 0, "int");
   this.setVCMap("AV21ErroMesAno", "vERROMESANO", 0, "svchar");
   this.setVCMap("AV42Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV41Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV22Sim", "vSIM", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
   this.LvlOlds[ 334 ]= ["O2012MensalidadeValor","O2008MensalidadePcAcrDes","O2011MensalidadeDiaVencimento"] ;
});
gx.setParentObj(new tmensalidade());

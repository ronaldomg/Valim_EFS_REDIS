/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:34:46.27
*/
gx.evt.autoSkip = false;
gx.define('tforcavendapagtoparcela', false, function () {
   this.ServerClass =  "tforcavendapagtoparcela" ;
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
      this.AV10FvId=gx.fn.getIntegerValue("vFVID",'.') ;
      this.AV11FVParcelaSeq=gx.fn.getControlValue("vFVPARCELASEQ") ;
      this.A10617FVEmpresa=gx.fn.getControlValue("FVEMPRESA") ;
      this.A10763FVParcelaFormaEmpId=gx.fn.getControlValue("FVPARCELAFORMAEMPID") ;
      this.AV25Pgmdesc=gx.fn.getControlValue("vPGMDESC") ;
      this.AV24Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Fvid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Fvid",["gx.O.A10617FVEmpresa", "gx.O.A10618FVId"],[]);
      return true;
   }
   this.Valid_Fvparcelaseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("FVPARCELASEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Fvparcelaformaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Fvparcelaformaid",["gx.O.A10763FVParcelaFormaEmpId", "gx.O.A10764FVParcelaFormaId", "gx.O.AV9FormaPgtodescricao"],["AV9FormaPgtodescricao"]);
      return true;
   }
   this.Valid_Fvparcelaformatpcobr=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Fvparcelaformatpcobr",["gx.O.A10617FVEmpresa", "gx.O.A10764FVParcelaFormaId", "gx.O.A10765FVParcelaFormaTpCobr", "gx.O.AV16TpCobrFormaPgtoDescricao"],["AV16TpCobrFormaPgtoDescricao"]);
      return true;
   }
   this.Valid_Fvparcelabancoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Fvparcelabancoid",["gx.O.A10617FVEmpresa", "gx.O.A10768FVParcelaBancoId", "gx.O.AV22BancoNome"],["AV22BancoNome"]);
      return true;
   }
   this.Valid_Fvparcelaagenciaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Fvparcelaagenciaid",["gx.O.A10617FVEmpresa", "gx.O.A10768FVParcelaBancoId", "gx.O.A10769FVParcelaAgenciaId", "gx.O.AV23BancoAgenciaNome"],["AV23BancoAgenciaNome"]);
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
   this.e12fk2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13fk793_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14fk793_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,26,29,31,32,35,37,40,42,45,47,48,51,53,54,57,59,62,64,67,69,80,82,84];
   this.GXLastCtrlId =84;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fvid,isvalid:null,rgrid:[],fld:"FVID",gxz:"Z10618FVId",gxold:"O10618FVId",gxvar:"A10618FVId",ucs:[],op:[],ip:[14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10618FVId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10618FVId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVID",gx.O.A10618FVId,0)},c2v:function(){gx.O.A10618FVId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVID",'.')},nac:function(){return !(0==this.AV10FvId)}};
   GXValidFnc[18]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[20]={lvl:0,type:"char",len:3,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fvparcelaseq,isvalid:null,rgrid:[],fld:"FVPARCELASEQ",gxz:"Z10762FVParcelaSeq",gxold:"O10762FVParcelaSeq",gxvar:"A10762FVParcelaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10762FVParcelaSeq=Value},v2z:function(Value){gx.O.Z10762FVParcelaSeq=Value},v2c:function(){gx.fn.setControlValue("FVPARCELASEQ",gx.O.A10762FVParcelaSeq,0)},c2v:function(){gx.O.A10762FVParcelaSeq=this.val()},val:function(){return gx.fn.getControlValue("FVPARCELASEQ")},nac:function(){return !(""==this.AV11FVParcelaSeq)}};
   GXValidFnc[23]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Fvparcelaformaid,isvalid:null,rgrid:[],fld:"FVPARCELAFORMAID",gxz:"Z10764FVParcelaFormaId",gxold:"O10764FVParcelaFormaId",gxvar:"A10764FVParcelaFormaId",ucs:[],op:[26],ip:[26,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10764FVParcelaFormaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10764FVParcelaFormaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVPARCELAFORMAID",gx.O.A10764FVParcelaFormaId,0)},c2v:function(){gx.O.A10764FVParcelaFormaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVPARCELAFORMAID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMAPGTODESCRICAO",gxz:"ZV9FormaPgtodescricao",gxold:"OV9FormaPgtodescricao",gxvar:"AV9FormaPgtodescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9FormaPgtodescricao=Value},v2z:function(Value){gx.O.ZV9FormaPgtodescricao=Value},v2c:function(){gx.fn.setControlValue("vFORMAPGTODESCRICAO",gx.O.AV9FormaPgtodescricao,0)},c2v:function(){gx.O.AV9FormaPgtodescricao=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Fvparcelaformatpcobr,isvalid:null,rgrid:[],fld:"FVPARCELAFORMATPCOBR",gxz:"Z10765FVParcelaFormaTpCobr",gxold:"O10765FVParcelaFormaTpCobr",gxvar:"A10765FVParcelaFormaTpCobr",ucs:[],op:[32],ip:[32,31,25],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10765FVParcelaFormaTpCobr=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10765FVParcelaFormaTpCobr=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVPARCELAFORMATPCOBR",gx.O.A10765FVParcelaFormaTpCobr,0)},c2v:function(){gx.O.A10765FVParcelaFormaTpCobr=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVPARCELAFORMATPCOBR",'.')},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPCOBRFORMAPGTODESCRICAO",gxz:"ZV16TpCobrFormaPgtoDescricao",gxold:"OV16TpCobrFormaPgtoDescricao",gxvar:"AV16TpCobrFormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TpCobrFormaPgtoDescricao=Value},v2z:function(Value){gx.O.ZV16TpCobrFormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTPCOBRFORMAPGTODESCRICAO",gx.O.AV16TpCobrFormaPgtoDescricao,0)},c2v:function(){gx.O.AV16TpCobrFormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTPCOBRFORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVPARCELAVENCIMENTO",gxz:"Z10766FVParcelaVencimento",gxold:"O10766FVParcelaVencimento",gxvar:"A10766FVParcelaVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10766FVParcelaVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10766FVParcelaVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("FVPARCELAVENCIMENTO",gx.O.A10766FVParcelaVencimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10766FVParcelaVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("FVPARCELAVENCIMENTO")},nac:gx.falseFn};
   this.declareDomainHdlr( 37 , function() {
   });
   GXValidFnc[40]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVPARCELAVALOR",gxz:"Z10767FVParcelaValor",gxold:"O10767FVParcelaValor",gxvar:"A10767FVParcelaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10767FVParcelaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z10767FVParcelaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("FVPARCELAVALOR",gx.O.A10767FVParcelaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10767FVParcelaValor=this.val()},val:function(){return gx.fn.getDecimalValue("FVPARCELAVALOR",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 42 , function() {
   });
   GXValidFnc[45]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fvparcelabancoid,isvalid:null,rgrid:[],fld:"FVPARCELABANCOID",gxz:"Z10768FVParcelaBancoId",gxold:"O10768FVParcelaBancoId",gxvar:"A10768FVParcelaBancoId",ucs:[],op:[48],ip:[48,47],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10768FVParcelaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10768FVParcelaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVPARCELABANCOID",gx.O.A10768FVParcelaBancoId,0)},c2v:function(){gx.O.A10768FVParcelaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVPARCELABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCONOME",gxz:"ZV22BancoNome",gxold:"OV22BancoNome",gxvar:"AV22BancoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22BancoNome=Value},v2z:function(Value){gx.O.ZV22BancoNome=Value},v2c:function(){gx.fn.setControlValue("vBANCONOME",gx.O.AV22BancoNome,0)},c2v:function(){gx.O.AV22BancoNome=this.val()},val:function(){return gx.fn.getControlValue("vBANCONOME")},nac:gx.falseFn};
   GXValidFnc[51]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Fvparcelaagenciaid,isvalid:null,rgrid:[],fld:"FVPARCELAAGENCIAID",gxz:"Z10769FVParcelaAgenciaId",gxold:"O10769FVParcelaAgenciaId",gxvar:"A10769FVParcelaAgenciaId",ucs:[],op:[54],ip:[54,53,47],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10769FVParcelaAgenciaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10769FVParcelaAgenciaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVPARCELAAGENCIAID",gx.O.A10769FVParcelaAgenciaId,0)},c2v:function(){gx.O.A10769FVParcelaAgenciaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVPARCELAAGENCIAID",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vBANCOAGENCIANOME",gxz:"ZV23BancoAgenciaNome",gxold:"OV23BancoAgenciaNome",gxvar:"AV23BancoAgenciaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23BancoAgenciaNome=Value},v2z:function(Value){gx.O.ZV23BancoAgenciaNome=Value},v2c:function(){gx.fn.setControlValue("vBANCOAGENCIANOME",gx.O.AV23BancoAgenciaNome,0)},c2v:function(){gx.O.AV23BancoAgenciaNome=this.val()},val:function(){return gx.fn.getControlValue("vBANCOAGENCIANOME")},nac:gx.falseFn};
   GXValidFnc[57]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVPARCELANUMEROCONTA",gxz:"Z10770FVParcelaNumeroConta",gxold:"O10770FVParcelaNumeroConta",gxvar:"A10770FVParcelaNumeroConta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10770FVParcelaNumeroConta=Value},v2z:function(Value){gx.O.Z10770FVParcelaNumeroConta=Value},v2c:function(){gx.fn.setControlValue("FVPARCELANUMEROCONTA",gx.O.A10770FVParcelaNumeroConta,0)},c2v:function(){gx.O.A10770FVParcelaNumeroConta=this.val()},val:function(){return gx.fn.getControlValue("FVPARCELANUMEROCONTA")},nac:gx.falseFn};
   GXValidFnc[62]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVPARCELACHEQUE",gxz:"Z10771FVParcelaCheque",gxold:"O10771FVParcelaCheque",gxvar:"A10771FVParcelaCheque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10771FVParcelaCheque=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10771FVParcelaCheque=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("FVPARCELACHEQUE",gx.O.A10771FVParcelaCheque,0)},c2v:function(){gx.O.A10771FVParcelaCheque=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("FVPARCELACHEQUE",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[69]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"FVPARCELANOAUTCARTAO",gxz:"Z10772FVParcelaNoAutCartao",gxold:"O10772FVParcelaNoAutCartao",gxvar:"A10772FVParcelaNoAutCartao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A10772FVParcelaNoAutCartao=Value},v2z:function(Value){gx.O.Z10772FVParcelaNoAutCartao=Value},v2c:function(){gx.fn.setControlValue("FVPARCELANOAUTCARTAO",gx.O.A10772FVParcelaNoAutCartao,0)},c2v:function(){gx.O.A10772FVParcelaNoAutCartao=this.val()},val:function(){return gx.fn.getControlValue("FVPARCELANOAUTCARTAO")},nac:gx.falseFn};
   GXValidFnc[80]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV8EmpresaPadrao",gxold:"OV8EmpresaPadrao",gxvar:"AV8EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV8EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV8EmpresaPadrao,0)},c2v:function(){gx.O.AV8EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[82]={fld:"BTNHELP",grid:0};
   GXValidFnc[84]={fld:"PROMPT_10618",grid:793};
   this.A10618FVId = 0 ;
   this.Z10618FVId = 0 ;
   this.O10618FVId = 0 ;
   this.A10762FVParcelaSeq = "" ;
   this.Z10762FVParcelaSeq = "" ;
   this.O10762FVParcelaSeq = "" ;
   this.A10764FVParcelaFormaId = 0 ;
   this.Z10764FVParcelaFormaId = 0 ;
   this.O10764FVParcelaFormaId = 0 ;
   this.AV9FormaPgtodescricao = "" ;
   this.ZV9FormaPgtodescricao = "" ;
   this.OV9FormaPgtodescricao = "" ;
   this.A10765FVParcelaFormaTpCobr = 0 ;
   this.Z10765FVParcelaFormaTpCobr = 0 ;
   this.O10765FVParcelaFormaTpCobr = 0 ;
   this.AV16TpCobrFormaPgtoDescricao = "" ;
   this.ZV16TpCobrFormaPgtoDescricao = "" ;
   this.OV16TpCobrFormaPgtoDescricao = "" ;
   this.A10766FVParcelaVencimento = gx.date.nullDate() ;
   this.Z10766FVParcelaVencimento = gx.date.nullDate() ;
   this.O10766FVParcelaVencimento = gx.date.nullDate() ;
   this.A10767FVParcelaValor = 0 ;
   this.Z10767FVParcelaValor = 0 ;
   this.O10767FVParcelaValor = 0 ;
   this.A10768FVParcelaBancoId = 0 ;
   this.Z10768FVParcelaBancoId = 0 ;
   this.O10768FVParcelaBancoId = 0 ;
   this.AV22BancoNome = "" ;
   this.ZV22BancoNome = "" ;
   this.OV22BancoNome = "" ;
   this.A10769FVParcelaAgenciaId = 0 ;
   this.Z10769FVParcelaAgenciaId = 0 ;
   this.O10769FVParcelaAgenciaId = 0 ;
   this.AV23BancoAgenciaNome = "" ;
   this.ZV23BancoAgenciaNome = "" ;
   this.OV23BancoAgenciaNome = "" ;
   this.A10770FVParcelaNumeroConta = "" ;
   this.Z10770FVParcelaNumeroConta = "" ;
   this.O10770FVParcelaNumeroConta = "" ;
   this.A10771FVParcelaCheque = 0 ;
   this.Z10771FVParcelaCheque = 0 ;
   this.O10771FVParcelaCheque = 0 ;
   this.A10772FVParcelaNoAutCartao = "" ;
   this.Z10772FVParcelaNoAutCartao = "" ;
   this.O10772FVParcelaNoAutCartao = "" ;
   this.AV8EmpresaPadrao = "" ;
   this.ZV8EmpresaPadrao = "" ;
   this.OV8EmpresaPadrao = "" ;
   this.AV17UsrCod = "" ;
   this.AV7EmpresaLogadaId = "" ;
   this.AV21Sistema = "" ;
   this.AV24Pgmname = "" ;
   this.AV25Pgmdesc = "" ;
   this.AV20MsgErro = "" ;
   this.AV19Modulo = "" ;
   this.AV12Logon = {} ;
   this.AV18Tabela = "" ;
   this.AV8EmpresaPadrao = "" ;
   this.AV10FvId = 0 ;
   this.AV11FVParcelaSeq = "" ;
   this.A10617FVEmpresa = "" ;
   this.A10618FVId = 0 ;
   this.A10762FVParcelaSeq = "" ;
   this.AV9FormaPgtodescricao = "" ;
   this.AV16TpCobrFormaPgtoDescricao = "" ;
   this.AV22BancoNome = "" ;
   this.AV23BancoAgenciaNome = "" ;
   this.A10763FVParcelaFormaEmpId = "" ;
   this.A10764FVParcelaFormaId = 0 ;
   this.A10765FVParcelaFormaTpCobr = 0 ;
   this.A10766FVParcelaVencimento = gx.date.nullDate() ;
   this.A10767FVParcelaValor = 0 ;
   this.A10768FVParcelaBancoId = 0 ;
   this.A10769FVParcelaAgenciaId = 0 ;
   this.A10770FVParcelaNumeroConta = "" ;
   this.A10771FVParcelaCheque = 0 ;
   this.A10772FVParcelaNoAutCartao = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12fk2_client": ["'FECHAR'", true] ,"e13fk793_client": ["ENTER", true] ,"e14fk793_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'AV10FvId',fld:'vFVID'},{av:'AV11FVParcelaSeq',fld:'vFVPARCELASEQ'},{av:'Gx_mode',fld:'vMODE'}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV8EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV10FvId',fld:'vFVID'}],[{av:'AV10FvId',fld:'vFVID'},{av:'AV8EmpresaPadrao',fld:'vEMPRESAPADRAO'}]];
   this.setPrompt("PROMPT_10618", [14]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV10FvId", "vFVID", 0, "int");
   this.setVCMap("AV11FVParcelaSeq", "vFVPARCELASEQ", 0, "char");
   this.setVCMap("A10617FVEmpresa", "FVEMPRESA", 0, "char");
   this.setVCMap("A10763FVParcelaFormaEmpId", "FVPARCELAFORMAEMPID", 0, "char");
   this.setVCMap("AV25Pgmdesc", "vPGMDESC", 0, "char");
   this.setVCMap("AV24Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tforcavendapagtoparcela());

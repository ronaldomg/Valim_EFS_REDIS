/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:9:14.36
*/
gx.evt.autoSkip = false;
gx.define('tdecimportacaoadicao', false, function () {
   this.ServerClass =  "tdecimportacaoadicao" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
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
      this.A10393DecImportacaoAdicaonDrawAdicoe=gx.fn.getIntegerValue("DECIMPORTACAOADICAONDRAWADICOE",'.') ;
      this.A10395DecImportacaoAdicaoXPedItem=gx.fn.getControlValue("DECIMPORTACAOADICAOXPEDITEM") ;
      this.A10394DecImportacaoAdicaoNItemPed=gx.fn.getIntegerValue("DECIMPORTACAOADICAONITEMPED",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Entradaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entradaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entradaitemsequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAITEMSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Decimportacaosequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Decimportacaosequencia",["gx.O.A4637EntradaEmpresaId", "gx.O.A4638EntradaId", "gx.O.A4822EntradaItemSequencia", "gx.O.A5175DecImportacaoSequencia"],[]);
      return true;
   }
   this.Valid_Decimportacaoadicaoseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Decimportacaoadicaoseq",["gx.O.A4637EntradaEmpresaId", "gx.O.A4638EntradaId", "gx.O.A4822EntradaItemSequencia", "gx.O.A5175DecImportacaoSequencia", "gx.O.A5181DecImportacaoAdicaoSeq", "gx.O.A5176DecImportacaoAdicaoNo", "gx.O.A5177DecImportacaoAdicaoFabricante", "gx.num.urlDecimal(gx.O.A5178DecImportacaoAdicaoDesconto,\'.\',\',\')", "gx.O.A10393DecImportacaoAdicaonDrawAdicoe", "gx.O.A10395DecImportacaoAdicaoXPedItem", "gx.O.A10394DecImportacaoAdicaoNItemPed", "gx.O.A5179DecImportacaoAdicaoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A5180DecImportacaoAdicaoDataHoraAlt,"DMY4")'],["A5176DecImportacaoAdicaoNo", "A5177DecImportacaoAdicaoFabricante", "A5178DecImportacaoAdicaoDesconto", "A10393DecImportacaoAdicaonDrawAdicoe", "A10395DecImportacaoAdicaoXPedItem", "A10394DecImportacaoAdicaoNItemPed", "A5179DecImportacaoAdicaoUsuarioAlt", "A5180DecImportacaoAdicaoDataHoraAlt", "Gx_mode", "Z4637EntradaEmpresaId", "Z4638EntradaId", "Z4822EntradaItemSequencia", "Z5175DecImportacaoSequencia", "Z5181DecImportacaoAdicaoSeq", "Z5176DecImportacaoAdicaoNo", "Z5177DecImportacaoAdicaoFabricante", "Z5178DecImportacaoAdicaoDesconto", "Z10393DecImportacaoAdicaonDrawAdicoe", "Z10395DecImportacaoAdicaoXPedItem", "Z10394DecImportacaoAdicaoNItemPed", "Z5179DecImportacaoAdicaoUsuarioAlt", "Z5180DecImportacaoAdicaoDataHoraAlt", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e118d456_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e128d456_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e138d456_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,27,29,32,34,38,40,43,45,48,50,53,55,58,60,61,70,72,74];
   this.GXLastCtrlId =74;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaempresaid,isvalid:null,rgrid:[],fld:"ENTRADAEMPRESAID",gxz:"Z4637EntradaEmpresaId",gxold:"O4637EntradaEmpresaId",gxvar:"A4637EntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4637EntradaEmpresaId=Value},v2z:function(Value){gx.O.Z4637EntradaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ENTRADAEMPRESAID",gx.O.A4637EntradaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4637EntradaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaid,isvalid:null,rgrid:[],fld:"ENTRADAID",gxz:"Z4638EntradaId",gxold:"O4638EntradaId",gxvar:"A4638EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4638EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4638EntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAID",gx.O.A4638EntradaId,0)},c2v:function(){gx.O.A4638EntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaitemsequencia,isvalid:null,rgrid:[],fld:"ENTRADAITEMSEQUENCIA",gxz:"Z4822EntradaItemSequencia",gxold:"O4822EntradaItemSequencia",gxvar:"A4822EntradaItemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4822EntradaItemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4822EntradaItemSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAITEMSEQUENCIA",gx.O.A4822EntradaItemSequencia,0)},c2v:function(){gx.O.A4822EntradaItemSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAITEMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Decimportacaosequencia,isvalid:null,rgrid:[],fld:"DECIMPORTACAOSEQUENCIA",gxz:"Z5175DecImportacaoSequencia",gxold:"O5175DecImportacaoSequencia",gxvar:"A5175DecImportacaoSequencia",ucs:[],op:[],ip:[29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5175DecImportacaoSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5175DecImportacaoSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DECIMPORTACAOSEQUENCIA",gx.O.A5175DecImportacaoSequencia,0)},c2v:function(){gx.O.A5175DecImportacaoSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DECIMPORTACAOSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Decimportacaoadicaoseq,isvalid:null,rgrid:[],fld:"DECIMPORTACAOADICAOSEQ",gxz:"Z5181DecImportacaoAdicaoSeq",gxold:"O5181DecImportacaoAdicaoSeq",gxvar:"A5181DecImportacaoAdicaoSeq",ucs:[],op:[60,55,50,45,40],ip:[60,55,50,45,40,34,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5181DecImportacaoAdicaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5181DecImportacaoAdicaoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DECIMPORTACAOADICAOSEQ",gx.O.A5181DecImportacaoAdicaoSeq,0)},c2v:function(){gx.O.A5181DecImportacaoAdicaoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DECIMPORTACAOADICAOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAOADICAONO",gxz:"Z5176DecImportacaoAdicaoNo",gxold:"O5176DecImportacaoAdicaoNo",gxvar:"A5176DecImportacaoAdicaoNo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5176DecImportacaoAdicaoNo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5176DecImportacaoAdicaoNo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DECIMPORTACAOADICAONO",gx.O.A5176DecImportacaoAdicaoNo,0)},c2v:function(){gx.O.A5176DecImportacaoAdicaoNo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DECIMPORTACAOADICAONO",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAOADICAOFABRICANTE",gxz:"Z5177DecImportacaoAdicaoFabricante",gxold:"O5177DecImportacaoAdicaoFabricante",gxvar:"A5177DecImportacaoAdicaoFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5177DecImportacaoAdicaoFabricante=Value},v2z:function(Value){gx.O.Z5177DecImportacaoAdicaoFabricante=Value},v2c:function(){gx.fn.setControlValue("DECIMPORTACAOADICAOFABRICANTE",gx.O.A5177DecImportacaoAdicaoFabricante,0)},c2v:function(){gx.O.A5177DecImportacaoAdicaoFabricante=this.val()},val:function(){return gx.fn.getControlValue("DECIMPORTACAOADICAOFABRICANTE")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAOADICAODESCONTO",gxz:"Z5178DecImportacaoAdicaoDesconto",gxold:"O5178DecImportacaoAdicaoDesconto",gxvar:"A5178DecImportacaoAdicaoDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5178DecImportacaoAdicaoDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5178DecImportacaoAdicaoDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DECIMPORTACAOADICAODESCONTO",gx.O.A5178DecImportacaoAdicaoDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5178DecImportacaoAdicaoDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("DECIMPORTACAOADICAODESCONTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAOADICAOUSUARIOALT",gxz:"Z5179DecImportacaoAdicaoUsuarioAlt",gxold:"O5179DecImportacaoAdicaoUsuarioAlt",gxvar:"A5179DecImportacaoAdicaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5179DecImportacaoAdicaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z5179DecImportacaoAdicaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("DECIMPORTACAOADICAOUSUARIOALT",gx.O.A5179DecImportacaoAdicaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5179DecImportacaoAdicaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("DECIMPORTACAOADICAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPORTACAOADICAODATAHORAALT",gxz:"Z5180DecImportacaoAdicaoDataHoraAlt",gxold:"O5180DecImportacaoAdicaoDataHoraAlt",gxvar:"A5180DecImportacaoAdicaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5180DecImportacaoAdicaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5180DecImportacaoAdicaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DECIMPORTACAOADICAODATAHORAALT",gx.O.A5180DecImportacaoAdicaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5180DecImportacaoAdicaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DECIMPORTACAOADICAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"BTNHELP",grid:0};
   GXValidFnc[74]={fld:"PROMPT_4637_4638_4822_5175",grid:456};
   this.A4637EntradaEmpresaId = "" ;
   this.Z4637EntradaEmpresaId = "" ;
   this.O4637EntradaEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.Z4638EntradaId = 0 ;
   this.O4638EntradaId = 0 ;
   this.A4822EntradaItemSequencia = 0 ;
   this.Z4822EntradaItemSequencia = 0 ;
   this.O4822EntradaItemSequencia = 0 ;
   this.A5175DecImportacaoSequencia = 0 ;
   this.Z5175DecImportacaoSequencia = 0 ;
   this.O5175DecImportacaoSequencia = 0 ;
   this.A5181DecImportacaoAdicaoSeq = 0 ;
   this.Z5181DecImportacaoAdicaoSeq = 0 ;
   this.O5181DecImportacaoAdicaoSeq = 0 ;
   this.A5176DecImportacaoAdicaoNo = 0 ;
   this.Z5176DecImportacaoAdicaoNo = 0 ;
   this.O5176DecImportacaoAdicaoNo = 0 ;
   this.A5177DecImportacaoAdicaoFabricante = "" ;
   this.Z5177DecImportacaoAdicaoFabricante = "" ;
   this.O5177DecImportacaoAdicaoFabricante = "" ;
   this.A5178DecImportacaoAdicaoDesconto = 0 ;
   this.Z5178DecImportacaoAdicaoDesconto = 0 ;
   this.O5178DecImportacaoAdicaoDesconto = 0 ;
   this.A5179DecImportacaoAdicaoUsuarioAlt = "" ;
   this.Z5179DecImportacaoAdicaoUsuarioAlt = "" ;
   this.O5179DecImportacaoAdicaoUsuarioAlt = "" ;
   this.A5180DecImportacaoAdicaoDataHoraAlt = gx.date.nullDate() ;
   this.Z5180DecImportacaoAdicaoDataHoraAlt = gx.date.nullDate() ;
   this.O5180DecImportacaoAdicaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.A4822EntradaItemSequencia = 0 ;
   this.A5175DecImportacaoSequencia = 0 ;
   this.A5181DecImportacaoAdicaoSeq = 0 ;
   this.A5176DecImportacaoAdicaoNo = 0 ;
   this.A5177DecImportacaoAdicaoFabricante = "" ;
   this.A5178DecImportacaoAdicaoDesconto = 0 ;
   this.A10393DecImportacaoAdicaonDrawAdicoe = 0 ;
   this.A10395DecImportacaoAdicaoXPedItem = "" ;
   this.A10394DecImportacaoAdicaoNItemPed = 0 ;
   this.A5179DecImportacaoAdicaoUsuarioAlt = "" ;
   this.A5180DecImportacaoAdicaoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e128d456_client": ["ENTER", true] ,"e138d456_client": ["CANCEL", true] ,"e118d456_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_4637_4638_4822_5175", [14,19,24,29]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A10393DecImportacaoAdicaonDrawAdicoe", "DECIMPORTACAOADICAONDRAWADICOE", 0, "int");
   this.setVCMap("A10395DecImportacaoAdicaoXPedItem", "DECIMPORTACAOADICAOXPEDITEM", 0, "char");
   this.setVCMap("A10394DecImportacaoAdicaoNItemPed", "DECIMPORTACAOADICAONITEMPED", 0, "int");
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tdecimportacaoadicao());

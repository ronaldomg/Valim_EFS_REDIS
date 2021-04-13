/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:9:20.54
*/
gx.evt.autoSkip = false;
gx.define('tdecimpprovadicao', false, function () {
   this.ServerClass =  "tdecimpprovadicao" ;
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
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Entradaprovempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAPROVEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entradaprovid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAPROVID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Entradaprovitemsequencia=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ENTRADAPROVITEMSEQUENCIA");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Decimpprovsequencia=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Decimpprovsequencia",["gx.O.A5013EntradaProvEmpresaId", "gx.O.A5014EntradaProvId", "gx.O.A5190EntradaProvItemSequencia", "gx.O.A5191DecImpProvSequencia"],[]);
      return true;
   }
   this.Valid_Decimpprovadicaoseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Decimpprovadicaoseq",["gx.O.A5013EntradaProvEmpresaId", "gx.O.A5014EntradaProvId", "gx.O.A5190EntradaProvItemSequencia", "gx.O.A5191DecImpProvSequencia", "gx.O.A5197DecImpProvAdicaoSeq", "gx.O.A5192DecImpProvAdicaoNo", "gx.O.A5193DecImpProvAdicaoFabricante", "gx.num.urlDecimal(gx.O.A5194DecImpProvAdicaoDesconto,\'.\',\',\')", "gx.O.A5195DecImpProvAdicaoUsuarioAlt", 'gx.date.urlDateTime(gx.O.A5196DecImpProvAdicaoDataHoraAlt,"DMY4")'],["A5192DecImpProvAdicaoNo", "A5193DecImpProvAdicaoFabricante", "A5194DecImpProvAdicaoDesconto", "A5195DecImpProvAdicaoUsuarioAlt", "A5196DecImpProvAdicaoDataHoraAlt", "Gx_mode", "Z5013EntradaProvEmpresaId", "Z5014EntradaProvId", "Z5190EntradaProvItemSequencia", "Z5191DecImpProvSequencia", "Z5197DecImpProvAdicaoSeq", "Z5192DecImpProvAdicaoNo", "Z5193DecImpProvAdicaoFabricante", "Z5194DecImpProvAdicaoDesconto", "Z5195DecImpProvAdicaoUsuarioAlt", "Z5196DecImpProvAdicaoDataHoraAlt", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e118f458_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e128f458_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e138f458_client=function()
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
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaprovempresaid,isvalid:null,rgrid:[],fld:"ENTRADAPROVEMPRESAID",gxz:"Z5013EntradaProvEmpresaId",gxold:"O5013EntradaProvEmpresaId",gxvar:"A5013EntradaProvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5013EntradaProvEmpresaId=Value},v2z:function(Value){gx.O.Z5013EntradaProvEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVEMPRESAID",gx.O.A5013EntradaProvEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5013EntradaProvEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaprovid,isvalid:null,rgrid:[],fld:"ENTRADAPROVID",gxz:"Z5014EntradaProvId",gxold:"O5014EntradaProvId",gxvar:"A5014EntradaProvId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5014EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5014EntradaProvId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVID",gx.O.A5014EntradaProvId,0)},c2v:function(){gx.O.A5014EntradaProvId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaprovitemsequencia,isvalid:null,rgrid:[],fld:"ENTRADAPROVITEMSEQUENCIA",gxz:"Z5190EntradaProvItemSequencia",gxold:"O5190EntradaProvItemSequencia",gxvar:"A5190EntradaProvItemSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5190EntradaProvItemSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5190EntradaProvItemSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVITEMSEQUENCIA",gx.O.A5190EntradaProvItemSequencia,0)},c2v:function(){gx.O.A5190EntradaProvItemSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVITEMSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Decimpprovsequencia,isvalid:null,rgrid:[],fld:"DECIMPPROVSEQUENCIA",gxz:"Z5191DecImpProvSequencia",gxold:"O5191DecImpProvSequencia",gxvar:"A5191DecImpProvSequencia",ucs:[],op:[],ip:[29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5191DecImpProvSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5191DecImpProvSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DECIMPPROVSEQUENCIA",gx.O.A5191DecImpProvSequencia,0)},c2v:function(){gx.O.A5191DecImpProvSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DECIMPPROVSEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Decimpprovadicaoseq,isvalid:null,rgrid:[],fld:"DECIMPPROVADICAOSEQ",gxz:"Z5197DecImpProvAdicaoSeq",gxold:"O5197DecImpProvAdicaoSeq",gxvar:"A5197DecImpProvAdicaoSeq",ucs:[],op:[60,55,50,45,40],ip:[60,55,50,45,40,34,29,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5197DecImpProvAdicaoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5197DecImpProvAdicaoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DECIMPPROVADICAOSEQ",gx.O.A5197DecImpProvAdicaoSeq,0)},c2v:function(){gx.O.A5197DecImpProvAdicaoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DECIMPPROVADICAOSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPPROVADICAONO",gxz:"Z5192DecImpProvAdicaoNo",gxold:"O5192DecImpProvAdicaoNo",gxvar:"A5192DecImpProvAdicaoNo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5192DecImpProvAdicaoNo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5192DecImpProvAdicaoNo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DECIMPPROVADICAONO",gx.O.A5192DecImpProvAdicaoNo,0)},c2v:function(){gx.O.A5192DecImpProvAdicaoNo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DECIMPPROVADICAONO",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPPROVADICAOFABRICANTE",gxz:"Z5193DecImpProvAdicaoFabricante",gxold:"O5193DecImpProvAdicaoFabricante",gxvar:"A5193DecImpProvAdicaoFabricante",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5193DecImpProvAdicaoFabricante=Value},v2z:function(Value){gx.O.Z5193DecImpProvAdicaoFabricante=Value},v2c:function(){gx.fn.setControlValue("DECIMPPROVADICAOFABRICANTE",gx.O.A5193DecImpProvAdicaoFabricante,0)},c2v:function(){gx.O.A5193DecImpProvAdicaoFabricante=this.val()},val:function(){return gx.fn.getControlValue("DECIMPPROVADICAOFABRICANTE")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPPROVADICAODESCONTO",gxz:"Z5194DecImpProvAdicaoDesconto",gxold:"O5194DecImpProvAdicaoDesconto",gxvar:"A5194DecImpProvAdicaoDesconto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5194DecImpProvAdicaoDesconto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5194DecImpProvAdicaoDesconto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("DECIMPPROVADICAODESCONTO",gx.O.A5194DecImpProvAdicaoDesconto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5194DecImpProvAdicaoDesconto=this.val()},val:function(){return gx.fn.getDecimalValue("DECIMPPROVADICAODESCONTO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPPROVADICAOUSUARIOALT",gxz:"Z5195DecImpProvAdicaoUsuarioAlt",gxold:"O5195DecImpProvAdicaoUsuarioAlt",gxvar:"A5195DecImpProvAdicaoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5195DecImpProvAdicaoUsuarioAlt=Value},v2z:function(Value){gx.O.Z5195DecImpProvAdicaoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("DECIMPPROVADICAOUSUARIOALT",gx.O.A5195DecImpProvAdicaoUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5195DecImpProvAdicaoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("DECIMPPROVADICAOUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"DECIMPPROVADICAODATAHORAALT",gxz:"Z5196DecImpProvAdicaoDataHoraAlt",gxold:"O5196DecImpProvAdicaoDataHoraAlt",gxvar:"A5196DecImpProvAdicaoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5196DecImpProvAdicaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5196DecImpProvAdicaoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("DECIMPPROVADICAODATAHORAALT",gx.O.A5196DecImpProvAdicaoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5196DecImpProvAdicaoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("DECIMPPROVADICAODATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"BTNHELP",grid:0};
   GXValidFnc[74]={fld:"PROMPT_5013_5014_5190_5191",grid:458};
   this.A5013EntradaProvEmpresaId = "" ;
   this.Z5013EntradaProvEmpresaId = "" ;
   this.O5013EntradaProvEmpresaId = "" ;
   this.A5014EntradaProvId = 0 ;
   this.Z5014EntradaProvId = 0 ;
   this.O5014EntradaProvId = 0 ;
   this.A5190EntradaProvItemSequencia = 0 ;
   this.Z5190EntradaProvItemSequencia = 0 ;
   this.O5190EntradaProvItemSequencia = 0 ;
   this.A5191DecImpProvSequencia = 0 ;
   this.Z5191DecImpProvSequencia = 0 ;
   this.O5191DecImpProvSequencia = 0 ;
   this.A5197DecImpProvAdicaoSeq = 0 ;
   this.Z5197DecImpProvAdicaoSeq = 0 ;
   this.O5197DecImpProvAdicaoSeq = 0 ;
   this.A5192DecImpProvAdicaoNo = 0 ;
   this.Z5192DecImpProvAdicaoNo = 0 ;
   this.O5192DecImpProvAdicaoNo = 0 ;
   this.A5193DecImpProvAdicaoFabricante = "" ;
   this.Z5193DecImpProvAdicaoFabricante = "" ;
   this.O5193DecImpProvAdicaoFabricante = "" ;
   this.A5194DecImpProvAdicaoDesconto = 0 ;
   this.Z5194DecImpProvAdicaoDesconto = 0 ;
   this.O5194DecImpProvAdicaoDesconto = 0 ;
   this.A5195DecImpProvAdicaoUsuarioAlt = "" ;
   this.Z5195DecImpProvAdicaoUsuarioAlt = "" ;
   this.O5195DecImpProvAdicaoUsuarioAlt = "" ;
   this.A5196DecImpProvAdicaoDataHoraAlt = gx.date.nullDate() ;
   this.Z5196DecImpProvAdicaoDataHoraAlt = gx.date.nullDate() ;
   this.O5196DecImpProvAdicaoDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A5013EntradaProvEmpresaId = "" ;
   this.A5014EntradaProvId = 0 ;
   this.A5190EntradaProvItemSequencia = 0 ;
   this.A5191DecImpProvSequencia = 0 ;
   this.A5197DecImpProvAdicaoSeq = 0 ;
   this.A5192DecImpProvAdicaoNo = 0 ;
   this.A5193DecImpProvAdicaoFabricante = "" ;
   this.A5194DecImpProvAdicaoDesconto = 0 ;
   this.A5195DecImpProvAdicaoUsuarioAlt = "" ;
   this.A5196DecImpProvAdicaoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e128f458_client": ["ENTER", true] ,"e138f458_client": ["CANCEL", true] ,"e118f458_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_5013_5014_5190_5191", [14,19,24,29]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tdecimpprovadicao());

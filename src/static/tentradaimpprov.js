/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:10:1.23
*/
gx.evt.autoSkip = false;
gx.define('tentradaimpprov', false, function () {
   this.ServerClass =  "tentradaimpprov" ;
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
      gx.ajax.validSrvEvt("dyncall","valid_Entradaprovid",["gx.O.A5013EntradaProvEmpresaId", "gx.O.A5014EntradaProvId", "gx.O.A5367EntradaImpProvSeq", "gx.O.A5368EntradaImpProvTpDeclaracao", "gx.O.A5369EntradaImpProvNoDocumento", "gx.num.urlDecimal(gx.O.A5370EntradaImpProvValorPIS,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A5371EntradaImpProvValorCofins,\'.\',\',\')", "gx.O.A5372EntradaImpProvNoDrawBack", "gx.O.A5373EntradaImpProvUsuarioAlt", 'gx.date.urlDateTime(gx.O.A5374EntradaImpProvDataHoraAlt,"DMY4")'],["A5367EntradaImpProvSeq", "A5368EntradaImpProvTpDeclaracao", "A5369EntradaImpProvNoDocumento", "A5370EntradaImpProvValorPIS", "A5371EntradaImpProvValorCofins", "A5372EntradaImpProvNoDrawBack", "A5373EntradaImpProvUsuarioAlt", "A5374EntradaImpProvDataHoraAlt", "Gx_mode", "Z5013EntradaProvEmpresaId", "Z5014EntradaProvId", "Z5367EntradaImpProvSeq", "Z5368EntradaImpProvTpDeclaracao", "Z5369EntradaImpProvNoDocumento", "Z5370EntradaImpProvValorPIS", "Z5371EntradaImpProvValorCofins", "Z5372EntradaImpProvNoDrawBack", "Z5373EntradaImpProvUsuarioAlt", "Z5374EntradaImpProvDataHoraAlt", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e118n451_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e128n451_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e138n451_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,23,25,28,30,33,35,38,40,43,45,48,50,53,55,58,60,61,70,72];
   this.GXLastCtrlId =72;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaprovempresaid,isvalid:null,rgrid:[],fld:"ENTRADAPROVEMPRESAID",gxz:"Z5013EntradaProvEmpresaId",gxold:"O5013EntradaProvEmpresaId",gxvar:"A5013EntradaProvEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5013EntradaProvEmpresaId=Value},v2z:function(Value){gx.O.Z5013EntradaProvEmpresaId=Value},v2c:function(){gx.fn.setControlValue("ENTRADAPROVEMPRESAID",gx.O.A5013EntradaProvEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5013EntradaProvEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAPROVEMPRESAID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Entradaprovid,isvalid:null,rgrid:[],fld:"ENTRADAPROVID",gxz:"Z5014EntradaProvId",gxold:"O5014EntradaProvId",gxvar:"A5014EntradaProvId",ucs:[],op:[60,55,50,45,40,35,30,25],ip:[60,55,50,45,40,35,30,25,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5014EntradaProvId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5014EntradaProvId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAPROVID",gx.O.A5014EntradaProvId,0)},c2v:function(){gx.O.A5014EntradaProvId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAPROVID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAIMPPROVSEQ",gxz:"Z5367EntradaImpProvSeq",gxold:"O5367EntradaImpProvSeq",gxvar:"A5367EntradaImpProvSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5367EntradaImpProvSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5367EntradaImpProvSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAIMPPROVSEQ",gx.O.A5367EntradaImpProvSeq,0)},c2v:function(){gx.O.A5367EntradaImpProvSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ENTRADAIMPPROVSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAIMPPROVTPDECLARACAO",gxz:"Z5368EntradaImpProvTpDeclaracao",gxold:"O5368EntradaImpProvTpDeclaracao",gxvar:"A5368EntradaImpProvTpDeclaracao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5368EntradaImpProvTpDeclaracao=Value},v2z:function(Value){gx.O.Z5368EntradaImpProvTpDeclaracao=Value},v2c:function(){gx.fn.setControlValue("ENTRADAIMPPROVTPDECLARACAO",gx.O.A5368EntradaImpProvTpDeclaracao,0)},c2v:function(){gx.O.A5368EntradaImpProvTpDeclaracao=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAIMPPROVTPDECLARACAO")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAIMPPROVNODOCUMENTO",gxz:"Z5369EntradaImpProvNoDocumento",gxold:"O5369EntradaImpProvNoDocumento",gxvar:"A5369EntradaImpProvNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5369EntradaImpProvNoDocumento=Value},v2z:function(Value){gx.O.Z5369EntradaImpProvNoDocumento=Value},v2c:function(){gx.fn.setControlValue("ENTRADAIMPPROVNODOCUMENTO",gx.O.A5369EntradaImpProvNoDocumento,0)},c2v:function(){gx.O.A5369EntradaImpProvNoDocumento=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAIMPPROVNODOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAIMPPROVVALORPIS",gxz:"Z5370EntradaImpProvValorPIS",gxold:"O5370EntradaImpProvValorPIS",gxvar:"A5370EntradaImpProvValorPIS",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5370EntradaImpProvValorPIS=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5370EntradaImpProvValorPIS=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAIMPPROVVALORPIS",gx.O.A5370EntradaImpProvValorPIS,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5370EntradaImpProvValorPIS=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAIMPPROVVALORPIS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAIMPPROVVALORCOFINS",gxz:"Z5371EntradaImpProvValorCofins",gxold:"O5371EntradaImpProvValorCofins",gxvar:"A5371EntradaImpProvValorCofins",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5371EntradaImpProvValorCofins=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z5371EntradaImpProvValorCofins=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ENTRADAIMPPROVVALORCOFINS",gx.O.A5371EntradaImpProvValorCofins,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5371EntradaImpProvValorCofins=this.val()},val:function(){return gx.fn.getDecimalValue("ENTRADAIMPPROVVALORCOFINS",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAIMPPROVNODRAWBACK",gxz:"Z5372EntradaImpProvNoDrawBack",gxold:"O5372EntradaImpProvNoDrawBack",gxvar:"A5372EntradaImpProvNoDrawBack",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5372EntradaImpProvNoDrawBack=Value},v2z:function(Value){gx.O.Z5372EntradaImpProvNoDrawBack=Value},v2c:function(){gx.fn.setControlValue("ENTRADAIMPPROVNODRAWBACK",gx.O.A5372EntradaImpProvNoDrawBack,0)},c2v:function(){gx.O.A5372EntradaImpProvNoDrawBack=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAIMPPROVNODRAWBACK")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAIMPPROVUSUARIOALT",gxz:"Z5373EntradaImpProvUsuarioAlt",gxold:"O5373EntradaImpProvUsuarioAlt",gxvar:"A5373EntradaImpProvUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5373EntradaImpProvUsuarioAlt=Value},v2z:function(Value){gx.O.Z5373EntradaImpProvUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("ENTRADAIMPPROVUSUARIOALT",gx.O.A5373EntradaImpProvUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5373EntradaImpProvUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("ENTRADAIMPPROVUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAIMPPROVDATAHORAALT",gxz:"Z5374EntradaImpProvDataHoraAlt",gxold:"O5374EntradaImpProvDataHoraAlt",gxvar:"A5374EntradaImpProvDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A5374EntradaImpProvDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z5374EntradaImpProvDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("ENTRADAIMPPROVDATAHORAALT",gx.O.A5374EntradaImpProvDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5374EntradaImpProvDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("ENTRADAIMPPROVDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[72]={fld:"BTNHELP",grid:0};
   this.A5013EntradaProvEmpresaId = "" ;
   this.Z5013EntradaProvEmpresaId = "" ;
   this.O5013EntradaProvEmpresaId = "" ;
   this.A5014EntradaProvId = 0 ;
   this.Z5014EntradaProvId = 0 ;
   this.O5014EntradaProvId = 0 ;
   this.A5367EntradaImpProvSeq = 0 ;
   this.Z5367EntradaImpProvSeq = 0 ;
   this.O5367EntradaImpProvSeq = 0 ;
   this.A5368EntradaImpProvTpDeclaracao = "" ;
   this.Z5368EntradaImpProvTpDeclaracao = "" ;
   this.O5368EntradaImpProvTpDeclaracao = "" ;
   this.A5369EntradaImpProvNoDocumento = "" ;
   this.Z5369EntradaImpProvNoDocumento = "" ;
   this.O5369EntradaImpProvNoDocumento = "" ;
   this.A5370EntradaImpProvValorPIS = 0 ;
   this.Z5370EntradaImpProvValorPIS = 0 ;
   this.O5370EntradaImpProvValorPIS = 0 ;
   this.A5371EntradaImpProvValorCofins = 0 ;
   this.Z5371EntradaImpProvValorCofins = 0 ;
   this.O5371EntradaImpProvValorCofins = 0 ;
   this.A5372EntradaImpProvNoDrawBack = "" ;
   this.Z5372EntradaImpProvNoDrawBack = "" ;
   this.O5372EntradaImpProvNoDrawBack = "" ;
   this.A5373EntradaImpProvUsuarioAlt = "" ;
   this.Z5373EntradaImpProvUsuarioAlt = "" ;
   this.O5373EntradaImpProvUsuarioAlt = "" ;
   this.A5374EntradaImpProvDataHoraAlt = gx.date.nullDate() ;
   this.Z5374EntradaImpProvDataHoraAlt = gx.date.nullDate() ;
   this.O5374EntradaImpProvDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A5013EntradaProvEmpresaId = "" ;
   this.A5014EntradaProvId = 0 ;
   this.A5367EntradaImpProvSeq = 0 ;
   this.A5368EntradaImpProvTpDeclaracao = "" ;
   this.A5369EntradaImpProvNoDocumento = "" ;
   this.A5370EntradaImpProvValorPIS = 0 ;
   this.A5371EntradaImpProvValorCofins = 0 ;
   this.A5372EntradaImpProvNoDrawBack = "" ;
   this.A5373EntradaImpProvUsuarioAlt = "" ;
   this.A5374EntradaImpProvDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e128n451_client": ["ENTER", true] ,"e138n451_client": ["CANCEL", true] ,"e118n451_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tentradaimpprov());

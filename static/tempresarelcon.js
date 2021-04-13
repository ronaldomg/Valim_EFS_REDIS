/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 3:54:11.59
*/
gx.evt.autoSkip = false;
gx.define('tempresarelcon', false, function () {
   this.ServerClass =  "tempresarelcon" ;
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
   this.Valid_Empresaconrelprgsistemaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("EMPRESACONRELPRGSISTEMAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Empresaconrelprgprogramaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Empresaconrelprgprogramaid",["gx.O.A6634EmpresaConRelPrgSistemaId", "gx.O.A6635EmpresaConRelPrgProgramaId"],[]);
      return true;
   }
   this.Valid_Emrpesaconrelempresaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Emrpesaconrelempresaid",["gx.O.A6634EmpresaConRelPrgSistemaId", "gx.O.A6635EmpresaConRelPrgProgramaId", "gx.O.A6636EmrpesaConRelEmpresaId", "gx.O.A6632EmpresaConRelUsuarioAlt", 'gx.date.urlDateTime(gx.O.A6633EmpresaConRelDataHoraAlt,"DMY4")'],["A6632EmpresaConRelUsuarioAlt", "A6633EmpresaConRelDataHoraAlt", "Gx_mode", "Z6634EmpresaConRelPrgSistemaId", "Z6635EmpresaConRelPrgProgramaId", "Z6636EmrpesaConRelEmpresaId", "Z6632EmpresaConRelUsuarioAlt", "Z6633EmpresaConRelDataHoraAlt", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e119m524_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e129m524_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e139m524_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,36,45,47,49,50];
   this.GXLastCtrlId =50;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresaconrelprgsistemaid,isvalid:null,rgrid:[],fld:"EMPRESACONRELPRGSISTEMAID",gxz:"Z6634EmpresaConRelPrgSistemaId",gxold:"O6634EmpresaConRelPrgSistemaId",gxvar:"A6634EmpresaConRelPrgSistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6634EmpresaConRelPrgSistemaId=Value},v2z:function(Value){gx.O.Z6634EmpresaConRelPrgSistemaId=Value},v2c:function(){gx.fn.setControlValue("EMPRESACONRELPRGSISTEMAID",gx.O.A6634EmpresaConRelPrgSistemaId,0)},c2v:function(){gx.O.A6634EmpresaConRelPrgSistemaId=this.val()},val:function(){return gx.fn.getControlValue("EMPRESACONRELPRGSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Empresaconrelprgprogramaid,isvalid:null,rgrid:[],fld:"EMPRESACONRELPRGPROGRAMAID",gxz:"Z6635EmpresaConRelPrgProgramaId",gxold:"O6635EmpresaConRelPrgProgramaId",gxvar:"A6635EmpresaConRelPrgProgramaId",ucs:[],op:[],ip:[19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6635EmpresaConRelPrgProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6635EmpresaConRelPrgProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("EMPRESACONRELPRGPROGRAMAID",gx.O.A6635EmpresaConRelPrgProgramaId,0)},c2v:function(){gx.O.A6635EmpresaConRelPrgProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("EMPRESACONRELPRGPROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Emrpesaconrelempresaid,isvalid:null,rgrid:[],fld:"EMRPESACONRELEMPRESAID",gxz:"Z6636EmrpesaConRelEmpresaId",gxold:"O6636EmrpesaConRelEmpresaId",gxvar:"A6636EmrpesaConRelEmpresaId",ucs:[],op:[35,30],ip:[35,30,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6636EmrpesaConRelEmpresaId=Value},v2z:function(Value){gx.O.Z6636EmrpesaConRelEmpresaId=Value},v2c:function(){gx.fn.setControlValue("EMRPESACONRELEMPRESAID",gx.O.A6636EmrpesaConRelEmpresaId,0)},c2v:function(){gx.O.A6636EmrpesaConRelEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("EMRPESACONRELEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESACONRELUSUARIOALT",gxz:"Z6632EmpresaConRelUsuarioAlt",gxold:"O6632EmpresaConRelUsuarioAlt",gxvar:"A6632EmpresaConRelUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6632EmpresaConRelUsuarioAlt=Value},v2z:function(Value){gx.O.Z6632EmpresaConRelUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("EMPRESACONRELUSUARIOALT",gx.O.A6632EmpresaConRelUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6632EmpresaConRelUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("EMPRESACONRELUSUARIOALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESACONRELDATAHORAALT",gxz:"Z6633EmpresaConRelDataHoraAlt",gxold:"O6633EmpresaConRelDataHoraAlt",gxvar:"A6633EmpresaConRelDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A6633EmpresaConRelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z6633EmpresaConRelDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("EMPRESACONRELDATAHORAALT",gx.O.A6633EmpresaConRelDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A6633EmpresaConRelDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("EMPRESACONRELDATAHORAALT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[36]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"BTNHELP",grid:0};
   GXValidFnc[49]={fld:"PROMPT_6634_6635",grid:524};
   GXValidFnc[50]={fld:"PROMPT_6636",grid:524};
   this.A6634EmpresaConRelPrgSistemaId = "" ;
   this.Z6634EmpresaConRelPrgSistemaId = "" ;
   this.O6634EmpresaConRelPrgSistemaId = "" ;
   this.A6635EmpresaConRelPrgProgramaId = 0 ;
   this.Z6635EmpresaConRelPrgProgramaId = 0 ;
   this.O6635EmpresaConRelPrgProgramaId = 0 ;
   this.A6636EmrpesaConRelEmpresaId = "" ;
   this.Z6636EmrpesaConRelEmpresaId = "" ;
   this.O6636EmrpesaConRelEmpresaId = "" ;
   this.A6632EmpresaConRelUsuarioAlt = "" ;
   this.Z6632EmpresaConRelUsuarioAlt = "" ;
   this.O6632EmpresaConRelUsuarioAlt = "" ;
   this.A6633EmpresaConRelDataHoraAlt = gx.date.nullDate() ;
   this.Z6633EmpresaConRelDataHoraAlt = gx.date.nullDate() ;
   this.O6633EmpresaConRelDataHoraAlt = gx.date.nullDate() ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A6634EmpresaConRelPrgSistemaId = "" ;
   this.A6635EmpresaConRelPrgProgramaId = 0 ;
   this.A6636EmrpesaConRelEmpresaId = "" ;
   this.A6632EmpresaConRelUsuarioAlt = "" ;
   this.A6633EmpresaConRelDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e129m524_client": ["ENTER", true] ,"e139m524_client": ["CANCEL", true] ,"e119m524_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.setPrompt("PROMPT_6634_6635", [14,19]);
   this.setPrompt("PROMPT_6636", [24]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tempresarelcon());

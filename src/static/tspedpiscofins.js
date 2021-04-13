/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:24:21.15
*/
gx.evt.autoSkip = false;
gx.define('tspedpiscofins', false, function () {
   this.ServerClass =  "tspedpiscofins" ;
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
   this.Valid_Spedpiscofinsfilial=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SPEDPISCOFINSFILIAL");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Spedpiscofinsregistro=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("SPEDPISCOFINSREGISTRO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Spedpiscofinsseq=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Spedpiscofinsseq",["gx.O.A8452SpedPisCofinsFilial", "gx.O.A8453SpedPisCofinsRegistro", "gx.O.A8454SpedPisCofinsSeq", "gx.O.A8451SpedPisCofinsLinha"],["A8451SpedPisCofinsLinha", "Gx_mode", "Z8452SpedPisCofinsFilial", "Z8453SpedPisCofinsRegistro", "Z8454SpedPisCofinsSeq", "Z8451SpedPisCofinsLinha", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e11bx623_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e12bx623_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13bx623_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,31,40,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Spedpiscofinsfilial,isvalid:null,rgrid:[],fld:"SPEDPISCOFINSFILIAL",gxz:"Z8452SpedPisCofinsFilial",gxold:"O8452SpedPisCofinsFilial",gxvar:"A8452SpedPisCofinsFilial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8452SpedPisCofinsFilial=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8452SpedPisCofinsFilial=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SPEDPISCOFINSFILIAL",gx.O.A8452SpedPisCofinsFilial,0)},c2v:function(){gx.O.A8452SpedPisCofinsFilial=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SPEDPISCOFINSFILIAL",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Spedpiscofinsregistro,isvalid:null,rgrid:[],fld:"SPEDPISCOFINSREGISTRO",gxz:"Z8453SpedPisCofinsRegistro",gxold:"O8453SpedPisCofinsRegistro",gxvar:"A8453SpedPisCofinsRegistro",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8453SpedPisCofinsRegistro=Value},v2z:function(Value){gx.O.Z8453SpedPisCofinsRegistro=Value},v2c:function(){gx.fn.setControlValue("SPEDPISCOFINSREGISTRO",gx.O.A8453SpedPisCofinsRegistro,0)},c2v:function(){gx.O.A8453SpedPisCofinsRegistro=this.val()},val:function(){return gx.fn.getControlValue("SPEDPISCOFINSREGISTRO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Spedpiscofinsseq,isvalid:null,rgrid:[],fld:"SPEDPISCOFINSSEQ",gxz:"Z8454SpedPisCofinsSeq",gxold:"O8454SpedPisCofinsSeq",gxvar:"A8454SpedPisCofinsSeq",ucs:[],op:[30],ip:[30,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8454SpedPisCofinsSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8454SpedPisCofinsSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("SPEDPISCOFINSSEQ",gx.O.A8454SpedPisCofinsSeq,0)},c2v:function(){gx.O.A8454SpedPisCofinsSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("SPEDPISCOFINSSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"vchar",len:3000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SPEDPISCOFINSLINHA",gxz:"Z8451SpedPisCofinsLinha",gxold:"O8451SpedPisCofinsLinha",gxvar:"A8451SpedPisCofinsLinha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A8451SpedPisCofinsLinha=Value},v2z:function(Value){gx.O.Z8451SpedPisCofinsLinha=Value},v2c:function(){gx.fn.setControlValue("SPEDPISCOFINSLINHA",gx.O.A8451SpedPisCofinsLinha,0)},c2v:function(){gx.O.A8451SpedPisCofinsLinha=this.val()},val:function(){return gx.fn.getControlValue("SPEDPISCOFINSLINHA")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"BTNHELP",grid:0};
   this.A8452SpedPisCofinsFilial = 0 ;
   this.Z8452SpedPisCofinsFilial = 0 ;
   this.O8452SpedPisCofinsFilial = 0 ;
   this.A8453SpedPisCofinsRegistro = "" ;
   this.Z8453SpedPisCofinsRegistro = "" ;
   this.O8453SpedPisCofinsRegistro = "" ;
   this.A8454SpedPisCofinsSeq = 0 ;
   this.Z8454SpedPisCofinsSeq = 0 ;
   this.O8454SpedPisCofinsSeq = 0 ;
   this.A8451SpedPisCofinsLinha = "" ;
   this.Z8451SpedPisCofinsLinha = "" ;
   this.O8451SpedPisCofinsLinha = "" ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A8452SpedPisCofinsFilial = 0 ;
   this.A8453SpedPisCofinsRegistro = "" ;
   this.A8454SpedPisCofinsSeq = 0 ;
   this.A8451SpedPisCofinsLinha = "" ;
   this.Events = {"e12bx623_client": ["ENTER", true] ,"e13bx623_client": ["CANCEL", true] ,"e11bx623_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new tspedpiscofins());

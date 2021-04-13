/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:19:59.89
*/
gx.evt.autoSkip = false;
gx.define('himpressaocompromisso', false, function () {
   this.ServerClass =  "himpressaocompromisso" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV6ParmProfissionalId=gx.fn.getIntegerValue("vPARMPROFISSIONALID",'.') ;
   };
   this.Validv_Profissionalid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROFISSIONALID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Profissionalempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPROFISSIONALEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Pessoaempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPESSOAEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e122gu2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e132gu2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152gu2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,11,14,16,19,21,22,30,31,32,33,34,35,36];
   this.GXLastCtrlId =36;
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABLE2",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Profissionalid,isvalid:null,rgrid:[],fld:"vPROFISSIONALID",gxz:"ZV9ProfissionalId",gxold:"OV9ProfissionalId",gxvar:"AV9ProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9ProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9ProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROFISSIONALID",gx.O.AV9ProfissionalId,0)},c2v:function(){gx.O.AV9ProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[11]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSIONALNOME",gxz:"ZV10ProfissionalNome",gxold:"OV10ProfissionalNome",gxvar:"AV10ProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10ProfissionalNome=Value},v2z:function(Value){gx.O.ZV10ProfissionalNome=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALNOME",gx.O.AV10ProfissionalNome,0)},c2v:function(){gx.O.AV10ProfissionalNome=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALNOME")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vAGENDADATA",gxz:"ZV7AgendaData",gxold:"OV7AgendaData",gxvar:"AV7AgendaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7AgendaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7AgendaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vAGENDADATA",gx.O.AV7AgendaData,0)},c2v:function(){gx.O.AV7AgendaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vAGENDADATA")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV18PessoaId",gxold:"OV18PessoaId",gxvar:"AV18PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV18PessoaId,0)},c2v:function(){gx.O.AV18PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV17PessoaFantasia",gxold:"OV17PessoaFantasia",gxvar:"AV17PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PessoaFantasia=Value},v2z:function(Value){gx.O.ZV17PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV17PessoaFantasia,0)},c2v:function(){gx.O.AV17PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Profissionalempresaid,isvalid:null,rgrid:[],fld:"vPROFISSIONALEMPRESAID",gxz:"ZV12ProfissionalEmpresaId",gxold:"OV12ProfissionalEmpresaId",gxvar:"AV12ProfissionalEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12ProfissionalEmpresaId=Value},v2z:function(Value){gx.O.ZV12ProfissionalEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALEMPRESAID",gx.O.AV12ProfissionalEmpresaId,0)},c2v:function(){gx.O.AV12ProfissionalEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV20Sim",gxold:"OV20Sim",gxvar:"AV20Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Sim=Value},v2z:function(Value){gx.O.ZV20Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV20Sim,0)},c2v:function(){gx.O.AV20Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV21Nao",gxold:"OV21Nao",gxvar:"AV21Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21Nao=Value},v2z:function(Value){gx.O.ZV21Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV21Nao,0)},c2v:function(){gx.O.AV21Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pessoaempresaid,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV19PessoaEmpresaId",gxold:"OV19PessoaEmpresaId",gxvar:"AV19PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV19PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV19PessoaEmpresaId,0)},c2v:function(){gx.O.AV19PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[34]={fld:"JS", format:2,grid:0};
   GXValidFnc[35]={fld:"PROMPT_PROFISSIONALID",grid:0};
   GXValidFnc[36]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV9ProfissionalId = 0 ;
   this.ZV9ProfissionalId = 0 ;
   this.OV9ProfissionalId = 0 ;
   this.AV10ProfissionalNome = "" ;
   this.ZV10ProfissionalNome = "" ;
   this.OV10ProfissionalNome = "" ;
   this.AV7AgendaData = gx.date.nullDate() ;
   this.ZV7AgendaData = gx.date.nullDate() ;
   this.OV7AgendaData = gx.date.nullDate() ;
   this.AV18PessoaId = 0 ;
   this.ZV18PessoaId = 0 ;
   this.OV18PessoaId = 0 ;
   this.AV17PessoaFantasia = "" ;
   this.ZV17PessoaFantasia = "" ;
   this.OV17PessoaFantasia = "" ;
   this.AV12ProfissionalEmpresaId = "" ;
   this.ZV12ProfissionalEmpresaId = "" ;
   this.OV12ProfissionalEmpresaId = "" ;
   this.AV20Sim = "" ;
   this.ZV20Sim = "" ;
   this.OV20Sim = "" ;
   this.AV21Nao = "" ;
   this.ZV21Nao = "" ;
   this.OV21Nao = "" ;
   this.AV19PessoaEmpresaId = "" ;
   this.ZV19PessoaEmpresaId = "" ;
   this.OV19PessoaEmpresaId = "" ;
   this.AV9ProfissionalId = 0 ;
   this.AV10ProfissionalNome = "" ;
   this.AV7AgendaData = gx.date.nullDate() ;
   this.AV18PessoaId = 0 ;
   this.AV17PessoaFantasia = "" ;
   this.AV12ProfissionalEmpresaId = "" ;
   this.AV20Sim = "" ;
   this.AV21Nao = "" ;
   this.AV19PessoaEmpresaId = "" ;
   this.AV6ParmProfissionalId = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A445PessoaCliente = "" ;
   this.A8566ProfissionalId = 0 ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8608ProfissionalNome = "" ;
   this.Events = {"e122gu2_client": ["'FECHAR'", true] ,"e132gu2_client": ["ENTER", true] ,"e152gu2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV9ProfissionalId',fld:'vPROFISSIONALID'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'AV12ProfissionalEmpresaId',fld:'vPROFISSIONALEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'AV7AgendaData',fld:'vAGENDADATA'},{av:'AV18PessoaId',fld:'vPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV19PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'AV29Pgmname',fld:'vPGMNAME'}],[{av:'AV8hasErro',fld:'vHASERRO'},{av:'AV27GXLvl54',fld:'vGXLVL54'},{av:'AV10ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV17PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV28GXLvl77',fld:'vGXLVL77'},{av:'AV11NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV16NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV30Qtdpaggeradas',fld:'vQTDPAGGERADAS'}]];
   this.setPrompt("PROMPT_PROFISSIONALID", [10]);
   this.setPrompt("PROMPT_PESSOAID", [21]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV6ParmProfissionalId", "vPARMPROFISSIONALID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new himpressaocompromisso());

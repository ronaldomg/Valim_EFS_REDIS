/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:31:19.35
*/
gx.evt.autoSkip = false;
gx.define('hboxobservacaopessoa', false, function () {
   this.ServerClass =  "hboxobservacaopessoa" ;
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
      this.AV15EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID") ;
      this.AV27TpChamada=gx.fn.getIntegerValue("vTPCHAMADA",'.') ;
   };
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
   this.e12y52_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13y52_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15y52_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,20,22,25,27,30,32,34,37,39,41,43,48,53];
   this.GXLastCtrlId =53;
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE3",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pessoaid,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV14PessoaId",gxold:"OV14PessoaId",gxvar:"AV14PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV14PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV14PessoaId,0)},c2v:function(){gx.O.AV14PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOARAZAOSOCIAL",gxz:"ZV19PessoaRazaoSocial",gxold:"OV19PessoaRazaoSocial",gxvar:"AV19PessoaRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PessoaRazaoSocial=Value},v2z:function(Value){gx.O.ZV19PessoaRazaoSocial=Value},v2c:function(){gx.fn.setControlValue("vPESSOARAZAOSOCIAL",gx.O.AV19PessoaRazaoSocial,0)},c2v:function(){gx.O.AV19PessoaRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPESSOARAZAOSOCIAL")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:15,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOADESCSITUACAO",gxz:"ZV18PessoaDescSituacao",gxold:"OV18PessoaDescSituacao",gxvar:"AV18PessoaDescSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18PessoaDescSituacao=Value},v2z:function(Value){gx.O.ZV18PessoaDescSituacao=Value},v2c:function(){gx.fn.setControlValue("vPESSOADESCSITUACAO",gx.O.AV18PessoaDescSituacao,0)},c2v:function(){gx.O.AV18PessoaDescSituacao=this.val()},val:function(){return gx.fn.getControlValue("vPESSOADESCSITUACAO")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[27]={fld:"TABLE4",grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAENDERECO",gxz:"ZV20PessoaEndereco",gxold:"OV20PessoaEndereco",gxvar:"AV20PessoaEndereco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20PessoaEndereco=Value},v2z:function(Value){gx.O.ZV20PessoaEndereco=Value},v2c:function(){gx.fn.setControlValue("vPESSOAENDERECO",gx.O.AV20PessoaEndereco,0)},c2v:function(){gx.O.AV20PessoaEndereco=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAENDERECO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOANUMEROEND",gxz:"ZV21PessoaNumeroEnd",gxold:"OV21PessoaNumeroEnd",gxvar:"AV21PessoaNumeroEnd",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21PessoaNumeroEnd=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21PessoaNumeroEnd=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOANUMEROEND",gx.O.AV21PessoaNumeroEnd,0)},c2v:function(){gx.O.AV21PessoaNumeroEnd=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOANUMEROEND",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACPF",gxz:"ZV16PessoaCPF",gxold:"OV16PessoaCPF",gxvar:"AV16PessoaCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16PessoaCPF=Value},v2z:function(Value){gx.O.ZV16PessoaCPF=Value},v2c:function(){gx.fn.setControlValue("vPESSOACPF",gx.O.AV16PessoaCPF,0)},c2v:function(){gx.O.AV16PessoaCPF=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACPF")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOACNPJ",gxz:"ZV17PessoaCNPJ",gxold:"OV17PessoaCNPJ",gxvar:"AV17PessoaCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PessoaCNPJ=Value},v2z:function(Value){gx.O.ZV17PessoaCNPJ=Value},v2c:function(){gx.fn.setControlValue("vPESSOACNPJ",gx.O.AV17PessoaCNPJ,0)},c2v:function(){gx.O.AV17PessoaCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vPESSOACNPJ")},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"svchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAOBSERVACAO",gxz:"ZV22PessoaObservacao",gxold:"OV22PessoaObservacao",gxvar:"AV22PessoaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PessoaObservacao=Value},v2z:function(Value){gx.O.ZV22PessoaObservacao=Value},v2c:function(){gx.fn.setControlValue("vPESSOAOBSERVACAO",gx.O.AV22PessoaObservacao,0)},c2v:function(){gx.O.AV22PessoaObservacao=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOSNPERM",gxz:"ZV23UsuarioSnPerm",gxold:"OV23UsuarioSnPerm",gxvar:"AV23UsuarioSnPerm",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23UsuarioSnPerm=Value},v2z:function(Value){gx.O.ZV23UsuarioSnPerm=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOSNPERM",gx.O.AV23UsuarioSnPerm,0)},c2v:function(){gx.O.AV23UsuarioSnPerm=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOSNPERM")},nac:gx.falseFn};
   this.AV14PessoaId = 0 ;
   this.ZV14PessoaId = 0 ;
   this.OV14PessoaId = 0 ;
   this.AV19PessoaRazaoSocial = "" ;
   this.ZV19PessoaRazaoSocial = "" ;
   this.OV19PessoaRazaoSocial = "" ;
   this.AV18PessoaDescSituacao = "" ;
   this.ZV18PessoaDescSituacao = "" ;
   this.OV18PessoaDescSituacao = "" ;
   this.AV20PessoaEndereco = "" ;
   this.ZV20PessoaEndereco = "" ;
   this.OV20PessoaEndereco = "" ;
   this.AV21PessoaNumeroEnd = 0 ;
   this.ZV21PessoaNumeroEnd = 0 ;
   this.OV21PessoaNumeroEnd = 0 ;
   this.AV16PessoaCPF = "" ;
   this.ZV16PessoaCPF = "" ;
   this.OV16PessoaCPF = "" ;
   this.AV17PessoaCNPJ = "" ;
   this.ZV17PessoaCNPJ = "" ;
   this.OV17PessoaCNPJ = "" ;
   this.AV22PessoaObservacao = "" ;
   this.ZV22PessoaObservacao = "" ;
   this.OV22PessoaObservacao = "" ;
   this.AV23UsuarioSnPerm = "" ;
   this.ZV23UsuarioSnPerm = "" ;
   this.OV23UsuarioSnPerm = "" ;
   this.AV14PessoaId = 0 ;
   this.AV19PessoaRazaoSocial = "" ;
   this.AV18PessoaDescSituacao = "" ;
   this.AV20PessoaEndereco = "" ;
   this.AV21PessoaNumeroEnd = 0 ;
   this.AV16PessoaCPF = "" ;
   this.AV17PessoaCNPJ = "" ;
   this.AV22PessoaObservacao = "" ;
   this.AV23UsuarioSnPerm = "" ;
   this.AV15EmpresaPessoasEmpresaId = "" ;
   this.AV27TpChamada = 0 ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A70PessoaRazaoSocial = "" ;
   this.A473PessoaCPF = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A423PessoaEndereco = "" ;
   this.A424PessoaNumeroEnd = 0 ;
   this.A466PessoaObservacao = "" ;
   this.A443PessoaSituacao = "" ;
   this.Events = {"e12y52_client": ["ENTER", true] ,"e13y52_client": ["'FECHAR'", true] ,"e15y52_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV23UsuarioSnPerm',fld:'vUSUARIOSNPERM'},{av:'AV15EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID',hsh:true},{av:'AV14PessoaId',fld:'vPESSOAID',hsh:true},{av:'AV22PessoaObservacao',fld:'vPESSOAOBSERVACAO'},{av:'AV27TpChamada',fld:'vTPCHAMADA',hsh:true}],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV27TpChamada',fld:'vTPCHAMADA',hsh:true}],[]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.setVCMap("AV15EmpresaPessoasEmpresaId", "vEMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("AV27TpChamada", "vTPCHAMADA", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hboxobservacaopessoa());

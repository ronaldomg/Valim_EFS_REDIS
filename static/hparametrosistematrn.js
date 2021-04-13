/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:14:59.39
*/
gx.evt.autoSkip = false;
gx.define('hparametrosistematrn', false, function () {
   this.ServerClass =  "hparametrosistematrn" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV31ParametroSistemaCampoParm=gx.fn.getControlValue("vPARAMETROSISTEMACAMPOPARM") ;
      this.AV30Modo=gx.fn.getControlValue("vMODO") ;
   };
   this.Validv_Sistemaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSISTEMAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Parametrosistemacampo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPARAMETROSISTEMACAMPO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11sd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13sd2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14sd2_client=function()
   {
      this.executeServerEvent("'TESTAREMAIL'", false, null, false, false);
   };
   this.e16sd2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,31,33,36,38,41,43,46,48,54,61,62,63,65];
   this.GXLastCtrlId =65;
   GXValidFnc[2]={fld:"TABLE4",grid:0};
   GXValidFnc[5]={fld:"TABLE6",grid:0};
   GXValidFnc[8]={fld:"TABLE8",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Sistemaid,isvalid:null,rgrid:[],fld:"vSISTEMAID",gxz:"ZV21SistemaId",gxold:"OV21SistemaId",gxvar:"AV21SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21SistemaId=Value},v2z:function(Value){gx.O.ZV21SistemaId=Value},v2c:function(){gx.fn.setControlValue("vSISTEMAID",gx.O.AV21SistemaId,0)},c2v:function(){gx.O.AV21SistemaId=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Parametrosistemacampo,isvalid:null,rgrid:[],fld:"vPARAMETROSISTEMACAMPO",gxz:"ZV22ParametroSistemaCampo",gxold:"OV22ParametroSistemaCampo",gxvar:"AV22ParametroSistemaCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ParametroSistemaCampo=Value},v2z:function(Value){gx.O.ZV22ParametroSistemaCampo=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROSISTEMACAMPO",gx.O.AV22ParametroSistemaCampo,0)},c2v:function(){gx.O.AV22ParametroSistemaCampo=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROSISTEMACAMPO")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Empresaid,isvalid:null,rgrid:[],fld:"vEMPRESAID",gxz:"ZV23EmpresaId",gxold:"OV23EmpresaId",gxvar:"AV23EmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23EmpresaId=Value},v2z:function(Value){gx.O.ZV23EmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAID",gx.O.AV23EmpresaId,0)},c2v:function(){gx.O.AV23EmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAFANTASIA",gxz:"ZV24EmpresaFantasia",gxold:"OV24EmpresaFantasia",gxvar:"AV24EmpresaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24EmpresaFantasia=Value},v2z:function(Value){gx.O.ZV24EmpresaFantasia=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAFANTASIA",gx.O.AV24EmpresaFantasia,0)},c2v:function(){gx.O.AV24EmpresaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROSISTEMADESCRICAO",gxz:"ZV25ParametroSistemaDescricao",gxold:"OV25ParametroSistemaDescricao",gxvar:"AV25ParametroSistemaDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ParametroSistemaDescricao=Value},v2z:function(Value){gx.O.ZV25ParametroSistemaDescricao=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROSISTEMADESCRICAO",gx.O.AV25ParametroSistemaDescricao,0)},c2v:function(){gx.O.AV25ParametroSistemaDescricao=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROSISTEMADESCRICAO")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROSISTEMATIPO",gxz:"ZV26ParametroSistemaTipo",gxold:"OV26ParametroSistemaTipo",gxvar:"AV26ParametroSistemaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26ParametroSistemaTipo=Value},v2z:function(Value){gx.O.ZV26ParametroSistemaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vPARAMETROSISTEMATIPO",gx.O.AV26ParametroSistemaTipo)},c2v:function(){gx.O.AV26ParametroSistemaTipo=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROSISTEMATIPO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROSISTEMAVALOR",gxz:"ZV27ParametroSistemaValor",gxold:"OV27ParametroSistemaValor",gxvar:"AV27ParametroSistemaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ParametroSistemaValor=Value},v2z:function(Value){gx.O.ZV27ParametroSistemaValor=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROSISTEMAVALOR",gx.O.AV27ParametroSistemaValor,0)},c2v:function(){gx.O.AV27ParametroSistemaValor=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROSISTEMAVALOR")},nac:gx.falseFn};
   GXValidFnc[46]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[48]={lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROSISTEMAOBSERVACAO",gxz:"ZV28ParametroSistemaObservacao",gxold:"OV28ParametroSistemaObservacao",gxvar:"AV28ParametroSistemaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ParametroSistemaObservacao=Value},v2z:function(Value){gx.O.ZV28ParametroSistemaObservacao=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROSISTEMAOBSERVACAO",gx.O.AV28ParametroSistemaObservacao,0)},c2v:function(){gx.O.AV28ParametroSistemaObservacao=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROSISTEMAOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[54]={fld:"TABLE5",grid:0};
   GXValidFnc[61]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV29AcessoSistemaSequencia",gxold:"OV29AcessoSistemaSequencia",gxvar:"AV29AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV29AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV29AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROSISTEMAVALORANTERIOR",gxz:"ZV42ParametroSistemaValorAnterior",gxold:"OV42ParametroSistemaValorAnterior",gxvar:"AV42ParametroSistemaValorAnterior",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42ParametroSistemaValorAnterior=Value},v2z:function(Value){gx.O.ZV42ParametroSistemaValorAnterior=Value},v2c:function(){gx.fn.setControlValue("vPARAMETROSISTEMAVALORANTERIOR",gx.O.AV42ParametroSistemaValorAnterior,0)},c2v:function(){gx.O.AV42ParametroSistemaValorAnterior=this.val()},val:function(){return gx.fn.getControlValue("vPARAMETROSISTEMAVALORANTERIOR")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"JS", format:2,grid:0};
   GXValidFnc[65]={fld:"BTNHELP",grid:0};
   this.AV21SistemaId = "" ;
   this.ZV21SistemaId = "" ;
   this.OV21SistemaId = "" ;
   this.AV22ParametroSistemaCampo = "" ;
   this.ZV22ParametroSistemaCampo = "" ;
   this.OV22ParametroSistemaCampo = "" ;
   this.AV23EmpresaId = "" ;
   this.ZV23EmpresaId = "" ;
   this.OV23EmpresaId = "" ;
   this.AV24EmpresaFantasia = "" ;
   this.ZV24EmpresaFantasia = "" ;
   this.OV24EmpresaFantasia = "" ;
   this.AV25ParametroSistemaDescricao = "" ;
   this.ZV25ParametroSistemaDescricao = "" ;
   this.OV25ParametroSistemaDescricao = "" ;
   this.AV26ParametroSistemaTipo = "" ;
   this.ZV26ParametroSistemaTipo = "" ;
   this.OV26ParametroSistemaTipo = "" ;
   this.AV27ParametroSistemaValor = "" ;
   this.ZV27ParametroSistemaValor = "" ;
   this.OV27ParametroSistemaValor = "" ;
   this.AV28ParametroSistemaObservacao = "" ;
   this.ZV28ParametroSistemaObservacao = "" ;
   this.OV28ParametroSistemaObservacao = "" ;
   this.AV29AcessoSistemaSequencia = 0 ;
   this.ZV29AcessoSistemaSequencia = 0 ;
   this.OV29AcessoSistemaSequencia = 0 ;
   this.AV42ParametroSistemaValorAnterior = "" ;
   this.ZV42ParametroSistemaValorAnterior = "" ;
   this.OV42ParametroSistemaValorAnterior = "" ;
   this.AV21SistemaId = "" ;
   this.AV22ParametroSistemaCampo = "" ;
   this.AV23EmpresaId = "" ;
   this.AV24EmpresaFantasia = "" ;
   this.AV25ParametroSistemaDescricao = "" ;
   this.AV26ParametroSistemaTipo = "" ;
   this.AV27ParametroSistemaValor = "" ;
   this.AV28ParametroSistemaObservacao = "" ;
   this.AV29AcessoSistemaSequencia = 0 ;
   this.AV42ParametroSistemaValorAnterior = "" ;
   this.AV31ParametroSistemaCampoParm = "" ;
   this.AV30Modo = "" ;
   this.A75UsuarioId = "" ;
   this.A608UsuarioChave = "" ;
   this.A138EmpresaId = "" ;
   this.A191EmpresaFantasia = "" ;
   this.A419ParametroSistemaCampo = "" ;
   this.A140SistemaId = "" ;
   this.A416ParametroSistemaDescricao = "" ;
   this.A930ParametroSistemaTipo = "" ;
   this.A417ParametroSistemaValor = "" ;
   this.A418ParametroSistemaObservacao = "" ;
   this.A2915EsquemaCodigo = 0 ;
   this.A2964ProdutoEmpresaId = "" ;
   this.Events = {"e11sd2_client": ["'FECHAR'", true] ,"e13sd2_client": ["ENTER", true] ,"e14sd2_client": ["'TESTAREMAIL'", true] ,"e16sd2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV29AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'},{av:'AV21SistemaId',fld:'vSISTEMAID'}],[{av:'AV21SistemaId',fld:'vSISTEMAID'}]];
   this.EvtParms["ENTER"] = [[{av:'AV30Modo',fld:'vMODO'},{av:'AV22ParametroSistemaCampo',fld:'vPARAMETROSISTEMACAMPO'},{av:'A140SistemaId',fld:'SISTEMAID'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'A138EmpresaId',fld:'EMPRESAID'},{av:'AV23EmpresaId',fld:'vEMPRESAID'},{av:'A419ParametroSistemaCampo',fld:'PARAMETROSISTEMACAMPO'},{av:'AV27ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'AV26ParametroSistemaTipo',fld:'vPARAMETROSISTEMATIPO'},{av:'AV36Valida',fld:'vVALIDA'},{av:'AV42ParametroSistemaValorAnterior',fld:'vPARAMETROSISTEMAVALORANTERIOR'},{av:'A2964ProdutoEmpresaId',fld:'PRODUTOEMPRESAID'},{av:'A2915EsquemaCodigo',fld:'ESQUEMACODIGO'},{av:'AV28ParametroSistemaObservacao',fld:'vPARAMETROSISTEMAOBSERVACAO'},{av:'AV31ParametroSistemaCampoParm',fld:'vPARAMETROSISTEMACAMPOPARM'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A608UsuarioChave',fld:'USUARIOCHAVE'},{av:'AV24EmpresaFantasia',fld:'vEMPRESAFANTASIA'},{av:'AV25ParametroSistemaDescricao',fld:'vPARAMETROSISTEMADESCRICAO'},{av:'AV29AcessoSistemaSequencia',fld:'vACESSOSISTEMASEQUENCIA'}],[{av:'AV32tpErro',fld:'vTPERRO'},{av:'AV33MsgmErro',fld:'vMSGMERRO'},{av:'AV34SNExisteContaContabil',fld:'vSNEXISTECONTACONTABIL'},{av:'AV35snValida',fld:'vSNVALIDA'},{av:'AV62GXLvl112',fld:'vGXLVL112'},{av:'AV55ErroCpfCnpj',fld:'vERROCPFCNPJ'},{av:'AV27ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'AV54Split',fld:'vSPLIT'},{av:'AV38Ano',fld:'vANO'},{av:'AV37Mes',fld:'vMES'},{av:'AV36Valida',fld:'vVALIDA'},{av:'AV56Cont',fld:'vCONT'},{av:'AV44SnExisteProd',fld:'vSNEXISTEPROD'},{av:'AV41Observacao',fld:'vOBSERVACAO'},{av:'AV45Chave',fld:'vCHAVE'},{av:'AV21SistemaId',fld:'vSISTEMAID'},{av:'AV22ParametroSistemaCampo',fld:'vPARAMETROSISTEMACAMPO'},{av:'AV25ParametroSistemaDescricao',fld:'vPARAMETROSISTEMADESCRICAO'},{av:'AV28ParametroSistemaObservacao',fld:'vPARAMETROSISTEMAOBSERVACAO'}]];
   this.EvtParms["'TESTAREMAIL'"] = [[{av:'AV27ParametroSistemaValor',fld:'vPARAMETROSISTEMAVALOR'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'A608UsuarioChave',fld:'USUARIOCHAVE'},{av:'AV46SdtParmEmail',fld:'vSDTPARMEMAIL'}],[{av:'AV47UsuarioNomeContaEmail',fld:'vUSUARIONOMECONTAEMAIL'},{av:'AV48UsuarioServidorEmailSMTP',fld:'vUSUARIOSERVIDOREMAILSMTP'},{av:'AV49UsuarioNoPortaSMTP',fld:'vUSUARIONOPORTASMTP'},{av:'AV53UsuarioSenhaEmail',fld:'vUSUARIOSENHAEMAIL'},{av:'AV45Chave',fld:'vCHAVE'},{av:'AV50UsuarioRequerAutenticacao',fld:'vUSUARIOREQUERAUTENTICACAO'},{av:'AV51UsuarioSnSeguranca',fld:'vUSUARIOSNSEGURANCA'},{av:'AV52UsuarioSnTLS',fld:'vUSUARIOSNTLS'},{av:'AV46SdtParmEmail',fld:'vSDTPARMEMAIL'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV31ParametroSistemaCampoParm", "vPARAMETROSISTEMACAMPOPARM", 0, "char");
   this.setVCMap("AV30Modo", "vMODO", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hparametrosistematrn());

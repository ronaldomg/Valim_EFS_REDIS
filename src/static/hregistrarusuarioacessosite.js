/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:38:42.67
*/
gx.evt.autoSkip = false;
gx.define('hregistrarusuarioacessosite', false, function () {
   this.ServerClass =  "hregistrarusuarioacessosite" ;
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
      this.AV46EmpresaLogadaIdParm=gx.fn.getControlValue("vEMPRESALOGADAIDPARM") ;
   };
   this.Validv_Titularpessoaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTITULARPESSOAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
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
   this.e11h62_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e13h62_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15h62_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,14,17,20,23,25,26,29,31,34,36,38,41,43,46,48,50,53,55,58,60,63,65,71,77,78,80];
   this.GXLastCtrlId =80;
   GXValidFnc[2]={fld:"TABLE7",grid:0};
   GXValidFnc[5]={fld:"TABLE3",grid:0};
   GXValidFnc[8]={lvl:0,type:"bits",len:1024,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLOGOTIPO",gxz:"ZV39Logotipo",gxold:"OV39Logotipo",gxvar:"AV39Logotipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39Logotipo=Value},v2z:function(Value){gx.O.ZV39Logotipo=Value},v2c:function(){gx.fn.setMultimediaValue("vLOGOTIPO",gx.O.AV39Logotipo,gx.O.AV51Logotipo_GXI)},c2v:function(){gx.O.AV51Logotipo_GXI=this.val_GXI();gx.O.AV39Logotipo=this.val()},val:function(){return gx.fn.getBlobValue("vLOGOTIPO")},val_GXI:function(){return gx.fn.getControlValue("vLOGOTIPO_GXI")}, gxvar_GXI:'AV51Logotipo_GXI',nac:gx.falseFn};
   GXValidFnc[10]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[14]={fld:"TABLE8",grid:0};
   GXValidFnc[17]={fld:"TABLE10",grid:0};
   GXValidFnc[20]={fld:"TXTTITAPL", format:0,grid:0};
   GXValidFnc[23]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Titularpessoaid,isvalid:null,rgrid:[],fld:"vTITULARPESSOAID",gxz:"ZV20TitularPessoaId",gxold:"OV20TitularPessoaId",gxvar:"AV20TitularPessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20TitularPessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20TitularPessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTITULARPESSOAID",gx.O.AV20TitularPessoaId,0)},c2v:function(){gx.O.AV20TitularPessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTITULARPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[26]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARPESSOANOME",gxz:"ZV34TitularPessoaNome",gxold:"OV34TitularPessoaNome",gxvar:"AV34TitularPessoaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34TitularPessoaNome=Value},v2z:function(Value){gx.O.ZV34TitularPessoaNome=Value},v2c:function(){gx.fn.setControlValue("vTITULARPESSOANOME",gx.O.AV34TitularPessoaNome,0)},c2v:function(){gx.O.AV34TitularPessoaNome=this.val()},val:function(){return gx.fn.getControlValue("vTITULARPESSOANOME")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[31]={fld:"TABLE12",grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARCPF",gxz:"ZV21TitularCPF",gxold:"OV21TitularCPF",gxvar:"AV21TitularCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21TitularCPF=Value},v2z:function(Value){gx.O.ZV21TitularCPF=Value},v2c:function(){gx.fn.setControlValue("vTITULARCPF",gx.O.AV21TitularCPF,0)},c2v:function(){gx.O.AV21TitularCPF=this.val()},val:function(){return gx.fn.getControlValue("vTITULARCPF")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARCNPJ",gxz:"ZV23TitularCNPJ",gxold:"OV23TitularCNPJ",gxvar:"AV23TitularCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23TitularCNPJ=Value},v2z:function(Value){gx.O.ZV23TitularCNPJ=Value},v2c:function(){gx.fn.setControlValue("vTITULARCNPJ",gx.O.AV23TitularCNPJ,0)},c2v:function(){gx.O.AV23TitularCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vTITULARCNPJ")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[43]={fld:"TABLE11",grid:0};
   GXValidFnc[46]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARRG",gxz:"ZV24TitularRG",gxold:"OV24TitularRG",gxvar:"AV24TitularRG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24TitularRG=Value},v2z:function(Value){gx.O.ZV24TitularRG=Value},v2c:function(){gx.fn.setControlValue("vTITULARRG",gx.O.AV24TitularRG,0)},c2v:function(){gx.O.AV24TitularRG=this.val()},val:function(){return gx.fn.getControlValue("vTITULARRG")},nac:gx.falseFn};
   GXValidFnc[48]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"svchar",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARINSCESTADUAL",gxz:"ZV25TitularInscEstadual",gxold:"OV25TitularInscEstadual",gxvar:"AV25TitularInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25TitularInscEstadual=Value},v2z:function(Value){gx.O.ZV25TitularInscEstadual=Value},v2c:function(){gx.fn.setControlValue("vTITULARINSCESTADUAL",gx.O.AV25TitularInscEstadual,0)},c2v:function(){gx.O.AV25TitularInscEstadual=this.val()},val:function(){return gx.fn.getControlValue("vTITULARINSCESTADUAL")},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARDTNASCIMENTO",gxz:"ZV22TitularDtNascimento",gxold:"OV22TitularDtNascimento",gxvar:"AV22TitularDtNascimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22TitularDtNascimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV22TitularDtNascimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTITULARDTNASCIMENTO",gx.O.AV22TitularDtNascimento,0)},c2v:function(){gx.O.AV22TitularDtNascimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTITULARDTNASCIMENTO")},nac:gx.falseFn};
   GXValidFnc[58]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARSENHA",gxz:"ZV26TitularSenha",gxold:"OV26TitularSenha",gxvar:"AV26TitularSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26TitularSenha=Value},v2z:function(Value){gx.O.ZV26TitularSenha=Value},v2c:function(){gx.fn.setControlValue("vTITULARSENHA",gx.O.AV26TitularSenha,0)},c2v:function(){gx.O.AV26TitularSenha=this.val()},val:function(){return gx.fn.getControlValue("vTITULARSENHA")},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"char",len:32,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTITULARCONFSENHA",gxz:"ZV44TitularConfSenha",gxold:"OV44TitularConfSenha",gxvar:"AV44TitularConfSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44TitularConfSenha=Value},v2z:function(Value){gx.O.ZV44TitularConfSenha=Value},v2c:function(){gx.fn.setControlValue("vTITULARCONFSENHA",gx.O.AV44TitularConfSenha,0)},c2v:function(){gx.O.AV44TitularConfSenha=this.val()},val:function(){return gx.fn.getControlValue("vTITULARCONFSENHA")},nac:gx.falseFn};
   GXValidFnc[71]={fld:"TABLE9",grid:0};
   GXValidFnc[77]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapadrao,isvalid:null,rgrid:[],fld:"vEMPRESAPADRAO",gxz:"ZV9EmpresaPadrao",gxold:"OV9EmpresaPadrao",gxvar:"AV9EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV9EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV9EmpresaPadrao,0)},c2v:function(){gx.O.AV9EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[78]={fld:"JS", format:2,grid:0};
   GXValidFnc[80]={fld:"BTNHELP",grid:0};
   this.AV51Logotipo_GXI = "" ;
   this.AV39Logotipo = "" ;
   this.ZV39Logotipo = "" ;
   this.OV39Logotipo = "" ;
   this.AV20TitularPessoaId = 0 ;
   this.ZV20TitularPessoaId = 0 ;
   this.OV20TitularPessoaId = 0 ;
   this.AV34TitularPessoaNome = "" ;
   this.ZV34TitularPessoaNome = "" ;
   this.OV34TitularPessoaNome = "" ;
   this.AV21TitularCPF = "" ;
   this.ZV21TitularCPF = "" ;
   this.OV21TitularCPF = "" ;
   this.AV23TitularCNPJ = "" ;
   this.ZV23TitularCNPJ = "" ;
   this.OV23TitularCNPJ = "" ;
   this.AV24TitularRG = "" ;
   this.ZV24TitularRG = "" ;
   this.OV24TitularRG = "" ;
   this.AV25TitularInscEstadual = "" ;
   this.ZV25TitularInscEstadual = "" ;
   this.OV25TitularInscEstadual = "" ;
   this.AV22TitularDtNascimento = gx.date.nullDate() ;
   this.ZV22TitularDtNascimento = gx.date.nullDate() ;
   this.OV22TitularDtNascimento = gx.date.nullDate() ;
   this.AV26TitularSenha = "" ;
   this.ZV26TitularSenha = "" ;
   this.OV26TitularSenha = "" ;
   this.AV44TitularConfSenha = "" ;
   this.ZV44TitularConfSenha = "" ;
   this.OV44TitularConfSenha = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.ZV9EmpresaPadrao = "" ;
   this.OV9EmpresaPadrao = "" ;
   this.AV39Logotipo = "" ;
   this.AV20TitularPessoaId = 0 ;
   this.AV34TitularPessoaNome = "" ;
   this.AV21TitularCPF = "" ;
   this.AV23TitularCNPJ = "" ;
   this.AV24TitularRG = "" ;
   this.AV25TitularInscEstadual = "" ;
   this.AV22TitularDtNascimento = gx.date.nullDate() ;
   this.AV26TitularSenha = "" ;
   this.AV44TitularConfSenha = "" ;
   this.AV9EmpresaPadrao = "" ;
   this.AV46EmpresaLogadaIdParm = "" ;
   this.A75UsuarioId = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A71PessoaFantasia = "" ;
   this.A442PessoaDataNasc = gx.date.nullDate() ;
   this.A436PessoaInscEstadual = "" ;
   this.A439PessoaRG = "" ;
   this.A472PessoaCNPJ = "" ;
   this.A473PessoaCPF = "" ;
   this.A443PessoaSituacao = "" ;
   this.A428PessoaTipoPessoa = "" ;
   this.A138EmpresaId = "" ;
   this.A186EmpresaNome = "" ;
   this.Events = {"e11h62_client": ["'FECHAR'", true] ,"e13h62_client": ["ENTER", true] ,"e15h62_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV45Endereco',fld:'vENDERECO'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV33UsuarioParm',fld:'vUSUARIOPARM'},{av:'AV20TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV9EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A428PessoaTipoPessoa',fld:'PESSOATIPOPESSOA'},{av:'AV30FisicaJuridica',fld:'vFISICAJURIDICA'},{av:'AV21TitularCPF',fld:'vTITULARCPF'},{av:'A473PessoaCPF',fld:'PESSOACPF'},{av:'AV23TitularCNPJ',fld:'vTITULARCNPJ'},{av:'A472PessoaCNPJ',fld:'PESSOACNPJ'},{av:'AV24TitularRG',fld:'vTITULARRG'},{av:'A439PessoaRG',fld:'PESSOARG'},{av:'AV25TitularInscEstadual',fld:'vTITULARINSCESTADUAL'},{av:'A436PessoaInscEstadual',fld:'PESSOAINSCESTADUAL'},{av:'AV22TitularDtNascimento',fld:'vTITULARDTNASCIMENTO'},{av:'A442PessoaDataNasc',fld:'PESSOADATANASC'},{av:'AV26TitularSenha',fld:'vTITULARSENHA'},{av:'AV44TitularConfSenha',fld:'vTITULARCONFSENHA'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV31UsuarioNome',fld:'vUSUARIONOME'},{av:'AV34TitularPessoaNome',fld:'vTITULARPESSOANOME'}],[{av:'AV27tpErro',fld:'vTPERRO'},{av:'AV52GXLvl121',fld:'vGXLVL121'},{av:'AV30FisicaJuridica',fld:'vFISICAJURIDICA'},{av:'AV31UsuarioNome',fld:'vUSUARIONOME'},{av:'AV37TitularPessoaIdAux',fld:'vTITULARPESSOAIDAUX'},{av:'AV59GXLvl320',fld:'vGXLVL320'},{av:'AV32MsgRetorno',fld:'vMSGRETORNO'},{av:'AV20TitularPessoaId',fld:'vTITULARPESSOAID'},{av:'AV34TitularPessoaNome',fld:'vTITULARPESSOANOME'},{av:'AV21TitularCPF',fld:'vTITULARCPF'},{av:'AV23TitularCNPJ',fld:'vTITULARCNPJ'},{av:'AV24TitularRG',fld:'vTITULARRG'},{av:'AV25TitularInscEstadual',fld:'vTITULARINSCESTADUAL'},{av:'AV22TitularDtNascimento',fld:'vTITULARDTNASCIMENTO'},{av:'AV26TitularSenha',fld:'vTITULARSENHA'},{av:'AV44TitularConfSenha',fld:'vTITULARCONFSENHA'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV46EmpresaLogadaIdParm", "vEMPRESALOGADAIDPARM", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarusuarioacessosite());

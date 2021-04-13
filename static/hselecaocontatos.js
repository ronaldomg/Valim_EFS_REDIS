/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:22:12.84
*/
gx.evt.autoSkip = false;
gx.define('hselecaocontatos', false, function () {
   this.ServerClass =  "hselecaocontatos" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
   };
   this.Validv_Classificacaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCLASSIFICACAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s122_client=function()
   {
      this.AV20SnErro =  "N"  ;
      if ( ( this.AV23PessoaSnCliente == "N" ) && ( this.AV24PessoaSnFornecedor == "N" ) && this.AV20SnErro == "N" )
      {
         this.addMessage("Selecione \"Cliente\" ou \"Fornecedor\"");
         this.AV20SnErro =  "S"  ;
      }
      if ( ( ! (""==this.AV17ClassificacaoId) ) && ( (""==this.AV19OpcaoClassificacaoId) ) && this.AV20SnErro == "N" )
      {
         this.addMessage("Informe a Opção da Classificação");
         gx.fn.usrSetFocus("vOPCAOCLASSIFICACAOID") ;
         this.AV20SnErro =  "S"  ;
      }
   };
   this.e12xv2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13xv2_client=function()
   {
      this.executeServerEvent("VCLASSIFICACAOID.CLICK", true, null, false, true);
   };
   this.e14xv2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e17xv2_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,19,21,22,25,27,29,32,34,35,38,40,50,51];
   this.GXLastCtrlId =51;
   GXValidFnc[3]={fld:"TABLE4",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV17ClassificacaoId",gxold:"OV17ClassificacaoId",gxvar:"AV17ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17ClassificacaoId=Value},v2z:function(Value){gx.O.ZV17ClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vCLASSIFICACAOID",gx.O.AV17ClassificacaoId)},c2v:function(){gx.O.AV17ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOID",gxz:"ZV19OpcaoClassificacaoId",gxold:"OV19OpcaoClassificacaoId",gxvar:"AV19OpcaoClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19OpcaoClassificacaoId=Value},v2z:function(Value){gx.O.ZV19OpcaoClassificacaoId=Value},v2c:function(){gx.fn.setComboBoxValue("vOPCAOCLASSIFICACAOID",gx.O.AV19OpcaoClassificacaoId)},c2v:function(){gx.O.AV19OpcaoClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[21]={fld:"TABLE2",grid:0};
   GXValidFnc[22]={fld:"TABLE5",grid:0};
   GXValidFnc[25]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNNORMAL",gxz:"ZV16PessoaSnNormal",gxold:"OV16PessoaSnNormal",gxvar:"AV16PessoaSnNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV16PessoaSnNormal=Value},v2z:function(Value){gx.O.ZV16PessoaSnNormal=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOASNNORMAL",gx.O.AV16PessoaSnNormal,"S")},c2v:function(){gx.O.AV16PessoaSnNormal=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNNORMAL")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[27]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNSUSPENSO",gxz:"ZV15PessoaSnSuspenso",gxold:"OV15PessoaSnSuspenso",gxvar:"AV15PessoaSnSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV15PessoaSnSuspenso=Value},v2z:function(Value){gx.O.ZV15PessoaSnSuspenso=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOASNSUSPENSO",gx.O.AV15PessoaSnSuspenso,"S")},c2v:function(){gx.O.AV15PessoaSnSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNSUSPENSO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNCANCELADO",gxz:"ZV14PessoaSnCancelado",gxold:"OV14PessoaSnCancelado",gxvar:"AV14PessoaSnCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV14PessoaSnCancelado=Value},v2z:function(Value){gx.O.ZV14PessoaSnCancelado=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOASNCANCELADO",gx.O.AV14PessoaSnCancelado,"S")},c2v:function(){gx.O.AV14PessoaSnCancelado=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNCANCELADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[32]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[34]={fld:"TABLE3",grid:0};
   GXValidFnc[35]={fld:"TABLE6",grid:0};
   GXValidFnc[38]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNCLIENTE",gxz:"ZV23PessoaSnCliente",gxold:"OV23PessoaSnCliente",gxvar:"AV23PessoaSnCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV23PessoaSnCliente=Value},v2z:function(Value){gx.O.ZV23PessoaSnCliente=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOASNCLIENTE",gx.O.AV23PessoaSnCliente,"S")},c2v:function(){gx.O.AV23PessoaSnCliente=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNCLIENTE")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNFORNECEDOR",gxz:"ZV24PessoaSnFornecedor",gxold:"OV24PessoaSnFornecedor",gxvar:"AV24PessoaSnFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV24PessoaSnFornecedor=Value},v2z:function(Value){gx.O.ZV24PessoaSnFornecedor=Value},v2c:function(){gx.fn.setCheckBoxValue("vPESSOASNFORNECEDOR",gx.O.AV24PessoaSnFornecedor,"S")},c2v:function(){gx.O.AV24PessoaSnFornecedor=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNFORNECEDOR")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[50]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNGET",gxz:"ZV21SnGet",gxold:"OV21SnGet",gxvar:"AV21SnGet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21SnGet=Value},v2z:function(Value){gx.O.ZV21SnGet=Value},v2c:function(){gx.fn.setControlValue("vSNGET",gx.O.AV21SnGet,0)},c2v:function(){gx.O.AV21SnGet=this.val()},val:function(){return gx.fn.getControlValue("vSNGET")},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNREFRESH",gxz:"ZV25SnRefresh",gxold:"OV25SnRefresh",gxvar:"AV25SnRefresh",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25SnRefresh=Value},v2z:function(Value){gx.O.ZV25SnRefresh=Value},v2c:function(){gx.fn.setControlValue("vSNREFRESH",gx.O.AV25SnRefresh,0)},c2v:function(){gx.O.AV25SnRefresh=this.val()},val:function(){return gx.fn.getControlValue("vSNREFRESH")},nac:gx.falseFn};
   this.AV17ClassificacaoId = "" ;
   this.ZV17ClassificacaoId = "" ;
   this.OV17ClassificacaoId = "" ;
   this.AV19OpcaoClassificacaoId = "" ;
   this.ZV19OpcaoClassificacaoId = "" ;
   this.OV19OpcaoClassificacaoId = "" ;
   this.AV16PessoaSnNormal = "" ;
   this.ZV16PessoaSnNormal = "" ;
   this.OV16PessoaSnNormal = "" ;
   this.AV15PessoaSnSuspenso = "" ;
   this.ZV15PessoaSnSuspenso = "" ;
   this.OV15PessoaSnSuspenso = "" ;
   this.AV14PessoaSnCancelado = "" ;
   this.ZV14PessoaSnCancelado = "" ;
   this.OV14PessoaSnCancelado = "" ;
   this.AV23PessoaSnCliente = "" ;
   this.ZV23PessoaSnCliente = "" ;
   this.OV23PessoaSnCliente = "" ;
   this.AV24PessoaSnFornecedor = "" ;
   this.ZV24PessoaSnFornecedor = "" ;
   this.OV24PessoaSnFornecedor = "" ;
   this.AV21SnGet = "" ;
   this.ZV21SnGet = "" ;
   this.OV21SnGet = "" ;
   this.AV25SnRefresh = "" ;
   this.ZV25SnRefresh = "" ;
   this.OV25SnRefresh = "" ;
   this.AV17ClassificacaoId = "" ;
   this.AV19OpcaoClassificacaoId = "" ;
   this.AV16PessoaSnNormal = "" ;
   this.AV15PessoaSnSuspenso = "" ;
   this.AV14PessoaSnCancelado = "" ;
   this.AV23PessoaSnCliente = "" ;
   this.AV24PessoaSnFornecedor = "" ;
   this.AV21SnGet = "" ;
   this.AV25SnRefresh = "" ;
   this.A54ClassificacaoId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A57OpcaoClassificacaoDescricao = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A55ClassificacaoDescricao = "" ;
   this.AV20SnErro = "" ;
   this.Events = {"e12xv2_client": ["ENTER", true] ,"e13xv2_client": ["VCLASSIFICACAOID.CLICK", true] ,"e14xv2_client": ["'FECHAR'", true] ,"e17xv2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV18EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV17ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'}],[{av:'AV19OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'}]];
   this.EvtParms["ENTER"] = [[{av:'AV20SnErro',fld:'vSNERRO'},{av:'AV17ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV19OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV23PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV24PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV16PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV15PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV14PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'AV21SnGet',fld:'vSNGET'}],[{av:'AV25SnRefresh',fld:'vSNREFRESH'},{av:'AV20SnErro',fld:'vSNERRO'}]];
   this.EvtParms["VCLASSIFICACAOID.CLICK"] = [[{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV18EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'AV17ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'A57OpcaoClassificacaoDescricao',fld:'OPCAOCLASSIFICACAODESCRICAO'}],[{av:'AV19OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV21SnGet',fld:'vSNGET'},{av:'AV14PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'AV15PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV16PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV24PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV23PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV19OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV17ClassificacaoId',fld:'vCLASSIFICACAOID'}],[{av:'AV25SnRefresh',fld:'vSNREFRESH'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hselecaocontatos());

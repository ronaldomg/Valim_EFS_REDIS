/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:2:56.36
*/
gx.evt.autoSkip = false;
gx.define('hbloqueiochequedevolvido', false, function () {
   this.ServerClass =  "hbloqueiochequedevolvido" ;
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
   };
   this.s122_client=function()
   {
      this.AV15SnErro =  "N"  ;
      this.AV20SnAtualiza =  "N"  ;
      if ( (new gx.date.gxdate("").compare(this.AV26DtReapresentacao)==0) )
      {
         this.AV15SnErro =  "S"  ;
         this.addMessage("Informe a Data de Reapresentação do Cheque");
         gx.fn.usrSetFocus("vDTREAPRESENTACAO") ;
      }
      else
      {
         if ( (""==this.AV25SnCanCliente) )
         {
            this.AV15SnErro =  "S"  ;
            this.addMessage("Cancelar Cliente deve ser Sim ou Não");
            gx.fn.usrSetFocus("vSNCANCLIENTE") ;
         }
      }
   };
   this.e12x12_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15x12_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,11,14,16,18,19,24,26,29,31,37,39,40,41,42];
   this.GXLastCtrlId =42;
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TABLE1",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[11]={fld:"TABLE5",grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAID",gxz:"ZV24PessoaId",gxold:"OV24PessoaId",gxvar:"AV24PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV24PessoaId,0)},c2v:function(){gx.O.AV24PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV28PessoaFantasia",gxold:"OV28PessoaFantasia",gxvar:"AV28PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PessoaFantasia=Value},v2z:function(Value){gx.O.ZV28PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV28PessoaFantasia,0)},c2v:function(){gx.O.AV28PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TABLE4",grid:0};
   GXValidFnc[24]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDTREAPRESENTACAO",gxz:"ZV26DtReapresentacao",gxold:"OV26DtReapresentacao",gxvar:"AV26DtReapresentacao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26DtReapresentacao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV26DtReapresentacao=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDTREAPRESENTACAO",gx.O.AV26DtReapresentacao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV26DtReapresentacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDTREAPRESENTACAO")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCANCLIENTE",gxz:"ZV25SnCanCliente",gxold:"OV25SnCanCliente",gxvar:"AV25SnCanCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV25SnCanCliente=Value},v2z:function(Value){gx.O.ZV25SnCanCliente=Value},v2c:function(){gx.fn.setComboBoxValue("vSNCANCLIENTE",gx.O.AV25SnCanCliente)},c2v:function(){gx.O.AV25SnCanCliente=this.val()},val:function(){return gx.fn.getControlValue("vSNCANCLIENTE")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLE3",grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAEMPRESAID",gxz:"ZV27PessoaEmpresaId",gxold:"OV27PessoaEmpresaId",gxvar:"AV27PessoaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PessoaEmpresaId=Value},v2z:function(Value){gx.O.ZV27PessoaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vPESSOAEMPRESAID",gx.O.AV27PessoaEmpresaId,0)},c2v:function(){gx.O.AV27PessoaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNATUALIZA",gxz:"ZV20SnAtualiza",gxold:"OV20SnAtualiza",gxvar:"AV20SnAtualiza",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20SnAtualiza=Value},v2z:function(Value){gx.O.ZV20SnAtualiza=Value},v2c:function(){gx.fn.setControlValue("vSNATUALIZA",gx.O.AV20SnAtualiza,0)},c2v:function(){gx.O.AV20SnAtualiza=this.val()},val:function(){return gx.fn.getControlValue("vSNATUALIZA")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"JSDATA", format:2,grid:0};
   GXValidFnc[42]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPARAMETROFCXQTDEREAPCHEDEV",gxz:"ZV29ParametroFcxQtdeReapCheDev",gxold:"OV29ParametroFcxQtdeReapCheDev",gxvar:"AV29ParametroFcxQtdeReapCheDev",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ParametroFcxQtdeReapCheDev=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29ParametroFcxQtdeReapCheDev=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPARAMETROFCXQTDEREAPCHEDEV",gx.O.AV29ParametroFcxQtdeReapCheDev,0)},c2v:function(){gx.O.AV29ParametroFcxQtdeReapCheDev=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPARAMETROFCXQTDEREAPCHEDEV",'.')},nac:gx.falseFn};
   this.AV24PessoaId = 0 ;
   this.ZV24PessoaId = 0 ;
   this.OV24PessoaId = 0 ;
   this.AV28PessoaFantasia = "" ;
   this.ZV28PessoaFantasia = "" ;
   this.OV28PessoaFantasia = "" ;
   this.AV26DtReapresentacao = gx.date.nullDate() ;
   this.ZV26DtReapresentacao = gx.date.nullDate() ;
   this.OV26DtReapresentacao = gx.date.nullDate() ;
   this.AV25SnCanCliente = "" ;
   this.ZV25SnCanCliente = "" ;
   this.OV25SnCanCliente = "" ;
   this.AV27PessoaEmpresaId = "" ;
   this.ZV27PessoaEmpresaId = "" ;
   this.OV27PessoaEmpresaId = "" ;
   this.AV20SnAtualiza = "" ;
   this.ZV20SnAtualiza = "" ;
   this.OV20SnAtualiza = "" ;
   this.AV29ParametroFcxQtdeReapCheDev = 0 ;
   this.ZV29ParametroFcxQtdeReapCheDev = 0 ;
   this.OV29ParametroFcxQtdeReapCheDev = 0 ;
   this.AV24PessoaId = 0 ;
   this.AV28PessoaFantasia = "" ;
   this.AV26DtReapresentacao = gx.date.nullDate() ;
   this.AV25SnCanCliente = "" ;
   this.AV27PessoaEmpresaId = "" ;
   this.AV20SnAtualiza = "" ;
   this.AV29ParametroFcxQtdeReapCheDev = 0 ;
   this.A5820ParametroFcxQtdeReapCheDev = 0 ;
   this.AV15SnErro = "" ;
   this.Events = {"e12x12_client": ["ENTER", true] ,"e15x12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV20SnAtualiza',fld:'vSNATUALIZA'},{av:'AV22SdtBaixaCheqDev',fld:'vSDTBAIXACHEQDEV'},{av:'AV5UsrCod',fld:'vUSRCOD'},{av:'AV21EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV29ParametroFcxQtdeReapCheDev',fld:'vPARAMETROFCXQTDEREAPCHEDEV'},{av:'AV26DtReapresentacao',fld:'vDTREAPRESENTACAO'}],[{av:'AV20SnAtualiza',fld:'vSNATUALIZA'},{av:'AV22SdtBaixaCheqDev',fld:'vSDTBAIXACHEQDEV'},{av:'AV13QtdeCli',fld:'vQTDECLI'},{av:'AV35GXV3',fld:'vGXV3'},{av:'AV23SdtBaixaCheqDevItem',fld:'vSDTBAIXACHEQDEVITEM'},{av:'AV16Arquivo',fld:'vARQUIVO'},{av:'AV34GXV2',fld:'vGXV2'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV24PessoaId',fld:'vPESSOAID'},{av:'AV28PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV26DtReapresentacao',fld:'vDTREAPRESENTACAO'},{av:'AV25SnCanCliente',fld:'vSNCANCLIENTE'}]];
   this.EvtParms["ENTER"] = [[{av:'AV15SnErro',fld:'vSNERRO'},{av:'AV22SdtBaixaCheqDev',fld:'vSDTBAIXACHEQDEV'},{av:'AV27PessoaEmpresaId',fld:'vPESSOAEMPRESAID'},{av:'AV24PessoaId',fld:'vPESSOAID'},{av:'AV26DtReapresentacao',fld:'vDTREAPRESENTACAO'},{av:'AV25SnCanCliente',fld:'vSNCANCLIENTE'}],[{av:'AV22SdtBaixaCheqDev',fld:'vSDTBAIXACHEQDEV'},{av:'AV33GXV1',fld:'vGXV1'},{av:'AV23SdtBaixaCheqDevItem',fld:'vSDTBAIXACHEQDEVITEM'},{av:'AV20SnAtualiza',fld:'vSNATUALIZA'},{av:'AV15SnErro',fld:'vSNERRO'}]];
   this.EnterCtrl = ["BTNCONFIRMAR"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hbloqueiochequedevolvido());

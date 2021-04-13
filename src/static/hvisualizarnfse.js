/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:11:21.63
*/
gx.evt.autoSkip = false;
gx.define('hvisualizarnfse', false, function () {
   this.ServerClass =  "hvisualizarnfse" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV40NfseId=gx.fn.getIntegerValue("vNFSEID",'.') ;
      this.AV63OrdemServicoEmpresaId=gx.fn.getControlValue("vORDEMSERVICOEMPRESAID") ;
      this.AV153filialid=gx.fn.getIntegerValue("vFILIALID",'.') ;
   };
   this.e122cv2_client=function()
   {
      this.executeServerEvent("'PREFEITURA'", false, null, false, false);
   };
   this.e132cv2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", false, null, false, false);
   };
   this.e152cv2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e162cv1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,6,9,11,14,16,19,21,25];
   this.GXLastCtrlId =25;
   this.JSHANDLER1Container = gx.uc.getNew(this, 28, 11, "JSHandler", "JSHANDLER1Container", "Jshandler1");
   var JSHANDLER1Container = this.JSHANDLER1Container;
   JSHANDLER1Container.setDynProp("js", "Js", "", "str");
   JSHANDLER1Container.setProp("Visible", "Visible", true, "bool");
   JSHANDLER1Container.setProp("Enabled", "Enabled", true, "boolean");
   JSHANDLER1Container.setProp("Class", "Class", "", "char");
   JSHANDLER1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(JSHANDLER1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[11]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESACNPJ",gxz:"ZV154empresacnpj",gxold:"OV154empresacnpj",gxvar:"AV154empresacnpj",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV154empresacnpj=Value},v2z:function(Value){gx.O.ZV154empresacnpj=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACNPJ",gx.O.AV154empresacnpj,0)},c2v:function(){gx.O.AV154empresacnpj=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACNPJ")},nac:gx.falseFn};
   GXValidFnc[14]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[16]={lvl:0,type:"int",len:15,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNFSENUMERO",gxz:"ZV43NfseNumero",gxold:"OV43NfseNumero",gxvar:"AV43NfseNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43NfseNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV43NfseNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNFSENUMERO",gx.O.AV43NfseNumero,0)},c2v:function(){gx.O.AV43NfseNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNFSENUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"char",len:9999,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNFSECODIGOVERIFICACAO",gxz:"ZV38NfseCodigoVerificacao",gxold:"OV38NfseCodigoVerificacao",gxvar:"AV38NfseCodigoVerificacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38NfseCodigoVerificacao=Value},v2z:function(Value){gx.O.ZV38NfseCodigoVerificacao=Value},v2c:function(){gx.fn.setControlValue("vNFSECODIGOVERIFICACAO",gx.O.AV38NfseCodigoVerificacao,0)},c2v:function(){gx.O.AV38NfseCodigoVerificacao=this.val()},val:function(){return gx.fn.getControlValue("vNFSECODIGOVERIFICACAO")},nac:gx.falseFn};
   GXValidFnc[25]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNFSENOTASERVICOSEQ",gxz:"ZV157NfseNotaServicoSeq",gxold:"OV157NfseNotaServicoSeq",gxvar:"AV157NfseNotaServicoSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV157NfseNotaServicoSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV157NfseNotaServicoSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vNFSENOTASERVICOSEQ",gx.O.AV157NfseNotaServicoSeq,0)},c2v:function(){gx.O.AV157NfseNotaServicoSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vNFSENOTASERVICOSEQ",'.')},nac:gx.falseFn};
   this.AV154empresacnpj = "" ;
   this.ZV154empresacnpj = "" ;
   this.OV154empresacnpj = "" ;
   this.AV43NfseNumero = 0 ;
   this.ZV43NfseNumero = 0 ;
   this.OV43NfseNumero = 0 ;
   this.AV38NfseCodigoVerificacao = "" ;
   this.ZV38NfseCodigoVerificacao = "" ;
   this.OV38NfseCodigoVerificacao = "" ;
   this.AV157NfseNotaServicoSeq = 0 ;
   this.ZV157NfseNotaServicoSeq = 0 ;
   this.OV157NfseNotaServicoSeq = 0 ;
   this.AV154empresacnpj = "" ;
   this.AV43NfseNumero = 0 ;
   this.AV38NfseCodigoVerificacao = "" ;
   this.AV157NfseNotaServicoSeq = 0 ;
   this.AV40NfseId = 0 ;
   this.AV63OrdemServicoEmpresaId = "" ;
   this.AV153filialid = 0 ;
   this.A9736NFSEId = 0 ;
   this.A9739NfseLote = 0 ;
   this.A9746NfseCodigoVerificacao = "" ;
   this.A9747NfseNumero = 0 ;
   this.A9741NfseProtocolo = "" ;
   this.A11121NfseNotaServicoSeq = 0 ;
   this.A1228FilialEmpresaId = "" ;
   this.A1156FilialId = 0 ;
   this.A1245FilialCNPJ = "" ;
   this.A10932FilialParametroProvedorISS = 0 ;
   this.A9735FilialParametroFilialId = 0 ;
   this.Events = {"e122cv2_client": ["'PREFEITURA'", true] ,"e132cv2_client": ["'IMPRIMIR'", true] ,"e152cv2_client": ["ENTER", true] ,"e162cv1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'A1156FilialId',fld:'FILIALID'},{av:'AV153filialid',fld:'vFILIALID',hsh:true},{av:'A1228FilialEmpresaId',fld:'FILIALEMPRESAID'},{av:'AV63OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID',hsh:true},{av:'A1245FilialCNPJ',fld:'FILIALCNPJ'},{av:'A9735FilialParametroFilialId',fld:'FILIALPARAMETROFILIALID'},{av:'A10932FilialParametroProvedorISS',fld:'FILIALPARAMETROPROVEDORISS'},{av:'A9736NFSEId',fld:'NFSEID'},{av:'AV40NfseId',fld:'vNFSEID',hsh:true},{av:'A9739NfseLote',fld:'NFSELOTE'},{av:'A9746NfseCodigoVerificacao',fld:'NFSECODIGOVERIFICACAO'},{av:'A9747NfseNumero',fld:'NFSENUMERO'},{av:'A9741NfseProtocolo',fld:'NFSEPROTOCOLO'},{av:'A11121NfseNotaServicoSeq',fld:'NFSENOTASERVICOSEQ'},{av:'Gx_time',fld:'vTIME'}],[{av:'AV154empresacnpj',fld:'vEMPRESACNPJ'},{av:'AV159FilialParametroProvedorIss',fld:'vFILIALPARAMETROPROVEDORISS'},{av:'AV42NfseLote',fld:'vNFSELOTE'},{av:'AV38NfseCodigoVerificacao',fld:'vNFSECODIGOVERIFICACAO'},{av:'AV43NfseNumero',fld:'vNFSENUMERO'},{av:'AV44NFSeProtocolo',fld:'vNFSEPROTOCOLO'},{av:'AV157NfseNotaServicoSeq',fld:'vNFSENOTASERVICOSEQ'},{av:'gx.fn.getCtrlProperty("vNFSENOTASERVICOSEQ","Visible")',ctrl:'vNFSENOTASERVICOSEQ',prop:'Visible'},{av:'this.JSHANDLER1Container.js',ctrl:'JSHANDLER1',prop:'js'},{ctrl:'BTNREL',prop:'Visible'},{ctrl:'BTNPREF',prop:'Visible'}]];
   this.EvtParms["'PREFEITURA'"] = [[{av:'AV153filialid',fld:'vFILIALID',hsh:true},{av:'AV63OrdemServicoEmpresaId',fld:'vORDEMSERVICOEMPRESAID',hsh:true},{av:'AV40NfseId',fld:'vNFSEID',hsh:true},{av:'Gx_time',fld:'vTIME'}],[{av:'this.JSHANDLER1Container.js',ctrl:'JSHANDLER1',prop:'js'}]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV157NfseNotaServicoSeq',fld:'vNFSENOTASERVICOSEQ'},{av:'AV166Pgmdesc',fld:'vPGMDESC'}],[{av:'AV156NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV155NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV158QTPagGeradas',fld:'vQTPAGGERADAS'},{av:'AV157NfseNotaServicoSeq',fld:'vNFSENOTASERVICOSEQ'}]];
   this.setVCMap("AV40NfseId", "vNFSEID", 0, "int");
   this.setVCMap("AV63OrdemServicoEmpresaId", "vORDEMSERVICOEMPRESAID", 0, "char");
   this.setVCMap("AV153filialid", "vFILIALID", 0, "int");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hvisualizarnfse());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:10.9
*/
gx.evt.autoSkip = false;
gx.define('hatualizarenderecos', false, function () {
   this.ServerClass =  "hatualizarenderecos" ;
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
   };
   this.e13l12_client=function()
   {
      this.executeServerEvent("'DIALOG'", true, null, false, false);
   };
   this.e11l12_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e14l12_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e17l12_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,15,17,20,22,28,35];
   this.GXLastCtrlId =35;
   GXValidFnc[3]={fld:"TABLE5",grid:0};
   GXValidFnc[6]={fld:"TABLE4",grid:0};
   GXValidFnc[9]={fld:"TABLE9",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE10",grid:0};
   GXValidFnc[20]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDIRETORIO",gxz:"ZV20Diretorio",gxold:"OV20Diretorio",gxvar:"AV20Diretorio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20Diretorio=Value},v2z:function(Value){gx.O.ZV20Diretorio=Value},v2c:function(){gx.fn.setControlValue("vDIRETORIO",gx.O.AV20Diretorio,0)},c2v:function(){gx.O.AV20Diretorio=this.val()},val:function(){return gx.fn.getControlValue("vDIRETORIO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"CHAMADIALOG",grid:0};
   GXValidFnc[28]={fld:"TABLE8",grid:0};
   GXValidFnc[35]={fld:"BTNHELP",grid:0};
   this.AV20Diretorio = "" ;
   this.ZV20Diretorio = "" ;
   this.OV20Diretorio = "" ;
   this.AV20Diretorio = "" ;
   this.Events = {"e13l12_client": ["'DIALOG'", true] ,"e11l12_client": ["'FECHAR'", true] ,"e14l12_client": ["ENTER", true] ,"e17l12_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[{av:'AV20Diretorio',fld:'vDIRETORIO'}]];
   this.EvtParms["'DIALOG'"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV20Diretorio',fld:'vDIRETORIO'},{av:'AV45SnCom',fld:'vSNCOM'},{av:'AV46SnRes',fld:'vSNRES'},{av:'AV23Categoria',fld:'vCATEGORIA'},{av:'AV24CodigoTitular',fld:'vCODIGOTITULAR'},{av:'AV26AuxDFR',fld:'vAUXDFR'},{av:'AV47PessoaCPFAux',fld:'vPESSOACPFAUX'},{av:'AV48PessoaDataNascAux',fld:'vPESSOADATANASCAUX'},{av:'AV27LogradouroTipoLogradouro',fld:'vLOGRADOUROTIPOLOGRADOURO'},{av:'AV28LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV29PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV30PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV31PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV32PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV33PessoaCidadeUf',fld:'vPESSOACIDADEUF'},{av:'AV34PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV35PessoaTelefoneTrab',fld:'vPESSOATELEFONETRAB'},{av:'AV36PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV37PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV39PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV38PessoaCPF',fld:'vPESSOACPF'},{av:'AV49PessoaCidadeUfAux',fld:'vPESSOACIDADEUFAUX'}],[{av:'AV42SnErro',fld:'vSNERRO'},{av:'AV22ArquivoResidencial',fld:'vARQUIVORESIDENCIAL'},{av:'AV19i',fld:'vI'},{av:'AV44Cont',fld:'vCONT'},{av:'AV25Retorno',fld:'vRETORNO'},{av:'AV48PessoaDataNascAux',fld:'vPESSOADATANASCAUX'},{av:'AV39PessoaDataNasc',fld:'vPESSOADATANASC'},{av:'AV47PessoaCPFAux',fld:'vPESSOACPFAUX'},{av:'AV38PessoaCPF',fld:'vPESSOACPF'},{av:'Gx_mode',fld:'vMODE'},{av:'AV37PessoaEmail',fld:'vPESSOAEMAIL'},{av:'AV36PessoaCelular',fld:'vPESSOACELULAR'},{av:'AV35PessoaTelefoneTrab',fld:'vPESSOATELEFONETRAB'},{av:'AV34PessoaTelefone',fld:'vPESSOATELEFONE'},{av:'AV33PessoaCidadeUf',fld:'vPESSOACIDADEUF'},{av:'AV32PessoaCidadeNome',fld:'vPESSOACIDADENOME'},{av:'AV31PessoaBairro',fld:'vPESSOABAIRRO'},{av:'AV30PessoaComplemento',fld:'vPESSOACOMPLEMENTO'},{av:'AV29PessoaNumeroEnd',fld:'vPESSOANUMEROEND'},{av:'AV28LogradouroNome',fld:'vLOGRADOURONOME'},{av:'AV27LogradouroTipoLogradouro',fld:'vLOGRADOUROTIPOLOGRADOURO'},{av:'AV24CodigoTitular',fld:'vCODIGOTITULAR'},{av:'AV46SnRes',fld:'vSNRES'},{av:'AV43ArquivoComercial',fld:'vARQUIVOCOMERCIAL'},{av:'AV49PessoaCidadeUfAux',fld:'vPESSOACIDADEUFAUX'},{av:'AV45SnCom',fld:'vSNCOM'}]];
   this.EnterCtrl = ["BUTTON1"];
   this.InitStandaloneVars( );
});
gx.setParentObj(new hatualizarenderecos());

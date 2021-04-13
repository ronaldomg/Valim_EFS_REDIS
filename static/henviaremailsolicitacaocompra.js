/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:14:55.7
*/
gx.evt.autoSkip = false;
gx.define('henviaremailsolicitacaocompra', false, function () {
   this.ServerClass =  "henviaremailsolicitacaocompra" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.refreshAndEnter = true;
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV41PedidoCompraAno=gx.fn.getIntegerValue("vPEDIDOCOMPRAANO",'.') ;
      this.AV40PedidoCompraNumero=gx.fn.getIntegerValue("vPEDIDOCOMPRANUMERO",'.') ;
      this.AV59PedidoCompraPessoaId=gx.fn.getIntegerValue("vPEDIDOCOMPRAPESSOAID",'.') ;
      this.AV39AditivoSequencia=gx.fn.getIntegerValue("vADITIVOSEQUENCIA",'.') ;
   };
   this.e11sb2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12sb2_client=function()
   {
      this.executeServerEvent("'LIMPARCAMPOS'", false, null, false, false);
   };
   this.e13sb2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e14sb2_client=function()
   {
      this.executeServerEvent("'ADICIONAREMAIL'", true, null, false, false);
   };
   this.e17sb2_client=function()
   {
      this.executeServerEvent("'PROXIMAPAGINA'", true, arguments[0], false, false);
   };
   this.e18sb2_client=function()
   {
      this.executeServerEvent("'PAGINAANTERIOR'", true, arguments[0], false, false);
   };
   this.e19sb2_client=function()
   {
      this.executeServerEvent("'EXCLUIREMAIL'", true, arguments[0], false, false);
   };
   this.e21sb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,8,12,14,16,19,20,22,26,28,29,30,33,35,38,40,41,47,58];
   this.GXLastCtrlId =58;
   this.GridemailsContainer = new gx.grid.grid(this, 2,"WbpLvl2",27,"Gridemails","Gridemails","GridemailsContainer",this.CmpContext,this.IsMasterPage,"henviaremailsolicitacaocompra",[],false,1,true,true,0,false,false,false,"CollSdtEmail.SdtEmailItem",0,"px","Novo registro",true,false,false,null,null,false,"AV34Emails",false,[1,1,1,1]);
   var GridemailsContainer = this.GridemailsContainer;
   GridemailsContainer.addBitmap("&Bmpexcluir","vBMPEXCLUIR",28,0,"px",17,"px","e19sb2_client","","Excluir","Image","GridColumnImage");
   GridemailsContainer.addSingleLineEdit("GXV10T",29,"CTLENDERECOEMAIL","Endereço de Email","","EnderecoEmail","svchar",0,"px",60,60,"left",null,[],"GXV10T","GXV10T",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridemailsContainer);
   GXValidFnc[3]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TXTPARA1", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILREMETENTE",gxz:"ZV12EmailRemetente",gxold:"OV12EmailRemetente",gxvar:"AV12EmailRemetente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmailRemetente=Value},v2z:function(Value){gx.O.ZV12EmailRemetente=Value},v2c:function(){gx.fn.setControlValue("vEMAILREMETENTE",gx.O.AV12EmailRemetente,0)},c2v:function(){gx.O.AV12EmailRemetente=this.val()},val:function(){return gx.fn.getControlValue("vEMAILREMETENTE")},nac:gx.falseFn};
   GXValidFnc[12]={fld:"TXTPARA4", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILRESPONSAVEL",gxz:"ZV58EmailResponsavel",gxold:"OV58EmailResponsavel",gxvar:"AV58EmailResponsavel",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV58EmailResponsavel=Value},v2z:function(Value){gx.O.ZV58EmailResponsavel=Value},v2c:function(){gx.fn.setControlValue("vEMAILRESPONSAVEL",gx.O.AV58EmailResponsavel,0)},c2v:function(){gx.O.AV58EmailResponsavel=this.val()},val:function(){return gx.fn.getControlValue("vEMAILRESPONSAVEL")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"ADICIONAREMAIL",grid:0};
   GXValidFnc[19]={fld:"TXTPARA", format:0,grid:0};
   GXValidFnc[20]={fld:"BTNPROMPTPARA",grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILDESTINATARIO",gxz:"ZV13EmailDestinatario",gxold:"OV13EmailDestinatario",gxvar:"AV13EmailDestinatario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13EmailDestinatario=Value},v2z:function(Value){gx.O.ZV13EmailDestinatario=Value},v2c:function(){gx.fn.setControlValue("vEMAILDESTINATARIO",gx.O.AV13EmailDestinatario,0)},c2v:function(){gx.O.AV13EmailDestinatario=this.val()},val:function(){return gx.fn.getControlValue("vEMAILDESTINATARIO")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[28]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.GridemailsContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCLUIR",gxz:"ZV36bmpExcluir",gxold:"OV36bmpExcluir",gxvar:"AV36bmpExcluir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36bmpExcluir=Value},v2z:function(Value){gx.O.ZV36bmpExcluir=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCLUIR",row || gx.fn.currentGridRowImpl(27),gx.O.AV36bmpExcluir,gx.O.AV79Bmpexcluir_GXI)},c2v:function(){gx.O.AV79Bmpexcluir_GXI=this.val_GXI();gx.O.AV36bmpExcluir=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCLUIR",row || gx.fn.currentGridRowImpl(27))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCLUIR_GXI",row || gx.fn.currentGridRowImpl(27))}, gxvar_GXI:'AV79Bmpexcluir_GXI',nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:27,gxgrid:this.GridemailsContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLENDERECOEMAIL",gxz:"ZV72GXV10T",gxold:"OV72GXV10T",gxvar:"GXV10T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10T=Value},v2z:function(Value){gx.O.ZV72GXV10T=Value},v2c:function(row){gx.fn.setGridControlValue("CTLENDERECOEMAIL",row || gx.fn.currentGridRowImpl(27),gx.O.GXV10T,0)},c2v:function(){gx.O.GXV10T=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLENDERECOEMAIL",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[30]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[33]={fld:"TXTPARA2", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSUNTO",gxz:"ZV14Assunto",gxold:"OV14Assunto",gxvar:"AV14Assunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Assunto=Value},v2z:function(Value){gx.O.ZV14Assunto=Value},v2c:function(){gx.fn.setControlValue("vASSUNTO",gx.O.AV14Assunto,0)},c2v:function(){gx.O.AV14Assunto=this.val()},val:function(){return gx.fn.getControlValue("vASSUNTO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TXTPARA3", format:0,grid:0};
   GXValidFnc[40]={fld:"IMAGE2",grid:0};
   GXValidFnc[41]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEANEXO",gxz:"ZV15NomeAnexo",gxold:"OV15NomeAnexo",gxvar:"AV15NomeAnexo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15NomeAnexo=Value},v2z:function(Value){gx.O.ZV15NomeAnexo=Value},v2c:function(){gx.fn.setControlValue("vNOMEANEXO",gx.O.AV15NomeAnexo,0)},c2v:function(){gx.O.AV15NomeAnexo=this.val()},val:function(){return gx.fn.getControlValue("vNOMEANEXO")},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTEXTO",gxz:"ZV16Texto",gxold:"OV16Texto",gxvar:"AV16Texto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Texto=Value},v2z:function(Value){gx.O.ZV16Texto=Value},v2c:function(){gx.fn.setControlValue("vTEXTO",gx.O.AV16Texto,0)},c2v:function(){gx.O.AV16Texto=this.val()},val:function(){return gx.fn.getControlValue("vTEXTO")},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEABSOLUTO",gxz:"ZV38NomeAbsoluto",gxold:"OV38NomeAbsoluto",gxvar:"AV38NomeAbsoluto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38NomeAbsoluto=Value},v2z:function(Value){gx.O.ZV38NomeAbsoluto=Value},v2c:function(){gx.fn.setControlValue("vNOMEABSOLUTO",gx.O.AV38NomeAbsoluto,0)},c2v:function(){gx.O.AV38NomeAbsoluto=this.val()},val:function(){return gx.fn.getControlValue("vNOMEABSOLUTO")},nac:gx.falseFn};
   this.AV12EmailRemetente = "" ;
   this.ZV12EmailRemetente = "" ;
   this.OV12EmailRemetente = "" ;
   this.AV58EmailResponsavel = "" ;
   this.ZV58EmailResponsavel = "" ;
   this.OV58EmailResponsavel = "" ;
   this.AV13EmailDestinatario = "" ;
   this.ZV13EmailDestinatario = "" ;
   this.OV13EmailDestinatario = "" ;
   this.ZV36bmpExcluir = "" ;
   this.OV36bmpExcluir = "" ;
   this.ZV72GXV10T = "" ;
   this.OV72GXV10T = "" ;
   this.AV14Assunto = "" ;
   this.ZV14Assunto = "" ;
   this.OV14Assunto = "" ;
   this.AV15NomeAnexo = "" ;
   this.ZV15NomeAnexo = "" ;
   this.OV15NomeAnexo = "" ;
   this.AV16Texto = "" ;
   this.ZV16Texto = "" ;
   this.OV16Texto = "" ;
   this.AV38NomeAbsoluto = "" ;
   this.ZV38NomeAbsoluto = "" ;
   this.OV38NomeAbsoluto = "" ;
   this.AV12EmailRemetente = "" ;
   this.AV58EmailResponsavel = "" ;
   this.AV13EmailDestinatario = "" ;
   this.AV14Assunto = "" ;
   this.AV15NomeAnexo = "" ;
   this.AV16Texto = "" ;
   this.AV38NomeAbsoluto = "" ;
   this.AV41PedidoCompraAno = 0 ;
   this.AV40PedidoCompraNumero = 0 ;
   this.AV59PedidoCompraPessoaId = 0 ;
   this.AV39AditivoSequencia = 0 ;
   this.AV36bmpExcluir = "" ;
   this.GXV10T = "" ;
   this.A10755RelatorioUsuarioNome = "" ;
   this.A10757RelatorioUsuarioAssunto = "" ;
   this.A10758RelatorioUsuarioCorpo = "" ;
   this.A10756RelatorioUsuarioEmail = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A615UsuarioEmail = "" ;
   this.A613UsuarioServidorEmailSMTP = "" ;
   this.A614UsuarioNoPortaSMTP = 0 ;
   this.A616UsuarioNomeContaEmail = "" ;
   this.A617UsuarioSenhaEmail = "" ;
   this.A618UsuarioRequerAutenticacao = "" ;
   this.A2006UsuarioChaveEmail = "" ;
   this.Events = {"e11sb2_client": ["ENTER", true] ,"e12sb2_client": ["'LIMPARCAMPOS'", true] ,"e13sb2_client": ["'CANCELAR'", true] ,"e14sb2_client": ["'ADICIONAREMAIL'", true] ,"e17sb2_client": ["'PROXIMAPAGINA'", true] ,"e18sb2_client": ["'PAGINAANTERIOR'", true] ,"e19sb2_client": ["'EXCLUIREMAIL'", true] ,"e21sb2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'AV34Emails',fld:'vEMAILS',grid:27},{av:'subGridemails_Rows'},{av:'AV58EmailResponsavel',fld:'vEMAILRESPONSAVEL'},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV34Emails',fld:'vEMAILS',grid:27},{av:'AV58EmailResponsavel',fld:'vEMAILRESPONSAVEL'},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'AV21UsuarioServidorEmailSMTP',fld:'vUSUARIOSERVIDOREMAILSMTP'},{av:'AV24UsuarioNomeContaEmail',fld:'vUSUARIONOMECONTAEMAIL'},{av:'AV25UsuarioSenhaEmail',fld:'vUSUARIOSENHAEMAIL'},{av:'AV29UsuarioChaveEmail',fld:'vUSUARIOCHAVEEMAIL'},{av:'AV22UsuarioNoPortaSMTP',fld:'vUSUARIONOPORTASMTP'},{av:'AV20UsuarioRequerAutenticacao',fld:'vUSUARIOREQUERAUTENTICACAO'},{av:'AV52NomeDiretorio',fld:'vNOMEDIRETORIO'},{av:'AV12EmailRemetente',fld:'vEMAILREMETENTE'},{av:'AV28UsuarioNome',fld:'vUSUARIONOME'},{av:'AV14Assunto',fld:'vASSUNTO'},{av:'AV16Texto',fld:'vTEXTO'},{av:'AV15NomeAnexo',fld:'vNOMEANEXO'},{av:'AV42EmpresaLogadaId',fld:'vEMPRESALOGADAID'},{av:'AV73Pgmname',fld:'vPGMNAME'}],[{av:'AV37QuantEmails',fld:'vQUANTEMAILS'},{av:'AV77GXV2',fld:'vGXV2'},{av:'AV33EmailItem',fld:'vEMAILITEM'},{av:'AV54NomeAux',fld:'vNOMEAUX'},{av:'AV78GXV3',fld:'vGXV3'},{av:'AV62OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["GRIDEMAILS.LOAD"] = [[],[{av:'AV36bmpExcluir',fld:'vBMPEXCLUIR'},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:'vBMPEXCLUIR',prop:'Tooltiptext'},{ctrl:'vBMPEXCLUIR',prop:'Alternatetext'}]];
   this.EvtParms["'LIMPARCAMPOS'"] = [[{av:'AV34Emails',fld:'vEMAILS',grid:27},{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV58EmailResponsavel',fld:'vEMAILRESPONSAVEL'},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'}],[{av:'AV58EmailResponsavel',fld:'vEMAILRESPONSAVEL'},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'AV14Assunto',fld:'vASSUNTO'},{av:'AV16Texto',fld:'vTEXTO'},{av:'AV34Emails',fld:'vEMAILS',grid:27}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV38NomeAbsoluto',fld:'vNOMEABSOLUTO'}],[{av:'AV67Posicao',fld:'vPOSICAO'},{av:'AV66NomeRelativoAux',fld:'vNOMERELATIVOAUX'}]];
   this.EvtParms["'ADICIONAREMAIL'"] = [[{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'AV34Emails',fld:'vEMAILS',grid:27},{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV58EmailResponsavel',fld:'vEMAILRESPONSAVEL'}],[{av:'AV33EmailItem',fld:'vEMAILITEM'},{av:'AV34Emails',fld:'vEMAILS',grid:27},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'}]];
   this.EvtParms["'PROXIMAPAGINA'"] = [[{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'AV34Emails',fld:'vEMAILS',grid:27},{av:'subGridemails_Rows'},{av:'AV58EmailResponsavel',fld:'vEMAILRESPONSAVEL'},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'}],[]];
   this.EvtParms["'PAGINAANTERIOR'"] = [[{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'AV34Emails',fld:'vEMAILS',grid:27},{av:'subGridemails_Rows'},{av:'AV58EmailResponsavel',fld:'vEMAILRESPONSAVEL'},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'}],[]];
   this.EvtParms["'EXCLUIREMAIL'"] = [[{av:'AV34Emails',fld:'vEMAILS',grid:27},{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV58EmailResponsavel',fld:'vEMAILRESPONSAVEL'},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'}],[{av:'AV34Emails',fld:'vEMAILS',grid:27}]];
   this.setPrompt("BTNPROMPTPARA", [22]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV41PedidoCompraAno", "vPEDIDOCOMPRAANO", 0, "int");
   this.setVCMap("AV40PedidoCompraNumero", "vPEDIDOCOMPRANUMERO", 0, "int");
   this.setVCMap("AV59PedidoCompraPessoaId", "vPEDIDOCOMPRAPESSOAID", 0, "int");
   this.setVCMap("AV39AditivoSequencia", "vADITIVOSEQUENCIA", 0, "int");
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[22]);
   this.addGridBCProperty("Emails", ["EnderecoEmail"], this.GXValidFnc[29], "AV34Emails");
   this.InitStandaloneVars( );
});
gx.setParentObj(new henviaremailsolicitacaocompra());

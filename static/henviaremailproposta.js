/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 17:49:39.37
*/
gx.evt.autoSkip = false;
gx.define('henviaremailproposta', false, function () {
   this.ServerClass =  "henviaremailproposta" ;
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
      this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID") ;
      this.A443PessoaSituacao=gx.fn.getControlValue("PESSOASITUACAO") ;
      this.A445PessoaCliente=gx.fn.getControlValue("PESSOACLIENTE") ;
      this.A446PessoaFornecedor=gx.fn.getControlValue("PESSOAFORNECEDOR") ;
      this.A434PessoaEmail=gx.fn.getControlValue("PESSOAEMAIL") ;
      this.A162EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("EMPRESACLASSIFICACAOEMPRESAID") ;
      this.A54ClassificacaoId=gx.fn.getControlValue("CLASSIFICACAOID") ;
      this.A56OpcaoClassificacaoId=gx.fn.getControlValue("OPCAOCLASSIFICACAOID") ;
      this.AV34Emails=gx.fn.getControlValue("vEMAILS") ;
      this.AV47PessoaEmail=gx.fn.getControlValue("vPESSOAEMAIL") ;
      this.AV26RelatorioArquivo=gx.fn.getControlValue("vRELATORIOARQUIVO") ;
      this.AV27RelatorioLink=gx.fn.getControlValue("vRELATORIOLINK") ;
      this.AV60PropostaPessoaId=gx.fn.getIntegerValue("vPROPOSTAPESSOAID",'.') ;
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
   this.Validv_Empresapessoasempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESAPESSOASEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Empresaclassificacaoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vEMPRESACLASSIFICACAOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s125_client=function()
   {
      this.AV76GXV4 = gx.num.trunc( 1 ,0) ;
      while ( this.AV76GXV4 <= this.AV34Emails.length )
      {
         this.AV52EmailItemAux =  this.AV34Emails[this.AV76GXV4 - 1]  ;
         if ( gx.text.trim( gx.text.upper( this.AV52EmailItemAux.EnderecoEmail)) == gx.text.trim( gx.text.upper( this.AV47PessoaEmail)) )
         {
            this.AV49SnClassif =  "N"  ;
         }
         this.AV76GXV4 = gx.num.trunc( this.AV76GXV4 + 1 ,0) ;
      }
   };
   this.e111442_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e121442_client=function()
   {
      this.executeServerEvent("'LIMPARCAMPOS'", false, null, false, false);
   };
   this.e131442_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e141442_client=function()
   {
      this.executeServerEvent("'ADICIONAREMAIL'", true, null, false, false);
   };
   this.e181442_client=function()
   {
      this.executeServerEvent("'PROXIMAPAGINA'", true, arguments[0], false, false);
   };
   this.e191442_client=function()
   {
      this.executeServerEvent("'PAGINAANTERIOR'", true, arguments[0], false, false);
   };
   this.e201442_client=function()
   {
      this.executeServerEvent("'EXCLUIREMAIL'", true, arguments[0], false, false);
   };
   this.e151442_client=function()
   {
      this.executeServerEvent("'TODOSCONTATOS'", false, null, false, false);
   };
   this.e161442_client=function()
   {
      this.executeServerEvent("'EXCLUIRTODOS'", false, null, false, false);
   };
   this.e231442_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,8,10,16,17,19,24,26,27,28,34,36,40,42,43,50,58,59,60,61,62,63,64,65,66,70,71,72,73];
   this.GXLastCtrlId =73;
   this.GridemailsContainer = new gx.grid.grid(this, 2,"WbpLvl2",25,"Gridemails","Gridemails","GridemailsContainer",this.CmpContext,this.IsMasterPage,"henviaremailproposta",[],false,1,true,true,0,false,false,false,"CollSdtEmail.SdtEmailItem",0,"px","Novo registro",true,false,false,null,null,false,"AV34Emails",false,[1,1,1,1]);
   var GridemailsContainer = this.GridemailsContainer;
   GridemailsContainer.addBitmap("&Bmpexcluir","vBMPEXCLUIR",26,0,"px",17,"px","e201442_client","","Exc","Image","GridColumnImage");
   GridemailsContainer.addSingleLineEdit("GXV10R",27,"CTLENDERECOEMAIL","Endereço de Email","","EnderecoEmail","svchar",0,"px",60,60,"left",null,[],"GXV10R","GXV10R",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridemailsContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TXTPARA1", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILREMETENTE",gxz:"ZV12EmailRemetente",gxold:"OV12EmailRemetente",gxvar:"AV12EmailRemetente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmailRemetente=Value},v2z:function(Value){gx.O.ZV12EmailRemetente=Value},v2c:function(){gx.fn.setControlValue("vEMAILREMETENTE",gx.O.AV12EmailRemetente,0)},c2v:function(){gx.O.AV12EmailRemetente=this.val()},val:function(){return gx.fn.getControlValue("vEMAILREMETENTE")},nac:gx.falseFn};
   GXValidFnc[10]={fld:"ADICIONAREMAIL",grid:0};
   GXValidFnc[16]={fld:"TXTPARA", format:0,grid:0};
   GXValidFnc[17]={fld:"BTNPROMPTPARA",grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILDESTINATARIO",gxz:"ZV13EmailDestinatario",gxold:"OV13EmailDestinatario",gxvar:"AV13EmailDestinatario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13EmailDestinatario=Value},v2z:function(Value){gx.O.ZV13EmailDestinatario=Value},v2c:function(){gx.fn.setControlValue("vEMAILDESTINATARIO",gx.O.AV13EmailDestinatario,0)},c2v:function(){gx.O.AV13EmailDestinatario=this.val()},val:function(){return gx.fn.getControlValue("vEMAILDESTINATARIO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[26]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:25,gxgrid:this.GridemailsContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCLUIR",gxz:"ZV36bmpExcluir",gxold:"OV36bmpExcluir",gxvar:"AV36bmpExcluir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36bmpExcluir=Value},v2z:function(Value){gx.O.ZV36bmpExcluir=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCLUIR",row || gx.fn.currentGridRowImpl(25),gx.O.AV36bmpExcluir,gx.O.AV73Bmpexcluir_GXI)},c2v:function(){gx.O.AV73Bmpexcluir_GXI=this.val_GXI();gx.O.AV36bmpExcluir=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCLUIR",row || gx.fn.currentGridRowImpl(25))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCLUIR_GXI",row || gx.fn.currentGridRowImpl(25))}, gxvar_GXI:'AV73Bmpexcluir_GXI',nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.GridemailsContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLENDERECOEMAIL",gxz:"ZV66GXV10R",gxold:"OV66GXV10R",gxvar:"GXV10R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10R=Value},v2z:function(Value){gx.O.ZV66GXV10R=Value},v2c:function(row){gx.fn.setGridControlValue("CTLENDERECOEMAIL",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10R,0)},c2v:function(){gx.O.GXV10R=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLENDERECOEMAIL",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};
   GXValidFnc[28]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[34]={fld:"TXTPARA2", format:0,grid:0};
   GXValidFnc[36]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSUNTO",gxz:"ZV14Assunto",gxold:"OV14Assunto",gxvar:"AV14Assunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Assunto=Value},v2z:function(Value){gx.O.ZV14Assunto=Value},v2c:function(){gx.fn.setControlValue("vASSUNTO",gx.O.AV14Assunto,0)},c2v:function(){gx.O.AV14Assunto=this.val()},val:function(){return gx.fn.getControlValue("vASSUNTO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TXTPARA3", format:0,grid:0};
   GXValidFnc[42]={fld:"IMAGE2",grid:0};
   GXValidFnc[43]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEANEXO",gxz:"ZV15NomeAnexo",gxold:"OV15NomeAnexo",gxvar:"AV15NomeAnexo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15NomeAnexo=Value},v2z:function(Value){gx.O.ZV15NomeAnexo=Value},v2c:function(){gx.fn.setControlValue("vNOMEANEXO",gx.O.AV15NomeAnexo,0)},c2v:function(){gx.O.AV15NomeAnexo=this.val()},val:function(){return gx.fn.getControlValue("vNOMEANEXO")},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTEXTO",gxz:"ZV16Texto",gxold:"OV16Texto",gxvar:"AV16Texto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Texto=Value},v2z:function(Value){gx.O.ZV16Texto=Value},v2c:function(){gx.fn.setControlValue("vTEXTO",gx.O.AV16Texto,0)},c2v:function(){gx.O.AV16Texto=this.val()},val:function(){return gx.fn.getControlValue("vTEXTO")},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNGET",gxz:"ZV44SnGet",gxold:"OV44SnGet",gxvar:"AV44SnGet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44SnGet=Value},v2z:function(Value){gx.O.ZV44SnGet=Value},v2c:function(){gx.fn.setControlValue("vSNGET",gx.O.AV44SnGet,0)},c2v:function(){gx.O.AV44SnGet=this.val()},val:function(){return gx.fn.getControlValue("vSNGET")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNCANCELADO",gxz:"ZV43PessoaSnCancelado",gxold:"OV43PessoaSnCancelado",gxvar:"AV43PessoaSnCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43PessoaSnCancelado=Value},v2z:function(Value){gx.O.ZV43PessoaSnCancelado=Value},v2c:function(){gx.fn.setControlValue("vPESSOASNCANCELADO",gx.O.AV43PessoaSnCancelado,0)},c2v:function(){gx.O.AV43PessoaSnCancelado=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNCANCELADO")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNCLIENTE",gxz:"ZV45PessoaSnCliente",gxold:"OV45PessoaSnCliente",gxvar:"AV45PessoaSnCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45PessoaSnCliente=Value},v2z:function(Value){gx.O.ZV45PessoaSnCliente=Value},v2c:function(){gx.fn.setControlValue("vPESSOASNCLIENTE",gx.O.AV45PessoaSnCliente,0)},c2v:function(){gx.O.AV45PessoaSnCliente=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNCLIENTE")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNFORNECEDOR",gxz:"ZV46PessoaSnFornecedor",gxold:"OV46PessoaSnFornecedor",gxvar:"AV46PessoaSnFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46PessoaSnFornecedor=Value},v2z:function(Value){gx.O.ZV46PessoaSnFornecedor=Value},v2c:function(){gx.fn.setControlValue("vPESSOASNFORNECEDOR",gx.O.AV46PessoaSnFornecedor,0)},c2v:function(){gx.O.AV46PessoaSnFornecedor=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNFORNECEDOR")},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNSUSPENSO",gxz:"ZV42PessoaSnSuspenso",gxold:"OV42PessoaSnSuspenso",gxvar:"AV42PessoaSnSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42PessoaSnSuspenso=Value},v2z:function(Value){gx.O.ZV42PessoaSnSuspenso=Value},v2c:function(){gx.fn.setControlValue("vPESSOASNSUSPENSO",gx.O.AV42PessoaSnSuspenso,0)},c2v:function(){gx.O.AV42PessoaSnSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNSUSPENSO")},nac:gx.falseFn};
   GXValidFnc[63]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNNORMAL",gxz:"ZV41PessoaSnNormal",gxold:"OV41PessoaSnNormal",gxvar:"AV41PessoaSnNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41PessoaSnNormal=Value},v2z:function(Value){gx.O.ZV41PessoaSnNormal=Value},v2c:function(){gx.fn.setControlValue("vPESSOASNNORMAL",gx.O.AV41PessoaSnNormal,0)},c2v:function(){gx.O.AV41PessoaSnNormal=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNNORMAL")},nac:gx.falseFn};
   GXValidFnc[64]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOID",gxz:"ZV40OpcaoClassificacaoId",gxold:"OV40OpcaoClassificacaoId",gxvar:"AV40OpcaoClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40OpcaoClassificacaoId=Value},v2z:function(Value){gx.O.ZV40OpcaoClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("vOPCAOCLASSIFICACAOID",gx.O.AV40OpcaoClassificacaoId,0)},c2v:function(){gx.O.AV40OpcaoClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV39ClassificacaoId",gxold:"OV39ClassificacaoId",gxvar:"AV39ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ClassificacaoId=Value},v2z:function(Value){gx.O.ZV39ClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOID",gx.O.AV39ClassificacaoId,0)},c2v:function(){gx.O.AV39ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDNULO",gxz:"ZV38PessoaIdNulo",gxold:"OV38PessoaIdNulo",gxvar:"AV38PessoaIdNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38PessoaIdNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38PessoaIdNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDNULO",gx.O.AV38PessoaIdNulo,0)},c2v:function(){gx.O.AV38PessoaIdNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDNULO",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCLASSIF",gxz:"ZV49SnClassif",gxold:"OV49SnClassif",gxvar:"AV49SnClassif",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49SnClassif=Value},v2z:function(Value){gx.O.ZV49SnClassif=Value},v2c:function(){gx.fn.setControlValue("vSNCLASSIF",gx.O.AV49SnClassif,0)},c2v:function(){gx.O.AV49SnClassif=this.val()},val:function(){return gx.fn.getControlValue("vSNCLASSIF")},nac:gx.falseFn};
   GXValidFnc[71]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV51EmpresaPessoasEmpresaId",gxold:"OV51EmpresaPessoasEmpresaId",gxvar:"AV51EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV51EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV51EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV51EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNREFRESH",gxz:"ZV50SnRefresh",gxold:"OV50SnRefresh",gxvar:"AV50SnRefresh",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50SnRefresh=Value},v2z:function(Value){gx.O.ZV50SnRefresh=Value},v2c:function(){gx.fn.setControlValue("vSNREFRESH",gx.O.AV50SnRefresh,0)},c2v:function(){gx.O.AV50SnRefresh=this.val()},val:function(){return gx.fn.getControlValue("vSNREFRESH")},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaclassificacaoempresaid,isvalid:null,rgrid:[],fld:"vEMPRESACLASSIFICACAOEMPRESAID",gxz:"ZV48EmpresaClassificacaoEmpresaId",gxold:"OV48EmpresaClassificacaoEmpresaId",gxvar:"AV48EmpresaClassificacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48EmpresaClassificacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV48EmpresaClassificacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACLASSIFICACAOEMPRESAID",gx.O.AV48EmpresaClassificacaoEmpresaId,0)},c2v:function(){gx.O.AV48EmpresaClassificacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACLASSIFICACAOEMPRESAID")},nac:gx.falseFn};
   this.AV12EmailRemetente = "" ;
   this.ZV12EmailRemetente = "" ;
   this.OV12EmailRemetente = "" ;
   this.AV13EmailDestinatario = "" ;
   this.ZV13EmailDestinatario = "" ;
   this.OV13EmailDestinatario = "" ;
   this.ZV36bmpExcluir = "" ;
   this.OV36bmpExcluir = "" ;
   this.ZV66GXV10R = "" ;
   this.OV66GXV10R = "" ;
   this.AV14Assunto = "" ;
   this.ZV14Assunto = "" ;
   this.OV14Assunto = "" ;
   this.AV15NomeAnexo = "" ;
   this.ZV15NomeAnexo = "" ;
   this.OV15NomeAnexo = "" ;
   this.AV16Texto = "" ;
   this.ZV16Texto = "" ;
   this.OV16Texto = "" ;
   this.AV44SnGet = "" ;
   this.ZV44SnGet = "" ;
   this.OV44SnGet = "" ;
   this.AV43PessoaSnCancelado = "" ;
   this.ZV43PessoaSnCancelado = "" ;
   this.OV43PessoaSnCancelado = "" ;
   this.AV45PessoaSnCliente = "" ;
   this.ZV45PessoaSnCliente = "" ;
   this.OV45PessoaSnCliente = "" ;
   this.AV46PessoaSnFornecedor = "" ;
   this.ZV46PessoaSnFornecedor = "" ;
   this.OV46PessoaSnFornecedor = "" ;
   this.AV42PessoaSnSuspenso = "" ;
   this.ZV42PessoaSnSuspenso = "" ;
   this.OV42PessoaSnSuspenso = "" ;
   this.AV41PessoaSnNormal = "" ;
   this.ZV41PessoaSnNormal = "" ;
   this.OV41PessoaSnNormal = "" ;
   this.AV40OpcaoClassificacaoId = "" ;
   this.ZV40OpcaoClassificacaoId = "" ;
   this.OV40OpcaoClassificacaoId = "" ;
   this.AV39ClassificacaoId = "" ;
   this.ZV39ClassificacaoId = "" ;
   this.OV39ClassificacaoId = "" ;
   this.AV38PessoaIdNulo = 0 ;
   this.ZV38PessoaIdNulo = 0 ;
   this.OV38PessoaIdNulo = 0 ;
   this.AV49SnClassif = "" ;
   this.ZV49SnClassif = "" ;
   this.OV49SnClassif = "" ;
   this.AV51EmpresaPessoasEmpresaId = "" ;
   this.ZV51EmpresaPessoasEmpresaId = "" ;
   this.OV51EmpresaPessoasEmpresaId = "" ;
   this.AV50SnRefresh = "" ;
   this.ZV50SnRefresh = "" ;
   this.OV50SnRefresh = "" ;
   this.AV48EmpresaClassificacaoEmpresaId = "" ;
   this.ZV48EmpresaClassificacaoEmpresaId = "" ;
   this.OV48EmpresaClassificacaoEmpresaId = "" ;
   this.AV12EmailRemetente = "" ;
   this.AV13EmailDestinatario = "" ;
   this.AV14Assunto = "" ;
   this.AV15NomeAnexo = "" ;
   this.AV16Texto = "" ;
   this.AV44SnGet = "" ;
   this.AV43PessoaSnCancelado = "" ;
   this.AV45PessoaSnCliente = "" ;
   this.AV46PessoaSnFornecedor = "" ;
   this.AV42PessoaSnSuspenso = "" ;
   this.AV41PessoaSnNormal = "" ;
   this.AV40OpcaoClassificacaoId = "" ;
   this.AV39ClassificacaoId = "" ;
   this.AV38PessoaIdNulo = 0 ;
   this.AV49SnClassif = "" ;
   this.AV51EmpresaPessoasEmpresaId = "" ;
   this.AV50SnRefresh = "" ;
   this.AV48EmpresaClassificacaoEmpresaId = "" ;
   this.AV26RelatorioArquivo = "" ;
   this.AV27RelatorioLink = "" ;
   this.AV60PropostaPessoaId = 0 ;
   this.AV36bmpExcluir = "" ;
   this.GXV10R = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A434PessoaEmail = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A445PessoaCliente = "" ;
   this.A443PessoaSituacao = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A613UsuarioServidorEmailSMTP = "" ;
   this.A614UsuarioNoPortaSMTP = 0 ;
   this.A615UsuarioEmail = "" ;
   this.A616UsuarioNomeContaEmail = "" ;
   this.A617UsuarioSenhaEmail = "" ;
   this.A618UsuarioRequerAutenticacao = "" ;
   this.A2006UsuarioChaveEmail = "" ;
   this.AV34Emails = [ ] ;
   this.AV47PessoaEmail = "" ;
   this.AV52EmailItemAux = {} ;
   this.AV76GXV4 = 0 ;
   this.Events = {"e111442_client": ["ENTER", true] ,"e121442_client": ["'LIMPARCAMPOS'", true] ,"e131442_client": ["'CANCELAR'", true] ,"e141442_client": ["'ADICIONAREMAIL'", true] ,"e181442_client": ["'PROXIMAPAGINA'", true] ,"e191442_client": ["'PAGINAANTERIOR'", true] ,"e201442_client": ["'EXCLUIREMAIL'", true] ,"e151442_client": ["'TODOSCONTATOS'", true] ,"e161442_client": ["'EXCLUIRTODOS'", true] ,"e231442_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true}],[{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true},{av:'AV75GXLvl241',fld:'vGXLVL241'},{av:'AV49SnClassif',fld:'vSNCLASSIF'},{av:'AV33EmailItem',fld:'vEMAILITEM'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV76GXV4',fld:'vGXV4'},{av:'AV52EmailItemAux',fld:'vEMAILITEMAUX'}]];
   this.EvtParms["ENTER"] = [[{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'AV21UsuarioServidorEmailSMTP',fld:'vUSUARIOSERVIDOREMAILSMTP'},{av:'AV24UsuarioNomeContaEmail',fld:'vUSUARIONOMECONTAEMAIL'},{av:'AV25UsuarioSenhaEmail',fld:'vUSUARIOSENHAEMAIL'},{av:'AV29UsuarioChaveEmail',fld:'vUSUARIOCHAVEEMAIL'},{av:'AV22UsuarioNoPortaSMTP',fld:'vUSUARIONOPORTASMTP'},{av:'AV20UsuarioRequerAutenticacao',fld:'vUSUARIOREQUERAUTENTICACAO'},{av:'AV23UsuarioEmail',fld:'vUSUARIOEMAIL'},{av:'AV28UsuarioNome',fld:'vUSUARIONOME'},{av:'AV14Assunto',fld:'vASSUNTO'},{av:'AV16Texto',fld:'vTEXTO'},{av:'AV27RelatorioLink',fld:'vRELATORIOLINK',hsh:true},{av:'AV60PropostaPessoaId',fld:'vPROPOSTAPESSOAID'}],[{av:'AV37QuantEmails',fld:'vQUANTEMAILS'},{av:'AV71GXV2',fld:'vGXV2'},{av:'AV33EmailItem',fld:'vEMAILITEM'},{av:'AV72GXV3',fld:'vGXV3'}]];
   this.EvtParms["'LIMPARCAMPOS'"] = [[{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true}],[{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'AV14Assunto',fld:'vASSUNTO'},{av:'AV16Texto',fld:'vTEXTO'},{av:'AV34Emails',fld:'vEMAILS',grid:25}]];
   this.EvtParms["'CANCELAR'"] = [[{av:'AV60PropostaPessoaId',fld:'vPROPOSTAPESSOAID'},{av:'AV14Assunto',fld:'vASSUNTO'}],[]];
   this.EvtParms["'ADICIONAREMAIL'"] = [[{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'AV33EmailItem',fld:'vEMAILITEM'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true}],[{av:'AV33EmailItem',fld:'vEMAILITEM'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'}]];
   this.EvtParms["'PROXIMAPAGINA'"] = [[{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true}],[]];
   this.EvtParms["'PAGINAANTERIOR'"] = [[{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true}],[]];
   this.EvtParms["'EXCLUIREMAIL'"] = [[{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true}],[{av:'AV34Emails',fld:'vEMAILS',grid:25}]];
   this.EvtParms["GRIDEMAILS.LOAD"] = [[],[{av:'AV36bmpExcluir',fld:'vBMPEXCLUIR'},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:'vBMPEXCLUIR',prop:'Tooltiptext'},{ctrl:'vBMPEXCLUIR',prop:'Alternatetext'}]];
   this.EvtParms["'TODOSCONTATOS'"] = [[{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true}],[{av:'AV44SnGet',fld:'vSNGET'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'}]];
   this.EvtParms["'EXCLUIRTODOS'"] = [[{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true}],[{av:'AV34Emails',fld:'vEMAILS',grid:25}]];
   this.setPrompt("BTNPROMPTPARA", [19]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A443PessoaSituacao", "PESSOASITUACAO", 0, "char");
   this.setVCMap("A445PessoaCliente", "PESSOACLIENTE", 0, "char");
   this.setVCMap("A446PessoaFornecedor", "PESSOAFORNECEDOR", 0, "char");
   this.setVCMap("A434PessoaEmail", "PESSOAEMAIL", 0, "svchar");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV34Emails", "vEMAILS", 0, "CollSdtEmail.SdtEmailItem");
   this.setVCMap("AV47PessoaEmail", "vPESSOAEMAIL", 0, "svchar");
   this.setVCMap("AV26RelatorioArquivo", "vRELATORIOARQUIVO", 0, "svchar");
   this.setVCMap("AV27RelatorioLink", "vRELATORIOLINK", 0, "svchar");
   this.setVCMap("AV60PropostaPessoaId", "vPROPOSTAPESSOAID", 0, "int");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A443PessoaSituacao", "PESSOASITUACAO", 0, "char");
   this.setVCMap("A445PessoaCliente", "PESSOACLIENTE", 0, "char");
   this.setVCMap("A446PessoaFornecedor", "PESSOAFORNECEDOR", 0, "char");
   this.setVCMap("A434PessoaEmail", "PESSOAEMAIL", 0, "svchar");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV34Emails", "vEMAILS", 0, "CollSdtEmail.SdtEmailItem");
   this.setVCMap("AV47PessoaEmail", "vPESSOAEMAIL", 0, "svchar");
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridemailsContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[71]);
   GridemailsContainer.addRefreshingVar({rfrVar:"A443PessoaSituacao"});
   GridemailsContainer.addRefreshingVar({rfrVar:"A445PessoaCliente"});
   GridemailsContainer.addRefreshingVar({rfrVar:"A446PessoaFornecedor"});
   GridemailsContainer.addRefreshingVar({rfrVar:"A434PessoaEmail"});
   GridemailsContainer.addRefreshingVar({rfrVar:"A162EmpresaClassificacaoEmpresaId"});
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridemailsContainer.addRefreshingVar({rfrVar:"A54ClassificacaoId"});
   GridemailsContainer.addRefreshingVar({rfrVar:"A56OpcaoClassificacaoId"});
   GridemailsContainer.addRefreshingVar({rfrVar:"AV34Emails"});
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridemailsContainer.addRefreshingVar({rfrVar:"AV47PessoaEmail"});
   this.addGridBCProperty("Emails", ["EnderecoEmail"], this.GXValidFnc[27], "AV34Emails");
   this.InitStandaloneVars( );
});
gx.setParentObj(new henviaremailproposta());

/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:13:14.58
*/
gx.evt.autoSkip = false;
gx.define('henviaremail', false, function () {
   this.ServerClass =  "henviaremail" ;
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
      this.A71PessoaFantasia=gx.fn.getControlValue("PESSOAFANTASIA") ;
      this.A162EmpresaClassificacaoEmpresaId=gx.fn.getControlValue("EMPRESACLASSIFICACAOEMPRESAID") ;
      this.A54ClassificacaoId=gx.fn.getControlValue("CLASSIFICACAOID") ;
      this.A56OpcaoClassificacaoId=gx.fn.getControlValue("OPCAOCLASSIFICACAOID") ;
      this.AV34Emails=gx.fn.getControlValue("vEMAILS") ;
      this.AV93Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV81SdtTxtTela=gx.fn.getControlValue("vSDTTXTTELA") ;
      this.AV83EmpresaLogadaId=gx.fn.getControlValue("vEMPRESALOGADAID") ;
      this.AV84hasEmail=gx.fn.getControlValue("vHASEMAIL") ;
      this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",'.') ;
      this.AV47PessoaEmail=gx.fn.getControlValue("vPESSOAEMAIL") ;
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
   this.s158_client=function()
   {
      this.AV110GXV7 = gx.num.trunc( 1 ,0) ;
      while ( this.AV110GXV7 <= this.AV34Emails.length )
      {
         this.AV52EmailItemAux =  this.AV34Emails[this.AV110GXV7 - 1]  ;
         if ( gx.text.trim( gx.text.upper( this.AV52EmailItemAux.Address)) == gx.text.trim( gx.text.upper( this.AV47PessoaEmail)) )
         {
            this.AV49SnClassif =  "N"  ;
         }
         this.AV110GXV7 = gx.num.trunc( this.AV110GXV7 + 1 ,0) ;
      }
   };
   this.e11bb2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12bb2_client=function()
   {
      this.executeServerEvent("'LIMPARCAMPOS'", false, null, false, false);
   };
   this.e13bb2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e14bb2_client=function()
   {
      this.executeServerEvent("'ADICIONAREMAIL'", true, null, false, false);
   };
   this.e22bb2_client=function()
   {
      this.executeServerEvent("'PROXIMAPAGINA'", true, arguments[0], false, false);
   };
   this.e23bb2_client=function()
   {
      this.executeServerEvent("'PAGINAANTERIOR'", true, arguments[0], false, false);
   };
   this.e24bb2_client=function()
   {
      this.executeServerEvent("'EXCLUIREMAIL'", true, arguments[0], false, false);
   };
   this.e15bb2_client=function()
   {
      this.executeServerEvent("'TODOSCONTATOS'", false, null, false, false);
   };
   this.e16bb2_client=function()
   {
      this.executeServerEvent("BTNPROMPTPARA.CLICK", true, null, false, true);
   };
   this.e17bb2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTODOS'", false, null, false, false);
   };
   this.e18bb2_client=function()
   {
      this.executeServerEvent("'SALVARTXT'", true, null, false, false);
   };
   this.e19bb2_client=function()
   {
      this.executeServerEvent("VTXTTELA.CLICK", true, null, false, true);
   };
   this.e20bb2_client=function()
   {
      this.executeServerEvent("'EXCLUIRTXT'", true, null, false, false);
   };
   this.e28bb2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,6,8,10,16,17,19,24,26,27,28,29,35,37,42,46,51,55,63,66,69,71,73,75,78,85,86,87,88,89,90,91,92,93,94,98,99,100,101];
   this.GXLastCtrlId =101;
   this.GridemailsContainer = new gx.grid.grid(this, 2,"WbpLvl2",25,"Gridemails","Gridemails","GridemailsContainer",this.CmpContext,this.IsMasterPage,"henviaremail",[],false,1,true,true,0,false,false,false,"CollSdtEmailContato",0,"px","Novo registro",true,false,false,null,null,false,"AV34Emails",false,[1,1,1,1]);
   var GridemailsContainer = this.GridemailsContainer;
   GridemailsContainer.addSingleLineEdit("GXV10Q",26,"CTLNAME","Name","","Name","char",0,"px",50,50,"left",null,[],"GXV10Q","GXV10Q",false,0,false,false,"Attribute",1,"");
   GridemailsContainer.addSingleLineEdit("GXV10R",27,"CTLADDRESS","Endereço de Email","","Address","char",410,"px",100,80,"left",null,[],"GXV10R","GXV10R",true,0,false,false,"SemQuebraGrid",1,"");
   GridemailsContainer.addBitmap("&Bmpexcluir","vBMPEXCLUIR",28,0,"px",17,"px","e24bb2_client","","Exc","Image","GridColumnImage");
   this.setGrid(GridemailsContainer);
   this.Grid1Container = new gx.grid.grid(this, 10,"WbpLvl10",48,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"henviaremail",[],true,5,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","","","","","","","","","");
   Grid1Container.startTable("Table1",51,"0px");
   Grid1Container.addHtmlCode("<tbody>");
   Grid1Container.startRow("","","","","","");
   Grid1Container.startCell("","","","","","","","","","");
   Grid1Container.addBitmap("Image2","IMAGE2",54,0,"px",0,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit("Nomeanexo",55,"vNOMEANEXO","","","NomeAnexo","svchar",50,"chr",50,50,"left",null,[],"Nomeanexo","NomeAnexo",true,0,false,false,"AttributeSublinhado",1,"");
   Grid1Container.endCell();
   Grid1Container.startCell("","","","","","","10px","","","");
   Grid1Container.endCell();
   Grid1Container.endRow();
   Grid1Container.addHtmlCode("</tbody>");
   Grid1Container.endTable();
   Grid1Container.endCell();
   Grid1Container.endRow();
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[6]={fld:"TXTPARA1", format:0,grid:0};
   GXValidFnc[8]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILREMETENTE",gxz:"ZV12EmailRemetente",gxold:"OV12EmailRemetente",gxvar:"AV12EmailRemetente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmailRemetente=Value},v2z:function(Value){gx.O.ZV12EmailRemetente=Value},v2c:function(){gx.fn.setControlValue("vEMAILREMETENTE",gx.O.AV12EmailRemetente,0)},c2v:function(){gx.O.AV12EmailRemetente=this.val()},val:function(){return gx.fn.getControlValue("vEMAILREMETENTE")},nac:gx.falseFn};
   GXValidFnc[10]={fld:"ADICIONAREMAIL",grid:0};
   GXValidFnc[16]={fld:"TXTPARA", format:0,grid:0};
   GXValidFnc[17]={fld:"BTNPROMPTPARA",grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMAILDESTINATARIO",gxz:"ZV13EmailDestinatario",gxold:"OV13EmailDestinatario",gxvar:"AV13EmailDestinatario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13EmailDestinatario=Value},v2z:function(Value){gx.O.ZV13EmailDestinatario=Value},v2c:function(){gx.fn.setControlValue("vEMAILDESTINATARIO",gx.O.AV13EmailDestinatario,0)},c2v:function(){gx.O.AV13EmailDestinatario=this.val()},val:function(){return gx.fn.getControlValue("vEMAILDESTINATARIO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[26]={lvl:2,type:"char",len:50,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.GridemailsContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNAME",gxz:"ZV91GXV10Q",gxold:"OV91GXV10Q",gxvar:"GXV10Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10Q=Value},v2z:function(Value){gx.O.ZV91GXV10Q=Value},v2c:function(row){gx.fn.setGridControlValue("CTLNAME",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10Q,0)},c2v:function(){gx.O.GXV10Q=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLNAME",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"char",len:100,dec:0,sign:false,ro:0,isacc:0,grid:25,gxgrid:this.GridemailsContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLADDRESS",gxz:"ZV92GXV10R",gxold:"OV92GXV10R",gxvar:"GXV10R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10R=Value},v2z:function(Value){gx.O.ZV92GXV10R=Value},v2c:function(row){gx.fn.setGridControlValue("CTLADDRESS",row || gx.fn.currentGridRowImpl(25),gx.O.GXV10R,0)},c2v:function(){gx.O.GXV10R=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLADDRESS",row || gx.fn.currentGridRowImpl(25))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:25,gxgrid:this.GridemailsContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCLUIR",gxz:"ZV36bmpExcluir",gxold:"OV36bmpExcluir",gxvar:"AV36bmpExcluir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV36bmpExcluir=Value},v2z:function(Value){gx.O.ZV36bmpExcluir=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXCLUIR",row || gx.fn.currentGridRowImpl(25),gx.O.AV36bmpExcluir,gx.O.AV107Bmpexcluir_GXI)},c2v:function(){gx.O.AV107Bmpexcluir_GXI=this.val_GXI();gx.O.AV36bmpExcluir=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXCLUIR",row || gx.fn.currentGridRowImpl(25))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXCLUIR_GXI",row || gx.fn.currentGridRowImpl(25))}, gxvar_GXI:'AV107Bmpexcluir_GXI',nac:gx.falseFn};
   GXValidFnc[29]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[35]={fld:"TXTPARA2", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vASSUNTO",gxz:"ZV14Assunto",gxold:"OV14Assunto",gxvar:"AV14Assunto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14Assunto=Value},v2z:function(Value){gx.O.ZV14Assunto=Value},v2c:function(){gx.fn.setControlValue("vASSUNTO",gx.O.AV14Assunto,0)},c2v:function(){gx.O.AV14Assunto=this.val()},val:function(){return gx.fn.getControlValue("vASSUNTO")},nac:gx.falseFn};
   GXValidFnc[42]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vISCC",gxz:"ZV87isCC",gxold:"OV87isCC",gxvar:"AV87isCC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV87isCC=Value},v2z:function(Value){gx.O.ZV87isCC=Value},v2c:function(){gx.fn.setCheckBoxValue("vISCC",gx.O.AV87isCC,"S")},c2v:function(){gx.O.AV87isCC=this.val()},val:function(){return gx.fn.getControlValue("vISCC")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[46]={fld:"TXTPARA3", format:0,grid:0};
   GXValidFnc[51]={fld:"TABLE1",grid:48};
   GXValidFnc[55]={lvl:10,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNOMEANEXO",gxz:"ZV15NomeAnexo",gxold:"OV15NomeAnexo",gxvar:"AV15NomeAnexo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV15NomeAnexo=Value},v2z:function(Value){gx.O.ZV15NomeAnexo=Value},v2c:function(row){gx.fn.setGridControlValue("vNOMEANEXO",row || gx.fn.currentGridRowImpl(48),gx.O.AV15NomeAnexo,0)},c2v:function(){gx.O.AV15NomeAnexo=this.val()},val:function(row){return gx.fn.getGridControlValue("vNOMEANEXO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE3",grid:0};
   GXValidFnc[66]={fld:"TABTXT",grid:0};
   GXValidFnc[69]={fld:"TEXTBLOCK39", format:0,grid:0};
   GXValidFnc[71]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTXTTELA",gxz:"ZV78TxtTela",gxold:"OV78TxtTela",gxvar:"AV78TxtTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV78TxtTela=Value},v2z:function(Value){gx.O.ZV78TxtTela=Value},v2c:function(){gx.fn.setComboBoxValue("vTXTTELA",gx.O.AV78TxtTela)},c2v:function(){gx.O.AV78TxtTela=this.val()},val:function(){return gx.fn.getControlValue("vTXTTELA")},nac:gx.falseFn};
   GXValidFnc[73]={fld:"IMAGE3",grid:0};
   GXValidFnc[75]={fld:"IMGEXCTXTTELA",grid:0};
   GXValidFnc[78]={lvl:0,type:"svchar",len:2000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTEXTO",gxz:"ZV16Texto",gxold:"OV16Texto",gxvar:"AV16Texto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16Texto=Value},v2z:function(Value){gx.O.ZV16Texto=Value},v2c:function(){gx.fn.setControlValue("vTEXTO",gx.O.AV16Texto,0)},c2v:function(){gx.O.AV16Texto=this.val()},val:function(){return gx.fn.getControlValue("vTEXTO")},nac:gx.falseFn};
   GXValidFnc[85]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNGET",gxz:"ZV44SnGet",gxold:"OV44SnGet",gxvar:"AV44SnGet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44SnGet=Value},v2z:function(Value){gx.O.ZV44SnGet=Value},v2c:function(){gx.fn.setControlValue("vSNGET",gx.O.AV44SnGet,0)},c2v:function(){gx.O.AV44SnGet=this.val()},val:function(){return gx.fn.getControlValue("vSNGET")},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNCANCELADO",gxz:"ZV43PessoaSnCancelado",gxold:"OV43PessoaSnCancelado",gxvar:"AV43PessoaSnCancelado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43PessoaSnCancelado=Value},v2z:function(Value){gx.O.ZV43PessoaSnCancelado=Value},v2c:function(){gx.fn.setControlValue("vPESSOASNCANCELADO",gx.O.AV43PessoaSnCancelado,0)},c2v:function(){gx.O.AV43PessoaSnCancelado=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNCANCELADO")},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNCLIENTE",gxz:"ZV45PessoaSnCliente",gxold:"OV45PessoaSnCliente",gxvar:"AV45PessoaSnCliente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45PessoaSnCliente=Value},v2z:function(Value){gx.O.ZV45PessoaSnCliente=Value},v2c:function(){gx.fn.setControlValue("vPESSOASNCLIENTE",gx.O.AV45PessoaSnCliente,0)},c2v:function(){gx.O.AV45PessoaSnCliente=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNCLIENTE")},nac:gx.falseFn};
   GXValidFnc[88]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNFORNECEDOR",gxz:"ZV46PessoaSnFornecedor",gxold:"OV46PessoaSnFornecedor",gxvar:"AV46PessoaSnFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV46PessoaSnFornecedor=Value},v2z:function(Value){gx.O.ZV46PessoaSnFornecedor=Value},v2c:function(){gx.fn.setControlValue("vPESSOASNFORNECEDOR",gx.O.AV46PessoaSnFornecedor,0)},c2v:function(){gx.O.AV46PessoaSnFornecedor=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNFORNECEDOR")},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNSUSPENSO",gxz:"ZV42PessoaSnSuspenso",gxold:"OV42PessoaSnSuspenso",gxvar:"AV42PessoaSnSuspenso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42PessoaSnSuspenso=Value},v2z:function(Value){gx.O.ZV42PessoaSnSuspenso=Value},v2c:function(){gx.fn.setControlValue("vPESSOASNSUSPENSO",gx.O.AV42PessoaSnSuspenso,0)},c2v:function(){gx.O.AV42PessoaSnSuspenso=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNSUSPENSO")},nac:gx.falseFn};
   GXValidFnc[90]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOASNNORMAL",gxz:"ZV41PessoaSnNormal",gxold:"OV41PessoaSnNormal",gxvar:"AV41PessoaSnNormal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41PessoaSnNormal=Value},v2z:function(Value){gx.O.ZV41PessoaSnNormal=Value},v2c:function(){gx.fn.setControlValue("vPESSOASNNORMAL",gx.O.AV41PessoaSnNormal,0)},c2v:function(){gx.O.AV41PessoaSnNormal=this.val()},val:function(){return gx.fn.getControlValue("vPESSOASNNORMAL")},nac:gx.falseFn};
   GXValidFnc[91]={lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vOPCAOCLASSIFICACAOID",gxz:"ZV40OpcaoClassificacaoId",gxold:"OV40OpcaoClassificacaoId",gxvar:"AV40OpcaoClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40OpcaoClassificacaoId=Value},v2z:function(Value){gx.O.ZV40OpcaoClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("vOPCAOCLASSIFICACAOID",gx.O.AV40OpcaoClassificacaoId,0)},c2v:function(){gx.O.AV40OpcaoClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vOPCAOCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[92]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Classificacaoid,isvalid:null,rgrid:[],fld:"vCLASSIFICACAOID",gxz:"ZV39ClassificacaoId",gxold:"OV39ClassificacaoId",gxvar:"AV39ClassificacaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ClassificacaoId=Value},v2z:function(Value){gx.O.ZV39ClassificacaoId=Value},v2c:function(){gx.fn.setControlValue("vCLASSIFICACAOID",gx.O.AV39ClassificacaoId,0)},c2v:function(){gx.O.AV39ClassificacaoId=this.val()},val:function(){return gx.fn.getControlValue("vCLASSIFICACAOID")},nac:gx.falseFn};
   GXValidFnc[93]={lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPROCESSNAME",gxz:"ZV63ProcessName",gxold:"OV63ProcessName",gxvar:"AV63ProcessName",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV63ProcessName=Value},v2z:function(Value){gx.O.ZV63ProcessName=Value},v2c:function(){gx.fn.setControlValue("vPROCESSNAME",gx.O.AV63ProcessName,0)},c2v:function(){gx.O.AV63ProcessName=this.val()},val:function(){return gx.fn.getControlValue("vPROCESSNAME")},nac:gx.falseFn};
   GXValidFnc[94]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAIDNULO",gxz:"ZV38PessoaIdNulo",gxold:"OV38PessoaIdNulo",gxvar:"AV38PessoaIdNulo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38PessoaIdNulo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38PessoaIdNulo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAIDNULO",gx.O.AV38PessoaIdNulo,0)},c2v:function(){gx.O.AV38PessoaIdNulo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAIDNULO",'.')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCLASSIF",gxz:"ZV49SnClassif",gxold:"OV49SnClassif",gxvar:"AV49SnClassif",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49SnClassif=Value},v2z:function(Value){gx.O.ZV49SnClassif=Value},v2c:function(){gx.fn.setControlValue("vSNCLASSIF",gx.O.AV49SnClassif,0)},c2v:function(){gx.O.AV49SnClassif=this.val()},val:function(){return gx.fn.getControlValue("vSNCLASSIF")},nac:gx.falseFn};
   GXValidFnc[99]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresapessoasempresaid,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV51EmpresaPessoasEmpresaId",gxold:"OV51EmpresaPessoasEmpresaId",gxvar:"AV51EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV51EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV51EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV51EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[100]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNREFRESH",gxz:"ZV50SnRefresh",gxold:"OV50SnRefresh",gxvar:"AV50SnRefresh",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50SnRefresh=Value},v2z:function(Value){gx.O.ZV50SnRefresh=Value},v2c:function(){gx.fn.setControlValue("vSNREFRESH",gx.O.AV50SnRefresh,0)},c2v:function(){gx.O.AV50SnRefresh=this.val()},val:function(){return gx.fn.getControlValue("vSNREFRESH")},nac:gx.falseFn};
   GXValidFnc[101]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Empresaclassificacaoempresaid,isvalid:null,rgrid:[],fld:"vEMPRESACLASSIFICACAOEMPRESAID",gxz:"ZV48EmpresaClassificacaoEmpresaId",gxold:"OV48EmpresaClassificacaoEmpresaId",gxvar:"AV48EmpresaClassificacaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48EmpresaClassificacaoEmpresaId=Value},v2z:function(Value){gx.O.ZV48EmpresaClassificacaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESACLASSIFICACAOEMPRESAID",gx.O.AV48EmpresaClassificacaoEmpresaId,0)},c2v:function(){gx.O.AV48EmpresaClassificacaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESACLASSIFICACAOEMPRESAID")},nac:gx.falseFn};
   this.AV12EmailRemetente = "" ;
   this.ZV12EmailRemetente = "" ;
   this.OV12EmailRemetente = "" ;
   this.AV13EmailDestinatario = "" ;
   this.ZV13EmailDestinatario = "" ;
   this.OV13EmailDestinatario = "" ;
   this.ZV91GXV10Q = "" ;
   this.OV91GXV10Q = "" ;
   this.ZV92GXV10R = "" ;
   this.OV92GXV10R = "" ;
   this.ZV36bmpExcluir = "" ;
   this.OV36bmpExcluir = "" ;
   this.AV14Assunto = "" ;
   this.ZV14Assunto = "" ;
   this.OV14Assunto = "" ;
   this.AV87isCC = "" ;
   this.ZV87isCC = "" ;
   this.OV87isCC = "" ;
   this.ZV15NomeAnexo = "" ;
   this.OV15NomeAnexo = "" ;
   this.AV78TxtTela = "" ;
   this.ZV78TxtTela = "" ;
   this.OV78TxtTela = "" ;
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
   this.AV63ProcessName = "" ;
   this.ZV63ProcessName = "" ;
   this.OV63ProcessName = "" ;
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
   this.AV87isCC = "" ;
   this.AV78TxtTela = "" ;
   this.AV16Texto = "" ;
   this.AV44SnGet = "" ;
   this.AV43PessoaSnCancelado = "" ;
   this.AV45PessoaSnCliente = "" ;
   this.AV46PessoaSnFornecedor = "" ;
   this.AV42PessoaSnSuspenso = "" ;
   this.AV41PessoaSnNormal = "" ;
   this.AV40OpcaoClassificacaoId = "" ;
   this.AV39ClassificacaoId = "" ;
   this.AV63ProcessName = "" ;
   this.AV38PessoaIdNulo = 0 ;
   this.AV49SnClassif = "" ;
   this.AV51EmpresaPessoasEmpresaId = "" ;
   this.AV50SnRefresh = "" ;
   this.AV48EmpresaClassificacaoEmpresaId = "" ;
   this.GXV10Q = "" ;
   this.GXV10R = "" ;
   this.AV36bmpExcluir = "" ;
   this.AV15NomeAnexo = "" ;
   this.A69PessoaId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A434PessoaEmail = "" ;
   this.A446PessoaFornecedor = "" ;
   this.A445PessoaCliente = "" ;
   this.A443PessoaSituacao = "" ;
   this.A71PessoaFantasia = "" ;
   this.A56OpcaoClassificacaoId = "" ;
   this.A54ClassificacaoId = "" ;
   this.A162EmpresaClassificacaoEmpresaId = "" ;
   this.A10755RelatorioUsuarioNome = "" ;
   this.A10757RelatorioUsuarioAssunto = "" ;
   this.A10758RelatorioUsuarioCorpo = "" ;
   this.A10756RelatorioUsuarioEmail = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A614UsuarioNoPortaSMTP = 0 ;
   this.A613UsuarioServidorEmailSMTP = "" ;
   this.A615UsuarioEmail = "" ;
   this.A616UsuarioNomeContaEmail = "" ;
   this.A2006UsuarioChaveEmail = "" ;
   this.A617UsuarioSenhaEmail = "" ;
   this.A618UsuarioRequerAutenticacao = "" ;
   this.A3119UsuarioSnSeguranca = "" ;
   this.A9827UsuarioSnTLS = "" ;
   this.A608UsuarioChave = "" ;
   this.AV34Emails = [ ] ;
   this.AV93Pgmname = "" ;
   this.AV81SdtTxtTela = [ ] ;
   this.AV83EmpresaLogadaId = "" ;
   this.AV84hasEmail = false ;
   this.AV47PessoaEmail = "" ;
   this.AV52EmailItemAux = {} ;
   this.AV110GXV7 = 0 ;
   this.Events = {"e11bb2_client": ["ENTER", true] ,"e12bb2_client": ["'LIMPARCAMPOS'", true] ,"e13bb2_client": ["'CANCELAR'", true] ,"e14bb2_client": ["'ADICIONAREMAIL'", true] ,"e22bb2_client": ["'PROXIMAPAGINA'", true] ,"e23bb2_client": ["'PAGINAANTERIOR'", true] ,"e24bb2_client": ["'EXCLUIREMAIL'", true] ,"e15bb2_client": ["'TODOSCONTATOS'", true] ,"e16bb2_client": ["BTNPROMPTPARA.CLICK", true] ,"e17bb2_client": ["'EXCLUIRTODOS'", true] ,"e18bb2_client": ["'SALVARTXT'", true] ,"e19bb2_client": ["VTXTTELA.CLICK", true] ,"e20bb2_client": ["'EXCLUIRTXT'", true] ,"e28bb2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV69SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV63ProcessName',fld:'vPROCESSNAME'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV81SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV83EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV84hasEmail',fld:'vHASEMAIL',hsh:true},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV38PessoaIdNulo',fld:'vPESSOAIDNULO'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true},{av:'AV78TxtTela',fld:'vTXTTELA'}],[{av:'AV62SdtAguarda',fld:'vSDTAGUARDA'},{av:'AV63ProcessName',fld:'vPROCESSNAME'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true},{av:'AV59PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV109GXLvl374',fld:'vGXLVL374'},{av:'AV49SnClassif',fld:'vSNCLASSIF'},{av:'AV33EmailItem',fld:'vEMAILITEM'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV78TxtTela',fld:'vTXTTELA'},{av:'AV113GXV10',fld:'vGXV10'},{av:'AV82SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV58Destinatario',fld:'vDESTINATARIO'},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'AV38PessoaIdNulo',fld:'vPESSOAIDNULO'},{av:'AV110GXV7',fld:'vGXV7'},{av:'AV52EmailItemAux',fld:'vEMAILITEMAUX'},{av:'AV112GXV9',fld:'vGXV9'},{av:'AV16Texto',fld:'vTEXTO'},{av:'AV14Assunto',fld:'vASSUNTO'}]];
   this.EvtParms["ENTER"] = [[{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV12EmailRemetente',fld:'vEMAILREMETENTE'},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'AV14Assunto',fld:'vASSUNTO'},{av:'AV16Texto',fld:'vTEXTO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV103Udparg1',fld:'vUDPARG1'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV21UsuarioServidorEmailSMTP',fld:'vUSUARIOSERVIDOREMAILSMTP'},{av:'AV24UsuarioNomeContaEmail',fld:'vUSUARIONOMECONTAEMAIL'},{av:'AV29UsuarioChaveEmail',fld:'vUSUARIOCHAVEEMAIL'},{av:'AV25UsuarioSenhaEmail',fld:'vUSUARIOSENHAEMAIL'},{av:'AV22UsuarioNoPortaSMTP',fld:'vUSUARIONOPORTASMTP'},{av:'AV23UsuarioEmail',fld:'vUSUARIOEMAIL'},{av:'AV28UsuarioNome',fld:'vUSUARIONOME'},{av:'AV20UsuarioRequerAutenticacao',fld:'vUSUARIOREQUERAUTENTICACAO'},{av:'AV70UsuarioSnSeguranca',fld:'vUSUARIOSNSEGURANCA'},{av:'AV71UsuarioSnTLS',fld:'vUSUARIOSNTLS'},{av:'Gx_time',fld:'vTIME'},{av:'AV87isCC',fld:'vISCC'}],[{av:'AV37QuantEmails',fld:'vQUANTEMAILS'},{av:'AV100GXV4',fld:'vGXV4'},{av:'AV33EmailItem',fld:'vEMAILITEM'},{av:'AV73Chr',fld:'vCHR'},{av:'AV74Split',fld:'vSPLIT'},{av:'AV75CorpoTexto',fld:'vCORPOTEXTO'},{av:'AV101GXV5',fld:'vGXV5'},{av:'AV76textoEmail',fld:'vTEXTOEMAIL'},{av:'AV102GXLvl184',fld:'vGXLVL184'},{av:'AV57SdtEnviaEmail',fld:'vSDTENVIAEMAIL'},{av:'AV69SdtParmEmail',fld:'vSDTPARMEMAIL'},{av:'AV104GXV6',fld:'vGXV6'},{av:'AV27RelatorioLink',fld:'vRELATORIOLINK'},{av:'AV63ProcessName',fld:'vPROCESSNAME'},{av:'AV66Path',fld:'vPATH'},{av:'AV61FileName',fld:'vFILENAME'},{av:'AV62SdtAguarda',fld:'vSDTAGUARDA'},{av:'AV87isCC',fld:'vISCC'}]];
   this.EvtParms["'LIMPARCAMPOS'"] = [[{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV63ProcessName',fld:'vPROCESSNAME'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV81SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV83EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV84hasEmail',fld:'vHASEMAIL',hsh:true},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV38PessoaIdNulo',fld:'vPESSOAIDNULO'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true},{av:'AV78TxtTela',fld:'vTXTTELA'}],[{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'AV14Assunto',fld:'vASSUNTO'},{av:'AV16Texto',fld:'vTEXTO'},{av:'AV34Emails',fld:'vEMAILS',grid:25}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EvtParms["'ADICIONAREMAIL'"] = [[{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV38PessoaIdNulo',fld:'vPESSOAIDNULO'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV63ProcessName',fld:'vPROCESSNAME'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV81SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV83EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV84hasEmail',fld:'vHASEMAIL',hsh:true},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true},{av:'AV78TxtTela',fld:'vTXTTELA'}],[{av:'AV58Destinatario',fld:'vDESTINATARIO'},{av:'AV33EmailItem',fld:'vEMAILITEM'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'AV38PessoaIdNulo',fld:'vPESSOAIDNULO'}]];
   this.EvtParms["'PROXIMAPAGINA'"] = [[{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV63ProcessName',fld:'vPROCESSNAME'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV81SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV83EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV84hasEmail',fld:'vHASEMAIL',hsh:true},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV38PessoaIdNulo',fld:'vPESSOAIDNULO'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true},{av:'AV78TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["'PAGINAANTERIOR'"] = [[{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV63ProcessName',fld:'vPROCESSNAME'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV81SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV83EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV84hasEmail',fld:'vHASEMAIL',hsh:true},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV38PessoaIdNulo',fld:'vPESSOAIDNULO'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true},{av:'AV78TxtTela',fld:'vTXTTELA'}],[]];
   this.EvtParms["'EXCLUIREMAIL'"] = [[{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV63ProcessName',fld:'vPROCESSNAME'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV81SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV83EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV84hasEmail',fld:'vHASEMAIL',hsh:true},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV38PessoaIdNulo',fld:'vPESSOAIDNULO'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true},{av:'AV78TxtTela',fld:'vTXTTELA'}],[{av:'AV34Emails',fld:'vEMAILS',grid:25}]];
   this.EvtParms["GRIDEMAILS.LOAD"] = [[],[{av:'AV36bmpExcluir',fld:'vBMPEXCLUIR'},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:'vBMPEXCLUIR',prop:'Tooltiptext'},{ctrl:'vBMPEXCLUIR',prop:'Alternatetext'}]];
   this.EvtParms["'TODOSCONTATOS'"] = [[{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV63ProcessName',fld:'vPROCESSNAME'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV81SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV83EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV84hasEmail',fld:'vHASEMAIL',hsh:true},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV38PessoaIdNulo',fld:'vPESSOAIDNULO'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true},{av:'AV78TxtTela',fld:'vTXTTELA'}],[{av:'AV44SnGet',fld:'vSNGET'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'}]];
   this.EvtParms["BTNPROMPTPARA.CLICK"] = [[{av:'AV38PessoaIdNulo',fld:'vPESSOAIDNULO'},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'}],[{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'}]];
   this.EvtParms["'EXCLUIRTODOS'"] = [[{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV63ProcessName',fld:'vPROCESSNAME'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV81SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV83EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV84hasEmail',fld:'vHASEMAIL',hsh:true},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV38PessoaIdNulo',fld:'vPESSOAIDNULO'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true},{av:'AV78TxtTela',fld:'vTXTTELA'}],[{av:'AV34Emails',fld:'vEMAILS',grid:25}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'AV69SdtParmEmail',fld:'vSDTPARMEMAIL'}],[{av:'AV15NomeAnexo',fld:'vNOMEANEXO'}]];
   this.EvtParms["'SALVARTXT'"] = [[{av:'GRIDEMAILS_nFirstRecordOnPage'},{av:'GRIDEMAILS_nEOF'},{av:'subGridemails_Rows'},{av:'AV63ProcessName',fld:'vPROCESSNAME'},{av:'AV50SnRefresh',fld:'vSNREFRESH'},{av:'AV39ClassificacaoId',fld:'vCLASSIFICACAOID'},{av:'AV40OpcaoClassificacaoId',fld:'vOPCAOCLASSIFICACAOID'},{av:'AV45PessoaSnCliente',fld:'vPESSOASNCLIENTE'},{av:'AV46PessoaSnFornecedor',fld:'vPESSOASNFORNECEDOR'},{av:'AV41PessoaSnNormal',fld:'vPESSOASNNORMAL'},{av:'AV42PessoaSnSuspenso',fld:'vPESSOASNSUSPENSO'},{av:'AV43PessoaSnCancelado',fld:'vPESSOASNCANCELADO'},{av:'A227EmpresaPessoasEmpresaId',fld:'EMPRESAPESSOASEMPRESAID'},{av:'AV51EmpresaPessoasEmpresaId',fld:'vEMPRESAPESSOASEMPRESAID'},{av:'A443PessoaSituacao',fld:'PESSOASITUACAO'},{av:'A445PessoaCliente',fld:'PESSOACLIENTE'},{av:'A446PessoaFornecedor',fld:'PESSOAFORNECEDOR'},{av:'A434PessoaEmail',fld:'PESSOAEMAIL'},{av:'A71PessoaFantasia',fld:'PESSOAFANTASIA'},{av:'A162EmpresaClassificacaoEmpresaId',fld:'EMPRESACLASSIFICACAOEMPRESAID'},{av:'AV48EmpresaClassificacaoEmpresaId',fld:'vEMPRESACLASSIFICACAOEMPRESAID'},{av:'A54ClassificacaoId',fld:'CLASSIFICACAOID'},{av:'A56OpcaoClassificacaoId',fld:'OPCAOCLASSIFICACAOID'},{av:'AV34Emails',fld:'vEMAILS',grid:25},{av:'AV44SnGet',fld:'vSNGET'},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV81SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV83EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV84hasEmail',fld:'vHASEMAIL',hsh:true},{av:'AV13EmailDestinatario',fld:'vEMAILDESTINATARIO'},{av:'A69PessoaId',fld:'PESSOAID'},{av:'AV38PessoaIdNulo',fld:'vPESSOAIDNULO'},{av:'AV47PessoaEmail',fld:'vPESSOAEMAIL',hsh:true},{av:'AV78TxtTela',fld:'vTXTTELA'},{av:'AV16Texto',fld:'vTEXTO'},{av:'AV14Assunto',fld:'vASSUNTO'}],[{av:'AV80OpcoesTxtTela',fld:'vOPCOESTXTTELA'}]];
   this.EvtParms["VTXTTELA.CLICK"] = [[{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV81SdtTxtTela',fld:'vSDTTXTTELA'},{av:'AV78TxtTela',fld:'vTXTTELA'},{av:'AV83EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV84hasEmail',fld:'vHASEMAIL',hsh:true}],[{av:'AV112GXV9',fld:'vGXV9'},{av:'AV82SdtTxtTelaItem',fld:'vSDTTXTTELAITEM'},{av:'AV16Texto',fld:'vTEXTO'},{av:'AV14Assunto',fld:'vASSUNTO'}]];
   this.EvtParms["'EXCLUIRTXT'"] = [[{av:'AV83EmpresaLogadaId',fld:'vEMPRESALOGADAID',hsh:true},{av:'AV93Pgmname',fld:'vPGMNAME'},{av:'AV78TxtTela',fld:'vTXTTELA'}],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A443PessoaSituacao", "PESSOASITUACAO", 0, "char");
   this.setVCMap("A445PessoaCliente", "PESSOACLIENTE", 0, "char");
   this.setVCMap("A446PessoaFornecedor", "PESSOAFORNECEDOR", 0, "char");
   this.setVCMap("A434PessoaEmail", "PESSOAEMAIL", 0, "svchar");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV34Emails", "vEMAILS", 0, "CollSdtEmailContato");
   this.setVCMap("AV93Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV81SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV83EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV84hasEmail", "vHASEMAIL", 0, "boolean");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("AV47PessoaEmail", "vPESSOAEMAIL", 0, "svchar");
   this.setVCMap("A227EmpresaPessoasEmpresaId", "EMPRESAPESSOASEMPRESAID", 0, "char");
   this.setVCMap("A443PessoaSituacao", "PESSOASITUACAO", 0, "char");
   this.setVCMap("A445PessoaCliente", "PESSOACLIENTE", 0, "char");
   this.setVCMap("A446PessoaFornecedor", "PESSOAFORNECEDOR", 0, "char");
   this.setVCMap("A434PessoaEmail", "PESSOAEMAIL", 0, "svchar");
   this.setVCMap("A71PessoaFantasia", "PESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A162EmpresaClassificacaoEmpresaId", "EMPRESACLASSIFICACAOEMPRESAID", 0, "char");
   this.setVCMap("A54ClassificacaoId", "CLASSIFICACAOID", 0, "char");
   this.setVCMap("A56OpcaoClassificacaoId", "OPCAOCLASSIFICACAOID", 0, "char");
   this.setVCMap("AV34Emails", "vEMAILS", 0, "CollSdtEmailContato");
   this.setVCMap("AV93Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV81SdtTxtTela", "vSDTTXTTELA", 0, "CollSdtTxtTela.SdtTxtTelaItem");
   this.setVCMap("AV83EmpresaLogadaId", "vEMPRESALOGADAID", 0, "char");
   this.setVCMap("AV84hasEmail", "vHASEMAIL", 0, "boolean");
   this.setVCMap("A69PessoaId", "PESSOAID", 0, "int");
   this.setVCMap("AV47PessoaEmail", "vPESSOAEMAIL", 0, "svchar");
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[100]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[92]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[91]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[90]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[86]);
   GridemailsContainer.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[99]);
   GridemailsContainer.addRefreshingVar({rfrVar:"A443PessoaSituacao"});
   GridemailsContainer.addRefreshingVar({rfrVar:"A445PessoaCliente"});
   GridemailsContainer.addRefreshingVar({rfrVar:"A446PessoaFornecedor"});
   GridemailsContainer.addRefreshingVar({rfrVar:"A434PessoaEmail"});
   GridemailsContainer.addRefreshingVar({rfrVar:"A71PessoaFantasia"});
   GridemailsContainer.addRefreshingVar({rfrVar:"A162EmpresaClassificacaoEmpresaId"});
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[101]);
   GridemailsContainer.addRefreshingVar({rfrVar:"A54ClassificacaoId"});
   GridemailsContainer.addRefreshingVar({rfrVar:"A56OpcaoClassificacaoId"});
   GridemailsContainer.addRefreshingVar({rfrVar:"AV34Emails"});
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridemailsContainer.addRefreshingVar({rfrVar:"AV93Pgmname"});
   GridemailsContainer.addRefreshingVar({rfrVar:"AV81SdtTxtTela"});
   GridemailsContainer.addRefreshingVar({rfrVar:"AV83EmpresaLogadaId"});
   GridemailsContainer.addRefreshingVar({rfrVar:"AV84hasEmail"});
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridemailsContainer.addRefreshingVar({rfrVar:"A69PessoaId"});
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridemailsContainer.addRefreshingVar({rfrVar:"AV47PessoaEmail"});
   GridemailsContainer.addRefreshingVar(this.GXValidFnc[71]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[93]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[100]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[92]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[91]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[87]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[88]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[90]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[89]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[86]);
   Grid1Container.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[99]);
   Grid1Container.addRefreshingVar({rfrVar:"A443PessoaSituacao"});
   Grid1Container.addRefreshingVar({rfrVar:"A445PessoaCliente"});
   Grid1Container.addRefreshingVar({rfrVar:"A446PessoaFornecedor"});
   Grid1Container.addRefreshingVar({rfrVar:"A434PessoaEmail"});
   Grid1Container.addRefreshingVar({rfrVar:"A71PessoaFantasia"});
   Grid1Container.addRefreshingVar({rfrVar:"A162EmpresaClassificacaoEmpresaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[101]);
   Grid1Container.addRefreshingVar({rfrVar:"A54ClassificacaoId"});
   Grid1Container.addRefreshingVar({rfrVar:"A56OpcaoClassificacaoId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV34Emails"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[85]);
   Grid1Container.addRefreshingVar({rfrVar:"AV93Pgmname"});
   Grid1Container.addRefreshingVar({rfrVar:"AV81SdtTxtTela"});
   Grid1Container.addRefreshingVar({rfrVar:"AV83EmpresaLogadaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV84hasEmail"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar({rfrVar:"A69PessoaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[94]);
   Grid1Container.addRefreshingVar({rfrVar:"AV47PessoaEmail"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[71]);
   Grid1Container.addRefreshingVar({rfrVar:"AV69SdtParmEmail"});
   this.addGridBCProperty("Emails", ["Name"], this.GXValidFnc[26], "AV34Emails");
   this.addGridBCProperty("Emails", ["Address"], this.GXValidFnc[27], "AV34Emails");
   this.InitStandaloneVars( );
});
gx.setParentObj(new henviaremail());

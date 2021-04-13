/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:49:33.92
*/
gx.evt.autoSkip = false;
gx.define('hregistrarliberacao', false, function () {
   this.ServerClass =  "hregistrarliberacao" ;
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
      this.AV8PermissaoConcNoAgrupamento=gx.fn.getIntegerValue("vPERMISSAOCONCNOAGRUPAMENTO",'.') ;
      this.AV5SdtPermissao=gx.fn.getControlValue("vSDTPERMISSAO") ;
      this.A568TipoPermissaoId=gx.fn.getIntegerValue("TIPOPERMISSAOID",'.') ;
      this.A557TipoPermissaoDescricao=gx.fn.getControlValue("TIPOPERMISSAODESCRICAO") ;
   };
   this.e11ld2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12ld2_client=function()
   {
      this.executeServerEvent("'RECUSAR'", false, null, false, false);
   };
   this.e18ld2_client=function()
   {
      this.executeServerEvent("'MSGDET'", true, arguments[0], false, false);
   };
   this.e13ld2_client=function()
   {
      this.executeServerEvent("'SAIR'", false, null, false, false);
   };
   this.e14ld2_client=function()
   {
      this.executeServerEvent("'DESMARCARTODOS'", false, null, false, false);
   };
   this.e15ld2_client=function()
   {
      this.executeServerEvent("'SELECIONARTODOS'", false, null, false, false);
   };
   this.e20ld2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,13,15,16,17,18,19,20,21,22,23,24,25,26,35,36];
   this.GXLastCtrlId =36;
   this.GrdpermContainer = new gx.grid.grid(this, 2,"WbpLvl2",14,"Grdperm","Grdperm","GrdpermContainer",this.CmpContext,this.IsMasterPage,"hregistrarliberacao",[],false,1,true,true,0,true,false,false,"CollSdtPermissao.SdtPermissaoItem",0,"px","Novo registro",true,false,true,null,null,false,"AV5SdtPermissao",false,[1,1,1,1]);
   var GrdpermContainer = this.GrdpermContainer;
   GrdpermContainer.addCheckBox("GXV10F",15,"CTLSNMARCADO","","","SnMarcado","char","S","N",null,true,false,0,"px","GridColumnImage");
   GrdpermContainer.addSingleLineEdit("GXV10G",16,"CTLUSUARIO","Usuário","","Usuario","char",0,"px",12,12,"left",null,[],"GXV10G","GXV10G",true,0,false,false,"Attribute",1,"");
   GrdpermContainer.addSingleLineEdit("GXV10H",17,"CTLNUMEROSOLICITACAO","Cód.","","NumeroSolicitacao","int",0,"px",8,8,"right",null,[],"GXV10H","GXV10H",true,0,false,false,"Attribute",1,"");
   GrdpermContainer.addSingleLineEdit("Tipopermissaodescricao",18,"vTIPOPERMISSAODESCRICAO","Tipo de Permissão","","TipoPermissaoDescricao","svchar",0,"px",80,80,"left",null,[],"Tipopermissaodescricao","TipoPermissaoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GrdpermContainer.addSingleLineEdit("Tipopermissaomensagemsenha",19,"vTIPOPERMISSAOMENSAGEMSENHA","Mensagem","","TipoPermissaoMensagemSenha","svchar",0,"px",180,80,"left",null,[],"Tipopermissaomensagemsenha","TipoPermissaoMensagemSenha",true,0,false,false,"SemQuebraGrid",1,"");
   GrdpermContainer.addBitmap("&Bmpmsgdet","vBMPMSGDET",20,0,"px",17,"px","e18ld2_client","","","Image","GridColumnImage");
   GrdpermContainer.addSingleLineEdit("GXV10L",21,"CTLMSGDETALHADA","Observação","","MsgDetalhada","vchar",0,"px",9000,80,"left",null,[],"GXV10L","GXV10L",false,0,false,false,"Attribute",1,"");
   GrdpermContainer.addSingleLineEdit("GXV10M",22,"CTLSNLIBERADO","Sn Liberado","","SnLiberado","char",0,"px",1,1,"left",null,[],"GXV10M","GXV10M",false,0,false,false,"Attribute",1,"");
   GrdpermContainer.addSingleLineEdit("GXV10N",23,"CTLTIPOVERIFICACAO","Tipo Verificacao","","TipoVerificacao","char",0,"px",1,1,"left",null,[],"GXV10N","GXV10N",false,0,false,false,"Attribute",1,"");
   GrdpermContainer.addSingleLineEdit("GXV10O",24,"CTLUSUARIONOME","Nome do Usuario","","UsuarioNome","svchar",0,"px",35,35,"left",null,[],"GXV10O","GXV10O",false,0,false,false,"Attribute",1,"");
   GrdpermContainer.addSingleLineEdit("GXV10P",25,"CTLTIPOPERMISSAO","Código Tipo Termissão","","TipoPermissao","int",0,"px",4,4,"right",null,[],"GXV10P","GXV10P",false,0,false,false,"Attribute",1,"");
   this.setGrid(GrdpermContainer);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[5]={fld:"TABMARCARDESMARCAR",grid:0};
   GXValidFnc[13]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[15]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNMARCADO",gxz:"ZV30GXV10F",gxold:"OV30GXV10F",gxvar:"GXV10F",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.GXV10F=Value},v2z:function(Value){gx.O.ZV30GXV10F=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CTLSNMARCADO",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10F,"S")},c2v:function(){gx.O.GXV10F=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNMARCADO",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[16]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:14,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLUSUARIO",gxz:"ZV31GXV10G",gxold:"OV31GXV10G",gxvar:"GXV10G",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10G=Value},v2z:function(Value){gx.O.ZV31GXV10G=Value},v2c:function(row){gx.fn.setGridControlValue("CTLUSUARIO",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10G,0)},c2v:function(){gx.O.GXV10G=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLUSUARIO",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:14,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMEROSOLICITACAO",gxz:"ZV32GXV10H",gxold:"OV32GXV10H",gxvar:"GXV10H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10H=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32GXV10H=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMEROSOLICITACAO",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10H,0)},c2v:function(){gx.O.GXV10H=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMEROSOLICITACAO",row || gx.fn.currentGridRowImpl(14),'.')},nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPERMISSAODESCRICAO",gxz:"ZV9TipoPermissaoDescricao",gxold:"OV9TipoPermissaoDescricao",gxvar:"AV9TipoPermissaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV9TipoPermissaoDescricao=Value},v2z:function(Value){gx.O.ZV9TipoPermissaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOPERMISSAODESCRICAO",row || gx.fn.currentGridRowImpl(14),gx.O.AV9TipoPermissaoDescricao,0)},c2v:function(){gx.O.AV9TipoPermissaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOPERMISSAODESCRICAO",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"svchar",len:180,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPERMISSAOMENSAGEMSENHA",gxz:"ZV10TipoPermissaoMensagemSenha",gxold:"OV10TipoPermissaoMensagemSenha",gxvar:"AV10TipoPermissaoMensagemSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV10TipoPermissaoMensagemSenha=Value},v2z:function(Value){gx.O.ZV10TipoPermissaoMensagemSenha=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOPERMISSAOMENSAGEMSENHA",row || gx.fn.currentGridRowImpl(14),gx.O.AV10TipoPermissaoMensagemSenha,0)},c2v:function(){gx.O.AV10TipoPermissaoMensagemSenha=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOPERMISSAOMENSAGEMSENHA",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:14,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPMSGDET",gxz:"ZV16bmpMsgDet",gxold:"OV16bmpMsgDet",gxvar:"AV16bmpMsgDet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpMsgDet=Value},v2z:function(Value){gx.O.ZV16bmpMsgDet=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPMSGDET",row || gx.fn.currentGridRowImpl(14),gx.O.AV16bmpMsgDet,gx.O.AV38Bmpmsgdet_GXI)},c2v:function(){gx.O.AV38Bmpmsgdet_GXI=this.val_GXI();gx.O.AV16bmpMsgDet=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPMSGDET",row || gx.fn.currentGridRowImpl(14))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPMSGDET_GXI",row || gx.fn.currentGridRowImpl(14))}, gxvar_GXI:'AV38Bmpmsgdet_GXI',nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"vchar",len:9000,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLMSGDETALHADA",gxz:"ZV33GXV10L",gxold:"OV33GXV10L",gxvar:"GXV10L",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10L=Value},v2z:function(Value){gx.O.ZV33GXV10L=Value},v2c:function(row){gx.fn.setGridControlValue("CTLMSGDETALHADA",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10L,0)},c2v:function(){gx.O.GXV10L=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLMSGDETALHADA",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[22]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNLIBERADO",gxz:"ZV34GXV10M",gxold:"OV34GXV10M",gxvar:"GXV10M",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10M=Value},v2z:function(Value){gx.O.ZV34GXV10M=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSNLIBERADO",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10M,0)},c2v:function(){gx.O.GXV10M=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNLIBERADO",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[23]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOVERIFICACAO",gxz:"ZV35GXV10N",gxold:"OV35GXV10N",gxvar:"GXV10N",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10N=Value},v2z:function(Value){gx.O.ZV35GXV10N=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOVERIFICACAO",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10N,0)},c2v:function(){gx.O.GXV10N=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPOVERIFICACAO",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"svchar",len:35,dec:0,sign:false,ro:0,isacc:0,grid:14,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLUSUARIONOME",gxz:"ZV36GXV10O",gxold:"OV36GXV10O",gxvar:"GXV10O",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10O=Value},v2z:function(Value){gx.O.ZV36GXV10O=Value},v2c:function(row){gx.fn.setGridControlValue("CTLUSUARIONOME",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10O,0)},c2v:function(){gx.O.GXV10O=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLUSUARIONOME",row || gx.fn.currentGridRowImpl(14))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:14,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOPERMISSAO",gxz:"ZV37GXV10P",gxold:"OV37GXV10P",gxvar:"GXV10P",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10P=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV37GXV10P=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOPERMISSAO",row || gx.fn.currentGridRowImpl(14),gx.O.GXV10P,0)},c2v:function(){gx.O.GXV10P=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLTIPOPERMISSAO",row || gx.fn.currentGridRowImpl(14),'.')},nac:gx.falseFn};
   GXValidFnc[26]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[35]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERMISSAOCONCSTATUS",gxz:"ZV17PermissaoConcStatus",gxold:"OV17PermissaoConcStatus",gxvar:"AV17PermissaoConcStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17PermissaoConcStatus=Value},v2z:function(Value){gx.O.ZV17PermissaoConcStatus=Value},v2c:function(){gx.fn.setControlValue("vPERMISSAOCONCSTATUS",gx.O.AV17PermissaoConcStatus,0)},c2v:function(){gx.O.AV17PermissaoConcStatus=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSAOCONCSTATUS")},nac:gx.falseFn};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFECHARMODAL",gxz:"ZV14SnFecharModal",gxold:"OV14SnFecharModal",gxvar:"AV14SnFecharModal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV14SnFecharModal=Value},v2z:function(Value){gx.O.ZV14SnFecharModal=Value},v2c:function(){gx.fn.setControlValue("vSNFECHARMODAL",gx.O.AV14SnFecharModal,0)},c2v:function(){gx.O.AV14SnFecharModal=this.val()},val:function(){return gx.fn.getControlValue("vSNFECHARMODAL")},nac:gx.falseFn};
   this.ZV30GXV10F = "" ;
   this.OV30GXV10F = "" ;
   this.ZV31GXV10G = "" ;
   this.OV31GXV10G = "" ;
   this.ZV32GXV10H = 0 ;
   this.OV32GXV10H = 0 ;
   this.ZV9TipoPermissaoDescricao = "" ;
   this.OV9TipoPermissaoDescricao = "" ;
   this.ZV10TipoPermissaoMensagemSenha = "" ;
   this.OV10TipoPermissaoMensagemSenha = "" ;
   this.ZV16bmpMsgDet = "" ;
   this.OV16bmpMsgDet = "" ;
   this.ZV33GXV10L = "" ;
   this.OV33GXV10L = "" ;
   this.ZV34GXV10M = "" ;
   this.OV34GXV10M = "" ;
   this.ZV35GXV10N = "" ;
   this.OV35GXV10N = "" ;
   this.ZV36GXV10O = "" ;
   this.OV36GXV10O = "" ;
   this.ZV37GXV10P = 0 ;
   this.OV37GXV10P = 0 ;
   this.AV17PermissaoConcStatus = "" ;
   this.ZV17PermissaoConcStatus = "" ;
   this.OV17PermissaoConcStatus = "" ;
   this.AV14SnFecharModal = "" ;
   this.ZV14SnFecharModal = "" ;
   this.OV14SnFecharModal = "" ;
   this.AV17PermissaoConcStatus = "" ;
   this.AV14SnFecharModal = "" ;
   this.AV8PermissaoConcNoAgrupamento = 0 ;
   this.GXV10F = "" ;
   this.GXV10G = "" ;
   this.GXV10H = 0 ;
   this.AV9TipoPermissaoDescricao = "" ;
   this.AV10TipoPermissaoMensagemSenha = "" ;
   this.AV16bmpMsgDet = "" ;
   this.GXV10L = "" ;
   this.GXV10M = "" ;
   this.GXV10N = "" ;
   this.GXV10O = "" ;
   this.GXV10P = 0 ;
   this.A75UsuarioId = "" ;
   this.A1566UsuarioFilialEmpresaId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.A568TipoPermissaoId = 0 ;
   this.A557TipoPermissaoDescricao = "" ;
   this.A6567PermissaoConcSnPendente = "" ;
   this.A3141PermissaoUsuarioLibId = "" ;
   this.A6565PermissaoConcNoAgrupamento = 0 ;
   this.A3139PermissaoUsuarioSolId = "" ;
   this.A3146PermissaoConcObservacao = "" ;
   this.A3143PermissaoConcSeq = 0 ;
   this.AV5SdtPermissao = [ ] ;
   this.Events = {"e11ld2_client": ["ENTER", true] ,"e12ld2_client": ["'RECUSAR'", true] ,"e18ld2_client": ["'MSGDET'", true] ,"e13ld2_client": ["'SAIR'", true] ,"e14ld2_client": ["'DESMARCARTODOS'", true] ,"e15ld2_client": ["'SELECIONARTODOS'", true] ,"e20ld2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV16bmpMsgDet',fld:'vBMPMSGDET'},{av:'gx.fn.getCtrlProperty("vBMPMSGDET","Tooltiptext")',ctrl:'vBMPMSGDET',prop:'Tooltiptext'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV8PermissaoConcNoAgrupamento',fld:'vPERMISSAOCONCNOAGRUPAMENTO',hsh:true},{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14},{av:'AV17PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'}],[{av:'gx.fn.getCtrlProperty("TABMARCARDESMARCAR","Visible")',ctrl:'TABMARCARDESMARCAR',prop:'Visible'},{ctrl:'CTLSNMARCADO',prop:'Visible'},{ctrl:'CTLUSUARIO',prop:'Visible'},{av:'AV44GXV4',fld:'vGXV4'},{av:'AV7SdtPermissaoItem',fld:'vSDTPERMISSAOITEM'}]];
   this.EvtParms["ENTER"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV16bmpMsgDet',fld:'vBMPMSGDET'},{av:'gx.fn.getCtrlProperty("vBMPMSGDET","Tooltiptext")',ctrl:'vBMPMSGDET',prop:'Tooltiptext'},{av:'AV8PermissaoConcNoAgrupamento',fld:'vPERMISSAOCONCNOAGRUPAMENTO',hsh:true},{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14},{av:'AV17PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'}],[{av:'AV24SnErro',fld:'vSNERRO'},{av:'AV25QtPermissao',fld:'vQTPERMISSAO'},{av:'AV40GXV2',fld:'vGXV2'},{av:'AV41GXV3',fld:'vGXV3'},{av:'AV26SdtIn',fld:'vSDTIN'},{av:'AV7SdtPermissaoItem',fld:'vSDTPERMISSAOITEM'},{av:'AV18SnLiberado',fld:'vSNLIBERADO'},{av:'AV17PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14}]];
   this.EvtParms["'RECUSAR'"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV16bmpMsgDet',fld:'vBMPMSGDET'},{av:'gx.fn.getCtrlProperty("vBMPMSGDET","Tooltiptext")',ctrl:'vBMPMSGDET',prop:'Tooltiptext'},{av:'AV8PermissaoConcNoAgrupamento',fld:'vPERMISSAOCONCNOAGRUPAMENTO',hsh:true},{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14},{av:'AV17PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'}],[{av:'AV18SnLiberado',fld:'vSNLIBERADO'},{av:'AV17PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14}]];
   this.EvtParms["GRDPERM.LOAD"] = [[{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'}],[{av:'AV42GXLvl115',fld:'vGXLVL115'},{av:'AV9TipoPermissaoDescricao',fld:'vTIPOPERMISSAODESCRICAO'},{av:'AV10TipoPermissaoMensagemSenha',fld:'vTIPOPERMISSAOMENSAGEMSENHA'}]];
   this.EvtParms["'MSGDET'"] = [[{av:'AV43Pgmname',fld:'vPGMNAME'},{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14}],[{av:'AV11NomeSessao',fld:'vNOMESESSAO'}]];
   this.EvtParms["'SAIR'"] = [[],[]];
   this.EvtParms["'DESMARCARTODOS'"] = [[{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14},{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV16bmpMsgDet',fld:'vBMPMSGDET',grid:14},{av:'gx.fn.getCtrlProperty("vBMPMSGDET","Tooltiptext")',ctrl:'vBMPMSGDET',prop:'Tooltiptext'},{av:'AV8PermissaoConcNoAgrupamento',fld:'vPERMISSAOCONCNOAGRUPAMENTO',hsh:true},{av:'AV17PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'}],[{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14}]];
   this.EvtParms["'SELECIONARTODOS'"] = [[{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14},{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV16bmpMsgDet',fld:'vBMPMSGDET',grid:14},{av:'gx.fn.getCtrlProperty("vBMPMSGDET","Tooltiptext")',ctrl:'vBMPMSGDET',prop:'Tooltiptext'},{av:'AV8PermissaoConcNoAgrupamento',fld:'vPERMISSAOCONCNOAGRUPAMENTO',hsh:true},{av:'AV17PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'}],[{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14}]];
   this.EvtParms["GRDPERM_FIRSTPAGE"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV16bmpMsgDet',fld:'vBMPMSGDET'},{av:'gx.fn.getCtrlProperty("vBMPMSGDET","Tooltiptext")',ctrl:'vBMPMSGDET',prop:'Tooltiptext'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV8PermissaoConcNoAgrupamento',fld:'vPERMISSAOCONCNOAGRUPAMENTO',hsh:true},{av:'AV17PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14}],[{av:'gx.fn.getCtrlProperty("TABMARCARDESMARCAR","Visible")',ctrl:'TABMARCARDESMARCAR',prop:'Visible'},{ctrl:'CTLSNMARCADO',prop:'Visible'},{ctrl:'CTLUSUARIO',prop:'Visible'},{av:'AV44GXV4',fld:'vGXV4'},{av:'AV7SdtPermissaoItem',fld:'vSDTPERMISSAOITEM'}]];
   this.EvtParms["GRDPERM_PREVPAGE"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV16bmpMsgDet',fld:'vBMPMSGDET'},{av:'gx.fn.getCtrlProperty("vBMPMSGDET","Tooltiptext")',ctrl:'vBMPMSGDET',prop:'Tooltiptext'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV8PermissaoConcNoAgrupamento',fld:'vPERMISSAOCONCNOAGRUPAMENTO',hsh:true},{av:'AV17PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14}],[{av:'gx.fn.getCtrlProperty("TABMARCARDESMARCAR","Visible")',ctrl:'TABMARCARDESMARCAR',prop:'Visible'},{ctrl:'CTLSNMARCADO',prop:'Visible'},{ctrl:'CTLUSUARIO',prop:'Visible'},{av:'AV44GXV4',fld:'vGXV4'},{av:'AV7SdtPermissaoItem',fld:'vSDTPERMISSAOITEM'}]];
   this.EvtParms["GRDPERM_NEXTPAGE"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV16bmpMsgDet',fld:'vBMPMSGDET'},{av:'gx.fn.getCtrlProperty("vBMPMSGDET","Tooltiptext")',ctrl:'vBMPMSGDET',prop:'Tooltiptext'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV8PermissaoConcNoAgrupamento',fld:'vPERMISSAOCONCNOAGRUPAMENTO',hsh:true},{av:'AV17PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14}],[{av:'gx.fn.getCtrlProperty("TABMARCARDESMARCAR","Visible")',ctrl:'TABMARCARDESMARCAR',prop:'Visible'},{ctrl:'CTLSNMARCADO',prop:'Visible'},{ctrl:'CTLUSUARIO',prop:'Visible'},{av:'AV44GXV4',fld:'vGXV4'},{av:'AV7SdtPermissaoItem',fld:'vSDTPERMISSAOITEM'}]];
   this.EvtParms["GRDPERM_LASTPAGE"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV16bmpMsgDet',fld:'vBMPMSGDET'},{av:'gx.fn.getCtrlProperty("vBMPMSGDET","Tooltiptext")',ctrl:'vBMPMSGDET',prop:'Tooltiptext'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV8PermissaoConcNoAgrupamento',fld:'vPERMISSAOCONCNOAGRUPAMENTO',hsh:true},{av:'AV17PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV5SdtPermissao',fld:'vSDTPERMISSAO',grid:14}],[{av:'gx.fn.getCtrlProperty("TABMARCARDESMARCAR","Visible")',ctrl:'TABMARCARDESMARCAR',prop:'Visible'},{ctrl:'CTLSNMARCADO',prop:'Visible'},{ctrl:'CTLUSUARIO',prop:'Visible'},{av:'AV44GXV4',fld:'vGXV4'},{av:'AV7SdtPermissaoItem',fld:'vSDTPERMISSAOITEM'}]];
   this.EnterCtrl = ["BTNPERMITIR"];
   this.setVCMap("AV8PermissaoConcNoAgrupamento", "vPERMISSAOCONCNOAGRUPAMENTO", 0, "int");
   this.setVCMap("AV5SdtPermissao", "vSDTPERMISSAO", 0, "CollSdtPermissao.SdtPermissaoItem");
   this.setVCMap("A568TipoPermissaoId", "TIPOPERMISSAOID", 0, "int");
   this.setVCMap("A557TipoPermissaoDescricao", "TIPOPERMISSAODESCRICAO", 0, "svchar");
   this.setVCMap("AV8PermissaoConcNoAgrupamento", "vPERMISSAOCONCNOAGRUPAMENTO", 0, "int");
   this.setVCMap("AV5SdtPermissao", "vSDTPERMISSAO", 0, "CollSdtPermissao.SdtPermissaoItem");
   this.setVCMap("A568TipoPermissaoId", "TIPOPERMISSAOID", 0, "int");
   this.setVCMap("A557TipoPermissaoDescricao", "TIPOPERMISSAODESCRICAO", 0, "svchar");
   GrdpermContainer.addRefreshingVar({rfrVar:"AV16bmpMsgDet", rfrProp:"Value", gxAttId:"Bmpmsgdet"});
   GrdpermContainer.addRefreshingVar({rfrVar:"AV16bmpMsgDet", rfrProp:"Tooltiptext", gxAttId:"Bmpmsgdet"});
   GrdpermContainer.addRefreshingVar({rfrVar:"AV8PermissaoConcNoAgrupamento"});
   GrdpermContainer.addRefreshingVar({rfrVar:"AV5SdtPermissao"});
   GrdpermContainer.addRefreshingVar(this.GXValidFnc[35]);
   GrdpermContainer.addRefreshingVar({rfrVar:"A568TipoPermissaoId"});
   GrdpermContainer.addRefreshingVar({rfrVar:"A557TipoPermissaoDescricao"});
   this.addGridBCProperty("Sdtpermissao", ["SnMarcado"], this.GXValidFnc[15], "AV5SdtPermissao");
   this.addGridBCProperty("Sdtpermissao", ["Usuario"], this.GXValidFnc[16], "AV5SdtPermissao");
   this.addGridBCProperty("Sdtpermissao", ["NumeroSolicitacao"], this.GXValidFnc[17], "AV5SdtPermissao");
   this.addGridBCProperty("Sdtpermissao", ["MsgDetalhada"], this.GXValidFnc[21], "AV5SdtPermissao");
   this.addGridBCProperty("Sdtpermissao", ["SnLiberado"], this.GXValidFnc[22], "AV5SdtPermissao");
   this.addGridBCProperty("Sdtpermissao", ["TipoVerificacao"], this.GXValidFnc[23], "AV5SdtPermissao");
   this.addGridBCProperty("Sdtpermissao", ["UsuarioNome"], this.GXValidFnc[24], "AV5SdtPermissao");
   this.addGridBCProperty("Sdtpermissao", ["TipoPermissao"], this.GXValidFnc[25], "AV5SdtPermissao");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarliberacao());

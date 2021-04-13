/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:32:18.49
*/
gx.evt.autoSkip = false;
gx.define('haguardapermissao', false, function () {
   this.ServerClass =  "haguardapermissao" ;
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
      this.AV14SdtPermissao=gx.fn.getControlValue("vSDTPERMISSAO") ;
      this.A568TipoPermissaoId=gx.fn.getIntegerValue("TIPOPERMISSAOID",'.') ;
      this.A557TipoPermissaoDescricao=gx.fn.getControlValue("TIPOPERMISSAODESCRICAO") ;
      this.AV33SnOk=gx.fn.getControlValue("vSNOK") ;
      this.AV42TpRetorno=gx.fn.getControlValue("vTPRETORNO") ;
      this.AV19NomeSessao=gx.fn.getControlValue("vNOMESESSAO") ;
   };
   this.Validv_Tipopermissaoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOPERMISSAOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Permissaoconcseq=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vPERMISSAOCONCSEQ");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12yi2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e13yi2_client=function()
   {
      this.executeServerEvent("'SAIR'", false, null, false, false);
   };
   this.e19yi2_client=function()
   {
      this.executeServerEvent("'MSGDET'", true, arguments[0], false, false);
   };
   this.e14yi2_client=function()
   {
      this.executeServerEvent("'LIBERARLOCAL'", false, null, false, false);
   };
   this.e15yi2_client=function()
   {
      this.executeServerEvent("'RECUSARLOCAL'", false, null, false, false);
   };
   this.e11yi2_client=function()
   {
      this.executeServerEvent("TIMER.ELAPSED", false, null, true, true);
   };
   this.e20yi2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,15,16,17,18,19,20,21,22,25,28,31,33,34,37,39,44,47,49,56,57,58,59];
   this.GXLastCtrlId =59;
   this.GrdpermContainer = new gx.grid.grid(this, 2,"WbpLvl2",12,"Grdperm","Grdperm","GrdpermContainer",this.CmpContext,this.IsMasterPage,"haguardapermissao",[],false,1,true,true,0,true,false,false,"CollSdtPermissao.SdtPermissaoItem",0,"px","Novo registro",true,false,false,null,null,false,"AV14SdtPermissao",false,[1,1,1,1]);
   var GrdpermContainer = this.GrdpermContainer;
   GrdpermContainer.addSingleLineEdit("GXV10D",13,"CTLNUMEROSOLICITACAO","Cód.","","NumeroSolicitacao","int",18,"px",8,8,"right",null,[],"GXV10D","GXV10D",true,0,false,false,"Attribute",1,"");
   GrdpermContainer.addSingleLineEdit("GXV10E",14,"CTLTIPOPERMISSAO","Cód.","","TipoPermissao","int",18,"px",4,4,"right",null,[],"GXV10E","GXV10E",false,0,false,false,"Attribute",1,"");
   GrdpermContainer.addSingleLineEdit("Tipopermissaodescricao",15,"vTIPOPERMISSAODESCRICAO","Tipo de Permissão","","TipoPermissaoDescricao","svchar",0,"px",80,80,"left",null,[],"Tipopermissaodescricao","TipoPermissaoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GrdpermContainer.addSingleLineEdit("Tipopermissaomensagemsenha",16,"vTIPOPERMISSAOMENSAGEMSENHA","Mensagem","","TipoPermissaoMensagemSenha","svchar",0,"px",180,80,"left",null,[],"Tipopermissaomensagemsenha","TipoPermissaoMensagemSenha",true,0,false,false,"SemQuebraGrid",1,"");
   GrdpermContainer.addSingleLineEdit("GXV10H",17,"CTLTIPOVERIFICACAO","Tipo Verificacao","","TipoVerificacao","char",0,"px",1,1,"left",null,[],"GXV10H","GXV10H",false,0,false,false,"Attribute",1,"");
   GrdpermContainer.addSingleLineEdit("GXV10I",18,"CTLSNLIBERADO","Sn Liberado","","SnLiberado","char",0,"px",1,1,"left",null,[],"GXV10I","GXV10I",false,0,false,false,"Attribute",1,"");
   GrdpermContainer.addSingleLineEdit("GXV10J",19,"CTLMSGDETALHADA","Observação","","MsgDetalhada","vchar",0,"px",9000,80,"left",null,[],"GXV10J","GXV10J",false,0,false,false,"Attribute",1,"");
   GrdpermContainer.addBitmap("&Bmpmsgdet","vBMPMSGDET",20,0,"px",17,"px","e19yi2_client","","","Image","GridColumnImage");
   GrdpermContainer.addBitmap("&Bmpstatus","vBMPSTATUS",21,0,"px",17,"px",null,"","","Image","GridColumnImage");
   this.setGrid(GrdpermContainer);
   this.TIMERContainer = gx.uc.getNew(this, 60, 33, "Timer", "TIMERContainer", "Timer");
   var TIMERContainer = this.TIMERContainer;
   TIMERContainer.setProp("Interval", "Interval", 2000, "num");
   TIMERContainer.setDynProp("Enabled", "Enabled", true, "boolean");
   TIMERContainer.setProp("Visible", "Visible", true, "bool");
   TIMERContainer.setProp("Class", "Class", "", "char");
   TIMERContainer.setC2ShowFunction(function(UC) { UC.start(); });
   TIMERContainer.addEventHandler("Elapsed", this.e11yi2_client);
   this.setUserControl(TIMERContainer);
   GXValidFnc[2]={fld:"TABGERAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABSENHA",grid:0};
   GXValidFnc[11]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[13]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:12,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLNUMEROSOLICITACAO",gxz:"ZV46GXV10D",gxold:"OV46GXV10D",gxvar:"GXV10D",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10D=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV46GXV10D=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLNUMEROSOLICITACAO",row || gx.fn.currentGridRowImpl(12),gx.O.GXV10D,0)},c2v:function(){gx.O.GXV10D=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLNUMEROSOLICITACAO",row || gx.fn.currentGridRowImpl(12),'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:12,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOPERMISSAO",gxz:"ZV47GXV10E",gxold:"OV47GXV10E",gxvar:"GXV10E",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.GXV10E=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV47GXV10E=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOPERMISSAO",row || gx.fn.currentGridRowImpl(12),gx.O.GXV10E,0)},c2v:function(){gx.O.GXV10E=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CTLTIPOPERMISSAO",row || gx.fn.currentGridRowImpl(12),'.')},nac:gx.falseFn};
   GXValidFnc[15]={lvl:2,type:"svchar",len:80,dec:0,sign:false,ro:0,isacc:0,grid:12,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPERMISSAODESCRICAO",gxz:"ZV22TipoPermissaoDescricao",gxold:"OV22TipoPermissaoDescricao",gxvar:"AV22TipoPermissaoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV22TipoPermissaoDescricao=Value},v2z:function(Value){gx.O.ZV22TipoPermissaoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOPERMISSAODESCRICAO",row || gx.fn.currentGridRowImpl(12),gx.O.AV22TipoPermissaoDescricao,0)},c2v:function(){gx.O.AV22TipoPermissaoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOPERMISSAODESCRICAO",row || gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};
   GXValidFnc[16]={lvl:2,type:"svchar",len:180,dec:0,sign:false,ro:0,isacc:0,grid:12,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPERMISSAOMENSAGEMSENHA",gxz:"ZV23TipoPermissaoMensagemSenha",gxold:"OV23TipoPermissaoMensagemSenha",gxvar:"AV23TipoPermissaoMensagemSenha",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV23TipoPermissaoMensagemSenha=Value},v2z:function(Value){gx.O.ZV23TipoPermissaoMensagemSenha=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOPERMISSAOMENSAGEMSENHA",row || gx.fn.currentGridRowImpl(12),gx.O.AV23TipoPermissaoMensagemSenha,0)},c2v:function(){gx.O.AV23TipoPermissaoMensagemSenha=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOPERMISSAOMENSAGEMSENHA",row || gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};
   GXValidFnc[17]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:12,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOVERIFICACAO",gxz:"ZV48GXV10H",gxold:"OV48GXV10H",gxvar:"GXV10H",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10H=Value},v2z:function(Value){gx.O.ZV48GXV10H=Value},v2c:function(row){gx.fn.setGridControlValue("CTLTIPOVERIFICACAO",row || gx.fn.currentGridRowImpl(12),gx.O.GXV10H,0)},c2v:function(){gx.O.GXV10H=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLTIPOVERIFICACAO",row || gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};
   GXValidFnc[18]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:0,isacc:0,grid:12,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLSNLIBERADO",gxz:"ZV49GXV10I",gxold:"OV49GXV10I",gxvar:"GXV10I",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10I=Value},v2z:function(Value){gx.O.ZV49GXV10I=Value},v2c:function(row){gx.fn.setGridControlValue("CTLSNLIBERADO",row || gx.fn.currentGridRowImpl(12),gx.O.GXV10I,0)},c2v:function(){gx.O.GXV10I=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLSNLIBERADO",row || gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};
   GXValidFnc[19]={lvl:2,type:"vchar",len:9000,dec:0,sign:false,ro:0,isacc:0,grid:12,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLMSGDETALHADA",gxz:"ZV50GXV10J",gxold:"OV50GXV10J",gxvar:"GXV10J",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.GXV10J=Value},v2z:function(Value){gx.O.ZV50GXV10J=Value},v2c:function(row){gx.fn.setGridControlValue("CTLMSGDETALHADA",row || gx.fn.currentGridRowImpl(12),gx.O.GXV10J,0)},c2v:function(){gx.O.GXV10J=this.val()},val:function(row){return gx.fn.getGridControlValue("CTLMSGDETALHADA",row || gx.fn.currentGridRowImpl(12))},nac:gx.falseFn};
   GXValidFnc[20]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:12,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPMSGDET",gxz:"ZV24BmpMsgDet",gxold:"OV24BmpMsgDet",gxvar:"AV24BmpMsgDet",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV24BmpMsgDet=Value},v2z:function(Value){gx.O.ZV24BmpMsgDet=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPMSGDET",row || gx.fn.currentGridRowImpl(12),gx.O.AV24BmpMsgDet,gx.O.AV51Bmpmsgdet_GXI)},c2v:function(){gx.O.AV51Bmpmsgdet_GXI=this.val_GXI();gx.O.AV24BmpMsgDet=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPMSGDET",row || gx.fn.currentGridRowImpl(12))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPMSGDET_GXI",row || gx.fn.currentGridRowImpl(12))}, gxvar_GXI:'AV51Bmpmsgdet_GXI',nac:gx.falseFn};
   GXValidFnc[21]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:12,gxgrid:this.GrdpermContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSTATUS",gxz:"ZV21bmpStatus",gxold:"OV21bmpStatus",gxvar:"AV21bmpStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV21bmpStatus=Value},v2z:function(Value){gx.O.ZV21bmpStatus=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSTATUS",row || gx.fn.currentGridRowImpl(12),gx.O.AV21bmpStatus,gx.O.AV60Bmpstatus_GXI)},c2v:function(){gx.O.AV60Bmpstatus_GXI=this.val_GXI();gx.O.AV21bmpStatus=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSTATUS",row || gx.fn.currentGridRowImpl(12))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSTATUS_GXI",row || gx.fn.currentGridRowImpl(12))}, gxvar_GXI:'AV60Bmpstatus_GXI',nac:gx.falseFn};
   GXValidFnc[22]={fld:"DIV2", format:2,grid:0};
   GXValidFnc[25]={fld:"TABADVERTENCIA",grid:0};
   GXValidFnc[28]={fld:"TABLE5",grid:0};
   GXValidFnc[31]={fld:"TEXTBLOCK104", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipopermissaoid,isvalid:null,rgrid:[],fld:"vTIPOPERMISSAOID",gxz:"ZV18TipoPermissaoId",gxold:"OV18TipoPermissaoId",gxvar:"AV18TipoPermissaoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18TipoPermissaoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18TipoPermissaoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOPERMISSAOID",gx.O.AV18TipoPermissaoId,0)},c2v:function(){gx.O.AV18TipoPermissaoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOPERMISSAOID",'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:0,type:"svchar",len:80,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOPERMISSAODESCRICAOCONS",gxz:"ZV35TipoPermissaoDescricaoCons",gxold:"OV35TipoPermissaoDescricaoCons",gxvar:"AV35TipoPermissaoDescricaoCons",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35TipoPermissaoDescricaoCons=Value},v2z:function(Value){gx.O.ZV35TipoPermissaoDescricaoCons=Value},v2c:function(){gx.fn.setControlValue("vTIPOPERMISSAODESCRICAOCONS",gx.O.AV35TipoPermissaoDescricaoCons,0)},c2v:function(){gx.O.AV35TipoPermissaoDescricaoCons=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPERMISSAODESCRICAOCONS")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCK105", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Permissaoconcseq,isvalid:null,rgrid:[],fld:"vPERMISSAOCONCSEQ",gxz:"ZV12PermissaoConcSeq",gxold:"OV12PermissaoConcSeq",gxvar:"AV12PermissaoConcSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12PermissaoConcSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12PermissaoConcSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPERMISSAOCONCSEQ",gx.O.AV12PermissaoConcSeq,0)},c2v:function(){gx.O.AV12PermissaoConcSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPERMISSAOCONCSEQ",'.')},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TABLE2",grid:0};
   GXValidFnc[47]={fld:"IMAGE2",grid:0};
   GXValidFnc[49]={lvl:0,type:"vchar",len:9000,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMENSAGEM",gxz:"ZV11Mensagem",gxold:"OV11Mensagem",gxvar:"AV11Mensagem",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11Mensagem=Value},v2z:function(Value){gx.O.ZV11Mensagem=Value},v2c:function(){gx.fn.setControlValue("vMENSAGEM",gx.O.AV11Mensagem,0)},c2v:function(){gx.O.AV11Mensagem=this.val()},val:function(){return gx.fn.getControlValue("vMENSAGEM")},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOTELA",gxz:"ZV17TipoTela",gxold:"OV17TipoTela",gxvar:"AV17TipoTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TipoTela=Value},v2z:function(Value){gx.O.ZV17TipoTela=Value},v2c:function(){gx.fn.setControlValue("vTIPOTELA",gx.O.AV17TipoTela,0)},c2v:function(){gx.O.AV17TipoTela=this.val()},val:function(){return gx.fn.getControlValue("vTIPOTELA")},nac:gx.falseFn};
   GXValidFnc[57]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPERMISSAOCONCSTATUS",gxz:"ZV40PermissaoConcStatus",gxold:"OV40PermissaoConcStatus",gxvar:"AV40PermissaoConcStatus",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40PermissaoConcStatus=Value},v2z:function(Value){gx.O.ZV40PermissaoConcStatus=Value},v2c:function(){gx.fn.setControlValue("vPERMISSAOCONCSTATUS",gx.O.AV40PermissaoConcStatus,0)},c2v:function(){gx.O.AV40PermissaoConcStatus=this.val()},val:function(){return gx.fn.getControlValue("vPERMISSAOCONCSTATUS")},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNFECHARMODAL",gxz:"ZV39SnFecharModal",gxold:"OV39SnFecharModal",gxvar:"AV39SnFecharModal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39SnFecharModal=Value},v2z:function(Value){gx.O.ZV39SnFecharModal=Value},v2c:function(){gx.fn.setControlValue("vSNFECHARMODAL",gx.O.AV39SnFecharModal,0)},c2v:function(){gx.O.AV39SnFecharModal=this.val()},val:function(){return gx.fn.getControlValue("vSNFECHARMODAL")},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNSAIRTELA",gxz:"ZV15SnSairTela",gxold:"OV15SnSairTela",gxvar:"AV15SnSairTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15SnSairTela=Value},v2z:function(Value){gx.O.ZV15SnSairTela=Value},v2c:function(){gx.fn.setControlValue("vSNSAIRTELA",gx.O.AV15SnSairTela,0)},c2v:function(){gx.O.AV15SnSairTela=this.val()},val:function(){return gx.fn.getControlValue("vSNSAIRTELA")},nac:gx.falseFn};
   this.ZV46GXV10D = 0 ;
   this.OV46GXV10D = 0 ;
   this.ZV47GXV10E = 0 ;
   this.OV47GXV10E = 0 ;
   this.ZV22TipoPermissaoDescricao = "" ;
   this.OV22TipoPermissaoDescricao = "" ;
   this.ZV23TipoPermissaoMensagemSenha = "" ;
   this.OV23TipoPermissaoMensagemSenha = "" ;
   this.ZV48GXV10H = "" ;
   this.OV48GXV10H = "" ;
   this.ZV49GXV10I = "" ;
   this.OV49GXV10I = "" ;
   this.ZV50GXV10J = "" ;
   this.OV50GXV10J = "" ;
   this.ZV24BmpMsgDet = "" ;
   this.OV24BmpMsgDet = "" ;
   this.ZV21bmpStatus = "" ;
   this.OV21bmpStatus = "" ;
   this.AV18TipoPermissaoId = 0 ;
   this.ZV18TipoPermissaoId = 0 ;
   this.OV18TipoPermissaoId = 0 ;
   this.AV35TipoPermissaoDescricaoCons = "" ;
   this.ZV35TipoPermissaoDescricaoCons = "" ;
   this.OV35TipoPermissaoDescricaoCons = "" ;
   this.AV12PermissaoConcSeq = 0 ;
   this.ZV12PermissaoConcSeq = 0 ;
   this.OV12PermissaoConcSeq = 0 ;
   this.AV11Mensagem = "" ;
   this.ZV11Mensagem = "" ;
   this.OV11Mensagem = "" ;
   this.AV17TipoTela = "" ;
   this.ZV17TipoTela = "" ;
   this.OV17TipoTela = "" ;
   this.AV40PermissaoConcStatus = "" ;
   this.ZV40PermissaoConcStatus = "" ;
   this.OV40PermissaoConcStatus = "" ;
   this.AV39SnFecharModal = "" ;
   this.ZV39SnFecharModal = "" ;
   this.OV39SnFecharModal = "" ;
   this.AV15SnSairTela = "" ;
   this.ZV15SnSairTela = "" ;
   this.OV15SnSairTela = "" ;
   this.AV18TipoPermissaoId = 0 ;
   this.AV35TipoPermissaoDescricaoCons = "" ;
   this.AV12PermissaoConcSeq = 0 ;
   this.AV11Mensagem = "" ;
   this.AV17TipoTela = "" ;
   this.AV40PermissaoConcStatus = "" ;
   this.AV39SnFecharModal = "" ;
   this.AV15SnSairTela = "" ;
   this.AV19NomeSessao = "" ;
   this.AV42TpRetorno = "" ;
   this.GXV10D = 0 ;
   this.GXV10E = 0 ;
   this.AV22TipoPermissaoDescricao = "" ;
   this.AV23TipoPermissaoMensagemSenha = "" ;
   this.GXV10H = "" ;
   this.GXV10I = "" ;
   this.GXV10J = "" ;
   this.AV24BmpMsgDet = "" ;
   this.AV21bmpStatus = "" ;
   this.A3143PermissaoConcSeq = 0 ;
   this.A568TipoPermissaoId = 0 ;
   this.A6565PermissaoConcNoAgrupamento = 0 ;
   this.A557TipoPermissaoDescricao = "" ;
   this.AV14SdtPermissao = [ ] ;
   this.AV33SnOk = "" ;
   this.Events = {"e12yi2_client": ["ENTER", true] ,"e13yi2_client": ["'SAIR'", true] ,"e19yi2_client": ["'MSGDET'", true] ,"e14yi2_client": ["'LIBERARLOCAL'", true] ,"e15yi2_client": ["'RECUSARLOCAL'", true] ,"e11yi2_client": ["TIMER.ELAPSED", true] ,"e20yi2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV24BmpMsgDet',fld:'vBMPMSGDET'},{av:'AV17TipoTela',fld:'vTIPOTELA'},{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12},{av:'AV40PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV42TpRetorno',fld:'vTPRETORNO',hsh:true}],[{av:'AV56GXV5',fld:'vGXV5'},{av:'AV13SdtPermissaoItem',fld:'vSDTPERMISSAOITEM'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{av:'AV17TipoTela',fld:'vTIPOTELA'},{av:'AV52GXV2',fld:'vGXV2'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'AV12PermissaoConcSeq',fld:'vPERMISSAOCONCSEQ'},{av:'AV11Mensagem',fld:'vMENSAGEM'},{av:'AV53GXV3',fld:'vGXV3'},{av:'gx.fn.getCtrlProperty("TABADVERTENCIA","Visible")',ctrl:'TABADVERTENCIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSENHA","Visible")',ctrl:'TABSENHA',prop:'Visible'},{ctrl:'BTNSAIR',prop:'Visible'},{ctrl:'BTNAUTORIZAR',prop:'Visible'},{ctrl:'BTNRECUSAR',prop:'Visible'},{ctrl:'BTNOK',prop:'Visible'},{av:'AV36QtLibAdvert',fld:'vQTLIBADVERT'},{av:'AV54GXV4',fld:'vGXV4'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TABGERAL","Class")',ctrl:'TABGERAL',prop:'Class'},{av:'AV35TipoPermissaoDescricaoCons',fld:'vTIPOPERMISSAODESCRICAOCONS'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV58GXV7',fld:'vGXV7'}]];
   this.EvtParms["ENTER"] = [[{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12},{av:'AV12PermissaoConcSeq',fld:'vPERMISSAOCONCSEQ'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV24BmpMsgDet',fld:'vBMPMSGDET'},{av:'AV40PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV42TpRetorno',fld:'vTPRETORNO',hsh:true},{av:'AV17TipoTela',fld:'vTIPOTELA'}],[{av:'AV57GXV6',fld:'vGXV6'},{av:'AV13SdtPermissaoItem',fld:'vSDTPERMISSAOITEM'},{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12}]];
   this.EvtParms["'SAIR'"] = [[{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV42TpRetorno',fld:'vTPRETORNO',hsh:true}],[{av:'AV33SnOk',fld:'vSNOK'},{av:'AV58GXV7',fld:'vGXV7'},{av:'AV13SdtPermissaoItem',fld:'vSDTPERMISSAOITEM'}]];
   this.EvtParms["GRDPERM.LOAD"] = [[{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV17TipoTela',fld:'vTIPOTELA'},{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV24BmpMsgDet',fld:'vBMPMSGDET'},{av:'AV40PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV42TpRetorno',fld:'vTPRETORNO',hsh:true}],[{av:'AV22TipoPermissaoDescricao',fld:'vTIPOPERMISSAODESCRICAO'},{av:'AV23TipoPermissaoMensagemSenha',fld:'vTIPOPERMISSAOMENSAGEMSENHA'},{av:'AV41retorno',fld:'vRETORNO'},{av:'AV21bmpStatus',fld:'vBMPSTATUS'},{av:'gx.fn.getCtrlProperty("vBMPSTATUS","Tooltiptext")',ctrl:'vBMPSTATUS',prop:'Tooltiptext'},{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12}]];
   this.EvtParms["'MSGDET'"] = [[{av:'AV19NomeSessao',fld:'vNOMESESSAO',hsh:true},{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12}],[{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'}]];
   this.EvtParms["'LIBERARLOCAL'"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV24BmpMsgDet',fld:'vBMPMSGDET'},{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12},{av:'AV40PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV42TpRetorno',fld:'vTPRETORNO',hsh:true},{av:'AV17TipoTela',fld:'vTIPOTELA'},{av:'AV12PermissaoConcSeq',fld:'vPERMISSAOCONCSEQ'},{av:'A3143PermissaoConcSeq',fld:'PERMISSAOCONCSEQ'},{av:'A6565PermissaoConcNoAgrupamento',fld:'PERMISSAOCONCNOAGRUPAMENTO'}],[{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{av:'AV37SnLiberado',fld:'vSNLIBERADO'},{av:'AV38PermissaoConcNoAgrupamento',fld:'vPERMISSAOCONCNOAGRUPAMENTO'},{av:'AV40PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'}]];
   this.EvtParms["'RECUSARLOCAL'"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV24BmpMsgDet',fld:'vBMPMSGDET'},{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12},{av:'AV40PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV42TpRetorno',fld:'vTPRETORNO',hsh:true},{av:'AV17TipoTela',fld:'vTIPOTELA'},{av:'AV12PermissaoConcSeq',fld:'vPERMISSAOCONCSEQ'},{av:'A3143PermissaoConcSeq',fld:'PERMISSAOCONCSEQ'},{av:'A6565PermissaoConcNoAgrupamento',fld:'PERMISSAOCONCNOAGRUPAMENTO'}],[{av:'AV37SnLiberado',fld:'vSNLIBERADO'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{av:'AV38PermissaoConcNoAgrupamento',fld:'vPERMISSAOCONCNOAGRUPAMENTO'},{av:'AV40PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'}]];
   this.EvtParms["TIMER.ELAPSED"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV24BmpMsgDet',fld:'vBMPMSGDET'},{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12},{av:'AV40PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV42TpRetorno',fld:'vTPRETORNO',hsh:true},{av:'AV17TipoTela',fld:'vTIPOTELA'}],[]];
   this.EvtParms["GRDPERM_FIRSTPAGE"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV24BmpMsgDet',fld:'vBMPMSGDET'},{av:'AV17TipoTela',fld:'vTIPOTELA'},{av:'AV40PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV42TpRetorno',fld:'vTPRETORNO',hsh:true},{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12}],[{av:'AV56GXV5',fld:'vGXV5'},{av:'AV13SdtPermissaoItem',fld:'vSDTPERMISSAOITEM'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{av:'AV17TipoTela',fld:'vTIPOTELA'},{av:'AV52GXV2',fld:'vGXV2'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'AV12PermissaoConcSeq',fld:'vPERMISSAOCONCSEQ'},{av:'AV11Mensagem',fld:'vMENSAGEM'},{av:'AV53GXV3',fld:'vGXV3'},{av:'gx.fn.getCtrlProperty("TABADVERTENCIA","Visible")',ctrl:'TABADVERTENCIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSENHA","Visible")',ctrl:'TABSENHA',prop:'Visible'},{ctrl:'BTNSAIR',prop:'Visible'},{ctrl:'BTNAUTORIZAR',prop:'Visible'},{ctrl:'BTNRECUSAR',prop:'Visible'},{ctrl:'BTNOK',prop:'Visible'},{av:'AV36QtLibAdvert',fld:'vQTLIBADVERT'},{av:'AV54GXV4',fld:'vGXV4'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TABGERAL","Class")',ctrl:'TABGERAL',prop:'Class'},{av:'AV35TipoPermissaoDescricaoCons',fld:'vTIPOPERMISSAODESCRICAOCONS'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV58GXV7',fld:'vGXV7'}]];
   this.EvtParms["GRDPERM_PREVPAGE"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV24BmpMsgDet',fld:'vBMPMSGDET'},{av:'AV17TipoTela',fld:'vTIPOTELA'},{av:'AV40PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV42TpRetorno',fld:'vTPRETORNO',hsh:true},{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12}],[{av:'AV56GXV5',fld:'vGXV5'},{av:'AV13SdtPermissaoItem',fld:'vSDTPERMISSAOITEM'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{av:'AV17TipoTela',fld:'vTIPOTELA'},{av:'AV52GXV2',fld:'vGXV2'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'AV12PermissaoConcSeq',fld:'vPERMISSAOCONCSEQ'},{av:'AV11Mensagem',fld:'vMENSAGEM'},{av:'AV53GXV3',fld:'vGXV3'},{av:'gx.fn.getCtrlProperty("TABADVERTENCIA","Visible")',ctrl:'TABADVERTENCIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSENHA","Visible")',ctrl:'TABSENHA',prop:'Visible'},{ctrl:'BTNSAIR',prop:'Visible'},{ctrl:'BTNAUTORIZAR',prop:'Visible'},{ctrl:'BTNRECUSAR',prop:'Visible'},{ctrl:'BTNOK',prop:'Visible'},{av:'AV36QtLibAdvert',fld:'vQTLIBADVERT'},{av:'AV54GXV4',fld:'vGXV4'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TABGERAL","Class")',ctrl:'TABGERAL',prop:'Class'},{av:'AV35TipoPermissaoDescricaoCons',fld:'vTIPOPERMISSAODESCRICAOCONS'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV58GXV7',fld:'vGXV7'}]];
   this.EvtParms["GRDPERM_NEXTPAGE"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV24BmpMsgDet',fld:'vBMPMSGDET'},{av:'AV17TipoTela',fld:'vTIPOTELA'},{av:'AV40PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV42TpRetorno',fld:'vTPRETORNO',hsh:true},{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12}],[{av:'AV56GXV5',fld:'vGXV5'},{av:'AV13SdtPermissaoItem',fld:'vSDTPERMISSAOITEM'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{av:'AV17TipoTela',fld:'vTIPOTELA'},{av:'AV52GXV2',fld:'vGXV2'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'AV12PermissaoConcSeq',fld:'vPERMISSAOCONCSEQ'},{av:'AV11Mensagem',fld:'vMENSAGEM'},{av:'AV53GXV3',fld:'vGXV3'},{av:'gx.fn.getCtrlProperty("TABADVERTENCIA","Visible")',ctrl:'TABADVERTENCIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSENHA","Visible")',ctrl:'TABSENHA',prop:'Visible'},{ctrl:'BTNSAIR',prop:'Visible'},{ctrl:'BTNAUTORIZAR',prop:'Visible'},{ctrl:'BTNRECUSAR',prop:'Visible'},{ctrl:'BTNOK',prop:'Visible'},{av:'AV36QtLibAdvert',fld:'vQTLIBADVERT'},{av:'AV54GXV4',fld:'vGXV4'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TABGERAL","Class")',ctrl:'TABGERAL',prop:'Class'},{av:'AV35TipoPermissaoDescricaoCons',fld:'vTIPOPERMISSAODESCRICAOCONS'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV58GXV7',fld:'vGXV7'}]];
   this.EvtParms["GRDPERM_LASTPAGE"] = [[{av:'GRDPERM_nFirstRecordOnPage'},{av:'GRDPERM_nEOF'},{av:'subGrdperm_Rows'},{av:'AV24BmpMsgDet',fld:'vBMPMSGDET'},{av:'AV17TipoTela',fld:'vTIPOTELA'},{av:'AV40PermissaoConcStatus',fld:'vPERMISSAOCONCSTATUS'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'A568TipoPermissaoId',fld:'TIPOPERMISSAOID'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'A557TipoPermissaoDescricao',fld:'TIPOPERMISSAODESCRICAO'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV42TpRetorno',fld:'vTPRETORNO',hsh:true},{av:'AV14SdtPermissao',fld:'vSDTPERMISSAO',grid:12}],[{av:'AV56GXV5',fld:'vGXV5'},{av:'AV13SdtPermissaoItem',fld:'vSDTPERMISSAOITEM'},{av:'AV15SnSairTela',fld:'vSNSAIRTELA'},{av:'this.TIMERContainer.Enabled',ctrl:'TIMER',prop:'Enabled'},{av:'AV17TipoTela',fld:'vTIPOTELA'},{av:'AV52GXV2',fld:'vGXV2'},{av:'AV18TipoPermissaoId',fld:'vTIPOPERMISSAOID'},{av:'AV12PermissaoConcSeq',fld:'vPERMISSAOCONCSEQ'},{av:'AV11Mensagem',fld:'vMENSAGEM'},{av:'AV53GXV3',fld:'vGXV3'},{av:'gx.fn.getCtrlProperty("TABADVERTENCIA","Visible")',ctrl:'TABADVERTENCIA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TABSENHA","Visible")',ctrl:'TABSENHA',prop:'Visible'},{ctrl:'BTNSAIR',prop:'Visible'},{ctrl:'BTNAUTORIZAR',prop:'Visible'},{ctrl:'BTNRECUSAR',prop:'Visible'},{ctrl:'BTNOK',prop:'Visible'},{av:'AV36QtLibAdvert',fld:'vQTLIBADVERT'},{av:'AV54GXV4',fld:'vGXV4'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("TABGERAL","Class")',ctrl:'TABGERAL',prop:'Class'},{av:'AV35TipoPermissaoDescricaoCons',fld:'vTIPOPERMISSAODESCRICAOCONS'},{av:'AV33SnOk',fld:'vSNOK'},{av:'AV58GXV7',fld:'vGXV7'}]];
   this.EnterCtrl = ["BTNOK"];
   this.setVCMap("AV14SdtPermissao", "vSDTPERMISSAO", 0, "CollSdtPermissao.SdtPermissaoItem");
   this.setVCMap("A568TipoPermissaoId", "TIPOPERMISSAOID", 0, "int");
   this.setVCMap("A557TipoPermissaoDescricao", "TIPOPERMISSAODESCRICAO", 0, "svchar");
   this.setVCMap("AV33SnOk", "vSNOK", 0, "char");
   this.setVCMap("AV42TpRetorno", "vTPRETORNO", 0, "svchar");
   this.setVCMap("AV19NomeSessao", "vNOMESESSAO", 0, "svchar");
   this.setVCMap("AV14SdtPermissao", "vSDTPERMISSAO", 0, "CollSdtPermissao.SdtPermissaoItem");
   this.setVCMap("A568TipoPermissaoId", "TIPOPERMISSAOID", 0, "int");
   this.setVCMap("A557TipoPermissaoDescricao", "TIPOPERMISSAODESCRICAO", 0, "svchar");
   this.setVCMap("AV33SnOk", "vSNOK", 0, "char");
   this.setVCMap("AV42TpRetorno", "vTPRETORNO", 0, "svchar");
   GrdpermContainer.addRefreshingVar({rfrVar:"AV24BmpMsgDet", rfrProp:"Value", gxAttId:"Bmpmsgdet"});
   GrdpermContainer.addRefreshingVar({rfrVar:"AV14SdtPermissao"});
   GrdpermContainer.addRefreshingVar(this.GXValidFnc[57]);
   GrdpermContainer.addRefreshingVar(this.GXValidFnc[59]);
   GrdpermContainer.addRefreshingVar({rfrVar:"A568TipoPermissaoId"});
   GrdpermContainer.addRefreshingVar(this.GXValidFnc[33]);
   GrdpermContainer.addRefreshingVar({rfrVar:"A557TipoPermissaoDescricao"});
   GrdpermContainer.addRefreshingVar({rfrVar:"AV33SnOk"});
   GrdpermContainer.addRefreshingVar({rfrVar:"AV42TpRetorno"});
   GrdpermContainer.addRefreshingVar(this.GXValidFnc[56]);
   this.addGridBCProperty("Sdtpermissao", ["NumeroSolicitacao"], this.GXValidFnc[13], "AV14SdtPermissao");
   this.addGridBCProperty("Sdtpermissao", ["TipoPermissao"], this.GXValidFnc[14], "AV14SdtPermissao");
   this.addGridBCProperty("Sdtpermissao", ["TipoVerificacao"], this.GXValidFnc[17], "AV14SdtPermissao");
   this.addGridBCProperty("Sdtpermissao", ["SnLiberado"], this.GXValidFnc[18], "AV14SdtPermissao");
   this.addGridBCProperty("Sdtpermissao", ["MsgDetalhada"], this.GXValidFnc[19], "AV14SdtPermissao");
   this.InitStandaloneVars( );
});
gx.setParentObj(new haguardapermissao());

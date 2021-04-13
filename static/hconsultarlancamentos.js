/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:14:40.2
*/
gx.evt.autoSkip = false;
gx.define('hconsultarlancamentos', false, function () {
   this.ServerClass =  "hconsultarlancamentos" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("3", "'INSERIR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV22ContaPagRecEmpresaId=gx.fn.getControlValue("vCONTAPAGRECEMPRESAID") ;
      this.AV23ContaPagRecNumero=gx.fn.getIntegerValue("vCONTAPAGRECNUMERO",'.') ;
      this.A75UsuarioId=gx.fn.getControlValue("USUARIOID") ;
      this.AV7UsrCod=gx.fn.getControlValue("vUSRCOD") ;
      this.A219UsuarioNome=gx.fn.getControlValue("USUARIONOME") ;
      this.A1566UsuarioFilialEmpresaId=gx.fn.getControlValue("USUARIOFILIALEMPRESAID") ;
      this.A1564UsuarioFilialId=gx.fn.getIntegerValue("USUARIOFILIALID",'.') ;
      this.AV37SnProib=gx.fn.getControlValue("vSNPROIB") ;
      this.AV66SnHaver=gx.fn.getControlValue("vSNHAVER") ;
      this.AV12MsgErro=gx.fn.getControlValue("vMSGERRO") ;
      this.A1685ContaPagRecEmpresaId=gx.fn.getControlValue("CONTAPAGRECEMPRESAID") ;
      this.A1719ContaPagRecUsuarioAlt=gx.fn.getControlValue("CONTAPAGRECUSUARIOALT") ;
      this.A2004ContaPagRecCliForSituacao=gx.fn.getControlValue("CONTAPAGRECCLIFORSITUACAO") ;
      this.A1654ContaPagRecFilialEmpId=gx.fn.getControlValue("CONTAPAGRECFILIALEMPID") ;
      this.A1655ContaPagRecFilialId=gx.fn.getIntegerValue("CONTAPAGRECFILIALID",'.') ;
      this.AV31SnContaCliCanc=gx.fn.getControlValue("vSNCONTACLICANC") ;
      this.AV32SnContaForCanc=gx.fn.getControlValue("vSNCONTAFORCANC") ;
      this.AV39ContaPagRecPagRec=gx.fn.getControlValue("vCONTAPAGRECPAGREC") ;
      this.AV41ContaLancamData=gx.fn.getDateValue("vCONTALANCAMDATA") ;
      this.AV42ContaLancamSequencia=gx.fn.getIntegerValue("vCONTALANCAMSEQUENCIA",'.') ;
      this.AV51SnIntFinCbl=gx.fn.getControlValue("vSNINTFINCBL") ;
      this.AV63ContaLancamStContabil=gx.fn.getControlValue("vCONTALANCAMSTCONTABIL") ;
      this.A341LancamentoContabilEmpresaid=gx.fn.getControlValue("LANCAMENTOCONTABILEMPRESAID") ;
      this.AV52LancamentoContabilEmpresaId=gx.fn.getControlValue("vLANCAMENTOCONTABILEMPRESAID") ;
      this.A2745ItensLancamentoContabilFinancU=gx.fn.getControlValue("ITENSLANCAMENTOCONTABILFINANCU") ;
      this.AV38SnCaixaBanco=gx.fn.getControlValue("vSNCAIXABANCO") ;
      this.AV64ContaLancamTpLancamTipo=gx.fn.getControlValue("vCONTALANCAMTPLANCAMTIPO") ;
      this.AV65ContaLancamTpLancamEstorno=gx.fn.getControlValue("vCONTALANCAMTPLANCAMESTORNO") ;
      this.A1944LancamCxaBcoContaCaiBanEmpId=gx.fn.getControlValue("LANCAMCXABCOCONTACAIBANEMPID") ;
      this.AV40Empresalancamcxabcoconta=gx.fn.getControlValue("vEMPRESALANCAMCXABCOCONTA") ;
      this.A1946LancamCxaBcoContaLanConEmpId=gx.fn.getControlValue("LANCAMCXABCOCONTALANCONEMPID") ;
      this.A1947LancamCxaBcoContaLanConNumero=gx.fn.getIntegerValue("LANCAMCXABCOCONTALANCONNUMERO",'.') ;
      this.A1948LancamCxaBcoContaLanConSeq=gx.fn.getIntegerValue("LANCAMCXABCOCONTALANCONSEQ",'.') ;
      this.A61LancamentoContabilId=gx.fn.getIntegerValue("LANCAMENTOCONTABILID",'.') ;
      this.A67ItensLancamentoContabilSequenc=gx.fn.getIntegerValue("ITENSLANCAMENTOCONTABILSEQUENC",'.') ;
      this.AV35DataAux=gx.fn.getDateValue("vDATAAUX") ;
      this.AV36Tipo=gx.fn.getControlValue("vTIPO") ;
      this.AV53lancamentocontabilid=gx.fn.getIntegerValue("vLANCAMENTOCONTABILID",'.') ;
      this.AV54ItensLancamentoContabilSequencia=gx.fn.getIntegerValue("vITENSLANCAMENTOCONTABILSEQUENCIA",'.') ;
      this.A60LancamentoContabilData=gx.fn.getDateValue("LANCAMENTOCONTABILDATA") ;
   };
   this.Valid_Contapagrecnumero=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECNUMERO");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagreccliforid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECCLIFORID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contapagrecconvenioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CONTAPAGRECCONVENIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Contalancamtplancamid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(55) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CONTALANCAMTPLANCAMID", gx.fn.currentGridRowImpl(55));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e20c02_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("halterarlancamentos",[this.AV22ContaPagRecEmpresaId, this.AV23ContaPagRecNumero, this.A1803ContaLancamSequencia, "C"]), []);
      this.refreshOutputs([]);
   };
   this.e13c02_client=function()
   {
      this.executeServerEvent("'CONSULTALOGGERAL'", true, null, false, false);
   };
   this.e15c02_client=function()
   {
      this.executeServerEvent("'CONSULTALOG'", true, arguments[0], false, false);
   };
   this.e11c02_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e12c02_client=function()
   {
      this.executeServerEvent("'INSERIR'", true, null, false, false);
   };
   this.e18c02_client=function()
   {
      this.executeServerEvent("'ALTERARLANCAMENTOS'", true, arguments[0], false, false);
   };
   this.e19c02_client=function()
   {
      this.executeServerEvent("'EXCLUIRLANCAMENTOS'", true, arguments[0], false, false);
   };
   this.e21c02_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e22c02_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,29,31,33,36,38,41,43,45,50,53,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,76,81,82,84,85];
   this.GXLastCtrlId =85;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",55,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconsultarlancamentos",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",false,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(1803,56,"CONTALANCAMSEQUENCIA","Seq","","ContaLancamSequencia","int",0,"px",3,3,"right",null,[],1803,"ContaLancamSequencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1805,57,"CONTALANCAMDATA","Data","","ContaLancamData","date",0,"px",10,10,"right",null,[],1805,"ContaLancamData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1783,58,"CONTALANCAMTPLANCAMID","Código","","ContaLancamTpLancamId","int",0,"px",4,4,"right",null,[],1783,"ContaLancamTpLancamId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1784,59,"CONTALANCAMTPLANCAMDESCRICAO","Descrição do Lançamento","","ContaLancamTpLancamDescricao","svchar",0,"px",25,25,"left",null,[],1784,"ContaLancamTpLancamDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addSingleLineEdit(1807,60,"CONTALANCAMVALOR","Valor","","ContaLancamValor","decimal",0,"px",22,22,"right",null,[],1807,"ContaLancamValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Stcontabil",61,"vSTCONTABIL","Situação Contabil","","StContabil","svchar",0,"px",20,20,"left",null,[],"Stcontabil","StContabil",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit("Tradutor",62,"vTRADUTOR","Tradutor","","Tradutor","char",0,"px",10,10,"left",null,[],"Tradutor","Tradutor",true,0,false,false,"SemQuebraGrid",1,"");
   Grid1Container.addBitmap("&Bmplog","vBMPLOG",63,0,"px",17,"px","e15c02_client","","Log","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpalt","vBMPALT",64,0,"px",17,"px","e18c02_client","","Alt","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpexc","vBMPEXC",65,0,"px",17,"px","e19c02_client","","Exc","Image","GridColumnImage");
   Grid1Container.addBitmap("&Bmpcon","vBMPCON",66,0,"px",17,"px","e20c02_client","","Con","Image","GridColumnImage");
   Grid1Container.addCheckBox(2031,67,"CONTALANCAMTPLANCAMESTORNO","Conta Lancam Tp Lancam Estorno","","ContaLancamTpLancamEstorno","char","S","N",null,false,false,0,"px","");
   Grid1Container.addRadioButton(1804,68,"CONTALANCAMSTCONTABIL","Situação Contábil","ContaLancamStContabil","char",null,false,false,false,"");
   Grid1Container.addSingleLineEdit(2028,69,"CONTALANCAMCCONTABILTRADUTOR","Conta Lancam CContabil Tradutor","","ContaLancamCContabilTradutor","int",0,"px",5,5,"right",null,[],2028,"ContaLancamCContabilTradutor",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2030,70,"CONTALANCAMTPLANCAMTIPO","","","ContaLancamTpLancamTipo","char",0,"px",1,1,"left",null,[],2030,"ContaLancamTpLancamTipo",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE3",grid:0};
   GXValidFnc[5]={fld:"TABLE4",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecnumero,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPAGRECNUMERO",gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECSITUACAO",gxz:"Z1692ContaPagRecSituacao",gxold:"O1692ContaPagRecSituacao",gxvar:"A1692ContaPagRecSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1692ContaPagRecSituacao=Value},v2z:function(Value){gx.O.Z1692ContaPagRecSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("CONTAPAGRECSITUACAO",gx.O.A1692ContaPagRecSituacao)},c2v:function(){gx.O.A1692ContaPagRecSituacao=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECSITUACAO")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECPAGREC",gxz:"Z1693ContaPagRecPagRec",gxold:"O1693ContaPagRecPagRec",gxvar:"A1693ContaPagRecPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.A1693ContaPagRecPagRec=Value},v2z:function(Value){gx.O.Z1693ContaPagRecPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("CONTAPAGRECPAGREC",gx.O.A1693ContaPagRecPagRec)},c2v:function(){gx.O.A1693ContaPagRecPagRec=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECPAGREC")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE7",grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contapagreccliforid,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORID",gxz:"Z1637ContaPagRecCliForId",gxold:"O1637ContaPagRecCliForId",gxvar:"A1637ContaPagRecCliForId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1637ContaPagRecCliForId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1637ContaPagRecCliForId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPAGRECCLIFORID",gx.O.A1637ContaPagRecCliForId,0)},c2v:function(){gx.O.A1637ContaPagRecCliForId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPAGRECCLIFORID",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECCLIFORFANTASIA",gxz:"Z1638ContaPagRecCliForFantasia",gxold:"O1638ContaPagRecCliForFantasia",gxvar:"A1638ContaPagRecCliForFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1638ContaPagRecCliForFantasia=Value},v2z:function(Value){gx.O.Z1638ContaPagRecCliForFantasia=Value},v2c:function(){gx.fn.setControlValue("CONTAPAGRECCLIFORFANTASIA",gx.O.A1638ContaPagRecCliForFantasia,0)},c2v:function(){gx.O.A1638ContaPagRecCliForFantasia=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECCLIFORFANTASIA")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TXTCONVENIO", format:0,grid:0};
   GXValidFnc[38]={fld:"TBCONVENIO",grid:0};
   GXValidFnc[41]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Contapagrecconvenioid,isvalid:null,rgrid:[],fld:"CONTAPAGRECCONVENIOID",gxz:"Z1688ContaPagRecConvenioId",gxold:"O1688ContaPagRecConvenioId",gxvar:"A1688ContaPagRecConvenioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A1688ContaPagRecConvenioId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1688ContaPagRecConvenioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CONTAPAGRECCONVENIOID",gx.O.A1688ContaPagRecConvenioId,0)},c2v:function(){gx.O.A1688ContaPagRecConvenioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CONTAPAGRECCONVENIOID",'.')},nac:gx.falseFn};
   GXValidFnc[43]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECCONVENIODESC",gxz:"Z2100ContaPagRecConvenioDesc",gxold:"O2100ContaPagRecConvenioDesc",gxvar:"A2100ContaPagRecConvenioDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A2100ContaPagRecConvenioDesc=Value},v2z:function(Value){gx.O.Z2100ContaPagRecConvenioDesc=Value},v2c:function(){gx.fn.setControlValue("CONTAPAGRECCONVENIODESC",gx.O.A2100ContaPagRecConvenioDesc,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2100ContaPagRecConvenioDesc=this.val()},val:function(){return gx.fn.getControlValue("CONTAPAGRECCONVENIODESC")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[50]={fld:"TABLE1",grid:0};
   GXValidFnc[53]={fld:"BTNINSERIR",grid:0};
   GXValidFnc[56]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMSEQUENCIA",gxz:"Z1803ContaLancamSequencia",gxold:"O1803ContaLancamSequencia",gxvar:"A1803ContaLancamSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1803ContaLancamSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1803ContaLancamSequencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMSEQUENCIA",row || gx.fn.currentGridRowImpl(55),gx.O.A1803ContaLancamSequencia,0)},c2v:function(){gx.O.A1803ContaLancamSequencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTALANCAMSEQUENCIA",row || gx.fn.currentGridRowImpl(55),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMDATA",gxz:"Z1805ContaLancamData",gxold:"O1805ContaLancamData",gxvar:"A1805ContaLancamData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1805ContaLancamData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1805ContaLancamData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMDATA",row || gx.fn.currentGridRowImpl(55),gx.O.A1805ContaLancamData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1805ContaLancamData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTALANCAMDATA",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:this.Valid_Contalancamtplancamid,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMID",gxz:"Z1783ContaLancamTpLancamId",gxold:"O1783ContaLancamTpLancamId",gxvar:"A1783ContaLancamTpLancamId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1783ContaLancamTpLancamId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1783ContaLancamTpLancamId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMTPLANCAMID",row || gx.fn.currentGridRowImpl(55),gx.O.A1783ContaLancamTpLancamId,0)},c2v:function(){gx.O.A1783ContaLancamTpLancamId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTALANCAMTPLANCAMID",row || gx.fn.currentGridRowImpl(55),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMDESCRICAO",gxz:"Z1784ContaLancamTpLancamDescricao",gxold:"O1784ContaLancamTpLancamDescricao",gxvar:"A1784ContaLancamTpLancamDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1784ContaLancamTpLancamDescricao=Value},v2z:function(Value){gx.O.Z1784ContaLancamTpLancamDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMTPLANCAMDESCRICAO",row || gx.fn.currentGridRowImpl(55),gx.O.A1784ContaLancamTpLancamDescricao,0)},c2v:function(){gx.O.A1784ContaLancamTpLancamDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMTPLANCAMDESCRICAO",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMVALOR",gxz:"Z1807ContaLancamValor",gxold:"O1807ContaLancamValor",gxvar:"A1807ContaLancamValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1807ContaLancamValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1807ContaLancamValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("CONTALANCAMVALOR",row || gx.fn.currentGridRowImpl(55),gx.O.A1807ContaLancamValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1807ContaLancamValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("CONTALANCAMVALOR",row || gx.fn.currentGridRowImpl(55),'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vSTCONTABIL",gxz:"ZV55StContabil",gxold:"OV55StContabil",gxvar:"AV55StContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV55StContabil=Value},v2z:function(Value){gx.O.ZV55StContabil=Value},v2c:function(row){gx.fn.setGridControlValue("vSTCONTABIL",row || gx.fn.currentGridRowImpl(55),gx.O.AV55StContabil,0)},c2v:function(){gx.O.AV55StContabil=this.val()},val:function(row){return gx.fn.getGridControlValue("vSTCONTABIL",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vTRADUTOR",gxz:"ZV28Tradutor",gxold:"OV28Tradutor",gxvar:"AV28Tradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV28Tradutor=Value},v2z:function(Value){gx.O.ZV28Tradutor=Value},v2c:function(row){gx.fn.setGridControlValue("vTRADUTOR",row || gx.fn.currentGridRowImpl(55),gx.O.AV28Tradutor,0)},c2v:function(){gx.O.AV28Tradutor=this.val()},val:function(row){return gx.fn.getGridControlValue("vTRADUTOR",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[63]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPLOG",gxz:"ZV43bmpLog",gxold:"OV43bmpLog",gxvar:"AV43bmpLog",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV43bmpLog=Value},v2z:function(Value){gx.O.ZV43bmpLog=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPLOG",row || gx.fn.currentGridRowImpl(55),gx.O.AV43bmpLog,gx.O.AV74Bmplog_GXI)},c2v:function(){gx.O.AV74Bmplog_GXI=this.val_GXI();gx.O.AV43bmpLog=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPLOG",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPLOG_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV74Bmplog_GXI',nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV25bmpAlt",gxold:"OV25bmpAlt",gxvar:"AV25bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV25bmpAlt=Value},v2z:function(Value){gx.O.ZV25bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(55),gx.O.AV25bmpAlt,gx.O.AV71Bmpalt_GXI)},c2v:function(){gx.O.AV71Bmpalt_GXI=this.val_GXI();gx.O.AV25bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV71Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV26bmpExc",gxold:"OV26bmpExc",gxvar:"AV26bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV26bmpExc=Value},v2z:function(Value){gx.O.ZV26bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(55),gx.O.AV26bmpExc,gx.O.AV72Bmpexc_GXI)},c2v:function(){gx.O.AV72Bmpexc_GXI=this.val_GXI();gx.O.AV26bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV72Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV45bmpCon",gxold:"OV45bmpCon",gxvar:"AV45bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV45bmpCon=Value},v2z:function(Value){gx.O.ZV45bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(55),gx.O.AV45bmpCon,gx.O.AV73Bmpcon_GXI)},c2v:function(){gx.O.AV73Bmpcon_GXI=this.val_GXI();gx.O.AV45bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(55))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(55))}, gxvar_GXI:'AV73Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMESTORNO",gxz:"Z2031ContaLancamTpLancamEstorno",gxold:"O2031ContaLancamTpLancamEstorno",gxvar:"A2031ContaLancamTpLancamEstorno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){gx.O.A2031ContaLancamTpLancamEstorno=Value},v2z:function(Value){gx.O.Z2031ContaLancamTpLancamEstorno=Value},v2c:function(row){gx.fn.setGridCheckBoxValue("CONTALANCAMTPLANCAMESTORNO",row || gx.fn.currentGridRowImpl(55),gx.O.A2031ContaLancamTpLancamEstorno,"S");if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2031ContaLancamTpLancamEstorno=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMTPLANCAMESTORNO",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[68]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMSTCONTABIL",gxz:"Z1804ContaLancamStContabil",gxold:"O1804ContaLancamStContabil",gxvar:"A1804ContaLancamStContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"radio",inputType:'text',v2v:function(Value){gx.O.A1804ContaLancamStContabil=Value},v2z:function(Value){gx.O.Z1804ContaLancamStContabil=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMSTCONTABIL",row || gx.fn.currentGridRowImpl(55),gx.O.A1804ContaLancamStContabil,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1804ContaLancamStContabil=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMSTCONTABIL",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMCCONTABILTRADUTOR",gxz:"Z2028ContaLancamCContabilTradutor",gxold:"O2028ContaLancamCContabilTradutor",gxvar:"A2028ContaLancamCContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2028ContaLancamCContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2028ContaLancamCContabilTradutor=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMCCONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(55),gx.O.A2028ContaLancamCContabilTradutor,0)},c2v:function(){gx.O.A2028ContaLancamCContabilTradutor=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTALANCAMCCONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(55),'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:55,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTALANCAMTPLANCAMTIPO",gxz:"Z2030ContaLancamTpLancamTipo",gxold:"O2030ContaLancamTpLancamTipo",gxvar:"A2030ContaLancamTpLancamTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2030ContaLancamTpLancamTipo=Value},v2z:function(Value){gx.O.Z2030ContaLancamTpLancamTipo=Value},v2c:function(row){gx.fn.setGridControlValue("CONTALANCAMTPLANCAMTIPO",row || gx.fn.currentGridRowImpl(55),gx.O.A2030ContaLancamTpLancamTipo,0)},c2v:function(){gx.O.A2030ContaLancamTpLancamTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTALANCAMTPLANCAMTIPO",row || gx.fn.currentGridRowImpl(55))},nac:gx.falseFn};
   GXValidFnc[76]={fld:"TABLE5",grid:0};
   GXValidFnc[81]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOFILIALEMPRESAID",gxz:"ZV33UsuarioFilialEmpresaId",gxold:"OV33UsuarioFilialEmpresaId",gxvar:"AV33UsuarioFilialEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33UsuarioFilialEmpresaId=Value},v2z:function(Value){gx.O.ZV33UsuarioFilialEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vUSUARIOFILIALEMPRESAID",gx.O.AV33UsuarioFilialEmpresaId,0)},c2v:function(){gx.O.AV33UsuarioFilialEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vUSUARIOFILIALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[82]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vUSUARIOFILIALID",gxz:"ZV34UsuarioFilialId",gxold:"OV34UsuarioFilialId",gxvar:"AV34UsuarioFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34UsuarioFilialId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34UsuarioFilialId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vUSUARIOFILIALID",gx.O.AV34UsuarioFilialId,0)},c2v:function(){gx.O.AV34UsuarioFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vUSUARIOFILIALID",'.')},nac:gx.falseFn};
   GXValidFnc[84]={fld:"BTNLOG",grid:0};
   GXValidFnc[85]={fld:"BTNHELP",grid:0};
   this.A1686ContaPagRecNumero = 0 ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.A1692ContaPagRecSituacao = "" ;
   this.Z1692ContaPagRecSituacao = "" ;
   this.O1692ContaPagRecSituacao = "" ;
   this.A1693ContaPagRecPagRec = "" ;
   this.Z1693ContaPagRecPagRec = "" ;
   this.O1693ContaPagRecPagRec = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.Z1637ContaPagRecCliForId = 0 ;
   this.O1637ContaPagRecCliForId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.Z1638ContaPagRecCliForFantasia = "" ;
   this.O1638ContaPagRecCliForFantasia = "" ;
   this.A1688ContaPagRecConvenioId = 0 ;
   this.Z1688ContaPagRecConvenioId = 0 ;
   this.O1688ContaPagRecConvenioId = 0 ;
   this.A2100ContaPagRecConvenioDesc = "" ;
   this.Z2100ContaPagRecConvenioDesc = "" ;
   this.O2100ContaPagRecConvenioDesc = "" ;
   this.Z1803ContaLancamSequencia = 0 ;
   this.O1803ContaLancamSequencia = 0 ;
   this.Z1805ContaLancamData = gx.date.nullDate() ;
   this.O1805ContaLancamData = gx.date.nullDate() ;
   this.Z1783ContaLancamTpLancamId = 0 ;
   this.O1783ContaLancamTpLancamId = 0 ;
   this.Z1784ContaLancamTpLancamDescricao = "" ;
   this.O1784ContaLancamTpLancamDescricao = "" ;
   this.Z1807ContaLancamValor = 0 ;
   this.O1807ContaLancamValor = 0 ;
   this.ZV55StContabil = "" ;
   this.OV55StContabil = "" ;
   this.ZV28Tradutor = "" ;
   this.OV28Tradutor = "" ;
   this.ZV43bmpLog = "" ;
   this.OV43bmpLog = "" ;
   this.ZV25bmpAlt = "" ;
   this.OV25bmpAlt = "" ;
   this.ZV26bmpExc = "" ;
   this.OV26bmpExc = "" ;
   this.ZV45bmpCon = "" ;
   this.OV45bmpCon = "" ;
   this.Z2031ContaLancamTpLancamEstorno = "" ;
   this.O2031ContaLancamTpLancamEstorno = "" ;
   this.Z1804ContaLancamStContabil = "" ;
   this.O1804ContaLancamStContabil = "" ;
   this.Z2028ContaLancamCContabilTradutor = 0 ;
   this.O2028ContaLancamCContabilTradutor = 0 ;
   this.Z2030ContaLancamTpLancamTipo = "" ;
   this.O2030ContaLancamTpLancamTipo = "" ;
   this.AV33UsuarioFilialEmpresaId = "" ;
   this.ZV33UsuarioFilialEmpresaId = "" ;
   this.OV33UsuarioFilialEmpresaId = "" ;
   this.AV34UsuarioFilialId = 0 ;
   this.ZV34UsuarioFilialId = 0 ;
   this.OV34UsuarioFilialId = 0 ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1637ContaPagRecCliForId = 0 ;
   this.A1638ContaPagRecCliForFantasia = "" ;
   this.A1688ContaPagRecConvenioId = 0 ;
   this.A2100ContaPagRecConvenioDesc = "" ;
   this.AV33UsuarioFilialEmpresaId = "" ;
   this.AV34UsuarioFilialId = 0 ;
   this.AV22ContaPagRecEmpresaId = "" ;
   this.AV23ContaPagRecNumero = 0 ;
   this.AV39ContaPagRecPagRec = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1636ContaPagRecCliForEmpId = "" ;
   this.A1687ContaPagRecConvenioEmpId = "" ;
   this.A1782ContaLancamTpLancamEmpId = "" ;
   this.A1785ContaLancamCContabilEmpId = "" ;
   this.A1786ContaLancamCContabilId = "" ;
   this.A1803ContaLancamSequencia = 0 ;
   this.A1805ContaLancamData = gx.date.nullDate() ;
   this.A1783ContaLancamTpLancamId = 0 ;
   this.A1784ContaLancamTpLancamDescricao = "" ;
   this.A1807ContaLancamValor = 0 ;
   this.AV55StContabil = "" ;
   this.AV28Tradutor = "" ;
   this.AV43bmpLog = "" ;
   this.AV25bmpAlt = "" ;
   this.AV26bmpExc = "" ;
   this.AV45bmpCon = "" ;
   this.A2031ContaLancamTpLancamEstorno = "" ;
   this.A1804ContaLancamStContabil = "" ;
   this.A2028ContaLancamCContabilTradutor = 0 ;
   this.A2030ContaLancamTpLancamTipo = "" ;
   this.A341LancamentoContabilEmpresaid = "" ;
   this.A2745ItensLancamentoContabilFinancU = "" ;
   this.A1719ContaPagRecUsuarioAlt = "" ;
   this.A2004ContaPagRecCliForSituacao = "" ;
   this.A1654ContaPagRecFilialEmpId = "" ;
   this.A1655ContaPagRecFilialId = 0 ;
   this.A67ItensLancamentoContabilSequenc = 0 ;
   this.A61LancamentoContabilId = 0 ;
   this.A60LancamentoContabilData = gx.date.nullDate() ;
   this.A1948LancamCxaBcoContaLanConSeq = 0 ;
   this.A1947LancamCxaBcoContaLanConNumero = 0 ;
   this.A1946LancamCxaBcoContaLanConEmpId = "" ;
   this.A1944LancamCxaBcoContaCaiBanEmpId = "" ;
   this.A75UsuarioId = "" ;
   this.A219UsuarioNome = "" ;
   this.A1566UsuarioFilialEmpresaId = "" ;
   this.A1564UsuarioFilialId = 0 ;
   this.AV7UsrCod = "" ;
   this.AV37SnProib = "" ;
   this.AV66SnHaver = "" ;
   this.AV12MsgErro = "" ;
   this.AV31SnContaCliCanc = "" ;
   this.AV32SnContaForCanc = "" ;
   this.AV41ContaLancamData = gx.date.nullDate() ;
   this.AV42ContaLancamSequencia = 0 ;
   this.AV51SnIntFinCbl = "" ;
   this.AV63ContaLancamStContabil = "" ;
   this.AV52LancamentoContabilEmpresaId = "" ;
   this.AV38SnCaixaBanco = "" ;
   this.AV64ContaLancamTpLancamTipo = "" ;
   this.AV65ContaLancamTpLancamEstorno = "" ;
   this.AV40Empresalancamcxabcoconta = "" ;
   this.AV35DataAux = gx.date.nullDate() ;
   this.AV36Tipo = "" ;
   this.AV53lancamentocontabilid = 0 ;
   this.AV54ItensLancamentoContabilSequencia = 0 ;
   this.Events = {"e13c02_client": ["'CONSULTALOGGERAL'", true] ,"e15c02_client": ["'CONSULTALOG'", true] ,"e11c02_client": ["'FECHAR'", true] ,"e12c02_client": ["'INSERIR'", true] ,"e18c02_client": ["'ALTERARLANCAMENTOS'", true] ,"e19c02_client": ["'EXCLUIRLANCAMENTOS'", true] ,"e21c02_client": ["ENTER", true] ,"e22c02_client": ["CANCEL", true] ,"e20c02_client": ["'CONSULTAR'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV22ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID',hsh:true},{av:'AV23ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO',hsh:true},{av:'AV25bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV26bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV45bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A1805ContaLancamData',fld:'CONTALANCAMDATA'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'A1804ContaLancamStContabil',fld:'CONTALANCAMSTCONTABIL'},{av:'A2030ContaLancamTpLancamTipo',fld:'CONTALANCAMTPLANCAMTIPO'},{av:'A2031ContaLancamTpLancamEstorno',fld:'CONTALANCAMTPLANCAMESTORNO'},{av:'A2028ContaLancamCContabilTradutor',fld:'CONTALANCAMCCONTABILTRADUTOR'},{av:'AV37SnProib',fld:'vSNPROIB'},{av:'AV66SnHaver',fld:'vSNHAVER'},{av:'AV12MsgErro',fld:'vMSGERRO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1719ContaPagRecUsuarioAlt',fld:'CONTAPAGRECUSUARIOALT'},{av:'A2004ContaPagRecCliForSituacao',fld:'CONTAPAGRECCLIFORSITUACAO'},{av:'A1654ContaPagRecFilialEmpId',fld:'CONTAPAGRECFILIALEMPID'},{av:'A1655ContaPagRecFilialId',fld:'CONTAPAGRECFILIALID'},{av:'AV31SnContaCliCanc',fld:'vSNCONTACLICANC'},{av:'AV32SnContaForCanc',fld:'vSNCONTAFORCANC'},{av:'AV39ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true},{av:'AV33UsuarioFilialEmpresaId',fld:'vUSUARIOFILIALEMPRESAID'},{av:'AV34UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV41ContaLancamData',fld:'vCONTALANCAMDATA'},{av:'AV42ContaLancamSequencia',fld:'vCONTALANCAMSEQUENCIA'},{av:'AV51SnIntFinCbl',fld:'vSNINTFINCBL'},{av:'AV63ContaLancamStContabil',fld:'vCONTALANCAMSTCONTABIL'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'AV52LancamentoContabilEmpresaId',fld:'vLANCAMENTOCONTABILEMPRESAID'},{av:'A2745ItensLancamentoContabilFinancU',fld:'ITENSLANCAMENTOCONTABILFINANCU'},{av:'AV38SnCaixaBanco',fld:'vSNCAIXABANCO'},{av:'AV64ContaLancamTpLancamTipo',fld:'vCONTALANCAMTPLANCAMTIPO'},{av:'AV65ContaLancamTpLancamEstorno',fld:'vCONTALANCAMTPLANCAMESTORNO'},{av:'A1944LancamCxaBcoContaCaiBanEmpId',fld:'LANCAMCXABCOCONTACAIBANEMPID'},{av:'AV40Empresalancamcxabcoconta',fld:'vEMPRESALANCAMCXABCOCONTA'},{av:'A1946LancamCxaBcoContaLanConEmpId',fld:'LANCAMCXABCOCONTALANCONEMPID'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'AV35DataAux',fld:'vDATAAUX'},{av:'AV36Tipo',fld:'vTIPO'},{av:'AV53lancamentocontabilid',fld:'vLANCAMENTOCONTABILID'},{av:'AV54ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1566UsuarioFilialEmpresaId',fld:'USUARIOFILIALEMPRESAID'},{av:'A1564UsuarioFilialId',fld:'USUARIOFILIALID'}],[{av:'gx.fn.getCtrlProperty("TXTCONVENIO","Visible")',ctrl:'TXTCONVENIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("TBCONVENIO","Visible")',ctrl:'TBCONVENIO',prop:'Visible'},{av:'AV31SnContaCliCanc',fld:'vSNCONTACLICANC'},{av:'AV32SnContaForCanc',fld:'vSNCONTAFORCANC'},{av:'AV38SnCaixaBanco',fld:'vSNCAIXABANCO'},{av:'AV51SnIntFinCbl',fld:'vSNINTFINCBL'},{av:'AV33UsuarioFilialEmpresaId',fld:'vUSUARIOFILIALEMPRESAID'},{av:'AV34UsuarioFilialId',fld:'vUSUARIOFILIALID'}]];
   this.EvtParms["'CONSULTALOGGERAL'"] = [[{av:'AV22ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID',hsh:true},{av:'AV23ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO',hsh:true}],[{av:'AV50Log',fld:'vLOG'}]];
   this.EvtParms["'CONSULTALOG'"] = [[{av:'AV22ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID',hsh:true},{av:'AV23ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO',hsh:true},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'}],[{av:'AV50Log',fld:'vLOG'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV22ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID',hsh:true},{av:'AV23ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO',hsh:true},{av:'AV39ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true}],[{av:'AV46Filtros',fld:'vFILTROS'},{av:'AV47PessoaId',fld:'vPESSOAID'},{av:'AV48SituacaoConta',fld:'vSITUACAOCONTA'},{av:'AV49TipoTela',fld:'vTIPOTELA'}]];
   this.EvtParms["GRID1.LOAD"] = [[{av:'A1805ContaLancamData',fld:'CONTALANCAMDATA'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'A1804ContaLancamStContabil',fld:'CONTALANCAMSTCONTABIL'},{av:'A2030ContaLancamTpLancamTipo',fld:'CONTALANCAMTPLANCAMTIPO'},{av:'A2031ContaLancamTpLancamEstorno',fld:'CONTALANCAMTPLANCAMESTORNO'},{av:'A2028ContaLancamCContabilTradutor',fld:'CONTALANCAMCCONTABILTRADUTOR'},{av:'AV37SnProib',fld:'vSNPROIB'},{av:'AV66SnHaver',fld:'vSNHAVER'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1566UsuarioFilialEmpresaId',fld:'USUARIOFILIALEMPRESAID'},{av:'A1564UsuarioFilialId',fld:'USUARIOFILIALID'},{av:'AV12MsgErro',fld:'vMSGERRO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'AV22ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID',hsh:true},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'AV23ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO',hsh:true},{av:'A1719ContaPagRecUsuarioAlt',fld:'CONTAPAGRECUSUARIOALT'},{av:'A2004ContaPagRecCliForSituacao',fld:'CONTAPAGRECCLIFORSITUACAO'},{av:'A1654ContaPagRecFilialEmpId',fld:'CONTAPAGRECFILIALEMPID'},{av:'A1655ContaPagRecFilialId',fld:'CONTAPAGRECFILIALID'},{av:'AV31SnContaCliCanc',fld:'vSNCONTACLICANC'},{av:'AV32SnContaForCanc',fld:'vSNCONTAFORCANC'},{av:'AV39ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true},{av:'AV33UsuarioFilialEmpresaId',fld:'vUSUARIOFILIALEMPRESAID'},{av:'AV34UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV41ContaLancamData',fld:'vCONTALANCAMDATA'},{av:'AV42ContaLancamSequencia',fld:'vCONTALANCAMSEQUENCIA'},{av:'AV51SnIntFinCbl',fld:'vSNINTFINCBL'},{av:'AV63ContaLancamStContabil',fld:'vCONTALANCAMSTCONTABIL'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'AV52LancamentoContabilEmpresaId',fld:'vLANCAMENTOCONTABILEMPRESAID'},{av:'A2745ItensLancamentoContabilFinancU',fld:'ITENSLANCAMENTOCONTABILFINANCU'},{av:'AV38SnCaixaBanco',fld:'vSNCAIXABANCO'},{av:'AV64ContaLancamTpLancamTipo',fld:'vCONTALANCAMTPLANCAMTIPO'},{av:'AV65ContaLancamTpLancamEstorno',fld:'vCONTALANCAMTPLANCAMESTORNO'},{av:'A1944LancamCxaBcoContaCaiBanEmpId',fld:'LANCAMCXABCOCONTACAIBANEMPID'},{av:'AV40Empresalancamcxabcoconta',fld:'vEMPRESALANCAMCXABCOCONTA'},{av:'A1946LancamCxaBcoContaLanConEmpId',fld:'LANCAMCXABCOCONTALANCONEMPID'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'AV35DataAux',fld:'vDATAAUX'},{av:'AV36Tipo',fld:'vTIPO'},{av:'AV53lancamentocontabilid',fld:'vLANCAMENTOCONTABILID'},{av:'AV54ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'}],[{av:'AV41ContaLancamData',fld:'vCONTALANCAMDATA'},{av:'AV42ContaLancamSequencia',fld:'vCONTALANCAMSEQUENCIA'},{av:'AV63ContaLancamStContabil',fld:'vCONTALANCAMSTCONTABIL'},{av:'AV64ContaLancamTpLancamTipo',fld:'vCONTALANCAMTPLANCAMTIPO'},{av:'AV65ContaLancamTpLancamEstorno',fld:'vCONTALANCAMTPLANCAMESTORNO'},{av:'AV30Digito',fld:'vDIGITO'},{av:'AV29DigitoChar',fld:'vDIGITOCHAR'},{av:'AV28Tradutor',fld:'vTRADUTOR'},{av:'AV55StContabil',fld:'vSTCONTABIL'},{av:'gx.fn.getCtrlProperty("vBMPALT","Enabled")',ctrl:'vBMPALT',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Enabled")',ctrl:'vBMPEXC',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV43bmpLog',fld:'vBMPLOG'},{av:'gx.fn.getCtrlProperty("vBMPLOG","Tooltiptext")',ctrl:'vBMPLOG',prop:'Tooltiptext'},{ctrl:'vBMPLOG',prop:'Alternatetext'},{av:'AV31SnContaCliCanc',fld:'vSNCONTACLICANC'},{av:'AV32SnContaForCanc',fld:'vSNCONTAFORCANC'},{av:'AV38SnCaixaBanco',fld:'vSNCAIXABANCO'},{av:'AV51SnIntFinCbl',fld:'vSNINTFINCBL'},{av:'AV33UsuarioFilialEmpresaId',fld:'vUSUARIOFILIALEMPRESAID'},{av:'AV34UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV37SnProib',fld:'vSNPROIB'},{av:'AV36Tipo',fld:'vTIPO'},{av:'AV60ContaPagRecCliForSituacao',fld:'vCONTAPAGRECCLIFORSITUACAO'},{av:'AV61ContaPagRecFilialEmpId',fld:'vCONTAPAGRECFILIALEMPID'},{av:'AV62ContaPagRecFilialId',fld:'vCONTAPAGRECFILIALID'},{av:'AV12MsgErro',fld:'vMSGERRO'},{av:'AV66SnHaver',fld:'vSNHAVER'},{av:'AV53lancamentocontabilid',fld:'vLANCAMENTOCONTABILID'},{av:'AV54ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA'},{av:'AV35DataAux',fld:'vDATAAUX'}]];
   this.EvtParms["'INSERIR'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV22ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID',hsh:true},{av:'AV23ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO',hsh:true},{av:'AV25bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV26bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV45bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1566UsuarioFilialEmpresaId',fld:'USUARIOFILIALEMPRESAID'},{av:'A1564UsuarioFilialId',fld:'USUARIOFILIALID'},{av:'A1805ContaLancamData',fld:'CONTALANCAMDATA'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'A1804ContaLancamStContabil',fld:'CONTALANCAMSTCONTABIL'},{av:'A2030ContaLancamTpLancamTipo',fld:'CONTALANCAMTPLANCAMTIPO'},{av:'A2031ContaLancamTpLancamEstorno',fld:'CONTALANCAMTPLANCAMESTORNO'},{av:'A2028ContaLancamCContabilTradutor',fld:'CONTALANCAMCCONTABILTRADUTOR'},{av:'AV37SnProib',fld:'vSNPROIB'},{av:'AV66SnHaver',fld:'vSNHAVER'},{av:'AV12MsgErro',fld:'vMSGERRO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1719ContaPagRecUsuarioAlt',fld:'CONTAPAGRECUSUARIOALT'},{av:'A2004ContaPagRecCliForSituacao',fld:'CONTAPAGRECCLIFORSITUACAO'},{av:'A1654ContaPagRecFilialEmpId',fld:'CONTAPAGRECFILIALEMPID'},{av:'A1655ContaPagRecFilialId',fld:'CONTAPAGRECFILIALID'},{av:'AV31SnContaCliCanc',fld:'vSNCONTACLICANC'},{av:'AV32SnContaForCanc',fld:'vSNCONTAFORCANC'},{av:'AV39ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true},{av:'AV33UsuarioFilialEmpresaId',fld:'vUSUARIOFILIALEMPRESAID'},{av:'AV34UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV41ContaLancamData',fld:'vCONTALANCAMDATA'},{av:'AV42ContaLancamSequencia',fld:'vCONTALANCAMSEQUENCIA'},{av:'AV51SnIntFinCbl',fld:'vSNINTFINCBL'},{av:'AV63ContaLancamStContabil',fld:'vCONTALANCAMSTCONTABIL'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'AV52LancamentoContabilEmpresaId',fld:'vLANCAMENTOCONTABILEMPRESAID'},{av:'A2745ItensLancamentoContabilFinancU',fld:'ITENSLANCAMENTOCONTABILFINANCU'},{av:'AV38SnCaixaBanco',fld:'vSNCAIXABANCO'},{av:'AV64ContaLancamTpLancamTipo',fld:'vCONTALANCAMTPLANCAMTIPO'},{av:'AV65ContaLancamTpLancamEstorno',fld:'vCONTALANCAMTPLANCAMESTORNO'},{av:'A1944LancamCxaBcoContaCaiBanEmpId',fld:'LANCAMCXABCOCONTACAIBANEMPID'},{av:'AV40Empresalancamcxabcoconta',fld:'vEMPRESALANCAMCXABCOCONTA'},{av:'A1946LancamCxaBcoContaLanConEmpId',fld:'LANCAMCXABCOCONTALANCONEMPID'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'AV35DataAux',fld:'vDATAAUX'},{av:'AV36Tipo',fld:'vTIPO'},{av:'AV53lancamentocontabilid',fld:'vLANCAMENTOCONTABILID'},{av:'AV54ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'}],[]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV22ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID',hsh:true},{av:'AV23ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO',hsh:true},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'}],[]];
   this.EvtParms["'ALTERARLANCAMENTOS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV22ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID',hsh:true},{av:'AV23ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO',hsh:true},{av:'AV25bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV26bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV45bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1566UsuarioFilialEmpresaId',fld:'USUARIOFILIALEMPRESAID'},{av:'A1564UsuarioFilialId',fld:'USUARIOFILIALID'},{av:'A1805ContaLancamData',fld:'CONTALANCAMDATA'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'A1804ContaLancamStContabil',fld:'CONTALANCAMSTCONTABIL'},{av:'A2030ContaLancamTpLancamTipo',fld:'CONTALANCAMTPLANCAMTIPO'},{av:'A2031ContaLancamTpLancamEstorno',fld:'CONTALANCAMTPLANCAMESTORNO'},{av:'A2028ContaLancamCContabilTradutor',fld:'CONTALANCAMCCONTABILTRADUTOR'},{av:'AV37SnProib',fld:'vSNPROIB'},{av:'AV66SnHaver',fld:'vSNHAVER'},{av:'AV12MsgErro',fld:'vMSGERRO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1719ContaPagRecUsuarioAlt',fld:'CONTAPAGRECUSUARIOALT'},{av:'A2004ContaPagRecCliForSituacao',fld:'CONTAPAGRECCLIFORSITUACAO'},{av:'A1654ContaPagRecFilialEmpId',fld:'CONTAPAGRECFILIALEMPID'},{av:'A1655ContaPagRecFilialId',fld:'CONTAPAGRECFILIALID'},{av:'AV31SnContaCliCanc',fld:'vSNCONTACLICANC'},{av:'AV32SnContaForCanc',fld:'vSNCONTAFORCANC'},{av:'AV39ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true},{av:'AV33UsuarioFilialEmpresaId',fld:'vUSUARIOFILIALEMPRESAID'},{av:'AV34UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV41ContaLancamData',fld:'vCONTALANCAMDATA'},{av:'AV42ContaLancamSequencia',fld:'vCONTALANCAMSEQUENCIA'},{av:'AV51SnIntFinCbl',fld:'vSNINTFINCBL'},{av:'AV63ContaLancamStContabil',fld:'vCONTALANCAMSTCONTABIL'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'AV52LancamentoContabilEmpresaId',fld:'vLANCAMENTOCONTABILEMPRESAID'},{av:'A2745ItensLancamentoContabilFinancU',fld:'ITENSLANCAMENTOCONTABILFINANCU'},{av:'AV38SnCaixaBanco',fld:'vSNCAIXABANCO'},{av:'AV64ContaLancamTpLancamTipo',fld:'vCONTALANCAMTPLANCAMTIPO'},{av:'AV65ContaLancamTpLancamEstorno',fld:'vCONTALANCAMTPLANCAMESTORNO'},{av:'A1944LancamCxaBcoContaCaiBanEmpId',fld:'LANCAMCXABCOCONTACAIBANEMPID'},{av:'AV40Empresalancamcxabcoconta',fld:'vEMPRESALANCAMCXABCOCONTA'},{av:'A1946LancamCxaBcoContaLanConEmpId',fld:'LANCAMCXABCOCONTALANCONEMPID'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'AV35DataAux',fld:'vDATAAUX'},{av:'AV36Tipo',fld:'vTIPO'},{av:'AV53lancamentocontabilid',fld:'vLANCAMENTOCONTABILID'},{av:'AV54ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'}],[]];
   this.EvtParms["'EXCLUIRLANCAMENTOS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'AV22ContaPagRecEmpresaId',fld:'vCONTAPAGRECEMPRESAID',hsh:true},{av:'AV23ContaPagRecNumero',fld:'vCONTAPAGRECNUMERO',hsh:true},{av:'AV25bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV26bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV45bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'A1693ContaPagRecPagRec',fld:'CONTAPAGRECPAGREC'},{av:'A75UsuarioId',fld:'USUARIOID'},{av:'AV7UsrCod',fld:'vUSRCOD',hsh:true},{av:'A219UsuarioNome',fld:'USUARIONOME'},{av:'A1566UsuarioFilialEmpresaId',fld:'USUARIOFILIALEMPRESAID'},{av:'A1564UsuarioFilialId',fld:'USUARIOFILIALID'},{av:'A1805ContaLancamData',fld:'CONTALANCAMDATA'},{av:'A1803ContaLancamSequencia',fld:'CONTALANCAMSEQUENCIA'},{av:'A1804ContaLancamStContabil',fld:'CONTALANCAMSTCONTABIL'},{av:'A2030ContaLancamTpLancamTipo',fld:'CONTALANCAMTPLANCAMTIPO'},{av:'A2031ContaLancamTpLancamEstorno',fld:'CONTALANCAMTPLANCAMESTORNO'},{av:'A2028ContaLancamCContabilTradutor',fld:'CONTALANCAMCCONTABILTRADUTOR'},{av:'AV37SnProib',fld:'vSNPROIB'},{av:'AV66SnHaver',fld:'vSNHAVER'},{av:'AV12MsgErro',fld:'vMSGERRO'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'},{av:'A1719ContaPagRecUsuarioAlt',fld:'CONTAPAGRECUSUARIOALT'},{av:'A2004ContaPagRecCliForSituacao',fld:'CONTAPAGRECCLIFORSITUACAO'},{av:'A1654ContaPagRecFilialEmpId',fld:'CONTAPAGRECFILIALEMPID'},{av:'A1655ContaPagRecFilialId',fld:'CONTAPAGRECFILIALID'},{av:'AV31SnContaCliCanc',fld:'vSNCONTACLICANC'},{av:'AV32SnContaForCanc',fld:'vSNCONTAFORCANC'},{av:'AV39ContaPagRecPagRec',fld:'vCONTAPAGRECPAGREC',hsh:true},{av:'AV33UsuarioFilialEmpresaId',fld:'vUSUARIOFILIALEMPRESAID'},{av:'AV34UsuarioFilialId',fld:'vUSUARIOFILIALID'},{av:'AV41ContaLancamData',fld:'vCONTALANCAMDATA'},{av:'AV42ContaLancamSequencia',fld:'vCONTALANCAMSEQUENCIA'},{av:'AV51SnIntFinCbl',fld:'vSNINTFINCBL'},{av:'AV63ContaLancamStContabil',fld:'vCONTALANCAMSTCONTABIL'},{av:'A341LancamentoContabilEmpresaid',fld:'LANCAMENTOCONTABILEMPRESAID'},{av:'AV52LancamentoContabilEmpresaId',fld:'vLANCAMENTOCONTABILEMPRESAID'},{av:'A2745ItensLancamentoContabilFinancU',fld:'ITENSLANCAMENTOCONTABILFINANCU'},{av:'AV38SnCaixaBanco',fld:'vSNCAIXABANCO'},{av:'AV64ContaLancamTpLancamTipo',fld:'vCONTALANCAMTPLANCAMTIPO'},{av:'AV65ContaLancamTpLancamEstorno',fld:'vCONTALANCAMTPLANCAMESTORNO'},{av:'A1944LancamCxaBcoContaCaiBanEmpId',fld:'LANCAMCXABCOCONTACAIBANEMPID'},{av:'AV40Empresalancamcxabcoconta',fld:'vEMPRESALANCAMCXABCOCONTA'},{av:'A1946LancamCxaBcoContaLanConEmpId',fld:'LANCAMCXABCOCONTALANCONEMPID'},{av:'A1947LancamCxaBcoContaLanConNumero',fld:'LANCAMCXABCOCONTALANCONNUMERO'},{av:'A1948LancamCxaBcoContaLanConSeq',fld:'LANCAMCXABCOCONTALANCONSEQ'},{av:'A61LancamentoContabilId',fld:'LANCAMENTOCONTABILID'},{av:'A67ItensLancamentoContabilSequenc',fld:'ITENSLANCAMENTOCONTABILSEQUENC'},{av:'AV35DataAux',fld:'vDATAAUX'},{av:'AV36Tipo',fld:'vTIPO'},{av:'AV53lancamentocontabilid',fld:'vLANCAMENTOCONTABILID'},{av:'AV54ItensLancamentoContabilSequencia',fld:'vITENSLANCAMENTOCONTABILSEQUENCIA'},{av:'A60LancamentoContabilData',fld:'LANCAMENTOCONTABILDATA'}],[]];
   this.setVCMap("AV22ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV23ContaPagRecNumero", "vCONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   this.setVCMap("A1566UsuarioFilialEmpresaId", "USUARIOFILIALEMPRESAID", 0, "char");
   this.setVCMap("A1564UsuarioFilialId", "USUARIOFILIALID", 0, "int");
   this.setVCMap("AV37SnProib", "vSNPROIB", 0, "char");
   this.setVCMap("AV66SnHaver", "vSNHAVER", 0, "char");
   this.setVCMap("AV12MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("A1685ContaPagRecEmpresaId", "CONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("A1719ContaPagRecUsuarioAlt", "CONTAPAGRECUSUARIOALT", 0, "char");
   this.setVCMap("A2004ContaPagRecCliForSituacao", "CONTAPAGRECCLIFORSITUACAO", 0, "char");
   this.setVCMap("A1654ContaPagRecFilialEmpId", "CONTAPAGRECFILIALEMPID", 0, "char");
   this.setVCMap("A1655ContaPagRecFilialId", "CONTAPAGRECFILIALID", 0, "int");
   this.setVCMap("AV31SnContaCliCanc", "vSNCONTACLICANC", 0, "char");
   this.setVCMap("AV32SnContaForCanc", "vSNCONTAFORCANC", 0, "char");
   this.setVCMap("AV39ContaPagRecPagRec", "vCONTAPAGRECPAGREC", 0, "char");
   this.setVCMap("AV41ContaLancamData", "vCONTALANCAMDATA", 0, "date");
   this.setVCMap("AV42ContaLancamSequencia", "vCONTALANCAMSEQUENCIA", 0, "int");
   this.setVCMap("AV51SnIntFinCbl", "vSNINTFINCBL", 0, "char");
   this.setVCMap("AV63ContaLancamStContabil", "vCONTALANCAMSTCONTABIL", 0, "char");
   this.setVCMap("A341LancamentoContabilEmpresaid", "LANCAMENTOCONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV52LancamentoContabilEmpresaId", "vLANCAMENTOCONTABILEMPRESAID", 0, "char");
   this.setVCMap("A2745ItensLancamentoContabilFinancU", "ITENSLANCAMENTOCONTABILFINANCU", 0, "char");
   this.setVCMap("AV38SnCaixaBanco", "vSNCAIXABANCO", 0, "char");
   this.setVCMap("AV64ContaLancamTpLancamTipo", "vCONTALANCAMTPLANCAMTIPO", 0, "char");
   this.setVCMap("AV65ContaLancamTpLancamEstorno", "vCONTALANCAMTPLANCAMESTORNO", 0, "char");
   this.setVCMap("A1944LancamCxaBcoContaCaiBanEmpId", "LANCAMCXABCOCONTACAIBANEMPID", 0, "char");
   this.setVCMap("AV40Empresalancamcxabcoconta", "vEMPRESALANCAMCXABCOCONTA", 0, "char");
   this.setVCMap("A1946LancamCxaBcoContaLanConEmpId", "LANCAMCXABCOCONTALANCONEMPID", 0, "char");
   this.setVCMap("A1947LancamCxaBcoContaLanConNumero", "LANCAMCXABCOCONTALANCONNUMERO", 0, "int");
   this.setVCMap("A1948LancamCxaBcoContaLanConSeq", "LANCAMCXABCOCONTALANCONSEQ", 0, "int");
   this.setVCMap("A61LancamentoContabilId", "LANCAMENTOCONTABILID", 0, "int");
   this.setVCMap("A67ItensLancamentoContabilSequenc", "ITENSLANCAMENTOCONTABILSEQUENC", 0, "int");
   this.setVCMap("AV35DataAux", "vDATAAUX", 0, "date");
   this.setVCMap("AV36Tipo", "vTIPO", 0, "char");
   this.setVCMap("AV53lancamentocontabilid", "vLANCAMENTOCONTABILID", 0, "int");
   this.setVCMap("AV54ItensLancamentoContabilSequencia", "vITENSLANCAMENTOCONTABILSEQUENCIA", 0, "int");
   this.setVCMap("A60LancamentoContabilData", "LANCAMENTOCONTABILDATA", 0, "date");
   this.setVCMap("AV22ContaPagRecEmpresaId", "vCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV23ContaPagRecNumero", "vCONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("A75UsuarioId", "USUARIOID", 0, "char");
   this.setVCMap("AV7UsrCod", "vUSRCOD", 0, "char");
   this.setVCMap("A219UsuarioNome", "USUARIONOME", 0, "svchar");
   this.setVCMap("A1566UsuarioFilialEmpresaId", "USUARIOFILIALEMPRESAID", 0, "char");
   this.setVCMap("A1564UsuarioFilialId", "USUARIOFILIALID", 0, "int");
   this.setVCMap("AV37SnProib", "vSNPROIB", 0, "char");
   this.setVCMap("AV66SnHaver", "vSNHAVER", 0, "char");
   this.setVCMap("AV12MsgErro", "vMSGERRO", 0, "svchar");
   this.setVCMap("A1685ContaPagRecEmpresaId", "CONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("A1719ContaPagRecUsuarioAlt", "CONTAPAGRECUSUARIOALT", 0, "char");
   this.setVCMap("A2004ContaPagRecCliForSituacao", "CONTAPAGRECCLIFORSITUACAO", 0, "char");
   this.setVCMap("A1654ContaPagRecFilialEmpId", "CONTAPAGRECFILIALEMPID", 0, "char");
   this.setVCMap("A1655ContaPagRecFilialId", "CONTAPAGRECFILIALID", 0, "int");
   this.setVCMap("AV31SnContaCliCanc", "vSNCONTACLICANC", 0, "char");
   this.setVCMap("AV32SnContaForCanc", "vSNCONTAFORCANC", 0, "char");
   this.setVCMap("AV39ContaPagRecPagRec", "vCONTAPAGRECPAGREC", 0, "char");
   this.setVCMap("AV41ContaLancamData", "vCONTALANCAMDATA", 0, "date");
   this.setVCMap("AV42ContaLancamSequencia", "vCONTALANCAMSEQUENCIA", 0, "int");
   this.setVCMap("AV51SnIntFinCbl", "vSNINTFINCBL", 0, "char");
   this.setVCMap("AV63ContaLancamStContabil", "vCONTALANCAMSTCONTABIL", 0, "char");
   this.setVCMap("A341LancamentoContabilEmpresaid", "LANCAMENTOCONTABILEMPRESAID", 0, "char");
   this.setVCMap("AV52LancamentoContabilEmpresaId", "vLANCAMENTOCONTABILEMPRESAID", 0, "char");
   this.setVCMap("A2745ItensLancamentoContabilFinancU", "ITENSLANCAMENTOCONTABILFINANCU", 0, "char");
   this.setVCMap("AV38SnCaixaBanco", "vSNCAIXABANCO", 0, "char");
   this.setVCMap("AV64ContaLancamTpLancamTipo", "vCONTALANCAMTPLANCAMTIPO", 0, "char");
   this.setVCMap("AV65ContaLancamTpLancamEstorno", "vCONTALANCAMTPLANCAMESTORNO", 0, "char");
   this.setVCMap("A1944LancamCxaBcoContaCaiBanEmpId", "LANCAMCXABCOCONTACAIBANEMPID", 0, "char");
   this.setVCMap("AV40Empresalancamcxabcoconta", "vEMPRESALANCAMCXABCOCONTA", 0, "char");
   this.setVCMap("A1946LancamCxaBcoContaLanConEmpId", "LANCAMCXABCOCONTALANCONEMPID", 0, "char");
   this.setVCMap("A1947LancamCxaBcoContaLanConNumero", "LANCAMCXABCOCONTALANCONNUMERO", 0, "int");
   this.setVCMap("A1948LancamCxaBcoContaLanConSeq", "LANCAMCXABCOCONTALANCONSEQ", 0, "int");
   this.setVCMap("A61LancamentoContabilId", "LANCAMENTOCONTABILID", 0, "int");
   this.setVCMap("A67ItensLancamentoContabilSequenc", "ITENSLANCAMENTOCONTABILSEQUENC", 0, "int");
   this.setVCMap("AV35DataAux", "vDATAAUX", 0, "date");
   this.setVCMap("AV36Tipo", "vTIPO", 0, "char");
   this.setVCMap("AV53lancamentocontabilid", "vLANCAMENTOCONTABILID", 0, "int");
   this.setVCMap("AV54ItensLancamentoContabilSequencia", "vITENSLANCAMENTOCONTABILSEQUENCIA", 0, "int");
   this.setVCMap("A60LancamentoContabilData", "LANCAMENTOCONTABILDATA", 0, "date");
   Grid1Container.addRefreshingVar({rfrVar:"AV22ContaPagRecEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV23ContaPagRecNumero"});
   Grid1Container.addRefreshingVar({rfrVar:"AV25bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV25bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   Grid1Container.addRefreshingVar({rfrVar:"AV26bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV26bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV45bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   Grid1Container.addRefreshingVar({rfrVar:"AV45bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[22]);
   Grid1Container.addRefreshingVar({rfrVar:"A75UsuarioId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV7UsrCod"});
   Grid1Container.addRefreshingVar({rfrVar:"A219UsuarioNome"});
   Grid1Container.addRefreshingVar({rfrVar:"A1566UsuarioFilialEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A1564UsuarioFilialId"});
   Grid1Container.addRefreshingVar({rfrVar:"A1805ContaLancamData", rfrProp:"Value", gxAttId:"1805"});
   Grid1Container.addRefreshingVar({rfrVar:"A1803ContaLancamSequencia", rfrProp:"Value", gxAttId:"1803"});
   Grid1Container.addRefreshingVar({rfrVar:"A1804ContaLancamStContabil", rfrProp:"Value", gxAttId:"1804"});
   Grid1Container.addRefreshingVar({rfrVar:"A2030ContaLancamTpLancamTipo", rfrProp:"Value", gxAttId:"2030"});
   Grid1Container.addRefreshingVar({rfrVar:"A2031ContaLancamTpLancamEstorno", rfrProp:"Value", gxAttId:"2031"});
   Grid1Container.addRefreshingVar({rfrVar:"A2028ContaLancamCContabilTradutor", rfrProp:"Value", gxAttId:"2028"});
   Grid1Container.addRefreshingVar({rfrVar:"AV37SnProib"});
   Grid1Container.addRefreshingVar({rfrVar:"AV66SnHaver"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12MsgErro"});
   Grid1Container.addRefreshingVar({rfrVar:"A1685ContaPagRecEmpresaId"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[13]);
   Grid1Container.addRefreshingVar({rfrVar:"A1719ContaPagRecUsuarioAlt"});
   Grid1Container.addRefreshingVar({rfrVar:"A2004ContaPagRecCliForSituacao"});
   Grid1Container.addRefreshingVar({rfrVar:"A1654ContaPagRecFilialEmpId"});
   Grid1Container.addRefreshingVar({rfrVar:"A1655ContaPagRecFilialId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV31SnContaCliCanc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV32SnContaForCanc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV39ContaPagRecPagRec"});
   Grid1Container.addRefreshingVar(this.GXValidFnc[81]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[82]);
   Grid1Container.addRefreshingVar({rfrVar:"AV41ContaLancamData"});
   Grid1Container.addRefreshingVar({rfrVar:"AV42ContaLancamSequencia"});
   Grid1Container.addRefreshingVar({rfrVar:"AV51SnIntFinCbl"});
   Grid1Container.addRefreshingVar({rfrVar:"AV63ContaLancamStContabil"});
   Grid1Container.addRefreshingVar({rfrVar:"A341LancamentoContabilEmpresaid"});
   Grid1Container.addRefreshingVar({rfrVar:"AV52LancamentoContabilEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"A2745ItensLancamentoContabilFinancU"});
   Grid1Container.addRefreshingVar({rfrVar:"AV38SnCaixaBanco"});
   Grid1Container.addRefreshingVar({rfrVar:"AV64ContaLancamTpLancamTipo"});
   Grid1Container.addRefreshingVar({rfrVar:"AV65ContaLancamTpLancamEstorno"});
   Grid1Container.addRefreshingVar({rfrVar:"A1944LancamCxaBcoContaCaiBanEmpId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV40Empresalancamcxabcoconta"});
   Grid1Container.addRefreshingVar({rfrVar:"A1946LancamCxaBcoContaLanConEmpId"});
   Grid1Container.addRefreshingVar({rfrVar:"A1947LancamCxaBcoContaLanConNumero"});
   Grid1Container.addRefreshingVar({rfrVar:"A1948LancamCxaBcoContaLanConSeq"});
   Grid1Container.addRefreshingVar({rfrVar:"A61LancamentoContabilId"});
   Grid1Container.addRefreshingVar({rfrVar:"A67ItensLancamentoContabilSequenc"});
   Grid1Container.addRefreshingVar({rfrVar:"AV35DataAux"});
   Grid1Container.addRefreshingVar({rfrVar:"AV36Tipo"});
   Grid1Container.addRefreshingVar({rfrVar:"AV53lancamentocontabilid"});
   Grid1Container.addRefreshingVar({rfrVar:"AV54ItensLancamentoContabilSequencia"});
   Grid1Container.addRefreshingVar({rfrVar:"A60LancamentoContabilData"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultarlancamentos());

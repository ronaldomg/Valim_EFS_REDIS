/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:20:32.59
*/
gx.evt.autoSkip = false;
gx.define('hregistrarcontasacrdesc', false, function () {
   this.ServerClass =  "hregistrarcontasacrdesc" ;
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
      this.AV48LancAcrDescParcela=gx.fn.getControlValue("vLANCACRDESCPARCELA") ;
      this.AV20TransacaoPagRecId=gx.fn.getControlValue("vTRANSACAOPAGRECID") ;
      this.AV21TipoPagReg=gx.fn.getControlValue("vTIPOPAGREG") ;
   };
   this.Validv_Contacontabilid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTACONTABILID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Contalancamsituacaocontabil=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCONTALANCAMSITUACAOCONTABIL");
         this.AnyError  = 0;
         if ( ! ( this.AV34ContaLancamSituacaoContabil == "0" || this.AV34ContaLancamSituacaoContabil == "1" || this.AV34ContaLancamSituacaoContabil == "2" || this.AV34ContaLancamSituacaoContabil == "3" ) )
         {
            try {
               gxballoon.setError("Campo ContaLancamSituacaoContabil fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11cj2_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e12cj2_client=function()
   {
      this.executeServerEvent("'CANCELAR'", false, null, false, false);
   };
   this.e15cj2_client=function()
   {
      this.executeServerEvent("'EXCLUIRLINHA'", true, arguments[0], false, false);
   };
   this.e17cj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,10,13,15,17,19,21,24,26,29,31,33,35,37,40,42,44,46,49,51,52,53,54,55,56,57,58,59,60,61];
   this.GXLastCtrlId =61;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",50,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hregistrarcontasacrdesc",[],false,1,true,true,0,true,false,false,"",0,"px","Novo registro",true,false,true,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Datalancamento",51,"vDATALANCAMENTO","Data","","DataLancamento","date",0,"px",10,10,"right",null,[],"Datalancamento","DataLancamento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Tipolancamentoacresdescid",52,"vTIPOLANCAMENTOACRESDESCID","Tipo Lançamento","","TipoLancamentoAcresDescId","int",0,"px",4,4,"right",null,[],"Tipolancamentoacresdescid","TipoLancamentoAcresDescId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Tipolancamentoacresdescdescricao",53,"vTIPOLANCAMENTOACRESDESCDESCRICAO","Descrição","","TipoLancamentoAcresDescDescricao","svchar",0,"px",25,25,"left",null,[],"Tipolancamentoacresdescdescricao","TipoLancamentoAcresDescDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Valorlancamento",54,"vVALORLANCAMENTO","Valor","","ValorLancamento","decimal",0,"px",22,22,"right",null,[],"Valorlancamento","ValorLancamento",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Contacontabiltradutor",55,"vCONTACONTABILTRADUTOR","Tradutor","","ContaContabilTradutor","int",0,"px",5,5,"right",null,[],"Contacontabiltradutor","ContaContabilTradutor",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Contacontabilid",56,"vCONTACONTABILID","Conta Contabil Id","","ContaContabilId","svchar",0,"px",30,30,"left",null,[],"Contacontabilid","ContaContabilId",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmptradutor","vBMPTRADUTOR",57,0,"px",17,"px",null,"","","Image","GridColumnImage");
   GridContainer.addComboBox("Contalancamsituacaocontabil",58,"vCONTALANCAMSITUACAOCONTABIL","Sit. Contábil","ContaLancamSituacaoContabil","char",null,1,true,false,0,"px","");
   GridContainer.addSingleLineEdit("Descstcontabil",59,"vDESCSTCONTABIL","Sit. Contábil","","DescStContabil","svchar",0,"px",20,20,"left",null,[],"Descstcontabil","DescStContabil",false,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",60,0,"px",17,"px","e15cj2_client","","Excluir","Image","GridColumnImage");
   this.setGrid(GridContainer);
   this.HDMASKVALORContainer = gx.uc.getNew(this, 69, 13, "HDMask", "HDMASKVALORContainer", "Hdmaskvalor");
   var HDMASKVALORContainer = this.HDMASKVALORContainer;
   HDMASKVALORContainer.setProp("AttachControl", "Attachcontrol", "", "str");
   HDMASKVALORContainer.setProp("Picture", "Picture", "", "str");
   HDMASKVALORContainer.setProp("Default", "Default", "", "str");
   HDMASKVALORContainer.setProp("Version", "Version", "2.01", "str");
   HDMASKVALORContainer.setProp("Reverse", "Reverse", true, "bool");
   HDMASKVALORContainer.setProp("Signed", "Signed", false, "bool");
   HDMASKVALORContainer.setProp("UnmaskedChars", "Unmaskedchars", "", "str");
   HDMASKVALORContainer.setProp("UnmaskedValue", "Unmaskedvalue", false, "bool");
   HDMASKVALORContainer.setProp("FixedChars", "Fixedchars", "", "str");
   HDMASKVALORContainer.setProp("GetValue", "Getvalue", "", "char");
   HDMASKVALORContainer.setProp("ControlType", "Controltype", "Grid", "str");
   HDMASKVALORContainer.setProp("Visible", "Visible", true, "bool");
   HDMASKVALORContainer.setProp("Enabled", "Enabled", true, "boolean");
   HDMASKVALORContainer.setProp("Class", "Class", "", "char");
   HDMASKVALORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(HDMASKVALORContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[10]={fld:"TABLE3",grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAID",gxz:"ZV64GXV1",gxold:"OV64GXV1",gxvar:"GXV1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV64GXV1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CTLPESSOAID",gx.O.GXV1,0)},c2v:function(){gx.O.GXV1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLPESSOAFANTASIA",gxz:"ZV65GXV2",gxold:"OV65GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV2=Value},v2z:function(Value){gx.O.ZV65GXV2=Value},v2c:function(){gx.fn.setControlValue("CTLPESSOAFANTASIA",gx.O.GXV2,0)},c2v:function(){gx.O.GXV2=this.val()},val:function(){return gx.fn.getControlValue("CTLPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[19]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[21]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLCONTASDATAEMISSAO",gxz:"ZV66GXV3",gxold:"OV66GXV3",gxvar:"GXV3",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV3=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){gx.O.ZV66GXV3=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("CTLCONTASDATAEMISSAO",gx.O.GXV3,0)},c2v:function(){gx.O.GXV3=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("CTLCONTASDATAEMISSAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLE4",grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECNOPARCELA",gxz:"ZV24ContaPagRecNoParcela",gxold:"OV24ContaPagRecNoParcela",gxvar:"AV24ContaPagRecNoParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24ContaPagRecNoParcela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24ContaPagRecNoParcela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECNOPARCELA",gx.O.AV24ContaPagRecNoParcela,0)},c2v:function(){gx.O.AV24ContaPagRecNoParcela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONTAPAGRECNOPARCELA",'.')},nac:gx.falseFn};
   GXValidFnc[31]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[33]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"CTLQTDEPARCELAS",gxz:"ZV67GXV4",gxold:"OV67GXV4",gxvar:"GXV4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.GXV4=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV67GXV4=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CTLQTDEPARCELAS",gx.O.GXV4,0)},c2v:function(){gx.O.GXV4=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CTLQTDEPARCELAS",'.')},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDTVENCIMENTO",gxz:"ZV28ContaPagRecDtVencimento",gxold:"OV28ContaPagRecDtVencimento",gxvar:"AV28ContaPagRecDtVencimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV28ContaPagRecDtVencimento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDTVENCIMENTO",gx.O.AV28ContaPagRecDtVencimento,0)},c2v:function(){gx.O.AV28ContaPagRecDtVencimento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDTVENCIMENTO")},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[42]={lvl:0,type:"char",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORPARCELASTR",gxz:"ZV25ValorParcelaStr",gxold:"OV25ValorParcelaStr",gxvar:"AV25ValorParcelaStr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25ValorParcelaStr=Value},v2z:function(Value){gx.O.ZV25ValorParcelaStr=Value},v2c:function(){gx.fn.setControlValue("vVALORPARCELASTR",gx.O.AV25ValorParcelaStr,0)},c2v:function(){gx.O.AV25ValorParcelaStr=this.val()},val:function(){return gx.fn.getControlValue("vVALORPARCELASTR")},nac:gx.falseFn};
   GXValidFnc[44]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[46]={lvl:0,type:"svchar",len:12,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTAPAGRECDOCSEQ",gxz:"ZV26ContaPagRecDocSeq",gxold:"OV26ContaPagRecDocSeq",gxvar:"AV26ContaPagRecDocSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26ContaPagRecDocSeq=Value},v2z:function(Value){gx.O.ZV26ContaPagRecDocSeq=Value},v2c:function(){gx.fn.setControlValue("vCONTAPAGRECDOCSEQ",gx.O.AV26ContaPagRecDocSeq,0)},c2v:function(){gx.O.AV26ContaPagRecDocSeq=this.val()},val:function(){return gx.fn.getControlValue("vCONTAPAGRECDOCSEQ")},nac:gx.falseFn};
   GXValidFnc[49]={fld:"DIV1", format:2,grid:0};
   GXValidFnc[51]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDATALANCAMENTO",gxz:"ZV32DataLancamento",gxold:"OV32DataLancamento",gxvar:"AV32DataLancamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV32DataLancamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV32DataLancamento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vDATALANCAMENTO",row || gx.fn.currentGridRowImpl(50),gx.O.AV32DataLancamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV32DataLancamento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vDATALANCAMENTO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOACRESDESCID",gxz:"ZV30TipoLancamentoAcresDescId",gxold:"OV30TipoLancamentoAcresDescId",gxvar:"AV30TipoLancamentoAcresDescId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30TipoLancamentoAcresDescId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV30TipoLancamentoAcresDescId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vTIPOLANCAMENTOACRESDESCID",row || gx.fn.currentGridRowImpl(50),gx.O.AV30TipoLancamentoAcresDescId,0)},c2v:function(){gx.O.AV30TipoLancamentoAcresDescId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vTIPOLANCAMENTOACRESDESCID",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOLANCAMENTOACRESDESCDESCRICAO",gxz:"ZV37TipoLancamentoAcresDescDescricao",gxold:"OV37TipoLancamentoAcresDescDescricao",gxvar:"AV37TipoLancamentoAcresDescDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV37TipoLancamentoAcresDescDescricao=Value},v2z:function(Value){gx.O.ZV37TipoLancamentoAcresDescDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("vTIPOLANCAMENTOACRESDESCDESCRICAO",row || gx.fn.currentGridRowImpl(50),gx.O.AV37TipoLancamentoAcresDescDescricao,0)},c2v:function(){gx.O.AV37TipoLancamentoAcresDescDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vTIPOLANCAMENTOACRESDESCDESCRICAO",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALORLANCAMENTO",gxz:"ZV31ValorLancamento",gxold:"OV31ValorLancamento",gxvar:"AV31ValorLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV31ValorLancamento=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV31ValorLancamento=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALORLANCAMENTO",row || gx.fn.currentGridRowImpl(50),gx.O.AV31ValorLancamento,2,',')},c2v:function(){gx.O.AV31ValorLancamento=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALORLANCAMENTO",row || gx.fn.currentGridRowImpl(50),'.',',')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:5,dec:0,sign:false,pic:"99999",ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILTRADUTOR",gxz:"ZV33ContaContabilTradutor",gxold:"OV33ContaContabilTradutor",gxvar:"AV33ContaContabilTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV33ContaContabilTradutor=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33ContaContabilTradutor=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vCONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(50),gx.O.AV33ContaContabilTradutor,0)},c2v:function(){gx.O.AV33ContaContabilTradutor=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vCONTACONTABILTRADUTOR",row || gx.fn.currentGridRowImpl(50),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:this.Validv_Contacontabilid,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV39ContaContabilId",gxold:"OV39ContaContabilId",gxvar:"AV39ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV39ContaContabilId=Value},v2z:function(Value){gx.O.ZV39ContaContabilId=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTACONTABILID",row || gx.fn.currentGridRowImpl(50),gx.O.AV39ContaContabilId,0)},c2v:function(){gx.O.AV39ContaContabilId=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTACONTABILID",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPTRADUTOR",gxz:"ZV58BmpTradutor",gxold:"OV58BmpTradutor",gxvar:"AV58BmpTradutor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV58BmpTradutor=Value},v2z:function(Value){gx.O.ZV58BmpTradutor=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPTRADUTOR",row || gx.fn.currentGridRowImpl(50),gx.O.AV58BmpTradutor,gx.O.AV79Bmptradutor_GXI)},c2v:function(){gx.O.AV79Bmptradutor_GXI=this.val_GXI();gx.O.AV58BmpTradutor=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPTRADUTOR",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPTRADUTOR_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV79Bmptradutor_GXI',nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:this.Validv_Contalancamsituacaocontabil,isvalid:null,rgrid:[],fld:"vCONTALANCAMSITUACAOCONTABIL",gxz:"ZV34ContaLancamSituacaoContabil",gxold:"OV34ContaLancamSituacaoContabil",gxvar:"AV34ContaLancamSituacaoContabil",ucs:[],op:[58],ip:[58],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.AV34ContaLancamSituacaoContabil=Value},v2z:function(Value){gx.O.ZV34ContaLancamSituacaoContabil=Value},v2c:function(row){gx.fn.setGridComboBoxValue("vCONTALANCAMSITUACAOCONTABIL",row || gx.fn.currentGridRowImpl(50),gx.O.AV34ContaLancamSituacaoContabil)},c2v:function(){gx.O.AV34ContaLancamSituacaoContabil=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTALANCAMSITUACAOCONTABIL",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCSTCONTABIL",gxz:"ZV56DescStContabil",gxold:"OV56DescStContabil",gxvar:"AV56DescStContabil",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV56DescStContabil=Value},v2z:function(Value){gx.O.ZV56DescStContabil=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCSTCONTABIL",row || gx.fn.currentGridRowImpl(50),gx.O.AV56DescStContabil,0)},c2v:function(){gx.O.AV56DescStContabil=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCSTCONTABIL",row || gx.fn.currentGridRowImpl(50))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:50,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV12bmpExc",gxold:"OV12bmpExc",gxvar:"AV12bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV12bmpExc=Value},v2z:function(Value){gx.O.ZV12bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50),gx.O.AV12bmpExc,gx.O.AV78Bmpexc_GXI)},c2v:function(){gx.O.AV78Bmpexc_GXI=this.val_GXI();gx.O.AV12bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(50))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(50))}, gxvar_GXI:'AV78Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[61]={fld:"DIV2", format:2,grid:0};
   this.GXV1 = 0 ;
   this.ZV64GXV1 = 0 ;
   this.OV64GXV1 = 0 ;
   this.GXV2 = "" ;
   this.ZV65GXV2 = "" ;
   this.OV65GXV2 = "" ;
   this.GXV3 = gx.date.nullDate() ;
   this.ZV66GXV3 = gx.date.nullDate() ;
   this.OV66GXV3 = gx.date.nullDate() ;
   this.AV24ContaPagRecNoParcela = 0 ;
   this.ZV24ContaPagRecNoParcela = 0 ;
   this.OV24ContaPagRecNoParcela = 0 ;
   this.GXV4 = 0 ;
   this.ZV67GXV4 = 0 ;
   this.OV67GXV4 = 0 ;
   this.AV28ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.ZV28ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.OV28ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.AV25ValorParcelaStr = "" ;
   this.ZV25ValorParcelaStr = "" ;
   this.OV25ValorParcelaStr = "" ;
   this.AV26ContaPagRecDocSeq = "" ;
   this.ZV26ContaPagRecDocSeq = "" ;
   this.OV26ContaPagRecDocSeq = "" ;
   this.ZV32DataLancamento = gx.date.nullDate() ;
   this.OV32DataLancamento = gx.date.nullDate() ;
   this.ZV30TipoLancamentoAcresDescId = 0 ;
   this.OV30TipoLancamentoAcresDescId = 0 ;
   this.ZV37TipoLancamentoAcresDescDescricao = "" ;
   this.OV37TipoLancamentoAcresDescDescricao = "" ;
   this.ZV31ValorLancamento = 0 ;
   this.OV31ValorLancamento = 0 ;
   this.ZV33ContaContabilTradutor = 0 ;
   this.OV33ContaContabilTradutor = 0 ;
   this.ZV39ContaContabilId = "" ;
   this.OV39ContaContabilId = "" ;
   this.ZV58BmpTradutor = "" ;
   this.OV58BmpTradutor = "" ;
   this.ZV34ContaLancamSituacaoContabil = "" ;
   this.OV34ContaLancamSituacaoContabil = "" ;
   this.ZV56DescStContabil = "" ;
   this.OV56DescStContabil = "" ;
   this.ZV12bmpExc = "" ;
   this.OV12bmpExc = "" ;
   this.GXV1 = 0 ;
   this.GXV2 = "" ;
   this.GXV3 = gx.date.nullDate() ;
   this.AV24ContaPagRecNoParcela = 0 ;
   this.GXV4 = 0 ;
   this.AV28ContaPagRecDtVencimento = gx.date.nullDate() ;
   this.AV25ValorParcelaStr = "" ;
   this.AV26ContaPagRecDocSeq = "" ;
   this.AV20TransacaoPagRecId = "" ;
   this.AV21TipoPagReg = "" ;
   this.AV32DataLancamento = gx.date.nullDate() ;
   this.AV30TipoLancamentoAcresDescId = 0 ;
   this.AV37TipoLancamentoAcresDescDescricao = "" ;
   this.AV31ValorLancamento = 0 ;
   this.AV33ContaContabilTradutor = 0 ;
   this.AV39ContaContabilId = "" ;
   this.AV58BmpTradutor = "" ;
   this.AV34ContaLancamSituacaoContabil = "" ;
   this.AV56DescStContabil = "" ;
   this.AV12bmpExc = "" ;
   this.A1487IntegracaoCblId = 0 ;
   this.A1486IntegracaoCblEmpresaId = "" ;
   this.A1452IntegracaoCblTipoContaDebito = "" ;
   this.A1462IntegracaoCblTipoContaCredito = "" ;
   this.A942TipoContaId = 0 ;
   this.A941TipoContaEmpresaId = "" ;
   this.A945TipoContaTipoContabil = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A1889TipoLancamentoIntegCblId = 0 ;
   this.A1681ConvenioId = 0 ;
   this.A1680ConvenioEmpresaId = "" ;
   this.A2091ConvenioVerbaContaId = "" ;
   this.A2090ConvenioVerbaContaEmpId = "" ;
   this.A64ContaContabilTradutor = 0 ;
   this.A176EmpresaContaContabilEmpresaId = "" ;
   this.A62ContaContabilId = "" ;
   this.A1189TransacaoAcresDescId = "" ;
   this.A1534TransacaoAcresDescTipoPagRec = "" ;
   this.A1159TransacaoAcresDescEmpresaId = "" ;
   this.A1158TipoLancamentoAcresDescId = 0 ;
   this.A1260TipoLancamentoAcresDescDescric = "" ;
   this.A1239AcrescimoDescontoPercentual = 0 ;
   this.A1267TipoLancamentoAcresDescEmpresa = "" ;
   this.AV48LancAcrDescParcela = [ ] ;
   this.Events = {"e11cj2_client": ["ENTER", true] ,"e12cj2_client": ["'CANCELAR'", true] ,"e15cj2_client": ["'EXCLUIRLINHA'", true] ,"e17cj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORLANCAMENTO","Enabled")',ctrl:'vVALORLANCAMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATALANCAMENTO","Enabled")',ctrl:'vDATALANCAMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTACONTABILTRADUTOR","Enabled")',ctrl:'vCONTACONTABILTRADUTOR',prop:'Enabled'},{ctrl:'vCONTALANCAMSITUACAOCONTABIL'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV48LancAcrDescParcela',fld:'vLANCACRDESCPARCELA'},{av:'AV24ContaPagRecNoParcela',fld:'vCONTAPAGRECNOPARCELA',hsh:true}],[]];
   this.EvtParms["ENTER"] = [[{av:'AV21TipoPagReg',fld:'vTIPOPAGREG',hsh:true},{av:'AV49LancAcrDescParcelaItem',fld:'vLANCACRDESCPARCELAITEM'},{av:'AV44IntFinCbl',fld:'vINTFINCBL'},{av:'AV45TipoLancamentoIntegCblId',fld:'vTIPOLANCAMENTOINTEGCBLID'},{av:'AV46TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV59IntegracaoCblTipoContaDebito',fld:'vINTEGRACAOCBLTIPOCONTADEBITO'},{av:'AV61IntegracaoCblTipoContaCredito',fld:'vINTEGRACAOCBLTIPOCONTACREDITO'},{av:'A176EmpresaContaContabilEmpresaId',fld:'EMPRESACONTACONTABILEMPRESAID'},{av:'AV52EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'A64ContaContabilTradutor',fld:'CONTACONTABILTRADUTOR'},{av:'A62ContaContabilId',fld:'CONTACONTABILID'},{av:'A1680ConvenioEmpresaId',fld:'CONVENIOEMPRESAID'},{av:'A1681ConvenioId',fld:'CONVENIOID'},{av:'A2090ConvenioVerbaContaEmpId',fld:'CONVENIOVERBACONTAEMPID'},{av:'A2091ConvenioVerbaContaId',fld:'CONVENIOVERBACONTAID'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID',grid:50},{av:'AV48LancAcrDescParcela',fld:'vLANCACRDESCPARCELA'},{av:'AV24ContaPagRecNoParcela',fld:'vCONTAPAGRECNOPARCELA',hsh:true},{av:'AV30TipoLancamentoAcresDescId',fld:'vTIPOLANCAMENTOACRESDESCID',grid:50},{av:'AV31ValorLancamento',fld:'vVALORLANCAMENTO',grid:50},{av:'AV32DataLancamento',fld:'vDATALANCAMENTO',grid:50},{av:'AV37TipoLancamentoAcresDescDescricao',fld:'vTIPOLANCAMENTOACRESDESCDESCRICAO',grid:50},{av:'AV33ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR',grid:50},{av:'AV34ContaLancamSituacaoContabil',fld:'vCONTALANCAMSITUACAOCONTABIL',grid:50},{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'AV42EmpresaTpLancamento',fld:'vEMPRESATPLANCAMENTO'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'},{av:'AV50LancAcrDescItem',fld:'vLANCACRDESCITEM'},{av:'A1889TipoLancamentoIntegCblId',fld:'TIPOLANCAMENTOINTEGCBLID'},{av:'A941TipoContaEmpresaId',fld:'TIPOCONTAEMPRESAID'},{av:'AV47EmpresaTpConta',fld:'vEMPRESATPCONTA'},{av:'A942TipoContaId',fld:'TIPOCONTAID'},{av:'AV19contas',fld:'vCONTAS'},{av:'A945TipoContaTipoContabil',fld:'TIPOCONTATIPOCONTABIL'},{av:'A1486IntegracaoCblEmpresaId',fld:'INTEGRACAOCBLEMPRESAID'},{av:'AV60IntegracaoCblEmpresaId',fld:'vINTEGRACAOCBLEMPRESAID'},{av:'A1487IntegracaoCblId',fld:'INTEGRACAOCBLID'},{av:'A1452IntegracaoCblTipoContaDebito',fld:'INTEGRACAOCBLTIPOCONTADEBITO'},{av:'A1462IntegracaoCblTipoContaCredito',fld:'INTEGRACAOCBLTIPOCONTACREDITO'}],[{av:'AV19contas',fld:'vCONTAS'},{av:'AV40Cont',fld:'vCONT'},{av:'AV41ErroGrid',fld:'vERROGRID'},{av:'AV71GXV7',fld:'vGXV7'},{av:'AV50LancAcrDescItem',fld:'vLANCACRDESCITEM'},{av:'AV72GXLvl169',fld:'vGXLVL169'},{av:'AV52EmpresaContaContabilEmpresaId',fld:'vEMPRESACONTACONTABILEMPRESAID'},{av:'AV39ContaContabilId',fld:'vCONTACONTABILID'},{av:'AV74GXLvl187',fld:'vGXLVL187'},{av:'AV83GXV12',fld:'vGXV12'},{av:'AV49LancAcrDescParcelaItem',fld:'vLANCACRDESCPARCELAITEM'},{av:'AV84GXV13',fld:'vGXV13'},{av:'AV45TipoLancamentoIntegCblId',fld:'vTIPOLANCAMENTOINTEGCBLID'},{av:'AV46TipoContaTipoContabil',fld:'vTIPOCONTATIPOCONTABIL'},{av:'AV59IntegracaoCblTipoContaDebito',fld:'vINTEGRACAOCBLTIPOCONTADEBITO'},{av:'AV61IntegracaoCblTipoContaCredito',fld:'vINTEGRACAOCBLTIPOCONTACREDITO'}]];
   this.EvtParms["'CANCELAR'"] = [[],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'AV48LancAcrDescParcela',fld:'vLANCACRDESCPARCELA'},{av:'AV24ContaPagRecNoParcela',fld:'vCONTAPAGRECNOPARCELA',hsh:true}],[{av:'AV75GXV8',fld:'vGXV8'},{av:'AV49LancAcrDescParcelaItem',fld:'vLANCACRDESCPARCELAITEM'},{av:'AV76GXV9',fld:'vGXV9'},{av:'AV50LancAcrDescItem',fld:'vLANCACRDESCITEM'},{av:'AV32DataLancamento',fld:'vDATALANCAMENTO'},{av:'AV30TipoLancamentoAcresDescId',fld:'vTIPOLANCAMENTOACRESDESCID'},{av:'AV37TipoLancamentoAcresDescDescricao',fld:'vTIPOLANCAMENTOACRESDESCDESCRICAO'},{av:'AV31ValorLancamento',fld:'vVALORLANCAMENTO'},{av:'AV33ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR'},{av:'AV38bmpPromptTradutor',fld:'vBMPPROMPTTRADUTOR'},{av:'AV34ContaLancamSituacaoContabil',fld:'vCONTALANCAMSITUACAOCONTABIL'},{av:'AV56DescStContabil',fld:'vDESCSTCONTABIL'},{av:'AV12bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV58BmpTradutor',fld:'vBMPTRADUTOR'}]];
   this.EvtParms["'EXCLUIRLINHA'"] = [[{av:'AV30TipoLancamentoAcresDescId',fld:'vTIPOLANCAMENTOACRESDESCID',grid:50},{av:'AV48LancAcrDescParcela',fld:'vLANCACRDESCPARCELA'},{av:'AV24ContaPagRecNoParcela',fld:'vCONTAPAGRECNOPARCELA',hsh:true},{av:'AV31ValorLancamento',fld:'vVALORLANCAMENTO',grid:50},{av:'AV32DataLancamento',fld:'vDATALANCAMENTO',grid:50},{av:'AV37TipoLancamentoAcresDescDescricao',fld:'vTIPOLANCAMENTOACRESDESCDESCRICAO',grid:50},{av:'AV33ContaContabilTradutor',fld:'vCONTACONTABILTRADUTOR',grid:50},{av:'AV34ContaLancamSituacaoContabil',fld:'vCONTALANCAMSITUACAOCONTABIL',grid:50},{av:'AV21TipoPagReg',fld:'vTIPOPAGREG',hsh:true}],[{av:'AV54TipoLancamentoAcresDescIdAux',fld:'vTIPOLANCAMENTOACRESDESCIDAUX'},{av:'AV55Item',fld:'vITEM'},{av:'AV80GXV10',fld:'vGXV10'},{av:'AV49LancAcrDescParcelaItem',fld:'vLANCACRDESCPARCELAITEM'},{av:'AV81GXV11',fld:'vGXV11'},{av:'AV50LancAcrDescItem',fld:'vLANCACRDESCITEM'},{av:'AV83GXV12',fld:'vGXV12'},{av:'AV84GXV13',fld:'vGXV13'}]];
   this.EvtParms["GRID_FIRSTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORLANCAMENTO","Enabled")',ctrl:'vVALORLANCAMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATALANCAMENTO","Enabled")',ctrl:'vDATALANCAMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTACONTABILTRADUTOR","Enabled")',ctrl:'vCONTACONTABILTRADUTOR',prop:'Enabled'},{ctrl:'vCONTALANCAMSITUACAOCONTABIL'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV48LancAcrDescParcela',fld:'vLANCACRDESCPARCELA'},{av:'AV24ContaPagRecNoParcela',fld:'vCONTAPAGRECNOPARCELA',hsh:true}],[]];
   this.EvtParms["GRID_PREVPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORLANCAMENTO","Enabled")',ctrl:'vVALORLANCAMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATALANCAMENTO","Enabled")',ctrl:'vDATALANCAMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTACONTABILTRADUTOR","Enabled")',ctrl:'vCONTACONTABILTRADUTOR',prop:'Enabled'},{ctrl:'vCONTALANCAMSITUACAOCONTABIL'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV48LancAcrDescParcela',fld:'vLANCACRDESCPARCELA'},{av:'AV24ContaPagRecNoParcela',fld:'vCONTAPAGRECNOPARCELA',hsh:true}],[]];
   this.EvtParms["GRID_NEXTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORLANCAMENTO","Enabled")',ctrl:'vVALORLANCAMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATALANCAMENTO","Enabled")',ctrl:'vDATALANCAMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTACONTABILTRADUTOR","Enabled")',ctrl:'vCONTACONTABILTRADUTOR',prop:'Enabled'},{ctrl:'vCONTALANCAMSITUACAOCONTABIL'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV48LancAcrDescParcela',fld:'vLANCACRDESCPARCELA'},{av:'AV24ContaPagRecNoParcela',fld:'vCONTAPAGRECNOPARCELA',hsh:true}],[]];
   this.EvtParms["GRID_LASTPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'gx.fn.getCtrlProperty("vVALORLANCAMENTO","Enabled")',ctrl:'vVALORLANCAMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vDATALANCAMENTO","Enabled")',ctrl:'vDATALANCAMENTO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("vCONTACONTABILTRADUTOR","Enabled")',ctrl:'vCONTACONTABILTRADUTOR',prop:'Enabled'},{ctrl:'vCONTALANCAMSITUACAOCONTABIL'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:'vBMPEXC',prop:'Jsonclick'},{av:'AV48LancAcrDescParcela',fld:'vLANCACRDESCPARCELA'},{av:'AV24ContaPagRecNoParcela',fld:'vCONTAPAGRECNOPARCELA',hsh:true}],[]];
   this.setPrompt("&BMPTRADUTOR", [56,55]);
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("AV48LancAcrDescParcela", "vLANCACRDESCPARCELA", 0, "CollLancAcrDescParcela.LancAcrDescParcelaItem");
   this.setVCMap("AV20TransacaoPagRecId", "vTRANSACAOPAGRECID", 0, "char");
   this.setVCMap("AV21TipoPagReg", "vTIPOPAGREG", 0, "char");
   this.setVCMap("AV48LancAcrDescParcela", "vLANCACRDESCPARCELA", 0, "CollLancAcrDescParcela.LancAcrDescParcelaItem");
   GridContainer.addRefreshingVar({rfrVar:"AV31ValorLancamento", rfrProp:"Enabled", gxAttId:"Valorlancamento"});
   GridContainer.addRefreshingVar({rfrVar:"AV32DataLancamento", rfrProp:"Enabled", gxAttId:"Datalancamento"});
   GridContainer.addRefreshingVar({rfrVar:"AV33ContaContabilTradutor", rfrProp:"Enabled", gxAttId:"Contacontabiltradutor"});
   GridContainer.addRefreshingVar({rfrVar:"AV34ContaLancamSituacaoContabil", rfrProp:"Enabled", gxAttId:"Contalancamsituacaocontabil"});
   GridContainer.addRefreshingVar({rfrVar:"AV12bmpExc", rfrProp:"Jsonclick", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV48LancAcrDescParcela"});
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   this.addBCProperty("Contas", ["PessoaId"], this.GXValidFnc[13], "AV19contas");
   this.addBCProperty("Contas", ["PessoaFantasia"], this.GXValidFnc[17], "AV19contas");
   this.addBCProperty("Contas", ["ContasDataEmissao"], this.GXValidFnc[21], "AV19contas");
   this.addBCProperty("Contas", ["QtdeParcelas"], this.GXValidFnc[33], "AV19contas");
   this.InitStandaloneVars( );
});
gx.setParentObj(new hregistrarcontasacrdesc());

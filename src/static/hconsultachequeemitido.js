/**@preserve  GeneXus Java 10_3_12-110051 on February 11, 2021 5:15:57.84
*/
gx.evt.autoSkip = false;
gx.define('hconsultachequeemitido', false, function () {
   this.ServerClass =  "hconsultachequeemitido" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV86DtaNula=gx.fn.getDateValue("vDTANULA") ;
      this.AV102ContLinhas=gx.fn.getIntegerValue("vCONTLINHAS",'.') ;
      this.A1934LancamentoCxaBcoNoCheque=gx.fn.getIntegerValue("LANCAMENTOCXABCONOCHEQUE",'.') ;
      this.A1930LancamentoCxaBcoData=gx.fn.getDateValue("LANCAMENTOCXABCODATA") ;
      this.A1929LancamentoCxaBcoNumero=gx.fn.getIntegerValue("LANCAMENTOCXABCONUMERO",'.') ;
      this.A1932LancamentoCxaBcoDocumento=gx.fn.getControlValue("LANCAMENTOCXABCODOCUMENTO") ;
      this.AV84QtdLancamento=gx.fn.getIntegerValue("vQTDLANCAMENTO",'.') ;
      this.AV85ValorTotal=gx.fn.getDecimalValue("vVALORTOTAL",'.',',') ;
      this.A1933LancamentoCxaBcoValor=gx.fn.getDecimalValue("LANCAMENTOCXABCOVALOR",'.',',') ;
      this.A1864LancamentoCxaBcoPessoaEmpId=gx.fn.getControlValue("LANCAMENTOCXABCOPESSOAEMPID") ;
      this.A1866LancamentoCxaBcoPessoaFantasia=gx.fn.getControlValue("LANCAMENTOCXABCOPESSOAFANTASIA") ;
      this.A1931LancamentoCxaBcoObservacao=gx.fn.getControlValue("LANCAMENTOCXABCOOBSERVACAO") ;
      this.A1935LancamentoCxaBcoDataConf=gx.fn.getDateValue("LANCAMENTOCXABCODATACONF") ;
   };
   this.Validv_Caixabancoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Caixabancoempresaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCAIXABANCOEMPRESAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e21bj2_client=function()
   {
      this.clearMessages();
      gx.popup.openUrl(gx.http.formatLink("haltlancamentocxabco",[this.AV17EmpresaPadrao, this.AV100NoLancamento, "C"]), [""]);
      this.refreshOutputs([]);
   };
   this.e11bj2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12bj2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13bj2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14bj2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15bj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e16bj2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e22bj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e23bj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,26,29,31,38,42,43,44,45,46,47,48,49,50,53,56,58,61,63,69,73,76,78,80,82,84,85,86,87,88,90,91];
   this.GXLastCtrlId =91;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultachequeemitido",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Dtacobranca",42,"vDTACOBRANCA","Dta Cobrança","","DtaCobranca","char",0,"px",10,10,"left",null,[],"Dtacobranca","DtaCobranca",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Nocheque",43,"vNOCHEQUE","No.Cheque","","NoCheque","int",0,"px",6,6,"right",null,[],"Nocheque","NoCheque",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Dtaemissao",44,"vDTAEMISSAO","Dta Emissão","","DtaEmissao","date",0,"px",10,10,"right",null,[],"Dtaemissao","DtaEmissao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Nolancamento",45,"vNOLANCAMENTO","No.Lancmto","","NoLancamento","int",0,"px",8,8,"right",null,[],"Nolancamento","NoLancamento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Nodocumento",46,"vNODOCUMENTO","No.Docmto","","NoDocumento","svchar",0,"px",20,20,"left",null,[],"Nodocumento","NoDocumento",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Fornecedorobservacao",47,"vFORNECEDOROBSERVACAO","Fornecedor/Observação","","FornecedorObservacao","svchar",0,"px",40,40,"left",null,[],"Fornecedorobservacao","FornecedorObservacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Valor",48,"vVALOR","Valor","","Valor","decimal",0,"px",18,18,"right",null,[],"Valor","Valor",true,2,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",49,0,"px",17,"px","e21bj2_client","","Cons","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(1928,50,"LANCAMENTOCXABCOEMPRESAID","Empresa","","LancamentoCxaBcoEmpresaid","char",0,"px",10,10,"left",null,[],1928,"LancamentoCxaBcoEmpresaid",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoid,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXABANCOID",gxz:"ZV93CaixaBancoId",gxold:"OV93CaixaBancoId",gxvar:"AV93CaixaBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV93CaixaBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV93CaixaBancoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXABANCOID",gx.O.AV93CaixaBancoId,0)},c2v:function(){gx.O.AV93CaixaBancoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXABANCOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCAIXABANCODESCRICAO",gxz:"ZV95CaixaBancoDescricao",gxold:"OV95CaixaBancoDescricao",gxvar:"AV95CaixaBancoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV95CaixaBancoDescricao=Value},v2z:function(Value){gx.O.ZV95CaixaBancoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCODESCRICAO",gx.O.AV95CaixaBancoDescricao,0)},c2v:function(){gx.O.AV95CaixaBancoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={fld:"TABLE10",grid:0};
   GXValidFnc[22]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAINICIAL",gxz:"ZV24DataInicial",gxold:"OV24DataInicial",gxvar:"AV24DataInicial",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24DataInicial=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV24DataInicial=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAINICIAL",gx.O.AV24DataInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV24DataInicial=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAINICIAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 22 , function() {
   });
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vDATAFINAL",gxz:"ZV25DataFinal",gxold:"OV25DataFinal",gxvar:"AV25DataFinal",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25DataFinal=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV25DataFinal=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDATAFINAL",gx.O.AV25DataFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.AV25DataFinal=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDATAFINAL")},nac:gx.falseFn};
   this.declareDomainHdlr( 26 , function() {
   });
   GXValidFnc[29]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSNCHEQUESCOBRADOS",gxz:"ZV90snChequesCobrados",gxold:"OV90snChequesCobrados",gxvar:"AV90snChequesCobrados",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV90snChequesCobrados=Value},v2z:function(Value){gx.O.ZV90snChequesCobrados=Value},v2c:function(){gx.fn.setComboBoxValue("vSNCHEQUESCOBRADOS",gx.O.AV90snChequesCobrados)},c2v:function(){gx.O.AV90snChequesCobrados=this.val()},val:function(){return gx.fn.getControlValue("vSNCHEQUESCOBRADOS")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TABLE11",grid:0};
   GXValidFnc[42]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDTACOBRANCA",gxz:"ZV92DtaCobranca",gxold:"OV92DtaCobranca",gxvar:"AV92DtaCobranca",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV92DtaCobranca=Value},v2z:function(Value){gx.O.ZV92DtaCobranca=Value},v2c:function(row){gx.fn.setGridControlValue("vDTACOBRANCA",row || gx.fn.currentGridRowImpl(41),gx.O.AV92DtaCobranca,0)},c2v:function(){gx.O.AV92DtaCobranca=this.val()},val:function(row){return gx.fn.getGridControlValue("vDTACOBRANCA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNOCHEQUE",gxz:"ZV98NoCheque",gxold:"OV98NoCheque",gxvar:"AV98NoCheque",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV98NoCheque=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV98NoCheque=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNOCHEQUE",row || gx.fn.currentGridRowImpl(41),gx.O.AV98NoCheque,0)},c2v:function(){gx.O.AV98NoCheque=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNOCHEQUE",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDTAEMISSAO",gxz:"ZV99DtaEmissao",gxold:"OV99DtaEmissao",gxvar:"AV99DtaEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV99DtaEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV99DtaEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("vDTAEMISSAO",row || gx.fn.currentGridRowImpl(41),gx.O.AV99DtaEmissao,0)},c2v:function(){gx.O.AV99DtaEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("vDTAEMISSAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNOLANCAMENTO",gxz:"ZV100NoLancamento",gxold:"OV100NoLancamento",gxvar:"AV100NoLancamento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV100NoLancamento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV100NoLancamento=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("vNOLANCAMENTO",row || gx.fn.currentGridRowImpl(41),gx.O.AV100NoLancamento,0)},c2v:function(){gx.O.AV100NoLancamento=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("vNOLANCAMENTO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vNODOCUMENTO",gxz:"ZV101NoDocumento",gxold:"OV101NoDocumento",gxvar:"AV101NoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV101NoDocumento=Value},v2z:function(Value){gx.O.ZV101NoDocumento=Value},v2c:function(row){gx.fn.setGridControlValue("vNODOCUMENTO",row || gx.fn.currentGridRowImpl(41),gx.O.AV101NoDocumento,0)},c2v:function(){gx.O.AV101NoDocumento=this.val()},val:function(row){return gx.fn.getGridControlValue("vNODOCUMENTO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vFORNECEDOROBSERVACAO",gxz:"ZV97FornecedorObservacao",gxold:"OV97FornecedorObservacao",gxvar:"AV97FornecedorObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV97FornecedorObservacao=Value},v2z:function(Value){gx.O.ZV97FornecedorObservacao=Value},v2c:function(row){gx.fn.setGridControlValue("vFORNECEDOROBSERVACAO",row || gx.fn.currentGridRowImpl(41),gx.O.AV97FornecedorObservacao,0)},c2v:function(){gx.O.AV97FornecedorObservacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vFORNECEDOROBSERVACAO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"decimal",len:17,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALOR",gxz:"ZV69Valor",gxold:"OV69Valor",gxvar:"AV69Valor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV69Valor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV69Valor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("vVALOR",row || gx.fn.currentGridRowImpl(41),gx.O.AV69Valor,2,',')},c2v:function(){gx.O.AV69Valor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("vVALOR",row || gx.fn.currentGridRowImpl(41),'.',',')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(41),gx.O.AV16bmpCon,gx.O.AV109Bmpcon_GXI)},c2v:function(){gx.O.AV109Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV109Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCXABCOEMPRESAID",gxz:"Z1928LancamentoCxaBcoEmpresaid",gxold:"O1928LancamentoCxaBcoEmpresaid",gxvar:"A1928LancamentoCxaBcoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1928LancamentoCxaBcoEmpresaid=Value},v2z:function(Value){gx.O.Z1928LancamentoCxaBcoEmpresaid=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCXABCOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A1928LancamentoCxaBcoEmpresaid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1928LancamentoCxaBcoEmpresaid=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCXABCOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[53]={fld:"TABLE12",grid:0};
   GXValidFnc[56]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[58]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDLANCAMENTOTELA",gxz:"ZV91QtdLancamentoTela",gxold:"OV91QtdLancamentoTela",gxvar:"AV91QtdLancamentoTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV91QtdLancamentoTela=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV91QtdLancamentoTela=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDLANCAMENTOTELA",gx.O.AV91QtdLancamentoTela,0)},c2v:function(){gx.O.AV91QtdLancamentoTela=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDLANCAMENTOTELA",'.')},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[63]={lvl:0,type:"decimal",len:17,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vVALORTOTALTELA",gxz:"ZV89ValorTotalTela",gxold:"OV89ValorTotalTela",gxvar:"AV89ValorTotalTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV89ValorTotalTela=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV89ValorTotalTela=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vVALORTOTALTELA",gx.O.AV89ValorTotalTela,2,',')},c2v:function(){gx.O.AV89ValorTotalTela=this.val()},val:function(){return gx.fn.getDecimalValue("vVALORTOTALTELA",'.',',')},nac:gx.falseFn};
   GXValidFnc[69]={fld:"TABLE13",grid:0};
   GXValidFnc[73]={fld:"TABLE14",grid:0};
   GXValidFnc[76]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[78]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[80]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[82]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[84]={fld:"IMAGE5",grid:0};
   GXValidFnc[85]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[86]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[87]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Caixabancoempresaid,isvalid:null,rgrid:[],fld:"vCAIXABANCOEMPRESAID",gxz:"ZV94CaixaBancoEmpresaId",gxold:"OV94CaixaBancoEmpresaId",gxvar:"AV94CaixaBancoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV94CaixaBancoEmpresaId=Value},v2z:function(Value){gx.O.ZV94CaixaBancoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCAIXABANCOEMPRESAID",gx.O.AV94CaixaBancoEmpresaId,0)},c2v:function(){gx.O.AV94CaixaBancoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCAIXABANCOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[88]={fld:"JSJON", format:2,grid:0};
   GXValidFnc[90]={fld:"BTNHELP",grid:0};
   GXValidFnc[91]={fld:"PROMPT_CAIXABANCOID",grid:0};
   this.AV93CaixaBancoId = 0 ;
   this.ZV93CaixaBancoId = 0 ;
   this.OV93CaixaBancoId = 0 ;
   this.AV95CaixaBancoDescricao = "" ;
   this.ZV95CaixaBancoDescricao = "" ;
   this.OV95CaixaBancoDescricao = "" ;
   this.AV24DataInicial = gx.date.nullDate() ;
   this.ZV24DataInicial = gx.date.nullDate() ;
   this.OV24DataInicial = gx.date.nullDate() ;
   this.AV25DataFinal = gx.date.nullDate() ;
   this.ZV25DataFinal = gx.date.nullDate() ;
   this.OV25DataFinal = gx.date.nullDate() ;
   this.AV90snChequesCobrados = "" ;
   this.ZV90snChequesCobrados = "" ;
   this.OV90snChequesCobrados = "" ;
   this.ZV92DtaCobranca = "" ;
   this.OV92DtaCobranca = "" ;
   this.ZV98NoCheque = 0 ;
   this.OV98NoCheque = 0 ;
   this.ZV99DtaEmissao = gx.date.nullDate() ;
   this.OV99DtaEmissao = gx.date.nullDate() ;
   this.ZV100NoLancamento = 0 ;
   this.OV100NoLancamento = 0 ;
   this.ZV101NoDocumento = "" ;
   this.OV101NoDocumento = "" ;
   this.ZV97FornecedorObservacao = "" ;
   this.OV97FornecedorObservacao = "" ;
   this.ZV69Valor = 0 ;
   this.OV69Valor = 0 ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z1928LancamentoCxaBcoEmpresaid = "" ;
   this.O1928LancamentoCxaBcoEmpresaid = "" ;
   this.AV91QtdLancamentoTela = 0 ;
   this.ZV91QtdLancamentoTela = 0 ;
   this.OV91QtdLancamentoTela = 0 ;
   this.AV89ValorTotalTela = 0 ;
   this.ZV89ValorTotalTela = 0 ;
   this.OV89ValorTotalTela = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV94CaixaBancoEmpresaId = "" ;
   this.ZV94CaixaBancoEmpresaId = "" ;
   this.OV94CaixaBancoEmpresaId = "" ;
   this.AV93CaixaBancoId = 0 ;
   this.AV95CaixaBancoDescricao = "" ;
   this.AV24DataInicial = gx.date.nullDate() ;
   this.AV25DataFinal = gx.date.nullDate() ;
   this.AV90snChequesCobrados = "" ;
   this.AV91QtdLancamentoTela = 0 ;
   this.AV89ValorTotalTela = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV5Pagina = 0 ;
   this.AV94CaixaBancoEmpresaId = "" ;
   this.A1934LancamentoCxaBcoNoCheque = 0 ;
   this.A1929LancamentoCxaBcoNumero = 0 ;
   this.A1932LancamentoCxaBcoDocumento = "" ;
   this.A1933LancamentoCxaBcoValor = 0 ;
   this.A1864LancamentoCxaBcoPessoaEmpId = "" ;
   this.A1866LancamentoCxaBcoPessoaFantasia = "" ;
   this.A1931LancamentoCxaBcoObservacao = "" ;
   this.A1935LancamentoCxaBcoDataConf = gx.date.nullDate() ;
   this.A1930LancamentoCxaBcoData = gx.date.nullDate() ;
   this.A1868LancamentoCxaBcoCaiBanId = 0 ;
   this.A1927LancamentoCxaBcoTpEmiCheque = "" ;
   this.A1865LancamentoCxaBcoPessoaId = 0 ;
   this.AV92DtaCobranca = "" ;
   this.AV98NoCheque = 0 ;
   this.AV99DtaEmissao = gx.date.nullDate() ;
   this.AV100NoLancamento = 0 ;
   this.AV101NoDocumento = "" ;
   this.AV97FornecedorObservacao = "" ;
   this.AV69Valor = 0 ;
   this.AV16bmpCon = "" ;
   this.A1928LancamentoCxaBcoEmpresaid = "" ;
   this.A1015CaixaBancoId = 0 ;
   this.A1014CaixaBancoEmpresaId = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV86DtaNula = gx.date.nullDate() ;
   this.AV102ContLinhas = 0 ;
   this.AV84QtdLancamento = 0 ;
   this.AV85ValorTotal = 0 ;
   this.Events = {"e11bj2_client": ["'GXM_FIRST'", true] ,"e12bj2_client": ["'GXM_PREVIOUS'", true] ,"e13bj2_client": ["'GXM_NEXT'", true] ,"e14bj2_client": ["'GXM_LAST'", true] ,"e15bj2_client": ["'FECHAR'", true] ,"e16bj2_client": ["'PROCURAR'", true] ,"e22bj2_client": ["ENTER", true] ,"e23bj2_client": ["CANCEL", true] ,"e21bj2_client": ["'CONSULTAR'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV93CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'AV90snChequesCobrados',fld:'vSNCHEQUESCOBRADOS'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV86DtaNula',fld:'vDTANULA',hsh:true},{av:'A1934LancamentoCxaBcoNoCheque',fld:'LANCAMENTOCXABCONOCHEQUE'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1929LancamentoCxaBcoNumero',fld:'LANCAMENTOCXABCONUMERO'},{av:'A1932LancamentoCxaBcoDocumento',fld:'LANCAMENTOCXABCODOCUMENTO'},{av:'AV84QtdLancamento',fld:'vQTDLANCAMENTO'},{av:'AV85ValorTotal',fld:'vVALORTOTAL'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1864LancamentoCxaBcoPessoaEmpId',fld:'LANCAMENTOCXABCOPESSOAEMPID'},{av:'A1866LancamentoCxaBcoPessoaFantasia',fld:'LANCAMENTOCXABCOPESSOAFANTASIA'},{av:'A1931LancamentoCxaBcoObservacao',fld:'LANCAMENTOCXABCOOBSERVACAO'},{av:'A1935LancamentoCxaBcoDataConf',fld:'LANCAMENTOCXABCODATACONF'},{av:'AV102ContLinhas',fld:'vCONTLINHAS'},{ctrl:'GRID',prop:'Rows'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV103Resto',fld:'vRESTO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV93CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'AV90snChequesCobrados',fld:'vSNCHEQUESCOBRADOS'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV86DtaNula',fld:'vDTANULA',hsh:true},{av:'AV102ContLinhas',fld:'vCONTLINHAS'},{av:'A1934LancamentoCxaBcoNoCheque',fld:'LANCAMENTOCXABCONOCHEQUE'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1929LancamentoCxaBcoNumero',fld:'LANCAMENTOCXABCONUMERO'},{av:'A1932LancamentoCxaBcoDocumento',fld:'LANCAMENTOCXABCODOCUMENTO'},{av:'AV84QtdLancamento',fld:'vQTDLANCAMENTO'},{av:'AV85ValorTotal',fld:'vVALORTOTAL'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1864LancamentoCxaBcoPessoaEmpId',fld:'LANCAMENTOCXABCOPESSOAEMPID'},{av:'A1866LancamentoCxaBcoPessoaFantasia',fld:'LANCAMENTOCXABCOPESSOAFANTASIA'},{av:'A1931LancamentoCxaBcoObservacao',fld:'LANCAMENTOCXABCOOBSERVACAO'},{av:'A1935LancamentoCxaBcoDataConf',fld:'LANCAMENTOCXABCODATACONF'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV93CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'AV90snChequesCobrados',fld:'vSNCHEQUESCOBRADOS'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV86DtaNula',fld:'vDTANULA',hsh:true},{av:'AV102ContLinhas',fld:'vCONTLINHAS'},{av:'A1934LancamentoCxaBcoNoCheque',fld:'LANCAMENTOCXABCONOCHEQUE'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1929LancamentoCxaBcoNumero',fld:'LANCAMENTOCXABCONUMERO'},{av:'A1932LancamentoCxaBcoDocumento',fld:'LANCAMENTOCXABCODOCUMENTO'},{av:'AV84QtdLancamento',fld:'vQTDLANCAMENTO'},{av:'AV85ValorTotal',fld:'vVALORTOTAL'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1864LancamentoCxaBcoPessoaEmpId',fld:'LANCAMENTOCXABCOPESSOAEMPID'},{av:'A1866LancamentoCxaBcoPessoaFantasia',fld:'LANCAMENTOCXABCOPESSOAFANTASIA'},{av:'A1931LancamentoCxaBcoObservacao',fld:'LANCAMENTOCXABCOOBSERVACAO'},{av:'A1935LancamentoCxaBcoDataConf',fld:'LANCAMENTOCXABCODATACONF'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV93CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'AV90snChequesCobrados',fld:'vSNCHEQUESCOBRADOS'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV86DtaNula',fld:'vDTANULA',hsh:true},{av:'AV102ContLinhas',fld:'vCONTLINHAS'},{av:'A1934LancamentoCxaBcoNoCheque',fld:'LANCAMENTOCXABCONOCHEQUE'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1929LancamentoCxaBcoNumero',fld:'LANCAMENTOCXABCONUMERO'},{av:'A1932LancamentoCxaBcoDocumento',fld:'LANCAMENTOCXABCODOCUMENTO'},{av:'AV84QtdLancamento',fld:'vQTDLANCAMENTO'},{av:'AV85ValorTotal',fld:'vVALORTOTAL'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1864LancamentoCxaBcoPessoaEmpId',fld:'LANCAMENTOCXABCOPESSOAEMPID'},{av:'A1866LancamentoCxaBcoPessoaFantasia',fld:'LANCAMENTOCXABCOPESSOAFANTASIA'},{av:'A1931LancamentoCxaBcoObservacao',fld:'LANCAMENTOCXABCOOBSERVACAO'},{av:'A1935LancamentoCxaBcoDataConf',fld:'LANCAMENTOCXABCODATACONF'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV93CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'AV90snChequesCobrados',fld:'vSNCHEQUESCOBRADOS'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV86DtaNula',fld:'vDTANULA',hsh:true},{av:'AV102ContLinhas',fld:'vCONTLINHAS'},{av:'A1934LancamentoCxaBcoNoCheque',fld:'LANCAMENTOCXABCONOCHEQUE'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1929LancamentoCxaBcoNumero',fld:'LANCAMENTOCXABCONUMERO'},{av:'A1932LancamentoCxaBcoDocumento',fld:'LANCAMENTOCXABCODOCUMENTO'},{av:'AV84QtdLancamento',fld:'vQTDLANCAMENTO'},{av:'AV85ValorTotal',fld:'vVALORTOTAL'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1864LancamentoCxaBcoPessoaEmpId',fld:'LANCAMENTOCXABCOPESSOAEMPID'},{av:'A1866LancamentoCxaBcoPessoaFantasia',fld:'LANCAMENTOCXABCOPESSOAFANTASIA'},{av:'A1931LancamentoCxaBcoObservacao',fld:'LANCAMENTOCXABCOOBSERVACAO'},{av:'A1935LancamentoCxaBcoDataConf',fld:'LANCAMENTOCXABCODATACONF'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV100NoLancamento',fld:'vNOLANCAMENTO'}],[]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1934LancamentoCxaBcoNoCheque',fld:'LANCAMENTOCXABCONOCHEQUE'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1929LancamentoCxaBcoNumero',fld:'LANCAMENTOCXABCONUMERO'},{av:'A1932LancamentoCxaBcoDocumento',fld:'LANCAMENTOCXABCODOCUMENTO'},{av:'AV84QtdLancamento',fld:'vQTDLANCAMENTO'},{av:'AV85ValorTotal',fld:'vVALORTOTAL'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1864LancamentoCxaBcoPessoaEmpId',fld:'LANCAMENTOCXABCOPESSOAEMPID'},{av:'A1866LancamentoCxaBcoPessoaFantasia',fld:'LANCAMENTOCXABCOPESSOAFANTASIA'},{av:'A1931LancamentoCxaBcoObservacao',fld:'LANCAMENTOCXABCOOBSERVACAO'},{av:'A1935LancamentoCxaBcoDataConf',fld:'LANCAMENTOCXABCODATACONF'},{av:'AV86DtaNula',fld:'vDTANULA',hsh:true},{av:'AV90snChequesCobrados',fld:'vSNCHEQUESCOBRADOS'},{av:'AV102ContLinhas',fld:'vCONTLINHAS'},{ctrl:'GRID',prop:'Rows'}],[{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV98NoCheque',fld:'vNOCHEQUE'},{av:'AV99DtaEmissao',fld:'vDTAEMISSAO'},{av:'AV100NoLancamento',fld:'vNOLANCAMENTO'},{av:'AV101NoDocumento',fld:'vNODOCUMENTO'},{av:'AV84QtdLancamento',fld:'vQTDLANCAMENTO'},{av:'AV85ValorTotal',fld:'vVALORTOTAL'},{av:'AV69Valor',fld:'vVALOR'},{av:'AV97FornecedorObservacao',fld:'vFORNECEDOROBSERVACAO'},{av:'AV92DtaCobranca',fld:'vDTACOBRANCA'},{av:'gx.fn.getCtrlProperty("vDTACOBRANCA","Visible")',ctrl:'vDTACOBRANCA',prop:'Visible'},{av:'AV89ValorTotalTela',fld:'vVALORTOTALTELA'},{av:'AV91QtdLancamentoTela',fld:'vQTDLANCAMENTOTELA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV103Resto',fld:'vRESTO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV93CaixaBancoId',fld:'vCAIXABANCOID'},{av:'AV24DataInicial',fld:'vDATAINICIAL'},{av:'AV25DataFinal',fld:'vDATAFINAL'},{av:'AV90snChequesCobrados',fld:'vSNCHEQUESCOBRADOS'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV86DtaNula',fld:'vDTANULA',hsh:true},{av:'AV102ContLinhas',fld:'vCONTLINHAS'},{av:'A1934LancamentoCxaBcoNoCheque',fld:'LANCAMENTOCXABCONOCHEQUE'},{av:'A1930LancamentoCxaBcoData',fld:'LANCAMENTOCXABCODATA'},{av:'A1929LancamentoCxaBcoNumero',fld:'LANCAMENTOCXABCONUMERO'},{av:'A1932LancamentoCxaBcoDocumento',fld:'LANCAMENTOCXABCODOCUMENTO'},{av:'AV84QtdLancamento',fld:'vQTDLANCAMENTO'},{av:'AV85ValorTotal',fld:'vVALORTOTAL'},{av:'A1933LancamentoCxaBcoValor',fld:'LANCAMENTOCXABCOVALOR'},{av:'A1864LancamentoCxaBcoPessoaEmpId',fld:'LANCAMENTOCXABCOPESSOAEMPID'},{av:'A1866LancamentoCxaBcoPessoaFantasia',fld:'LANCAMENTOCXABCOPESSOAFANTASIA'},{av:'A1931LancamentoCxaBcoObservacao',fld:'LANCAMENTOCXABCOOBSERVACAO'},{av:'A1935LancamentoCxaBcoDataConf',fld:'LANCAMENTOCXABCODATACONF'},{av:'AV32TpErro',fld:'vTPERRO'},{av:'A1014CaixaBancoEmpresaId',fld:'CAIXABANCOEMPRESAID'},{av:'AV94CaixaBancoEmpresaId',fld:'vCAIXABANCOEMPRESAID'},{av:'A1015CaixaBancoId',fld:'CAIXABANCOID'},{av:'AV9UsrCod',fld:'vUSRCOD'},{ctrl:'GRID',prop:'Rows'}],[{av:'AV102ContLinhas',fld:'vCONTLINHAS'},{av:'AV91QtdLancamentoTela',fld:'vQTDLANCAMENTOTELA'},{av:'AV89ValorTotalTela',fld:'vVALORTOTALTELA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV32TpErro',fld:'vTPERRO'},{av:'AV110GXLvl169',fld:'vGXLVL169'},{av:'AV96Erro',fld:'vERRO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV103Resto',fld:'vRESTO'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'AV102ContLinhas',fld:'vCONTLINHAS'},{ctrl:'GRID',prop:'Rows'}],[{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV103Resto',fld:'vRESTO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.setPrompt("PROMPT_CAIXABANCOID", [13]);
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV86DtaNula", "vDTANULA", 0, "date");
   this.setVCMap("AV102ContLinhas", "vCONTLINHAS", 0, "int");
   this.setVCMap("A1934LancamentoCxaBcoNoCheque", "LANCAMENTOCXABCONOCHEQUE", 0, "int");
   this.setVCMap("A1930LancamentoCxaBcoData", "LANCAMENTOCXABCODATA", 0, "date");
   this.setVCMap("A1929LancamentoCxaBcoNumero", "LANCAMENTOCXABCONUMERO", 0, "int");
   this.setVCMap("A1932LancamentoCxaBcoDocumento", "LANCAMENTOCXABCODOCUMENTO", 0, "svchar");
   this.setVCMap("AV84QtdLancamento", "vQTDLANCAMENTO", 0, "int");
   this.setVCMap("AV85ValorTotal", "vVALORTOTAL", 0, "decimal");
   this.setVCMap("A1933LancamentoCxaBcoValor", "LANCAMENTOCXABCOVALOR", 0, "decimal");
   this.setVCMap("A1864LancamentoCxaBcoPessoaEmpId", "LANCAMENTOCXABCOPESSOAEMPID", 0, "char");
   this.setVCMap("A1866LancamentoCxaBcoPessoaFantasia", "LANCAMENTOCXABCOPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A1931LancamentoCxaBcoObservacao", "LANCAMENTOCXABCOOBSERVACAO", 0, "vchar");
   this.setVCMap("A1935LancamentoCxaBcoDataConf", "LANCAMENTOCXABCODATACONF", 0, "date");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV86DtaNula", "vDTANULA", 0, "date");
   this.setVCMap("AV102ContLinhas", "vCONTLINHAS", 0, "int");
   this.setVCMap("A1934LancamentoCxaBcoNoCheque", "LANCAMENTOCXABCONOCHEQUE", 0, "int");
   this.setVCMap("A1930LancamentoCxaBcoData", "LANCAMENTOCXABCODATA", 0, "date");
   this.setVCMap("A1929LancamentoCxaBcoNumero", "LANCAMENTOCXABCONUMERO", 0, "int");
   this.setVCMap("A1932LancamentoCxaBcoDocumento", "LANCAMENTOCXABCODOCUMENTO", 0, "svchar");
   this.setVCMap("AV84QtdLancamento", "vQTDLANCAMENTO", 0, "int");
   this.setVCMap("AV85ValorTotal", "vVALORTOTAL", 0, "decimal");
   this.setVCMap("A1933LancamentoCxaBcoValor", "LANCAMENTOCXABCOVALOR", 0, "decimal");
   this.setVCMap("A1864LancamentoCxaBcoPessoaEmpId", "LANCAMENTOCXABCOPESSOAEMPID", 0, "char");
   this.setVCMap("A1866LancamentoCxaBcoPessoaFantasia", "LANCAMENTOCXABCOPESSOAFANTASIA", 0, "svchar");
   this.setVCMap("A1931LancamentoCxaBcoObservacao", "LANCAMENTOCXABCOOBSERVACAO", 0, "vchar");
   this.setVCMap("A1935LancamentoCxaBcoDataConf", "LANCAMENTOCXABCODATACONF", 0, "date");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV86DtaNula"});
   GridContainer.addRefreshingVar({rfrVar:"AV102ContLinhas"});
   GridContainer.addRefreshingVar({rfrVar:"A1934LancamentoCxaBcoNoCheque"});
   GridContainer.addRefreshingVar({rfrVar:"A1930LancamentoCxaBcoData"});
   GridContainer.addRefreshingVar({rfrVar:"A1929LancamentoCxaBcoNumero"});
   GridContainer.addRefreshingVar({rfrVar:"A1932LancamentoCxaBcoDocumento"});
   GridContainer.addRefreshingVar({rfrVar:"AV84QtdLancamento"});
   GridContainer.addRefreshingVar({rfrVar:"AV85ValorTotal"});
   GridContainer.addRefreshingVar({rfrVar:"A1933LancamentoCxaBcoValor"});
   GridContainer.addRefreshingVar({rfrVar:"A1864LancamentoCxaBcoPessoaEmpId"});
   GridContainer.addRefreshingVar({rfrVar:"A1866LancamentoCxaBcoPessoaFantasia"});
   GridContainer.addRefreshingVar({rfrVar:"A1931LancamentoCxaBcoObservacao"});
   GridContainer.addRefreshingVar({rfrVar:"A1935LancamentoCxaBcoDataConf"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultachequeemitido());

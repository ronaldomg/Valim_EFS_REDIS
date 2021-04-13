/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:59:52.31
*/
gx.evt.autoSkip = false;
gx.define('hlancamentocaixa', false, function () {
   this.ServerClass =  "hlancamentocaixa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV28CaixaTrabalhoEmpresaId=gx.fn.getControlValue("vCAIXATRABALHOEMPRESAID") ;
      this.AV27HistoricoFcxEmpresaID=gx.fn.getControlValue("vHISTORICOFCXEMPRESAID") ;
      this.AV52SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV56Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Pessoaid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(92) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PESSOAID", gx.fn.currentGridRowImpl(92));
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
   this.e11oj2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12oj2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17oj2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13oj2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14oj2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15oj2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16oj2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20oj2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21oj2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22oj2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23oj2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25oj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26oj2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,25,27,29,31,34,36,38,41,43,45,47,48,49,52,54,55,57,59,60,61,62,67,70,73,75,77,79,81,83,86,88,89,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,113,115,116,117,118,119,120];
   this.GXLastCtrlId =120;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",92,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hlancamentocaixa",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3632,93,"LANCAMENTOCAIXAID","","","LancamentoCaixaId","int",0,"px",6,6,"right",null,[],3632,"LancamentoCaixaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3625,94,"LANCAMENTOCAIXADATA","","","LancamentoCaixaData","date",0,"px",10,10,"right",null,[],3625,"LancamentoCaixaData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3626,95,"LANCAMENTOCAIXAHORA","","","LancamentoCaixaHora","char",0,"px",5,5,"left",null,[],3626,"LancamentoCaixaHora",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3540,96,"HISTORICOFCXDESCRICAO","","","HistoricoFcxDescricao","svchar",0,"px",30,30,"left",null,[],3540,"HistoricoFcxDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(3627,97,"LANCAMENTOCAIXAVALOR","","","LancamentoCaixaValor","decimal",0,"px",22,22,"right",null,[],3627,"LancamentoCaixaValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3628,98,"LANCAMENTOCAIXAOBSERVACAO","","","LancamentoCaixaObservacao","svchar",0,"px",30,30,"left",null,[],3628,"LancamentoCaixaObservacao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(4354,99,"LANCAMENTOCAIXASAIDAID","No. Venda","","LancamentoCaixaSaidaId","int",0,"px",10,10,"right",null,[],4354,"LancamentoCaixaSaidaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(71,100,"PESSOAFANTASIA","Cliente/Fornecedor","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",101,0,"px",17,"px","e20oj2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",102,0,"px",17,"px","e21oj2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",103,0,"px",17,"px","e22oj2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(3443,104,"CAIXATRABALHOID","Caixa Trabalho","","CaixaTrabalhoId","int",0,"px",10,10,"right",null,[],3443,"CaixaTrabalhoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5776,105,"CAIXATRABALHONUMEROLOJA","Caixa Trabalho Numero Loja","","CaixaTrabalhoNumeroLoja","int",0,"px",4,4,"right",null,[],5776,"CaixaTrabalhoNumeroLoja",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5777,106,"CAIXATRABALHOSEQUENCIAECF","Caixa Trabalho Sequencia ECF","","CaixaTrabalhoSequenciaECF","int",0,"px",3,3,"right",null,[],5777,"CaixaTrabalhoSequenciaECF",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(69,107,"PESSOAID","Código do Titular","","PessoaId","int",0,"px",7,7,"right",null,[],69,"PessoaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXATRABALHONUMEROLOJA",gxz:"ZV32CaixaTrabalhoNumeroLoja",gxold:"OV32CaixaTrabalhoNumeroLoja",gxvar:"AV32CaixaTrabalhoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV32CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHONUMEROLOJA",gx.O.AV32CaixaTrabalhoNumeroLoja,0)},c2v:function(){gx.O.AV32CaixaTrabalhoNumeroLoja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHONUMEROLOJA",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[17]={fld:"TABLE10",grid:0};
   GXValidFnc[20]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPESSOAID",gxz:"ZV34PessoaId",gxold:"OV34PessoaId",gxvar:"AV34PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV34PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV34PessoaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPESSOAID",gx.O.AV34PessoaId,0)},c2v:function(){gx.O.AV34PessoaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPESSOAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPESSOAFANTASIA",gxz:"ZV35PessoaFantasia",gxold:"OV35PessoaFantasia",gxvar:"AV35PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV35PessoaFantasia=Value},v2z:function(Value){gx.O.ZV35PessoaFantasia=Value},v2c:function(){gx.fn.setControlValue("vPESSOAFANTASIA",gx.O.AV35PessoaFantasia,0)},c2v:function(){gx.O.AV35PessoaFantasia=this.val()},val:function(){return gx.fn.getControlValue("vPESSOAFANTASIA")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXATRABALHOSEQUENCIAECF",gxz:"ZV33CaixaTrabalhoSequenciaECF",gxold:"OV33CaixaTrabalhoSequenciaECF",gxvar:"AV33CaixaTrabalhoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV33CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHOSEQUENCIAECF",gx.O.AV33CaixaTrabalhoSequenciaECF,0)},c2v:function(){gx.O.AV33CaixaTrabalhoSequenciaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHOSEQUENCIAECF",'.')},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[31]={fld:"TABLE11",grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCAIXADATAIN",gxz:"ZV29LancamentoCaixaDataIn",gxold:"OV29LancamentoCaixaDataIn",gxvar:"AV29LancamentoCaixaDataIn",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29LancamentoCaixaDataIn=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV29LancamentoCaixaDataIn=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCAIXADATAIN",gx.O.AV29LancamentoCaixaDataIn,0)},c2v:function(){gx.O.AV29LancamentoCaixaDataIn=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCAIXADATAIN")},nac:gx.falseFn};
   GXValidFnc[36]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[38]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCAIXADATAFIN",gxz:"ZV30LancamentoCaixaDataFin",gxold:"OV30LancamentoCaixaDataFin",gxvar:"AV30LancamentoCaixaDataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30LancamentoCaixaDataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV30LancamentoCaixaDataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCAIXADATAFIN",gx.O.AV30LancamentoCaixaDataFin,0)},c2v:function(){gx.O.AV30LancamentoCaixaDataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCAIXADATAFIN")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXATRABALHOID",gxz:"ZV26CaixaTrabalhoId",gxold:"OV26CaixaTrabalhoId",gxvar:"AV26CaixaTrabalhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26CaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26CaixaTrabalhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHOID",gx.O.AV26CaixaTrabalhoId,0)},c2v:function(){gx.O.AV26CaixaTrabalhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHOID",'.')},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[47]={lvl:0,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCAIXAVALOR",gxz:"ZV37LancamentoCaixaValor",gxold:"OV37LancamentoCaixaValor",gxvar:"AV37LancamentoCaixaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV37LancamentoCaixaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV37LancamentoCaixaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vLANCAMENTOCAIXAVALOR",gx.O.AV37LancamentoCaixaValor,2,',')},c2v:function(){gx.O.AV37LancamentoCaixaValor=this.val()},val:function(){return gx.fn.getDecimalValue("vLANCAMENTOCAIXAVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSIM",gxz:"ZV43Sim",gxold:"OV43Sim",gxvar:"AV43Sim",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV43Sim=Value},v2z:function(Value){gx.O.ZV43Sim=Value},v2c:function(){gx.fn.setControlValue("vSIM",gx.O.AV43Sim,0)},c2v:function(){gx.O.AV43Sim=this.val()},val:function(){return gx.fn.getControlValue("vSIM")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNPESQUISAR",gxz:"ZV42SnPesquisar",gxold:"OV42SnPesquisar",gxvar:"AV42SnPesquisar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV42SnPesquisar=Value},v2z:function(Value){gx.O.ZV42SnPesquisar=Value},v2c:function(){gx.fn.setControlValue("vSNPESQUISAR",gx.O.AV42SnPesquisar,0)},c2v:function(){gx.O.AV42SnPesquisar=this.val()},val:function(){return gx.fn.getControlValue("vSNPESQUISAR")},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCAIXASAIDAID",gxz:"ZV36LancamentoCaixaSaidaId",gxold:"OV36LancamentoCaixaSaidaId",gxvar:"AV36LancamentoCaixaSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV36LancamentoCaixaSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV36LancamentoCaixaSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCAIXASAIDAID",gx.O.AV36LancamentoCaixaSaidaId,0)},c2v:function(){gx.O.AV36LancamentoCaixaSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCAIXASAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[55]={fld:"BTNPROMPTSAIDA",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCAIXAOBSERVACAO",gxz:"ZV45LancamentoCaixaObservacao",gxold:"OV45LancamentoCaixaObservacao",gxvar:"AV45LancamentoCaixaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV45LancamentoCaixaObservacao=Value},v2z:function(Value){gx.O.ZV45LancamentoCaixaObservacao=Value},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCAIXAOBSERVACAO",gx.O.AV45LancamentoCaixaObservacao,0)},c2v:function(){gx.O.AV45LancamentoCaixaObservacao=this.val()},val:function(){return gx.fn.getControlValue("vLANCAMENTOCAIXAOBSERVACAO")},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vEMPRESAPESSOASEMPRESAID",gxz:"ZV40EmpresaPessoasEmpresaId",gxold:"OV40EmpresaPessoasEmpresaId",gxvar:"AV40EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV40EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.ZV40EmpresaPessoasEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPESSOASEMPRESAID",gx.O.AV40EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.AV40EmpresaPessoasEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[61]={lvl:0,type:"int",len:5,dec:0,sign:false,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDE",gxz:"ZV41Qtde",gxold:"OV41Qtde",gxvar:"AV41Qtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV41Qtde=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV41Qtde=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vQTDE",gx.O.AV41Qtde,0)},c2v:function(){gx.O.AV41Qtde=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDE",'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vNAO",gxz:"ZV44Nao",gxold:"OV44Nao",gxvar:"AV44Nao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV44Nao=Value},v2z:function(Value){gx.O.ZV44Nao=Value},v2c:function(){gx.fn.setControlValue("vNAO",gx.O.AV44Nao,0)},c2v:function(){gx.O.AV44Nao=this.val()},val:function(){return gx.fn.getControlValue("vNAO")},nac:gx.falseFn};
   GXValidFnc[67]={fld:"TABLE4",grid:0};
   GXValidFnc[70]={fld:"TABLE6",grid:0};
   GXValidFnc[73]={fld:"IMAGE2",grid:0};
   GXValidFnc[75]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[77]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[79]={fld:"IMAGE1",grid:0};
   GXValidFnc[81]={fld:"BTNHELP",grid:0};
   GXValidFnc[83]={fld:"TABLE5",grid:0};
   GXValidFnc[86]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[88]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[93]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXAID",gxz:"Z3632LancamentoCaixaId",gxold:"O3632LancamentoCaixaId",gxvar:"A3632LancamentoCaixaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3632LancamentoCaixaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3632LancamentoCaixaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCAIXAID",row || gx.fn.currentGridRowImpl(92),gx.O.A3632LancamentoCaixaId,0)},c2v:function(){gx.O.A3632LancamentoCaixaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCAIXAID",row || gx.fn.currentGridRowImpl(92),'.')},nac:gx.falseFn};
   GXValidFnc[94]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXADATA",gxz:"Z3625LancamentoCaixaData",gxold:"O3625LancamentoCaixaData",gxvar:"A3625LancamentoCaixaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3625LancamentoCaixaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3625LancamentoCaixaData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCAIXADATA",row || gx.fn.currentGridRowImpl(92),gx.O.A3625LancamentoCaixaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3625LancamentoCaixaData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCAMENTOCAIXADATA",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[95]={lvl:2,type:"char",len:5,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXAHORA",gxz:"Z3626LancamentoCaixaHora",gxold:"O3626LancamentoCaixaHora",gxvar:"A3626LancamentoCaixaHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3626LancamentoCaixaHora=Value},v2z:function(Value){gx.O.Z3626LancamentoCaixaHora=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCAIXAHORA",row || gx.fn.currentGridRowImpl(92),gx.O.A3626LancamentoCaixaHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3626LancamentoCaixaHora=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCAIXAHORA",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[96]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXDESCRICAO",gxz:"Z3540HistoricoFcxDescricao",gxold:"O3540HistoricoFcxDescricao",gxvar:"A3540HistoricoFcxDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3540HistoricoFcxDescricao=Value},v2z:function(Value){gx.O.Z3540HistoricoFcxDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOFCXDESCRICAO",row || gx.fn.currentGridRowImpl(92),gx.O.A3540HistoricoFcxDescricao,0)},c2v:function(){gx.O.A3540HistoricoFcxDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOFCXDESCRICAO",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[97]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXAVALOR",gxz:"Z3627LancamentoCaixaValor",gxold:"O3627LancamentoCaixaValor",gxvar:"A3627LancamentoCaixaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3627LancamentoCaixaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3627LancamentoCaixaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCAMENTOCAIXAVALOR",row || gx.fn.currentGridRowImpl(92),gx.O.A3627LancamentoCaixaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3627LancamentoCaixaValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCAMENTOCAIXAVALOR",row || gx.fn.currentGridRowImpl(92),'.',',')},nac:gx.falseFn};
   GXValidFnc[98]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXAOBSERVACAO",gxz:"Z3628LancamentoCaixaObservacao",gxold:"O3628LancamentoCaixaObservacao",gxvar:"A3628LancamentoCaixaObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3628LancamentoCaixaObservacao=Value},v2z:function(Value){gx.O.Z3628LancamentoCaixaObservacao=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCAIXAOBSERVACAO",row || gx.fn.currentGridRowImpl(92),gx.O.A3628LancamentoCaixaObservacao,0)},c2v:function(){gx.O.A3628LancamentoCaixaObservacao=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCAIXAOBSERVACAO",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[99]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXASAIDAID",gxz:"Z4354LancamentoCaixaSaidaId",gxold:"O4354LancamentoCaixaSaidaId",gxvar:"A4354LancamentoCaixaSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4354LancamentoCaixaSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4354LancamentoCaixaSaidaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCAIXASAIDAID",row || gx.fn.currentGridRowImpl(92),gx.O.A4354LancamentoCaixaSaidaId,0)},c2v:function(){gx.O.A4354LancamentoCaixaSaidaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCAIXASAIDAID",row || gx.fn.currentGridRowImpl(92),'.')},nac:gx.falseFn};
   GXValidFnc[100]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(92),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(92))},nac:gx.falseFn};
   GXValidFnc[101]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(92),gx.O.AV7bmpAlt,gx.O.AV58Bmpalt_GXI)},c2v:function(){gx.O.AV58Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(92))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(92))}, gxvar_GXI:'AV58Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[102]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(92),gx.O.AV8bmpExc,gx.O.AV59Bmpexc_GXI)},c2v:function(){gx.O.AV59Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(92))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(92))}, gxvar_GXI:'AV59Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[103]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(92),gx.O.AV16bmpCon,gx.O.AV60Bmpcon_GXI)},c2v:function(){gx.O.AV60Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(92))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(92))}, gxvar_GXI:'AV60Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[104]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHOID",gxz:"Z3443CaixaTrabalhoId",gxold:"O3443CaixaTrabalhoId",gxvar:"A3443CaixaTrabalhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3443CaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3443CaixaTrabalhoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOID",row || gx.fn.currentGridRowImpl(92),gx.O.A3443CaixaTrabalhoId,0)},c2v:function(){gx.O.A3443CaixaTrabalhoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHOID",row || gx.fn.currentGridRowImpl(92),'.')},nac:gx.falseFn};
   GXValidFnc[105]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHONUMEROLOJA",gxz:"Z5776CaixaTrabalhoNumeroLoja",gxold:"O5776CaixaTrabalhoNumeroLoja",gxvar:"A5776CaixaTrabalhoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHONUMEROLOJA",row || gx.fn.currentGridRowImpl(92),gx.O.A5776CaixaTrabalhoNumeroLoja,0)},c2v:function(){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHONUMEROLOJA",row || gx.fn.currentGridRowImpl(92),'.')},nac:gx.falseFn};
   GXValidFnc[106]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHOSEQUENCIAECF",gxz:"Z5777CaixaTrabalhoSequenciaECF",gxold:"O5777CaixaTrabalhoSequenciaECF",gxvar:"A5777CaixaTrabalhoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(92),gx.O.A5777CaixaTrabalhoSequenciaECF,0)},c2v:function(){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(92),'.')},nac:gx.falseFn};
   GXValidFnc[107]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:92,gxgrid:this.GridContainer,fnc:this.Valid_Pessoaid,isvalid:null,rgrid:[],fld:"PESSOAID",gxz:"Z69PessoaId",gxold:"O69PessoaId",gxvar:"A69PessoaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A69PessoaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z69PessoaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PESSOAID",row || gx.fn.currentGridRowImpl(92),gx.O.A69PessoaId,0)},c2v:function(){gx.O.A69PessoaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PESSOAID",row || gx.fn.currentGridRowImpl(92),'.')},nac:gx.falseFn};
   GXValidFnc[113]={fld:"JS", format:2,grid:0};
   GXValidFnc[115]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[116]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCOOOUT",gxz:"ZV48CooOut",gxold:"OV48CooOut",gxvar:"AV48CooOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV48CooOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV48CooOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCOOOUT",gx.O.AV48CooOut,0)},c2v:function(){gx.O.AV48CooOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCOOOUT",'.')},nac:gx.falseFn};
   GXValidFnc[117]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDOCUMENTOOUT",gxz:"ZV49DocumentoOut",gxold:"OV49DocumentoOut",gxvar:"AV49DocumentoOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV49DocumentoOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV49DocumentoOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vDOCUMENTOOUT",gx.O.AV49DocumentoOut,0)},c2v:function(){gx.O.AV49DocumentoOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vDOCUMENTOOUT",'.')},nac:gx.falseFn};
   GXValidFnc[118]={lvl:0,type:"char",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSERIEOUT",gxz:"ZV50SerieOut",gxold:"OV50SerieOut",gxvar:"AV50SerieOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV50SerieOut=Value},v2z:function(Value){gx.O.ZV50SerieOut=Value},v2c:function(){gx.fn.setControlValue("vSERIEOUT",gx.O.AV50SerieOut,0)},c2v:function(){gx.O.AV50SerieOut=this.val()},val:function(){return gx.fn.getControlValue("vSERIEOUT")},nac:gx.falseFn};
   GXValidFnc[119]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vECFOUT",gxz:"ZV51ECFOut",gxold:"OV51ECFOut",gxvar:"AV51ECFOut",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV51ECFOut=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV51ECFOut=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vECFOUT",gx.O.AV51ECFOut,0)},c2v:function(){gx.O.AV51ECFOut=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vECFOUT",'.')},nac:gx.falseFn};
   GXValidFnc[120]={fld:"PROMPT_PESSOAID",grid:0};
   this.AV32CaixaTrabalhoNumeroLoja = 0 ;
   this.ZV32CaixaTrabalhoNumeroLoja = 0 ;
   this.OV32CaixaTrabalhoNumeroLoja = 0 ;
   this.AV34PessoaId = 0 ;
   this.ZV34PessoaId = 0 ;
   this.OV34PessoaId = 0 ;
   this.AV35PessoaFantasia = "" ;
   this.ZV35PessoaFantasia = "" ;
   this.OV35PessoaFantasia = "" ;
   this.AV33CaixaTrabalhoSequenciaECF = 0 ;
   this.ZV33CaixaTrabalhoSequenciaECF = 0 ;
   this.OV33CaixaTrabalhoSequenciaECF = 0 ;
   this.AV29LancamentoCaixaDataIn = gx.date.nullDate() ;
   this.ZV29LancamentoCaixaDataIn = gx.date.nullDate() ;
   this.OV29LancamentoCaixaDataIn = gx.date.nullDate() ;
   this.AV30LancamentoCaixaDataFin = gx.date.nullDate() ;
   this.ZV30LancamentoCaixaDataFin = gx.date.nullDate() ;
   this.OV30LancamentoCaixaDataFin = gx.date.nullDate() ;
   this.AV26CaixaTrabalhoId = 0 ;
   this.ZV26CaixaTrabalhoId = 0 ;
   this.OV26CaixaTrabalhoId = 0 ;
   this.AV37LancamentoCaixaValor = 0 ;
   this.ZV37LancamentoCaixaValor = 0 ;
   this.OV37LancamentoCaixaValor = 0 ;
   this.AV43Sim = "" ;
   this.ZV43Sim = "" ;
   this.OV43Sim = "" ;
   this.AV42SnPesquisar = "" ;
   this.ZV42SnPesquisar = "" ;
   this.OV42SnPesquisar = "" ;
   this.AV36LancamentoCaixaSaidaId = 0 ;
   this.ZV36LancamentoCaixaSaidaId = 0 ;
   this.OV36LancamentoCaixaSaidaId = 0 ;
   this.AV45LancamentoCaixaObservacao = "" ;
   this.ZV45LancamentoCaixaObservacao = "" ;
   this.OV45LancamentoCaixaObservacao = "" ;
   this.AV40EmpresaPessoasEmpresaId = "" ;
   this.ZV40EmpresaPessoasEmpresaId = "" ;
   this.OV40EmpresaPessoasEmpresaId = "" ;
   this.AV41Qtde = 0 ;
   this.ZV41Qtde = 0 ;
   this.OV41Qtde = 0 ;
   this.AV44Nao = "" ;
   this.ZV44Nao = "" ;
   this.OV44Nao = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z3632LancamentoCaixaId = 0 ;
   this.O3632LancamentoCaixaId = 0 ;
   this.Z3625LancamentoCaixaData = gx.date.nullDate() ;
   this.O3625LancamentoCaixaData = gx.date.nullDate() ;
   this.Z3626LancamentoCaixaHora = "" ;
   this.O3626LancamentoCaixaHora = "" ;
   this.Z3540HistoricoFcxDescricao = "" ;
   this.O3540HistoricoFcxDescricao = "" ;
   this.Z3627LancamentoCaixaValor = 0 ;
   this.O3627LancamentoCaixaValor = 0 ;
   this.Z3628LancamentoCaixaObservacao = "" ;
   this.O3628LancamentoCaixaObservacao = "" ;
   this.Z4354LancamentoCaixaSaidaId = 0 ;
   this.O4354LancamentoCaixaSaidaId = 0 ;
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z3443CaixaTrabalhoId = 0 ;
   this.O3443CaixaTrabalhoId = 0 ;
   this.Z5776CaixaTrabalhoNumeroLoja = 0 ;
   this.O5776CaixaTrabalhoNumeroLoja = 0 ;
   this.Z5777CaixaTrabalhoSequenciaECF = 0 ;
   this.O5777CaixaTrabalhoSequenciaECF = 0 ;
   this.Z69PessoaId = 0 ;
   this.O69PessoaId = 0 ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV48CooOut = 0 ;
   this.ZV48CooOut = 0 ;
   this.OV48CooOut = 0 ;
   this.AV49DocumentoOut = 0 ;
   this.ZV49DocumentoOut = 0 ;
   this.OV49DocumentoOut = 0 ;
   this.AV50SerieOut = "" ;
   this.ZV50SerieOut = "" ;
   this.OV50SerieOut = "" ;
   this.AV51ECFOut = 0 ;
   this.ZV51ECFOut = 0 ;
   this.OV51ECFOut = 0 ;
   this.AV32CaixaTrabalhoNumeroLoja = 0 ;
   this.AV34PessoaId = 0 ;
   this.AV35PessoaFantasia = "" ;
   this.AV33CaixaTrabalhoSequenciaECF = 0 ;
   this.AV29LancamentoCaixaDataIn = gx.date.nullDate() ;
   this.AV30LancamentoCaixaDataFin = gx.date.nullDate() ;
   this.AV26CaixaTrabalhoId = 0 ;
   this.AV37LancamentoCaixaValor = 0 ;
   this.AV43Sim = "" ;
   this.AV42SnPesquisar = "" ;
   this.AV36LancamentoCaixaSaidaId = 0 ;
   this.AV45LancamentoCaixaObservacao = "" ;
   this.AV40EmpresaPessoasEmpresaId = "" ;
   this.AV41Qtde = 0 ;
   this.AV44Nao = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV48CooOut = 0 ;
   this.AV49DocumentoOut = 0 ;
   this.AV50SerieOut = "" ;
   this.AV51ECFOut = 0 ;
   this.A3549HistoricoFcxEmpresaID = "" ;
   this.A3442CaixaTrabalhoEmpresaId = "" ;
   this.A3550HistoricoFcxId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A3632LancamentoCaixaId = 0 ;
   this.A3625LancamentoCaixaData = gx.date.nullDate() ;
   this.A3626LancamentoCaixaHora = "" ;
   this.A3540HistoricoFcxDescricao = "" ;
   this.A3627LancamentoCaixaValor = 0 ;
   this.A3628LancamentoCaixaObservacao = "" ;
   this.A4354LancamentoCaixaSaidaId = 0 ;
   this.A71PessoaFantasia = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3443CaixaTrabalhoId = 0 ;
   this.A5776CaixaTrabalhoNumeroLoja = 0 ;
   this.A5777CaixaTrabalhoSequenciaECF = 0 ;
   this.A69PessoaId = 0 ;
   this.AV28CaixaTrabalhoEmpresaId = "" ;
   this.AV27HistoricoFcxEmpresaID = "" ;
   this.AV52SnRecuperaFiltro = "" ;
   this.AV56Pgmname = "" ;
   this.Events = {"e11oj2_client": ["'ANTERIOR'", true] ,"e12oj2_client": ["'PROXIMO'", true] ,"e17oj2_client": ["VPAGINA.CLICK", true] ,"e13oj2_client": ["'NOVO'", true] ,"e14oj2_client": ["'FECHAR'", true] ,"e15oj2_client": ["'IMPRIMIR'", true] ,"e16oj2_client": ["'PROCURAR'", true] ,"e20oj2_client": ["'ALTERAR'", true] ,"e21oj2_client": ["'EXCLUIR'", true] ,"e22oj2_client": ["'CONSULTAR'", true] ,"e23oj2_client": ["'ATUALIZAPAGINA'", true] ,"e25oj2_client": ["ENTER", true] ,"e26oj2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV45LancamentoCaixaObservacao',fld:'vLANCAMENTOCAIXAOBSERVACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV27HistoricoFcxEmpresaID',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV32CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV33CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV26CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV56Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV45LancamentoCaixaObservacao',fld:'vLANCAMENTOCAIXAOBSERVACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV27HistoricoFcxEmpresaID',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV32CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV33CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV26CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV56Pgmname',fld:'vPGMNAME'}],[{ctrl:'LANCAMENTOCAIXAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCAIXAID","Title")',ctrl:'LANCAMENTOCAIXAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'LANCAMENTOCAIXADATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCAIXADATA","Title")',ctrl:'LANCAMENTOCAIXADATA',prop:'Title'},{ctrl:'LANCAMENTOCAIXAHORA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCAIXAHORA","Title")',ctrl:'LANCAMENTOCAIXAHORA',prop:'Title'},{ctrl:'HISTORICOFCXDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOFCXDESCRICAO","Title")',ctrl:'HISTORICOFCXDESCRICAO',prop:'Title'},{ctrl:'LANCAMENTOCAIXAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCAIXAVALOR","Title")',ctrl:'LANCAMENTOCAIXAVALOR',prop:'Title'},{ctrl:'LANCAMENTOCAIXAOBSERVACAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCAIXAOBSERVACAO","Title")',ctrl:'LANCAMENTOCAIXAOBSERVACAO',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV22filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV35PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV42SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV45LancamentoCaixaObservacao',fld:'vLANCAMENTOCAIXAOBSERVACAO'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV45LancamentoCaixaObservacao',fld:'vLANCAMENTOCAIXAOBSERVACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV27HistoricoFcxEmpresaID',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV32CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV33CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV26CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV35PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV42SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV45LancamentoCaixaObservacao',fld:'vLANCAMENTOCAIXAOBSERVACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV27HistoricoFcxEmpresaID',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV32CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV33CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV26CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV35PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV42SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV45LancamentoCaixaObservacao',fld:'vLANCAMENTOCAIXAOBSERVACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV27HistoricoFcxEmpresaID',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV32CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV33CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV26CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV35PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV42SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV32CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV33CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV26CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV35PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV42SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV45LancamentoCaixaObservacao',fld:'vLANCAMENTOCAIXAOBSERVACAO'},{av:'AV56Pgmname',fld:'vPGMNAME'}],[{av:'AV26CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV33CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV32CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV56Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV33CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV26CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV57Pgmdesc',fld:'vPGMDESC'}],[{av:'AV18NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV17NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV53QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV26CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV33CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV32CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV45LancamentoCaixaObservacao',fld:'vLANCAMENTOCAIXAOBSERVACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV27HistoricoFcxEmpresaID',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV32CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV33CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV26CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV56Pgmname',fld:'vPGMNAME'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV35PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV42SnPesquisar',fld:'vSNPESQUISAR'}],[{av:'AV42SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A5776CaixaTrabalhoNumeroLoja',fld:'CAIXATRABALHONUMEROLOJA'},{av:'A5777CaixaTrabalhoSequenciaECF',fld:'CAIXATRABALHOSEQUENCIAECF'},{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'},{av:'A3632LancamentoCaixaId',fld:'LANCAMENTOCAIXAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV35PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV42SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV45LancamentoCaixaObservacao',fld:'vLANCAMENTOCAIXAOBSERVACAO'},{av:'AV56Pgmname',fld:'vPGMNAME'}],[{av:'A3632LancamentoCaixaId',fld:'LANCAMENTOCAIXAID'},{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'},{av:'A5777CaixaTrabalhoSequenciaECF',fld:'CAIXATRABALHOSEQUENCIAECF'},{av:'A5776CaixaTrabalhoNumeroLoja',fld:'CAIXATRABALHONUMEROLOJA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A5776CaixaTrabalhoNumeroLoja',fld:'CAIXATRABALHONUMEROLOJA'},{av:'A5777CaixaTrabalhoSequenciaECF',fld:'CAIXATRABALHOSEQUENCIAECF'},{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'},{av:'A3632LancamentoCaixaId',fld:'LANCAMENTOCAIXAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV35PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV42SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV45LancamentoCaixaObservacao',fld:'vLANCAMENTOCAIXAOBSERVACAO'},{av:'AV56Pgmname',fld:'vPGMNAME'}],[{av:'A3632LancamentoCaixaId',fld:'LANCAMENTOCAIXAID'},{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'},{av:'A5777CaixaTrabalhoSequenciaECF',fld:'CAIXATRABALHOSEQUENCIAECF'},{av:'A5776CaixaTrabalhoNumeroLoja',fld:'CAIXATRABALHONUMEROLOJA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A5776CaixaTrabalhoNumeroLoja',fld:'CAIXATRABALHONUMEROLOJA'},{av:'A5777CaixaTrabalhoSequenciaECF',fld:'CAIXATRABALHOSEQUENCIAECF'},{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'},{av:'A3632LancamentoCaixaId',fld:'LANCAMENTOCAIXAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV35PessoaFantasia',fld:'vPESSOAFANTASIA'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV42SnPesquisar',fld:'vSNPESQUISAR'},{av:'AV45LancamentoCaixaObservacao',fld:'vLANCAMENTOCAIXAOBSERVACAO'},{av:'AV56Pgmname',fld:'vPGMNAME'}],[{av:'A3632LancamentoCaixaId',fld:'LANCAMENTOCAIXAID'},{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'},{av:'A5777CaixaTrabalhoSequenciaECF',fld:'CAIXATRABALHOSEQUENCIAECF'},{av:'A5776CaixaTrabalhoNumeroLoja',fld:'CAIXATRABALHONUMEROLOJA'},{av:'AV22filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV34PessoaId',fld:'vPESSOAID'},{av:'AV29LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV30LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV37LancamentoCaixaValor',fld:'vLANCAMENTOCAIXAVALOR'},{av:'AV36LancamentoCaixaSaidaId',fld:'vLANCAMENTOCAIXASAIDAID'},{av:'AV45LancamentoCaixaObservacao',fld:'vLANCAMENTOCAIXAOBSERVACAO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV28CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV27HistoricoFcxEmpresaID',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV32CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV33CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV26CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV52SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV56Pgmname',fld:'vPGMNAME'}],[]];
   this.setPrompt("BTNPROMPTSAIDA", [54,119,116,118,117]);
   this.setPrompt("PROMPT_PESSOAID", [20]);
   this.setVCMap("AV28CaixaTrabalhoEmpresaId", "vCAIXATRABALHOEMPRESAID", 0, "char");
   this.setVCMap("AV27HistoricoFcxEmpresaID", "vHISTORICOFCXEMPRESAID", 0, "char");
   this.setVCMap("AV52SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV56Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV28CaixaTrabalhoEmpresaId", "vCAIXATRABALHOEMPRESAID", 0, "char");
   this.setVCMap("AV27HistoricoFcxEmpresaID", "vHISTORICOFCXEMPRESAID", 0, "char");
   this.setVCMap("AV52SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV56Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[20]);
   GridContainer.addRefreshingVar(this.GXValidFnc[34]);
   GridContainer.addRefreshingVar(this.GXValidFnc[38]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   GridContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridContainer.addRefreshingVar(this.GXValidFnc[115]);
   GridContainer.addRefreshingVar({rfrVar:"AV28CaixaTrabalhoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV27HistoricoFcxEmpresaID"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV52SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV56Pgmname"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hlancamentocaixa());

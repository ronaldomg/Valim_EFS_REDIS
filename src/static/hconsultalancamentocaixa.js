/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:21.5
*/
gx.evt.autoSkip = false;
gx.define('hconsultalancamentocaixa', false, function () {
   this.ServerClass =  "hconsultalancamentocaixa" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV23CaixaTrabalhoEmpresaId=gx.fn.getControlValue("vCAIXATRABALHOEMPRESAID") ;
      this.AV24HistoricoFcxEmpresaId=gx.fn.getControlValue("vHISTORICOFCXEMPRESAID") ;
      this.AV18LancamentoCaixaId=gx.fn.getIntegerValue("vLANCAMENTOCAIXAID",'.') ;
   };
   this.e17na2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11na2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12na2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13na2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14na2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15na2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19na2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21na1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,29,32,38,39,40,41,42,43,44,45,46,52,55,57,59,61,63,64,65,66,67];
   this.GXLastCtrlId =67;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",37,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultalancamentocaixa",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3632,38,"LANCAMENTOCAIXAID","","","LancamentoCaixaId","int",0,"px",6,6,"right",null,[],3632,"LancamentoCaixaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3625,39,"LANCAMENTOCAIXADATA","","","LancamentoCaixaData","date",0,"px",10,10,"right",null,[],3625,"LancamentoCaixaData",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3626,40,"LANCAMENTOCAIXAHORA","","","LancamentoCaixaHora","char",0,"px",5,5,"left",null,[],3626,"LancamentoCaixaHora",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3540,41,"HISTORICOFCXDESCRICAO","","","HistoricoFcxDescricao","svchar",0,"px",30,30,"left",null,[],3540,"HistoricoFcxDescricao",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3627,42,"LANCAMENTOCAIXAVALOR","","","LancamentoCaixaValor","decimal",0,"px",22,22,"right",null,[],3627,"LancamentoCaixaValor",true,2,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(71,43,"PESSOAFANTASIA","","","PessoaFantasia","svchar",0,"px",60,60,"left",null,[],71,"PessoaFantasia",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3443,44,"CAIXATRABALHOID","Caixa Trabalho","","CaixaTrabalhoId","int",0,"px",10,10,"right",null,[],3443,"CaixaTrabalhoId",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5776,45,"CAIXATRABALHONUMEROLOJA","Caixa Trabalho Numero Loja","","CaixaTrabalhoNumeroLoja","int",0,"px",4,4,"right",null,[],5776,"CaixaTrabalhoNumeroLoja",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(5777,46,"CAIXATRABALHOSEQUENCIAECF","Caixa Trabalho Sequencia ECF","","CaixaTrabalhoSequenciaECF","int",0,"px",3,3,"right",null,[],5777,"CaixaTrabalhoSequenciaECF",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXATRABALHONUMEROLOJA",gxz:"ZV25CaixaTrabalhoNumeroLoja",gxold:"OV25CaixaTrabalhoNumeroLoja",gxvar:"AV25CaixaTrabalhoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHONUMEROLOJA",gx.O.AV25CaixaTrabalhoNumeroLoja,0)},c2v:function(){gx.O.AV25CaixaTrabalhoNumeroLoja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHONUMEROLOJA",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXATRABALHOID",gxz:"ZV19CaixaTrabalhoId",gxold:"OV19CaixaTrabalhoId",gxvar:"AV19CaixaTrabalhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19CaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19CaixaTrabalhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHOID",gx.O.AV19CaixaTrabalhoId,0)},c2v:function(){gx.O.AV19CaixaTrabalhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHOID",'.')},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCAIXATRABALHOSEQUENCIAECF",gxz:"ZV26CaixaTrabalhoSequenciaECF",gxold:"OV26CaixaTrabalhoSequenciaECF",gxvar:"AV26CaixaTrabalhoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAIXATRABALHOSEQUENCIAECF",gx.O.AV26CaixaTrabalhoSequenciaECF,0)},c2v:function(){gx.O.AV26CaixaTrabalhoSequenciaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAIXATRABALHOSEQUENCIAECF",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[26]={fld:"TABLERANGEDATA",grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCAIXADATAIN",gxz:"ZV16LancamentoCaixaDataIn",gxold:"OV16LancamentoCaixaDataIn",gxvar:"AV16LancamentoCaixaDataIn",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16LancamentoCaixaDataIn=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV16LancamentoCaixaDataIn=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCAIXADATAIN",gx.O.AV16LancamentoCaixaDataIn,0)},c2v:function(){gx.O.AV16LancamentoCaixaDataIn=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCAIXADATAIN")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vLANCAMENTOCAIXADATAFIN",gxz:"ZV17LancamentoCaixaDataFin",gxold:"OV17LancamentoCaixaDataFin",gxvar:"AV17LancamentoCaixaDataFin",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17LancamentoCaixaDataFin=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV17LancamentoCaixaDataFin=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCAIXADATAFIN",gx.O.AV17LancamentoCaixaDataFin,0)},c2v:function(){gx.O.AV17LancamentoCaixaDataFin=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCAIXADATAFIN")},nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXAID",gxz:"Z3632LancamentoCaixaId",gxold:"O3632LancamentoCaixaId",gxvar:"A3632LancamentoCaixaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3632LancamentoCaixaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3632LancamentoCaixaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCAIXAID",row || gx.fn.currentGridRowImpl(37),gx.O.A3632LancamentoCaixaId,0)},c2v:function(){gx.O.A3632LancamentoCaixaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LANCAMENTOCAIXAID",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXADATA",gxz:"Z3625LancamentoCaixaData",gxold:"O3625LancamentoCaixaData",gxvar:"A3625LancamentoCaixaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3625LancamentoCaixaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3625LancamentoCaixaData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCAIXADATA",row || gx.fn.currentGridRowImpl(37),gx.O.A3625LancamentoCaixaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3625LancamentoCaixaData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("LANCAMENTOCAIXADATA",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:5,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXAHORA",gxz:"Z3626LancamentoCaixaHora",gxold:"O3626LancamentoCaixaHora",gxvar:"A3626LancamentoCaixaHora",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3626LancamentoCaixaHora=Value},v2z:function(Value){gx.O.Z3626LancamentoCaixaHora=Value},v2c:function(row){gx.fn.setGridControlValue("LANCAMENTOCAIXAHORA",row || gx.fn.currentGridRowImpl(37),gx.O.A3626LancamentoCaixaHora,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3626LancamentoCaixaHora=this.val()},val:function(row){return gx.fn.getGridControlValue("LANCAMENTOCAIXAHORA",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXDESCRICAO",gxz:"Z3540HistoricoFcxDescricao",gxold:"O3540HistoricoFcxDescricao",gxvar:"A3540HistoricoFcxDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3540HistoricoFcxDescricao=Value},v2z:function(Value){gx.O.Z3540HistoricoFcxDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOFCXDESCRICAO",row || gx.fn.currentGridRowImpl(37),gx.O.A3540HistoricoFcxDescricao,0)},c2v:function(){gx.O.A3540HistoricoFcxDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOFCXDESCRICAO",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"LANCAMENTOCAIXAVALOR",gxz:"Z3627LancamentoCaixaValor",gxold:"O3627LancamentoCaixaValor",gxvar:"A3627LancamentoCaixaValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3627LancamentoCaixaValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z3627LancamentoCaixaValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("LANCAMENTOCAIXAVALOR",row || gx.fn.currentGridRowImpl(37),gx.O.A3627LancamentoCaixaValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3627LancamentoCaixaValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("LANCAMENTOCAIXAVALOR",row || gx.fn.currentGridRowImpl(37),'.',',')},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"svchar",len:60,dec:0,sign:false,ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PESSOAFANTASIA",gxz:"Z71PessoaFantasia",gxold:"O71PessoaFantasia",gxvar:"A71PessoaFantasia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A71PessoaFantasia=Value},v2z:function(Value){gx.O.Z71PessoaFantasia=Value},v2c:function(row){gx.fn.setGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(37),gx.O.A71PessoaFantasia,0)},c2v:function(){gx.O.A71PessoaFantasia=this.val()},val:function(row){return gx.fn.getGridControlValue("PESSOAFANTASIA",row || gx.fn.currentGridRowImpl(37))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHOID",gxz:"Z3443CaixaTrabalhoId",gxold:"O3443CaixaTrabalhoId",gxvar:"A3443CaixaTrabalhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3443CaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3443CaixaTrabalhoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOID",row || gx.fn.currentGridRowImpl(37),gx.O.A3443CaixaTrabalhoId,0)},c2v:function(){gx.O.A3443CaixaTrabalhoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHOID",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHONUMEROLOJA",gxz:"Z5776CaixaTrabalhoNumeroLoja",gxold:"O5776CaixaTrabalhoNumeroLoja",gxvar:"A5776CaixaTrabalhoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHONUMEROLOJA",row || gx.fn.currentGridRowImpl(37),gx.O.A5776CaixaTrabalhoNumeroLoja,0)},c2v:function(){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHONUMEROLOJA",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:37,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHOSEQUENCIAECF",gxz:"Z5777CaixaTrabalhoSequenciaECF",gxold:"O5777CaixaTrabalhoSequenciaECF",gxvar:"A5777CaixaTrabalhoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(37),gx.O.A5777CaixaTrabalhoSequenciaECF,0)},c2v:function(){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(37),'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABLENAV",grid:0};
   GXValidFnc[55]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[57]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[59]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[61]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[63]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[64]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV28Pagina",gxold:"OV28Pagina",gxvar:"AV28Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV28Pagina)},c2v:function(){gx.O.AV28Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV29PaginaAux",gxold:"OV29PaginaAux",gxvar:"AV29PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV29PaginaAux,0)},c2v:function(){gx.O.AV29PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[66]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[67]={fld:"JSDATA", format:2,grid:0};
   this.AV25CaixaTrabalhoNumeroLoja = 0 ;
   this.ZV25CaixaTrabalhoNumeroLoja = 0 ;
   this.OV25CaixaTrabalhoNumeroLoja = 0 ;
   this.AV19CaixaTrabalhoId = 0 ;
   this.ZV19CaixaTrabalhoId = 0 ;
   this.OV19CaixaTrabalhoId = 0 ;
   this.AV26CaixaTrabalhoSequenciaECF = 0 ;
   this.ZV26CaixaTrabalhoSequenciaECF = 0 ;
   this.OV26CaixaTrabalhoSequenciaECF = 0 ;
   this.AV16LancamentoCaixaDataIn = gx.date.nullDate() ;
   this.ZV16LancamentoCaixaDataIn = gx.date.nullDate() ;
   this.OV16LancamentoCaixaDataIn = gx.date.nullDate() ;
   this.AV17LancamentoCaixaDataFin = gx.date.nullDate() ;
   this.ZV17LancamentoCaixaDataFin = gx.date.nullDate() ;
   this.OV17LancamentoCaixaDataFin = gx.date.nullDate() ;
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
   this.Z71PessoaFantasia = "" ;
   this.O71PessoaFantasia = "" ;
   this.Z3443CaixaTrabalhoId = 0 ;
   this.O3443CaixaTrabalhoId = 0 ;
   this.Z5776CaixaTrabalhoNumeroLoja = 0 ;
   this.O5776CaixaTrabalhoNumeroLoja = 0 ;
   this.Z5777CaixaTrabalhoSequenciaECF = 0 ;
   this.O5777CaixaTrabalhoSequenciaECF = 0 ;
   this.AV28Pagina = 0 ;
   this.ZV28Pagina = 0 ;
   this.OV28Pagina = 0 ;
   this.AV29PaginaAux = 0 ;
   this.ZV29PaginaAux = 0 ;
   this.OV29PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV25CaixaTrabalhoNumeroLoja = 0 ;
   this.AV19CaixaTrabalhoId = 0 ;
   this.AV26CaixaTrabalhoSequenciaECF = 0 ;
   this.AV16LancamentoCaixaDataIn = gx.date.nullDate() ;
   this.AV17LancamentoCaixaDataFin = gx.date.nullDate() ;
   this.AV28Pagina = 0 ;
   this.AV29PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV18LancamentoCaixaId = 0 ;
   this.A3549HistoricoFcxEmpresaID = "" ;
   this.A3442CaixaTrabalhoEmpresaId = "" ;
   this.A3550HistoricoFcxId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.A69PessoaId = 0 ;
   this.A3632LancamentoCaixaId = 0 ;
   this.A3625LancamentoCaixaData = gx.date.nullDate() ;
   this.A3626LancamentoCaixaHora = "" ;
   this.A3540HistoricoFcxDescricao = "" ;
   this.A3627LancamentoCaixaValor = 0 ;
   this.A71PessoaFantasia = "" ;
   this.A3443CaixaTrabalhoId = 0 ;
   this.A5776CaixaTrabalhoNumeroLoja = 0 ;
   this.A5777CaixaTrabalhoSequenciaECF = 0 ;
   this.AV23CaixaTrabalhoEmpresaId = "" ;
   this.AV24HistoricoFcxEmpresaId = "" ;
   this.Events = {"e17na2_client": ["ENTER", true] ,"e11na2_client": ["'GXM_FIRST'", true] ,"e12na2_client": ["'GXM_PREVIOUS'", true] ,"e13na2_client": ["'GXM_NEXT'", true] ,"e14na2_client": ["'GXM_LAST'", true] ,"e15na2_client": ["'PROCURAR'", true] ,"e19na2_client": ["'ATUALIZAPAGINA'", true] ,"e21na1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV17LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV23CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV24HistoricoFcxEmpresaId',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV25CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV26CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV19CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'LANCAMENTOCAIXAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCAIXAID","Title")',ctrl:'LANCAMENTOCAIXAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'LANCAMENTOCAIXADATA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCAIXADATA","Title")',ctrl:'LANCAMENTOCAIXADATA',prop:'Title'},{ctrl:'LANCAMENTOCAIXAHORA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCAIXAHORA","Title")',ctrl:'LANCAMENTOCAIXAHORA',prop:'Title'},{ctrl:'HISTORICOFCXDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOFCXDESCRICAO","Title")',ctrl:'HISTORICOFCXDESCRICAO',prop:'Title'},{ctrl:'LANCAMENTOCAIXAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LANCAMENTOCAIXAVALOR","Title")',ctrl:'LANCAMENTOCAIXAVALOR',prop:'Title'},{ctrl:'PESSOAFANTASIA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PESSOAFANTASIA","Title")',ctrl:'PESSOAFANTASIA',prop:'Title'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV27NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3632LancamentoCaixaId',fld:'LANCAMENTOCAIXAID'},{av:'AV18LancamentoCaixaId',fld:'vLANCAMENTOCAIXAID'}],[{av:'AV22PLancamentoCaixaId',fld:'vPLANCAMENTOCAIXAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV17LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV24HistoricoFcxEmpresaId',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV25CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV26CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV19CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV17LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV24HistoricoFcxEmpresaId',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV25CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV26CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV19CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV28Pagina',fld:'vPAGINA'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV17LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV24HistoricoFcxEmpresaId',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV25CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV26CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV19CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV17LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV24HistoricoFcxEmpresaId',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV25CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV26CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV19CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true},{av:'AV29PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV17LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV24HistoricoFcxEmpresaId',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV25CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV26CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV19CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16LancamentoCaixaDataIn',fld:'vLANCAMENTOCAIXADATAIN'},{av:'AV17LancamentoCaixaDataFin',fld:'vLANCAMENTOCAIXADATAFIN'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23CaixaTrabalhoEmpresaId',fld:'vCAIXATRABALHOEMPRESAID'},{av:'AV24HistoricoFcxEmpresaId',fld:'vHISTORICOFCXEMPRESAID'},{av:'AV25CaixaTrabalhoNumeroLoja',fld:'vCAIXATRABALHONUMEROLOJA',hsh:true},{av:'AV26CaixaTrabalhoSequenciaECF',fld:'vCAIXATRABALHOSEQUENCIAECF',hsh:true},{av:'AV19CaixaTrabalhoId',fld:'vCAIXATRABALHOID',hsh:true}],[]];
   this.setVCMap("AV23CaixaTrabalhoEmpresaId", "vCAIXATRABALHOEMPRESAID", 0, "char");
   this.setVCMap("AV24HistoricoFcxEmpresaId", "vHISTORICOFCXEMPRESAID", 0, "char");
   this.setVCMap("AV18LancamentoCaixaId", "vLANCAMENTOCAIXAID", 0, "int");
   this.setVCMap("AV23CaixaTrabalhoEmpresaId", "vCAIXATRABALHOEMPRESAID", 0, "char");
   this.setVCMap("AV24HistoricoFcxEmpresaId", "vHISTORICOFCXEMPRESAID", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar({rfrVar:"AV23CaixaTrabalhoEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV24HistoricoFcxEmpresaId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultalancamentocaixa());

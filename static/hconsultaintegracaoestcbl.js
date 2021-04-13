/**@preserve  GeneXus Java 10_3_12-110051 on March 10, 2021 19:9:37.61
*/
gx.evt.autoSkip=!1;gx.define("hconsultaintegracaoestcbl",!1,function(){var t,n;this.ServerClass="hconsultaintegracaoestcbl";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("12","'FECHAR'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV18EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO");this.A4637EntradaEmpresaId=gx.fn.getControlValue("ENTRADAEMPRESAID");this.AV26ItensLancContabNotaEntEmpId=gx.fn.getControlValue("vITENSLANCCONTABNOTAENTEMPID");this.A4638EntradaId=gx.fn.getIntegerValue("ENTRADAID",".");this.AV27ItensLancContabNotaEntId=gx.fn.getIntegerValue("vITENSLANCCONTABNOTAENTID",".");this.A4660EntradaFilialId=gx.fn.getIntegerValue("ENTRADAFILIALID",".");this.A4647EntradaSerie=gx.fn.getControlValue("ENTRADASERIE");this.A4646EntradaNumeroDocumento=gx.fn.getIntegerValue("ENTRADANUMERODOCUMENTO",".");this.A4643EntradaFornecedorId=gx.fn.getIntegerValue("ENTRADAFORNECEDORID",".");this.A4645EntradaFornecedorRazao=gx.fn.getControlValue("ENTRADAFORNECEDORRAZAO");this.A4306SaidaEmpresaId=gx.fn.getControlValue("SAIDAEMPRESAID");this.AV25ItensLancContabNotaSaiEmpId=gx.fn.getControlValue("vITENSLANCCONTABNOTASAIEMPID");this.A4307SaidaId=gx.fn.getIntegerValue("SAIDAID",".");this.AV24ItensLancContabNotaSaiId=gx.fn.getIntegerValue("vITENSLANCCONTABNOTASAIID",".");this.A5971SaidaFilialId=gx.fn.getIntegerValue("SAIDAFILIALID",".");this.A5962SaidaSerie=gx.fn.getControlValue("SAIDASERIE");this.A5960SaidaNoDocumento=gx.fn.getIntegerValue("SAIDANODOCUMENTO",".");this.A5966SaidaClienteId=gx.fn.getIntegerValue("SAIDACLIENTEID",".");this.A5968SaidaClienteRazao=gx.fn.getControlValue("SAIDACLIENTERAZAO");this.AV17ItensLancamentoContabilDebCre=gx.fn.getControlValue("vITENSLANCAMENTOCONTABILDEBCRE")};this.Validv_Lancamentocontabilid=function(){try{var n=gx.util.balloon.getNew("vLANCAMENTOCONTABILID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Itenslancamentocontabilsequencia=function(){try{var n=gx.util.balloon.getNew("vITENSLANCAMENTOCONTABILSEQUENCIA");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e132if2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e112if2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e152if2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,13,15,17,19,21,24,26,27,29,31,34,36,37,38,39,40,41,42,43,44,45,46,47,48,49];this.GXLastCtrlId=49;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",35,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconsultaintegracaoestcbl",[],!1,1,!0,!0,0,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);n=this.Grid1Container;n.addSingleLineEdit("Filialserienota",36,"vFILIALSERIENOTA","Filial/Série/Nota","","FilialSerieNota","char",0,"px",20,20,"left",null,[],"Filialserienota","FilialSerieNota",!0,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit("Clientefornecedor",37,"vCLIENTEFORNECEDOR","Cliente/Fornecedor","","ClienteFornecedor","svchar",0,"px",60,60,"left",null,[],"Clientefornecedor","ClienteFornecedor",!0,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit("Tpnota",38,"vTPNOTA","Not","","TpNota","char",0,"px",3,3,"left",null,[],"Tpnota","TpNota",!0,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit("Tpvalor",39,"vTPVALOR","Tp.Valor","","TpValor","char",0,"px",10,10,"left",null,[],"Tpvalor","TpValor",!0,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit("Cfopcodigo",40,"vCFOPCODIGO","CFOP","","CfopCodigo","int",0,"px",4,4,"right",null,[],"Cfopcodigo","CfopCodigo",!0,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit(11899,41,"ITENSLANCCONTABNOTASAIEMPID","Itens Lanc Contab Nota Sai Emp Id","","ItensLancContabNotaSaiEmpId","char",0,"px",10,10,"left",null,[],11899,"ItensLancContabNotaSaiEmpId",!1,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit(11900,42,"ITENSLANCCONTABNOTASAIID","Itens Lanc Contab Nota Sai Id","","ItensLancContabNotaSaiId","int",0,"px",10,10,"right",null,[],11900,"ItensLancContabNotaSaiId",!1,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit(11895,43,"ITENSLANCCONTABNOTAENTEMPID","Itens Lanc Contab Nota Ent Emp Id","","ItensLancContabNotaEntEmpId","char",0,"px",10,10,"left",null,[],11895,"ItensLancContabNotaEntEmpId",!1,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit(11896,44,"ITENSLANCCONTABNOTAENTID","Itens Lanc Contab Nota Ent Id","","ItensLancContabNotaEntId","int",0,"px",10,10,"right",null,[],11896,"ItensLancContabNotaEntId",!1,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit(11897,45,"ITENSLANCCONTABNOTASAICFOPCOD","Itens Lanc Contab Nota Sai Cfop Cod","","ItensLancContabNotaSaiCfopCod","int",0,"px",4,4,"right",null,[],11897,"ItensLancContabNotaSaiCfopCod",!1,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit(11898,46,"ITENSLANCCONTABNOTAENTCFOPCOD","Itens Lanc Contab Nota Ent Cfop Cod","","ItensLancContabNotaEntCfopCod","int",0,"px",4,4,"right",null,[],11898,"ItensLancContabNotaEntCfopCod",!1,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit(11947,47,"ITENSLANCCONTABNOTATPVALOR","Itens Lanc Contab Nota Tp Valor","","ItensLancContabNotaTpValor","char",0,"px",1,1,"left",null,[],11947,"ItensLancContabNotaTpValor",!1,0,!1,!1,"Attribute",1,"");n.addSingleLineEdit(11894,48,"ITENSLANCCONTABNOTASEQUENCIA","Itens Lanc Contab Nota Sequencia","","ItensLancContabNotaSequencia","int",0,"px",4,4,"right",null,[],11894,"ItensLancContabNotaSequencia",!1,0,!1,!1,"Attribute",1,"");this.setGrid(n);t[2]={fld:"TABLE2",grid:0};t[5]={fld:"TABLE3",grid:0};t[8]={fld:"TEXTBLOCK1",format:0,grid:0};t[10]={fld:"TABLE1",grid:0};t[13]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Lancamentocontabilid,isvalid:null,rgrid:[this.Grid1Container],fld:"vLANCAMENTOCONTABILID",gxz:"ZV11LancamentoContabilId",gxold:"OV11LancamentoContabilId",gxvar:"AV11LancamentoContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV11LancamentoContabilId=gx.num.intval(n)},v2z:function(n){gx.O.ZV11LancamentoContabilId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILID",gx.O.AV11LancamentoContabilId,0)},c2v:function(){gx.O.AV11LancamentoContabilId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vLANCAMENTOCONTABILID",".")},nac:gx.falseFn};t[15]={fld:"TEXTBLOCK3",format:0,grid:0};t[17]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"9999",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Itenslancamentocontabilsequencia,isvalid:null,rgrid:[this.Grid1Container],fld:"vITENSLANCAMENTOCONTABILSEQUENCIA",gxz:"ZV13ItensLancamentoContabilSequencia",gxold:"OV13ItensLancamentoContabilSequencia",gxvar:"AV13ItensLancamentoContabilSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13ItensLancamentoContabilSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV13ItensLancamentoContabilSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vITENSLANCAMENTOCONTABILSEQUENCIA",gx.O.AV13ItensLancamentoContabilSequencia,0)},c2v:function(){gx.O.AV13ItensLancamentoContabilSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vITENSLANCAMENTOCONTABILSEQUENCIA",".")},nac:gx.falseFn};t[19]={fld:"TEXTBLOCK4",format:0,grid:0};t[21]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vLANCAMENTOCONTABILDATA",gxz:"ZV15LancamentoContabilData",gxold:"OV15LancamentoContabilData",gxvar:"AV15LancamentoContabilData",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15LancamentoContabilData=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV15LancamentoContabilData=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vLANCAMENTOCONTABILDATA",gx.O.AV15LancamentoContabilData,0)},c2v:function(){gx.O.AV15LancamentoContabilData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vLANCAMENTOCONTABILDATA")},nac:gx.falseFn};t[24]={fld:"TEXTBLOCK6",format:0,grid:0};t[26]={lvl:0,type:"decimal",len:12,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vITENSLANCAMENTOCONTABILVALOR",gxz:"ZV14ItensLancamentoContabilValor",gxold:"OV14ItensLancamentoContabilValor",gxvar:"AV14ItensLancamentoContabilValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14ItensLancamentoContabilValor=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV14ItensLancamentoContabilValor=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vITENSLANCAMENTOCONTABILVALOR",gx.O.AV14ItensLancamentoContabilValor,2,",")},c2v:function(){gx.O.AV14ItensLancamentoContabilValor=this.val()},val:function(){return gx.fn.getDecimalValue("vITENSLANCAMENTOCONTABILVALOR",".",",")},nac:gx.falseFn};t[27]={lvl:0,type:"char",len:7,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vDEBCRETELA",gxz:"ZV16DebCreTela",gxold:"OV16DebCreTela",gxvar:"AV16DebCreTela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16DebCreTela=n},v2z:function(n){gx.O.ZV16DebCreTela=n},v2c:function(){gx.fn.setControlValue("vDEBCRETELA",gx.O.AV16DebCreTela,0)},c2v:function(){gx.O.AV16DebCreTela=this.val()},val:function(){return gx.fn.getControlValue("vDEBCRETELA")},nac:gx.falseFn};t[29]={fld:"TEXTBLOCK5",format:0,grid:0};t[31]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONTACONTABILID",gxz:"ZV12ContaContabilId",gxold:"OV12ContaContabilId",gxvar:"AV12ContaContabilId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV12ContaContabilId=n},v2z:function(n){gx.O.ZV12ContaContabilId=n},v2c:function(){gx.fn.setControlValue("vCONTACONTABILID",gx.O.AV12ContaContabilId,0)},c2v:function(){gx.O.AV12ContaContabilId=this.val()},val:function(){return gx.fn.getControlValue("vCONTACONTABILID")},nac:gx.falseFn};t[34]={fld:"DIV1",format:2,grid:0};t[36]={lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vFILIALSERIENOTA",gxz:"ZV19FilialSerieNota",gxold:"OV19FilialSerieNota",gxvar:"AV19FilialSerieNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV19FilialSerieNota=n},v2z:function(n){gx.O.ZV19FilialSerieNota=n},v2c:function(n){gx.fn.setGridControlValue("vFILIALSERIENOTA",n||gx.fn.currentGridRowImpl(35),gx.O.AV19FilialSerieNota,0)},c2v:function(){gx.O.AV19FilialSerieNota=this.val()},val:function(n){return gx.fn.getGridControlValue("vFILIALSERIENOTA",n||gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};t[37]={lvl:2,type:"svchar",len:60,dec:0,sign:!1,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCLIENTEFORNECEDOR",gxz:"ZV20ClienteFornecedor",gxold:"OV20ClienteFornecedor",gxvar:"AV20ClienteFornecedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV20ClienteFornecedor=n},v2z:function(n){gx.O.ZV20ClienteFornecedor=n},v2c:function(n){gx.fn.setGridControlValue("vCLIENTEFORNECEDOR",n||gx.fn.currentGridRowImpl(35),gx.O.AV20ClienteFornecedor,0)},c2v:function(){gx.O.AV20ClienteFornecedor=this.val()},val:function(n){return gx.fn.getGridControlValue("vCLIENTEFORNECEDOR",n||gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};t[38]={lvl:2,type:"char",len:3,dec:0,sign:!1,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vTPNOTA",gxz:"ZV21TpNota",gxold:"OV21TpNota",gxvar:"AV21TpNota",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV21TpNota=n},v2z:function(n){gx.O.ZV21TpNota=n},v2c:function(n){gx.fn.setGridControlValue("vTPNOTA",n||gx.fn.currentGridRowImpl(35),gx.O.AV21TpNota,0)},c2v:function(){gx.O.AV21TpNota=this.val()},val:function(n){return gx.fn.getGridControlValue("vTPNOTA",n||gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};t[39]={lvl:2,type:"char",len:10,dec:0,sign:!1,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vTPVALOR",gxz:"ZV22TpValor",gxold:"OV22TpValor",gxvar:"AV22TpValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV22TpValor=n},v2z:function(n){gx.O.ZV22TpValor=n},v2c:function(n){gx.fn.setGridControlValue("vTPVALOR",n||gx.fn.currentGridRowImpl(35),gx.O.AV22TpValor,0)},c2v:function(){gx.O.AV22TpValor=this.val()},val:function(n){return gx.fn.getGridControlValue("vTPVALOR",n||gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};t[40]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vCFOPCODIGO",gxz:"ZV23CfopCodigo",gxold:"OV23CfopCodigo",gxvar:"AV23CfopCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV23CfopCodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV23CfopCodigo=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vCFOPCODIGO",n||gx.fn.currentGridRowImpl(35),gx.O.AV23CfopCodigo,0)},c2v:function(){gx.O.AV23CfopCodigo=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vCFOPCODIGO",n||gx.fn.currentGridRowImpl(35),".")},nac:gx.falseFn};t[41]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCCONTABNOTASAIEMPID",gxz:"Z11899ItensLancContabNotaSaiEmpId",gxold:"O11899ItensLancContabNotaSaiEmpId",gxvar:"A11899ItensLancContabNotaSaiEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11899ItensLancContabNotaSaiEmpId=n},v2z:function(n){gx.O.Z11899ItensLancContabNotaSaiEmpId=n},v2c:function(n){gx.fn.setGridControlValue("ITENSLANCCONTABNOTASAIEMPID",n||gx.fn.currentGridRowImpl(35),gx.O.A11899ItensLancContabNotaSaiEmpId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11899ItensLancContabNotaSaiEmpId=this.val()},val:function(n){return gx.fn.getGridControlValue("ITENSLANCCONTABNOTASAIEMPID",n||gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};t[42]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCCONTABNOTASAIID",gxz:"Z11900ItensLancContabNotaSaiId",gxold:"O11900ItensLancContabNotaSaiId",gxvar:"A11900ItensLancContabNotaSaiId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11900ItensLancContabNotaSaiId=gx.num.intval(n)},v2z:function(n){gx.O.Z11900ItensLancContabNotaSaiId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("ITENSLANCCONTABNOTASAIID",n||gx.fn.currentGridRowImpl(35),gx.O.A11900ItensLancContabNotaSaiId,0)},c2v:function(){gx.O.A11900ItensLancContabNotaSaiId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("ITENSLANCCONTABNOTASAIID",n||gx.fn.currentGridRowImpl(35),".")},nac:gx.falseFn};t[43]={lvl:2,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCCONTABNOTAENTEMPID",gxz:"Z11895ItensLancContabNotaEntEmpId",gxold:"O11895ItensLancContabNotaEntEmpId",gxvar:"A11895ItensLancContabNotaEntEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11895ItensLancContabNotaEntEmpId=n},v2z:function(n){gx.O.Z11895ItensLancContabNotaEntEmpId=n},v2c:function(n){gx.fn.setGridControlValue("ITENSLANCCONTABNOTAENTEMPID",n||gx.fn.currentGridRowImpl(35),gx.O.A11895ItensLancContabNotaEntEmpId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A11895ItensLancContabNotaEntEmpId=this.val()},val:function(n){return gx.fn.getGridControlValue("ITENSLANCCONTABNOTAENTEMPID",n||gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};t[44]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCCONTABNOTAENTID",gxz:"Z11896ItensLancContabNotaEntId",gxold:"O11896ItensLancContabNotaEntId",gxvar:"A11896ItensLancContabNotaEntId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11896ItensLancContabNotaEntId=gx.num.intval(n)},v2z:function(n){gx.O.Z11896ItensLancContabNotaEntId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("ITENSLANCCONTABNOTAENTID",n||gx.fn.currentGridRowImpl(35),gx.O.A11896ItensLancContabNotaEntId,0)},c2v:function(){gx.O.A11896ItensLancContabNotaEntId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("ITENSLANCCONTABNOTAENTID",n||gx.fn.currentGridRowImpl(35),".")},nac:gx.falseFn};t[45]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCCONTABNOTASAICFOPCOD",gxz:"Z11897ItensLancContabNotaSaiCfopCod",gxold:"O11897ItensLancContabNotaSaiCfopCod",gxvar:"A11897ItensLancContabNotaSaiCfopCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11897ItensLancContabNotaSaiCfopCod=gx.num.intval(n)},v2z:function(n){gx.O.Z11897ItensLancContabNotaSaiCfopCod=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("ITENSLANCCONTABNOTASAICFOPCOD",n||gx.fn.currentGridRowImpl(35),gx.O.A11897ItensLancContabNotaSaiCfopCod,0)},c2v:function(){gx.O.A11897ItensLancContabNotaSaiCfopCod=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("ITENSLANCCONTABNOTASAICFOPCOD",n||gx.fn.currentGridRowImpl(35),".")},nac:gx.falseFn};t[46]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCCONTABNOTAENTCFOPCOD",gxz:"Z11898ItensLancContabNotaEntCfopCod",gxold:"O11898ItensLancContabNotaEntCfopCod",gxvar:"A11898ItensLancContabNotaEntCfopCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11898ItensLancContabNotaEntCfopCod=gx.num.intval(n)},v2z:function(n){gx.O.Z11898ItensLancContabNotaEntCfopCod=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("ITENSLANCCONTABNOTAENTCFOPCOD",n||gx.fn.currentGridRowImpl(35),gx.O.A11898ItensLancContabNotaEntCfopCod,0)},c2v:function(){gx.O.A11898ItensLancContabNotaEntCfopCod=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("ITENSLANCCONTABNOTAENTCFOPCOD",n||gx.fn.currentGridRowImpl(35),".")},nac:gx.falseFn};t[47]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCCONTABNOTATPVALOR",gxz:"Z11947ItensLancContabNotaTpValor",gxold:"O11947ItensLancContabNotaTpValor",gxvar:"A11947ItensLancContabNotaTpValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A11947ItensLancContabNotaTpValor=n},v2z:function(n){gx.O.Z11947ItensLancContabNotaTpValor=n},v2c:function(n){gx.fn.setGridControlValue("ITENSLANCCONTABNOTATPVALOR",n||gx.fn.currentGridRowImpl(35),gx.O.A11947ItensLancContabNotaTpValor,0)},c2v:function(){gx.O.A11947ItensLancContabNotaTpValor=this.val()},val:function(n){return gx.fn.getGridControlValue("ITENSLANCCONTABNOTATPVALOR",n||gx.fn.currentGridRowImpl(35))},nac:gx.falseFn};t[48]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:35,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ITENSLANCCONTABNOTASEQUENCIA",gxz:"Z11894ItensLancContabNotaSequencia",gxold:"O11894ItensLancContabNotaSequencia",gxvar:"A11894ItensLancContabNotaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A11894ItensLancContabNotaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.Z11894ItensLancContabNotaSequencia=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("ITENSLANCCONTABNOTASEQUENCIA",n||gx.fn.currentGridRowImpl(35),gx.O.A11894ItensLancContabNotaSequencia,0)},c2v:function(){gx.O.A11894ItensLancContabNotaSequencia=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("ITENSLANCCONTABNOTASEQUENCIA",n||gx.fn.currentGridRowImpl(35),".")},nac:gx.falseFn};t[49]={fld:"DIV2",format:2,grid:0};this.AV11LancamentoContabilId=0;this.ZV11LancamentoContabilId=0;this.OV11LancamentoContabilId=0;this.AV13ItensLancamentoContabilSequencia=0;this.ZV13ItensLancamentoContabilSequencia=0;this.OV13ItensLancamentoContabilSequencia=0;this.AV15LancamentoContabilData=gx.date.nullDate();this.ZV15LancamentoContabilData=gx.date.nullDate();this.OV15LancamentoContabilData=gx.date.nullDate();this.AV14ItensLancamentoContabilValor=0;this.ZV14ItensLancamentoContabilValor=0;this.OV14ItensLancamentoContabilValor=0;this.AV16DebCreTela="";this.ZV16DebCreTela="";this.OV16DebCreTela="";this.AV12ContaContabilId="";this.ZV12ContaContabilId="";this.OV12ContaContabilId="";this.ZV19FilialSerieNota="";this.OV19FilialSerieNota="";this.ZV20ClienteFornecedor="";this.OV20ClienteFornecedor="";this.ZV21TpNota="";this.OV21TpNota="";this.ZV22TpValor="";this.OV22TpValor="";this.ZV23CfopCodigo=0;this.OV23CfopCodigo=0;this.Z11899ItensLancContabNotaSaiEmpId="";this.O11899ItensLancContabNotaSaiEmpId="";this.Z11900ItensLancContabNotaSaiId=0;this.O11900ItensLancContabNotaSaiId=0;this.Z11895ItensLancContabNotaEntEmpId="";this.O11895ItensLancContabNotaEntEmpId="";this.Z11896ItensLancContabNotaEntId=0;this.O11896ItensLancContabNotaEntId=0;this.Z11897ItensLancContabNotaSaiCfopCod=0;this.O11897ItensLancContabNotaSaiCfopCod=0;this.Z11898ItensLancContabNotaEntCfopCod=0;this.O11898ItensLancContabNotaEntCfopCod=0;this.Z11947ItensLancContabNotaTpValor="";this.O11947ItensLancContabNotaTpValor="";this.Z11894ItensLancContabNotaSequencia=0;this.O11894ItensLancContabNotaSequencia=0;this.AV11LancamentoContabilId=0;this.AV13ItensLancamentoContabilSequencia=0;this.AV15LancamentoContabilData=gx.date.nullDate();this.AV14ItensLancamentoContabilValor=0;this.AV16DebCreTela="";this.AV12ContaContabilId="";this.AV17ItensLancamentoContabilDebCre="";this.A67ItensLancamentoContabilSequenc=0;this.A61LancamentoContabilId=0;this.A341LancamentoContabilEmpresaid="";this.AV19FilialSerieNota="";this.AV20ClienteFornecedor="";this.AV21TpNota="";this.AV22TpValor="";this.AV23CfopCodigo=0;this.A11899ItensLancContabNotaSaiEmpId="";this.A11900ItensLancContabNotaSaiId=0;this.A11895ItensLancContabNotaEntEmpId="";this.A11896ItensLancContabNotaEntId=0;this.A11897ItensLancContabNotaSaiCfopCod=0;this.A11898ItensLancContabNotaEntCfopCod=0;this.A11947ItensLancContabNotaTpValor="";this.A11894ItensLancContabNotaSequencia=0;this.A4638EntradaId=0;this.A4637EntradaEmpresaId="";this.A4660EntradaFilialId=0;this.A4647EntradaSerie="";this.A4646EntradaNumeroDocumento=0;this.A4645EntradaFornecedorRazao="";this.A4643EntradaFornecedorId=0;this.A4642EntradaFornecedorEmpId="";this.A4307SaidaId=0;this.A4306SaidaEmpresaId="";this.A5971SaidaFilialId=0;this.A5962SaidaSerie="";this.A5960SaidaNoDocumento=0;this.A5968SaidaClienteRazao="";this.A5966SaidaClienteId=0;this.A5965SaidaClienteEmpresaId="";this.AV18EmpresaPadrao="";this.AV26ItensLancContabNotaEntEmpId="";this.AV27ItensLancContabNotaEntId=0;this.AV25ItensLancContabNotaSaiEmpId="";this.AV24ItensLancContabNotaSaiId=0;this.Events={e132if2_client:["ENTER",!0],e112if2_client:["'FECHAR'",!0],e152if2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV18EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV11LancamentoContabilId",fld:"vLANCAMENTOCONTABILID",hsh:!0},{av:"AV13ItensLancamentoContabilSequencia",fld:"vITENSLANCAMENTOCONTABILSEQUENCIA",hsh:!0},{av:"A11899ItensLancContabNotaSaiEmpId",fld:"ITENSLANCCONTABNOTASAIEMPID"},{av:"A11900ItensLancContabNotaSaiId",fld:"ITENSLANCCONTABNOTASAIID"},{av:"A11895ItensLancContabNotaEntEmpId",fld:"ITENSLANCCONTABNOTAENTEMPID"},{av:"A11896ItensLancContabNotaEntId",fld:"ITENSLANCCONTABNOTAENTID"},{av:"A11898ItensLancContabNotaEntCfopCod",fld:"ITENSLANCCONTABNOTAENTCFOPCOD"},{av:"A11897ItensLancContabNotaSaiCfopCod",fld:"ITENSLANCCONTABNOTASAICFOPCOD"},{av:"A11947ItensLancContabNotaTpValor",fld:"ITENSLANCCONTABNOTATPVALOR"},{av:"A4637EntradaEmpresaId",fld:"ENTRADAEMPRESAID"},{av:"AV26ItensLancContabNotaEntEmpId",fld:"vITENSLANCCONTABNOTAENTEMPID"},{av:"A4638EntradaId",fld:"ENTRADAID"},{av:"AV27ItensLancContabNotaEntId",fld:"vITENSLANCCONTABNOTAENTID"},{av:"A4660EntradaFilialId",fld:"ENTRADAFILIALID"},{av:"A4647EntradaSerie",fld:"ENTRADASERIE"},{av:"A4646EntradaNumeroDocumento",fld:"ENTRADANUMERODOCUMENTO"},{av:"A4643EntradaFornecedorId",fld:"ENTRADAFORNECEDORID"},{av:"A4645EntradaFornecedorRazao",fld:"ENTRADAFORNECEDORRAZAO"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"AV25ItensLancContabNotaSaiEmpId",fld:"vITENSLANCCONTABNOTASAIEMPID"},{av:"A4307SaidaId",fld:"SAIDAID"},{av:"AV24ItensLancContabNotaSaiId",fld:"vITENSLANCCONTABNOTASAIID"},{av:"A5971SaidaFilialId",fld:"SAIDAFILIALID"},{av:"A5962SaidaSerie",fld:"SAIDASERIE"},{av:"A5960SaidaNoDocumento",fld:"SAIDANODOCUMENTO"},{av:"A5966SaidaClienteId",fld:"SAIDACLIENTEID"},{av:"A5968SaidaClienteRazao",fld:"SAIDACLIENTERAZAO"}],[]];this.EvtParms.ENTER=[[],[]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms["GRID1.LOAD"]=[[{av:"A11899ItensLancContabNotaSaiEmpId",fld:"ITENSLANCCONTABNOTASAIEMPID"},{av:"A11900ItensLancContabNotaSaiId",fld:"ITENSLANCCONTABNOTASAIID"},{av:"A11895ItensLancContabNotaEntEmpId",fld:"ITENSLANCCONTABNOTAENTEMPID"},{av:"A11896ItensLancContabNotaEntId",fld:"ITENSLANCCONTABNOTAENTID"},{av:"A11898ItensLancContabNotaEntCfopCod",fld:"ITENSLANCCONTABNOTAENTCFOPCOD"},{av:"A11897ItensLancContabNotaSaiCfopCod",fld:"ITENSLANCCONTABNOTASAICFOPCOD"},{av:"A11947ItensLancContabNotaTpValor",fld:"ITENSLANCCONTABNOTATPVALOR"},{av:"A4637EntradaEmpresaId",fld:"ENTRADAEMPRESAID"},{av:"AV26ItensLancContabNotaEntEmpId",fld:"vITENSLANCCONTABNOTAENTEMPID"},{av:"A4638EntradaId",fld:"ENTRADAID"},{av:"AV27ItensLancContabNotaEntId",fld:"vITENSLANCCONTABNOTAENTID"},{av:"A4660EntradaFilialId",fld:"ENTRADAFILIALID"},{av:"A4647EntradaSerie",fld:"ENTRADASERIE"},{av:"A4646EntradaNumeroDocumento",fld:"ENTRADANUMERODOCUMENTO"},{av:"A4643EntradaFornecedorId",fld:"ENTRADAFORNECEDORID"},{av:"A4645EntradaFornecedorRazao",fld:"ENTRADAFORNECEDORRAZAO"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"AV25ItensLancContabNotaSaiEmpId",fld:"vITENSLANCCONTABNOTASAIEMPID"},{av:"A4307SaidaId",fld:"SAIDAID"},{av:"AV24ItensLancContabNotaSaiId",fld:"vITENSLANCCONTABNOTASAIID"},{av:"A5971SaidaFilialId",fld:"SAIDAFILIALID"},{av:"A5962SaidaSerie",fld:"SAIDASERIE"},{av:"A5960SaidaNoDocumento",fld:"SAIDANODOCUMENTO"},{av:"A5966SaidaClienteId",fld:"SAIDACLIENTEID"},{av:"A5968SaidaClienteRazao",fld:"SAIDACLIENTERAZAO"}],[{av:"AV25ItensLancContabNotaSaiEmpId",fld:"vITENSLANCCONTABNOTASAIEMPID"},{av:"AV24ItensLancContabNotaSaiId",fld:"vITENSLANCCONTABNOTASAIID"},{av:"AV26ItensLancContabNotaEntEmpId",fld:"vITENSLANCCONTABNOTAENTEMPID"},{av:"AV27ItensLancContabNotaEntId",fld:"vITENSLANCCONTABNOTAENTID"},{av:"AV23CfopCodigo",fld:"vCFOPCODIGO"},{av:"AV22TpValor",fld:"vTPVALOR"},{av:"AV19FilialSerieNota",fld:"vFILIALSERIENOTA"},{av:"AV20ClienteFornecedor",fld:"vCLIENTEFORNECEDOR"},{av:"AV21TpNota",fld:"vTPNOTA"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV18EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV11LancamentoContabilId",fld:"vLANCAMENTOCONTABILID",hsh:!0},{av:"AV13ItensLancamentoContabilSequencia",fld:"vITENSLANCAMENTOCONTABILSEQUENCIA",hsh:!0},{av:"A11899ItensLancContabNotaSaiEmpId",fld:"ITENSLANCCONTABNOTASAIEMPID"},{av:"A11900ItensLancContabNotaSaiId",fld:"ITENSLANCCONTABNOTASAIID"},{av:"A11895ItensLancContabNotaEntEmpId",fld:"ITENSLANCCONTABNOTAENTEMPID"},{av:"A11896ItensLancContabNotaEntId",fld:"ITENSLANCCONTABNOTAENTID"},{av:"A11898ItensLancContabNotaEntCfopCod",fld:"ITENSLANCCONTABNOTAENTCFOPCOD"},{av:"A11897ItensLancContabNotaSaiCfopCod",fld:"ITENSLANCCONTABNOTASAICFOPCOD"},{av:"A11947ItensLancContabNotaTpValor",fld:"ITENSLANCCONTABNOTATPVALOR"},{av:"A4637EntradaEmpresaId",fld:"ENTRADAEMPRESAID"},{av:"AV26ItensLancContabNotaEntEmpId",fld:"vITENSLANCCONTABNOTAENTEMPID"},{av:"A4638EntradaId",fld:"ENTRADAID"},{av:"AV27ItensLancContabNotaEntId",fld:"vITENSLANCCONTABNOTAENTID"},{av:"A4660EntradaFilialId",fld:"ENTRADAFILIALID"},{av:"A4647EntradaSerie",fld:"ENTRADASERIE"},{av:"A4646EntradaNumeroDocumento",fld:"ENTRADANUMERODOCUMENTO"},{av:"A4643EntradaFornecedorId",fld:"ENTRADAFORNECEDORID"},{av:"A4645EntradaFornecedorRazao",fld:"ENTRADAFORNECEDORRAZAO"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"AV25ItensLancContabNotaSaiEmpId",fld:"vITENSLANCCONTABNOTASAIEMPID"},{av:"A4307SaidaId",fld:"SAIDAID"},{av:"AV24ItensLancContabNotaSaiId",fld:"vITENSLANCCONTABNOTASAIID"},{av:"A5971SaidaFilialId",fld:"SAIDAFILIALID"},{av:"A5962SaidaSerie",fld:"SAIDASERIE"},{av:"A5960SaidaNoDocumento",fld:"SAIDANODOCUMENTO"},{av:"A5966SaidaClienteId",fld:"SAIDACLIENTEID"},{av:"A5968SaidaClienteRazao",fld:"SAIDACLIENTERAZAO"}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV18EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV11LancamentoContabilId",fld:"vLANCAMENTOCONTABILID",hsh:!0},{av:"AV13ItensLancamentoContabilSequencia",fld:"vITENSLANCAMENTOCONTABILSEQUENCIA",hsh:!0},{av:"A11899ItensLancContabNotaSaiEmpId",fld:"ITENSLANCCONTABNOTASAIEMPID"},{av:"A11900ItensLancContabNotaSaiId",fld:"ITENSLANCCONTABNOTASAIID"},{av:"A11895ItensLancContabNotaEntEmpId",fld:"ITENSLANCCONTABNOTAENTEMPID"},{av:"A11896ItensLancContabNotaEntId",fld:"ITENSLANCCONTABNOTAENTID"},{av:"A11898ItensLancContabNotaEntCfopCod",fld:"ITENSLANCCONTABNOTAENTCFOPCOD"},{av:"A11897ItensLancContabNotaSaiCfopCod",fld:"ITENSLANCCONTABNOTASAICFOPCOD"},{av:"A11947ItensLancContabNotaTpValor",fld:"ITENSLANCCONTABNOTATPVALOR"},{av:"A4637EntradaEmpresaId",fld:"ENTRADAEMPRESAID"},{av:"AV26ItensLancContabNotaEntEmpId",fld:"vITENSLANCCONTABNOTAENTEMPID"},{av:"A4638EntradaId",fld:"ENTRADAID"},{av:"AV27ItensLancContabNotaEntId",fld:"vITENSLANCCONTABNOTAENTID"},{av:"A4660EntradaFilialId",fld:"ENTRADAFILIALID"},{av:"A4647EntradaSerie",fld:"ENTRADASERIE"},{av:"A4646EntradaNumeroDocumento",fld:"ENTRADANUMERODOCUMENTO"},{av:"A4643EntradaFornecedorId",fld:"ENTRADAFORNECEDORID"},{av:"A4645EntradaFornecedorRazao",fld:"ENTRADAFORNECEDORRAZAO"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"AV25ItensLancContabNotaSaiEmpId",fld:"vITENSLANCCONTABNOTASAIEMPID"},{av:"A4307SaidaId",fld:"SAIDAID"},{av:"AV24ItensLancContabNotaSaiId",fld:"vITENSLANCCONTABNOTASAIID"},{av:"A5971SaidaFilialId",fld:"SAIDAFILIALID"},{av:"A5962SaidaSerie",fld:"SAIDASERIE"},{av:"A5960SaidaNoDocumento",fld:"SAIDANODOCUMENTO"},{av:"A5966SaidaClienteId",fld:"SAIDACLIENTEID"},{av:"A5968SaidaClienteRazao",fld:"SAIDACLIENTERAZAO"}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV18EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV11LancamentoContabilId",fld:"vLANCAMENTOCONTABILID",hsh:!0},{av:"AV13ItensLancamentoContabilSequencia",fld:"vITENSLANCAMENTOCONTABILSEQUENCIA",hsh:!0},{av:"A11899ItensLancContabNotaSaiEmpId",fld:"ITENSLANCCONTABNOTASAIEMPID"},{av:"A11900ItensLancContabNotaSaiId",fld:"ITENSLANCCONTABNOTASAIID"},{av:"A11895ItensLancContabNotaEntEmpId",fld:"ITENSLANCCONTABNOTAENTEMPID"},{av:"A11896ItensLancContabNotaEntId",fld:"ITENSLANCCONTABNOTAENTID"},{av:"A11898ItensLancContabNotaEntCfopCod",fld:"ITENSLANCCONTABNOTAENTCFOPCOD"},{av:"A11897ItensLancContabNotaSaiCfopCod",fld:"ITENSLANCCONTABNOTASAICFOPCOD"},{av:"A11947ItensLancContabNotaTpValor",fld:"ITENSLANCCONTABNOTATPVALOR"},{av:"A4637EntradaEmpresaId",fld:"ENTRADAEMPRESAID"},{av:"AV26ItensLancContabNotaEntEmpId",fld:"vITENSLANCCONTABNOTAENTEMPID"},{av:"A4638EntradaId",fld:"ENTRADAID"},{av:"AV27ItensLancContabNotaEntId",fld:"vITENSLANCCONTABNOTAENTID"},{av:"A4660EntradaFilialId",fld:"ENTRADAFILIALID"},{av:"A4647EntradaSerie",fld:"ENTRADASERIE"},{av:"A4646EntradaNumeroDocumento",fld:"ENTRADANUMERODOCUMENTO"},{av:"A4643EntradaFornecedorId",fld:"ENTRADAFORNECEDORID"},{av:"A4645EntradaFornecedorRazao",fld:"ENTRADAFORNECEDORRAZAO"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"AV25ItensLancContabNotaSaiEmpId",fld:"vITENSLANCCONTABNOTASAIEMPID"},{av:"A4307SaidaId",fld:"SAIDAID"},{av:"AV24ItensLancContabNotaSaiId",fld:"vITENSLANCCONTABNOTASAIID"},{av:"A5971SaidaFilialId",fld:"SAIDAFILIALID"},{av:"A5962SaidaSerie",fld:"SAIDASERIE"},{av:"A5960SaidaNoDocumento",fld:"SAIDANODOCUMENTO"},{av:"A5966SaidaClienteId",fld:"SAIDACLIENTEID"},{av:"A5968SaidaClienteRazao",fld:"SAIDACLIENTERAZAO"}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV18EmpresaPadrao",fld:"vEMPRESAPADRAO"},{av:"AV11LancamentoContabilId",fld:"vLANCAMENTOCONTABILID",hsh:!0},{av:"AV13ItensLancamentoContabilSequencia",fld:"vITENSLANCAMENTOCONTABILSEQUENCIA",hsh:!0},{av:"A11899ItensLancContabNotaSaiEmpId",fld:"ITENSLANCCONTABNOTASAIEMPID"},{av:"A11900ItensLancContabNotaSaiId",fld:"ITENSLANCCONTABNOTASAIID"},{av:"A11895ItensLancContabNotaEntEmpId",fld:"ITENSLANCCONTABNOTAENTEMPID"},{av:"A11896ItensLancContabNotaEntId",fld:"ITENSLANCCONTABNOTAENTID"},{av:"A11898ItensLancContabNotaEntCfopCod",fld:"ITENSLANCCONTABNOTAENTCFOPCOD"},{av:"A11897ItensLancContabNotaSaiCfopCod",fld:"ITENSLANCCONTABNOTASAICFOPCOD"},{av:"A11947ItensLancContabNotaTpValor",fld:"ITENSLANCCONTABNOTATPVALOR"},{av:"A4637EntradaEmpresaId",fld:"ENTRADAEMPRESAID"},{av:"AV26ItensLancContabNotaEntEmpId",fld:"vITENSLANCCONTABNOTAENTEMPID"},{av:"A4638EntradaId",fld:"ENTRADAID"},{av:"AV27ItensLancContabNotaEntId",fld:"vITENSLANCCONTABNOTAENTID"},{av:"A4660EntradaFilialId",fld:"ENTRADAFILIALID"},{av:"A4647EntradaSerie",fld:"ENTRADASERIE"},{av:"A4646EntradaNumeroDocumento",fld:"ENTRADANUMERODOCUMENTO"},{av:"A4643EntradaFornecedorId",fld:"ENTRADAFORNECEDORID"},{av:"A4645EntradaFornecedorRazao",fld:"ENTRADAFORNECEDORRAZAO"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"AV25ItensLancContabNotaSaiEmpId",fld:"vITENSLANCCONTABNOTASAIEMPID"},{av:"A4307SaidaId",fld:"SAIDAID"},{av:"AV24ItensLancContabNotaSaiId",fld:"vITENSLANCCONTABNOTASAIID"},{av:"A5971SaidaFilialId",fld:"SAIDAFILIALID"},{av:"A5962SaidaSerie",fld:"SAIDASERIE"},{av:"A5960SaidaNoDocumento",fld:"SAIDANODOCUMENTO"},{av:"A5966SaidaClienteId",fld:"SAIDACLIENTEID"},{av:"A5968SaidaClienteRazao",fld:"SAIDACLIENTERAZAO"}],[]];this.setVCMap("AV18EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("A4637EntradaEmpresaId","ENTRADAEMPRESAID",0,"char");this.setVCMap("AV26ItensLancContabNotaEntEmpId","vITENSLANCCONTABNOTAENTEMPID",0,"char");this.setVCMap("A4638EntradaId","ENTRADAID",0,"int");this.setVCMap("AV27ItensLancContabNotaEntId","vITENSLANCCONTABNOTAENTID",0,"int");this.setVCMap("A4660EntradaFilialId","ENTRADAFILIALID",0,"int");this.setVCMap("A4647EntradaSerie","ENTRADASERIE",0,"char");this.setVCMap("A4646EntradaNumeroDocumento","ENTRADANUMERODOCUMENTO",0,"int");this.setVCMap("A4643EntradaFornecedorId","ENTRADAFORNECEDORID",0,"int");this.setVCMap("A4645EntradaFornecedorRazao","ENTRADAFORNECEDORRAZAO",0,"svchar");this.setVCMap("A4306SaidaEmpresaId","SAIDAEMPRESAID",0,"char");this.setVCMap("AV25ItensLancContabNotaSaiEmpId","vITENSLANCCONTABNOTASAIEMPID",0,"char");this.setVCMap("A4307SaidaId","SAIDAID",0,"int");this.setVCMap("AV24ItensLancContabNotaSaiId","vITENSLANCCONTABNOTASAIID",0,"int");this.setVCMap("A5971SaidaFilialId","SAIDAFILIALID",0,"int");this.setVCMap("A5962SaidaSerie","SAIDASERIE",0,"char");this.setVCMap("A5960SaidaNoDocumento","SAIDANODOCUMENTO",0,"int");this.setVCMap("A5966SaidaClienteId","SAIDACLIENTEID",0,"int");this.setVCMap("A5968SaidaClienteRazao","SAIDACLIENTERAZAO",0,"svchar");this.setVCMap("AV17ItensLancamentoContabilDebCre","vITENSLANCAMENTOCONTABILDEBCRE",0,"char");this.setVCMap("AV18EmpresaPadrao","vEMPRESAPADRAO",0,"char");this.setVCMap("A4637EntradaEmpresaId","ENTRADAEMPRESAID",0,"char");this.setVCMap("AV26ItensLancContabNotaEntEmpId","vITENSLANCCONTABNOTAENTEMPID",0,"char");this.setVCMap("A4638EntradaId","ENTRADAID",0,"int");this.setVCMap("AV27ItensLancContabNotaEntId","vITENSLANCCONTABNOTAENTID",0,"int");this.setVCMap("A4660EntradaFilialId","ENTRADAFILIALID",0,"int");this.setVCMap("A4647EntradaSerie","ENTRADASERIE",0,"char");this.setVCMap("A4646EntradaNumeroDocumento","ENTRADANUMERODOCUMENTO",0,"int");this.setVCMap("A4643EntradaFornecedorId","ENTRADAFORNECEDORID",0,"int");this.setVCMap("A4645EntradaFornecedorRazao","ENTRADAFORNECEDORRAZAO",0,"svchar");this.setVCMap("A4306SaidaEmpresaId","SAIDAEMPRESAID",0,"char");this.setVCMap("AV25ItensLancContabNotaSaiEmpId","vITENSLANCCONTABNOTASAIEMPID",0,"char");this.setVCMap("A4307SaidaId","SAIDAID",0,"int");this.setVCMap("AV24ItensLancContabNotaSaiId","vITENSLANCCONTABNOTASAIID",0,"int");this.setVCMap("A5971SaidaFilialId","SAIDAFILIALID",0,"int");this.setVCMap("A5962SaidaSerie","SAIDASERIE",0,"char");this.setVCMap("A5960SaidaNoDocumento","SAIDANODOCUMENTO",0,"int");this.setVCMap("A5966SaidaClienteId","SAIDACLIENTEID",0,"int");this.setVCMap("A5968SaidaClienteRazao","SAIDACLIENTERAZAO",0,"svchar");n.addRefreshingVar({rfrVar:"AV18EmpresaPadrao"});n.addRefreshingVar(this.GXValidFnc[13]);n.addRefreshingVar(this.GXValidFnc[17]);n.addRefreshingVar({rfrVar:"A11899ItensLancContabNotaSaiEmpId",rfrProp:"Value",gxAttId:"11899"});n.addRefreshingVar({rfrVar:"A11900ItensLancContabNotaSaiId",rfrProp:"Value",gxAttId:"11900"});n.addRefreshingVar({rfrVar:"A11895ItensLancContabNotaEntEmpId",rfrProp:"Value",gxAttId:"11895"});n.addRefreshingVar({rfrVar:"A11896ItensLancContabNotaEntId",rfrProp:"Value",gxAttId:"11896"});n.addRefreshingVar({rfrVar:"A11898ItensLancContabNotaEntCfopCod",rfrProp:"Value",gxAttId:"11898"});n.addRefreshingVar({rfrVar:"A11897ItensLancContabNotaSaiCfopCod",rfrProp:"Value",gxAttId:"11897"});n.addRefreshingVar({rfrVar:"A11947ItensLancContabNotaTpValor",rfrProp:"Value",gxAttId:"11947"});n.addRefreshingVar({rfrVar:"A4637EntradaEmpresaId"});n.addRefreshingVar({rfrVar:"AV26ItensLancContabNotaEntEmpId"});n.addRefreshingVar({rfrVar:"A4638EntradaId"});n.addRefreshingVar({rfrVar:"AV27ItensLancContabNotaEntId"});n.addRefreshingVar({rfrVar:"A4660EntradaFilialId"});n.addRefreshingVar({rfrVar:"A4647EntradaSerie"});n.addRefreshingVar({rfrVar:"A4646EntradaNumeroDocumento"});n.addRefreshingVar({rfrVar:"A4643EntradaFornecedorId"});n.addRefreshingVar({rfrVar:"A4645EntradaFornecedorRazao"});n.addRefreshingVar({rfrVar:"A4306SaidaEmpresaId"});n.addRefreshingVar({rfrVar:"AV25ItensLancContabNotaSaiEmpId"});n.addRefreshingVar({rfrVar:"A4307SaidaId"});n.addRefreshingVar({rfrVar:"AV24ItensLancContabNotaSaiId"});n.addRefreshingVar({rfrVar:"A5971SaidaFilialId"});n.addRefreshingVar({rfrVar:"A5962SaidaSerie"});n.addRefreshingVar({rfrVar:"A5960SaidaNoDocumento"});n.addRefreshingVar({rfrVar:"A5966SaidaClienteId"});n.addRefreshingVar({rfrVar:"A5968SaidaClienteRazao"});this.InitStandaloneVars()});gx.setParentObj(new hconsultaintegracaoestcbl)
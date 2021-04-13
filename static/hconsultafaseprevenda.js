/**@preserve  GeneXus Java 10_3_12-110051 on February 8, 2021 22:25:10.75
*/
gx.evt.autoSkip=!1;gx.define("hconsultafaseprevenda",!1,function(){var n,t;this.ServerClass="hconsultafaseprevenda";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV10Empresaid=gx.fn.getControlValue("vEMPRESAID");this.AV42SaidaSeqItem=gx.fn.getIntegerValue("vSAIDASEQITEM",".");this.A4306SaidaEmpresaId=gx.fn.getControlValue("SAIDAEMPRESAID");this.A4307SaidaId=gx.fn.getIntegerValue("SAIDAID",".");this.A4309SaidaItemSeq=gx.fn.getIntegerValue("SAIDAITEMSEQ",".");this.A5960SaidaNoDocumento=gx.fn.getIntegerValue("SAIDANODOCUMENTO",".");this.A5966SaidaClienteId=gx.fn.getIntegerValue("SAIDACLIENTEID",".");this.A6155SaidaItemLoteProdutoId=gx.fn.getIntegerValue("SAIDAITEMLOTEPRODUTOID",".");this.A6156SaidaItemLoteProdutoDescricao=gx.fn.getControlValue("SAIDAITEMLOTEPRODUTODESCRICAO");this.A5964SaidaDataEmissao=gx.fn.getDateValue("SAIDADATAEMISSAO");this.A227EmpresaPessoasEmpresaId=gx.fn.getControlValue("EMPRESAPESSOASEMPRESAID");this.AV14EmpresaPessoasEmpresaId=gx.fn.getControlValue("vEMPRESAPESSOASEMPRESAID");this.A69PessoaId=gx.fn.getIntegerValue("PESSOAID",".");this.A71PessoaFantasia=gx.fn.getControlValue("PESSOAFANTASIA");this.A9947SaidaItemOculosEmpresaId=gx.fn.getControlValue("SAIDAITEMOCULOSEMPRESAID");this.A9948SaidaItemOculosId=gx.fn.getIntegerValue("SAIDAITEMOCULOSID",".");this.A9949SaidaItemOculosSeq=gx.fn.getIntegerValue("SAIDAITEMOCULOSSEQ",".");this.A9955SaidaItemOculosPaciente=gx.fn.getControlValue("SAIDAITEMOCULOSPACIENTE");this.A9952MedicoNome=gx.fn.getControlValue("MEDICONOME");this.A9956SaidaItemOculosNoReceita=gx.fn.getIntegerValue("SAIDAITEMOCULOSNORECEITA",".");this.AV9ContLinhas=gx.fn.getIntegerValue("vCONTLINHAS",".")};this.Validv_Saidaid=function(){try{var n=gx.util.balloon.getNew("vSAIDAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e2025a2_client=function(){this.clearMessages();this.AV38SaidaFaseObservacao=""==this.A9940SaidaFaseObservacao?"":this.A9940SaidaFaseObservacao;this.refreshOutputs([{av:"AV38SaidaFaseObservacao",fld:"vSAIDAFASEOBSERVACAO"}])};this.e1125a2_client=function(){this.executeServerEvent("'FECHAR'",!0,null,!1,!1)};this.e1225a2_client=function(){this.executeServerEvent("'PRIMEIRO'",!0,null,!1,!1)};this.e1325a2_client=function(){this.executeServerEvent("'GXM_PREVIOUS'",!0,null,!1,!1)};this.e1425a2_client=function(){this.executeServerEvent("'GXM_NEXT'",!0,null,!1,!1)};this.e1525a2_client=function(){this.executeServerEvent("'ULTIMO'",!0,null,!1,!1)};this.e2125a2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e2225a2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,30,33,35,38,40,43,45,48,50,55,59,60,61,62,63,64,66,67,70,73,74,80,84,87,89,91,93,95,97,98,99,100,101];this.GXLastCtrlId=101;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",58,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"hconsultafaseprevenda",[],!1,1,!0,!0,0,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addSingleLineEdit(9936,59,"SAIDAFASESEQ","","","SaidaFaseSeq","int",0,"px",4,4,"right",null,[],9936,"SaidaFaseSeq",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9939,60,"SAIDAFASEDATAHORA","","","SaidaFaseDataHora","dtime",0,"px",16,16,"right",null,[],9939,"SaidaFaseDataHora",!0,5,!1,!1,"Attribute",1,"");t.addSingleLineEdit(8600,61,"ORDEMSERVICOFASEDESCRICAO","","","OrdemServicoFaseDescricao","svchar",0,"px",30,30,"left",null,[],8600,"OrdemServicoFaseDescricao",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(9941,62,"SAIDAFASEUSUARIOALT","","","SaidaFaseUsuarioAlt","char",0,"px",12,12,"left",null,[],9941,"SaidaFaseUsuarioAlt",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("&Btnobservacao","vBTNOBSERVACAO",63,0,"px",17,"px","e2025a2_client","","Obs","Image","GridColumnImage");t.addSingleLineEdit(9940,64,"SAIDAFASEOBSERVACAO","Observação","","SaidaFaseObservacao","vchar",0,"px",2097152,80,"left",null,[],9940,"SaidaFaseObservacao",!1,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE9",grid:0};n[5]={fld:"TABLE10",grid:0};n[8]={fld:"TABLE13",grid:0};n[11]={fld:"TEXTBLOCK13",format:0,grid:0};n[13]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Saidaid,isvalid:null,rgrid:[this.Grid1Container],fld:"vSAIDAID",gxz:"ZV39SaidaId",gxold:"OV39SaidaId",gxvar:"AV39SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV39SaidaId=gx.num.intval(n)},v2z:function(n){gx.O.ZV39SaidaId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDAID",gx.O.AV39SaidaId,0)},c2v:function(){gx.O.AV39SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAID",".")},nac:gx.falseFn};n[16]={fld:"TEXTBLOCK14",format:0,grid:0};n[18]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV41SaidaNoDocumento",gxold:"OV41SaidaNoDocumento",gxvar:"AV41SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV41SaidaNoDocumento=gx.num.intval(n)},v2z:function(n){gx.O.ZV41SaidaNoDocumento=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV41SaidaNoDocumento,0)},c2v:function(){gx.O.AV41SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",".")},nac:gx.falseFn};n[21]={fld:"TEXTBLOCK15",format:0,grid:0};n[23]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACLIENTENOME",gxz:"ZV36saidaclientenome",gxold:"OV36saidaclientenome",gxvar:"AV36saidaclientenome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV36saidaclientenome=n},v2z:function(n){gx.O.ZV36saidaclientenome=n},v2c:function(){gx.fn.setControlValue("vSAIDACLIENTENOME",gx.O.AV36saidaclientenome,0)},c2v:function(){gx.O.AV36saidaclientenome=this.val()},val:function(){return gx.fn.getControlValue("vSAIDACLIENTENOME")},nac:gx.falseFn};n[26]={fld:"TEXTBLOCK16",format:0,grid:0};n[28]={lvl:0,type:"svchar",len:200,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPRODUTO",gxz:"ZV31Produto",gxold:"OV31Produto",gxvar:"AV31Produto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV31Produto=n},v2z:function(n){gx.O.ZV31Produto=n},v2c:function(){gx.fn.setControlValue("vPRODUTO",gx.O.AV31Produto,0)},c2v:function(){gx.O.AV31Produto=this.val()},val:function(){return gx.fn.getControlValue("vPRODUTO")},nac:gx.falseFn};n[30]={fld:"TABLE15",grid:0};n[33]={fld:"TEXTBLOCK22",format:0,grid:0};n[35]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATAEMISSAO",gxz:"ZV37SaidaDataEmissao",gxold:"OV37SaidaDataEmissao",gxvar:"AV37SaidaDataEmissao",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV37SaidaDataEmissao=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV37SaidaDataEmissao=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vSAIDADATAEMISSAO",gx.O.AV37SaidaDataEmissao,0)},c2v:function(){gx.O.AV37SaidaDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATAEMISSAO")},nac:gx.falseFn};n[38]={fld:"TEXTBLOCK24",format:0,grid:0};n[40]={lvl:0,type:"svchar",len:50,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPACIENTE",gxz:"ZV24Paciente",gxold:"OV24Paciente",gxvar:"AV24Paciente",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24Paciente=n},v2z:function(n){gx.O.ZV24Paciente=n},v2c:function(){gx.fn.setControlValue("vPACIENTE",gx.O.AV24Paciente,0)},c2v:function(){gx.O.AV24Paciente=this.val()},val:function(){return gx.fn.getControlValue("vPACIENTE")},nac:gx.falseFn};n[43]={fld:"TEXTBLOCK26",format:0,grid:0};n[45]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vMEDICONOME",gxz:"ZV18MedicoNome",gxold:"OV18MedicoNome",gxvar:"AV18MedicoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV18MedicoNome=n},v2z:function(n){gx.O.ZV18MedicoNome=n},v2c:function(){gx.fn.setControlValue("vMEDICONOME",gx.O.AV18MedicoNome,0)},c2v:function(){gx.O.AV18MedicoNome=this.val()},val:function(){return gx.fn.getControlValue("vMEDICONOME")},nac:gx.falseFn};n[48]={fld:"TEXTBLOCK28",format:0,grid:0};n[50]={lvl:0,type:"int",len:5,dec:0,sign:!1,pic:"ZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAITEMOCULOSNORECEITA",gxz:"ZV40saidaitemoculosnoreceita",gxold:"OV40saidaitemoculosnoreceita",gxvar:"AV40saidaitemoculosnoreceita",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV40saidaitemoculosnoreceita=gx.num.intval(n)},v2z:function(n){gx.O.ZV40saidaitemoculosnoreceita=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDAITEMOCULOSNORECEITA",gx.O.AV40saidaitemoculosnoreceita,0)},c2v:function(){gx.O.AV40saidaitemoculosnoreceita=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAITEMOCULOSNORECEITA",".")},nac:gx.falseFn};n[55]={fld:"TABLE14",grid:0};n[59]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:58,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFASESEQ",gxz:"Z9936SaidaFaseSeq",gxold:"O9936SaidaFaseSeq",gxvar:"A9936SaidaFaseSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A9936SaidaFaseSeq=gx.num.intval(n)},v2z:function(n){gx.O.Z9936SaidaFaseSeq=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("SAIDAFASESEQ",n||gx.fn.currentGridRowImpl(58),gx.O.A9936SaidaFaseSeq,0)},c2v:function(){gx.O.A9936SaidaFaseSeq=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("SAIDAFASESEQ",n||gx.fn.currentGridRowImpl(58),".")},nac:gx.falseFn};n[60]={lvl:2,type:"dtime",len:10,dec:5,sign:!1,ro:1,isacc:0,grid:58,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFASEDATAHORA",gxz:"Z9939SaidaFaseDataHora",gxold:"O9939SaidaFaseDataHora",gxvar:"A9939SaidaFaseDataHora",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A9939SaidaFaseDataHora=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z9939SaidaFaseDataHora=gx.fn.toDatetimeValue(n)},v2c:function(n){gx.fn.setGridControlValue("SAIDAFASEDATAHORA",n||gx.fn.currentGridRowImpl(58),gx.O.A9939SaidaFaseDataHora,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A9939SaidaFaseDataHora=gx.fn.toDatetimeValue(this.val())},val:function(n){return gx.fn.getGridDateTimeValue("SAIDAFASEDATAHORA",n||gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};n[61]={lvl:2,type:"svchar",len:30,dec:0,sign:!1,ro:1,isacc:0,grid:58,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ORDEMSERVICOFASEDESCRICAO",gxz:"Z8600OrdemServicoFaseDescricao",gxold:"O8600OrdemServicoFaseDescricao",gxvar:"A8600OrdemServicoFaseDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A8600OrdemServicoFaseDescricao=n},v2z:function(n){gx.O.Z8600OrdemServicoFaseDescricao=n},v2c:function(n){gx.fn.setGridControlValue("ORDEMSERVICOFASEDESCRICAO",n||gx.fn.currentGridRowImpl(58),gx.O.A8600OrdemServicoFaseDescricao,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A8600OrdemServicoFaseDescricao=this.val()},val:function(n){return gx.fn.getGridControlValue("ORDEMSERVICOFASEDESCRICAO",n||gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};n[62]={lvl:2,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:58,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFASEUSUARIOALT",gxz:"Z9941SaidaFaseUsuarioAlt",gxold:"O9941SaidaFaseUsuarioAlt",gxvar:"A9941SaidaFaseUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A9941SaidaFaseUsuarioAlt=n},v2z:function(n){gx.O.Z9941SaidaFaseUsuarioAlt=n},v2c:function(n){gx.fn.setGridControlValue("SAIDAFASEUSUARIOALT",n||gx.fn.currentGridRowImpl(58),gx.O.A9941SaidaFaseUsuarioAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A9941SaidaFaseUsuarioAlt=this.val()},val:function(n){return gx.fn.getGridControlValue("SAIDAFASEUSUARIOALT",n||gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};n[63]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:58,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vBTNOBSERVACAO",gxz:"ZV8btnObservacao",gxold:"OV8btnObservacao",gxvar:"AV8btnObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV8btnObservacao=n},v2z:function(n){gx.O.ZV8btnObservacao=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBTNOBSERVACAO",n||gx.fn.currentGridRowImpl(58),gx.O.AV8btnObservacao,gx.O.AV57Btnobservacao_GXI)},c2v:function(){gx.O.AV57Btnobservacao_GXI=this.val_GXI();gx.O.AV8btnObservacao=this.val()},val:function(n){return gx.fn.getGridControlValue("vBTNOBSERVACAO",n||gx.fn.currentGridRowImpl(58))},val_GXI:function(n){return gx.fn.getGridControlValue("vBTNOBSERVACAO_GXI",n||gx.fn.currentGridRowImpl(58))},gxvar_GXI:"AV57Btnobservacao_GXI",nac:gx.falseFn};n[64]={lvl:2,type:"vchar",len:2097152,dec:0,sign:!1,ro:1,isacc:0,grid:58,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAFASEOBSERVACAO",gxz:"Z9940SaidaFaseObservacao",gxold:"O9940SaidaFaseObservacao",gxvar:"A9940SaidaFaseObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A9940SaidaFaseObservacao=n},v2z:function(n){gx.O.Z9940SaidaFaseObservacao=n},v2c:function(n){gx.fn.setGridControlValue("SAIDAFASEOBSERVACAO",n||gx.fn.currentGridRowImpl(58),gx.O.A9940SaidaFaseObservacao,0)},c2v:function(){gx.O.A9940SaidaFaseObservacao=this.val()},val:function(n){return gx.fn.getGridControlValue("SAIDAFASEOBSERVACAO",n||gx.fn.currentGridRowImpl(58))},nac:gx.falseFn};n[66]={fld:"OBS1",format:2,grid:0};n[67]={fld:"TABLE8",grid:0};n[70]={fld:"TEXTBLOCK3",format:0,grid:0};n[73]={lvl:0,type:"vchar",len:2097152,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFASEOBSERVACAO",gxz:"ZV38SaidaFaseObservacao",gxold:"OV38SaidaFaseObservacao",gxvar:"AV38SaidaFaseObservacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV38SaidaFaseObservacao=n},v2z:function(n){gx.O.ZV38SaidaFaseObservacao=n},v2c:function(){gx.fn.setControlValue("vSAIDAFASEOBSERVACAO",gx.O.AV38SaidaFaseObservacao,0)},c2v:function(){gx.O.AV38SaidaFaseObservacao=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAFASEOBSERVACAO")},nac:gx.falseFn};n[74]={fld:"OBS2",format:2,grid:0};n[80]={fld:"TABLE11",grid:0};n[84]={fld:"TABLE16",grid:0};n[87]={fld:"BTNPRIMEIRO",grid:0};n[89]={fld:"BTNANTERIOR",grid:0};n[91]={fld:"BTNPROXIMO",grid:0};n[93]={fld:"BTNULTIMO",grid:0};n[95]={fld:"IMAGE7",grid:0};n[97]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV25Pagina",gxold:"OV25Pagina",gxvar:"AV25Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25Pagina=gx.num.intval(n)},v2z:function(n){gx.O.ZV25Pagina=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINA",gx.O.AV25Pagina,0)},c2v:function(){gx.O.AV25Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",".")},nac:gx.falseFn};n[98]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV26PaginaAux",gxold:"OV26PaginaAux",gxvar:"AV26PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26PaginaAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV26PaginaAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV26PaginaAux,0)},c2v:function(){gx.O.AV26PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",".")},nac:gx.falseFn};n[99]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAO",gxz:"ZV27Paginacao",gxold:"OV27Paginacao",gxvar:"AV27Paginacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27Paginacao=gx.num.intval(n)},v2z:function(n){gx.O.ZV27Paginacao=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINACAO",gx.O.AV27Paginacao,0)},c2v:function(){gx.O.AV27Paginacao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINACAO",".")},nac:gx.falseFn};n[100]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINACAOAUX",gxz:"ZV28PaginacaoAux",gxold:"OV28PaginacaoAux",gxvar:"AV28PaginacaoAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28PaginacaoAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV28PaginacaoAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPAGINACAOAUX",gx.O.AV28PaginacaoAux,0)},c2v:function(){gx.O.AV28PaginacaoAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINACAOAUX",".")},nac:gx.falseFn};n[101]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vORDEREDBY",gxz:"ZV23OrderedBy",gxold:"OV23OrderedBy",gxvar:"AV23OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23OrderedBy=gx.num.intval(n)},v2z:function(n){gx.O.ZV23OrderedBy=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV23OrderedBy,0)},c2v:function(){gx.O.AV23OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV39SaidaId=0;this.ZV39SaidaId=0;this.OV39SaidaId=0;this.AV41SaidaNoDocumento=0;this.ZV41SaidaNoDocumento=0;this.OV41SaidaNoDocumento=0;this.AV36saidaclientenome="";this.ZV36saidaclientenome="";this.OV36saidaclientenome="";this.AV31Produto="";this.ZV31Produto="";this.OV31Produto="";this.AV37SaidaDataEmissao=gx.date.nullDate();this.ZV37SaidaDataEmissao=gx.date.nullDate();this.OV37SaidaDataEmissao=gx.date.nullDate();this.AV24Paciente="";this.ZV24Paciente="";this.OV24Paciente="";this.AV18MedicoNome="";this.ZV18MedicoNome="";this.OV18MedicoNome="";this.AV40saidaitemoculosnoreceita=0;this.ZV40saidaitemoculosnoreceita=0;this.OV40saidaitemoculosnoreceita=0;this.Z9936SaidaFaseSeq=0;this.O9936SaidaFaseSeq=0;this.Z9939SaidaFaseDataHora=gx.date.nullDate();this.O9939SaidaFaseDataHora=gx.date.nullDate();this.Z8600OrdemServicoFaseDescricao="";this.O8600OrdemServicoFaseDescricao="";this.Z9941SaidaFaseUsuarioAlt="";this.O9941SaidaFaseUsuarioAlt="";this.ZV8btnObservacao="";this.OV8btnObservacao="";this.Z9940SaidaFaseObservacao="";this.O9940SaidaFaseObservacao="";this.AV38SaidaFaseObservacao="";this.ZV38SaidaFaseObservacao="";this.OV38SaidaFaseObservacao="";this.AV25Pagina=0;this.ZV25Pagina=0;this.OV25Pagina=0;this.AV26PaginaAux=0;this.ZV26PaginaAux=0;this.OV26PaginaAux=0;this.AV27Paginacao=0;this.ZV27Paginacao=0;this.OV27Paginacao=0;this.AV28PaginacaoAux=0;this.ZV28PaginacaoAux=0;this.OV28PaginacaoAux=0;this.AV23OrderedBy=0;this.ZV23OrderedBy=0;this.OV23OrderedBy=0;this.AV39SaidaId=0;this.AV41SaidaNoDocumento=0;this.AV36saidaclientenome="";this.AV31Produto="";this.AV37SaidaDataEmissao=gx.date.nullDate();this.AV24Paciente="";this.AV18MedicoNome="";this.AV40saidaitemoculosnoreceita=0;this.AV38SaidaFaseObservacao="";this.AV25Pagina=0;this.AV26PaginaAux=0;this.AV27Paginacao=0;this.AV28PaginacaoAux=0;this.AV23OrderedBy=0;this.AV10Empresaid="";this.AV42SaidaSeqItem=0;this.A9935SaidaFaseItemSeq=0;this.A4307SaidaId=0;this.A4306SaidaEmpresaId="";this.A9943SaidaFaseEmpId="";this.A9944SaidaFaseCodigo=0;this.A9936SaidaFaseSeq=0;this.A9939SaidaFaseDataHora=gx.date.nullDate();this.A8600OrdemServicoFaseDescricao="";this.A9941SaidaFaseUsuarioAlt="";this.AV8btnObservacao="";this.A9940SaidaFaseObservacao="";this.A9949SaidaItemOculosSeq=0;this.A9948SaidaItemOculosId=0;this.A9947SaidaItemOculosEmpresaId="";this.A9955SaidaItemOculosPaciente="";this.A9952MedicoNome="";this.A9956SaidaItemOculosNoReceita=0;this.A9950SaidaItemOculosMedicoEmpId="";this.A9951SaidaItemOculosMedicoId=0;this.A69PessoaId=0;this.A227EmpresaPessoasEmpresaId="";this.A71PessoaFantasia="";this.A4309SaidaItemSeq=0;this.A5960SaidaNoDocumento=0;this.A5966SaidaClienteId=0;this.A6155SaidaItemLoteProdutoId=0;this.A6156SaidaItemLoteProdutoDescricao="";this.A5964SaidaDataEmissao=gx.date.nullDate();this.A6400SaidaItemLoteProdutoEmpId="";this.AV14EmpresaPessoasEmpresaId="";this.AV9ContLinhas=0;this.Events={e1125a2_client:["'FECHAR'",!0],e1225a2_client:["'PRIMEIRO'",!0],e1325a2_client:["'GXM_PREVIOUS'",!0],e1425a2_client:["'GXM_NEXT'",!0],e1525a2_client:["'ULTIMO'",!0],e2125a2_client:["ENTER",!0],e2225a2_client:["CANCEL",!0],e2025a2_client:["'CONSULTAOBSERVACAO'",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV23OrderedBy",fld:"vORDEREDBY"},{av:"AV9ContLinhas",fld:"vCONTLINHAS",hsh:!0},{av:"AV28PaginacaoAux",fld:"vPAGINACAOAUX"},{av:"AV27Paginacao",fld:"vPAGINACAO"},{av:"A9940SaidaFaseObservacao",fld:"SAIDAFASEOBSERVACAO"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"AV10Empresaid",fld:"vEMPRESAID"},{av:"A4307SaidaId",fld:"SAIDAID"},{av:"AV39SaidaId",fld:"vSAIDAID"},{av:"A4309SaidaItemSeq",fld:"SAIDAITEMSEQ"},{av:"AV42SaidaSeqItem",fld:"vSAIDASEQITEM"},{av:"A5960SaidaNoDocumento",fld:"SAIDANODOCUMENTO"},{av:"A5966SaidaClienteId",fld:"SAIDACLIENTEID"},{av:"A6155SaidaItemLoteProdutoId",fld:"SAIDAITEMLOTEPRODUTOID"},{av:"A6156SaidaItemLoteProdutoDescricao",fld:"SAIDAITEMLOTEPRODUTODESCRICAO"},{av:"A5964SaidaDataEmissao",fld:"SAIDADATAEMISSAO"},{av:"A227EmpresaPessoasEmpresaId",fld:"EMPRESAPESSOASEMPRESAID"},{av:"AV14EmpresaPessoasEmpresaId",fld:"vEMPRESAPESSOASEMPRESAID"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"A71PessoaFantasia",fld:"PESSOAFANTASIA"},{av:"A9947SaidaItemOculosEmpresaId",fld:"SAIDAITEMOCULOSEMPRESAID"},{av:"A9948SaidaItemOculosId",fld:"SAIDAITEMOCULOSID"},{av:"A9949SaidaItemOculosSeq",fld:"SAIDAITEMOCULOSSEQ"},{av:"A9955SaidaItemOculosPaciente",fld:"SAIDAITEMOCULOSPACIENTE"},{av:"A9952MedicoNome",fld:"MEDICONOME"},{av:"A9956SaidaItemOculosNoReceita",fld:"SAIDAITEMOCULOSNORECEITA"}],[{av:"AV41SaidaNoDocumento",fld:"vSAIDANODOCUMENTO"},{av:"AV49PessoaId",fld:"vPESSOAID"},{av:"AV31Produto",fld:"vPRODUTO"},{av:"AV37SaidaDataEmissao",fld:"vSAIDADATAEMISSAO"},{av:"AV36saidaclientenome",fld:"vSAIDACLIENTENOME"},{av:"AV60GXLvl210",fld:"vGXLVL210"},{av:"AV24Paciente",fld:"vPACIENTE"},{av:"AV18MedicoNome",fld:"vMEDICONOME"},{av:"AV40saidaitemoculosnoreceita",fld:"vSAIDAITEMOCULOSNORECEITA"},{av:'gx.fn.getCtrlProperty("vPACIENTE","Visible")',ctrl:"vPACIENTE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vMEDICONOME","Visible")',ctrl:"vMEDICONOME",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vSAIDAITEMOCULOSNORECEITA","Visible")',ctrl:"vSAIDAITEMOCULOSNORECEITA",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TEXTBLOCK24","Visible")',ctrl:"TEXTBLOCK24",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TEXTBLOCK26","Visible")',ctrl:"TEXTBLOCK26",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TEXTBLOCK28","Visible")',ctrl:"TEXTBLOCK28",prop:"Visible"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV42SaidaSeqItem",fld:"vSAIDASEQITEM"},{av:"AV39SaidaId",fld:"vSAIDAID"},{av:"AV10Empresaid",fld:"vEMPRESAID"}],[]];this.EvtParms["GRID1.REFRESH"]=[[{av:"AV23OrderedBy",fld:"vORDEREDBY"},{av:"AV9ContLinhas",fld:"vCONTLINHAS",hsh:!0},{av:"AV28PaginacaoAux",fld:"vPAGINACAOAUX"},{av:"AV27Paginacao",fld:"vPAGINACAO"}],[{ctrl:"SAIDAFASESEQ",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("SAIDAFASESEQ","Title")',ctrl:"SAIDAFASESEQ",prop:"Title"},{av:"AV50Imagem",fld:"vIMAGEM"},{ctrl:"SAIDAFASEDATAHORA",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("SAIDAFASEDATAHORA","Title")',ctrl:"SAIDAFASEDATAHORA",prop:"Title"},{ctrl:"ORDEMSERVICOFASEDESCRICAO",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("ORDEMSERVICOFASEDESCRICAO","Title")',ctrl:"ORDEMSERVICOFASEDESCRICAO",prop:"Title"},{ctrl:"SAIDAFASEUSUARIOALT",prop:"Titleformat"},{av:'gx.fn.getCtrlProperty("SAIDAFASEUSUARIOALT","Title")',ctrl:"SAIDAFASEUSUARIOALT",prop:"Title"},{av:"AV34Resto",fld:"vRESTO"},{av:"AV28PaginacaoAux",fld:"vPAGINACAOAUX"},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:"BTNANTERIOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:"BTNPROXIMO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:"BTNPRIMEIRO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:"BTNULTIMO",prop:"Enabled"}]];this.EvtParms["GRID1.LOAD"]=[[{av:"A9940SaidaFaseObservacao",fld:"SAIDAFASEOBSERVACAO"}],[{av:"AV8btnObservacao",fld:"vBTNOBSERVACAO"},{av:'gx.fn.getCtrlProperty("vBTNOBSERVACAO","Tooltiptext")',ctrl:"vBTNOBSERVACAO",prop:"Tooltiptext"}]];this.EvtParms["'PRIMEIRO'"]=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV23OrderedBy",fld:"vORDEREDBY"},{av:"AV10Empresaid",fld:"vEMPRESAID"},{av:"AV39SaidaId",fld:"vSAIDAID"},{av:"AV42SaidaSeqItem",fld:"vSAIDASEQITEM"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"A4307SaidaId",fld:"SAIDAID"},{av:"A4309SaidaItemSeq",fld:"SAIDAITEMSEQ"},{av:"A5960SaidaNoDocumento",fld:"SAIDANODOCUMENTO"},{av:"A5966SaidaClienteId",fld:"SAIDACLIENTEID"},{av:"A6155SaidaItemLoteProdutoId",fld:"SAIDAITEMLOTEPRODUTOID"},{av:"A6156SaidaItemLoteProdutoDescricao",fld:"SAIDAITEMLOTEPRODUTODESCRICAO"},{av:"A5964SaidaDataEmissao",fld:"SAIDADATAEMISSAO"},{av:"A227EmpresaPessoasEmpresaId",fld:"EMPRESAPESSOASEMPRESAID"},{av:"AV14EmpresaPessoasEmpresaId",fld:"vEMPRESAPESSOASEMPRESAID"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"A71PessoaFantasia",fld:"PESSOAFANTASIA"},{av:"A9947SaidaItemOculosEmpresaId",fld:"SAIDAITEMOCULOSEMPRESAID"},{av:"A9948SaidaItemOculosId",fld:"SAIDAITEMOCULOSID"},{av:"A9949SaidaItemOculosSeq",fld:"SAIDAITEMOCULOSSEQ"},{av:"A9955SaidaItemOculosPaciente",fld:"SAIDAITEMOCULOSPACIENTE"},{av:"A9952MedicoNome",fld:"MEDICONOME"},{av:"A9956SaidaItemOculosNoReceita",fld:"SAIDAITEMOCULOSNORECEITA"},{av:"AV9ContLinhas",fld:"vCONTLINHAS",hsh:!0},{av:"AV28PaginacaoAux",fld:"vPAGINACAOAUX"},{av:"AV27Paginacao",fld:"vPAGINACAO"},{av:"A9940SaidaFaseObservacao",fld:"SAIDAFASEOBSERVACAO"}],[{av:"AV27Paginacao",fld:"vPAGINACAO"}]];this.EvtParms["'GXM_PREVIOUS'"]=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV23OrderedBy",fld:"vORDEREDBY"},{av:"AV10Empresaid",fld:"vEMPRESAID"},{av:"AV39SaidaId",fld:"vSAIDAID"},{av:"AV42SaidaSeqItem",fld:"vSAIDASEQITEM"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"A4307SaidaId",fld:"SAIDAID"},{av:"A4309SaidaItemSeq",fld:"SAIDAITEMSEQ"},{av:"A5960SaidaNoDocumento",fld:"SAIDANODOCUMENTO"},{av:"A5966SaidaClienteId",fld:"SAIDACLIENTEID"},{av:"A6155SaidaItemLoteProdutoId",fld:"SAIDAITEMLOTEPRODUTOID"},{av:"A6156SaidaItemLoteProdutoDescricao",fld:"SAIDAITEMLOTEPRODUTODESCRICAO"},{av:"A5964SaidaDataEmissao",fld:"SAIDADATAEMISSAO"},{av:"A227EmpresaPessoasEmpresaId",fld:"EMPRESAPESSOASEMPRESAID"},{av:"AV14EmpresaPessoasEmpresaId",fld:"vEMPRESAPESSOASEMPRESAID"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"A71PessoaFantasia",fld:"PESSOAFANTASIA"},{av:"A9947SaidaItemOculosEmpresaId",fld:"SAIDAITEMOCULOSEMPRESAID"},{av:"A9948SaidaItemOculosId",fld:"SAIDAITEMOCULOSID"},{av:"A9949SaidaItemOculosSeq",fld:"SAIDAITEMOCULOSSEQ"},{av:"A9955SaidaItemOculosPaciente",fld:"SAIDAITEMOCULOSPACIENTE"},{av:"A9952MedicoNome",fld:"MEDICONOME"},{av:"A9956SaidaItemOculosNoReceita",fld:"SAIDAITEMOCULOSNORECEITA"},{av:"AV9ContLinhas",fld:"vCONTLINHAS",hsh:!0},{av:"AV28PaginacaoAux",fld:"vPAGINACAOAUX"},{av:"AV27Paginacao",fld:"vPAGINACAO"},{av:"A9940SaidaFaseObservacao",fld:"SAIDAFASEOBSERVACAO"}],[{av:"AV27Paginacao",fld:"vPAGINACAO"}]];this.EvtParms["'GXM_NEXT'"]=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV23OrderedBy",fld:"vORDEREDBY"},{av:"AV10Empresaid",fld:"vEMPRESAID"},{av:"AV39SaidaId",fld:"vSAIDAID"},{av:"AV42SaidaSeqItem",fld:"vSAIDASEQITEM"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"A4307SaidaId",fld:"SAIDAID"},{av:"A4309SaidaItemSeq",fld:"SAIDAITEMSEQ"},{av:"A5960SaidaNoDocumento",fld:"SAIDANODOCUMENTO"},{av:"A5966SaidaClienteId",fld:"SAIDACLIENTEID"},{av:"A6155SaidaItemLoteProdutoId",fld:"SAIDAITEMLOTEPRODUTOID"},{av:"A6156SaidaItemLoteProdutoDescricao",fld:"SAIDAITEMLOTEPRODUTODESCRICAO"},{av:"A5964SaidaDataEmissao",fld:"SAIDADATAEMISSAO"},{av:"A227EmpresaPessoasEmpresaId",fld:"EMPRESAPESSOASEMPRESAID"},{av:"AV14EmpresaPessoasEmpresaId",fld:"vEMPRESAPESSOASEMPRESAID"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"A71PessoaFantasia",fld:"PESSOAFANTASIA"},{av:"A9947SaidaItemOculosEmpresaId",fld:"SAIDAITEMOCULOSEMPRESAID"},{av:"A9948SaidaItemOculosId",fld:"SAIDAITEMOCULOSID"},{av:"A9949SaidaItemOculosSeq",fld:"SAIDAITEMOCULOSSEQ"},{av:"A9955SaidaItemOculosPaciente",fld:"SAIDAITEMOCULOSPACIENTE"},{av:"A9952MedicoNome",fld:"MEDICONOME"},{av:"A9956SaidaItemOculosNoReceita",fld:"SAIDAITEMOCULOSNORECEITA"},{av:"AV9ContLinhas",fld:"vCONTLINHAS",hsh:!0},{av:"AV28PaginacaoAux",fld:"vPAGINACAOAUX"},{av:"AV27Paginacao",fld:"vPAGINACAO"},{av:"A9940SaidaFaseObservacao",fld:"SAIDAFASEOBSERVACAO"}],[{av:"AV27Paginacao",fld:"vPAGINACAO"}]];this.EvtParms["'ULTIMO'"]=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV23OrderedBy",fld:"vORDEREDBY"},{av:"AV10Empresaid",fld:"vEMPRESAID"},{av:"AV39SaidaId",fld:"vSAIDAID"},{av:"AV42SaidaSeqItem",fld:"vSAIDASEQITEM"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"A4307SaidaId",fld:"SAIDAID"},{av:"A4309SaidaItemSeq",fld:"SAIDAITEMSEQ"},{av:"A5960SaidaNoDocumento",fld:"SAIDANODOCUMENTO"},{av:"A5966SaidaClienteId",fld:"SAIDACLIENTEID"},{av:"A6155SaidaItemLoteProdutoId",fld:"SAIDAITEMLOTEPRODUTOID"},{av:"A6156SaidaItemLoteProdutoDescricao",fld:"SAIDAITEMLOTEPRODUTODESCRICAO"},{av:"A5964SaidaDataEmissao",fld:"SAIDADATAEMISSAO"},{av:"A227EmpresaPessoasEmpresaId",fld:"EMPRESAPESSOASEMPRESAID"},{av:"AV14EmpresaPessoasEmpresaId",fld:"vEMPRESAPESSOASEMPRESAID"},{av:"A69PessoaId",fld:"PESSOAID"},{av:"A71PessoaFantasia",fld:"PESSOAFANTASIA"},{av:"A9947SaidaItemOculosEmpresaId",fld:"SAIDAITEMOCULOSEMPRESAID"},{av:"A9948SaidaItemOculosId",fld:"SAIDAITEMOCULOSID"},{av:"A9949SaidaItemOculosSeq",fld:"SAIDAITEMOCULOSSEQ"},{av:"A9955SaidaItemOculosPaciente",fld:"SAIDAITEMOCULOSPACIENTE"},{av:"A9952MedicoNome",fld:"MEDICONOME"},{av:"A9956SaidaItemOculosNoReceita",fld:"SAIDAITEMOCULOSNORECEITA"},{av:"AV9ContLinhas",fld:"vCONTLINHAS",hsh:!0},{av:"AV28PaginacaoAux",fld:"vPAGINACAOAUX"},{av:"AV27Paginacao",fld:"vPAGINACAO"},{av:"A9940SaidaFaseObservacao",fld:"SAIDAFASEOBSERVACAO"}],[{av:"AV27Paginacao",fld:"vPAGINACAO"}]];this.EvtParms["'CONSULTAOBSERVACAO'"]=[[{av:"A9940SaidaFaseObservacao",fld:"SAIDAFASEOBSERVACAO"}],[{av:"AV38SaidaFaseObservacao",fld:"vSAIDAFASEOBSERVACAO"}]];this.setVCMap("AV10Empresaid","vEMPRESAID",0,"char");this.setVCMap("AV42SaidaSeqItem","vSAIDASEQITEM",0,"int");this.setVCMap("A4306SaidaEmpresaId","SAIDAEMPRESAID",0,"char");this.setVCMap("A4307SaidaId","SAIDAID",0,"int");this.setVCMap("A4309SaidaItemSeq","SAIDAITEMSEQ",0,"int");this.setVCMap("A5960SaidaNoDocumento","SAIDANODOCUMENTO",0,"int");this.setVCMap("A5966SaidaClienteId","SAIDACLIENTEID",0,"int");this.setVCMap("A6155SaidaItemLoteProdutoId","SAIDAITEMLOTEPRODUTOID",0,"int");this.setVCMap("A6156SaidaItemLoteProdutoDescricao","SAIDAITEMLOTEPRODUTODESCRICAO",0,"svchar");this.setVCMap("A5964SaidaDataEmissao","SAIDADATAEMISSAO",0,"date");this.setVCMap("A227EmpresaPessoasEmpresaId","EMPRESAPESSOASEMPRESAID",0,"char");this.setVCMap("AV14EmpresaPessoasEmpresaId","vEMPRESAPESSOASEMPRESAID",0,"char");this.setVCMap("A69PessoaId","PESSOAID",0,"int");this.setVCMap("A71PessoaFantasia","PESSOAFANTASIA",0,"svchar");this.setVCMap("A9947SaidaItemOculosEmpresaId","SAIDAITEMOCULOSEMPRESAID",0,"char");this.setVCMap("A9948SaidaItemOculosId","SAIDAITEMOCULOSID",0,"int");this.setVCMap("A9949SaidaItemOculosSeq","SAIDAITEMOCULOSSEQ",0,"int");this.setVCMap("A9955SaidaItemOculosPaciente","SAIDAITEMOCULOSPACIENTE",0,"svchar");this.setVCMap("A9952MedicoNome","MEDICONOME",0,"svchar");this.setVCMap("A9956SaidaItemOculosNoReceita","SAIDAITEMOCULOSNORECEITA",0,"int");this.setVCMap("AV9ContLinhas","vCONTLINHAS",0,"int");this.setVCMap("AV10Empresaid","vEMPRESAID",0,"char");this.setVCMap("AV42SaidaSeqItem","vSAIDASEQITEM",0,"int");this.setVCMap("A4306SaidaEmpresaId","SAIDAEMPRESAID",0,"char");this.setVCMap("A4307SaidaId","SAIDAID",0,"int");this.setVCMap("A4309SaidaItemSeq","SAIDAITEMSEQ",0,"int");this.setVCMap("A5960SaidaNoDocumento","SAIDANODOCUMENTO",0,"int");this.setVCMap("A5966SaidaClienteId","SAIDACLIENTEID",0,"int");this.setVCMap("A6155SaidaItemLoteProdutoId","SAIDAITEMLOTEPRODUTOID",0,"int");this.setVCMap("A6156SaidaItemLoteProdutoDescricao","SAIDAITEMLOTEPRODUTODESCRICAO",0,"svchar");this.setVCMap("A5964SaidaDataEmissao","SAIDADATAEMISSAO",0,"date");this.setVCMap("A227EmpresaPessoasEmpresaId","EMPRESAPESSOASEMPRESAID",0,"char");this.setVCMap("AV14EmpresaPessoasEmpresaId","vEMPRESAPESSOASEMPRESAID",0,"char");this.setVCMap("A69PessoaId","PESSOAID",0,"int");this.setVCMap("A71PessoaFantasia","PESSOAFANTASIA",0,"svchar");this.setVCMap("A9947SaidaItemOculosEmpresaId","SAIDAITEMOCULOSEMPRESAID",0,"char");this.setVCMap("A9948SaidaItemOculosId","SAIDAITEMOCULOSID",0,"int");this.setVCMap("A9949SaidaItemOculosSeq","SAIDAITEMOCULOSSEQ",0,"int");this.setVCMap("A9955SaidaItemOculosPaciente","SAIDAITEMOCULOSPACIENTE",0,"svchar");this.setVCMap("A9952MedicoNome","MEDICONOME",0,"svchar");this.setVCMap("A9956SaidaItemOculosNoReceita","SAIDAITEMOCULOSNORECEITA",0,"int");this.setVCMap("AV9ContLinhas","vCONTLINHAS",0,"int");t.addRefreshingVar(this.GXValidFnc[101]);t.addRefreshingVar({rfrVar:"AV10Empresaid"});t.addRefreshingVar(this.GXValidFnc[13]);t.addRefreshingVar({rfrVar:"AV42SaidaSeqItem"});t.addRefreshingVar({rfrVar:"A4306SaidaEmpresaId"});t.addRefreshingVar({rfrVar:"A4307SaidaId"});t.addRefreshingVar({rfrVar:"A4309SaidaItemSeq"});t.addRefreshingVar({rfrVar:"A5960SaidaNoDocumento"});t.addRefreshingVar({rfrVar:"A5966SaidaClienteId"});t.addRefreshingVar({rfrVar:"A6155SaidaItemLoteProdutoId"});t.addRefreshingVar({rfrVar:"A6156SaidaItemLoteProdutoDescricao"});t.addRefreshingVar({rfrVar:"A5964SaidaDataEmissao"});t.addRefreshingVar({rfrVar:"A227EmpresaPessoasEmpresaId"});t.addRefreshingVar({rfrVar:"AV14EmpresaPessoasEmpresaId"});t.addRefreshingVar({rfrVar:"A69PessoaId"});t.addRefreshingVar({rfrVar:"A71PessoaFantasia"});t.addRefreshingVar({rfrVar:"A9947SaidaItemOculosEmpresaId"});t.addRefreshingVar({rfrVar:"A9948SaidaItemOculosId"});t.addRefreshingVar({rfrVar:"A9949SaidaItemOculosSeq"});t.addRefreshingVar({rfrVar:"A9955SaidaItemOculosPaciente"});t.addRefreshingVar({rfrVar:"A9952MedicoNome"});t.addRefreshingVar({rfrVar:"A9956SaidaItemOculosNoReceita"});t.addRefreshingVar({rfrVar:"AV9ContLinhas"});t.addRefreshingVar(this.GXValidFnc[100]);t.addRefreshingVar(this.GXValidFnc[99]);t.addRefreshingVar({rfrVar:"A9940SaidaFaseObservacao",rfrProp:"Value",gxAttId:"9940"});this.InitStandaloneVars()});gx.setParentObj(new hconsultafaseprevenda)
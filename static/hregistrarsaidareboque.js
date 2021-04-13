/**@preserve  GeneXus Java 10_3_12-110051 on February 13, 2021 11:25:55.21
*/
gx.evt.autoSkip=!1;gx.define("hregistrarsaidareboque",!1,function(){var n,t;this.ServerClass="hregistrarsaidareboque";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV13SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID")};this.Validv_Saidaid=function(){try{var n=gx.util.balloon.getNew("vSAIDAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Saidareboqueufveiculo=function(){try{var n=gx.util.balloon.getNew("vSAIDAREBOQUEUFVEICULO");if(this.AnyError=0,!(this.AV25SaidaReboqueUFVeiculo==""||this.AV25SaidaReboqueUFVeiculo=="AC"||this.AV25SaidaReboqueUFVeiculo=="AL"||this.AV25SaidaReboqueUFVeiculo=="AP"||this.AV25SaidaReboqueUFVeiculo=="AM"||this.AV25SaidaReboqueUFVeiculo=="BA"||this.AV25SaidaReboqueUFVeiculo=="CE"||this.AV25SaidaReboqueUFVeiculo=="DF"||this.AV25SaidaReboqueUFVeiculo=="ES"||this.AV25SaidaReboqueUFVeiculo=="GO"||this.AV25SaidaReboqueUFVeiculo=="MA"||this.AV25SaidaReboqueUFVeiculo=="MT"||this.AV25SaidaReboqueUFVeiculo=="MS"||this.AV25SaidaReboqueUFVeiculo=="MG"||this.AV25SaidaReboqueUFVeiculo=="PA"||this.AV25SaidaReboqueUFVeiculo=="PB"||this.AV25SaidaReboqueUFVeiculo=="PR"||this.AV25SaidaReboqueUFVeiculo=="PE"||this.AV25SaidaReboqueUFVeiculo=="PI"||this.AV25SaidaReboqueUFVeiculo=="RJ"||this.AV25SaidaReboqueUFVeiculo=="RN"||this.AV25SaidaReboqueUFVeiculo=="RS"||this.AV25SaidaReboqueUFVeiculo=="RO"||this.AV25SaidaReboqueUFVeiculo=="RR"||this.AV25SaidaReboqueUFVeiculo=="SC"||this.AV25SaidaReboqueUFVeiculo=="SP"||this.AV25SaidaReboqueUFVeiculo=="SE"||this.AV25SaidaReboqueUFVeiculo=="TO"||this.AV25SaidaReboqueUFVeiculo=="EX"||""==this.AV25SaidaReboqueUFVeiculo))try{n.setError("Campo SaidaReboqueUFVeiculo fora do intervalo");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.s122_client=function(){this.AV41SnErro="N";""==this.AV26SaidaReboquePlacaVeiculo&&(this.addMessage("Informe a Placa do Veículo"),this.AV41SnErro="S",gx.fn.usrSetFocus("vSAIDAREBOQUEPLACAVEICULO"));this.AV41SnErro=="N"&&""==this.AV25SaidaReboqueUFVeiculo&&(this.addMessage("Informe a UF do Veículo"),this.AV41SnErro="S",gx.fn.usrSetFocus("vSAIDAREBOQUEUFVEICULO"));this.AV42cont=gx.num.trunc(0,0);for(var n=1,i=gx.fn.currentGridRowImpl(95),r,t=gx.O.getGridById(95,0);n<=t.grid.rows.length;)r=gx.text.padl(gx.text.tostring(n),4,"0"),t.instanciateRow(t.grid.getRowById(n-1)),this.AV42cont=gx.num.trunc(this.AV42cont+1,0),n=gx.num.trunc(n+1,0);i&&t.instanciateRow(i)};this.s132_client=function(){this.AV26SaidaReboquePlacaVeiculo="";this.AV25SaidaReboqueUFVeiculo="";this.AV27SaidaReboqueRNTC=""};this.e1112v2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e1412v2_client=function(){this.executeServerEvent("'EXCLUIR'",!0,arguments[0],!1,!1)};this.e1212v2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e1612v2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,10,13,15,17,19,21,24,26,28,30,32,35,37,40,42,44,46,48,53,55,58,60,62,67,70,72,77,79,84,86,94,96,97,98,99,100,101,108,109];this.GXLastCtrlId=109;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",95,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hregistrarsaidareboque",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!0,null,null,!1,"",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit(6312,96,"SAIDAREBOQUESEQ","Sequencia","","SaidaReboqueSeq","int",0,"px",2,2,"right",null,[],6312,"SaidaReboqueSeq",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(6296,97,"SAIDAREBOQUEPLACAVEICULO","Placa do Veículo","","SaidaReboquePlacaVeiculo","char",0,"px",8,8,"left",null,[],6296,"SaidaReboquePlacaVeiculo",!0,0,!1,!1,"Attribute",1,"");t.addComboBox(6295,98,"SAIDAREBOQUEUFVEICULO","UF do veículo","SaidaReboqueUFVeiculo","char",null,0,!0,!1,0,"px","");t.addSingleLineEdit(6297,99,"SAIDAREBOQUERNTC","RNTC","","SaidaReboqueRNTC","svchar",0,"px",20,20,"left",null,[],6297,"SaidaReboqueRNTC",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("&Bmpexcluir","vBMPEXCLUIR",100,0,"px",17,"px","e1412v2_client","","Excluir","Image","GridColumnImage");this.setGrid(t);n[2]={fld:"TABLE3",grid:0};n[5]={fld:"TABLE1",grid:0};n[8]={fld:"TEXTBLOCK1",format:0,grid:0};n[10]={fld:"TABLE4",grid:0};n[13]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFILIALID",gxz:"ZV19SaidaFilialId",gxold:"OV19SaidaFilialId",gxvar:"AV19SaidaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV19SaidaFilialId=gx.num.intval(n)},v2z:function(n){gx.O.ZV19SaidaFilialId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDAFILIALID",gx.O.AV19SaidaFilialId,0)},c2v:function(){gx.O.AV19SaidaFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAFILIALID",".")},nac:gx.falseFn};n[15]={fld:"TEXTBLOCK8",format:0,grid:0};n[17]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFILIALNOME",gxz:"ZV20SaidaFilialNome",gxold:"OV20SaidaFilialNome",gxvar:"AV20SaidaFilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV20SaidaFilialNome=n},v2z:function(n){gx.O.ZV20SaidaFilialNome=n},v2c:function(){gx.fn.setControlValue("vSAIDAFILIALNOME",gx.O.AV20SaidaFilialNome,0)},c2v:function(){gx.O.AV20SaidaFilialNome=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAFILIALNOME")},nac:gx.falseFn};n[19]={fld:"TEXTBLOCK4",format:0,grid:0};n[21]={fld:"TABLE2",grid:0};n[24]={lvl:0,type:"char",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASERIE",gxz:"ZV15SaidaSerie",gxold:"OV15SaidaSerie",gxvar:"AV15SaidaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15SaidaSerie=n},v2z:function(n){gx.O.ZV15SaidaSerie=n},v2c:function(){gx.fn.setControlValue("vSAIDASERIE",gx.O.AV15SaidaSerie,0)},c2v:function(){gx.O.AV15SaidaSerie=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASERIE")},nac:gx.falseFn};n[26]={fld:"TEXTBLOCK10",format:0,grid:0};n[28]={lvl:0,type:"char",len:5,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASUBSERIE",gxz:"ZV16SaidaSubserie",gxold:"OV16SaidaSubserie",gxvar:"AV16SaidaSubserie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16SaidaSubserie=n},v2z:function(n){gx.O.ZV16SaidaSubserie=n},v2c:function(){gx.fn.setControlValue("vSAIDASUBSERIE",gx.O.AV16SaidaSubserie,0)},c2v:function(){gx.O.AV16SaidaSubserie=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASUBSERIE")},nac:gx.falseFn};n[30]={fld:"TEXTBLOCK6",format:0,grid:0};n[32]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Saidaid,isvalid:null,rgrid:[this.GridContainer],fld:"vSAIDAID",gxz:"ZV14SaidaId",gxold:"OV14SaidaId",gxvar:"AV14SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14SaidaId=gx.num.intval(n)},v2z:function(n){gx.O.ZV14SaidaId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDAID",gx.O.AV14SaidaId,0)},c2v:function(){gx.O.AV14SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAID",".")},nac:gx.falseFn};n[35]={fld:"TEXTBLOCK2",format:0,grid:0};n[37]={fld:"TABLE5",grid:0};n[40]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACLIENTEID",gxz:"ZV17SaidaClienteId",gxold:"OV17SaidaClienteId",gxvar:"AV17SaidaClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17SaidaClienteId=gx.num.intval(n)},v2z:function(n){gx.O.ZV17SaidaClienteId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDACLIENTEID",gx.O.AV17SaidaClienteId,0)},c2v:function(){gx.O.AV17SaidaClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDACLIENTEID",".")},nac:gx.falseFn};n[42]={fld:"TEXTBLOCK9",format:0,grid:0};n[44]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACLIENTERAZAO",gxz:"ZV18SaidaClienteRazao",gxold:"OV18SaidaClienteRazao",gxvar:"AV18SaidaClienteRazao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV18SaidaClienteRazao=n},v2z:function(n){gx.O.ZV18SaidaClienteRazao=n},v2c:function(){gx.fn.setControlValue("vSAIDACLIENTERAZAO",gx.O.AV18SaidaClienteRazao,0)},c2v:function(){gx.O.AV18SaidaClienteRazao=this.val()},val:function(){return gx.fn.getControlValue("vSAIDACLIENTERAZAO")},nac:gx.falseFn};n[46]={fld:"TEXTBLOCK5",format:0,grid:0};n[48]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV23SaidaNoDocumento",gxold:"OV23SaidaNoDocumento",gxvar:"AV23SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23SaidaNoDocumento=gx.num.intval(n)},v2z:function(n){gx.O.ZV23SaidaNoDocumento=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV23SaidaNoDocumento,0)},c2v:function(){gx.O.AV23SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",".")},nac:gx.falseFn};n[53]={fld:"TEXTBLOCK3",format:0,grid:0};n[55]={fld:"TABLE7",grid:0};n[58]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACFOPCODIGO",gxz:"ZV21SaidaCFOPCodigo",gxold:"OV21SaidaCFOPCodigo",gxvar:"AV21SaidaCFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV21SaidaCFOPCodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV21SaidaCFOPCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDACFOPCODIGO",gx.O.AV21SaidaCFOPCodigo,0)},c2v:function(){gx.O.AV21SaidaCFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDACFOPCODIGO",".")},nac:gx.falseFn};n[60]={fld:"TEXTBLOCK7",format:0,grid:0};n[62]={lvl:0,type:"svchar",len:340,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACFOPDESCRICAO",gxz:"ZV22SaidaCFOPDescricao",gxold:"OV22SaidaCFOPDescricao",gxvar:"AV22SaidaCFOPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22SaidaCFOPDescricao=n},v2z:function(n){gx.O.ZV22SaidaCFOPDescricao=n},v2c:function(){gx.fn.setControlValue("vSAIDACFOPDESCRICAO",gx.O.AV22SaidaCFOPDescricao,0)},c2v:function(){gx.O.AV22SaidaCFOPDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSAIDACFOPDESCRICAO")},nac:gx.falseFn};n[67]={fld:"TABLE6",grid:0};n[70]={fld:"TEXTBLOCK11",format:0,grid:0};n[72]={lvl:0,type:"char",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAREBOQUEPLACAVEICULO",gxz:"ZV26SaidaReboquePlacaVeiculo",gxold:"OV26SaidaReboquePlacaVeiculo",gxvar:"AV26SaidaReboquePlacaVeiculo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26SaidaReboquePlacaVeiculo=n},v2z:function(n){gx.O.ZV26SaidaReboquePlacaVeiculo=n},v2c:function(){gx.fn.setControlValue("vSAIDAREBOQUEPLACAVEICULO",gx.O.AV26SaidaReboquePlacaVeiculo,0)},c2v:function(){gx.O.AV26SaidaReboquePlacaVeiculo=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAREBOQUEPLACAVEICULO")},nac:gx.falseFn};n[77]={fld:"TEXTBLOCK12",format:0,grid:0};n[79]={lvl:0,type:"char",len:2,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidareboqueufveiculo,isvalid:null,rgrid:[],fld:"vSAIDAREBOQUEUFVEICULO",gxz:"ZV25SaidaReboqueUFVeiculo",gxold:"OV25SaidaReboqueUFVeiculo",gxvar:"AV25SaidaReboqueUFVeiculo",ucs:[],op:[79],ip:[79],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV25SaidaReboqueUFVeiculo=n},v2z:function(n){gx.O.ZV25SaidaReboqueUFVeiculo=n},v2c:function(){gx.fn.setComboBoxValue("vSAIDAREBOQUEUFVEICULO",gx.O.AV25SaidaReboqueUFVeiculo)},c2v:function(){gx.O.AV25SaidaReboqueUFVeiculo=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAREBOQUEUFVEICULO")},nac:gx.falseFn};n[84]={fld:"TEXTBLOCK13",format:0,grid:0};n[86]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAREBOQUERNTC",gxz:"ZV27SaidaReboqueRNTC",gxold:"OV27SaidaReboqueRNTC",gxvar:"AV27SaidaReboqueRNTC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27SaidaReboqueRNTC=n},v2z:function(n){gx.O.ZV27SaidaReboqueRNTC=n},v2c:function(){gx.fn.setControlValue("vSAIDAREBOQUERNTC",gx.O.AV27SaidaReboqueRNTC,0)},c2v:function(){gx.O.AV27SaidaReboqueRNTC=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAREBOQUERNTC")},nac:gx.falseFn};n[94]={fld:"DIV1",format:2,grid:0};n[96]={lvl:2,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:1,isacc:0,grid:95,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAREBOQUESEQ",gxz:"Z6312SaidaReboqueSeq",gxold:"O6312SaidaReboqueSeq",gxvar:"A6312SaidaReboqueSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A6312SaidaReboqueSeq=gx.num.intval(n)},v2z:function(n){gx.O.Z6312SaidaReboqueSeq=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("SAIDAREBOQUESEQ",n||gx.fn.currentGridRowImpl(95),gx.O.A6312SaidaReboqueSeq,0)},c2v:function(){gx.O.A6312SaidaReboqueSeq=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("SAIDAREBOQUESEQ",n||gx.fn.currentGridRowImpl(95),".")},nac:gx.falseFn};n[97]={lvl:2,type:"char",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:95,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAREBOQUEPLACAVEICULO",gxz:"Z6296SaidaReboquePlacaVeiculo",gxold:"O6296SaidaReboquePlacaVeiculo",gxvar:"A6296SaidaReboquePlacaVeiculo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A6296SaidaReboquePlacaVeiculo=n},v2z:function(n){gx.O.Z6296SaidaReboquePlacaVeiculo=n},v2c:function(n){gx.fn.setGridControlValue("SAIDAREBOQUEPLACAVEICULO",n||gx.fn.currentGridRowImpl(95),gx.O.A6296SaidaReboquePlacaVeiculo,0)},c2v:function(){gx.O.A6296SaidaReboquePlacaVeiculo=this.val()},val:function(n){return gx.fn.getGridControlValue("SAIDAREBOQUEPLACAVEICULO",n||gx.fn.currentGridRowImpl(95))},nac:gx.falseFn};n[98]={lvl:2,type:"char",len:2,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:95,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAREBOQUEUFVEICULO",gxz:"Z6295SaidaReboqueUFVeiculo",gxold:"O6295SaidaReboqueUFVeiculo",gxvar:"A6295SaidaReboqueUFVeiculo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:"text",v2v:function(n){gx.O.A6295SaidaReboqueUFVeiculo=n},v2z:function(n){gx.O.Z6295SaidaReboqueUFVeiculo=n},v2c:function(n){gx.fn.setGridComboBoxValue("SAIDAREBOQUEUFVEICULO",n||gx.fn.currentGridRowImpl(95),gx.O.A6295SaidaReboqueUFVeiculo);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A6295SaidaReboqueUFVeiculo=this.val()},val:function(n){return gx.fn.getGridControlValue("SAIDAREBOQUEUFVEICULO",n||gx.fn.currentGridRowImpl(95))},nac:gx.falseFn};n[99]={lvl:2,type:"svchar",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:95,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAREBOQUERNTC",gxz:"Z6297SaidaReboqueRNTC",gxold:"O6297SaidaReboqueRNTC",gxvar:"A6297SaidaReboqueRNTC",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A6297SaidaReboqueRNTC=n},v2z:function(n){gx.O.Z6297SaidaReboqueRNTC=n},v2c:function(n){gx.fn.setGridControlValue("SAIDAREBOQUERNTC",n||gx.fn.currentGridRowImpl(95),gx.O.A6297SaidaReboqueRNTC,0)},c2v:function(){gx.O.A6297SaidaReboqueRNTC=this.val()},val:function(n){return gx.fn.getGridControlValue("SAIDAREBOQUERNTC",n||gx.fn.currentGridRowImpl(95))},nac:gx.falseFn};n[100]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:95,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXCLUIR",gxz:"ZV29bmpExcluir",gxold:"OV29bmpExcluir",gxvar:"AV29bmpExcluir",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV29bmpExcluir=n},v2z:function(n){gx.O.ZV29bmpExcluir=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPEXCLUIR",n||gx.fn.currentGridRowImpl(95),gx.O.AV29bmpExcluir,gx.O.AV53Bmpexcluir_GXI)},c2v:function(){gx.O.AV53Bmpexcluir_GXI=this.val_GXI();gx.O.AV29bmpExcluir=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPEXCLUIR",n||gx.fn.currentGridRowImpl(95))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPEXCLUIR_GXI",n||gx.fn.currentGridRowImpl(95))},gxvar_GXI:"AV53Bmpexcluir_GXI",nac:gx.falseFn};n[101]={fld:"DIV2",format:2,grid:0};n[108]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCONT",gxz:"ZV42cont",gxold:"OV42cont",gxvar:"AV42cont",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV42cont=gx.num.intval(n)},v2z:function(n){gx.O.ZV42cont=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vCONT",gx.O.AV42cont,0)},c2v:function(){gx.O.AV42cont=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONT",".")},nac:gx.falseFn};n[109]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV36OrderedBy",gxold:"OV36OrderedBy",gxvar:"AV36OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV36OrderedBy=gx.num.intval(n)},v2z:function(n){gx.O.ZV36OrderedBy=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV36OrderedBy,0)},c2v:function(){gx.O.AV36OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",".")},nac:gx.falseFn};this.AV19SaidaFilialId=0;this.ZV19SaidaFilialId=0;this.OV19SaidaFilialId=0;this.AV20SaidaFilialNome="";this.ZV20SaidaFilialNome="";this.OV20SaidaFilialNome="";this.AV15SaidaSerie="";this.ZV15SaidaSerie="";this.OV15SaidaSerie="";this.AV16SaidaSubserie="";this.ZV16SaidaSubserie="";this.OV16SaidaSubserie="";this.AV14SaidaId=0;this.ZV14SaidaId=0;this.OV14SaidaId=0;this.AV17SaidaClienteId=0;this.ZV17SaidaClienteId=0;this.OV17SaidaClienteId=0;this.AV18SaidaClienteRazao="";this.ZV18SaidaClienteRazao="";this.OV18SaidaClienteRazao="";this.AV23SaidaNoDocumento=0;this.ZV23SaidaNoDocumento=0;this.OV23SaidaNoDocumento=0;this.AV21SaidaCFOPCodigo=0;this.ZV21SaidaCFOPCodigo=0;this.OV21SaidaCFOPCodigo=0;this.AV22SaidaCFOPDescricao="";this.ZV22SaidaCFOPDescricao="";this.OV22SaidaCFOPDescricao="";this.AV26SaidaReboquePlacaVeiculo="";this.ZV26SaidaReboquePlacaVeiculo="";this.OV26SaidaReboquePlacaVeiculo="";this.AV25SaidaReboqueUFVeiculo="";this.ZV25SaidaReboqueUFVeiculo="";this.OV25SaidaReboqueUFVeiculo="";this.AV27SaidaReboqueRNTC="";this.ZV27SaidaReboqueRNTC="";this.OV27SaidaReboqueRNTC="";this.Z6312SaidaReboqueSeq=0;this.O6312SaidaReboqueSeq=0;this.Z6296SaidaReboquePlacaVeiculo="";this.O6296SaidaReboquePlacaVeiculo="";this.Z6295SaidaReboqueUFVeiculo="";this.O6295SaidaReboqueUFVeiculo="";this.Z6297SaidaReboqueRNTC="";this.O6297SaidaReboqueRNTC="";this.ZV29bmpExcluir="";this.OV29bmpExcluir="";this.AV42cont=0;this.ZV42cont=0;this.OV42cont=0;this.AV36OrderedBy=0;this.ZV36OrderedBy=0;this.OV36OrderedBy=0;this.AV19SaidaFilialId=0;this.AV20SaidaFilialNome="";this.AV15SaidaSerie="";this.AV16SaidaSubserie="";this.AV14SaidaId=0;this.AV17SaidaClienteId=0;this.AV18SaidaClienteRazao="";this.AV23SaidaNoDocumento=0;this.AV21SaidaCFOPCodigo=0;this.AV22SaidaCFOPDescricao="";this.AV26SaidaReboquePlacaVeiculo="";this.AV25SaidaReboqueUFVeiculo="";this.AV27SaidaReboqueRNTC="";this.AV42cont=0;this.AV36OrderedBy=0;this.AV13SaidaEmpresaId="";this.A4307SaidaId=0;this.A6312SaidaReboqueSeq=0;this.A6296SaidaReboquePlacaVeiculo="";this.A6295SaidaReboqueUFVeiculo="";this.A6297SaidaReboqueRNTC="";this.AV29bmpExcluir="";this.A4306SaidaEmpresaId="";this.A5971SaidaFilialId=0;this.A5972SaidaFilialNome="";this.A5966SaidaClienteId=0;this.A5968SaidaClienteRazao="";this.A5962SaidaSerie="";this.A5963SaidaSubserie="";this.A5960SaidaNoDocumento=0;this.A6012SaidaCFOPCodigo=0;this.A6013SaidaCFOPDescricao="";this.A5965SaidaClienteEmpresaId="";this.A5970SaidaFilialEmpId="";this.AV41SnErro="";this.Events={e1112v2_client:["ENTER",!0],e1412v2_client:["'EXCLUIR'",!0],e1212v2_client:["'FECHAR'",!0],e1612v2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV36OrderedBy",fld:"vORDEREDBY"},{av:"AV13SaidaEmpresaId",fld:"vSAIDAEMPRESAID",hsh:!0},{av:"AV14SaidaId",fld:"vSAIDAID",hsh:!0},{av:"AV29bmpExcluir",fld:"vBMPEXCLUIR"},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:"vBMPEXCLUIR",prop:"Tooltiptext"}],[]];this.EvtParms.ENTER=[[{av:"AV13SaidaEmpresaId",fld:"vSAIDAEMPRESAID",hsh:!0},{av:"AV14SaidaId",fld:"vSAIDAID",hsh:!0},{av:"AV41SnErro",fld:"vSNERRO"},{av:"AV42cont",fld:"vCONT"},{av:"AV26SaidaReboquePlacaVeiculo",fld:"vSAIDAREBOQUEPLACAVEICULO"},{av:"AV25SaidaReboqueUFVeiculo",fld:"vSAIDAREBOQUEUFVEICULO"},{av:"AV27SaidaReboqueRNTC",fld:"vSAIDAREBOQUERNTC"},{av:"AV5UsrCod",fld:"vUSRCOD"}],[{av:"AV24SaidaReboqueSeq",fld:"vSAIDAREBOQUESEQ"},{ctrl:"INSERIR",prop:"Enabled"},{av:"AV41SnErro",fld:"vSNERRO"},{av:"AV42cont",fld:"vCONT"},{av:"AV26SaidaReboquePlacaVeiculo",fld:"vSAIDAREBOQUEPLACAVEICULO"},{av:"AV25SaidaReboqueUFVeiculo",fld:"vSAIDAREBOQUEUFVEICULO"},{av:"AV27SaidaReboqueRNTC",fld:"vSAIDAREBOQUERNTC"}]];this.EvtParms["'EXCLUIR'"]=[[{av:"AV13SaidaEmpresaId",fld:"vSAIDAEMPRESAID",hsh:!0},{av:"AV14SaidaId",fld:"vSAIDAID",hsh:!0},{av:"A6312SaidaReboqueSeq",fld:"SAIDAREBOQUESEQ"},{av:"A6296SaidaReboquePlacaVeiculo",fld:"SAIDAREBOQUEPLACAVEICULO"},{av:"A6295SaidaReboqueUFVeiculo",fld:"SAIDAREBOQUEUFVEICULO"},{av:"A6297SaidaReboqueRNTC",fld:"SAIDAREBOQUERNTC"},{av:"AV5UsrCod",fld:"vUSRCOD"}],[]];this.EvtParms["'FECHAR'"]=[[],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV36OrderedBy",fld:"vORDEREDBY"},{av:"AV13SaidaEmpresaId",fld:"vSAIDAEMPRESAID",hsh:!0},{av:"AV14SaidaId",fld:"vSAIDAID",hsh:!0},{av:"AV29bmpExcluir",fld:"vBMPEXCLUIR"},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:"vBMPEXCLUIR",prop:"Tooltiptext"}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV36OrderedBy",fld:"vORDEREDBY"},{av:"AV13SaidaEmpresaId",fld:"vSAIDAEMPRESAID",hsh:!0},{av:"AV14SaidaId",fld:"vSAIDAID",hsh:!0},{av:"AV29bmpExcluir",fld:"vBMPEXCLUIR"},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:"vBMPEXCLUIR",prop:"Tooltiptext"}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV36OrderedBy",fld:"vORDEREDBY"},{av:"AV13SaidaEmpresaId",fld:"vSAIDAEMPRESAID",hsh:!0},{av:"AV14SaidaId",fld:"vSAIDAID",hsh:!0},{av:"AV29bmpExcluir",fld:"vBMPEXCLUIR"},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:"vBMPEXCLUIR",prop:"Tooltiptext"}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"subGrid_Rows"},{av:"AV36OrderedBy",fld:"vORDEREDBY"},{av:"AV13SaidaEmpresaId",fld:"vSAIDAEMPRESAID",hsh:!0},{av:"AV14SaidaId",fld:"vSAIDAID",hsh:!0},{av:"AV29bmpExcluir",fld:"vBMPEXCLUIR"},{av:'gx.fn.getCtrlProperty("vBMPEXCLUIR","Tooltiptext")',ctrl:"vBMPEXCLUIR",prop:"Tooltiptext"}],[]];this.EnterCtrl=["INSERIR"];this.setVCMap("AV13SaidaEmpresaId","vSAIDAEMPRESAID",0,"char");this.setVCMap("AV13SaidaEmpresaId","vSAIDAEMPRESAID",0,"char");t.addRefreshingVar(this.GXValidFnc[109]);t.addRefreshingVar({rfrVar:"AV13SaidaEmpresaId"});t.addRefreshingVar(this.GXValidFnc[32]);t.addRefreshingVar({rfrVar:"AV29bmpExcluir",rfrProp:"Value",gxAttId:"Bmpexcluir"});t.addRefreshingVar({rfrVar:"AV29bmpExcluir",rfrProp:"Tooltiptext",gxAttId:"Bmpexcluir"});this.InitStandaloneVars()});gx.setParentObj(new hregistrarsaidareboque)
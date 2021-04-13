/**@preserve  GeneXus Java 10_3_12-110051 on February 13, 2021 9:56:39.6
*/
gx.evt.autoSkip=!1;gx.define("hregistrarvendedorsaida",!1,function(){var n,t,i,r;this.ServerClass="hregistrarvendedorsaida";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.refreshAndEnter=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("6","'INSERIRNOVO'");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.AV36VendedorSaida=gx.fn.getControlValue("vVENDEDORSAIDA");this.AV27SaidaEmpresaId=gx.fn.getControlValue("vSAIDAEMPRESAID");this.AV30UsuarioId=gx.fn.getControlValue("vUSUARIOID");this.AV28ModeTela=gx.fn.getControlValue("vMODETELA");this.AV63Tela=gx.fn.getControlValue("vTELA")};this.Validv_Saidaid=function(){try{var n=gx.util.balloon.getNew("vSAIDAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Vendedorempresaid=function(){try{var n=gx.util.balloon.getNew("vVENDEDOREMPRESAID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Saidatipo=function(){try{var n=gx.util.balloon.getNew("vSAIDATIPO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e12zd2_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e11zd2_client=function(){this.executeServerEvent("'INSERIRNOVO'",!0,null,!1,!1)};this.e17zd2_client=function(){this.executeServerEvent("'EXCLUIRITEM'",!0,arguments[0],!1,!1)};this.e13zd2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e18zd2_client=function(){this.executeServerEvent("VVENDEDORID.ISVALID",!0,arguments[0],!1,!1)};this.e19zd2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,11,14,16,18,21,23,25,27,30,32,35,37,39,42,44,47,49,51,56,58,60,62,64,66,68,70,73,75,78,80,82,87,90,92,94,95,96,97,98,99,100,101,107,108,111,112];this.GXLastCtrlId=112;this.GridvendedorContainer=new gx.grid.grid(this,2,"WbpLvl2",93,"Gridvendedor","Gridvendedor","GridvendedorContainer",this.CmpContext,this.IsMasterPage,"hregistrarvendedorsaida",[],!1,1,!1,!0,0,!1,!1,!1,"",0,"px","Novo registro",!1,!1,!0,null,null,!1,"",!1,[1,1,1,1]);t=this.GridvendedorContainer;t.addSingleLineEdit("Vendedorid",94,"vVENDEDORID","Código","","VendedorId","int",0,"px",7,7,"right",null,[],"Vendedorid","VendedorId",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("&Bmpcon","vBMPCON",95,0,"px",17,"px",null,"","","Image","GridColumnImage");t.addSingleLineEdit("Vendedornome",96,"vVENDEDORNOME","Nome do Vendedor","","VendedorNome","svchar",0,"px",40,40,"left",null,[],"Vendedornome","VendedorNome",!0,0,!1,!1,"SemQuebraGrid",1,"");t.addSingleLineEdit("Percvendedor",97,"vPERCVENDEDOR","% Comissão","","PercVendedor","decimal",0,"px",6,6,"right",null,[],"Percvendedor","PercVendedor",!0,2,!1,!1,"Attribute",1,"");t.addSingleLineEdit("Valorcomissao",98,"vVALORCOMISSAO","Valor Comissão","","ValorComissao","decimal",0,"px",22,22,"right",null,[],"Valorcomissao","ValorComissao",!0,2,!1,!1,"Attribute",1,"");t.addBitmap("&Bmpexc","vBMPEXC",99,0,"px",17,"px","e17zd2_client","","Exc","Image","GridColumnImage");t.addSingleLineEdit("Sequenciagrid",100,"vSEQUENCIAGRID","Sequencia Grid","","SequenciaGrid","int",0,"px",4,4,"right",null,[],"Sequenciagrid","SequenciaGrid",!1,0,!1,!1,"Attribute",1,"");this.setGrid(t);this.HDMASKPERCContainer=gx.uc.getNew(this,113,14,"HDMask","HDMASKPERCContainer","Hdmaskperc");i=this.HDMASKPERCContainer;i.setProp("AttachControl","Attachcontrol","","str");i.setProp("Picture","Picture","","str");i.setProp("Default","Default","","str");i.setProp("Version","Version","2.01","str");i.setProp("Reverse","Reverse",!0,"bool");i.setProp("Signed","Signed",!1,"bool");i.setProp("UnmaskedChars","Unmaskedchars","","str");i.setProp("UnmaskedValue","Unmaskedvalue",!1,"bool");i.setProp("FixedChars","Fixedchars","","str");i.setProp("GetValue","Getvalue","","char");i.setProp("ControlType","Controltype","Grid","str");i.setProp("Visible","Visible",!0,"bool");i.setProp("Enabled","Enabled",!0,"boolean");i.setProp("Class","Class","","char");i.setC2ShowFunction(function(n){n.show()});this.setUserControl(i);this.HDMASKVALORContainer=gx.uc.getNew(this,114,14,"HDMask","HDMASKVALORContainer","Hdmaskvalor");r=this.HDMASKVALORContainer;r.setProp("AttachControl","Attachcontrol","","str");r.setProp("Picture","Picture","","str");r.setProp("Default","Default","","str");r.setProp("Version","Version","2.01","str");r.setProp("Reverse","Reverse",!0,"bool");r.setProp("Signed","Signed",!1,"bool");r.setProp("UnmaskedChars","Unmaskedchars","","str");r.setProp("UnmaskedValue","Unmaskedvalue",!1,"bool");r.setProp("FixedChars","Fixedchars","","str");r.setProp("GetValue","Getvalue","","char");r.setProp("ControlType","Controltype","Grid","str");r.setProp("Visible","Visible",!0,"bool");r.setProp("Enabled","Enabled",!0,"boolean");r.setProp("Class","Class","","char");r.setC2ShowFunction(function(n){n.show()});this.setUserControl(r);n[3]={fld:"TAB1",grid:0};n[6]={fld:"TABLE1",grid:0};n[9]={fld:"TEXTBLOCK96",format:0,grid:0};n[11]={fld:"TABLE2",grid:0};n[14]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFILIALID",gxz:"ZV13SaidaFilialId",gxold:"OV13SaidaFilialId",gxvar:"AV13SaidaFilialId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV13SaidaFilialId=gx.num.intval(n)},v2z:function(n){gx.O.ZV13SaidaFilialId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDAFILIALID",gx.O.AV13SaidaFilialId,0)},c2v:function(){gx.O.AV13SaidaFilialId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAFILIALID",".")},nac:gx.falseFn};n[16]={fld:"TEXTBLOCK4",format:0,grid:0};n[18]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAFILIALNOME",gxz:"ZV14SaidaFilialNome",gxold:"OV14SaidaFilialNome",gxvar:"AV14SaidaFilialNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV14SaidaFilialNome=n},v2z:function(n){gx.O.ZV14SaidaFilialNome=n},v2c:function(){gx.fn.setControlValue("vSAIDAFILIALNOME",gx.O.AV14SaidaFilialNome,0)},c2v:function(){gx.O.AV14SaidaFilialNome=this.val()},val:function(){return gx.fn.getControlValue("vSAIDAFILIALNOME")},nac:gx.falseFn};n[21]={fld:"TEXTBLOCK181",format:0,grid:0};n[23]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Saidaid,isvalid:null,rgrid:[],fld:"vSAIDAID",gxz:"ZV20SaidaId",gxold:"OV20SaidaId",gxvar:"AV20SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV20SaidaId=gx.num.intval(n)},v2z:function(n){gx.O.ZV20SaidaId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDAID",gx.O.AV20SaidaId,0)},c2v:function(){gx.O.AV20SaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDAID",".")},nac:gx.falseFn};n[25]={fld:"TXTVLRTOTAL",format:0,grid:0};n[27]={lvl:0,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDAVALORTOTAL",gxz:"ZV23SaidaValorTotal",gxold:"OV23SaidaValorTotal",gxvar:"AV23SaidaValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV23SaidaValorTotal=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV23SaidaValorTotal=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vSAIDAVALORTOTAL",gx.O.AV23SaidaValorTotal,2,",")},c2v:function(){gx.O.AV23SaidaValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vSAIDAVALORTOTAL",".",",")},nac:gx.falseFn};n[30]={fld:"TEXTBLOCK153",format:0,grid:0};n[32]={fld:"TABLE3",grid:0};n[35]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACLIENTEID",gxz:"ZV15SaidaClienteId",gxold:"OV15SaidaClienteId",gxvar:"AV15SaidaClienteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV15SaidaClienteId=gx.num.intval(n)},v2z:function(n){gx.O.ZV15SaidaClienteId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDACLIENTEID",gx.O.AV15SaidaClienteId,0)},c2v:function(){gx.O.AV15SaidaClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDACLIENTEID",".")},nac:gx.falseFn};n[37]={fld:"TEXTBLOCK3",format:0,grid:0};n[39]={lvl:0,type:"svchar",len:40,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACLIENTENOME",gxz:"ZV16SaidaClienteNome",gxold:"OV16SaidaClienteNome",gxvar:"AV16SaidaClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV16SaidaClienteNome=n},v2z:function(n){gx.O.ZV16SaidaClienteNome=n},v2c:function(){gx.fn.setControlValue("vSAIDACLIENTENOME",gx.O.AV16SaidaClienteNome,0)},c2v:function(){gx.O.AV16SaidaClienteNome=this.val()},val:function(){return gx.fn.getControlValue("vSAIDACLIENTENOME")},nac:gx.falseFn};n[42]={fld:"TXTSERIE",format:0,grid:0};n[44]={fld:"TABLE4",grid:0};n[47]={lvl:0,type:"char",len:4,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASERIE",gxz:"ZV21SaidaSerie",gxold:"OV21SaidaSerie",gxvar:"AV21SaidaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV21SaidaSerie=n},v2z:function(n){gx.O.ZV21SaidaSerie=n},v2c:function(){gx.fn.setControlValue("vSAIDASERIE",gx.O.AV21SaidaSerie,0)},c2v:function(){gx.O.AV21SaidaSerie=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASERIE")},nac:gx.falseFn};n[49]={fld:"TEXTBLOCK2",format:0,grid:0};n[51]={lvl:0,type:"char",len:5,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDASUBSERIE",gxz:"ZV22SaidaSubserie",gxold:"OV22SaidaSubserie",gxvar:"AV22SaidaSubserie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV22SaidaSubserie=n},v2z:function(n){gx.O.ZV22SaidaSubserie=n},v2c:function(){gx.fn.setControlValue("vSAIDASUBSERIE",gx.O.AV22SaidaSubserie,0)},c2v:function(){gx.O.AV22SaidaSubserie=this.val()},val:function(){return gx.fn.getControlValue("vSAIDASUBSERIE")},nac:gx.falseFn};n[56]={fld:"TEXTBLOCK177",format:0,grid:0};n[58]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATAEMISSAO",gxz:"ZV17SaidaDataEmissao",gxold:"OV17SaidaDataEmissao",gxvar:"AV17SaidaDataEmissao",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17SaidaDataEmissao=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV17SaidaDataEmissao=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vSAIDADATAEMISSAO",gx.O.AV17SaidaDataEmissao,0)},c2v:function(){gx.O.AV17SaidaDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATAEMISSAO")},nac:gx.falseFn};n[60]={fld:"TEXTBLOCK178",format:0,grid:0};n[62]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDADATA",gxz:"ZV18SaidaData",gxold:"OV18SaidaData",gxvar:"AV18SaidaData",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV18SaidaData=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV18SaidaData=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vSAIDADATA",gx.O.AV18SaidaData,0)},c2v:function(){gx.O.AV18SaidaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vSAIDADATA")},nac:gx.falseFn};n[64]={fld:"TEXTBLOCK154",format:0,grid:0};n[66]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDANODOCUMENTO",gxz:"ZV19SaidaNoDocumento",gxold:"OV19SaidaNoDocumento",gxvar:"AV19SaidaNoDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV19SaidaNoDocumento=gx.num.intval(n)},v2z:function(n){gx.O.ZV19SaidaNoDocumento=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDANODOCUMENTO",gx.O.AV19SaidaNoDocumento,0)},c2v:function(){gx.O.AV19SaidaNoDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDANODOCUMENTO",".")},nac:gx.falseFn};n[68]={fld:"TEXTBLOCK156",format:0,grid:0};n[70]={lvl:0,type:"char",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTPSAIDA",gxz:"ZV24TpSaida",gxold:"OV24TpSaida",gxvar:"AV24TpSaida",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV24TpSaida=n},v2z:function(n){gx.O.ZV24TpSaida=n},v2c:function(){gx.fn.setControlValue("vTPSAIDA",gx.O.AV24TpSaida,0)},c2v:function(){gx.O.AV24TpSaida=this.val()},val:function(){return gx.fn.getControlValue("vTPSAIDA")},nac:gx.falseFn};n[73]={fld:"TXTCFOP",format:0,grid:0};n[75]={fld:"TABLE5",grid:0};n[78]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACFOPCODIGO",gxz:"ZV25SaidaCFOPCodigo",gxold:"OV25SaidaCFOPCodigo",gxvar:"AV25SaidaCFOPCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25SaidaCFOPCodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV25SaidaCFOPCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vSAIDACFOPCODIGO",gx.O.AV25SaidaCFOPCodigo,0)},c2v:function(){gx.O.AV25SaidaCFOPCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSAIDACFOPCODIGO",".")},nac:gx.falseFn};n[80]={fld:"TEXTBLOCK1",format:0,grid:0};n[82]={lvl:0,type:"svchar",len:340,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSAIDACFOPDESCRICAO",gxz:"ZV26SaidaCFOPDescricao",gxold:"OV26SaidaCFOPDescricao",gxvar:"AV26SaidaCFOPDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26SaidaCFOPDescricao=n},v2z:function(n){gx.O.ZV26SaidaCFOPDescricao=n},v2c:function(){gx.fn.setControlValue("vSAIDACFOPDESCRICAO",gx.O.AV26SaidaCFOPDescricao,0)},c2v:function(){gx.O.AV26SaidaCFOPDescricao=this.val()},val:function(){return gx.fn.getControlValue("vSAIDACFOPDESCRICAO")},nac:gx.falseFn};n[87]={fld:"TABLE6",grid:0};n[90]={fld:"ADDVENDEDOR",grid:0};n[92]={fld:"DIV1",format:2,grid:0};n[94]={lvl:2,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,isacc:0,grid:93,gxgrid:this.GridvendedorContainer,fnc:null,isvalid:"e18zd2_client",rgrid:[],fld:"vVENDEDORID",gxz:"ZV31VendedorId",gxold:"OV31VendedorId",gxvar:"AV31VendedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV31VendedorId=gx.num.intval(n)},v2z:function(n){gx.O.ZV31VendedorId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vVENDEDORID",n||gx.fn.currentGridRowImpl(93),gx.O.AV31VendedorId,0)},c2v:function(){gx.O.AV31VendedorId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vVENDEDORID",n||gx.fn.currentGridRowImpl(93),".")},nac:gx.falseFn};n[95]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:93,gxgrid:this.GridvendedorContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV45BmpCon",gxold:"OV45BmpCon",gxvar:"AV45BmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV45BmpCon=n},v2z:function(n){gx.O.ZV45BmpCon=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPCON",n||gx.fn.currentGridRowImpl(93),gx.O.AV45BmpCon,gx.O.AV74Bmpcon_GXI)},c2v:function(){gx.O.AV74Bmpcon_GXI=this.val_GXI();gx.O.AV45BmpCon=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPCON",n||gx.fn.currentGridRowImpl(93))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPCON_GXI",n||gx.fn.currentGridRowImpl(93))},gxvar_GXI:"AV74Bmpcon_GXI",nac:gx.falseFn};n[96]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:0,isacc:0,grid:93,gxgrid:this.GridvendedorContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVENDEDORNOME",gxz:"ZV32VendedorNome",gxold:"OV32VendedorNome",gxvar:"AV32VendedorNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.AV32VendedorNome=n},v2z:function(n){gx.O.ZV32VendedorNome=n},v2c:function(n){gx.fn.setGridControlValue("vVENDEDORNOME",n||gx.fn.currentGridRowImpl(93),gx.O.AV32VendedorNome,0)},c2v:function(){gx.O.AV32VendedorNome=this.val()},val:function(n){return gx.fn.getGridControlValue("vVENDEDORNOME",n||gx.fn.currentGridRowImpl(93))},nac:gx.falseFn};n[97]={lvl:2,type:"decimal",len:6,dec:2,sign:!1,pic:"ZZ9.99",ro:0,isacc:0,grid:93,gxgrid:this.GridvendedorContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPERCVENDEDOR",gxz:"ZV33PercVendedor",gxold:"OV33PercVendedor",gxvar:"AV33PercVendedor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV33PercVendedor=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV33PercVendedor=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("vPERCVENDEDOR",n||gx.fn.currentGridRowImpl(93),gx.O.AV33PercVendedor,2,",")},c2v:function(){gx.O.AV33PercVendedor=this.val()},val:function(n){return gx.fn.getGridDecimalValue("vPERCVENDEDOR",n||gx.fn.currentGridRowImpl(93),".",",")},nac:gx.falseFn};n[98]={lvl:2,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:0,grid:93,gxgrid:this.GridvendedorContainer,fnc:null,isvalid:null,rgrid:[],fld:"vVALORCOMISSAO",gxz:"ZV34ValorComissao",gxold:"OV34ValorComissao",gxvar:"AV34ValorComissao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV34ValorComissao=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV34ValorComissao=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("vVALORCOMISSAO",n||gx.fn.currentGridRowImpl(93),gx.O.AV34ValorComissao,2,",")},c2v:function(){gx.O.AV34ValorComissao=this.val()},val:function(n){return gx.fn.getGridDecimalValue("vVALORCOMISSAO",n||gx.fn.currentGridRowImpl(93),".",",")},nac:gx.falseFn};n[99]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:93,gxgrid:this.GridvendedorContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV39BmpExc",gxold:"OV39BmpExc",gxvar:"AV39BmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV39BmpExc=n},v2z:function(n){gx.O.ZV39BmpExc=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPEXC",n||gx.fn.currentGridRowImpl(93),gx.O.AV39BmpExc,gx.O.AV71Bmpexc_GXI)},c2v:function(){gx.O.AV71Bmpexc_GXI=this.val_GXI();gx.O.AV39BmpExc=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPEXC",n||gx.fn.currentGridRowImpl(93))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPEXC_GXI",n||gx.fn.currentGridRowImpl(93))},gxvar_GXI:"AV71Bmpexc_GXI",nac:gx.falseFn};n[100]={lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:0,grid:93,gxgrid:this.GridvendedorContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSEQUENCIAGRID",gxz:"ZV53SequenciaGrid",gxold:"OV53SequenciaGrid",gxvar:"AV53SequenciaGrid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV53SequenciaGrid=gx.num.intval(n)},v2z:function(n){gx.O.ZV53SequenciaGrid=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vSEQUENCIAGRID",n||gx.fn.currentGridRowImpl(93),gx.O.AV53SequenciaGrid,0)},c2v:function(){gx.O.AV53SequenciaGrid=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vSEQUENCIAGRID",n||gx.fn.currentGridRowImpl(93),".")},nac:gx.falseFn};n[101]={fld:"DIV2",format:2,grid:0};n[107]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSNCONSULTA",gxz:"ZV56SnConsulta",gxold:"OV56SnConsulta",gxvar:"AV56SnConsulta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV56SnConsulta=n},v2z:function(n){gx.O.ZV56SnConsulta=n},v2c:function(){gx.fn.setControlValue("vSNCONSULTA",gx.O.AV56SnConsulta,0)},c2v:function(){gx.O.AV56SnConsulta=this.val()},val:function(){return gx.fn.getControlValue("vSNCONSULTA")},nac:gx.falseFn};n[108]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Vendedorempresaid,isvalid:null,rgrid:[],fld:"vVENDEDOREMPRESAID",gxz:"ZV44VendedorEmpresaId",gxold:"OV44VendedorEmpresaId",gxvar:"AV44VendedorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV44VendedorEmpresaId=n},v2z:function(n){gx.O.ZV44VendedorEmpresaId=n},v2c:function(){gx.fn.setControlValue("vVENDEDOREMPRESAID",gx.O.AV44VendedorEmpresaId,0)},c2v:function(){gx.O.AV44VendedorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vVENDEDOREMPRESAID")},nac:gx.falseFn};n[111]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vQTDECARAC",gxz:"ZV50QtdeCarac",gxold:"OV50QtdeCarac",gxvar:"AV50QtdeCarac",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV50QtdeCarac=gx.num.intval(n)},v2z:function(n){gx.O.ZV50QtdeCarac=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vQTDECARAC",gx.O.AV50QtdeCarac,0)},c2v:function(){gx.O.AV50QtdeCarac=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vQTDECARAC",".")},nac:gx.falseFn};n[112]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Saidatipo,isvalid:null,rgrid:[],fld:"vSAIDATIPO",gxz:"ZV55SaidaTipo",gxold:"OV55SaidaTipo",gxvar:"AV55SaidaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){gx.O.AV55SaidaTipo=n},v2z:function(n){gx.O.ZV55SaidaTipo=n},v2c:function(){gx.fn.setComboBoxValue("vSAIDATIPO",gx.O.AV55SaidaTipo)},c2v:function(){gx.O.AV55SaidaTipo=this.val()},val:function(){return gx.fn.getControlValue("vSAIDATIPO")},nac:gx.falseFn};this.AV13SaidaFilialId=0;this.ZV13SaidaFilialId=0;this.OV13SaidaFilialId=0;this.AV14SaidaFilialNome="";this.ZV14SaidaFilialNome="";this.OV14SaidaFilialNome="";this.AV20SaidaId=0;this.ZV20SaidaId=0;this.OV20SaidaId=0;this.AV23SaidaValorTotal=0;this.ZV23SaidaValorTotal=0;this.OV23SaidaValorTotal=0;this.AV15SaidaClienteId=0;this.ZV15SaidaClienteId=0;this.OV15SaidaClienteId=0;this.AV16SaidaClienteNome="";this.ZV16SaidaClienteNome="";this.OV16SaidaClienteNome="";this.AV21SaidaSerie="";this.ZV21SaidaSerie="";this.OV21SaidaSerie="";this.AV22SaidaSubserie="";this.ZV22SaidaSubserie="";this.OV22SaidaSubserie="";this.AV17SaidaDataEmissao=gx.date.nullDate();this.ZV17SaidaDataEmissao=gx.date.nullDate();this.OV17SaidaDataEmissao=gx.date.nullDate();this.AV18SaidaData=gx.date.nullDate();this.ZV18SaidaData=gx.date.nullDate();this.OV18SaidaData=gx.date.nullDate();this.AV19SaidaNoDocumento=0;this.ZV19SaidaNoDocumento=0;this.OV19SaidaNoDocumento=0;this.AV24TpSaida="";this.ZV24TpSaida="";this.OV24TpSaida="";this.AV25SaidaCFOPCodigo=0;this.ZV25SaidaCFOPCodigo=0;this.OV25SaidaCFOPCodigo=0;this.AV26SaidaCFOPDescricao="";this.ZV26SaidaCFOPDescricao="";this.OV26SaidaCFOPDescricao="";this.ZV31VendedorId=0;this.OV31VendedorId=0;this.ZV45BmpCon="";this.OV45BmpCon="";this.ZV32VendedorNome="";this.OV32VendedorNome="";this.ZV33PercVendedor=0;this.OV33PercVendedor=0;this.ZV34ValorComissao=0;this.OV34ValorComissao=0;this.ZV39BmpExc="";this.OV39BmpExc="";this.ZV53SequenciaGrid=0;this.OV53SequenciaGrid=0;this.AV56SnConsulta="";this.ZV56SnConsulta="";this.OV56SnConsulta="";this.AV44VendedorEmpresaId="";this.ZV44VendedorEmpresaId="";this.OV44VendedorEmpresaId="";this.AV50QtdeCarac=0;this.ZV50QtdeCarac=0;this.OV50QtdeCarac=0;this.AV55SaidaTipo="";this.ZV55SaidaTipo="";this.OV55SaidaTipo="";this.AV13SaidaFilialId=0;this.AV14SaidaFilialNome="";this.AV20SaidaId=0;this.AV23SaidaValorTotal=0;this.AV15SaidaClienteId=0;this.AV16SaidaClienteNome="";this.AV21SaidaSerie="";this.AV22SaidaSubserie="";this.AV17SaidaDataEmissao=gx.date.nullDate();this.AV18SaidaData=gx.date.nullDate();this.AV19SaidaNoDocumento=0;this.AV24TpSaida="";this.AV25SaidaCFOPCodigo=0;this.AV26SaidaCFOPDescricao="";this.AV56SnConsulta="";this.AV44VendedorEmpresaId="";this.AV50QtdeCarac=0;this.AV55SaidaTipo="";this.AV27SaidaEmpresaId="";this.AV30UsuarioId="";this.AV28ModeTela="";this.AV63Tela="";this.AV31VendedorId=0;this.AV45BmpCon="";this.AV32VendedorNome="";this.AV33PercVendedor=0;this.AV34ValorComissao=0;this.AV39BmpExc="";this.AV53SequenciaGrid=0;this.A4307SaidaId=0;this.A4306SaidaEmpresaId="";this.A6305SaidaVendedorId=0;this.A1237VendedorId=0;this.A1229VendedorEmpresaId="";this.A1148VendedorNome="";this.A6266SaidaVendedorUsuarioAlt="";this.A6329SaidaVendedorNome="";this.A6265SaidaVendedorPcComissao=0;this.A6264SaidaVendedorValor=0;this.A6304SaidaVendedorEmpId="";this.A5971SaidaFilialId=0;this.A5972SaidaFilialNome="";this.A5966SaidaClienteId=0;this.A5967SaidaClienteFantasia="";this.A6005SaidaData=gx.date.nullDate();this.A5964SaidaDataEmissao=gx.date.nullDate();this.A5962SaidaSerie="";this.A5963SaidaSubserie="";this.A5960SaidaNoDocumento=0;this.A6012SaidaCFOPCodigo=0;this.A6013SaidaCFOPDescricao="";this.A6628SaidaTransacaoSnDiversosVend="";this.A4308SaidaTipo="";this.A10671SaidaValorICMSDesonerado=0;this.A10677SaidaValorFCPST=0;this.A6092SaidaFreteEntraTotal="";this.A6067SaidaValorFrete=0;this.A6077SaidaValorIPI=0;this.A6069SaidaValorOutrasDespesas=0;this.A6068SaidaValorSeguro=0;this.A6076SaidaValorICMSST=0;this.A6065SaidaValorDesconto=0;this.A6064SaidaValorProduto=0;this.A6063SaidaValorServico=0;this.A6086SaidaValorTotal=0;this.A5965SaidaClienteEmpresaId="";this.A5970SaidaFilialEmpId="";this.A6397SaidaTransacaoEmpresa="";this.A6398SaidaTransacaoCodigo="";this.AV36VendedorSaida=[];this.Events={e12zd2_client:["ENTER",!0],e11zd2_client:["'INSERIRNOVO'",!0],e17zd2_client:["'EXCLUIRITEM'",!0],e13zd2_client:["'FECHAR'",!0],e18zd2_client:["VVENDEDORID.ISVALID",!0],e19zd2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRIDVENDEDOR_nFirstRecordOnPage"},{av:"GRIDVENDEDOR_nEOF"},{av:"AV39BmpExc",fld:"vBMPEXC"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:"vBMPEXC",prop:"Tooltiptext"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Jsonclick")',ctrl:"vBMPEXC",prop:"Jsonclick"},{av:'gx.fn.getCtrlProperty("vVENDEDORID","Enabled")',ctrl:"vVENDEDORID",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vPERCVENDEDOR","Enabled")',ctrl:"vPERCVENDEDOR",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vVALORCOMISSAO","Enabled")',ctrl:"vVALORCOMISSAO",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vBMPEXC","Visible")',ctrl:"vBMPEXC",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vBMPCON","Visible")',ctrl:"vBMPCON",prop:"Visible"},{av:"AV36VendedorSaida",fld:"vVENDEDORSAIDA"},{av:"AV55SaidaTipo",fld:"vSAIDATIPO"}],[{av:'gx.fn.getCtrlProperty("TXTVLRTOTAL","Caption")',ctrl:"TXTVLRTOTAL",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TXTCFOP","Visible")',ctrl:"TXTCFOP",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vSAIDACFOPCODIGO","Visible")',ctrl:"vSAIDACFOPCODIGO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vSAIDACFOPDESCRICAO","Visible")',ctrl:"vSAIDACFOPDESCRICAO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TEXTBLOCK1","Visible")',ctrl:"TEXTBLOCK1",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TXTSERIE","Visible")',ctrl:"TXTSERIE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vSAIDASERIE","Visible")',ctrl:"vSAIDASERIE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vSAIDASUBSERIE","Visible")',ctrl:"vSAIDASUBSERIE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TEXTBLOCK2","Visible")',ctrl:"TEXTBLOCK2",prop:"Visible"}]];this.EvtParms.ENTER=[[{av:"AV42TpErro",fld:"vTPERRO"},{av:"AV43TransacaoSaidaSnDiversosVend",fld:"vTRANSACAOSAIDASNDIVERSOSVEND"},{av:"AV41NumLinha",fld:"vNUMLINHA"},{av:"AV40TotalComissao",fld:"vTOTALCOMISSAO"},{av:"AV23SaidaValorTotal",fld:"vSAIDAVALORTOTAL"},{av:"AV55SaidaTipo",fld:"vSAIDATIPO"},{av:"AV54TotalPercentual",fld:"vTOTALPERCENTUAL"},{av:"AV36VendedorSaida",fld:"vVENDEDORSAIDA"},{av:"AV53SequenciaGrid",fld:"vSEQUENCIAGRID",grid:93},{av:"AV31VendedorId",fld:"vVENDEDORID",grid:93},{av:"AV32VendedorNome",fld:"vVENDEDORNOME",grid:93},{av:"AV33PercVendedor",fld:"vPERCVENDEDOR",grid:93},{av:"AV34ValorComissao",fld:"vVALORCOMISSAO",grid:93},{av:"A1229VendedorEmpresaId",fld:"VENDEDOREMPRESAID"},{av:"AV44VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"A1237VendedorId",fld:"VENDEDORID"},{av:"A1148VendedorNome",fld:"VENDEDORNOME"},{av:"AV57SdtSai",fld:"vSDTSAI"},{av:"A4306SaidaEmpresaId",fld:"SAIDAEMPRESAID"},{av:"AV27SaidaEmpresaId",fld:"vSAIDAEMPRESAID",hsh:!0},{av:"A4307SaidaId",fld:"SAIDAID"},{av:"AV20SaidaId",fld:"vSAIDAID",hsh:!0},{av:"A6305SaidaVendedorId",fld:"SAIDAVENDEDORID"},{av:"AV59EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV5UsrCod",fld:"vUSRCOD"},{av:"AV63Tela",fld:"vTELA",hsh:!0}],[{av:"AV42TpErro",fld:"vTPERRO"},{av:"AV51SnAchou",fld:"vSNACHOU"},{av:"AV77GXV3",fld:"vGXV3"},{av:"AV35VendedorSaidaItem",fld:"vVENDEDORSAIDAITEM"},{av:"AV40TotalComissao",fld:"vTOTALCOMISSAO"},{av:"AV41NumLinha",fld:"vNUMLINHA"},{av:"AV72GXV1",fld:"vGXV1"},{av:"AV54TotalPercentual",fld:"vTOTALPERCENTUAL"},{av:"AV73GXLvl212",fld:"vGXLVL212"},{av:"AV32VendedorNome",fld:"vVENDEDORNOME"},{av:"AV57SdtSai",fld:"vSDTSAI"},{av:"AV58SdtSaidaVendedor",fld:"vSDTSAIDAVENDEDOR"},{av:"AV20SaidaId",fld:"vSAIDAID",hsh:!0},{av:"AV27SaidaEmpresaId",fld:"vSAIDAEMPRESAID",hsh:!0},{av:"AV80GXV5",fld:"vGXV5"}]];this.EvtParms["GRIDVENDEDOR.LOAD"]=[[{av:"AV36VendedorSaida",fld:"vVENDEDORSAIDA"}],[{av:"AV45BmpCon",fld:"vBMPCON"},{av:"AV75GXV2",fld:"vGXV2"},{av:"AV35VendedorSaidaItem",fld:"vVENDEDORSAIDAITEM"},{av:"AV53SequenciaGrid",fld:"vSEQUENCIAGRID"},{av:"AV31VendedorId",fld:"vVENDEDORID"},{av:"AV32VendedorNome",fld:"vVENDEDORNOME"},{av:"AV33PercVendedor",fld:"vPERCVENDEDOR"},{av:"AV34ValorComissao",fld:"vVALORCOMISSAO"}]];this.EvtParms["'INSERIRNOVO'"]=[[{av:"AV36VendedorSaida",fld:"vVENDEDORSAIDA"},{av:"AV53SequenciaGrid",fld:"vSEQUENCIAGRID",grid:93},{av:"AV31VendedorId",fld:"vVENDEDORID",grid:93},{av:"AV32VendedorNome",fld:"vVENDEDORNOME",grid:93},{av:"AV33PercVendedor",fld:"vPERCVENDEDOR",grid:93},{av:"AV34ValorComissao",fld:"vVALORCOMISSAO",grid:93}],[{av:"AV51SnAchou",fld:"vSNACHOU"},{av:"AV77GXV3",fld:"vGXV3"},{av:"AV35VendedorSaidaItem",fld:"vVENDEDORSAIDAITEM"},{av:"AV36VendedorSaida",fld:"vVENDEDORSAIDA"}]];this.EvtParms["'EXCLUIRITEM'"]=[[{av:"AV57SdtSai",fld:"vSDTSAI"},{av:"AV31VendedorId",fld:"vVENDEDORID",grid:93},{av:"AV36VendedorSaida",fld:"vVENDEDORSAIDA"},{av:"AV44VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"AV59EmpresaLogadaId",fld:"vEMPRESALOGADAID"},{av:"AV27SaidaEmpresaId",fld:"vSAIDAEMPRESAID",hsh:!0},{av:"AV20SaidaId",fld:"vSAIDAID",hsh:!0},{av:"AV5UsrCod",fld:"vUSRCOD"},{av:"AV53SequenciaGrid",fld:"vSEQUENCIAGRID",grid:93},{av:"AV32VendedorNome",fld:"vVENDEDORNOME",grid:93},{av:"AV33PercVendedor",fld:"vPERCVENDEDOR",grid:93},{av:"AV34ValorComissao",fld:"vVALORCOMISSAO",grid:93}],[{av:"AV57SdtSai",fld:"vSDTSAI"},{av:"AV37VendedorAux",fld:"vVENDEDORAUX"},{av:"AV38NoAux",fld:"vNOAUX"},{av:"AV78GXV4",fld:"vGXV4"},{av:"AV35VendedorSaidaItem",fld:"vVENDEDORSAIDAITEM"},{av:"AV58SdtSaidaVendedor",fld:"vSDTSAIDAVENDEDOR"},{av:"AV36VendedorSaida",fld:"vVENDEDORSAIDA"},{av:"AV20SaidaId",fld:"vSAIDAID",hsh:!0},{av:"AV27SaidaEmpresaId",fld:"vSAIDAEMPRESAID",hsh:!0},{av:"AV51SnAchou",fld:"vSNACHOU"},{av:"AV77GXV3",fld:"vGXV3"}]];this.EvtParms["'FECHAR'"]=[[{av:"AV63Tela",fld:"vTELA",hsh:!0}],[]];this.EvtParms["VVENDEDORID.ISVALID"]=[[{av:"AV44VendedorEmpresaId",fld:"vVENDEDOREMPRESAID"},{av:"AV31VendedorId",fld:"vVENDEDORID"}],[{av:"AV32VendedorNome",fld:"vVENDEDORNOME"}]];this.setPrompt("&BMPCON",[94]);this.EnterCtrl=["BTNCONFIRMAR"];this.setVCMap("A6063SaidaValorServico","SAIDAVALORSERVICO",0,"decimal");this.setVCMap("A6064SaidaValorProduto","SAIDAVALORPRODUTO",0,"decimal");this.setVCMap("A6065SaidaValorDesconto","SAIDAVALORDESCONTO",0,"decimal");this.setVCMap("A6076SaidaValorICMSST","SAIDAVALORICMSST",0,"decimal");this.setVCMap("A6068SaidaValorSeguro","SAIDAVALORSEGURO",0,"decimal");this.setVCMap("A6069SaidaValorOutrasDespesas","SAIDAVALOROUTRASDESPESAS",0,"decimal");this.setVCMap("A6077SaidaValorIPI","SAIDAVALORIPI",0,"decimal");this.setVCMap("A6067SaidaValorFrete","SAIDAVALORFRETE",0,"decimal");this.setVCMap("A6092SaidaFreteEntraTotal","SAIDAFRETEENTRATOTAL",0,"char");this.setVCMap("A10677SaidaValorFCPST","SAIDAVALORFCPST",0,"decimal");this.setVCMap("A10671SaidaValorICMSDesonerado","SAIDAVALORICMSDESONERADO",0,"decimal");this.setVCMap("A6086SaidaValorTotal","SAIDAVALORTOTAL",0,"decimal");this.setVCMap("AV36VendedorSaida","vVENDEDORSAIDA",0,"CollVendedorSaida.VendedorSaidaItem");this.setVCMap("AV27SaidaEmpresaId","vSAIDAEMPRESAID",0,"char");this.setVCMap("AV30UsuarioId","vUSUARIOID",0,"char");this.setVCMap("AV28ModeTela","vMODETELA",0,"char");this.setVCMap("AV63Tela","vTELA",0,"svchar");this.setVCMap("AV36VendedorSaida","vVENDEDORSAIDA",0,"CollVendedorSaida.VendedorSaidaItem");t.addRefreshingVar({rfrVar:"AV39BmpExc",rfrProp:"Value",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV39BmpExc",rfrProp:"Tooltiptext",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV39BmpExc",rfrProp:"Jsonclick",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV31VendedorId",rfrProp:"Enabled",gxAttId:"Vendedorid"});t.addRefreshingVar({rfrVar:"AV33PercVendedor",rfrProp:"Enabled",gxAttId:"Percvendedor"});t.addRefreshingVar({rfrVar:"AV34ValorComissao",rfrProp:"Enabled",gxAttId:"Valorcomissao"});t.addRefreshingVar({rfrVar:"AV39BmpExc",rfrProp:"Visible",gxAttId:"Bmpexc"});t.addRefreshingVar({rfrVar:"AV45BmpCon",rfrProp:"Visible",gxAttId:"Bmpcon"});t.addRefreshingVar(this.GXValidFnc[112]);t.addRefreshingVar({rfrVar:"AV36VendedorSaida"});this.InitStandaloneVars()});gx.setParentObj(new hregistrarvendedorsaida)
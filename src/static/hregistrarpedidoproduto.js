/**@preserve  GeneXus Java 10_3_12-110051 on February 8, 2021 23:3:29.7
*
gx.evt.autoSkip=!1;gx.define("hregistrarpedidoproduto",!1,function(){var n,t;this.ServerClass="hregistrarpedidoproduto";this.PackageName="";this.setObjectType("web");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.Gx_date=gx.fn.getDateValue("vTODAY");this.AV82SNVenda=gx.fn.getControlValue("vSNVENDA");this.A2964ProdutoEmpresaId=gx.fn.getControlValue("PRODUTOEMPRESAID");this.AV78ProdutoEmpresaId=gx.fn.getControlValue("vPRODUTOEMPRESAID");this.A2965ProdutoId=gx.fn.getIntegerValue("PRODUTOID",".");this.AV80SdtPedidoProduto=gx.fn.getControlValue("vSDTPEDIDOPRODUTO");this.A2961ProdutoDescricaoResumida=gx.fn.getControlValue("PRODUTODESCRICAORESUMIDA");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Validv_Pedidocpcano=function(){try{var n=gx.util.balloon.getNew("vPEDIDOCPCANO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Pedidocpcnumero=function(){try{var n=gx.util.balloon.getNew("vPEDIDOCPCNUMERO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Validv_Pedidocpctipoconcretocodigo=function(){try{var n=gx.util.balloon.getNew("vPEDIDOCPCTIPOCONCRETOCODIGO");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.e162ea2_client=function(){this.executeServerEvent("CTLTIPOCONCRETOTRACOPRODUTOID.ISVALID",!0,arguments[0],!1,!1)};this.e172ea2_client=function(){this.executeServerEvent("CTLQTDEKG.ISVALID",!0,arguments[0],!1,!1)};this.e112ea2_client=function(){this.executeServerEvent("'CONFIRMAR'",!1,null,!1,!1)};this.e122ea2_client=function(){this.executeServerEvent("'FECHAR'",!1,null,!1,!1)};this.e132ea2_client=function(){this.executeServerEvent("'LINHAGRIDPRODUTO'",!0,null,!1,!1)};this.e182ea2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e192ea2_client=function(){this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,5,8,11,14,17,19,22,24,26,29,31,32,36,39,41,44,46,48,51,53,54,58,62,66,70,72,75,77,80,82,86,91,94,96,98,99,100,101,102,103,104,105,106,107,113,117,121,122,123];this.GXLastCtrlId=123;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",97,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hregistrarpedidoproduto",[],!1,1,!0,!0,0,!1,!1,!1,"CollSDTPedidoProduto.SDTPedidoProdutoItem",0,"px","Novo registro",!1,!1,!1,null,null,!1,"AV80SdtPedidoProduto",!1,[1,1,1,1]);t=this.GridContainer;t.addSingleLineEdit("GXV12Q",98,"CTLTIPOCONCRETOTRACOSEQUENCIA","Tipo Concreto Traco Sequencia","","TipoConcretoTracoSequencia","int",0,"px",3,3,"right",null,[],"GXV12Q","GXV12Q",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV12R",99,"CTLTIPOCONCRETOTRACOPRODUTOIDOLD","Tipo Concreto Traco Produto Id","","TipoConcretoTracoProdutoIdOld","int",0,"px",10,10,"right",null,[],"GXV12R","GXV12R",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV12S",100,"CTLTIPOCONCRETOTRACOVLRCLASSIFIC","Tipo Concreto Traco Vlr Classific","","TipoConcretoTracoVlrClassific","char",0,"px",15,15,"left",null,[],"GXV12S","GXV12S",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV12T",101,"CTLTIPOCONCRETOTRACOPRODUTOID","Produto","","TipoConcretoTracoProdutoId","int",0,"px",10,10,"right",null,[],"GXV12T","GXV12T",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("&Bmpproduto","vBMPPRODUTO",102,0,"px",17,"px",null,"","","Image","GridColumnImage");t.addSingleLineEdit("GXV12V",103,"CTLTIPOCONCRETOTRACOPRODUTODESC","Descrição","","TipoConcretoTracoProdutoDesc","svchar",0,"px",40,40,"left",null,[],"GXV12V","GXV12V",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV12W",104,"CTLQTDEKG","Qtde KG","","QtdeKG","decimal",0,"px",8,8,"right",null,[],"GXV12W","GXV12W",!0,2,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV12X",105,"CTLTIPOCONCRETOTRACOQTDEREAL","Qtde M3 Real","","TipoConcretoTracoQtdeReal","decimal",0,"px",8,8,"right",null,[],"GXV12X","GXV12X",!0,2,!1,!1,"Attribute",1,"");t.addSingleLineEdit("GXV12Y",106,"CTLTIPOCONCRETOTRACOQTDECONTABIL","Qtde M3 Contábil","","TipoConcretoTracoQtdeContabil","decimal",0,"px",8,8,"right",null,[],"GXV12Y","GXV12Y",!0,2,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"TABLE2",grid:0};n[5]={fld:"TABLE12",grid:0};n[8]={fld:"TABLE16",grid:0};n[11]={fld:"TABLE17",grid:0};n[14]={fld:"TABLE18",grid:0};n[17]={fld:"TXTFORNEC5",format:0,grid:0};n[19]={fld:"TABLE21",grid:0};n[22]={lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pedidocpcano,isvalid:null,rgrid:[],fld:"vPEDIDOCPCANO",gxz:"ZV17PedidoCPCAno",gxold:"OV17PedidoCPCAno",gxvar:"AV17PedidoCPCAno",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV17PedidoCPCAno=gx.num.intval(n)},v2z:function(n){gx.O.ZV17PedidoCPCAno=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCANO",gx.O.AV17PedidoCPCAno,0)},c2v:function(){gx.O.AV17PedidoCPCAno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCPCANO",".")},nac:gx.falseFn};n[24]={fld:"TEXTBLOCK34",format:0,grid:0};n[26]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Validv_Pedidocpcnumero,isvalid:null,rgrid:[],fld:"vPEDIDOCPCNUMERO",gxz:"ZV25PedidoCPCNumero",gxold:"OV25PedidoCPCNumero",gxvar:"AV25PedidoCPCNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV25PedidoCPCNumero=gx.num.intval(n)},v2z:function(n){gx.O.ZV25PedidoCPCNumero=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCNUMERO",gx.O.AV25PedidoCPCNumero,0)},c2v:function(){gx.O.AV25PedidoCPCNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCPCNUMERO",".")},nac:gx.falseFn};n[29]={fld:"TXTFORNEC7",format:0,grid:0};n[31]={lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCPCOBRACODIGO",gxz:"ZV27PedidoCPCObraCodigo",gxold:"OV27PedidoCPCObraCodigo",gxvar:"AV27PedidoCPCObraCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV27PedidoCPCObraCodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV27PedidoCPCObraCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCOBRACODIGO",gx.O.AV27PedidoCPCObraCodigo,0)},c2v:function(){gx.O.AV27PedidoCPCObraCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCPCOBRACODIGO",".")},nac:gx.falseFn};n[32]={lvl:0,type:"svchar",len:50,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCPCOBRANOME",gxz:"ZV28PedidoCPCObraNome",gxold:"OV28PedidoCPCObraNome",gxvar:"AV28PedidoCPCObraNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV28PedidoCPCObraNome=n},v2z:function(n){gx.O.ZV28PedidoCPCObraNome=n},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCOBRANOME",gx.O.AV28PedidoCPCObraNome,0)},c2v:function(){gx.O.AV28PedidoCPCObraNome=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCPCOBRANOME")},nac:gx.falseFn};n[36]={lvl:0,type:"svchar",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCPCOBRARAZAOSOCIAL",gxz:"ZV66PedidoCPCOBraRazaoSocial",gxold:"OV66PedidoCPCOBraRazaoSocial",gxvar:"AV66PedidoCPCOBraRazaoSocial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV66PedidoCPCOBraRazaoSocial=n},v2z:function(n){gx.O.ZV66PedidoCPCOBraRazaoSocial=n},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCOBRARAZAOSOCIAL",gx.O.AV66PedidoCPCOBraRazaoSocial,0)},c2v:function(){gx.O.AV66PedidoCPCOBraRazaoSocial=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCPCOBRARAZAOSOCIAL")},nac:gx.falseFn};n[39]={fld:"TXTFORNEC8",format:0,grid:0};n[41]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCPCDATA",gxz:"ZV20PedidoCPCData",gxold:"OV20PedidoCPCData",gxvar:"AV20PedidoCPCData",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV20PedidoCPCData=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV20PedidoCPCData=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCDATA",gx.O.AV20PedidoCPCData,0)},c2v:function(){gx.O.AV20PedidoCPCData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vPEDIDOCPCDATA")},nac:gx.falseFn};n[44]={fld:"TXTFORNEC9",format:0,grid:0};n[46]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCPCNUMEROLACRE",gxz:"ZV26PedidoCPCNumeroLacre",gxold:"OV26PedidoCPCNumeroLacre",gxvar:"AV26PedidoCPCNumeroLacre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV26PedidoCPCNumeroLacre=gx.num.intval(n)},v2z:function(n){gx.O.ZV26PedidoCPCNumeroLacre=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCNUMEROLACRE",gx.O.AV26PedidoCPCNumeroLacre,0)},c2v:function(){gx.O.AV26PedidoCPCNumeroLacre=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCPCNUMEROLACRE",".")},nac:gx.falseFn};n[48]={fld:"TABLE19",grid:0};n[51]={fld:"TXTCFOP3",format:0,grid:0};n[53]={lvl:0,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Pedidocpctipoconcretocodigo,isvalid:null,rgrid:[],fld:"vPEDIDOCPCTIPOCONCRETOCODIGO",gxz:"ZV31PedidoCPCTipoConcretoCodigo",gxold:"OV31PedidoCPCTipoConcretoCodigo",gxvar:"AV31PedidoCPCTipoConcretoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV31PedidoCPCTipoConcretoCodigo=gx.num.intval(n)},v2z:function(n){gx.O.ZV31PedidoCPCTipoConcretoCodigo=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCTIPOCONCRETOCODIGO",gx.O.AV31PedidoCPCTipoConcretoCodigo,0)},c2v:function(){gx.O.AV31PedidoCPCTipoConcretoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCPCTIPOCONCRETOCODIGO",".")},nac:gx.falseFn};n[54]={lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCPCTIPOCONCRETODESC",gxz:"ZV32PedidoCPCTipoConcretoDesc",gxold:"OV32PedidoCPCTipoConcretoDesc",gxvar:"AV32PedidoCPCTipoConcretoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV32PedidoCPCTipoConcretoDesc=n},v2z:function(n){gx.O.ZV32PedidoCPCTipoConcretoDesc=n},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCTIPOCONCRETODESC",gx.O.AV32PedidoCPCTipoConcretoDesc,0)},c2v:function(){gx.O.AV32PedidoCPCTipoConcretoDesc=this.val()},val:function(){return gx.fn.getControlValue("vPEDIDOCPCTIPOCONCRETODESC")},nac:gx.falseFn};n[58]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOCONDESC",gxz:"ZV55TipoConcretoConDesc",gxold:"OV55TipoConcretoConDesc",gxvar:"AV55TipoConcretoConDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV55TipoConcretoConDesc=n},v2z:function(n){gx.O.ZV55TipoConcretoConDesc=n},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOCONDESC",gx.O.AV55TipoConcretoConDesc,0)},c2v:function(){gx.O.AV55TipoConcretoConDesc=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETOCONDESC")},nac:gx.falseFn};n[62]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOAGREGRAUDODESC",gxz:"ZV53TipoConcretoAgreGraudoDesc",gxold:"OV53TipoConcretoAgreGraudoDesc",gxvar:"AV53TipoConcretoAgreGraudoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV53TipoConcretoAgreGraudoDesc=n},v2z:function(n){gx.O.ZV53TipoConcretoAgreGraudoDesc=n},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOAGREGRAUDODESC",gx.O.AV53TipoConcretoAgreGraudoDesc,0)},c2v:function(){gx.O.AV53TipoConcretoAgreGraudoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETOAGREGRAUDODESC")},nac:gx.falseFn};n[66]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOCIMENTODESC",gxz:"ZV54TipoConcretoCimentoDesc",gxold:"OV54TipoConcretoCimentoDesc",gxvar:"AV54TipoConcretoCimentoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV54TipoConcretoCimentoDesc=n},v2z:function(n){gx.O.ZV54TipoConcretoCimentoDesc=n},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOCIMENTODESC",gx.O.AV54TipoConcretoCimentoDesc,0)},c2v:function(){gx.O.AV54TipoConcretoCimentoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETOCIMENTODESC")},nac:gx.falseFn};n[70]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETOSLUMPDESC",gxz:"ZV58TipoConcretoSlumpDesc",gxold:"OV58TipoConcretoSlumpDesc",gxvar:"AV58TipoConcretoSlumpDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV58TipoConcretoSlumpDesc=n},v2z:function(n){gx.O.ZV58TipoConcretoSlumpDesc=n},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETOSLUMPDESC",gx.O.AV58TipoConcretoSlumpDesc,0)},c2v:function(){gx.O.AV58TipoConcretoSlumpDesc=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETOSLUMPDESC")},nac:gx.falseFn};n[72]={fld:"TABLE20",grid:0};n[75]={fld:"TXTCFOP6",format:0,grid:0};n[77]={lvl:0,type:"decimal",len:9,dec:3,sign:!1,pic:"ZZZZ9.999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCPCQTDECONCRETO",gxz:"ZV29PedidoCPCQtdeConcreto",gxold:"OV29PedidoCPCQtdeConcreto",gxvar:"AV29PedidoCPCQtdeConcreto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV29PedidoCPCQtdeConcreto=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV29PedidoCPCQtdeConcreto=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vPEDIDOCPCQTDECONCRETO",gx.O.AV29PedidoCPCQtdeConcreto,3,",")},c2v:function(){gx.O.AV29PedidoCPCQtdeConcreto=this.val()},val:function(){return gx.fn.getDecimalValue("vPEDIDOCPCQTDECONCRETO",".",",")},nac:gx.falseFn};n[80]={fld:"TXTCFOP10",format:0,grid:0};n[82]={lvl:0,type:"decimal",len:7,dec:1,sign:!1,pic:"ZZZZ9.9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETORESISTENCIA",gxz:"ZV57TipoConcretoresistencia",gxold:"OV57TipoConcretoresistencia",gxvar:"AV57TipoConcretoresistencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV57TipoConcretoresistencia=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV57TipoConcretoresistencia=gx.fn.toDecimalValue(n,".",",")},v2c:function(){gx.fn.setDecimalValue("vTIPOCONCRETORESISTENCIA",gx.O.AV57TipoConcretoresistencia,1,",")},c2v:function(){gx.O.AV57TipoConcretoresistencia=this.val()},val:function(){return gx.fn.getDecimalValue("vTIPOCONCRETORESISTENCIA",".",",")},nac:gx.falseFn};n[86]={lvl:0,type:"svchar",len:30,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vTIPOCONCRETODIMENSAODESC",gxz:"ZV56TipoConcretoDimensaoDesc",gxold:"OV56TipoConcretoDimensaoDesc",gxvar:"AV56TipoConcretoDimensaoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV56TipoConcretoDimensaoDesc=n},v2z:function(n){gx.O.ZV56TipoConcretoDimensaoDesc=n},v2c:function(){gx.fn.setControlValue("vTIPOCONCRETODIMENSAODESC",gx.O.AV56TipoConcretoDimensaoDesc,0)},c2v:function(){gx.O.AV56TipoConcretoDimensaoDesc=this.val()},val:function(){return gx.fn.getControlValue("vTIPOCONCRETODIMENSAODESC")},nac:gx.falseFn};n[91]={fld:"TABLE1",grid:0};n[94]={fld:"INCLUIPRODUTO",grid:0};n[96]={fld:"DIV1",format:2,grid:0};n[98]={lvl:2,type:"int",len:3,dec:0,sign:!1,pic:"ZZ9",ro:1,isacc:0,grid:97,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOCONCRETOTRACOSEQUENCIA",gxz:"ZV95GXV12Q",gxold:"OV95GXV12Q",gxvar:"GXV12Q",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV12Q=gx.num.intval(n)},v2z:function(n){gx.O.ZV95GXV12Q=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLTIPOCONCRETOTRACOSEQUENCIA",n||gx.fn.currentGridRowImpl(97),gx.O.GXV12Q,0)},c2v:function(){gx.O.GXV12Q=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLTIPOCONCRETOTRACOSEQUENCIA",n||gx.fn.currentGridRowImpl(97),".")},nac:gx.falseFn};n[99]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:97,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOCONCRETOTRACOPRODUTOIDOLD",gxz:"ZV96GXV12R",gxold:"OV96GXV12R",gxvar:"GXV12R",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV12R=gx.num.intval(n)},v2z:function(n){gx.O.ZV96GXV12R=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLTIPOCONCRETOTRACOPRODUTOIDOLD",n||gx.fn.currentGridRowImpl(97),gx.O.GXV12R,0)},c2v:function(){gx.O.GXV12R=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLTIPOCONCRETOTRACOPRODUTOIDOLD",n||gx.fn.currentGridRowImpl(97),".")},nac:gx.falseFn};n[100]={lvl:2,type:"char",len:15,dec:0,sign:!1,ro:1,isacc:0,grid:97,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOCONCRETOTRACOVLRCLASSIFIC",gxz:"ZV97GXV12S",gxold:"OV97GXV12S",gxvar:"GXV12S",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV12S=n},v2z:function(n){gx.O.ZV97GXV12S=n},v2c:function(n){gx.fn.setGridControlValue("CTLTIPOCONCRETOTRACOVLRCLASSIFIC",n||gx.fn.currentGridRowImpl(97),gx.O.GXV12S,0)},c2v:function(){gx.O.GXV12S=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLTIPOCONCRETOTRACOVLRCLASSIFIC",n||gx.fn.currentGridRowImpl(97))},nac:gx.falseFn};n[101]={lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:97,gxgrid:this.GridContainer,fnc:null,isvalid:"e162ea2_client",rgrid:[],fld:"CTLTIPOCONCRETOTRACOPRODUTOID",gxz:"ZV98GXV12T",gxold:"OV98GXV12T",gxvar:"GXV12T",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV12T=gx.num.intval(n)},v2z:function(n){gx.O.ZV98GXV12T=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("CTLTIPOCONCRETOTRACOPRODUTOID",n||gx.fn.currentGridRowImpl(97),gx.O.GXV12T,0)},c2v:function(){gx.O.GXV12T=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("CTLTIPOCONCRETOTRACOPRODUTOID",n||gx.fn.currentGridRowImpl(97),".")},nac:gx.falseFn};n[102]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:97,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPPRODUTO",gxz:"ZV68bmpProduto",gxold:"OV68bmpProduto",gxvar:"AV68bmpProduto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV68bmpProduto=n},v2z:function(n){gx.O.ZV68bmpProduto=n},v2c:function(n){gx.fn.setGridMultimediaValue("vBMPPRODUTO",n||gx.fn.currentGridRowImpl(97),gx.O.AV68bmpProduto,gx.O.AV105Bmpproduto_GXI)},c2v:function(){gx.O.AV105Bmpproduto_GXI=this.val_GXI();gx.O.AV68bmpProduto=this.val()},val:function(n){return gx.fn.getGridControlValue("vBMPPRODUTO",n||gx.fn.currentGridRowImpl(97))},val_GXI:function(n){return gx.fn.getGridControlValue("vBMPPRODUTO_GXI",n||gx.fn.currentGridRowImpl(97))},gxvar_GXI:"AV105Bmpproduto_GXI",nac:gx.falseFn};n[103]={lvl:2,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:0,grid:97,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOCONCRETOTRACOPRODUTODESC",gxz:"ZV99GXV12V",gxold:"OV99GXV12V",gxvar:"GXV12V",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.GXV12V=n},v2z:function(n){gx.O.ZV99GXV12V=n},v2c:function(n){gx.fn.setGridControlValue("CTLTIPOCONCRETOTRACOPRODUTODESC",n||gx.fn.currentGridRowImpl(97),gx.O.GXV12V,0)},c2v:function(){gx.O.GXV12V=this.val()},val:function(n){return gx.fn.getGridControlValue("CTLTIPOCONCRETOTRACOPRODUTODESC",n||gx.fn.currentGridRowImpl(97))},nac:gx.falseFn};n[104]={lvl:2,type:"decimal",len:8,dec:2,sign:!1,pic:"ZZZZ9.99",ro:1,isacc:0,grid:97,gxgrid:this.GridContainer,fnc:null,isvalid:"e172ea2_client",rgrid:[],fld:"CTLQTDEKG",gxz:"ZV100GXV12W",gxold:"OV100GXV12W",gxvar:"GXV12W",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV12W=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV100GXV12W=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("CTLQTDEKG",n||gx.fn.currentGridRowImpl(97),gx.O.GXV12W,2,",")},c2v:function(){gx.O.GXV12W=this.val()},val:function(n){return gx.fn.getGridDecimalValue("CTLQTDEKG",n||gx.fn.currentGridRowImpl(97),".",",")},nac:gx.falseFn};n[105]={lvl:2,type:"decimal",len:8,dec:2,sign:!1,pic:"ZZZZ9.99",ro:1,isacc:0,grid:97,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOCONCRETOTRACOQTDEREAL",gxz:"ZV101GXV12X",gxold:"OV101GXV12X",gxvar:"GXV12X",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV12X=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV101GXV12X=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("CTLTIPOCONCRETOTRACOQTDEREAL",n||gx.fn.currentGridRowImpl(97),gx.O.GXV12X,2,",")},c2v:function(){gx.O.GXV12X=this.val()},val:function(n){return gx.fn.getGridDecimalValue("CTLTIPOCONCRETOTRACOQTDEREAL",n||gx.fn.currentGridRowImpl(97),".",",")},nac:gx.falseFn};n[106]={lvl:2,type:"decimal",len:8,dec:2,sign:!1,pic:"ZZZZ9.99",ro:1,isacc:0,grid:97,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CTLTIPOCONCRETOTRACOQTDECONTABIL",gxz:"ZV102GXV12Y",gxold:"OV102GXV12Y",gxvar:"GXV12Y",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.GXV12Y=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.ZV102GXV12Y=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("CTLTIPOCONCRETOTRACOQTDECONTABIL",n||gx.fn.currentGridRowImpl(97),gx.O.GXV12Y,2,",")},c2v:function(){gx.O.GXV12Y=this.val()},val:function(n){return gx.fn.getGridDecimalValue("CTLTIPOCONCRETOTRACOQTDECONTABIL",n||gx.fn.currentGridRowImpl(97),".",",")},nac:gx.falseFn};n[107]={fld:"DIV2",format:2,grid:0};n[113]={fld:"TABLE13",grid:0};n[117]={fld:"TABLE14",grid:0};n[121]={lvl:0,type:"int",len:2,dec:0,sign:!1,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vINTAUX",gxz:"ZV72IntAux",gxold:"OV72IntAux",gxvar:"AV72IntAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV72IntAux=gx.num.intval(n)},v2z:function(n){gx.O.ZV72IntAux=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vINTAUX",gx.O.AV72IntAux,0)},c2v:function(){gx.O.AV72IntAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vINTAUX",".")},nac:gx.falseFn};n[122]={lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vCHARAUX",gxz:"ZV69CharAux",gxold:"OV69CharAux",gxvar:"AV69CharAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV69CharAux=n},v2z:function(n){gx.O.ZV69CharAux=n},v2c:function(){gx.fn.setControlValue("vCHARAUX",gx.O.AV69CharAux,0)},c2v:function(){gx.O.AV69CharAux=this.val()},val:function(){return gx.fn.getControlValue("vCHARAUX")},nac:gx.falseFn};n[123]={lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPEDIDOCPCSAIDAID",gxz:"ZV67PedidoCPCSaidaId",gxold:"OV67PedidoCPCSaidaId",gxvar:"AV67PedidoCPCSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV67PedidoCPCSaidaId=gx.num.intval(n)},v2z:function(n){gx.O.ZV67PedidoCPCSaidaId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vPEDIDOCPCSAIDAID",gx.O.AV67PedidoCPCSaidaId,0)},c2v:function(){gx.O.AV67PedidoCPCSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPEDIDOCPCSAIDAID",".")},nac:gx.falseFn};this.AV17PedidoCPCAno=0;this.ZV17PedidoCPCAno=0;this.OV17PedidoCPCAno=0;this.AV25PedidoCPCNumero=0;this.ZV25PedidoCPCNumero=0;this.OV25PedidoCPCNumero=0;this.AV27PedidoCPCObraCodigo=0;this.ZV27PedidoCPCObraCodigo=0;this.OV27PedidoCPCObraCodigo=0;this.AV28PedidoCPCObraNome="";this.ZV28PedidoCPCObraNome="";this.OV28PedidoCPCObraNome="";this.AV66PedidoCPCOBraRazaoSocial="";this.ZV66PedidoCPCOBraRazaoSocial="";this.OV66PedidoCPCOBraRazaoSocial="";this.AV20PedidoCPCData=gx.date.nullDate();this.ZV20PedidoCPCData=gx.date.nullDate();this.OV20PedidoCPCData=gx.date.nullDate();this.AV26PedidoCPCNumeroLacre=0;this.ZV26PedidoCPCNumeroLacre=0;this.OV26PedidoCPCNumeroLacre=0;this.AV31PedidoCPCTipoConcretoCodigo=0;this.ZV31PedidoCPCTipoConcretoCodigo=0;this.OV31PedidoCPCTipoConcretoCodigo=0;this.AV32PedidoCPCTipoConcretoDesc="";this.ZV32PedidoCPCTipoConcretoDesc="";this.OV32PedidoCPCTipoConcretoDesc="";this.AV55TipoConcretoConDesc="";this.ZV55TipoConcretoConDesc="";this.OV55TipoConcretoConDesc="";this.AV53TipoConcretoAgreGraudoDesc="";this.ZV53TipoConcretoAgreGraudoDesc="";this.OV53TipoConcretoAgreGraudoDesc="";this.AV54TipoConcretoCimentoDesc="";this.ZV54TipoConcretoCimentoDesc="";this.OV54TipoConcretoCimentoDesc="";this.AV58TipoConcretoSlumpDesc="";this.ZV58TipoConcretoSlumpDesc="";this.OV58TipoConcretoSlumpDesc="";this.AV29PedidoCPCQtdeConcreto=0;this.ZV29PedidoCPCQtdeConcreto=0;this.OV29PedidoCPCQtdeConcreto=0;this.AV57TipoConcretoresistencia=0;this.ZV57TipoConcretoresistencia=0;this.OV57TipoConcretoresistencia=0;this.AV56TipoConcretoDimensaoDesc="";this.ZV56TipoConcretoDimensaoDesc="";this.OV56TipoConcretoDimensaoDesc="";this.ZV95GXV12Q=0;this.OV95GXV12Q=0;this.ZV96GXV12R=0;this.OV96GXV12R=0;this.ZV97GXV12S="";this.OV97GXV12S="";this.ZV98GXV12T=0;this.OV98GXV12T=0;this.ZV68bmpProduto="";this.OV68bmpProduto="";this.ZV99GXV12V="";this.OV99GXV12V="";this.ZV100GXV12W=0;this.OV100GXV12W=0;this.ZV101GXV12X=0;this.OV101GXV12X=0;this.ZV102GXV12Y=0;this.OV102GXV12Y=0;this.AV72IntAux=0;this.ZV72IntAux=0;this.OV72IntAux=0;this.AV69CharAux="";this.ZV69CharAux="";this.OV69CharAux="";this.AV67PedidoCPCSaidaId=0;this.ZV67PedidoCPCSaidaId=0;this.OV67PedidoCPCSaidaId=0;this.AV17PedidoCPCAno=0;this.AV25PedidoCPCNumero=0;this.AV27PedidoCPCObraCodigo=0;this.AV28PedidoCPCObraNome="";this.AV66PedidoCPCOBraRazaoSocial="";this.AV20PedidoCPCData=gx.date.nullDate();this.AV26PedidoCPCNumeroLacre=0;this.AV31PedidoCPCTipoConcretoCodigo=0;this.AV32PedidoCPCTipoConcretoDesc="";this.AV55TipoConcretoConDesc="";this.AV53TipoConcretoAgreGraudoDesc="";this.AV54TipoConcretoCimentoDesc="";this.AV58TipoConcretoSlumpDesc="";this.AV29PedidoCPCQtdeConcreto=0;this.AV57TipoConcretoresistencia=0;this.AV56TipoConcretoDimensaoDesc="";this.AV72IntAux=0;this.AV69CharAux="";this.AV67PedidoCPCSaidaId=0;this.GXV12Q=0;this.GXV12R=0;this.GXV12S="";this.GXV12T=0;this.AV68bmpProduto="";this.GXV12V="";this.GXV12W=0;this.GXV12X=0;this.GXV12Y=0;this.A2965ProdutoId=0;this.A2964ProdutoEmpresaId="";this.A3400ProdutoClassificacaoPrincipal="";this.A11321TipoConcretoCodigo=0;this.A11449TipoConcretoEmpresaId="";this.A11386TipoConcretoConDesc="";this.A11388TipoConcretoAgreGraudoDesc="";this.A11390TipoConcretoCimentoDesc="";this.A11391TipoConcretoSlumpDesc="";this.A11389TipoConcretoDimensaoDesc="";this.A11392TipoConcretoResistencia=0;this.A11461TipoConcretoConEmpId="";this.A11322TipoConcretoConTipo="";this.A11323TipoConcretoConCod="";this.A11462TipoConcretoAgreGraudoEmpId="";this.A11324TipoConcretoAgreGraudoTipo="";this.A11325TipoConcretoAgreGraudoCod="";this.A11463TipoConcretoDimensaoEmpId="";this.A11326TipoConcretoDimensaoTipo="";this.A11327TipoConcretoDimensaoCod="";this.A11464TipoConcretoCimentoEmpId="";this.A11328TipoConcretoCimentoTipo="";this.A11329TipoConcretoCimentoCod="";this.A11465TipoConcretoSlumpEmpId="";this.A11330TipoConcretoSlumpTipo="";this.A11331TipoConcretoSlumpCod="";this.A11340PedidoCPCNumero=0;this.A11339PedidoCPCAno=0;this.A11450PedidoCPCEmpresaId="";this.A11353PedidoCPCData=gx.date.nullDate();this.A11358PedidoCPCNumeroLacre=0;this.A11344PedidoCPCObraCodigo=0;this.A11371PedidoCPCObraNome="";this.A11444PedidoCPCOBraRazaoSocial="";this.A11349PedidoCPCTipoConcretoCodigo=0;this.A11373PedidoCPCTipoConcretoDesc="";this.A11367PedidoCPCQtdeConcreto=0;this.A11451PedidoCPCTipoConcretoEmpresaId="";this.A11343PedidoCPCObraEmpresaId="";this.A11317ObraPessoaEmpresaId="";this.A227EmpresaPessoasEmpresaId="";this.A11364PedidoCPCObraPessoaId=0;this.A11453PedidoCPCProdutoProdId=0;this.A11475PedidoCPCProdutoQuantidade=0;this.A11474PedidoCPCProdutoQtdeContabil=0;this.A11540PedidoCPCSequencia=0;this.A11335TipoConcretoTracoProdutoId=0;this.A11404TipoConcretoTracoProdutoDesc="";this.A11402TipoConcretoTracoQtdeReal=0;this.A11440TipoConcretoTracoQtdeContabil=0;this.A11403TipoConcretoTracoVlrClassific="";this.A11333TipoConcretoTracoSequencia=0;this.A11334TipoConcretoTracoProdutoEmpId="";this.A11342PedidoCPCSaidaId=0;this.A3887ProdutoFatorConversaoGer=0;this.A2961ProdutoDescricaoResumida="";this.AV78ProdutoEmpresaId="";this.AV80SdtPedidoProduto=[];this.Gx_mode="";this.Events={e162ea2_client:["CTLTIPOCONCRETOTRACOPRODUTOID.ISVALID",!0],e172ea2_client:["CTLQTDEKG.ISVALID",!0],e112ea2_client:["'CONFIRMAR'",!0],e122ea2_client:["'FECHAR'",!0],e132ea2_client:["'LINHAGRIDPRODUTO'",!0],e182ea2_client:["ENTER",!0],e192ea2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV68bmpProduto",fld:"vBMPPRODUTO"},{av:'gx.fn.getCtrlProperty("vBMPPRODUTO","Tooltiptext")',ctrl:"vBMPPRODUTO",prop:"Tooltiptext"},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV78ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"AV80SdtPedidoProduto",fld:"vSDTPEDIDOPRODUTO",grid:97},{av:"A2961ProdutoDescricaoResumida",fld:"PRODUTODESCRICAORESUMIDA"},{av:"AV67PedidoCPCSaidaId",fld:"vPEDIDOCPCSAIDAID"}],[]];this.EvtParms["GRID.LOAD"]=[[{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV78ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"AV80SdtPedidoProduto",fld:"vSDTPEDIDOPRODUTO",grid:97},{av:"A2961ProdutoDescricaoResumida",fld:"PRODUTODESCRICAORESUMIDA"},{av:"AV67PedidoCPCSaidaId",fld:"vPEDIDOCPCSAIDAID"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV68bmpProduto",fld:"vBMPPRODUTO"},{av:'gx.fn.getCtrlProperty("vBMPPRODUTO","Tooltiptext")',ctrl:"vBMPPRODUTO",prop:"Tooltiptext"}],[{av:"AV80SdtPedidoProduto",fld:"vSDTPEDIDOPRODUTO",grid:97},{ctrl:"CTLTIPOCONCRETOTRACOQTDEREAL",prop:"Enabled"},{ctrl:"CTLTIPOCONCRETOTRACOPRODUTOID",prop:"Enabled"},{ctrl:"CTLTIPOCONCRETOTRACOQTDECONTABIL",prop:"Enabled"},{ctrl:"CTLQTDEKG",prop:"Enabled"},{av:'gx.fn.getCtrlProperty("vBMPPRODUTO","Visible")',ctrl:"vBMPPRODUTO",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vBMPPRODUTO","Enabled")',ctrl:"vBMPPRODUTO",prop:"Enabled"}]];this.EvtParms["CTLTIPOCONCRETOTRACOPRODUTOID.ISVALID"]=[[{av:"AV80SdtPedidoProduto",fld:"vSDTPEDIDOPRODUTO",grid:97},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV78ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"A3400ProdutoClassificacaoPrincipal",fld:"PRODUTOCLASSIFICACAOPRINCIPAL"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV68bmpProduto",fld:"vBMPPRODUTO"},{av:'gx.fn.getCtrlProperty("vBMPPRODUTO","Tooltiptext")',ctrl:"vBMPPRODUTO",prop:"Tooltiptext"},{av:"A2961ProdutoDescricaoResumida",fld:"PRODUTODESCRICAORESUMIDA"},{av:"AV67PedidoCPCSaidaId",fld:"vPEDIDOCPCSAIDAID"}],[{av:"AV107GXLvl81",fld:"vGXLVL81"},{av:"AV80SdtPedidoProduto",fld:"vSDTPEDIDOPRODUTO",grid:97}]];this.EvtParms["CTLQTDEKG.ISVALID"]=[[{av:"AV80SdtPedidoProduto",fld:"vSDTPEDIDOPRODUTO",grid:97},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV78ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"A3887ProdutoFatorConversaoGer",fld:"PRODUTOFATORCONVERSAOGER"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV68bmpProduto",fld:"vBMPPRODUTO"},{av:'gx.fn.getCtrlProperty("vBMPPRODUTO","Tooltiptext")',ctrl:"vBMPPRODUTO",prop:"Tooltiptext"},{av:"A2961ProdutoDescricaoResumida",fld:"PRODUTODESCRICAORESUMIDA"},{av:"AV67PedidoCPCSaidaId",fld:"vPEDIDOCPCSAIDAID"}],[{av:"AV87ValorParametro",fld:"vVALORPARAMETRO"},{av:"AV86FatorQtdeContabil",fld:"vFATORQTDECONTABIL"},{av:"AV85ProdutoFatorConversaoGer",fld:"vPRODUTOFATORCONVERSAOGER"},{av:"AV88QuantidadeReal",fld:"vQUANTIDADEREAL"},{av:"AV80SdtPedidoProduto",fld:"vSDTPEDIDOPRODUTO",grid:97}]];this.EvtParms["'CONFIRMAR'"]=[[{av:"AV67PedidoCPCSaidaId",fld:"vPEDIDOCPCSAIDAID"},{av:"Gx_mode",fld:"vMODE"},{av:"AV75PedidoCPCEmpresaId",fld:"vPEDIDOCPCEMPRESAID"},{av:"AV17PedidoCPCAno",fld:"vPEDIDOCPCANO"},{av:"AV25PedidoCPCNumero",fld:"vPEDIDOCPCNUMERO"},{av:"AV80SdtPedidoProduto",fld:"vSDTPEDIDOPRODUTO",grid:97},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV78ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"A3400ProdutoClassificacaoPrincipal",fld:"PRODUTOCLASSIFICACAOPRINCIPAL"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV68bmpProduto",fld:"vBMPPRODUTO"},{av:'gx.fn.getCtrlProperty("vBMPPRODUTO","Tooltiptext")',ctrl:"vBMPPRODUTO",prop:"Tooltiptext"},{av:"A2961ProdutoDescricaoResumida",fld:"PRODUTODESCRICAORESUMIDA"}],[{av:"AV52SnErro",fld:"vSNERRO"},{av:"AV80SdtPedidoProduto",fld:"vSDTPEDIDOPRODUTO",grid:97},{av:"AV25PedidoCPCNumero",fld:"vPEDIDOCPCNUMERO"},{av:"AV17PedidoCPCAno",fld:"vPEDIDOCPCANO"},{av:"AV75PedidoCPCEmpresaId",fld:"vPEDIDOCPCEMPRESAID"},{av:"AV114GXV2",fld:"vGXV2"},{av:"AV81SdtPedidoProdutoItem",fld:"vSDTPEDIDOPRODUTOITEM"},{av:"AV115GXLvl246",fld:"vGXLVL246"}]];this.EvtParms["'FECHAR'"]=[[{av:"Gx_mode",fld:"vMODE"},{av:"AV25PedidoCPCNumero",fld:"vPEDIDOCPCNUMERO"},{av:"AV17PedidoCPCAno",fld:"vPEDIDOCPCANO"}],[]];this.EvtParms["'LINHAGRIDPRODUTO'"]=[[{av:"AV80SdtPedidoProduto",fld:"vSDTPEDIDOPRODUTO",grid:97},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{av:"AV68bmpProduto",fld:"vBMPPRODUTO"},{av:'gx.fn.getCtrlProperty("vBMPPRODUTO","Tooltiptext")',ctrl:"vBMPPRODUTO",prop:"Tooltiptext"},{av:"A2964ProdutoEmpresaId",fld:"PRODUTOEMPRESAID"},{av:"AV78ProdutoEmpresaId",fld:"vPRODUTOEMPRESAID"},{av:"A2965ProdutoId",fld:"PRODUTOID"},{av:"A2961ProdutoDescricaoResumida",fld:"PRODUTODESCRICAORESUMIDA"},{av:"AV67PedidoCPCSaidaId",fld:"vPEDIDOCPCSAIDAID"}],[{av:"AV81SdtPedidoProdutoItem",fld:"vSDTPEDIDOPRODUTOITEM"},{av:"AV80SdtPedidoProduto",fld:"vSDTPEDIDOPRODUTO",grid:97}]];this.setPrompt("&BMPPRODUTO",[121,121,121,122,122,121]);this.setVCMap("Gx_date","vTODAY",0,"date");this.setVCMap("AV82SNVenda","vSNVENDA",0,"char");this.setVCMap("A2964ProdutoEmpresaId","PRODUTOEMPRESAID",0,"char");this.setVCMap("AV78ProdutoEmpresaId","vPRODUTOEMPRESAID",0,"char");this.setVCMap("A2965ProdutoId","PRODUTOID",0,"int");this.setVCMap("AV80SdtPedidoProduto","vSDTPEDIDOPRODUTO",0,"CollSDTPedidoProduto.SDTPedidoProdutoItem");this.setVCMap("A2961ProdutoDescricaoResumida","PRODUTODESCRICAORESUMIDA",0,"svchar");this.setVCMap("Gx_mode","vMODE",0,"char");this.setVCMap("A2964ProdutoEmpresaId","PRODUTOEMPRESAID",0,"char");this.setVCMap("AV78ProdutoEmpresaId","vPRODUTOEMPRESAID",0,"char");this.setVCMap("A2965ProdutoId","PRODUTOID",0,"int");this.setVCMap("AV80SdtPedidoProduto","vSDTPEDIDOPRODUTO",0,"CollSDTPedidoProduto.SDTPedidoProdutoItem");this.setVCMap("A2961ProdutoDescricaoResumida","PRODUTODESCRICAORESUMIDA",0,"svchar");t.addRefreshingVar({rfrVar:"AV68bmpProduto",rfrProp:"Value",gxAttId:"Bmpproduto"});t.addRefreshingVar({rfrVar:"AV68bmpProduto",rfrProp:"Tooltiptext",gxAttId:"Bmpproduto"});t.addRefreshingVar({rfrVar:"A2964ProdutoEmpresaId"});t.addRefreshingVar({rfrVar:"AV78ProdutoEmpresaId"});t.addRefreshingVar({rfrVar:"A2965ProdutoId"});t.addRefreshingVar({rfrVar:"AV80SdtPedidoProduto"});t.addRefreshingVar({rfrVar:"A2961ProdutoDescricaoResumida"});t.addRefreshingVar(this.GXValidFnc[123]);this.addGridBCProperty("Sdtpedidoproduto",["TipoConcretoTracoSequencia"],this.GXValidFnc[98],"AV80SdtPedidoProduto");this.addGridBCProperty("Sdtpedidoproduto",["TipoConcretoTracoProdutoIdOld"],this.GXValidFnc[99],"AV80SdtPedidoProduto");this.addGridBCProperty("Sdtpedidoproduto",["TipoConcretoTracoVlrClassific"],this.GXValidFnc[100],"AV80SdtPedidoProduto");this.addGridBCProperty("Sdtpedidoproduto",["TipoConcretoTracoProdutoId"],this.GXValidFnc[101],"AV80SdtPedidoProduto");this.addGridBCProperty("Sdtpedidoproduto",["TipoConcretoTracoProdutoDesc"],this.GXValidFnc[103],"AV80SdtPedidoProduto");this.addGridBCProperty("Sdtpedidoproduto",["QtdeKG"],this.GXValidFnc[104],"AV80SdtPedidoProduto");this.addGridBCProperty("Sdtpedidoproduto",["TipoConcretoTracoQtdeReal"],this.GXValidFnc[105],"AV80SdtPedidoProduto");this.addGridBCProperty("Sdtpedidoproduto",["TipoConcretoTracoQtdeContabil"],this.GXValidFnc[106],"AV80SdtPedidoProduto");this.InitStandaloneVars()});gx.setParentObj(new hregistrarpedidoproduto)
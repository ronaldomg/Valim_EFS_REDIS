/**@preserve  GeneXus Java 10_3_12-110051 on February 8, 2021 20:35:4.8
*
gx.evt.autoSkip=!1;gx.define("tpedidoace",!1,function(){var n,t;this.ServerClass="tpedidoace";this.PackageName="";this.setObjectType("trn");this.setOnAjaxSessionTimeout("Warn");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.addKeyListener("20","LAST");this.addKeyListener("19","FIRST");this.addKeyListener("16","SELECT");this.addKeyListener("13","DELETE");this.addKeyListener("9","GET");this.addKeyListener("2","PROMPT");this.addKeyListener("8","NEXT");this.addKeyListener("7","PREVIOUS");this.addKeyListener("4","CHECK");this.addKeyListener("5","REFRESH");this.addKeyListener("12","CANCEL");this.addKeyListener("1","HELP");this.SetStandaloneVars=function(){this.A6737AcertoDespRecId=gx.fn.getIntegerValue("ACERTODESPRECID",".");this.A6745AcertoDespRecTipo=gx.fn.getControlValue("ACERTODESPRECTIPO");this.A6738AcertoDespRecDescricao=gx.fn.getControlValue("ACERTODESPRECDESCRICAO");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Pedidoaceid=function(){try{var n=gx.util.balloon.getNew("PEDIDOACEID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Pedidoacedata=function(){return gx.ajax.validSrvEvt("dyncall","valid_Pedidoacedata",["gx.O.A6732PedidoAceId",'gx.date.urlDate(gx.O.A6743PedidoAceData,"DMY4")',"gx.O.A6744PedidoAceFormaPgto","gx.O.A6748PedidoAceUsuarioAlt",'gx.date.urlDateTime(gx.O.A6749PedidoAceDataHoraAlt,"DMY4")',"gx.O.A6737AcertoDespRecId","gx.O.A7584PedidoAceClienteEmpId","gx.O.A7585PedidoAceClienteId"],["A6744PedidoAceFormaPgto","A7584PedidoAceClienteEmpId","A7585PedidoAceClienteId","A6737AcertoDespRecId","A6745AcertoDespRecTipo","A6738AcertoDespRecDescricao","A6748PedidoAceUsuarioAlt","A6749PedidoAceDataHoraAlt","A7586PedidoAceClienteNome","Gx_mode","Z6732PedidoAceId","Z6743PedidoAceData","Z6744PedidoAceFormaPgto","Z7584PedidoAceClienteEmpId","Z7585PedidoAceClienteId","Z6737AcertoDespRecId","Z6745AcertoDespRecTipo","Z6738AcertoDespRecDescricao","Z6748PedidoAceUsuarioAlt","Z6749PedidoAceDataHoraAlt","Z7586PedidoAceClienteNome","Grid1",["BTN_GET","Enabled"],["BUTTON1","Enabled"]]),!0};this.Valid_Pedidoaceclienteempid=function(){try{var n=gx.util.balloon.getNew("PEDIDOACECLIENTEEMPID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0};this.Valid_Pedidoaceclienteid=function(){return gx.ajax.validSrvEvt("dyncall","valid_Pedidoaceclienteid",["gx.O.A7584PedidoAceClienteEmpId","gx.O.A7585PedidoAceClienteId","gx.O.A7586PedidoAceClienteNome"],["A7586PedidoAceClienteNome"]),!0};this.Valid_Pedidoaceitemseq=function(){try{if(gx.fn.currentGridRowImpl(54)===0)return!0;var n=gx.util.balloon.getNew("PEDIDOACEITEMSEQ",gx.fn.currentGridRowImpl(54));this.AnyError=0;this.sMode591=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(591,54);this.standaloneModal9T591();this.standaloneNotModal9T591();gx.fn.gridDuplicateKey(56)&&(n.setError(gx.text.format(gx.getMessage("GXM_1004"),"Itens do Pedido","","","","","","","","")),this.AnyError=gx.num.trunc(1,0))}catch(t){}try{return(this.Gx_mode=this.sMode591,n==null)?!0:n.show()}catch(t){}return!0};this.Valid_Pedidoaceitemprodempid=function(){try{if(gx.fn.currentGridRowImpl(54)===0)return!0;var n=gx.util.balloon.getNew("PEDIDOACEITEMPRODEMPID",gx.fn.currentGridRowImpl(54));this.AnyError=0;this.sMode591=this.Gx_mode;this.Gx_mode=gx.fn.getGridRowMode(591,54)}catch(t){}try{return(this.Gx_mode=this.sMode591,n==null)?!0:n.show()}catch(t){}return!0};this.Valid_Pedidoaceitemprodid=function(){return this.sMode591=this.Gx_mode,this.Gx_mode=gx.fn.getGridRowMode(591,54),gx.ajax.validSrvEvt("dyncall","valid_Pedidoaceitemprodid",["gx.O.A6750PedidoAceItemProdEmpId","gx.O.A6734PedidoAceItemProdId","gx.O.A6751PedidoAceItemProdDesc"],["A6751PedidoAceItemProdDesc"]),this.Gx_mode=this.sMode591,!0};this.standaloneModal9T591=function(){try{this.Gx_mode!="INS"?gx.fn.setCtrlProperty("PEDIDOACEITEMSEQ","Enabled",0):gx.fn.setCtrlProperty("PEDIDOACEITEMSEQ","Enabled",1)}catch(n){}return!0};this.standaloneNotModal9T591=function(){return!0};this.e119t590_client=function(){this.clearMessages();this.refreshOutputs([])};this.e129t590_client=function(){this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e139t590_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[3,6,9,12,14,18,20,23,25,28,30,33,35,38,40,43,45,48,50,55,56,57,58,59,60,61,65,68,69,70,73,83,85,88];this.GXLastCtrlId=88;this.Grid1Container=new gx.grid.grid(this,591,"PedidoAceItem",54,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"tpedidoace",[6733],!1,1,!1,!0,5,!1,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addSingleLineEdit("nRcdDeleted_591",55,"vNRCDDELETED_591","","","nRcdDeleted_591","int",0,"px",4,1,"right",null,[],"nRcdDeleted_591","nRcdDeleted_591",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(6733,56,"PEDIDOACEITEMSEQ","Sequência","","PedidoAceItemSeq","int",0,"px",4,4,"right",null,[],6733,"PedidoAceItemSeq",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(6750,57,"PEDIDOACEITEMPRODEMPID","Empresa do Produto","","PedidoAceItemProdEmpId","char",0,"px",10,10,"left",null,[],6750,"PedidoAceItemProdEmpId",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(6734,58,"PEDIDOACEITEMPRODID","Código do Produto","","PedidoAceItemProdId","int",0,"px",10,10,"right",null,[],6734,"PedidoAceItemProdId",!0,0,!1,!1,"Attribute",1,"");t.addBitmap("prompt_6750_6734","PROMPT_6750_6734",89,0,"",0,"",null,"","","gx-prompt Image","");t.addSingleLineEdit(6751,59,"PEDIDOACEITEMPRODDESC","Descrição do Produto","","PedidoAceItemProdDesc","svchar",0,"px",40,40,"left",null,[],6751,"PedidoAceItemProdDesc",!0,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(6735,60,"PEDIDOACEITEMQTDE","Quantidade","","PedidoAceItemQtde","decimal",0,"px",22,22,"right",null,[],6735,"PedidoAceItemQtde",!0,2,!1,!1,"Attribute",1,"");t.addSingleLineEdit(6736,61,"PEDIDOACEITEMPRECO","Preço","","PedidoAceItemPreco","decimal",0,"px",22,22,"right",null,[],6736,"PedidoAceItemPreco",!0,2,!1,!1,"Attribute",1,"");this.setGrid(t);n[3]={fld:"TABLE1",grid:0};n[6]={fld:"TAB1",grid:0};n[9]={fld:"TABLE2",grid:0};n[12]={fld:"TEXTBLOCK2",format:0,grid:0};n[14]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidoaceid,isvalid:null,rgrid:[this.Grid1Container],fld:"PEDIDOACEID",gxz:"Z6732PedidoAceId",gxold:"O6732PedidoAceId",gxvar:"A6732PedidoAceId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A6732PedidoAceId=gx.num.intval(n)},v2z:function(n){gx.O.Z6732PedidoAceId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("PEDIDOACEID",gx.O.A6732PedidoAceId,0)},c2v:function(){gx.O.A6732PedidoAceId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOACEID",".")},nac:gx.falseFn};n[18]={fld:"TEXTBLOCK3",format:0,grid:0};n[20]={lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidoacedata,isvalid:null,rgrid:[this.Grid1Container],fld:"PEDIDOACEDATA",gxz:"Z6743PedidoAceData",gxold:"O6743PedidoAceData",gxvar:"A6743PedidoAceData",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/9999",dec:0},ucs:[],op:[35,30,50,45,25],ip:[35,30,50,45,25,20,14],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A6743PedidoAceData=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z6743PedidoAceData=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("PEDIDOACEDATA",gx.O.A6743PedidoAceData,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A6743PedidoAceData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PEDIDOACEDATA")},nac:gx.falseFn};this.declareDomainHdlr(20,function(){});n[23]={fld:"TEXTBLOCK4",format:0,grid:0};n[25]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOACEFORMAPGTO",gxz:"Z6744PedidoAceFormaPgto",gxold:"O6744PedidoAceFormaPgto",gxvar:"A6744PedidoAceFormaPgto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A6744PedidoAceFormaPgto=n},v2z:function(n){gx.O.Z6744PedidoAceFormaPgto=n},v2c:function(){gx.fn.setControlValue("PEDIDOACEFORMAPGTO",gx.O.A6744PedidoAceFormaPgto,0)},c2v:function(){gx.O.A6744PedidoAceFormaPgto=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOACEFORMAPGTO")},nac:gx.falseFn};n[28]={fld:"TEXTBLOCK5",format:0,grid:0};n[30]={lvl:0,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidoaceclienteempid,isvalid:null,rgrid:[],fld:"PEDIDOACECLIENTEEMPID",gxz:"Z7584PedidoAceClienteEmpId",gxold:"O7584PedidoAceClienteEmpId",gxvar:"A7584PedidoAceClienteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A7584PedidoAceClienteEmpId=n},v2z:function(n){gx.O.Z7584PedidoAceClienteEmpId=n},v2c:function(){gx.fn.setControlValue("PEDIDOACECLIENTEEMPID",gx.O.A7584PedidoAceClienteEmpId,0)},c2v:function(){gx.O.A7584PedidoAceClienteEmpId=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOACECLIENTEEMPID")},nac:gx.falseFn};n[33]={fld:"TEXTBLOCK6",format:0,grid:0};n[35]={lvl:0,type:"int",len:7,dec:0,sign:!1,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Pedidoaceclienteid,isvalid:null,rgrid:[],fld:"PEDIDOACECLIENTEID",gxz:"Z7585PedidoAceClienteId",gxold:"O7585PedidoAceClienteId",gxvar:"A7585PedidoAceClienteId",ucs:[],op:[40],ip:[40,35,30],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A7585PedidoAceClienteId=gx.num.intval(n)},v2z:function(n){gx.O.Z7585PedidoAceClienteId=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("PEDIDOACECLIENTEID",gx.O.A7585PedidoAceClienteId,0)},c2v:function(){gx.O.A7585PedidoAceClienteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PEDIDOACECLIENTEID",".")},nac:gx.falseFn};n[38]={fld:"TEXTBLOCK7",format:0,grid:0};n[40]={lvl:0,type:"svchar",len:60,dec:0,sign:!1,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOACECLIENTENOME",gxz:"Z7586PedidoAceClienteNome",gxold:"O7586PedidoAceClienteNome",gxvar:"A7586PedidoAceClienteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A7586PedidoAceClienteNome=n},v2z:function(n){gx.O.Z7586PedidoAceClienteNome=n},v2c:function(){gx.fn.setControlValue("PEDIDOACECLIENTENOME",gx.O.A7586PedidoAceClienteNome,0)},c2v:function(){gx.O.A7586PedidoAceClienteNome=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOACECLIENTENOME")},nac:gx.falseFn};n[43]={fld:"TEXTBLOCK8",format:0,grid:0};n[45]={lvl:0,type:"char",len:12,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOACEUSUARIOALT",gxz:"Z6748PedidoAceUsuarioAlt",gxold:"O6748PedidoAceUsuarioAlt",gxvar:"A6748PedidoAceUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A6748PedidoAceUsuarioAlt=n},v2z:function(n){gx.O.Z6748PedidoAceUsuarioAlt=n},v2c:function(){gx.fn.setControlValue("PEDIDOACEUSUARIOALT",gx.O.A6748PedidoAceUsuarioAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A6748PedidoAceUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("PEDIDOACEUSUARIOALT")},nac:gx.falseFn};this.declareDomainHdlr(45,function(){});n[48]={fld:"TEXTBLOCK9",format:0,grid:0};n[50]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOACEDATAHORAALT",gxz:"Z6749PedidoAceDataHoraAlt",gxold:"O6749PedidoAceDataHoraAlt",gxvar:"A6749PedidoAceDataHoraAlt",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.A6749PedidoAceDataHoraAlt=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z6749PedidoAceDataHoraAlt=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("PEDIDOACEDATAHORAALT",gx.O.A6749PedidoAceDataHoraAlt,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A6749PedidoAceDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("PEDIDOACEDATAHORAALT")},nac:gx.falseFn};this.declareDomainHdlr(50,function(){});n[55]={lvl:591,type:"int",len:4,dec:0,sign:!1,pic:"9999",ro:0,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vNRCDDELETED_591",gxz:"ZnRcdDeleted_591",gxold:"OnRcdDeleted_591",gxvar:"nRcdDeleted_591",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.nRcdDeleted_591=gx.num.intval(n)},v2z:function(n){gx.O.ZnRcdDeleted_591=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("vNRCDDELETED_591",n||gx.fn.currentGridRowImpl(54),gx.O.nRcdDeleted_591,0)},c2v:function(){gx.O.nRcdDeleted_591=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("vNRCDDELETED_591",n||gx.fn.currentGridRowImpl(54),".")},nac:gx.falseFn};n[56]={lvl:591,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,isacc:1,grid:54,gxgrid:this.Grid1Container,fnc:this.Valid_Pedidoaceitemseq,isvalid:null,rgrid:[],fld:"PEDIDOACEITEMSEQ",gxz:"Z6733PedidoAceItemSeq",gxold:"O6733PedidoAceItemSeq",gxvar:"A6733PedidoAceItemSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A6733PedidoAceItemSeq=gx.num.intval(n)},v2z:function(n){gx.O.Z6733PedidoAceItemSeq=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PEDIDOACEITEMSEQ",n||gx.fn.currentGridRowImpl(54),gx.O.A6733PedidoAceItemSeq,0)},c2v:function(){gx.O.A6733PedidoAceItemSeq=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PEDIDOACEITEMSEQ",n||gx.fn.currentGridRowImpl(54),".")},nac:gx.falseFn};n[57]={lvl:591,type:"char",len:10,dec:0,sign:!1,pic:"@!",ro:0,isacc:1,grid:54,gxgrid:this.Grid1Container,fnc:this.Valid_Pedidoaceitemprodempid,isvalid:null,rgrid:[],fld:"PEDIDOACEITEMPRODEMPID",gxz:"Z6750PedidoAceItemProdEmpId",gxold:"O6750PedidoAceItemProdEmpId",gxvar:"A6750PedidoAceItemProdEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A6750PedidoAceItemProdEmpId=n},v2z:function(n){gx.O.Z6750PedidoAceItemProdEmpId=n},v2c:function(n){gx.fn.setGridControlValue("PEDIDOACEITEMPRODEMPID",n||gx.fn.currentGridRowImpl(54),gx.O.A6750PedidoAceItemProdEmpId,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A6750PedidoAceItemProdEmpId=this.val()},val:function(n){return gx.fn.getGridControlValue("PEDIDOACEITEMPRODEMPID",n||gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};n[58]={lvl:591,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,isacc:1,grid:54,gxgrid:this.Grid1Container,fnc:this.Valid_Pedidoaceitemprodid,isvalid:null,rgrid:[],fld:"PEDIDOACEITEMPRODID",gxz:"Z6734PedidoAceItemProdId",gxold:"O6734PedidoAceItemProdId",gxvar:"A6734PedidoAceItemProdId",ucs:[],op:[59],ip:[59,58,57],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A6734PedidoAceItemProdId=gx.num.intval(n)},v2z:function(n){gx.O.Z6734PedidoAceItemProdId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("PEDIDOACEITEMPRODID",n||gx.fn.currentGridRowImpl(54),gx.O.A6734PedidoAceItemProdId,0)},c2v:function(){gx.O.A6734PedidoAceItemProdId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("PEDIDOACEITEMPRODID",n||gx.fn.currentGridRowImpl(54),".")},nac:gx.falseFn};n[59]={lvl:591,type:"svchar",len:40,dec:0,sign:!1,ro:1,isacc:1,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOACEITEMPRODDESC",gxz:"Z6751PedidoAceItemProdDesc",gxold:"O6751PedidoAceItemProdDesc",gxvar:"A6751PedidoAceItemProdDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A6751PedidoAceItemProdDesc=n},v2z:function(n){gx.O.Z6751PedidoAceItemProdDesc=n},v2c:function(n){gx.fn.setGridControlValue("PEDIDOACEITEMPRODDESC",n||gx.fn.currentGridRowImpl(54),gx.O.A6751PedidoAceItemProdDesc,0)},c2v:function(){gx.O.A6751PedidoAceItemProdDesc=this.val()},val:function(n){return gx.fn.getGridControlValue("PEDIDOACEITEMPRODDESC",n||gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};n[60]={lvl:591,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOACEITEMQTDE",gxz:"Z6735PedidoAceItemQtde",gxold:"O6735PedidoAceItemQtde",gxvar:"A6735PedidoAceItemQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A6735PedidoAceItemQtde=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z6735PedidoAceItemQtde=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("PEDIDOACEITEMQTDE",n||gx.fn.currentGridRowImpl(54),gx.O.A6735PedidoAceItemQtde,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A6735PedidoAceItemQtde=this.val()},val:function(n){return gx.fn.getGridDecimalValue("PEDIDOACEITEMQTDE",n||gx.fn.currentGridRowImpl(54),".",",")},nac:gx.falseFn};n[61]={lvl:591,type:"decimal",len:18,dec:2,sign:!1,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,isacc:1,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PEDIDOACEITEMPRECO",gxz:"Z6736PedidoAceItemPreco",gxold:"O6736PedidoAceItemPreco",gxvar:"A6736PedidoAceItemPreco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A6736PedidoAceItemPreco=gx.fn.toDecimalValue(n,",",".")},v2z:function(n){gx.O.Z6736PedidoAceItemPreco=gx.fn.toDecimalValue(n,".",",")},v2c:function(n){gx.fn.setGridDecimalValue("PEDIDOACEITEMPRECO",n||gx.fn.currentGridRowImpl(54),gx.O.A6736PedidoAceItemPreco,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){gx.O.A6736PedidoAceItemPreco=this.val()},val:function(n){return gx.fn.getGridDecimalValue("PEDIDOACEITEMPRECO",n||gx.fn.currentGridRowImpl(54),".",",")},nac:gx.falseFn};n[65]={fld:"TAB2",grid:0};n[68]={fld:"DIV1",format:1,grid:0};n[69]={fld:"DIV2",format:1,grid:0};n[70]={fld:"TABLE21",grid:0};n[73]={fld:"TEXTBLOCK1",format:0,grid:0};n[83]={lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV20AcessoSistemaSequencia",gxold:"OV20AcessoSistemaSequencia",gxvar:"AV20AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(n)},v2z:function(n){gx.O.ZV20AcessoSistemaSequencia=gx.num.intval(n)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV20AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV20AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",".")},nac:gx.falseFn};n[85]={fld:"BTNHELP",grid:0};n[88]={fld:"PROMPT_7584_7585",grid:590};this.A6732PedidoAceId=0;this.Z6732PedidoAceId=0;this.O6732PedidoAceId=0;this.A6743PedidoAceData=gx.date.nullDate();this.Z6743PedidoAceData=gx.date.nullDate();this.O6743PedidoAceData=gx.date.nullDate();this.A6744PedidoAceFormaPgto="";this.Z6744PedidoAceFormaPgto="";this.O6744PedidoAceFormaPgto="";this.A7584PedidoAceClienteEmpId="";this.Z7584PedidoAceClienteEmpId="";this.O7584PedidoAceClienteEmpId="";this.A7585PedidoAceClienteId=0;this.Z7585PedidoAceClienteId=0;this.O7585PedidoAceClienteId=0;this.A7586PedidoAceClienteNome="";this.Z7586PedidoAceClienteNome="";this.O7586PedidoAceClienteNome="";this.A6748PedidoAceUsuarioAlt="";this.Z6748PedidoAceUsuarioAlt="";this.O6748PedidoAceUsuarioAlt="";this.A6749PedidoAceDataHoraAlt=gx.date.nullDate();this.Z6749PedidoAceDataHoraAlt=gx.date.nullDate();this.O6749PedidoAceDataHoraAlt=gx.date.nullDate();this.ZnRcdDeleted_591=0;this.OnRcdDeleted_591=0;this.Z6733PedidoAceItemSeq=0;this.O6733PedidoAceItemSeq=0;this.Z6750PedidoAceItemProdEmpId="";this.O6750PedidoAceItemProdEmpId="";this.Z6734PedidoAceItemProdId=0;this.O6734PedidoAceItemProdId=0;this.Z6751PedidoAceItemProdDesc="";this.O6751PedidoAceItemProdDesc="";this.Z6735PedidoAceItemQtde=0;this.O6735PedidoAceItemQtde=0;this.Z6736PedidoAceItemPreco=0;this.O6736PedidoAceItemPreco=0;this.AV20AcessoSistemaSequencia=0;this.ZV20AcessoSistemaSequencia=0;this.OV20AcessoSistemaSequencia=0;this.A6733PedidoAceItemSeq=0;this.A6750PedidoAceItemProdEmpId="";this.A6734PedidoAceItemProdId=0;this.A6751PedidoAceItemProdDesc="";this.A6735PedidoAceItemQtde=0;this.A6736PedidoAceItemPreco=0;this.AV8Logon={};this.A6732PedidoAceId=0;this.A6743PedidoAceData=gx.date.nullDate();this.A6744PedidoAceFormaPgto="";this.A7584PedidoAceClienteEmpId="";this.A7585PedidoAceClienteId=0;this.A7586PedidoAceClienteNome="";this.A6737AcertoDespRecId=0;this.A6745AcertoDespRecTipo="";this.A6738AcertoDespRecDescricao="";this.A6748PedidoAceUsuarioAlt="";this.A6749PedidoAceDataHoraAlt=gx.date.nullDate();this.Events={e129t590_client:["ENTER",!0],e139t590_client:["CANCEL",!0],e119t590_client:["'FECHAR'",!1]};this.EvtParms.ENTER=[[{postForm:!0}],[]];this.EvtParms.REFRESH=[[],[]];this.EvtParms["'FECHAR'"]=[[],[]];this.setPrompt("PROMPT_7584_7585",[30,35]);this.setPrompt("PROMPT_6750_6734",[57,58]);this.EnterCtrl=["BUTTON1"];this.setVCMap("A6737AcertoDespRecId","ACERTODESPRECID",0,"int");this.setVCMap("A6745AcertoDespRecTipo","ACERTODESPRECTIPO",0,"char");this.setVCMap("A6738AcertoDespRecDescricao","ACERTODESPRECDESCRICAO",0,"svchar");this.setVCMap("Gx_mode","vMODE",0,"char");this.InitStandaloneVars()});gx.setParentObj(new tpedidoace)
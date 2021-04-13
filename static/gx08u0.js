/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:32:34.61
*/
gx.evt.autoSkip = false;
gx.define('gx08u0', false, function () {
   this.ServerClass =  "gx08u0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV13pDirfAnoRetencao=gx.fn.getIntegerValue("vPDIRFANORETENCAO",'.') ;
      this.AV14pRetencaoEmpresaId=gx.fn.getControlValue("vPRETENCAOEMPRESAID") ;
      this.AV15pRetencaoTipo=gx.fn.getControlValue("vPRETENCAOTIPO") ;
      this.AV16pRetencaoCodigo=gx.fn.getIntegerValue("vPRETENCAOCODIGO",'.') ;
      this.AV17pDirfCPFCNPJ=gx.fn.getControlValue("vPDIRFCPFCNPJ") ;
      this.AV18pContaPagRecEmpresaId=gx.fn.getControlValue("vPCONTAPAGRECEMPRESAID") ;
      this.AV19pContaPagRecNumero=gx.fn.getIntegerValue("vPCONTAPAGRECNUMERO",'.') ;
   };
   this.e131nt2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141nt1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx08u0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(3040,53,"DIRFANORETENCAO","Ano de Retenção","","DirfAnoRetencao","int",0,"px",4,4,"right",null,[],3040,"DirfAnoRetencao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(2884,54,"RETENCAOEMPRESAID","Empresa","","RetencaoEmpresaId","char",0,"px",10,10,"left",null,[],2884,"RetencaoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(2883,55,"RETENCAOTIPO","Tipo","RetencaoTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(2885,56,"RETENCAOCODIGO","Código Retenção","","RetencaoCodigo","int",0,"px",4,4,"right",null,[],2885,"RetencaoCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3056,57,"DIRFCPFCNPJ","CPF/CNPJ","","DirfCPFCNPJ","char",0,"px",18,18,"left",null,[],3056,"DirfCPFCNPJ",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1685,58,"CONTAPAGRECEMPRESAID","Empresa","","ContaPagRecEmpresaId","char",0,"px",10,10,"left",null,[],1685,"ContaPagRecEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1686,59,"CONTAPAGRECNUMERO","Número Conta","","ContaPagRecNumero","int",0,"px",8,8,"right",null,[],1686,"ContaPagRecNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3041,60,"DIRFCONTAUSUARIOALT","Usuário de Alteração","Selecionar","DirfContaUsuarioAlt","char",0,"px",12,12,"left",null,[],3041,"DirfContaUsuarioAlt",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKDIRFANORETENCAO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDIRFANORETENCAO",gxz:"ZV6cDirfAnoRetencao",gxold:"OV6cDirfAnoRetencao",gxvar:"AV6cDirfAnoRetencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cDirfAnoRetencao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cDirfAnoRetencao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCDIRFANORETENCAO",gx.O.AV6cDirfAnoRetencao,0)},c2v:function(){gx.O.AV6cDirfAnoRetencao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCDIRFANORETENCAO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKRETENCAOEMPRESAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRETENCAOEMPRESAID",gxz:"ZV7cRetencaoEmpresaId",gxold:"OV7cRetencaoEmpresaId",gxvar:"AV7cRetencaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cRetencaoEmpresaId=Value},v2z:function(Value){gx.O.ZV7cRetencaoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCRETENCAOEMPRESAID",gx.O.AV7cRetencaoEmpresaId,0)},c2v:function(){gx.O.AV7cRetencaoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCRETENCAOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKRETENCAOTIPO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRETENCAOTIPO",gxz:"ZV8cRetencaoTipo",gxold:"OV8cRetencaoTipo",gxvar:"AV8cRetencaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cRetencaoTipo=Value},v2z:function(Value){gx.O.ZV8cRetencaoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCRETENCAOTIPO",gx.O.AV8cRetencaoTipo)},c2v:function(){gx.O.AV8cRetencaoTipo=this.val()},val:function(){return gx.fn.getControlValue("vCRETENCAOTIPO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKRETENCAOCODIGO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCRETENCAOCODIGO",gxz:"ZV9cRetencaoCodigo",gxold:"OV9cRetencaoCodigo",gxvar:"AV9cRetencaoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cRetencaoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cRetencaoCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCRETENCAOCODIGO",gx.O.AV9cRetencaoCodigo,0)},c2v:function(){gx.O.AV9cRetencaoCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCRETENCAOCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKDIRFCPFCNPJ", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCDIRFCPFCNPJ",gxz:"ZV10cDirfCPFCNPJ",gxold:"OV10cDirfCPFCNPJ",gxvar:"AV10cDirfCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cDirfCPFCNPJ=Value},v2z:function(Value){gx.O.ZV10cDirfCPFCNPJ=Value},v2c:function(){gx.fn.setControlValue("vCDIRFCPFCNPJ",gx.O.AV10cDirfCPFCNPJ,0)},c2v:function(){gx.O.AV10cDirfCPFCNPJ=this.val()},val:function(){return gx.fn.getControlValue("vCDIRFCPFCNPJ")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCONTAPAGRECEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPAGRECEMPRESAID",gxz:"ZV11cContaPagRecEmpresaId",gxold:"OV11cContaPagRecEmpresaId",gxvar:"AV11cContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.ZV11cContaPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCONTAPAGRECEMPRESAID",gx.O.AV11cContaPagRecEmpresaId,0)},c2v:function(){gx.O.AV11cContaPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCONTAPAGRECEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKCONTAPAGRECNUMERO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPAGRECNUMERO",gxz:"ZV12cContaPagRecNumero",gxold:"OV12cContaPagRecNumero",gxvar:"AV12cContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCONTAPAGRECNUMERO",gx.O.AV12cContaPagRecNumero,0)},c2v:function(){gx.O.AV12cContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV22Linkselection_GXI)},c2v:function(){gx.O.AV22Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV22Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DIRFANORETENCAO",gxz:"Z3040DirfAnoRetencao",gxold:"O3040DirfAnoRetencao",gxvar:"A3040DirfAnoRetencao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3040DirfAnoRetencao=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3040DirfAnoRetencao=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DIRFANORETENCAO",row || gx.fn.currentGridRowImpl(51),gx.O.A3040DirfAnoRetencao,0)},c2v:function(){gx.O.A3040DirfAnoRetencao=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DIRFANORETENCAO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RETENCAOEMPRESAID",gxz:"Z2884RetencaoEmpresaId",gxold:"O2884RetencaoEmpresaId",gxvar:"A2884RetencaoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2884RetencaoEmpresaId=Value},v2z:function(Value){gx.O.Z2884RetencaoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("RETENCAOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A2884RetencaoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2884RetencaoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("RETENCAOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RETENCAOTIPO",gxz:"Z2883RetencaoTipo",gxold:"O2883RetencaoTipo",gxvar:"A2883RetencaoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2883RetencaoTipo=Value},v2z:function(Value){gx.O.Z2883RetencaoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("RETENCAOTIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A2883RetencaoTipo)},c2v:function(){gx.O.A2883RetencaoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("RETENCAOTIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"RETENCAOCODIGO",gxz:"Z2885RetencaoCodigo",gxold:"O2885RetencaoCodigo",gxvar:"A2885RetencaoCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2885RetencaoCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2885RetencaoCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("RETENCAOCODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A2885RetencaoCodigo,0)},c2v:function(){gx.O.A2885RetencaoCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("RETENCAOCODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DIRFCPFCNPJ",gxz:"Z3056DirfCPFCNPJ",gxold:"O3056DirfCPFCNPJ",gxvar:"A3056DirfCPFCNPJ",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3056DirfCPFCNPJ=Value},v2z:function(Value){gx.O.Z3056DirfCPFCNPJ=Value},v2c:function(row){gx.fn.setGridControlValue("DIRFCPFCNPJ",row || gx.fn.currentGridRowImpl(51),gx.O.A3056DirfCPFCNPJ,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3056DirfCPFCNPJ=this.val()},val:function(row){return gx.fn.getGridControlValue("DIRFCPFCNPJ",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECEMPRESAID",gxz:"Z1685ContaPagRecEmpresaId",gxold:"O1685ContaPagRecEmpresaId",gxvar:"A1685ContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1685ContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z1685ContaPagRecEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1685ContaPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1685ContaPagRecEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"DIRFCONTAUSUARIOALT",gxz:"Z3041DirfContaUsuarioAlt",gxold:"O3041DirfContaUsuarioAlt",gxvar:"A3041DirfContaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3041DirfContaUsuarioAlt=Value},v2z:function(Value){gx.O.Z3041DirfContaUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("DIRFCONTAUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A3041DirfContaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3041DirfContaUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("DIRFCONTAUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cDirfAnoRetencao = 0 ;
   this.ZV6cDirfAnoRetencao = 0 ;
   this.OV6cDirfAnoRetencao = 0 ;
   this.AV7cRetencaoEmpresaId = "" ;
   this.ZV7cRetencaoEmpresaId = "" ;
   this.OV7cRetencaoEmpresaId = "" ;
   this.AV8cRetencaoTipo = "" ;
   this.ZV8cRetencaoTipo = "" ;
   this.OV8cRetencaoTipo = "" ;
   this.AV9cRetencaoCodigo = 0 ;
   this.ZV9cRetencaoCodigo = 0 ;
   this.OV9cRetencaoCodigo = 0 ;
   this.AV10cDirfCPFCNPJ = "" ;
   this.ZV10cDirfCPFCNPJ = "" ;
   this.OV10cDirfCPFCNPJ = "" ;
   this.AV11cContaPagRecEmpresaId = "" ;
   this.ZV11cContaPagRecEmpresaId = "" ;
   this.OV11cContaPagRecEmpresaId = "" ;
   this.AV12cContaPagRecNumero = 0 ;
   this.ZV12cContaPagRecNumero = 0 ;
   this.OV12cContaPagRecNumero = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z3040DirfAnoRetencao = 0 ;
   this.O3040DirfAnoRetencao = 0 ;
   this.Z2884RetencaoEmpresaId = "" ;
   this.O2884RetencaoEmpresaId = "" ;
   this.Z2883RetencaoTipo = "" ;
   this.O2883RetencaoTipo = "" ;
   this.Z2885RetencaoCodigo = 0 ;
   this.O2885RetencaoCodigo = 0 ;
   this.Z3056DirfCPFCNPJ = "" ;
   this.O3056DirfCPFCNPJ = "" ;
   this.Z1685ContaPagRecEmpresaId = "" ;
   this.O1685ContaPagRecEmpresaId = "" ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.Z3041DirfContaUsuarioAlt = "" ;
   this.O3041DirfContaUsuarioAlt = "" ;
   this.AV6cDirfAnoRetencao = 0 ;
   this.AV7cRetencaoEmpresaId = "" ;
   this.AV8cRetencaoTipo = "" ;
   this.AV9cRetencaoCodigo = 0 ;
   this.AV10cDirfCPFCNPJ = "" ;
   this.AV11cContaPagRecEmpresaId = "" ;
   this.AV12cContaPagRecNumero = 0 ;
   this.AV13pDirfAnoRetencao = 0 ;
   this.AV14pRetencaoEmpresaId = "" ;
   this.AV15pRetencaoTipo = "" ;
   this.AV16pRetencaoCodigo = 0 ;
   this.AV17pDirfCPFCNPJ = "" ;
   this.AV18pContaPagRecEmpresaId = "" ;
   this.AV19pContaPagRecNumero = 0 ;
   this.AV5LinkSelection = "" ;
   this.A3040DirfAnoRetencao = 0 ;
   this.A2884RetencaoEmpresaId = "" ;
   this.A2883RetencaoTipo = "" ;
   this.A2885RetencaoCodigo = 0 ;
   this.A3056DirfCPFCNPJ = "" ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A3041DirfContaUsuarioAlt = "" ;
   this.Events = {"e131nt2_client": ["ENTER", true] ,"e141nt1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDirfAnoRetencao',fld:'vCDIRFANORETENCAO'},{av:'AV7cRetencaoEmpresaId',fld:'vCRETENCAOEMPRESAID'},{av:'AV8cRetencaoTipo',fld:'vCRETENCAOTIPO'},{av:'AV9cRetencaoCodigo',fld:'vCRETENCAOCODIGO'},{av:'AV10cDirfCPFCNPJ',fld:'vCDIRFCPFCNPJ'},{av:'AV11cContaPagRecEmpresaId',fld:'vCCONTAPAGRECEMPRESAID'},{av:'AV12cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A3040DirfAnoRetencao',fld:'DIRFANORETENCAO'},{av:'A2884RetencaoEmpresaId',fld:'RETENCAOEMPRESAID'},{av:'A2883RetencaoTipo',fld:'RETENCAOTIPO'},{av:'A2885RetencaoCodigo',fld:'RETENCAOCODIGO'},{av:'A3056DirfCPFCNPJ',fld:'DIRFCPFCNPJ'},{av:'A1685ContaPagRecEmpresaId',fld:'CONTAPAGRECEMPRESAID'},{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'}],[{av:'AV13pDirfAnoRetencao',fld:'vPDIRFANORETENCAO'},{av:'AV14pRetencaoEmpresaId',fld:'vPRETENCAOEMPRESAID'},{av:'AV15pRetencaoTipo',fld:'vPRETENCAOTIPO'},{av:'AV16pRetencaoCodigo',fld:'vPRETENCAOCODIGO'},{av:'AV17pDirfCPFCNPJ',fld:'vPDIRFCPFCNPJ'},{av:'AV18pContaPagRecEmpresaId',fld:'vPCONTAPAGRECEMPRESAID'},{av:'AV19pContaPagRecNumero',fld:'vPCONTAPAGRECNUMERO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDirfAnoRetencao',fld:'vCDIRFANORETENCAO'},{av:'AV7cRetencaoEmpresaId',fld:'vCRETENCAOEMPRESAID'},{av:'AV8cRetencaoTipo',fld:'vCRETENCAOTIPO'},{av:'AV9cRetencaoCodigo',fld:'vCRETENCAOCODIGO'},{av:'AV10cDirfCPFCNPJ',fld:'vCDIRFCPFCNPJ'},{av:'AV11cContaPagRecEmpresaId',fld:'vCCONTAPAGRECEMPRESAID'},{av:'AV12cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDirfAnoRetencao',fld:'vCDIRFANORETENCAO'},{av:'AV7cRetencaoEmpresaId',fld:'vCRETENCAOEMPRESAID'},{av:'AV8cRetencaoTipo',fld:'vCRETENCAOTIPO'},{av:'AV9cRetencaoCodigo',fld:'vCRETENCAOCODIGO'},{av:'AV10cDirfCPFCNPJ',fld:'vCDIRFCPFCNPJ'},{av:'AV11cContaPagRecEmpresaId',fld:'vCCONTAPAGRECEMPRESAID'},{av:'AV12cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDirfAnoRetencao',fld:'vCDIRFANORETENCAO'},{av:'AV7cRetencaoEmpresaId',fld:'vCRETENCAOEMPRESAID'},{av:'AV8cRetencaoTipo',fld:'vCRETENCAOTIPO'},{av:'AV9cRetencaoCodigo',fld:'vCRETENCAOCODIGO'},{av:'AV10cDirfCPFCNPJ',fld:'vCDIRFCPFCNPJ'},{av:'AV11cContaPagRecEmpresaId',fld:'vCCONTAPAGRECEMPRESAID'},{av:'AV12cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cDirfAnoRetencao',fld:'vCDIRFANORETENCAO'},{av:'AV7cRetencaoEmpresaId',fld:'vCRETENCAOEMPRESAID'},{av:'AV8cRetencaoTipo',fld:'vCRETENCAOTIPO'},{av:'AV9cRetencaoCodigo',fld:'vCRETENCAOCODIGO'},{av:'AV10cDirfCPFCNPJ',fld:'vCDIRFCPFCNPJ'},{av:'AV11cContaPagRecEmpresaId',fld:'vCCONTAPAGRECEMPRESAID'},{av:'AV12cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'}],[]];
   this.setVCMap("AV13pDirfAnoRetencao", "vPDIRFANORETENCAO", 0, "int");
   this.setVCMap("AV14pRetencaoEmpresaId", "vPRETENCAOEMPRESAID", 0, "char");
   this.setVCMap("AV15pRetencaoTipo", "vPRETENCAOTIPO", 0, "char");
   this.setVCMap("AV16pRetencaoCodigo", "vPRETENCAOCODIGO", 0, "int");
   this.setVCMap("AV17pDirfCPFCNPJ", "vPDIRFCPFCNPJ", 0, "char");
   this.setVCMap("AV18pContaPagRecEmpresaId", "vPCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV19pContaPagRecNumero", "vPCONTAPAGRECNUMERO", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx08u0());

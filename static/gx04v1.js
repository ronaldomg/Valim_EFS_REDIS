/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:32:29.76
*/
gx.evt.autoSkip = false;
gx.define('gx04v1', false, function () {
   this.ServerClass =  "gx04v1" ;
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
      this.AV12pContaPagRecEmpresaId=gx.fn.getControlValue("vPCONTAPAGRECEMPRESAID") ;
      this.AV13pContaPagRecNumero=gx.fn.getIntegerValue("vPCONTAPAGRECNUMERO",'.') ;
   };
   this.e131nr2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141nr1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx04v1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1686,48,"CONTAPAGRECNUMERO","Número Conta","","ContaPagRecNumero","int",0,"px",8,8,"right",null,[],1686,"ContaPagRecNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1694,49,"CONTAPAGRECFATURA","Fatura","Selecionar","ContaPagRecFatura","char",0,"px",15,15,"left",null,[],1694,"ContaPagRecFatura",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1695,50,"CONTAPAGRECDOCUMENTO","Documento","","ContaPagRecDocumento","svchar",0,"px",20,20,"left",null,[],1695,"ContaPagRecDocumento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1696,51,"CONTAPAGRECSEQDOCUME","Seq Documento","","ContaPagRecSeqDocume","char",0,"px",3,3,"left",null,[],1696,"ContaPagRecSeqDocume",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1692,52,"CONTAPAGRECSITUACAO","Situação do ContaPagRec","ContaPagRecSituacao","char",null,0,true,false,0,"px","");
   Grid1Container.addComboBox(1693,53,"CONTAPAGRECPAGREC","Pagar/Receber","ContaPagRecPagRec","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1698,54,"CONTAPAGRECDTACEITE","Data Aceite","","ContaPagRecDtAceite","date",0,"px",10,10,"right",null,[],1698,"ContaPagRecDtAceite",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1699,55,"CONTAPAGRECDTEMISSAO","Data Emissão","","ContaPagRecDtEmissao","date",0,"px",10,10,"right",null,[],1699,"ContaPagRecDtEmissao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1705,56,"CONTAPAGRECBANCOID","Banco","","ContaPagRecBancoId","int",0,"px",3,3,"right",null,[],1705,"ContaPagRecBancoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1685,57,"CONTAPAGRECEMPRESAID","Empresa","","ContaPagRecEmpresaId","char",0,"px",10,10,"left",null,[],1685,"ContaPagRecEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCONTAPAGRECNUMERO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPAGRECNUMERO",gxz:"ZV6cContaPagRecNumero",gxold:"OV6cContaPagRecNumero",gxvar:"AV6cContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cContaPagRecNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCONTAPAGRECNUMERO",gx.O.AV6cContaPagRecNumero,0)},c2v:function(){gx.O.AV6cContaPagRecNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCONTAPAGRECNUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCONTAPAGRECFATURA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPAGRECFATURA",gxz:"ZV7cContaPagRecFatura",gxold:"OV7cContaPagRecFatura",gxvar:"AV7cContaPagRecFatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cContaPagRecFatura=Value},v2z:function(Value){gx.O.ZV7cContaPagRecFatura=Value},v2c:function(){gx.fn.setControlValue("vCCONTAPAGRECFATURA",gx.O.AV7cContaPagRecFatura,0)},c2v:function(){gx.O.AV7cContaPagRecFatura=this.val()},val:function(){return gx.fn.getControlValue("vCCONTAPAGRECFATURA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCONTAPAGRECDOCUMENTO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPAGRECDOCUMENTO",gxz:"ZV8cContaPagRecDocumento",gxold:"OV8cContaPagRecDocumento",gxvar:"AV8cContaPagRecDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cContaPagRecDocumento=Value},v2z:function(Value){gx.O.ZV8cContaPagRecDocumento=Value},v2c:function(){gx.fn.setControlValue("vCCONTAPAGRECDOCUMENTO",gx.O.AV8cContaPagRecDocumento,0)},c2v:function(){gx.O.AV8cContaPagRecDocumento=this.val()},val:function(){return gx.fn.getControlValue("vCCONTAPAGRECDOCUMENTO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCONTAPAGRECSEQDOCUME", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPAGRECSEQDOCUME",gxz:"ZV9cContaPagRecSeqDocume",gxold:"OV9cContaPagRecSeqDocume",gxvar:"AV9cContaPagRecSeqDocume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cContaPagRecSeqDocume=Value},v2z:function(Value){gx.O.ZV9cContaPagRecSeqDocume=Value},v2c:function(){gx.fn.setControlValue("vCCONTAPAGRECSEQDOCUME",gx.O.AV9cContaPagRecSeqDocume,0)},c2v:function(){gx.O.AV9cContaPagRecSeqDocume=this.val()},val:function(){return gx.fn.getControlValue("vCCONTAPAGRECSEQDOCUME")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCONTAPAGRECSITUACAO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPAGRECSITUACAO",gxz:"ZV10cContaPagRecSituacao",gxold:"OV10cContaPagRecSituacao",gxvar:"AV10cContaPagRecSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV10cContaPagRecSituacao=Value},v2z:function(Value){gx.O.ZV10cContaPagRecSituacao=Value},v2c:function(){gx.fn.setComboBoxValue("vCCONTAPAGRECSITUACAO",gx.O.AV10cContaPagRecSituacao)},c2v:function(){gx.O.AV10cContaPagRecSituacao=this.val()},val:function(){return gx.fn.getControlValue("vCCONTAPAGRECSITUACAO")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCONTAPAGRECPAGREC", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPAGRECPAGREC",gxz:"ZV11cContaPagRecPagRec",gxold:"OV11cContaPagRecPagRec",gxvar:"AV11cContaPagRecPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11cContaPagRecPagRec=Value},v2z:function(Value){gx.O.ZV11cContaPagRecPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("vCCONTAPAGRECPAGREC",gx.O.AV11cContaPagRecPagRec)},c2v:function(){gx.O.AV11cContaPagRecPagRec=this.val()},val:function(){return gx.fn.getControlValue("vCCONTAPAGRECPAGREC")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECNUMERO",gxz:"Z1686ContaPagRecNumero",gxold:"O1686ContaPagRecNumero",gxvar:"A1686ContaPagRecNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1686ContaPagRecNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1686ContaPagRecNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(46),gx.O.A1686ContaPagRecNumero,0)},c2v:function(){gx.O.A1686ContaPagRecNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECNUMERO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECFATURA",gxz:"Z1694ContaPagRecFatura",gxold:"O1694ContaPagRecFatura",gxvar:"A1694ContaPagRecFatura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1694ContaPagRecFatura=Value},v2z:function(Value){gx.O.Z1694ContaPagRecFatura=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECFATURA",row || gx.fn.currentGridRowImpl(46),gx.O.A1694ContaPagRecFatura,0)},c2v:function(){gx.O.A1694ContaPagRecFatura=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECFATURA",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:20,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDOCUMENTO",gxz:"Z1695ContaPagRecDocumento",gxold:"O1695ContaPagRecDocumento",gxvar:"A1695ContaPagRecDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1695ContaPagRecDocumento=Value},v2z:function(Value){gx.O.Z1695ContaPagRecDocumento=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDOCUMENTO",row || gx.fn.currentGridRowImpl(46),gx.O.A1695ContaPagRecDocumento,0)},c2v:function(){gx.O.A1695ContaPagRecDocumento=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECDOCUMENTO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECSEQDOCUME",gxz:"Z1696ContaPagRecSeqDocume",gxold:"O1696ContaPagRecSeqDocume",gxvar:"A1696ContaPagRecSeqDocume",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1696ContaPagRecSeqDocume=Value},v2z:function(Value){gx.O.Z1696ContaPagRecSeqDocume=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECSEQDOCUME",row || gx.fn.currentGridRowImpl(46),gx.O.A1696ContaPagRecSeqDocume,0)},c2v:function(){gx.O.A1696ContaPagRecSeqDocume=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECSEQDOCUME",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECSITUACAO",gxz:"Z1692ContaPagRecSituacao",gxold:"O1692ContaPagRecSituacao",gxvar:"A1692ContaPagRecSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1692ContaPagRecSituacao=Value},v2z:function(Value){gx.O.Z1692ContaPagRecSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(46),gx.O.A1692ContaPagRecSituacao)},c2v:function(){gx.O.A1692ContaPagRecSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECSITUACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECPAGREC",gxz:"Z1693ContaPagRecPagRec",gxold:"O1693ContaPagRecPagRec",gxvar:"A1693ContaPagRecPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1693ContaPagRecPagRec=Value},v2z:function(Value){gx.O.Z1693ContaPagRecPagRec=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CONTAPAGRECPAGREC",row || gx.fn.currentGridRowImpl(46),gx.O.A1693ContaPagRecPagRec)},c2v:function(){gx.O.A1693ContaPagRecPagRec=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECPAGREC",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTACEITE",gxz:"Z1698ContaPagRecDtAceite",gxold:"O1698ContaPagRecDtAceite",gxvar:"A1698ContaPagRecDtAceite",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1698ContaPagRecDtAceite=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1698ContaPagRecDtAceite=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTACEITE",row || gx.fn.currentGridRowImpl(46),gx.O.A1698ContaPagRecDtAceite,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1698ContaPagRecDtAceite=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTACEITE",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECDTEMISSAO",gxz:"Z1699ContaPagRecDtEmissao",gxold:"O1699ContaPagRecDtEmissao",gxvar:"A1699ContaPagRecDtEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(46),gx.O.A1699ContaPagRecDtEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1699ContaPagRecDtEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONTAPAGRECDTEMISSAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECBANCOID",gxz:"Z1705ContaPagRecBancoId",gxold:"O1705ContaPagRecBancoId",gxvar:"A1705ContaPagRecBancoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1705ContaPagRecBancoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1705ContaPagRecBancoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECBANCOID",row || gx.fn.currentGridRowImpl(46),gx.O.A1705ContaPagRecBancoId,0)},c2v:function(){gx.O.A1705ContaPagRecBancoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPAGRECBANCOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPAGRECEMPRESAID",gxz:"Z1685ContaPagRecEmpresaId",gxold:"O1685ContaPagRecEmpresaId",gxvar:"A1685ContaPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1685ContaPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z1685ContaPagRecEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A1685ContaPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1685ContaPagRecEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cContaPagRecNumero = 0 ;
   this.ZV6cContaPagRecNumero = 0 ;
   this.OV6cContaPagRecNumero = 0 ;
   this.AV7cContaPagRecFatura = "" ;
   this.ZV7cContaPagRecFatura = "" ;
   this.OV7cContaPagRecFatura = "" ;
   this.AV8cContaPagRecDocumento = "" ;
   this.ZV8cContaPagRecDocumento = "" ;
   this.OV8cContaPagRecDocumento = "" ;
   this.AV9cContaPagRecSeqDocume = "" ;
   this.ZV9cContaPagRecSeqDocume = "" ;
   this.OV9cContaPagRecSeqDocume = "" ;
   this.AV10cContaPagRecSituacao = "" ;
   this.ZV10cContaPagRecSituacao = "" ;
   this.OV10cContaPagRecSituacao = "" ;
   this.AV11cContaPagRecPagRec = "" ;
   this.ZV11cContaPagRecPagRec = "" ;
   this.OV11cContaPagRecPagRec = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1686ContaPagRecNumero = 0 ;
   this.O1686ContaPagRecNumero = 0 ;
   this.Z1694ContaPagRecFatura = "" ;
   this.O1694ContaPagRecFatura = "" ;
   this.Z1695ContaPagRecDocumento = "" ;
   this.O1695ContaPagRecDocumento = "" ;
   this.Z1696ContaPagRecSeqDocume = "" ;
   this.O1696ContaPagRecSeqDocume = "" ;
   this.Z1692ContaPagRecSituacao = "" ;
   this.O1692ContaPagRecSituacao = "" ;
   this.Z1693ContaPagRecPagRec = "" ;
   this.O1693ContaPagRecPagRec = "" ;
   this.Z1698ContaPagRecDtAceite = gx.date.nullDate() ;
   this.O1698ContaPagRecDtAceite = gx.date.nullDate() ;
   this.Z1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.O1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.Z1705ContaPagRecBancoId = 0 ;
   this.O1705ContaPagRecBancoId = 0 ;
   this.Z1685ContaPagRecEmpresaId = "" ;
   this.O1685ContaPagRecEmpresaId = "" ;
   this.AV6cContaPagRecNumero = 0 ;
   this.AV7cContaPagRecFatura = "" ;
   this.AV8cContaPagRecDocumento = "" ;
   this.AV9cContaPagRecSeqDocume = "" ;
   this.AV10cContaPagRecSituacao = "" ;
   this.AV11cContaPagRecPagRec = "" ;
   this.AV12pContaPagRecEmpresaId = "" ;
   this.AV13pContaPagRecNumero = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1686ContaPagRecNumero = 0 ;
   this.A1694ContaPagRecFatura = "" ;
   this.A1695ContaPagRecDocumento = "" ;
   this.A1696ContaPagRecSeqDocume = "" ;
   this.A1692ContaPagRecSituacao = "" ;
   this.A1693ContaPagRecPagRec = "" ;
   this.A1698ContaPagRecDtAceite = gx.date.nullDate() ;
   this.A1699ContaPagRecDtEmissao = gx.date.nullDate() ;
   this.A1705ContaPagRecBancoId = 0 ;
   this.A1685ContaPagRecEmpresaId = "" ;
   this.Events = {"e131nr2_client": ["ENTER", true] ,"e141nr1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'},{av:'AV7cContaPagRecFatura',fld:'vCCONTAPAGRECFATURA'},{av:'AV8cContaPagRecDocumento',fld:'vCCONTAPAGRECDOCUMENTO'},{av:'AV9cContaPagRecSeqDocume',fld:'vCCONTAPAGRECSEQDOCUME'},{av:'AV10cContaPagRecSituacao',fld:'vCCONTAPAGRECSITUACAO'},{av:'AV11cContaPagRecPagRec',fld:'vCCONTAPAGRECPAGREC'},{av:'AV12pContaPagRecEmpresaId',fld:'vPCONTAPAGRECEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1686ContaPagRecNumero',fld:'CONTAPAGRECNUMERO'}],[{av:'AV13pContaPagRecNumero',fld:'vPCONTAPAGRECNUMERO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'},{av:'AV7cContaPagRecFatura',fld:'vCCONTAPAGRECFATURA'},{av:'AV8cContaPagRecDocumento',fld:'vCCONTAPAGRECDOCUMENTO'},{av:'AV9cContaPagRecSeqDocume',fld:'vCCONTAPAGRECSEQDOCUME'},{av:'AV10cContaPagRecSituacao',fld:'vCCONTAPAGRECSITUACAO'},{av:'AV11cContaPagRecPagRec',fld:'vCCONTAPAGRECPAGREC'},{av:'AV12pContaPagRecEmpresaId',fld:'vPCONTAPAGRECEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'},{av:'AV7cContaPagRecFatura',fld:'vCCONTAPAGRECFATURA'},{av:'AV8cContaPagRecDocumento',fld:'vCCONTAPAGRECDOCUMENTO'},{av:'AV9cContaPagRecSeqDocume',fld:'vCCONTAPAGRECSEQDOCUME'},{av:'AV10cContaPagRecSituacao',fld:'vCCONTAPAGRECSITUACAO'},{av:'AV11cContaPagRecPagRec',fld:'vCCONTAPAGRECPAGREC'},{av:'AV12pContaPagRecEmpresaId',fld:'vPCONTAPAGRECEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'},{av:'AV7cContaPagRecFatura',fld:'vCCONTAPAGRECFATURA'},{av:'AV8cContaPagRecDocumento',fld:'vCCONTAPAGRECDOCUMENTO'},{av:'AV9cContaPagRecSeqDocume',fld:'vCCONTAPAGRECSEQDOCUME'},{av:'AV10cContaPagRecSituacao',fld:'vCCONTAPAGRECSITUACAO'},{av:'AV11cContaPagRecPagRec',fld:'vCCONTAPAGRECPAGREC'},{av:'AV12pContaPagRecEmpresaId',fld:'vPCONTAPAGRECEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaPagRecNumero',fld:'vCCONTAPAGRECNUMERO'},{av:'AV7cContaPagRecFatura',fld:'vCCONTAPAGRECFATURA'},{av:'AV8cContaPagRecDocumento',fld:'vCCONTAPAGRECDOCUMENTO'},{av:'AV9cContaPagRecSeqDocume',fld:'vCCONTAPAGRECSEQDOCUME'},{av:'AV10cContaPagRecSituacao',fld:'vCCONTAPAGRECSITUACAO'},{av:'AV11cContaPagRecPagRec',fld:'vCCONTAPAGRECPAGREC'},{av:'AV12pContaPagRecEmpresaId',fld:'vPCONTAPAGRECEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pContaPagRecEmpresaId", "vPCONTAPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV13pContaPagRecNumero", "vPCONTAPAGRECNUMERO", 0, "int");
   this.setVCMap("AV12pContaPagRecEmpresaId", "vPCONTAPAGRECEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pContaPagRecEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx04v1());

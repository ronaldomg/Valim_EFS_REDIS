/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:33:29.99
*/
gx.evt.autoSkip = false;
gx.define('gx0de0', false, function () {
   this.ServerClass =  "gx0de0" ;
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
      this.AV13pCaixaTrabalhoEmpresaId=gx.fn.getControlValue("vPCAIXATRABALHOEMPRESAID") ;
      this.AV14pCaixaTrabalhoNumeroLoja=gx.fn.getIntegerValue("vPCAIXATRABALHONUMEROLOJA",'.') ;
      this.AV15pCaixaTrabalhoSequenciaECF=gx.fn.getIntegerValue("vPCAIXATRABALHOSEQUENCIAECF",'.') ;
      this.AV16pCaixaTrabalhoId=gx.fn.getIntegerValue("vPCAIXATRABALHOID",'.') ;
   };
   this.e131ok2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141ok1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0de0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(3442,53,"CAIXATRABALHOEMPRESAID","Empresa do Caixa Trabalho","","CaixaTrabalhoEmpresaId","char",0,"px",10,10,"left",null,[],3442,"CaixaTrabalhoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5776,54,"CAIXATRABALHONUMEROLOJA","Caixa Trabalho Numero Loja","","CaixaTrabalhoNumeroLoja","int",0,"px",4,4,"right",null,[],5776,"CaixaTrabalhoNumeroLoja",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5777,55,"CAIXATRABALHOSEQUENCIAECF","Caixa Trabalho Sequencia ECF","","CaixaTrabalhoSequenciaECF","int",0,"px",3,3,"right",null,[],5777,"CaixaTrabalhoSequenciaECF",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3443,56,"CAIXATRABALHOID","Caixa Trabalho","","CaixaTrabalhoId","int",0,"px",10,10,"right",null,[],3443,"CaixaTrabalhoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3437,57,"CAIXATRABALHODTABERTURA","Data de Abertura","Selecionar","CaixaTrabalhoDtAbertura","date",0,"px",10,10,"right",null,[],3437,"CaixaTrabalhoDtAbertura",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(3438,58,"CAIXATRABALHODTFECHAMENTO","DataFechamento","","CaixaTrabalhoDtFechamento","date",0,"px",10,10,"right",null,[],3438,"CaixaTrabalhoDtFechamento",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCAIXATRABALHOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCAIXATRABALHOEMPRESAID",gxz:"ZV6cCaixaTrabalhoEmpresaId",gxold:"OV6cCaixaTrabalhoEmpresaId",gxvar:"AV6cCaixaTrabalhoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cCaixaTrabalhoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cCaixaTrabalhoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCCAIXATRABALHOEMPRESAID",gx.O.AV6cCaixaTrabalhoEmpresaId,0)},c2v:function(){gx.O.AV6cCaixaTrabalhoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCCAIXATRABALHOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCAIXATRABALHONUMEROLOJA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCAIXATRABALHONUMEROLOJA",gxz:"ZV7cCaixaTrabalhoNumeroLoja",gxold:"OV7cCaixaTrabalhoNumeroLoja",gxvar:"AV7cCaixaTrabalhoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cCaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cCaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCAIXATRABALHONUMEROLOJA",gx.O.AV7cCaixaTrabalhoNumeroLoja,0)},c2v:function(){gx.O.AV7cCaixaTrabalhoNumeroLoja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCAIXATRABALHONUMEROLOJA",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCAIXATRABALHOSEQUENCIAECF", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCAIXATRABALHOSEQUENCIAECF",gxz:"ZV8cCaixaTrabalhoSequenciaECF",gxold:"OV8cCaixaTrabalhoSequenciaECF",gxvar:"AV8cCaixaTrabalhoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cCaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cCaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCAIXATRABALHOSEQUENCIAECF",gx.O.AV8cCaixaTrabalhoSequenciaECF,0)},c2v:function(){gx.O.AV8cCaixaTrabalhoSequenciaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCAIXATRABALHOSEQUENCIAECF",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCAIXATRABALHOID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCAIXATRABALHOID",gxz:"ZV9cCaixaTrabalhoId",gxold:"OV9cCaixaTrabalhoId",gxvar:"AV9cCaixaTrabalhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cCaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cCaixaTrabalhoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCAIXATRABALHOID",gx.O.AV9cCaixaTrabalhoId,0)},c2v:function(){gx.O.AV9cCaixaTrabalhoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCAIXATRABALHOID",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCAIXATRABALHODTABERTURA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCAIXATRABALHODTABERTURA",gxz:"ZV10cCaixaTrabalhoDtAbertura",gxold:"OV10cCaixaTrabalhoDtAbertura",gxvar:"AV10cCaixaTrabalhoDtAbertura",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cCaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cCaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCCAIXATRABALHODTABERTURA",gx.O.AV10cCaixaTrabalhoDtAbertura,0)},c2v:function(){gx.O.AV10cCaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCCAIXATRABALHODTABERTURA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKCAIXATRABALHODTFECHAMENTO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCAIXATRABALHODTFECHAMENTO",gxz:"ZV11cCaixaTrabalhoDtFechamento",gxold:"OV11cCaixaTrabalhoDtFechamento",gxvar:"AV11cCaixaTrabalhoDtFechamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cCaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV11cCaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCCAIXATRABALHODTFECHAMENTO",gx.O.AV11cCaixaTrabalhoDtFechamento,0)},c2v:function(){gx.O.AV11cCaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCCAIXATRABALHODTFECHAMENTO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKPDVCODIGO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPDVCODIGO",gxz:"ZV12cPDVCodigo",gxold:"OV12cPDVCodigo",gxvar:"AV12cPDVCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cPDVCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cPDVCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPDVCODIGO",gx.O.AV12cPDVCodigo,0)},c2v:function(){gx.O.AV12cPDVCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPDVCODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV19Linkselection_GXI)},c2v:function(){gx.O.AV19Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV19Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHOEMPRESAID",gxz:"Z3442CaixaTrabalhoEmpresaId",gxold:"O3442CaixaTrabalhoEmpresaId",gxvar:"A3442CaixaTrabalhoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3442CaixaTrabalhoEmpresaId=Value},v2z:function(Value){gx.O.Z3442CaixaTrabalhoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A3442CaixaTrabalhoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3442CaixaTrabalhoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("CAIXATRABALHOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHONUMEROLOJA",gxz:"Z5776CaixaTrabalhoNumeroLoja",gxold:"O5776CaixaTrabalhoNumeroLoja",gxvar:"A5776CaixaTrabalhoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5776CaixaTrabalhoNumeroLoja=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHONUMEROLOJA",row || gx.fn.currentGridRowImpl(51),gx.O.A5776CaixaTrabalhoNumeroLoja,0)},c2v:function(){gx.O.A5776CaixaTrabalhoNumeroLoja=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHONUMEROLOJA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHOSEQUENCIAECF",gxz:"Z5777CaixaTrabalhoSequenciaECF",gxold:"O5777CaixaTrabalhoSequenciaECF",gxvar:"A5777CaixaTrabalhoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5777CaixaTrabalhoSequenciaECF=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(51),gx.O.A5777CaixaTrabalhoSequenciaECF,0)},c2v:function(){gx.O.A5777CaixaTrabalhoSequenciaECF=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHOID",gxz:"Z3443CaixaTrabalhoId",gxold:"O3443CaixaTrabalhoId",gxvar:"A3443CaixaTrabalhoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3443CaixaTrabalhoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3443CaixaTrabalhoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHOID",row || gx.fn.currentGridRowImpl(51),gx.O.A3443CaixaTrabalhoId,0)},c2v:function(){gx.O.A3443CaixaTrabalhoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CAIXATRABALHOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHODTABERTURA",gxz:"Z3437CaixaTrabalhoDtAbertura",gxold:"O3437CaixaTrabalhoDtAbertura",gxvar:"A3437CaixaTrabalhoDtAbertura",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3437CaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3437CaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHODTABERTURA",row || gx.fn.currentGridRowImpl(51),gx.O.A3437CaixaTrabalhoDtAbertura,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3437CaixaTrabalhoDtAbertura=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CAIXATRABALHODTABERTURA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CAIXATRABALHODTFECHAMENTO",gxz:"Z3438CaixaTrabalhoDtFechamento",gxold:"O3438CaixaTrabalhoDtFechamento",gxvar:"A3438CaixaTrabalhoDtFechamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3438CaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z3438CaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CAIXATRABALHODTFECHAMENTO",row || gx.fn.currentGridRowImpl(51),gx.O.A3438CaixaTrabalhoDtFechamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3438CaixaTrabalhoDtFechamento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CAIXATRABALHODTFECHAMENTO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cCaixaTrabalhoEmpresaId = "" ;
   this.ZV6cCaixaTrabalhoEmpresaId = "" ;
   this.OV6cCaixaTrabalhoEmpresaId = "" ;
   this.AV7cCaixaTrabalhoNumeroLoja = 0 ;
   this.ZV7cCaixaTrabalhoNumeroLoja = 0 ;
   this.OV7cCaixaTrabalhoNumeroLoja = 0 ;
   this.AV8cCaixaTrabalhoSequenciaECF = 0 ;
   this.ZV8cCaixaTrabalhoSequenciaECF = 0 ;
   this.OV8cCaixaTrabalhoSequenciaECF = 0 ;
   this.AV9cCaixaTrabalhoId = 0 ;
   this.ZV9cCaixaTrabalhoId = 0 ;
   this.OV9cCaixaTrabalhoId = 0 ;
   this.AV10cCaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.ZV10cCaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.OV10cCaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.AV11cCaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.ZV11cCaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.OV11cCaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.AV12cPDVCodigo = 0 ;
   this.ZV12cPDVCodigo = 0 ;
   this.OV12cPDVCodigo = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z3442CaixaTrabalhoEmpresaId = "" ;
   this.O3442CaixaTrabalhoEmpresaId = "" ;
   this.Z5776CaixaTrabalhoNumeroLoja = 0 ;
   this.O5776CaixaTrabalhoNumeroLoja = 0 ;
   this.Z5777CaixaTrabalhoSequenciaECF = 0 ;
   this.O5777CaixaTrabalhoSequenciaECF = 0 ;
   this.Z3443CaixaTrabalhoId = 0 ;
   this.O3443CaixaTrabalhoId = 0 ;
   this.Z3437CaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.O3437CaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.Z3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.O3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.AV6cCaixaTrabalhoEmpresaId = "" ;
   this.AV7cCaixaTrabalhoNumeroLoja = 0 ;
   this.AV8cCaixaTrabalhoSequenciaECF = 0 ;
   this.AV9cCaixaTrabalhoId = 0 ;
   this.AV10cCaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.AV11cCaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.AV12cPDVCodigo = 0 ;
   this.AV13pCaixaTrabalhoEmpresaId = "" ;
   this.AV14pCaixaTrabalhoNumeroLoja = 0 ;
   this.AV15pCaixaTrabalhoSequenciaECF = 0 ;
   this.AV16pCaixaTrabalhoId = 0 ;
   this.A3434PDVCodigo = 0 ;
   this.AV5LinkSelection = "" ;
   this.A3442CaixaTrabalhoEmpresaId = "" ;
   this.A5776CaixaTrabalhoNumeroLoja = 0 ;
   this.A5777CaixaTrabalhoSequenciaECF = 0 ;
   this.A3443CaixaTrabalhoId = 0 ;
   this.A3437CaixaTrabalhoDtAbertura = gx.date.nullDate() ;
   this.A3438CaixaTrabalhoDtFechamento = gx.date.nullDate() ;
   this.Events = {"e131ok2_client": ["ENTER", true] ,"e141ok1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCaixaTrabalhoEmpresaId',fld:'vCCAIXATRABALHOEMPRESAID'},{av:'AV7cCaixaTrabalhoNumeroLoja',fld:'vCCAIXATRABALHONUMEROLOJA'},{av:'AV8cCaixaTrabalhoSequenciaECF',fld:'vCCAIXATRABALHOSEQUENCIAECF'},{av:'AV9cCaixaTrabalhoId',fld:'vCCAIXATRABALHOID'},{av:'AV10cCaixaTrabalhoDtAbertura',fld:'vCCAIXATRABALHODTABERTURA'},{av:'AV11cCaixaTrabalhoDtFechamento',fld:'vCCAIXATRABALHODTFECHAMENTO'},{av:'AV12cPDVCodigo',fld:'vCPDVCODIGO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A3442CaixaTrabalhoEmpresaId',fld:'CAIXATRABALHOEMPRESAID'},{av:'A5776CaixaTrabalhoNumeroLoja',fld:'CAIXATRABALHONUMEROLOJA'},{av:'A5777CaixaTrabalhoSequenciaECF',fld:'CAIXATRABALHOSEQUENCIAECF'},{av:'A3443CaixaTrabalhoId',fld:'CAIXATRABALHOID'}],[{av:'AV13pCaixaTrabalhoEmpresaId',fld:'vPCAIXATRABALHOEMPRESAID'},{av:'AV14pCaixaTrabalhoNumeroLoja',fld:'vPCAIXATRABALHONUMEROLOJA'},{av:'AV15pCaixaTrabalhoSequenciaECF',fld:'vPCAIXATRABALHOSEQUENCIAECF'},{av:'AV16pCaixaTrabalhoId',fld:'vPCAIXATRABALHOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCaixaTrabalhoEmpresaId',fld:'vCCAIXATRABALHOEMPRESAID'},{av:'AV7cCaixaTrabalhoNumeroLoja',fld:'vCCAIXATRABALHONUMEROLOJA'},{av:'AV8cCaixaTrabalhoSequenciaECF',fld:'vCCAIXATRABALHOSEQUENCIAECF'},{av:'AV9cCaixaTrabalhoId',fld:'vCCAIXATRABALHOID'},{av:'AV10cCaixaTrabalhoDtAbertura',fld:'vCCAIXATRABALHODTABERTURA'},{av:'AV11cCaixaTrabalhoDtFechamento',fld:'vCCAIXATRABALHODTFECHAMENTO'},{av:'AV12cPDVCodigo',fld:'vCPDVCODIGO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCaixaTrabalhoEmpresaId',fld:'vCCAIXATRABALHOEMPRESAID'},{av:'AV7cCaixaTrabalhoNumeroLoja',fld:'vCCAIXATRABALHONUMEROLOJA'},{av:'AV8cCaixaTrabalhoSequenciaECF',fld:'vCCAIXATRABALHOSEQUENCIAECF'},{av:'AV9cCaixaTrabalhoId',fld:'vCCAIXATRABALHOID'},{av:'AV10cCaixaTrabalhoDtAbertura',fld:'vCCAIXATRABALHODTABERTURA'},{av:'AV11cCaixaTrabalhoDtFechamento',fld:'vCCAIXATRABALHODTFECHAMENTO'},{av:'AV12cPDVCodigo',fld:'vCPDVCODIGO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCaixaTrabalhoEmpresaId',fld:'vCCAIXATRABALHOEMPRESAID'},{av:'AV7cCaixaTrabalhoNumeroLoja',fld:'vCCAIXATRABALHONUMEROLOJA'},{av:'AV8cCaixaTrabalhoSequenciaECF',fld:'vCCAIXATRABALHOSEQUENCIAECF'},{av:'AV9cCaixaTrabalhoId',fld:'vCCAIXATRABALHOID'},{av:'AV10cCaixaTrabalhoDtAbertura',fld:'vCCAIXATRABALHODTABERTURA'},{av:'AV11cCaixaTrabalhoDtFechamento',fld:'vCCAIXATRABALHODTFECHAMENTO'},{av:'AV12cPDVCodigo',fld:'vCPDVCODIGO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cCaixaTrabalhoEmpresaId',fld:'vCCAIXATRABALHOEMPRESAID'},{av:'AV7cCaixaTrabalhoNumeroLoja',fld:'vCCAIXATRABALHONUMEROLOJA'},{av:'AV8cCaixaTrabalhoSequenciaECF',fld:'vCCAIXATRABALHOSEQUENCIAECF'},{av:'AV9cCaixaTrabalhoId',fld:'vCCAIXATRABALHOID'},{av:'AV10cCaixaTrabalhoDtAbertura',fld:'vCCAIXATRABALHODTABERTURA'},{av:'AV11cCaixaTrabalhoDtFechamento',fld:'vCCAIXATRABALHODTFECHAMENTO'},{av:'AV12cPDVCodigo',fld:'vCPDVCODIGO'}],[]];
   this.setVCMap("AV13pCaixaTrabalhoEmpresaId", "vPCAIXATRABALHOEMPRESAID", 0, "char");
   this.setVCMap("AV14pCaixaTrabalhoNumeroLoja", "vPCAIXATRABALHONUMEROLOJA", 0, "int");
   this.setVCMap("AV15pCaixaTrabalhoSequenciaECF", "vPCAIXATRABALHOSEQUENCIAECF", 0, "int");
   this.setVCMap("AV16pCaixaTrabalhoId", "vPCAIXATRABALHOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0de0());